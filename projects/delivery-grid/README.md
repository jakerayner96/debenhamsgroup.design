# PDP delivery grid

**Brief (Jake, 16 Oct 2026):** one prototype with the delivery options discussed in the Delivery Grid UX catch up (Demi Adesanya, Paul Dossis, Euan Macdonald, Jake), on the latest PDP, covering app, mobile web and desktop. See more opens Paul's modal. Unlimited / Deliver+ first out of scope, then added back as banners (Jake, 16 Oct): the page is the full master PDP — Ask Deb under Apple Pay, Subscribe & Save, membership box, Deliver+.

**Live:** https://jakerayner96.github.io/debenhamsgroup.design/projects/delivery-grid/

## Sources
- Modal: Figma Gifting `PIh1ikzvYNH1FR4arKJbe4` · `209-294935` (Home Delivery) · `209-295333` (Collect Nearby) — Paul Dossis
- Tabbed box + Premier view: Demi Adesanya's Claude artifact (claude.ai/artifact/4f6vqa1g6yAcXvCoS7oWkC)
- Live: Coast PDP Delivery Methods (sentences, See more, returns line; bulky sofa caveat), screens in the meeting notes
- Base page: DS PDP template `templates/pdp.html` (all seven fascias)

## Built
- `index.html` — review shell (fascia chips · **Web / App** · Desktop / Mobile · width · Full page / Fold · Export). App = phone widths only; export = 390 + 1440 (web) or 390 + 440 (app).
- `page.html` — embeds `templates/pdp.html?brand=` and injects the DS delivery grid + modal; App adds `.app-top` + `.app-tabbar` and drops the web header, USP bars, breadcrumb and footer. The static USP box (old Strappy copy) is always hidden.
- DS: `assets/ds/delivery.js` (data, rules, markup) + components.css "Delivery grid" block + catalogue entries `delivery-grid`, `app-top`.

## Options (left panel)
| | |
|---|---|
| **A · Live + James's PR** | sentences, fastest top / cheapest bottom; badges; if both are C&C add the fastest home delivery (badge "Fastest" as the PR, or "Fastest home delivery") |
| **B · Tabs** | Delivery / Click & Collect, checkout-style rows, price right; See more opens the modal on that tab |
| **C · One-liner** | "Get it Tomorrow to M4 7BB" + "or collect from £2.49" + one link into the modal |
| Modal | fixed (Jake, 16 Oct): Home Delivery / Collect Nearby toggle (Paul) only, page grid type · NI always its own section · price low → high · slides up on mobile web + app, DS small modal on desktop |
| Rules | cut-off "midnight" / "12AM" · See more with two methods · returns line + days |
| Product | standard · C&C comes back first (the live bug) · marketplace (two methods) · bulky (caveat under the price, in the box and in the modal) |
| Customer | Standard / the fascia's programme (Unlimited, Premier Club, Premier, Royalty — next day free) |
| Placement | fixed: Jake's order — Apple Pay → Ask Deb → Unlimited → Deliver+ → delivery grid → BNPL → Subscribe & Save |

## Agreed in the meeting
Phase 1 static logic for everyone; modal sorted price low → high like checkout; web and app the same; bulky surcharge upfront and repeated in the modal.

## Open
NI split needs string matching on method names ("NI" / "Northern") — Jake to take to JB. Tabs vs one-liner, combined vs single-tab modal, and grid above vs below Deliver+ — Demi: test, don't opine. Dynamic sorting = phase 3.

## Notes
Method names / prices are the Figma's (Debenhams) on every fascia; dates count from today.
