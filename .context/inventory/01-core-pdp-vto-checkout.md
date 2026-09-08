# Component inventory — 01-core-pdp-vto-checkout

_Agent report, 08 Sep 2026, from a full read of the cloned repo(s). Line refs are to the repo files at that date. Raw record — the consolidated catalogue is `.context/18-component-inventory.md`._

I have full coverage of all three repos. Here is the report.

---

# UI Component Inventory — 3 Prototype Repos (for DS porting)

**Scope read:** every line of CSS and markup/JS in `core-pdp-2026/pdp.html` (1101 L), `core-pdp-2026/index.html` (194 L), `core-pdp-2026/assets/ds/{tokens,components}.css` (152 + 311 L), `vto-prototype/index.html` (1717 L), `checkout-2026-promo-gift-card/checkout-gift-card.html` (1347 L), plus READMEs, `data.js`, asset manifests.

**Key structural finding:** `core-pdp-2026/assets/ds/tokens.css` + `components.css` are a **verbatim snapshot of the live DS** (copied 08 Sep 2026) — they contain exactly the already-shipped list (button `.bd`, product card `.pc`, header `.hd`, USP `.usp-strip`, sort/filter `.sf-*`, badges, breadcrumb `.bc`, roundels/catpills/catlinks, footer `.ft-*`, `.hd-count`). **Nothing in those two files is new**; every component below comes from the prototypes' own `<style>` blocks. `vto-prototype` and `checkout-2026-promo-gift-card` do **not** link the DS at all — both re-declare their own raw-hex variable sets.

---

## 1. Summary table

| # | Component | Repo | New to DS? | Fascia(s) skinned |
|---|---|---|---|---|
| 1 | Product image gallery (slides + progress pagination + desktop thumbs + arrows) | core-pdp | **Yes** | boohooMAN (live + new) |
| 2 | Gallery overlay tags | core-pdp | **Yes** | boohooMAN |
| 3 | Gallery set end-card (bundle entry 06-1) | core-pdp | **Yes** | boohooMAN |
| 4 | PDP title block + 44px round wishlist button | core-pdp | **Yes** | boohooMAN |
| 5 | Price block (now/was/Save% badge/OOS label) | core-pdp | **Yes** | boohooMAN |
| 6 | Icon message line (NDD countdown) | core-pdp | **Yes** | boohooMAN |
| 7 | Colour selector — 60×89 image swatches | core-pdp | **Yes** (DS has 20px card swatch only) | boohooMAN |
| 8 | Size selector + size-guide link + bell (notify) affordance | core-pdp | **Yes** | boohooMAN |
| 9 | Buy button stack + PayPal / Apple Pay payment buttons | core-pdp | **Yes** (payment buttons) | boohooMAN |
| 10 | Notify-me / back-in-stock form (email + consent checkbox + success) | core-pdp | **Yes** | boohooMAN |
| 11 | PREMIER subscription upsell box | core-pdp | **Yes** | boohooMAN |
| 12 | Deliver+ dark benefits box | core-pdp | **Yes** | boohooMAN |
| 13 | USP / delivery-returns / student info box (`.uspbox`) | core-pdp | **Yes** | boohooMAN |
| 14 | BNPL box (PayPal/Klarna/Clearpay chips) | core-pdp | **Yes** | boohooMAN |
| 15 | "At a Glance" ticked feature list | core-pdp | **Yes** | boohooMAN |
| 16 | Accordion (`.acc`) + hairline divider | core-pdp | **Yes** | boohooMAN |
| 17 | Share row | core-pdp | **Yes** | boohooMAN |
| 18 | Recommendation link chips / tag cloud | core-pdp | **Yes** | boohooMAN |
| 19 | Product rail / rail-head / 3-up grid / edge-bleed scroller | core-pdp | **Yes** (containers) | boohooMAN |
| 20 | Local product card `.card` | core-pdp | No — simplified `.pc` | boohooMAN |
| 21 | Shop The Look module — 3 variants (nodata / data / grid) | core-pdp | **Yes** | boohooMAN |
| 22 | "Complete Your Purchase With" bundle list (live) + select stub | core-pdp | **Yes** | boohooMAN |
| 23 | Bundle entry-point family (11 templates: pill, buy-set box, equation strip, outfit module ×3, content slot, anchor link, price chip ×3, price banner ×2, trio stack) | core-pdp | **Yes** | boohooMAN |
| 24 | Bottom sheet / modal shell (`.sheet` head/body/foot) | core-pdp | **Yes** | boohooMAN |
| 25 | Set-builder row + selectable product card (`.srow`/`.scard`) | core-pdp | **Yes** | boohooMAN |
| 26 | Sheet filter chips | core-pdp | **Yes** | boohooMAN |
| 27 | iOS-style size picker popover | core-pdp | **Yes** | boohooMAN |
| 28 | Added to Bag sheet + bag line item | core-pdp **and** VTO | **Yes** | boohooMAN / boohoo |
| 29 | Toast | core-pdp **and** VTO | **Yes** | boohooMAN / boohoo |
| 30 | Live 2-bar USP (black 3-cell + grey code bar) | core-pdp | Variant of DS USP | boohooMAN |
| 31 | Live boohooMAN footer (accordion cols, joined newsletter) | core-pdp | Variant of `.ft-*` | boohooMAN |
| 32 | Review shell (strip, segmented control, chips, selects, gear panel, iframe + drag resizer, postMessage) | core-pdp | **Yes** (tooling) | brand-agnostic |
| 33 | VTO CTA chip + count badge | VTO | **Yes** | boohoo |
| 34 | Size selector with diagonal strike OOS | VTO | **Yes** (alt to #8) | boohoo |
| 35 | Brand advisor / T-Studio gradient promo banner | VTO | **Yes** | boohoo |
| 36 | Deliver+ banner (pink variant) | VTO | **Yes** | boohoo |
| 37 | Full-screen takeover overlay + screen switcher | VTO | **Yes** | boohoo |
| 38 | Blurred product backdrop | VTO | **Yes** | boohoo |
| 39 | Circle icon button (gradient disc) + staggered action rail | VTO | **Yes** | boohoo |
| 40 | Dark bottom sheet (landing / result) with safe-area | VTO | **Yes** | boohoo |
| 41 | Loading status block (pulsing AI icon, progress bar, 3 phases) | VTO | **Yes** | boohoo |
| 42 | Usage counters (note / line / pill) | VTO | **Yes** | boohoo |
| 43 | Dark result size selector (`.rsize`) | VTO | **Yes** | boohoo |
| 44 | Swipeable result canvas + dots pill | VTO | **Yes** | boohoo |
| 45 | Centre modal (`.vto-modal`) + scrim | VTO | **Yes** | boohoo |
| 46 | Bag counter badge + pop animation | VTO | Variant of `.hd-count` | boohoo |
| 47 | Account-icon AI pulse + ready dot | VTO | **Yes** | boohoo |
| 48 | Native camera / review UI | VTO | **Yes** (platform mimic) | system font |
| 49 | Account landing: greeting, rewards balance card, menu rows, tag/dot/status, sign-out | VTO | **Yes** | boohoo |
| 50 | Page header with back chevron | VTO | **Yes** | boohoo |
| 51 | Try-on photo card (3 states) | VTO | **Yes** | boohoo |
| 52 | Wardrobe tile (`.wtile`) + expiry/NEW chips + thumb + actions + OOS + shake | VTO | **Yes** | boohoo |
| 53 | Looks grid + view toggle + sort dropdown (native select overlay) | VTO | **Yes** | boohoo |
| 54 | Empty state | VTO | **Yes** | boohoo |
| 55 | Text-link button pair with divider (`.plink`) | VTO | **Yes** | boohoo |
| 56 | Checkout header (logo + SECURE CHECKOUT) | checkout | **Yes** | Debenhams |
| 57 | Button set: primary / outline / **pay (navy 8px)** / **inline collapsible** / **spinner state** | checkout | **Yes** (pay, inline, spinner) | Debenhams |
| 58 | Your Bag summary panel + Buy Now | checkout | **Yes** | Debenhams |
| 59 | Section stack / panel pattern | checkout | **Yes** | Debenhams |
| 60 | Delivery option row + Change link + was-price | checkout | **Yes** | Debenhams |
| 61 | Seel Worry-Free Purchase panel + powered-by mark | checkout | **Yes** | Debenhams |
| 62 | Checkbox (24px, aqua) — 2 sizes | checkout | **Yes** | Debenhams |
| 63 | Donation / round-up panel + charity logos | checkout | **Yes** | Debenhams |
| 64 | Floating-label text field (default/focus/filled/error) | checkout | **Yes** | Debenhams |
| 65 | Promo-code + gift-card combined field with morphing layout | checkout | **Yes** | Debenhams |
| 66 | PIN field + reveal slots | checkout | **Yes** | Debenhams |
| 67 | Inline field error | checkout | **Yes** | Debenhams |
| 68 | Messaging banner — success / neutral / error (+ inline action, dismiss) | checkout | **Yes** | Debenhams |
| 69 | Selected payment card (brand mark, static fields, Pay) | checkout | **Yes** | Debenhams |
| 70 | Saved card row + Add New Card row | checkout | **Yes** | Debenhams |
| 71 | Static/read-only field (`.stat-field` grey + white) | checkout | **Yes** | Debenhams |
| 72 | Order summary (rows, discounts, animated gift-card row, total) | checkout | **Yes** | Debenhams |
| 73 | T&Cs consent block | checkout | **Yes** | Debenhams |
| 74 | Demo rail (prototype scaffolding) | checkout | **Yes** (tooling) | brand-agnostic |
| 75 | Type-scale utility classes (h1/body-m/caption/link/strike) | checkout | **Yes** (as classes) | Debenhams |

---

## 2. Token / variable scheme per repo

### 2.1 core-pdp-2026 — **consumes the real DS token file**
`/…/repos/core-pdp-2026/assets/ds/tokens.css` L1–153. `<html data-brand="boohooman">` (pdp.html L2).

- **Layer 1** (mode-invariant, L12–34): `--text-*`, `--surface-*`, `--border-*`, `--icon-*`, `--surface-media:#F2F2F2`, `--surface-callout:#323232`, 4pt spacing scale `--space-2…128`, `--border-w/-emphasis/-focus`, motion `--dur-fast:100ms/--dur-base:200ms/--dur-slow:300ms`, `--ease-standard:cubic-bezier(.2,0,0,1)`, z-index ladder `--z-base…--z-tooltip:800`.
- **Layer 2 per fascia** (L36–150). Full 12-slot families for Debenhams + boohoo; partial for the rest:

| fascia | font | `--surface-action` | `--text-on-action` | `--brand-primary` | radius | case | notes |
|---|---|---|---|---|---|---|---|
| debenhams (default) | Geologica 300/400/600 | `#7BE7D8` | `#000` | `#7BE7D8` | 4/8/pill | btn1 upper, btn2 sentence | link/focus `#00787D`; `--btn-outline:#70BEB3` |
| boohoo | Montserrat 500/400/700 | `#000` | `#FFF` | `#F8B5CC` | 4/8/pill | as above | usp-b `#FFE0EB` |
| boohooman | Montserrat 500/400/700 | `#000` | `#FFF` | `#01FE8A` | 4/8/pill | as above | usp-b `#D3D3D3`; `--usp-cd-live:#FF0000`, `--usp-cd:#D33F3F`; badge `rgba(255,255,255,.85)` |
| plt | Roboto 400/700 | `#550503` | `#FFF` | `#550503` | **0/0/0** | `--cta-case:uppercase` | sand rule: `--surface-raised:#FFFDF7`, `--surface-sunken/-media:#FAF5E7`; `--price-sale:#C90000`; black nav; own header icon sizes `--hd-icon:16px` etc. |
| karenmillen | Jost 400/600 | `#D24508` | `#FFF` | `#D24508` | 4/8/pill | `--w-btn:400`, `--case-btn1:none` | outline `#000` |
| warehouse (DRAFT) | Helvetica Neue | `#000` | `#FFF` | `#0A0A0A` | 4/8/pill | — | usp `#323232` |
| brandroom (DRAFT) | Helvetica Neue | `#000` | `#FFF` | `#0A0A0A` | **0/0/0** | uppercase | — |

- **Prototype-local raw palette** (pdp.html L16–22) sits *alongside* the tokens and is what most new PDP components actually consume:
```css
:root{
  --black:#000;--soft-black:#242424;--white:#fff;--red:#D33F3F;
  --grey-05:#FAFAFA;--grey-1:#F2F2F2;--grey-2:#E7E7E7;--grey-25:#D6D6D6;--grey-3:#B5B5B5;--grey-4:#767676;--grey-5:#6B6B6B;
  --sale-badge-bg:#FDE8E8;--sale-badge-text:#D00000;--paypal:#FFC439;--deliver-bg:#000;--deliver-green:#01FE8A;
  --shadow-pill:0 0 14px -4px rgba(0,0,0,.25);
  --m:16px; /* page side margin */
}
@media(min-width:1024px){:root{--m:48px}}
```
  Mode switching is by body class: `body.mode-live` / `body.mode-new` (pdp.html L12–14, applied L1083).

### 2.2 vto-prototype — **standalone boohoo-only set** (index.html L14–19)
```css
:root{
  --primary:#f8b5cc; --soft-black:#0f0f0f; --grey-05:#fafafa; --grey-25:#d6d6d6;
  --grey-3:#b5b5b5; --grey-4:#767676; --grey-5:#6b6b6b; --grey-6:#323232;
  --red:#d33f3f; --bag-primary:#f8b5cc; --bag-border:#f8b5cc;
  --ease-sheet:cubic-bezier(0.32,0.72,0,1);
}
```
Undeclared-but-used (fallback-only, **bug to fix on port**): `var(--dark-2,#ea92b0)` (L471) and `var(--grey-1,#f2f2f2)` (L419, L452). Also hard-coded outside the scheme: `#bb305f` (AI/accent dot, NEW chip, plinks, chip badge), `#ffe0eb` (USP pink / rewards card), `#f1dce3` (OOS button), `#00787d` (toast View link — group teal, flagged as an intentional Figma quirk in CLAUDE.md), `#fde8e8`/`#d00000` (save badge), `#ffc439` (PayPal), `#ffd60a` (camera PHOTO label). Fonts: Montserrat 300–800 + italic; camera screens deliberately `-apple-system`.

### 2.3 checkout-2026-promo-gift-card — **standalone Debenhams-only set** (L28–56)
```css
:root{
  --black:#000000;--white:#ffffff;
  --primary:#7be7d8;      /* Primary, filled CTA */
  --dark-2:#70beb3;       /* Dark 2, outlined CTA border */
  --cta-aqua:#00787d;     /* CTA Aqua, links */
  --grey-05:#fafafa;--grey-1:#f2f2f2;--grey-2:#e7e7e7;--grey-3:#b5b5b5;--grey-5:#6b6b6b;
  --grey-placeholder:#767676;
  --navy:#00112c;--navy-border:#03112a;
  --field-grey:#efeff1;--field-border:#dbdee2;--field-text:#5c687c;
  --success-bar:#70c474;--success-bg:#eaf6ea;
  --error:#d33f3f;--error-bg:#fff2f2;
  --spinner-tint:#e8f4f2;   /* State=Spinner fill and border */
  --ease-out:cubic-bezier(.22,.61,.36,1);
  --dur-reveal:320ms;--dur-morph:300ms;--dur-fade:170ms;
}
@media (prefers-reduced-motion:reduce){:root{--dur-reveal:1ms;--dur-morph:1ms;--dur-fade:1ms;}} /* L465-467 */
```
Names map 1:1 onto DS semantics but the values are inlined, **not** referencing `tokens.css`. `--navy`, `--navy-border`, `--field-grey`, `--field-border`, `--field-text`, `--success-bar`, `--spinner-tint` have **no DS equivalent today** — they are new tokens the DS needs.

---

## 3. core-pdp-2026 (boohooMAN) — components

> Files: CSS `pdp.html` L10–493 · markup L495–752 · JS L754–1098. Fascia: boohooMAN only (review shell disables the other four brand chips: `index.html` L59–64).

### C1 · Product image gallery + pagination + thumbs + arrows
Scrolling snap gallery; mobile 233×350 (new) / 66%-wide 2:3 (live); desktop swaps to 100px thumb column + single 2:3 main image with circular arrows and a 4px progress track.
- CSS `pdp.html` L94–123 · markup L546–554 · JS `renderGallery()` L794–825
- Variants/states: `mode-new` (233px fixed slides, 8px gap) vs `mode-live` (66% slides, 16px gap); desktop `.galwrap` grid; thumb `.on` = 2px black border; pagination `.fill` width = (idx+1)/slides.
- Specs: slide `flex:0 0 233px; height:350px`; live `aspect-ratio:2/3`; track `height:4px; background:var(--grey-25); radius:100px`, fill `#000`, `transition:width .2s`; thumbs `width:100px; aspect-ratio:2/3; gap:8px`; arrow `32px` circle, `box-shadow:0 2px 8px rgba(0,0,0,.15)`, inset 12px; desktop grid `100px minmax(0,1fr)` gap 24px.
- Tokens: `--surface-media`, `--grey-25`.
```css
.gal{display:flex;gap:8px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;position:relative}
.gal::-webkit-scrollbar{display:none}
.gal .slide{flex:0 0 233px;width:233px;height:350px;scroll-snap-align:start;position:relative;background:var(--surface-media)}
.mode-live .gal .slide{flex:0 0 66%;width:66%;height:auto;aspect-ratio:2/3}
.mode-live .gal{gap:16px}
.gal .slide img{width:100%;height:100%;object-fit:cover}
.pag{padding:16px 16px 0}
.pag .track{height:4px;background:var(--grey-25);border-radius:100px;position:relative;overflow:hidden}
.pag .fill{position:absolute;top:0;left:0;bottom:0;width:25%;background:#000;border-radius:100px;transition:width .2s}
.thumbs{display:none}
@media(min-width:1024px){
  .galwrap{display:grid;grid-template-columns:100px minmax(0,1fr);gap:24px;align-items:start}
  .thumbs{display:flex;flex-direction:column;gap:8px}
  .thumbs button{width:100px;aspect-ratio:2/3;background:var(--surface-media);overflow:hidden;border:2px solid transparent}
  .thumbs button.on{border-color:#000}
  .gal{scroll-snap-type:none;overflow:hidden}
  .gal .slide,.mode-live .gal .slide{flex:0 0 100%;width:100%;height:auto;aspect-ratio:2/3}
  .pag{display:none}
  .arrow{position:absolute;top:50%;transform:translateY(-50%);width:32px;height:32px;border-radius:99px;background:#FFF;box-shadow:0 2px 8px rgba(0,0,0,.15);display:grid;place-items:center}
  .arrow.l{left:12px}.arrow.r{right:12px}
}
```

### C2 · Gallery overlay tags
Grey translucent labels top-left of slide 1 ("Plus Sizes Available", "480GSM").
- CSS L100–104 · JS injection L800
- Variants: live (16px text, 12px 8px padding) vs new (12px, 4px 8px, uses `--badge-bg`); `.tags.hide` when new-format hides them.
```css
.gal .tags{position:absolute;left:24px;top:24px;display:flex;flex-direction:column;gap:12px}
.gal .tag{background:rgba(231,231,231,.9);color:#000;font-size:12px;font-weight:300;padding:6px 8px;border-radius:4px;white-space:nowrap}
.mode-live .gal .tag{font-size:16px;padding:12px 8px}
.mode-new .gal .tag{background:var(--badge-bg);font-size:12px;font-weight:var(--w-regular);padding:4px 8px}
```

### C3 · Gallery set end-card (bundle entry 06-1)
Terminal gallery slide: grey-05 panel holding a 3+3 image mosaic and "SHOP MORE SETS", opens the set builder.
- CSS L126–132 · JS L804–808 · state gate `S.entry==='06-1'`
```css
.slide.endcard{background:var(--grey-05);display:none;flex-direction:column;align-items:center;justify-content:center;padding:24px;cursor:pointer}
.slide.endcard.on{display:flex}
.endcard .stack{display:flex;flex-direction:column;gap:16px;align-items:center;width:100%}
.endcard .rows{display:flex;flex-direction:column;gap:2px;width:100%}
.endcard .row{display:flex;gap:2px}
.endcard .row img{flex:1;min-width:0;aspect-ratio:64/96;object-fit:cover;height:auto}
.endcard .cta{font-size:12px;font-weight:700}
```

### C4 · PDP title block + round wishlist button
- CSS L137–144 · markup L557–566
- Specs: brand 16/600, name 16/400 (live 300); wishlist 44×44, `radius:99px`, `1px var(--grey-2)`, 16px glyph.
```css
.brand-product{display:flex;flex-direction:column;gap:8px}
.title-row{display:flex;gap:8px;align-items:flex-start}
.title-text{flex:1;display:flex;flex-direction:column;gap:4px}
.brand{font-size:16px;font-weight:600}
.pname{font-size:16px;font-weight:400}
.mode-live .pname{font-weight:300}
.wish{position:relative;width:44px;height:44px;flex:none;border-radius:99px;border:1px solid var(--grey-2);display:grid;place-items:center;background:#FFF}
.wish img{width:16px;height:16px}
```

### C5 · Price block (now / was / Save% badge / OOS label)
- CSS L145–151 · JS `renderPrice()` L841–847
- States: plain, sale (`.price-now.sale` red + strikethrough was + `Save N%` badge computed L845), out-of-stock label (live only, L846).
- Specs: now 24/600; was 20/400 `--grey-5` line-through; save badge `#FDE8E8` bg / `#D00000` text, 14/500, 4px 8px, radius 4; OOS 16/500, `letter-spacing:.02em`, red.
```css
.price-row{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
.price-vals{display:flex;align-items:flex-end;gap:8px;white-space:nowrap}
.price-now{font-size:24px;font-weight:600;line-height:normal}
.price-now.sale{color:var(--red)}
.price-was{font-size:20px;font-weight:400;color:var(--grey-5);text-decoration:line-through;line-height:normal}
.save{background:var(--sale-badge-bg);color:var(--sale-badge-text);font-size:14px;font-weight:500;padding:4px 8px;border-radius:4px}
.oos-lbl{color:var(--red);font-size:16px;font-weight:500;letter-spacing:.02em}
```

### C6 · Icon message line (NDD countdown)
Generic 20px-icon + 14px message row, bolded value. Live drops to weight 400. Live countdown driven by `tick()` (L1070–1076, updates every 1s to midnight).
```css
.icon-msg{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:500}
.mode-live .icon-msg{font-weight:400}
.icon-msg img{width:20px;height:20px}
.icon-msg b{font-weight:600}
```

### C7 · Colour selector — 60×89 image thumbnails
Because the platform stores colours as separate SKUs, live shows no swatches; new format renders the family's colours as portrait thumbnails.
- CSS L156–165 · markup L574–577 · JS `renderSwatches()` L827–836 (click swaps hero SKU, clears size + notify state)
- States: `.on` = black border + 1px white inner keyline (`::after`), matching the DS 20px swatch selected treatment at a larger scale.
```css
.colour{display:flex;flex-direction:column;gap:8px}
.colour-lbl{font-size:16px;font-weight:300}
.colour-lbl b{font-weight:500}
.swatches{display:flex;gap:8px;flex-wrap:wrap}
.mode-live .swatches{display:none}
.sw{width:60px;height:89px;border-radius:4px;border:1px solid var(--grey-1);overflow:hidden;position:relative;padding:0;background:var(--surface-media)}
.sw img{width:100%;height:100%;object-fit:cover;border-radius:3px}
.sw.on{border-color:#000}
.sw.on::after{content:"";position:absolute;inset:0;border:1px solid #FFF;border-radius:3px;pointer-events:none}
```

### C8 · Size selector + size-guide link + bell affordance
- CSS L166–182 · markup L579–585 · JS `renderSizes()` L848–861, stock model `sizeState()` L784–789
- Variants: new `60×50`; live `53×50` with `#E5E7EB` border (live truth). States: default, `.on` (2px black border, 700), `.oos` (grey-4 label in live; **black in new format** — L179), `.bellable` (bell icon top-right 14px, only for genuinely notifiable sizes). Label states: "Select a size:" / "Size: **M**" / "Size: Out of Stock" (L850–854).
```css
.sizes{display:flex;flex-direction:column;gap:12px}
.size-head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.size-head .lbl{font-size:16px;font-weight:400;flex:1}
.mode-live .size-head .lbl{font-weight:300}
.size-head .lbl b{font-weight:500}
.size-head .lbl .oos{color:var(--red);font-weight:500;letter-spacing:.02em}
.size-guide{display:flex;align-items:center;gap:4px;font-size:14px;font-weight:400;white-space:nowrap}
.size-guide img{width:16px;height:16px}
.size-btns{display:flex;gap:8px;flex-wrap:wrap}
.sz{width:60px;min-width:60px;height:50px;background:#FFF;border:1px solid var(--grey-3);border-radius:4px;font-size:16px;font-weight:400;display:flex;align-items:center;justify-content:center;position:relative;color:#000}
.mode-live .sz{width:53px;min-width:53px;border-color:#E5E7EB}
.sz.on{border:2px solid #000;font-weight:700}
.sz.oos{color:var(--grey-4)}
.mode-new .sz.oos{color:#000}
.sz .bell{position:absolute;right:3px;top:3px;width:14px;height:14px}
.mode-live .sz.oos .bell{display:none}
.mode-live .sz.oos.bellable .bell{display:block}
```

### C9 · Buy button stack + PayPal / Apple Pay payment buttons
Note this is a **local re-declaration of the DS button** at 50px with `text-transform:uppercase` hard-set, plus two express-payment variants the DS lacks.
- CSS L183–191 · markup L587–591
- Specs: 50px height, radius 4, 16/600/24, gap 8; primary `#000`/white; secondary white + `1px var(--grey-3)`; PayPal `#FFC439` with 20px-high logo; Apple `#000` with 22px logo; PayPal hidden in live mode (L191).
```css
.buy-btns{display:flex;flex-direction:column;gap:8px}
.btn{height:50px;border-radius:4px;font-size:16px;font-weight:600;line-height:24px;display:flex;align-items:center;justify-content:center;width:100%;text-transform:uppercase;gap:8px}
.btn.p{background:#000;color:#FFF}
.btn.s{background:#FFF;color:#000;border:1px solid var(--grey-3)}
.btn.paypal{background:var(--paypal)}
.btn.paypal img{height:20px;width:auto}
.btn.apple{background:#000}
.btn.apple img{height:22px;width:auto}
.mode-live .btn.paypal{display:none}
```

### C10 · Notify-me / back-in-stock form  ★high-value
Replaces the buy block when the selected size (or whole product) is OOS. Figma 1042:66804.
- CSS L193–206 · markup L593–599 · JS `renderBuy()` L862–872, handlers L873–874
- States: **prompt** (h4 "Get notified when it's back in stock?" + email field + Notify me button + consent row) → **success** (h4 "You'll be notified…", field/button/consent hidden, grey-05 confirmation strip "Stock alert enabled for size M") + toast "Stock Alert Enabled". Validation: email regex `/.+@.+\..+/` and consent required (L874).
- Checkbox `.cb`: **24×24, radius 3, black fill, 14px white tick; `.off` = white + 1px grey-3** (this is the reusable checkbox primitive in this repo).
```css
.notify{display:flex;flex-direction:column;gap:16px}
.notify h4{font-size:16px;font-weight:600}
.notify .inp{height:50px;border:1px solid var(--grey-3);border-radius:4px;padding:8px 16px;display:flex;align-items:center;background:#FFF}
.notify .inp input{border:none;outline:none;font:inherit;font-size:14px;width:100%;color:#000;background:none}
.notify .inp input::placeholder{color:var(--grey-5)}
.notify .btn .bell{width:16px;height:16px;filter:invert(1)}
.notify .consent{display:flex;gap:12px;align-items:flex-start;font-size:12px;font-weight:400;line-height:1.35}
.notify .consent a{font-weight:600}
.cb{width:24px;height:24px;min-width:24px;border-radius:3px;background:#000;display:grid;place-items:center;border:none}
.cb img{width:14px;height:14px}
.cb.off{background:#FFF;border:1px solid var(--grey-3)}
.cb.off img{display:none}
.notify .done{background:var(--grey-05);border-radius:4px;padding:12px 16px;font-size:14px;display:flex;gap:8px;align-items:center}
```

### C11 · PREMIER subscription upsell box (live only)
```css
.premier{background:#D3D3D3;border-radius:4px;padding:16px 20px;display:flex;gap:12px;align-items:center;justify-content:space-between}
.premier .t{font-size:14px;font-weight:400;line-height:21px}
.premier .t b{display:block;font-size:22px;font-weight:800;font-style:italic;letter-spacing:-.02em;margin-bottom:4px}
.premier .add{background:#000;color:#FFF;font-size:14px;text-transform:uppercase;padding:8px 16px;border-radius:4px;flex:none}
.mode-new .premier{display:none}
```
CSS L208–213 · markup L601. Uses the boohooMAN grey `#D3D3D3` (same value as `--usp-b-bg`).

### C12 · Deliver+ dark benefits box
Black card, 121×15 logo, ticked list (icons inverted), "Learn More", italic testimonial with top rule.
- CSS L218–225 · content template `DELIVER` L880–885 · injected by `renderBoxes()` L890–892 into both a mobile (`#deliver-m`) and desktop (`#deliver-d`) mount — the desktop/mobile duplication pattern is worth carrying (L241–245).
```css
.deliver{background:var(--deliver-bg);border-radius:4px;padding:16px 20px;display:flex;flex-direction:column;gap:12px;color:#FFF}
.deliver .dp{width:121px;height:15px}
.deliver .h{font-size:14px;font-weight:600}
.deliver ul{list-style:none;display:flex;flex-direction:column;gap:8px}
.deliver li{display:flex;align-items:flex-start;gap:8px;font-size:12px;line-height:18px;font-weight:400}
.deliver li img{width:16px;height:16px;flex:none;filter:invert(1);margin-top:1px}
.deliver .more{font-size:14px;font-weight:600}
.deliver .quote{font-size:12px;font-weight:300;font-style:italic;border-top:1px solid rgba(255,255,255,.25);padding-top:12px}
```

### C13 · USP / delivery-returns / student info box (`.uspbox`)
Generic white bordered card of icon+text rows; used twice (delivery/returns, student exclusive).
- CSS L226–234 · content `USPBOX` L886–887, `STUDENT` L888
```css
.uspbox{background:#FFF;border:1px solid var(--grey-2);border-radius:4px;padding:16px;display:flex;flex-direction:column;gap:16px}
.uspbox .r{display:flex;gap:16px;align-items:flex-start}
.uspbox .r img{width:24px;height:24px;flex:none}
.uspbox .txt{flex:1;display:flex;flex-direction:column;gap:2px}
.uspbox .t14{font-size:14px;font-weight:400;line-height:21px}
.uspbox .t12{font-size:12px;font-weight:400;line-height:18px}
.uspbox .cap{font-size:16px;font-weight:400}
.uspbox .strong{font-size:16px;font-weight:600}
```

### C14 · BNPL box + provider chips
```css
.bnpl{background:#FFF;border:1px solid var(--grey-2);border-radius:4px;padding:16px;display:flex;flex-direction:column;gap:12px}
.bnpl .badges{display:flex;gap:8px}
.bnpl .badges span{height:28px;padding:0 10px;border-radius:4px;display:flex;align-items:center;font-size:11px;font-weight:700}
.bnpl .pp{background:#F5F8FC;color:#003087}.bnpl .kl{background:#FFB3C7;color:#000}.bnpl .cp{background:#B2FCE4;color:#000}
.bnpl .terms{font-size:14px;font-weight:300;color:var(--grey-4);line-height:21px}
.bnpl .more{font-size:14px;font-weight:400;text-decoration:underline;text-underline-position:from-font}
```
CSS L235–240 · content `BNPL` L889. Provider brand colours are hard-coded (PayPal `#F5F8FC/#003087`, Klarna `#FFB3C7`, Clearpay `#B2FCE4`) — needs a `payment-provider` token set.

### C15 · "At a Glance" ticked feature list
- CSS L314–319 · markup L640–647
- Variants: live = vertical list, 16/300, 24px circled tick; new = wrapping horizontal chips at 14px.
```css
.glance{display:flex;flex-direction:column;gap:16px}
.glance li{display:flex;align-items:center;gap:8px;font-size:16px;font-weight:300;list-style:none}
.glance li i{width:24px;height:24px;border-radius:99px;border:1px solid var(--grey-25);display:grid;place-items:center;flex:none}
.glance li i img{width:12px;height:12px}
.mode-new .glance{flex-direction:row;flex-wrap:wrap;gap:12px 16px}
.mode-new .glance li{font-size:14px}
```

### C16 · Accordion + divider
- CSS L320–329 · markup L649–668 · JS L1069 (`.acc-h` click toggles `.open`)
- States: closed / `.open` (chevron rotates 180°, body shown). Body 16/300/28 line-height, nested `ul` indent 24px, `.sku` 14px uppercase. Divider = 1px `--grey-2`.
```css
.divider{height:1px;background:var(--grey-2);width:100%}
.acc{display:flex;flex-direction:column;gap:16px}
.acc-h{display:flex;align-items:center;justify-content:space-between;width:100%}
.acc-h img{width:16px;height:16px;transition:transform .2s}
.acc.open .acc-h img{transform:rotate(180deg)}
.acc-b{display:none;font-size:16px;font-weight:300;line-height:28px}
.acc.open .acc-b{display:block}
.acc-b ul{padding-left:24px;display:flex;flex-direction:column;gap:8px;margin-bottom:16px}
.acc-b p{margin-bottom:16px}
.acc-b .sku{font-size:14px;text-transform:uppercase}
```

### C17 · Share row
```css
.share-row{display:flex;justify-content:space-between;align-items:center;font-size:16px;font-weight:500}
.share-row img{width:16px;height:16px}
```
CSS L330–331 · markup L670.

### C18 · Recommendation link chips / tag cloud
- CSS L334–338 · markup L678–683
- Variants: live = plain centred underline-free 16/300 links; new = grey-05 chips with 1px grey-2 border, radius 4, 8px 12px, 14px.
```css
.reclinks{padding:0 var(--m);display:flex;flex-direction:column;gap:16px}
.reclinks .rail-title{font-size:16px;font-weight:600}
.chips{display:flex;flex-wrap:wrap;gap:8px 16px;justify-content:center}
.chips a{font-size:16px;font-weight:300;padding:4px 0}
.mode-new .chips a{background:var(--grey-05);border:1px solid var(--grey-2);border-radius:4px;padding:8px 12px;font-size:14px}
```

### C19 · Product rail / rail head / 3-up grid / edge-bleed scroller
The layout containers the DS product card gets dropped into. Note the **4px column gutter** in new format vs 16px live, and the full-bleed right-edge scroller.
```css
.rail{display:flex;flex-direction:column;gap:16px}
.rail-title{font-size:18px;font-weight:600;line-height:1.5}
.rail-head{display:flex;justify-content:space-between;align-items:center}
.rail-head .all{font-size:12px;font-weight:600}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px 4px}
.mode-live .grid3{gap:24px 16px}
.scroll{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none;padding-right:var(--m)}
.scroll .card{flex:0 0 165px}
@media(min-width:1024px){.grid3{grid-template-columns:repeat(6,1fr);gap:24px 16px}.scroll .card{flex:0 0 220px}}
```
CSS L263–272 · used at L629–637, L673–676.

### C20 · Local product card `.card` — **not new**, but simpler than DS `.pc`
CSS L248–262, factory `card()` L897–904. 170/255 image ratio, 32px circular wishlist chip with 12px glyph, 2-line clamped name at fixed `height:2.7em`, `-N%` percentage-off token. Flag as a **regression vs `.pc`** (no swatches, badges, taggstar, NDD, stars, quick-add) — port callers to `.pc` rather than porting this.

### C21 · Shop The Look module — 3 variants  ★high-value
Recommendation module that opens Create The Look.
- CSS L274–288 · JS `renderLook()` L917–935, item selection `lookItems()` L916
- Variants: `.look.nodata` (grey-05 panel, 150×225 image strip, whole block tappable — the brief's default), `.look.data` (white, DS-card carousel, 16px inset head), `.look.grid` (white, 3-up→6-up grid of 6 colour-matched items). Hidden entirely in live mode (L288) and when product OOS (L919).
```css
.look{cursor:pointer}
.look.nodata{background:var(--grey-05);padding:16px;display:flex;flex-direction:column;gap:16px}
.look.nodata .imgs{display:flex;gap:4px;overflow-x:auto;scrollbar-width:none}
.look.nodata .imgs img{flex:0 0 150px;width:150px;height:225px;object-fit:cover}
.look.data{background:#FFF;padding:16px 0;display:flex;flex-direction:column;gap:16px}
.look.data .rail-head{padding:0 16px}
.look.data .scroll{padding-left:16px}
.look.grid{background:#FFF;padding:16px;display:flex;flex-direction:column;gap:16px}
@media(min-width:1024px){
  .look.nodata .imgs img{flex:0 0 220px;width:220px;height:330px}
  .look.grid .grid3{grid-template-columns:repeat(6,1fr)}
}
.mode-live .look{display:none}
```

### C22 · "Complete Your Purchase With" bundle list (live production module)
100px-thumb + details rows with a select-a-size stub, running total and Add to Bag (n).
- CSS L290–309 · JS `renderCYP()` L936–945
- Includes a **select/dropdown stub** `.cyp .sel` (50px, 1px grey-2, chevron) — the closest thing to a select control in this repo.
```css
.cyp{display:none;flex-direction:column;gap:12px}
.mode-live .cyp{display:flex}
.cyp .box{border:1px solid var(--grey-2);border-radius:4px;padding:16px 16px 24px;display:flex;flex-direction:column;gap:24px}
.cyp .it{display:grid;grid-template-columns:100px 1fr;gap:20px}
.cyp .it .im{position:relative;aspect-ratio:2/3;background:var(--surface-media)}
.cyp .it .cb{position:absolute;left:12px;top:12px}
.cyp .it .cur{font-size:12px;font-weight:300;color:#777;padding-bottom:4px}
.cyp .it .b{font-size:14px;font-weight:500}
.cyp .it .n{font-size:14px;font-weight:300;padding-top:4px}
.cyp .it .p{font-size:16px;font-weight:600;padding-top:8px}
.cyp .sel{margin-top:8px;height:50px;border:1px solid var(--grey-2);border-radius:4px;display:flex;align-items:center;justify-content:between;padding:0 16px;color:var(--grey-4);font-size:16px}
.cyp .tot{text-align:center;font-size:16px;font-weight:500}
.cyp .tot span{font-weight:300}
```
*(the `justify-content` value in the source is `space-between`, L305.)*

### C23 · Bundle entry-point family — 11 templates  ★high-value
One shared behaviour (`.entry` → `openSheet('set')`), eleven presentations, slotted into four PDP anchor points (`SLOT` map L976: `01`→under brand, `03`→under buy buttons, `04`→below-fold rail, `07`→under price).
- CSS L359–418 · `<template>` markup L738–752 · JS `renderEntry()` L977–989 (fills `img[data-set]` from `setImages(3)` L906–910 and `[data-pieces]` copy from `setPieces()`)
- Sub-components and their specs:

| id | class | key specs |
|---|---|---|
| 01-1/4/8 | `.chip-entry` (`.round`/`.square`/`.outlined`) | white pill, `padding:9px 14px`, 12/600, `box-shadow:0 0 14px -4px rgba(0,0,0,.25)`, optional 16px hanger icon |
| 03-1 | `.buy-set-box` | 117px tall, 50/50 split: 48:72 image strip + grey-05 copy pane (`16px 24px`), h 16/600 + s 12/400 grey-4 |
| 03-2 | `.equation-strip` | 116px, grey-05, flexible image strip + fixed 127px centred 14/600 label |
| 04-1/2/3 | `.outfit-module` + `.outfit-scroll.two-up/.three-up` / `.outfit-grid` + `.outfit-caption` | 390:585 images at 64.7% / 40.2% (desktop 25% / 20%); grid 2-up→4-up; caption `padding:16px`, h 16/600 capitalize, s 12/400 grey-4, cta 12/600 |
| 04-4 | `.content-slot` + `.plp-slot` | 1:1 (desktop 3:1) image, caption overlay = 60%-height white gradient `linear-gradient(to bottom,rgba(255,255,255,0),#fff 86.6%)`, then a product carousel |
| 07-1 | `.anchor-link` | 20px badge icon + 14/600 label + 7×12 chevron |
| 07-2/3/4 | `.price-chip` (+`.with-trio`) | grey-05, radius 4, `padding:12px` (trio `8px 12px 8px 8px`), label 14/500, shop 12/600 |
| 07-5/6 | `.price-banner.boxed` / `.bare` | boxed = grey-05 + 12px pad; bare = `padding:8px 0` |
| — | `.trio` | 84×74 stack of three 44×66 images at 2px radius, offsets `left:0/20/40 top:8/4/0`, `--shadow-pill` |

```css
.chip-entry{display:flex;align-items:center;gap:6px;background:#FFF;padding:9px 14px;box-shadow:var(--shadow-pill);font-size:12px;font-weight:600;color:#000}
.chip-entry.round{border-radius:100px}.chip-entry.square{border-radius:4px}.chip-entry.outlined{border:1px solid #000}
.buy-set-box{display:flex;height:117px;border-radius:4px;overflow:hidden;width:100%;padding:0}
.buy-set-box .imgs{display:flex;height:100%;flex:0 0 50%;min-width:0;overflow:hidden}
.buy-set-box .imgs img{height:100%;aspect-ratio:48/72;object-fit:cover;width:auto}
.buy-set-box .copy{flex:0 0 50%;min-width:0;background:var(--grey-05);display:flex;flex-direction:column;justify-content:center;gap:4px;padding:16px 24px}
.equation-strip{display:flex;height:116px;background:var(--grey-05);border-radius:4px;overflow:hidden;width:100%}
.equation-strip .copy{width:127px;flex:none;display:flex;align-items:center;justify-content:center;padding:0 16px;font-size:14px;font-weight:600;text-align:center}
.outfit-module{background:var(--grey-05);cursor:pointer}
.outfit-scroll{display:flex;overflow-x:auto;scrollbar-width:none}
.outfit-scroll img{flex:0 0 auto;aspect-ratio:390/585;object-fit:cover;height:auto}
.outfit-scroll.two-up img{width:64.7%}
.outfit-scroll.three-up img{width:40.2%}
.outfit-grid{display:grid;grid-template-columns:1fr 1fr}
.outfit-caption{display:flex;align-items:center;justify-content:space-between;padding:16px;white-space:nowrap}
.plp-slot .cap{position:absolute;left:0;right:0;bottom:0;height:60%;background:linear-gradient(to bottom,rgba(255,255,255,0),#fff 86.6%);display:flex;align-items:flex-end;justify-content:space-between;padding:16px}
.price-chip{background:var(--grey-05);border-radius:4px;display:flex;align-items:center;justify-content:space-between;width:100%;padding:12px}
.price-chip.with-trio{padding:8px 12px 8px 8px}
.trio{position:relative;width:84px;height:74px;flex:none}
.trio img{position:absolute;width:44px;height:66px;object-fit:cover;border-radius:2px;box-shadow:var(--shadow-pill)}
.trio img:nth-child(1){left:0;top:8px}.trio img:nth-child(2){left:20px;top:4px}.trio img:nth-child(3){left:40px;top:0}
```

### C24 · Bottom sheet / modal shell  ★high-value
- CSS L420–429, L455–458 · markup L712–719 · JS `openSheet()` L1006–1014, `closeSheet()` L1015, Escape + `[data-close]` handlers L1060–1064
- Specs: full-bleed to `calc(100% - 56px)` on mobile, radius `4px 4px 0 0`, slides on `transform .25s ease`; ≥768px becomes a centred 480px card `height:min(838px, calc(100% - 48px))` with full 4px radius. Scrim `rgba(0,0,0,.4)`. Head 20/600 `--soft-black`, 24px close. Sticky grey-05 foot with total row + primary CTA (disabled → `--grey-3`). Locks `body` overflow.
```css
.sheet{position:fixed;inset:0;z-index:50;display:flex;align-items:flex-end;justify-content:center}
.sheet .bg{position:absolute;inset:0;background:rgba(0,0,0,.4)}
.sheet .panel{position:relative;width:100%;height:calc(100% - 56px);background:#FFF;border-radius:4px 4px 0 0;display:flex;flex-direction:column;padding-top:24px;transform:translateY(100%);transition:transform .25s ease}
.sheet.open .panel{transform:translateY(0)}
@media(min-width:768px){.sheet{align-items:center}.sheet .panel{max-width:480px;height:min(838px,calc(100% - 48px));border-radius:4px}}
.sheet .head{display:flex;gap:12px;align-items:center;padding:0 24px 24px;flex:none}
.sheet .head h2{flex:1;font-size:20px;font-weight:600;color:var(--soft-black);line-height:1}
.sheet .body{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:20px;padding-bottom:24px}
.sheet .foot{flex:none;background:var(--grey-05);padding:16px 24px 24px;display:flex;flex-direction:column;gap:16px}
.sheet .foot .tot{display:flex;justify-content:space-between;font-size:16px;font-weight:500}
.sheet .foot .btn.p:disabled{background:var(--grey-3);cursor:not-allowed}
```

### C25 · Set-builder row + selectable product card  ★high-value
One row per product family; one pick per row; siblings dim to 30% once a pick is made; each card carries its own size trigger.
- CSS L433–454 · JS `renderSheet()` L1016–1039, card click L1029, size trigger L1030
- States: default, `.on` (tick checkbox on, `--shadow-pill` on image), `.dim` (`opacity:.3`), size value `placeholder` → `.set` (black) → `.err` (red, set by the ADD TO BAG validation at L1041).
```css
.srow{display:flex;flex-direction:column;gap:12px}
.srow .rh{display:flex;align-items:center;justify-content:space-between;padding:0 24px}
.srow .rh .lbl{font-size:16px;font-weight:500;text-transform:capitalize}
.srow .rh .all{font-size:12px;font-weight:600}
.srow .cards{display:flex;gap:4px;padding-left:24px;overflow-x:auto;scrollbar-width:none;padding-right:24px}
.scard{flex:0 0 140px;width:140px;display:flex;flex-direction:column;gap:12px}
.scard .im{position:relative;aspect-ratio:170/255;overflow:hidden;background:var(--surface-media);cursor:pointer;transition:opacity .15s}
.scard.dim .im{opacity:.3}
.scard.on .im{box-shadow:var(--shadow-pill)}
.scard .cb{position:absolute;left:8px;top:8px}
.scard .pr{display:flex;flex-wrap:wrap;gap:4px 8px;font-size:14px;align-items:center}
.scard .sz-sel{display:flex;gap:8px;align-items:center;font-size:14px;font-weight:400;cursor:pointer}
.scard .sz-sel .v{color:var(--grey-4)}
.scard .sz-sel .v.set{color:#000}
.scard .sz-sel .v.err{color:var(--red)}
.scard .nm{font-size:12px;color:var(--grey-4);font-weight:400;-webkit-line-clamp:1}
```

### C26 · Sheet filter chips
```css
.sheet .filters{display:flex;gap:8px;padding:0 24px;overflow-x:auto;scrollbar-width:none;flex:none}
.sheet .filters span{border:1px solid var(--grey-3);border-radius:99px;padding:6px 12px;font-size:12px;display:flex;gap:6px;align-items:center;white-space:nowrap}
.sheet .filters img{width:10px;height:10px}
```
CSS L430–432 · injected only for the `look` variant (L1018). Differs from DS `.sf-pill` (34px, grey-2 border, 42px radius) — reconcile.

### C27 · iOS-style size picker popover
```css
.pick{position:fixed;inset:0;z-index:60;display:flex;align-items:center;justify-content:center}
.pick .bg{position:absolute;inset:0}
.pick .menu{position:relative;width:223px;background:rgba(255,255,255,.92);backdrop-filter:blur(20px);border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.25);padding:8px 0;overflow:hidden}
.pick .menu .t{padding:8px 16px;font-size:12px;color:var(--grey-4)}
.pick .menu button{display:block;width:100%;padding:12px 16px;font-size:16px;font-weight:400;border-top:1px solid rgba(0,0,0,.08)}
.pick .menu button.oos{color:var(--grey-3);text-decoration:line-through}
.pick .menu button:hover{background:rgba(0,0,0,.04)}
```
CSS L459–466 · markup L721–724 · JS `openPick()` L1047–1052. States: available / `.oos` (grey-3 + strikethrough, tap raises toast).

### C28 · Added to Bag sheet + bag line item
- CSS L467–480 · markup L726–733 · JS `openATB()` L1054–1058
- Specs: auto-height panel, 24px pad; line item grid `99px 1fr`, gap 16, fixed 148px height; brand 16/600, name 16/400/23, variant 16/500 pushed to bottom via `margin-top:auto`, price 12/500 with red sale + `<s>` was.
```css
.atb .panel{height:auto;padding:24px}
.atb .head{padding:0 0 24px}
.atb .items{display:flex;flex-direction:column;gap:24px;padding-bottom:24px}
.atb .it{display:grid;grid-template-columns:99px 1fr;gap:16px;height:148px}
.atb .it img{width:99px;height:148px;object-fit:cover}
.atb .it .b{font-size:16px;font-weight:600}
.atb .it .n{font-size:16px;font-weight:400;line-height:23px}
.atb .it .v{font-size:16px;font-weight:500;margin-top:auto}
.atb .it .p{font-size:12px;font-weight:500}
.atb .it .p .sale{color:var(--red)}
.atb .it .p s{margin-left:4px}
.atb .btns{display:flex;flex-direction:column;gap:8px}
```

### C29 · Toast
```css
.toast{position:fixed;bottom:32px;left:50%;transform:translateX(-50%) translateY(16px);background:#000;color:#FFF;font-size:14px;font-weight:500;padding:12px 20px;border-radius:4px;opacity:0;pointer-events:none;transition:.2s;z-index:70;white-space:nowrap}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
```
CSS L481–483 · helper `toast()` L776 (1800ms auto-dismiss). **Note the divergence:** the VTO repo's toast (§4) is a light, top-anchored, actionable toast. The DS needs both a bottom snackbar and a top notification variant, or one component with `placement` + `action` props.

### C30 · Live 2-bar USP (black 3-cell + grey code bar)
Live-truth counterpart to the DS `.usp-strip`; note the **red** countdown (`#FF0000`) and horizontal-scroll 100%-width cells on mobile becoming `flex:1` at ≥1024.
```css
.usp-live .bar{background:#000;color:#FFF;display:flex;overflow-x:auto;scrollbar-width:none;text-align:center}
.usp-live .cell{flex:0 0 100%;padding:8px 16px}
.usp-live .cell b{display:block;font-size:14px;line-height:21px;font-weight:700}
.usp-live .cell span{display:block;font-size:14px;line-height:12px;padding-bottom:3px;font-weight:400}
.usp-live .cell .cd{color:#FF0000}
.usp-live .grey{background:#D3D3D3;color:#000;text-align:center;padding:8px 16px}
@media(min-width:1024px){.usp-live .cell{flex:1 1 0}}
```
CSS L58–70 · markup L516–523. New format reuses the DS strip (L71–77, markup L525–531) with 12px cells and a JS rotator (L1077–1080, 4s).

### C31 · Live boohooMAN footer
CSS L340–357 · markup L688–709. Materially different from the DS `.ft-*`: **accordion link columns on mobile** (`.col` rows with a chevron, becoming 3 static columns ≥1024), and a **joined** newsletter input+button (`border-radius:4px 0 0 4px` / `0 4px 4px 0`, shared border) versus the DS's 12px-gapped pair. Worth adding as `.ft-cols--accordion` and `.ft-sub--joined` variants.
```css
.ft .news .row{display:flex;gap:0;max-width:520px;width:100%;margin:0 auto}
.ft .news input{flex:1;height:50px;border:1px solid var(--grey-3);border-right:none;border-radius:4px 0 0 4px;padding:0 16px;font:inherit;font-size:14px}
.ft .news button{height:50px;background:#000;color:#FFF;padding:0 24px;border-radius:0 4px 4px 0;text-transform:uppercase;font-weight:600}
.ft .cols{display:grid;grid-template-columns:1fr;gap:0;padding:0 var(--m)}
.ft .col{border-top:1px solid var(--grey-2);padding:16px 0;font-size:16px;font-weight:600;display:flex;justify-content:space-between}
@media(min-width:1024px){.ft .cols{grid-template-columns:repeat(3,1fr);gap:24px}.ft .col{border:none;display:block}.ft .col img{display:none}}
```

### C32 · Review shell / OptionSwitcher  ★carry as tooling
`core-pdp-2026/index.html` — CSS L8–51, markup L55–134, JS L137–192. **This is the P-05 review pattern and is the one shared "shell" across the PLP/PDP work.**

| part | selector | spec |
|---|---|---|
| black control strip | `.strip` | `#000`, `padding:8px 14px`, 11.5px, `Google Sans`/Montserrat, horizontally scrollable, hidden scrollbar |
| segmented control | `.seg` / `.seg button.on` | pill with `1px rgba(255,255,255,.25)`, active = `#F7F7F7` fill + `#000` + 700 |
| brand chips | `.chip` / `.chip.on` / `.chip[disabled]` | 99px radius, `5px 11px`, active inverted, disabled `opacity:.35` |
| selects | `.strip select` | `#161616` bg, 7px radius, `max-width:230px`, `<optgroup>`-grouped variant lists (L73–98) |
| dividers / readouts | `.div`, `.sizebox`, `.cfg` | 1px×20px rule; tabular-nums px readout; right-aligned live config echo |
| config panel | `#rows` | 260px popover, `#0A0A0A`, `1px rgba(255,255,255,.22)`, 12px radius, rows with a **26×15 toggle** (`.tgl`, on = `#0D99FF` — Figma blue) |
| stage + resizer | `.stage`, `.handle`, `body.dragging` | iframe with `0 0 60px rgba(0,0,0,.5)` shadow; 16px `col-resize` handle with a 5×56 `#3A3A3A` grip; pointer-events disabled on the frame while dragging |

Protocol (reusable): shell → page `postMessage({pdpSet:1, brand, mode, look, entry, stock, rows})` (index L150) received at pdp.html L1089–1096; page → shell `postMessage({pdpCfg:'…'})` (pdp.html L1087) rendered into `.cfg` (index L151). Page also boots from query string (`pdp.html` L759–768) so every state is deep-linkable. Width presets 390→1440 + "Fit window" (index L108–117) with drag override (L182–188).

### C33 · Behavioural JS worth carrying (core-pdp)
| behaviour | file:line |
|---|---|
| Stock model (in / some-sizes-OOS / product-OOS) driving size, buy-block and module visibility | `pdp.html:784–789`, `862–872`, `919`, `947` |
| **Notify-me flow** (email regex + consent gate → success state + toast) | `pdp.html:873–874` |
| Colour-matched partner resolution + colour-first sorting for looks/sets | `pdp.html:780–781`, `906–910`, `1004` |
| **Set-builder pricing/selection**: one pick per row, re-tap deselects, live total, `Add to bag (n)`, per-card red size errors before submit | `pdp.html:1029–1030`, `1035–1038`, `1040–1045` |
| Quick size picker with unavailable handling | `pdp.html:1047–1052` |
| Add-to-bag → sheet (200ms after sheet close) | `pdp.html:1044`, `1054–1058` |
| Escape + scrim + `[data-close]` universal dismiss with body-scroll restore | `pdp.html:1060–1064` |
| Midnight NDD countdown (single interval feeding two formats) | `pdp.html:1070–1076` |
| Mobile USP rotator, 4s | `pdp.html:1077–1080` |
| Gallery pagination from scrollLeft incl. conditional end-card slide | `pdp.html:814–825` |
| Template-driven entry-point injection into 4 named slots | `pdp.html:976–989` |

---

## 4. vto-prototype (boohoo) — components

> Single file `vto-prototype/index.html`. CSS L14–488 · markup L491–1085 · JS L1087–1715. Fascia: **boohoo only**, hard-coded (`--primary:#f8b5cc`, Montserrat). CLAUDE.md L8 states colours/assets should stay swappable per brand — so everything below wants tokenising on port.

### V1 · VTO CTA chip + count badge  ★high-value
White pill on the PDP that launches the experience; carries a `#bb305f` count badge once looks exist.
- CSS L64–67 (chip), L368–371 (badge) · markup L548–554 · JS `openVTO()` L1177–1194, badge set L1333–1334
```css
.chip{background:#fff;display:flex;gap:6px;align-items:center;padding:9px 14px;border-radius:100px;box-shadow:0 0 14px -4px rgba(0,0,0,.25);cursor:pointer;border:none;font-family:'Montserrat',sans-serif;}
.chip .ic16{width:16px;height:16px;position:relative;}
.chip p{font-size:13px;font-weight:600;color:#000;white-space:nowrap;}
.chip{position:relative;}
.chip-badge{position:absolute;right:-4px;top:-4px;min-width:16px;height:16px;background:#bb305f;border-radius:100px;display:none;align-items:center;justify-content:center;padding:0 4px;}
.chip-badge span{font-size:10px;font-weight:600;color:#fff;line-height:1;}
.chip-badge.on{display:flex;}
```
Note this is the **same geometry as core-pdp's `.chip-entry`** (`padding:9px 14px`, `0 0 14px -4px rgba(0,0,0,.25)`, radius 100) — one shared "PDP entry chip" component covers both, with an optional count badge and a 13px vs 12px label to reconcile.

### V2 · Size selector — diagonal-strike OOS variant
Same 60×50 / 1px `--grey-3` / radius 4 geometry as core-pdp C8, but OOS is an absolutely-positioned strike-through SVG (`inset:1px`) instead of a bell.
- CSS L94–99 · markup L583–589 · PDP-2 patch L1486–1492
```css
.size-row{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;}
.size-btn{width:60px;min-width:60px;height:50px;background:#fff;border:1px solid var(--grey-3);border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-family:'Montserrat',sans-serif;position:relative;}
.size-btn span{font-size:16px;font-weight:500;color:#000;}
.size-btn .strike{position:absolute;inset:1px;pointer-events:none;}
.size-btn .strike img{width:100%;height:100%;display:block;}
```

### V3 · Price block (boohoo variant)
CSS L74–78 · markup L564–568. **Diverges from core-pdp C5:** price-now is red at 24/**700** even when it is the sale price, was is 24px (not 20), and the save badge shows `-20%` rather than "Save 20%". Same `#fde8e8`/`#d00000` badge tokens.
```css
.price-row{display:flex;gap:12px;align-items:center;}
.price-now{font-size:24px;font-weight:700;color:var(--red);}
.price-was{font-size:24px;font-weight:400;color:var(--grey-5);text-decoration:line-through;}
.badge-save{background:#fde8e8;border-radius:4px;padding:4px 8px;display:flex;align-items:center;justify-content:center;}
.badge-save span{font-size:14px;font-weight:500;color:#d00000;}
```

### V4 · Brand advisor / promo banner (T-Studio)  ★new pattern
Image-backed card with a left-to-right brand-tint gradient, italic display name, and a fixed 128px CTA block.
- CSS L100–111 · markup L591–603
```css
.advisor{position:relative;border-radius:4px;padding:20px;overflow:hidden;width:100%;}
.advisor .bg{position:absolute;inset:0;}
.advisor .bg img{width:100%;height:100%;object-fit:cover;border-radius:4px;display:block;}
.advisor .bg .grad{position:absolute;inset:0;border-radius:4px;background:linear-gradient(90.17deg,rgba(248,181,204,.8) 1.91%,rgba(248,181,204,0) 55.34%);}
.advisor-inner{position:relative;display:flex;gap:24px;align-items:center;}
.advisor-copy .name{font-size:24px;font-weight:700;font-style:italic;letter-spacing:-0.48px;color:#000;text-transform:capitalize;}
.advisor-copy .desc{font-size:12px;font-weight:500;color:#000;line-height:normal;}
.advisor-cta{width:128px;background:var(--primary);border-radius:4px;padding:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.advisor-cta .l{font-weight:500;} .advisor-cta .n{font-weight:800;font-style:italic;}
```

### V5 · Deliver+ banner — pink variant
CSS L120–130 · markup L616–627. Same anatomy as core-pdp C12 but `#ffe0eb` ground with black ink and a 200×19 logo; items use a 16px tick with `letter-spacing:-.12px`. Together the two prove a `tone: dark | brand` prop on one Deliver+ component.

### V6 · Full-screen takeover overlay + screen switcher  ★high-value
```css
.vto{position:absolute;inset:0;background:var(--soft-black);transform:translateY(100%);transition:transform .45s var(--ease-sheet);z-index:40;overflow:hidden;will-change:transform;}
.vto.open{transform:translateY(0);}
.vto.closing{transform:translateY(100%);transition:transform .42s var(--ease-sheet);}
.vto-screen{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity .3s ease;}
.vto-screen.active{opacity:1;pointer-events:auto;}
```
CSS L134–138 · markup L902–1033 · JS `show()` L1159–1171 (also retracts and re-slides the sheets/rail with a 120ms — or 430ms when the overlay itself is animating in — delay). Five screens: landing / camera / review / loading / result.

### V7 · Blurred product backdrop
```css
.grad-bg{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.8),rgba(0,0,0,.8)),linear-gradient(90deg,#e0dedc,#e0dedc);overflow:hidden;}
.blur-img{position:absolute;left:calc(50% - 14px);top:calc(50% + 1px);transform:translate(-50%,-50%);opacity:.2;filter:blur(10.5px);}
.blur-img.landing{width:148%;height:102%;}
.blur-img.loading{width:156%;height:108%;}
```
CSS L139–143 · sources swapped in JS: PDP carousel image 1 (L1175, L1179), PDP-2 image (L1507), or the user's own photo (L1301–1304, `.userphoto`).

### V8 · Circle icon button + staggered action rail
```css
.circle-btn{position:absolute;width:32px;height:32px;cursor:pointer;backdrop-filter:blur(2px);border:none;background:transparent;padding:0;}
.circle-btn .ring{position:absolute;inset:0;width:100%;height:100%;}
.circle-btn .glyph{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);}
.circle-btn .glyph.x{width:12px;height:12px;}
.circle-btn .glyph.sh{width:16px;height:16px;object-fit:contain;}
.btn-close-vto{right:20px;top:20px;} .btn-share-vto{right:20px;top:64px;}
.rail{position:absolute;right:20px;top:20px;display:flex;flex-direction:column;gap:12px;}
.rail .circle-btn{position:relative;left:auto;top:auto;opacity:0;transform:translateY(-14px) scale(.9);transition:opacity .28s ease,transform .38s var(--ease-sheet);}
.rail.in .circle-btn{opacity:1;transform:translateY(0) scale(1);}
.rail .circle-btn:nth-child(2){transition-delay:.06s;}
.rail .circle-btn:nth-child(3){transition-delay:.12s;}
.rail .circle-btn:nth-child(4){transition-delay:.18s;}
```
CSS L144–150, L204–209 · markup L933–936, L1008–1020. 32px hit area; the "disc" is a supplied gradient-ellipse asset (`.ring`) plus a 2px backdrop blur — a good candidate for a CSS-only DS token (`linear-gradient(154.3deg,rgba(15,15,15,.9),rgba(19,19,19,.9))`, as used by `.tries-pill`).

### V9 · Dark bottom sheet (landing / result)
```css
.vto-sheet{position:absolute;left:0;right:0;bottom:0;border-radius:12px 12px 0 0;background:linear-gradient(162.7deg,#0f0f0f 3.09%,#131313 100%);display:flex;flex-direction:column;gap:20px;padding:20px 24px calc(24px + env(safe-area-inset-bottom, 0px));}
.vto-sheet .h1{font-size:28px;font-weight:700;color:#fff;line-height:normal;}
.vto-sheet .sub{font-size:13.5px;font-weight:500;color:#fff;line-height:1.35;}
.result-sheet{position:absolute;left:0;right:0;bottom:0;border-radius:12px 12px 0 0;background:linear-gradient(167.3deg,#0f0f0f 3.09%,#131313 100%);display:flex;flex-direction:column;gap:20px;padding:20px 24px calc(16px + env(safe-area-inset-bottom, 0px));}
.vto-sheet,.result-sheet{transform:translateY(110%);transition:transform .42s var(--ease-sheet);will-change:transform;}
.vto-sheet.in,.result-sheet.in{transform:translateY(0);}
```
CSS L153–158, L190–193 · markup L910–932, L994–1007. **12px top radius** (vs the DS/checkout 4px) and `env(safe-area-inset-bottom)` — both need to become sheet props. Title has three copy states toggled by class: `.h1-first` / `.h1-another` / `.h1-change` (CSS L376–379, L485–487).

### V10 · Primary pink button with icon (`.btn-pink`) + button row
```css
.vto-btn-row{display:flex;gap:8px;width:100%;}
.btn-pink{flex:1;height:50px;background:var(--primary);border:none;border-radius:4px;display:flex;align-items:center;justify-content:center;gap:8px;padding:8px 24px;cursor:pointer;font-family:'Montserrat',sans-serif;}
.btn-pink .ic20{width:20px;height:20px;position:relative;flex-shrink:0;}
.btn-pink span{font-size:16px;font-weight:600;line-height:24px;color:#000;text-transform:uppercase;white-space:nowrap;}
```
CSS L159–165. 50px / radius 4 / 16-24 / 600 / uppercase / `8px 24px` matches DS `.bd.pri` exactly — the only genuinely new part is the **20px leading icon slot + 8px gap**, i.e. `.bd` needs an icon prop. Same for `.btn-atb` (L113–114), `.btn-atb-vto` (L211–212), `.vto-modal .cta` (L227–228), `.btn-viewbag` (L251–252), which are five copies of the same button.

### V11 · Disclaimer / legal text
```css
.disclaimer{font-size:12px;font-weight:400;text-align:center;color:var(--grey-3);line-height:normal;}
.disclaimer a{color:var(--primary);text-decoration:none;font-weight:400;cursor:pointer;}
```
CSS L166–167 · markup L931. Grey-3 on dark; links tint to `--primary`.

### V12 · Loading status block (pulsing AI icon + progress + 3 phases)  ★high-value
```css
.vto-status{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:16px;align-items:center;padding:8px 18px 18px;}
.vto-status .ic32{width:32px;height:32px;position:relative;}
.vto-status .ic32 img{position:absolute;inset:9.38%;width:81.24%;height:81.24%;animation:aiPulse 1.8s ease-in-out infinite;}
@keyframes aiPulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.55;transform:scale(.92);}}
.vto-status .headline{font-size:20px;font-weight:700;color:#fff;text-align:center;width:100%;}
.prog-track{width:240px;height:6px;background:var(--grey-5);border-radius:100px;overflow:hidden;}
.prog-fill{height:6px;width:0;background:var(--primary);border-radius:100px;transition:width .35s ease;}
.vto-status .cap{font-size:11.5px;font-weight:400;color:var(--grey-3);text-align:center;line-height:normal;}
/* phase switching */
#scrLoading .phase-b{display:none;}
#scrLoading.creating .phase-a{display:none;}
#scrLoading.creating .phase-b{display:block;}
#scrLoading .phase-c{display:none;}
#scrLoading.nearly .phase-a,#scrLoading.nearly .phase-b{display:none;}
#scrLoading.nearly .phase-c{display:block;}
```
CSS L170–177, L281–283, L373–375 · markup L964–984 · JS `startGenerating()` L1308–1328. Phases: **a** "Analysing your photo…", **b** "Creating Your Outfit…", **c** "Nearly Ready!" (shown when the user re-enters mid-generation, L1189). Progress is rAF-driven against a randomised total (L1113–1117: phase A 3–6s, total +3–6s).

### V13 · Usage counters — three placements, one datum
```css
.vto-sheet .tries-note{width:100%;font-size:12px;font-weight:400;color:var(--grey-3);text-align:center;line-height:normal;}
.tries-line{font-size:11.5px;font-weight:400;color:var(--grey-3);text-align:center;line-height:normal;}
.tries-line.last{color:#fff;}
#vto.photomode .tries-line,#vto.photomode .tries-note{display:none;}
.tries-pill{position:absolute;left:20px;top:20px;z-index:5;height:32px;display:flex;align-items:center;background:linear-gradient(154.3deg,rgba(15,15,15,.9) 0%,rgba(19,19,19,.9) 100%);backdrop-filter:blur(2px);border-radius:100px;padding:0 14px;font-size:12px;font-weight:500;color:#fff;line-height:normal;-webkit-tap-highlight-color:transparent;}
```
CSS L158, L178–181, L216 · JS `syncTries()` L1126–1139. States: unused ("Max limit of 5 try ons per day"), partial ("4 try-ons left today", singular at 1), at-limit (`.last`, solid white). The pill deliberately mirrors `.circle-btn` (32px at top 20, same gradient + 2px blur). Suppressed in `photomode` (photo-check runs don't spend a try).

### V14 · Dark result size selector (`.rsize`)
```css
.result-sizes{display:flex;gap:8px;}
.rsize{flex:1 1 0;min-width:0;height:50px;background:#242424;border:none;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;font-family:'Montserrat',sans-serif;position:relative;}
.rsize span{font-size:16px;font-weight:500;color:#fff;}
.rsize.sel{background:var(--primary);}
.rsize.sel span{color:#000;}
.rsize.oos{cursor:default;}
.rsize.oos span{color:var(--grey-5);}
.rsize.oos .strike{position:absolute;inset:1px;pointer-events:none;}
```
CSS L194–202 · markup L996–1002 · JS `selSize()` L1367–1371. Dark, **fluid-width** (`flex:1 1 0`) counterpart to V2's fixed 60px — same component, `theme: light|dark` + `width: fixed|fluid`.

### V15 · Swipeable result canvas + dots pill
```css
.result-canvas{position:absolute;inset:0;overflow:hidden;}
.vto-screen.result.active .result-canvas img{animation:reveal .5s ease both;}
@keyframes reveal{from{transform:scale(1.03);opacity:.4;}to{transform:scale(1);opacity:1;}}
.result-track{display:flex;height:100%;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;}
.result-slide{flex:0 0 100%;height:100%;scroll-snap-align:start;overflow:hidden;}
.result-dots{position:absolute;left:50%;top:0;transform:translate(-50%,calc(-100% - 16px));background:linear-gradient(165.99deg,rgba(15,15,15,.9) 3.09%,rgba(19,19,19,.9) 100%);border-radius:100px;padding:8px 12px;display:none;gap:6px;align-items:center;}
#scrResult.multi .result-dots{display:flex;}
.rdot{width:6px;height:6px;border-radius:50%;background:var(--grey-5);}
.rdot.cur{background:#fff;}
```
CSS L186–189, L382–388 · JS `syncLooks()` L1612–1629, scroll sync L1644–1649. Dots appear only at 2+ looks; the track auto-scrolls to the newest look.

### V16 · Centre modal + scrim
```css
.vto-modal{position:absolute;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;padding:0 16px;z-index:30;opacity:0;pointer-events:none;transition:opacity .25s ease;}
.vto-modal.error{z-index:80;} /* phone-level: above the VTO overlay and the PDP alike */
.vto-modal .card{transform:scale(.96);transition:transform .25s ease;}
.vto-modal.on{opacity:1;pointer-events:auto;}
.vto-modal.on .card{transform:scale(1);}
.vto-modal .card{width:100%;background:#fff;border-radius:4px;padding:20px 16px 16px;display:flex;flex-direction:column;gap:24px;align-items:center;text-align:center;}
.vto-modal .copy{display:flex;flex-direction:column;gap:12px;width:100%;}
.vto-modal .t{font-size:18px;font-weight:600;color:#000;line-height:normal;text-transform:capitalize;}
.vto-modal .b{font-size:16px;font-weight:400;color:#000;line-height:normal;}
.scrim{position:absolute;inset:0;background:rgba(0,0,0,.5);opacity:0;pointer-events:none;transition:opacity .3s ease;z-index:50;}
.scrim.on{opacity:1;pointer-events:auto;}
```
CSS L217–228, L231–232 · two instances: warning (markup L1024–1032, "1 try-on left Today") and error (L1074–1082, "You've used all 5 try-ons today"). Fade-in with a `.96 → 1` card scale over a 50% black scrim.

### V17 · Added to Bag sheet — pink variant
```css
.bag-sheet{position:absolute;left:0;right:0;bottom:0;background:#fff;border-radius:4px 4px 0 0;padding:24px 24px calc(24px + env(safe-area-inset-bottom, 0px));display:flex;flex-direction:column;gap:24px;justify-content:flex-end;transform:translateY(105%);transition:transform .38s var(--ease-sheet);z-index:60;}
.bag-sheet.up{transform:translateY(0);}
.bag-head .t{flex:1;font-size:20px;font-weight:600;color:var(--soft-black);}
.bag-prod{height:148px;position:relative;}
.bag-prod .thumb{position:absolute;left:0;top:0;width:99px;height:148px;}
.bag-prod .info{position:absolute;left:115px;right:0;top:2px;height:133px;color:#000;}
.bag-prod .info .b{font-size:16px;font-weight:700;} /* brand */
.bag-prod .info .n{top:23px;font-size:16px;font-weight:500;} /* name */
.bag-prod .info .v{top:94px;font-size:16px;font-weight:500;} /* size / colour */
.bag-prod .info .p{top:118px;font-size:12px;font-weight:500;}
.btn-viewbag{...background:var(--bag-primary);...}
.btn-contshop{width:100%;height:50px;background:#fff;border:1px solid var(--bag-border);border-radius:4px;...}
```
CSS L233–254 · markup L1049–1071. **Same 99×148 thumb and 148px row height as core-pdp C28** — clearly one component, but this one uses absolute positioning at fixed tops (`23/94/118`) rather than flow, and its "Continue Shopping" outline uses `--bag-border` (= primary pink) pending the boohoo Dark 2 hex (CLAUDE.md, Known quirks). Port the flow version.

### V18 · Toast — light, top-anchored, actionable
```css
.toast{position:absolute;left:16px;right:16px;top:176px;background:rgba(255,255,255,.9);backdrop-filter:blur(3.5px);border-radius:8px;box-shadow:0 0 20px rgba(0,0,0,.1);padding:16px;display:flex;align-items:center;justify-content:space-between;z-index:30;opacity:0;transform:translateY(-12px);pointer-events:none;transition:opacity .3s ease,transform .3s var(--ease-sheet);}
.toast.show{opacity:1;transform:translateY(0);pointer-events:auto;}
.toast .lead{display:flex;gap:8px;align-items:center;flex:1;min-width:0;}
.toast .tick{width:16px;height:16.041px;position:relative;flex-shrink:0;}
.toast .msg{font-size:14px;font-weight:400;color:#000;}
.toast .view{font-size:14px;font-weight:600;color:#00787d;background:none;border:none;padding:0;cursor:pointer;font-family:'Montserrat',sans-serif;white-space:nowrap;}
```
CSS L297–304 · markup L1036–1045 · JS raise/auto-dismiss at 6000ms L1349–1351. Known quirks (per CLAUDE.md): copy typo "Virtal" and the `#00787d` group-teal action link inside a pink flow — both should be fixed at source before porting.

### V19 · Bag counter badge + pop animation
```css
.bag-counter{position:absolute;right:0;top:1px;width:11px;height:11px;background:#000;border-radius:23.467px;display:flex;align-items:center;justify-content:center;}
.bag-counter span{font-size:8.311px;font-weight:400;color:#fff;line-height:normal;}
.counter-pop{animation:pop .35s ease;}
@keyframes pop{0%{transform:scale(1);}45%{transform:scale(1.55);}100%{transform:scale(1);}}
```
CSS L44–45, L255–256 · JS L1382–1385. Compare DS `.hd-count` (14px / 8px type via `--hd-count`): this is 11px/8.311px. The **pop animation on increment is the new part** — add as a `.hd-count--bump` modifier.

### V20 · Account-icon AI pulse + ready dot  ★new pattern
Background-generation affordance on the header account button.
```css
.acct-ai{position:absolute;left:22px;top:-2px;width:16px;height:16px;display:none;}
.acct-ai.pulsing{display:block;}
.acct-ai.pulsing img{animation:aiPulse 1.4s ease-in-out infinite;}
.acct-dot{position:absolute;left:28px;top:3px;width:6px;height:6px;display:none;}
.acct-dot.on{display:block;}
```
CSS L287–294 · markup L510–514 · JS: pulse on background close L1203, pulse→dot+toast on completion L1347–1349, cleared by `markViewed()` L1361–1365 and by opening the wardrobe L1527.

### V21 · Native camera + review UI
CSS L258–278 · markup L940–961 · JS L1206–1277. Deliberately system-font iOS mimic: `.viewfinder` (inset `top:79px bottom:182px`), `.cam-flash` (20px at 16/40), `.cam-1x` (38px at bottom 245), `.cam-photo-lbl` (13px `#ffd60a`), `.cam-shutter` (70px at bottom 106, `:active` scale .92), `.cam-cancel` (18px at left 32), `.cam-switch` (35px at right 33), `.home-ind` (139×5 white pill), review `.cam-retake` / `.cam-use` (18.709px, `letter-spacing:-.31px`). Real `getUserMedia` with a static-image fallback (L1225–1229). **Probably not a DS component** — but keep as a documented "platform surface" pattern so nobody re-designs it.

### V22 · Account landing — greeting, rewards card, menu rows, tag/dot/status, sign-out
```css
.acct-greet .hi{font-size:24px;font-weight:700;} .acct-greet .email{font-size:12px;font-weight:400;}
.rewards{background:#ffe0eb;border-radius:4px;padding:24px;display:flex;flex-direction:column;gap:20px;align-items:center;}
.rewards .amt{font-size:62.476px;font-weight:700;color:#000;letter-spacing:-3.7485px;line-height:59.068px;white-space:nowrap;}
.rewards .amt .minor{font-size:39.757px;letter-spacing:-2.3854px;}
.rewards .lbl{font-size:12px;font-weight:400;text-transform:uppercase;}
.btn-white{background:#fff;border:none;border-radius:4px;padding:8px;font-size:14px;font-weight:500;color:#000;}
.acct-row{background:#fff;border-radius:4px;padding:16px;display:flex;gap:16px;align-items:center;width:100%;border:none;text-align:left;}
.acct-row .row-lbl{font-size:16px;font-weight:500;white-space:nowrap;}
.tag{background:#000;border-radius:100px;padding:2px 8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.tag span{font-size:12px;font-weight:600;color:#fff;}
.tag.pink{background:#bb305f;} .tag.n3{width:19px;padding:2px 0;}
.dot8{width:8px;height:8px;flex-shrink:0;display:block;}
.row-status{display:flex;gap:8px;align-items:center;margin-left:auto;}
.row-status .st-txt{font-size:12px;font-weight:400;line-height:17.143px;} .row-status .st-txt.grey{color:var(--grey-5);}
.btn-signout{background:#e7e7e7;border:none;border-radius:4px;padding:8px;font-size:14px;font-weight:500;margin-top:8px;}
```
CSS L321–346 · markup L634–723. Page ground is `#fafafa` (`.acct-stack`). Menu row = 24px icon + label + optional tag / 8px dot / right-aligned status text. Rows link out to the wardrobe (L684–689).

### V23 · Page header with back chevron
```css
.page-head{height:44px;display:flex;align-items:center;gap:12px;padding:0 16px;}
.page-head .back{width:16px;height:16px;position:relative;cursor:pointer;background:none;border:none;padding:0;}
.page-head .back img{position:absolute;width:7.33px;height:14.67px;left:50%;top:50%;transform:translate(-50%,-50%);}
.page-head p{font-size:18px;font-weight:500;color:#000;flex:1;}
```
CSS L352–355 · markup L761–764.

### V24 · Try-on photo card — 3 states  ★high-value
Sits above the wardrobe grid; governs the photo every look is generated from.
```css
.tryon-card{background:#fff;border-radius:4px;padding:12px;display:flex;gap:12px;margin-bottom:16px;}
.tryon-card.ph-none{border:1px dashed var(--grey-3);align-items:flex-start;}
.tryon-card.ph-added{box-shadow:0 2px 10px rgba(0,0,0,.1);align-items:center;}
.tryon-card.ph-none .only-added{display:none !important;}
.tryon-card.ph-added .only-none{display:none !important;}
.tryon-ph{width:60px;height:90px;border-radius:2px;flex-shrink:0;overflow:hidden;position:relative;background:var(--grey-1,#f2f2f2);display:flex;align-items:center;justify-content:center;}
.tc-head .t14{font-size:14px;font-weight:600;} .tc-head .t12{font-size:12px;font-weight:400;}
.tc-head .expires{font-size:12px;font-weight:400;color:var(--grey-5);margin-top:4px;}
.btn-addphoto{background:var(--primary);border:none;border-radius:4px;padding:6px 12px;font-size:12px;font-weight:600;color:#000;align-self:flex-start;}
.photo-actions{display:flex;gap:12px;align-items:center;}
.plink{font-size:12px;font-weight:600;color:#bb305f;background:none;border:none;padding:0;cursor:pointer;}
.pdiv{width:1px;align-self:stretch;background:#e0e0e0;}
```
CSS L414–434 · markup L766–790 · JS `syncWardrobe()` L1534–1546. States: **no photo** (1px dashed grey-3, 20px camera-plus glyph, "Add Photo" pink small button), **photo added** (drop shadow, photo thumb, "Expires in 27 days", Change Photo | Delete text-link pair), **expiring** (per README the expiry line turns red). Note the small-button size here — **6px 12px / 12px / 600** — a `size:sm` the DS button lacks; `.btn-tbag` (L469) adds a third at `8px 16px / 14-24 / 600`.

### V25 · Wardrobe tile (`.wtile`)  ★high-value
Look tile with product data, expiry state and two actions.
```css
.looks-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.wardrobe.fullw .looks-grid{grid-template-columns:1fr;}
.wtile{background:#fff;border-radius:4px;box-shadow:0 2px 10px rgba(0,0,0,.1);overflow:hidden;display:flex;flex-direction:column;align-self:start;}
.wtile-media{aspect-ratio:173/220;position:relative;overflow:hidden;background:var(--grey-1,#f2f2f2);}
.wtile-thumb{position:absolute;left:8px;bottom:8px;width:44px;height:66px;border-radius:2px;overflow:hidden;box-shadow:0 0 14px rgba(0,0,0,.25);}
.expiry-chip{position:absolute;right:8px;bottom:8px;background:rgba(255,255,255,.9);border-radius:2px;padding:3px 6px;font-size:10px;font-weight:600;color:#d33f3f;}
.expiry-chip.new{background:#bb305f;color:#fff;}
.wtile-info{padding:10px;display:flex;flex-direction:column;gap:6px;}
.wtile-name{font-size:12px;font-weight:400;-webkit-line-clamp:2;} .wtile-name b{font-weight:700;}
.wtile-price .now{font-weight:600;color:#d33f3f;} .wtile-price .was{font-weight:400;text-decoration:line-through;}
.wtile-row{display:flex;gap:8px;font-size:12px;align-items:center;}
.wtile-row .lbl{font-weight:500;} .wtile-row .val{font-weight:600;}
.wtile-row .val.placeholder{font-weight:500;color:var(--grey-4);}
.wtile-row .val.err{color:var(--red);font-weight:600;}
@keyframes rowShake{0%,100%{transform:translateX(0);}20%{transform:translateX(-4px);}40%{transform:translateX(4px);}60%{transform:translateX(-3px);}80%{transform:translateX(3px);}}
.wtile-row.shake{animation:rowShake .4s ease;}
.wtile-row.size{position:relative;}
.wtile-row.size select{position:absolute;inset:0;opacity:0;width:100%;cursor:pointer;font-size:16px;}
.wtile-acts{padding:0 10px 10px;display:flex;flex-direction:column;gap:6px;}
.btn-tbag{background:var(--primary);border:none;border-radius:4px;padding:8px 16px;font-size:14px;font-weight:600;line-height:24px;color:#000;}
.btn-tbag.oos{background:#f1dce3;color:var(--grey-3);cursor:default;}
.btn-tview{background:#fff;border:1px solid var(--dark-2,#ea92b0);border-radius:4px;padding:8px 16px;font-size:14px;font-weight:600;line-height:24px;color:#000;}
```
CSS L449–472, L475–480 · markup L802–894 · JS `tileSizePicked()` L1671–1687, `tileAddToBag()` L1688–1714.
States: **fresh** (no chip), **NEW** (`#bb305f` chip until viewed), **5/3/1 days left** (white-90% chip, red text), **OOS** (`.btn-tbag.oos` neutral `#f1dce3` + grey-3, View Look still live), **Expired** (`.wtile-media.expired` grey media + camera-plus glyph, action becomes "Create New Look"). Size row is an invisible native `<select>` overlay; picking an in-stock size re-enables the OOS button (L1682–1686); adding with no size shakes the row red and swaps the chevron asset (L1693–1700).
⚠️ `.wtile-media.expired` has **no CSS rule** (relies on the base grey ground) and `--dark-2` / `--grey-1` are undeclared — fix on port.

### V26 · Looks header — view toggle + sort dropdown
```css
.looks-title{display:flex;gap:8px;align-items:center;margin-bottom:12px;}
.looks-title .lt{flex:1;font-size:16px;font-weight:500;}
.sort{display:flex;gap:8px;align-items:center;position:relative;}
.sort span{font-size:12px;font-weight:500;white-space:nowrap;}
.sort select{position:absolute;inset:0;opacity:0;width:100%;cursor:pointer;font-size:16px;}
.wchev{width:12px;height:12px;position:relative;flex-shrink:0;}
.view-toggle{width:16px;height:16px;margin-left:16px;background:none;border:none;padding:0;cursor:pointer;flex-shrink:0;}
.view-toggle .ic-grid{display:none;}
.wardrobe.fullw .view-toggle .ic-grid{display:block;}
.wardrobe.fullw .view-toggle .ic-fw{display:none;}
```
CSS L438–450, L481–482 · markup L797–801 · JS `toggleWardView()` L1533, label sync inline `onchange` L799. Sort options: Most Recent / Best Sellers / Price: Low-High / Price: High-Low / Newness (label-only). **The native-select-behind-a-styled-label trick** is the reusable bit — worth a DS `select` primitive with that as the mobile implementation.

### V27 · Empty state
```css
.looks-empty{width:234px;margin:139px auto 0;display:flex;flex-direction:column;gap:8px;align-items:center;}
.looks-empty .le-t{font-size:16px;font-weight:500;line-height:24px;color:#767676;}
.looks-empty .le-s{font-size:12px;font-weight:400;color:#767676;text-align:center;}
```
CSS L435–437 · markup L791–795 (24px hanger glyph + "No looks yet" + guidance).

### V28 · Page-transition system (native push + staggered content)
```css
.acct-stack{transform:translateX(100%);transition:transform .42s var(--ease-sheet);will-change:transform;}
.account.open .acct-stack{transform:translateX(0);}
.wslide{background:#fff;min-height:calc(100% - 102px);transform:translateX(100%);transition:transform .42s var(--ease-sheet);}
.wardrobe.open .wslide{transform:translateX(0);}
.acct-stack>*{opacity:0;transform:translateY(14px);transition:opacity .3s ease,transform .4s var(--ease-sheet);}
.account.open .acct-stack>*{opacity:1;transform:translateY(0);}
.account.open .acct-stack>:nth-child(1){transition-delay:.12s;} /* …2:.18s 3:.24s 4:.3s */
.account{...visibility:hidden;transition:visibility 0s linear .42s;} .account.open{visibility:visible;transition:none;}
```
CSS L316–321, L349–351, L396–410. Header chrome stays static; only page content animates. `visibility` deferral prevents the off-screen page catching taps.

### V29 · Behavioural JS worth carrying (VTO)
| behaviour | file:line |
|---|---|
| Two-phase generation with randomised 3–6s + 3–6s timings and rAF progress | `index.html:1112–1117`, `1308–1328` |
| **Background generation**: close mid-run → account icon pulses → on completion pulse becomes dot + actionable toast; re-entry shows "Nearly Ready" | `1196–1204`, `1330–1353`, `1177–1194` |
| Daily allowance model (5/day, spend on `startGenerating`, photo-checks exempt, warn at 4, hard error at 5, hidden pill cycler for demos) | `1123–1153`, `1309`, `1342–1346`, `1599`, `1505` |
| Add to Bag choreography: overlay down (t=0) → counter tick + pop (t=380) → scrim + bag sheet (t=650) | `1375–1391` |
| Camera capture (unmirrored `drawImage` → JPEG dataURL) + graceful fallback | `1216–1229`, `1243–1255` |
| Library picker via hidden file input + FileReader | `1258–1272` |
| Wardrobe size validation (shake + red + chevron swap) and OOS re-enable | `1671–1714` |
| Bag line item populated from any tile, with capture/restore of the default product | `1653–1670`, `1702–1713` |
| Look preview + slide restore (`previewMode`) | `1559–1582` |
| Regenerate from stored photo, else request one | `1584–1594` |
| Second PDP by **cloning the first and stripping ids**, then patching product data — a clean prototype pattern | `1452–1512` |
| `navigator.share` native share | `1635–1643` |
| Whole-prototype `resetAll()` | `1398–1441` |

---

## 5. checkout-2026-promo-gift-card (Debenhams) — components

> Single file. CSS L11–467 · markup L470–824 · JS L826–1345. Fascia: **Debenhams only** (Geologica 300/400/500/600, aqua `#7be7d8`). Figma `WChEtDPH0LcErdYFS9SESn` § `3990:58406`.

### K1 · Checkout header
```css
.checkout-header{height:56px;display:flex;align-items:flex-start;justify-content:space-between;padding:20px 16px 0;background:var(--white);}
.secure{display:flex;align-items:center;gap:8px;font-size:12px;line-height:normal;}
```
CSS L81–95 · markup L475–505 (104×15 inline Debenhams logo + 16px lock + "SECURE CHECKOUT").

### K2 · Type-scale utility classes
```css
.h1{font-size:16px;font-weight:600;line-height:20px;}
.body-m{font-size:14px;font-weight:300;line-height:normal;}
.body-m-bold{font-size:14px;font-weight:600;line-height:normal;}
.caption{font-size:12px;font-weight:300;line-height:normal;}
.link{font-size:12px;font-weight:600;color:var(--cta-aqua);line-height:normal;}
.strike{text-decoration:line-through;}
b{font-weight:600;}
```
CSS L98–104. Worth landing in the DS as the checkout text styles (note `.h1` is 16/600/20, i.e. a section heading, not a page title; `.link` is 12/600 aqua).

### K3 · Button set — primary / outline / **pay** / **inline** / **spinner**  ★high-value
```css
.btn{height:50px;border-radius:4px;border:1px solid transparent;font-family:inherit;font-size:16px;font-weight:600;line-height:24px;color:var(--black);background:var(--white);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;padding:8px 24px;transition:opacity var(--dur-fade) linear;}
.btn-primary{background:var(--primary);border-color:var(--primary);}
.btn-outline{background:var(--white);border-color:var(--dark-2);}
.btn-pay{background:var(--navy);border-color:var(--navy);border-radius:8px;color:var(--white);gap:12px;}
.btn:active{transform:translateY(1px);}
.btn:disabled{opacity:.4;cursor:default;}
.btn:disabled:active{transform:none;}
/* State=Spinner, Button (Debenhams) 12533:14818 */
.btn-spinner{display:none;width:24px;height:24px;}
.btn.is-loading{pointer-events:none;}
.btn.is-loading .btn-label{display:none;}
.btn.is-loading .btn-spinner{display:block;}
.btn-primary.is-loading{background:var(--spinner-tint);border-color:var(--spinner-tint);}
.btn-outline.is-loading{border-color:var(--spinner-tint);}
.btn-spinner svg{display:block;animation:spin 750ms linear infinite;}
@keyframes spin{to{transform:rotate(360deg);}}
```
CSS L107–147.
- Matches `.bd` on 50px/4px/16-24/600/`8px 24px`, but **three things are new**: `.btn-pay` (navy `#00112c`, **8px radius**, 12px gap, white ink, leading lock — the Pay CTA), the **spinner state** (label swaps for a 24px masked-arc SVG; primary drops its fill to `--spinner-tint #e8f4f2`, outline swaps its border), and `:active{transform:translateY(1px)}` + `:disabled{opacity:.4}`. DS `.bd.spn` uses a 13px CSS border spinner and keeps the action fill — **reconcile against Figma 12533:14818, which this prototype follows.**
- `.btn-inline` — the collapsible Apply (see K10).

### K4 · Your Bag summary panel
```css
.bag{background:var(--grey-05);padding:12px 16px;display:flex;flex-direction:column;gap:16px;}
.bag-top{display:flex;align-items:center;gap:8px;}
.bag-lines{display:flex;flex-direction:column;gap:4px;flex:1;}
.bag-total{display:flex;gap:4px;}
```
CSS L150–159 · markup L508–522 ("Your Bag (1)" + Order Total + 16px chevron + full-width **Buy NOW** primary).

### K5 · Section stack / panel
```css
.stack{background:var(--grey-05);display:flex;flex-direction:column;gap:8px;}
.panel{background:var(--white);}
```
CSS L162–163. The whole checkout body is white panels on a grey-05 8px-gapped stack — the layout primitive.

### K6 · Delivery option row + Change link + hairline
```css
.delivery{padding:16px 0;display:flex;flex-direction:column;gap:16px;}
.delivery-body{padding:0 16px;display:flex;flex-direction:column;gap:8px;}
.delivery-rows{display:flex;flex-direction:column;gap:12px;}
.row-split{display:flex;align-items:center;gap:8px;}
.row-split > .grow{flex:1;min-width:0;}
.rule{height:1px;background:var(--grey-2);width:100%;}
.price-row{display:flex;align-items:center;gap:4px;font-size:14px;line-height:normal;}
```
CSS L166–172 · markup L527–549. Rows: method + `£0.49` bold with `£2.99` struck + aqua "Change"; rule; address + "Change".

### K7 · Seel "Worry-Free Purchase" panel
```css
.seel{padding:0 16px;display:flex;flex-direction:column;gap:12px;}
.seel-foot{display:flex;align-items:center;gap:8px;}
.powered{display:flex;align-items:center;gap:4px;font-size:12px;color:#595959;line-height:normal;}
.seel-mark{width:26px;height:16px;position:relative;overflow:hidden;}
.seel-mark img{position:absolute;height:100%;width:123.08%;left:-11.54%;top:3.13%;}
```
CSS L173–177 · markup L552–571. Checkbox + priced offer + caption + "Powered by [mark]" + aqua "What's Covered?".

### K8 · Checkbox — 2 sizes
```css
.check{display:flex;align-items:center;gap:8px;}
.box{width:24px;height:24px;border-radius:3px;border:1px solid var(--grey-3);background:var(--white);display:flex;align-items:center;justify-content:center;flex:none;cursor:pointer;}
.box.on{background:var(--cta-aqua);border-color:var(--cta-aqua);}
.box svg{opacity:0;}
.box.on svg{opacity:1;}
.check-lg{align-items:flex-start;gap:16px;}
```
CSS L180–190 · behaviour L1242–1251 (`role="checkbox"` + `aria-checked` + Space/Enter). **24px, radius 3, 16px white tick** — geometrically identical to core-pdp's `.cb` (L202–205) but filled with `--cta-aqua #00787d` rather than black, i.e. one component whose fill = `--icon-action`. `.check-lg` = top-aligned, 16px gap, for multi-line consent.

### K9 · Donation / round-up panel
```css
.pennies{padding:16px;display:flex;flex-direction:column;gap:4px;}
.pennies-body{display:flex;flex-direction:column;gap:12px;}
.pennies-logos{display:flex;gap:24px;align-items:flex-start;justify-content:center;}
```
CSS L193–196 · markup L575–595. Heading + body with bold amount + round-up checkbox + caption + charity logo pair.

### K10 · Promo code / gift card section — field + morphing layout  ★★ the centrepiece
CSS L203–365 · markup L598–668 · JS L826–1344.

**K10a — floating-label text field**
```css
.code-row{display:flex;align-items:center;}
.field{flex:1;min-width:0;height:50px;background:var(--white);border:1px solid var(--grey-3);border-radius:4px;padding:8px 16px;display:flex;flex-direction:column;justify-content:center;gap:2px;position:relative;cursor:text;transition:border-color var(--dur-fade) linear;}
.field.focused{border-color:var(--black);}
.field.invalid{border-color:var(--error);}
.field-label{font-size:14px;font-weight:300;color:var(--grey-placeholder);line-height:18px;transition:font-size var(--dur-fade) var(--ease-out),line-height var(--dur-fade) var(--ease-out),color var(--dur-fade) linear;}
.field.filled .field-label{font-size:12px;line-height:15px;color:var(--grey-5);}
.field input{font-family:inherit;font-size:14px;font-weight:300;line-height:18px;color:var(--black);border:0;outline:0;padding:0;margin:0;background:none;width:100%;height:0;opacity:0;transition:height var(--dur-fade) var(--ease-out),opacity var(--dur-fade) linear;}
.field.filled input{height:18px;opacity:1;}
.field input::placeholder{color:transparent;}
```
50px, radius 4, `8px 16px`, 1px grey-3. States: **default** (14/300 `#767676` label centred), **focused** (black border), **filled** (label shrinks to 12/15 `--grey-5` and the input grows in from `height:0`), **invalid** (`--error` border; the label text itself also switches to "Enter promo code…" at L1175). Label/input animate rather than translate — a genuinely different float-label technique worth capturing.

**K10b — collapsible inline Apply**
```css
.btn-inline{width:95px;margin-left:8px;flex:none;overflow:hidden;white-space:nowrap;transition:width var(--dur-morph) var(--ease-out),margin-left var(--dur-morph) var(--ease-out),padding var(--dur-morph) var(--ease-out),opacity var(--dur-fade) linear,border-width 120ms linear;}
.code-row.gift .btn-inline{width:0;margin-left:0;padding-left:0;padding-right:0;border-width:0;opacity:0;pointer-events:none;}
```

**K10c — reveal slots + gift-card CTA pair**
```css
.slot{max-height:0;margin-top:0;opacity:0;overflow:hidden;transition:max-height var(--dur-morph) var(--ease-out),margin-top var(--dur-morph) var(--ease-out),opacity var(--dur-fade) linear;}
.slot.show{opacity:1;}
#pinSlot.show{max-height:50px;margin-top:12px;}
#gcSlot.show{max-height:50px;margin-top:12px;}
.gc-actions{display:flex;gap:8px;}
.gc-actions .btn{flex:1;}
```

**K10d — inline field error**
```css
.field-error{margin:0;max-height:0;opacity:0;overflow:hidden;font-size:14px;font-weight:400;line-height:18px;color:var(--error);transition:max-height var(--dur-morph) var(--ease-out),margin-top var(--dur-morph) var(--ease-out),opacity var(--dur-fade) linear;}
.field-error.show{max-height:18px;margin-top:8px;opacity:1;}
```
Section heights per state are documented at L18–24: default 118 · promo not found 144 · promo applied 174 · gift card detected 242.

### K11 · Messaging banner — 3 tones, dismiss + inline action  ★high-value
```css
.banner{display:flex;max-height:0;margin-top:0;opacity:0;overflow:hidden;border-radius:4px;transition:max-height var(--dur-morph) var(--ease-out),margin-top var(--dur-morph) var(--ease-out),opacity var(--dur-fade) linear;}
.banner.show{max-height:120px;margin-top:12px;opacity:1;}
.banner.gap-lg.show{margin-top:16px;}
.banner-bar{width:4px;flex:none;}
.banner-body{flex:1;padding:12px 16px 12px 12px;display:flex;align-items:center;gap:12px;}
.banner-success .banner-bar{background:var(--success-bar);}
.banner-success .banner-body{background:var(--success-bg);}
.banner-neutral .banner-bar{background:var(--grey-2);}
.banner-neutral .banner-body{background:var(--grey-1);}
.banner-error .banner-bar{background:var(--error);}
.banner-error .banner-body{background:var(--error-bg);}
.banner-text{flex:1;font-size:14px;line-height:20px;color:#060606;}
.banner-error .banner-text{font-weight:300;line-height:18px;}
.banner-close{background:none;border:0;padding:0;margin:0;flex:none;cursor:pointer;display:flex;align-items:center;}
.banner-icon{flex:none;display:block;}
.banner-action{background:none;border:0;padding:0;margin:0;flex:none;font-family:inherit;font-size:12px;font-weight:600;line-height:15px;color:var(--black);cursor:pointer;white-space:nowrap;}
.banner-action:disabled{opacity:.4;cursor:default;}
```
CSS L319–365 · factory `addBanner()` L1000–1033, `removeBanner()` L1035–1042, single-slot `replaceBanner()` L1046–1052, icons L982–998 (20px outline circle-tick / info / warning-triangle).
Anatomy: 4px left status bar + 20px icon + text + optional 12/600 inline action + optional dismiss ×. Tones: success (`#70c474` / `#eaf6ea`), neutral (`#e7e7e7` / `#f2f2f2` — the balance readout, **not dismissible**), error (`#d33f3f` / `#fff2f2`, not dismissible here). Two top-gaps (12 / 16 via `.gap-lg`). Dismiss carries an `onDismiss` side effect (the gift card is un-redeemed, L1122–1128).

### K12 · Selected payment card + static fields + Pay
```css
.card-selected{background:var(--white);border:1px solid var(--navy-border);border-radius:4px;padding:16px;display:flex;flex-direction:column;gap:16px;}
.card-head{display:flex;flex-direction:column;gap:8px;}
.card-id{display:flex;align-items:center;gap:12px;}
.card-brand{width:46px;height:32px;flex:none;}
.card-lines{display:flex;flex-direction:column;gap:4px;flex:1;}
.card-note{font-size:12px;font-weight:300;color:var(--navy);line-height:normal;}
.pair{display:flex;gap:24px;}
.pair > div{flex:1;display:flex;flex-direction:column;gap:8px;}
.stat-field{height:50px;border-radius:8px;padding:8px 16px;display:flex;align-items:center;gap:10px;}
.stat-field.grey{background:var(--field-grey);}
.stat-field.white{background:var(--white);border:1px solid var(--field-border);}
.stat-field .val{font-size:16px;font-weight:300;color:var(--field-text);line-height:normal;flex:1;}
.field-lbl{font-size:14px;font-weight:300;color:var(--navy);line-height:normal;}
.field-help{font-size:12px;font-weight:300;color:var(--navy);line-height:normal;}
```
CSS L369–393 · markup L680–731. **Note the deliberately different field language in the payment block**: 8px radius, `#efeff1` grey fill or `#dbdee2` border, 16/300 `#5c687c` value, navy labels — this is the PSP-rendered card form, visually distinct from `.field` above. Selected card gets a `--navy-border` 1px outline.

### K13 · Saved card row + Add New Card
```css
.card-row{background:var(--white);border:1px solid var(--grey-2);border-radius:4px;padding:16px;display:flex;align-items:center;gap:12px;cursor:pointer;}
.add-card{background:var(--white);border:1px solid var(--grey-2);border-radius:4px;padding:16px;display:flex;align-items:center;gap:12px;cursor:pointer;}
.add-tile{width:46px;height:32px;flex:none;background:var(--grey-1);border:1px solid var(--grey-2);border-radius:2.5px;display:flex;align-items:center;justify-content:center;}
.add-label{font-size:16px;font-weight:500;line-height:normal;}
.methods{display:flex;flex-direction:column;gap:12px;}
.billing{display:flex;flex-direction:column;gap:12px;}
```
CSS L368, L395–425 · markup L733–762 · rows templated in JS from the brand SVG at L1261–1270. Card brand mark is a fixed **46×32** tile at 2.5px radius.

### K14 · Order summary + animated gift-card row
```css
.summary{background:var(--grey-05);padding:16px;display:flex;flex-direction:column;gap:24px;}
.summary-block{display:flex;flex-direction:column;gap:16px;}
.summary-rows{display:flex;flex-direction:column;gap:16px;}
.summary-tight{display:flex;flex-direction:column;gap:8px;}
.sum-row{display:flex;align-items:center;justify-content:space-between;font-size:14px;line-height:normal;}
.sum-row .right{display:flex;align-items:center;gap:8px;}
.sum-discount{display:flex;align-items:center;gap:6px;font-size:14px;font-weight:600;color:var(--cta-aqua);}
.sum-gift{max-height:0;opacity:0;overflow:hidden;transition:max-height var(--dur-morph) var(--ease-out),opacity var(--dur-fade) linear;}
.sum-gift.show{max-height:22px;opacity:1;}
.tcs{display:flex;flex-direction:column;gap:12px;}
```
CSS L428–444 · markup L768–806 · totals painter `paintTotals()` L1057–1066. Rows: tight subtotal group (8px), then 16px-gapped Discounts (aqua 600, expandable chevron) and the **gift-card row that animates in/out with the redemption**, rule, bold Order Total. Two totals are kept in sync (bag panel + summary).

### K15 · T&Cs consent block
markup L796–806 with `.check.check-lg` + `.body-m` and aqua inline `<b>` links. Reuses K8/K2.

### K16 · Demo rail (prototype scaffolding)
```css
.rail{width:390px;display:flex;flex-wrap:wrap;gap:8px;font-family:inherit;}
.rail-title{width:100%;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#6d6d70;}
.rail button{font-family:inherit;font-size:12px;font-weight:500;padding:8px 12px;border-radius:99px;border:1px solid #c9c9cc;background:#fff;color:#1c1c1e;cursor:pointer;}
.rail button:hover{border-color:#8e8e93;}
.rail .note{width:100%;font-size:11px;color:#6d6d70;line-height:1.5;}
.phone{width:390px;background:var(--white);box-shadow:0 12px 40px rgba(0,0,0,.14);}
```
CSS L74–78, L446–463 · markup L812–824 · JS L1276–1340. A **second, lighter review-shell idiom** than core-pdp's: fixed 390px "phone" on `#e9e9ea` with a pill-button scenario rail underneath that only *types into* the fields (`typeInto()` L1276–1290 at 55ms/char) so the reviewer still performs the real taps, plus a `resetAll()` (L1292–1316). Worth standardising alongside the core-pdp shell.

### K17 · Behavioural JS worth carrying (checkout)
| behaviour | file:line |
|---|---|
| **Code-type detection**: a letter anywhere ⇒ promo (uppercased, spaces stripped); otherwise digits ⇒ gift card auto-grouped `4-4-4-4`, capped at 16 | `1902–915`, `1191–1218` |
| Gift card detected on the **12th** digit (with a 140ms debounce so pastes don't flicker), CTAs enabled only at 16 | `864–865`, `924–927`, `1205–1217` |
| `enterGiftMode()` choreography: inline Apply collapses → PIN slot at +120ms → CTA pair at +200ms | `950–957` |
| `exitGiftMode()` runs the same beats in reverse (200ms) with a 500ms completion callback | `963–976` |
| `withSpinner()` — every CTA holds State=Spinner for 900ms before acting (0ms under reduced motion) | `934–943` |
| `collapseToDefault()` — the banner lands **first**, then everything above packs away at +520ms and the field clears at +720ms | `1095–1104` |
| Redeem / re-redeem: dismissing the success banner refunds the order **and** frees the card number to be used again | `1108–1130` |
| Balance check writes a non-dismissible neutral banner that **carries its own Apply**, so a checked card stays one tap from redemption | `1145–1165` |
| Already-redeemed guard (per-order `redeemedCards` list) | `1087–1089`, `1109`, `1138`, `1149` |
| Promo not-found state: red border + label swap + inline error, cleared on next keystroke | `1167–1186`, `1199–1202` |
| PIN: digits-only strip, clears the error banner on edit | `1222–1227` |
| Enter-key routing (gift vs promo depending on mode) | `1235–1239` |
| `reduced` motion short-circuit on every timer (`T()`) | `849–850` |

---

## 6. Cross-repo consolidation notes for the DS team

1. **One `.bd` button, five prototypes' worth of gaps.** All three repos re-declare the 50px/4px/16-24/600 button. Missing props the prototypes prove out: leading **icon slot** (VTO `.btn-pink`, checkout `.btn-pay`), **sizes** `sm 6px 12px/12px` and `md 8px 16px/14-24` (VTO `.btn-addphoto`, `.btn-tbag`), **express-payment** variants (PayPal `#FFC439`, Apple `#000`), **navy pay** variant at 8px radius, **collapsible inline** variant, and a spinner state that follows Figma 12533:14818 (label→arc, primary fill drops to `#e8f4f2`) rather than the current `.bd.spn`.
2. **Sheet/modal needs one component, three skins.** core-pdp `.sheet` (white, 4px top radius, `100%-56px`, desktop→480px centred card), VTO `.vto-sheet`/`.result-sheet` (dark gradient, 12px top radius, safe-area) and VTO `.vto-modal` (centred card, scale-in) plus `.bag-sheet`. Props: `placement bottom|centre`, `tone light|dark`, `topRadius 4|12`, `safeArea`, `scrim .4|.5`.
3. **Two toasts, both needed.** Bottom black snackbar (core-pdp, 1.8s) and top light actionable notification (VTO, 6s + View). Add `placement` + `action`.
4. **Checkbox is already one component** in disguise: 24px / radius 3 / 16px tick, black in core-pdp, `--cta-aqua` in checkout. Bind the fill to `--icon-action` and it covers both, plus a `check-lg` top-aligned variant.
5. **Bag line item is one component** (99×148 thumb, 148px row, brand/name/variant/price) implemented twice — take the flow-layout core-pdp version over VTO's absolutely-positioned one.
6. **Size selector needs three OOS treatments**: bell (core-pdp, notify-me entry), diagonal strike (VTO), and greyed label — plus fixed-60px vs `flex:1` widths and light/dark themes.
7. **Select control**: no DS component exists. Three stand-ins here — `.cyp .sel` (styled div), VTO's invisible native `<select>` over a styled label (best mobile pattern), and core-pdp's `.pick` iOS popover.
8. **New tokens to raise**: `--navy #00112c` / `--navy-border #03112a` (pay), `--field-grey #efeff1` / `--field-border #dbdee2` / `--field-text #5c687c` (PSP fields), `--success-bar #70c474`, `--spinner-tint #e8f4f2`, `--shadow-pill 0 0 14px -4px rgba(0,0,0,.25)`, tile shadow `0 2px 10px rgba(0,0,0,.1)`, sheet gradient `linear-gradient(154.3deg,rgba(15,15,15,.9),rgba(19,19,19,.9))`, boohoo accent `#bb305f`, neutral-OOS `#f1dce3`, BNPL provider colours, and the `--sale-badge-bg #FDE8E8` / `--sale-badge-text #D00000` pair (used by both PDPs but absent from `tokens.css`, which only has `--price-sale`).
9. **Two review-shell idioms** exist: core-pdp's black strip + iframe + postMessage + width resizer (the P-05 standard, worth extracting as a reusable harness) and checkout's fixed 390px phone + type-only demo rail. Standardise one, keep the demo rail as an add-on.
10. **Bugs found while reading:** VTO `--dark-2` and `--grey-1` are consumed but never declared (`index.html:419, 452, 471`); `.wtile-media.expired` has no rule (`index.html:882`); `.cyp .sel` in core-pdp is written `justify-content:space-between` but its parent grid means the chevron is the only right-aligned child (cosmetic, `pdp.html:305`); the VTO toast ships a copy typo ("Virtal") and a group-teal `#00787d` action inside the pink flow (`index.html:1042, 304`) — both inherited from Figma and flagged in `CLAUDE.md`, so fix at source before porting.