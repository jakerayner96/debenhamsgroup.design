#!/usr/bin/env node
// Persona portraits (12 Nov 2026, Jake: no cartoons): clean, faceless line portraits, one SVG per persona.
// Ink outline (2.4 on a 160 box), white figure, solid hair (grey hair stays grey), glasses / beard where the persona had them.
// Transparent background: the frame (.persona-av, the deck) supplies the fascia tint. Run: node tools/personas/portraits.mjs
import fs from 'fs'; import path from 'path'; import url from 'url';
const ROOT = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '../..');
const OUT = path.join(ROOT, 'assets/ds/personas/portraits');
const INK = '#141414', SKIN = '#FFFFFF', GREY = '#A8A8A8';
// hair: bob | long | longw (wavy) | shoulder | pony | sidepony | bun | pixie | m-short | m-side | m-curly | m-crop · extras: g = glasses, b = beard, s = stubble, grey
const F = {
  debenhams: { helen: 'bob', donna: 'shoulder', claire: 'bob2', linda: 'pixie g grey', nicola: 'long', ahmed: 'm-crop b', martin: 'm-short s grey', joanne: 'bob grey' },
  karenmillen: { rebecca: 'longw', anneke: 'bob2', caroline: 'pixie g', natalie: 'long', amelia: 'shoulder', louise: 'pixie', gemma: 'bob', emma: 'shoulder grey' },
  boohoo: { courtney: 'longw', danielle: 'long', lena: 'longw', shannon: 'shoulder', jodie: 'sidepony', abbie: 'pony', kayleigh: 'bun', chelsea: 'sidepony grey' },
  plt: { mia: 'long', chiara: 'longw', keira: 'sidepony', sofia: 'long', tasha: 'long', leah: 'shoulder', holly: 'longw', amber: 'shoulder grey' },
  boohooman: { tyler: 'm-side', connor: 'm-short', marco: 'm-crop s', ryan: 'm-side', noah: 'm-curly', mateo: 'm-crop b', lewis: 'm-short s', ashley: 'm-short grey' },
};
const st = `stroke="${INK}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;
const H = c => `fill="${c}" ${st}`;
const body = `<path d="M16 152 C18 124 38 108 64 103 L96 103 C122 108 142 124 144 152 L144 176 L16 176 Z" fill="${SKIN}" ${st}/>`
  + `<path d="M69 103 C72 110 88 110 91 103" fill="none" ${st}/>`;
const neck = `<path d="M71 88 L71 104 L89 104 L89 88" fill="${SKIN}" ${st}/>`;
const head = `<ellipse cx="80" cy="66" rx="22" ry="27" fill="${SKIN}" ${st}/>`;
const back = {
  bob:   'M55 60 C53 80 54 94 60 100 L100 100 C106 94 107 80 105 60 Z',
  bob2:  'M55 60 C54 78 55 90 58 96 L102 96 C105 90 106 78 105 60 Z',
  shoulder: 'M55 60 C52 84 52 102 50 112 C58 116 66 114 70 108 L90 108 C94 114 102 116 110 112 C108 102 108 84 105 60 Z',
  long:  'M55 60 C51 88 50 112 46 126 C56 130 66 128 70 120 L90 120 C94 128 104 130 114 126 C110 112 109 88 105 60 Z',
  longw: 'M55 60 C49 80 54 92 48 104 C44 114 50 122 46 128 C56 132 66 128 70 120 L90 120 C94 128 104 132 114 128 C110 122 116 114 112 104 C106 92 111 80 105 60 Z',
  pony:  'M98 46 C114 52 118 74 112 98 C110 104 104 106 104 100 C108 80 106 62 96 52 Z',
  sidepony: 'M100 50 C112 60 116 80 110 104 C108 112 100 112 101 104 C106 84 104 66 96 56 Z',
  bun:   'M80 31 m-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0',
};
const cap = {
  f:      'M55 66 C53 44 66 34 80 34 C96 34 108 44 105 66 C102 54 92 46 80 47 C70 47 60 52 55 66 Z',          // centre parting, soft
  side:   'M55 66 C53 44 66 34 82 34 C98 35 108 46 105 64 C100 56 94 50 86 49 C74 49 66 58 58 62 Z',          // side-swept fringe
  pixie:  'M56 64 C52 42 66 33 82 34 C98 35 108 46 104 62 C98 54 92 50 84 50 C74 50 66 54 62 62 Z',
  bunc:   'M56 62 C54 44 66 37 80 37 C94 37 106 44 104 62 C98 52 90 48 80 48 C70 48 62 52 56 62 Z',          // scraped back
  ms:     'M57 60 C55 42 67 36 80 36 C94 36 105 42 103 60 C100 52 92 49 80 49 C68 49 60 52 57 60 Z',          // short
  mside:  'M57 62 C54 42 68 35 82 35 C96 36 106 44 103 60 C98 52 92 50 72 50 C66 52 60 56 57 62 Z',
  mcrop:  'M58 56 C58 44 68 39 80 39 C92 39 102 44 102 56 C96 50 88 48 80 48 C72 48 64 50 58 56 Z',
  mcurly: 'M57 60 C52 52 56 44 62 44 C60 36 70 32 76 36 C80 30 90 32 92 37 C100 34 106 42 103 48 C108 52 106 60 103 60 C98 52 90 49 80 49 C70 49 62 52 57 60 Z',
};
const stubble = 'M60 78 C62 91 70 96 80 96 C90 96 98 91 100 78 C96 85 90 89 80 89 C70 89 64 85 60 78 Z';
const beard = 'M58 70 C58 90 68 98 80 98 C92 98 102 90 102 70 C99 80 92 85 80 85 C68 85 61 80 58 70 Z';
const glasses = `<g fill="none" ${st}><circle cx="71" cy="68" r="6.5"/><circle cx="89" cy="68" r="6.5"/><path d="M77.5 68 L82.5 68"/></g>`;
function svg(spec) {
  const t = spec.split(' '), h = t[0], grey = t.includes('grey'), hc = grey ? GREY : INK;
  const male = h.startsWith('m-');
  const b = back[h] ? `<path d="${back[h]}" ${H(hc)}/>` : '';
  const c = male ? cap[{ 'm-short': 'ms', 'm-side': 'mside', 'm-crop': 'mcrop', 'm-curly': 'mcurly' }[h]]
    : cap[h === 'pixie' ? 'pixie' : h === 'bun' ? 'bunc' : ['bob2', 'sidepony', 'longw'].includes(h) ? 'side' : 'f'];
  const ex = (t.includes('b') ? `<path d="${beard}" ${H(hc)}/>` : t.includes('s') ? `<path d="${stubble}" ${H(hc)}/>` : '') + (t.includes('g') ? glasses : '');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="160" height="160"><g transform="translate(80 78) scale(1.3) translate(-80 -72)">${b}${body}${neck}${head}<path d="${c}" ${H(hc)}/>${ex}</g></svg>\n`;
}
let n = 0;
for (const [site, ps] of Object.entries(F)) for (const [id, spec] of Object.entries(ps)) { fs.writeFileSync(path.join(OUT, `${site}-${id}.svg`), svg(spec)); n++; }
console.log(n, 'portraits →', path.relative(ROOT, OUT));
