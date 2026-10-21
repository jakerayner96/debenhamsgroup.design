/* DG Group Design System — changelog. Newest first. One entry per iteration (a day's push).
   Every DS change adds to the top entry: added (new components / tokens / assets), changed, fixed, and which project drove it (by).
   Rendered on the site's Changelog page (index.html #changelog). Entries before 16 Oct 2026 are seeded from the git history of assets/ds. */
window.DG_CHANGELOG=[
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
