# Session log — 03 Sep 2026, part 2 (P-05 build: Figma → DS → prototype + live capture)

The first project to pull components INTO the design system. Read with `projects/plp-alignment/README.md` (the project record, incl. all Figma node links).

## DS grew four components (from Figma, exact)

All in `assets/ds/components.css`, specced on the site, used by the prototype:

- **C-02 Product card `.pc`** — the hero asset (DS Figma 5992-10841). Variable layers as optional elements: wishlist (heart/bookmark/plain per fascia), quick add (icon/button), product tag, Taggstar bar, sponsored, swatches (nested atomic — restyle per brand), ratings, brand line. Anatomy: image 2:3 on `surface/media`, gaps 12/8/4, 14px text, sale prices in status red. Deviation flagged: Figma's Grey-4 "Sponsored" lifted to Grey 5 (AA floor).
- **C-05 PLP header `.hd`** — one template: logo / pill search / icons / nav / USP banners (3793-3545 + 11982-37171). USP colours are per-fascia tokens (`--usp-a/b`); wishlist icon swaps heart↔bookmark per fascia.
- **C-06 Sort & filter `.sf`** — combined pattern from the A/B/C file (1783-11572): desktop dropdown row + sort right; mobile NDD toggle + single entry → full sheet, drill-in rows, pinned VIEW PRODUCTS.
- **C-07 Badges `.badge` / `.badge-ai`** — overlay tags stack bottom-left (gap 4, lift 32px over the AI strip); AI-GENERATED banner mandatory on AI imagery, full-width at image foot.

**Icons**: 21 SVGs exported from Figma → `assets/ds/icons/` (hearts, bookmark, bag, account, search, camera, hamburger, quick-add, trophy, stars, PLT 16px set, two header wordmarks).

## Token layer additions

- `--w-mid` (the card's middle weight), `--surface-media` (Grey 1 imagery placeholder), `--surface-callout` (Grey 6 Taggstar bar), per-fascia `--usp-a/b-bg/fg`.
- **Warehouse + Brand Room are now real DRAFT modes**: mono/black CTA, Helvetica stack; Brand Room uppercase + square (its Figma NRsu568JGzwCDq4egvkUbn); Warehouse from the live relaunch direction. Confirm at audit sign-off.
- New PLT facts from the header Figma: warm peach `#F1C59E`, light cream `#FFE4D2` (USP banners).

## Live capture — the audit blocker is broken

Playwright (local, headless Chromium): **7 fascias × 6 locked breakpoints, 84 shots, zero errors** → `projects/plp-alignment/capture/` (PNGs gitignored per the binaries rule; `manifest.json` tracked, real PLP URLs per fascia). All fascias confirmed on the `/categories/` platform. Ground-truth folds checked: PLT = full-bleed 4-across, plain hearts, no brand line; Warehouse today = 5-across, brand shown, heart — exactly the deltas the brief closes.

## Prototype v2 (branch `plp-alignment`)

Full seven-fascia PLP from DS components only. `PLPBrandConfig` v2 grounded in brief + Figma + capture (table in the project README). Margins per PLP MASTER: 16px sides → 95px at 1440+. `fontScale` recorded as a no-op-once-aligned (DS sizes = PLT sizes).

## Also

- Jake's 01 Sep chat transcript banked verbatim → `.context/15-chat-transcript-2026-09-01.md`.
- Site fonts now include Geologica 400 (card mid weight).
- Open: grid-view Figma nodes (157-2718/157-2879/158-8455) not yet extracted — mobile view toggle is a placeholder; PLT 16px icon set parked; breakpoints workstream flagged (PLP MASTER lists 320→3840); plt-app-prototype still not ingested.
