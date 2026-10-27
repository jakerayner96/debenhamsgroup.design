# Membership landing — Unlimited · Premier Club · Premier · Royalty

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/membership-landing/
**Source:** `debenhams-unlimited_3.html` (Jake, 12 Oct 2026) — the Debenhams Unlimited "Free delivery on every order for a year" landing page with the receipt calculator. No Figma file; the programme art and colours come from the DS Memberships registry (`index.html` `DG_MEMBERSHIPS`, Brand Centre › Memberships), which was built from the live PDP membership box (core-pdp-2026 `brands-live.js`) and the live `/account/unlimited` pages (08 Oct 2026).

Standard review shell (fascia chips · Desktop / Mobile · width preset · Full page / Fold · Export) with the page configuration on the left. `page.html` renders the page from DS tokens + components for the five fascias that run a delivery membership.

## What was kept from the source
Every section, in order, with its layout and behaviour: hero (headline, lede, two CTAs, "pays for itself" line, "Works at …" stores line) + the receipt calculator (slider 1–30, printed order lines, "+ N more orders" after six, struck "Without" total, "With" total, the "stays in your pocket" / "N more orders and it has paid for itself" message), What's included (two lead perks + three small), How to join (three numbered steps + CTA), Questions (four FAQs), closing band, legal lines. Breakpoints 900 and 480 as in the source.

## What changed
- **Fascia modes drive everything** (`tokens.css` on `html[data-brand]`): font, weights, letter case (PLT uppercase headings and buttons), radius, link colour, raised/sunken surfaces (PLT cream paper).
- **DS components:** buttons `.bd.pri` / `.bd.sec`, accordion `.acc` for the FAQs, header + footer (`catalogue.js` variants) behind the Site chrome toggle.
- **A content page on the site, not a microsite** (Jake, 12 Oct): the DS header with the fascia's live USP banner rows (`usp-live.js` + `usp.js` drop-in under the nav), a breadcrumb (Delivery / programme), the site container (gap 4 (16px) gutters, gap 10 (40px) + 1440 max from 1024) and the DS footer, all on by default (Site chrome toggle). Type on the DS scale: h1 display-lg 32 / 48, h2 display-md 28 / 40, lede body-lg; section padding gap 12 (48px) / gap 16 (64px).
- **Programme styling per fascia** (`assets/brands/memberships/`): the live wordmark at its live height on the closing band, which takes the programme's box colour, ink and CTA colours (Debenhams Unlimited on #DCDCDC, boohoo Premier Club on #E1D8CF with the #8D113A CTA, boohooMAN Premier on #CECECE, PLT Royalty white on #20090C, Karen Millen Premier white on black). The band above the headline from the first cut was removed (Jake, 12 Oct) — the wordmark lives on the closing band because the white PLT / KM marks need a dark ground. Receipt accent = the fascia link colour.
- **A promo page, not just a content page** (Jake, 27 Oct: "make it look snazzier"): the page sells the programme.
  - **Hero** on the programme ground (`DG_memberVars`: box colour + live art + ink): the live wordmark (`DG_memberLogo`, ×1.75 the band height), headline 44 / 60–84, lede, **price block** (£X big + "a year · That's Np a week"), **Membership CTAs** (DS `.bd.mbr` / `.bd.mbr-out`, the programme's CTA colours — white on PLT / KM), "Pays for itself by your Nth order" chip; the receipt calculator floats beside it as a white card (tilted 1.2° from 1024).
  - **Stat strip** on the same ground: Free next day · Free standard · 12 months · stores (multi-store) or the fee saved.
  - **What's included** as cards: lead card on the programme ground (next day), lead card with the fee saved, three icon cards (DS lib icons).
  - **Join in under a minute**: three step cards, numbers in programme-art discs; **Questions** (DS accordion); **closing band** centred on the programme ground with the wordmark.
  - **Sticky join bar** (mobile, < 1024): wordmark + Join for £X, slides up once the hero CTAs scroll away; off in exports.
  - Same data as Account 2026's membership page (wordmarks, art, colours) — the colours left the page's PROG table and come from membership.js.
- **Copy derives from the programme:** name, price (live: Debenhams £14.99, boohoo £9.99, boohooMAN £9.99, PLT £9.99, Karen Millen £14.99) and the break-even order (`floor(price / fee) + 1`) feed the hero line, the receipt and the closing line. Stores line / "Across our brands" perk / stores FAQ only when the programme covers more than one store (Debenhams: Debenhams, Coast, Burton, Wallis).
- **Dark mode dropped** — the source had a `prefers-color-scheme` theme; the fascia modes are light only.
- **Unlimited+** (Debenhams only): switches the wordmark to `unlimited-plus-logo.svg`; price, colours and benefits are still to confirm, so the page keeps the Unlimited copy.

## Panel
Programme tier · Pricing (membership a year, next day fee) · Calculator (on/off, slider start, slider max) · Copy (headline, stores) · Sections (programme lockup, What's included, How to join, Questions, closing, site chrome) · Reset. State is per fascia and saved to localStorage (`proto-membership-landing-v2`).

## Spacing
Source values kept: hero gap 16 (64px) top, section gap 22 (88px), perk padding gap 8 (32px), steps gap 8 (32px) — 900 and below: section gap 16 (64px). Programme band padding gap 3 (12px) / gap 4 (16px), as the Account 2026 membership box.

## Export
One zip per fascia: `membership-landing-<fascia>-<stamp>-mobile-390.png` + `-desktop-1440.png` (full page), `config.json`, `page.html`, this README.

## Next
- Account 2026 still draws its own band (`.mbox .band`): swap it for the DS `.member-band` (`DG_memberBandHTML(b,{plus,status:'Active'})`).
- Confirm Unlimited+ price, colours and benefits.
