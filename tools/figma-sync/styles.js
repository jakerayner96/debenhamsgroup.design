// Text styles (type roles, mobile + desktop) bound to the brand font variables; shadow effect styles; gradient paint styles.
const ROLES = [['display-lg', 32, 48, 's'], ['display-md', 28, 40, 's'], ['display-sm', 24, 32, 's'], ['heading-xl', 20, 28, 's'], ['heading-lg', 18, 24, 's'], ['heading-md', 16, 20, 's'], ['heading-sm', 16, 16, 's'], ['heading-xs', 14, 14, 's'], ['body-lg', 16, 16, 'r'], ['body-md', 14, 14, 'r'], ['body-md-strong', 14, 14, 's'], ['body-sm', 12, 12, 'r'], ['caption', 12, 12, 'r'], ['micro', 10, 10, 'r']];
const vars = await figma.variables.getLocalVariablesAsync(); const V = n => vars.find(v => v.name === n);
for (const f of ['Geologica', 'Jost', 'Roboto', 'Montserrat', 'Archivo', 'Lato']) for (const s of ['Light', 'Regular', 'Medium', 'SemiBold', 'Bold']) { try { await figma.loadFontAsync({ family: f, style: s }); } catch (e) { } }
const ts = await figma.getLocalTextStylesAsync(); const made = [];
for (const [role, m, d, w] of ROLES) for (const [bp, size] of [['Mobile', m], ['Desktop', d]]) {
  const name = `${bp}/${role}`; let s = ts.find(x => x.name === name); if (!s) { s = figma.createTextStyle(); s.name = name; }
  s.fontName = { family: 'Geologica', style: w === 's' ? 'SemiBold' : 'Light' }; s.fontSize = size; s.lineHeight = { unit: 'AUTO' }; s.letterSpacing = { unit: 'PIXELS', value: 0 };
  s.setBoundVariable('fontFamily', V('font/family-base')); s.setBoundVariable('fontStyle', V(w === 's' ? 'font/style-strong' : 'font/style-regular'));
  s.description = `${role} · ${m} mobile / ${d} desktop · ${w === 's' ? 'strong' : 'regular'} weight of the brand mode`; made.push(s.id);
}
const SH = { pill: [0, 0, 14, -4, .25], card: [0, 4, 10, 0, .06, [22, 19, 20]], float: [0, 8, 18, 0, .14, [22, 19, 20]], puck: [0, 0, 14, -4, .18], tile: [0, 2, 10, 0, .1] };
const es = await figma.getLocalEffectStylesAsync();
for (const [k, [x, y, r, sp, a, rgb]] of Object.entries(SH)) {
  const name = 'Shadow/' + k; let s = es.find(e => e.name === name); if (!s) { s = figma.createEffectStyle(); s.name = name; }
  const c = rgb || [0, 0, 0]; s.effects = [{ type: 'DROP_SHADOW', color: { r: c[0] / 255, g: c[1] / 255, b: c[2] / 255, a }, offset: { x, y }, radius: r, spread: sp, visible: true, blendMode: 'NORMAL' }];
  s.description = `var(--shadow-${k})`; made.push(s.id);
}
const hex = h => ({ r: parseInt(h.slice(1, 3), 16) / 255, g: parseInt(h.slice(3, 5), 16) / 255, b: parseInt(h.slice(5, 7), 16) / 255, a: 1 });
const GR = { 'Gradient/ai': ['--ai-gradient', 107, '#70BEB3', '#9DEDE2'], 'Gradient/membership-plus': ['--mpill-grad-plus', 115, '#000000', '#00787D'], 'Gradient/card Debenhams': ['--card-bg', 131, '#7BE7D8', '#9DEDE2'], 'Gradient/card Principles + Coast': ['--card-bg', 131, '#1ABC9C', '#16A085'] };
const ps = await figma.getLocalPaintStylesAsync();
for (const [name, [css, deg, a, b]] of Object.entries(GR)) {
  let s = ps.find(p => p.name === name); if (!s) { s = figma.createPaintStyle(); s.name = name; }
  const t = (deg - 90) * Math.PI / 180, c = Math.cos(t), sn = Math.sin(t);
  s.paints = [{ type: 'GRADIENT_LINEAR', gradientTransform: [[c, sn, .5 - c / 2 - sn / 2], [-sn, c, .5 + sn / 2 - c / 2]], gradientStops: [{ position: 0, color: hex(a) }, { position: 1, color: hex(b) }] }];
  s.description = `var(${css})`; made.push(s.id);
}
return { styles: made.length };
