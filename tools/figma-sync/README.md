# Figma sync — code → Figma library

Builds the Figma library **Debenhams Group DS** (https://www.figma.com/design/mkimeRGTWN8UDHq55Cbk9D) from this repo: every token as a variable, every catalogue component as a Figma component set bound to those variables. Code stays canonical; Figma mirrors it. Built 27 Oct 2026.

## What is in the file

- **Variables**: `Core` (111 tokens identical on every fascia, one mode) and `Brand` (121 tokens, 10 modes: Debenhams, Karen Millen, PrettyLittleThing, boohooMAN, boohoo, Warehouse, The Brand Room, Burton, Principles, Coast — the Figma team is on Pro, max 10 modes). Names are the CSS name with the first `-` as a `/` (`--text-link` → `text/link`); every variable carries its WEB code syntax `var(--…)`. `font/style-*` are derived STRING variables so static fonts follow the brand weight.
- **Styles**: text styles `Mobile/<role>` and `Desktop/<role>` (14 roles, bound to `font/family-base` + `font/style-*`), `Shadow/*` effect styles, `Gradient/*` paint styles (gradients can't be variables).
- **Components**: one page per catalogue group, one section per component, variants = the catalogue variants. Description + documentation link point at the DS site page.
- `_Pipeline` (hidden collection): the binder script and the sentinel map. Not published.

## How it works

1. `tokens.mjs` resolves every token for the 10 Figma brands in Chrome → `tokens-by-brand.json`; `gen-vars.cjs` → `vars.json`; `build-vars.cjs` writes the variable scripts (run with `use_figma`).
2. `cap.mjs [slug…]` renders each catalogue component with **sentinel values**: every colour token a unique `#01xxyy`, radii 3 / 7 / 999…, weights 100 / 200 / 800 / 900. One-child CSS grids become flex and CSS masks become inline SVG, so `html_to_figma` captures them cleanly. Writes `out/<slug>.html`, `sentinel.json`, `out/index.json`.
3. `batch.cjs` merges components into ≤ 20-variant documents (`plan.json`); `html_to_figma` (nodeId = the group page) gives a submit URL; `postmany.sh id:batch …` posts them.
4. `runmulti.cjs "Page:b01,b02" …` prints a `use_figma` script that runs the stored binder: it strips the bindings `html_to_figma` guesses (it pins a random brand mode and value-matches), clears the pinned modes, then binds every sentinel back to its variable (fills, strokes, effects, radii, gaps, font family + style), turns the frames into a variant set and lays it out.
5. `scan-lib.js` (read-only `use_figma`) maps slug → node id; paste into `assets/ds/figma-lib.js`, which puts the Figma link under each DS site page title.

## Updating after a DS change

Changed component: re-run `cap.mjs <slug>`, post its batch to the component's page, run the binder for it (it replaces the section of the same name), then refresh `figma-lib.js`. Replacing a set gives it a new node id — instances in other files keep working only while the old one is published, so republish the library straight after.

## Known gaps

- Text case (`--cta-case`, `--case-btn1`) can't be bound in Figma: case is as captured (Debenhams). Karen Millen buttons need sentence case set by hand.
- Brand artwork (logos, header / footer link sets, membership art) is captured for Debenhams and doesn't swap with the mode.
- Gradient-valued tokens (`--card-bg` on Debenhams, Principles, Coast; `--mbanner-bg`) take their first stop as the variable value; the full gradients are paint styles.
- Price sizes / weights that vary per fascia (`--price-*`) are captured at the Debenhams values.
