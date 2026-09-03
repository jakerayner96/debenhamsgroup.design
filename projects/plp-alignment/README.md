# P-05 · PLP Alignment

**Status:** open · **Brief:** Scott (Head of Ecommerce & Trading, PLT & boohoo), email 01 Sep 2026 · **Target:** w/c 08 Sep · **Branch:** `plp-alignment`

One core PLP template for **seven fascias** — Debenhams, boohoo, boohooMAN, PLT, Karen Millen, Warehouse, The Brand Room. Differences are configuration, not forks. PLT is the reference implementation. Brief distillation: [`.context/08-plp-alignment.md`](../../.context/08-plp-alignment.md).

## Figma sources (the hero references)

| What | Where | Status |
|---|---|---|
| Product card (hero asset) | DS file `aIHmkCaTy9c5EWOxAGw0So` · [5992-10841](https://www.figma.com/design/aIHmkCaTy9c5EWOxAGw0So/Debenhams-Design-System?node-id=5992-10841) · variable layers [12999-146812](https://www.figma.com/design/aIHmkCaTy9c5EWOxAGw0So/Debenhams-Design-System?node-id=12999-146812) | **Built into DS** → `assets/ds/components.css` `.pc` + site C-02 |
| Header + USP banner | [3793-3545](https://www.figma.com/design/aIHmkCaTy9c5EWOxAGw0So/Debenhams-Design-System?node-id=3793-3545) · [11982-37171](https://www.figma.com/design/aIHmkCaTy9c5EWOxAGw0So/Debenhams-Design-System?node-id=11982-37171) | **Built** → `.hd` + site C-05 (USP colours are per-fascia tokens) |
| Sort & filter (A/B/C tests) | [1783-11572](https://www.figma.com/design/s7WDE3BkCxbgqJ4x4hoV80/Sort---Filter?node-id=1783-11572) | **Built** (combined pattern) → `.sf` + site C-06 |
| AI-generated watermark + badge stacking | [25-11775](https://www.figma.com/design/d0zY0vt8hoz0gq8ycTimxS/AI-Generated-Watermark?node-id=25-11775) et al · [live demo](https://jakerayner96.github.io/ai-generated-badge/) | **Built** → `.badge` / `.badge-ai` + site C-07 |
| Margins spec | PLP MASTER `GP04SeG99nevXl4yuwY3sM` · [291-18049](https://www.figma.com/design/GP04SeG99nevXl4yuwY3sM/PLP-MASTER--21.10-25-?node-id=291-18049) | **Applied**: 16px sides to 1439 · 95px at 1440+, containers scale |
| Debenhams PLP m/d (older format ref) | [291-34498](https://www.figma.com/design/GP04SeG99nevXl4yuwY3sM/PLP-MASTER--21.10-25-?node-id=291-34498) · [318-19215](https://www.figma.com/design/GP04SeG99nevXl4yuwY3sM/PLP-MASTER--21.10-25-?node-id=318-19215) | Reference |
| The Brand Room PLP | [780-116608](https://www.figma.com/design/NRsu568JGzwCDq4egvkUbn/The-Brand-Room?node-id=780-116608) · [552-16411](https://www.figma.com/design/NRsu568JGzwCDq4egvkUbn/The-Brand-Room?node-id=552-16411) | Palette + config extracted (mono, uppercase, bookmark, supplier brands) |
| MAN PLP (Taggstar) | [3546-14580](https://www.figma.com/design/00YKWCHwTarfwWZ1HayFUI/Taggstar?node-id=3546-14580) / [3546-13842](https://www.figma.com/design/00YKWCHwTarfwWZ1HayFUI/Taggstar?node-id=3546-13842) | Taggstar bar built into card; deeper pass pending |
| PLP grid view (mobile) | [157-2718](https://www.figma.com/design/H679chUDMrAVSdARchnheR/PLP-Grid-View?node-id=157-2718) / [157-2879](https://www.figma.com/design/H679chUDMrAVSdARchnheR/PLP-Grid-View?node-id=157-2879) / [158-8455](https://www.figma.com/design/H679chUDMrAVSdARchnheR/PLP-Grid-View?node-id=158-8455) | **Pending extraction** — prototype has a placeholder 2↔1 toggle until these are pulled |

## Live capture — done 03 Sep

`capture/manifest.json` + 84 PNGs (gitignored — binaries stay out of git): **7 fascias × 6 audit breakpoints** (390/402/440/1023/1024/1440), fold + full-page, real PLP URLs per site. Caveats in the manifest: desktop UA at all widths; Brand Room capture resolved to a generic Debenhams sale PLP (its own pattern comes from Figma). Rerun: `node capture.mjs` (script preserved in session scratchpad; promote into repo tooling if reruns become regular).

## The template (prototype `index.html`)

DS components only — linked from `../../assets/ds/`: C-05 header (mobile + desktop) → USP a/b → breadcrumbs → centred title + count → category nav (roundels/pills/links per fascia) → C-06 sort & filter (desktop dropdown row · mobile NDD + view toggle + sheet) → C-02 card grid (2-col mobile / 3 tablet / config desktop · full-bleed option) → C-01 load more. Badges + AI banner per C-07.

## PLPBrandConfig v3 — Live now ⇄ New format (the switch in the review strip)

**LIVE** replicates each fascia's real site (03 Sep capture): Debenhams/Warehouse 5-across, heart-in-circle; boohooMAN/KM bookmark-in-square (KM adds a circle quick-add bag); PLT plain hearts, full-bleed, uppercase compact card, black nav, underline search, no mobile pill row; boohoo brand-tinted Taggstar; split Filters | Relevance mobile bar on every fascia. Brand Room live is a **proxy** (no distinct live PLP — runs inside debenhams.com).

**NEW** = the shorter PLT/Brand-Room card format (`.pc--compact`) for every fascia + the brief applied:

| Fascia | cols 5→ | brand line | fav | quickAdd | fullBleed | catNav |
|---|---|---|---|---|---|---|
| debenhams | 4 | ✓ | heart · circle | icon | — | roundels |
| boohoo | 4 | ✓ | heart · circle | — | ✓ | pills |
| boohooman | 4 | ✓ | bookmark · square | Add button | — | pills |
| plt (ref) | 4 | ✗ | plain heart | — | ✓ | pills |
| karenmillen | 4 | ✓ | bookmark · square | bag icon | — | pills |
| warehouse | 4 | ✗ (brief) | bookmark · square (KM icon, brief) | icon | ✓ (brief) | pills |
| brandroom | 4 | ✓ supplier | bookmark · square | — | — | pills |

Mobile in NEW mode uses the combined Sort & Filter sheet (the A/B/C winner); LIVE keeps the split bar. `fontScale` is retired as a config — the compact card **is** the reduction.

## Open / next

1. **Grid-view Figma nodes** → replace the placeholder mobile view toggle with the real spec.
2. **Breakpoints workstream** (flagged by Jake): PLP MASTER notes 320/375/425/768/1024/1280/1440/1728/2560/3840; audit capture at the locked six; reconcile into the DS breakpoint set (currently deferred in `07-foundations`).
3. Warehouse + Brand Room palettes are **DRAFT** in tokens.css — confirm at audit sign-off.
4. PLT's 16px icon set (vs 24px standard) parked — one-template rule wins unless PLT pushes back.
5. plt-app-prototype ingest still open (card behaviours: hover states, quick-add flow).
6. Options A/B/C on OptionSwitcher once the base template is agreed.

## The loop

Winner merges to main as **M-01 Master PLP**; the card/header/sort-filter/badges are already promoted (they're canonical Figma components, not options). Branch stays as the record.
