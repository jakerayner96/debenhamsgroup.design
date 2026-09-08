# Component inventory — 03-plt-app-prototype

_Agent report, 08 Sep 2026, from a full read of the cloned repo(s). Line refs are to the repo files at that date. Raw record — the consolidated catalogue is `.context/18-component-inventory.md`._

# PLT / Debenhams Group multi-brand app prototype — component & token inventory

**Repo root:** `/private/tmp/claude-408916113/-Users-jake-rayner-Desktop-GROUP-DESIGN-SYSTEM-debenhamsgroup-design/cf27f321-dfbe-4212-8a33-578d6defdfb5/scratchpad/repos/plt-app-prototype`

Stack: Expo SDK 57 / React Native 0.86, expo-router file routing, TypeScript. No web output. 5 brands (PLT, Debenhams, boohoo, boohooMAN, Karen Millen) share one codebase; brand is a runtime context switch. 13,301 lines of TS/TSX across 33 components, 2 shared screens, 21 route files.

---

## 1. Summary table

| Component / pattern | File | Screen(s) | New to web DS? | Brands |
|---|---|---|---|---|
| `Button` (6 DS types × 4 states) | `src/components/Button.tsx` | PDP, EmptyState, dev library | **EXISTS — differs materially** (6 types incl. buyItNow / tertiaryXS / textOnly; two skin families PLT vs group) | all 5, per-brand skins |
| `ProductCard` (DS 5992-10841) | `src/components/ProductCard.tsx` | PLP, PDP rails, Home rails, Bag, Wishlist, Search, EmptyState | **EXISTS — differs materially** (in-card swipeable gallery, variant-switching swatches, per-brand slot config, heart spring animation) | all 5 via `theme.card` |
| `NavBar` — floating glass nav bar, 44pt glass pucks, absolutely-centred title, badge | `src/components/NavBar.tsx` | PLP, Shop L2, Account, dev library | **NEW** | all |
| `AppHeader` — 7 header variants (A–F patterns) | `src/components/AppHeader.tsx` | dev `/chrome-variants/[id]` only | **NEW** | all |
| `TabBar` — 4 bottom-nav variants | `src/components/TabBar.tsx` | dev library, `/chrome-variants` | **NEW** | all |
| `FloatingTabBar` — real app tab bar, glass pill + sliding puck + shrink-on-scroll | `app/(tabs)/_layout.tsx:108` | every tab | **NEW** | all |
| `NativeTabsLayout` — iOS 26 Liquid Glass native tab bar | `app/(tabs)/_layout.tsx:67` | every tab (default) | **NEW** | all |
| `GlassView` — liquid-glass / blur surface | `src/components/GlassView.tsx` | ~12 call sites | **NEW** | all |
| `BottomSheet` — scrim, handle, title row, detent sizing | `src/components/BottomSheet.tsx` | Sort, Price, settings, chrome, dev | **NEW** (generic sheet) | all |
| `SortSheet` — radio list of 6 sorts | `src/components/SortSheet.tsx` | PLP, dev library | **EXISTS** (sort & filter) — mobile sheet form | all |
| `FilterDrawer` — right-slide 78%-width panel, facet rows + inline chips, sticky "Show N results" | `src/components/FilterDrawer.tsx` | PLP | **EXISTS — differs materially** (drawer not sheet; inline expandable chip groups; live facet counts) | all |
| `PriceSheet` — popular-range chips, min/max inputs, inventory histogram, range slider | `src/components/PriceSheet.tsx` | PLP | **NEW** | all |
| `FilterPill` — white capsule, shadow, optional chevron / inline Switch | `src/components/FilterPill.tsx` | dev library only | **EXISTS — differs** (44pt shadowed capsule w/ inline toggle) | all |
| `Chip` — 40pt outlined pill, active = ink fill | `src/components/Chip.tsx` | Home, PriceSheet, dev | **EXISTS** (category pills) | all |
| `SizeSelector` (DS 8942-6191) | `src/components/SizeSelector.tsx` | PDP | **NEW** | all |
| `UspBar` — rotating USP/countdown ticker, CMS colours | `src/components/UspBar.tsx` | Home, Bag, dev library | **EXISTS — differs materially** (animated rotation + live midnight countdown + derived contrast) | all, content per brand |
| `SectionHeader` — 20pt title + plain "See all" | `src/components/SectionHeader.tsx` | PDP, Bag, Home blocks, EmptyState | **NEW** | all |
| `ListRow` — 52pt shadowed circular icon puck + title/sub/badge | `src/components/ListRow.tsx` | dev library only | **NEW** | all |
| `EmptyState` — glyph + line + primary CTA + Recently-viewed rail | `src/components/EmptyState.tsx` | Bag, Wishlist | **NEW** | all |
| `FreeDeliveryBanner` — 4pt progress track / tick-circle success | `src/components/FreeDeliveryBanner.tsx` | Bag | **NEW** | all |
| `Bnpl` (DS 2969-10048) — provider chips, expandable instalment rows | `src/components/Bnpl.tsx` | PDP | **NEW** | all |
| `PaymentButton` (DS 9144-1931) — 10 types × variants + glass mode | `src/components/PaymentButton.tsx` | PDP, Bag, dev library | **NEW** | brand-agnostic |
| `SeelBanner` / Deliver+ PDP + checkout banner | `src/components/SeelBanner.tsx` | PDP, Checkout, dev | **NEW** | all 5, per-brand `seelTheme` |
| `SeelCheckoutRow` | `src/components/SeelCheckoutRow.tsx` | Checkout | **NEW** | all |
| `DeliverPlusModule` — bag banner, 6 benefit rows, "Powered by Seel" | `src/components/DeliverPlusModule.tsx` | Bag, dev | **NEW** | all |
| `DeliverPlusLockup` — per-brand Deliver+ artwork | `src/components/DeliverPlusLockup.tsx` | inside Seel components | **NEW** | all 5 |
| `BrandLogo` / `PLTLogo` — wordmark swap w/ optical scaling | `src/components/BrandLogo.tsx`, `PLTLogo.tsx` | Home, Checkout, AppHeader, TabBar, dev | **NEW** | all 5 |
| `PLTIcon` + `dsIcons` — 41 PLT/group glyphs + 124 DS core icons, per-brand alias, stroke normalisation | `src/components/PLTIcon.tsx`, `dsIcons.ts` | everywhere | **EXISTS — differs materially** (per-brand glyph aliasing + optical stroke tuning) | all |
| `ContentArea` — continuous feed vs snap-story panels (dots / counter) | `src/components/ContentArea.tsx` | dev `/chrome-variants` | **NEW** | all |
| `BrandHome` + block renderers (hero, heroCarousel, ctaRail, **roundel strip**, productRail, text) | `src/components/BrandHome.tsx` | Home | roundel strip **EXISTS**; hero/heroCarousel/ctaRail/productRail **NEW** | all, CMS-driven |
| `PersonaSwitcher` (= hidden Prototype-settings sheet: brand grid, layout, switches) | `src/components/PersonaSwitcher.tsx` | Home (dev) | **NEW** (dev tool) | all |
| `ChromeSwitcher` — FAB + preset sheet | `src/components/ChromeSwitcher.tsx` | **orphaned, no call site** | **NEW** (dev tool) | all |
| `Accordion` (inline) | `src/screens/ProductScreen.tsx:54` | PDP | **NEW** | all |
| PDP gallery + peek carousel | `src/screens/ProductScreen.tsx:220` | PDP | **NEW** | all |
| PDP "N VIEWED TODAY" glass urgency badge (drift-in) | `ProductScreen.tsx:232` | PDP | **EXISTS-adjacent** (taggstar) — **differs**: glass badge on image, 3s delayed entrance | all |
| PDP wishlist count pill (glass, heart pop) | `ProductScreen.tsx:244` | PDP | **NEW** | all |
| PDP "VIRTUAL TRY ON" glass button w/ shimmer loop | `ProductScreen.tsx:491` | PDP | **NEW** | all |
| PDP floating Add-to-bag glass pill (scroll-triggered) | `ProductScreen.tsx:519` | PDP | **NEW** | all |
| PDP savings pill / Final Sale / promo + countdown lines | `ProductScreen.tsx:278–301` | PDP | **EXISTS-adjacent** (offer / NDD badges) — **differs**: inline text rows not badges | all |
| PDP USP box (DS 3619-10541) | `ProductScreen.tsx:371` | PDP | **NEW** | all |
| PDP colourway swatch rail (44×58 image swatches) | `ProductScreen.tsx:310` | PDP | **EXISTS — differs** (large rectangular image swatches, PDP-scale) | all |
| PDP recommendations "cloud" (centred text links) | `ProductScreen.tsx:459` | PDP | **NEW** | all |
| PLP floating category tab strip (blur block, slide out on scroll-down) | `src/screens/PlpScreen.tsx:222` | PLP | **EXISTS — differs materially** (PLP header: glass, scroll-direction driven, text tabs not pills) | all |
| PLP flush 2-col grid + 1:1 campaign banner + LOAD MORE | `PlpScreen.tsx:190–216` | PLP | grid **NEW**; banner **EXISTS** (PLP content slot); LOAD MORE **NEW** | all (identical) |
| Bag line item + qty stepper (minus→trash at qty 1) + Move to Wishlist | `app/(tabs)/bag/index.tsx:92` | Bag | **NEW** | all |
| Order summary block | `bag/index.tsx:184`, `checkout.tsx:193` | Bag, Checkout | **NEW** | all |
| Promo-code input + Apply | `bag/index.tsx:169`, `checkout.tsx:153` | Bag, Checkout | **NEW** | all |
| Bag floating action stack (Deliver+ CTA, Apple Pay + Checkout 50/50) | `bag/index.tsx:222` | Bag | **NEW** | all |
| Checkout `Checkbox` | `app/checkout.tsx:17` | Checkout | **NEW** | PLT tokens only (not themed) |
| Checkout secure header (back + wordmark + lock "SECURE CHECKOUT") | `checkout.tsx:44` | Checkout | **NEW** | all |
| Account balance band + 3 stat cards | `app/(tabs)/me/index.tsx:47` | Account | **NEW** | all 5, per-brand fill |
| Account row (48pt shadowed icon puck, ACTIVE badge, count bubble) | `me/index.tsx:75` | Account | **NEW** | all 5, per-brand rows |
| Home collapsing header + docking glass search capsule | `app/(tabs)/(home)/index.tsx:152–208` | Home | **NEW** | all |
| Home header glass icon button + badge | `(home)/index.tsx:95` | Home | **NEW** | all |
| Search overlay: glass capsule + Cancel, recent/suggested rows, recs rail | `app/(tabs)/search/index.tsx` | Search | **EXISTS — differs** (full-screen overlay w/ morph-in animation) | all |
| Shop L1 menu row (+ Debenhams-only circular roundel) | `app/(tabs)/shop/index.tsx:54` | Shop | roundel **EXISTS**; row **NEW** | all; roundels Debenhams only |
| Shop L1 content strip (3 × 3:4 tiles) | `shop/index.tsx:72` | Shop | **NEW** | all |
| Shop L2 link list + group headings + 420pt campaign card | `app/(tabs)/shop/[section].tsx` | Shop L2 | **NEW** | all |
| Badges (nav 16pt, tab 20pt, dot, ACTIVE pill, count bubble, card tag) | multiple | all | **EXISTS — differs** (sizes/placements documented below) | all |
| `Home2` — 19 experimental homepage modules (marquee, category wheel, countdown, before/after drag, scratch-to-reveal, social grid…) | `src/components/home2/Home2.tsx` (1,149 ln) | **orphaned — no call site** | **NEW** — flag as **superseded / dead code** | PLT only (hardcoded tokens) |
| **Breadcrumb** | — | — | **absent from app** | — |
| **Footer** | — | — | **absent from app** (`footer.json` scraped but unused — SCRAPER-BRIEF §7) | — |
| **AI badge** | — | — | **absent from app** (`ds-ai` glyph exists in `dsIcons.ts` but unused) | — |

---

## 2. TOKENS

### 2.1 Where they live and how a brand is chosen

| Concern | File |
|---|---|
| Per-brand palette / type / radii / layout / icons / card slots / account / style | `.../src/theme/brands.ts` (745 ln) |
| `useTheme()` + `useStyles(makeStyles)` live-switching hooks | `.../src/theme/theme.ts` |
| Shared spacing + shadows (brand-agnostic) | `.../src/theme/tokens.ts` |
| Type scale (`makeText`) | `.../src/theme/typography.ts` |
| Active brand state | `.../src/context/BrandContext.tsx` |

**Runtime brand selection** — `BrandProvider` (`src/context/BrandContext.tsx:20`) holds `brandId` in `useState<BrandId>(DEFAULT_BRAND)` (`DEFAULT_BRAND = 'plt'`, `brands.ts:745`), and calls `setActiveCatalogueBrand(brandId)` **during render** so the catalogue data is swapped before children read it. `useTheme()` (`theme.ts:37`) memoises `BRANDS[brandId]` into the `Theme` object. Because RN `StyleSheet.create` runs at module load and cannot see a switch, **every component must take styles from `useStyles(makeStyles)` with the factory at module scope** — this is the enforced project convention (`CLAUDE.md`, `theme.ts:1-12`). The switch UI is a hidden sheet opened by **tapping the brand logo on Home** (`app/(tabs)/(home)/index.tsx:160`, `PersonaSwitcher.tsx:43` brand app-icon grid). There is also a deep link for the dev component library: `/(dev)/components?brand=debenhams` (`app/(dev)/components.tsx:104`).

There is **no extract-tokens script**. The two scripts are `scripts/build-plt-data.mjs` (compiles scraped catalogue JSON per brand) and `scripts/extract-ds-icons.mjs` (generates `src/components/dsIcons.ts` from a single Figma "Icon Library" frame SVG export, node 470-935, re-centring each glyph on 24×24 and replacing fills with `{C}`). Tokens were pulled by hand via Figma MCP; provenance is recorded in the `brands.ts` header comment.

### 2.2 Colour provenance (verbatim, `brands.ts:10-26`)

```ts
// COLOUR PROVENANCE (Debenhams Group Design System, aIHmkCaTy9c5EWOxAGw0So).
// `BrandColours` mirrors the DS colour collection one-for-one, using the DS's
// own variable names, so a value can be checked against Figma without a
// translation step. Semantic aliases (ink, paper, cta…) are derived in
// makePalette, never authored per brand.
// Every brand's ramp is now lifted from the DS. The full Colour Palette pages
// exist for PLT and Debenhams; the other three are sourced from their Button
// frames in section 12681-158518, which expose the CTA ramp but not Light 1-3,
// Dark 3, Grey 05 or Red — those few are derived and flagged PROVISIONAL inline.
//  - PLT           11904-2395  (palette, 34 vars) + 12533-14582  (buttons)
//  - Debenhams     11241-47116 (palette, 33 vars) + 12533-14818  (buttons)
//  - boohoo        12681-158104 (buttons)
//  - boohooMAN     12681-158242 (buttons)
//  - Karen Millen  12681-158380 (buttons)
//
// Greys and the system ramp are shared group-wide (verified identical between
// the PLT and Debenhams frames). Red and Grey 05 are NOT — they're per brand.
```

### 2.3 Shared group ramp — `DS_SYSTEM` (`brands.ts:80-97`, verbatim)

```ts
const DS_SYSTEM = {
  black: '#000000',
  white: '#FFFFFF',
  softBlack: '#242424',
  grey1: '#F2F2F2',
  grey2: '#E7E7E7',
  grey25: '#D6D6D6',
  grey3: '#B5B5B5',
  grey4: '#767676',
  grey5: '#6B6B6B',
  grey6: '#323232',
  redLight: '#FFF2F2',
  yellow: '#FFD600',
  yellowLight: '#FFFBE6',
  green: '#70C474',
  greenLight: '#EAF6EA',
  systemCursor: '#2797FF',
} as const;
```

Third-party colours, not DS variables (`brands.ts:100-107`):
```ts
const THIRD_PARTY = {
  paypalYellow: '#FFD600', paypalBlue: '#253B80',
  seelSalmon: '#E7ADA2', seelIvory: '#FCF9F4',
  seelFooter: '#FDF9F5', seelGrey: '#595959',
};
```

### 2.4 Semantic aliases + derived glass (`makePalette`, `brands.ts:140-214`, verbatim from line 178)

```ts
    // ——— Semantic aliases the screens read ———
    ink: c.softBlack,
    paper: c.backgroundWhite,
    cream: c.grey05,
    creamPaper: c.backgroundWhite,
    canvas: c.grey1,
    mist: c.grey2,
    line: c.grey25,
    fog: c.grey3,
    stone: c.grey4,
    danger: c.red,
    badge: c.red,
    success: c.green,
    live: c.green,
    onPrimary: c.onCta,

    // ——— Glass, derived from the brand's own surfaces ———
    creamPaperClear: alpha(c.backgroundWhite, 0),
    glassHalf: alpha(c.backgroundWhite, 0.5),
    glassTint: alpha(c.backgroundWhite, 0.65),
    glassSolid: alpha(c.backgroundWhite, 0.85),
    creamGlass: alpha(c.grey05, 0.7),
    creamClear: alpha(c.grey05, 0),
    creamPaperSoft: alpha(c.backgroundWhite, 0.7),
    // Vivid brand glass for floating chrome (ATB pill, VTO): always the
    // brand's Primary — Debenhams floats aqua, boohoo pink, KM orange — with
    // the content colour derived from its lightness (black on the light ones).
    ctaGlass: alpha(c.primary, 0.88),
    onCtaGlass: lightnessOf(c.primary) > 0.55 ? c.black : c.white,
    overlay60: 'rgba(0,0,0,0.6)',
    shimmer: alpha(c.backgroundWhite, 0.35),
    shimmerClear: alpha(c.backgroundWhite, 0),
    glassBorder: 'rgba(255,255,255,0.55)',
    glassDark: 'rgba(22,19,20,0.35)',
    scrim: 'rgba(22,19,20,0.45)',
```

`lightnessOf()` (`brands.ts:114-131`) = Rec.709 luma / 255; used to derive readable text on CMS/brand fills (threshold **0.55**). Also used for the primary-button label and the Account rewards card.

### 2.5 Type — the four brand families (verbatim, `brands.ts:356-400`)

```ts
const ROBOTO: BrandFonts = {
  regular: 'Roboto_400Regular', medium: 'Roboto_500Medium',
  semibold: 'Roboto_600SemiBold', bold: 'Roboto_700Bold',
  display: 'Cardo_400Regular_Italic', light: 'Roboto_400Regular',
};
// Debenhams: Geologica, "mainly semi bold and light". Body stays at 400 …
const GEOLOGICA: BrandFonts = {
  regular: 'Geologica_300Light', medium: 'Geologica_600SemiBold',
  semibold: 'Geologica_600SemiBold', bold: 'Geologica_600SemiBold',
  display: 'Geologica_300Light', light: 'Geologica_300Light',
};
const MONTSERRAT: BrandFonts = {
  regular: 'Montserrat_500Medium', medium: 'Montserrat_600SemiBold',
  semibold: 'Montserrat_600SemiBold', bold: 'Montserrat_700Bold',
  display: 'Montserrat_600SemiBold', light: 'Montserrat_400Regular',
};
const JOST: BrandFonts = {
  regular: 'Jost_400Regular', medium: 'Jost_500Medium',
  semibold: 'Jost_600SemiBold', bold: 'Jost_700Bold',
  display: 'Jost_400Regular', light: 'Jost_300Light',
};
```

Note the deliberate weight shifts: Debenhams `bold` **is** SemiBold 600 (there is no 700); boohoo/MAN `regular` **is** Medium 500 with true 400 kept as `light`. All faces are loaded up front in `app/_layout.tsx:31-51` so switching is instant. One non-brand face: **`Antonio_700Bold`**, used only for the DS Roundels Strip on-image label (`BrandHome.tsx:228`).

**Type scale** (`src/theme/typography.ts:11-25`, shared across brands, only family changes) — verbatim:

```ts
export function makeText(f: BrandFonts, c: Palette) {
  return {
    caption:     { fontFamily: f.regular, fontSize: 12, lineHeight: 16, color: c.stone },
    captionBold: { fontFamily: f.bold,    fontSize: 12, lineHeight: 16, color: c.ink },
    body:        { fontFamily: f.regular, fontSize: 14, lineHeight: 20, color: c.ink },
    bodyMedium:  { fontFamily: f.medium,  fontSize: 14, lineHeight: 20, color: c.ink },
    bodyBold:    { fontFamily: f.bold,    fontSize: 14, lineHeight: 20, color: c.ink },
    bodyLg:      { fontFamily: f.regular, fontSize: 16, lineHeight: 22, color: c.ink },
    bodyLgBold:  { fontFamily: f.bold,    fontSize: 16, lineHeight: 22, color: c.ink },
    h3:          { fontFamily: f.bold,    fontSize: 18, lineHeight: 24, color: c.ink },
    h2:          { fontFamily: f.bold,    fontSize: 22, lineHeight: 28, color: c.ink },
    h1:          { fontFamily: f.bold,    fontSize: 28, lineHeight: 34, color: c.ink },
    display:     { fontFamily: f.bold,    fontSize: 32, lineHeight: 38, color: c.ink },
    price:       { fontFamily: f.bold,    fontSize: 20, lineHeight: 26, color: c.ink },
  } as const;
}
```
Rule (`CLAUDE.md`): **12 minimum** (captions/badges only), 14 core body, 16 primary labels/body-large, 16–32 headers. Never below 12.

### 2.6 Shape, layout, spacing, shadow

```ts
// brands.ts:402-409
/** PLT + Karen Millen: sharp corners on every content surface. */
const SQUARE: Radii = { xs: 0, sm: 0, md: 0, lg: 0, pill: 0 };
/** Debenhams / boohoo / boohooMAN: 4px on controls and surfaces — CTAs,
 *  inputs, PDP cards. 4px is the only radius these brands use. */
const SOFT_4: Radii = { xs: 4, sm: 4, md: 4, lg: 4, pill: 4 };

const FLUSH: BrandLayout = { pageMargin: 0, gridGap: 1, railGap: 1 };
```
`FLUSH` is used by **all five brands** — "Listings are identical for every brand: full-bleed, 1px hairline gaps, square cells (the PLT treatment). Never inset a PLP or round a grid cell." (`CLAUDE.md`). System chrome (nav bars, glass pucks, sheets, badges) uses native iOS rounding set directly in the component, outside the token system (`tokens.ts:11-15`).

```ts
// src/theme/tokens.ts:18-52 (brand-agnostic)
export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 };

export const shadow = {
  float:      { shadowColor: '#161314', shadowOpacity: 0.14, shadowRadius: 18, shadowOffset: { width: 0, height: 8 }, elevation: 8 },
  card:       { shadowColor: '#161314', shadowOpacity: 0.06, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 3 },
  cardAction: { shadowColor: '#000000', shadowOpacity: 0.14, shadowRadius: 5,  shadowOffset: { width: 0, height: 1 }, elevation: 2 },
};
```

### 2.7 The five brand objects — verbatim (`brands.ts:575-745`)

```ts
export const BRANDS: Record<BrandId, Brand> = {
  // Exact — DS node 11904-2395
  plt: {
    id: 'plt',
    name: 'PrettyLittleThing',
    colors: makePalette({
      ...DS_SYSTEM,
      primary: '#550503',
      cta: '#550503',
      primaryDark: '#1E0301',
      dark1: '#450603',
      dark2: '#360502',
      dark3: '#270401',
      light1: '#C77E75',
      light2: '#EAAFA4',
      light3: '#FFD5CD',
      light4: '#FCF0EE',
      neutral: '#F3EAE8',
      neutralPressed: '#E5D4D1',
      backgroundWhite: '#FFFDF7',
      grey05: '#FAF5E7',
      red: '#C90000',
      onCta: '#FFFDF7',
      // Fascia-only variables in PLT's collection
      extras: { warmPeach: '#F1C59E', lightCream: '#FFE4D2' },
    }),
    fonts: ROBOTO,
    radius: SQUARE,
    layout: FLUSH,
    icons: PLT_ICONS,
    card: PLT_CARD,
    account: PLT_ACCOUNT,
    style: { caps: true, menuRoundels: false, blockGap: 0 },
  },

  // Exact — DS node 11241-47116 (aqua palette; confirm it's Debenhams)
  debenhams: {
    id: 'debenhams',
    name: 'Debenhams',
    colors: makePalette({
      ...DS_SYSTEM,
      primary: '#7BE7D8',
      cta: '#00787D',
      primaryDark: '#00565A',
      dark1: '#76DECF',
      dark2: '#70BEB3',
      dark3: '#529C92',
      light1: '#9DEDE2',
      light2: '#B8FDF4',
      light3: '#D6FFF9',
      light4: '#E6FFFC',
      neutral: '#E8F4F2',
      neutralPressed: '#D7EBE8',
      backgroundWhite: '#FFFFFF',
      grey05: '#FAFAFA',
      red: '#D33F3F',
      onCta: '#FFFFFF',
    }),
    fonts: GEOLOGICA,
    radius: SOFT_4,
    layout: FLUSH,
    icons: GROUP_ICONS_HEART,
    card: GROUP_CARD,
    account: DEBENHAMS_ACCOUNT,
    style: { caps: false, menuRoundels: true, blockGap: 2 },
  },

  boohoo: {
    id: 'boohoo',
    name: 'boohoo',
    // Exact — DS node 12681-158104 ("Button (boohoo)")
    colors: makePalette({
      ...DS_SYSTEM,
      primary: '#F8B5CC',
      cta: '#BB305F',
      primaryDark: '#CB4870',
      dark1: '#EEA5BE',
      dark2: '#EA92B0',
      dark3: '#A82A55',      // PROVISIONAL — not exposed by the Buttons frame
      light1: '#FBC7D8',     // PROVISIONAL
      light2: '#FCD5E1',     // PROVISIONAL
      light3: '#FEE0EA',     // PROVISIONAL
      light4: '#FFE9F0',
      neutral: '#F1DCE3',
      neutralPressed: '#E4C9D2',
      backgroundWhite: '#FFFFFF',
      grey05: '#FAFAFA',     // PROVISIONAL
      red: '#D33F3F',        // PROVISIONAL
      onCta: '#FFFFFF',
    }),
    fonts: MONTSERRAT,
    radius: SOFT_4,
    layout: FLUSH,
    icons: GROUP_ICONS_HEART,
    card: GROUP_CARD,
    account: BOOHOO_ACCOUNT,
    style: { caps: false, menuRoundels: false, blockGap: 2 },
  },

  // The DS pairs boohoo & MAN as one style set — same shape/type, own logo
  boohooman: {
    id: 'boohooman',
    name: 'boohooMAN',
    // Exact — DS node 12681-158242 ("Button (MAN)"). MAN's ramp is mono by
    // design: Primary, CTA, Primary Dark and Dark 1/2 are all pure black, so
    // pressed states read through the neutrals rather than a darker brand tone.
    colors: makePalette({
      ...DS_SYSTEM,
      primary: '#000000',
      cta: '#000000',
      primaryDark: '#000000',
      dark1: '#000000',
      dark2: '#000000',
      dark3: '#000000',
      light1: '#767676',     // PROVISIONAL — not exposed by the Buttons frame
      light2: '#B5B5B5',     // PROVISIONAL
      light3: '#C6C6C6',     // PROVISIONAL
      light4: '#D6D6D6',
      neutral: '#F2F2F2',
      neutralPressed: '#E7E7E7',
      backgroundWhite: '#FFFFFF',
      grey05: '#FAFAFA',     // PROVISIONAL
      red: '#D33F3F',        // PROVISIONAL
      onCta: '#FFFFFF',
    }),
    fonts: MONTSERRAT,
    radius: SOFT_4,
    layout: FLUSH,
    icons: GROUP_ICONS_BOOKMARK,
    card: GROUP_CARD,
    account: BOOHOOMAN_ACCOUNT,
    style: { caps: false, menuRoundels: false, blockGap: 2 },
  },

  karenmillen: {
    id: 'karenmillen',
    name: 'Karen Millen',
    // Exact — DS node 12681-158380 ("Button (KM)"). Confirmed: KM's ramp is the
    // rust/orange one, not a neutral.
    colors: makePalette({
      ...DS_SYSTEM,
      primary: '#DB4E11',
      cta: '#8E330B',
      primaryDark: '#2C1003',
      dark1: '#AF3E0E',
      dark2: '#832F0A',
      dark3: '#5E2207',        // PROVISIONAL — not in the Buttons frame
      light1: '#E88A5B',       // PROVISIONAL
      light2: '#F0AE8B',       // PROVISIONAL
      light3: '#F3C1A7',       // PROVISIONAL
      light4: '#F6D3C3',
      neutral: '#FBEAE2',
      neutralPressed: '#F8DCCF',
      backgroundWhite: '#FFFFFF',
      grey05: '#FAFAFA',       // PROVISIONAL
      red: '#D33F3F',          // PROVISIONAL
      onCta: '#FFFFFF',
    }),
    fonts: JOST,
    radius: SQUARE,
    layout: FLUSH,
    icons: GROUP_ICONS_BOOKMARK,
    card: GROUP_CARD,
    account: KM_ACCOUNT,
    style: { caps: false, menuRoundels: false, blockGap: 2 },
  },
};

export const BRAND_ORDER: BrandId[] = ['plt', 'debenhams', 'boohoo', 'boohooman', 'karenmillen'];
export const DEFAULT_BRAND: BrandId = 'plt';
```

### 2.8 Per-brand overrides beyond colour

**`BrandStyle`** (`brands.ts:327-341`): `caps` — PLT only, applied via `theme.caps(str)`; `menuRoundels` — Debenhams only (circular category image on L1 menu rows); `blockGap` — PLT `0` (edge-to-edge homepage, no seams), all others `2`.

**`BrandCardSlots`** (`brands.ts:411-441`, verbatim):
```ts
/** PLT's card as built and signed off: no brand line, promo code line on. */
const PLT_CARD: BrandCardSlots = {
  tag: false, wishlist: true, quickAddIcon: true, quickAddButton: false,
  socialProof: false, brandName: false, savings: true, promoCode: true,
  swatches: false, ratings: false, actionSize: 24, actionStyle: 'chip',
};
/** DS defaults for the group brands — brand line on, no PLT promo line. */
const GROUP_CARD: BrandCardSlots = {
  tag: true, wishlist: true, quickAddIcon: true, quickAddButton: false,
  socialProof: false, brandName: true, savings: true, promoCode: false,
  swatches: true, ratings: true, actionSize: 32, actionStyle: 'circle',
};
```

**`BrandIcons`** (`brands.ts:443-475`): PLT uses its own glyph set (`tab-home-plt`, `tab-shop`, `bag`, `wishlist`/`wishlist-active`, `account`); Debenhams + boohoo use `GROUP_ICONS_HEART` (`grp-*` tab set, `ds-wishlist`/`ds-wishlist-fill`, card bag = `ds-quick-add`); boohooMAN + Karen Millen use `GROUP_ICONS_BOOKMARK` (bookmark replaces heart). Card action glyphs are deliberately the DS 24-grid stroked set, **not** the 28-grid `grp-*` tab set (comment `brands.ts:258-264`).

**`BrandAccount`** (`brands.ts:300-572`) — per-fascia loyalty sub-brand and row set: PLT `Royalty` / `balanceBg:'cta'` (garnet card, white text); Debenhams `Unlimited` / `'primary'` (mint, black text, adds Subscribe & Save ×3 + Debenhams Mastercard); boohoo `Premier` / `'primary'` (pale pink, black text); boohooMAN `Premier` / `'black'` + `balanceButtonBg:'#01FE8A'`; Karen Millen = MAN's rows with `balanceButtonBg: undefined` and `ds-unlimited` on the Premier row.

**Seel / Deliver+ theme** (`src/components/seelTheme.ts:36-82`, per-brand, verbatim values): PLT `bg #E7ADA2`, fg/learn `#000000`, headline "Elevate Your Experience", check `#5F0000`, `noHolidayRow: true`, `bandHeadline: true`. Debenhams `bg #E8F4F2`, learn `#00787D` semibold, check `#00787D`. boohoo `bg #FFE0EB`, headline "Elevate Your Experience", check `#BB305F`. boohooMAN `bg #101010`, fg `#FFFFFF`, check `#01FE8A` / onCheck `#000000`. KM `bgGradient ['#000000','#161616']`, fg white, `pitch { strongPrice: '£2.99', sub: 'Get 35-day returns, £5/day late delivery compensation and much more.' }`, check white / onCheck black.

---

## 3. Component detail

### 3.1 `Button` — `.../src/components/Button.tsx` — **EXISTS, differs**
Types: `buyItNow | primary | secondary | tertiary | tertiaryXS | textOnly`. Props: `type, label, onPress, disabled, loading, icon, iconSize (16|20|24), fullWidth`. States: default / pressed / disabled / loading (spinner replaces label). **Two skin families chosen by brand** — the DS ships one component but PLT's frame maps states to different variables than the group frames. Mapping table verbatim from the header comment (`Button.tsx:10-22`):

```
                     PLT                        group (Deb/boohoo/MAN/KM)
  radius             0                          4
  1º/BIN pressed     Dark 1                     1º Dark 1 · BIN Dark 2
  1º/BIN disabled    Grey 05, label Grey 3      1º Neutral · BIN Dark 2
  secondary          Grey 3 hairline, Regular   Dark 2 border, SemiBold 16,
                     14 label, px 16            white fill, px 24
  secondary pressed  Background White fill      Light 4 fill
  tertiary pressed   Light 4                    Neutral Pressed
```
Primary label colour is **derived** from the fill lightness (`lightnessOf(bg) > 0.55 ? black : plt ? backgroundWhite : white`) so Debenhams aqua and boohoo pink carry black. `primary` and `buyItNow` are **uppercased by the component itself** on every brand (not the brand `caps` rule, `Button.tsx:114-116`).

```ts
// Button.tsx:155-181
base: { alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start' },
rounded: { borderRadius: 4 },              // group brands incl. KM; PLT square
stretch: { alignSelf: 'stretch' },
gap8: { gap: 8 }, gap4: { gap: 4 },        // 24px icon tightens gap to 4
buyItNow:   { height: 50, paddingHorizontal: 24, paddingVertical: 8 },
primary:    { height: 50, paddingHorizontal: 24, paddingVertical: 8 },
secondary:  { height: 50, paddingHorizontal: t.brand === 'plt' ? 16 : 24, paddingVertical: 8 },
tertiary:   { height: 40, paddingHorizontal: 16, paddingVertical: 8 },
tertiaryXS: { paddingHorizontal: 8, paddingVertical: 8 },
textOnly:   { minHeight: 34, paddingHorizontal: 24, paddingVertical: 5 },
buyItNowLabel:  { fontFamily: t.fonts.semibold, fontSize: 16, lineHeight: 24, textAlign: 'center' },
primaryLabel:   { fontFamily: t.fonts.semibold, fontSize: 16, lineHeight: 24, textAlign: 'center' },
secondaryLabel: t.brand === 'plt'
  ? { fontFamily: t.fonts.regular,  fontSize: 14, lineHeight: 24 }
  : { fontFamily: t.fonts.semibold, fontSize: 16, lineHeight: 24 },
tertiaryLabel:   { fontFamily: t.fonts.regular,  fontSize: 14, lineHeight: 24, textAlign: 'center' },
tertiaryXSLabel: { fontFamily: t.fonts.regular,  fontSize: 12, lineHeight: 16 },
textOnlyLabel:   { fontFamily: t.fonts.semibold, fontSize: 14, lineHeight: 24, textAlign: 'center' },
```
Loading spinner chips keep fixed widths — tertiary **114**, XS **58** (`Button.tsx:132-133`).

### 3.2 `ProductCard` — `.../src/components/ProductCard.tsx` — **EXISTS, differs materially**
DS component 5992-10841, every slot implemented; which show comes from `theme.card`, overridable per instance via a `slots` prop (used only by the dev library).

Props: `product, width = 160, variant = 'carousel' | 'list', fluid, slots?: Partial<BrandCardSlots>, wishlisted?, onToggleWishlist?`.

Slots (top → bottom): image (always **2:3**) with in-image **swipeable paging gallery** (up to 5 frames, `pagingEnabled`, `directionalLockEnabled` so the vertical grid keeps its gesture, `ProductCard.tsx:171-192`); **tag** badge bottom-left; **wishlist + quick-add** action stack top-right; optional full-width **quick-add button** under the image; **socialProof** (Taggstar "N viewed today"); **brandName**; title; price row (price / was struck-through / saving); **promoCode** line; **swatches**; **ratings**.

Behaviour worth carrying:
- **Tapping a swatch switches the variant the card shows in place** (image, price, promo all re-derive) — `setVariantId` at `:338`; real sibling ids come from the PDP record's colourways, cards without a record fall back to a colourway count with disabled swatches. FlatList recycling / brand switch reset the selection (`:86-90`).
- **Wishlist heartbeat**: `Animated.timing → 1.35 over 80ms`, then `Animated.spring back to 1 (damping 14, stiffness 420)`, plus `Haptics.impactAsync(Light)` (`:152-163`). Controlled mode (`wishlisted` + `onToggleWishlist`) used by the Wishlist tab.
- Card press: `Haptics.impactAsync(Light)` then `openProduct(variantId)` pushing inside the current tab.
- Action button geometry is per brand: **PLT = 24pt sharp glass chip** (`BlurView intensity 10 tint light` + 50% white fill, radius `radius.xs`, `overflow:hidden`); **group = 32pt solid white circle** with `shadow.cardAction`, **no** `overflow:hidden` (iOS drops layer shadows on clipping views — `:118-137`). Glyph is exactly half the button (`Math.round(actionSize * 0.5)`), drawn `exact` on the circle. Filled PLT heart draws at ×0.9 to optically match the outline. Wishlisted colour: PLT `colors.cta` (garnet), all others `colors.ink`.
- Promo line is **deterministic**, not random: `hasBonusCode(id)` hashes the id, ~10% of products carry `BONUS10` (`:57-62`).
- Swatch fills come from a **43-entry colour-name → hex map** (`SWATCH_COLOURS`, `:37-48`) until the scrape carries swatch imagery (SCRAPER-BRIEF §1).
- `tag` uses the product's `classification` filtered by `FIT_BADGE = /\b(plus|petite|tall|shape|curve|maternity|wide fit)\b/i` — range/fit labels only, **not** discounts or delivery promises.

```ts
// ProductCard.tsx:385-484 (trimmed)
card:  { overflow: 'hidden', marginRight: t.layout.railGap },   // 1px hairline
title: { fontFamily: t.fonts.light,  fontSize: 14, lineHeight: 18, color: t.colors.ink },
price:     { fontFamily: t.fonts.medium, fontSize: 14, color: t.colors.ink },
priceSale: { fontFamily: t.fonts.medium, fontSize: 14, color: t.colors.danger },
saving:    { fontFamily: t.fonts.regular, fontSize: 14, color: t.colors.danger },
was: { fontFamily: t.fonts.regular, fontSize: 14, color: t.colors.ink, textDecorationLine: 'line-through' },
priceRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 6 },
brandName: { fontFamily: t.fonts.medium, fontSize: 14, lineHeight: 18, color: t.colors.ink, marginBottom: 2 },
socialProof: { fontFamily: t.fonts.regular, fontSize: 12, color: t.colors.stone, marginBottom: 2 },
codeLine: { fontFamily: t.fonts.regular, fontSize: 12, color: t.colors.danger, marginTop: 6 },
swatchRow: { flexDirection: 'row', alignItems: 'center', gap: t.space.sm, marginTop: 8 },
swatch:    { width: 20, height: 20, borderRadius: 4, borderWidth: 1, borderColor: t.colors.mist, padding: 1 },
swatchSelected: { borderColor: t.colors.black },   // DS: true black, not ink
swatchFill: { flex: 1, borderRadius: 3 },
stars: { flexDirection: 'row', gap: 2 },           // ds-star-fill/half/outline @12
ratingRow:   { flexDirection: 'row', alignItems: 'center', gap: t.space.sm, marginTop: 8 },
ratingCount: { fontFamily: t.fonts.regular, fontSize: 14, color: t.colors.ink },
cardActions:   { position: 'absolute', top: t.space.sm, right: t.space.sm, gap: 8 },
cardActionBtn: { alignItems: 'center', justifyContent: 'center' },
chipFill: { backgroundColor: t.colors.glassHalf },
tag: { position: 'absolute', left: t.space.md, bottom: t.space.md, height: 28,
       backgroundColor: t.colors.paper, borderWidth: 1, borderColor: t.colors.mist,
       borderRadius: 4, paddingHorizontal: t.space.sm, maxWidth: '85%' },
tagLabel: { fontFamily: t.fonts.regular, fontSize: 12, color: t.colors.ink },
quickAdd: { height: 40, borderWidth: 1, borderColor: t.colors.line, borderRadius: t.radius.sm, marginTop: t.space.sm },
quickAddLabel: { fontFamily: t.fonts.bold, fontSize: 12, color: t.colors.ink },
imageWrap:  { overflow: 'hidden', backgroundColor: t.colors.mist },
imageFluid: { width: '100%', aspectRatio: 2 / 3 },
listRow: { flexDirection: 'row', gap: t.space.lg, paddingHorizontal: t.space.lg, paddingVertical: t.space.md },
```
`variant="list"` renders a **150×225** image beside a text column with `text.bodyLg` title, `text.price` price, "Free returns", and an optional "N people have this in their wishlist" line.

### 3.3 `NavBar` — `.../src/components/NavBar.tsx` — **NEW**
Shared floating nav-bar pattern, standard position on every screen: `top = insets.top + space.sm`, `left/right = space.lg`, height **44**. Props: `left?/right?: NavBarAction { icon, onPress, label, size?, badge? }`, `title?`, `titleOpacity?` (Animated, so screens can fade the title with their chrome — the PLP does this). Buttons are `GlassView` 44×44; the back chevron draws at 22 (others 24) with `weight="nav"` and is nudged `translateX: -1` because the chevron's optical middle isn't its box's. Title is `StyleSheet.absoluteFill`-centred with `paddingHorizontal: 52` so asymmetric slots never push it off-centre. Badge: `top 0 right 0, minWidth 16, height 16, borderRadius 8, backgroundColor colors.black, paddingHorizontal 3`, label `fonts.medium 12` on paper. Title: `fonts.medium 16 ink`.

### 3.4 `AppHeader` — `.../src/components/AppHeader.tsx` — **NEW** (dev-only)
One component implementing the six audited header patterns, driven by an `Animated.Value scrollY` from the host screen. `HERO_H = 320` is the solidify/morph threshold; interpolations at `:46-63`.

| Variant | Pattern | Behaviour |
|---|---|---|
| `pinned-rich` | A (eBay My eBay iOS) | 40pt square `cta`-filled avatar + name + "Member since" + bag; always visible |
| `pinned-title` | B (eBay Android / Live) | `text.h2` title + bag pinned; richer block below scrolls away |
| `icon-toolbar` | C (eBay PDP/Basket) | back / search / bag / share / ellipsis at 18–20; bg opacity 0→1 over `[HERO_H-80, HERO_H]` |
| `icon-to-bar` | D (M&S) | search icon (opacity 1→0) cross-fades into a 40pt/r20 `canvas` search pill (0→1); wordmark + wishlist persist |
| `search-plus-subrow` | E (eBay results / ASOS) | pinned search pill + notify; sub-row (New In / For You / Trending) sticky per `subRowSticky` boolean, else `translateY 0 → -44` over `[0,44]` |
| `full-bar` | MESHKI | search pill always; `bagInHeader` boolean |
| `chromeless` | F (Bershka/Zara/boa.) | renders `null`, or an optional ink promo ribbon pinned above the status bar |

```ts
// AppHeader.tsx:198-250 (trimmed)
wrap: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20 },
solidBg: { backgroundColor: t.colors.creamPaper },
row: { height: 52, flexDirection: 'row', alignItems: 'center', gap: t.space.md, paddingHorizontal: t.space.lg },
iconRun: { flexDirection: 'row', alignItems: 'center', gap: t.space.lg },
morphBar / searchPill: { flex: 1, flexDirection: 'row', alignItems: 'center', gap: t.space.sm,
                          height: 40, borderRadius: 20, backgroundColor: t.colors.canvas,
                          paddingHorizontal: t.space.lg },
subRow: { flexDirection: 'row', gap: t.space.xl, paddingHorizontal: t.space.lg,
          paddingVertical: t.space.md, backgroundColor: t.colors.creamPaper, zIndex: -1 },
ribbon: { backgroundColor: t.colors.ink, alignItems: 'center', paddingVertical: 6 },
avatar: { width: 40, height: 40, backgroundColor: t.colors.cta, alignItems: 'center', justifyContent: 'center' },
```

### 3.5 `TabBar` — `.../src/components/TabBar.tsx` — **NEW** (presentational, dev-only)
Variants: `labeled-fixed` (eBay/M&S, 5 items, icon+label, active gets a `cream` 44×30/r15 puck), `labeled-fixed-4item` (MESHKI, 4 items, 24×2 ink underline), `floating-pill-icon` (ASOS/Bershka/Zara — `GlassView intensity 60` + `shadow.float`, icon-only 22pt, `weight="nav"`, active tinted `cta`, 8pt `badge`-red dot), `text-only` (boa. — flat bar, 4 text items with the brand logotype at 12pt in the centre slot). Every variant supports per-item numeric badge (20pt r10 `colors.badge`, `fonts.bold 12`) and an `active` index. Items default to the brand's own icon slots; the 5th label is "My PLT" on PLT, "Account" elsewhere (`:20-27`).

### 3.6 Real app tab bar — `.../app/(tabs)/_layout.tsx` — **NEW**
Dual mode, switched by the hidden "Shrinking tab bar" setting:
- **OFF (default)** → `NativeTabsLayout` (`:67`): expo-router `NativeTabs` = genuine iOS 26 Liquid Glass pill, `tintColor = colors.ink`, `badgeBackgroundColor = colors.black`, labels hidden, bag badge from `useBag().count`. Needs **raster** icons: `grp-*-tab.png` / `tab-*-tab.png` at 26 / @2x / @3x, and they must be **template images** (transparent, alpha from the glyph) or iOS tints the whole square black. Search is a route but a hidden trigger (a 6th trigger overflows into the system "More" tab).
- **ON** → `FloatingTabBar` (`:108`): custom glass bar matched to the native look. `BAR_H = 60`, `left/right = space.lg`, `bottom = max(insets.bottom, 12)`, `GlassView intensity 60` + `shadow.float`, hairline `glassBorder` outline. A **glass selection puck** springs between slots (`Animated.spring damping 16 stiffness 190`, `top/bottom 6`, `borderRadius 999`, `glassTint` fill + `glassBorder` hairline). Instagram-style **shrink on scroll**: `barShrink` interpolates `scale 1 → 0.75` and `translateY 0 → 8`. Icons 26pt `weight="nav"`. Second tap on the active tab dispatches `POP_TO_TOP`. Bag badge 16pt r8 `colors.black` at `top 8, right '24%'`.

Five tabs: `(home)` Home · `shop` Shop · `bag` Bag · `wishlist` Wishlist · `me` Account. `search` is a route, never a visible tab.

### 3.7 `GlassView` — `.../src/components/GlassView.tsx` — **NEW**
Props `intensity = 50, radius = 999, dark = false`. Uses `expo-glass-effect`'s native liquid glass where available (`isLiquidGlassAvailable()`, iOS 26+, `glassEffectStyle="regular"`, `tintColor = colors.glassDark` when dark); otherwise `expo-blur` `BlurView` + `colors.glassTint` (or `glassDark`) with a `StyleSheet.hairlineWidth` `glassBorder` outline. The API is deliberately isolated so the internals can be swapped without touching call sites (`CLAUDE.md`).

### 3.8 `BottomSheet` — `.../src/components/BottomSheet.tsx` — **NEW**
`Modal transparent animationType="fade"`, scrim (`colors.scrim`, tap to close), then an `Animated.View` sliding from `translateY 600 → 0` with `Animated.spring(damping 22, stiffness 220)`. Sizes to content like an iOS detent and caps at `SCREEN_H - insets.top - space.sm`; past that the content scrolls **inside** while handle and title stay pinned (`scroll: { flexShrink: 1 }`, `alwaysBounceVertical={false}`).
```ts
sheet:    { position:'absolute', left:0, right:0, bottom:0, backgroundColor: t.colors.paper,
            borderTopLeftRadius: 22, borderTopRightRadius: 22,
            paddingHorizontal: t.space.lg, paddingTop: t.space.sm },
handle:   { alignSelf:'center', width: 44, height: 4, borderRadius: 2,
            backgroundColor: t.colors.line, marginBottom: t.space.md },
titleRow: { flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom: t.space.md },
```
Title = `text.h2`; close = `PLTIcon xmark @22`.

### 3.9 `SortSheet` — `.../src/components/SortSheet.tsx` — **EXISTS**
`BottomSheet title="Sort"` + radio list. Options (`SORT_OPTIONS`, `:7-14`): **Recommended, Lowest price, Highest price, Newly added, Most popular, Biggest saving**. Row: `gap space.lg, paddingVertical space.md`, label `text.bodyLg`. Radio: outer 26×26 r13 `borderWidth 2` `colors.line` → `colors.ink` when active; inner 14×14 r7 `colors.ink`. Selecting closes the sheet.

### 3.10 `FilterDrawer` — `.../src/components/FilterDrawer.tsx` — **EXISTS, differs materially**
Right-slide panel, `PANEL_W = round(SCREEN_W * 0.78)`, `translateX PANEL_W → 0` with `Animated.spring(damping 24, stiffness 240)`. Header: 44pt `GlassView` close puck (left), `text.h2 "Filter"`, "Reset" outlined pill (right, 40pt, `radius.pill`). Body: a **Sort** row (opens SortSheet), a quick-chip row (`All items / New in / Sale`), then a facet row per group — order fixed by `FACET_ROWS`: **style→"Category", size→"Size", colour→"Colour", brand→"Brand", department→"Department"** — each expanding an **inline wrapped chip group** showing value + site-wide count (`countLabel`: ≥1000 → "1.2k"). Then a **Price** row (opens PriceSheet). Sticky footer CTA "Show N results" (uppercased, 50pt, `radius.pill`, `colors.cta`). Rows only render when that brand's catalogue actually has the facet.
```ts
panel: { position:'absolute', top:0, right:0, bottom:0, backgroundColor: t.colors.paper, paddingHorizontal: t.space.lg },
closePuck: { width:44, height:44 },
resetPill: { borderWidth:1, borderColor: t.colors.line, borderRadius: t.radius.pill, paddingHorizontal: t.space.lg, height:40 },
row: { flexDirection:'row', justifyContent:'space-between', gap: t.space.md, paddingVertical: t.space.lg,
       borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: t.colors.line },
quickChip: { paddingHorizontal: t.space.lg, height:40, borderRadius: t.radius.pill, borderWidth:1, borderColor: t.colors.line },
quickChipActive: { backgroundColor: t.colors.ink, borderColor: t.colors.ink },
facetChips: { flexDirection:'row', flexWrap:'wrap', gap: t.space.sm, paddingVertical: t.space.lg },
facetChip: { flexDirection:'row', alignItems:'center', gap:6, paddingHorizontal: t.space.md, height:36,
             borderRadius: t.radius.pill, borderWidth:1, borderColor: t.colors.line },
footer: { position:'absolute', left:0, right:0, bottom:0, paddingHorizontal: t.space.lg, paddingTop: t.space.md,
          backgroundColor: t.colors.paper, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: t.colors.line },
cta: { height:50, borderRadius: t.radius.pill, backgroundColor: t.colors.cta },
ctaLabel: { color: t.colors.paper, textTransform: 'uppercase' },
```
Sub-component `FilterRow` (`:174`) — label / current value (truncated, `colors.fog`) / chevron (`chevron-up` when expanded, `chevron-down` when collapsible, `chevron-right` when it navigates).

### 3.11 `PriceSheet` — `.../src/components/PriceSheet.tsx` — **NEW**
`BottomSheet title="Popular price ranges"`. Horizontal `Chip` rail of the PLP's real `priceBand` facet values (fallback `Under £20 / £20 to £40 / Over £40`); "Choose your price" + Reset; two `£`-prefixed 52pt numeric inputs (`canvas` fill, `line` hairline, `radius.xs`) labelled Min./Max.; "Available inventory" **histogram** built from real band counts (`height: max(2, count/maxBar * 90)`, 100pt tall, `gap 6`, bars `colors.cta`); a **range slider** (two 26pt r13 knobs, `borderWidth 3 colors.cta`, `paper` fill, 2pt `ink` track); sticky "Show N results" CTA (50pt, `radius.pill`, `cta`, uppercase). Fallback bar data `FALLBACK_BARS = [2,4,3,6,8,10,7,12,9,14,18,11,8,5,3]`.

### 3.12 `FilterPill` — `.../src/components/FilterPill.tsx` — **EXISTS, differs**
The Brand Room PLP pattern (Figma 739-92209) restyled. Props `label, icon (Ionicons), chevron, toggle, toggleValue, onToggle, onPress`. `44pt, borderRadius 22, backgroundColor creamPaper, paddingHorizontal space.lg, gap space.sm, marginRight space.sm`, lifted by `shadow.card` only (no border). Optional inline `Switch` scaled `0.72` with `marginRight: -space.sm` (`trackColor false: mist / true: cta`, thumb `paper`) — used for e.g. Next Day Delivery. **Only rendered in the dev component library today**; the PLP uses `NavBar` + `FilterDrawer` instead.

### 3.13 `Chip` — `.../src/components/Chip.tsx` — **EXISTS**
`40pt, borderRadius radius.pill, backgroundColor paper, borderWidth 1 borderColor line, paddingHorizontal space.lg, gap 6, marginRight space.sm`; active → `ink` fill + border with `paper` label. Label `text.bodyMedium`. Optional `leading` node. Pressed = `opacity 0.7`.

### 3.14 `SizeSelector` — `.../src/components/SizeSelector.tsx` — **NEW**
DS node 8942-6191. Header row: "Select Size" (`text.body`) / "Size Guide" link (right, `accessibilityRole="link"`). Grid: `flexWrap, gap space.sm, marginTop space.md`.
```ts
chip: { minWidth: 60, height: 50, paddingHorizontal: t.space.lg, borderRadius: t.radius.xs,
        backgroundColor: t.colors.backgroundWhite, borderWidth: 1, borderColor: t.colors.grey3,
        alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
chipSelected: { borderColor: t.colors.black },
label:         { fontFamily: t.fonts.light, fontSize: 16, color: t.colors.black },
labelSelected: { fontFamily: t.fonts.regular },
labelOos:      { color: t.colors.grey3 },
// out-of-stock: corner-to-corner strike, centre-anchored so it clips cleanly
strike: { position:'absolute', left:'-20%', right:'-20%', top:'50%',
          height: StyleSheet.hairlineWidth * 2, backgroundColor: t.colors.grey3,
          transform: [{ rotate: '-33deg' }] },
```
Long labels widen the chip (DS "Long" variant); "One Size" and gift-card denominations are just longer labels. `accessibilityState { selected, disabled }` per chip.

### 3.15 `UspBar` — `.../src/components/UspBar.tsx` — **EXISTS, differs materially**
One bar that **animates between** the delivery countdown and the brand's promo lines rather than stacking them. Copy, background colour and rotation delay all come from the active brand's scraped USP strip (`usps()` from `home.json`); `promo` prop is only a fallback.
- Slides = `1 + messages.length`; slide 0 is "ORDER BY MIDNIGHT FOR NEXT DAY DELIVERY" + a live `useMidnightCountdown()` clock.
- Rotation: `fade 1→0 over 250ms`, swap index, `0→1 over 250ms`, on an interval of `max(2500, strip.delay)` or `SWAP_MS = 4000`. `translateY` rises `6 → 0` with the fade.
- **Contrast is derived, not trusted**: the CMS ships unreliable label colours (grey on red, black on black), so `lightnessOf(bg)` picks `onBg = paper | ink` at 0.55, and the countdown is `danger` only on near-black (<0.12), else `paper` on dark / `black` on light.
- `bar: { backgroundColor: t.colors.cream, height: 56 /* fixed at the two-line height so rotation never reflows */, paddingVertical: space.sm, paddingHorizontal: space.lg }`. Text = `text.captionBold` (12/16). `topInset` prop extends the strip colour behind the status bar (Home / Bag).

### 3.16 `SectionHeader` — `.../src/components/SectionHeader.tsx` — **NEW**
`title: fonts.medium 20 / lineHeight 22 / ink` (PDP product-title style +4px), applied through `caps()`; optional `sub` at `text.body` `stone`; optional "See all" as a **plain text link** — `fonts.regular 14 ink`, no chevron, no border, no fill. Row `paddingHorizontal space.lg, marginTop space.xl, marginBottom space.md`.

### 3.17 `ListRow` — `.../src/components/ListRow.tsx` — **NEW**
My-eBay-style row: 52×52 r26 icon puck, `creamPaper` fill lifted by `shadow.card` only, Ionicon @22; title `text.bodyLg`, sub `text.body stone`; optional pill badge (`colors.black`, `r999`, `height 24`, `paddingHorizontal space.md`, `text.captionBold paper`). Row `gap space.lg, paddingHorizontal space.lg, paddingVertical space.md`; pressed `opacity 0.6`. **Dev library only** today.

### 3.18 `EmptyState` — `.../src/components/EmptyState.tsx` — **NEW**
Shared empty-page module (Empty-Pages file `erREG2vwLzUF2QKTp5Uh6R`, e.g. 3178-24710; tone from VTO 15191-17856). Centred 32pt glyph in **pure `#000000`** (not soft ink — Figma), the "Your X is empty" line (`fonts.regular 16 / lineHeight 23 / black`, centred, `marginTop space.lg`), an optional full-width DS `primary` Button (omit `onCta` to render without one — the empty bag has none), then always a **"Recently viewed"** horizontal `ProductCard` rail (8 cards) — never a recommendation title.

### 3.19 `FreeDeliveryBanner` — `.../src/components/FreeDeliveryBanner.tsx` — **NEW**
Figma `BBz64OeCbe5TBmYKbCxvCp` 38-35751 / 38-36504. Below threshold: "Spend **£X** more for free delivery" (`fonts.light 14 black`, amount `fonts.bold`) + a 4pt `r100` track (`grey2`) with `dark3` fill at `min(100, subtotal/threshold*100)%`. At threshold: `ds-tick-circle-fill @20` in `dark3` + "Congratulations, you're eligible for free delivery". Threshold in the prototype = **£30** (`bag/index.tsx:31`).

### 3.20 `Bnpl` — `.../src/components/Bnpl.tsx` — **NEW**
DS 2969-10048; its own box on the PDP, separate from the USP box. Collapsed: four provider chips in a row + "18+, T&C apply. Credit subject to status" (`fonts.light 12 grey5`) + "See more". Expanded: one row per provider — chip, terms with the amount in `semibold`, "Learn more" — then "See less". Amounts derive from price: Pay+ "Pay £0 today", Klarna 3×`price/3`, Clearpay 4×`price/4`, PayPal 3×`price/3`.
```ts
box:  { backgroundColor: t.colors.backgroundWhite, borderWidth: 1, borderColor: t.colors.grey2,
        borderRadius: t.radius.xs, padding: t.space.lg },
chip: { width: 32, height: 22, borderRadius: 3, overflow: 'hidden' },   // chipRow gap 4
chipPayPlus:  { backgroundColor: '#003B61' },
chipKlarna:   { backgroundColor: '#FFB1D2' },
chipClearpay: { backgroundColor: '#B2FCE3' },
chipPaypal:   { backgroundColor: t.colors.white, borderWidth: hairline, borderColor: t.colors.grey2 },
terms: { fontFamily: t.fonts.light, fontSize: 14, color: t.colors.black },
termsStrong: { fontFamily: t.fonts.semibold },
link: { fontFamily: t.fonts.light, fontSize: 14, color: t.colors.black },
```
Chip internals are the frame's own exported SVGs from `paymentAssets.ts`, never redrawn.

### 3.21 `PaymentButton` — `.../src/components/PaymentButton.tsx` — **NEW**
DS 9144-1931, internals are the frame's exported artwork. Types: `paypal, paypalPayLater, applePay, applePayLong, googlePay, googlePayLong, klarna, klarnaMini, clearpay, clearpayMini`. `variant: yellow | silver | white | black`. DS fills `[default, pressed, border?]`:
```ts
yellow: ['#FFC439','#F2BA36'],  silver: ['#F2F2F2','#E7E7E7'],
white:  ['#FFFFFF','#F2F2F2','#000000'],  black: ['#000000','#323232'],
klarna: ['#0B051D','#0B051D'],  clearpay: ['#B2FCE4','#B2FCE4'],
googleWhite: ['#FFFFFF','#F2F2F2','#3C4043'],
```
Geometry: `height 50, borderRadius 4, overflow hidden`; full types `alignSelf: stretch`, mini types fixed `width 114`. `glass` prop changes **only the container** — `borderRadius 25` + `BlurView intensity 40 tint dark` + the same fill at `D1` alpha; internals unchanged. "Pay with" label uses the platform system face at `500 / 15px` (stands in for Helvetica Neue Medium / SF Compact).

### 3.22 `SeelBanner` / `SeelCheckoutRow` / `DeliverPlusModule` / `DeliverPlusLockup` — **NEW**
Source: SEEL-Enhancements-2026 (`CQIe2e2c0iagD1T9WjdYsx`) — PLT 1529-25614 · Debenhams 1529-19111 · boohooMAN 1529-24199 · boohoo 1529-24680 · KM 164-23448, plus matching checkout banners.

`SeelBanner` shared geometry: `px 20, py 16, radius radius.xs, column gap 12`, lockup at natural size, ticks 16pt with 8 gaps, lines 12pt, "Learn more" 14/18.2. Three shared tick lines (`SEEL_LINES`): "+14-day return extension" / "£5/day late delivery compensation" / "Full order coverage (lost, stolen, damaged) with instant payout on eligible claims". KM replaces the tick list with a two-line **pitch**. `checkout` variant adds a **24pt brand checkbox** (`gap 24`, `borderRadius: brand==='plt' ? 0 : 3`) and prices the headline ("… for £X."); brands with no headline (Debenhams, MAN) get "Add Deliver+ for £X." KM's fill is a left-to-right black gradient via `expo-linear-gradient`.

`DeliverPlusModule` (bag banner, Debenhams 1529-19299 pulled in full): header band in the brand's Deliver+ colour with the lockup (PLT also puts its headline inside the band via `bandHeadline`); white body `padding 16, gap 12` with **six** benefit rows — 48pt white circle (`shadow 0 0 7 / 18%`) holding a 24pt icon, `semibold 14/17` title, `light 12/16` sub; footer "Powered by [Seel logo 26×16]" centred, `light 12/17 #595959`. PLT's frame omits the Holiday prize row (`noHolidayRow`). Benefits: 35-day extended returns · Win a Holiday worth £15k · £5/day late delivery compensation · Lost & stolen cover · Instant support · 48hr payout policy (drawn as circular-arrows artwork with "48" set inside at `bold 10`).

`DeliverPlusLockup` — per-brand exact artwork at natural frame size, `scale` prop shrinks proportionally: PLT unicorn+letters+DELIVER+ composite 113.07×40 black · Debenhams wordmark 142.16×20.31 over DELIVER+ 64.66×5.6 (SEEL green `#1A847D`) in a 30-tall frame · boohoo PNG 200×19 · boohooMAN 121.28×15 in `#01FE8A` · KM white wordmark 134×10.88 + 5.08 gap + DELIVER+ 99.51×18.47.

### 3.23 `BrandLogo` / `PLTLogo` — **NEW**
`BrandLogo({ height = 24, color })` swaps the wordmark with the brand; `CLAUDE.md` mandates never using `PLTLogo` directly. PLT is a dense hand-tuned vector (`PLTLogo.tsx`, viewBox 454×104); the other four are supplied SVG exports rendered via `SvgXml` with `{C}` swapped for `colors.ink`. Optical balancing: `PLT_RATIO = 454/104`, `MAX_WIDTH_FACTOR = 1.15`, per-brand `scale` — Debenhams 0.58, boohoo 0.62, boohooMAN 0.42, KM 0.40 — then `h = min(height * scale, maxWidth / ratio)` so a long lockup can't outgrow PLT's footprint.

### 3.24 `PLTIcon` + `dsIcons` — **EXISTS, differs materially**
`PLTIcon({ name, size = 20, color = colors.ink, weight: 'regular' | 'nav', exact })`.
- **41 local glyphs** in `GLYPHS`: `acc-address, acc-balance, acc-chat, acc-crown, acc-hanger, acc-order, acc-person, account, account-active, back, bag, check, chevron-{up,down,left,right}, filter, menu, notify, plus, search, tab-account-plt, tab-bag, tab-home-plt, tab-shop, tab-wishlist, wishlist, wishlist-active, xmark, dp-{calendar,compensation,cover,plane,resale,support}, ds-wishlist-fill, ds-bookmark-fill, grp-{home,search,bag,wishlist,bookmark,account}`.
- **124 DS core glyphs** in `dsIcons.ts` (frame 470-935), generated — never hand-edit.
- `DS_ALIAS` (`PLTIcon.tsx:76-109`) maps a semantic name to the DS glyph for **every brand except PLT**, so call sites just ask for `chevron-right` and get PLT's or the DS one.
- `DS_SIZE_FACTOR = 0.86` — DS glyphs are normalised to fill their canvas while PLT's carry internal padding, so DS icons are optically stepped down (unless `exact`).
- `DS_STROKE_PT = { regular: 1.15, nav: 1.6 }` — 105 of the 124 DS glyphs ship with **no** `stroke-width`, so the component solves back for the attribute that lands on the target point weight: `sw = (DS_STROKE_PT[weight] * 24) / (drawn * innerScale)` and writes it on the root to inherit. PLT's own glyphs are deliberately **not** normalised.
- XML is cached per `name|color|alias` because `SvgXml` re-parses on every render and the tab bar re-renders on scroll.

### 3.25 `ContentArea` — `.../src/components/ContentArea.tsx` — **NEW** (dev)
`format: 'continuous' | 'snap-story'`, `pagination: 'dots' | 'counter'`, driven `scrollY`. Continuous: 420pt hero → "New In" horizontal `ProductCard` rail (6) → "Trending" 2-col grid (`gap 1`, cells `49.8%`). Snap-story: `pagingEnabled` full-viewport panels of the active brand's own campaign artwork with a "LOOK 01" caption; pagination either a 6pt dot row (`rgba(255,255,255,0.5)` → `paper` active) at `insets.top + 12`, or an "N / total" counter at `insets.bottom + 96`.

### 3.26 `BrandHome` — `.../src/components/BrandHome.tsx` — **CMS-driven; roundels EXISTS, rest NEW**
Renders the brand's own scraped homepage blocks in the site's order; unhandled types are skipped rather than guessed at. Slices are separated by `style.blockGap` (PLT 0, others 2). Block types (`PltHomeBlock`, `src/data/plt.ts:320-327`):
- **`hero`** — full-width image at **its own mobile asset's ratio** (`ratioOf`, fallback `750/1186`), optional stacked CTA pills bottom-left (`paper` fill, `44pt`, `radius.pill`, `paddingHorizontal space.xl`, label `fonts.bold 14 ink`).
- **`heroCarousel`** — `pagingEnabled` horizontal slides, each at its own ratio.
- **`ctaRail`** — two shapes decided by the asset: if every item is square it renders the **DS Roundels Strip** (8469-2351 / 8469-2307) — `108×108 r54` circles, `gap 4`, `padding space.lg`, a `rgba(0,0,0,0.3)` scrim, and the label written **on** the image in `Antonio_700Bold 22/22` with `includeFontPadding: false` so it centres exactly in the circle (image-only variant when the artwork already carries its own text, `it.overlaid`). Otherwise a card rail whose width is `SCREEN_W / clamp(perView, 1.5, 4)` with a `text.caption` label underneath.
- **`productRail`** — `SectionHeader` + horizontal `ProductCard` rail (10), resolved from this brand's catalogue by slug.
- **`text`** — `text.body` in `stone`.
- **`wishlistRail`** — returns `null` (no wishlist state yet).

### 3.27 `PersonaSwitcher` (hidden Prototype settings) — **NEW** (dev)
Opened by tapping the brand logo on Home; gated on `SHOW_DEV_CONTROLS` (`src/config.ts`). A `BottomSheet title="Prototype settings"` with: a **Springboard-style brand grid** — 5 live App Store icons at 56×56 r12 (≈19% not the true 22.5%, to read as a squircle), `shadow.card`, a hairline `glassBorder` rim, a 2px `cta` focus ring on the active brand, brand name below (`12/16`, bold+ink when active) and a "no data" note for brands borrowing PLT's catalogue; a **COMPONENT LIBRARY** row → `/(dev)/components`; **TAB BAR LAYOUT** (Option 1 "Logo centred top" / Option 2 "Logo left, notifications top right"); **TAB BAR BEHAVIOUR** switches for "Shrinking tab bar" (on = custom bar, off = native glass) and "USP banner pinned". Every tap applies and auto-closes. The Ruby/Freya/Patricia **profile picker is parked** — hidden rather than deleted (`:77-78`).

### 3.28 `ChromeSwitcher` — **NEW** (dev, orphaned)
Layers FAB (`left 0, bottom 134`, 52pt glass) + sheet listing the six chrome presets; each pushes `/chrome-variants/<id>`. **No call site renders it** — reachable only if wired back in. Still imports the legacy PLT-only `colors`/`text` from tokens rather than `useTheme()`.

### 3.29 Header / nav / scroll pattern audit — summary of `header-nav-scroll-pattern-audit.md`
Benchmarked apps: **eBay (iOS + Android), ASOS, M&S, MESHKI, Bershka, Zara SRPLS, boa.** (plus one unattributed PDP crop). It names **six header-animation patterns** and is the direct source for `AppHeader`, `TabBar`, `ContentArea` and `chromeVariants.ts`:

- **A — Pinned Rich Header** (eBay My eBay iOS): avatar + name + "Member since" + cart stays fixed; tiles and rows scroll away underneath. For profile/account hubs.
- **B — Pinned Title-Only Header** (eBay My eBay Android, eBay Live): a deliberately lightweight title + 1–2 trailing icons pins; the *heavier* block just below (avatar card, chip row) is treated as ordinary content and scrolls away for good.
- **C — Always-Pinned Minimal Icon Toolbar** (eBay PDP, Basket): back/search/cart/share/more identical at every scroll depth (confirmed across ~8 screenshots); whole body scrolls under it. For transactional/detail pages.
- **D — Icon → Full Bar Expansion** (M&S Home): a single magnifier over the transparent hero *expands into a full "Search for products" pill* once the hero has passed and the bg turns solid — the reverse of the expected behaviour.
- **E — Persistent Search + Optional Sticky Sub-row** (eBay results vs ASOS Home): both pin row 1 (search + icons); row 2 differs — eBay's filter chips stay pinned (two-row sticky header), ASOS's segmented tabs scroll away. **Key takeaway: whether row 2 is sticky is a deliberate, isolated decision — expose it as a boolean, not baked into the header variant** (implemented as `subRowSticky`).
- **F — Chrome-less Immersive Hero + Floating Pill Nav** (Bershka, Zara SRPLS, boa.): zero header chrome, any wordmark is *content* not UI; bottom nav is a floating icon-only pill or a thin text-only bar, never a solid opaque bar, and it never animates. A thin promo ribbon can pin above the status bar; a category strip scrolls almost fully out leaving a sliver.

Also in the doc: an **icon-placement matrix** (eBay and MESHKI are the only two keeping bag/cart in the *header*; everyone else puts it in bottom nav; Bershka/Zara/boa. push *everything*, search included, into the bottom nav); a **tab-bar style table** (labeled fixed 5-item with an active pill / 4-item with an underline / floating icon-only pill / text-only bar with a centre logotype); and **two content-scroll formats** — continuous "feed" (eBay, ASOS, M&S, MESHKI) vs full-bleed snap "stories"/lookbook (Bershka dot progress bar, Zara numeric look counter), described as "closer to a lookbook slideshow than a shoppable homepage". §5 is a full eBay-derived route map/sitemap. §6 is a ready-to-paste build prompt specifying the exact component APIs (`<AppHeader variant>`, `<TabBar variant items>`, a plain search/bag/wishlist/account placement settings object, `<ContentArea format paginationStyle>`, a `<ChromeSwitcher>` with a 390×844 phone-frame preview) — that prompt is what `src/data/chromeVariants.ts` implements as six presets: **eBay** (pinned-title + labeled-fixed + continuous), **ASOS** (search-plus-subrow, `subRowSticky: false` + floating-pill-icon + continuous), **M&S** (icon-to-bar + labeled-fixed + continuous), **MESHKI** (full-bar, `bagInHeader: true` + labeled-fixed-4item + continuous), **Bershka** (chromeless + ribbon + floating-pill-icon + snap-story/dots), **boa.** (chromeless + text-only + snap-story/counter).

---

## 4. SCREENS

Routing rule (`CLAUDE.md`, `src/navigation.ts`): **every tab is its own Stack, and the PLP and PDP exist inside each one**, so the real tab bar stays visible and back is historical. `PlpScreen`/`ProductScreen` live in `src/screens/` and the 10 files under the tabs are one-line re-exports. `(home)` is a route *group* (transparent in URLs: `/plp`), other tabs are namespaced (`/shop/plp`). Screens never build route strings — they use `useAppNav()` (`openPlp`, `openProduct`, `openTab`).

| Route | File | Composes |
|---|---|---|
| Root layout | `app/_layout.tsx` | Font loading (18 faces + Antonio), `BrandProvider → BagProvider → PersonaProvider → PrototypeSettingsProvider → ChromeProvider`, `Stack` with per-route animations (`product/[id]`, `bag-view`, `checkout` slide-from-right; `search-view` 150ms fade) |
| Tabs layout | `app/(tabs)/_layout.tsx` | `NativeTabsLayout` **or** `FloatingTabBar` (5 tabs + hidden search) |
| **Home** | `app/(tabs)/(home)/index.tsx` | `UspBar` (pinned above header w/ status-bar colour, or inline in the feed), collapsing transparent header — `BrandLogo` (tap = dev settings, hit area padded ±14/28 without moving the glyph) + glass icon buttons w/ badges + a **docking glass search capsule** (binary spring `damping 26 stiffness 420`, never parks mid-way; rises `rowH + 2 - (rowH-searchH)/2` to land dead-centre on the 48pt header row and insets left/right to clear the buttons), `BrandHome` (all CMS blocks), `PersonaSwitcher`. Header height = `insets.top + stripH + 8 + 48 + 8 + 48 + space.sm`. Layout options: `option1` logo centred / `option2` logo left + notify (badge 5) |
| **PLP** | `src/screens/PlpScreen.tsx` (+ 6 re-exports: `(home)/plp`, `shop/plp`, `bag/plp`, `search/plp`, `wishlist/plp`, `me/plp`) | Flush 2-col `ProductCard fluid` grid (`gap layout.gridGap = 1`), 1:1 campaign banner after 30 rows, `LOAD MORE` (24/page, 50pt outlined `fog`), floating **category tab strip** (blur 50 + `glassSolid` fill ending in a hard hairline; slides `translateY 0 → -48` on scroll-down, back on scroll-up, thresholds ±4px / reset under y<60; title fades with it), `NavBar` (back left, filter right, centred title), `SortSheet`, `PriceSheet`, `FilterDrawer`. Tabs are the menu section's own links (deduped, max 12) and swap the category **in place** via `router.setParams` — no PLP stacking. Client-side filtering by colour/brand/size/priceBand/style; sorting for 6 options; `resultCount` = min(site total, smallest selected facet count) |
| **PDP** | `src/screens/ProductScreen.tsx` (+ 6 re-exports) | Gallery (`GALLERY_W = width - 48` so the next image peeks, `snapToInterval GALLERY_W+1`, 2:3), glass "N VIEWED TODAY" badge (drifts in from `translateX -30` after 3s, spring damping 18/stiffness 140), glass **wishlist count pill** (44pt; the *only* wishlist control — no second button below the image; heart pops `1 → 1.45` over 90ms then springs back), title block (brand line on non-PLT, `semibold 20/26` title, `semibold 22/30 danger` price, struck `regular 16` was, `danger` savings pill, "Final Sale", promo row w/ pricetag icon, live NDD countdown row), colourway image swatches (44×58, `borderWidth 2 ink` when current — switches the variant **in place**), `SizeSelector`, low-stock line (≤5), model line, CTA stack (`Button primary` + `PaymentButton paypal/yellow` + `applePay/black`, `gap 8`, measured via `onLayout`), USP box (DS 3619-10541: `ds-delivery`/`ds-order`/`ds-time` @24 + `light 14/18 black` title + `light 12/15 grey5` sub, `grey2` hairline box), `SeelBanner`, `Bnpl`, "Handpicked For You" 3-col grid (`gap 1`), 4 `Accordion`s (DESCRIPTION open by default, PRODUCT DETAILS & CARE, DELIVERY, RETURNS), "We Think You'll Like" + "Recently Viewed" rails, centred "Recommendations" link cloud. Floating chrome: 46pt glass back + share pucks, **VTO glass button** (46pt r23, brand `ctaGlass` fill over `BlurView 40 dark`, 80pt shimmer band sweeping every ~2.7s, fades+drifts away past the gallery), **floating Add-to-bag glass pill** (52pt r26, `ctaGlass`, appears when the inline CTA is >160px off-screen or not yet reached, sits `TAB_BAR_CLEARANCE 76 - 14` above the bar) |
| **Shop L1** | `app/(tabs)/shop/index.tsx` | Sticky glass search capsule (48pt, magnifier left, camera right), all-caps section rows (`fonts.medium 16 ink` + chevron; **Debenhams only** adds a 44pt circular roundel), 3-tile 3:4 content strip from the brand's own CMS artwork |
| **Shop L2** | `app/(tabs)/shop/[section].tsx` | `NavBar` (back + centred section title), flat link list (`regular 16 ink`, `py space.md`), grouped lists with hairline dividers + `regular 14 stone` headings, 420pt campaign card with `captionBold paper` label. Links resolve to real category slugs, falling back to the section's own category |
| **Search** | `app/(tabs)/search/index.tsx` (+ `app/search-view.tsx` re-export for the pushed variant) | Autofocus glass capsule (48pt, identical to the page bars so the fade reads as a morph) + "Cancel" link; bar settles `translateY 10 → 0` while content fades in; recent rows (clock icon + "Recent" sub + 45°-rotated arrow), suggestion rows (real PLPs matching the query), recs rail titled "PRODUCTS MATCHING "q"" or "RECOMMENDED FOR YOU" |
| **Bag** | `app/(tabs)/bag/index.tsx` (+ `app/bag-view.tsx` pushed variant with a floating glass back button) | `UspBar` (pinned, promo override), "Your Bag (N)" `text.h1`, `FreeDeliveryBanner`, line items (72×108 image, title, size/colour, `bodyBold danger` price + struck was, "Move to Wishlist", qty stepper where **minus becomes a remove/trash at qty 1**, DS `ds-minus`/`ds-delete` on non-PLT), `EmptyState` when empty, `DeliverPlusModule` (full bleed), "We Think You'll Like" + "Recently Viewed" rails, Promo Code input + Apply, Order Summary (Subtotal / Delivery FREE-or-£2.99 / "{brand} Deliver+ optional add-on £2.99" / Discounts in `cta` / Order Total), floating action stack — full-width "CHECKOUT WITH DELIVER+" glass pill then Apple Pay (glass) + "CHECKOUT" 50/50, all 52pt r26 `ctaGlass` |
| **Wishlist** | `app/(tabs)/wishlist/index.tsx` | `text.h1 "Wishlist"` + "Save your favourites", flush 2-col `FlatList` of `ProductCard fluid wishlisted` (`gap 1`); un-hearting removes the card with `LayoutAnimation.Presets.easeInEaseOut`; `EmptyState icon="wishlist"` when empty; **wishlists are per fascia** — a brand switch restarts that brand's list |
| **Account** | `app/(tabs)/me/index.tsx` | Greeting ("Good Morning, Jake" + "{loyaltyName} member since 2023"), **balance band** in the brand's rewards colour with text flipped by `lightnessOf` (label `medium 14`, amount `bold 44` with `24` pence, 3 shadowed stat cards — RETURN RATE 8% / ORDERS 12 / {LOYALTY} ACTIVE), grouped rows from `theme.account` (48pt shadowed circular icon puck, `bodyLg` label, black `ACTIVE` pill, black 24pt count bubble, row height 64, `bold 20` group headings), "Sign Out" pill, `NavBar` with notify icon + badge 5. Band is full-bleed on PLT, inset `space.lg` elsewhere |
| **Checkout** | `app/checkout.tsx` | Secure header (back + `BrandLogo 18` + lock + "SECURE CHECKOUT"), collapsible bag summary + mini item + "Add Promo Code" + Apple Pay, Delivery section (arrival date, Super Saver £0.49 vs struck £2.99, address, Change links, **Worry-Free Purchase®** checkbox £3.18), `SeelCheckoutRow` (£2.99), Donation round-up, Payment section (promo input + Apply, Redeem Gift Card, Redeem Account Balance £12.00, Apple Pay, Change Payment Method, Billing Address checkbox), Order Summary, consent small print. Sections separated by an **8pt `cream` bottom border**. ⚠️ This screen still imports the legacy PLT-only `colors`/`fonts`/`text` from tokens instead of `useTheme()` — **it does not re-theme with the brand** |
| Dev: component library | `app/(dev)/components.tsx` | Floating brand app-icon tab row + `NavBar "COMPONENTS"`. Sections: Active theme (BrandLogo + font/radius/gap/catalogue counts + the DS colour collection in the DS's own groups — brand ramp 12, neutrals 12, system 7), Type scale (10 rows + the resolved face name, plus the Antonio roundel label), Buttons (6 types × default/disabled/loading + 4 icon variants), Payment buttons (13), SEEL/Deliver+, Controls (Chips, FilterPills, Switch, glass pucks), USP bar, Section header, List rows, **Product card ×4** (brand default / every slot on / image only / list row), Tab bar, Sheets, Icons in use (23), Icons — DS core library (124) |
| Dev: chrome variants | `app/(dev)/chrome-variants/[id].tsx` | `ContentArea` + `AppHeader` + `TabBar` from one preset + a dev back/label overlay |
| Dev: Seel preview | `app/(dev)/seel-preview.tsx` | One Deliver+ surface at the top of the viewport for screenshot-diffing against Figma per brand: `?brand=plt&show=banner|module|checkout` (banner frame 358 wide, module 388) |

**No onboarding screen exists.** There is no login/register, no order confirmation, no PDP size-guide sheet, no breadcrumb and no footer.

---

## 5. Signed-off / canonical / source-of-truth vs WIP

**Signed off / canonical**
- `brands.ts:412` — *"PLT's card as built and signed off: no brand line, promo code line on."* — `PLT_CARD` is the only slot config explicitly marked signed off.
- **PLT and Debenhams colour ramps are "Exact"** from full DS Colour Palette pages (nodes 11904-2395 and 11241-47116) — `brands.ts:576`, `:610`.
- boohoo / boohooMAN / Karen Millen ramps are marked **"Exact"** for the values the Button frames expose (12681-158104 / -158242 / -158380), with the gaps flagged inline.
- `BrandColours` is deliberately a **one-for-one mirror of the DS colour collection using the DS's own variable names**, so any value can be checked against Figma without translation. Semantic aliases are *derived in `makePalette`, never authored per brand* — treat `makePalette` as the canonical alias mapping.
- `BagContext` is the app's declared **"one source of truth"** for the bag (tab badge, header count, line items cannot disagree).
- `dsIcons.ts` is **GENERATED — "Don't hand-edit: re-export the frame and re-run the script."** Same for `src/data/catalogue/**` including `index.generated.ts`.
- Layout invariants stated as rules in `CLAUDE.md`: listings identical for every brand (full-bleed, 1px hairline, square cells — never inset a PLP or round a grid cell); brand rounding is **4px, controls and surfaces only** — "There is no other radius: no 8px, no pill"; type never below 12; colours only via `useTheme().colors`, never hard-coded hex in screens; never import `colors`/`text` from tokens in new work; never hard-code a category slug; never render a second tab bar.
- `app/(dev)/components.tsx` is the declared **reference for nuancing a brand** — new components must be added to it.

**WIP / provisional / draft**
- **18 colour values flagged `// PROVISIONAL`** in `brands.ts` — boohoo `dark3, light1-3, grey05, red`; boohooMAN `light1-3, grey05, red`; KM `dark3, light1-3, grey05, red`. `CLAUDE.md:71`: replace their `core` blocks from their own Colour Palette frames.
- `README.md`/`CLAUDE.md` still describe PLT colours as "PROVISIONAL in tokens.ts" and icons as "Ionicons placeholders" — **both statements are stale**: the palette now comes from the DS and only a handful of Ionicons survive (`FilterPill` icon prop, PDP share/pricetag/time, Bag qty on PLT, Search clock/camera/close, Account info icon, `ListRow`).
- `brands.ts:610` — *"(aqua palette; **confirm** it's Debenhams)"` — unverified attribution.
- `GEOLOGICA` regular at 300 Light is **explicitly flagged**: "300 at 12-14px is borderline for sustained reading".
- Debenhams has **no scrape yet** — it falls back to PLT's catalogue (`hasOwnCatalogue()`); boohoo is missing 18 product shards (`manifest.incompleteScrape`, SCRAPER-BRIEF §8).
- Product data is a **31 Jul snapshot**: prices/stock frozen, PLPs hold the top 48 of a longer list, facet counts are site-wide so a filtered count can read higher than what's on screen.
- Card states are **hard-coded from Figma pending scrape**: heart-vs-bookmark, action button size/shape, swatch imagery, per-product PDP USPs, ratings on tiles, colourway→product-id linkage (SCRAPER-BRIEF §1, §2, §7 — priority order lists these first).
- `ProductCard` swatch fills are a **43-entry colour-name→hex map**, a stand-in for real swatch imagery.
- `EmptyState`'s "Recently viewed" rail is the product pool as a **stand-in** for real browsing history.
- `BrandHome` `wishlistRail` returns `null` — "no wishlist state in the prototype yet".
- Persona system (Ruby / Freya / Patricia) is **parked**: `personas.ts` + `PersonaContext` exist and `Search` still reads `persona.pickedTags`, but the picker is hidden — *"everyone gets the same experience for now, so the picker is hidden rather than deleted"*.
- **Dead / superseded code**: `src/components/home2/Home2.tsx` (1,149 ln) + `src/data/home2.ts` (340 ln) — the earlier "Homepage 2.0 wireframe" with 19 module kinds (hero, roundels, brandTiles, collectionShowcase, socialGrid, quiz, collections, influencer, ugc, **categoryWheel**, **pillMarquee**, promo, bundle, **countdown**, **beforeAfter** drag slider, **scratch**-to-reveal, wishlistRail, editorial, rituals) — has **no call site**, uses hardcoded PLT-only tokens, and describes its imagery as "wireframe-grey until content is populated". Worth mining for interaction ideas (auto-marquee pill rows, 120pt-row rotating category wheel, ticking countdown, before/after PanResponder slider, drag-to-scratch reward reveal) but not a source of truth. `ChromeSwitcher.tsx` is also orphaned.
- `SHOW_DEV_CONTROLS = true` in `src/config.ts` — must be flipped to `false` for stakeholder builds (gates `PersonaSwitcher` and `ChromeSwitcher`).
- `app/checkout.tsx` and `app/(tabs)/_layout.tsx`'s styles are not yet migrated to `useStyles`/`useTheme` — they read the PLT token re-exports, which `tokens.ts:1-6` marks as *"kept only for modules not yet converted to the hook… these will go once the last screens are migrated."*
- Unused: `SizeSelector`'s `onSizeGuide` is never wired; `ProductScreen` carries dead `sizeBox*`/`ctaPaypal`/`ctaApplePay` styles superseded by `SizeSelector`/`PaymentButton`; `FilterPill` and `ListRow` only appear in the dev library; `deliveryBanner()` in `plt.ts` is exported but unread.