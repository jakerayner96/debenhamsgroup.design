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

## Part 3 (same day) — match-live pass + Live ⇄ New switch (Jake's corrections)

All 14 capture folds studied (390 + 1440 × 7). Fixes: **square card corners** (live + Figma have none); **wishlist variants** — heart-in-circle (Deb/boohoo/WH live), bookmark-in-square (BHM/KM/Brand Room), plain heart (PLT), KM stacks square bookmark + circle quick-add bag; **desktop filter is a bordered strip under the category links** (NDD where live, dropdowns, "Show more filters", sort right); **mobile live pattern is the split Filters | Relevance bar** (+ per-fascia pill row; PLT has none, KM no NDD); header breaks mobile↔desktop at 1024; PLT runs black nav + underline search (`--nav-bg/fg` tokens, `.hd-search--underline`); boohoo's Taggstar is brand-tinted (`.pc-taggstar--brand`); **`.pc--compact`** added — the shorter PLT/Brand-Room format (caps 11px brand, 12px name, tight gaps).

Prototype now has a **Live now ⇄ New format** switch: LIVE replicates each fascia's real site from today's capture (Deb/WH 5-across; Brand Room live is a Debenhams-platform proxy — no distinct live PLP); NEW = compact card everywhere + Scott's brief applied (all 4-across, WH/PLT hide brand, WH adopts KM bookmark, boohoo/PLT/WH full-bleed) + combined sort&filter sheet on mobile. Every state visually verified against the captures via headless Chromium.

## Also

- Jake's 01 Sep chat transcript banked verbatim → `.context/15-chat-transcript-2026-09-01.md`.
- Site fonts now include Geologica 400 (card mid weight).
- Open: grid-view Figma nodes (157-2718/157-2879/158-8455) not yet extracted — mobile view toggle is a placeholder; PLT 16px icon set parked; breakpoints workstream flagged (PLP MASTER lists 320→3840); plt-app-prototype still not ingested.

## Part 4 (same day) — icon library, PLT-exact treatment, footer, width resizer

- **Icon library ingested**: 146 SVGs from the Figma Iconography page (470-887) → `assets/ds/icons/lib/`, named per Figma. Site gained a System → Icons page with the rules: 1pt stroke at every scale, aspect always locked (fixed square box + object-fit contain). All chevrons/filter/close/view-toggle glyphs across components now use library icons — no more CSS-drawn carets. Header wishlist optically downsized (21px). Ten multi-part icons flagged for flat re-export. (First download pass silently wrote 0-byte files — python urllib blocked; curl re-pull fixed all 146.)
- **PLT card chrome exact per AI-Watermark 3-574**: cream rgba(250,245,231,.85) square chips (heart + bag, PLT's own icon set), badges same cream with #333 uppercase text, **AI banner now matches the badge styling everywhere** with a bolder AI (`--ai-bg/fg = badge tokens`), PLT sale red #C90000 (`--price-sale`), circle swatches variant (`.pc-swatches--round`), title back to sentence case, desktop filter strip borderless (dividers removed per review) with Show-more-filters below on PLT.
- **C-08 Footer** built from Figma 664-1064 + live footers captured for all 7 fascias (capture/*/footer-1440.png): newsletter band (`--ft-band`), 4 link columns + social/app rail (real social SVGs), payment chips, sister-brands strip (Debenhams only), centre logo. On the site + in the prototype.
- **Review shell**: prototype split into `plp.html` (pure page) + `index.html` (strip + iframed page with drag-to-resize width + presets — breakpoints respond inside the iframe). A full Safari-chrome device preview was built then scrapped on review ("looks shit") in favour of the plain resizer.
- Fixed: `[hidden]` beaten by display rules (show-more, sister-brands), broken icon fills, strip chip wrap.

## Part 5 (same day) — category-nav variants, breadcrumb, USP/nav balance

- **Roundel rebuilt to the Figma component** (8459-1652): Default, Outline (4px `brand-primary` ring with inset gap), On-image label (Geologica), On-image display type (Antonio approximated by w-strong caps — Antonio not loaded, flagged), each ± label; 14px capitalize labels, 104–116px desktop / 72–84px mobile.
- **Top-nav switcher in the review strip**: auto (per fascia) / roundels ×4 / pills / pills-solid / links — both roundels and links are in production use, so reviews can flip them per fascia.
- **PLT category pills → solid** (`.catpill--solid`, badge tokens — reads like the Petite badge) so nav pills differentiate from the bordered filter dropdowns.
- **Breadcrumb is now a DS component** (`.bc`, Figma 12711-4044): 12px w-regular capitalize, slash separators; share icon reserved for PDP mobile, not rendered on PLP.
- **USP banner 12→14px at desktop; nav strip 16→15px** — rebalanced per review.

## Part 6 (same day) — real content, signed-off buttons, Google Sans chrome

- **The seven fascia "before" designs** turned out to be html.to.design captures of the live sites inside the DS Figma (1440w + 390w each — and The Brand Room lives at **www.thebrandroom.com**, its own domain, correcting log 13's proxy note). Extracted real page titles, breadcrumbs, nav labels, filter sets, offer lines and products per fascia; **112 product photos** downloaded and committed as 640px JPEGs (~4.3MB total, `projects/plp-alignment/img/<fascia>/`, map.txt per folder) — the binaries rule bends for prototype-essential imagery at this weight.
- **Live mode now renders each fascia's real PLP**: Debenhams = Autumn campaign (sister-brand products, photo roundels, Get It Tomorrow lines, ratings); boohooMAN = New Season (category pills, full-width Add, Plus Sizes/Back In Stock badges, EXTRATEN caps offers); KM = Summer Dresses (OUTLET/Petite, no percent labels); Warehouse = NEW IN caps, 44 products, no category row; boohoo/PLT/Brand Room per capture. New format uses the same real data on DS components; the AI-Generated banner demos on one card per fascia in New mode only.
- **Signed-off buttons ingested** (colour-alignment `brand-colours.html`): Debenhams primary = **Primary Aqua + black ink** (teal = links/focus only, now split into literal link tokens); **boohoo buttons are black** (pink stays accent); **KM palette corrected to #D24508/#892D05** with 400-weight sentence-case buttons (`--w-btn`); PLT ink #FFF; boohooMAN accent green #01FE8A recorded as brand-primary. These drive every CTA in the New format (Load more, Add, drawer, Subscribe).
- **Google Sans adopted as the Group-UX chrome font** (site + review strips, Montserrat fallback); review strip is now strictly black & white — no aqua.

## Part 7 (same day) — live-fidelity feedback round

- **USP strips restored to the Figma component**: multi-cell grid (`.usp-strip`, cells alternate `--usp-a-bg/--usp-a-bg2`, bold line + underlined action) with real per-fascia cells; PLT keeps its countdown bar above; boohooMAN grey EXTRATEN code bar below; KM/boohoo black cells (token flips).
- **Debenhams live CTAs**: Load more = secondary; Subscribe/Load more uppercase in live (`subCaps`); Get It Tomorrow + brand + name all 14pt (compact keeps 12).
- **Debenhams roundels**: six, larger (150px desktop), tighter 18px gaps, left-aligned running to the right edge (`.cat-row--edge`).
- **Category pills are badge-format on every fascia** — badge tokens + `radius-default`, never fully rounded (PLT cream, others white/keyline).
- **New-format wishlist/quick-add = PLT chip standard for all fascias except Debenhams** (bookmark fascias keep their glyph inside the chip); Debenhams keeps circles.
- **New format**: SEO clamps to one line with Read more at the end; Show more filters always inline after the last dropdown.
