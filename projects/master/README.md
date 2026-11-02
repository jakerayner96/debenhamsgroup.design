# Master prototype

**Live:** https://jakerayner96.github.io/debenhamsgroup.design/projects/master/
**Date:** 2 Nov 2026 · **Owner:** Jake Rayner (UX)

The whole experience on the latest DS, every fascia: **Home → PLP → PDP → Bag**. It does two jobs:
1. **Reference.** It shows the latest DS styles in situ.
2. **Starting point.** Every new prototype starts here. Once a feature is decided, it is banked in the master and the DS component is made from it.

## How it works
- The master has **no page of its own**. `page.html` opens the DS page template for the chosen page **as it stands** (fetched fresh every load) and adds `master.js`, the journey layer:

  | Page | Template |
  |---|---|
  | Home | `templates/home.html` (new, 2 Nov) |
  | PLP | `projects/plp-alignment/plp.html?mode=new` |
  | PDP | `templates/pdp.html` (the master PDP) |
  | Bag | `templates/bag.html` |

- This means **banking = landing it in the template**. The master picks it up on the next load, and so does every prototype that embeds that template (Taggstar, KM Premier colours, delivery grid, AI badge, …).
- `master.js` draws nothing and restyles nothing. It only links the templates' own DS pieces:
  - header logo → Home
  - header bag → Bag
  - category nav, roundels, home tiles, breadcrumb, View all → PLP
  - any product card → PDP
  - PDP Add to bag → DS toast (Top, actionable) "Item added to bag · View" → Bag
- Inside the shell, a click posts `{protoNav:{page}}` and the shell loads that page. The left panel's Page card does the same. Opened on its own, `page.html?s={"brand":"plt","page":"pdp"}` navigates by itself.
- Export: one zip with the 390 + 1440 full-page PNGs of the page on screen, plus `config.json` and the code.

## Starting a new prototype from the master
1. Embed the page you are changing (the template, never a fork) and inject the new component. Same pattern as `projects/taggstar/page.html`.
2. Build the component in the DS: `components.css` + `catalogue.js` entry + changelog, and Figma.
3. Once it is decided, bank it: land it in the template.
4. Update `BANKED` / `NOT_YET` in `index.html` so the panel shows it.

## What's in it (2 Nov)
- **Home (new template):** each fascia's live homepage (usp-banner captures, 06 Oct; boohoo 19 Oct). Every live product module is the DS Product carousel (large header + tabs, 5 + peek); a home with none gets one after its second module. Top Sellers (medium + View all) further down. Then the footer.
- **PLP:** the P-05 PLP, new format. Wishlist on PLP cards only.
- **PDP:** the master PDP as banked 16–30 Oct:
  - buy stack Add to bag → PayPal → Apple Pay
  - Ask Deb prompts, membership box, Deliver+ (not on Brand Room)
  - delivery grid: option B tabs, row format 3, returns + seller info in the accordions (default from 2 Nov); BNPL; Subscribe & Save
  - Virtual Stylist chip centred
  - accordion set
  - **New:** Create The Look · Why Not Treat Yourself? · Recently Viewed (Product carousel spec placements)
- **Bag — Bag 2026 (banked 2 Nov, Figma `CYyGeUDy4w02enV7uFxZ6W`, mobile 1337:250006 / desktop 1337:256981):**
  - **Top:** Your Bag (n), Order Total, out-of-stock banner, free-delivery line, checkout.
  - **Sections:** Your Gifts · Delivered by <seller> (n) · Need A Top-Up? · Choose 2 free samples.
  - **Every bag product card type:** standard, out of stock, quantity error, e-Gift Card (+ details modal), membership, XCover add / added, Subscribe & Save, Taskrabbit, Taggstar strip, free gift, complimentary sample, customised, pre-order.
  - **Then:** the Deliver+ banner (mobile) and the summary, with Rewards on Debenhams and, on desktop, the free-delivery line on the card plus the Promo Code card.
  - **Interactive:** the quantity stepper, delete, Move to your Wishlist?, XCover, Subscribe & Save, samples (max 2) and top-up all work.
  - **Bag contents card** (left panel, Bag page): switch any card or section type off.
  - **Other fascias:** they get their own products, with the Debenhams-only types (marketplace, beauty, Rewards) left out.

## DS changes made for it (logged in the changelog, 2026.11.02)
- **Bag 2026:** Bag product card (`.bpc`), Bag sections, Rewards banner (`.rwd`), `assets/ds/bag.js`, `.bd.xs.line`, `.price-blk--bag`, `.sp-bag--sm`, `.bag-layer`. Changed: the Quantity stepper (to its Figma) and bag-summary.js (options, white mobile ground, 14px Order Total).
- **Added:**
  - `templates/home.html`
  - `templates/feed.js` (rail feeds)
  - `DG_pcarHTML` / `DG_pcarCard` in `assets/ds/carousel.js` (rail markup builder, catalogue entry noted)
  - `assets/ds/export-masks.js`: html2canvas can't paint CSS masks, so carousel arrows, the AI icon off Debenhams, the masked hanger and the Deliver+ ticks used to export as solid squares. While `html.exporting` is set, each one is swapped for its SVG in the element's own colour.
- **Changed:** the PDP and Bag templates (the recommendation rails above).

## Not banked yet (in a project, not in the master)
- **Product carousel 2 Nov round** (`projects/product-carousel/ds-next.css`, awaiting sign-off): one gap, images locked 2:3 (rail images vary in height until then), grid 3 across, Create the Look grey on mobile + picker sheet, Handpicked For You grid under BNPL, mini bag `.mdl--side`.
- **Shopping agent** (`projects/shopping-agent`): header Ask entry, search overlay, Ask Deb chat, content prompts module, PLP next best action.
- **Taggstar** social proof (`projects/taggstar`).
- **Brand Room sign-up popup** (`projects/brandroom-signup`).
- **AI Generated strip:** in the PDP template already, off by default (`S.ai`).

## Verified (2 Nov, Playwright)
- All seven fascias × Home / PLP / PDP / Bag at 390 (iPhone emulation) and 1440: no page errors, no horizontal overflow.
- Journey checked: home card → PDP → Add to bag toast → View → Bag → logo → Home → tile → PLP → card → PDP → bag icon → Bag.
- Export zip has both full-page PNGs, with the masked icons drawn.
