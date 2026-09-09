/** Generates stories/<Group>/<Name>.stories.js from ../assets/ds/catalogue.js.
 *  Run `npm run gen` (also runs before storybook dev/build). Never hand-edit the output. */
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const { DG_CATALOGUE, DG_DEV_OVERLAY, DG_TOKEN_MAP } = require('../assets/ds/catalogue.js');

const out = path.join(here, 'stories');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const ident = s => {
  const w = s.replace(/[^A-Za-z0-9]+/g, ' ').trim().split(' ').map((x, i) => i ? x[0].toUpperCase() + x.slice(1) : x[0].toLowerCase() + x.slice(1)).join('');
  const RESERVED = new Set(['default','delete','new','class','in','on','off','small','large','with','for','if','do','var','let','const','this','null','true','false','import','export','function','return','switch','case','static','void']);
  return (/^[0-9]/.test(w) || RESERVED.has(w)) ? w + '_' : w;
};
const esc = s => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const devId = t => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const DEV = 'https://web-storybook.jamesb.play.dbztech.net/?path=/docs/';

let n = 0;
for (const c of DG_CATALOGUE) {
  const dir = path.join(out, c.group.replace(/[^A-Za-z0-9]+/g, '-'));
  fs.mkdirSync(dir, { recursive: true });
  const md = [
    c.summary, '',
    '**When to use** ' + c.use.map(x => '\n- ' + x).join(''), '',
    '**Avoid** ' + c.avoid.map(x => '\n- ' + x).join(''), '',
    '**Anatomy** ' + c.anatomy.map(x => '\n- ' + x).join(''), '',
    `**CSS** \`${c.css}\`` + (c.figma ? ` · **Figma** ${c.figma}` : ''), '',
    c.dev.title !== '—'
      ? `**Front-end Storybook** [${c.dev.title}](${DEV}${devId(c.dev.title)}--docs) — *${c.dev.status}*. ${c.dev.note}`
      : `**Front-end Storybook** no counterpart yet (*${c.dev.status}*). ${c.dev.note}`,
  ].join('\n');
  const stories = c.variants.map(v => `export const ${ident(v.name)} = { name: ${JSON.stringify(v.name)}, render: () => \`${esc(v.html)}\` };`).join('\n');
  fs.writeFileSync(path.join(dir, c.name.replace(/[^A-Za-z0-9]+/g, '') + '.stories.js'),
`/* generated from assets/ds/catalogue.js — do not edit */
export default {
  title: ${JSON.stringify('DG/' + c.group + '/' + c.name)},
  tags: ['autodocs'],
  parameters: { docs: { description: { component: ${JSON.stringify(md)} } } },
};
${stories}
`);
  n += c.variants.length;
}

// Introduction + overlay docs (MDX)
// Storybook's MDX has no GFM tables, so emit HTML tables.
const h = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
const byslug = Object.fromEntries(DG_CATALOGUE.map(c => [c.slug, c]));
const tbl = (head, body) => `<table style={{fontSize:13}}><thead><tr>${head.map(x => `<th align="left">${x}</th>`).join('')}</tr></thead><tbody>${body}</tbody></table>`;
const rows = tbl(['Front-end component', 'Stories', 'DG component(s)', 'Status', 'Note'], DG_DEV_OVERLAY.map(o => `<tr><td><a href="${DEV}${devId(o.dev)}--docs" target="_blank" rel="noopener">${h(o.dev)}</a></td><td>${o.stories}</td><td>${o.ours.map(s => h(byslug[s] ? byslug[s].name : s)).join(', ') || '—'}</td><td><b>${o.status}</b></td><td>${h(o.note)}</td></tr>`).join(''));
const toks = tbl(['Front-end variable', 'DG token', 'Note'], DG_TOKEN_MAP.map(t => `<tr><td><code>${h(t.dev)}</code></td><td><code>${h(t.ours)}</code></td><td>${h(t.note)}</td></tr>`).join(''));
fs.writeFileSync(path.join(out, 'Introduction.mdx'), `import { Meta } from '@storybook/blocks';

<Meta title="DG/Introduction" />

# DG Group Design System

The Debenhams Group component library, rendered from the canonical CSS (\`assets/ds/tokens.css\` + \`components.css\`).
Every story is plain HTML on our class names — the visual target for the React/Tailwind implementation in the
front-end Storybook. Switch fascia in the toolbar: the same \`fascia\` global the front-end uses, mapped onto our
\`data-brand\` token modes.

**How this maps to the front-end build**

- Groups follow the job the component does (Actions, Forms, Feedback, Product, PDP modules, Navigation, Overlays & bag, Chips & pills, Account, Layout) rather than atom/molecule tiers.
- Each component's Docs tab names its front-end counterpart and the alignment status: **match** (same job, ours is the visual target), **partial** (one side has states the other lacks), **ours** (no counterpart yet — build to this).
- Tokens: the front-end theme is a flat list of ~25–67 RGB-triplet CSS variables per fascia consumed by Tailwind utilities. The table below maps each onto our semantic tokens.

## Front-end Storybook → DG components

${rows}

## Front-end theme variables → DG tokens

${toks}
`);

console.log(`generated ${DG_CATALOGUE.length} components / ${n} stories → ${out}`);
