/* DG Group Design System — changelog. Newest first. One entry per iteration (a day's push).
   Every DS change adds to the top entry: added (new components / tokens / assets), changed, fixed, and which project drove it (by).
   Rendered on the site's Changelog page (index.html #changelog). Entries before 16 Oct 2026 are seeded from the git history of assets/ds. */
window.DG_CHANGELOG=[
 {
  "d": "2026-11-11",
  "v": "2026.11.11b",
  "title": "App chrome goes Liquid Glass · delivery grid in Figma",
  "by": "PDP delivery grid (projects/delivery-grid), Jake 11 Nov: app prototypes use the App Prototype's glass UI",
  "added": [
   "Glass tokens --glass-tint (white 65%), --glass-rim (white 55%), --glass-blur (18px blur + saturate 180%), --glass-puck, --glass-on and the .app-glass surface — measured from the App Prototype (jakerayner96/plt-app-prototype GlassView / GlassNavButton, its web build)"
  ],
  "changed": [
   "App tab bar (.app-tabbar): the flat white 83px bar is replaced by the Liquid Glass capsule — 60 high, 16 from the sides, 12 off the bottom, five tabs spread evenly at full ink, the selected one in a lighter pill; PLT keeps its labels in the same capsule · by PDP delivery grid, Jake 11 Nov",
   "App top bar (.app-top): no bar any more — the status row and 44 × 44 glass circles (back, share) float over the gallery on a puck shadow; the wishlist leaves the nav (it is on the page) · by PDP delivery grid, Jake 11 Nov",
   "PDP delivery grid prototype, App view: uses the glass chrome"
  ]
 },
 {
  "d": "2026-11-11",
  "v": "2026.11.11",
  "title": "Quick Add modal · rail card min height 250 + inline size · Added to Bag quick add options",
  "by": "Product carousel prototype (projects/product-carousel), Jake 11 Nov",
  "added": [
   "Quick Add (.qadd + assets/ds/quickadd.js, DG_quickAdd) — the live Quick Add modal (Figma Quick Add i0Dgzx7sPX23ffsI55hhRp 652:47180 / 651:33756 / 652:56024): title, brand + name, price, Colour + image swatch, Size + Size guide + size buttons, or the DS select beside a thumbnail for shades / ml; stock line; Add to Bag + View Product; slide up on phones, small centred modal on desktop, over any sheet",
   "Rail card options (DG_pcarHTML): tall — min height 250 so brand + name always fit (Figma 13943:31066) · inlineSize — Size: Select size ⌄ under the price for items with sizes[] (.pc-size, a native select) · item.noQa — no quick add on that card"
  ],
  "changed": [
   "Virtual Stylist intro: the example row (.vs-eg) is a full width 50/50 split: photo and tips halves with a fixed 28 gap, the photo fills its half to the margin at 2:3 and scales as the modal widens (was fixed 94 × 140); the tips half never narrower than its longest line, so no tip wraps on small phones · by Virtual Stylist v2, Jake 10 Nov",
   "Virtual Stylist intro: tip 2 Face the camera is now Have one person in shot (same person glyph, .vsi--face) · Figma VTO 15937-4139 · by Virtual Stylist v2, Jake 10 Nov",
   "Quick Add closing slides back down (fades on desktop) — fixed: the open animation (.qa-layer--up>.mdl) overrode .mdl-anim-down, so it vanished · prototype: tapping a recommendation (no quick add) or View Product slides the Quick Add and the sheet down, then lands on the PDP of the product tapped (brand, name, price, images, colour, sizes) — adding there puts that product in the bag · by Product carousel prototype, Jake 11 Nov",
   "Rail card inline size (.pc-size): Select size + chevron 8 after the text (was pushed right), the Size: label only once a size is chosen (Size: 10) — Figma 13943:31991 · by Product carousel prototype, Jake 11 Nov",
   "Quick Add: o.minH (DG_quickAdd legacy html) — opened over the Added to Bag sheet it is at least as tall, CTAs at the foot, so the sheet never shows behind · rail card with the inline size row min height 265 (Figma 13943:28800) · prototype: after an add the sheet scrolls so the carousel stays in full view above the pinned View Bag; Quick add option Select size on the card (not on Under £10); No quick add and View Product go to the prototype PDP · by Product carousel prototype, Jake 11 Nov",
   "Product carousel prototype panel simplified (Jake 11 Nov): Screen, Recommendations (Live, Complete the look, Similar items, Frequently bought together, Under £10), Quick add (to bag, Quick Add modal, none to PDP), Layout (carousel or grid + rows), Bag CTA; Card text, card size, style, sticky and Sponsored options removed. One card format per rail, never a mix: quick add to bag shows single-variant products only, the modal only products that need a size or shade, none to PDP any; Under £10 = small price-only cards, single-variant, straight in; no Sponsored in the sheet · by Product carousel prototype, Jake 11 Nov",
   "Product carousel prototype · Added to Bag: card Standard (127 × 190, min 250, Brand - Name, price, square quick add) or Small (100 × 150, price only); quick add Straight to bag (single-variant only, the rest go to the PDP) · Quick Add modal · None → PDP · Inline size; every scenario product tagged single / multi variant; the carousel keeps its height as items are added — the sheet scrolls and View Bag floats pinned (was: the rail shrank to fit)"
  ]
 },
 {
  "d": "2026-11-10",
  "v": "2026.11.10",
  "title": "boohoo refresh ’26 · the shades palette goes pink · Deliver+ set in Figma · Toast pattern (bottom on phones) + wishlist.js",
  "by": "boohoo logo + brand refresh ’26 (Jake, 10 Nov) · DS Figma tidy",
  "added": [
   "Figma: new page 🟢 DELIVER+ & MEMBERSHIPS (14163:10) — start-here board, Memberships (from code) board 14229:120 with nine sets captured from the DS code, every programme (Unlimited, Unlimited+, Premier Club, Premier, Royalty, KM Premier): Membership box 14229:129 · Delivery grid · member 14229:132 · Membership pill 14229:135 (Mini = the delivery grid chip, Active = checkout) · Membership banner · checkout 14229:138 · Delivery method · member 14229:141 · Membership band 14229:144 (Account / active / Landing) · Join CTA 14229:147 · Membership banner · PDP 14229:150 · Bag · membership line 14229:153. Deliver+ (from code), Membership box & Deliver+ · PDP and Unlimited Delivery boards moved there from 🟡 BANNERS & MESSAGING; older Account / Checkout membership pieces shown as instances. The old 3-variant Membership pill (0 instances) → 🗑 DUPLICATES. figma-lib links updated",
   "Figma Toast (Wishlist) board 13557:10289: the Pattern section — rules + in-situ phone PLP, phone PDP above a sticky ATB, desktop top-centre (library Header, Toast, Icon Only Button instances)",
   "DS site: Brand Centre › Deliver+ & Memberships (#memberships, was Memberships) — every Deliver+ and membership component on one page: programme kits, then per programme (Unlimited, Unlimited+, Premier Club, Premier, Royalty, KM Premier) the PDP box, member delivery grid with the mini pill chip, Active pill, checkout banner + delivery method, account / landing bands, Join CTAs (+ Debenhams PDP banner and bag line), then Deliver+ for all 13 fascias; fascia filter chips. The site now loads membership.js · by Deliver+ & Memberships page, Jake 10 Nov",
   "Toast pattern (Jake 10 Nov — Principles’ black “Added to wishlist · Manage” bar → the DS floating white toast): Toast page gains the pattern rules (where / when / motion / never) and in-situ examples per fascia — phone 390 (bottom) and desktop 1280 (top centre, under the USP banners) — plus Saving (spinner) and Removed (Undo) variants",
   "assets/ds/wishlist.js (DG_wishlist): every wishlist button on a page toggles — filled glyph + pop (.is-wished) and the toast “Added to Wishlist · Manage” (spinner while saving) / “Removed from Wishlist · Undo”; events dg:wishlist, dg:wishlist-manage. Loaded by the PLP + PDP templates (so the master has it)",
   "Filled wishlist glyphs: icons/heart-24-fill, heart-16-fill, bookmark-fill, plt-heart-fill, lib/icons-wishlist-fill · Wishlist button gains a Wishlisted variant",
   "Project: Toast pattern (projects/toast-pattern) — review shell on the PLP / PDP templates, every fascia + Principles; toast type, hold, placement comparison",
   "Figma (Debenhams Design System aIHmkCaTy9c5EWOxAGw0So): Deliver+ — one component set (14144:244, board \"Deliver+ (from code)\" on 🟡 BANNERS & MESSAGING) with Fascia × Variant: 13 fascias × 10 variants (PDP banner mobile / desktop / light ground, PDP + checkout modal mobile / desktop, bag banner mobile / desktop, checkout banner mobile / desktop / not added), captured from the live DS so it matches code exactly. The DS site's Deliver+ Figma link now points at it"
  ],
  "changed": [
   "boohoo Deliver+: the lockup is now the deliver+ wordmark alone (boohoo-deliver-wordmark.svg, 106 × 24) — no boohoo wordmark — on the PDP banner, modal, bag and checkout (dplus-logos.js + Figma Deliver+ set) · Jake 10 Nov",
   "Figma Deliver+ / Memberships sets (capture fixes, Jake review 10 Nov): ADD buttons back to the 32px small button (as Subscribe & Save / Membership box 13612:1136) · membership pills 16 (mini) / 20 (Active) tall · radios flattened into their rows and centred · Deliver+ benefit pucks centred on all 13 fascias and now the library icons (Resale, Calendar, Compensation, Cover, Support) · bag line bin = Icons / Delete",
   "Memberships kit: boohoo Premier Club on the refresh colours (#F9D7EA box, black CTA) — was the old beige / burgundy",
   "Toast placement — one rule for every web toast (.toast--top + .toast--prod): phones + tablets (< 1024) float at the BOTTOM, 16 in / 16 up + safe area, 12 above any bar pinned to the bottom (toast.js --toast-bottom / DG_toastBottom), rising in; desktop stays top-centre under the USP banners. Replaces the 3 Nov top-on-phones placement; app toasts unchanged · by Toast pattern, Jake 10 Nov",
   "toast.js: DG_toast({busy:true}) shows the spinner in the action slot; .done(action) swaps it in. Master: Add to bag uses DG_toast “Added to Bag · View Bag”, and its toast link only goes to the bag from its own toast",
   "Toast catalogue: the black snackbar is retired (the floating toast replaces it); static demos no longer shift left under the desktop centring margin",
   "boohoo colour palette (Layer 0 / palette.json / palette.js + Figma Boohoo mode): the Aug 2026 mono palette is replaced by the refresh pinks. Primary #F9D7EA · CTA #000000 · Neutral #F6E3EE · Neutral Pressed #F1D4E5 · Light 4 → 1 #FEF6FA #FDF0F7 #FCE9F3 #FAE1EF · Dark 1 → 3 #F5C2DF #F0B2D5 #E495C2 · Primary Dark #CD6AA2",
   "Figma: the Boohoo logo variants (Logos set, Black + White) now carry the new logo, so every instance in the file and the library updates. The boohoo colour board shows the new pink shades"
  ]
 },
 {
  "d": "2026-11-09",
  "v": "2026.11.09",
  "title": "Virtual Stylist intro: final design (Figma 15921-1329) · top toast to Figma 5146-559 + toast.js",
  "by": "PDP delivery grid (Jake 9 Nov: Collection label, returns + seller in the box, date-only rows) · Virtual Stylist v2 (vto-prototype/v2, Jake 9 Nov: too long, pills look tappable) · Quick add (Figma i0Dgzx7sPX23ffsI55hhRp, Jake 9 Nov) · boohoo logo + brand refresh ’26 (Jake 9 Nov)",
  "added": [
   "Quick add (catalogue entry quick-add, group Product; assets/ds/quickadd.js DG_quickAdd — one component with the 11 Nov .qadd modal, merged: its html(p,{desk}) + wire() API still works) from Jake’s Figma Quick-Add i0Dgzx7sPX23ffsI55hhRp 646:12943: on PLPs with quick add on, a product with nothing to choose adds from the card (button pressed → spinner → tick, default again after 2s); anything to choose opens Quick Add, a centred 480 window on desktop (.mdl--qa) / the DS slide up on mobile. Beauty = shade dropdown + product image, Fashion = image swatches + size buttons, Home = image swatches + the size select; colour pre-selected, size required (Please select a size), stock line, ADD TO BAG → spinner → ✓ ADDED → closes after 2s, VIEW PRODUCT. New pieces: Colour dropdown (.cdd), Stock alert · Text (.alert--text), Button · Added (.bd.done), Spinner · Small (.spin.sm), card quick add states (.qa-press / .qa-busy / .qa-ok). PLP template wired (projects/plp-alignment/plp.html), banked in the Master prototype · by Quick add (Jake 9 Nov)",
   "Rail card info levels (DG_pcarHTML o.info): full (default) · noswatch · clean (name on one line + price, no brand, no swatches) · price (image + price only); Sponsored stays on every level · by Product carousel prototype, Jake 9 Nov",
   "Recommendation rows .rec-list / .rec-row: 48 × 72 image (2:3), brand + name + price, the DS quick add right (Added to Bag · Frequently Bought Together list) · by Product carousel prototype, Jake 9 Nov",
   "Virtual Stylist intro layouts 7 to 10 (.vs-intro--short): 7 three one-line steps (.vs-steps) + tip line (.vs-tip) · 8 intro line (.vs-lede) + tick list (.vs-checks) · 9 intro + example photo (.vs-eg, new asset assets/ds/img/vs-example.jpg, o.photo override) beside the tick list · 10 intro + tip line. Tips are plain text with no border or fill, so they don't read as buttons; copy written to the ux-writing skill (front-loaded, sentence case, short lines); new glyph .vsi--tick · by Virtual Stylist v2, Jake 9 Nov"
  ],
  "changed": [
   "Delivery grid: DG_delivery.CC_LIVE, each fascia's live checkout collection tab label (checked 10 Nov): Collect Nearby on Debenhams, boohoo, Warehouse, Coast, Oasis · Click & Collect on boohooMAN, Karen Millen, PLT · none on The Brand Room. o.ccLabel options are now Collection (default) · Collect Nearby · Click & Collect · by PDP delivery grid prototype, Jake 10 Nov",
   "Delivery grid (assets/ds/delivery.js): the collect tab, modal toggle and list heading say Collection (was Click & Collect / Collect Nearby) — new o.ccLabel: Collection (default) · Click & Collect (what all seven live fascias say on their delivery pages, checked 9 Nov) · Collect Nearby (Paul’s Figma) · returns and seller info back IN the box by default (o.retIn / o.sellerIn default 'box'; 'acc' still moves them to the accordion set) · Get It By date-only rows (Tomorrow / 4th Nov, then the method) are the only row format: o.fmt 1, 2 and 4 removed · PDP template (templates/pdp.html) picks all three up · by PDP delivery grid prototype (projects/delivery-grid), Jake 9 Nov",
   "boohoo logo + brand refresh ’26 (Jake 9 Nov; designs DS file 13919-46412, app icons + splash App Store Assets QrUWANntRW0yNwm3NMBUUN 1251-1331 / 1258-2630). Rules: the full logo wherever possible (the b mark only where the full logo can’t fit), black on pink in all situations, the new master pink #F9D7EA replaces every old pink. Logo: assets/brands/boohoo.svg (header, mobile + desktop, checkout header, footer, order email) + boohoo-white / boohoo-mark / boohoo-mark-white / boohoo-premier (+ white) new; Deliver+ lockup (deliverplus/boohoo.svg + checkout) rebuilt from the new logo + the BH deliver+ wordmark (193.5 × 15); Premier Club box: new lockup, pink ground, black ink, black ADD (was beige + burgundy); app icon assets/brands/app-icons/boohoo.png + boohoo-splash.png (pink, black logo). Tokens (code + Figma Boohoo mode): brand primary #F8B5CC → #F9D7EA; shades re-derived from it — light 1–4 #FAE1EF #FCE9F3 #FDF0F7 #FEF6FA, dark 1–3 #F5C2DF #F0B2D5 #E495C2, primary dark #CD6AA2, neutral #F6E3EE; pink USP bar + Deliver+ ground #FFE0EB → #F9D7EA; Deliver+ link / tick #BB305F → black. Primary button stays black with white text, the boohooMAN button palette (Jake 9 Nov) · by boohoo refresh",
   "Modal close (.modal-x, --inv, the sign-up split) is always a 1px line: new icons/lib/icons-close-16.svg drawn on a 16 grid at stroke 1 (the 24-grid icons-close.svg at 16px drew 0.67px); toast close uses the new 12-grid icons-close-12.svg the same way · by Virtual Stylist v2, Jake 9 Nov",
   "Virtual Stylist intro: one final design (Jake’s Figma 15921-1329) replaces layouts 1 to 10: Welcome to Virtual Stylist + Take or upload a photo to see yourself in this product, an example photo (94 wide, 2:3, tilted 2deg, --shadow-pill) beside For the best results... and four plain icon tips (Use bright lighting, Face the camera, Use a full length photo, Mirror selfies are OK!; new glyph .vsi--mirror = icons-app). Retired: o.layout / DG_vsIntro.LAYOUTS, .howto, .vs-tl, .ptips, .vs-chips, .vs-steps, .vs-tip, .vs-checks, .vs-sec / .vs-sec-h · by Virtual Stylist v2, Jake 9 Nov",
   "Rail card text levels match Jake's Figma review variants (13939:19737 … 13939:26225): Brand + name · Name (2 lines) · Brand - Name and Brand Name (brand strong, one run) · Price only; swatches on / off separately (o.swatches); qaShape square / round on any fascia · Product carousel prototype: Added to Bag scenarios with real debenhams.com products (projects/product-carousel/recs.js, images 2:3) — Complete The Look (outfit pieces), You May Also Like (similar dresses), Frequently Bought Together (the bag holds Prada Paradoxe), Little Extras Under £10 (the till); cards / list / bundle, card size small / large, image gap 4px / none · by Product carousel prototype, Jake 9 Nov",
   "Top toast (.toast--top) to the DS Figma Toast 5146-559 exactly: message 14/18, action 13.33 strong in --text-link, 16 gap to a new 12px close (.toast-x), inside .toast-end; centred 400 wide on desktop. New drop-in assets/ds/toast.js (DG_toast / DG_toastTop): the toast sits under the USP banners (--toast-top) and follows the sticky black bar when the page scrolls · by Virtual Stylist v2, Jake 9 Nov",
   "Product carousel prototype: Added to Bag versions are now Live · Complete the look · Frequently bought together (cards — carousel or 1–3 row grid —, a list, or the DS bundle); Save your bag, Save for later and both toasts removed; a Cards setting (Full · No swatches · Clean · Price only) drives every rail on every screen · by Product carousel prototype, Jake 9 Nov",]
 },
 {
  "d": "2026-11-03",
  "v": "2026.11.03",
  "title": "Virtual Stylist intro: six start screen layouts (Jake’s final options) · copy up to 12/16",
  "by": "Virtual Stylist v2 (vto-prototype/v2, Jake 3 Nov)",
  "added": [
   "Button pair .bd-pair (two buttons side by side, equal width, 8 apart) · Modal .mdl--compact (16 gaps) / .mdl--tight-hd and sticky CTAs in a scrolling body (.mdl-sticky--float shadow only · --fade white gradient; title stays pinned) · by Product carousel prototype (Added to Bag), Jake 3 Nov",
   "BNPL .bnpl--legal — the Figma BNPL component (2969:10048): PayPal · Pay+ · Klarna · Clearpay logos, the legal line (12/17, --text-secondary), See more on its own line (14, underlined); catalogue variant Logos + legal · Bag summary options o.wf (fixed Worry-Free amount) and o.pay3 (pay-in-3 amount) · by Product carousel prototype (Figma match), Jake 3 Nov",
   "Figma library: Payment Buttons Type = PayPal Checkout (Yellow, PayPal word mark + Checkout 15 medium) · Bag Section Header (box icon + Delivered by + seller strong, Seller text property) · Bag / Desktop + Mobile / Order Summary rebuilt to Bag 2026 from DS instances (Button (new) Primary, Payment Buttons, Payment Icons, Icons / Tick Circle Fill, Icons / Down) with booleans for the free-delivery line, Sales Tax, Gift Card, Donation and the duties note; review page Desktop 1440 · Bag rebuilt to the Bag 2026 desktop board (1337:256981) from instances only — Your Gifts, Delivered by Debenhams (5 cards), Delivered by BrandX (9 cards), Need A Top-Up?, Choose 2 free samples | Order Summary, Promo Code · by Bag 2026, Jake 3 Nov",
   "Figma library (✅ Accordion page): Accordion gets Contents = At a Glance (the PDP ✓ tick list: 24 circle, 1px border/default, 14/22 light copy, 8 between) and a new PDP Accordion Set component — DS Accordion instances stacked the Footer way (16 between, Grey 2 hairline between rows and under the last): At a Glance open, then Description · Product Details & Care · Delivery · Returns · Seller Information · Manufacturer. Swapped into all 15 PDP / mini bag review screens (were bare 20px headers over the captured list) · by Product carousel review, Jake 3 Nov",
   "Figma library (Bag page): Bag Product Card — the Bag 2026 card as one component set, Type = Standard · Out of stock · Quantity unavailable · e-Gift Card · Membership · XCover add / added · Subscribe & Save · Taskrabbit · Free gift · Complimentary sample · Taggstar · Customised · Pre-order, Device = Mobile 358 (12px) / Desktop 628 (14px), built from the code (.bpc) with DS icon instances (Wishlist, Delete, Add, Minus, Alert, Calendar, Xmas, Info), Button (new) and Navigation Button; and Bag Sections (Your Gifts · Delivered by · Need A Top-Up? · Choose 2 free samples · out-of-stock banner). The old Bag / Mobile + Desktop Product Card sets are marked superseded; the review page Bag screens use the new set · by Bag 2026 (CYyGeUDy4w02enV7uFxZ6W 1337-250005 / 1337-256972), Jake 3 Nov",
   "Figma library: Button (new) Type = Tertiary XS Outline — the outlined XS button (.bd.xs.line: surface/raised, 1px border/default) for Remove on the bag card add-ons · by Bag 2026, Jake 3 Nov",
   "PDP Review Stars (.pc-stars--pdp + Figma component set on 🟢 REVIEWS, Rating = 5 … 0, Count text property): live debenhams.com spec — 16px stars 4 apart, count Light 16 underlined; the PDP template and Shopping agent PDP use it (were the 12px card stars) · by Product carousel review, Jake 3 Nov",
   "Figma library: PDP Price component set (PDP page, Type = Default / Sale / Sale + code / From price) — its own PDP component, to live: now SemiBold 24/30 price/sale #C90000 (the Core PDP file used #D33F3F), was Regular 24 struck, Save 30% Regular 24 plain red, 16 between, row wraps 8px, code line Regular 14/21 12 under · by Product carousel review, Jake 3 Nov",
   "Figma library: new page ✅ Shopping Agent — the Ask Deb / Google GECX agent components moved into the DS from Zi4qRcAFTELiCvFIl29mJC 162-7209 and rebuilt natively (Agent / Header · Desktop + Mobile, Ask, ADD TO BAG, Chat input, Context chip, Prompt pill · soft + outline, Quick reply, Starter prompt, Suggestion pill, Rail arrows; DS library icons); the DS Header’s Ask now points at the DS-owned Agent / Ask · by Product carousel review (Figma page 13639:10), Jake 3 Nov",
   "Figma library: Delivery grid component set (PDP page, Device = Mobile / Desktop) from the code version (delivery.js — option B tabs, format 3, returns + seller in the accordions) · by Product carousel review (Figma page 13639:10), Jake 3 Nov",
   "Figma library: Subscribe & Save component set (BANNERS & MESSAGING) — PDP box (ADD → modal), modal mobile bottom sheet, modal desktop; S&S / Product Card Banner is the bag version · by Product carousel review (Figma page 13639:10), Jake 3 Nov",
   "Virtual Stylist intro options (assets/ds/vs-intro.js o.steps / o.tips, DG_vsIntro.OPTIONS; catalogue variants for all four): How it works as .howto step cards (Jake's Figma 15874-1068) or .vs-tl timeline (number on a line, title 14/20 strong + line 12/16, glyph right); For the best result as .ptips cards or .vs-chips pills (wrapping, centred, --radius-pill). Five formats were reviewed first (cards, timeline, product hero, photo guide, step by step); Jake kept timeline + the pills, the others are gone · by Virtual Stylist v2",
   "Full-screen layer .vs-layer--fs: the intro is .mdl--fs on phones (header top, body centred and scrolling, footer pinned: consent, Camera / Upload, note) · by Virtual Stylist v2"
  ],
  "changed": [
   "Spacing to the Figma review screens: Ask Deb pills (.ai-pill--wrap) 44 tall (was 40) · At a Glance chips 12 / 16 apart inside an accordion · bag summary OR row 8 above / below at 16/23 and the pay-in-3 row padded · Promo Code title 18/23 · USP wrapped lines 4 apart · prototype: Added to Bag sheet 16 gaps, Handpicked rows 40 apart and straight under Subscribe & Save, Create the Look under the accordions, bag rails 16 in / 24 apart; new Added to Bag options — Complete the look as a carousel or a 1–3 row grid, sticky CTA gradient / floating, Bag CTA View Bag / Checkout / Both (side by side or top and bottom) · by Product carousel prototype, Jake 3 Nov",
   "Product toast (.toast--prod) sits under the USP banners on every device (was the bottom on phones) — --toast-top = last USP row in view + 12 phones / + 16 desktop, drops in from above (Figma review 13761:7583 / 13819:184848) · prototype: two toast versions (thumbnail · edge image) as their own mini bag options, no countdown line (as the Figma), mini bag CTA Save My Bag, card text 12 + scale to fit fixed (the 14 / 12 and Fit panel options removed) · by Product carousel prototype, Jake 3 Nov",
   "Product carousel prototype matched to the DS Figma review screens (13639:18, mobile): USP code bar without the countdown, no bag count, PDP price £98 / £140 / Save 30% + code line, Size Selector (Size: · Size Guide + Icons / Measure · M out of stock, none chosen), PayPal word mark, the Figma Ask Deb prompts hugging their copy, the DS Membership box, BNPL logos + legal, At A Glance chips (Relaxed fit), the DS Footer (footer.js), rails pinned to the Figma products; Bag = the Figma Bag (Bag Product Cards Coast + Prada with Subscribe & Save, both checkouts, Promo Code, Bag 2026 summary, You Might Also Like + Recently Viewed); mini bag plain threshold, size M, Email My Bag enabled · fixed: At a Glance chips now wrap inside an accordion body (.acc-b ul forced a column) · by Product carousel prototype, Jake 3 Nov",
   "Bag order summary (bag-summary.js, DG_bagSummaryHTML) to Bag 2026 (CYyGeUDy4w02enV7uFxZ6W desktop 1337:256981 · mobile 1337:257572), now the default: title 18 strong · Subtotal · Delivery (£0.49 strong + £2.99 struck) · Worry-Free Purchase® · Discounts link (--text-link + chevron) · optional rows (o.extra: Sales Tax, Gift Card, Donation) · hairline · Order Total; no Deliver+ add-on row or Discounts included block (o.live:true keeps the 6 Oct live capture); Debenhams wallets: PayPal Checkout, Pay in 3 interest-free payments, Klarna #0B051D; 9-card row; desktop card top line: You have qualified for 49p delivery · Figma Bag / Desktop + Mobile / Order Summary rebuilt to match · by Bag 2026, Jake 3 Nov",
   "PDP accordion titles (.acc-set .acc-h): Medium 16/20, the DS Accordion title (was SemiBold 15) · by Product carousel review, Jake 3 Nov",
   "Virtual Stylist intro: layout 6 (Welcome to Virtual Stylist, timeline + pills) is now the default when o.layout is not set (was 1) · by Virtual Stylist v2, Jake 3 Nov",
   "Figma: one library. The code-built file “Debenhams Group DS - DO NOT USE” (mkimeRGTWN8UDHq55Cbk9D) is retired and merged into Debenhams Design System (aIHmkCaTy9c5EWOxAGw0So): its 111 constant tokens as a new Core collection and its 122 brand tokens added to the existing DG Group Design System collection (same 10 brand modes; 33 colours point at the existing palette swatches instead of repeating them), its 28 text styles (Mobile/* Desktop/*, bound to the brand font), Shadow/* and Gradient/* styles, and the 18 components the DS file didn’t already have — Text link, File drop, Stock alert, Empty state, Spinner, Tooltip, Grid view toggle, AI Generated strip, Option label, Membership pill, AI pill, Entry chip, AI modules, Sign in, Google PDP prompts, Page title, Square tile rail, File cover — in “… (from code)” boards on their pages, bound to the local tokens. The other 62 already had a DS-file component and were not copied twice. assets/ds/figma-lib.js now points every component page at aIHmkCaTy9c5EWOxAGw0So · by DS maintenance, Jake 3 Nov",
   "Compact rail cards (.pc--compact, the mini bag Complete the look rail): price 12/16, the same size as the name (was 14/21, some 13), now · was 4px apart on one line, and the -X% is dropped — it wrapped onto a second line on the 100px cards; the same for every rail / grid card under 160px (Handpicked grid, Create the Look picker): .price-blk--rail is a size container and drops .save under 160 · code + Figma Product carousel 2026 / Carousel · Compact + quick add · by Product carousel review, Jake 3 Nov",
   "PDP price row (.price-blk--pdp): 8px row gap when it wraps (live mobile drops Save onto a second line) · Figma review screens swapped Price → PDP Price and Product Rating → PDP Review Stars (code line folded into the price, no overlap) · by Product carousel review, Jake 3 Nov",
   "Virtual Stylist intro: consent now gates Camera / Upload, as live (debenhams.com): tapped unticked they show .vs-warn, Please tick the box above to continue (12/16 --text-error under the copy), and do nothing; ticking hides it · by Virtual Stylist v2 (match live), Jake 3 Nov",
   "Virtual Stylist intro: the six final start screen layouts from Jake’s Figma (LxHqA4rFpRYNWJu8vzn18X 15898-33012) replace the steps / tips options: o.layout 1 to 6 (DG_vsIntro.LAYOUTS) · step cards now 2 × 2 with four steps (new fourth step: Pick your size and add to bag, quick-add glyph .vsi--quick-add) at 14/18 · timeline copy Add a photo / Check the look / Add To Bag, its line in --text-primary · tips copy Use a full length photo (was Head to toe in frame), tiles 56 tall, pills gap 8 / 4 · headings centred or left (.vs-intro--left) · Welcome version (.vs-intro--welcome) · phones back to the slide up (.vs-layer--up + .mdl--up, hugging the content); the full-screen .vs-layer--fs retired · by Virtual Stylist v2, Jake 3 Nov",
   "Product card letter-spacing: always 0, the font’s default — the compact card brand line had .04em and PLT’s uppercase names .02em · by Product carousel prototype (mini bag cards), Jake 3 Nov",
   "Free delivery threshold in a container (.thresh--box) to Jake’s Figma (13732:374 / :377): Grey 05 ground (#FAFAFA), radius 4, 14 light copy with the amount strong, Grey 2 track; qualified = 20px tick circle in the action colour — one spec on every device · by Product carousel review (Figma DS page 13639:10), Jake 3 Nov",
   "Product toast (.toast--prod) to Jake’s Figma (13732:383 / :386), one spec on every device: thumbnail 33 × 50 radius 4 inset 4 (58 tall) · --edge 40 × 60 flush left (60 tall) · card radius 8 · shadow 0 0 20 12% · 14 light + View Bag 14 strong in the action colour; the 24 × 36 thumb and --square styles retired · by Product carousel review (Figma DS page 13639:10), Jake 3 Nov",
   "Navigation Button (.nav-btn + .nav-btn--left / --right / --up / --down / --close) for EVERY directional arrow (Figma 9144-1896): carousel arrows, PDP gallery arrows (shadow was --shadow-pill), home tile arrows (were 90% white with a keyline) · by Product carousel review (Figma DS page 13639:10), Jake 3 Nov",
   "Wishlist = the Icon Only Button (Figma 3504-281) everywhere: .wl-btn and .pc-iconbtn take its shadow 0 0 14 −4 25% (were --shadow-puck / 0 2 8 14%) · by Product carousel review (Figma DS page 13639:10), Jake 3 Nov",
   "Virtual Stylist intro: every line of copy 12/16 or larger (steps and tips were 10/13), Jake 3 Nov: too small; consent row moved into the pinned footer; phones now full screen (was the .mdl--up slide up); full screen enlarges the step cards (32px glyphs) and tip tiles (56 tall) · by Virtual Stylist v2"
  ]
 },
 {
  "d": "2026-11-02",
  "v": "2026.11.02",
  "title": "Virtual Stylist intro modal · Product carousel banked (tabs · gaps · Create the Look + picker · card format · swatches · full-width rails) · Modal drawer · Master prototype · Home page template · carousel markup builder · export fix for masked icons · Delivery grid default: option 3 + accordions · Request form family (.rf) · Multi-line text field · field hint · Screenshot Brief tool · Geologica TTFs · Membership box and Deliver+ in the Figma library · Message banner warning tone · Brand Room logo downloads (SVG + 500px PNG)",
  "by": "Virtual Stylist v2 (vto-prototype/v2, Jake 2 Nov) · Master prototype (projects/master, Jake 2 Nov) · Screenshot Brief (tools/screenshot-brief, from the App Store / Play Store screenshot template vebOMPnswl12a9JehBSt1m 127:897, Jake 2 Nov) · Order + dispatch emails (debenhams-order-emails, Order Emails Figma fZlGOMy8NZR9PdWKDJ8HAG, Jake 2 Nov)",
  "added": [
   "Bag line item .bag-item--mini (Bag 2026 1337-253306 — every mini bag / added to bag version): 1px Grey 2 box, padding 12, 68 × 102 image; brand - name · size / colour · price in 12/15 lines 8 apart; .bag-item--in drop-in when an item is quick-added; catalogue variant Mini · by Product carousel prototype (mini bag), Jake 2 Nov",
   "Product toast .toast--prod (the mini bag “toast” version — Added to Bag with no modal): the top toast with a 48 × 72 product image (.toast-img), Added to Bag over size / colour, price (.toast-tx), View Bag underlined, a 2px 6s countdown line (.toast-timer); desktop top right, 400 wide; catalogue variant Top · product · by Product carousel prototype (mini bag versions), Jake 2 Nov",
   "Quick add on rail cards: DG_pcarHTML({qa:true}) puts the DS circle quick add (.pc-iconbtn, square on boohooMAN / KM / Brand Room) bottom right of the image (.pc-actions--qa); data-qa = the item, tick + disabled once item.added — Complete the Look in the mini bag · by Product carousel prototype (mini bag versions), Jake 2 Nov",
   "Virtual Stylist intro (catalogue entry vs-intro, group AI; assets/ds/vs-intro.js DG_vsIntro.html / .layer / .wire / .note): the Virtual Stylist launch modal on the DS .mdl, slide up on phones, centred .mdl--md from 600px. How it works .howto (three numbered steps on sunken cards, number in the fascia action colour, square on PLT) · For the best result .ptips (2 x 2 tips) · masked library glyphs .vsi (add-photo, ai, hanger, light-bulb, dress, account, image) · 18+ consent .vs-consent (DS checkbox, .vs-legal; a record, never a gate) · Take a photo .bd pri / Upload a photo .bd sec · .vs-note try-on count. Loaded on the site (index.html) · by Virtual Stylist v2",
   "Bag 2026 (Figma CYyGeUDy4w02enV7uFxZ6W, mobile 1337:250006 / desktop 1337:256981) banked in the DS Bag template and the Master prototype: Bag product card (.bpc family + assets/ds/bag.js DG_bag: standard, out of stock, quantity unavailable, e-Gift Card + details modal, membership, XCover add / added, Subscribe & Save, Taskrabbit, Taggstar strip, free gift, complimentary sample, customised, pre-order + dispatch note, Move to your Wishlist? modal) · Bag sections (Your Gifts, Delivered by <seller> (n), Need A Top-Up?, Choose N free samples, out-of-stock banner; desktop white panels 676 | 390 on --surface-sunken) · Rewards banner (.rwd) · catalogue entries Bag product card, Bag sections, Rewards banner · by Jake, 2 Nov (Bag 2026)",
   "Small outlined button .bd.xs.line (Remove) · bag price .price-blk--bag (12 / 14) · Taggstar .sp-bag--sm (reduced height, 16px icon) · live modal layer .bag-layer · bag imagery templates/img/bag/ (2:3 webp) · by Bag 2026",
   "CORE RULE · product images are 2:3, everywhere: token --ratio-product (tokens.css), utility .ratio-product, Foundations › Product imagery (do / never). Every product-image component uses the token: product card, PDP gallery + thumbs, colour swatch, bag item, Bundling, Subscribe & Save, Get the Look, agent chat tiles / detail / look, wishlist collection thumbs · by Jake, 2 Nov (hard rule)",
   "Create the Look picker: DG_lookPicker(o) in assets/ds/carousel.js — the DS sheet with one reel per category (small-header Product carousel of pickable cards) and Add to bag (n); opened by any tap on a Create the Look rail; reels from templates/feed.js DG_feedReels · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Pickable product card .pc--pick: the DS checkbox (.chk) bottom right of the image, picked = 2px --icon-action ring · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Modal type .mdl--side (desktop drawer: full height, 480, flush right, slides in from the right — mini bag / added to bag) and the tick header .mdl-tick (“✓ Added to Bag”); catalogue variants Drawer + tick header · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Product carousel .pcar--full (page rails to the page margin with fixed 248px desktop cards — a wider screen shows more products) and .pcar--no-arr (no chevrons) · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Rail card swatches: button.pc-swatch (aria-pressed); a tap selects the colour and swaps the card image to its shot (data-img; sample feeds tint, .pc-img--tint) · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Tokens --pcar-gap-x / --pcar-info-x: PLT + The Brand Room rails have no column gap, card text inset 4px · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Bundling · Complete Your Purchase With (.bndl family + assets/ds/bundle.js DG_bundle.html / .wire, catalogue entry Bundling, PDP modules): the product being viewed (Currently viewing) + items bought with it, a ticked DS checkbox on each image, brand · name · card price · Colour · size select; Total and ADD TO BAG (n) follow the ticks; a ticked item without a size gets the select error + “Please select a size”; fires dg:bundle for the page’s added-to-bag. In the PDP template under Subscribe & Save, so in the Master prototype · by Jake, 2 Nov (live Debenhams PDP)",
   "Select: .fsel--sm (40px, 14px), .ph grey placeholder, .err error border; catalogue variants Small · empty and Error · by Bundling",
   "Home page template templates/home.html: DS header + USP banners, each fascia’s live homepage (usp-banner captures), every product module as the Product carousel (large header + tabs) plus Top Sellers (medium + View all), footer; ?brand=, protoSet / protoPing like the other templates · by Master prototype",
   "Product carousel markup builder: DG_pcarHTML(o) + DG_pcarCard(p,o) in assets/ds/carousel.js (catalogue entry product-carousel markup: size, title, sub, tabs, View all, per, grid, look, bleed, items) so no page hand-builds a rail · by Master prototype",
   "Rail feeds templates/feed.js: DG_feed(brand,start,n,step) / DG_feedImg from each fascia’s PLP set (Debenhams p7 skip handled once) · by Master prototype",
   "Export fix assets/ds/export-masks.js: while html.exporting, every CSS-masked glyph (carousel arrows, AI icon off Debenhams, masked hanger, Deliver+ ticks) is swapped for its SVG recoloured to the element colour, so html2canvas exports show them instead of solid squares; loaded by the Home / PDP / Bag templates · by Master prototype",
   "Master prototype (projects/master/): the whole experience (Home → PLP → PDP → Bag) on the DS page templates as they stand, every fascia, click-through journey, banked / not-banked lists · by Master prototype",
   "The Brand Room › Brand list (#br-brands): logo downloads on every brand card, transparent background, black or white. SVG for the 35 brands Figma has as vectors (13 new masters exported from the Brand Room Figma Content / Logos 342:10634 into assets/brands/brandroom-portfolio/svg/: adidas, Aquascutum, Armani Exchange, Clarks Originals, Crew Clothing, Crocs, HUGO, Ipanema, Juicy Couture, Lacoste, Napapijri, Sergio Tacchini, Tommy Hilfiger; colour lockups keep their colours). A 500 × 500 PNG for all 68 (assets/brands/brandroom-portfolio/png/, from the vectors or the full-res Figma source images). An All logos ZIP (brand-room-logos.zip). DG_BR_BRANDS.svg lists the vector brands · by Brand Room logo downloads (Jake 2 Nov)",
   "Text field variant .fld--area (multi-line): the .fld outline, floating label and caret on a textarea that grows with its text from 96px (field-sizing: content, resizes vertically); the idle label sits on the first line and floats to 12 on focus or once filled; catalogue variants Multi-line and Multi-line · filled · by Screenshot Brief",
   "Field hint .fld-hint: 12 grey (--text-secondary) helper line gap 2 (8px) under any field, for what to write (never the label itself); catalogue variant With hint · by Screenshot Brief",
   "Figma library (Debenhams Design System, page Banners & Messaging, board Membership box & Deliver+ · PDP): Membership box · Debenhams Unlimited · mobile and Deliver+ · PDP banner · mobile, 358 wide, matching .member-box and .dplus (grey #DCDCDC and --dplus-bg #E8F4F2 grounds); they were in code but missing from the library · by PDP delivery grid (Figma screens lost the box fills)",
   "Request form (.rf family, Forms, catalogue entry Request form): the look of the team’s internal intake forms (UX Design Request), Geologica Light 300 + SemiBold 600 only. .rf-head, .rf-steps stepper, .rf-card, .rf-h / .rf-hint, .rf-field + .rf-label + .rf-sub, .rf-input (input / textarea / select, filled #F2F4F4, teal focus), .rf-row, .rf-chip, .rf-radio card + .rf-radio--check tick card, .rf-tag, .rf-block repeatable item + .rf-num + .rf-ibtn, .rf-btn, .rf-nav (.rf-cta + .rf-back), .rf-note; tokens --rf-* in tokens.css (grey copy stays Grey 4 #767676) · by Screenshot Brief (Jake 2 Nov: look like UX Design Request, light + semibold only)",
   "Fonts: Geologica Light + SemiBold static TTFs (assets/ds/fonts/geologica-light.ttf, geologica-semibold.ttf, OFL, from Google Fonts) for embedding in PDFs made in the browser (jsPDF) · by Screenshot Brief",
   "Planning and Tools: Screenshot Brief (tools/screenshot-brief/), the ecom → creative screenshot brief as a form: app, listing type, sets, build, markets, test account, up to 10 screens (reference screenshot OR website link, headline, subline, notes), the before-you-send checklist; four steps on the Request form family (About the brief · Screens · Checklist · Review & export), every fascia in the picker (app icon or logo on the PDF), draft kept in the browser; Export PDF (A4, Geologica embedded, clickable links, gaps flagged in red) · by Screenshot Brief",
   "Message banner tone .msg--warning: Yellow bar (--warning-bar #FFD600) on Light Yellow (--warning-bg #FFFBE6), info icon, bold lead line; tokens --warning-bar / --warning-bg; catalogue variant Warning · by Order + dispatch emails (the Figma \"Delivery Information\" banner shown when an order ships in 2+ parcels)"
  ],
  "changed": [
   "Top toast: fades and eases in / out (300ms, .toast--out to leave) instead of popping; the product toast’s View Bag uses the DS action colour like every top toast (was underlined ink) and its countdown line is a faint action-colour rule · by Product carousel prototype (mini bag toast), Jake 3 Nov",
   "Mini bag / added to bag title is just “Added to Bag” — no tick (Bag 2026): .mdl-tick removed from the DS (CSS, Modal catalogue header variant, drawer example) · by Product carousel prototype, Jake 2 Nov",
   "Quick add on rail cards: top right of the image (the wishlist slot, was bottom right); the tap that adds pops the button into a tick (.pc-iconbtn.pop) · PDP template: Subscribe & Save now sits above Handpicked For You · by Product carousel prototype (mini bag), Jake 2 Nov",
   "Virtual Stylist intro matched to Jake's Figma (VTO LxHqA4rFpRYNWJu8vzn18X 15874-1068): How it works cards lose the border; step + tip copy 10/13 regular (12/16 from 600px); tips min 44 tall, copy Use bright lighting · Head to toe in frame · Face the camera · Use a plain background; consent gap 3 (12px), legal in --text-primary, links --text-link strong, no underline; Upload glyph = icons-image · by Virtual Stylist v2",
   "Virtual Stylist intro: Camera / Upload side by side at every width, both .bd pri with their 20px glyphs (.ic20, library icons-camera / icons-upload), equal halves, gap 2 (8px), as the v1 Add a Photo sheet (were Take a photo / Upload a photo stacked, primary + secondary) · by Virtual Stylist v2 (Jake review, 2 Nov)",
   "Virtual Stylist intro: consent checkbox centred on its copy, as the DS Checkbox (.chk-row, was the top-aligned .chk-row--lg); How it works glyphs 32 → 24px, copy 13/17 → 12/16 (14/20 → 13/18 from 600px) · by Virtual Stylist v2 (Jake review, 2 Nov)",
   "Modal layer: .vs-layer / .vs-layer--up join the delivery and Subscribe & Save layer rules (.dopts-layer, .sns-layer): fixed, scrim, centred or slide up · by Virtual Stylist v2",
   "Quantity stepper (.qty) to its Figma (Bag 2026 Quantity Selector 1234:76756): Grey 3 border (was #767676), 12px library icons (were text glyphs), delete at 1, plus disabled at max, remove-only state, pressed --surface-neutral, 44px tap zones; catalogue variants · by Bag 2026",
   "Bag summary (bag-summary.js): options {thresh, rewards, promo} on DG_bagSummaryHTML and {after} on DG_bagTopHTML; mobile summary on white (was --surface-sunken); Order Total line 14 (was 16) · Bag template rebuilt on Bag 2026 · by Bag 2026",
   "USP banners (usp.js + components.css): the black bar is sticky as live — pinned to the top while the header and the other USP rows scroll off (row sticky:true, default the black row; .usp-row1--sticky, the .usps mount is display:contents); desktop message cells sit in the page container (new token --page-max 1440) instead of stretching edge to edge · by Product carousel prototype (live Debenhams PDP), Jake 2 Nov",
   "Product carousel (components.css .pcar): one gap everywhere — 4px between cards (was 8), 16px grid rows; images locked 2:3; grid 3 across on mobile (was 2); Create the Look = grey --grey-05 panel on mobile only, a plain image rail on desktop; tabs 36px / 14 / 4px gap in the fascia primary-CTA style, vertically centred on the title on desktop (were 32px chips, bottom-aligned); chevrons = the DS Navigation Button (9144-1896: 0 0 14px 10% shadow, 16px 1pt glyph, no shadow pressed); mobile / touch free scroll (no snap) · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Product card on rails (carousel.js DG_pcarCard / DG_pcarInfo): always (Sponsored) · brand · 2-line name · now · was · -X% · swatches — the brand line is never dropped (PLT / Warehouse included); rail price wraps when narrow (.price-blk--rail) · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "DG_pcarHTML options: id, full, arrows:false, tab, round, brand; View all off everywhere (Jake) · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "templates/feed.js: every item has a brand (feed → the brand that opens the name → the fascia), -X%, sample swatches, Debenhams sponsored slots (opts.sponsored); DG_feedBrand · DG_feedReels · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "PDP template (templates/pdp.html): Handpicked For You — the grid, 3 across, under the BNPL box (S.hpRows, default 2) · under the page, full width: Create the Look (→ picker) · We Think You’ll Like (Debenhams 2nd + 4th Sponsored); S.hp / S.look / S.car switch each off. Replaces Create The Look · Why Not Treat Yourself? · Recently Viewed · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Home + Bag templates: rails full width to the page margin, brand always, no View all · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "Catalogue: Product carousel entry rewritten to the banked spec (samples from the live PDP rails: Sponsored, swatches, -X%); Modal entry gains the drawer + tick header · by Product carousel prototype (projects/product-carousel), Jake 2 Nov — banked from its review",
   "PDP gallery (.pdp-gal) is endless: next on the last image goes to the first, prev on the first to the last, and the mobile swipe loops; thumbnails and the progress bar follow. New behaviour file assets/ds/gallery.js (DG_gallery), used by templates/pdp.html in place of its inline gallery code; off while exporting · by Jake, 2 Nov (PDP gallery)",
   "Product carousel arrows (assets/ds/carousel.js): a click now pages by the cards in view minus one, so the last card stays on screen and nobody loses their place (was the whole view) · by Product carousel prototype (projects/product-carousel), Jake 2 Nov",
   "Delivery grid defaults (assets/ds/delivery.js): DG_delivery.grid() now gives the chosen design with no options — option B tabs (o.layout 'tabs'), row format 3 “Get It By · Tomorrow / method” (o.fmt 3) and returns + seller info in the PDP accordions, not the box (o.retIn / o.sellerIn 'acc'). Pass 'list' / 1 / 'box' for the old looks. Catalogue: the default is the first variant; the in-box variants say so. templates/pdp.html, the Shopping agent PDP (was still option A, now B + Returns / Seller Information accordions) and the PDP delivery grid prototype all default to it · by Jake, 2 Nov (delivery grid decision)",
   "PDP template: recommendations under the page — Create The Look (image only) · Why Not Treat Yourself? (View all) · Recently Viewed, DS Product carousel 5 + peek (placements from the Product carousel spec) · by Master prototype",
   "Bag template: You Might Also Like under the bag, Product carousel medium + View all, 4 + peek · by Master prototype",
   "Message banner warning tone .msg--warning matched to the Order Emails Figma banner (745:3513): bold lead line dropped, black info icon centred, copy 14 regular black at 18 · by Order + dispatch emails (Jake 2 Nov)"
  ],
  "fixed": [
   "Sticky black USP bar sat on top of the search suggestions (and the search field): it took --z-sticky (200) over the overlay; now --z-raised — above the page, under the header, the search overlay and every modal · by Product carousel prototype (Search), Jake 2 Nov",
   "Product carousel tabs: gap 2 (8px) between tabs (was 4px) · by Product carousel prototype, Jake 2 Nov",
   "Product carousel edge to edge everywhere: rails inside a modal or sheet were clipped 8px short of the window on mobile (they bled 16px into 24px padding, and the slide-up body’s scroll box cut them at the padding). .pcar--bleed now takes the container’s padding (--pcar-bleed: page 16 · modal / sheet 24, every device) and the .mdl--up / .mdl--alert body’s scroll box reaches the window edge — cards scroll off screen unclipped, the first card still starts on the margin · by Product carousel prototype, Jake 2 Nov",
   "Off-ratio product images brought to 2:3: colour swatch 60 × 89 → 60 × 90 · bag item 99 × 148 → 99 × 148.5 · Subscribe & Save 72 × 96 (3:4, contain) → 64 × 96 cover · Get the Look square side images → 2:3, and the large one is now 2:3 too (columns sized for it) · agent chat Complete the Look free height → 2:3 · chat product detail image no longer stretched to 96 × 162 · wishlist collection thumbs 50 × 50 → 40 × 60 (quad 20 × 30). Bundling text takes the fascia body weight (Debenhams Light 300; it was rendering 400) · by Jake, 2 Nov",
   "Site: ⌘K spotlight search back to the centred dark panel — it shared .pal with the colour palette boards (white, padded, left), .ft with the DS footer and .sel with the select wrapper (chevron on the highlighted row); now .spot / .spot-ft / .ri.on. Sidebar icon row (navigation · home · search · theme · brand) is sticky; menu groups clip under it · by Jake, 2 Nov",
   "Product card round swatches (.pc-swatches--round, PLT): circles again — they used --radius-pill, which PLT's square-radius mode sets to 0, so they rendered square; now 50% · by Product carousel prototype, 2 Nov",
   "Grid view toggle (.gt mobile, .viewtoggle desktop): the view icons drew at ~11px. They are 24px library frames with a 16px glyph, and were squashed to 16. Now the frame shows at 24, so the glyph is 16 as Figma PLP-Grid-View 157:2718 / 157:2622 / 157:2674, with its right edge on the page margin, centred on the title. PLP tile view (3-col) keeps wishlist + bag on the image (157:2674); bag was hidden · by Jake, 2 Nov (PLP grid view)"
  ]
 },
 {
  "d": "2026-10-30",
  "v": "2026.10.30",
  "title": "Delivery grid: four row formats (Delivery Methods · Get It By · Get It By date only · Arrives By) · Wishlist collections",
  "by": "PDP delivery grid (projects/delivery-grid, Jake's Figma explorations 30 Oct) · App Prototype new wishlist (Best App Ever 1128:222949)",
  "added": [
   "Wishlist collections (.coll-list · .coll-new · .coll-row · .coll-thumb · .coll-promo, in the slide-up .mdl--up): Add to Collections (Create New, collections most recently added to first, Tick Circle Fill / Expand, SAVE), the first-wishlist onboarding panel (NEW + Organise your wishlist + collage), Create New Collection on .fld with the two errors; catalogue entry with three variants · by App Prototype (Jake 30 Oct)",
   "Delivery grid row format, DG_delivery o.fmt 1–4: 1 Delivery Methods (method / Arrives …, default) · 2 Get It By (Arrives Tomorrow / method · cut-off) · 3 Get It By (Tomorrow / method · cut-off) · 4 Arrives By (Tomorrow / method · cut-off). The box title and the modal rows follow it. PDP template takes S.dgFmt; prototype panel has a Row format card · by PDP delivery grid"
  ],
  "changed": [
   "Toast in the app: pinned above the tab bar (its width, 16px screen margins, 16px above it — above a docked CTA when one shows), not the top of the screen; iOS 26 the system Liquid Glass capsule, iOS 18 / Android the new .toast--app white card (0 4px 16px 12% shadow); action in the fascia CTA colour · by App Prototype (Jake + dev route, 30 Oct)",
   "Social proof (Taggstar) PDP in the app: in 1s after the page opens, out after 5s; a toast takes the moment (they never stack); iOS 26 system glass, iOS 18 / Android white 90% flat fill · by App Prototype (Jake 30 Oct)"
  ],
  "fixed": []
 },
 {
  "d": "2026-10-29",
  "v": "2026.10.29",
  "title": "Delivery grid: option B (tabs) chosen · box can be delivery only · slimmer badges · full-width modal tabs · Delivery method (checkout row)",
  "by": "PDP delivery grid (projects/delivery-grid, Jake 29 Oct)",
  "added": [
   "Toast variant .toast--glass (with .toast--top): the app's Liquid Glass toast — Figma 13557-10294 anatomy (message + strong --text-link action), white 90% over a 20px blur + 180% saturate, .5px white rim, 0 8px 24px 12% shadow; black text >= 15:1 over any photo (replaces the app's #2B2B2B 70% box that iOS 26 left at ~4:1); catalogue variant Glass (app) · by App Prototype (Jake 29 Oct)",
   "Social proof (Taggstar) PDP variants .sp-pdp--glass (same glass fill, text / icon / close --text-primary, ignores --sp-bg) and .sp-banner (ASOS-style: full width of the main image, flush to its bottom edge, square, 56px; the gallery's .ptags lift above it as they do the AI strip); taggstar.js takes glass:true and pos:'banner'; Taggstar prototype gets a Glass (app) switch and a Banner across the image placement; catalogue variants PDP · glass on the image / banner · by App Prototype (Jake 29 Oct)",
   "Product carousel: arrows under the rail (.rail-nav) — 28px DS arrow circles with the 12px lib chevron (1pt), left-aligned under the cards, for narrow rails (the agent chat); catalogue variant Arrows under the rail (chat) · by Shopping agent (Jake 29 Oct)",
   "Brand Room portfolio logos: Puma, Berghaus, Converse (assets/brands/brandroom-portfolio/<slug>-black.png + -white.png, 320px tiles from The Brand Room Figma, Content / Logos NRsu568JGzwCDq4egvkUbn: puma-white 546:18764, berghaus-white 550:16378, converse-white 546:18701) · by Brand Room deck template (projects/brandroom-deck, Jake 29 Oct)",
   "Token --shadow-ask (0 0 14px -4px rgba(0,0,0,.08)) + AI pill variant .ai-pill--ask — the Ask launcher beside search (no outline, white, 8% shadow) · by Shopping agent (Jake 29 Oct, Figma Zi4qRcAFTELiCvFIl29mJC 126:45)",
   "Icon: refresh (icons/lib/icons-refresh.svg, 24 frame, 1pt round stroke like icons-close) + modal header action .mdl-refresh (16px, left of the close on the title line) and a Modal catalogue variant Header · title + refresh + close — the Ask Deb chat’s start again · by Shopping agent (Jake 29 Oct)",
   "AI pill variant .ai-pill--suggest — search suggestion prompts (Need some help?): 14 regular (Debenhams Light), shadow 0 0 14px -4px rgba(0,0,0,.06); Search suggestions catalogue uses it · by Shopping agent (Jake 29 Oct, Figma Zi4qRcAFTELiCvFIl29mJC 75:467)",
   "Delivery method (.dmeth · .dmeth-list), Checkout group: the checkout Delivery Method row from Checkout 2026 (WChEtDPH0LcErdYFS9SESn · 3996:171709, Default / Unlimited User / Unlimited+ User) — optional DS radio, name 16/20 semibold (+ badge), optional 12 light descriptor, “Arrives …” 14 light, price 16 semibold centred on the right with the was price inline (16 light struck), FREE, rows 24px apart with no keylines · by PDP delivery grid (Jake 29 Oct: method styling on the PDP and modal to match checkout)",
   "Delivery grid: returns and seller info can leave the box (o.retIn / o.sellerIn 'acc'), so the Delivery Methods box is delivery only. DG_delivery.acc(o,'ret'|'seller') gives the Returns and Seller Information rows for the PDP accordion set (.dgrid-retacc, .dgrid-seller--acc: accordion body type, no icon); the seller placeholder, site name and marketplace seller link work the same in the accordion. Template: S.dgRet / S.dgSeller (default 'box', so nothing moves unless asked) · by PDP delivery grid"
  ],
  "changed": [
   "Figma Toast (DS library 5671:7604): the dark version is retired — Device=Web and Device=App are now the white Top, actionable toast (90% white, 7 blur, 0 0 20 10%, 16 padding, 14 Light + aqua SemiBold action, no tick), matching .toast--top · by Shopping agent (Jake 29 Oct)",
   "Header search field: camera ↔ search icon gap 16 → 20px · by Shopping agent (Jake 29 Oct)",
   ".ai-circle (AI icon launcher) shadow --shadow-puck → --shadow-ask (8%), hover --shadow-puck · Agent chat drawer: no shadow, flat white edge to edge top/right/bottom (the overlay is the only edge on the left) · by Shopping agent (Jake 29 Oct, Figma 131:451)",
   "Header search field (.hd-search, header.js): camera + search are the Figma library Icons / Camera + Icons / Search (icons/lib) at 20 × 20, 16px apart (were camera.svg / search.svg at native size in a 24 box, 20px apart); PLT keeps its own search glyph · by Shopping agent (Jake 29 Oct, Figma Zi4qRcAFTELiCvFIl29mJC 73:24)",
   "AI modules · Content prompts (.ai-cp): desktop is now prompt panel | image 50/50 (was 1 : 1.6), full width with no outer margin; the image can be an <img> as well as the .im slot · by Shopping agent (Jake 29 Oct)",
   "Agent chat: the slide-out follows the DS modal rules — DS modal header (.modal-hd · .mt · .modal-x), “Ask Deb” SemiBold 20 with no icon, 16px close on the title line 24px from the top and right, 24px in on every side, square corners · by Shopping agent (Jake 29 Oct)",
   "PDP template (templates/pdp.html): the delivery grid is now option B, Delivery / Click & Collect tabs (DG_delivery.grid layout 'tabs', Delivery tab first), replacing A (live sentences + James's PR). Every PDP built from the template gets it · by PDP delivery grid",
   "Delivery grid badges (.dgrid-badge, Fastest / Cheapest / programme): slimmer, 22px → 18px high, 12 semibold → 11/16 medium, 8px → 6px sides · by PDP delivery grid",
   "Delivery Options modal tabs (.dopts-seg): full width, half each on a 1px keyline, 12px → 14/18 so they're never smaller than the method names; copy now matches the box tabs, Home Delivery / Collect Nearby → Delivery / Click & Collect · by PDP delivery grid",
   "Delivery grid type hierarchy: 16 box title → 14 tabs + method names + prices → 12 arrival, cut-off and link. Box tabs (.dgrid-tabs) 12px → 14/18; See more link (.dgrid-more) 14 → 12/16 and the copy 'See more delivery options' / 'See more collection options' → 'See more' · by PDP delivery grid",
   "Membership pill: new .mpill--sm, the mini pill (16px, 6px dot, programme name only), from Checkout 2026 3996:173993 · by PDP delivery grid",
   "Delivery grid badges: the member method (Unlimited, Unlimited+, Royalty) is now the mini membership pill (.mpill--sm), was a black badge; Fastest / Cheapest are the same mini pill without the dot, 10px caps: Fastest green (--text-success #1F7A25 on --surface-success #EAF6EA), Cheapest black on #F2F2F2; was red and grey (hard to see) · by PDP delivery grid",
   "Delivery method: new .dmeth-list--sm, the PDP size (name + price 14/18, arrival + descriptor 12/16), used by the delivery grid box and the Delivery Options modal; checkout keeps the Figma 16/14 · by PDP delivery grid",
   "Delivery grid option B rows and the Delivery Options modal rows: now the Delivery method row without the radio (was .dgrid-row / .dopts-row: when on top, method under, 14px, keylines, was price under the price), so the PDP and modal match checkout. Free reads FREE everywhere · by PDP delivery grid",
   "Delivery grid title (.dgrid-hd h2, Delivery Methods): 14 medium → 16/20 semibold, the same as the other PDP box titles (Subscribe & Save) · by PDP delivery grid",
   "Delivery grid prototype (projects/delivery-grid): an In the box card (Returns info / Seller info: In the box · Accordion); option B only; A and C and their controls (James's PR third row, third-row badge, postcode) removed from the panel. delivery.js keeps 'list' and 'line' so older prototypes still render · by PDP delivery grid"
  ],
  "fixed": []
 },
 {
  "d": "2026-10-28",
  "v": "2026.10.28",
  "title": "File cover · colour palette in the DG Group Design System format",
  "by": "Brand Room logo audit + brand list (Jake 28 Oct) · Figma file cover template (App Store / Play Store screenshot template MASTER, Jake 28 Oct) · Figma merge into the Debenhams Design System (Jake 28 Oct) · Brand Room newsletter pop-up, Option A in Figma (projects/brandroom-signup, Jake 28 Oct)",
  "added": [
   "The Brand Room section (sidebar group) with a Brand list page (#br-brands): the master list of every brand The Brand Room sells today (60) and the brands launching SS27 (9 new, plus Lacoste womenswear, Tommy Hilfiger men's apparel, Monterrain and True Religion), each with its logo tile, the other fascias that sell it and its SS27 deal status; filter Live / Coming SS27, search, CSV download. Data in assets/ds/brandroom-brands.js (DG_BR_BRANDS · DG_BR_FASCIAS · DG_BR_DEALS) so prototypes can read the same list; logos in assets/brands/brandroom-portfolio/ (black + white PNG per brand, SVG masters for the 22 brands re-sourced 28 Oct) from the Brand Room Figma Content / Logos page (NRsu568JGzwCDq4egvkUbn 342:10634) · by Brand Room logo audit (Jake 28 Oct)",
   "Product carousel (.pcar · .pcar--lg / --md / --sm · .pcar--grid · .pcar--look · .pcar--bleed · --pcar-per + assets/ds/carousel.js), Product group: THE product rail and product grid for every placement — home (large header + tabs), PDP recommendations + Create the Look, search overlay, search results, added to bag, bag, empty bag. A placement changes only header size, format and cards in view; mobile 165px cards with no arrows, desktop N + 0.4 peek with 32px arrows centred on the image, hidden at each end. Prototype of every placement: projects/product-carousel · by Product carousel dev handoff (Jake 28 Oct)",
   "Debenhams Design System (Figma aIHmkCaTy9c5EWOxAGw0So), ✅ Product Carousel page: Product carousel component set (Header Large / Medium / Small × Format Carousel / Grid × Device Desktop / Mobile, View all boolean), built from the existing Product Card Carousel Header, Card Header, Product Card Carousel rails, Product Card and Navigation Button; board with the placements table, first on the page. Old carousel sets untouched · by Product carousel dev handoff",
   "Debenhams Design System (Figma aIHmkCaTy9c5EWOxAGw0So), Modal Windows page: Sign-up modal (The Brand Room) component set, Layout = Split (928 × 560, 4:5 image 448 × 560 beside the form) and Split · mobile (358 wide, 16:9 image on top, white close on the image); built from Input field, Button (new) and Icons / Close; Eyebrow + Title text properties. Mirrors .mdl--signup .sup--split and the Bloomreach weblayer A · Split · by Brand Room newsletter pop-up",
   "Debenhams Design System, DG Group Design System collection: Text on Action colour variable (code --text-on-action, WEB syntax var(--text-on-action)) — black on Debenhams, white on the other 9 brands · by Brand Room newsletter pop-up",
   "File cover (.fcover · .fcover-in · .fcover-hd · .fcover-logo · .fcover-t · .fcover-tag), Layout group: the 1920 × 1080 cover for every Debenhams Group Figma file — black, a 30% white glow from the top, DG Group logo (left aligned, white), title Antonio Bold 200 caps, tag Geologica Light 32 on a 4% white chip. Sized in container units off 1920, so it keeps the Figma proportions at any width · by Figma file cover template",
   "Figma library: File cover component (Layout page) with Title, Tag and Show tag properties, linked from the site page · by Figma file cover template",
   "Colour palette, tokens.css Layer 0: the Figma DG Group Design System collection in code, same names, one block per brand — --primary, --cta, Shades (--neutral, --neutral-pressed, --light-4 … --light-1, --dark-1 … --dark-3, --primary-dark), accents (--aggressive-green, --warm-peach, --light-cream), Extended (--red, --red-light, --yellow, --yellow-light, --green, --green-light, --system-cursor, --pay-plus-primary), Mono (--white, --background-white, --grey-05, --grey-1, --grey-2, --grey-25, --grey-3 … --grey-6, --soft-black, --black). Primitives only — semantic tokens are not re-pointed, so nothing renders differently · by Figma merge",
   "tools/palette/ (palette.json → tokens.css Layer 0 + assets/ds/palette.js): one source for the palette in code, the site and the Figma variables. Debenhams, boohoo, boohooMAN, PLT, Karen Millen = the Aug 2026 sign-off; Warehouse, The Brand Room, Burton, Principles, Coast = from code with ramps derived by the KM mix ratios (to sign off) · by Figma merge"
  ],
  "changed": [
   "Section header + rail (.sec-head · .prail) marked superseded by Product carousel; kept so older prototypes still render · by Product carousel dev handoff",
   "Debenhams Design System (Figma aIHmkCaTy9c5EWOxAGw0So), DG Group Design System collection — additive merge: 5 modes added (Warehouse, The Brand Room, Burton, Principles, Coast → 10), every palette variable gets WEB code syntax var(--…), values moved to the latest sign-off: Red #C90000 on every mode, boohoo mono (pink removed, Aug 2026), Karen Millen ramp re-derived from #D24508 with CTA black. Nothing renamed or deleted; old values in tools/palette/figma-merge-2026-10-28.json. Publish the library to send it to files · by Figma merge",
   "Colour page: the Neutrals / Status / Aqua family / Pink family blocks are replaced by the Colour Palette boards in the Figma format (Primary · Action · brand accents · Shades · Extended · Mono), one tab per brand + All · by Figma merge"
  ],
  "fixed": [
   "Debenhams Design System (Figma aIHmkCaTy9c5EWOxAGw0So), Button (new) · Primary: the label was bound to Black, so it vanished on every brand but Debenhams (black on black for The Brand Room, boohoo, MAN, Warehouse, Coast…). Now bound to the new Text on Action variable; Primary · Disabled label → Grey 3 (code --action-disabled-fg) · by Brand Room newsletter pop-up",
   "Brand Room sign-up weblayer exports: paste files are .txt (paste-into-HTML-tab / paste-into-CSS-tab), preview is OPEN-ME-preview.html, START-HERE.txt + the images in the zip, and the CSS loads Archivo on its first line so it shows in the Bloomreach editor · by Brand Room newsletter pop-up"
  ]
 },
 {
  "d": "2026-10-27",
  "v": "2026.10.27",
  "title": "PLT Virtual Stylist chip in the DS · AI strip copy in six languages · whole-page translation drop-in · no wishlist on rail cards · brand tabs on component pages · Figma library",
  "by": "AI Generated badge prototype (projects/ai-generated-badge) · vto-prototype (PLT chip) · DS site brand tabs · Membership landing (projects/membership-landing, Jake 27 Oct) · Figma library (Jake, 27 Oct)",
  "added": [
   "Button · Membership CTA (.bd.mbr filled, .bd.mbr-out outlined): buttons that sit on a programme's art, in the programme's own CTA colours (--mb-cta-bg / --mb-cta-fg, outline + label --mb-fg), so PLT Royalty and Karen Millen Premier get white buttons on their dark grounds. New variant on the Button entry · by Membership landing",
   "membership.js DG_memberVars(brand,{plus}) (the programme's colours + art as custom properties for a whole section) and DG_memberLogo(brand,{plus}) (band wordmark url) · by Membership landing",
   "Membership band (.member-band, .member-band--lg, membership.js DG_memberBandHTML(brand,{plus,status,size})): each programme's live wordmark on its art, full width — promoted from the Account 2026 membership page band, logo heights as live (Unlimited 40 · Premier Club 12 · Premier 22 · Royalty 28 · KM 22), Unlimited+ wordmark on plus. New catalogue entry member-band · by Membership landing",
   "Figma library Debenhams Group DS (the code-built file, retired 3 Nov 2026 and merged into Debenhams Design System aIHmkCaTy9c5EWOxAGw0So), built from this code: Core + Brand variables (Brand = 10 modes: Debenhams, Karen Millen, PLT, boohooMAN, boohoo, Warehouse, The Brand Room, Burton, Principles, Coast), 28 text styles, shadow + gradient styles, all 79 catalogue components as variant sets bound to the variables · by Figma library",
   "assets/ds/figma-lib.js: catalogue slug → Figma node; every component page (and Foundations) shows a Figma link under its title · by Figma library",
   "tools/figma-sync/: the code → Figma pipeline (sentinel render, html_to_figma capture, variable binder) to rebuild a component in Figma after a code change · by Figma library",
   "Tabs · Wrap (.tabs--wrap): more tabs than fit wrap onto another row instead of scrolling out of sight. Catalogue Tabs entry has the variant · by DS site brand tabs",
   "AI tag chip tokens --ai-tag-bg / -fg / -icon / -radius / -size / -weight / -case / -shadow / -align (tokens.css). They drive .ai-pill--tag and .pdp-chips--center. PLT = the Virtual Stylist prototype's chip: garnet #550503, square, Roboto 12 regular uppercase, white hanger, left-aligned, 36 tall, shadow-pill. Every other fascia is unchanged (white pill, centred)",
   "Masked chip glyph .ai-pill--tag i.ic.ic--hanger: the hanger takes the fascia's icon colour (img.ic still works for black glyphs)",
   "assets/ds/i18n.js + i18n-copy.js: page copy drop-in. DG_i18n(doc, lang) translates a whole DS page in place into FR, NL, PL, DE or SV (text, aria-label, placeholder, title) and back to English; DG_i18nWatch keeps a re-rendering page translated. The copy tables cover the header and menus, footers, USP banners, search, PLP, the PDP template, the bag template and the product names in plp-alignment/data.js (about 720 strings per language); patterns cover prices, dates, counts, codes and brand names. Brand names, promo codes and sizes stay as they are, and prices stay in £. The AI strip keeps its own copy (ai-strip.js)",
   "assets/ds/ai-strip.js: the AI Generated strip copy and alt text in EN, FR, NL, PL, DE, SV (DG_AI_COPY, DG_aiStrip(lang), DG_aiAlt(lang)). Wording checked against EU AI Act Art. 50 language versions and the EU Code of Practice (10 Jun 2026); notes in the file. The PDP template reads S.aiLang"
  ],
  "changed": [
   "Membership landing (projects/membership-landing) redesigned as a promo page (Jake, 27 Oct): full-bleed programme hero (wordmark, big headline, price + per week, Membership CTAs, the receipt calculator as a floating card), stat strip, perk cards, step cards, programme closing band, sticky mobile join bar — colours, art and wordmarks all from membership.js · by Membership landing",
   "templates/pdp.html: Virtual Stylist chip markup uses i.ic.ic--hanger, so PLT renders as the VTO prototype; the AI strip copy comes from ai-strip.js (S.aiCopy / S.aiAlt replaced by S.aiLang)",
   "DS site component pages: brand tabs (DS Tabs, wrap) across the top. Debenhams by default, one tab per fascia, All last = every fascia stacked as before; the pick carries to the next component page and the brand button picks the tab · by DS site brand tabs",
   "Section header + rail: rail cards have no wishlist button; the wishlist button is on PLP cards only (Jake, 27 Oct). Catalogue CARD takes fav:false",
   "AI Generated strip: white-space:pre with no flex gap, so hyphenated copy (KI-generiert, AI-gegenereerd) keeps together; on images 150px wide or less, tracking 0 and padding gap 1 (4px), so Polish fits on a 3-col tile at 10px"
  ],
  "fixed": [
   "PLT Virtual Stylist chip was the generic white pill: it now matches the VTO prototype from the DS, no per-project styling"
  ]
 },
 {
  "d": "2026-10-26",
  "v": "2026.10.26",
  "title": "AI Generated strip on any image + in the PDP template · Search bar · open · strip back to badge colours",
  "by": "AI Generated badge prototype (projects/ai-generated-badge)",
  "added": [
   "AI image host (.ai-wrap): makes any image that is not a product card a host for the AI Generated strip: home rail cards, editorial tiles, PDP gallery slides. Alt text appends \"AI generated image\". Never on thumbnails, bag or checkout. Catalogue AI Generated strip: Any image + Localised variants",
   "Search bar · open (.srch-bar, .sb-field, .sb-clr, .sb-go, .sb-x, .srch-bar--underline for PLT): the field the search overlay opens on, above Search suggestions. New catalogue entry search-bar",
   "PDP template (templates/pdp.html): AI flag S.ai (the indexes of the AI images) + S.aiCopy / S.aiAlt (localised strip text and alt suffix). Flagged slides get the strip and the gallery product tags lift by --ai-h (.pdp-gal .main.has-ai .ptags)"
  ],
  "changed": [
   "AI Generated strip (.badge-ai) has its own tokens --ai-strip-bg / --ai-strip-fg (= the badge), replacing --ai-bg / --ai-fg"
  ],
  "fixed": [
   "AI Generated strip text took --ai-fg, the Ask Deb AI pill colour since 19 Oct (teal on Debenhams, burgundy on PLT, each fascia's CTA colour elsewhere). It now matches the badge again, as in the deck"
  ]
 },
 {
  "d": "2026-10-23",
  "v": "2026.10.23",
  "title": "One sale + error red #C90000 for every fascia · Burton buttons + links navy, as live",
  "by": "vto-prototype (Virtual Stylist all fascias)",
  "added": [],
  "changed": [
   "Sale + error red: ONE red for every fascia, #C90000 (was #D33F3F; PLT already #C90000, its overrides removed). --text-error #C90000 drives sale prices, error text, --border-error, --badge-save-fg, countdown digits (--usp-cd) and the Debenhams Sale nav link; component fallbacks + docs swatches updated. WCAG AA: 6.03:1 on white, 5.52:1 on Light Red #FFF2F2 (#D33F3F was 4.23:1 there, failing on the save pill, save chip, Fastest tag and Subscribe & Save tag). Save pill ground = Light Red #FFF2F2 (--surface-error) on every fascia that runs a pill (boohoo was #FDE8E8). Compare: https://claude.ai/artifact/LdwiMrSZf5LcuPPFzryeMg · by vto-prototype (Jake, 23 Oct)",
   "Burton: every button and text link is the live navy #284D7B (burton.co.uk theme --color-primary / --color-cta-primary 40 77 123): --surface-action, --action-buy, --text-link, --border-action, --border-focus, --icon-action, --brand-primary, --vto, --tickc, --dot, --new; hover / pressed #5E7A9C (live hover = 75%); secondary buttons white with a #B5B5B5 keyline (--btn-outline, live --color-button-secondary-border). Was black from 12 Oct (boohoo / MAN buttons); type stays Montserrat 600 · by vto-prototype (Jake, 23 Oct)"
  ],
  "fixed": []
 },
 {
  "d": "2026-10-22",
  "v": "2026.10.22",
  "title": "Virtual Stylist is the default PDP chip + Brand Room filters in Title Case + Sign-up modal crops",
  "by": "KM Premier colours (Jake, from live Karen Millen) · Brand Room sign-up popup (projects/brandroom-signup) · Account 2026 (account-2026) · vto-prototype (Virtual Stylist all fascias)",
  "added": [
   "Rule: The Brand Room has no Deliver+ — no PDP banner, bag add-on, checkout banner or account banner. One source: window.DG_DPLUS_NONE / DG_hasDplus(brand) in dplus-logos.js; Brand Room's --dplus-* colours removed from tokens.css; Deliver+ catalogue entry says so (templates/pdp.html, bag-summary.js and the Shopping agent PDP already left it out) · by Account 2026 (Jake, 22 Oct)",
   "Membership banner · checkout (.mbanner, .mbanner--plus; tokens --mbanner-bg / --mbanner-fg / --mbanner-grad-plus / --mbanner-st-w): the full-width UNLIMITED · ACTIVE bar above the checkout delivery options (Checkout 2026 3996:171295) — grey gradient, black→teal for Debenhams Unlimited+, PLT sand + diamond Royalty Delivery with regular ACTIVE; replaces the Membership pill on checkout. Antonio now loads on the site · by Account 2026 (Jake, 22 Oct)",
   "PDP template data (templates/products.js): live products for 8 more fascias, captured 22 Oct 2026 with 4 × 900w images each (templates/img/<fascia>/1–4.webp): debenhamsoutlet (Principles Linen Blend Pleat Detail Midi Dress), wallis (Collared Belted Midi Dress), burton (Navy Classic Mac), principles (Asymmetric Neckline Short Sleeve Midi Dress), oasis (Velvet Lace Trim Button Through Midi Dress), misspap (Square Neck A Line Midi Dress), dsgnstudio (DSGN Studio Sculpt High Waist Legging), trainingdept (Training Dept Straight Leg Woven Joggers) · by vto-prototype (Virtual Stylist all fascias)",
   "templates/products.js: new field result: the index (1–4) of each product's full-length front image, used for the Virtual Stylist try-on result screen; set on the 9 entries added / replaced 22 Oct · by vto-prototype (Virtual Stylist all fascias)",
   "AI tag chip · Virtual Stylist: hanger glyph (icons/lib/icons-hanger.svg, .ai-pill--tag img.ic 20px) + Virtual Stylist, centred (.pdp-chips--center); catalogue AI pill · by KM Premier colours",
   "Token --filter-case — the letter case of PLP filters (sort / filter dropdowns .sf-dd, Sort & Filter .sf-btn, category pills .catpill, category links .catlinks); falls back to --cta-case, so every other fascia is unchanged · by Brand Room sign-up popup"
  ],
  "changed": [
   "Karen Millen: no orange on any button, link or control. Text links black like the CTAs (--text-link #000, hover #242424, pressed #000, disabled #767676; were #892D05 / #2A0E02 / #7E2905); --icon-action (checkboxes, toggles) and --border-focus (focus ring) black; button tints neutral grey: tertiary / small fill --surface-neutral #F2F2F2 (pressed #E7E7E7), secondary pressed #D6D6D6, disabled #F2F2F2 (were peach #FAE9E1 / #F6DACE / #F4D1C1). Orange #D24508 stays the brand colour only (swatches, membership card, badges) · by vto-prototype (Jake, 22 Oct)",
   "Radio (.rad): selected dot reads the new token --rad-dot (falls back to --icon-action); Karen Millen radios black #000, were orange #892D05 — KM checkboxes and toggles unchanged · by Account 2026 (Jake, 22 Oct)",
   "Membership banner · checkout: Unlimited+ is grey like Unlimited (.mbanner--plus gradient + --mbanner-grad-plus removed), no icon on any fascia (PLT diamond dropped), name 24px Antonio at hug height (line-height 24, text box trimmed to cap / baseline) · by Account 2026 (Jake, 22 Oct)",
   "templates/products.js · brandroom: replaced the Skechers Palmiro Waterproof Lace Up Shoes with an apparel product shot on a model, Tommy Hilfiger Slim Breton Stripe Long Dress (live 22 Oct 2026), images replaced · by vto-prototype (Virtual Stylist all fascias)",
   "Sign-up modal · Slide-in: now sits over the DS Modal overlay (.mdl-scrim, 50% black — Figma Overlay 8084-23215) like every other layout; tapping the overlay minimises it to the tab and the overlay goes with it. o.scrim:false keeps the old non-blocking version. Note: --surface-overlay token is 60% (used by .auth-modal) — the Modal component is 50%; to reconcile · by Brand Room sign-up popup (Jake, 22 Oct)",
   "Foundations › Typography: per-fascia table covers all 17 fascias (was the main 5), read live from each data-brand mode off the DS Button — font, regular / strong weights, button weight and CTA case; Urbanist, Lato and Public Sans now load on the site so each font renders · by Typography page (Jake, 22 Oct)",
   "Sign-up modal · Split: separate desktop and mobile assets (o.img 4:5 portrait / o.imgM 16:9 landscape, art-directed with <picture>) — desktop 50/50 image | content, mobile image on top and content underneath, legal last (.sup-foot). Two-step (.sup--steps) keeps the 4:5 thumbnail on mobile · by Brand Room sign-up popup (Jake, 22 Oct)",
   "Sign-up modal: one asset and one ratio across breakpoints — the 4:5 campaign crop is the image column on desktop split (448 × 560) and a 4:5 thumbnail beside the headline (.sup-hd--thumb, .sup-thumb, 104px) on mobile split / two-step and on the slide-in at every width; full bleed is a fixed 2:3 portrait (480 × 720 desktop, 358 × 537 mobile). Mobile popups drop from near full screen to 456–612px · by Brand Room sign-up popup (Jake, 22 Oct)",
   "Sign-up modal: “No Thanks” hugs the CTA — gap 3 (12px) above, gap 4 (16px) to the legal, 26px tall (was the full gap 6 either side and 34px) · by Brand Room sign-up popup (Jake, 22 Oct)",
   "Sign-up modal: anim:false / .sup-layer--instant opens it with no fade or slide (exports, and prototypes flicking between layouts) · by Brand Room sign-up popup",
   "PDP template (templates/pdp.html): Virtual Stylist replaces Shop Similar, centred between the gallery and the title on mobile and under the gallery on desktop (was top right of the main image). Every next PDP gets it · by KM Premier colours",
   "Shop Similar is a Google feature that isn't launched yet: kept in the DS (catalogue AI pill · Shop Similar) but taken off the default PDP · by KM Premier colours",
   "Brand Room: PLP filters and category pills are Title Case (--filter-case:none), no longer all caps — buttons keep uppercase (--cta-case) · by Brand Room sign-up popup (Jake, 22 Oct)"
  ],
  "fixed": []
 },
 {
  "d": "2026-10-21",
  "v": "2026.10.21c",
  "title": "KM black buttons + Membership box / Deliver+ light grounds",
  "by": "KM Premier colours (projects/km-premier-colours)",
  "added": [
   "Membership box: --mb-line (1px keyline) and --mb-cta-line (outlined ADD); DG_memberBoxHTML(brand,{bg,fg,ctaBg,ctaFg,ctaLine,line}) overrides the ground, and a dark fg swaps in the fascia's dark-ink logo · by KM Premier colours",
   "Asset: assets/ds/membership/prem-logo-km-ink.png — the Karen Millen Premier logo in black, for light grounds · by KM Premier colours",
   "Deliver+: --dplus-line (1px keyline); catalogue variant PDP banner · light ground (dark-ink checkout lockup) · by KM Premier colours",
   "Catalogue: Membership box variants Karen Millen Premier + Karen Millen Premier · light ground · by KM Premier colours",
   "Rule: a Membership box / Deliver+ keyline goes on a white ground only, in #E7E7E7 (like the delivery grid, BNPL, Subscribe boxes) or the fascia accent; a shaded ground has none (Jake 21 Oct) · by KM Premier colours"
  ],
  "changed": [
   "Karen Millen buttons black: --surface-action #000 (hover / pressed #242424), --border-action #000, --action-buy #000 (pressed #242424, disabled #B5B5B5) — was orange #D24508 / #892D05. Matches Jake's Figma and production (--color-primary #000). Orange stays the KM brand accent (links, dots, New, cards) · by KM Premier colours",
   "Membership box + Deliver+ banner: padding 15/19 inside an always-present 1px border (transparent by default), so they are the same size as before and can take a keyline · by KM Premier colours"
  ],
  "fixed": [
   "Deliver+ testimonial rule: drawn as a 25% currentColor ::before instead of color-mix(). html2canvas can't parse color-mix(), so Export failed on every prototype with Deliver+ on the PDP · by KM Premier colours"
  ]
 },
 {
  "d": "2026-10-21",
  "v": "2026.10.21b",
  "title": "Sign-up modal + phone field",
  "by": "Brand Room sign-up popup (projects/brandroom-signup)",
  "added": [
   "Sign-up modal (.mdl--signup, .sup-layer, .sup--split / --bleed / --lockup / --sheet / --flat, .sup-* slots) — the marketing email + SMS capture as a Modal type; six layouts incl. a flat exportable image (.sup-art) and a two-step brand picker; markup + behaviour in assets/ds/signup.js (DG_signup.html / bind / LIVE copy from the live Bloomreach weblayer); catalogue Overlays & bag · by Brand Room sign-up popup",
   "Phone field (.fld--tel, .fld-pre) — the Input field with a flag + dialling-code prefix; catalogue Text field · Phone · by Brand Room sign-up popup",
   "White modal close (.modal-x--inv) — the 16px close drawn white for images and black surfaces (data-URI, export-safe) · by Brand Room sign-up popup",
   "Asset: assets/brands/brandroom-white.svg — The Brand Room wordmark in white · by Brand Room sign-up popup"
  ],
  "changed": [],
  "fixed": []
 },
 {
  "d": "2026-10-21",
  "v": "2026.10.21",
  "title": "App Store Screenshot Exporter + File drop, Progress bar, Tabs",
  "by": "App Store Screenshot Exporter (tools/app-store-screens)",
  "added": [
   "File drop (.drop, .drop.over, .drop--sm) — dashed drag-and-drop target over a hidden file input; catalogue Forms · by App Store Screenshot Exporter",
   "Progress bar (.prog, .prog-hd, .prog-bar, .prog--busy) — 4px bar with a label row for long jobs, determinate via --p or indeterminate; catalogue Feedback · by App Store Screenshot Exporter",
   "Tabs (.tabs) — underlined text tabs for panels inside one page; catalogue Navigation · by App Store Screenshot Exporter",
   "Tool: App Store Screenshot Exporter (tools/app-store-screens/) — paste the Expo build links, pick screens, export every App Store / Google Play size in every store language; local runner in tools/app-store-screens/runner · by App Store Screenshot Exporter"
  ],
  "changed": [],
  "fixed": []
 },
 {
  "d": "2026-10-19",
  "v": "2026.10.19",
  "title": "Tooltip + review-shell Screenshot",
  "by": "Shopping agent prototype (projects/shopping-agent)",
  "added": [
   "AI sparkle twinkle (.ai-icon--twinkle) — subtle 3.6s scale / tilt / brightness breathe on the AI icon, staggered by animation-delay; off for reduced motion and exports · by Shopping agent",
   "Review shell Screenshot button (assets/ds/proto-shot.js) — beside Export in every prototype shell: saves a PNG of exactly what is on screen in the device frame to Downloads. Real pixels via the browser's tab capture (Chrome asks once to share the tab; kept 2 min for runs of shots), cropped to the visible #device; html2canvas render only as the fallback · by Shopping agent",
   "Tooltip (.tip, .tip--left, .tip--in, .tip-new, .tip-x) — bubble with a top nib (--tip-x), optional New tag and close; the coach mark for Ask Deb behind the header search icon · by Shopping agent"
  ],
  "changed": [
   "Typography: 27 unscoped font-weight:300 rules in components.css now use --w-regular (delivery grid, accordion body, AI modules, agent chat start, sort & filter, membership pill, auth note, bag summary …) — Debenhams keeps Geologica Light (its --w-regular is 300), every other fascia gets its own regular instead of a too-thin light; brand-scoped live rules (PLT nav) unchanged · by Shopping agent",
   "Search suggestions: autocomplete terms 14px, only the typed part bold (.ss-term b), the rest the fascia regular · by Shopping agent",
   "Search suggestions: typing state (.ss-terms / .ss-term autocomplete rows, .ss-ask one-row agent prompts for the term, products matching) — the agent prompts moved off the landing state to the typing state so they show above the phone keyboard · by Shopping agent",
   "AI tokens: --ai-accent (mid aqua: bullets, hover keylines) and --ai-track (light aqua track) join --ai-fg / --ai-tint / --ai-ink — Debenhams #70BEB3 / #D6E9E6, every other fascia its own palette (--ai-fg / --border-subtle), so no aqua is hard-coded on a non-Debenhams page · by Shopping agent",
   "Tooltip: white (--surface-raised) with a soft drop shadow and the nib centred, like the desktop account hover menu; --tip-x now measures from the left (default 50%) · by Shopping agent",
   "Tooltip: the New tag moved above the copy (.tip-b body wrapper) · by Shopping agent",
   "Tooltip rebuilt to Figma HoBuVNEhf1qpL61XFipy0f 135:8952 (nib up): fascia page colour + font, 12/16 light centred copy under a semibold NEW!, 24px diamond nib, 12px close top right, 8px corners on every fascia, hug width (no wrapping) · by Shopping agent"
  ],
  "fixed": [
   "Grey text is Grey 4 #767676 everywhere (Jake's rule): --text-secondary and --action-disabled-fg moved off Grey 5 #6B6B6B, hardcoded greys in components.css (.dplus-bag .powered, .ac-ctx .lbl, field fallbacks, .auth-note) now use the token — fixes the delivery grid “Select a size to see seller info” placeholder · by PDP delivery grid",
   "USP data (usp-live.js): boohoo middle message is now the live “MID SEASON SALE – 50% OFF SELECTED LINES*” (re-checked 19 Oct) · by Shopping agent"
  ]
 },
 {
  "d": "2026-10-16",
  "v": "2026.10.16",
  "title": "DS page templates + Taggstar + PDP delivery grid",
  "by": "Taggstar prototype (projects/taggstar) · PDP delivery grid prototype (projects/delivery-grid)",
  "added": [
   "Delivery grid: Sold & Delivered by line under the returns line (.dgrid-seller, box icon icons-order) — grey placeholder state “Select a size to see seller info” until a size is picked; the site brand is plain text, a marketplace seller is a link that opens the new seller modal (.dseller on the DS .mdl: Owned by, Registered address, VAT, company number, returns copy); DG_delivery.setSeller() · by PDP delivery grid",
   "Subscribe & Save (.sns + subscribe.js drop-in) — Figma ed2M0bCy3GMtlTRdtkwM4F 172:24095 / 34:8920: PDP box (title + Save tag, three ticks) with an ADD button like the membership box; ADD opens the Subscribe & Save modal on the DS .mdl (.sns-layer, desktop --sm, mobile --up): product row, Deliver every (.fsel), Quantity, Add to bag, terms; on every PDP under Ask Deb · by PDP delivery grid",
   "Quantity stepper large (.qty--lg) — 48px controls for the Subscribe & Save modal · by PDP delivery grid",
   "Accordion set (.acc-set) — PDP info rows with keylines between, 15px semibold heads, icons-down chevron; promoted from the Shopping agent · by master PDP",
   "AI tag chip (.ai-pill--tag + .pdp-chips) — Shop Similar above the PDP title; promoted from the Shopping agent · by master PDP",
   "PDP buy buttons (.pdp-ctas) — Add to bag → PayPal Checkout → Apple Pay stacked, the fixed order on every PDP (Jake's rule); .pay .pp-co label promoted from the Shopping agent · by PDP delivery grid",
   "Google PDP prompts (.ai-prompts + ai-prompts.js) — the <google-ai-prompts> chips + Ask anything, promoted from the Shopping agent prototype, on every PDP · by PDP delivery grid",
   "Delivery grid (.dgrid-* + delivery.js drop-in) — the PDP Delivery Methods box in three layouts (live sentences + James's PR badges / third home row, Delivery / Click & Collect tabs, one-liner), Premier view, bulky surcharge caveat (.dgrid-bulky), returns line · by PDP delivery grid",
   "Delivery options modal (.dopts-* on the DS .mdl) — Paul's Gifting Figma 209-294935 / 209-295333: Home Delivery / Collect Nearby toggle, one-list and single-tab variants, Northern Ireland split, footnote · by PDP delivery grid",
   "App top bar (.app-top) — iOS status row + PDP nav (back · share · wishlist) · by PDP delivery grid",
   "PDP gallery (.pdp-gal) — mobile scroller + pagination, desktop thumbs + main with prev / next",
   "PDP title (.pdp-head) — brand, name, 44px wishlist",
   "Delivery countdown (.ndd)",
   "Option label (.opt-label) — \"Colour: Black\"",
   "Membership box (.member-box + membership.js) — Unlimited, Premier Club, Premier, Royalty per fascia",
   "Page title (.pg-title)",
   "Taggstar icon slot (.sp-ico) + per-fascia background hooks (--sp-bg / --sp-fg / --sp-case); taggstar.js drop-in with the V2 message library",
   "Icons: icons-cart.svg (V2 Figma); boohoo animated Taggstar eyes / heart (icons/taggstar)",
   "Page templates: templates/pdp.html and templates/bag.html — every fascia, DS components only",
   "Changelog (this page, assets/ds/changelog.js)"
  ],
  "changed": [
   "PDP template: buy column reordered — Apple Pay → Ask Deb → Unlimited / Premier → Deliver+ → delivery grid → BNPL → Subscribe & Save; Shop Similar chip (.pdp-chips) moves to the top right of the main image on desktop (new .pdp-gal .main>.pdp-chips rule), stays above the title on mobile · by Jake (PDP delivery grid)",
   "Subscribe & Save modal: centred modal (.mdl--sm) on desktop and tablet, the slide-up sheet only on phones; product row as Debenhams live — 72px image with small 14/20 details beside it (brand, name, tag, line price, Size, Colour); Quantity beside Add to bag on one row; .qty--lg 50px to match the button · by Jake (PDP delivery grid)",
   "PDP template: the Delivery Options modal slides up (.mdl--up) on mobile web as well as app; desktop stays the DS small modal · by Jake (PDP delivery grid)",
   "Delivery options modal: Home Delivery / Collect Nearby tabs, rows, prices and section heads now use the page grid type (12px underline tabs, 14/20 rows, 14 semibold price, 12 light was price), replacing the 44px filled toggle and 16px rows · by Jake (PDP delivery grid)",
   "PDP template: Ask Deb (Google prompts) moved up to sit straight under Apple Pay in the buy column; Subscribe & Save under it; accordions stay under the gallery on desktop / after the buy column on mobile · by Jake (PDP delivery grid)",
   "Delivery options modal layer rules shared with the Subscribe & Save layer (.dopts-layer, .sns-layer) · by PDP delivery grid",
   "MASTER PDP: templates/pdp.html rebuilt to the Shopping agent PDP (banked as the master) — no breadcrumb on mobile; product tags bottom right; Shop Similar chip above the title; ratings; size guide as text; buy stack; membership; Deliver+ with logo + quote (catalogue variant); delivery grid where the old delivery box sat; BNPL with Pay+ and the instalment; Google prompts + the accordion set (At a Glance open · Description · Product Details & Care · Delivery · Returns · Manufacturer) under the buy column, left column on desktop; no rail · by Shopping agent → master PDP",
   "PDP gallery: product tags moved to .ptags, bottom right, stacked (was a badge top left) · by master PDP",
   "Delivery grid: Fastest / Cheapest tags restyled to James's PR (Fastest red on --error-bg, Cheapest grey, 4px radius, semibold) and set beside the arrival line; option A is the PR's row layout (arrival + tag / method | price); Delivery / Click & Collect tabs moved top right on the title line · by PDP delivery grid",
   "PDP template (templates/pdp.html) now carries the buy-button stack, the Google prompts under it and the delivery grid (live layout, See more → Delivery Options modal) in place of the static USP box · by PDP delivery grid",
   "Order summary → the live bag payment summary (v2, .bs-* + bag-summary.js), promoted from the USP banner bag; .summary kept as legacy",
   "Promoted from the PLP prototype into the DS: content slot (.cslot), PLP title (.plp-title), SEO copy + Show more, grid view toggle — removed from plp-alignment/plp.html",
   "Taggstar CSS now lives only in components.css (taggstar.js no longer carries a copy)",
   "USP banner prototype uses the DS bag summary; projects/usp-banner/bag.js removed"
  ],
  "fixed": [
   "Icon: icons-calendar.svg redrawn — the library capture had lost everything but the outline (header bar, rings and day dots back), same 24×24 base and 1pt non-scaling stroke · by PDP delivery grid (returns line)",
   "Delivery grid icon lines (returns, one-liner): icon centred on the two rows; one-liner truck from the DS library by speed — icons-delivery-fast for next day, icons-delivery otherwise; returns = icons-calendar · by Jake (PDP delivery grid)",
   "Delivery options modal + delivery grid tabs: both panes share one grid cell, so switching Home Delivery / Collect Nearby (or Delivery / Click & Collect) never changes the height · by PDP delivery grid",
   "AI pill: fill from --surface-raised (was #FFF), so PLT prompt chips are warm white per the sand rule · by PDP delivery grid",
   "Breadcrumb: padding gap 4 (16px) below as well as above (was 16 / 4), so the trail sits evenly between the header and the page · by PDP delivery grid",
   "Size guide glyph sized by the DS (was inline per page)",
   "Export: footer chevron drawn without a CSS mask while html.exporting (was a sign-in page override)",
   "Site PDP overview: two missing icons (icons-chevron-down, icons-bell) → icons-down-arrow, icons-notification"
  ],
  "rule": "From today every project builds only from DS components; a wrong component is fixed here and pushed, a missing one is added here first — and logged on this page."
 },
 {
  "d": "2026-10-15",
  "v": "2026.10.15",
  "title": "From the commit history",
  "changed": [
   "Header: boohoo desktop nav 14px (was 16)",
   "Component pages use the full width and nothing is scaled: 1440 headers / footers and desktop modals render 1:1 (no CSS zoom) so inspect element gives real values; fascia boxes hug their real content, narrow screens…",
   "Taggstar to the Figma (00YKWCHwTarfwWZ1HayFUI 3483-23105): no icon, Grey 1 chip on every fascia (sand on PLT) — PLP 'Selling Fast! 79 Sold', PDP two-line card with close (on image on mobile, pinned to the browser…",
   "Buy It Now button off across the DS for every fascia (Button page stacks, foundations canvas, overview row, USP banner PDP) — .bd.buy and --action-buy tokens kept for the CTA-colour icon buttons and an easy return",
   "Component pages: no scroll bars (variants never scroll; wide ones scale via .zfit). Price rebuilt from live debenhams/boohoo/PLT/KM capture: PDP, PLP card, rail, quick add, added to bag, basket, chat instances with…",
   "Shopping agent chat: text replies alternate with components (word-by-word dynamic-bot-writing), optional labels mapping each reply part to its salesAgentConfig key or flagging it as outside Google's widget (also…",
   "DS modal close (16x16 1pt at 24px) + shopping agent chat v3: one start screen, close only, every reply component, aqua 4px ADD TO BAG"
  ]
 },
 {
  "d": "2026-10-14",
  "v": "2026.10.14",
  "title": "From the commit history",
  "changed": [
   "Unlimited+ account dot = the pill gradient (--mpill-grad-plus); aqua dot stays inside the pill (log 33)",
   "Active-membership dot: one token (--mpill-dot / --mpill-dot-plus) for the checkout pill and the account row Active status (log 33)",
   "PLT sand rule: app pages on warm white #FFFDF7, app checkout links garnet + disabled pair (log 33)",
   "PLT sand + square rules written into the DS: no pure white on PLT, pills/status pills square via --radius-pill, checkout colours from Checkout 2026 2290:437863; new .mpill membership pill and .co-tile checkout tiles…"
  ]
 },
 {
  "d": "2026-10-12",
  "v": "2026.10.12",
  "title": "From the commit history",
  "changed": [
   "Sign in: mobile boxes 16px sides; 24px above create account when the password link is not there",
   "DS footer: newsletter band = the page background (--surface-sunken #FAFAFA, PLT #FAF5E7), was Grey 1 #F2F2F2",
   "Fascia token pass: remove Maine, Gorgeous, Forever Unique, Nasty Gal; Warehouse 300 buttons; Outlet black (no aqua); Burton = boohoo/MAN type + buttons; Misspap boohoo/MAN in #101820 with grey secondary outline;…",
   "Sign in: extra 8px above \"Sign in with password\" instead of above create account",
   "Sign in: \"Sign in with password\" below the social buttons, directly above create account",
   "Header catalogue entry: pages without header.js get the previous [mobile, desktop] markup in slots 0 / 1 instead of an empty list, so prototypes calling V('header',0|1) (shopping-agent, usp-banner,…",
   "Sign in: copy trims (Sign in with password, reset screen = one centred link, no links on the sent screens, Check Your Inbox), every box 24px all round with the brand radius",
   "One Header page: main header + checkout header, each mobile and desktop, for every fascia (header.js drop-in, content from each live header 12 Oct): own logo fitted 106 / 141 wide, PLT icon set, bookmark on MAN / KM…",
   "Sign in: one shared config for every fascia (fascia switch = brand skin only); create account below the social buttons",
   "Sign in: PLT social buttons square with the field fill; no rule under the checkout header",
   "Secondary CTA has no fill of its own: background transparent so it takes the surface it sits on (PLT sand panels, grey cards) instead of a page-colour box; outline, label and pressed state unchanged",
   "Sign in: checkout sign in CTAs primary",
   "Sign in: copy pass (Send link, We've Emailed You a Sign-In / Password Reset Link, expiry, Resend / Use a different email), Title Case headers, \"or continue with\"",
   "Sign in: divider reads \"Or continue with\" (sentence case)",
   "CTAs: no letter spacing (Figma 9144-1820 is 0) — removed the .02em on every .bd button and the .04em / caps tracking on the sort & filter and quick-add CTAs",
   "Sign in: social toggle, all four tiles or the full-width Continue with Klarna button (Sign-In-Link 4421-999)",
   "Sign in: checkout entry context (signed out → checkout): guest first, then the same sign in form",
   "Sign in: small print to Grey 5 (--text-secondary #6B6B6B) per the DS body-text floor",
   "Sign in: spam-folder line as small print (.auth-note: 12/16, light 300, Grey 4, same on every fascia)",
   "Inputs to the DS Figma (9925-5828): Grey 3 #B5B5B5 outline at rest and when filled, black only while focused, back to grey on blur; caret #2797FF; Inactive state (Grey 1 fill, grey text) and empty-error variant;…",
   "Footer component page: the desktop footer renders at its real 1440 layout and scales to the full width of the page (no clipping); mobile stays at 390",
   "Footer rebuilt to the DS Figma (664-1064): one responsive component (.ftr + footer.js, container queries) — desktop columns with social · country · app rail at 1024+, accordions below; content is each fascia's live…",
   "Sign in: password switch inside the Weighting card (A only), Methods card removed; spam line on its own paragraph",
   "Sign in: link sent is one clean message, new link-first intro, family-of-brands line removed",
   "Sign in: panel leads with weighting, password switch live on A only; security switch and Klarna full width removed",
   "Sign in: social tiles exact to Social-Login 2032-2027, password link below the CTA, panel play labels removed",
   "Sign in prototype: remove em dashes from the copy, panel, docs and the C-19 / catalogue entry",
   "AI look in the DS + shopping agent header options; size selector selected = 1px black (Figma 9000:3082)",
   "Sign in prototype: link-first vs password-first across Debenhams, PLT, boohoo, boohooMAN",
   "Checkbox + radio to the DS Figma: checkbox tick is the exact 1pt Icons / Tick path in white on the action colour (669-892 / 5915-6388); radio is 24px with a 1px Grey 3 ring that stays grey and a 13.7px dot in the CTA…"
  ]
 },
 {
  "d": "2026-10-09",
  "v": "2026.10.09",
  "title": "From the commit history",
  "changed": [
   "Size selector: out of stock is a two-state pattern — .sz.oos (just out of stock) or .sz.oos.oos--notify (with the notification bell → back-in-stock alert), never the info i; own catalogue variants, Figma Coming Soon…"
  ]
 },
 {
  "d": "2026-10-08",
  "v": "2026.10.08",
  "title": "From the commit history",
  "changed": [
   "Deliver+ checkout banner: copy is now 'Peace of mind, guaranteed £x.xx' (price strong); banner fills its container and the checkbox sits on the right margin (margin-left:auto, width:100%) — catalogue variants size…",
   "Deliver+ checkout banner: new Small New design (SEEL Enhancements 2026 3516:156668 + 3522:* per fascia) — no ground, lockup + 24px checkbox, one line with the price strong, Learn more in the fascia colour; each…",
   "Account 2026 into the DS: app tab bars, membership wordmarks, Misspap USP, project entry",
   "Spacing measured in gaps: 1 gap = 4px = Tailwind unit 1 — --gap-N tokens (space-* alias them), Tailwind preset, Foundations spacing rewritten (gap · px · Tailwind · token), spec + CLAUDE.md + catalogue spacing notes…",
   "Icons: menu renamed android-menu (the vertical kebab) — file, Icons page tile, search keywords, PLP asset manifest",
   "Icons: completion-time, delivery-insurance, info, resale and support were partial exports (fragments centred in the frame) — now the whole Figma components on the 24 base with 1pt non-scaling lines; question gets its…",
   "Icons: cross-circle, expand, expand-filled, play-thumb, tick-circle-fill, university, spinner and zoom rebuilt from the DS icon library (470-935) so they read in one colour — glyphs are real cut-outs (no white shapes…",
   "Fix: catalogue.js syntax error (unescaped quotes in the USP countdown rule) blanked the USP prototype and every catalogue-driven page",
   "USP banners match live (08 Oct pm re-check): Debenhams row 1 Top Fashion + Extra 15%, KM two-line countdown message, live text + cell colours in tokens (Debenhams, MAN, PLT, Warehouse); countdown colour per row on…",
   "USP banners as a DS drop-in: live content re-scraped 08 Oct into assets/ds/usp-live.js, renderer in usp.js (data-usp-banners / DG_uspHTML), prototype renders through it; red countdown digits only on black bars (DS…",
   "USP banner: swipe between messages on mobile (DS usp.js), Auto animate 0–5s, Position above / below the menu per row or all rows"
  ]
 },
 {
  "d": "2026-10-07",
  "v": "2026.10.07",
  "title": "From the commit history",
  "changed": [
   "USP banner v3: rows that never jump, live content in situ, rows promoted to the DS"
  ]
 },
 {
  "d": "2026-10-06",
  "v": "2026.10.06",
  "title": "From the commit history",
  "changed": [
   "PLT Royalty icon: the Royalty emblem (crown over the PLT monogram, ROY-EMBLEM-11) on the 24×24 base, replacing the crown-only glyph; source emblem kept in memberships",
   "USP prototype v2: each fascia's live banners (Shop Now stripped, Code: XYZ, live click-throughs), rotating message lists, brand chips like the PLP configurator, one grey + one black rule, no inline links",
   "USP banner rebuilt to the Figma (height follows the copy: 23px single line on mobile; dash, Code: XYZ, countdown row, attached caveat, Figma colourways), usp.js for countdown + dash wrap, and an in-situ prototype…",
   "Memberships in Brand Centre; unlimited infinity + unlimited+ icons; every library icon on a 24×24 base with 1pt non-scaling strokes; Icons page tiles/list, A–Z sort, search; Gift Card Email project; title \"Design…",
   "Sidebar holds the chrome (group logo, home, search, theme, brand); Nasty Gal removed from the DS; Brand Room set in Archivo; grey backdrop for black fascias on every page; project status dropped, date is Latest Version",
   "Site IA: Brand Centre, Projects and Planning and Tools menus; a page per brand; group logos; country flags"
  ]
 },
 {
  "d": "2026-09-30",
  "v": "2026.09.30",
  "title": "From the commit history",
  "changed": [
   "DS: promo Apply matches the 50px field; floating label glides to the top on focus with the caret beneath",
   "DS: radii read the brand tokens (PLT + Brand Room fully square), spinner buttons keep their label width, canvases knocked back to light grey",
   "DS: spinner is the DS ring icon with an eased 1.2s turn; Pay CTA moves to Payment buttons; full PayPal wordmark; universal components shown once; one wishlist glyph per fascia",
   "Button: CTAs stack at the Figma width (358), icons inline SVG in the label colour at 16px"
  ]
 },
 {
  "d": "2026-09-10",
  "v": "2026.09.10",
  "title": "From the commit history",
  "changed": [
   "Promote: Deliver+ exact checkout/modal/PLT surfaces, variant order, live controls, inactive fascias",
   "Promote: single-SVG Deliver+ lockups, per-fascia component pages, no sign-off wording",
   "Publish: Deliver+ hero set",
   "Publish: Design system IA + 21 fascia modes"
  ]
 },
 {
  "d": "2026-09-09",
  "v": "2026.09.09",
  "title": "From the commit history",
  "changed": [
   "Publish: component catalogue, Component library + wiki + Dev alignment pages, DG Group Design System Storybook at /storybook/dist/, front-end Storybook ingest",
   "Publish: project names + Tools group, content-sized sidebar, PLP configurator on the PDP shell, mini quick add on the titles row, AI strip spacing"
  ]
 },
 {
  "d": "2026-09-08",
  "v": "2026.09.08",
  "title": "From the commit history",
  "changed": [
   "Publish: Extended component library + estate inventory",
   "Publish P-05: quick add mini price-row variant + strip select; MAN production header sizes, icon aspect fix"
  ]
 },
 {
  "d": "2026-09-07",
  "v": "2026.09.07",
  "title": "From the commit history",
  "changed": [
   "Publish P-05: brand-by-brand round"
  ]
 },
 {
  "d": "2026-09-04",
  "v": "2026.09.04",
  "title": "From the commit history",
  "changed": [
   "Publish P-05: USP component auto-layout rules",
   "Publish P-05: PLT production USP",
   "Publish P-05: production USP sizing",
   "Publish P-05: MAN production USP structure"
  ]
 },
 {
  "d": "2026-09-03",
  "v": "2026.09.03",
  "title": "From the commit history",
  "changed": [
   "DS promote: grid-view icon assets (photo/2col), session log",
   "DS promote: one-size swatches, grid-view icons",
   "DS promote: C-01 golden buttons, swatch spec 921-7470, app badges, PLT sand + icon tokens",
   "DS promote: USP banner content spec + asterisk rule, equal-height USP, review comments kit, offer-line spacing",
   "DS: offer line 2px under price",
   "DS: sf-split full-bleed rules",
   "DS: roundel sizing per App-PLP + MAN import specs; taggstar inherits card text size",
   "DS: pc-taggstar--lt variant (grey inline pill, flame)",
   "DS: Grey 1 filter keylines",
   "DS: Grey 05 filter keylines, 8px pill gaps",
   "DS: sf-filters no-grow (show-more adjacent), sf-bar pill padding fix, cat-row--pills 4px",
   "DS: sf-filters clamp/expand, 160px dropdowns, roundel white variant, usp rotation animation, logo sizes, 1:1 count badge, iceberg pills",
   "DS: usp-rotate animation for mobile cell rotation",
   "DS: sf-float pills grey keyline, no shadow",
   "DS: sf-float 8px vertical padding",
   "DS: header/footer inners cap at 2000px",
   "DS: grey-1 catpills, chip radius via radius-default, MAN badge tokens",
   "DS: pc--flush variant for zero-gutter grids",
   "DS: sf-float shadow softness + unclipped scroll padding",
   "DS: sf-float floating filter pills (new-format mobile) + site C-06 demo",
   "DS: payment badge assets + footer pay row as images",
   "DS: pc-ndd delivery line into components.css, size-inherits card text",
   "DS: usp-strip flat spec + mobile rotation, sticky usp bar, edge roundel responsive rules",
   "DS: usp-strip component, badge-format category pills, edge roundel row, usp token flips",
   "DS: signed-off button palette per fascia, link/focus token split, Google Sans chrome",
   "DS: roundel variants, solid pill, breadcrumb component, USP/nav sizing",
   "DS: icon library (146), footer C-08, PLT card chrome tokens, icon-locked glyphs",
   "DS: card/header/sort-filter corrections from the live audit",
   "DS: promote P-05 components — product card, PLP header, sort & filter, badges",
   "Repo live: scaffold warehouse/brandroom modes, log 14, repo+Pages links",
   "Extract DS tokens + Button to assets/ds/ — shared by site and project prototypes"
  ]
 }
];
