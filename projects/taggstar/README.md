# Taggstar — in situ, all fascias

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/taggstar/
**Figma:** Taggstar `00YKWCHwTarfwWZ1HayFUI` · MAN use case `3483-23105` (PLP card 9196-26858 · PDP 3553-78608 mobile / 3574-156761 desktop pinned · Bag 3510-4230) · message library Taggstar/V2 `3001-3762` (PDP 1–14, Bag 1–9)

Standard review shell (review-prototype skill): fascia chips · Desktop/Mobile · width preset · Full page/Fold · Export on top, configuration on the left, resizable frame.

## Design-system pages only (16 Oct, v2)
`page.html` embeds the DS page templates and injects the DS Taggstar component (`assets/ds/taggstar.js` markup + behaviour, CSS in `components.css` only):
- **PLP** — `projects/plp-alignment/plp.html?brand=…&mode=new` (its local component CSS was promoted into the DS today).
- **PDP** — `templates/pdp.html?brand=…`: all seven fascias, one live product each (captured 16 Oct), DS components only — header / USP / footer drop-ins, PDP gallery, PDP title, price, delivery countdown, option label, swatches, sizes, button, membership box, Deliver+, USP box, BNPL, at a glance, accordion, rail.
- **Bag** — `templates/bag.html?brand=…`: page title, threshold, bag items, DS bag summary (`bag-summary.js`).
v1 embedded core-pdp-2026 (own CSS, ~20% DS classes); replaced so every visible piece is a DS component. Components added for this are listed on the DS Changelog (site #changelog).

## Per fascia (left panel)
- **Background** per placement (PLP / PDP / Bag): Figma Grey 1 · live colour · white (warm white on PLT) · brand · brand light · black · any hex, plus opacity. Text, icon and close flip to black or white, whichever contrasts more; the panel shows the ratio and warns under 4.5:1 and on pure white for PLT.
- **Icon** on / off. The icon follows the message type, as in the V2 library: cart = purchases · bag = added to bag · eye = views · flame = trending · clock = recent sale · trophy = best seller. Set: DS line icons (`icons/lib`, `icons-cart.svg` added) or boohoo's live animated set (eyes for views, heart for the rest, `icons/taggstar/`).
- **Message** from the V2 library (claim + detail, both editable, `**bold**`), uppercase toggle.
- **Placement**: PLP every card / 2nd / 3rd, or mix the PLP messages · PDP Figma (mobile on the image 12px from left and bottom; desktop pinned 24px above the bottom of the window, centred on the image) / on the image / live (centred on the image) · Bag first item / every item.
- All-fascias table for the overview; click a row to switch.

## Live check — 16 Oct 2026 (10 PDPs per fascia, 390 + 1440)
| Fascia | Live | Default here |
|---|---|---|
| Debenhams | PDP toast centred on the image, black 60% + blur, white text, 30px line icons (eye "Popular! 210 others viewed in the last 24 hours", bag "In Demand! 13 added to bag in the last week"), close | black 60%, icon on, line |
| boohoo | PDP (desktop) white, animated eyes "Act fast! 503 people have checked this out in the last day." / heart "Most loved. 30 purchased in the last week." | PDP white, PLP + Bag pink #F7B6CC (dev tokens), icon on, boohoo set |
| PLT | PDP white, no icon, uppercase Roboto 12 light ("IT GIRL APPROVED. SOLD 38 TIMES IN THE LAST WEEK.") — close is white on white | warm white #FFFDF7 (DS: never #FFF), PLP 80%, Bag peach #FFD4CD (dev tokens), icon off, uppercase |
| boohooMAN · Karen Millen · Warehouse · Brand Room | no message served on 10 PDPs | Figma Grey 1, icon off |

PLP and bag messages weren't served to a fresh session on any fascia; their colours come from the dev Storybook `--social-proof-plp / -basket` tokens (boohoo, PLT only).

## Export
Zip: `taggstar-<page>-<brand>-*-mobile-390.png` + `-desktop-1440.png` (full page), `config.json`, `page.html`, `taggstar.js`. The capture runs inside the embedded page's own window (`iw.Function` + its `setTimeout`) so html2canvas resolves that page's relative images and stylesheets; the pinned desktop toast is drawn where it sits on landing (24px above the bottom of a 900px window).
