// DG App Store Screenshot Exporter — local runner.
// The DS page (tools/app-store-screens/) is the interface; this drives the iOS Simulator / Android emulator
// on this Mac with Maestro and writes store-size PNGs into a Figma-ready folder tree.
// Start: node server.js (install.sh sets it up to start at login).
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const { spawn, execFile } = require('child_process');
const learn = require('./learn');

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
const DEVICES = [
  { key: 'iphone-69', store: 'appstore', platform: 'ios', label: 'iPhone 6.9in', name: 'iPhone 17 Pro Max', type: 'iPhone-17-Pro-Max', size: '1320 × 2868', required: true },
  { key: 'ipad-13', store: 'appstore', platform: 'ios', label: 'iPad 13in', name: 'iPad Pro 13-inch (M5)', type: 'iPad-Pro-13-inch-M5-12GB', size: '2064 × 2752', required: true, ipad: true },
  { key: 'play-phone', store: 'play', platform: 'android', label: 'Phone', avd: 'DG_Play_Phone', w: 1080, h: 1920, dpi: 420, size: '1080 × 1920', required: true },
  { key: 'play-7', store: 'play', platform: 'android', label: 'Tablet 7in', avd: 'DG_Play_Tablet_7', w: 1200, h: 1920, dpi: 320, size: '1200 × 1920' },
  { key: 'play-10', store: 'play', platform: 'android', label: 'Tablet 10in', avd: 'DG_Play_Tablet_10', w: 1600, h: 2560, dpi: 320, size: '1600 × 2560' },
];
const STORE_NAME = { appstore: 'App Store', play: 'Google Play' };
const LOCALES = { UK: 'en-GB', GB: 'en-GB', IE: 'en-IE', US: 'en-US', AU: 'en-AU', NZ: 'en-NZ', CA: 'en-CA', FR: 'fr-FR', BE: 'fr-BE', DE: 'de-DE', AT: 'de-AT', CH: 'de-CH',
  NL: 'nl-NL', SE: 'sv-SE', DK: 'da-DK', NO: 'nb-NO', FI: 'fi-FI', ES: 'es-ES', IT: 'it-IT', PL: 'pl-PL', PT: 'pt-PT', IL: 'he-IL', AE: 'en-AE', SA: 'ar-SA', IN: 'en-IN' };
const localeOf = s => s.locale || LOCALES[s.code] || 'en-GB';

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

/* ---------- brands (seed + local edits) ---------- */
const SEED = readJSON(path.join(RUNNER, 'brands.json'), {});
const brandFile = k => path.join(DATA, 'brands', k + '.json');
function brand(k) {
  if (exists(brandFile(k))) return readJSON(brandFile(k));
  const s = SEED[k] || (SEED._expoOnly || {})[k]; if (!s) return null;
  const b = { stores: [], bag: [], wishlist: [], screens: [{ id: 'home', name: 'Home', type: 'home', session: 'guest' }], ios: [], android: [], expo: [k], ...s, key: k };
  writeJSON(brandFile(k), b); return b;
}
const saveBrand = b => writeJSON(brandFile(b.key), b);
function allBrandKeys() { return [...new Set([...Object.keys(SEED).filter(k => !k.startsWith('_')), ...Object.keys(SEED._expoOnly || {}), ...fs.readdirSync(path.join(DATA, 'brands')).map(f => f.replace(/\.json$/, ''))])]; }
function brandFor({ appId, slug }) {
  for (const k of allBrandKeys()) { const b = brand(k); if (!b) continue;
    if (slug && (b.expo || []).includes(slug)) return b;
    if (appId && [...(b.ios || []), ...(b.android || [])].includes(appId)) return b; }
  return null;
}

/* ---------- secrets (macOS keychain) ---------- */
const KC = 'DG App Store Screens';
const getSecret = async a => { const r = await sh('security', ['find-generic-password', '-s', KC, '-a', a, '-w']); return r.ok ? r.out.trim() : ''; };
const setSecret = (a, v) => v ? sh('security', ['add-generic-password', '-U', '-s', KC, '-a', a, '-w', v]) : sh('security', ['delete-generic-password', '-s', KC, '-a', a]);

/* ---------- Maestro ---------- */
function maestro(d, file, env = {}, label) {
  if (stop) throw new Error('Stopped');
  const args = ['--device', d.id, 'test'];
  for (const [k, v] of Object.entries(env)) args.push('-e', `${k}=${v}`);
  args.push(file);
  return new Promise(res => {
    const p = spawn(MAESTRO, args, { env: ENV, cwd: FLOWS }); child = p; let tail = '';
    const on = b => { const t = String(b).replace(/\x1b\[[0-9;]*[A-Za-z]/g, ''); tail = (tail + t).slice(-4000);
      t.split('\n').filter(l => /FAILED/.test(l)).forEach(l => log(`   ⚠︎ ${label || file}: ${l.trim()}`)); };
    p.stdout.on('data', on); p.stderr.on('data', on);
    p.on('close', code => { child = null; res({ ok: code === 0, tail }); });
  });
}
async function flow(d, file, env, label) { const r = await maestro(d, file, env, label); return r.ok; }
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
  d = await ensureDevice(d); await shutdownAll(d.id);
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
    return { platform: 'ios', app, appId: await p('CFBundleIdentifier'), version: await p('CFBundleShortVersionString'), build: await p('CFBundleVersion'), appName: await p('CFBundleDisplayName') || await p('CFBundleName'), ipad: /2/.test(fam) };
  }
  if (/\.ipa$/.test(file)) throw new Error('.ipa files are device builds and cannot run in the simulator. Ask the dev for the "preview-ios-simulator" build.');
  if (/\.(aab|apk)$/.test(file)) {
    const m = /\.aab$/.test(file)
      ? (await sh('java', ['-jar', BUNDLETOOL, 'dump', 'manifest', `--bundle=${file}`])).out
      : (await sh(path.join(SDK, 'build-tools', fs.readdirSync(path.join(SDK, 'build-tools')).sort().pop(), 'aapt'), ['dump', 'badging', file])).out;
    const g = re => (m.match(re) || [])[1];
    return { platform: 'android', appId: g(/package="([^"]+)"/) || g(/package: name='([^']+)'/), version: g(/versionName="([^"]+)"/) || g(/versionName='([^']+)'/), build: g(/versionCode="([^"]+)"/) || g(/versionCode='([^']+)'/) };
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
  return addBuild({ brand: b.key, brandName: b.name, platform: e.platform, version: e.version, build: e.build, appId: e.appId, file, app: info.app, ipad: info.ipad, source: url, added: Date.now() });
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

/* ---------- app session: reset, language, store, sign in ---------- */
const appIdOn = (b, d, bd) => bd?.appId || (d.platform === 'ios' ? b.ios[0] : b.android[0]);
async function freshSession(d, APP, locale) {
  if (d.platform === 'ios') { await sh('xcrun', ['simctl', 'terminate', d.id, APP]); await sh('xcrun', ['simctl', 'keychain', d.id, 'reset']); }
  await flow(d, 'prep.yaml', { APP }, 'reset app');
  if (d.platform === 'ios') {
    await sh('xcrun', ['simctl', 'terminate', d.id, APP]);
    await sh('xcrun', ['simctl', 'launch', d.id, APP, '-AppleLanguages', `(${locale})`, '-AppleLocale', locale.replace('-', '_')]);
  } else {
    await sh(ADB, ['-s', d.id, 'shell', 'pm', 'grant', APP, 'android.permission.POST_NOTIFICATIONS']);   // no system prompt over the first screen
    await sh(ADB, ['-s', d.id, 'shell', 'cmd', 'locale', 'set-app-locales', APP, '--locales', locale]);
    await sh(ADB, ['-s', d.id, 'shell', 'am', 'force-stop', APP]);
    await sh(ADB, ['-s', d.id, 'shell', 'monkey', '-p', APP, '-c', 'android.intent.category.LAUNCHER', '1']);
  }
  await flow(d, 'wait.yaml', { APP }, 'open app');
}
async function signIn(d, b, APP) {
  const email = await getSecret(b.key + ':email'), pw = await getSecret(b.key + ':password');
  if (!email || !pw) { log(`⚠︎ No test account saved for ${b.name} — signed-in screens skipped (Screens tab > Test account).`); return false; }
  await flow(d, 'login.yaml', { APP, EMAIL: email, PW: pw }, 'sign in');
  if (d.ipad) await flow(d, 'tap-point.yaml', { APP, POINT: '43%,57%' }, 'dismiss Save Password');   // iPad: centred system sheet, not in the app's hierarchy
  return true;
}
async function discoverStores(d, b, APP) {
  await flow(d, 'stores-open.yaml', { APP }, 'open country list');
  const els = elements(await hierarchy(d)).map(e => e.text).filter(Boolean);
  const i = els.findIndex(t => /^change country\/region$/i.test(t)), j = els.findIndex((t, k) => k > i && /^CHANGE COUNTRY\/REGION$/.test(t));
  if (i < 0 || j < 0) { log('⚠︎ Could not open the Country/Region list in this app — add stores to the brand file, or this brand has one store.'); await flow(d, 'back-home.yaml', { APP }, 'home'); return b.stores; }
  const rows = els.slice(i + 1, j > i ? j : undefined).filter(t => /\b[A-Z]{2}\b/.test(t) && !/^(Back|nav)/.test(t));
  const stores = rows.map(t => ({ code: (t.match(/\b([A-Z]{2})\b(?!.*\b[A-Z]{2}\b)/) || [])[1] || t, label: rx(t) })).filter(s => s.code.length === 2);
  if (stores.length) { b.stores = stores; saveBrand(b); log(`Found ${stores.length} stores: ${stores.map(s => s.code).join(', ')}`); }
  else log('⚠︎ Could not read the country list — add stores in the Screens tab.');
  await flow(d, 'back-home.yaml', { APP }, 'home');
  return b.stores;
}
async function switchStore(d, APP, s) { await flow(d, 'store.yaml', { APP, STORE: s.label }, 'store ' + s.code); }

/* ---------- screens ---------- */
async function goTo(d, b, s, APP) {
  const p = s.params || {};
  switch (s.type) {
    case 'home': return flow(d, 'home.yaml', { APP }, s.name);
    case 'wishlist': return flow(d, 'wishlist.yaml', { APP }, s.name);
    case 'bag': return flow(d, 'bag.yaml', { APP }, s.name);
    case 'menu': return flow(d, 'brands.yaml', { APP, MENU: p.menu, ITEM: p.item }, s.name);
    case 'home-tile': return flow(d, 'premier.yaml', { APP, SWIPES: p.swipes || 5, TAP: p.tap || '50%,50%' }, s.name);
    case 'pdp': return p.fromWishlist ? flow(d, 'pdp.yaml', { APP, NAME: p.fromWishlist }, s.name) : flow(d, 'find.yaml', { APP, TERM: p.search, COLOUR: p.colour || 'zzz' }, s.name);
    case 'search': return flow(d, 'find.yaml', { APP, TERM: p.search, COLOUR: 'zzz' }, s.name);
    case 'learned': {
      await flow(d, 'home.yaml', { APP }, 'home');
      const f = path.join(FLOWS, `_learned-${b.key}-${s.id}.yaml`); fs.writeFileSync(f, learn.toYaml(s.steps || []));
      return flow(d, path.basename(f), { APP }, s.name);
    }
  }
  log(`⚠︎ ${s.name} has no route yet — Learn it from its reference first.`); return false;
}
const needsBag = l => l.some(s => s.type === 'bag' || s.setup === 'bag');
const needsWish = l => l.some(s => s.type === 'wishlist' || s.params?.fromWishlist || s.setup === 'wishlist');
async function setupBag(d, b, APP) { for (const it of b.bag || []) await flow(d, 'bag-add.yaml', { APP, TERM: it.search, COLOUR: it.colour || 'zzz', SIZE: it.size }, 'bag + ' + it.search.slice(0, 30)); }
async function setupWish(d, b, APP) { for (const it of b.wishlist || []) await flow(d, 'wish-add.yaml', { APP, TERM: it.search, COLOUR: it.colour || 'zzz' }, 'wishlist + ' + it.search.slice(0, 30)); }

/* ---------- export: every device × store × screen ---------- */
async function exportRun(o) {
  const b = brand(o.brand); const st = await deviceStatus();
  const devs = DEVICES.filter(d => o.devices.includes(d.key));
  const stores = (b.stores.length ? b.stores : [{ code: 'UK', label: 'UK' }]).filter(s => !o.stores?.length || o.stores.includes(s.code));
  const screens = b.screens.filter(s => o.screens.includes(s.id));
  const total = devs.length * stores.length * screens.length; let done = 0; const t0 = Date.now(); const manifest = [];
  const progress = cur => emit({ type: 'progress', done, total, cur, eta: done ? Math.round((Date.now() - t0) / done * (total - done) / 60000) : null });
  log(`▶ ${b.name} — ${devs.length} device sizes × ${stores.length} stores × ${screens.length} screens = ${total} screenshots`);
  for (const def of devs) {
    const bd = builds().find(x => x.brand === b.key && x.platform === def.platform && (!o.version || x.version === o.version));
    if (!bd) { log(`⚠︎ No ${def.platform === 'ios' ? 'iOS' : 'Android'} build for ${b.name} — skipping ${def.label}`); done += stores.length * screens.length; continue; }
    if (def.ipad && bd.ipad === false) { log(`This iOS build is iPhone-only — skipping iPad.`); done += stores.length * screens.length; continue; }
    progress(`Booting ${def.label}`);
    const d = await boot({ ...def, id: st.find(x => x.key === def.key)?.id }); await install(d, bd); const APP = appIdOn(b, d, bd);
    const base = path.join(OUT, b.name, `${bd.version} (${bd.build})`, STORE_NAME[def.store], `${def.label} ${def.size.replace(/ /g, '')}`);
    for (const s of stores) {
      const loc = localeOf(s); log(`— ${def.label} · ${s.code} (${loc})`);
      await freshSession(d, APP, loc); if (b.stores.length > 1) await switchStore(d, APP, s);
      const guest = screens.filter(x => x.session !== 'signed-in'), signed = screens.filter(x => x.session === 'signed-in');
      if (needsBag(guest)) await setupBag(d, b, APP);
      const take = async x => { progress(`${def.label} · ${s.code} · ${x.name}`);
        await goTo(d, b, x, APP); await wait(2500);
        const f = path.join(base, `${s.code} ${loc}`, `${String(b.screens.indexOf(x) + 1).padStart(2, '0')} ${safe(x.name)}.png`);
        await shot(d, f); done++; manifest.push({ store: STORE_NAME[def.store], device: def.label, size: def.size, locale: loc, storeCode: s.code, screen: x.name, file: path.relative(OUT, f) });
        emit({ type: 'shot', file: path.relative(OUT, f) }); progress(); };
      for (const x of guest) await take(x);
      if (signed.length) { if (await signIn(d, b, APP)) { if (needsWish(signed)) await setupWish(d, b, APP); for (const x of signed) await take(x); } else done += signed.length; }
    }
    writeJSON(path.join(OUT, b.name, `${bd.version} (${bd.build})`, 'manifest.json'), manifest);
  }
  await shutdownAll();
  log(`✅ Done — ${manifest.length} screenshots in ${path.join(OUT, b.name)}`); emit({ type: 'progress', done: total, total, cur: 'Done' });
  sh('open', [path.join(OUT, b.name)]);
}

/* ---------- learning a screen from its reference ---------- */
async function prepareFor(b, key, version) {
  const def = DEVICES.find(d => d.key === key);
  const bd = builds().find(x => x.brand === b.key && x.platform === def.platform && (!version || x.version === version));
  if (!bd) throw new Error(`Add a ${def.platform === 'ios' ? 'iOS' : 'Android'} build for ${b.name} first`);
  const st = await deviceStatus(); const d = await boot({ ...def, id: st.find(x => x.key === def.key)?.id }); await install(d, bd);
  return { d, APP: appIdOn(b, d, bd) };
}
async function learnScreen(o) {
  const b = brand(o.brand), s = b.screens.find(x => x.id === o.screen); if (!s?.ref) throw new Error('Add a reference screenshot to this screen first');
  const { d, APP } = await prepareFor(b, o.device || 'iphone-69', o.version);
  await freshSession(d, APP, 'en-GB');
  if (s.session === 'signed-in') { await signIn(d, b, APP); if (needsWish([s])) await setupWish(d, b, APP); }
  if (needsBag([s])) await setupBag(d, b, APP);
  await flow(d, 'home.yaml', { APP }, 'home');
  const res = await learn.run({ device: d, appId: APP, refFile: path.join(DATA, 'refs', b.key, s.ref), screenName: s.name, notes: s.notes,
    act: async cmd => { const f = path.join(FLOWS, '_step.yaml'); fs.writeFileSync(f, learn.toYaml([cmd])); return flow(d, '_step.yaml', { APP }, 'step'); },
    look: async () => { const f = path.join(DATA, 'previews', '_now.png'); await shot(d, f); return { png: f, els: elements(await hierarchy(d)) }; },
    log, shouldStop: () => stop, getKey: () => getSecret('anthropic-api-key') });
  if (res.ok) { s.type = 'learned'; s.steps = res.steps; s.learned = Date.now(); saveBrand(b); log(`✅ Learned "${s.name}" in ${res.steps.length} steps.`); }
  else log(`❌ Could not reach "${s.name}": ${res.reason}`);
  await shot(d, path.join(DATA, 'previews', b.key, s.id + '.png')); emit({ type: 'preview', brand: b.key, screen: s.id });
}
async function testScreen(o) {
  const b = brand(o.brand), s = b.screens.find(x => x.id === o.screen);
  const { d, APP } = await prepareFor(b, o.device || 'iphone-69', o.version);
  await freshSession(d, APP, 'en-GB');
  if (s.session === 'signed-in') { if (await signIn(d, b, APP) && needsWish([s])) await setupWish(d, b, APP); } else if (needsBag([s])) await setupBag(d, b, APP);
  await goTo(d, b, s, APP); await wait(2500);
  await shot(d, path.join(DATA, 'previews', b.key, s.id + '.png')); emit({ type: 'preview', brand: b.key, screen: s.id }); log(`✅ Test shot of "${s.name}" ready.`);
}

/* ---------- setup check ---------- */
async function doctor() {
  const ios = await iosList();
  const tok = await expoToken();
  return [
    { k: 'xcode', n: 'Xcode + iOS Simulator', ok: ios.length > 0, fix: 'Install Xcode from the Mac App Store, open it once, add the iOS platform.' },
    { k: 'studio', n: 'Android Studio + emulator', ok: exists(EMU) && exists(JBR), fix: 'Install Android Studio (developer.android.com/studio), run the setup wizard, then create any phone with a Google Play image.' },
    { k: 'maestro', n: 'Maestro', ok: exists(MAESTRO), fix: 'Run the install command again.' },
    { k: 'bundletool', n: 'bundletool (Android .aab)', ok: exists(BUNDLETOOL), fix: 'Run the install command again.' },
    { k: 'expo', n: 'Expo account (to read build links)', ok: !!tok, fix: 'In Terminal: npx eas-cli login — with an account that has access to debenhams-tech.' },
    { k: 'ai', n: 'Claude API key (to learn new screens)', ok: !!(process.env.ANTHROPIC_API_KEY || await getSecret('anthropic-api-key')), fix: 'Settings > Claude API key. Only needed for "Learn from reference".' },
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
  try { await fn(); } catch (e) { log('❌ ' + e.message); } finally { busy = null; emit({ type: 'busy', busy: null }); }
}
function sendFile(res, f, type) { if (!exists(f)) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'content-type': type || 'image/png', 'cache-control': 'no-store' }); fs.createReadStream(f).pipe(res); }

http.createServer(async (req, res) => {
  cors(req, res); if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
  const u = new URL(req.url, 'http://x'), P = u.pathname;
  try {
    if (P === '/') {   // same page, served from this Mac (no browser local-network prompt); assets still load from the DS site via <base>
      const html = await fetch(PAGE + '?t=' + Date.now()).then(r => r.text()).catch(() => null);
      if (!html) { res.writeHead(502, { 'content-type': 'text/plain' }); return res.end('Could not load the tool page from ' + PAGE + ' - check the internet connection.'); }
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(html.replace('<head>', `<head><base href="${PAGE}">`)); }
    if (P === '/api/events') { res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache' }); res.write(`data: ${JSON.stringify({ type: 'busy', busy })}\n\n`); clients.add(res); req.on('close', () => clients.delete(res)); return; }
    if (P === '/api/hello') return json(res, { ok: true, version: 1, out: OUT, busy });
    if (P === '/api/doctor') return json(res, await doctor());
    if (P === '/api/devices') return json(res, await deviceStatus());
    if (P === '/api/builds') return json(res, builds());
    if (P === '/api/brands') return json(res, allBrandKeys().map(k => brand(k)).filter(Boolean).map(b => ({ key: b.key, name: b.name, ds: b.ds, expo: b.expo || [], screens: b.screens.length, builds: builds().filter(x => x.brand === b.key).length })));
    if (P === '/api/brand') { const b = brand(u.searchParams.get('k')); if (!b) return json(res, { error: 'unknown brand' }, 404);
      return json(res, { ...b, hasAccount: !!(await getSecret(b.key + ':email')), accountEmail: await getSecret(b.key + ':email') }); }
    if (P === '/api/ref') return sendFile(res, path.join(DATA, 'refs', u.searchParams.get('b'), path.basename(u.searchParams.get('f'))));
    if (P === '/api/preview') return sendFile(res, path.join(DATA, 'previews', u.searchParams.get('b'), path.basename(u.searchParams.get('s')) + '.png'));
    if (P === '/api/shot') { const f = path.join(OUT, u.searchParams.get('f')); if (!f.startsWith(OUT)) { res.writeHead(403); return res.end(); } return sendFile(res, f); }
    if (P === '/api/stop') { stop = true; if (child) child.kill('SIGTERM'); log('⏹ Stopping after this step…'); return json(res, { ok: true }); }
    if (req.method !== 'POST') { res.writeHead(404); return res.end(); }

    if (P === '/api/upload') {                      // raw file body; ?kind=build | ref&brand=&screen=
      const kind = u.searchParams.get('kind'), name = path.basename(req.headers['x-file-name'] || 'upload.bin');
      const dir = kind === 'ref' ? path.join(DATA, 'refs', u.searchParams.get('brand')) : path.join(DATA, 'builds', '_incoming'); fs.mkdirSync(dir, { recursive: true });
      const f = path.join(dir, kind === 'ref' ? `${Date.now()}-${name.replace(/[^\w.-]+/g, '_')}` : name);
      await new Promise((ok, bad) => { const w = fs.createWriteStream(f); req.pipe(w); w.on('finish', ok); w.on('error', bad); });
      if (kind === 'ref') { const b = brand(u.searchParams.get('brand')); const sid = u.searchParams.get('screen');
        let s = sid && b.screens.find(x => x.id === sid);
        if (!s) { s = { id: 's' + Date.now().toString(36), name: name.replace(/\.(png|jpe?g)$/i, '').replace(/[-_]+/g, ' ').replace(/^\d+\s*/, '') || 'New screen', type: 'auto', session: 'guest' }; b.screens.push(s); }
        s.ref = path.basename(f); saveBrand(b); return json(res, { ok: true, screen: s }); }
      return job(res, 'Reading build', async () => { const bd = await addFromFile(f); log(`✅ ${bd.brandName} ${bd.platform === 'ios' ? 'iOS' : 'Android'} ${bd.version} (${bd.build}) added.`); emit({ type: 'builds' }); });
    }
    const o = await body(req);
    if (P === '/api/link') return job(res, 'Fetching build', async () => {
      for (const url of String(o.text || '').match(/https?:\/\/\S+/g) || []) { if (!/expo\.dev/.test(url)) { log(`Skipped ${url} — paste the Expo build link.`); continue; }
        const bd = await addFromLink(url.replace(/[)>.,]+$/, '')); log(`✅ ${bd.brandName} ${bd.platform === 'ios' ? 'iOS' : 'Android'} ${bd.version} (${bd.build}) ready.`); emit({ type: 'builds' }); } });
    if (P === '/api/brand/save') { const b = brand(o.key); for (const k of ['screens', 'stores', 'bag', 'wishlist']) if (o[k]) b[k] = o[k]; saveBrand(b); return json(res, b); }
    if (P === '/api/account') { await setSecret(o.brand + ':email', o.email); if (o.password !== undefined) await setSecret(o.brand + ':password', o.password); return json(res, { ok: true }); }
    if (P === '/api/settings') { if (o.anthropicKey !== undefined) await setSecret('anthropic-api-key', o.anthropicKey); return json(res, { ok: true }); }
    if (P === '/api/stores/discover') return job(res, 'Reading stores', async () => { const b = brand(o.brand); const { d, APP } = await prepareFor(b, o.device || 'iphone-69'); await freshSession(d, APP, 'en-GB'); await discoverStores(d, b, APP); emit({ type: 'brand', brand: b.key }); });
    if (P === '/api/learn') return job(res, 'Learning ' + o.screen, () => learnScreen(o).then(() => emit({ type: 'brand', brand: o.brand })));
    if (P === '/api/test') return job(res, 'Testing ' + o.screen, () => testScreen(o));
    if (P === '/api/export') return job(res, 'Exporting', () => exportRun(o));
    if (P === '/api/open') { sh('open', [o.path ? path.join(OUT, o.path) : OUT]); return json(res, { ok: true }); }
    res.writeHead(404); res.end();
  } catch (e) { json(res, { error: e.message }, 500); }
}).listen(PORT, '127.0.0.1', () => console.log(`DG App Store Screens runner on http://localhost:${PORT}`));
