# USP banner — in situ

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/usp-banner/
**Figma:** DS file `aIHmkCaTy9c5EWOxAGw0So` · USP BANNER `11982-37171` (mobile rotation `13005-165658`)

Configurator in the PLP / Core PDP model: window controls on top (brand, Desktop / Mobile, open page), page + banner controls on the left, the page in the frame. `page.html` renders Home, PLP, PDP, Bag and Account for the seven core fascias from DS components only (catalogue.js markup on tokens.css + components.css; products and images from `projects/plp-alignment`).

## The component (promoted to `assets/ds/components.css` + `assets/ds/usp.js`)
- Types: Single · Double (dash between) · Text + Code ("Code: XYZ") · Text + Countdown · Text + Code + Countdown.
- Colours: fascia bar A / bar B, or Figma Grey 05 · Grey 1 · Black · Black / Red.
- Height follows the copy: one line = 4 + 15 + 4 = **23px** on mobile (was a fixed 56–63px). Countdown bar 42px.
- Dash separator; once a row wraps the dash becomes a line break (usp.js).
- Countdown on its own row, tabular digits, ticks from `data-left` (seconds) or `data-to` (date).
- Any `*` in the copy attaches the 10px caveat line inside the bottom of that banner; the prototype flags a missing caveat.

## Live check (06 Oct 2026, 390 wide)
Debenhams / boohoo / boohooMAN / KM run 16px copy, 42–50px bars, a pipe separator and "Use Code:"; PLT runs 12px light, 18–36px. The DS version follows the Figma: 12/15, dash, "Code:", strong countdown.
