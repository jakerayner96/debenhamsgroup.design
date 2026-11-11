// Shared helpers for the persona-test tools. Reads assets/ds/personas-data.js (the one source) without a browser.
import fs from 'fs'; import path from 'path'; import url from 'url'; import vm from 'vm';
export const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '../..');
export function load() {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/ds/personas-data.js'), 'utf8'), ctx);
  return ctx.window.DG_PERSONAS;
}
const ALIAS = { debs:'debenhams', deb:'debenhams', km:'karenmillen', 'karen-millen':'karenmillen', 'karen millen':'karenmillen', bh:'boohoo', bm:'boohooman', bhm:'boohooman', prettylittlething:'plt', 'pretty little thing':'plt' };
export function site(D, q) { q = String(q || '').toLowerCase().replace(/\.com$/, '').replace(/^www\./, ''); q = ALIAS[q] || q;
  const b = D.brands.find(b => b.slug === q || b.name.toLowerCase() === q); if (!b) throw new Error(`Unknown site "${q}". Sites: ${D.brands.map(b => b.slug).join(', ')}`); return b; }
// Device profile from the persona's Device fact. First device named wins; app = phone (note it); catch-all rotates.
export const DEVICES = { phone: { w: 390, h: 844, mobile: true, label: 'Phone 390×844' }, tablet: { w: 820, h: 1180, mobile: true, label: 'iPad 820×1180' }, laptop: { w: 1440, h: 900, mobile: false, label: 'Laptop 1440×900' } };
export function device(p, seed = Date.now()) {
  const f = (p.test.facts.find(f => f[0] === 'Device') || [])[1] || '';
  if (/^Rotates/i.test(f)) { const k = ['phone', 'laptop', 'tablet', 'phone'][seed % 4]; return { key: k, ...DEVICES[k], note: 'catch-all: rotated this run (' + f + ')', app: k === 'phone' && seed % 8 === 3 }; }
  const m = f.toLowerCase().match(/ipad|tablet|laptop|desktop|phone|iphone|android|app/); const w = m ? m[0] : 'phone';
  const key = /ipad|tablet/.test(w) ? 'tablet' : /laptop|desktop/.test(w) ? 'laptop' : 'phone';
  return { key, ...DEVICES[key], note: f, app: /\bapp\b/i.test(f) && !/(n't|not|never|no) use the app|no app/i.test(f) };
}
export const KINDS = { everyday: 'Everyday journey', christmas: 'Christmas', sale: 'Post-Christmas sale', bf: 'Black Friday' };
