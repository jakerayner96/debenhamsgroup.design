// Render DS catalogue components with sentinel token values and write a self-contained HTML per component for html_to_figma.
// usage: node cap.mjs [slug ...]   (no slugs = every component). Writes out/<slug>.html + sentinel.json + out/index.json
import { chromium } from '/Users/jake.rayner/Desktop/GROUP DESIGN SYSTEM/TOOLS/SITE scraper/node_modules/playwright/index.mjs';
import fs from 'fs'; import path from 'path';
const HERE = path.dirname(new URL(import.meta.url).pathname);
const REPO = path.resolve(HERE, '../..');
const vars = JSON.parse(fs.readFileSync(path.join(HERE, 'vars.json'), 'utf8')).vars;

/* sentinel values: every colour token gets a unique #01gg02-style colour; radii + weights get unique values */
const sentinel = { color: {}, radius: {}, style: {} };
let css = '';
const colorVars = vars.filter(v => v.type === 'COLOR');
colorVars.forEach((v, i) => {
  const g = (i % 250) + 3, b = 2 + Math.floor(i / 250) * 2; // r=1 marks a sentinel
  const hex = '#01' + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
  sentinel.color[hex] = v.name; css += `${v.css}:${hex};`;
});
const R = { 'radius/default': 3, 'radius/lg': 7, 'radius/pill': 999, 'ai/tag-radius': 998, 'dplus/radius': 5, 'price/save-r': 1 };
for (const [n, px] of Object.entries(R)) { const v = vars.find(x => x.name === n); sentinel.radius[px] = n; css += `${v.css}:${px}px;`; }
const W = { 'font/style-regular': ['--w-regular', 100], 'font/style-strong': ['--w-strong', 200], 'font/style-btn': ['--w-btn', 800], 'font/style-link': ['--link-w', 900] };
for (const [n, [cv, w]] of Object.entries(W)) { sentinel.style[w] = n; css += `${cv}:${w};`; }
fs.writeFileSync(path.join(HERE, 'sentinel.json'), JSON.stringify(sentinel));
const SENT = `.figcap[data-brand="sentinel"]{${css}}`;

const font = fs.readFileSync(path.join(HERE, 'fonts/geologica-latin.woff2')).toString('base64');
const FONT = `@font-face{font-family:'Geologica';font-style:normal;font-weight:100 900;src:url(data:font/woff2;base64,${font}) format('woff2')}`;
const mime = f => ({ '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif' })[path.extname(f).toLowerCase()] || 'application/octet-stream';
const dataUri = (f) => { try { return `data:${mime(f)};base64,` + fs.readFileSync(f).toString('base64'); } catch { return null; } };
const inlineCss = (txt, base) => txt.replace(/url\((['"]?)(?!data:|https?:|#)([^'")]+)\1\)/g, (m, q, u) => { const d = dataUri(path.resolve(base, u.split('?')[0])); return d ? `url("${d}")` : m; });

const harness = `<!doctype html><html data-brand="debenhams"><head><meta charset="utf-8">
<link rel="stylesheet" href="assets/ds/tokens.css"><link rel="stylesheet" href="assets/ds/components.css"><style>${FONT}${SENT}
body{margin:0;background:#fff}.figwrap{display:flex;flex-direction:column;gap:40px;padding:40px;align-items:flex-start}.figcap{font-family:var(--font-family-base);font-weight:var(--w-regular);color:var(--text-primary);display:inline-flex;flex-direction:column;align-items:flex-start;max-width:1440px;background:transparent}[data-figfix-before]::before,[data-figfix-after]::after{content:none!important}</style></head>
<body><div id="host" class="figwrap" data-brand="debenhams"></div>
${['dplus-logos', 'footer', 'header', 'delivery', 'ai-prompts', 'subscribe', 'catalogue', 'usp-live', 'usp'].map(s => `<script src="assets/ds/${s}.js"></script>`).join('')}
</body></html>`;
fs.writeFileSync(path.join(REPO, '_figcap.html'), harness);

const b = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
await p.goto('file://' + path.join(REPO, '_figcap.html')); await p.waitForTimeout(400);
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : await p.evaluate(() => window.DG_CATALOGUE.map(c => c.slug));
const cssText = [inlineCss(fs.readFileSync(path.join(REPO, 'assets/ds/tokens.css'), 'utf8'), path.join(REPO, 'assets/ds')),
  inlineCss(fs.readFileSync(path.join(REPO, 'assets/ds/components.css'), 'utf8'), path.join(REPO, 'assets/ds'))].join('\n');
const ICONS = {}; (function walk(d) { for (const f of fs.readdirSync(d)) { const q = path.join(d, f); if (fs.statSync(q).isDirectory()) walk(q); else if (f.endsWith('.svg')) ICONS[path.relative(path.join(REPO, 'assets/ds'), q)] = fs.readFileSync(q, 'utf8'); } })(path.join(REPO, 'assets/ds/icons'));
const index = fs.existsSync(path.join(HERE, 'out/index.json')) ? JSON.parse(fs.readFileSync(path.join(HERE, 'out/index.json'))) : {};
for (const slug of slugs) {
  const info = await p.evaluate(async ({ slug, ICONS }) => {
    const c = window.DG_CATALOGUE.find(x => x.slug === slug); const host = document.getElementById('host');
    const vs = c.variants.filter(v => (v.only ? v.only.includes('debenhams') : true) && !(v.not || []).includes('debenhams'));
    const seen = {}; host.innerHTML = vs.map(v => { let n = v.name.replace(/[=,\/]/g, ' ').trim(); seen[n] = (seen[n] || 0) + 1; if (seen[n] > 1) n += ' ' + seen[n]; return `<div class="figcap" data-brand="sentinel" data-name="${n.replace(/"/g, '')}">${v.html}</div>`; }).join('');
    if (window.DG_usp) window.DG_usp(host);
    if (window.DG_footer) host.querySelectorAll('[data-ftr]').forEach(el => window.DG_footer(el, 'debenhams'));
    if (window.DG_header) host.querySelectorAll('[data-hd-device]').forEach(el => window.DG_header(el, 'debenhams'));
    await new Promise(r => setTimeout(r, 300));
    // html_to_figma turns a one-child CSS grid (place-items:center icon boxes) into a Figma GRID with auto rows that
    // blow the box up; the same centring as flex captures as a clean auto-layout frame at its real size
    host.querySelectorAll('*').forEach(el => { const cs = getComputedStyle(el); if (!/grid/.test(cs.display) || el.children.length > 1) return;
      el.style.display = cs.display === 'inline-grid' ? 'inline-flex' : 'flex';
      el.style.alignItems = /center/.test(cs.alignItems) ? 'center' : /end/.test(cs.alignItems) ? 'flex-end' : /start/.test(cs.alignItems) ? 'flex-start' : 'stretch';
      el.style.justifyContent = /center/.test(cs.justifyItems + cs.justifyContent) ? 'center' : /end/.test(cs.justifyItems) ? 'flex-end' : 'flex-start'; });
    // CSS masks (tick, chevron, close glyphs painted as background + mask) don't capture: they come out as solid squares.
    // Swap each masked box (element or ::before/::after) for an inline SVG painted in its background colour.
    const svgOf = (url, colour) => {
      let src = url.startsWith('data:') ? (url.includes(';base64,') ? atob(url.split(',')[1]) : decodeURIComponent(url.slice(url.indexOf(',') + 1))) : ICONS[url.split('/assets/ds/').pop()];
      if (!src) return null;
      src = src.replace(/(fill|stroke)\s*=\s*(['"])(?!none)[^'"]*\2/g, `$1=$2${colour}$2`).replace(/(fill|stroke)\s*:\s*(?!none)[^;"']+/g, `$1:${colour}`);
      if (!/fill\s*=/.test(src.split('>')[0])) src = src.replace('<svg', `<svg fill="${colour}"`);
      return src;
    };
    let fx = 0;
    host.querySelectorAll('*').forEach(el => {
      for (const pse of [null, '::before', '::after']) {
        const cs = getComputedStyle(el, pse); const m = cs.webkitMaskImage || cs.maskImage;
        if (!m || m === 'none' || (pse && cs.content === 'none')) continue;
        const u = (m.match(/url\(["']?(.*?)["']?\)$/) || [])[1]; if (!u) continue;
        const svg = svgOf(u, cs.backgroundColor); if (!svg) continue;
        const box = document.createElement('span'); box.innerHTML = svg; const s = box.firstElementChild; if (!s) continue;
        s.setAttribute('width', cs.width); s.setAttribute('height', cs.height); s.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        if (cs.opacity !== '1') s.style.opacity = cs.opacity;
        if (pse) {
          Object.assign(s.style, { position: cs.position === 'static' ? 'relative' : cs.position, top: cs.top, left: cs.left, right: cs.right, bottom: cs.bottom, width: cs.width, height: cs.height, display: 'block', flex: 'none', pointerEvents: 'none' });
          if (cs.transform !== 'none') s.style.transform = cs.transform;
          el.setAttribute('data-figfix' + pse.replace('::', '-'), ''); pse === '::before' ? el.prepend(s) : el.append(s);
        } else { el.style.webkitMask = 'none'; el.style.mask = 'none'; el.style.background = 'transparent'; Object.assign(s.style, { width: '100%', height: '100%', display: 'block' }); el.append(s); }
        fx++;
      }
    });
    return { name: c.name, group: c.group, summary: c.summary, css: c.css, universal: !!c.universal, notOn: c.notOn || [], variants: [...host.querySelectorAll('.figcap')].map(x => x.dataset.name), html: host.outerHTML };
  }, { slug, ICONS });
  // inline <img src> + inline style url()
  const html = info.html.replace(/(<img[^>]*?\ssrc=")(?!data:|https?:)([^"]+)"/g, (m, a, u) => { const d = dataUri(path.resolve(REPO, u)); return d ? a + d + '"' : m; })
    .replace(/url\(&quot;(?!data:|https?:)([^&]+)&quot;\)|url\((?!['"&]|data:|https?:)([^)]+)\)/g, (m, u1, u2) => { const d = dataUri(path.resolve(REPO, u1 || u2)); return d ? `url(&quot;${d}&quot;)` : m; });
  fs.writeFileSync(path.join(HERE, 'out', slug + '.html'), `<!doctype html><html data-brand="debenhams"><head><meta charset="utf-8"><style>${FONT}\n${cssText}\n${SENT}
body{margin:0;background:#fff}.figwrap{display:flex;flex-direction:column;gap:40px;padding:40px;align-items:flex-start}.figcap{font-family:var(--font-family-base);font-weight:var(--w-regular);color:var(--text-primary);display:inline-flex;flex-direction:column;align-items:flex-start;max-width:1440px}
[data-figfix-before]::before,[data-figfix-after]::after{content:none!important}</style></head><body>${html}</body></html>`);
  const { html: _, ...meta } = info; index[slug] = meta;
  console.log(slug, info.variants.length, 'variants', Math.round(html.length / 1024) + 'KB');
}
fs.writeFileSync(path.join(HERE, 'out/index.json'), JSON.stringify(index, null, 1));
fs.unlinkSync(path.join(REPO, '_figcap.html'));
await b.close();
