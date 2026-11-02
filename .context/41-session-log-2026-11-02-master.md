# 2 Nov 2026 — Master prototype

Jake: a master prototype of the whole experience on the latest DS components and the most recent projects. It is the reference for DS styles in situ and the starting point for every future prototype. Decided features get banked in the master, then the DS component is made from it.

- `projects/master/` (review shell). `page.html` writes the DS page template for S.page into the frame as it stands (fetch + document.write, base rewritten), then `master.js` (journey: logo → Home, bag → Bag, nav / tiles / roundels / breadcrumb / View all → PLP, cards → PDP, Add to bag → DS top toast → Bag; `{protoNav}` to the shell; speaks the shell protocol for the PLP).
- **Banking = landing it in the template.** The master always shows the templates as pushed. The panel's BANKED / NOT_YET lists (index.html) record what is in and what isn't.
- New DS: `templates/home.html` (live home per fascia + `.pcar` for every product module + Top Sellers), `templates/feed.js`, `DG_pcarHTML` / `DG_pcarCard` (carousel.js), `assets/ds/export-masks.js` (html2canvas mask fix, recoloured SVG backgrounds; needs width/height on the SVG for html2canvas, added from the viewBox).
- PDP template: Create The Look · Why Not Treat Yourself? · Recently Viewed. Bag template: You Might Also Like.
- Not banked: product carousel 2 Nov round (ds-next.css), Shopping agent search / Ask / chat / content prompts / NBA, Taggstar, Brand Room sign-up.
- Verified: 7 fascias × 4 pages × 390 / 1440, journey, export zip.

## Bag 2026 (same day)
- Jake: the new bag, from all the designs on Bag 2026 › Bag Product Cards - 19.08.26, within the master. Banked in templates/bag.html (so the master's Bag page).
- New DS: .bpc (Bag product card, every type), .bag-sec / .bag-panel / .bag-gift / .bsmp (Bag sections), .rwd (Rewards), assets/ds/bag.js (builders + reducer act()), .bd.xs.line, .price-blk--bag, .sp-bag--sm, .bag-layer; imagery templates/img/bag (2:3 webp; the Figma's square gift / sample shots padded to 2:3 per the product-image rule).
- Changed: .qty to its Figma (1234:76756); bag-summary.js opts {thresh, rewards, promo} + DG_bagTopHTML {after}; .bs--m white; .bs-ot 14.
- DS reds, not the Figma's: price + error = --text-error (#C90000), Figma uses #E90000 / #D33F3F.
- Master shell: Bag contents card (S.cfg.bagOff). Debenhams = the Figma set; other fascias = own products, Debenhams-only types off.
- Not done: Figma library components for the new DS pieces (rule: code AND Figma).
