# 31 · Session log 12 Oct 2026 (c) — Membership landing prototype

Project: `projects/membership-landing/` · Live: jakerayner96.github.io/debenhamsgroup.design/projects/membership-landing/ · No Figma source — rebuilt from Jake's `debenhams-unlimited_3.html` (the Debenhams Unlimited "Free delivery on every order for a year" page with the receipt calculator).

## Brief (Jake)
"Rebuild this in my GitHub using design system rules and as a prototype with the ability to switch brands / screen size. Retain all of the functionality and layout, just pull in the latest Unlimited / Premier etc styling for each brand."

## What was built
- Standard review shell (`index.html` from the skill template) + `page.html` on `tokens.css` / `components.css` / `catalogue.js`.
- **Fascias:** the five that run a delivery membership — Debenhams Unlimited, boohoo Premier Club, boohooMAN Premier, PLT Royalty, Karen Millen Premier. Warehouse and Brand Room have no programme, so they are not chips.
- **Programme styling** = the DS Memberships set (`assets/brands/memberships/`, `DG_MEMBERSHIPS` in the root index.html; built from the live PDP membership box + `/account/unlimited`, 08 Oct): lockup at its live height on its art (or box colour) in a band above the headline; the closing band in the box colour + ink with the live CTA colours; the receipt accent is the fascia link colour. Prices live: Debs £14.99 · boohoo £9.99 · MAN £9.99 · PLT £9.99 · KM £14.99. Next day fee £5.99 everywhere (editable).
- **Kept from the source:** every section, order, grid and breakpoint (900 / 480); the receipt calculator logic (six printed lines then "+ N more orders", struck "Without" total, "stays in your pocket" vs "N more orders and it has paid for itself"). Break-even is now derived (`floor(price / fee) + 1`) and feeds the hero line, receipt and closing copy.
- **DS components:** `.bd.pri` / `.bd.sec` buttons, `.acc` accordion for the FAQs, the catalogue header + footer behind a Site chrome toggle (same logo / glyph swaps as the USP banner page).
- **Dropped:** the source's `prefers-color-scheme` dark theme (fascia modes are light only).
- **Panel:** Programme tier (Unlimited / Unlimited+, the + disabled off Debenhams) · Pricing · Calculator (on/off, slider start, slider max) · Copy (headline, stores — one store hides the "Works at" line, the Across our brands perk and the stores FAQ) · Sections toggles · Rules · Reset. Per-fascia state in `proto-membership-landing-v1`.

## Verified (Playwright, local server)
All five fascias at 390 (iPhone 13 emulation) and 1440 with the DS header + footer: fonts, button colour / case and the programme band image load; slider moves the receipt; no console errors or 404s. Shell: chips, panel cards, Unlimited+ disabled on PLT and enabled on Debenhams (wordmark swaps to `unlimited-plus-logo.svg`), Fold on at 390, Export → zip with `-mobile-390.png` (780 × 9070 at 2×) + `-desktop-1440.png` + config.json + page.html + README.md.

## Repo notes
- Other sessions were live in the working tree (Sign in prototype, Training Dept logo hunks in `index.html`, `components.css`, `catalogue.js`). This session committed only its own files; the `DG_PROJECTS` entry was staged as a patch so the Training Dept hunks stayed uncommitted for their owner.
- Not promoted to the DS yet: the programme band (`.mband`, same anatomy as the Account 2026 `.mbox .band`) — belongs in `components.css` as the membership box band once that file is free.

## Second pass (Jake, same day)
- "Needs the header from the design system too and look like a content page on the site, not just on its own" → site chrome on by default: DS header + the fascia's live USP rows via the drop-in (`usp-live.js` + `usp.js`, re-mounted after each render with `DG_uspHTML` / `DG_usp` since usp.js only self-mounts on DOMContentLoaded; auto 0 while exporting), breadcrumb `.bc` (Delivery / programme), the site `.wrap` container, DS footer. Type moved onto the DS scale (display-lg / display-md / body-lg), section padding gap 12 / gap 16. Store key → `proto-membership-landing-v2`.
- "Remove the banner above the title and just have the logo somewhere on the page" → the programme band is gone; the wordmark sits on the closing band (programme box colour, so the white PLT Royalty / KM Premier marks read). Panel toggle renamed Programme lockup.
- Hero headline enlarged to a true H1: 40px mobile, 56–72px desktop (clamp 5vw), line-height ~1 (Jake, 12 Oct).
- Re-verified with Playwright (five fascias × 390 / 1440: USP rows 4 / 3 / 4 / 3 / 2, lockup loads, calculator moves; shell: Unlimited+ swap, Fold, Export zip with both PNGs; no errors) and on the live Pages URL.

## Open
- Unlimited+ price, colours and benefits (page keeps the Unlimited copy under the + wordmark).
- Whether the live landing pages should carry each fascia's USP banners under the header (not added; the drop-in is one line if wanted).
