# Session log — 16 Oct 2026 (b) · PDP delivery grid prototype

**Brief:** Delivery Grid UX catch up (16 Oct) → one prototype with the three PDP delivery options, Paul's modal behind See more (Gifting PIh1ikzvYNH1FR4arKJbe4 209-294935 / 209-295333), app + mobile + desktop, on the latest PDP. Ignore Unlimited / Deliver+.

## Built
- `projects/delivery-grid/` — shell (adds a **Web / App** segment to the top bar; app clamps to phone widths, Fold drops the Safari chrome, export 390 + 440) + `page.html` embedding `templates/pdp.html` (Taggstar pattern) and injecting the DS grid / modal / app chrome. README has the option matrix.
- **DS added:** Delivery grid `.dgrid-*` + Delivery options modal `.dopts-*` (on `.mdl`) + `assets/ds/delivery.js` drop-in (methods, fastest / cheapest picks, James's two-C&C rule, Premier, bulky, NI split, sort); App top bar `.app-top`. Catalogue entries `delivery-grid` (8 variants generated from delivery.js; index.html loads delivery.js before catalogue.js; node `require`s it for Storybook) and `app-top`. Changelog top entry updated.
- Site: `DG_PROJECTS` "PDP delivery grid".

## Gotchas
- The template's static `.usp-box` is hidden (ecom removed the Strappy delivery copy); `.member-box` / `.dplus` hidden unless "context" is on.
- Export with the modal open pins the layer to the first 844 / 900px (fixed layers would centre on the full page).
