// "Learn from reference": Claude looks at the brand's reference screenshot and the live device, picks one action at a time
// (tap / swipe / type / back), and the runner records each action as a Maestro command. The recorded route is then replayed
// on every device size and language without the model.
const fs = require('fs');
const { execFileSync } = require('child_process');

const MODEL = 'claude-opus-5-5';
const MAX_STEPS = 25;

const TOOLS = [
  { name: 'tap', description: 'Tap one element. Prefer an element id from the list (works in every language and device size), then its exact text, and only use a point when the element has neither.', strict: true,
    input_schema: { type: 'object', additionalProperties: false, required: ['by', 'value', 'index', 'why'], properties: {
      by: { type: 'string', enum: ['id', 'text', 'point'] },
      value: { type: 'string', description: 'id or exact text from the element list, or a point as "x%,y%" (whole numbers)' },
      index: { type: 'integer', description: '0 unless several elements share that id/text and you need a later one' },
      why: { type: 'string' } } } },
  { name: 'swipe', description: 'Scroll the screen. "up" moves content up (reveals what is below).', strict: true,
    input_schema: { type: 'object', additionalProperties: false, required: ['direction', 'why'], properties: {
      direction: { type: 'string', enum: ['up', 'down', 'left', 'right'] }, why: { type: 'string' } } } },
  { name: 'type_text', description: 'Type into the focused field, optionally pressing the keyboard Search/Enter key afterwards.', strict: true,
    input_schema: { type: 'object', additionalProperties: false, required: ['text', 'submit'], properties: { text: { type: 'string' }, submit: { type: 'boolean' } } } },
  { name: 'back', description: 'Go back one screen.', strict: true, input_schema: { type: 'object', additionalProperties: false, properties: {} } },
  { name: 'done', description: 'The device now shows the same screen as the reference (same page and scroll position; live content such as banners, prices and products may differ).', strict: true,
    input_schema: { type: 'object', additionalProperties: false, required: ['match'], properties: { match: { type: 'string', description: 'what matches and what differs' } } } },
  { name: 'give_up', description: 'The reference screen cannot be reached in this build (feature missing, needs data you cannot create).', strict: true,
    input_schema: { type: 'object', additionalProperties: false, required: ['reason'], properties: { reason: { type: 'string' } } } },
];

const SYSTEM = `You drive a shopping app on a phone/tablet simulator to reach the screen shown in a REFERENCE screenshot, so the same screen can be captured for App Store listings.
Each turn you see the REFERENCE, the CURRENT screen, the list of on-screen elements (id, text, centre as % of the screen) and the steps taken so far. Call exactly one tool.
- Navigate like a shopper: tab bar (ids navHome, navSearch, navCart, navWishlist, navAccount), menus, search, tapping tiles.
- Prefer tapping by element id, then exact text; use a point only for image tiles without id or text. Recorded steps are replayed in other languages, so ids beat text.
- Match the page and scroll position. Live content (hero images, promotions, prices, product photos) changes daily — do not chase it.
- Dismiss pop-ups that are not in the reference (cookie, notifications, ratings).
- Call done as soon as the page and scroll position match. Call give_up if it is impossible.`;

const toYaml = steps => 'appId: ${APP}\n---\n' + steps.map(c => {
  const [k, v] = Object.entries(c)[0];
  if (v === null || (typeof v === 'object' && !Object.keys(v).length)) return `- ${k}`;
  if (typeof v !== 'object') return `- ${k}: ${JSON.stringify(v)}`;
  return `- ${k}:\n` + Object.entries(v).map(([a, b]) => `    ${a}: ${typeof b === 'object' ? JSON.stringify(b) : JSON.stringify(b)}`).join('\n');
}).join('\n') + '\n';

function toCommand(name, i) {
  if (name === 'tap') {
    const t = i.by === 'id' ? { id: i.value } : i.by === 'text' ? { text: i.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') } : { point: i.value };
    if (i.index) t.index = i.index; return [{ tapOn: t }, { waitForAnimationToEnd: { timeout: 6000 } }];
  }
  if (name === 'swipe') { const m = { up: ['50%,75%', '50%,30%'], down: ['50%,30%', '50%,75%'], left: ['85%,50%', '15%,50%'], right: ['15%,50%', '85%,50%'] }[i.direction];
    return [{ swipe: { start: m[0], end: m[1], duration: 600 } }, { waitForAnimationToEnd: { timeout: 4000 } }]; }
  if (name === 'type_text') return [{ inputText: i.text }, ...(i.submit ? [{ pressKey: 'Enter' }, { waitForAnimationToEnd: { timeout: 8000 } }] : [])];
  if (name === 'back') return [{ back: null }, { waitForAnimationToEnd: { timeout: 4000 } }];
  return [];
}
const small = png => {         // ~1000px tall JPEG keeps each request light
  const out = png.replace(/\.png$/, '-s.jpg');
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '70', '-Z', '1000', png, '--out', out], { stdio: 'ignore' });
  return fs.readFileSync(out).toString('base64');
};

async function run({ device, refFile, screenName, notes, act, look, log, shouldStop, getKey }) {
  let Anthropic; try { Anthropic = require('@anthropic-ai/sdk'); Anthropic = Anthropic.default || Anthropic; }
  catch { return { ok: false, reason: 'The Claude SDK is not installed — run the install command again.' }; }
  const apiKey = process.env.ANTHROPIC_API_KEY || await getKey();
  if (!apiKey) return { ok: false, reason: 'Add a Claude API key in Settings to learn screens.' };
  const client = new Anthropic({ apiKey });
  const ref = small(refFile.endsWith('.png') ? refFile : (() => { const p = refFile + '.png'; execFileSync('sips', ['-s', 'format', 'png', refFile, '--out', p], { stdio: 'ignore' }); return p; })());
  const steps = [], history = [];
  log(`🧠 Learning "${screenName}" on ${device.label}…`);
  for (let n = 1; n <= MAX_STEPS; n++) {
    if (shouldStop()) return { ok: false, reason: 'stopped' };
    const now = await look();
    const list = now.els.map(e => `${e.id ? `id=${e.id} ` : ''}${e.text ? `"${e.text}" ` : ''}@${e.x}%,${e.y}%`).join('\n');
    const msg = await client.beta.messages.create({
      model: MODEL, max_tokens: 16000,
      thinking: { type: 'adaptive' }, output_config: { effort: 'medium' },
      betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default',
      system: SYSTEM, tools: TOOLS, tool_choice: { type: 'auto' },
      messages: [{ role: 'user', content: [
        { type: 'text', text: `Target screen: "${screenName}"${notes ? ` — ${notes}` : ''}. Device: ${device.label} (${device.platform}).\nREFERENCE:` },
        { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: ref } },
        { type: 'text', text: 'CURRENT:' },
        { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data: small(now.png) } },
        { type: 'text', text: `Elements on screen:\n${list || '(none readable)'}\n\nSteps so far:\n${history.join('\n') || '(none — starting on Home)'}\n\nStep ${n} of at most ${MAX_STEPS}: call one tool.` },
      ] }],
    });
    if (msg.stop_reason === 'refusal') return { ok: false, reason: 'the model declined this request' };
    const call = msg.content.find(b => b.type === 'tool_use');
    if (!call) { history.push(`${n}. (no action chosen)`); continue; }
    const i = call.input || {};
    if (call.name === 'done') { log(`   ✓ ${i.match}`); return { ok: true, steps }; }
    if (call.name === 'give_up') return { ok: false, reason: i.reason };
    const cmds = toCommand(call.name, i);
    if (!cmds.length) { history.push(`${n}. unknown tool ${call.name}`); continue; }
    const desc = call.name === 'tap' ? `tap ${i.by} "${i.value}" — ${i.why}` : call.name === 'swipe' ? `swipe ${i.direction} — ${i.why}` : call.name === 'type_text' ? `type "${i.text}"${i.submit ? ' + Enter' : ''}` : 'back';
    log(`   ${n}. ${desc}`);
    let ok = true; for (const c of cmds) ok = (await act(c)) && ok;
    history.push(`${n}. ${desc}${ok ? '' : '  → FAILED (element not found), try something else'}`);
    if (ok) steps.push(...cmds);
  }
  return { ok: false, reason: `not reached in ${MAX_STEPS} steps` };
}

module.exports = { run, toYaml };
