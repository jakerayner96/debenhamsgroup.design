# Membership landing — Unlimited · Premier Club · Premier · Royalty

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/membership-landing/
**Source:** `debenhams-unlimited_3.html` (Jake, 12 Oct 2026) — the Debenhams Unlimited "Free delivery on every order for a year" landing page with the receipt calculator. No Figma file; the programme art and colours come from the DS Memberships registry (`index.html` `DG_MEMBERSHIPS`, Brand Centre › Memberships), which was built from the live PDP membership box (core-pdp-2026 `brands-live.js`) and the live `/account/unlimited` pages (08 Oct 2026).

Standard review shell (fascia chips · Desktop / Mobile · width preset · Full page / Fold · Export) with the page configuration on the left. `page.html` renders the page from DS tokens + components for the five fascias that run a delivery membership.

## What was kept from the source
Every section, in order, with its layout and behaviour: hero (headline, lede, two CTAs, "pays for itself" line, "Works at …" stores line) + the receipt calculator (slider 1–30, printed order lines, "+ N more orders" after six, struck "Without" total, "With" total, the "stays in your pocket" / "N more orders and it has paid for itself" message), What's included (two lead perks + three small), How to join (three numbered steps + CTA), Questions (four FAQs), closing band, legal lines. Breakpoints 900 and 480 as in the source.

## What changed
- **Fascia modes drive everything** (`tokens.css` on `html[data-brand]`): font, weights, letter case (PLT uppercase headings and buttons), radius, link colour, raised/sunken surfaces (PLT cream paper).
- **DS components:** buttons `.bd.pri` / `.bd.sec`, accordion `.acc` for the FAQs, header + footer (`catalogue.js` variants) behind the Site chrome toggle.
- **Programme styling per fascia** (`assets/brands/memberships/`): a band above the headline with the live lockup on its art (Debenhams Unlimited wordmark on the aqua art, boohoo Premier Club, boohooMAN Premier, PLT Royalty on its dark art, Karen Millen Premier on black), and the closing band in the programme's box colour with its CTA colours. Receipt accent = the fascia link colour.
- **Copy derives from the programme:** name, price (live: Debenhams £14.99, boohoo £9.99, boohooMAN £9.99, PLT £9.99, Karen Millen £14.99) and the break-even order (`floor(price / fee) + 1`) feed the hero line, the receipt and the closing line. Stores line / "Across our brands" perk / stores FAQ only when the programme covers more than one store (Debenhams: Debenhams, Coast, Burton, Wallis).
- **Dark mode dropped** — the source had a `prefers-color-scheme` theme; the fascia modes are light only.
- **Unlimited+** (Debenhams only): switches the wordmark to `unlimited-plus-logo.svg`; price, colours and benefits are still to confirm, so the page keeps the Unlimited copy.

## Panel
Programme tier · Pricing (membership a year, next day fee) · Calculator (on/off, slider start, slider max) · Copy (headline, stores) · Sections (programme band, What's included, How to join, Questions, closing, site header + footer) · Reset. State is per fascia and saved to localStorage (`proto-membership-landing-v1`).

## Spacing
Source values kept: hero gap 16 (64px) top, section gap 22 (88px), perk padding gap 8 (32px), steps gap 8 (32px) — 900 and below: section gap 16 (64px). Programme band padding gap 3 (12px) / gap 4 (16px), as the Account 2026 membership box.

## Export
One zip per fascia: `membership-landing-<fascia>-<stamp>-mobile-390.png` + `-desktop-1440.png` (full page), `config.json`, `page.html`, this README.

## Next
- Promote the programme band (`.mband`) into `components.css` as the membership box band shared with Account 2026 — components.css had another session's uncommitted hunks on 12 Oct, so it stays page-local for now.
- Confirm Unlimited+ price, colours and benefits.
