# Session log — 16 Oct 2026 (c) · PDP template = latest PDP

**Jake:** breadcrumb needs the same space under it as over it (DS) · every PDP: Add to bag, PayPal, Apple Pay stacked in that order · Google prompts on every PDP from now on · a PDP request always pulls the latest version of the projects (e.g. the delivery grid) unless told otherwise.

## Done
- `.bc` padding gap 4 (16px) top and bottom (was 16 / 4).
- **Added** `.pdp-ctas` PDP buy buttons (ATB → PayPal Checkout → Apple Pay, gap 2) and `.ai-prompts` Google PDP prompts + `assets/ds/ai-prompts.js` (promoted from projects/shopping-agent; "Ask Deb" on Debenhams, "Ask AI" elsewhere). Catalogue entries `pdp-ctas`, `ai-prompts`.
- **templates/pdp.html** now = the latest PDP: buy stack → Google prompts → membership → Deliver+ → delivery grid (live layout A, See more → Delivery Options modal via `DG_delivery.mount`) → BNPL. The static `.usp-box` is gone from the template.
- delivery-grid prototype: placement adds "under the Google prompts"; it replaces the template's grid with its configured one (`data-dgp`).
- `.ai-pill` fill = `--surface-raised` (PLT warm white).

## Rule
A PDP = `templates/pdp.html` as it stands, including every component a project has since landed in it. New PDP features land in the template (not only in their project) so the next PDP gets them.

## Follow-up
projects/shopping-agent still carries its own copies of the buy stack (.ctas) and prompts (.gap-wrap / .prompts-container) — switch it to `.pdp-ctas` / `.ai-prompts` next time it's touched.
