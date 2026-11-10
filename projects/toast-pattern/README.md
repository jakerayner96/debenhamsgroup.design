# Toast pattern

**Brief (Jake, 10 Nov 2026):** the live sites confirm "Added to wishlist · Manage" with a full-width black bar at the bottom (Principles screenshot). Replace it with the DS floating white toast. Show where the pattern lives.

**Decision:** one floating white toast for every web confirmation.
- **Phones and tablets (< 1024):** at the bottom of the screen, gap 4 (16px) in from each side and gap 4 (16px) above the bottom edge, plus the safe area. It sits gap 3 (12px) above any bar pinned to the bottom.
- **Desktop:** top-centre, 400 wide, gap 4 (16px) under the USP banners.

## Built from the DS
- **Toast:** `components.css` (Toast placement, 10 Nov), `assets/ds/toast.js` (`DG_toast`, with a busy spinner, `--toast-bottom` and `DG_toastBottom`). On the DS site: Toast, with in-situ phone and desktop examples per fascia.
- **Wishlist:** `assets/ds/wishlist.js`. Every heart or bookmark fills on tap (`*-fill.svg`) and fires the toast: "Added to Wishlist · Manage", or "Removed from Wishlist · Undo".
- **Pages:** the PLP (`projects/plp-alignment/plp.html?mode=new`) and PDP (`templates/pdp.html`) templates, as they stand. Both load toast.js and wishlist.js, so the master has it too.

## Figma
- DS file aIHmkCaTy9c5EWOxAGw0So, Toast (Wishlist) board 13557:10289 (toast 13557:10294). Library Toast 5671:7604 / 5146-559.

## Panel
- **Page:** PLP or PDP.
- **Toast:** wishlist, removed, bag, product thumbnail, or none (tap a heart yourself).
- **Hold:** keeps the toast on screen for review.
- **Scroll first:** so the sticky bar is showing.
- **Placement:** the DS rule, plus top or bottom everywhere, for comparison only.

Principles is not in the PLP template yet, so it is PDP only.
