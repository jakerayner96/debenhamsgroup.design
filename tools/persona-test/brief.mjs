#!/usr/bin/env node
// Print the test brief for a site's personas — what the persona-test skill follows on every run.
//   node tools/persona-test/brief.mjs <site> [persona,persona] [--k everyday,christmas,sale,bf] [--json] [--list]
//   e.g. node tools/persona-test/brief.mjs debenhams            → all 8 Debenhams personas, all 64 scenarios
//        node tools/persona-test/brief.mjs boohoo courtney --k bf
import { load, site, device, KINDS } from './lib.mjs';
const a = process.argv.slice(2); const flag = n => { const i = a.indexOf(n); if (i < 0) return null; const v = a[i + 1]; a.splice(i, 2); return v; };
const json = a.includes('--json'), list = a.includes('--list'); const ks = (flag('--k') || 'everyday,christmas,sale,bf').split(',');
const rest = a.filter(x => !x.startsWith('--')); const D = load();
if (!rest[0] || list) { console.log(D.brands.map(b => `${b.slug.padEnd(12)} ${b.name.padEnd(18)} ${b.personas.map(p => p.id).join(', ')}`).join('\n')); process.exit(0); }
const b = site(D, rest[0]); const want = rest[1] ? rest[1].toLowerCase().split(',') : null;
const ps = b.personas.filter(p => !want || want.includes(p.id) || want.includes(p.name.toLowerCase()));
if (!ps.length) throw new Error('No personas match ' + rest[1] + '. ' + b.slug + ': ' + b.personas.map(p => p.id).join(', '));
const seed = Date.now();
const out = ps.map(p => ({ id: p.id, label: p.label, role: p.role, kind: p.kind, head: p.head, headSub: p.headSub, chips: p.chips, desc: p.desc, sub: p.test.sub,
  device: device(p, seed), facts: p.test.facts, family: p.test.fam, angle: p.test.angle, agentQuestions: p.test.q, finding: p.finding, status: p.status.text,
  scenarios: p.scen.map((s, i) => ({ i, title: s.t, value: s.v, kind: s.k, goal: p.test.s[i].g, journey: p.test.s[i].st, watch: p.test.s[i].w })).filter(s => ks.includes(s.kind)) }));
if (json) { console.log(JSON.stringify({ site: b.slug, name: b.name, live: b.site, rules: b.test.rules, shareNote: b.test.shareNote, note: b.test.note, personas: out }, null, 1)); process.exit(0); }
const L = [];
L.push(`# Persona test brief · ${b.name} (${ps.length} persona${ps.length > 1 ? 's' : ''}, ${out.reduce((n, p) => n + p.scenarios.length, 0)} scenarios)`);
L.push(`Live site for reference: ${b.site}`, '', '## Ground rules for every run', ...b.test.rules.map(r => '- ' + r),
  '- On a prototype: never submit a real order or payment; stop at the payment step. Use the persona\'s test identity below, never real details.', '', `> ${b.test.note}`, '');
for (const p of out) {
  L.push(`---`, `## ${p.label} · ${p.role}${p.kind !== 'cohort' ? ' · ' + (p.kind === 'typical' ? 'TYPICAL CUSTOMER' : 'CATCH-ALL') : ''}`, `${p.sub}`, '',
    `**${p.head}** ${p.headSub} · ${p.chips.join(' · ')}`, '', p.desc, '',
    `**Run as:** ${p.device.label}${p.device.app ? ' (shops in the app: use the app build if the prototype has one, else mobile web)' : ''} · from "${p.device.note}"`, '',
    '**Profile**', ...p.facts.map(([k, v]) => `- ${k}: ${v}`), ...(p.family.length ? ['', '**Close family**', ...p.family.map(f => '- ' + f)] : []), '',
    `**Testing angle:** ${p.angle}`, ...(p.agentQuestions.length ? ['', '**Three questions they would ask a shopping agent** (use them on any agent / Ask Deb feature)', ...p.agentQuestions.map(q => `- "${q}"`)] : []),
    ...(p.finding ? ['', `**Last live finding:** ${p.finding.sev} ${p.finding.text} — re-check it on the prototype.`] : []), '');
  for (const s of p.scenarios) L.push(`### ${s.i + 1}. ${s.title} · ${s.value} · ${KINDS[s.kind]}`, s.goal, '', 'Journey:', ...s.journey.map((x, j) => `${j + 1}. ${x}`), '', 'What to watch for:', ...s.watch.map(x => `- [ ] ${x}`), '');
}
console.log(L.join('\n'));
