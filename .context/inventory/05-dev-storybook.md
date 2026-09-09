# 05 · Front-end Storybook ingest — web-storybook.jamesb.play.dbztech.net (09 Sep 2026)

Read end to end with Playwright: `index.json` (79 components · 178 stories), the preview runtime's story store (args / argTypes / parameters per story), the compiled Tailwind sheet (414 KB) and the per-fascia theme variables for all 21 fascias; every story rendered at 1440 and 390 (Debenhams) plus 33 key stories in our other six fascias. Files: `storybook-capture/` (sb-index.json, themes.json, manifest.json tracked; shots/, dom/, extract.json, preview.css gitignored — 51 MB). The consolidated overlay + token map live in `assets/ds/catalogue.js` (`DG_DEV_OVERLAY`, `DG_TOKEN_MAP`) and render on the site's **Dev alignment** page and in our Storybook's Introduction.

## 1. How the dev build works

- **Stack:** React components with Tailwind utility classes (`app/components/{atoms,molecules,organisms,templates}/<Name>/<Name>.stories.tsx`). Storybook 8 with a `fascia` toolbar global (21 values, `initialGlobals.fascia = debenhams`) and six viewports (375 / 425 / 768 / 1024 / 1280 / 1920 — labelled xs / md / lg / xl / 3xl).
- **Variants are class maps.** `Button` exposes `variant` → `ButtonClasses.variants[variant]` (19 keys: mobileNav, primary, primaryAlt, addedQuickAdd, secondary, secondaryAlt, tertiary, tertiaryXs, tertiaryXsBordered, primaryBordered, text, closeChat, countdownBannerCTA, iconOnlyButton, iconOnlyButtonNoBackground, iconPillButton, customColour, unlimitedAddToBag, unlimitedModalAddToBag). Omitting it renders an unstyled button. Each variant carries its own `disabled:` classes; `loading` overlays a ProgressSpinner and blocks clicks; `selected` only emits `data-selected`.
- **Theme = flat CSS variables per fascia,** RGB triplets (`--color-primary: 123 231 216`) consumed by Tailwind utilities: `bg-primary` → `rgb(var(--color-primary)/…)`, `text-default-text-colour` → `var(--default-text-colour, 0 0 0)`, `rounded` → `var(--default-rounding, 4px)`, `font-cta` → `var(--font-cta), var(--font-body)`, `text-cta` → `var(--text-cta, 16px)`, `text-xs…4xl` → `var(--text-*, rem)`. Greys are fixed utilities: grey-1 #F2F2F2 · grey-2 #E7E7E7 · grey-3 #B5B5B5 · grey-4 #767676 · grey-5 #6B6B6B · grey-6 #323232 (our Grey 1–6 ramp exactly); `bg-grey-1/2` and `border-grey-1/2` fall back through `--color-bg-secondary`.
- **Fascia coverage is uneven:** Debenhams 40 vars, boohoo 48, PLT 67 (it overrides the type scale, weights, rounding, text colour), KM 40, MAN 35, TBR 32, everything else the 25-var baseline. KM and TBR ship a malformed `--color-primary-nav` (`255 15 NaN`).
- **Button anatomy (Debenhams, measured):** 50px tall · padding 0 20px · 16px/16px · 600 · uppercase · 4px radius · primary fill #7BE7D8 with black label · secondary 1px #B5B5B5 outline with black label · tertiary white with grey-2 border · tertiaryXs 32px on grey-1 · text = underlined label · iconOnlyButton 44px white circle with shadow · iconPillButton pill.

## 2. Theme variables per fascia

| fascia | body font | vars |
|---|---|---|
| debenhams | Geologica, sans-serif | 40 |
| debenhamsoutlet | Geologica, sans-serif | 27 |
| wallis | Urbanist, sans-serif | 25 |
| burton | Montserrat, sans-serif | 25 |
| principles | Lato, sans-serif | 25 |
| boohooman | Montserrat, sans-serif | 35 |
| boohooww | Montserrat, sans-serif | 48 |
| karenmillen | Jost, sans-serif | 40 |
| prettylittlething | Roboto, sans-serif | 67 |
| coast | Roboto, sans-serif | 25 |
| oasis | Geologica, sans-serif | 25 |
| dorothy-perkins | PublicSans, sans-serif | 25 |
| maine | GothicA1, sans-serif | 25 |
| gorgeous | Montserrat, sans-serif | 25 |
| warehouse | Roboto, sans-serif | 25 |
| misspap | Montserrat, sans-serif | 25 |
| nastygal | NGGrotesque, sans-serif | 25 |
| foreverunique | PublicSans, sans-serif | 25 |
| dsgnstudio | HankenGrotesk, sans-serif | 25 |
| trainingdept | HankenGrotesk, sans-serif | 28 |
| thebrandroom | Archivo, sans-serif | 32 |

Our seven fascias, every non-Tailwind variable:

| variable | debenhams | boohooww | boohooman | prettylittlething | karenmillen | warehouse | thebrandroom |
|---|---|---|---|---|---|---|---|
| `--color-added-quick-add-text-colour` | — | — | 255 255 255 | — | 255 255 255 | — | — |
| `--color-background` | — | — | — | 255 253 247 | — | — | — |
| `--color-bg-grey` | 248 248 248 | 248 248 248 | 248 248 248 | 250 245 231 | 248 248 248 | 248 248 248 | 248 248 248 |
| `--color-bg-secondary` | — | — | — | #FAF5E7 | — | — | — |
| `--color-button-secondary-border` | 181 181 181 | 181 181 181 | 181 181 181 | 181 181 181 | 181 181 181 | 181 181 181 | 181 181 181 |
| `--color-button-text-primary` | 0 0 0 | 255 255 255 | 255 255 255 | 255 255 255 | 255 255 255 | 241 241 241 | 255 255 255 |
| `--color-button-text-primary-alt` | — | 0 0 0 | 0 0 0 | — | 0 0 0 | — | — |
| `--color-cta-accent` | 0 120 125 | — | — | — | — | — | — |
| `--color-cta-primary` | 0 120 125 | 0 0 0 | 0 0 0 | 85 5 3 | 0 0 0 | 0 0 0 | 0 0 0 |
| `--color-facet-pill-bg-selected` | 232 244 242 | 255 255 255 | 255 255 255 | — | 255 255 255 | — | — |
| `--color-facet-pill-border-selected` | 0 120 125 | 0 0 0 | 0 0 0 | — | 0 0 0 | — | — |
| `--color-footer-background` | — | — | — | — | — | — | — |
| `--color-footer-help-header-background` | 255 241 232 | 255 241 232 | 255 241 232 | 255 241 232 | 255 241 232 | 241 241 241 | 255 241 232 |
| `--color-footer-help-header-text` | 0 0 0 | 0 0 0 | 0 0 0 | 0 0 0 | 0 0 0 | 214 255 0 | 0 0 0 |
| `--color-footer-newsletter-text` | — | — | — | — | — | — | — |
| `--color-footer-text` | — | — | — | — | — | — | — |
| `--color-header-background` | 255 255 255 | 255 255 255 | 255 255 255 | 255 253 247 | 255 255 255 | 255 255 255 | 255 255 255 |
| `--color-primary` | 123 231 216 | 68 68 68 | 0 0 0 | 85 5 3 | 0 0 0 | 0 0 0 | 0 0 0 |
| `--color-primary-alt` | — | 248 181 204 | 255 255 255 | — | 255 255 255 | — | — |
| `--color-primary-dark` | 82 156 146 | 68 68 68 | 0 0 0 | 0 0 0 | 0 0 0 | 0 0 0 | 0 0 0 |
| `--color-primary-dark-alt` | — | 187 48 95 | 0 0 0 | 85 5 3 | 0 0 0 | — | — |
| `--color-primary-nav` | 177 241 232 | 255 255 255 | 255 255 255 | 0 0 0 | 255 15 NaN | 255 255 255 | 255 15 NaN |
| `--color-primary-nav-text` | 0 0 0 | 0 0 0 | 0 0 0 | 255 255 255 | 0 0 NaN | 0 0 0 | 0 0 NaN |
| `--color-search-input-background` | 242 242 242 | 242 242 242 | 242 242 242 | 255 253 247 | 242 242 242 | 242 242 242 | 242 242 242 |
| `--color-search-placeholder` | 118 118 118 | 118 118 118 | 118 118 118 | 118 118 118 | 118 118 118 | 118 118 118 | 118 118 118 |
| `--color-search-text` | 0 0 0 | 0 0 0 | 0 0 0 | 0 0 0 | 0 0 0 | 0 0 0 | 0 0 0 |
| `--color-secondary` | 255 255 255 | 255 255 255 | 255 255 255 | 255 255 255 | 0 0 0 | 0 0 0 | 0 0 0 |
| `--color-text-secondary` | 118 118 118 | 118 118 118 | 118 118 118 | 118 118 118 | 118 118 118 | 241 241 241 | 118 118 118 |
| `--default-rounding` | — | — | — | 0px | — | — | 0px |
| `--default-text-colour` | — | — | — | 51 51 51 | — | — | — |
| `--desktop-nav-header-weight` | — | — | — | 400 | 400 | — | 400 |
| `--email-tagline` | — | — | — | 14px | — | — | — |
| `--font-body` | Geologica | Montserrat | Montserrat | Roboto | Jost | Roboto | Archivo |
| `--font-cta` | — | — | — | — | WorkSans-Light | — | Archivo |
| `--font-heading` | — | — | — | — | WorkSans-Medium | — | Archivo |
| `--font-serif` | Geologica | Montserrat | Montserrat | Roboto | Jost | Roboto | Archivo |
| `--font-weight-base` | — | — | — | 300 | — | — | — |
| `--font-weight-bold` | — | — | — | 400 | — | — | — |
| `--font-weight-semibold` | — | — | — | 400 | — | — | — |
| `--product-card-title` | — | — | — | 36px | — | — | 42px |
| `--product-card-title-small` | — | — | — | — | — | — | 26px |
| `--social-proof-basket` | — | 247 182 204 | — | 255 212 205 | — | — | — |
| `--social-proof-basket-alpha` | — | 1 | — | 1 | — | — | — |
| `--social-proof-basket-border` | — | 247 182 204 | — | 255 212 205 | — | — | — |
| `--social-proof-basket-text` | — | 0 0 0 | — | 0 0 0 | — | — | — |
| `--social-proof-pdp` | 0 0 0 | 255 255 255 | — | 255 255 255 | — | — | — |
| `--social-proof-pdp-alpha` | 0.6 | 1 | — | 1 | — | — | — |
| `--social-proof-pdp-backdrop-blur` | blur(1.5px) | blur(0px) | — | blur(0px) | — | — | — |
| `--social-proof-pdp-border` | 0 0 0 | 0 0 0 | — | 255 255 255 | — | — | — |
| `--social-proof-pdp-border-alpha` | 0.2 | 0 | — | 0 | — | — | — |
| `--social-proof-pdp-text` | 255 255 255 | 0 0 0 | — | 0 0 0 | — | — | — |
| `--social-proof-plp` | — | 247 182 204 | — | 255 255 255 | — | — | — |
| `--social-proof-plp-alpha` | — | 1 | — | 0.8 | — | — | — |
| `--social-proof-plp-border` | — | 247 182 204 | — | 255 255 255 | — | — | — |
| `--social-proof-plp-border-alpha` | — | 0 | — | 0 | — | — | — |
| `--social-proof-plp-text` | — | 0 0 0 | — | 0 0 0 | — | — | — |
| `--store-credit-button` | 26 188 156 | 26 188 156 | 26 188 156 | 240 98 146 | 26 188 156 | 26 188 156 | 26 188 156 |
| `--store-credit-gradient-end` | 22 160 133 | 22 160 133 | 22 160 133 | 240 98 146 | 22 160 133 | 22 160 133 | 22 160 133 |
| `--store-credit-gradient-start` | 26 188 156 | 26 188 156 | 26 188 156 | 233 30 99 | 26 188 156 | 26 188 156 | 26 188 156 |
| `--store-credit-text` | 168 230 207 | — | — | 255 179 217 | — | — | — |
| `--text-2xl` | — | — | — | 16px | — | — | — |
| `--text-3xl` | — | — | — | 16px | — | — | — |
| `--text-4xl` | — | — | — | 16px | — | — | — |
| `--text-base` | — | — | — | 12px | — | — | — |
| `--text-cta` | — | — | — | 14px | — | — | — |
| `--text-lg` | — | — | — | 16px | — | — | — |
| `--text-markdown-colour` | — | — | — | #C90000 | — | — | — |
| `--text-sm` | — | — | — | 12px | — | — | — |
| `--text-xl` | — | — | — | 16px | — | — | — |
| `--text-xs` | — | — | — | 12px | — | — | — |
| `--unlimited-bag-button-bg` | 0 0 0 | 141 17 58 | 0 0 0 | 255 255 255 | 255 255 255 | — | — |
| `--unlimited-bag-button-text` | 255 255 255 | — | 255 255 255 | 0 0 0 | 0 0 0 | — | — |
| `--unlimited-bag-text` | — | — | — | 255 255 255 | 255 255 255 | — | — |
| `--unlimited-modal-bag-button-bg` | 0 0 0 | 0 0 0 | 0 0 0 | 85 5 3 | 0 0 0 | — | — |
| `--unlimited-modal-bag-button-text` | 255 255 255 | 255 255 255 | 255 255 255 | 255 255 255 | 255 255 255 | — | — |
| `--wishlist-opacity` | — | — | — | — | 0.7 | — | 0.7 |

## 3. Dev variable → our token

| dev | ours | note |
|---|---|---|
| `--color-primary` | `--surface-action` | Button fill. Debenhams 7BE7D8 ✓ · PLT 550503 ✓ · MAN/WH/TBR 000 ✓ · boohoo 444444 ✗ (ours 000) · KM 000 ✗ (ours D24508 signed-off). |
| `--color-button-text-primary` | `--text-on-action` | Debenhams black ✓, others white ✓ (Warehouse F1F1F1 ~). |
| `--color-cta-primary / --color-cta-accent` | `--text-link · --border-action · --icon-action` | Debenhams 00787D ✓. |
| `--color-primary-dark` | `--surface-action-pressed · --brand-dark-3` | Debenhams 529C92 = our brand-dark-3 ✓. |
| `--color-primary-alt / --color-button-text-primary-alt` | `--brand-primary (boohoo F8B5CC)` | Alt pink button on boohoo — no variant on our side; token exists. |
| `--color-primary-dark-alt` | `--brand-primary-dark` | boohoo BB305F vs ours CB4870 — confirm. |
| `--color-secondary` | `--surface-raised` | White — but KM / Warehouse / TBR set it to black ✗ (check usage). |
| `--color-text-secondary` | `--text-secondary` | Dev 767676 (Grey 4) vs ours 6B6B6B (Grey 5, AA body floor) ✗. |
| `--color-bg-grey` | `--surface-sunken` | F8F8F8 vs ours FAFAFA · PLT FAF5E7 sand ✓. |
| `--color-bg-secondary` | `--surface-media` | Grey 1 F2F2F2 ✓ (also feeds bg-grey-1/2 utilities). |
| `--color-button-secondary-border` | `--btn-outline` | Dev grey B5B5B5 on every fascia; ours brand outline (70BEB3 / 000 / 360502) ✗ — decide. |
| `--color-primary-nav / --color-primary-nav-text` | `--nav-bg / --nav-fg` | Debenhams B1F1E8 vs ours B8FDF4 (light-2) ~ · PLT black/white ✓ · KM/TBR values malformed in dev (NaN). |
| `--color-header-background` | `--surface-page` | PLT FFFDF7 ✓. |
| `--color-search-input-background / -text / -placeholder` | `--surface-media · --text-primary · --text-secondary` | F2F2F2 / 000 / 767676. |
| `--color-facet-pill-bg-selected / -border-selected` | `--brand-neutral · --border-action` | Debenhams E8F4F2 / 00787D ✓. |
| `--color-footer-help-header-background / -text` | `--ft-band` | Dev peach FFF1E8 on all fascias; Warehouse F1F1F1 + D6FF00 text. Ours: per-brand band. |
| `--font-body / --font-serif / --font-cta / --font-heading` | `--font-family-base` | Same families (Geologica, Montserrat, Roboto, Jost, Archivo) except KM CTA/heading = WorkSans in dev ✗; Warehouse Roboto vs ours Helvetica (DRAFT). |
| `--font-weight-base / -semibold / -bold` | `--w-regular / --w-mid / --w-strong` | PLT 300 / 400 / 400 in dev vs ours 400 / 400 / 700 ✗. |
| `--default-rounding` | `--radius-default` | PLT 0 · TBR 0 ✓ — identical square-mode rule. |
| `--default-text-colour` | `--text-primary` | PLT 333333 vs ours 0F0F0F. |
| `--text-cta` | `button label size (16px)` | PLT 14px in dev. |
| `--text-xs … --text-4xl` | `type scale (Typography page)` | PLT flattens 12/12/16/16/16/16 in dev — check against the locked scale. |
| `--wishlist-opacity` | `.pc-iconbtn ground` | 0.7 on KM / TBR. |
| `--social-proof-* (plp / pdp / basket)` | `--surface-callout · .pc-taggstar--brand` | Per-location colour, alpha, blur, border. |
| `--store-credit-gradient-* / -button / -text` | `--card-bg · --card-btn-bg` | Teal 1ABC9C gradient on all but PLT (pink) in dev; ours per brand. |
| `--unlimited-*-bag-button-bg / -text` | `--action-buy / --text-on-action` | Debenhams Unlimited ATB (black). |
| `--text-markdown-colour` | `--price-sale` | PLT C90000 ✓. |
| `--swiper-pagination-color` | `--dot` | Carousel dots — MAN 284D7B in dev looks stale. |
| `grey-1 … grey-6 (fixed utilities)` | `Grey 1–6 primitives` | F2F2F2 · E7E7E7 · B5B5B5 · 767676 · 6B6B6B · 323232 — identical ramp ✓. |

## 4. Component overlay (dev → ours)

| dev component | stories | ours | status | note |
|---|---|---|---|---|
| BackToTop | 1 | — | **dev-only** | Adopt — position via buttonLocation. Needs our styling. |
| Atoms/Button | 11 | Button, Icon button, Filter pill | **match** | 19 variants → 6 types + states. |
| Atoms/Heading | 1 | — | **infra** | Typography foundations page is the spec. |
| Atoms/Text | 1 | — | **infra** | Typography foundations. |
| Atoms/Markdown | 1 | — | **infra** | CMS rich text — inherits type tokens. |
| Atoms/Icon | 9 | — | **match** | 240 dev icons vs our 146-icon Figma library — reconcile names (System → Icons page). |
| Atoms/Image | 4 | — | **infra** | Media plumbing (CMS asset, crop, lazy). |
| Atoms/Picture | 4 | — | **infra** | Responsive sources. |
| Atoms/Video | 1 | — | **infra** | — |
| Atoms/Input Field | 2 | Text field | **match** |  |
| Atoms/Link | 2 | Text link | **match** |  |
| Atoms/Modal | 1 | Modal | **match** |  |
| Atoms/Select | 1 | Select | **match** |  |
| Atoms/Social Proof | 1 | Social proof, Stock alert | **match** |  |
| Atoms / Progress Spinner | 3 | Spinner | **partial** | Add standalone sizes to ours. |
| Molecules/Accordion | 2 | Accordion | **match** |  |
| Organisms/Product Accordion | 1 | Accordion | **match** | PDP flavour of the same. |
| Molecules/AccountLink | 1 | Account row | **match** |  |
| Layouts/Customer Account | 1 | Balance card, Account row | **partial** |  |
| Molecules/BNPL Banner | 1 | BNPL | **match** |  |
| Molecules/Banner | 2 | USP banner | **partial** | CMS promo banner (colour, body, CTA). Ours covers the header USP types. |
| Molecules/Basket Social Proof | 1 | Social proof | **match** |  |
| Molecules/Product Social Proof | 1 | Social proof | **match** |  |
| Molecules/Basket/CartLineItemV2Card | 23 | Bag line item | **partial** | 23 dev states; ours draws the base. |
| Molecules/Basket/CartLineItemV2List | 1 | Bag line item | **partial** | Compose. |
| Molecules/Basket/FreeGiftItemCard | 2 | — | **dev-only** | Bag GWP — spec from the bag project. |
| Molecules/Basket/FreeGiftsList | 3 | — | **dev-only** |  |
| Molecules/Basket/GiftcardDetailModal | 1 | Modal | **partial** | Compose from Modal. |
| Molecules/Basket/OrderSummaryV2 | 5 | Order summary | **match** |  |
| Molecules/Basket/QuantityPill | 6 | Quantity stepper | **match** |  |
| Molecules/Basket/WishlistButton | 2 | Icon button | **match** |  |
| Molecules/Blog Card | 1 | — | **dev-only** | Content / blog family — Brand Room backlog. |
| Molecules/Blog Header | 1 | — | **dev-only** |  |
| Molecules/Blog Panel/Detail | 1 | — | **dev-only** |  |
| Molecules/Blog Panel/Product Highlight | 1 | — | **dev-only** |  |
| Molecules/Blog Panel/Style Overview | 1 | — | **dev-only** |  |
| Molecules/Blog Panel Product Focus | 1 | — | **dev-only** |  |
| Molecules/CT Product Card | 3 | Product card, Badges, Colour swatches, Ratings | **match** | Same layer model. |
| Molecules/Product Card | 1 | Product card | **partial** | Simple CMS card. |
| Molecules/CTA Card | 1 | Square tile rail | **partial** | Content tile. |
| Molecules/Cart Link | 2 | Header | **match** | Bag icon + count. |
| Molecules/Search Link | 1 | Header | **match** | Search trigger. |
| Molecules/Category Header | 1 | Category navigation, Breadcrumb | **partial** |  |
| Molecules/Category Highlight | 1 | — | **dev-only** | Content tile with gradient text panel. |
| Molecules/Content Container | 2 | — | **infra** | CMS section wrapper. |
| Organisms/Content Grid | 1 | Square tile rail | **infra** | Columns per breakpoint. |
| Organisms/Content Sections | 1 | — | **infra** | CMS dynamic zone. |
| Molecules/Spacing | 1 | — | **infra** | Spacer — our spacing scale applies. |
| Molecules/Iframe | 1 | — | **infra** |  |
| Molecules/ContentImage | 1 | — | **infra** |  |
| Molecules/Image Header | 1 | — | **dev-only** | Content header. |
| Molecules/Magazine Header | 2 | — | **dev-only** |  |
| Molecules/Marquee | 1 | — | **dev-only** | Core PDP 2026 has a marquee entry (08 family) — align later. |
| Molecules/Hero Banner | 1 | — | **dev-only** | CMS hero with hotspots, carousel, live text. |
| Molecules/Countdown Timer | 2 | USP banner | **partial** | Our countdown is the USP banner digits (.usp-cd). |
| Organisms/Countdown Banner | 4 | USP banner | **partial** |  |
| Molecules/ Date Select | 1 | Select | **partial** | Three selects — compose. |
| Molecules/Delivery Progress | 1 | Free-delivery threshold | **partial** | Step indicator; ours is the spend bar. |
| Molecules/Login Form | 2 | Text field, Button | **partial** | Compose from field + button. |
| Molecules/Signup Form | 2 | Text field, Button | **partial** | Compose. |
| Molecules/Newsletter Signup | 1 | Footer | **match** | Our footer band. |
| Molecules/Message Block | 3 | Message banner | **match** | 7 dev types → 3 tones + icon flag. |
| Molecules/OrderTrack | 1 | — | **dev-only** | Account — order tracking. |
| Molecules/PersonalisedCarousel | 1 | Section header + rail | **partial** |  |
| Molecules/Product Image Gallery | 2 | — | **dev-only** | PDP gallery — Core PDP 2026 backlog. |
| Molecules/Product Price | 2 | Price | **match** |  |
| Molecules/Search Promo Card | 1 | — | **dev-only** |  |
| Molecules/Side Panel | 3 | Bottom sheet | **partial** | Side vs bottom anchor — one shell. |
| Molecules/Style Together | 3 | — | **dev-only** | = Shop The Look / Set (Core PDP 2026 repo). |
| Molecules/USP Banner | 1 | USP banner | **match** |  |
| Molecules/USP Item | 1 | USP banner, USP box | **match** |  |
| Organisms/Footer | 1 | Footer | **match** |  |
| Organisms/Footer Link | 1 | Footer | **match** |  |
| Organisms/Header | 1 | Header | **match** |  |
| Organisms/Primary Navigation (Desktop) | 4 | Header | **partial** | Mega-menu panels not yet drawn on our side. |
| Organisms/Primary Navigation (Mobile) | 4 | Header | **partial** | Drawer + sub nav. |
| Organisms/Basket/ProductReplenishmentV2Section | 4 | — | **dev-only** | Bag — buy again. |
| Organisms/Basket/ProductSamplesV2Section | 4 | — | **dev-only** | Bag — samples. |
| Pages/Basket/BasketV2Page | 4 | Bag line item, Order summary, Promo / gift card field, Free-delivery threshold | **partial** | Page composition. |

Totals: {'dev-only': 20, 'match': 27, 'infra': 12, 'partial': 20} · ours with no dev counterpart: 18 of 49 catalogue components.

## 5. Every dev component — stories and props (from the story store)

### BackToTop
`./app/components/atoms/BackToTop/BackToTop.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `className` | string |  |
| `buttonLocation` | ENUM_COMPONENTCOMPONENTSBACKTOTOP_BUTTONLOCATION |  |
| `buttonHeight` | Maybe |  |

### Atoms/Button
`./app/components/atoms/Button/Button.stories.tsx` · stories: Playground, All Variants, All Variants Disabled, All Variants Loading, Loading Blocks Clicks, Alignment, Icon Variants, Custom Colour, Selected, Casing By Fascia, Underline Drops On Hover

| prop | type | options / description |
|---|---|---|
| `children` | ReactNode | Button label. Rendered inside a flex row, so an icon plus text works as-is. |
| `disabled` | boolean | Native disabled. Every variant carries its own `disabled:` classes. |
| `onClick` | function | Native click handler. Never fires while `disabled` or `loading`. |
| `variant` | unknown | mobileNav / primary / primaryAlt / addedQuickAdd / secondary / secondaryAlt / tertiary / tertiaryXs / tertiaryXsBordered / primaryBordered / text / closeChat / countdownBannerCTA / iconOnlyButton / iconOnlyButtonNoBackground / iconPillButton / customColour / unlimitedAddToBag / unlimitedModalAddToBa… — Selects the class string from `ButtonClasses.variants`. Omitting it renders an unstyled button with only the shared base classes - deliberate, for cases where t |
| `className` | string | Applied to the `<button>`. If it contains `underline`, `hover:no-underline` is appended for you. |
| `loading` | boolean | Shows a `ProgressSpinner` over the label and disables the button, so an in-flight request cannot be double-submitted. |
| `selected` | boolean | Emits `data-selected` on the button. Purely a styling/testing hook - Button applies no styles of its own for it, so the caller targets it with `data-[selected=t |
| `alignX` | left \| center \| right | left / center / right — Horizontal alignment of the label within the button. Only observable when the button is wider than its content (a full-width CTA, for example). |
| `innerClassName` | string | Applied to the flex row holding the label - use this to change gap or label layout. |
| `outerInnerClassName` | string | Applied to the relative wrapper that positions the loading spinner. |
| `dataTestId` | string | Sets `data-test-id` for Playwright selectors. Note the attribute is always rendered - it is the literal string `"undefined"` when this prop is omitted. |
| `customBackgroundColor` | string | Inline background colour. Ignored unless `variant` is `customColour`. |
| `customTextColor` | string | Inline text colour. Ignored unless `variant` is `customColour`. |
| `customBorderColor` | string | Inline border colour - also adds a 1px solid border. Ignored unless `variant` is `customColour`. |

### Atoms/Heading
`./app/components/atoms/Heading/Heading.stories.tsx` · stories: Playground

| prop | type | options / description |
|---|---|---|
| `children` | string |  |
| `as` | string |  |

### Atoms/Icon
`./app/components/atoms/Icon/Icons.stories.tsx` · stories: Playground, All Icons, Fascia Variants, Sizes, Colours, Fill Opacity, Current Colour, Alt Renders Title, No Icon Renders Nothing

| prop | type | options / description |
|---|---|---|
| `icon` | IconDefinition \| IconWithIconGroup | account / account_inverted / accountArrow / accountHeaderIcon / add / addresses / addresses_large / ai_summary_sparkles / alert / alert_white / amex / apple_pay / apple_pay_white / atAGlanceDefault / ATBBlack / ATBWhite / authentication / authentication_small / back_to_top / bagTaggstar / blue_circl… — The icon module to render. The control lists every export in `./icons` by name and maps it back to the object the prop expects. |
| `strokeColor` | string | Replaces every `stroke=` in the icon. No effect on an icon that declares no stroke. |
| `fillColor` | string | Replaces every `fill=` in the icon. No effect on an icon that declares no fill. |
| `fillOpacity` | number | Alongside `fillColor`, appends `fill-opacity`. On its own, only `0` does anything - it swaps every fill for `none`, hollowing the icon out. |
| `width` | number | Overrides the rendered width. Falls back to the icon's own `width`, then 24. |
| `height` | number | Overrides the rendered height. Falls back to the icon's own `height`, then 24. |
| `className` | string | Applied to the `<svg>`. The usual way to colour an icon drawn with `currentColor`. |
| `dataTestId` | string | Sets `data-test-id` for Playwright selectors. Omitted from the DOM when not passed. |
| `alt` | string | Renders an SVG `<title>`, which is what assistive tech announces. Leave it off for decorative icons so they are skipped rather than read out. |
| `style` | ReactCSSProperties | Spread onto the `<svg>`, along with any other prop Icon does not recognise. |

### Atoms/Image
`./app/components/atoms/Image/Image.stories.tsx` · stories: Default, Src As String, Src As Cms Image Asset, Src As Cms Image Asset With Overrides

| prop | type | options / description |
|---|---|---|
| `src` | union |  |
| `alt` | string |  |
| `objectFit` | union | cover / contain / fill |
| `fillParent` | boolean |  |
| `data-test-id` | string |  |
| `className` | string |  |
| `width` | number |  |
| `height` | number |  |
| `disableUserSelect` | boolean |  |
| `lazyLoad` | boolean |  |
| `fetchPriority` | union | high / low / auto |
| `crop` | boolean |  |

### Atoms/Input Field
`./app/components/atoms/InputField/InputField.stories.tsx` · stories: Default, With Label

| prop | type | options / description |
|---|---|---|
| `placeholder` | string |  |
| `className` | string |  |
| `labelClassName` | string |  |
| `containerClassName` | string |  |
| `label` | string |  |
| `errors` | union |  |
| `error` | union |  |
| `inputRef` | union |  |
| `inputClassName` | string |  |
| `dataTestId` | string |  |
| `hyphenatedInput` | boolean |  |
| `readOnlyValue` | string |  |
| `errorTextClass` | string |  |
| `errorOnlyBorder` | boolean |  |
| `translator` | (key: string, dynamicValues?: Record<string, string \| number |  |
| `type` | union |  |

### Atoms/Link
`./app/components/atoms/Link/Link.stories.tsx` · stories: Internal, External

| prop | type | options / description |
|---|---|---|
| `children` | string |  |
| `to` | string |  |

### Atoms/Markdown
`./app/components/atoms/Markdown/Markdown.stories.tsx` · stories: Playground

| prop | type | options / description |
|---|---|---|
| `markdown` | string |  |
| `as` | string |  |
| `fontSize` | string |  |
| `fontWeight` | string |  |
| `textAlign` | string |  |

### Atoms/Modal
`./app/components/atoms/Modal/Modal.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `show` | boolean |  |
| `children` | ReactReactElement |  |
| `title` | string |  |
| `onClose` | () => void |  |
| `backgroundColor` | string |  |
| `className` | string |  |
| `containerClassName` | string |  |
| `backgroundClick` | () => void |  |
| `testId` | string |  |
| `closeIconClassName` | string |  |
| `titleClass` | string |  |
| `uspModal` | boolean |  |
| `uspDeliveryExclusion` | boolean |  |
| `setStopPropagation` | boolean |  |
| `useSmallClose` | boolean |  |
| `addInfoIconToTitle` | boolean |  |
| `onInfoIconClick` | () => void |  |
| `showBackdrop` | boolean |  |

### Atoms/Picture
`./app/components/atoms/Picture/Picture.stories.tsx` · stories: Default, Src As Single Cms Image Asset, Src As Multiple Cms Image Assets With Media Queries, Src As Responsive Image Object

| prop | type | options / description |
|---|---|---|
| `src` | union |  |
| `alt` | string |  |
| `objectFit` | union | cover / contain / fill |
| `fillParent` | boolean |  |
| `data-test-id` | string |  |
| `className` | string |  |
| `imgClassName` | string |  |
| `disableUserSelect` | boolean |  |
| `lazyLoad` | boolean |  |
| `fetchPriority` | union | high / low / auto |
| `crop` | boolean |  |
| `urlFormat` | ImageURLFormat |  |
| `variant` | string |  |
| `index` | number |  |
| `isZoomed` | boolean |  |
| `children` | ReactReactNode |  |

### Atoms / Progress Spinner
`./app/components/atoms/ProgressSpinner/ProgressSpinner.stories.tsx` · stories: Small, Medium, Large

| prop | type | options / description |
|---|---|---|
| `containerClassName` | string |  |
| `className` | string |  |
| `size` | union | small / medium / large |
| `isPage` | boolean |  |
| `currentColor` | string |  |

### Atoms/Select
`./app/components/atoms/Select/Select.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `className` | string |  |
| `labelClassName` | string |  |
| `label` | string |  |
| `name` | string |  |
| `options` | Option[] |  |
| `selectedOption` | union |  |
| `onSelectItem` | (selectedOption: string) => void |  |
| `placeholder` | string |  |
| `error` | string |  |
| `errorTextClass` | string |  |

### Atoms/Social Proof
`./app/components/atoms/SocialProof/SocialProof.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `id` | string |  |
| `messageKey` | string |  |
| `message` | {   category: string   code: string   data: string   message |  |
| `forceSingleLine` | boolean |  |
| `style` | ReactCSSProperties |  |
| `containerClass` | string |  |
| `iconColour` | string |  |
| `iconStrokeColour` | string |  |
| `iconFillOpacity` | number |  |
| `iconClass` | string |  |
| `onDismiss` | (id: string) => void |  |
| `location` | union | PLP / PDP / CART |
| `isMenswearCategory` | boolean |  |
| `hideIcon` | boolean |  |
| `textTransform` | union | uppercase / none |
| `customStyle` | ReactCSSProperties |  |

### Atoms/Text
`./app/components/atoms/Text/Text.stories.tsx` · stories: Playground

| prop | type | options / description |
|---|---|---|
| `children` | string |  |
| `as` | string |  |

### Atoms/Video
`./app/components/atoms/Video/Video.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `src` | object |  |
| `loop` | boolean |  |
| `muted` | boolean |  |
| `onVideoEvent` | (evt: VideoEvent, src?: HTMLVideoElement) => void |  |
| `autoPlay` | Maybe |  |
| `className` | string |  |
| `data-test-id` | string |  |
| `controls` | boolean |  |
| `preLoad` | union | auto / metadata / none |
| `videoType` | string |  |
| `scrollPlay` | boolean |  |

### Molecules/Accordion
`./app/components/molecules/Accordion/Accordion.stories.tsx` · stories: Default, Expand On Desktop

| prop | type | options / description |
|---|---|---|
| `title` | string |  |
| `className` | string |  |
| `titleColor` | string |  |
| `titleSize` | string |  |
| `expandOnDesktop` | boolean |  |
| `defaultExpandState` | boolean |  |
| `children` | ReactReactNode |  |
| `onChange` | (expanded: boolean) => void |  |
| `isFacetFilter` | boolean |  |
| `externalExpand` | boolean |  |
| `collapseAll` | boolean |  |

### Molecules/AccountLink
`./app/components/molecules/AccountLink/AccountLink.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `name` | string |  |
| `route` | string |  |

### Molecules/BNPL Banner
`./app/components/molecules/BNPLBanner/BNPLBanner.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `label` | string |  |
| `maxPrice` | number |  |
| `minPrice` | number |  |
| `numberOfPayments` | number |  |
| `paymentLogo` | object |  |
| `providerLink` | string |  |
| `productPrice` | Prices |  |
| `hasSinglePrice` | boolean |  |
| `iconType` | IconDefinition |  |
| `locale` | string |  |

### Molecules/Banner
`./app/components/molecules/Banner/Banner.stories.tsx` · stories: Default, With Additional Text

| prop | type | options / description |
|---|---|---|
| `color` | string |  |
| `backgroundColor` | string |  |
| `body` | string |  |
| `href` | string |  |
| `topLine` | string |  |
| `callToAction` | string |  |

### Molecules/Basket Social Proof
`./app/components/molecules/BasketSocialProof/BasketSocialProof.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `id` | union |  |
| `messages` | SocialProofMessage[] |  |
| `style` | ReactCSSProperties |  |
| `isMenswearCategory` | boolean |  |
| `containerClass` | string |  |
| `textSizeClass` | string |  |

### Molecules/Blog Card
`./app/components/molecules/BlogCard/BlogCard.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `src` | object |  |
| `callToAction` | string |  |
| `title` | string |  |
| `date` | string |  |
| `description` | string |  |
| `category` | string |  |
| `href` | string |  |
| `fetchPriority` | FetchPriority |  |
| `lazyLoad` | boolean |  |
| `mobileWidthDivisor` | number |  |
| `desktopWidthDivisor` | number |  |

### Molecules/Blog Header
`./app/components/molecules/BlogHeader/BlogHeader.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `src` | object |  |
| `blogHeaderLogo` | object |  |
| `callToAction` | string |  |
| `title` | string |  |
| `date` | string |  |
| `description` | string |  |
| `category` | string |  |
| `titleHeader` | string |  |
| `mainBackground` | string |  |
| `overflowBackground` | string |  |
| `fetchPriority` | FetchPriority |  |
| `lazyLoad` | boolean |  |
| `firstName` | string |  |
| `href` |  |  |

### Molecules/Blog Panel/Product Highlight
`./app/components/molecules/BlogPanel/BlogPanelProductHighlight/BlogPanelProductHighlight.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `title` | string |  |
| `subtitle` | string |  |
| `description` | string |  |
| `textLocationDesktop` | string |  |
| `textLocationMobile` | string |  |
| `src1` | object |  |
| `product1Cta` | string |  |
| `product1Href` | string |  |
| `src2` | object |  |
| `product2Cta` | string |  |
| `product2Href` | string |  |

### Molecules/Blog Panel/Style Overview
`./app/components/molecules/BlogPanel/BlogPanelStyleOverview/BlogPanelStyleOverview.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `src` | object |  |
| `caption` | string |  |
| `imageLocationDesktop` | string |  |
| `imageLocationMobile` | string |  |

### Molecules/Blog Panel/Detail
`./app/components/molecules/BlogPanel/Detail/BlogPanelDetail.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `description` | string |  |
| `blogPanelDetailsImage1` | object |  |
| `blogPanelDetailsImage2` | object |  |
| `accentColour` | string |  |
| `lazyLoad` | boolean |  |

### Molecules/Blog Panel Product Focus
`./app/components/molecules/BlogPanelProductFocus/BlogPanelProductFocus.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `productFocusTitle` | string |  |
| `description` | string |  |
| `image` | object |  |
| `productCards` | array |  |

### Molecules/CTA Card
`./app/components/molecules/CTACard/CTACard.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `src` | object |  |
| `callToAction` | string |  |
| `href` | string |  |
| `className` | string |  |
| `fetchPriority` | FetchPriority |  |
| `lazyLoad` | boolean |  |
| `mobileWidthDivisor` | number |  |
| `desktopWidthDivisor` | number |  |
| `index` | number |  |
| `variant` | string |  |
| `gradientFrom` | string |  |
| `gradientTo` | string |  |
| `liveText` | union |  |
| `navImage` | boolean |  |
| `primaryTitle` | string |  |

### Molecules/CT Product Card
`./app/components/molecules/CTProductCard/CTProductCard.stories.tsx` · stories: With Variants, Search Drop Down, No Variants

| prop | type | options / description |
|---|---|---|
| `__typename` | string |  |
| `id` | string |  |
| `productKey` | string |  |
| `name` | string |  |
| `brand` | string |  |
| `imagesResponsive` | array |  |
| `slug` | string |  |
| `price` | string |  |
| `wasPrice` | string |  |
| `size` | string |  |
| `gender` | string |  |
| `styleTaxonomy` | string |  |
| `categoryTaxonomy` | object |  |
| `occasion` | object |  |
| `percentageSaving` | string |  |
| `colourVariants` | array |  |
| `colour` | string |  |
| `productType` | string |  |
| `priceVariants` | object |  |
| `isPremier` | boolean |  |
| `ratingStats` | object |  |
| `hasGiftWithPurchase` | object |  |
| `imageWidths` | MediaWidths |  |
| `defaultColour` | string |  |
| `noBadges` | boolean |  |
| `position` | string |  |
| `queryId` | string |  |
| `showRatings` | boolean |  |
| `variant` | ProductCardVariant |  |
| `productClick` | ({ page, id }: ProductClickProps) => void |  |
| `loadEagerly` | boolean |  |
| `fetchPriority` | FetchPriority |  |
| `layout` | union | default / 1-column / dropdown |
| `sponsoredStatus` | boolean |  |
| `lineBreakPrice` | boolean |  |
| `onProductPage` | boolean |  |
| `isProductListingPage` | boolean |  |
| `classification` | string |  |
| `department` | string |  |
| `averageRating` | number |  |
| `totalReviewCount` | number |  |
| `selectedSizes` | string[] |  |
| `isInWishlist` | boolean |  |
| `enableMobileImageRollover` | boolean |  |
| `handleAddToWishlistFunc` | (   lineItemSku: string,   productKey: string,   colourSelec |  |
| `wishlistColours` | WishlistData[] |  |
| `className` | string |  |
| `hideProductDetails` | boolean |  |
| `useSquareImage` | boolean |  |
| `analyticsCategory` | string |  |
| `recommendedUrl` | boolean |  |
| `categoryNames` | string[] |  |
| `categorySlugs` | string[] |  |
| `quickAdd` | boolean |  |
| `productId` | string |  |
| `hideBadges` | boolean |  |
| `hideProductSaving` | boolean |  |
| `hidePromoBadges` | boolean |  |
| `hideColourSwatches` | boolean |  |
| `onProductRecs` | boolean |  |
| `carouselName` | string |  |
| `isFirst` | boolean |  |

### Molecules/Basket/CartLineItemV2Card
`./app/components/molecules/CartLineItemV2/CartLineItemV2Card.stories.tsx` · stories: In Stock, Low Stock, Max Quantity Reached, Line Item Limit Reached, Submitting, Submitting Sample, Out Of Stock, Over Quantity, Gift Card, Premier, Sample, Customised, Pre Order, Price Promise, With Protection Plan Offer, Protection Plan Applied, Subscribe And Save, Task Rabbit Assembly, Guest User, With Free Gift, Taggstar Social Proof, Taggstar Above Free Gift, With Postcode Exclusion


### Molecules/Basket/CartLineItemV2List
`./app/components/molecules/CartLineItemV2/CartLineItemV2List.stories.tsx` · stories: All Variants And Sellers


### Molecules/Basket/FreeGiftItemCard
`./app/components/molecules/CartLineItemV2/FreeGiftItemCard.stories.tsx` · stories: With Description, Without Description


### Molecules/Basket/FreeGiftsList
`./app/components/molecules/CartLineItemV2/FreeGiftsList.stories.tsx` · stories: Single Gift, Multiple Gifts, No Gifts


### Molecules/Basket/GiftcardDetailModal
`./app/components/molecules/CartLineItemV2/GiftcardDetailModal.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `amount` | string |  |
| `giftCard` | object |  |

### Molecules/Basket/QuantityPill
`./app/components/molecules/CartLineItemV2/QuantityPill.stories.tsx` · stories: Quantity Of One Shows Remove, Mid Range Shows Minus, Max Quantity Disables Plus, Fixed Quantity, Disabled, Debounced Rapid Taps


### Molecules/Basket/WishlistButton
`./app/components/molecules/CartLineItemV2/WishlistButton.stories.tsx` · stories: Default, Disabled While Submitting

| prop | type | options / description |
|---|---|---|
| `onConfirm` | function |  |
| `disabled` | boolean |  |

### Molecules/Cart Link
`./app/components/molecules/CartLink/CartLink.stories.tsx` · stories: Default, With Items

| prop | type | options / description |
|---|---|---|
| `items` | number |  |
| `route` | string |  |

### Molecules/Category Header
`./app/components/molecules/CategoryHeader/CategoryHeader.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `title` | string |  |
| `backButtonText` | string |  |
| `backButtonHref` | string |  |

### Molecules/Category Highlight
`./app/components/molecules/CategoryHighlight/CategoryHighlight.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `title` | string |  |
| `description` | string |  |
| `cta` | string |  |
| `href` | string |  |
| `src` | object |  |
| `textBackgroundGradientStartColour` | string |  |
| `textBackgroundGradientEndColour` | string |  |
| `textColour` | string |  |

### Molecules/ContentImage
`./app/components/molecules/ContentImage/ContentImage.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `mobile` | object |  |
| `className` | string |  |
| `lazyLoad` | boolean |  |

### Molecules/Countdown Timer
`./app/components/molecules/CountdownTimer/CountdownTimer.stories.tsx` · stories: Default, Large Layout

| prop | type | options / description |
|---|---|---|
| `date` | Date |  |
| `layout` | union | default / large / small |

### Molecules/ Date Select
`./app/components/molecules/DateSelect/DateSelect.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `labelClassName` | string |  |
| `label` | string |  |
| `name` | string |  |
| `dayLabel` | string |  |
| `monthLabel` | string |  |
| `yearLabel` | string |  |
| `onChange` | (date: Date) => void |  |
| `onBlur` | (date: Date \| string) => void |  |
| `min` | number |  |
| `max` | number |  |
| `errors` | union |  |
| `isOptional` | boolean |  |
| `defaultDate` | string |  |
| `required` | boolean |  |
| `removeTimeZones` | boolean |  |
| `fieldsetClass` | string |  |

### Molecules/Delivery Progress
`./app/components/molecules/DeliveryProgress/DeliveryProgress.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `step` | number |  |

### Molecules/Hero Banner
`./app/components/molecules/HeroBanner/HeroBanner.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `links` | array |  |
| `linkLocation` | string |  |
| `src` | object |  |
| `data-test-id` | string |  |
| `fetchPriority` | FetchPriority |  |
| `lazyLoad` | boolean |  |
| `className` | string |  |
| `desktopWidthDivisor` | number |  |
| `mobileWidthDivisor` | number |  |
| `liveText` | ComponentComponentsLiveText |  |
| `autoApplyBrandFilterOnDBZ` | boolean |  |
| `stopAutoplay` | () => void |  |
| `startAutoplay` | () => void |  |
| `mobilePagination` | boolean |  |
| `enableContentFadeIn` | boolean |  |
| `visibilityConfig` | {   hideForLoggedInUsers?: boolean   hideForGuestUsers?: boo |  |
| `imageCtaCarousel` | ComponentComponentsImageCtaCarousel |  |
| `imageHotspots` | ComponentComponentsImageHotspots[] |  |
| `paginationStyle` | union |  |
| `index` | number |  |
| `activeIndex` | number |  |
| `variant` | union |  |
| `hideOnDesktop` | boolean |  |
| `hideOnMobile` | boolean |  |
| `isChild` | boolean |  |

### Molecules/Iframe
`./app/components/molecules/Iframe/Iframe.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `iframeURL` | string |  |
| `width` | string |  |
| `height` | string |  |
| `disableScroll` | boolean |  |
| `className` | string |  |

### Molecules/Image Header
`./app/components/molecules/ImageHeader/ImageHeader.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `src` | object |  |
| `imageHorizontalAlignment` | string |  |
| `imageHeaderWidth` | object |  |
| `className` | string |  |
| `lazyLoad` | boolean |  |

### Molecules/Login Form
`./app/components/molecules/LoginForm/LoginForm.stories.tsx` · stories: Default, With Error

| prop | type | options / description |
|---|---|---|
| `className` | string |  |
| `error` | string |  |
| `state` | string |  |
| `loaderRoute` | string |  |
| `enabledSignInLinks` | boolean |  |
| `isUsingWishlist` | boolean |  |
| `csrf` | string |  |
| `generateNewCsrfTokenCheck` | () => void |  |

### Molecules/Magazine Header
`./app/components/molecules/MagazineHeader/MagazineHeader.stories.tsx` · stories: Subheading, No Subheading

| prop | type | options / description |
|---|---|---|
| `heading` | union |  |
| `subHeading` | union |  |
| `topLine` | union |  |
| `className` | string |  |

### Molecules/Marquee
`./app/components/molecules/Marquee/Marquee.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `items` | array |  |
| `lazyLoad` | boolean |  |
| `fetchPriority` | FetchPriority |  |

### Molecules/Message Block
`./app/components/molecules/MessageBlock/MessageBlock.stories.tsx` · stories: Error, Info, Warning

| prop | type | options / description |
|---|---|---|
| `message` | string |  |
| `type` | union | error / warning / info / infoNew / warningNew / infoWithIcon / message |
| `fullWidth` | boolean |  |
| `className` | string |  |
| `innerDivClassName` | string |  |
| `textStyle` | string |  |
| `iconOverride` | IconDefinition |  |

### Molecules/Newsletter Signup
`./app/components/molecules/NewsletterSignup/NewsletterSignup.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `fascia` | string |  |
| `errorPage` | boolean |  |
| `translate` | (key: string, dynamicValues?: Record<string, string \| number |  |
| `marketFlagCountry` | string |  |

### Molecules/Basket/OrderSummaryV2
`./app/components/molecules/OrderSummaryV2/OrderSummaryV2.stories.tsx` · stories: Figma default, Free Delivery With Optional Add On, Multiple Discounts, No Discounts, All Rows

| prop | type | options / description |
|---|---|---|
| `cart` | SimpleCart |  |
| `total` | Price |  |

### Molecules/OrderTrack
`./app/components/molecules/OrderTrack/OrderTrack.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `className` | string |  |

### Molecules/PersonalisedCarousel
`./app/components/molecules/PersonalisedCarousel/PersonalisedCarousel.stories.tsx` · stories: With Controls

| prop | type | options / description |
|---|---|---|
| `showControls` | object |  |
| `brand` | Maybe |  |
| `productCategory` | string |  |
| `searchTerm` | Maybe |  |
| `variant` | union |  |
| `onCloseClick` | () => void |  |
| `onSlideClick` | (product: ViewProductEdge) => void |  |
| `lazyLoadCarousell` | boolean |  |
| `carousel` | ComponentHolderCarousel |  |
| `listLocation` | string |  |

### Molecules/Product Card
`./app/components/molecules/ProductCard/ProductCard.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `id` | string |  |
| `name` | string |  |
| `brand` | string |  |
| `colour` | string |  |
| `imagesResponsive` | array |  |
| `percentageSaving` | string |  |
| `price` | string |  |
| `slug` | string |  |
| `wasPrice` | string |  |
| `className` | string |  |
| `fetchPriority` | FetchPriority |  |
| `lazyLoad` | boolean |  |
| `mobileWidthDivisor` | number |  |
| `desktopWidthDivisor` | number |  |
| `mediaAsCt` | boolean |  |
| `hidePriceAndText` | boolean |  |

### Molecules/Product Image Gallery
`./app/components/molecules/ProductImageGallery/ProductImageGallery.stories.tsx` · stories: Default, Irregular Images

| prop | type | options / description |
|---|---|---|
| `images` | array |  |

### Molecules/Product Price
`./app/components/molecules/ProductPrice/ProductPrice.stories.tsx` · stories: Default, With Inline Discount

| prop | type | options / description |
|---|---|---|
| `id` | string |  |
| `price` | string |  |
| `wasPrice` | union |  |
| `minWasPrice` | union |  |
| `percentageSaving` | union |  |
| `priceSavingInline` | boolean |  |
| `isNegative` | boolean |  |
| `isFree` | boolean |  |
| `className` | string |  |
| `lineBreakPrice` | boolean |  |
| `hideProductSaving` | boolean |  |
| `onProductPage` | boolean |  |
| `wrapWasPrice` | boolean |  |
| `exactPriceBySelectedSizeFacet` | intersection |  |
| `showFromPriceRange` | boolean |  |
| `showNewPecentageSaving` | boolean |  |
| `isPDPGridViewCard` | boolean |  |
| `priceMatchPrice` | string |  |
| `priceMatchLabel` | string |  |
| `priceMatchIconSize` | { width: number; height: number } |  |

### Molecules/Product Social Proof
`./app/components/molecules/ProductSocialProof/ProductSocialProof.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `messages` | SocialProofMessage[] |  |
| `style` | ReactCSSProperties |  |
| `productSocialProofClass` | string |  |
| `productKey` | string |  |
| `isDismissible` | boolean |  |
| `isMenswearCategory` | boolean |  |

### Molecules/Search Link
`./app/components/molecules/SearchLink/SearchLink.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `onClick` | () => void |  |

### Molecules/Search Promo Card
`./app/components/molecules/SearchPromoCard/SearchPromoCard.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `searchCardImage` | object |  |
| `searchCardTitle` | string |  |
| `href` | string |  |
| `className` | string |  |

### Molecules/Side Panel
`./app/components/molecules/SidePanel/SidePanel.stories.tsx` · stories: Default, With Background Dimmed, With Gradient Edge

| prop | type | options / description |
|---|---|---|
| `id` | string |  |
| `children` | ReactReactNode |  |
| `isOpen` | boolean |  |
| `onClose` | () => void |  |
| `toggleButtonRef` | ReactRefObject |  |
| `dimBackground` | boolean |  |
| `gradientEdge` | boolean |  |
| `closeButton` | boolean |  |
| `closeButtonOutsidePanel` | boolean |  |
| `adjustCloseButtonAlign` | boolean |  |
| `backgroundClassName` | string |  |
| `containerClassName` | string |  |
| `panelContainerClassName` | string |  |
| `panelClassName` | string |  |
| `panelContentClassName` | string |  |
| `closeClassName` | string |  |
| `top` | union |  |
| `height` | union |  |
| `align` | Align |  |
| `lockBodyScroll` | boolean |  |
| `onTransitionEnd` | () => void |  |
| `testId` | string |  |
| `shouldScrollToTop` | boolean |  |

### Molecules/Signup Form
`./app/components/molecules/SignupForm/SignupForm.stories.tsx` · stories: Default, With Error

| prop | type | options / description |
|---|---|---|
| `className` | string |  |

### Molecules/Spacing
`./app/components/molecules/Spacing/Spacing.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `backgroundColor` | string |  |
| `spacerHeight` | object |  |

### Molecules/Style Together
`./app/components/molecules/StyleTogether/StyleTogether.stories.tsx` · stories: Default, With 2, With 4

| prop | type | options / description |
|---|---|---|
| `currentlyViewing` | { product: SimpleProduct; selectedColourVariant?: Variants } |  |
| `products` | SimpleProductWithColor[] |  |
| `title` | string |  |
| `bundleType` | string |  |

### Molecules/USP Banner
`./app/components/molecules/USPBanner/USPBanner.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `className` | string |  |
| `backgroundColour` | string |  |
| `items` | ComponentComponentsUspBanner['items'] |  |
| `displayType` | Enum_Componentcomponentsuspbanner_Displaytype |  |
| `optionalSpeedIndex` | number |  |
| `optionalRotationDelay` | number |  |
| `stickyBanner` | boolean |  |
| `tickerSpacing` | number |  |

### Molecules/USP Item
`./app/components/molecules/USPItem/USPItem.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `href` | string |  |
| `label` | string |  |
| `src` | object |  |
| `className` | string |  |
| `displayType` | Enum_Componentcomponentsuspbanner_Displaytype |  |
| `containerSize` | number |  |
| `label2DropdownCopy` | string |  |
| `label2DropdownTitle` | string |  |
| `onDropdownToggle` | (isOpen: boolean) => void |  |
| `onHover` | (isHovering: boolean) => void |  |

### Pages/Basket/BasketV2Page
`./app/components/organisms/BasketV2Page/BasketV2Page.stories.tsx` · stories: In Stock, Out Of Stock, Pre Order Dispatched Together, Pre Order With Marketplace Item


### Molecules/Content Container
`./app/components/organisms/ContentContainer/ContentContainer.stories.tsx` · stories: Default, Floating Title

| prop | type | options / description |
|---|---|---|
| `title` | string |  |
| `titleFontStyle` | string |  |
| `color` | string |  |
| `backgroundColor` | string |  |
| `className` | string |  |
| `children` | ReactReactElement |  |
| `onProductPage` | boolean |  |
| `onSearchForm` | boolean |  |
| `titleClass` | string |  |
| `removeComponentVerticalPadding` | boolean |  |
| `customTitleClass` | string |  |
| `titleFontFamily` |  |  |
| `optionalSubtitleFontFamily` |  |  |
| `style` | string |  |

### Organisms/Content Grid
`./app/components/organisms/ContentGrid/ContentGrid.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `className` | string |  |
| `lazyLoad` | boolean |  |
| `fetchPriority` | FetchPriority |  |
| `children` | ReactReactNode |  |
| `columns` | {   mobile: number   tablet?: number   desktop: number } |  |

### Organisms/Content Sections
`./app/components/organisms/ContentSections/ContentSections.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `sections` | PageContentDynamicZone[] |  |
| `isMobile` | boolean |  |
| `forceLazyLoad` | boolean |  |
| `testId` | string |  |
| `mobileWidthDivisor` | number |  |
| `desktopWidthDivisor` | number |  |
| `className` | string |  |
| `removeComponentVerticalPadding` | boolean |  |
| `navImage` | boolean |  |
| `primaryTitle` | string |  |
| `navImageIndex` | number |  |
| `headerNav` | MenusMenuEntity |  |
| `listLocation` | string |  |

### Organisms/Countdown Banner
`./app/components/organisms/CountdownBanner/CountdownBanner.stories.tsx` · stories: Title Only, With Description, With CTA, With Description And CTA

| prop | type | options / description |
|---|---|---|
| `textColor` | string |  |
| `countdownColor` | string |  |
| `backgroundColor` | string |  |
| `title` | string |  |
| `endTime` | string |  |
| `ctaVariant` | unknown |  |
| `layout` | unknown |  |
| `countdownTitleAlignment` | unknown |  |
| `optionalDescription` | string |  |
| `optionalCta` | string |  |
| `optionalCtaHref` | string |  |

### Organisms/Footer
`./app/components/organisms/Footer/Footer.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `footerLinks` | MenusMenuEntity |  |
| `paymentMethods` | { name: string; image: string }[] |  |
| `countries` | Country[] |  |
| `marketFlagCountry` | string |  |

### Organisms/Footer Link
`./app/components/organisms/FooterLinks/FooterLinks.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `className` | string |  |
| `linkGroups` | MenusMenuEntity |  |

### Organisms/Header
`./app/components/organisms/Header/Header.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `menu` | MenusMenuEntity |  |
| `searchPanel` | SearchPanelEntity |  |
| `logoSrc` | string |  |
| `domain` | string |  |
| `displayMode` | HeaderDisplayMode |  |
| `onSearchStateChange` | (isOpen: boolean) => void |  |
| `countries` | Country[] |  |
| `uspCollection` | Usp |  |
| `onMobileMenuToggle` | (isOpen: boolean) => void |  |

### Organisms/Primary Navigation (Desktop)
`./app/components/organisms/PrimaryNavigation/desktop/PrimaryNavigationDesktop.stories.tsx` · stories: Default, Panel, Panel With Banner, Panel With Sub Nav

| prop | type | options / description |
|---|---|---|
| `menu` | MenusMenuEntity |  |

### Organisms/Primary Navigation (Mobile)
`./app/components/organisms/PrimaryNavigation/mobile/PrimaryNavigationMobile.stories.tsx` · stories: Default, Panel, Panel With Banner, Sub Nav

| prop | type | options / description |
|---|---|---|
| `menu` | MenusMenuEntity |  |
| `isOpen` | boolean |  |
| `onClose` | () => void |  |
| `toggleButtonRef` | ReactRefObject |  |
| `top` | union |  |
| `countries` | Country[] |  |
| `isMobile` | boolean |  |

### Organisms/Product Accordion
`./app/components/organisms/ProductAccordion/ProductAccordion.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `title` | string |  |
| `value` | union |  |
| `defaultExpandState` | boolean |  |
| `children` | ReactReactNode |  |
| `onClick` | (isExpanded: boolean) => void |  |

### Organisms/Basket/ProductReplenishmentV2Section
`./app/components/organisms/ProductReplenishmentV2/ProductReplenishmentV2Section.stories.tsx` · stories: Single Item, Multiple Items, Adding To Bag, No Items


### Organisms/Basket/ProductSamplesV2Section
`./app/components/organisms/ProductSamplesV2/ProductSamplesV2Section.stories.tsx` · stories: Default, All Samples Chosen, Loading, Single Sample


### Layouts/Customer Account
`./app/components/templates/CustomerAccount/CustomerAccount.stories.tsx` · stories: Default

| prop | type | options / description |
|---|---|---|
| `beautyClubSummary` | BeautyClubSummary |  |
| `customer` | SimpleCustomer |  |
| `pageTitle` | string |  |
| `titleClassName` | string |  |
| `children` | ReactNode |  |
| `beautyEnabled` | boolean |  |
| `onBackButton` | () => void |  |
| `socialPointsEnabled` | boolean |  |
| `rewardsSummary` | RewardsSummary |  |
| `storeCreditSummary` | any |  |
| `rewardsContent` | string |  |
| `subscriptionCount` | number |  |
