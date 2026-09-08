# Component inventory — 04-brandroom-badge-scraper-request

_Agent report, 08 Sep 2026, from a full read of the cloned repo(s). Line refs are to the repo files at that date. Raw record — the consolidated catalogue is `.context/18-component-inventory.md`._

# UI Component Inventory — 4 Repos → Group Design System

Scope: `scratchpad/repos/{THEBRANDROOM, ai-generated-badge, debenhams-design-system-scraper, UX-Design-Request}`. I also read the target DS (`repos/Group-Design-System/css/{tokens,components}.css`) to make NEW/EXISTS calls precise — that file confirms existing DS coverage of buttons, payment buttons, product card (actions/tag/swatches), size selector, USP box, USP banner, free-delivery threshold banner, SEEL/Deliver+, BNPL box, roundels strip, section header + rails, account rows, empty state, and the 5 fascia token blocks (`plt`, `debenhams`, `boohoo`, `boohooman`, `karenmillen`).

**Headline:** The Brand Room is a **6th fascia** (square radius, Archivo, uppercase labels) and contributes ~20 genuinely new components — chiefly a full navigation system (header + 2-level drawer), editorial/content slices (hero carousel, blog cards, social scroller, brand/category square rails), a complete PDP (gallery, accordions, size grid) and a complete bag (item card, seller groups, order summary, promo code). `ai-generated-badge` is a proposal deck, not code: the AI badge exists in the DS but the proposal **materially changes it** (full-width bottom strip, not a corner badge, with stacking rules). The scraper contributes no product components but does contribute a manifest/token/site-map schema and one real captured Debenhams token set. `UX-Design-Request` contributes a full internal-tools form kit (stepper, chips, radio cards, toast, scope badges) — all new.

---

## 1. Summary table

| # | Component | Repo | File:line | New to DS? | Fascias |
|---|---|---|---|---|---|
| 1 | Header / app bar (56px, hamburger·logo·search·bag) | THEBRANDROOM | `components/Header.tsx:18` | **NEW** | TBR only |
| 2 | Bag count badge (icon superscript) | THEBRANDROOM | `components/Header.tsx:69` | **NEW** | TBR only |
| 3 | Menu drawer L1 → L2 (full-screen, slide) | THEBRANDROOM | `components/Menu.tsx:335` | **NEW** | TBR only |
| 4 | Menu account box (Account/Wishlist/Orders) | THEBRANDROOM | `components/Menu.tsx:428` | **NEW** | TBR only |
| 5 | Menu brand-category image slot | THEBRANDROOM | `components/Menu.tsx:493` | **NEW** (≈PLP content slot) | TBR only |
| 6 | Footer (newsletter + social + accordions + payments) | THEBRANDROOM | `components/Footer.tsx:56` | EXISTS — material diff | TBR only |
| 7 | Newsletter signup (input + full-width CTA) | THEBRANDROOM | `components/Footer.tsx:73` | **NEW** | TBR only |
| 8 | Footer accordion row + divider | THEBRANDROOM | `components/Footer.tsx:107` | **NEW** | TBR only |
| 9 | Payment tile strip (flex 1-0-0, 30.46:21.19) | THEBRANDROOM | `components/Footer.tsx:150` | **NEW** (assets exist) | TBR only |
| 10 | USP banner (static black strip, sticky) | THEBRANDROOM | `components/UspBanner.tsx:10` | EXISTS — material diff | TBR only |
| 11 | Hero (image/video, gradient, pause) | THEBRANDROOM | `components/Hero.tsx:39` | **NEW** | TBR only |
| 12 | Secondary hero (static, 3-bar indicator) | THEBRANDROOM | `components/SecondaryHero.tsx:11` | **NEW** | TBR only |
| 13 | Image banner carousel (snap + timed bars) | THEBRANDROOM | `components/ImageBannerCarousel.tsx:60` | **NEW** | TBR only |
| 14 | Category tabs (segmented control, 4px radius) | THEBRANDROOM | `components/CategoryTabs.tsx:16` | **NEW** | TBR only |
| 15 | Brand / category square rail | THEBRANDROOM | `components/BrandSlider.tsx:36` | **NEW** (≠ round roundels) | TBR only |
| 16 | Section header + product rail | THEBRANDROOM | `components/ProductSection.tsx:31` | EXISTS | TBR only |
| 17 | Product card — default | THEBRANDROOM | `components/ProductCard.tsx:81` | EXISTS — material diff | TBR only |
| 18 | Product card — "launching soon" + countdown chip | THEBRANDROOM | `components/ProductCard.tsx:26` | **NEW** variant | TBR only |
| 19 | Product card — PLP (wishlist bookmark, was-price) | THEBRANDROOM | `app/plp/PLPContent.tsx:179` | EXISTS — material diff | TBR only |
| 20 | Content tile pair (1:1 + eyebrow + title) | THEBRANDROOM | `components/ContentSection.tsx:18` | EXISTS (content slot) — diff | TBR only |
| 21 | Banner + 2-product module | THEBRANDROOM | `components/ProductContentSection.tsx:17` | **NEW** | TBR only |
| 22 | Social scroller (250px squares + platform icon) | THEBRANDROOM | `components/SocialScroller.tsx:38` | **NEW** | TBR only |
| 23 | SEO text slice | THEBRANDROOM | `components/SeoTextSlice.tsx:8` | **NEW** | TBR only |
| 24 | Blog card + "Selected" rail | THEBRANDROOM | `components/BlogCard.tsx:20`, `SelectedBlogs.tsx:11` | **NEW** | TBR only |
| 25 | Animated variable-weight brand heading | THEBRANDROOM | `components/AnimatedBrandHeading.tsx:5` | **NEW** | TBR only |
| 26 | FadeIn / useInView motion primitives | THEBRANDROOM | `components/FadeIn.tsx:12`, `hooks/useInView.ts:5` | **NEW** | any |
| 27 | PLP header — 6 variants + deterministic selector | THEBRANDROOM | `components/PLPHeader.tsx:87`, selector `:13` | EXISTS — material diff | TBR only |
| 28 | Breadcrumb (slash-separated, 12px) | THEBRANDROOM | `components/PLPHeader.tsx:35` | EXISTS — material diff | TBR only |
| 29 | Category chip row (square, #f2f2f2) | THEBRANDROOM | `components/PLPHeader.tsx:66` | EXISTS — material diff | TBR only |
| 30 | Filter pill select (native `<select>`, 42px radius) | THEBRANDROOM | `app/plp/PLPContent.tsx:60` | EXISTS (sort&filter) — big diff | TBR only |
| 31 | Filter bar + "Clear all" | THEBRANDROOM | `app/plp/PLPContent.tsx:95` | EXISTS — material diff | TBR only |
| 32 | PLP mid-grid brand/category slot (1:1) | THEBRANDROOM | `app/plp/PLPContent.tsx:227` | EXISTS (PLP content slot) | TBR only |
| 33 | No-results / empty filter state | THEBRANDROOM | `app/plp/PLPContent.tsx:309` | EXISTS (empty state) | TBR only |
| 34 | PDP gallery (300×450 snap) + progress bar | THEBRANDROOM | `app/pdp/PDPContent.tsx:181`, `:196` | **NEW** | TBR only |
| 35 | PDP price block (24px extrabold + was) | THEBRANDROOM | `app/pdp/PDPContent.tsx:225` | EXISTS — diff | TBR only |
| 36 | Size selector grid (50px squares, OOS strike) | THEBRANDROOM | `app/pdp/PDPContent.tsx:258` | EXISTS — material diff | TBR only |
| 37 | PDP CTA stack (ATB / PayPal / Apple Pay) | THEBRANDROOM | `app/pdp/PDPContent.tsx:302` | EXISTS (buttons + payment) | TBR only |
| 38 | PDP accordion set (5 rows + dividers) | THEBRANDROOM | `app/pdp/PDPContent.tsx:350` | **NEW** | TBR only |
| 39 | USP box (icon + text rows on #fafafa) | THEBRANDROOM | `app/pdp/PDPContent.tsx:459` | EXISTS | TBR only |
| 40 | BNPL box (4 logo tiles + legal) | THEBRANDROOM | `app/pdp/PDPContent.tsx:481` | EXISTS | TBR only |
| 41 | Bag item card + qty stepper (trash/plus) | THEBRANDROOM | `app/bag/BagContent.tsx:77` | **NEW** | TBR only |
| 42 | Seller group "Delivered by X" | THEBRANDROOM | `app/bag/BagContent.tsx:140` | **NEW** | TBR only |
| 43 | Free-delivery threshold row (tick icon) | THEBRANDROOM | `app/bag/BagContent.tsx:248` | EXISTS — material diff | TBR only |
| 44 | Worry-Free Purchase® / seel module | THEBRANDROOM | `app/bag/BagContent.tsx:284` | EXISTS (SEEL) — diff | TBR only |
| 45 | Promo code field + Apply | THEBRANDROOM | `app/bag/BagContent.tsx:342` | **NEW** | TBR only |
| 46 | Order summary (rows, divider, total) | THEBRANDROOM | `app/bag/BagContent.tsx:365` | **NEW** | TBR only |
| 47 | Payment button stack (Klarna/PayPal/Pay Later) | THEBRANDROOM | `app/bag/BagContent.tsx:417` | EXISTS | TBR only |
| 48 | Empty bag state | THEBRANDROOM | `app/bag/BagContent.tsx:190` | EXISTS (empty state) | TBR only |
| 49 | Reco card (160px) | THEBRANDROOM | `app/bag/BagContent.tsx:165` | EXISTS (product card) | TBR only |
| 50 | Inline icon set (24 SVGs, 1px stroke #0f0f0f) | THEBRANDROOM | `Menu.tsx:13-59`, `BagContent.tsx:26-73` | EXISTS (icons lib) — diff | TBR only |
| 51 | **AI Generated strip badge** | ai-generated-badge | `index.html:304-337` (spec), `assets/cards-*.png` | EXISTS (AI badge) — **material diff** | PLT, boohoo, boohooMAN, KM, Debenhams |
| 52 | Badge stacking rule set (PLP) | ai-generated-badge | `index.html:330-338` | **NEW** (rule, not component) | all 5 |
| 53 | 1920×1080 deck stage / slide system | ai-generated-badge | `index.html:18-243` | **NEW** (internal tooling) | n/a |
| 54 | Manifest / tokens / site-map schema | scraper | `src/extract.js:124`, `content.js:203`, `products.js:170` | **NEW** (schema, not UI) | 5 fascias configured |
| 55 | Scraper tool UI (dark, cards/badges/tabs) | scraper | `public/style.css:1-345` | **NEW** — *recommend excluding* | n/a |
| 56 | Text input / textarea / date / select | UX-Design-Request | `index.html:97-125` | **NEW** | Debenhams-skinned |
| 57 | Chip (multi + single select, reveal-on-Other) | UX-Design-Request | `index.html:131-147`, JS `:581` | **NEW** | Debenhams-skinned |
| 58 | Radio card (24px dot) + Fit radio (`radio6`) | UX-Design-Request | `index.html:150-203` | **NEW** | Debenhams-skinned |
| 59 | Scope / priority badge (must/should/could/out) | UX-Design-Request | `index.html:205-217` | EXISTS (badges) — diff | Debenhams-skinned |
| 60 | Stepper / progress (dots + fill track) | UX-Design-Request | `index.html:42-73`, JS `:682` | **NEW** | Debenhams-skinned |
| 61 | Wizard card + step transition | UX-Design-Request | `index.html:76-90` | **NEW** | Debenhams-skinned |
| 62 | CTA button (50px) + text back-link | UX-Design-Request | `index.html:225-248` | EXISTS (button) — diff | Debenhams-skinned |
| 63 | Toast (success/error, actions) | UX-Design-Request | `index.html:318-354` | **NEW** | Debenhams-skinned |
| 64 | Review / Trello mock card + copy button | UX-Design-Request | `index.html:256-315` | **NEW** | n/a |

---

## 2. THEBRANDROOM (Next.js 16.1.6, React 19, Tailwind v4)

`CLAUDE.md` is not architecture docs — it is a **Figma-fidelity ruleset**: never guess a value, pull every colour/spacing/font/radius from Figma MCP, comment each file with its Figma node ID, and an icon policy (all icons live in `/public/icons/`, named `{name}-{size}.svg`, exported as the **container frame**, `stroke="currentColor"`, `stroke-width="1"` never scaled, no inline SVG in components). **The code violates its own icon rule** — Menu, Bag and Header inline their SVGs (`Menu.tsx:13-59`, `BagContent.tsx:26-73`) while `public/icons/` holds only `search.svg`, `hamburger.svg`, `bag.svg`, `pause.svg`. Porting to the DS icon library resolves this.

No `tailwind.config.*` exists — Tailwind v4 via `@tailwindcss/postcss`, all theme values are arbitrary values inline (`text-[12px]`, `bg-[#0f0f0f]`) plus CSS vars in `app/globals.css`. Every text node carries an inline `style={{ fontFamily: "var(--font-archivo), sans-serif", fontVariationSettings: "'wdth' 100" }}` (aliased `fs` / `fontStyle`) — ~200 occurrences. **This is the single biggest port task: replace with a `--font` token + a `.tbr-type` base class.**

Pages: `app/page.tsx` (home, server) → `HomeContent.tsx`; `app/plp/` (`PLPQuery` reads searchParams client-side because of `output: "export"`); `app/pdp/`; `app/bag/`. Data: `Product Data Master/` — 4,387 products, 4,277 PDP-enriched, 129 collections, 40 brands, scraped 2026-04-13; image pattern `https://mediahub.thebrandroom.com/{id}_{colour}_xl?qlt=70&w=480&h=720&dpr=1&fit=ctn`.

### 2.1 Header — NEW
`components/Header.tsx:18`. 56px tall, white, `z-10`, 16px side padding. Hamburger and search/bag are 20×20 hit areas (below 44px — accessibility gap); logo absolutely centred `left-1/2 -translate-x-1/2`, `min-w-[161px]`, 15px bold uppercase `#1e1e1e`. Right cluster `gap-[16px]`. Bag badge: 8px bold white on black, `rounded-full`, `min-w-[14px] h-[14px]`, offset `-top-[4px] -right-[4px]`.

```tsx
<header className="relative w-full h-[56px] shrink-0 bg-white z-10">
  <div className="absolute inset-0 flex items-center justify-between px-[16px]">
  <button className="flex items-center justify-center size-[20px]" aria-label="Open menu">
    <svg width="20" height="20" viewBox="0 0 19.3333 12.6667">
      <path d="M18.8333 6.33333H0.5M18.8333 12.1667H0.5M18.8333 0.5H0.5" stroke="#0f0f0f" strokeLinecap="round"/>
  <span className="font-bold text-[#1e1e1e] text-[15px] uppercase whitespace-nowrap">
  <span className="absolute -top-[4px] -right-[4px] bg-black text-white text-[8px] font-bold
    rounded-full min-w-[14px] h-[14px] flex items-center justify-center px-[2px]">{bagCount}</span>
```

### 2.2 Menu drawer — NEW
`components/Menu.tsx:335`. Two-level full-screen drawer (`width:100vw; height:100dvh`), backdrop `bg-black/50` with 300ms opacity, panel slides `-translate-x-full → translate-x-0`. L1/L2 slide horizontally using **`left` transitions, not transform** (deliberate: `overflow-y-auto` breaks under transform in WebKit, comment at `:395`). `displayedItem` lags `activeItem` by 300ms so L2 content survives the slide-out (`:312`). Body scroll locked while open (`:330`).

States/specs: header 56px — L1 shows wordmark 15px bold uppercase + close; L2 shows back chevron + label 16px semibold truncate + close (close is `size-[44px]`, `-mr-[14px]` to optically align). L1 rows `h-[50px] px-[16px]`, 14px medium, chevron-right only if the item has sections. L2: section heading `h-[44px]`, 14px semibold uppercase `tracking-[0.04em]`; items `h-[40px]`, 14px light; non-navigable items render as disabled `#9b9b9b`. 1px `#e7e7e7` rule between sections. Account box: `border border-[#e7e7e7]`, `pt-[14px] pb-[16px] px-[16px]`, gap 12, greeting 12px light `#6b6b6b`, three 32px rows. Brand slot: `height: min(calc(85vw - 32px), 308px)`, cover image + `bg-gradient-to-b from-transparent from-[35%] to-black/60`, 14px bold uppercase + 28px bold white, `p-[24px]`.

IA is data-driven (`MENU_DATA`, `Menu.tsx:71-299`): New In, Women, Men, Footwear, Accessories, Brands; each L2 has unnamed first section + Clothing / Footwear / Accessories / "Brands We Love"; Brands is alpha-bucketed A–F, G–I, J–S, T–Z. Handles are annotated with live product counts and remapped to populated parents.

### 2.3 Footer — EXISTS, material differences
`components/Footer.tsx:56`. `bg-[#f2f2f2]`, `gap-[32px]`, `py-[24px]`. Four blocks the DS footer does not have: newsletter (12px eyebrow + 21px bold "JOIN THE MAILING LIST" + 12px body; 50px white input, 14px light `#6b6b6b` placeholder; 50px `#0f0f0f` CTA, 16px bold white uppercase; 12px `#6b6b6b` legal), 6 social icons at 20px with `gap-[26px]`, three accordions (About / Help / Privacy & Legal; header `min-h-[32px]`, 14px semibold, 16px chevron `rotate-180` on open; **animated via `gridTemplateRows: 0fr → 1fr` 0.3s** — reusable pattern; links 14px `leading-[24px]`; 1px `#d4d4d4` rule between), payment tile row (9 PNGs, `flex-wrap gap-[8px]`, each `flex:1 0 0` with `aspectRatio: 30.46/21.19`, `rounded-[2.77px]`), then wordmark 18px bold `#1e1e1e` + 8px uppercase copyright.

```tsx
<footer className="bg-[#f2f2f2] flex flex-col gap-[32px] items-center py-[24px] w-full">
<input className="bg-white h-[50px] px-[16px] w-full font-light text-[14px] text-[#6b6b6b] outline-none"/>
<button className="bg-[#0f0f0f] h-[50px] flex items-center justify-center w-full">
<div style={{ display:"grid", gridTemplateRows: isOpen ? "1fr" : "0fr",
              transition:"grid-template-rows 0.3s ease" }}>
<img className="rounded-[2.77px] object-contain"
     style={{ flex:"1 0 0", aspectRatio:"30.46 / 21.19", minWidth:0, minHeight:0 }}/>
```

### 2.4 USP banner — EXISTS, material differences
`components/UspBanner.tsx:10`. Single black strip, `py-[12px] px-[16px]`, 12px regular white centred `whitespace-nowrap`, optional `sticky top-0 z-20`. No rotation, no countdown, no marquee — although `globals.css:47-58` defines an unused `usp-marquee` keyframe (30s linear, `translateX(-50%)`) for a duplicated-content marquee. DS version is a rotating strip with countdown; TBR is the simplest possible variant → port as a `static` variant.

### 2.5 Hero family — NEW
- **Hero** `Hero.tsx:39`: `aspect-[390/511]`, image **or** video (`autoPlay loop muted playsInline`), overlay `linear-gradient(to bottom, transparent 40.625%, rgba(0,0,0,0.6) 86.585%)`, text bottom-left `ml-[24px] mb-[24px] gap-[8px]`: brand 14px bold uppercase white + `<h1>` 32px bold **capitalize** white, `leading-[1]`. Entry animations `animate-hero-brand` (letter-spacing `0.12em → normal`, 0.7s, 0.45s delay) and `animate-hero-title` (0.75s, 0.65s delay). Video pause toggle `size-[44px]` bottom-right, 24px stroke-white icons.
- **SecondaryHero** `SecondaryHero.tsx:11`: `aspect-[390/512]`, `<h2>`, plus a static 3-bar indicator (`2px` tall; 30px white + two 50px `rgba(255,255,255,.3)`).
- **ImageBannerCarousel** `ImageBannerCarousel.tsx:60`: same 390/512 frame; snap-scroll image track (`snap-x snap-mandatory scrollbar-hide`) with **text and pagination outside the scroller** so they never move; auto-advance 4000ms; pagination bars `h-[2px] w-[50px]`, past = solid white, current = `fill-progress` keyframe animated to the interval, future = 30% white. Text re-mounts on index change (`key={activeIndex}`) to retrigger `animate-slide-text`.

### 2.6 Category tabs (segmented control) — NEW
`components/CategoryTabs.tsx:16`. The **only** rounded surface in the whole prototype besides filter pills: track `bg-[var(--grey-05,#fafafa)] p-[2px] rounded-[4px]`, thumb `bg-white rounded-[4px] px-[16px] py-[8px]`, label 14px bold uppercase; inactive `#b5b5b5`, hover `#6b6b6b`. Rendered inside `p-[16px]`.

### 2.7 Brand / category square rail — NEW (≠ roundels)
`components/BrandSlider.tsx:36`. `gap-px` horizontal scroller, tiles `w-[clamp(180px,55vw,230px)]`, `aspect-square`, `bg-[var(--grey-1,#f2f2f2)]` placeholder, label 12px semibold uppercase centred under, `px-4`. Section `gap-[40px]`, `pt-[40px]` (optional) `pb-[24px]`, `bgClassName` prop (home uses `bg-[#fafafa]` for brands, white for categories). Stagger on scroll via `useInView(0.1)` + `transitionDelay: i*55ms`, 0.55s `cubic-bezier(.25,.46,.45,.94)`, `translateY(16px)→0`. DS roundels are circular — this is a square-tile sibling.

### 2.8 Section header + product rail — EXISTS
`components/ProductSection.tsx:31`. `py-[24px]`, header `px-[24px]` with `<h2>` 20px bold uppercase and a 12px `#6b6b6b` text-only action ("View All"); rail `gap-px` scroller with per-card stagger (`i*60ms`, `translateY(18px)`). `variant="launching-soon"` adds `pl-[24px]`.

### 2.9 Product cards — EXISTS with material differences
`components/ProductCard.tsx`. **Default** (`:81`): `w-[clamp(168px,43vw,200px)]`, image `aspect-[170/255]`, `gap-[12px]`, info `px-[12px] gap-[8px]`; brand 12px semibold **uppercase truncate**, name 12px regular `tracking-[0.1px] line-clamp-2`, price 12px semibold; all `leading-none`. **Launching-soon** (`:26`): `w-[clamp(180px,59vw,230px)]`, image `aspect-[200/300]`, and a countdown lockup at `left-[8px] top-[8px]` — a 25×25 black `backdrop-blur-[10px]` square with 12px semibold white day, shadow `0 0 21px rgba(0,0,0,0.04)`, plus month in 12px semibold black beside it. **PLP card** (`app/plp/PLPContent.tsx:179`): `flex-1` (2-up grid, `gap-px` rows), `aspectRatio:"170/255"`, wishlist toggle `top-[8px] right-[8px] w-[32px] h-[32px]` rendering a 12×16 bookmark that fills `#0f0f0f` when on, and a strikethrough `wasPrice` in 12px `#6b6b6b`.

Missing vs the DS card: no swatches, no badges, no AI badge, no Taggstar, no offer/NDD flags, no stars, no quick add. Wishlist is a **bookmark**, not a heart, and the DS action chip is a 24px glass (PLT) / 32px white circle + shadow — TBR's is a bare 32px hit area with no chip.

### 2.10 Other content slices
- **ContentSection** `ContentSection.tsx:18`: wrapping pair of `flex-1 min-w-[280px]` tiles, `aspect-square`, `gap-[16px]`; eyebrow 12px semibold uppercase `#6b6b6b` + title 20px bold. Optional `fullWidth` removes the 24px padding.
- **ProductContentSection** `ProductContentSection.tsx:17` — **NEW**: 1:1 banner then two `flex-1` products at locked `aspect-[2/3]`, all separated by `gap-px`, edge-to-edge.
- **SocialScroller** `SocialScroller.tsx:38` — **NEW**: 250×250 tiles, `gap-px`, image or autoplay video, Instagram (white fill) / TikTok (black fill) 24px icon at `bottom-[16px] left-[16px]`.
- **SeoTextSlice** `SeoTextSlice.tsx:8` — **NEW**: `bg-[#fafafa] py-[40px]`, centred 21px bold heading + 12px body, `px-[20px]`, animated by `animate-seo-heading` (letter-spacing `0.18em → normal`) / `animate-seo-body`.
- **SelectedBlogs / BlogCard** `SelectedBlogs.tsx:11`, `BlogCard.tsx:20` — **NEW**: header `<h2>` 38px bold `tracking-[-1.14px]` + 12px medium `tracking-[-0.48px]` subtitle, `px-[24px]`; snap rail `pl-[24px]` + 24px right spacer, `scrollPaddingLeft:24px`. Card `w-[clamp(280px,85vw,324px)]`, media `aspect-[324/406]` (image or video), category 14px semibold uppercase, title 28px semibold, excerpt 14px, date 12px semibold uppercase, then a 50px `--soft-black` button `px-[24px]` with 16px semibold white uppercase label ("Read & Shop").
- **AnimatedBrandHeading** `AnimatedBrandHeading.tsx:5` — **NEW**: scroll-progress-driven **variable font** heading — 12px uppercase `tracking-[2.16px]`, opacity 0.6→1.0, "BRANDS" `wght 400→800` over p=0→0.5, "THE BRAND ROOM" `wght 600→900` over p=0.5→1.0, plus a 1px underline on "DESTINATION" fading in at p>0.35. Requires a variable Archivo.
- **FadeIn / useInView** `FadeIn.tsx:12`, `hooks/useInView.ts:5`: IntersectionObserver-once primitives (thresholds 0.05–0.2, `delay`, `distance` props, `willChange`). Worth porting as DS motion utilities.

### 2.11 PLP header — EXISTS, material differences
`components/PLPHeader.tsx`. **Six variants** plus a deterministic selector (`:13`) that hashes the slug: brands always → V5, categories → V0 or V3 on `hash % 2`.

| V | Name | Composition |
|---|---|---|
| 0 | Title only | breadcrumb + `<h1>` 28px bold, `px-[16px]` |
| 1 | Title + SEO | + 12px light body, `gap-[8px]` |
| 2 | Title + chips | + chip row, `gap-[16px]` |
| 3 | Title + SEO + chips | both |
| 4 | Brand hero | bg image + `bg-black/40` scrim, white 28px title, `px-[16px] py-[24px]` |
| 5 | Frosted card | bg image, `pr-[32px]` gutter reveals image on the right, inner `backdrop-blur-[8px] bg-white p-[16px]` card with title + SEO |

Breadcrumb (`:35`): `flex-wrap gap-[8px] px-[16px] py-[16px]`, 12px regular black, literal `/` separators, first crumb → `/`, middle → `router.back()`, last is plain text. Chips (`:66`): **square** `bg-[#f2f2f2] px-[12px] py-[8px]`, 14px medium `#2a2a2a`, scroller negative-margined `-mx-[16px]` with `width: calc(100% + 32px)` so chips bleed to the edge.

```tsx
// V5 Frosted Card
<div className="relative w-full pr-[32px] py-[16px] overflow-hidden">
  <img className="absolute inset-0 w-full h-full object-cover"/>
  <div className="relative z-10 backdrop-blur-[8px] bg-white p-[16px] flex flex-col gap-[8px] w-full">
    <h1 className="font-bold text-[28px] leading-normal text-black">{title}</h1>
```

### 2.12 Sort & filter — EXISTS, big differences
`app/plp/PLPContent.tsx:60-175`. No drawer, no sort control, no facet counts: a horizontal scroller of **native `<select>`s styled as pills** — `appearance-none rounded-[42px] px-[12px] pr-[28px] h-[34px] text-[14px] border-0 shadow-[0px_0px_16px_-4px_rgba(0,0,0,0.14)]`, white/black when idle, **inverted to black/white when a value is set**, with a 10px chevron overlay whose stroke flips to white. Facets are derived at runtime: Colour (unique `p.colour`), Size (category-aware — footwear `3–11`, accessories none, else `6–18 + XS–XXL`, `getSizeOptions` at `:34`), Brand (category pages only), Price (4 fixed bands, `matchesPrice` at `:47`). "Clear all" appears only when a filter is active: `h-[34px] rounded-[42px] border border-[#b5b5b5]`. Bar padding `pl/pr-[16px] py-[20px] gap-[8px]`, `minWidth:"max-content"`.

Grid: `chunk(products, 2)` rows with `gap-px` both axes, first 6 → 1:1 `BrandCategorySlot` (gradient `linear-gradient(179.9deg, rgba(0,0,0,0) 35.64%, rgba(0,0,0,0.6) 100%)`, 14px bold uppercase subtitle + 28px bold title, `p-[24px]`) → remainder.

### 2.13 PDP — mostly NEW
`app/pdp/PDPContent.tsx`. Note this file still points 30+ image constants at `https://www.figma.com/api/mcp/asset/...` (`:17-52`) for the accordion chevron, wishlist, share, PayPal/Apple Pay wordmarks and BNPL logos — **these will 404 outside the MCP session and must be replaced by DS icon-library assets on port.**

- **Gallery** `:181`: horizontal `scrollbar-hide` track of `w-[300px] h-[450px]` frames, `gap-[4px]`; scroll handler assumes a 304px item width (`:134`).
- **Progress bar** `:196`: `h-[4px] rounded-[100px]` track `#d6d6d6` with black fill, `transition-[width] duration-150`, `pt-[16px] px-[16px]`.
- **Info** `:207`: `p-[16px] gap-[16px]`; brand 16px bold capitalize + name 16px regular, 24px wishlist button right. Price 24px extrabold `letterSpacing:-0.72px` + 18px `#6b6b6b` line-through was-price, `gap-[12px]`.
- **Colour / Size labels** `:241`, `:251`: `"Colour: "` regular + value bold capitalize, 16px.
- **Size grid** `:258`: `size-[50px]` squares, `flex-wrap gap-[8px]`, 16px; selected `border-black font-bold`, available `border-[#e7e7e7]`, unavailable `border-[#e7e7e7] text-[#c0c0c0]` **plus a rotated 1px `#c0c0c0` strikethrough line** absolutely centred. Falls back to `["S","M","L","XL"]` when the product has no size data.
- **CTA stack** `:302`: ATB `bg-[#0f0f0f] h-[50px] w-full px-[24px] py-[8px]`, 16px bold white uppercase, label swaps to "ADDED!" for 2000ms; PayPal `bg-[#ffc439] h-[50px]`; Apple Pay `bg-black h-[50px]` (with a bad `px-[132px]` from the Figma export).
- **Accordions** `:350`: 5 rows (Description / Product Details & Care / Delivery / Returns / Share), 14px semibold capitalize label + 16px chevron rotating 180° in 200ms, `gap-[16px]` with 1px `#e7e7e7` `Divider` (`:68`) between; open rows add `gap-[8px]`. Description renders `atAGlance` as a `list-disc pl-[20px]` list then `descriptionHtml` then SKU; Delivery renders name/price rows with 12px `#6b6b6b` notes.
- **USP box** `:459`: `bg-[#fafafa] p-[16px] gap-[16px]`, rows of 24px icon (injected `usp.svgHtml`) + 12px semibold text + 12px regular subtext, `gap-[16px]`.
- **BNPL box** `:481`: `bg-[#fafafa] p-[16px]`, four 32×22 / 31.625×22 logo tiles — Pay+ `#003b61 rounded-[1.9px]`, Klarna `#ffb1d2 rounded-[2.77px]`, Clearpay `#b2fce3`, white `border-[0.344px] border-[#e7e7e7]` — then 12px "18+, T&C apply. Credit subject to status" and 12px semibold "See more".
- **Three product rails** `:524`, `:540`, `:567` ("Create The Look", "We Think You'll Like", "Recently Viewed"): 16px bold capitalize title `px-[16px]`, `gap-px` rail, cards `w-[168px]` with a **mismatched** `w-[194.5px] h-[291.75px]` image frame (Figma export artefact — fix on port).

### 2.14 Bag — mostly NEW
`app/bag/BagContent.tsx`. Page bg `#fafafa`, white blocks. Title `Your Bag (n)` 20px bold. Free-delivery row `:248`: 20px tick-in-circle + 14px text, message flips at the £50 threshold (`delivery = subtotal >= 50 ? 0 : 2.99`). Checkout CTA repeated top (`:264`) and bottom (`:419`).

- **BagItemCard** `:77`: 68×102 image on `#f2f2f2`, `gap-[16px] px-[16px]`; brand 12px bold + `- title` in regular on one line, variant line 12px, price + strikethrough was-price `gap-[4px]`; "Move to Wishlist" 12px semibold with 16px bookmark; qty stepper = trash button `p-[8px]` / `h-[28px] w-[24px]` count / plus button `p-[8px]` (trash at qty 1 removes — `updateBagQuantity(id,-1)`).
- **SellerGroup** `:140`: 16px truck icon + `Delivered by **{brand}**` 14px, then a white `py-[16px] gap-[20px]` card of items. Groups are keyed by brand as a marketplace-seller proxy.
- **Worry-Free Purchase® / seel** `:284`: white `p-[16px]`, 16px bold title with `- £3.18` in regular, trash to remove, 12px `#6b6b6b` explainer, `Powered by` `#595959` + `seel` + "What's Covered?".
- **Promo code** `:342`: 18px semibold heading, 50px input `border border-[#b5b5b5] px-[16px]` + 50px white `border border-black px-[24px]` Apply button (16px semibold capitalize).
- **Order summary** `:365`: `bg-[#fafafa] px-[16px] py-[24px] gap-[24px]`; 16px rows (Subtotal / Delivery — "FREE" in semibold / Worry-Free), a collapsible "Discounts" row with 12px chevron, 1px `#e7e7e7` divider, then Order Total 16px semibold.
- **Payment stack** `:417`: Checkout `#0f0f0f`, Apple Pay black, **Klarna `#ffb3c7`** (note: PDP uses `#ffb1d2` for the same brand — inconsistent), PayPal `#ffc439` with `#003087` italic wordmark, Pay Later `#ffc439` with `#2c2e2f` label; all `h-[50px]` full-width, `gap-[8px]`. Then an 11px "Pay in 3 interest-free payments" note and 9 placeholder payment tiles `h-[21px] flex-1 min-w-[30px] max-w-[50px] border border-[#e7e7e7] rounded-[3px]` with 7px labels.
- **EmptyBag** `:190`: 48px `#b5b5b5` bag glyph, 20px bold "Your bag is empty", 14px `#6b6b6b` body, full-width 50px CTA "CONTINUE SHOPPING".
- **State** `lib/bagStore.ts`: localStorage key `tbr_bag`, `CustomEvent("tbr_bag_changed")` + `useBagItems`/`useBagCount` hooks; item id is `productId:size:colour`, variant string `"{size} / {colour}"`.

---

## 3. ai-generated-badge

Not a component repo — a **10-slide 1920×1080 UX proposal deck** (`index.html`, single file, self-scaling stage; `assets/` holds the mocks). The badge design itself exists only as raster mocks, so the specs below come from the deck copy plus my reading of `assets/cards-top.png`, `cards-bottom.png`, `plp-2.png`, `plp-4.png`.

### 3.1 AI Generated strip badge — EXISTS in DS as "AI badge", **materially different**
**Purpose:** EU AI Act Article 50(4) compliance from **02.08.26** — AI-generated imagery that could pass for a photo must be visibly labelled at first exposure. Penalty cited: €15M or 3% of turnover. No UK equivalent, but ASA treats a missing label as misleading, so the proposal covers UK + EU.

**Form (from mocks):** a **full-width translucent light strip locked to the bottom edge of the product image** — not a corner badge. Centred single line, `AI` in bold + `GENERATED` in regular weight, dark text on a ~white/70–80% wash so the image reads through. It sits flush to the image's bottom-left/right edges and spans 100% of the tile width at every card size and on the PDP gallery.

**Mandated implementation rules** (`index.html:304-316`) — these are the porting spec:
- **Live text, never a rasterised layer baked into the image.** Four reasons given: screen readers must announce it (**alt text appends "AI generated image"**); **10px is the smallest accessibility-compliant size with sufficient contrast** and a raster would scale off it; localisation needs one translatable string, not an image suite per locale; existing badges need to shift, which a baked image can't do.
- **Placement:** wherever a shopper first meets an AI image — home/reccs, search, PLP, PDP, carousels. Driven by an **image-level AI flag**; only flagged images carry the strip (`:287-288`).

**Stacking rules** (`:334-337`):
- The AI Generated label **owns the bottom edge of the image at every size**.
- All other badges (PLUS, Petite, Tall, Shape, New, As Seen On TV, Sale) **shift up by exactly the strip height — no overlap**. Confirmed in `cards-top.png` / `cards-bottom.png`, where `Sale`, `Plus` and `PLUS` chips sit directly on top of the strip.
- **Wishlist and quick add stay top-right** (unchanged).
- **Sponsored** stays below the image, except on a **PLP grid view** where it becomes a badge; in grid view **no other badges are shown** (see `plp-2.png` / `plp-4.png`, where `SPONSORED` and `AI GENERATED` stack as two strips).

**Out of scope** (`:411-417`) — flagged **LEGAL SIGN OFF REQUIRED**, `NOT IN SCOPE - DO NOT BUILD`: the rule is **upstream vs downstream of add-to-bag**. Shows everywhere before ATB (home, search, PLP, PDP, carousels); **hidden after** — bag, mini bag, checkout — because at ~7px the strip is illegible.

**Fascia coverage:** designed and mocked for all five — PrettyLittleThing, boohoo, boohooMAN, Karen Millen, Debenhams (`assets/SCREENS/{PLT,BOOHOO,BOOHOOMAN,KM,DEBS}.png`, slides 5–9). The strip artwork is identical across fascias; only the surrounding card skin changes (KarenMillen serif brand line, PLT cream `#FFFDF7`-ish paper, boohoo/boohooMAN white).

**Recommendation:** treat as a **replacement spec for the existing DS AI badge**, add a `strip` variant plus the badge-offset token the other badges consume.

### 3.2 Deck stage system — NEW, internal tooling only
`index.html:18-243`. Reusable presentation shell worth keeping outside the product DS: `.deck-viewport` / `.deck-stage` (fixed 1920×1080, JS `transform: translate() scale()` fit), `.slide` visibility/opacity model, print rule (one fixed slide per page), `prefers-reduced-motion` clamp, `.reveal`/`.reveal-img` staggered entrances with `--ease: cubic-bezier(0.16,1,0.3,1)`, `.ghost` numeral (560px Antonio, `-webkit-text-stroke:1.5px rgba(255,255,255,.06)`), progress bar, HUD counter, dot nav, hash deep-linking. Palette: `--stage-bg/--slide-bg #050505`, `--text #fff`, `--mute #9a9a92`, warn `#ffb020`, DNB red `#f00`. Type: Antonio 700 (deck title 200px, facts 96px) + Geologica 200/300/400/500/700 italic.

---

## 4. debenhams-design-system-scraper

Playwright + Express audit tool (`node >= 20`, ESM). No product UI components — its value here is **the audit schema, the fascia coverage and one real captured token set**.

### 4.1 What it captures
Per site × page × breakpoint: above-fold `fold.png`, `full.png`, post-JS `dom.html`, and `data.json`. `src/extract.js:20` runs in-page and returns `{meta, tokens, tree, elementCount, elementsInspected}`:
- **tokens**: `colours, fontFamilies, fontSizes, fontWeights, lineHeights, letterSpacings, radii, shadows, spacings, zIndices` — deduped, numerically sorted.
- **Noise filters (worth reusing):** skips `display:none` / `visibility:hidden` / `opacity:0`, zero-area, off-screen; skips elements whose class matches `/\bswatch\b|colour-chip|color-chip|color-swatch|product-color/` so product colours don't pollute the palette; spacings accept padding + gap at integer px only, margins only ≤64px (`:28-33`, `:91-95`); caps at 2000 elements inspected.
- **tree**: first 500 visible elements as `{tag, id, classes[≤10], role, ariaLabel, text[80], rect{x,y,w,h}}` — explicitly for component pattern recognition. There is **no component catalogue output** — recognition is left to the human/LLM reading `tree`.

`src/content.js:26` adds the **content-slot model** used for prototype ingestion — the closest thing to a component taxonomy in the repo:
- `blocks[]` — clickable slots outside header/nav/footer, area > 8000px², leaf-most anchors, product tiles excluded: `{type:'banner'|'usp-banner', text, image, linksTo, rect, order}`. `type` is inferred: has an image → `banner`, text-only → `usp-banner`.
- `carousels[]` — `{title, subtitle, tabs[≤12], products[≤100]{key,name,url}, order}`. Modules are found by walking up from a `[data-test-id="product-card"]` to the nearest ancestor holding ≥2 cards **and** a heading; title resolution prefers `data-test-id*=carousel-title`, then a heading, then the most prominent short text with `font-size ≥ 17px` (`:110-137`); tabs prefer `role="tab"`, else short-labelled buttons before the first card.
- `nav[≤400]`, `headings[≤80]`, `links[≤800]` flat click-map. Every block and carousel carries `order` — a single page-order index across **both** kinds (`:172-179`).
- `downloadAssets()` (`:226`) mirrors slot images into `assets/` with md5-suffixed filenames; `aggregateSiteMap()` (`:274`) merges blocks across breakpoints into `imagesByBreakpoint` + `imageFiles`, primary breakpoint preference `1440 → 1024 → 1023`.

`src/products.js:26` extracts products two ways: PLT-style tiles (`[data-test-id="product-card"]`, `data-product-id="PLT101899#black"`, prices via `product-price-current` / `product-max-price-was` / `product-price-saving`, plus `promoBadge` from `price-badge-ct-card`) and PDP `window.__remixContext.state.loaderData` (variants → `{sku,size,inStock,quantity}`, image sets, breadcrumbs, `attributes{brand,department,categoryTaxonomy,styleTaxonomy,occasion,design}`), with a JSON-LD `Product` fallback. Records carry `source:'tile'|'pdp'`; `mergeProductRecords` lets `pdp` win per field and unions `listedOn` (which PLPs a product appeared on). Dedup key `id#colour`, falling back to URL.

### 4.2 Manifest schema (`manifests/debenhams/2026-04-30/manifest.json`)
```
{ brand, baseUrl, startedAt, completedAt, errors[],
  breakpoints:[{name,width}],
  pages:[{ archetype, label, url, slug,
           breakpoints:{ "<bp-name>": {ok, documentHeight, uniqueColours, uniqueFontSizes} | {ok:false,error} } }] }
```
`tokens.json` is the aggregated union with per-page frequency (`src/aggregate.js:17` — a value counts once per page if present at any breakpoint).

### 4.3 Breakpoints (locked) — `src/breakpoints.js:15`
390 mobile-design (2×), 402 iPhone 17 Pro (3×), 440 iPhone 17 Pro Max (3×), 1023 mobile-threshold, 1024 desktop-threshold, 1440 desktop-design. Mobile entries set `isMobile/hasTouch`.

### 4.4 Sites / fascias covered
- **debenhams** (`sites/debenhams.js`) — fully configured, **26 pages** across archetypes `home, plp, plp-curated, bag, auth, wishlist, landing, brands-az, brand-page, editorial, about, contact, tool`. PDPs deliberately omitted (inventory rotation).
- **plt** (`sites/plt.js`) — 8 pages, `extractProducts: true`, plus `productCrawl` (16 women's categories × 2 pages ≈ 2,500 products, 3 PDP samples/category).
- **boohoo, boohooman, karen-millen** — **stubs, homepage only, `// TODO: populate`**.
- Rate limits: 2000ms between pages, 500ms between breakpoints, UA `DebenhamsGroupDesignSystemAudit/0.1`.

### 4.5 Extracted Debenhams token values (real capture, 2026-04-30)
This is the only committed output. Notable: only **4 radii** (`2px, 4px, 6px, 9999px`) — consistent with `--radius: 4px` in the DS; **2 shadows** (a Tailwind-style `0 10px 15px -3px / 0 4px 6px -4px` stack and `rgba(172,171,171,.3) 0 -1px 10px`); font families `Geologica, sans-serif` (+ Arial/Times/monospace fallback noise); 13 font sizes (`12,13,14,16,18,20,24,30,32,36,40,80` + `0px`); weights `300–800`; letter-spacings `-0.35, -2%, 0.35, 0.4, 0.8, 1.6, 2px`; z-indices `-1,10,20,24,25,40,50,100,110`. Colours (36) include `rgb(0,0,0)`, `rgb(255,255,255)`, `rgb(33,33,33)`, `rgb(51,51,51)`, `rgb(123,231,216)` = **#7BE7D8 (Debenhams primary)**, `rgb(177,241,232)` ≈ #B1F1E8, `rgb(211,63,63)` = **#D33F3F (red)**, `rgb(242,242,242)` = #F2F2F2, `rgb(231,231,231)` = #E7E7E7, `rgb(181,181,181)` = #B5B5B5, `rgb(250,250,250)` = #FAFAFA — all already in `Group-Design-System/css/tokens.css`. Also present but **product-data noise, not tokens**: beige `rgb(245,245,220)`, gold `rgb(255,215,0)`, pink `rgb(255,192,203)`, brown `rgb(165,42,42)`, `rgb(194,178,128)` — the swatch filter didn't catch these; the spacings list is likewise polluted with layout dimensions (`119.875px`, `446.641px`, `auto`, `150%`).

### 4.6 Tool UI — recommend excluding from the DS
`public/style.css` is a dark internal-tool skin on its own palette (`--bg #0f1115`, `--panel #181b22`, `--accent #4f8cff`, `--ok #3fbf7f`, `--err #ff5f6b`, `--warn #ffb454`), system font stack, 10px card radius, 6px controls. It contains a parallel and conflicting set of `card / badge / product-card / progress-track / tabs / token-chip / content-block` classes. Reusable ideas only: the **token chip with a 12px colour swatch** (`:225-241`) and the **or-divider** (`:64-79`).

---

## 5. UX-Design-Request

Single-file 4-step wizard (`index.html`, 833 lines) that generates a Trello card; a Cloudflare Worker (`worker/index.js`) proxies `/log-ticket` to an Apps Script sheet logger. **Skinned Debenhams** (`--cta:#00787d` = DS `--cta`, `--aqua:#00a3ad`, `--chip-on-bg:#e8f4f2` = DS `--neutral`, Geologica 300/400/500/600) but on its **own greyscale** (`--bg #f7f8f8`, `--card #fff`, `--input-bg #f2f4f4`, `--border #e1e5e6`, `--chip-border #e7e7e7`, `--text #1d2426`, `--dim #5a6467`, `--faint #8b9598`) which does **not** match DS `--grey-*`. Radius is 8px controls / 14px card — the DS Debenhams `--radius` is 4px, so radii need re-tokenising on port.

| Component | Line | Specs / states |
|---|---|---|
| Stepper | `:42-73`, JS `:682` | 2px `--border` track with `--cta` fill (`width %`, 0.3s), dots `flex:1 1 0`; `.num` 32px circle, `--input-bg` + 2px `--border`, 13px/600 `--faint`; `.lbl` 10.5px/500. States `active`/`done` → `--cta` fill + white; hover → `--cta` border; labels hidden `@media (max-width:680px)`; dots are clickable (jump to step); track margin set dynamically to `50/TOTAL_STEPS %` |
| Wizard card | `:76-90` | white, 1px `--border`, radius 14px, `box-shadow 0 4px 28px rgba(0,0,0,.07)`, padding 48px, `gap:26px`; `.step.active` animates `stepIn` 0.28s (`translateY(6px)→0`) |
| Text input / date / textarea / select | `:97-125` | full width, `--input-bg`, **1.5px transparent border**, radius 8px, `13px 16px` padding, 14px/300; focus → `border-color:--cta` + `background:#fff`; textarea `min-height:88px` (`.lg` 160px), `resize:vertical`; select `appearance:none` + inline SVG chevron at `right 14px center`, `padding-right:38px`, `:invalid` shows `--faint`; date has `.empty` class toggled by JS so the `dd/mm/yyyy` placeholder matches `--faint`, and a click handler calls `showPicker()` |
| Chip | `:131-147`, JS `:581` | white, 1px `--chip-border`, **radius 42px**, `10px 18px`, 14px/300, `letter-spacing:.28px`, `color:#000`, `user-select:none`; `.on` → `--chip-on-bg` + `--cta` border. Group `.chips` is multi-select; `.chips.single` is single-select; `data-reveals` unhides a paired `.reveal` input ("Other…") and clears it on deselect |
| Radio card | `:150-179` | white, 1px `--border`, radius 8px, `18px 20px`, `gap:16px`; `.rb` 24px circle 2px `--chip-border`; `.on .rb` → `--cta` border + `::after inset:4px` `--cta` dot; copy = 14px/500 title + 12.5px/300 body; group `gap:14px` |
| Fit radio (`radio6`) | `:182-203` | second, denser radio style: `--input-bg` fill, 16px dot, `.on` → `rgba(0,163,173,.08)` + `--aqua` border, dot `--aqua` with `box-shadow: inset 0 0 0 3px #fff`; body 13px/400 `--dim`. **Unused in current markup — a spare variant** |
| Scope / priority badge | `:205-217` | inline-block, 11.5px/600, `letter-spacing:.69px`, `3px 10px`, radius 5px; 4 tones — must `rgba(220,60,60,.12)`/`#b93333`, should `rgba(200,140,0,.12)`/`#9a6b00`, could `rgba(26,158,110,.12)`/`#14795a`, out `rgba(90,100,103,.12)`/`#5a6467`. Reused as the P0–P3 priority badge |
| CTA button + back link | `:225-248` | `.cta-ticket` 100% × **50px**, `--cta`, radius 8px, 15.5px/600, `:disabled{opacity:.65}`; label morphs `Next → / Review → / Copy Ticket` (`:698`). `.link-back` text-only 13.5px/500 `--faint`, hidden on step 1 |
| Toast | `:318-354` | fixed bottom-centre, `max-width:480px; width:calc(100% - 40px)`, white, radius 10px, **4px left border in `--cta`** (`.error` → `#b93333`), `box-shadow 0 8px 24px rgba(0,0,0,.14)`, `16px 18px`; 13.5px `white-space:pre-line` message + × close + optional action buttons (`.primary` = `--cta` fill) |
| Review / Trello mock card | `:256-315` | Trello-accurate dark card `#1d2125` radius 10px; list pill `#2c3339`/`#b6c2cf` 12px radius 4px; field `#22272b` radius 8px `padding:16px 52px 16px 16px`; uppercase 11px/600 `letter-spacing:.4px` `#8c9bab` field label; title 19px/600; body 14px `white-space:pre-wrap; max-height:300px; overflow-y:auto`; copy button 32px `rgba(255,255,255,.08)` → swaps to a tick and turns `#4bce97` for 1400ms |
| Row / reveal utilities | `:127-148` | `.row` 18px gap, stacks to column `@media (max-width:560px)` at 26px gap; `.reveal`/`.reveal.show` display toggle |

Form content worth capturing as DS-adjacent data: Brands chips = All Brands, Debenhams, Boohoo, Pretty Little Thing, BoohooMan, Karen Millen, Other — **the same 5 fascias as the DS, plus "All Brands"**. Pages/touchpoints chips = All Pages, Homepage/Content, PLP, PDP, Bag, Checkout, Account, Order Confirmation, Email, Other. Platforms = Web / App / Both (single-select). Priorities P0–P3; UX approaches Deliver / Exploration / Collaboration.

---

## 6. The Brand Room — tokens & palette

### 6.1 Colour
Declared in `app/globals.css:3-15`:

| Token | Hex | Notes |
|---|---|---|
| `--soft-black` | `#0f0f0f` | primary ink + all CTA fills. **DS `--soft-black` is `#242424`** — conflict, TBR needs its own value |
| `--black` | `#000000` | USP banner, bag badge, Apple Pay, selected size border |
| `--white` | `#ffffff` | |
| `--grey-1` | `#f2f2f2` | image placeholders, footer bg, chips |
| `--grey-2` | `#e7e7e7` | dividers, size-selector borders, account box border |
| `--grey-3` | `#b5b5b5` | inactive tab text, promo input border, empty-bag glyph |
| `--grey-5` | `#6b6b6b` | secondary/was-price text |
| `--grey-05` | `#fafafa` | tab track, USP box, BNPL box, SEO slice, bag page bg |
| `--background` / `--foreground` | `#ffffff` / `#171717` | Next.js defaults; **`prefers-color-scheme: dark` block at `:24` flips these to `#0a0a0a`/`#ededed` — a bug for a light-only design, drop on port** |

Hardcoded and **not** tokenised (add these): `#1e1e1e` (logo/wordmark), `#d4d4d4` (footer rule), `#d6d6d6` (PDP progress track), `#9b9b9b` (disabled menu item), `#c0c0c0` (OOS size), `#2a2a2a` (chip text), `#595959` (seel "Powered by"), `#555` (payment tile label). Third-party brand colours: `#ffc439` PayPal, `#003087` PayPal wordmark, `#2c2e2f` Pay Later, `#ffb3c7` Klarna (bag) / `#ffb1d2` (PDP) — **reconcile**, `#003b61` Pay+, `#b2fce3` Clearpay.

Overlays: hero/banner `linear-gradient(to bottom, transparent 40.625%, rgba(0,0,0,0.6) 86.585%)`; PLP slot `linear-gradient(179.9deg, rgba(0,0,0,0) 35.64%, rgba(0,0,0,0.6) 100%)`; menu slot `bg-gradient-to-b from-transparent from-[35%] to-black/60`; PLP-header V4 scrim `bg-black/40`; menu backdrop `bg-black/50`. Shadows (only two): `0 0 21px rgba(0,0,0,0.04)` (countdown chip), `0 0 16px -4px rgba(0,0,0,0.14)` (filter pill).

### 6.2 Type
**Archivo** via `next/font/google` (`app/layout.tsx:15`) — weights 400/500/600/700, normal + italic, exposed as `--font-archivo`. `Geist` / `Geist_Mono` are also loaded and wired into `@theme inline` but the body font is Archivo (`globals.css:34`) — **dead weight, remove**. Every text node re-declares `fontFamily: var(--font-archivo)` + `fontVariationSettings: "'wdth' 100"`; `AnimatedBrandHeading` additionally animates `'wght'` 400→800/600→900, so a **variable** Archivo is required.

`body { line-height: 1 }` (`globals.css:35`) with `leading-none` / `leading-normal` re-declared per component — brittle, replace with a real leading scale.

Size scale in use: **8, 11, 12, 14, 15, 16, 18, 20, 21, 23, 24, 28, 32, 38 px**. Roles: 38 bold `tracking-[-1.14px]` = editorial rail heading; 32 bold capitalize = hero/banner title; 28 bold = PLP `<h1>`, blog title (semibold), slot title; 24 extrabold `tracking-[-0.72px]` = PDP price; 21 bold = footer newsletter + SEO heading; 20 bold uppercase = section header, bag title; 18 = footer wordmark, bag summary headings, was-price; 16 = PDP brand/name/labels/CTAs, menu L2 header; 15 bold uppercase = logo; 14 = menu rows, accordion labels, filters, blog category/excerpt; 12 = card brand/name/price, breadcrumb, chips, legal; 11 = BNPL note; 8 = copyright. Letter-spacing: `-1.14px`, `-0.72px`, `-0.48px`, `+0.1px` (product name), `0.04em` (menu heading), `2.16px` (animated heading).

### 6.3 Radius — square-radius mode: **yes**
Default is **0px** — every card, image frame, button, input, size tile, banner and chip is square. Exceptions, all deliberate: `4px` on the CategoryTabs track/thumb and the `HomeContent` page wrapper (`HomeContent.tsx:175`, cosmetically pointless); `42px` on filter pill selects and Clear-all; `rounded-full` on the header bag count; `100px` on the PDP gallery progress bar; `2.77px`/`3px`/`1.9px` on payment and BNPL logo tiles (artwork bleed guards). So: `--radius: 0px`, `--radius-button: 0px`, `--radius-pill: 42px`, `--radius-control: 4px`. This matches PLT and Karen Millen (`--radius: 0px`) rather than Debenhams/boohoo (`4px`).

### 6.4 Spacing & layout
Steps in use: `1 (gap-px), 2, 4, 8, 12, 16, 20, 24, 26, 32, 40, 50`. Gutters: **`gap-px`** — a 1px hairline — between all grid/rail items, so tiles read as a continuous mosaic and sit **flush to the viewport edges with no page padding**. Section padding `py-[24px]` (`pt-[40px]` for rails), horizontal `px-[16px]` on chrome/PLP/PDP/bag and `px-[24px]` on home sections — **inconsistent, pick one**. Card text inset `px-[12px]`.

Fixed heights: header 56, menu header 56, menu L1 row 50, menu L2 heading 44, menu L2 item 40, all buttons/inputs **50**, filter pill 34, size tile 50, bag qty box 28, close hit area 44, bag thumb 68×102, PDP gallery 300×450, social tile 250×250.

Aspect ratios: `170/255` (product ≈ 2:3), `200/300` (launching soon), `2/3` (content product), `1/1` (brand/category/content tiles, PLP + menu slots), `390/511` (hero), `390/512` (secondary hero, banner carousel), `324/406` (blog), `30.46/21.19` (payment tile). Card widths use `clamp()`: `clamp(168px,43vw,200px)`, `clamp(180px,55vw,230px)`, `clamp(180px,59vw,230px)`, `clamp(280px,85vw,324px)`.

### 6.5 Uppercase rules
`--caps` should be **`uppercase` for labels and actions, `capitalize` for display titles** — a third mode not present in the DS (PLT is `uppercase`, all others `none`):
- **uppercase:** logo/wordmark, product-card brand line, section `<h2>`s, tab labels, brand/category rail labels, hero brand eyebrow, content-tile eyebrow, blog category + date, menu L2 section headings (`tracking-[0.04em]`), all primary CTA labels (SUBSCRIBE, ADD TO BAG / ADDED!, CHECKOUT, CONTINUE SHOPPING, READ & SHOP), copyright.
- **capitalize:** hero `<h1>`/`<h2>` titles, PDP brand + accordion labels, PDP colour/size values, "Create The Look" / "We Think You'll Like" / "Recently Viewed" rail titles, bag "Order Total"/"Discounts", countdown day/month.
- **sentence/none:** product names, SEO/legal body, breadcrumbs, chips, filter labels, menu L1/L2 items, bag item lines, order-summary rows.

### 6.6 Motion tokens (`app/globals.css:47-133`)
Standard easing `cubic-bezier(0.25, 0.46, 0.45, 0.94)`; durations 0.25 (page fade), 0.3 (drawer, accordion), 0.45 (slide text), 0.55 (card rise), 0.65–0.8 (hero/SEO), 30s (unused USP marquee); stagger 55ms (brand rail) / 60ms (product rail). Named keyframes: `usp-marquee`, `fill-progress`, `page-fade-in`, `card-rise`, `hero-brand-in`, `hero-title-in`, `seo-heading-in`, `seo-body-in`, `slide-text-in`. Utility `.scrollbar-hide` (`-ms-overflow-style:none; scrollbar-width:none; ::-webkit-scrollbar{display:none}`) is used by every rail.

### 6.7 Port risks to flag
1. ~200 inline `fontFamily`/`fontVariationSettings` declarations to strip.
2. `app/pdp/PDPContent.tsx:17-52` — 30+ live `figma.com/api/mcp/asset/...` URLs (chevron, wishlist, share, PayPal/Apple Pay wordmarks, all BNPL logos) that will 404 outside an MCP session; `HomeContent.tsx:32-140` uses the same for brands, categories, banners, social and blog imagery. `public/content/` and `public/icons/` hold local equivalents — rewire.
3. Icons inline everywhere despite `CLAUDE.md`'s explicit ban → replace with the DS icon library (TBR strokes are 1px `#0f0f0f`, sizes 12/16/20/24/48, matching the CLAUDE.md convention).
4. 20px header hit areas and a 32px bare wishlist target fail the 44px minimum.
5. PDP rail card width (168px) ≠ its image frame (194.5px); PDP gallery scroll maths hardcode 304px; Apple Pay button carries `px-[132px]`.
6. Klarna pink differs between PDP (`#ffb1d2`) and bag (`#ffb3c7`).
7. Dark-mode media query in `globals.css:24` will invert a light-only design.
8. `matchesPrice`/size filters are cosmetic — PLP products carry no size data (comment at `PLPContent.tsx:254`).