// DG App Store Screenshot Exporter — local runner (v2).
// The DS page (tools/app-store-screens/) is the interface; this drives the iOS Simulator / Android emulator on this Mac
// with Maestro and writes store-size PNGs into a Figma-ready folder tree. No API keys: screens are picked from a page
// list (deep links for PLP / PDP / content pages) or recognised from uploaded references with macOS's offline text recognition.
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const { spawn, execFile } = require('child_process');

const PORT = 4567;
const PAGE = 'https://jakerayner96.github.io/debenhamsgroup.design/tools/app-store-screens/';
const RUNNER = __dirname, FLOWS = path.join(RUNNER, 'flows');
const HOME = os.homedir();
const DATA = path.join(HOME, 'Library', 'Application Support', 'DG App Store Screens');
const OUT = path.join(HOME, 'Desktop', 'App Store Screens');
const SDK = path.join(HOME, 'Library', 'Android', 'sdk');
const ADB = path.join(SDK, 'platform-tools', 'adb'), EMU = path.join(SDK, 'emulator', 'emulator');
const JBR = '/Applications/Android Studio.app/Contents/jbr/Contents/Home';
const MAESTRO = path.join(HOME, '.maestro', 'bin', 'maestro');
const BUNDLETOOL = path.join(HOME, '.local', 'share', 'bundletool', 'bundletool.jar');
const ENV = { ...process.env, JAVA_HOME: process.env.JAVA_HOME || JBR, MAESTRO_CLI_NO_ANALYTICS: '1',
  PATH: [path.join(JBR, 'bin'), path.join(HOME, '.maestro', 'bin'), path.join(SDK, 'platform-tools'), '/usr/local/bin', '/opt/homebrew/bin', process.env.PATH].join(':') };
const ALLOWED_ORIGINS = [/^https:\/\/jakerayner96\.github\.io$/, /^http:\/\/localhost(:\d+)?$/, /^http:\/\/127\.0\.0\.1(:\d+)?$/];
for (const d of ['brands', 'refs', 'builds', 'previews']) fs.mkdirSync(path.join(DATA, d), { recursive: true });

/* ---------- the device matrix: what each store needs ---------- */
// The minimum each store requires (22 Oct, Jake): App Store iPhone 6.9in + iPad 13in, Google Play phone.
const DEVICES = [
  { key: 'iphone-69', store: 'appstore', platform: 'ios', label: 'iPhone 6.9in', name: 'iPhone 17 Pro Max', type: 'iPhone-17-Pro-Max', size: '1320 × 2868', required: true },
  { key: 'ipad-13', store: 'appstore', platform: 'ios', label: 'iPad 13in', name: 'iPad Pro 13-inch (M5)', type: 'iPad-Pro-13-inch-M5-12GB', size: '2064 × 2752', required: true, ipad: true },
  { key: 'play-phone', store: 'play', platform: 'android', label: 'Phone', avd: 'DG_Play_Phone', w: 1080, h: 1920, dpi: 420, size: '1080 × 1920', required: true },
];
const STORE_NAME = { appstore: 'App Store', play: 'Google Play' };
/* ---------- helpers ---------- */
const clients = new Set();
let busy = null, child = null, stop = false;
const emit = o => { for (const c of clients) c.write(`data: ${JSON.stringify(o)}\n\n`); };
function log(msg) { const line = `[${new Date().toLocaleTimeString('en-GB')}] ${msg}`; console.log(line); emit({ type: 'log', line }); }
function sh(cmd, args, o = {}) {
  return new Promise(res => execFile(cmd, args, { env: ENV, maxBuffer: 256 << 20, timeout: o.timeout || 900000, encoding: o.encoding || 'utf8', cwd: o.cwd },
    (err, out, se) => res({ ok: !err, out, err: String(se || '') + (err && !se ? err.message : '') })));
}
const exists = f => { try { fs.accessSync(f); return true } catch { return false } };
const wait = ms => new Promise(r => setTimeout(r, ms));
const safe = s => String(s).replace(/[\/\\:*?"<>|]+/g, '-').trim();
const rx = s => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const readJSON = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')) } catch { return d } };
const writeJSON = (f, o) => fs.writeFileSync(f, JSON.stringify(o, null, 2));

/* ---------- gentle mode: never push the Mac over (antivirus scanning simulator files made a 16 GB Mac seize up, 21 Oct) ---------- */
const CALM = os.cpus().length * 3;   // pause while the 1-minute load is above this (simulator + antivirus sits ~30; the freeze was 868)
const STEP_LIMIT = 4 * 60000;                 // longest a single Maestro step may run          // wait while the 1-minute load average is above this
async function calm() {
  let said = false;
  for (let i = 0; i < 60 && os.loadavg()[0] > CALM; i++) {
    if (!said) { log(`   …Mac is busy (load ${os.loadavg()[0].toFixed(0)}), pausing until it settles`); said = true; }
    await wait(10000);
  }
  await wait(1500);                            // a breather between steps
}

/* ---------- brands (seed + local edits) ---------- */
const SEED = readJSON(path.join(RUNNER, 'brands.json'), {});
const COUNTRIES = SEED._countries || {};
// The pages an app has. input = what the slot needs; signedIn = taken after signing in with the test account.
const PAGES = {
  home: { n: 'Home' },
  menu: { n: 'Menu (categories)', input: 'cat', hint: 'Optional: a top-level category to open its second level, e.g. Women' },
  plp: { n: 'Category page (PLP)', input: 'url', hint: 'Category URL from the website, e.g. https://www.boohooman.com/categories/mens-jeans' },
  search: { n: 'Search results', input: 'term', hint: 'Search term' },
  pdp: { n: 'Product page (PDP)', input: 'sku', hint: 'SKU (e.g. CMM33848) or product URL from the website' },
  bag: { n: 'Bag', input: 'items', hint: 'Products in the bag, one per line: SKU size, or product name | size' },
  wishlist: { n: 'Wishlist', input: 'skus', hint: 'Products to save, one per line: SKU or product name', signedIn: true },
  signin: { n: 'Sign in' },
  account: { n: 'My account', signedIn: true },
  content: { n: 'Content page', input: 'url', hint: 'Page URL from the website, e.g. https://www.boohooman.com/pages/informational/premier-delivery' },
};
const SCHEMA = 2;
const brandFile = k => path.join(DATA, 'brands', k + '.json');
const uid = () => 's' + Math.random().toString(36).slice(2, 8);
function seedBrand(k) {
  const s = SEED[k]; if (!s || k.startsWith('_')) return null;
  return { v: SCHEMA, key: k, ios: [], android: [], expo: [k], markets: ['UK'], ...s,
    screens: (s.screens || SEED._defaultScreens || [{ page: 'home' }]).map(x => ({ id: uid(), ...x })) };
}
function brand(k) {
  const saved = exists(brandFile(k)) ? readJSON(brandFile(k)) : null;
  if (saved && saved.v === SCHEMA) { const s = SEED[k] || {}; saved.markets = s.markets || saved.markets; return saved; }  // markets always follow the seed list
  const b = seedBrand(k); if (!b) return null;
  if (saved) { b.ios = [...new Set([...(b.ios || []), ...(saved.ios || [])])]; b.android = [...new Set([...(b.android || []), ...(saved.android || [])])]; }
  writeJSON(brandFile(k), b); return b;
}
const saveBrand = b => writeJSON(brandFile(b.key), { ...b, v: SCHEMA });
const allBrandKeys = () => Object.keys(SEED).filter(k => !k.startsWith('_'));
function brandFor({ appId, slug }) {
  for (const k of allBrandKeys()) { const b = brand(k);
    if (slug && (b.expo || []).includes(slug)) return b;
    if (appId && [...(b.ios || []), ...(b.android || [])].includes(appId)) return b; }
  return null;
}
const localeOf = code => (COUNTRIES[code] || {}).lang || 'en-GB';

/* ---------- secrets (macOS keychain) ---------- */
const KC = 'DG App Store Screens';
const getSecret = async a => { const r = await sh('security', ['find-generic-password', '-s', KC, '-a', a, '-w']); return r.ok ? r.out.trim() : ''; };
const setSecret = (a, v) => v ? sh('security', ['add-generic-password', '-U', '-s', KC, '-a', a, '-w', v]) : sh('security', ['delete-generic-password', '-s', KC, '-a', a]);

/* ---------- Maestro ---------- */
async function maestro(d, file, env = {}, label) {
  if (stop) throw new Error('Stopped');
  await calm();
  const args = ['--device', d.id, 'test'];
  for (const [k, v] of Object.entries(env)) args.push('-e', `${k}=${v}`);
  args.push(file);
  return await new Promise(res => {
    const p = spawn('nice', ['-n', '15', MAESTRO, ...args], { env: ENV, cwd: FLOWS }); child = p; let tail = '', hung = false;   // low priority
    const on = b => { const t = String(b).replace(/\x1b\[[0-9;]*[A-Za-z]/g, ''); tail = (tail + t).slice(-4000);
      t.split('\n').filter(l => /FAILED/.test(l)).forEach(l => log(`   ⚠︎ ${label || file}: ${l.trim()}`)); };
    p.stdout.on('data', on); p.stderr.on('data', on);
    const limit = setTimeout(() => { hung = true; p.kill('SIGKILL'); }, STEP_LIMIT);   // a step that hangs (Maestro's driver) must not stall the run
    p.on('close', code => { clearTimeout(limit); child = null; res({ ok: code === 0 && !hung, hung, tail }); });
  });
}
async function flow(d, file, env, label) {
  let r = await maestro(d, file, env, label);
  if (r.hung) { log(`   ⚠︎ ${label || file}: Maestro hung — retrying once`); await sh('pkill', ['-f', 'xcodebuild test-without-building']); await wait(3000); r = await maestro(d, file, env, label); }
  return r.ok;
}
async function hierarchy(d) {
  const r = await sh(MAESTRO, ['--device', d.id, 'hierarchy'], { timeout: 180000 });
  const i = r.out.indexOf('{'); try { return JSON.parse(r.out.slice(i)); } catch { return null; }
}
function elements(h) {
  const out = []; let W = 0, H = 0;
  const walk = n => { const a = n.attributes || {}; const m = (a.bounds || '').match(/\[(-?\d+),(-?\d+)\]\[(-?\d+),(-?\d+)\]/);
    if (m) { const [x1, y1, x2, y2] = m.slice(1).map(Number); if (!W && x2 > 0) { W = x2; H = y2; }
      const text = (a.text || a.accessibilityText || a['content-desc'] || '').trim(), id = (a['resource-id'] || '').trim();
      if ((text || id) && x2 > x1 && y2 > y1 && W) out.push({ id, text: text.slice(0, 80), x: Math.round((x1 + x2) / 2 / W * 100), y: Math.round((y1 + y2) / 2 / H * 100), clickable: a.clickable === 'true' }); }
    (n.children || []).forEach(walk); };
  if (h) walk(h); const seen = new Set();
  return out.filter(e => e.y >= 0 && e.y <= 100 && !/^\d+%$/.test(e.text)).filter(e => { const k = e.id + '|' + e.text; if (seen.has(k)) return false; seen.add(k); return true; }).slice(0, 150);
}

/* ---------- devices ---------- */
async function iosList() { const r = await sh('xcrun', ['simctl', 'list', 'devices', 'available', '-j']); if (!r.ok) return [];
  const l = []; for (const [rt, ds] of Object.entries(JSON.parse(r.out).devices)) for (const x of ds) l.push({ ...x, runtime: rt }); return l; }
async function androidRunning() {
  const l = {}; for (const line of (await sh(ADB, ['devices'])).out.split('\n')) { const [serial, st] = line.split('\t'); if (st !== 'device') continue;
    const n = (await sh(ADB, ['-s', serial, 'emu', 'avd', 'name'])).out.split('\n')[0].trim(); l[n] = serial; } return l;
}
async function deviceStatus() {
  const ios = await iosList(), run = exists(ADB) ? await androidRunning() : {};
  const avds = exists(EMU) ? (await sh(EMU, ['-list-avds'])).out.split('\n').map(s => s.trim()).filter(Boolean) : [];
  return DEVICES.map(d => d.platform === 'ios'
    ? (s => ({ ...d, ready: !!s, booted: s?.state === 'Booted', id: s?.udid }))(ios.find(x => x.name === d.name))
    : ({ ...d, ready: avds.includes(d.avd), booted: !!run[d.avd], id: run[d.avd] }));
}
async function ensureDevice(d) {
  if (d.platform === 'ios') {
    let s = (await iosList()).find(x => x.name === d.name);
    if (!s) {
      log(`Creating the ${d.name} simulator…`);
      const rts = JSON.parse((await sh('xcrun', ['simctl', 'list', 'runtimes', '-j'])).out).runtimes.filter(r => r.isAvailable && /iOS/.test(r.name));
      const rt = rts[rts.length - 1]; if (!rt) throw new Error('No iOS runtime installed — Xcode > Settings > Components > iOS');
      const types = JSON.parse((await sh('xcrun', ['simctl', 'list', 'devicetypes', '-j'])).out).devicetypes;
      const t = types.find(x => x.name === d.name) || types.find(x => x.name.startsWith(d.name.replace(/ \(.*/, '')));
      if (!t) throw new Error(`This Xcode has no ${d.name} device type — update Xcode.`);
      const c = await sh('xcrun', ['simctl', 'create', d.name, t.identifier, rt.identifier]); if (!c.ok) throw new Error(c.err);
      s = (await iosList()).find(x => x.name === d.name);
    }
    return { ...d, id: s.udid };
  }
  const dir = path.join(HOME, '.android', 'avd', d.avd + '.avd');
  if (!exists(dir)) {
    log(`Creating the ${d.label} Android emulator (${d.size})…`);
    const img = fs.readdirSync(path.join(SDK, 'system-images')).sort().reverse().map(api => {
      for (const tag of ['google_apis_playstore', 'google_apis']) { const p = path.join(SDK, 'system-images', api, tag, 'arm64-v8a'); if (exists(p)) return { api, tag, rel: `system-images/${api}/${tag}/arm64-v8a/` }; } }).find(Boolean);
    if (!img) throw new Error('No Android system image — Android Studio > Device Manager > create any device with a Google Play image first.');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'config.ini'), [`AvdId=${d.avd}`, `avd.ini.displayname=DG ${d.label}`, 'abi.type=arm64-v8a', 'hw.cpu.arch=arm64', `image.sysdir.1=${img.rel}`,
      `tag.id=${img.tag}`, `PlayStore.enabled=${img.tag.includes('playstore')}`, `hw.lcd.width=${d.w}`, `hw.lcd.height=${d.h}`, `hw.lcd.density=${d.dpi}`, 'hw.keyboard=yes',
      'hw.ramSize=2048', 'disk.dataPartition.size=6G', 'hw.gpu.enabled=yes', 'hw.gpu.mode=auto', 'showDeviceFrame=no', 'skin.name=' + d.w + 'x' + d.h, 'skin.path=_no_skin', 'fastboot.forceColdBoot=no'].join('\n') + '\n');
    fs.writeFileSync(path.join(HOME, '.android', 'avd', d.avd + '.ini'), `avd.ini.encoding=UTF-8\npath=${dir}\npath.rel=avd/${d.avd}.avd\ntarget=${img.api}\n`);
  }
  const run = await androidRunning(); return { ...d, id: run[d.avd] };
}
async function shutdownAll(except) {
  for (const s of await iosList()) if (s.state === 'Booted' && s.udid !== except) { log(`Shutting down ${s.name} (one device at a time keeps the Mac responsive)`); await sh('xcrun', ['simctl', 'shutdown', s.udid]); }
  const run = exists(ADB) ? await androidRunning() : {};
  for (const [n, serial] of Object.entries(run)) if (serial !== except) { log(`Shutting down Android ${n}`); await sh(ADB, ['-s', serial, 'emu', 'kill']); }
}
async function boot(d) {
  d = await ensureDevice(d); await shutdownAll(d.id); await calm();
  if (d.platform === 'ios') {
    log(`Booting ${d.name}…`); await sh('xcrun', ['simctl', 'boot', d.id]); await sh('xcrun', ['simctl', 'bootstatus', d.id, '-b']); await sh('open', ['-a', 'Simulator']);
  } else if (!d.id) {
    log(`Booting Android ${d.label}…`);
    spawn(EMU, ['-avd', d.avd, '-no-snapshot-save', '-no-boot-anim', '-no-audio', '-dns-server', '8.8.8.8,1.1.1.1']   // public DNS: a Mac VPN's resolver often fails inside the emulator
     , { env: ENV, detached: true, stdio: 'ignore' }).unref();
    for (let i = 0; i < 120 && !d.id; i++) { await wait(3000); d.id = (await androidRunning())[d.avd]; }
    if (!d.id) throw new Error('Android emulator did not start');
    for (let i = 0; i < 120; i++) { if ((await sh(ADB, ['-s', d.id, 'shell', 'getprop', 'sys.boot_completed'])).out.trim() === '1') break; await wait(3000); }
    await wait(8000);
  }
  await statusBar(d);
  if (d.ipad && !d._fs) { await flow(d, 'ipad-fullscreen.yaml', {}, 'iPad full-screen apps'); d._fs = true; }
  return d;
}
async function statusBar(d) {
  if (d.platform === 'ios') return sh('xcrun', ['simctl', 'status_bar', d.id, 'override', '--time', '9:41', '--dataNetwork', 'wifi', '--wifiMode', 'active', '--wifiBars', '3',
    '--cellularMode', 'active', '--cellularBars', '4', '--batteryState', 'charged', '--batteryLevel', '100']);
  const b = (...a) => sh(ADB, ['-s', d.id, 'shell', 'am', 'broadcast', '-a', 'com.android.systemui.demo', '-e', 'command', ...a]);
  await sh(ADB, ['-s', d.id, 'shell', 'settings', 'put', 'global', 'sysui_demo_allowed', '1']);
  await b('enter'); await b('clock', '-e', 'hhmm', '0941'); await b('battery', '-e', 'level', '100', '-e', 'plugged', 'false');
  await b('network', '-e', 'wifi', 'show', '-e', 'level', '4', '-e', 'mobile', 'hide'); await b('notifications', '-e', 'visible', 'false');
}
async function shot(d, file) {
  fs.mkdirSync(path.dirname(file), { recursive: true }); await statusBar(d); await wait(1200);
  if (d.platform === 'ios') await sh('xcrun', ['simctl', 'io', d.id, 'screenshot', file]);
  else fs.writeFileSync(file, (await sh(ADB, ['-s', d.id, 'exec-out', 'screencap', '-p'], { encoding: 'buffer' })).out);
  return file;
}

/* ---------- builds ---------- */
const BUILDS = path.join(DATA, 'builds', 'index.json');
const builds = () => readJSON(BUILDS, []);
function addBuild(b) { const l = builds().filter(x => !(x.brand === b.brand && x.platform === b.platform && x.version === b.version && x.build === b.build)); l.unshift(b); writeJSON(BUILDS, l.slice(0, 40)); return b; }
async function expoToken() { const s = readJSON(path.join(HOME, '.expo', 'state.json'), {}); return s.auth?.sessionSecret; }
async function resolveExpo(url) {
  const id = (url.match(/builds\/([0-9a-f-]{36})/) || [])[1]; if (!id) throw new Error('Not an Expo build link');
  const tok = await expoToken(); if (!tok) throw new Error('This Mac is not signed in to Expo. In Terminal run: npx eas-cli login');
  const q = `{ builds { byId(buildId: "${id}") { platform status buildProfile appVersion appBuildVersion appIdentifier artifacts { applicationArchiveUrl } app { slug name } } } }`;
  const r = await fetch('https://api.expo.dev/graphql', { method: 'POST', headers: { 'content-type': 'application/json', 'expo-session': tok }, body: JSON.stringify({ query: q }) }).then(r => r.json());
  if (r.errors) throw new Error(/authori/i.test(r.errors[0].message) ? 'Your Expo account cannot see that build — ask for access to debenhams-tech.' : r.errors[0].message);
  const b = r.data.builds.byId; if (b.status !== 'FINISHED') throw new Error(`That build is ${b.status.toLowerCase()} — wait for it to finish on Expo.`);
  return { id, platform: b.platform.toLowerCase(), profile: b.buildProfile, version: b.appVersion, build: b.appBuildVersion, appId: b.appIdentifier, slug: b.app.slug, appName: b.app.name, url: b.artifacts.applicationArchiveUrl };
}
async function inspectFile(file) {
  if (/\.(tar\.gz|tgz|zip|app)$/.test(file)) {
    let app = file;
    if (!/\.app$/.test(file)) { const x = file.replace(/\.(tar\.gz|tgz|zip)$/, '') + '-x'; fs.mkdirSync(x, { recursive: true });
      await sh(/zip$/.test(file) ? 'unzip' : 'tar', /zip$/.test(file) ? ['-oq', file, '-d', x] : ['-xzf', file, '-C', x]);
      app = (await sh('find', [x, '-maxdepth', '3', '-name', '*.app'])).out.split('\n')[0]; }
    if (!app) throw new Error('No .app inside that file. iOS needs the simulator build (.tar.gz) — .ipa files cannot run in a simulator.');
    const p = k => sh('/usr/libexec/PlistBuddy', ['-c', `Print :${k}`, path.join(app, 'Info.plist')]).then(r => r.out.trim());
    const fam = await p('UIDeviceFamily');
    const appId = await p('CFBundleIdentifier');
    const scheme = ((await p('CFBundleURLTypes')).match(/^\s{12}(\S+)$/gm) || []).map(x => x.trim()).find(x => x !== appId && !/^exp\+|googleusercontent|^fb\d/.test(x));
    return { platform: 'ios', app, scheme, appId, version: await p('CFBundleShortVersionString'), build: await p('CFBundleVersion'), appName: await p('CFBundleDisplayName') || await p('CFBundleName'), ipad: /2/.test(fam) };
  }
  if (/\.ipa$/.test(file)) throw new Error('.ipa files are device builds and cannot run in the simulator. Ask the dev for the "preview-ios-simulator" build.');
  if (/\.(aab|apk)$/.test(file)) {
    const m = /\.aab$/.test(file)
      ? (await sh('java', ['-jar', BUNDLETOOL, 'dump', 'manifest', `--bundle=${file}`])).out
      : (await sh(path.join(SDK, 'build-tools', fs.readdirSync(path.join(SDK, 'build-tools')).sort().pop(), 'aapt'), ['dump', 'badging', file])).out;
    const g = re => (m.match(re) || [])[1];
    const hosts = (m.match(/android:host="(www\.[^"]+)"/g) || []).map(x => x.slice(14, -1));
    const host = hosts.sort((a, b2) => hosts.filter(h => h === b2).length - hosts.filter(h => h === a).length)[0];
    return { platform: 'android', host, appId: g(/package="([^"]+)"/) || g(/package: name='([^']+)'/), version: g(/versionName="([^"]+)"/) || g(/versionName='([^']+)'/), build: g(/versionCode="([^"]+)"/) || g(/versionCode='([^']+)'/) };
  }
  throw new Error('Unknown file type — use the Expo link, a .tar.gz (iOS simulator) or a .aab / .apk.');
}
async function addFromLink(url) {
  const e = await resolveExpo(url);
  const b = brandFor({ slug: e.slug, appId: e.appId }); if (!b) throw new Error(`New Expo project "${e.slug}" — add it to brands.json`);
  if (e.platform === 'ios' && !/simulator/i.test(e.profile)) log(`⚠︎ The iOS build profile is "${e.profile}". Only simulator builds run in the Simulator — if install fails, ask the dev for the preview-ios-simulator build.`);
  const dir = path.join(DATA, 'builds', b.key, `${e.version}-${e.build}`); fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${e.platform}${(e.url.match(/\.(tar\.gz|aab|apk|zip|ipa)$/) || ['.bin'])[0]}`);
  if (!exists(file)) { log(`Downloading ${b.name} ${e.platform === 'ios' ? 'iOS' : 'Android'} ${e.version} (${e.build})…`);
    const r = await sh('curl', ['-fsSL', '-o', file + '.part', e.url], { timeout: 3600000 }); if (!r.ok) throw new Error('Download failed: ' + r.err); fs.renameSync(file + '.part', file); }
  const info = await inspectFile(file);
  rememberAppId(b, e.platform, e.appId);
  return addBuild({ brand: b.key, brandName: b.name, platform: e.platform, version: e.version, build: e.build, appId: e.appId, file, app: info.app, ipad: info.ipad, scheme: info.scheme, host: info.host, source: url, added: Date.now() });
}
async function addFromFile(file) {
  const info = await inspectFile(file);
  const b = brandFor({ appId: info.appId }); if (!b) throw new Error(`Unknown app id ${info.appId} — add it to a brand in brands.json`);
  const dir = path.join(DATA, 'builds', b.key, `${info.version}-${info.build}`); fs.mkdirSync(dir, { recursive: true });
  const to = path.join(dir, info.platform + path.basename(file).replace(/^[^.]*/, '')); if (to !== file) fs.renameSync(file, to);
  const again = to !== file ? await inspectFile(to) : info;
  return addBuild({ brand: b.key, brandName: b.name, ...again, file: to, source: 'upload', added: Date.now() });
}
function rememberAppId(b, platform, appId) { const k = platform === 'ios' ? 'ios' : 'android'; if (appId && !(b[k] || []).includes(appId)) { b[k] = [...(b[k] || []), appId]; saveBrand(b); } }
async function install(d, bd) {
  log(`Installing ${bd.brandName} ${bd.version} on ${d.label}…`);
  if (d.platform === 'ios') { const r = await sh('xcrun', ['simctl', 'install', d.id, bd.app]); if (!r.ok) throw new Error(r.err); return; }
  if (/\.apk$/.test(bd.file)) { const r = await sh(ADB, ['-s', d.id, 'install', '-r', bd.file]); if (!r.ok) throw new Error(r.err); return; }
  const ks = path.join(HOME, '.android', 'debug.keystore');
  if (!exists(ks)) await sh(path.join(JBR, 'bin', 'keytool'), ['-genkeypair', '-keystore', ks, '-storepass', 'android', '-alias', 'androiddebugkey', '-keypass', 'android', '-keyalg', 'RSA', '-validity', '10000', '-dname', 'CN=Android Debug,O=Android,C=US']);
  const apks = bd.file.replace(/\.aab$/, `-${d.key}.apks`);
  const r1 = await sh('java', ['-jar', BUNDLETOOL, 'build-apks', `--bundle=${bd.file}`, `--output=${apks}`, '--connected-device', `--device-id=${d.id}`, '--overwrite',
    `--ks=${ks}`, '--ks-pass=pass:android', '--ks-key-alias=androiddebugkey', '--key-pass=pass:android']); if (!r1.ok) throw new Error(r1.err);
  const r2 = await sh('java', ['-jar', BUNDLETOOL, 'install-apks', `--apks=${apks}`, `--device-id=${d.id}`]); if (!r2.ok) throw new Error(r2.err);
}


/* ---------- app links (PLP / PDP / content pages open directly) ---------- */
// Web URL → app path: strip the domain and any region prefix (/au/, /de/…); the region is set in the app instead.
function pathOf(u) {
  let p = String(u || '').trim().replace(/^https?:\/\/[^/]+/i, '').replace(/[?#].*$/, '').replace(/^\/+/, '');
  p = p.replace(/^(au|de|eu|fr|ie|nl|us|se|uk|row|ca|nz)\//i, '');
  return p;
}
const skuPath = sku => 'product/' + String(sku).trim().toLowerCase().replace(/^.*_/, '');
async function openPath(d, ctx, p) {
  if (d.platform === 'ios') {
    const scheme = ctx.bd.scheme || ctx.b.scheme || ctx.b.key;
    return flow(d, 'link-ios.yaml', { APP: ctx.APP, URL: `${scheme}://${p}` }, 'open ' + p);
  }
  const host = ctx.bd.host || ctx.b.web;
  const r = await sh(ADB, ['-s', d.id, 'shell', 'am', 'start', '-W', '-a', 'android.intent.action.VIEW', '-d', `https://${host}/${p}`, ctx.APP]);
  if (!r.ok || /Error/.test(r.out)) log(`   ⚠︎ open ${p}: ${(r.out + r.err).trim().split('\n').pop()}`);
  return flow(d, 'settle.yaml', { APP: ctx.APP }, 'open ' + p);
}

/* ---------- app session: reset, language, country, sign in ---------- */
async function freshSession(d, APP, locale) {
  if (d.platform === 'ios') { await sh('xcrun', ['simctl', 'terminate', d.id, APP], { timeout: 60000 }); await sh('xcrun', ['simctl', 'keychain', d.id, 'reset'], { timeout: 60000 }); }
  await flow(d, 'prep.yaml', { APP }, 'reset app');
  if (d.platform === 'ios') {
    await sh('xcrun', ['simctl', 'terminate', d.id, APP], { timeout: 60000 });
    await sh('xcrun', ['simctl', 'launch', d.id, APP, '-AppleLanguages', `(${locale})`, '-AppleLocale', locale.replace('-', '_')]);
  } else {
    await sh(ADB, ['-s', d.id, 'shell', 'pm', 'grant', APP, 'android.permission.POST_NOTIFICATIONS']);   // no system prompt over the first screen
    await sh(ADB, ['-s', d.id, 'shell', 'cmd', 'locale', 'set-app-locales', APP, '--locales', locale]);
    await sh(ADB, ['-s', d.id, 'shell', 'am', 'force-stop', APP]);
    await sh(ADB, ['-s', d.id, 'shell', 'monkey', '-p', APP, '-c', 'android.intent.category.LAUNCHER', '1']);
  }
  await flow(d, 'wait.yaml', { APP }, 'open app');
}
// The country list reads e.g. "BOOHOOMAN AU (Australia)" — match the two-letter code as a word.
const countryRow = code => `.*\\b${code}\\b.*`;
async function switchCountry(d, APP, code) { await flow(d, 'store.yaml', { APP, STORE: countryRow(code) }, 'country ' + code); }
async function signIn(d, b, APP) {
  const email = await getSecret(b.key + ':email'), pw = await getSecret(b.key + ':password');
  if (!email || !pw) { log(`⚠︎ No test account saved for ${b.name} — signed-in screens skipped (Screens > Test account).`); return false; }
  await toTabs(d, APP); await flow(d, 'login.yaml', { APP, EMAIL: email, PW: pw }, 'sign in');
  if (d.ipad) await flow(d, 'tap-point.yaml', { APP, POINT: '43%,57%' }, 'dismiss Save Password');   // iPad: centred system sheet, not in the app's hierarchy
  return true;
}

/* ---------- screens ---------- */
const isSignedIn = s => s.session ? s.session === 'signed-in' : !!PAGES[s.page]?.signedIn;
// A product line is a SKU (opens directly, works in every country) or a product name (searched in the app).
const isSku = t => /^[a-z]{2,4}\d{4,8}(-\d+)?$/i.test(t);
const bagItems = s => String(s.items || '').split('\n').map(l => l.trim()).filter(Boolean).map(l => {
  if (l.includes('|')) { const [a, b] = l.split('|').map(x => x.trim()); return isSku(a) ? { sku: a, size: b || 'M' } : { name: a, size: b || 'M' }; }
  const [a, ...rest] = l.split(/\s+/); return isSku(a) ? { sku: a, size: rest.join(' ') || 'M' } : { name: l, size: 'M' }; });
const skuList = s => String(s.skus || '').split('\n').map(x => x.trim()).filter(Boolean).flatMap(l => l.split(/[\s,]+/).every(isSku) ? l.split(/[\s,]+/) : [l]);
const openProduct = (d, ctx, it) => it.sku || isSku(it) ? openPath(d, ctx, skuPath(it.sku || it)) : flow(d, 'find.yaml', { APP: ctx.APP, TERM: it.name || it }, 'find ' + String(it.name || it).slice(0, 30));
function missing(s) {                      // what a slot still needs before it can be captured
  if (!PAGES[s.page]) return 'choose a page';
  if (s.page === 'plp' && !s.url) return 'add the category URL';
  if (s.page === 'content' && !s.url) return 'add the page URL';
  if (s.page === 'search' && !s.term) return 'add a search term';
  if (s.page === 'pdp' && !s.sku && !s.url && !s.label) return 'add the SKU or product URL';
  return '';
}
const toTabs = (d, APP) => flow(d, 'tabs.yaml', { APP }, 'back to tabs');
async function goTo(d, ctx, s) {
  const APP = ctx.APP;
  await toTabs(d, APP);                       // every screen starts from the tab bar (and link-opened pages get "< Home")
  switch (s.page) {
    case 'home': return flow(d, 'home.yaml', { APP }, 'Home');
    case 'menu': { const ok = await flow(d, 'menu.yaml', { APP }, 'Menu');
      return s.cat ? flow(d, 'menu-cat.yaml', { APP, CAT: s.cat }, 'Menu › ' + s.cat) : ok; }
    case 'plp': case 'content': return openPath(d, ctx, pathOf(s.url));
    case 'search': return flow(d, 'search.yaml', { APP, TERM: s.term }, 'Search');
    case 'pdp': { const ref = String(s.sku || s.url || '').trim(); let ok;
      if (/\/categories\//.test(ref)) { await openPath(d, ctx, pathOf(ref)); ok = await flow(d, 'pick.yaml', { APP, N: Math.max(0, (+s.pick || 1) - 1) }, `product ${s.pick || 1} on the category`); }
      else if (ref.includes('/')) ok = await openPath(d, ctx, pathOf(ref));          // product URL
      else if (ref) ok = await openPath(d, ctx, skuPath(ref));                       // SKU
      else ok = await flow(d, 'find.yaml', { APP, TERM: s.label }, 'find product');  // name (from an uploaded reference)
      if (s.colour) await flow(d, 'colour.yaml', { APP, COLOUR: s.colour }, 'colour ' + s.colour);
      return ok; }
    case 'bag': return flow(d, 'bag.yaml', { APP }, 'Bag');
    case 'wishlist': return flow(d, 'wishlist.yaml', { APP }, 'Wishlist');
    case 'signin': case 'account': return flow(d, 'account.yaml', { APP }, 'Account');
  }
  return false;
}
async function fillBag(d, ctx, list) {
  for (const it of list) { log(`   bag + ${it.sku || it.name} (${it.size})`); await toTabs(d, ctx.APP); await openProduct(d, ctx, it); await flow(d, 'bag-here.yaml', { APP: ctx.APP, SIZE: it.size }, 'add to bag'); }
}
async function fillWishlist(d, ctx, skus) {
  for (const it of skus) { log(`   wishlist + ${it}`); await toTabs(d, ctx.APP); await openProduct(d, ctx, it); await flow(d, 'wish-here.yaml', { APP: ctx.APP }, 'save to wishlist'); }
}
// One country on one device: guest screens first (the guest bag), then sign in for the rest.
async function captureSet(d, ctx, code, slots, outDir, onShot) {
  await freshSession(d, ctx.APP, localeOf(code));
  if (ctx.b.markets.length > 1) await switchCountry(d, ctx.APP, code);
  const guest = slots.filter(s => !isSignedIn(s)), signed = slots.filter(isSignedIn);
  const bag = guest.filter(s => s.page === 'bag').flatMap(bagItems); if (bag.length) await fillBag(d, ctx, bag);
  const shoot = async s => { await goTo(d, ctx, s); await scrollBy(d, ctx.APP, scrollOf(s)); await wait(2500); await onShot(s, await shot(d, path.join(outDir, `${String(s.n).padStart(2, '0')} ${safe(s.title)}.png`))); };
  for (const s of guest) await shoot(s);
  if (!signed.length) return;
  if (!(await signIn(d, ctx.b, ctx.APP))) { for (const s of signed) await onShot(s, null); return; }
  const wish = signed.filter(s => s.page === 'wishlist').flatMap(skuList); if (wish.length) await fillWishlist(d, ctx, wish);
  for (const s of signed) await shoot(s);
}
const titleOf = s => s.label || PAGES[s.page]?.n || 'Screen';
// Scroll N% of the screen height before the shot: slow drags of at most 50% so the page doesn't fling.
const scrollOf = s => s.scroll !== undefined && s.scroll !== '' ? Math.max(0, Math.min(500, +s.scroll || 0)) : (s.view === 'details' ? 40 : 0);
async function scrollBy(d, APP, pct) {
  for (let left = pct; left > 0; left -= 50) { const step = Math.min(50, left);
    await flow(d, 'scroll.yaml', { APP, FROM: '75%', TO: `${75 - step}%` }, `scroll ${step}%`); }
}

/* ---------- reference screenshots: offline text recognition (macOS Vision) ---------- */
const OCR_BIN = path.join(DATA, 'ocr');
async function ocr(file) {
  if (!exists(OCR_BIN)) { log('Preparing text recognition (one-off)…'); const r = await sh('xcrun', ['swiftc', '-O', path.join(RUNNER, 'ocr.swift'), '-o', OCR_BIN], { timeout: 300000 }); if (!r.ok) { log('⚠︎ Text recognition unavailable: ' + r.err.split('\n')[0]); return []; } }
  const r = await sh(OCR_BIN, [file], { timeout: 60000 }); if (!r.ok) return [];
  return r.out.split('\n').map(l => { const [y, x, ...t] = l.split('\t'); return { y: +y, x: +x, t: t.join('\t').trim() }; }).filter(o => o.t);
}
// Which page is this screenshot? Reads the words on it (any of our app languages) and suggests the page + a label.
function classify(lines) {
  const topL = lines.filter(l => l.y >= 2 && l.y <= 9 && !/^\d{1,2}[:.]\d{2}|app store|%$/i.test(l.t)), top = topL.map(l => l.t);
  const all = lines.map(l => l.t).join('\n'); const has = re => re.test(all);
  // the page title is the centred heading; the back label sits on the left
  const title = ((topL.filter(l => l.x >= 30 && l.x <= 70 && l.t.length > 2).sort((a, b) => Math.abs(a.x - 50) - Math.abs(b.x - 50))[0] || {}).t || '').replace(/^[<‹]\s*/, '');
  if (has(/^(bag|basket|panier|warenkorb|tasche|winkelmand|tas|varukorg|kundvagn)\b.*(\(\d+\))?$/im) || /^(bag|basket|panier)\s*\(\d+\)/i.test(title)) return { page: 'bag' };
  if (has(/^(wishlist|saved items|favoris|liste de souhaits|wunschliste|verlanglijst|önskelista)$/im)) return { page: 'wishlist' };
  if (has(/i have an account|j'ai un compte|ich habe ein konto|ik heb een account|jag har ett konto/i) && has(/password|mot de passe|passwort|wachtwoord|lösenord/i)) return { page: 'signin' };
  if (has(/order history|my details|historique des commandes|bestellverlauf|bestelgeschiedenis|orderhistorik/i)) return { page: 'account' };
  if (has(/\bfilter\b|filtrer|filtern|filteren|filtrera/i) && has(/\bsort\b|trier|sortieren|sorteren|sortera/i) && has(/items\)|articles\)|artikel\)|producten\)|artiklar\)/i))
    return /^(<|‹)?\s*(search|recherche|suche|zoeken|sök)\b/i.test(top.join(' ')) ? { page: 'search', term: title } : { page: 'plp', label: title };
  if (has(/select a size|size guide|add to bag|choisir une taille|größe wählen|kies een maat|välj storlek|notify me/i)) {
    const i = lines.findIndex(l => /^[£€$]\s?\d|\d[.,]\d{2}\s?(€|kr)/.test(l.t)); const name = i > 0 ? lines[i - 1].t : '';
    return { page: 'pdp', label: name.length > 6 ? name : '', view: lines.find(l => /size|taille|größe|maat|storlek/i.test(l.t))?.y < 80 ? 'details' : 'top' };
  }
  if (has(/^(sale|new|clothing|shoes|accessories|soldes|nouveautés|neu|nieuw|rea)$/im) && has(/find products|search|rechercher|suchen|zoeken|sök/i) && lines.filter(l => /^[A-Z &]{3,}$/.test(l.t)).length >= 5) return { page: 'menu' };
  if (has(/find products|rechercher des produits|produkte finden|producten zoeken|sök produkter/i) && lines.findIndex(l => /find products|rechercher|finden|zoeken|sök/i.test(l.t)) < 8 && !title) return { page: 'home' };
  if (has(/find products/i) && top.some(t => /sign in|hey|hi |good (morning|afternoon|evening)|bonjour|hallo/i.test(t))) return { page: 'home' };
  return { page: 'content', label: title };
}

/* ---------- export: every device × country × screen ---------- */
const STOP_MSG = 'Stopped';
async function exportRun(o) {
  const b = brand(o.brand); const st = await deviceStatus();
  const devs = DEVICES.filter(d => o.devices.includes(d.key));
  const markets = b.markets.filter(c => !o.markets?.length || o.markets.includes(c));
  const used = b.screens.filter(s => PAGES[s.page] && !missing(s)).map((s, i) => ({ ...s, n: i + 1, title: titleOf(s) }));
  const slots = used.filter(s => !o.screens?.length || o.screens.includes(s.id));
  const total = devs.length * markets.length * slots.length; let done = 0; const t0 = Date.now(); const manifest = [];
  const progress = cur => emit({ type: 'progress', done, total, cur, eta: done ? Math.round((Date.now() - t0) / done * (total - done) / 60000) : null });
  log(`▶ ${b.name} — ${devs.length} device sizes × ${markets.length} countries × ${slots.length} screens = ${total} screenshots`);
  for (const def of devs) {
    const bd = builds().find(x => x.brand === b.key && x.platform === def.platform && (!o.builds?.length || o.builds.includes(x.file)));
    if (!bd) { log(`⚠︎ No ${def.platform === 'ios' ? 'iOS' : 'Android'} build ticked for ${b.name} — skipping ${def.label}`); done += markets.length * slots.length; continue; }
    if (def.ipad && bd.ipad === false) { log('This iOS build is iPhone-only — skipping iPad.'); done += markets.length * slots.length; continue; }
    progress(`Booting ${def.label}`);
    const d = await boot({ ...def, id: st.find(x => x.key === def.key)?.id }); await install(d, bd);
    const ctx = { b, bd, APP: bd.appId || (def.platform === 'ios' ? b.ios[0] : b.android[0]) };
    const base = path.join(OUT, b.name, `${bd.version} (${bd.build})`, STORE_NAME[def.store], `${def.label} ${def.size.replace(/ /g, '')}`);
    for (const code of markets) {
      const c = COUNTRIES[code] || {}; log(`— ${def.label} · ${c.name || code} · ${c.language || localeOf(code)}`);
      await captureSet(d, ctx, code, slots, path.join(base, `${code} ${localeOf(code)}`), async (s, f) => {
        done++; progress(`${def.label} · ${code} · ${s.title}`);
        if (!f) return; manifest.push({ store: STORE_NAME[def.store], device: def.label, size: def.size, country: code, locale: localeOf(code), n: s.n, screen: s.title, file: path.relative(OUT, f) });
        emit({ type: 'shot', file: path.relative(OUT, f) }); });
    }
    writeJSON(path.join(OUT, b.name, `${bd.version} (${bd.build})`, 'manifest.json'), manifest);
  }
  await shutdownAll();
  log(`✅ Done — ${manifest.length} screenshots in ${path.join(OUT, b.name)}`); emit({ type: 'progress', done: total, total, cur: 'Done' });
  sh('open', [path.join(OUT, b.name)]);
}
async function testScreen(o) {                // one slot, UK, on one device → preview next to the reference
  const b = brand(o.brand), s = b.screens.find(x => x.id === o.screen); if (!s) throw new Error('Unknown screen');
  const m = missing(s); if (m) throw new Error(`"${titleOf(s)}": ${m} first`);
  const def = DEVICES.find(x => x.key === (o.device || 'iphone-69'));
  const bd = builds().find(x => x.brand === b.key && x.platform === def.platform && (!o.builds?.length || o.builds.includes(x.file))); if (!bd) throw new Error(`Add a ${def.platform === 'ios' ? 'iOS' : 'Android'} build for ${b.name} first (Builds tab)`);
  const st = await deviceStatus(); const d = await boot({ ...def, id: st.find(x => x.key === def.key)?.id }); await install(d, bd);
  const ctx = { b, bd, APP: bd.appId };
  await captureSet(d, ctx, b.markets[0] || 'UK', [{ ...s, n: 0, title: titleOf(s) }], path.join(DATA, 'previews', b.key, '_tmp'), async (x, f) => {
    if (f) { fs.renameSync(f, path.join(DATA, 'previews', b.key, s.id + '.png')); emit({ type: 'preview', brand: b.key, screen: s.id }); log(`✅ Test of "${titleOf(s)}" ready.`); } });
}

/* ---------- setup check ---------- */
async function doctor() {
  const ios = await iosList();
  return [
    { k: 'xcode', n: 'Xcode + iOS Simulator', ok: ios.length > 0, fix: 'Install Xcode from the Mac App Store, open it once, add the iOS platform.' },
    { k: 'studio', n: 'Android Studio + emulator', ok: exists(EMU) && exists(JBR), fix: 'Install Android Studio (developer.android.com/studio), run the setup wizard, then create any phone with a Google Play image.' },
    { k: 'maestro', n: 'Maestro', ok: exists(MAESTRO), fix: 'Run the install command again.' },
    { k: 'bundletool', n: 'bundletool (Android .aab)', ok: exists(BUNDLETOOL), fix: 'Run the install command again.' },
    { k: 'expo', n: 'Expo account (to read build links)', ok: !!(await expoToken()), fix: 'In Terminal: npx eas-cli login — with an account that has access to debenhams-tech.' },
  ];
}

/* ---------- http ---------- */
const body = req => new Promise(r => { let s = ''; req.on('data', c => s += c); req.on('end', () => { try { r(JSON.parse(s || '{}')) } catch { r({}) } }); });
function cors(req, res) {
  const o = req.headers.origin; if (o && ALLOWED_ORIGINS.some(r => r.test(o))) {
    res.setHeader('Access-Control-Allow-Origin', o); res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-file-name'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Private-Network', 'true'); }
}
const json = (res, o, code = 200) => { res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(o)); };
async function job(res, name, fn) {
  if (busy) return json(res, { error: `Busy: ${busy}. Wait for it, or press Stop.` }, 409);
  busy = name; stop = false; emit({ type: 'busy', busy }); json(res, { started: true });
  try { await fn(); } catch (e) { log(e.message === STOP_MSG ? '⏹ Stopped.' : '❌ ' + e.message); } finally { busy = null; emit({ type: 'busy', busy: null }); }
}
function sendFile(res, f, type) { if (!exists(f)) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'content-type': type || 'image/png', 'cache-control': 'no-store' }); fs.createReadStream(f).pipe(res); }
const brandOut = b => ({ ...b, countries: b.markets.map(c => ({ code: c, ...(COUNTRIES[c] || { name: c, lang: 'en-GB', language: '' }) })),
  screens: b.screens.map(s => ({ ...s, title: titleOf(s), missing: missing(s), signedIn: isSignedIn(s), hasPreview: exists(path.join(DATA, 'previews', b.key, s.id + '.png')) })) });

http.createServer(async (req, res) => {
  cors(req, res); if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
  const u = new URL(req.url, 'http://x'), P = u.pathname;
  try {
    if (P === '/') {   // same page, served from this Mac (no browser local-network prompt); assets still load from the DS site via <base>
      const html = await fetch(PAGE + '?t=' + Date.now()).then(r => r.text()).catch(() => null);
      if (!html) { res.writeHead(502, { 'content-type': 'text/plain' }); return res.end('Could not load the tool page from ' + PAGE + ' - check the internet connection.'); }
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(html.replace('<head>', `<head><base href="${PAGE}">`)); }
    if (P === '/api/events') { res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache' }); res.write(`data: ${JSON.stringify({ type: 'busy', busy })}\n\n`); clients.add(res); req.on('close', () => clients.delete(res)); return; }
    if (P === '/api/hello') return json(res, { ok: true, version: 2, out: OUT, busy });
    if (P === '/api/doctor') return json(res, await doctor());
    if (P === '/api/devices') return json(res, await deviceStatus());
    if (P === '/api/builds') return json(res, builds());
    if (P === '/api/pages') return json(res, PAGES);
    if (P === '/api/brands') return json(res, allBrandKeys().map(brand).filter(Boolean).map(b => ({ key: b.key, name: b.name, ds: b.ds, expo: b.expo, markets: b.markets, builds: builds().filter(x => x.brand === b.key).length })));
    if (P === '/api/brand') { const b = brand(u.searchParams.get('k')); if (!b) return json(res, { error: 'unknown brand' }, 404);
      const email = await getSecret(b.key + ':email'); return json(res, { ...brandOut(b), hasAccount: !!email, accountEmail: email }); }
    if (P === '/api/ref') return sendFile(res, path.join(DATA, 'refs', path.basename(u.searchParams.get('b')), path.basename(u.searchParams.get('f'))));
    if (P === '/api/preview') return sendFile(res, path.join(DATA, 'previews', path.basename(u.searchParams.get('b')), path.basename(u.searchParams.get('s')) + '.png'));
    if (P === '/api/shot') { const f = path.join(OUT, u.searchParams.get('f')); if (!f.startsWith(OUT)) { res.writeHead(403); return res.end(); } return sendFile(res, f); }
    if (P === '/api/stop') { stop = true; if (child) child.kill('SIGTERM'); log('⏹ Stopping after this step…'); return json(res, { ok: true }); }
    if (req.method !== 'POST') { res.writeHead(404); return res.end(); }

    if (P === '/api/upload') {                      // raw file body; ?kind=build | ref&brand=&screen=
      const kind = u.searchParams.get('kind'), name = path.basename(req.headers['x-file-name'] || 'upload.bin');
      const bk = path.basename(u.searchParams.get('brand') || '');
      const dir = kind === 'ref' ? path.join(DATA, 'refs', bk) : path.join(DATA, 'builds', '_incoming'); fs.mkdirSync(dir, { recursive: true });
      const f = path.join(dir, kind === 'ref' ? `${Date.now()}-${name.replace(/[^\w.-]+/g, '_')}` : name);
      await new Promise((ok, bad) => { const w = fs.createWriteStream(f); req.pipe(w); w.on('finish', ok); w.on('error', bad); });
      if (kind === 'ref') {
        const b = brand(bk); const sid = u.searchParams.get('screen');
        const guess = classify(await ocr(f));
        let s = sid && b.screens.find(x => x.id === sid);
        const norm = v => String(v || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
        if (!s) s = (guess.label && b.screens.find(x => !x.ref && x.page === guess.page && norm(x.label) === norm(guess.label)))   // same page + same name
          || b.screens.find(x => !x.ref && x.page === guess.page) || b.screens.find(x => !x.ref && !x.page);
        if (!s) { s = { id: uid() }; b.screens.push(s); }
        if (s.page !== guess.page) { for (const k of ['url', 'sku', 'term', 'items', 'skus', 'view']) delete s[k]; s.page = guess.page; }
        for (const [k, v] of Object.entries(guess)) if (v && !s[k]) s[k] = v;          // fill gaps, never overwrite what was typed
        s.ref = path.basename(f); s.detected = PAGES[guess.page]?.n; saveBrand(b);
        return json(res, { ok: true, screen: s, guess });
      }
      return job(res, 'Reading build', async () => { const bd = await addFromFile(f); log(`✅ ${bd.brandName} ${bd.platform === 'ios' ? 'iOS' : 'Android'} ${bd.version} (${bd.build}) added.`); emit({ type: 'builds' }); });
    }
    const o = await body(req);
    if (P === '/api/link') return job(res, 'Fetching build', async () => {
      for (const url of String(o.text || '').match(/https?:\/\/\S+/g) || []) { if (!/expo\.dev/.test(url)) { log(`Skipped ${url} — paste the Expo build link.`); continue; }
        const bd = await addFromLink(url.replace(/[)>.,]+$/, '')); log(`✅ ${bd.brandName} ${bd.platform === 'ios' ? 'iOS' : 'Android'} ${bd.version} (${bd.build}) ready.`); emit({ type: 'builds' }); } });
    if (P === '/api/brand/save') { const b = brand(o.key); if (o.screens) b.screens = o.screens.map(s => { const { title, missing: _m, signedIn, hasPreview, ...keep } = s; return keep; }); saveBrand(b); return json(res, brandOut(b)); }
    if (P === '/api/account') { await setSecret(o.brand + ':email', o.email); if (o.password) await setSecret(o.brand + ':password', o.password); return json(res, { ok: true }); }
    if (P === '/api/test') return job(res, 'Testing a screen', () => testScreen(o));
    if (P === '/api/export') return job(res, 'Exporting', async () => { for (const run of (o.runs || [o])) { if (stop) break; await exportRun({ ...o, ...run }); } });
    if (P === '/api/open') { sh('open', [o.path ? path.join(OUT, o.path) : OUT]); return json(res, { ok: true }); }
    res.writeHead(404); res.end();
  } catch (e) { json(res, { error: e.message }, 500); }
}).listen(PORT, '127.0.0.1', () => console.log(`DG App Store Screens runner on http://localhost:${PORT}`));
