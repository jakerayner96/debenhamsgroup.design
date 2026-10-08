/* DG Group Design System — Tailwind preset.
   SPACING RULE: we measure spacing in GAPS. 1 gap = 4px. gap N = N × 4px = Tailwind spacing key N
   (p-4 = gap 4 = 16px · gap-2 = gap 2 = 8px · mt-0.5 = gap 0.5 = 2px). Docs always quote both: "gap 4 (16px)".
   The scale below is locked to the DS steps and reads the CSS variables in assets/ds/tokens.css, so tokens.css stays
   the single source; utilities resolve per fascia mode like everything else.

   Use:  // tailwind.config.js
         module.exports = { presets: [require('./assets/ds/tailwind.preset.js')], content: [...] }
   and load assets/ds/tokens.css on the page (it defines --gap-*). */
const steps = { '0': '0', '0.5': '0_5', '1': '1', '1.5': '1_5', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6',
  '8': '8', '10': '10', '12': '12', '16': '16', '20': '20', '24': '24', '32': '32' };
const px = k => `${parseFloat(k) * 4}px`;
const spacing = Object.fromEntries(Object.entries(steps).map(([k, v]) => [k, `var(--gap-${v}, ${px(k)})`]));
spacing.px = '1px';

module.exports = {
  theme: {
    extend: {
      // Tailwind's default scale is already 1 unit = 0.25rem = 4px, so gap N === Tailwind N. We extend (not replace) it:
      // DS steps resolve to the tokens; off-scale keys the front end already uses (gap-11, p-9, m-7 …) still compile —
      // they are outside the DS scale and should be audited, not broken.
      spacing,
    },
  },
  // the DS scale as data, for docs / lint scripts: [{gap:'4', px:16, tw:'4', token:'--gap-4'}…]
  dgSpacing: Object.keys(steps).map(k => ({ gap: k, px: parseFloat(k) * 4, tw: k, token: `--gap-${steps[k]}` })),
};
