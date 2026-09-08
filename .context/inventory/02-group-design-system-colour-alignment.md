# Component inventory — 02-group-design-system-colour-alignment

_Agent report, 08 Sep 2026, from a full read of the cloned repo(s). Line refs are to the repo files at that date. Raw record — the consolidated catalogue is `.context/18-component-inventory.md`._

# UI Component & Token Inventory — Group-Design-System + colour-alignment-prototype

Repo paths (absolute):
- `/private/tmp/claude-408916113/-Users-jake-rayner-Desktop-GROUP-DESIGN-SYSTEM-debenhamsgroup-design/cf27f321-dfbe-4212-8a33-578d6defdfb5/scratchpad/repos/Group-Design-System` — hereafter **GDS**
- `/private/tmp/claude-408916113/-Users-jake-rayner-Desktop-GROUP-DESIGN-SYSTEM-debenhamsgroup-design/cf27f321-dfbe-4212-8a33-578d6defdfb5/scratchpad/repos/colour-alignment-prototype` — hereafter **CA**

GDS files read in full: `README.md` (68), `index.html` (421), `css/tokens.css` (251), `css/components.css` (365), `js/library.js` (157), `js/ds-icons.js` (generated), `scripts/extract-tokens.mjs` (164), `scripts/build-artifact.mjs` (68).
CA files read in full: `README.md` (136), `index.html` (11 — meta-refresh redirect only), `brand-colours.html` (2631: CSS 10–719, markup 721–2257, JS 2258–2628).

---

## 1. Summary table

| Component | Repo | New to target? | Fascias | Notes |
|---|---|---|---|---|
| Type scale utilities `.t-display/.t-h1…/.t-price/.t-roundel/.caps` | GDS | **Yes** | all 5 | token-driven weights per brand |
| Button `.btn` — Buy It Now, Primary, Secondary, Tertiary, Tertiary XS, Text Only | GDS | Partly — target has primary/secondary only; **4 new types** | all 5 | PLT skin ≠ group skin |
| Payment buttons `.pay-btn` (7 fills + mini + glass) | GDS | **Yes** | brand-agnostic | exact artwork in `assets/payments/` |
| Product card `.card` (PDP/PLP tile) | GDS | No — target `.pc` is richer | all 5 | GDS version is *thinner* (no NDD/AI/taggstar/rating) |
| Size selector `.sizes/.size` (+ selected/OOS) | GDS | **Yes** | all 5 | |
| USP box `.usp-box` | GDS | **Yes** | all 5 | 3-row delivery/returns panel |
| USP banner `.usp-banner` + live countdown | GDS | Materially different from target `.usp-*` | all 5 | red-on-black / black-on-light countdown rule |
| Free-delivery threshold `.threshold` (+ eligible) | GDS | **Yes** | all 5 | progress track |
| SEEL / Deliver+ PDP banner `.seel-banner` | GDS | **Yes** | all 5 | |
| SEEL checkout opt-in `.seel-banner__check` | GDS | **Yes** | all 5 | 24px brand checkbox |
| Deliver+ bag module `.seel-module` | GDS | **Yes** | all 5 | band + 6 benefit rows + Seel footer |
| Deliver+ lockups `.dp-lockup--*` | GDS | **Yes** | all 5 | exact per-brand artwork geometry |
| BNPL box `.bnpl` + `.bnpl__chip` ×4 | GDS | **Yes** | all 5 | |
| Roundels strip `.roundels/.roundel` | GDS | No — target has roundels | all 5 | 108px, Antonio 22 label; check against target |
| Section header + rail `.section-header/.rail` | GDS | **Yes** | all 5 | |
| Account rewards band `.rewards` + rows `.acc-row` + `.acc-row__badge` | GDS | **Yes** | all 5 | |
| Empty state `.empty` | GDS | **Yes** | all 5 | |
| Retail header `.hdr` + `.bag-counter` | CA | No — target `.hd` | all 5 | PLT-only bag count badge |
| USP strips `.usp-1` / `.usp-2` (+ `.plt-banner-1/-2`) | CA | Materially different / newer | all 5 | two-tier, code-bold, PLT countdown |
| Breadcrumbs `.breadcrumbs` | CA | No — target `.bc` | all 5 | PLT italic variant |
| Image carousel `.carousel` + pagination `.pag-track/.pag-fill` | CA | **Yes** | all 5 | |
| VTO chip `.chip` / `.chip-dark` | CA | **Yes** | all 5 | Virtual Try On hanger, `--vto` |
| Wishlist puck `.wishlist-btn` | CA | No — target has wishlist | all 5 | 44px circle + shadow |
| Star rating `.stars/.stars-row` | CA | No — target has star rating | deb, km | JS-generated 5-star SVG |
| Price row `.price-now/.price-was` + save badge `.badge-save` | CA | Materially different / newer | all 5 | PLT badge is **transparent** |
| Promo line `.promo-line` | CA | **Yes** | plt | tag icon + code |
| Order-by message `.order-msg` | CA | No — target NDD | all 5 | |
| Colour line `.colour-line` | CA | **Yes** | all 5 | |
| Size button `.size-btn` (+ `.oos`) | CA | **Yes** (dup of GDS `.size`) | all 5 | 60×50, −40° strike |
| Add to Bag `.btn-atb` | CA | Partly | all 5 | signed-off primary CTA |
| PayPal `.btn-paypal` / Apple Pay `.btn-applepay` | CA | **Yes** | all 5 | KM PayPal on `#EEEEEE` |
| Deliver+ PDP banner `.deliver-banner` | CA | **Yes** | all 5 | |
| Added-to-Bag sheet `.scrim/.bag-sheet/.atb-card` | CA | **Yes** | all 5 | bottom sheet, 68×102 thumb |
| Qualified-delivery tick `.free-del` (`--tickc` circle) | CA | **Yes** | all 5 | |
| View Bag `.btn-viewbag` / Continue Shopping `.btn-contshop` | CA | **Yes** | all 5 | primary + outline pair |
| Bag product card `.bcard` **+ 18 `data-card` variants** | CA | **Yes** | all 5 | see §3.4 table |
| Quantity selector `.qty` (bin/count/plus) | CA | **Yes** | all 5 | 28px, Bag 2026 1234:76756 |
| Standalone bin `.bin-solo` | CA | **Yes** | all 5 | |
| Stock alert `.balert` | CA | **Yes** | all 5 | red-light + 2px red rule |
| "Sold X times" `.bsold` | CA | **Yes** | all 5 | |
| Card module `.bmod` (protect/subscribe/assembly/gift) | CA | **Yes** | all 5 | |
| Tertiary CTA `.btn-tert` (+`.grey`,`.outline`) | CA | **Yes** | all 5 | `--tert` neutral fill |
| Save chip `.chip-save` | CA | No — target `.badge` | all 5 | red-light + red bold |
| Pre-order chip `.pre-chip` + `.dispatch` banner | CA | **Yes** | all 5 | |
| Customisation rows `.custom-rows` | CA | **Yes** | all 5 | |
| Free-samples carousel `.sample-card` | CA | **Yes** | all 5 | 140px cards |
| Deliver+ bag module `.dp-head/.dp-usps/.dp-ic/.dp-foot/.dp-powered` | CA | **Yes** | all 5 | Trustpilot + Seel footer |
| Promo code field `.promo-field` + `.btn-apply` | CA | **Yes** | all 5 | |
| Order summary `.bag-summary/.os-*` + `.os-disc` | CA | **Yes** | all 5 | |
| Checkout CTA `.btn-checkout` (54px) | CA | **Yes** | all 5 | |
| OR divider `.or-row` | CA | **Yes** | all 5 | |
| Wallet buttons `.wallet.paypal/.paylater/.apple/.klarna` + `.pay3-note` | CA | **Yes** | all 5 | |
| Payment-option chips `.pay-opts/.pchip` ×8 | CA | **Yes** | brand-agnostic | Clearpay deliberately omitted |
| Checkout header `.co-header` + `.secure` lock | CA | **Yes** | all 5 | |
| Checkout buttons `.co-btn` / `-primary` / `-outline` / `-pay` (navy) | CA | **Yes** | all 5 | navy `#00112C` fixed |
| Checkout bag summary `.co-bag` | CA | **Yes** | all 5 | |
| Deliver+ checkout upsell `.deliver-box` + `.deliver-check` | CA | **Yes** | all 5 | |
| Checkbox `.check/.box/.box.on` | CA | **Yes** | all 5 | 24px, `--check` fill |
| Pennies donation `.pennies` | CA | **Yes** | all 5 | |
| Saved card `.card-selected` / `.card-row` / `.add-card` / `.add-tile` | CA | **Yes** | all 5 | navy-bordered selected |
| Static field `.stat-field.grey/.white` + `.field-lbl/.field-help` | CA | **Yes** | all 5 | |
| Checkout summary `.summary/.sum-row/.sum-discount` | CA | **Yes** | all 5 | |
| T&Cs block `.tcs/.check-lg` | CA | **Yes** | all 5 | |
| Text link `.link` (`--link-ink/--link-w/--link-deco`) | CA | **Yes** | all 5 | KM = 500 weight |
| Account balance card `.rewards/.amt/.lbl` + `.btn-balance` | CA | Materially different / newer than GDS | all 5 | 62.5px numeral, gradient on deb |
| Account row `.acct-row` + status `.tag`/`.tag.n3` | CA | **Yes** | all 5 | 56px rows, black pills |
| Sign Out `.btn-signout` | CA | **Yes** | all 5 | grey-2 fill |
| **Button state matrix** (6 types × 7 states, JS-generated `.bs`) | CA | **Yes — the golden truth** | all 5 | §3.7 |
| Colour palette board `.pal-*` (4–5 groups/brand) | CA | **Yes** | all 5 | §4 |
| Click-to-inspect overlay `#inspectBox/#inspectHl` | CA | Tooling, not a DS component | — | WCAG AA readout |

---

## 2. Group-Design-System — detail

### 2.1 Brand skinning approach
`data-brand="plt|debenhams|boohoo|boohooman|karenmillen"` on `<html>` (or any ancestor); `css/tokens.css` scopes every brand block to an `[data-brand="…"]` attribute selector, so tokens cascade from wherever the attribute sits. `index.html:2` sets the initial value; `js/library.js:79` (`setBrand`) re-stamps it, plus `#hash` deep links (`library.js:151`) for headless screenshots. Brand-specific overrides in `components.css` use `[data-brand="plt"] .btn--secondary { … }`-style descendant selectors — PLT is the only brand with a materially different skin.

`README.md:24-26` claim: *"Everything brand-specific is a custom property — there are no hardcoded brand colours in `components.css` except values that are identical in every brand's Figma frame (payment-scheme colours, SEEL artwork colours)."* Verified true except `#FFFFFF`/`#000`/`#595959` literals in `.seel-module*` (`components.css:256, 268, 276-281`).

### 2.2 Type scale — `css/components.css:22-37`, demo `index.html:116-130`
```css
.t-display { font-family: var(--font-display); font-style: var(--font-display-style); font-weight: var(--w-display); font-size: 32px; line-height: 38px; }
.t-h1      { font-weight: var(--w-bold); font-size: 28px; line-height: 34px; }
.t-h2      { font-weight: var(--w-bold); font-size: 22px; line-height: 28px; }
.t-h3      { font-weight: var(--w-bold); font-size: 18px; line-height: 24px; }
.t-body-lg { font-weight: var(--w-regular); font-size: 16px; line-height: 22px; }
.t-body    { font-weight: var(--w-regular); font-size: 14px; line-height: 20px; }
.t-body-md { font-weight: var(--w-medium); font-size: 14px; line-height: 20px; }
.t-body-b  { font-weight: var(--w-bold); font-size: 14px; line-height: 20px; }
.t-caption { font-weight: var(--w-regular); font-size: 12px; line-height: 16px; color: var(--stone); }
.t-caption-b { font-weight: var(--w-bold); font-size: 12px; line-height: 16px; }
.t-price   { font-weight: var(--w-bold); font-size: 20px; line-height: 26px; }
.t-roundel { font-family: 'Antonio', sans-serif; font-weight: 700; font-size: 22px; line-height: 22px; text-transform: uppercase; }
.caps { text-transform: var(--caps); }
```

### 2.3 Buttons — `components.css:39-105`, markup `index.html:139-157`
Variants: `--buy`, `--primary`, `--secondary`, `--tertiary`, `--tertiary-xs`, `--text`. States: default, `:active` (touch-down), `:disabled`. Base 50px tall, 8px/24px padding, 16/24 type at `--w-semibold`, `width:100%`, `border-radius: var(--radius-button)`. Tertiary hugs at 40px/14px; XS is auto-height 8px pad, 12/16; Text Only min-height 34px, 5px/24px pad. Icon slots 16/20/24px.
```css
.btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; border:none; cursor:pointer;
  font-family:var(--font); border-radius:var(--radius-button); height:50px; padding:8px 24px;
  font-weight:var(--w-semibold); font-size:16px; line-height:24px; width:100%; }
.btn--buy { background: var(--cta); color: var(--white); text-transform: uppercase; }
.btn--buy:active { background: var(--dark-2); }
[data-brand="plt"] .btn--buy:active { background: var(--dark-1); }
.btn--buy:disabled { background: var(--dark-2); color: var(--white); }
[data-brand="plt"] .btn--buy:disabled { background: var(--grey-05); color: var(--grey-3); }
.btn--primary { background: var(--primary); color: var(--white); text-transform: uppercase; }
[data-brand="plt"] .btn--primary { color: var(--background-white); }
[data-brand="debenhams"] .btn--primary,
[data-brand="boohoo"] .btn--primary { color: var(--black); }
.btn--primary:active { background: var(--dark-1); }
.btn--primary:disabled { background: var(--neutral); color: var(--grey-3); }
[data-brand="plt"] .btn--primary:disabled { background: var(--grey-05); color: var(--grey-3); }
.btn--secondary { background: var(--background-white); color: var(--black); border: 1px solid var(--dark-2); }
.btn--secondary:active { background: var(--light-4); }
.btn--secondary:disabled { background: var(--background-white); color: var(--grey-3); border-color: var(--neutral); }
[data-brand="plt"] .btn--secondary { background: transparent; border-color: var(--grey-3);
  font-weight: var(--w-regular); font-size: 14px; padding: 8px 16px; }
.btn--tertiary { width:auto; height:40px; padding:8px 16px; background:var(--neutral); color:var(--black);
  font-weight:var(--w-regular); font-size:14px; }
.btn--tertiary:active { background: var(--neutral-pressed); }
[data-brand="plt"] .btn--tertiary:active { background: var(--light-4); }
.btn--tertiary:disabled { background: var(--grey-1); color: var(--grey-3); }
.btn--tertiary-xs { width:auto; height:auto; padding:8px; background:var(--neutral); color:var(--soft-black);
  font-weight:var(--w-regular); font-size:12px; line-height:16px; }
.btn--text { width:auto; min-height:34px; height:auto; padding:5px 24px; background:none; color:var(--cta);
  font-weight:var(--w-semibold); font-size:14px; }
.btn--text:active { color: var(--primary-dark); }
.btn--text:disabled { color: var(--dark-2); }
```
Source per README: DS Button frames `12681-158518`.

### 2.4 Payment buttons — `components.css:107-136`, markup `index.html:159-175`
Brand-agnostic (scheme colours fixed). Variants: `--yellow` (PayPal `#FFC439`), `--silver`, `--white` (black 1px border), `--black`, `--gwhite` (`#3C4043` border), `--klarna` (`#0B051D`), `--clearpay` (`#B2FCE4`), `--mini` (114px), `--glass` (25px radius + 12px backdrop blur, black at 82% alpha).
```css
.pay-btn { display:inline-flex; align-items:center; justify-content:center; gap:8px; width:100%; height:50px;
  border:none; border-radius:4px; cursor:pointer; font-family:'Helvetica Neue',Arial,sans-serif;
  font-weight:500; font-size:15px; }
.pay-btn--mini { width: 114px; }
.pay-btn--yellow { background:#FFC439; }  .pay-btn--yellow:active { background:#F2BA36; }
.pay-btn--silver { background:#F2F2F2; }  .pay-btn--silver:active { background:#E7E7E7; }
.pay-btn--white  { background:#FFFFFF; border:1px solid #000000; }
.pay-btn--black  { background:#000000; color:#FFFFFF; }  .pay-btn--black:active { background:#323232; }
.pay-btn--gwhite { background:#FFFFFF; border:1px solid #3C4043; }
.pay-btn--klarna { background:#0B051D; color:#FFFFFF; }
.pay-btn--clearpay { background:#B2FCE4; }
.pay-btn--glass { border-radius:25px; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); }
.pay-btn--glass.pay-btn--black { background: rgba(0,0,0,0.82); }
```

### 2.5 Product card — `components.css:138-176`, markup `index.html:177-205`
170px wide, `aspect-ratio:170/255` image, 12px gaps. Actions stack top-right: group = 32px white circle + `--shadow-card-action`, 16px glyph; **PLT = 24px sharp translucent glass chip**, 12px glyph, no shadow. `.card__tag` is fit/range only (never a discount) — 28px, white, grey-2 border, 4px radius. Swatches 20px/4px radius, selected ringed black. `.card__brand` is `display:none` on PLT.
```css
.card { width:170px; display:flex; flex-direction:column; gap:12px; font-family:var(--font); }
.card__image { position:relative; aspect-ratio:170/255; background:var(--grey-1); overflow:hidden; }
.card__actions { position:absolute; top:8px; right:8px; display:flex; flex-direction:column; gap:8px; }
.card__action { width:32px; height:32px; border-radius:50%; background:var(--paper); border:none; cursor:pointer;
  box-shadow:var(--shadow-card-action); display:grid; place-items:center; padding:0; }
[data-brand="plt"] .card__action { width:24px; height:24px; border-radius:0;
  background:rgba(255,253,247,0.5); backdrop-filter:blur(2px); box-shadow:none; }
.card__tag { position:absolute; left:12px; bottom:12px; height:28px; display:inline-flex; align-items:center;
  padding:4px 8px; background:var(--white); border:1px solid var(--grey-2); border-radius:4px;
  font-weight:var(--w-light,var(--w-regular)); font-size:12px; color:var(--black); }
.card__brand { font-weight:var(--w-semibold); font-size:14px; line-height:18px; color:var(--black); }
[data-brand="plt"] .card__brand { display:none; }
.card__title { font-weight:var(--w-regular); font-size:14px; line-height:18px; color:var(--black); margin:0; }
.card__price { font-weight:var(--w-semibold); color:var(--danger); }
.card__was { text-decoration:line-through; color:var(--black); }
.card__saving { font-weight:var(--w-light,var(--w-regular)); color:var(--danger); }
.card__swatch { width:20px; height:20px; border-radius:4px; border:1px solid var(--grey-2); padding:1px;
  background:transparent; cursor:pointer; }
.card__swatch--selected { border-color: var(--black); }
```
This is a **thinner** card than the target's `.pc` — no badges, AI badge, taggstar, offer line, NDD, star rating or quick-add label. Only the PLT glass-chip action treatment and the "tag is never a discount" rule are worth harvesting.

### 2.6 Size selector — `components.css:178-194`, markup `index.html:207-219`
```css
.sizes { display:flex; flex-wrap:wrap; gap:8px; }
.sizes__header { display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; font-size:14px; }
.size { min-width:60px; height:50px; padding:0 16px; display:inline-flex; align-items:center; justify-content:center;
  background:var(--background-white); border:1px solid var(--grey-3); border-radius:var(--radius);
  font-family:var(--font); font-weight:var(--w-light); font-size:16px; color:var(--black);
  cursor:pointer; position:relative; overflow:hidden; }
.size--selected { border-color: var(--black); font-weight: var(--w-regular); }
.size--oos { color: var(--grey-3); }
.size--oos::after { content:''; position:absolute; left:-20%; right:-20%; top:50%;
  height:1px; background:var(--grey-3); transform:rotate(-33deg); }
```
Selection JS: `library.js:123-127`.

### 2.7 USP box — `components.css:196-205`, markup `index.html:255-272`
```css
.usp-box { background:var(--background-white); border:1px solid var(--grey-2); border-radius:var(--radius);
  padding:16px; display:flex; flex-direction:column; gap:16px; }
.usp-box__row { display:flex; align-items:center; gap:16px; }
.usp-box__row svg, .usp-box__row img { width:24px; height:24px; flex:none; }
.usp-box__title { font-weight:var(--w-light); font-size:14px; line-height:18px; color:var(--black); }
.usp-box__sub { font-weight:var(--w-light); font-size:12px; line-height:15px; color:var(--grey-5); }
```

### 2.8 USP banner + countdown — `components.css:207-217`, markup `index.html:274-286`, JS `library.js:138-146`
Rule (README:52): countdown is **red on the dark banner, black on the light one**. Format `00:HH:MM:SS` counting to midnight.
```css
.usp-banner { height:56px; display:flex; flex-direction:column; align-items:center; justify-content:center;
  background:var(--grey-05); text-align:center; }
.usp-banner__line { font-weight:var(--w-bold); font-size:12px; line-height:16px; }
.usp-banner__countdown { font-weight:var(--w-bold); font-size:12px; line-height:16px; color:var(--black); }
.usp-banner--dark { background: var(--black); }
.usp-banner--dark .usp-banner__line { color: var(--white); }
.usp-banner--dark .usp-banner__countdown { color: var(--red); }
```

### 2.9 Free-delivery threshold — `components.css:219-225`, markup `index.html:288-300`
Two states: progress and `--eligible` (row layout with a `--dark-3` tick).
```css
.threshold { display:flex; flex-direction:column; gap:12px; font-size:14px; }
.threshold__copy { font-weight:var(--w-light); color:var(--black); }
.threshold__copy b { font-weight: var(--w-bold); }
.threshold__track { height:4px; border-radius:100px; background:var(--grey-2); overflow:hidden; }
.threshold__fill { height:100%; border-radius:100px; background:var(--dark-3); }
.threshold--eligible { flex-direction:row; align-items:center; gap:12px; }
```

### 2.10 SEEL / Deliver+ banner — `components.css:227-253`, markup `index.html:309-352`
Two placements from one block: PDP banner (headline + tick list, or KM's price pitch) and checkout opt-in (adds the 24px `--seel-check` checkbox, square on PLT). Per-brand copy switching in `library.js:93-102` — Debenhams and boohooMAN hide the headline, KM shows the pitch instead of ticks.
```css
.seel-banner { background:linear-gradient(90deg,var(--seel-bg),var(--seel-bg-2)); color:var(--seel-fg);
  border-radius:var(--radius); padding:16px 20px; display:flex; align-items:center; gap:24px; }
.seel-banner__col { flex:1; display:flex; flex-direction:column; gap:12px; }
.seel-banner__headline { font-weight:var(--w-bold); font-size:14px; line-height:18px; margin:0; }
.seel-banner__tick { display:flex; align-items:center; gap:8px; font-weight:var(--w-light); font-size:12px; line-height:15px; }
.seel-banner__learn { font-weight:var(--w-bold); font-size:14px; line-height:18.2px; color:var(--seel-learn); cursor:pointer; }
[data-brand="debenhams"] .seel-banner__learn { font-weight: var(--w-semibold); }
.seel-banner__pitch { font-weight:var(--w-regular); font-size:14px; line-height:18px; margin:0; }
.seel-banner__pitch-sub { font-weight:var(--w-regular); font-size:12px; line-height:16px; margin:0; }
.seel-banner__check { width:24px; height:24px; flex:none; border:1px solid var(--seel-check);
  background:var(--seel-check); border-radius:3px; display:grid; place-items:center; cursor:pointer; padding:0; }
[data-brand="plt"] .seel-banner__check { border-radius: 0; }
.seel-banner__check[aria-checked="false"] { background: transparent; }
```

### 2.11 Deliver+ bag module — `components.css:255-283`, markup `index.html:354-379`
Brand band (gradient) over a white body of 6 benefit rows, each a 48px white puck with `--shadow-icon-puck`; "Powered by Seel" footer at `#595959`. PLT hides the Holiday-prize row and is the only brand showing the band headline.
```css
.seel-module { background:#FFFFFF; border-radius:var(--radius); overflow:hidden; }
.seel-module__band { background:linear-gradient(90deg,var(--seel-bg),var(--seel-bg-2)); color:var(--seel-fg);
  padding:16px 20px; display:flex; flex-direction:column; gap:8px; }
.seel-module__band .seel-banner__headline { display:none; }
[data-brand="plt"] .seel-module__band .seel-banner__headline { display:block; }
.seel-module__body { padding:16px; display:flex; flex-direction:column; gap:12px; }
.seel-module__row { display:flex; align-items:center; gap:12px; }
[data-brand="plt"] .seel-module__row--holiday { display:none; }
.seel-module__puck { width:48px; height:48px; border-radius:50%; flex:none; background:#FFFFFF;
  box-shadow:var(--shadow-icon-puck); display:grid; place-items:center; }
.seel-module__puck img { width:24px; height:24px; }
.seel-module__title { font-weight:var(--w-semibold); font-size:14px; line-height:17px; color:#000; margin:0; }
.seel-module__sub { font-weight:var(--w-light); font-size:12px; line-height:16px; color:#000; margin:2px 0 0; }
.seel-module__powered { display:flex; align-items:center; justify-content:center; gap:4px;
  font-weight:var(--w-light); font-size:12px; color:#595959; }
```

### 2.12 Deliver+ lockups — `components.css:285-298`, artwork composition `library.js:24-45`
```css
.dp-lockup { display:none; }
[data-brand="plt"] .dp-lockup--plt,
[data-brand="debenhams"] .dp-lockup--debenhams,
[data-brand="boohoo"] .dp-lockup--boohoo,
[data-brand="boohooman"] .dp-lockup--boohooman,
[data-brand="karenmillen"] .dp-lockup--karenmillen { display:block; }
.dp-lockup--plt { position:relative; width:113px; height:40px; }
.dp-lockup--debenhams { position:relative; width:142px; height:30px; }
.dp-lockup--boohoo img { width:200px; height:19px; display:block; }
.dp-lockup--boohooman img { width:121px; height:15px; display:block; }
.dp-lockup--karenmillen { width:134px; }
```
Exact geometry (PLT shield 34.5×40 + inner 21.9×18.1 at 6.4/8.3 + word 72.3×11.9 at 40.8/11.3; Debenhams wordmark 142×20.3 + Deliver+ 64.7×5.6 at y 24.4; KM wordmark 134×10.9 + Deliver+ 99.5×18.5) is in `library.js:25-44`. **Identical geometry appears in CA** (`brand-colours.html:1047-1051`, `2145-2149`).

### 2.13 BNPL box — `components.css:300-318`, markup `index.html:232-246`
```css
.bnpl { background:var(--background-white); border:1px solid var(--grey-2); border-radius:var(--radius);
  padding:16px; display:flex; flex-direction:column; gap:12px; font-size:14px; }
.bnpl__chip { width:32px; height:22px; border-radius:3px; display:grid; place-items:center; overflow:hidden; }
.bnpl__chip img, .bnpl__chip svg { max-width:27px; max-height:14px; }
.bnpl__chip--payplus { background:#003B61; }
.bnpl__chip--klarna { background:#FFB1D2; }
.bnpl__chip--clearpay { background:#B2FCE3; }
.bnpl__chip--paypal { background:#FFF; border:1px solid var(--grey-2); }
.bnpl__terms { font-weight:var(--w-light); color:var(--black); }
.bnpl__small { font-weight:var(--w-light); font-size:12px; color:var(--grey-5); }
```

### 2.14 Roundels strip — `components.css:320-330`, markup `index.html:221-230`
```css
.roundels { display:flex; gap:4px; padding:16px; overflow-x:auto; }
.roundel { width:108px; height:108px; border-radius:50%; flex:none; position:relative; overflow:hidden;
  display:grid; place-items:center; padding:12px; background:var(--grey-1); cursor:pointer; border:none; }
.roundel img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
.roundel--label::after { content:''; position:absolute; inset:0; background:rgba(0,0,0,0.3); }
.roundel span { position:relative; z-index:1; color:#FFF; text-align:center; }
```
Label type is Antonio Bold 22/22 uppercase (`.t-roundel`). Compare against the target's roundels — this one carries a 30%-black scrim for image variants.

### 2.15 Section header + rail — `components.css:332-336`
```css
.section-header { display:flex; align-items:baseline; justify-content:space-between; padding:8px 0; }
.section-header h3 { font-weight:var(--w-medium); font-size:20px; line-height:22px; margin:0; }
.section-header a { font-weight:var(--w-regular); font-size:14px; color:var(--ink); text-decoration:none; cursor:pointer; }
.rail { display:flex; gap:var(--block-gap); overflow-x:auto; }
```
`--block-gap` is 0 on PLT, 2px elsewhere — PLT rails butt image-to-image.

### 2.16 Account rewards + rows — `components.css:338-360`, markup `index.html:388-401`, colour JS `library.js:104-110`
Band colour is **set in JS, not tokens**: PLT `var(--cta)` on white; Debenhams and boohoo `var(--primary)` on black; boohooMAN and KM `#000` on white.
```css
.rewards { border-radius:var(--radius); padding:16px; display:flex; flex-direction:column; gap:8px; }
.rewards__label { font-weight:var(--w-medium); font-size:14px; }
.rewards__amount { font-weight:var(--w-bold); font-size:44px; line-height:1; }
.rewards__amount small { font-size:24px; }
.acc-row { display:flex; align-items:center; gap:16px; height:64px;
  font-weight:var(--w-regular); font-size:16px; color:var(--ink); }
.acc-row__icon { width:48px; height:48px; border-radius:50%; flex:none; background:var(--paper);
  box-shadow:var(--shadow-card); display:grid; place-items:center; }
.acc-row__badge { margin-left:auto; background:var(--black); color:var(--paper); border-radius:999px;
  height:24px; padding:0 12px; display:inline-flex; align-items:center;
  font-weight:var(--w-bold); font-size:12px; }
```
Loyalty programme name per brand (`library.js:6-11`): PLT **Royalty**, Debenhams **Unlimited**, boohoo/boohooMAN/KM **Premier**.

### 2.17 Empty state — `components.css:362-365`, markup `index.html:403-411`
```css
.empty { display:flex; flex-direction:column; align-items:center; gap:16px; padding:24px 16px; text-align:center; }
.empty svg { width:32px; height:32px; }
.empty p { font-weight:var(--w-regular); font-size:16px; line-height:23px; color:var(--black); margin:0; }
```

### 2.18 Icon library — `js/ds-icons.js`
13 glyphs on `window.DS_ICONS`, all 24-box, `stroke="currentColor"`, stroke-width normalised to 1.15pt-at-24px (`extract-tokens.mjs:146-157`): `ds-tick, ds-delivery, ds-order, ds-time, ds-wishlist, ds-bookmark, ds-quick-add, ds-bag, ds-account, ds-addresses, ds-unlimited, ds-support, ds-lock-fill`. `ds-heart-outline` is requested by the script (`extract-tokens.mjs:148`) but **absent from the generated output** — it does not exist in the prototype's `dsIcons.ts`. Injection + auto-sizing: `library.js:47-67`.

---

## 3. colour-alignment-prototype — detail

**Screens covered** (five phones side by side, one column per screen — `brand-colours.html:2271`, cloned from a hidden master at `751`): **PDP** (753), **Added to Bag** (2223 modal over the PDP), **Bag** (1565), **Checkout** (1148), **Account** (1360). Brand switching: `data-brand="deb|bh|bm|plt|km"` on `.phone`; brand-specific markup blocks use `data-b="deb"` etc. and are hidden by `[data-b]{display:none !important}` unless the phone's brand matches (`133-138`). Deep link `?brand=bh` (`2514-2525`).

### 3.1 Buttons and CTAs

**Add to Bag / primary CTA** — `349-350`, markup `814`:
```css
.btn-atb{width:100%;height:50px;background:var(--primary);border:none;border-radius:4px;display:flex;align-items:center;justify-content:center;font-family:var(--font);}
.btn-atb span{font-size:16px;font-weight:var(--w-btn);line-height:24px;color:var(--primary-ink);text-transform:var(--case-1);}
```

**View Bag / Continue Shopping pair** — `441-445`, markup `2250-2253`:
```css
.bag-btns{display:flex;flex-direction:column;gap:8px;}
.btn-viewbag{width:100%;height:50px;background:var(--primary);border:none;border-radius:4px;display:flex;align-items:center;justify-content:center;font-family:var(--font);}
.btn-viewbag span{font-size:16px;font-weight:var(--w-btn);line-height:24px;color:var(--primary-ink);text-transform:var(--case-1);}
.btn-contshop{width:100%;height:50px;background:var(--white);border:1px solid var(--outline);border-radius:4px;display:flex;align-items:center;justify-content:center;font-family:var(--font);}
.btn-contshop span{font-size:16px;font-weight:var(--w-btn);line-height:24px;color:#000;text-transform:var(--case-2);}
```
Note the design order: **Continue Shopping (secondary) sits above View Bag (primary)** — `2250-2253`.

**Checkout buttons** — `611-614`, markup `1172` (primary "Buy Now"), `1322` (outline "Change Payment Method"), `1279` (navy Pay):
```css
.co-btn{height:50px;border-radius:4px;border:1px solid transparent;font-family:var(--font);font-size:16px;font-weight:var(--w-btn);line-height:24px;color:#000;background:var(--white);display:flex;align-items:center;justify-content:center;gap:10px;padding:8px 24px;width:100%;}
.co-btn-primary{background:var(--primary);border-color:var(--primary);color:var(--primary-ink);text-transform:var(--case-1);}
.co-btn-outline{background:var(--white);border-color:var(--outline);text-transform:var(--case-2);}
.co-btn-pay{background:var(--navy);border-color:var(--navy);border-radius:8px;color:#fff;gap:12px;font-weight:600;}
```
The Pay button is **fixed navy `#00112C`, 8px radius, weight 600 — brand-independent** (README:131-132).

**Bag checkout CTA (54px)** — `565`, markup `2199-2200` ("Checkout with Deliver+" / "Continue Without Deliver+", both primary):
```css
.btn-checkout{width:100%;height:54px;background:var(--primary);border:none;border-radius:4px;display:flex;align-items:center;justify-content:center;font-family:var(--font);font-size:16px;font-weight:var(--w-btn);color:var(--primary-ink);text-transform:var(--case-1);letter-spacing:.2px;}
```

**Apply (secondary, fixed 95px)** — `656`, markup `1240`, `2174`; plus a PLT override at `260`:
```css
.btn-apply{width:95px;flex:none;height:50px;border-radius:4px;border:1px solid var(--outline);background:var(--white);font-family:var(--font);font-size:16px;font-weight:var(--w-btn);color:#000;text-transform:var(--case-2);}
.phone[data-brand="plt"] .btn-apply{background:#faf5e7;border-color:#faf5e7;}
```

**Tertiary CTA** — `509-512`, markup `1879`:
```css
.btn-tert{background:var(--tert);border:none;border-radius:4px;padding:8px 12px;font-family:var(--font);font-size:12px;font-weight:var(--w-reg);color:#000;white-space:nowrap;}
.btn-tert.grey{background:var(--grey-1);}
.btn-tert.outline{background:var(--white);border:1px solid var(--outline);}
.chip-save{background:var(--red-light);border-radius:4px;padding:8px 12px;font-size:12px;font-weight:var(--w-bold);color:var(--red);white-space:nowrap;}
```

**Account buttons** — `706`, `718`, markup `1387`, `1400`:
```css
.btn-balance{background:var(--card-btn-bg);border:none;border-radius:4px;padding:8px;font-size:14px;font-weight:var(--w-body);color:var(--card-btn-ink);font-family:var(--font);line-height:normal;}
.btn-signout{background:var(--grey-2);border:none;border-radius:4px;padding:8px;font-size:14px;font-weight:var(--w-body);color:#000;font-family:var(--font);margin-top:8px;line-height:normal;}
```

**Wallets + PayPal/ApplePay** — `351-354` (PDP), `569-580` (bag), markup `815-816`, `2202-2207`:
```css
.btn-paypal{width:100%;height:50px;background:var(--paypal);border-radius:4px;display:flex;align-items:center;justify-content:center;}
.btn-paypal img{height:20px;display:block;}
.btn-applepay{width:100%;height:50px;background:#000;border-radius:4px;display:flex;align-items:center;justify-content:center;}
.btn-applepay img{height:22px;display:block;}
.wallet{width:100%;height:50px;border-radius:4px;display:flex;align-items:center;justify-content:center;gap:8px;border:none;}
.wallet.paypal{background:var(--paypal);}
.wallet.paylater{background:var(--paypal);font-size:15px;font-weight:500;color:#2c2e2f;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;}
.wallet.apple{background:#000;}  .wallet.apple img{height:22px;}
.wallet.klarna{background:#0b051d;color:#fff;font-size:15px;font-weight:500;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;gap:10px;}
.wallet.klarna img{height:29px;display:block;}
.pay3-note{display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap;font-size:11px;font-family:Arial,sans-serif;color:#000;}
.or-row{display:flex;gap:16px;align-items:center;padding:8px 0;}
.or-row .l{flex:1;height:1px;background:var(--grey-2);}
.or-row span{font-size:16px;font-weight:var(--w-body);color:var(--grey-5);}
```
`--paypal` is `#FFC439` everywhere except **KM, where it is `#EEEEEE`** (`252`). PLT overrides the PDP PayPal fill inline to `#ffd600` (`1043`) — an inconsistency with `--paypal`.

**Text links** — `608`, `690`, `505`, `562`, `687`:
```css
.link{font-size:12px;font-weight:var(--link-w);color:var(--link-ink);line-height:normal;text-decoration:var(--link-deco);}
.tcs .caption a,.tcs .body-m a{color:var(--cta);font-weight:var(--w-bold);text-decoration:none;}
.bmod .m-link{color:var(--cta);font-weight:var(--w-bold);}
.os-disc{display:flex;gap:6px;align-items:center;color:var(--cta);font-weight:var(--w-bold);}
.sum-discount{display:flex;align-items:center;gap:6px;font-size:14px;font-weight:var(--w-bold);color:var(--cta);}
```
Defaults `--link-ink:var(--cta); --link-w:var(--w-bold); --link-deco:none` (`157`); **KM sets `--link-w:500`** (`253`).

### 3.2 Checks, chips, badges, banners, price

**Checkbox** — `643-647`, markup `1328` (off), `1351` (on):
```css
.check{display:flex;align-items:center;gap:8px;}
.box{width:24px;height:24px;border-radius:3px;border:1px solid var(--grey-3);background:var(--white);display:flex;align-items:center;justify-content:center;flex:none;}
.box.on{background:var(--check);border-color:var(--check);}
.box svg{opacity:0;}
.box.on svg{opacity:1;}
.check-lg{align-items:flex-start;gap:16px;}
```
Deliver+ has its own unchecked-only box: `.deliver-check` (`634`) — 24px, 3px radius, grey-3 border, white fill.

**Filled tick circle** (`--tickc` = brand Dark 3, black on boohoo/MAN/KM) — `436-440`, markup `1656`, `2246`:
```css
.free-del{display:flex;gap:12px;align-items:center;justify-content:center;}
.free-del svg{flex-shrink:0;display:block;}
.free-del circle{fill:var(--tickc);}
.free-del p{font-size:14px;font-weight:var(--w-body);color:#000;}
.free-del.left{justify-content:flex-start;}
```

**VTO chip / hanger** — `310-313`, `370-372`, markup `779-781` (stroke bound to `var(--vto)`), `1008` (PLT dark variant, white stroke):
```css
.chip-row{display:flex;justify-content:center;}
.chip{background:var(--white);display:flex;gap:6px;align-items:center;padding:9px 14px;border-radius:100px;box-shadow:0 0 14px -4px rgba(0,0,0,.25);border:none;font-family:var(--font);}
.chip img,.chip svg{width:16px;height:12px;display:block;}
.chip p{font-size:13px;font-weight:600;color:#000;white-space:nowrap;}
.chip.chip-dark{background:var(--primary);}
.chip.chip-dark p{color:#fff;}
.phone[data-brand="plt"] .chip-row{justify-content:flex-start;}
```

**Price + save badge** — `324-329`, markup `793-797`; PLT scales to 20px inline (`1017-1019`):
```css
.price-row{display:flex;gap:12px;align-items:center;}
.price-now{font-size:24px;font-weight:var(--w-bold);color:var(--price);}
.price-was{font-size:24px;font-weight:var(--w-reg);color:var(--grey-5);text-decoration:line-through;}
.badge-save{background:var(--badge-bg);border-radius:4px;padding:4px 8px;display:flex;align-items:center;justify-content:center;}
.badge-save span{font-size:14px;font-weight:var(--w-med);color:var(--badge-ink);}
.promo-line{font-size:13px;font-weight:var(--w-med);color:var(--price);}
```
Prices in cards use `--price` too (`433`, `474`). `--price` is `#D33F3F` on four brands, **`#C90000` on PLT**; `--badge-bg` is `#FFF2F2` except **PLT `transparent`** (`232`).

**Header USP banners** — `284-295`, markup `770-771` (deb/bh/bm/km), `998-999` (PLT):
```css
.usp-1{background:var(--banner1-bg);padding:4px 16px;display:flex;justify-content:center;}
.usp-1 p{font-size:12px;font-weight:var(--w-reg);color:var(--banner1-ink);white-space:nowrap;}
.usp-2{background:var(--banner2-bg);padding:4px 16px;display:flex;gap:8px;align-items:center;justify-content:center;}
.usp-2 p{font-size:12px;font-weight:var(--w-reg);color:var(--banner2-ink);white-space:nowrap;}
.usp-2 .code-bold{font-weight:600;}
.usp-2 .usp-divider{width:4px;height:1px;background:var(--banner2-ink);opacity:.9;}
.plt-banner-1{background:var(--banner1-bg);padding:6px 16px;display:flex;flex-direction:column;align-items:center;gap:1px;}
.plt-banner-1 .l1{font-size:11px;font-weight:500;color:#000;letter-spacing:.02em;}
.plt-banner-1 .timer{font-size:11px;font-weight:500;color:#c90000;letter-spacing:.06em;}
.plt-banner-2{background:var(--banner2-bg);padding:7px 16px;display:flex;justify-content:center;text-align:center;}
.plt-banner-2 p{font-size:11px;font-weight:500;color:#000;line-height:1.4;}
```
PLT is the only brand whose two banners are tinted (`--banner1-bg:#F1C59E` warm peach, `--banner2-bg:#FFE4D2` light cream) and the only one with a countdown timer (red `#C90000`) — everyone else is `#FAFAFA` over black.

**Stock alert / sold banner / pre-order / dispatch** — `495-518`, markup `1689`, `1990`, `2075`, `2089`:
```css
.balert{background:var(--red-light);border-left:2px solid var(--red);padding:10px 12px;display:flex;gap:12px;align-items:center;font-size:14px;font-weight:var(--w-body);}
.bsold{background:var(--soft-black);border-radius:4px;padding:8px 12px;display:flex;gap:10px;align-items:center;color:#fff;font-size:12px;font-weight:var(--w-body);}
.bsold img{width:16px;height:16px;display:block;filter:invert(1);}
.pre-chip{display:inline-flex;gap:6px;align-items:center;background:var(--grey-1);border-radius:4px;padding:4px 8px;font-size:12px;font-weight:var(--w-body);align-self:flex-start;}
.dispatch{background:var(--grey-1);border-radius:4px;padding:12px;display:flex;gap:10px;align-items:center;font-size:12px;font-weight:var(--w-body);}
```

**Account status pills** — `714-716`, markup `1392` (`.tag.n3` counter), `1396` (`ACTIVE`):
```css
.tag{background:#000;border-radius:100px;height:24px;padding:4px 12px;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-sizing:border-box;}
.tag span{font-size:12px;font-weight:var(--w-bold);color:#fff;white-space:nowrap;line-height:normal;}
.tag.n3{width:24px;padding:4px 0;}
```
Always black + white, **never brand-tinted**.

**Payment-option chips** — `582-596`, markup `2209-2218`. 8 chips (Visa, Mastercard, AMEX `#0971CE`, Apple Pay, GPay, PayPal, Pay+, Klarna). Clearpay deliberately omitted (README:79-81).
```css
.pay-opts{display:flex;gap:8px;align-items:center;}
.pchip{flex:1;min-width:0;aspect-ratio:30.46/21.19;background:#fff;border:.5px solid var(--grey-2);border-radius:2.77px;display:flex;align-items:center;justify-content:center;gap:1px;position:relative;overflow:hidden;}
.pchip.visa img{width:63%;}   .pchip.mc img{width:64%;}
.pchip.amex{background:#0971ce;border-color:#0971ce;justify-content:flex-end;}
.pchip.apple{border-color:#000;}  .pchip.apple img.mark{height:44%;}  .pchip.apple img.word{height:38%;}
.pchip.gpay img.gmark{height:42%;}  .pchip.gpay img.word{height:36%;}
.pchip.paypal img{width:70%;}
.pchip.full{border:none;background:none;}  .pchip.full img{width:100%;height:100%;}
```

### 3.3 Deliver+ (three placements)

**PDP banner** — `356-365`, markup `818-830`:
```css
.deliver-banner{background:var(--dplus-bg);border-radius:4px;padding:16px 20px;display:flex;flex-direction:column;gap:10px;color:var(--dplus-ink);}
.deliver-logo{display:flex;flex-direction:column;gap:3px;align-items:flex-start;}
.deliver-title{font-size:16px;font-weight:var(--w-bold);color:var(--dplus-ink);}
.phone[data-brand="plt"] .deliver-title{font-weight:400;}
.deliver-list{display:flex;flex-direction:column;gap:8px;}
.deliver-item{display:flex;gap:10px;align-items:flex-start;color:var(--dplus-ink);}
.deliver-item p{font-size:12px;font-weight:var(--w-body);letter-spacing:-.12px;flex:1;line-height:1.5;color:var(--dplus-ink);}
.deliver-more{font-size:14px;font-weight:var(--w-bold);color:var(--dplus-link);}
```

**Checkout upsell box** — `629-642`, markup `1195-1216`:
```css
.deliver-box{margin:0 16px;background:var(--dplus-bg);border-radius:4px;padding:16px;display:flex;flex-direction:column;gap:12px;color:var(--dplus-ink);}
.deliver-box-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;}
.deliver-box-logo img.word{height:18px;display:block;}
.deliver-box-logo img.dplus{height:6px;display:block;align-self:center;margin-top:2px;}
.deliver-check{width:24px;height:24px;border-radius:3px;border:1px solid var(--grey-3);background:var(--white);flex-shrink:0;}
.deliver-box .protect{font-size:14px;font-weight:var(--w-body);}
.deliver-ticks{display:flex;flex-direction:column;gap:8px;}
.deliver-tick{display:flex;gap:8px;align-items:center;color:var(--dplus-ink);}
.deliver-tick p{font-size:12px;font-weight:var(--w-body);}
.deliver-learn{font-size:12px;font-weight:var(--w-bold);color:var(--dplus-link);}
```
Four ticks: Extended 35-Day Returns / Win a holiday worth £15k / £5-a-day late compensation / Priority Customer Support.

**Bag module** — `532-551`, markup `2140-2166`:
```css
.dp-head{background:var(--dplus-bg);padding:24px;display:flex;gap:12px;align-items:flex-start;color:var(--dplus-ink);}
.dp-head p{font-size:14px;font-weight:var(--w-body);line-height:1.4;letter-spacing:-.14px;}
.dp-usps{background:var(--white);padding:20px 24px;display:flex;flex-direction:column;gap:12px;}
.dp-usp{display:flex;gap:12px;align-items:center;}
.dp-ic{width:48px;height:48px;border-radius:50%;background:var(--white);box-shadow:0 0 14px -4px rgba(0,0,0,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.dp-ic img{width:24px;height:24px;display:block;object-fit:contain;}
.dp-usp .t{font-size:14px;font-weight:var(--w-bold);line-height:1.2;color:#000;}
.dp-usp .s{font-size:12px;font-weight:var(--w-body);line-height:1.3;color:#000;margin-top:4px;}
.dp-foot{background:var(--white);padding:0 24px 20px;display:flex;flex-direction:column;gap:8px;align-items:center;}
.dp-foot .tp{height:51px;display:block;}
.dp-powered{display:flex;gap:4px;align-items:center;font-size:12px;font-weight:var(--w-body);color:var(--grey-5);white-space:nowrap;}
.bag-dplus{background:var(--white);}
```
Five USPs (resale, 35-day returns, £5/day compensation, full coverage + 48hr payout, 24/7 support), then a Trustpilot lockup and "Powered by Seel". The `.dp-ic` 48px white puck + `0 0 14px -4px rgba(0,0,0,.18)` shadow is **identical to GDS `.seel-module__puck` / `--shadow-icon-puck`**.

### 3.4 Bag card + the 18 variants — CSS `465-531`, markup `1665-2139`
```css
.bcard{border:1px solid var(--grey-2);border-radius:4px;padding:12px;display:flex;flex-direction:column;gap:12px;background:var(--white);}
.bcard.oos{border-color:var(--red);}
.bcard-row{display:flex;gap:16px;align-items:stretch;}
.bthumb{width:68px;height:102px;flex-shrink:0;background:var(--grey-1);}
.binfo{flex:1;min-width:0;display:flex;flex-direction:column;gap:8px;font-size:12px;font-weight:var(--w-body);color:#000;}
.binfo .now{color:var(--price);font-weight:var(--w-bold);}
.binfo .was{text-decoration:line-through;}
.binfo .sub{color:var(--grey-4);}
.bside{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;min-height:102px;flex-shrink:0;}
.bheart{width:16px;height:16px;display:block;border:none;background:none;padding:0;}
.qty{display:flex;align-items:center;}
.qty .q-btn{width:28px;height:28px;border:1px solid var(--grey-3);background:var(--white);display:flex;align-items:center;justify-content:center;}
.qty .q-btn:first-child{border-radius:4px 0 0 4px;border-right:none;}
.qty .q-btn:last-child{border-radius:0 4px 4px 0;border-left:none;}
.qty .q-n{height:28px;min-width:16px;padding:0 4px;border-top:1px solid var(--grey-3);border-bottom:1px solid var(--grey-3);background:var(--white);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:var(--w-med);}
.bin-solo{width:31px;height:31px;border:1px solid var(--grey-3);border-radius:4px;background:var(--white);display:flex;align-items:center;justify-content:center;padding:0;}
.bmod{border-top:1px solid var(--grey-2);padding-top:12px;display:flex;flex-direction:column;gap:8px;font-size:12px;font-weight:var(--w-body);}
.bmod .m-head{font-size:14px;font-weight:var(--w-bold);}
.bmod .m-legal{color:var(--grey-4);}
.custom-rows{display:flex;flex-direction:column;gap:4px;font-size:12px;font-weight:var(--w-body);}
.sample-card{flex:0 0 140px;border:1px solid var(--grey-2);border-radius:4px;padding:12px;display:flex;flex-direction:column;gap:10px;background:var(--white);}
.sample-card .s-img{height:130px;display:flex;align-items:center;justify-content:center;}
```

| `data-card` | Line | Default | Variant |
|---|---|---|---|
| `gifts` | 1665 | off | Your Gifts section (Benefit bundle) |
| `oos` | 1688 | off | out of stock — red border + `.balert`, bin only |
| `qty-unavail` | 1709 | off | quantity unavailable — alert + disabled plus |
| `standard` | 1734, 1816, 1837 | **on** | plain card + bin/count/plus stepper |
| `beauty` | 1755 | **on** | beauty product card |
| `egift` | 1776 | off | e-Gift Card + View Details |
| `unlimited` | 1794 | off | Debenhams Unlimited subscription |
| `protect-add` | 1858 | off | protection plan offer + Add |
| `protect-active` | 1887 | off | protection plan active + Remove |
| `subscribe` | 1915 | off | Subscribe & Save + Save 5% chip |
| `assembly` | 1945 | off | Assembly Available (Taskrabbit) |
| `sold` | 1972 | off | black "Sold X times" banner |
| `freegift` | 1994 | off | attached Free Gift (Lancôme) |
| `comp-sample` | 2022 | off | Complimentary Sample |
| `custom` | 2039 | off | customised product + Bag Label rows |
| `preorder` | 2070 | off | Pre-Order chip + dispatch banner |
| `topup` | 2096 | off | Need A Top-Up? section |
| `samples` | 2117 | off | Choose 2 free samples carousel |

Structural bag chrome: `.bag-screen/.bag-stack/.bag-panel/.bag-pad/.bag-title/.bag-total-line` (`449-455`), `.seller-head` "Delivered by X" (`457`), `.bag-rule` (`461`), `.sect-head` (`463`), `.bag-promo` (`549`), `.bag-summary/.os-*` (`553-562`).

### 3.5 Checkout components — CSS `598-690`, markup `1148-1359`
`.co-header` + `.secure` lock (600-603) · type scale `.h1/.body-m/.body-m-bold/.caption/.link/.strike` (604-610) · `.co-bag` mini-summary with Buy Now (615-618) · `.co-delivery` + `.row-split` + `.rule` + `.price-line` (621-627) · `.pennies` donation with charity logos (648-651) · `.co-promo` + `.promo-field`/`.btn-apply` + `.redeem-row`/`.avail-balance` (PLT-only Redeem Account Balance, markup 1244-1247) · `.co-payment` `.methods` (652-680) · `.billing` + `.summary` + `.tcs` (681-690).
```css
.promo-field{flex:1;min-width:0;height:50px;background:var(--white);border:1px solid var(--grey-3);border-radius:4px;padding:8px 16px;display:flex;align-items:center;font-size:14px;font-weight:var(--w-body);color:var(--grey-4);}
.card-selected{background:var(--white);border:1px solid var(--navy-border);border-radius:4px;padding:16px;display:flex;flex-direction:column;gap:16px;}
.card-brand{width:46px;height:32px;flex:none;border:1px solid var(--grey-2);border-radius:3px;background:#fff;display:flex;align-items:center;justify-content:center;}
.card-note{font-size:12px;font-weight:var(--w-body);color:var(--navy);line-height:normal;}
.stat-field{height:50px;border-radius:8px;padding:8px 16px;display:flex;align-items:center;gap:10px;}
.stat-field.grey{background:var(--field-grey);}
.stat-field.white{background:var(--white);border:1px solid var(--field-border);}
.stat-field .val{font-size:16px;font-weight:var(--w-body);color:var(--field-text);line-height:normal;flex:1;}
.field-lbl{font-size:14px;font-weight:var(--w-body);color:var(--navy);line-height:normal;}
.card-row{background:var(--white);border:1px solid var(--grey-2);border-radius:4px;padding:16px;display:flex;align-items:center;gap:12px;}
.add-card{background:var(--white);border:1px solid var(--grey-2);border-radius:4px;padding:16px;display:flex;align-items:center;gap:12px;}
.add-tile{width:46px;height:32px;flex:none;background:var(--grey-1);border:1px solid var(--grey-2);border-radius:2.5px;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:300;}
```
Field colours (`--navy #00112C`, `--navy-border #03112A`, `--field-grey #EFEFF1`, `--field-border #DBDEE2`, `--field-text #5C687C`) are **fixed across all brands** and the `.stat-field` radius is **8px, not 4px**. KM bumps checkout body copy to 16px (`261-262`).

### 3.6 Account components — CSS `692-718`, markup `1360-1564`
```css
.account-screen{background:var(--page-bg);}
.acct-stack{display:flex;flex-direction:column;gap:16px;align-items:center;padding:16px 0 24px;background:var(--page-bg);}
.acct-greet .hi{font-size:24px;font-weight:var(--w-bold);line-height:normal;}
.acct-greet .email{font-size:12px;font-weight:var(--w-reg);line-height:normal;}
.rewards{background:var(--card-bg);border-radius:4px;padding:24px;display:flex;flex-direction:column;gap:20px;align-items:center;}
.rewards .amt{font-size:62.5px;font-weight:var(--w-bold);color:var(--card-ink);letter-spacing:-3.75px;line-height:59px;white-space:nowrap;}
.rewards .amt .minor{font-size:39.8px;letter-spacing:-2.39px;}
.rewards .lbl{font-size:12px;font-weight:var(--w-body);color:var(--card-ink);text-transform:uppercase;line-height:normal;}
.acct-row{background:var(--panel-bg);border-radius:4px;padding:16px;display:flex;gap:16px;align-items:center;width:100%;border:none;font-family:var(--font);text-align:left;}
.acct-row .r-ic{width:24px;height:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}
.acct-row .row-main{flex:1;display:flex;gap:12px;align-items:center;min-width:0;}
.acct-row .row-lbl{font-size:16px;font-weight:var(--w-body);color:#000;white-space:nowrap;line-height:normal;}
```
Balance card is **centred**, `--card-bg` per brand (Debenhams gets a *gradient*), white `View Balance` (`--card-btn-bg`) — MAN's is Aggressive Green. Row sets differ by brand (README:96-98): Debenhams and KM get the fuller sets (Unlimited/Premier, Beauty Club, Debenhams Mastercard); boohoo, MAN and PLT the shorter ones.

### 3.7 The button matrix (`brand-colours.html:744-748` board, CSS `95-106`, data `2345-2399`, render `2406-2472`)
6 rows × 7 columns per brand. Columns: **Default · Touch down · Disabled · Spinner · Added (icon 24) · Checkout Securely (icon 20) · Checkout Securely (icon 16)**. Rows: Buy It Now, Primary, Secondary, Tertiary, Tertiary XS, Text Only. Sizes: `358×50`, tertiary `40`, XS `31`, text `34`.
```css
.bs{width:358px;height:50px;border:1px solid transparent;display:flex;gap:8px;align-items:center;justify-content:center;font-size:16px;line-height:24px;white-space:nowrap;overflow:hidden;}
.bs.t3{width:auto;height:40px;font-size:14px;padding:0 16px;}
.bs.xs{width:auto;height:31px;font-size:12px;padding:0 10px;}
.bs.txt{width:auto;height:34px;font-size:14px;padding:0 4px;}
.bs .spn{width:20px;height:20px;border-radius:50%;border:2px solid currentColor;border-top-color:transparent;animation:bspin .9s linear infinite;}
.bs.t3 .spn,.bs.xs .spn{width:16px;height:16px;}
@keyframes bspin{to{transform:rotate(360deg)}}
```
Full signed-off state spec, verbatim (`2363-2399`) — `[fill, ink]` per state:
```js
var BTNS = {
  deb: {
    buy:{def:['#00787D','#FFFFFF'],prs:['#00565A','#FFFFFF'],dis:['#70BEB3','#FFFFFF']},
    primary:{def:['#7BE7D8','#000000'],prs:['#76DECF','#000000'],dis:['#E8F4F2','#B5B5B5']},
    secondary:{border:'#70BEB3',prsFill:'#E6FFFC',disBorder:'#E8F4F2'},
    tertiary:{def:'#E8F4F2',prs:'#D7EBE8'},
    text:{def:'#00787D',prs:'#00565A',dis:'#70BEB3'}
  },
  bh: {
    buy:{def:['#000000','#FFFFFF'],prs:['#000000','#FFFFFF'],dis:['#000000','#FFFFFF']},
    primary:{def:['#000000','#FFFFFF'],prs:['#000000','#FFFFFF'],dis:['#F2F2F2','#B5B5B5']},
    secondary:{border:'#000000',prsFill:'#D6D6D6',disBorder:'#F2F2F2'},
    tertiary:{def:'#F2F2F2',prs:'#E7E7E7'},
    text:{def:'#000000',prs:'#000000',dis:'#000000'}
  },
  bm: { /* identical to bh */ },
  plt: {
    buy:{def:['#550503','#FFFFFF'],prs:['#450603','#FFFFFF'],dis:['#FAF5E7','#B5B5B5']},
    primary:{def:['#550503','#FFFFFF'],prs:['#450603','#FFFFFF'],dis:['#FAF5E7','#B5B5B5']},
    secondary:{border:'#360502',prsFill:'#FCF0EE',disBorder:'#F3EAE8'},
    tertiary:{def:'#F3EAE8',prs:'#FCF0EE'},
    text:{def:'#550503',prs:'#1E0301',dis:'#360502'}
  },
  km: {
    buy:{def:['#892D05','#FFFFFF'],prs:['#7E2905','#FFFFFF'],dis:['#7E2905','#FFFFFF']},
    primary:{def:['#D24508','#FFFFFF'],prs:['#A83706','#FFFFFF'],dis:['#FAE9E1','#6B6B6B']},
    secondary:{border:'#000000',prsFill:'#F4D1C1',disBorder:'#FAE9E1'},
    tertiary:{def:'#FAE9E1',prs:'#F6DACE'},
    text:{def:'#892D05',prs:'#2A0E02',dis:'#7E2905'}
  }
};
var BTN_FONT = {deb:"'Geologica',sans-serif", bh:"'Montserrat',sans-serif", bm:"'Montserrat',sans-serif", plt:"'Roboto',sans-serif", km:"'Jost',sans-serif"};
var BTN_TXT = {
  deb: {w:600,c1:'uppercase',c2:'none',tw:600},
  plt: {w:600,c1:'uppercase',c2:'none',tw:600},
  bh:  {w:600,c1:'uppercase',c2:'none',tw:600},
  bm:  {w:600,c1:'uppercase',c2:'none',tw:600},
  km:  {w:400,c1:'none',c2:'none',tw:500}
};
```
Cross-row rules baked into `renderButtons` (`2437-2468`): Secondary is **white fill + brand outline, `Light 4` pressed fill, Grey-3 ink when disabled**; Tertiary/XS disabled always drop to **`#F2F2F2` + `#B5B5B5`** regardless of brand; XS ink is **Soft Black `#242424`**; Tertiary/XS labels are **weight 400**; radius is `0` for PLT and `4px` for everyone else (`2408`).

Anomalies visible in the matrix data, worth surfacing before merge:
- **KM Buy It Now uses the CTA dark orange `#892D05`, not the primary `#D24508`** — the only brand where Buy ≠ Primary hue family. Its **disabled state `#7E2905` + white** is *darker than default* and identical to touch-down, so there is no visual disabled affordance.
- **boohoo and boohooMAN Buy It Now have no distinct pressed or disabled state** (all three `#000` + `#FFF`), and **Text Only has no pressed/disabled differentiation** either.
- **KM Primary disabled ink is `#6B6B6B` (Grey 5)**, not the Grey 3 used by every other brand.

---

## 4. TOKENS

### 4.1 GDS `css/tokens.css` — verbatim, complete
Header (`1-4`): *"GENERATED by scripts/extract-tokens.mjs — do not edit by hand. Source of truth: plt-app-prototype/src/theme/brands.ts (which is itself lifted from the Debenhams Group Design System Figma, per-brand exact)."*

**`:root` — `tokens.css:6-34`**
```css
:root {
  /* spacing scale */
  --space-xs: 4px; --space-sm: 8px; --space-md: 12px;
  --space-lg: 16px; --space-xl: 24px; --space-xxl: 32px;

  /* shared system ramp (identical across brand frames) */
  --black: #000000;
  --white: #FFFFFF;
  --soft-black: #242424;
  --grey-1: #F2F2F2;
  --grey-2: #E7E7E7;
  --grey-25: #D6D6D6;
  --grey-3: #B5B5B5;
  --grey-4: #767676;
  --grey-5: #6B6B6B;
  --grey-6: #323232;
  --red-light: #FFF2F2;
  --yellow: #FFD600;
  --yellow-light: #FFFBE6;
  --green: #70C474;
  --green-light: #EAF6EA;
  --system-cursor: #2797FF;

  /* shadows */
  --shadow-card: 0 4px 10px rgba(22, 19, 20, 0.06);
  --shadow-float: 0 8px 18px rgba(22, 19, 20, 0.14);
  --shadow-card-action: 0 0 14px -4px rgba(0, 0, 0, 0.25);
  --shadow-icon-puck: 0 0 14px -4px rgba(0, 0, 0, 0.18);
}
```

**`[data-brand="plt"]` — `tokens.css:36-79`**
```css
[data-brand="plt"] {
  --brand-name: 'PrettyLittleThing';
  --primary: #550503;      --cta: #550503;        --primary-dark: #1E0301;
  --dark-1: #450603;       --dark-2: #360502;     --dark-3: #270401;
  --light-1: #C77E75;      --light-2: #EAAFA4;    --light-3: #FFD5CD;   --light-4: #FCF0EE;
  --neutral: #F3EAE8;      --neutral-pressed: #E5D4D1;
  --background-white: #FFFDF7;  --grey-05: #FAF5E7;
  --red: #C90000;          --on-cta: #FFFDF7;
  --warm-peach: #F1C59E;   --light-cream: #FFE4D2;
  --ink: var(--soft-black); --paper: var(--background-white);
  --stone: var(--grey-4);  --danger: var(--red);
  --font: 'Roboto', sans-serif;  --font-display: 'Cardo', serif;  --font-display-style: italic;
  --w-regular: 400; --w-medium: 500; --w-semibold: 600; --w-bold: 700; --w-light: 400; --w-display: 400;
  --radius: 0px; --radius-button: 0px; --caps: uppercase; --block-gap: 0px;
  --seel-bg: #E7ADA2; --seel-bg-2: #E7ADA2; --seel-fg: #000000;
  --seel-learn: #000000; --seel-check: #5F0000; --seel-on-check: #FFFFFF;
}
```

**`[data-brand="debenhams"]` — `tokens.css:81-122`**
```css
[data-brand="debenhams"] {
  --brand-name: 'Debenhams';
  --primary: #7BE7D8;      --cta: #00787D;        --primary-dark: #00565A;
  --dark-1: #76DECF;       --dark-2: #70BEB3;     --dark-3: #529C92;
  --light-1: #9DEDE2;      --light-2: #B8FDF4;    --light-3: #D6FFF9;   --light-4: #E6FFFC;
  --neutral: #E8F4F2;      --neutral-pressed: #D7EBE8;
  --background-white: #FFFFFF;  --grey-05: #FAFAFA;
  --red: #D33F3F;          --on-cta: #FFFFFF;
  --ink: var(--soft-black); --paper: var(--background-white);
  --stone: var(--grey-4);  --danger: var(--red);
  --font: 'Geologica', sans-serif; --font-display: 'Geologica', serif; --font-display-style: normal;
  --w-regular: 300; --w-medium: 600; --w-semibold: 600; --w-bold: 600; --w-light: 300; --w-display: 300;
  --radius: 4px; --radius-button: 4px; --caps: none; --block-gap: 2px;
  --seel-bg: #E8F4F2; --seel-bg-2: #E8F4F2; --seel-fg: #000000;
  --seel-learn: #00787D; --seel-check: #00787D; --seel-on-check: #FFFFFF;
}
```

**`[data-brand="boohoo"]` — `tokens.css:124-165`**
```css
[data-brand="boohoo"] {
  --brand-name: 'boohoo';
  --primary: #F8B5CC;      --cta: #BB305F;        --primary-dark: #CB4870;
  --dark-1: #EEA5BE;       --dark-2: #EA92B0;     --dark-3: #A82A55;
  --light-1: #FBC7D8;      --light-2: #FCD5E1;    --light-3: #FEE0EA;   --light-4: #FFE9F0;
  --neutral: #F1DCE3;      --neutral-pressed: #E4C9D2;
  --background-white: #FFFFFF;  --grey-05: #FAFAFA;
  --red: #D33F3F;          --on-cta: #FFFFFF;
  --ink: var(--soft-black); --paper: var(--background-white);
  --stone: var(--grey-4);  --danger: var(--red);
  --font: 'Montserrat', sans-serif; --font-display: 'Montserrat', serif; --font-display-style: normal;
  --w-regular: 500; --w-medium: 600; --w-semibold: 600; --w-bold: 700; --w-light: 400; --w-display: 600;
  --radius: 4px; --radius-button: 4px; --caps: none; --block-gap: 2px;
  --seel-bg: #FFE0EB; --seel-bg-2: #FFE0EB; --seel-fg: #000000;
  --seel-learn: #000000; --seel-check: #BB305F; --seel-on-check: #FFFFFF;
}
```

**`[data-brand="boohooman"]` — `tokens.css:167-208`**
```css
[data-brand="boohooman"] {
  --brand-name: 'boohooMAN';
  --primary: #000000;      --cta: #000000;        --primary-dark: #000000;
  --dark-1: #000000;       --dark-2: #000000;     --dark-3: #000000;
  --light-1: #767676;      --light-2: #B5B5B5;    --light-3: #C6C6C6;   --light-4: #D6D6D6;
  --neutral: #F2F2F2;      --neutral-pressed: #E7E7E7;
  --background-white: #FFFFFF;  --grey-05: #FAFAFA;
  --red: #D33F3F;          --on-cta: #FFFFFF;
  --ink: var(--soft-black); --paper: var(--background-white);
  --stone: var(--grey-4);  --danger: var(--red);
  --font: 'Montserrat', sans-serif; --font-display: 'Montserrat', serif; --font-display-style: normal;
  --w-regular: 500; --w-medium: 600; --w-semibold: 600; --w-bold: 700; --w-light: 400; --w-display: 600;
  --radius: 4px; --radius-button: 4px; --caps: none; --block-gap: 2px;
  --seel-bg: #101010; --seel-bg-2: #101010; --seel-fg: #FFFFFF;
  --seel-learn: #FFFFFF; --seel-check: #01FE8A; --seel-on-check: #000000;
}
```

**`[data-brand="karenmillen"]` — `tokens.css:210-251`**
```css
[data-brand="karenmillen"] {
  --brand-name: 'Karen Millen';
  --primary: #DB4E11;      --cta: #8E330B;        --primary-dark: #2C1003;
  --dark-1: #AF3E0E;       --dark-2: #832F0A;     --dark-3: #5E2207;
  --light-1: #E88A5B;      --light-2: #F0AE8B;    --light-3: #F3C1A7;   --light-4: #F6D3C3;
  --neutral: #FBEAE2;      --neutral-pressed: #F8DCCF;
  --background-white: #FFFFFF;  --grey-05: #FAFAFA;
  --red: #D33F3F;          --on-cta: #FFFFFF;
  --ink: var(--soft-black); --paper: var(--background-white);
  --stone: var(--grey-4);  --danger: var(--red);
  --font: 'Jost', sans-serif; --font-display: 'Jost', serif; --font-display-style: normal;
  --w-regular: 400; --w-medium: 500; --w-semibold: 600; --w-bold: 700; --w-light: 300; --w-display: 400;
  --radius: 0px; --radius-button: 4px; --caps: none; --block-gap: 2px;
  --seel-bg: #000000; --seel-bg-2: #161616; --seel-fg: #FFFFFF;
  --seel-learn: #FFFFFF; --seel-check: #FFFFFF; --seel-on-check: #000000;
}
```
(Lines are unwrapped one-per-line in the file; grouped here for compactness — values are verbatim.)

### 4.2 CA `.phone` token blocks — verbatim, complete

**Shared base — `brand-colours.html:142-181`** (defaults are the Debenhams values)
```css
.phone{
  --white:#ffffff; --grey-05:#fafafa; --grey-1:#f2f2f2; --grey-2:#e7e7e7;
  --grey-25:#d6d6d6; --grey-3:#b5b5b5; --grey-4:#767676; --grey-5:#6b6b6b;
  --grey-6:#323232; --soft-black:#242424; --black:#000000;
  --red:#d33f3f; --red-light:#fff2f2; --green:#70c474; --green-light:#eaf6ea;
  --yellow:#ffd600; --navy:#00112c; --navy-border:#03112a;
  --field-grey:#efeff1; --field-border:#dbdee2; --field-text:#5c687c;
  --deliver-teal:#e8f4f2; --deliver-ink:#1a847d; --cta-teal:#00787d;
  --paypal:#ffc439;
  /* per-brand slots, overridden below */
  --font:'Geologica',sans-serif;
  --w-btn:600; --case-1:uppercase; --case-2:none;
  --link-ink:var(--cta); --link-w:var(--w-bold); --link-deco:none;
  --w-body:300; --w-bold:600; --w-reg:400; --w-med:500;
  --dplus-bg:#e8f4f2; --dplus-ink:#000; --dplus-link:#00787d;
  --primary:#7be7d8;        /* primary CTA fill */
  --primary-ink:#000;       /* text on primary */
  --cta:#00787d;            /* links */
  --check:#00787d;          /* active checkbox fill */
  --outline:#70beb3;        /* outlined CTA border */
  --vto:var(--cta);         /* Virtual Try On hanger (KM keeps it black) */
  --tickc:#529c92;          /* filled tick circle: brand Dark 3 */
  --tert:#e8f4f2;           /* tertiary CTA fill: brand Neutral */
  --banner1-bg:#fafafa; --banner1-ink:#000;
  --banner2-bg:#000;    --banner2-ink:#fff;
  --badge-bg:#fff2f2;   --badge-ink:#d33f3f;
  --price:#d33f3f;
  --card-bg:#7be7d8;    --card-ink:#000;   /* account balance card */
  --card-btn-bg:#fff;   --card-btn-ink:#000;
  --page-bg:#fafafa;    --panel-bg:#fff;   /* account page */
  --body-bg:#fff;                          /* pdp + bag + checkout body */
  --deliver-bg:#e8f4f2;                    /* pdp deliver+ banner */
  --dot:#00787d;                            /* status dots */
  --new:#00787d;                            /* NEW markers */
}
```

**Debenhams — `185-195`**
```css
.phone[data-brand="deb"]{
  --font:'Geologica',sans-serif;
  --w-reg:300; --w-med:300;
  --primary:#7be7d8; --primary-ink:#000; --cta:#00787d; --check:#00787d; --outline:#70beb3;
  --tickc:#529c92; --tert:#e8f4f2;
  --banner1-bg:#fafafa; --banner1-ink:#000; --banner2-bg:#000; --banner2-ink:#fff;
  --badge-bg:#fff2f2; --badge-ink:#d33f3f; --price:#d33f3f;
  --card-bg:linear-gradient(131deg,#7be7d8 1.8%,#9dede2 100%); --card-ink:#000;
  --card-btn-bg:#fff; --card-btn-ink:#000;
  --dot:#00787d; --new:#00787d;
}
```

**boohoo — `199-209`**
```css
.phone[data-brand="bh"]{
  --font:'Montserrat',sans-serif;
  --w-body:400; --w-bold:700;
  --dplus-bg:#ffe0eb; --dplus-ink:#000; --dplus-link:#000;
  --primary:#000; --primary-ink:#fff; --cta:#000; --check:#000; --outline:#000;
  --tickc:#000; --tert:#f2f2f2;
  --banner1-bg:#fafafa; --banner1-ink:#000; --banner2-bg:#000; --banner2-ink:#fff;
  --badge-bg:#fff2f2; --badge-ink:#d33f3f; --price:#d33f3f;
  --card-bg:#000; --card-ink:#fff; --card-btn-bg:#fff; --card-btn-ink:#000;
  --deliver-bg:#f2f2f2; --dot:#000; --new:#000;
}
```

**boohooMAN — `212-222`**
```css
.phone[data-brand="bm"]{
  --font:'Montserrat',sans-serif;
  --w-body:400; --w-bold:700;
  --dplus-bg:#101010; --dplus-ink:#fff; --dplus-link:#fff;
  --primary:#000; --primary-ink:#fff; --cta:#000; --check:#000; --outline:#000;
  --tickc:#000; --tert:#f2f2f2;
  --banner1-bg:#fafafa; --banner1-ink:#000; --banner2-bg:#000; --banner2-ink:#fff;
  --badge-bg:#fff2f2; --badge-ink:#d33f3f; --price:#d33f3f;
  --card-bg:#000; --card-ink:#fff; --card-btn-bg:#01fe8a; --card-btn-ink:#000;
  --deliver-bg:#f2f2f2; --dot:#000; --new:#01fe8a;
}
```

**PLT — `225-237`**
```css
.phone[data-brand="plt"]{
  --font:'Roboto',sans-serif;
  --w-body:400; --w-bold:700;
  --dplus-bg:#e7ada2; --dplus-ink:#000; --dplus-link:#000;
  --primary:#550503; --primary-ink:#fff; --cta:#550503; --check:#550503; --outline:#360502;
  --tickc:#270401; --tert:#f3eae8;
  --banner1-bg:#f1c59e; --banner1-ink:#000; --banner2-bg:#ffe4d2; --banner2-ink:#000;
  --badge-bg:transparent; --badge-ink:#c90000; --price:#c90000; --red:#c90000;
  --card-bg:#550503; --card-ink:#fff; --card-btn-bg:#fffdf7; --card-btn-ink:#550503;
  --page-bg:#faf5e7; --panel-bg:#fffdf7; --body-bg:#fffdf7;
  --deliver-bg:#ffe4d2; --dot:#550503; --new:#550503;
  --grey-05:#faf5e7; --white:#fffdf7;
}
```

**Karen Millen — `243-258`**
```css
.phone[data-brand="km"]{
  --font:'Jost',sans-serif;
  --w-body:400; --w-bold:600;
  /* KM keeps its lighter sentence-case buttons; only colours change */
  --w-btn:400; --case-1:none; --case-2:none;
  --dplus-bg:linear-gradient(90deg,#000 36%,#161616 100%); --dplus-ink:#fff; --dplus-link:#fff;
  --primary:#d24508; --primary-ink:#fff; --cta:#892d05; --check:#892d05;
  --outline:#000; --vto:#000;
  --tickc:#000; --tert:#fae9e1; /* KM keeps the filled tick circles black */
  --paypal:#eeeeee; /* KM PayPal buttons on light grey, not yellow */
  --link-w:500; /* KM Text Only CTA sits at medium, not semibold */
  --banner1-bg:#fafafa; --banner1-ink:#000; --banner2-bg:#000; --banner2-ink:#fff;
  --badge-bg:#fff2f2; --badge-ink:#d33f3f; --price:#d33f3f;
  --card-bg:#d24508; --card-ink:#fff; --card-btn-bg:#fff; --card-btn-ink:#000;
  --deliver-bg:#fae9e1; --dot:#d24508; --new:#d24508;
}
```

**Palette board data (`2287-2343`)** — the documented full ramps, verbatim:
```js
var MONO = [['White','#FFFFFF'],['Grey 0.5','#FAFAFA'],['Grey 1','#F2F2F2'],['Grey 2','#E7E7E7'],['Grey 2.5','#D6D6D6'],['Grey 3','#B5B5B5'],['Grey 4','#767676'],['Grey 5','#6B6B6B'],['Grey 6','#323232'],['Soft Black','#242424'],['Black','#000000']];
var EXTENDED = [['Red','#D33F3F'],['Light Red','#FFF2F2'],['Yellow','#FFD600'],['Light Yellow','#FFFBE6'],['Green','#70C474'],['Light Green','#EAF6EA'],['System Cursor','#2797FF']];

deb  Primary+Action: Aqua #7BE7D8 · CTA Aqua #00787D
     Shades: Aqua Neutral #E8F4F2, Neutral Pressed #D7EBE8, Light 4 #E6FFFC, Light 3 #D6FFF9,
             Light 2 #B8FDF4, Light 1 #9DEDE2, Aqua (Primary) #7BE7D8, Dark 1 #76DECF,
             Dark 2 #70BEB3, Dark 3 #529C92, Primary Dark #00565A
bh   Primary+Action: Primary #000000 · CTA #000000
     Shades: Neutral #F2F2F2, Neutral Pressed #E7E7E7, Light 4 #D6D6D6, Light 3 #B5B5B5,
             Light 2 #808080, Light 1 #4D4D4D, Primary #000000, Dark 1..3 #000000, Primary Dark #000000
bm   Primary+Action: Primary #000000 · CTA #000000 · Brand specific: Aggressive Green #01FE8A
     Shades: identical to bh
plt  Primary+Action: Garnet #550503 · CTA Garnet #550503
     Brand specific: Warm Peach #F1C59E, Light Cream #FFE4D2
     Shades: Garnet Neutral #F3EAE8, Neutral Pressed #E5D4D1, Light 4 #FCF0EE, Light 3 #FFD5CD,
             Light 2 #EAAFA4, Light 1 #C77E75, Garnet (Primary) #550503, Dark 1 #450603,
             Dark 2 #360502, Dark 3 #270401, Primary Dark #1E0301
     Extended: Red #C90000 (rest as EXTENDED)
     Mono: adds White (warm) #FFFDF7 and Grey 0.5 #FAF5E7
km   Primary+Action: Primary #D24508 · CTA #892D05
     Shades: Neutral #FAE9E1, Neutral Pressed #F6DACE, Light 4 #F4D1C1, Light 3 #EDB59C,
             Light 2 #E69977, Light 1 #DD7446, Primary #D24508, Dark 1 #A83706,
             Dark 2 #7E2905, Dark 3 #541C03, Primary Dark #2A0E02
```

### 4.3 Side-by-side comparison and discrepancies

**Naming map** — CA's screen-role tokens vs GDS's palette-slot tokens:

| Role | GDS | CA | Same value? |
|---|---|---|---|
| primary fill | `--primary` | `--primary` | deb ✅ plt ✅ · **bh ❌ km ❌** |
| ink on primary | `--on-cta` (+ per-brand CSS overrides) | `--primary-ink` | see below |
| link / action | `--cta` | `--cta`, `--link-ink` | deb ✅ plt ✅ · **bh ❌ km ❌** |
| secondary border | `--dark-2` (CSS) | `--outline` | deb ✅ plt ✅ · **bh ❌ km ❌** |
| tertiary fill | `--neutral` (CSS) | `--tert` | deb ✅ plt ✅ · bm ✅ · **bh ❌ km ❌** |
| tick circle | *(none)* | `--tickc` (= Dark 3) | **new in CA** |
| VTO hanger | *(none)* | `--vto` | **new in CA** |
| Deliver+ band | `--seel-bg`/`--seel-bg-2`/`--seel-fg`/`--seel-learn` | `--dplus-bg`/`--dplus-ink`/`--dplus-link` | ✅ values match all 5 |
| Deliver+ checkbox | `--seel-check`/`--seel-on-check` | `--check` (generic) | **❌ diverge** — see below |
| price | `--danger` → `--red` | `--price` | ✅ |
| save badge | *(none)* | `--badge-bg`/`--badge-ink` | **new in CA** |
| account card | JS map in `library.js:106-107` | `--card-bg`/`--card-ink`/`--card-btn-bg`/`--card-btn-ink` | **CA is tokenised, GDS is not** |
| banners | *(none — `.usp-banner--dark` modifier)* | `--banner1-bg/-ink`, `--banner2-bg/-ink` | **new in CA** |
| page/panel/body bg | `--paper`, `--grey-05` | `--page-bg`, `--panel-bg`, `--body-bg` | overlapping but differently named |
| status dots / NEW | *(none)* | `--dot`, `--new` | **new in CA** |
| checkout fields | *(none)* | `--navy`, `--navy-border`, `--field-grey`, `--field-border`, `--field-text` | **new in CA** |
| PayPal fill | hardcoded `#FFC439` in `.pay-btn--yellow` | `--paypal` (tokenised, KM `#EEEEEE`) | **CA is newer** |
| radius | `--radius` / `--radius-button` | *no radius token* — `4px` literal + a PLT-only `border-radius:0` override list (`376-415`) | **❌ CA is less systematic** |
| caps | `--caps` (titles) | `--case-1` (primary btn), `--case-2` (secondary btn) | different scope |
| weights | `--w-regular/-medium/-semibold/-bold/-light/-display` | `--w-body/-bold/-reg/-med` + `--w-btn`, `--link-w` | **❌ different vocabularies** |
| brand key | `plt · debenhams · boohoo · boohooman · karenmillen` on `<html>` | `plt · deb · bh · bm · km` on `.phone` | **❌ must be reconciled** |

**Confirmed identical across both repos**
- Mono ramp: `#FFFFFF · #FAFAFA · #F2F2F2 · #E7E7E7 · #D6D6D6 · #B5B5B5 · #767676 · #6B6B6B · #323232 · #242424 · #000000`.
- Extended ramp: red `#D33F3F`, light red `#FFF2F2`, yellow `#FFD600`, light yellow `#FFFBE6`, green `#70C474`, light green `#EAF6EA`, system cursor `#2797FF` (CA carries light-yellow and system-cursor in the palette *board data* only, not as CSS variables).
- Debenhams full ramp — every one of the 13 slots matches exactly.
- PLT full ramp, including warm mono (`#FFFDF7`, `#FAF5E7`), red `#C90000`, warm peach `#F1C59E`, light cream `#FFE4D2`, Deliver+ `#E7ADA2`.
- boohoo Deliver+ pink `#FFE0EB`; boohooMAN Deliver+ `#101010` and Aggressive Green `#01FE8A`; KM Deliver+ black/`#161616` (CA renders it as a gradient, GDS as `--seel-bg`/`--seel-bg-2` feeding the same `linear-gradient(90deg,…)`).
- The 48px icon puck shadow `0 0 14px -4px rgba(0,0,0,0.18)` and the card-action shadow `0 0 14px -4px rgba(0,0,0,0.25)`.
- Deliver+ lockup artwork geometry (see §2.12).

**Discrepancies — flagged in priority order**

1. **Karen Millen: GDS is stale. CA is the signed-off truth.** Every KM colour differs.

   | Slot | GDS | CA (signed off) |
   |---|---|---|
   | Primary | `#DB4E11` | **`#D24508`** (4.57:1 with white; the old value sat at 4.11:1 and **fails AA**) |
   | CTA | `#8E330B` | **`#892D05`** (8.6:1 on white) |
   | Primary Dark | `#2C1003` | `#2A0E02` |
   | Dark 1 / 2 / 3 | `#AF3E0E` / `#832F0A` / `#5E2207` | `#A83706` / `#7E2905` / `#541C03` |
   | Light 1 / 2 / 3 / 4 | `#E88A5B` / `#F0AE8B` / `#F3C1A7` / `#F6D3C3` | `#DD7446` / `#E69977` / `#EDB59C` / `#F4D1C1` |
   | Neutral / Pressed | `#FBEAE2` / `#F8DCCF` | `#FAE9E1` / `#F6DACE` |
   | Secondary border | `--dark-2` `#832F0A` | **`#000000`** (black outline, black copy) |
   | Tick circles / VTO | n/a | **`#000000`** |
   | Text-link weight | `--w-semibold` 600 | **500** |
   | Button case/weight | uppercase, 600 | **sentence case, 400** |

   **Do not merge GDS's KM ramp.** Take CA's.

2. **boohoo: GDS still carries the withdrawn pink palette.** GDS has `--primary #F8B5CC`, `--cta #BB305F`, `--primary-dark #CB4870`, plus a whole pink shade ramp and `--seel-check #BB305F`. CA (README:36-37, `199-209`) drops pink entirely — boohoo is **black and white, mirroring boohooMAN**, with the single exception that the **Deliver+ band stays on Light 3 pink `#FFE0EB`** (README:82-84). GDS's `--seel-bg: #FFE0EB` is already correct; everything else in the boohoo block is superseded.

3. **boohooMAN light ramp is offset by one step between the repos.** GDS `light-1 #767676 · light-2 #B5B5B5 · light-3 #C6C6C6 · light-4 #D6D6D6` vs CA `Light 1 #4D4D4D · Light 2 #808080 · Light 3 #B5B5B5 · Light 4 #D6D6D6`. `#C6C6C6` exists only in GDS; `#4D4D4D` and `#808080` only in CA. CA's ramp is a clean 4-step grey progression and is applied to boohoo as well; GDS's `#767676` reuses `--grey-4`. **Needs a decision** — it changes secondary pressed fills (`prsFill:'#D6D6D6'` in CA's matrix vs GDS's `var(--light-4)` = `#D6D6D6`, which happens to agree, so the practical impact is limited to Light 1/2/3).

4. **Debenhams body-weight roles conflict.** GDS: `--w-regular:300; --w-medium:600`. CA: `--w-body:300; --w-reg:300; --w-med:300` with a comment *"Geologica in Light + SemiBold only, per live: no regular or medium"* (`184`). So GDS's `--w-medium: 600` will render Debenhams `.t-body-md` and `.section-header h3` at SemiBold where CA (matching live) wants Light. **CA is the live-verified behaviour.**

5. **Karen Millen radius conflicts.** GDS: `--radius: 0px` (square components) with `--radius-button: 4px`. CA: KM gets `4px` on *everything* — only PLT is zeroed (`376-415`). GDS's README:59-61 explicitly justifies the split. **These cannot both be right;** CA never exercises a KM square component, so GDS's rule may simply be untested rather than wrong.

6. **Deliver+ checkbox colour has no CA equivalent.** GDS tokenises it per brand (`--seel-check`: PLT `#5F0000`, Debenhams `#00787D`, boohoo `#BB305F`, MAN `#01FE8A`, KM `#FFFFFF`; with `--seel-on-check` for the glyph). CA's Deliver+ box uses only the **unchecked** `.deliver-check` (grey-3 border, white fill) and its generic `.box.on` uses `--check` (= `--cta`). **PLT `#5F0000` and MAN `#01FE8A` as checkbox fills exist only in GDS** and are not corroborated by the signed-off file — treat as unverified.

7. **PLT `--on-cta`/`--background-white` is `#FFFDF7` in GDS but the CA PLT buttons use `--primary-ink:#fff`** (`229`) and the matrix uses `'#FFFFFF'` (`2386-2387`). Warm white vs pure white on PLT CTAs — a small but real divergence.

8. **PLT PayPal fill.** `--paypal` resolves to `#FFC439` for PLT, but the PLT PDP markup overrides it inline to `#FFD600` (`1043`) — the brand yellow. Either the token needs a PLT value or the override is a leftover.

9. **GDS `assets/logos/*.svg` are all 0 bytes** (`plt.svg`, `debenhams.svg`, `boohoo.svg`, `boohooman.svg`, `karenmillen.svg`). The library's hero wordmark (`index.html:97`, `library.js:81`) renders nothing. `scripts/extract-tokens.mjs:126-141` is the generator; it evidently hasn't been run against a present `plt-app-prototype` checkout, or its regexes failed. `js/ds-icons.js` *did* generate. Also `ds-heart-outline` is requested but never emitted.

10. **GDS `dist/` is gitignored but the only commit is "Add single-file artifact build (dist/group-design-system.html)"** — the published artifact is not in the repo; regenerate with `node scripts/build-artifact.mjs`.

### 4.4 The `scripts/` folder — purpose confirmed
Yes, it is a **token-extraction chain**, and GDS's tokens are *downstream of a React Native app*, not of Figma directly.

- **`scripts/extract-tokens.mjs`** (164 lines) — `node scripts/extract-tokens.mjs [path-to-plt-app-prototype]`, defaulting to a sibling `../plt-app-prototype` (`:15`). It reads three prototype files and regenerates three GDS files:
  - `src/theme/brands.ts` → parses the `DS_SYSTEM` block for the shared ramp (`:23-29`) and each brand's `makePalette({…})` argument block (`:32-38`), kebab-cases the keys (`grey05 → --grey-05`, `:41-46`), and emits `css/tokens.css` (`:71-124`).
  - `src/components/BrandLogo.tsx` + `PLTLogo.tsx` → extracts the wordmark `<svg>` template literals, substitutes `{C}` → `#242424`, writes `assets/logos/<brand>.svg` (`:126-141`).
  - `src/components/dsIcons.ts` → pulls a 14-name allowlist, substitutes `{C}` → `currentColor`, and **renormalises `stroke-width` to 1.15pt-at-24px by dividing by the glyph's inner `scale()` factor** (`:146-157`), writing `js/ds-icons.js`.
  - Typography, radius, caps, block-gap, brand names and the whole SEEL/Deliver+ treatment are **hardcoded lookup tables inside the script** (`:49-69`), not extracted — so those are hand-maintained despite living in a "GENERATED" file.
- **`scripts/build-artifact.mjs`** (68 lines) — publishing, not tokens. Inlines both stylesheets and both scripts, base64s every `assets/…{svg,png}` reference into `data:` URIs (including the strings inside the inlined `library.js` lockups), swaps `library.js`'s dynamic `'assets/logos/' + id` for a baked data-URI map (`:46-53`), strips the document shell for artifact hosts, and pre-stamps `data-brand="plt"` so tokens resolve on first paint (`:55-57`). Output: `dist/group-design-system.html`.

### 4.5 README claims worth carrying forward (GDS `README.md:57-68`)
- **Radius**: PLT and Karen Millen square (0); Debenhams/boohoo/boohooMAN 4px. The DS Button frames round KM's *buttons* to 4 — hence the separate `--radius-button`. *(Conflicts with CA — see discrepancy 5.)*
- **Caps**: PLT sets titles/labels uppercase (`--caps: uppercase`); use the `.caps` utility.
- **Body weight**: Debenhams reads body copy in Light (300); boohoo/boohooMAN in Medium (500) — *use the weight variables, never numbers*.
- **Primary button label follows the fill's lightness**: black on Debenhams aqua and boohoo pink, white elsewhere. *(The boohoo half is void now that boohoo is black — CA sets `--primary-ink:#fff`.)*
- Provenance table (`README:43-55`) maps every component to a Figma node: buttons `12681-158518`, product card `5992-10841`, size selector `8942-6191`, USP box `3619-10541`, payment buttons `9144-1931`, roundels `8469-2351`/`8469-2307`, threshold `BBz64OeCbe5TBmYKbCxvCp 38-35751`/`38-36504`, Deliver+ `CQIe2e2c0iagD1T9WjdYsx` (PLT `1529-25556`, Debenhams `1529-19109`, boohoo `1529-24658`, MAN `1529-24155`, KM `164-23434`), colour collections `aIHmkCaTy9c5EWOxAGw0So` (PLT `11904-2395`, Debenhams `11241-47116`).

**CA's node map (README:100-125)** agrees on the colour file (`aIHmkCaTy9c5EWOxAGw0So`) and the button node (`12681:158518`), and adds: boohoo `11241:47015`, KM `11763:2228`, BOOHOOMAN `12482:2057`; PDPs from *VTO - Virtual Wardrobe* `LxHqA4rFpRYNWJu8vzn18X`; Bag 2026 `CYyGeUDy4w02enV7uFxZ6W` (`1337:250006` bag, `1337:253191` ATB modal, `1234:76756` qty selector, `1337:250678` order summary, `1337:250088` bag card); Account 2026 `2KLlzqIWlDcri8YIHwEd63`; Checkout 2026 `WChEtDPH0LcErdYFS9SESn` (restructured per `3990:36587`); SEEL Enhancements 2026 `CQIe2e2c0iagD1T9WjdYsx` (`2903:2410` bag module).

---

## 5. Merge recommendations (one paragraph)

Take **CA as the colour source of truth** for all five brands (it is signed off, WCAG-checked, and post-dates GDS's KM and boohoo ramps), and take **GDS as the structural/token-architecture source of truth** (it has `--radius`/`--radius-button`, a proper weight vocabulary, a spacing scale, named shadows, generated icons and a real extraction pipeline). Concretely: re-run `scripts/extract-tokens.mjs` only after the *prototype's* `brands.ts` has been updated with CA's KM (`#D24508`/`#892D05` + re-derived ramp) and mono-boohoo values — otherwise the script will overwrite corrections. Add CA's genuinely-new token slots to `tokens.css` (`--tickc`, `--vto`, `--tert`, `--badge-bg/-ink`, `--banner1/2-bg/-ink`, `--card-bg/-ink/-btn-bg/-btn-ink`, `--page-bg/--panel-bg/--body-bg`, `--dot`, `--new`, `--paypal`, and the fixed checkout field set `--navy/--navy-border/--field-grey/--field-border/--field-text`), which also lets `library.js:104-110`'s hardcoded rewards-band JS map be deleted. Normalise the brand keys to one vocabulary (GDS's long form) and settle the two open conflicts: KM component radius (GDS 0 vs CA 4) and Debenhams `--w-medium` (600 vs 300).