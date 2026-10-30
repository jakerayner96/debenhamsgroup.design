/* DG Group Design System — changelog. Newest first. One entry per iteration (a day's push).
   Every DS change adds to the top entry: added (new components / tokens / assets), changed, fixed, and which project drove it (by).
   Rendered on the site's Changelog page (index.html #changelog). Entries before 16 Oct 2026 are seeded from the git history of assets/ds. */
window.DG_CHANGELOG=[
 {
  "d": "2026-10-30",
  "v": "2026.10.30",
  "title": "Wishlist collections",
  "by": "App Prototype — new wishlist (Jake 30 Oct, Best App Ever 1128:222949)",
  "added": [
   "Wishlist collections (.coll-list · .coll-new · .coll-row · .coll-thumb · .coll-promo, in the slide-up .mdl--up): Add to Collections (Create New, collections most recently added to first, Tick Circle Fill / Expand, SAVE), the first-wishlist onboarding panel (NEW + Organise your wishlist + collage), Create New Collection on .fld with the two errors; catalogue entry with three variants · by App Prototype (Jake 30 Oct)"
  ],
  "changed": [],
  "fixed": []
 },
 {
  "d": "2026-10-30",
  "v": "2026.10.30",
  "title": "Delivery grid: four row formats (Delivery Methods · Get It By · Get It By date only · Arrives By)",
  "by": "PDP delivery grid (projects/delivery-grid, Jake's Figma explorations 30 Oct)",
  "added": [
   "Delivery grid row format, DG_delivery o.fmt 1–4: 1 Delivery Methods (method / Arrives …, default) · 2 Get It By (Arrives Tomorrow / method · cut-off) · 3 Get It By (Tomorrow / method · cut-off) · 4 Arrives By (Tomorrow / method · cut-off). The box title and the modal rows follow it. PDP template takes S.dgFmt; prototype panel has a Row format card · by PDP delivery grid"
  ],
  "changed": [],
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
   "Figma library Debenhams Group DS (figma.com/design/mkimeRGTWN8UDHq55Cbk9D), built from this code: Core + Brand variables (Brand = 10 modes: Debenhams, Karen Millen, PLT, boohooMAN, boohoo, Warehouse, The Brand Room, Burton, Principles, Coast), 28 text styles, shadow + gradient styles, all 79 catalogue components as variant sets bound to the variables · by Figma library",
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
