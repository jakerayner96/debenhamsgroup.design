# P-05 · PLP Alignment

**Status:** open · **Brief:** Scott (Head of Ecommerce & Trading, PLT & boohoo), email 01 Sep 2026 · **Target:** w/c 08 Sep · **Branch:** `plp-alignment`

Align boohoo, boohooMAN, PLT, Warehouse and The Brand Room onto **one core PLP template**. Differences become configuration, not forks. PLT is the reference implementation. Full brief distillation, config schema and audit matrix: [`.context/08-plp-alignment.md`](../../.context/08-plp-alignment.md).

**Figma source:** TBD — brief arrived by email; node recorded here the moment the first Figma frame exists (house rule: every project records file key + node id).

## The contract with the design system

- Prototypes here link the canonical DS files — **never copy values**:
  ```html
  <link rel="stylesheet" href="../../assets/ds/tokens.css">
  <link rel="stylesheet" href="../../assets/ds/components.css">
  ```
- Brand switching is only ever `data-brand` on the root element. No per-fascia CSS, no forks.
- Components this project produces (product card, PLP grid, filter bar…) are built here as token-consuming patterns. When the winning option merges to main they get **promoted into `assets/ds/components.css`** and specced on the site (System → Components). That's how project work feeds the DS.
- Missing tokens discovered here (e.g. Warehouse palette) go into `assets/ds/tokens.css` on main via the audit — flagged, not guessed.

## Config schema (draft — reconcile against 08 doc + live capture)

| Key | Default | Per brief |
|---|---|---|
| `showBrand` | true | false — PLT, Warehouse |
| `imageFullWidth` | false | true — BHW, Warehouse (PLT pattern) |
| `favouriteIcon` | default | km — Warehouse |
| `columnsDesktop` | 5 | 4 — Warehouse |
| `fontScale` | brand | plt — BHW, Warehouse (site-wide reduction) |

## Files

- `index.html` — working five-fascia PLP skeleton: switch fascia top-right, per-fascia config applied live. This is the working surface until `plt-app-prototype` is ingested to seed M-01 properly.
- Options land as `option-a.html`, `option-b.html`, `option-c.html` (A: strict PLT clone · B: PLT + toggles · C: B + density switch) — reviewed via OptionSwitcher when it exists.

## Blocked / waiting

1. **plt-app-prototype ingest** — the best PLP; seeds the master card anatomy + behaviours.
2. **Live capture** of the five fascias' PLPs (scraper config in 08 doc §4) — fills the audit matrix; all five run the same client-rendered `/categories/` platform so web-fetch is IA-only.
3. **Warehouse + Brand Room palettes** — modes exist as name-only scaffolds in tokens.css until audited.

## The loop (per the operating model)

brief → this branch → options → stakeholder review → winner merges to main as **M-01 Master PLP** → components promoted into the DS → branch archived as the record.
