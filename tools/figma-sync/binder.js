// Stored in the Figma file as _Pipeline/binder and run with new AsyncFunction('figma','args', src).
// args: { page, site, items:[{ slug, name, summary, css, variants:[...], ids:[...] }] }
const vars = await figma.variables.getLocalVariablesAsync();
const cols = await figma.variables.getLocalVariableCollectionsAsync();
const byName = {}; for (const v of vars) byName[v.name] = v;
const SENT = JSON.parse(byName['sentinel'].valuesByMode[Object.keys(byName['sentinel'].valuesByMode)[0]]);
const GAP = { 2: 'gap/0_5', 4: 'gap/1', 6: 'gap/1_5', 8: 'gap/2', 12: 'gap/3', 16: 'gap/4', 20: 'gap/5', 24: 'gap/6', 32: 'gap/8', 40: 'gap/10', 48: 'gap/12', 64: 'gap/16', 80: 'gap/20', 96: 'gap/24', 128: 'gap/32' };
const STY = { Thin: 'font/style-regular', ExtraLight: 'font/style-strong', ExtraBold: 'font/style-btn', Black: 'font/style-link' };
const DEB = { Thin: 'Light', ExtraLight: 'SemiBold', ExtraBold: 'SemiBold', Black: 'SemiBold' };
const firstMode = v => cols.find(c => c.id === v.variableCollectionId).modes[0].modeId;
async function raw(v) { let x = v.valuesByMode[firstMode(v)]; let g = 0; while (x && x.type === 'VARIABLE_ALIAS' && g++ < 5) { const t = await figma.variables.getVariableByIdAsync(x.id); x = t.valuesByMode[firstMode(t)]; } return x; }
const hx = c => '#01' + Math.round(c.g * 255).toString(16).padStart(2, '0') + Math.round(c.b * 255).toString(16).padStart(2, '0');
const isS = c => c && Math.round(c.r * 255) === 1 && SENT.color[hx(c)];
const stat = { bound: 0, raw: 0, miss: 0 };
async function paints(arr) {
  if (!Array.isArray(arr)) return arr; let ch = false; const out = [];
  for (let p of arr) {
    if (p.type === 'SOLID' && isS(p.color)) { const v = byName[SENT.color[hx(p.color)]]; if (v) { p = figma.variables.setBoundVariableForPaint(p, 'color', v); stat.bound++; ch = true; } else stat.miss++; }
    else if (p.type && p.type.startsWith('GRADIENT') && p.gradientStops.some(s => isS(s.color))) {
      const stops = []; for (const s of p.gradientStops) { if (isS(s.color)) { const r = await raw(byName[SENT.color[hx(s.color)]]); stops.push({ ...s, color: { r: r.r, g: r.g, b: r.b, a: s.color.a * r.a } }); stat.raw++; } else stops.push(s); }
      p = { ...p, gradientStops: stops }; ch = true;
    }
    out.push(p);
  }
  return ch ? out : arr;
}
// html_to_figma pins an explicit brand mode on frames and binds raw values to whatever variable matches in that mode
// (#000 → `new`, 16px → `price/line`). Strip all of it; only sentinel matches below are real token uses.
const TXT = ['fontSize', 'lineHeight', 'letterSpacing', 'paragraphSpacing', 'paragraphIndent', 'fontFamily', 'fontStyle', 'fontWeight'];
const unp = arr => Array.isArray(arr) && arr.some(p => p.boundVariables && p.boundVariables.color) ? arr.map(p => p.boundVariables && p.boundVariables.color ? figma.variables.setBoundVariableForPaint(p, 'color', null) : p) : arr;
function strip(n) {
  // unbind first, while the pinned mode still resolves each paint to the raw value the capture read; clear the mode last
  if ('fills' in n && n.fills !== figma.mixed) { const f = unp(n.fills); if (f !== n.fills) n.fills = f.filter(p => p.type !== 'IMAGE' || p.imageHash); }
  if ('strokes' in n) { const s = unp(n.strokes); if (s !== n.strokes) n.strokes = s; }
  if ('effects' in n && n.effects.some(e => e.boundVariables && e.boundVariables.color)) n.effects = n.effects.map(e => e.boundVariables && e.boundVariables.color ? figma.variables.setBoundVariableForEffect(e, 'color', null) : e);
  if (n.type === 'TEXT') {
    const L = n.characters.length; if (L) { for (const k of TXT) { try { n.setRangeBoundVariable(0, L, k, null); } catch (e) { } }
      for (const s of n.getStyledTextSegments(['fills'])) { const f = unp(s.fills); if (f !== s.fills) n.setRangeFills(s.start, s.end, f); } }
  }
  for (const k of Object.keys(n.boundVariables || {})) { if (['fills', 'strokes', 'effects', 'textRangeFills', ...TXT].includes(k)) continue; try { n.setBoundVariable(k, null); } catch (e) { } }
}
const clearModes = n => { if (n.explicitVariableModes) for (const cid of Object.keys(n.explicitVariableModes)) { const c = cols.find(x => x.id === cid); if (c) n.clearExplicitVariableModeForCollection(c); } };
// whole tree: unbind every node while the pinned modes still resolve, then clear the modes, then bind the sentinels
async function bindTree(root) { const all = [root, ...root.findAll()]; for (const n of all) { if (n.type === 'TEXT') for (const s of n.getStyledTextSegments(['fontName'])) await figma.loadFontAsync(s.fontName); strip(n); } for (const n of all) clearModes(n); for (const n of all) await bindNode(n); }
async function bindNode(n) {
  if (n.type === 'TEXT') for (const s of n.getStyledTextSegments(['fontName'])) await figma.loadFontAsync(s.fontName);
  if ('fills' in n && n.fills !== figma.mixed) { const f = await paints(n.fills); if (f !== n.fills) n.fills = f.filter(p => p.type !== 'IMAGE' || p.imageHash); }
  if ('strokes' in n) { const s = await paints(n.strokes); if (s !== n.strokes) n.strokes = s; }
  if ('effects' in n && n.effects.length) { let ch = false; const e = n.effects.map(ef => { if (ef.color && isS(ef.color)) { const v = byName[SENT.color[hx(ef.color)]]; if (v) { ch = true; stat.bound++; return figma.variables.setBoundVariableForEffect(ef, 'color', v); } } return ef; }); if (ch) n.effects = e; }
  if ('topLeftRadius' in n) for (const k of ['topLeftRadius', 'topRightRadius', 'bottomLeftRadius', 'bottomRightRadius']) { const nm = SENT.radius[String(Math.round(n[k]))]; if (nm && byName[nm]) { n.setBoundVariable(k, byName[nm]); stat.bound++; } }
  if ('layoutMode' in n && n.layoutMode !== 'NONE') for (const k of ['itemSpacing', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'counterAxisSpacing']) { if (!(k in n) || n[k] == null) continue; const nm = GAP[n[k]]; if (nm && byName[nm]) { try { n.setBoundVariable(k, byName[nm]); } catch (e) { } } }
  if (n.type === 'TEXT') {
    const segs = n.getStyledTextSegments(['fontName', 'fills']);
    for (const s of segs) await figma.loadFontAsync(s.fontName);
    for (const s of segs) {
      const f = await paints(s.fills); if (f !== s.fills) n.setRangeFills(s.start, s.end, f);
      const st = STY[s.fontName.style];
      if (s.fontName.family === 'Geologica') { n.setRangeBoundVariable(s.start, s.end, 'fontFamily', byName['font/family-base']); if (st) n.setRangeBoundVariable(s.start, s.end, 'fontStyle', byName[st]); }
      else if (st) { const fb = { family: s.fontName.family, style: DEB[s.fontName.style] }; try { await figma.loadFontAsync(fb); n.setRangeFontName(s.start, s.end, fb); } catch (e) { } }
    }
  }
}
// a text node with a font Figma doesn't have (system stacks captured as Arial / Times) can't be moved or edited: rebuild it in Inter
async function fixFonts(t) {
  let bad = false; for (const s of t.getStyledTextSegments(['fontName'])) { try { await figma.loadFontAsync(s.fontName); } catch (e) { bad = true; } }
  if (!bad) return;
  const segs = t.getStyledTextSegments(['fontName', 'fontSize', 'fills']); const nt = figma.createText();
  const fb = async st => { const f = { family: 'Inter', style: st.replace(/([a-z])([A-Z])/g, '$1 $2') }; try { await figma.loadFontAsync(f); return f; } catch (e) { await figma.loadFontAsync({ family: 'Inter', style: 'Regular' }); return { family: 'Inter', style: 'Regular' }; } };
  nt.fontName = await fb('Regular'); nt.characters = t.characters;
  for (const s of segs) { nt.setRangeFontName(s.start, s.end, await fb(s.fontName.style)); nt.setRangeFontSize(s.start, s.end, s.fontSize); nt.setRangeFills(s.start, s.end, s.fills); }
  nt.name = t.name; nt.textAlignHorizontal = t.textAlignHorizontal; nt.textAutoResize = t.textAutoResize; if (t.textAutoResize !== 'WIDTH_AND_HEIGHT') nt.resize(t.width, t.height);
  const p = t.parent, i = p.children.indexOf(t); p.insertChild(i, nt); nt.x = t.x; nt.y = t.y;
  if ('layoutSizingHorizontal' in t && p.layoutMode && p.layoutMode !== 'NONE') { try { nt.layoutSizingHorizontal = t.layoutSizingHorizontal; nt.layoutSizingVertical = t.layoutSizingVertical; } catch (e) { } }
  t.remove();
}
// every font any brand mode can resolve to
for (const f of ['Geologica', 'Jost', 'Roboto', 'Montserrat', 'Archivo', 'Lato']) for (const s of ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold']) { try { await figma.loadFontAsync({ family: f, style: s }); } catch (e) { } }
if (args.rebind) { for (const id of args.rebind) { const s = await figma.getNodeByIdAsync(id); await bindTree(s); } return { rebind: args.rebind, stat }; }
let page = figma.root.children.find(p => p.name === args.page); if (!page) page = figma.createPage(), page.name = args.page;
await figma.setCurrentPageAsync(page);
const result = {};
let y = page.children.reduce((m, c) => Math.max(m, c.y + c.height), 0) + (page.children.length ? 160 : 0);
for (const it of args.items) {
  const old = page.children.find(c => c.type === 'SECTION' && c.name === it.name); if (old) old.remove();
  const sec = figma.createSection(); sec.name = it.name; page.appendChild(sec); sec.x = 0; sec.y = y;
  const comps = [];
  for (let i = 0; i < it.ids.length; i++) {
    const fr = await figma.getNodeByIdAsync(it.ids[i]); if (!fr) continue;
    for (const t of fr.findAllWithCriteria({ types: ['TEXT'] })) await fixFonts(t);
    sec.appendChild(fr); const c = figma.createComponentFromNode(fr); c.name = 'Variant=' + (it.variants[i] || 'V' + (i + 1));
    await bindTree(c);
    comps.push(c);
  }
  let node;
  if (comps.length > 1) { node = figma.combineAsVariants(comps, sec); let x = 40, ry = 40, rh = 0; for (const c of comps) { if (x > 40 && x + c.width > 1640) { x = 40; ry += rh + 40; rh = 0; } c.x = x; c.y = ry; x += c.width + 40; rh = Math.max(rh, c.height); } node.resizeWithoutConstraints(Math.max(...comps.map(c => c.x + c.width)) + 40, ry + rh + 40); }
  else { node = comps[0]; node.name = it.name; }
  node.name = it.name; node.x = 80; node.y = 80;
  node.description = it.summary + '\n\nCode: ' + it.css + ' · assets/ds/components.css\nDocs: ' + args.site + it.slug;
  node.documentationLinks = [{ uri: args.site + it.slug }];
  sec.resizeWithoutConstraints(node.width + 160, node.height + 160);
  y += sec.height + 160;
  result[it.slug] = { set: node.id, section: sec.id, variants: comps.length };
}
return { page: page.id, result, stat };
