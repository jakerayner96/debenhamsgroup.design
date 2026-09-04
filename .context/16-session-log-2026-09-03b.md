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

## Part 8 (same day) — USP two-layer spec + roundel alignment

Debenhams USP per Figma 13005-163125/165658/165567: layer 1 = flat #F8F8F8 strip, 14px Bold headline + 14px underlined action, 63px cells, mobile rotates one message at a time (4s); layer 2 = black EXPRESSDEL bar that **pins to the top of the window on scroll** (moved outside the header — sticky was trapped by its containing block). Fixed the `[hidden]` gap/black-bar bug on empty USP slots. Roundels: centered on desktop, left-margin with right-edge iceberg on mobile.

## Part 9 (same day) — full catalogues + import-exact Debenhams CTAs/footer

- **All products loaded from the live imports**: parser now extracts the complete per-fascia product sets (38–40 each, PLT capped at 40 of 79) into generated `projects/plp-alignment/data.js`; 314 photos at 560px (9.8MB total). Fields per product: brand, name, price, was, pct, offer line, tag, rating, Get-It-Tomorrow.
- **Debenhams live per import**: Load More = white with 1px Grey-3 keyline, 16px SemiBold caps, 20/16 padding (13005-165375); Subscribe = Primary Aqua, 16px SemiBold caps (165398); grid gaps 16px columns / 18.5px rows; 5 per row at 1440 confirmed.
- **Footer payments are the real badge PNGs** from the footer import (165380) — visa→gpay incl. Pay+, in DS assets (`icons/pay/`) + app-store badges; site footer demo updated too.
- **boohooMAN live card corrected** per 13003-149344: Debenhams card format with bookmark in the white circle, no Add button (Add stays in earlier design refs only).

## Part 10 (same day) — new-format mobile filter = floating pills

Brand Room Figma 739-92223 is the new-format mobile sort & filter: scrolling row of white radius-42 pills with soft shadow — NDD with an inline mini-toggle, Sort & Filter with the DS filter icon, then per-fascia filter chips with 12px chevrons, all opening the combined sheet. Radius stays 42 on every fascia by design (explicitly round even on square-radius brands). Replaces the NDD+viewtoggle+button row; view toggle parked until the grid-view Figma pass. Also fixed `.seo[hidden]` losing to the one-line flex display.

## Part 11 (same day) — top-nav options simplified + MAN new-format card rules

- Top-nav switcher trimmed to: auto · roundels (text below) · roundels (text on) · pills · links. Pills are now **Grey 1** background, borderless, radius-default on every fascia.
- **boohooMAN new format**: no quick add on PLP; fully flush full-bleed images (gap 0, `.pc--flush` 4px text inset); badges + wishlist chip **white at 85%, 4px radius** (brand badge tokens; chip radius now follows `radius-default` so PLT/Brand Room stay square). Taggstar stays **off** — flagged as too tall alongside everything else; revisit as a reduced-height bar or an on-image treatment against the other image overlays.

## Part 12 (same day) — queued review round landed

- New format runs the two-part USP component everywhere (message strip + code bar; code bars synthesised for fascias whose live lacks one); mobile rotation animates (usp-rotate, motion tokens).
- AI-Generated badge scattered on a few products down every fascia (every 7th card, New mode only); MAN badges/wishlist chip white 85% borderless.
- Desktop filter strip: full 2000px width, filters clamp to one row, overflow expands below via Show more/fewer filters, Relevance pinned right (220px); dropdowns 160px, grey-2 keyline, 16px text per MAN Figma 13003-147068; MAN filter list extended to seven.
- MAN roundels: white ground with contained imagery (13003-147021).
- Floating pills: grey keyline no shadow, 8pt vertical padding, full-bleed with 16pt internal padding — iceberg off the right.
- Header/footer logos to component sizes (mobile 16 / desktop 141×20 / footer 24); bag count badge always a 1:1 circle; product count line hidden in New; shell defaults to 390 mobile.

## Part 13 — stakeholder comments in the review shell
- `.pc-offer` now sits 2px under the price line (negative top margin vs the info-stack gap: -6px standard, -4px compact). DS promoted to main.
- Review shell gains a **💬 Comment** button (black strip) → dark panel: name + comment, fascia/mode/viewport width auto-attached, POST to the existing UX-Design-Request Cloudflare worker (`…workers.dev/log-ticket`), payload keys mapped to the backlog sheet's fixed columns (title/priority=Comment/requester/brands/platforms/pages/description). Sent comments cached in localStorage and listed in the panel.
- **Blocked last mile:** the deployed worker returns "Backlog logging is not configured" — `SHEETS_WEBHOOK_URL` secret was never set. Jake to do the sheets-logger README steps (Apps Script web-app deploy in his Drive) + `npx wrangler secret put SHEETS_WEBHOOK_URL`. Until then the panel's fallback copies the comment JSON to the clipboard with a "paste it to Jake" note.
- CORS on the worker allows only `https://jakerayner96.github.io` (+ file://) — comments send from the live Pages URL, not localhost; fallback covers local review.
- **Variant showcase (new format only):** every card now demonstrates ≥1 card layer (bare import products get one, rotating badge→rating→NDD→was/-%→offer→swatches by index); cards 2 / 13 / 25 run ALL layers at once (badge + AI + was/-% + offer + rating + NDD + swatches +8). Swatches re-entered the card renderer (`p.sw` array → `.pc-swatches`, round on PLT); offer codes reuse the fascia's real code where the import data has one. Implemented as render-time copies (`demoVariants()`) — live mode stays the untouched import data.

## Part 14 — Figma-exact USP, anatomy modal, MAN rules, comments backend state
- **USP banners = Figma 11982-37171 exactly (bar the fascia font):** new `.usp-sep` (4px dash, 8px side gaps — never a mid-dot), `Code:` regular + code value strong (strip cells and black bar both formatted in new mode), `.usp-cav` caveat type (10px caption), `.usp-cd` countdown spec (strong digits, 5px colon columns, `--usp-cd` red on Black/Red), new-mode padding 4px 16px. **Asterisk rule** documented on the site's header/USP section + components.css: * only exists on the Caveat-paired type; caption text is a required prop — no caption, no asterisk (prototype strips orphan asterisks in new mode). DS site demo updated (dash + caveat line + banner-types table).
- **Equal heights**: both USP banners always render equal height — `syncUspH()` two-way sync + shared min-heights (63/56 live, natural in new).
- **Theme-2 padding**: flush 4px card-info padding = the rule for 0-margin/0-gap grids → PLT both modes joins MAN new.
- **Parity rule (03 Sep)**: demo variant layers render in BOTH modes — same product, same data live⇄new; only explicit removals differ (Taggstar live-only, SEO/count/USP-links removed in new, AI watermark new-only).
- **MAN**: new-format top nav defaults to roundels (text under); star ratings + Get It Tomorrow removed brand-wide (deny map in demoVariants covers demo + real data, both modes; rotation substitutes allowed layers).
- **Card anatomy modal** (new format): click any card → per-layer ✓/— breakdown (with why: config off / brand rule / removed-in-new), instance height vs all-layers-on height → px + % saved (hidden probe render).
- **Comments**: shell panel + sheet wiring REMOVED. New Figma-style pinned comments: `assets/review/comments.js` (click-to-pin, name+comment+save, threads with replies, resolve/reopen, eye toggle, numbered pins, scoped per fascia+mode, localStorage persistence + optimistic sync) + `assets/review/comments-worker/` (CF worker + KV, CORS for Pages/localhost). **Deploy blocked**: wrangler OAuth lands on the work CF account (jake.rayner@debenhamsgroup.com) which needs email verification; personal account (jakerayner96, hosts ux-design-request-proxy) is a separate CF user. KV namespace c4d31625… created on work acct; subdomain debenhamsgroup-ux reserved (pending verification). Client REMOTE points at plp-comments.jakerayner96.workers.dev — flip if it ships on the work account.
- **Comments polish:** pins bright blue #0D99FF (open pin inverts white/blue); strip switch label "Show comments (n)"; open ↗ removed from the strip; thread Delete (two-click "Sure?" confirm, worker /delete route); name is REQUIRED on comments and replies (red-flag empty fields client-side, 400 server-side, Anonymous fallback removed).
- **Live USP heights locked:** syncUspH v2 — on mobile every rotating cell locks to the tallest message (hidden probe measure), so the strip no longer breathes 1-line⇄2-line during rotation; desktop rides the grid row; black bar always matches.

## Part 15 — golden buttons, Figma swatches, grid selector, MAN marketplace, PLT pass
- **Buttons fixed to the signed-off golden truth** (brand-colours page, 3rd ask — root causes: load-more was primary except Deb-live; .bd.sec was teal-text+inset-ring not white/outline/black; no case split; 700 weight on Montserrat fascias; PLT zeroed radius; dark fascias + KM missing white primary ink). Now: primary = brand fill + ink, UPPERCASE (KM sentence 400); secondary = white + 1px --btn-outline (Deb #70BEB3, PLT #360502, rest #000) + black label, sentence case; 4px radius + 50px + 16/24 everywhere; footer input 50px. **Load more = secondary, Subscribe = primary, both modes, all fascias.**
- **Swatches = Figma 921-7470 exactly** both modes: 20px, 4px radius (3px fill), Grey-2 border, selected black + white inner keyline, 4px gaps, +N 14px @ 8px. PLT keeps its round variant via config.
- **Grid-view selector** (PLP-Grid-View 194-2513): 16px icon right of the title, mobile only, cycles 2→3→1 columns, persisted. All brands, both modes.
- **App badges**: official Apple SVG + trimmed Google Play PNG → `assets/ds/icons/apps/`, `.ft-apps` row above payments (40px).
- **MAN marketplace**: 6 real third-party products scraped from boohooman.com fragrance PLP (Essenta, ARMAF, Calvin Klein, Lattafa ×2, Police — prices/-%/GROOMING5 codes) interleaved at 5/9/17/25/32/38 via new per-product `img` index (existing products pinned to their image files); card() honours `p.img`.
- **PLT round**: SEO under Load more (live); sand rule tokens — grey/white surfaces map to sand family (`--surface-raised:#FFFDF7, sunken:#FAF5E7, media/Grey-1:#F0E9D6` DRAFT hex); double USP fixed (uspNewB removed — strip already carried the message); 16px header icon set with 12px/9px bag badge (PLP-Grid-View 158-8458) via --hd-icon tokens.
- **Anatomy overlay v2 (interactive):** every card layer now toggles live from the overlay (badge / AI / brand line / quick add / swatches / rating / NDD — blue switches; MAN-denied and fascia-off rows locked with the reason), per-card overrides in a session `OVR` map applied inside demoVariants. **Price = one of three** (segmented): Full price · Sale (red + was + %) · Sale + code line — the code message is editable in the overlay with a live character counter (~N fits one line at this width, red WRAPPING flag via line-height detection). Stats recompute per change.
- **Swatches equalised**: compact card no longer shrinks them — 20px both formats (user rule: new = old).
- **Grid/thumbnail view per design**: exact icons imported (view-thumb.svg = Figma asset from 157-2683; view-grid.svg = exact 3×3 outlined geometry from 157-2631), icon shows the view you switch TO; tile grid (3-col) shows images only — no info, no badges, just wishlist + AI watermark.
- **Overlay v3:** nothing is locked — fascia defaults (quick add, brand line) and MAN brand rules (rating/NDD) all forceable per card, notes stay informational; Image, Wishlist and Taggstar are now toggles too (image off removes the media block; taggstar forceable in new); the px-saved stats line removed. Brand/mode switch closes a stale overlay.
- **Three grid views** (PLP-Grid-View): 2-col thumbnail → 3-col tile → 1-wide list → back, each state showing the EXACT designed icon for the view you switch to (view-grid = 3×3 outline from 157-2631; view-photo asset from 157-2683; view-2col 2×2 asset from 157-2729). Tile view stays images-only.
- **PLP content slots** (DS 8556-18755): square 2-col tile after row 3, new format, all fascias. Types: Button (media + white uppercase CTA), Text (media + gradient + "View All →" + optional Sponsored tag), Get The Look (Grey-05 card, 2×2 mosaic pulling the first product image of 3 chosen SKUs). Click the slot → dark editor: style segment, CTA text (live), image upload (FileReader, session), Sponsored toggle, SKU selects.
- **Content slot round 2:** lives on BOTH modes, all fascias, always opening its row (grid-column:1/span 2 + debounced resize re-place at cols×3). Live defaults to the live-site pattern — **white cutout** bottom-right (chevron, optional text via the editor); new format defaults to the text link and gains two styles: **No link** (media only — no forced chevron) and **Cutout**. Five styles total in the editor (Button / Text link / Cutout / No link / Get the look), per-mode state. MAN's slot media = the real GET IT TOMORROW campaign asset (scraped from the live trans_plp category, mediahub dbz_prod_559cf1d0d7, saved as img/boohooman/slot-git.jpg, both modes). The images-only tile view hides the slot, like badges.
- **Comments feature REMOVED** (04 Sep, Jake: "does not work — remove"): strip controls, page hooks and `assets/review/` (client + worker source) all deleted. The full implementation survives in git history (branch commits around 3062869→0b586ce) if a shared-comment tool returns — root blocker was the undeployed worker (Cloudflare work-account email verification never completed), leaving pins per-browser only.
- MAN live USP = production markup (red countdown, plain subs, two-line grey bar). Live banners fixed at 50px.
- **Live USP = production sizing (04 Sep, supersedes the 50px lock):** no fixed heights — 8px vertical + 16px side padding, bold 14/20 title over 12px-leading sub, content wraps and the banner grows ("if taller so be it"). Strip side padding 29→16px. The two banners size independently now; only the mobile rotation lock (tallest message) remains. MAN grey bar = production #D3D3D3.
- **USP component auto-layout rules built in (11982-37171, ref 13033-187660):** new-format banners are section-based (`uspNewParts`) — the 4px dash joins sections only while they share a line; on wrap it becomes an invisible full-width breaker (`.usp-sep.wrapbr`, stable at boundary widths). Countdown is always its own row via structured `.usp-cd` (strong digits, 5px colon columns in banner ink); MAN's black banner = Black/Red variant (`--usp-cd:#D33F3F`). Bar and strip cells share the builder; PLT/countdown/code content all flow through it.
