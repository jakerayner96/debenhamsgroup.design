# Taggstar — in situ, all fascias

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/taggstar/
**Figma:** Taggstar `00YKWCHwTarfwWZ1HayFUI` · MAN use case `3483-23105` (PLP card 9196-26858 · PDP 3553-78608 mobile / 3574-156761 desktop pinned · Bag 3510-4230) · message library Taggstar/V2 `3001-3762` (PDP 1–14, Bag 1–9)

Standard review shell (review-prototype skill): fascia chips · Desktop/Mobile · width preset · Full page/Fold · Export on top, configuration on the left, resizable frame.

## No new pages
`page.html` embeds the pages we already have and injects the DS Taggstar drop-in (`assets/ds/taggstar.js`) into them:
- **PLP** — `projects/plp-alignment/plp.html?brand=…&mode=new` (all seven fascias). The PLP's own retired trophy chip is removed; the message goes under the Add button / image, above the brand line.
- **PDP** — Core PDP 2026 `../core-pdp-2026/pdp.html?mode=new` for boohooMAN; the live PDP recreation `../core-pdp-2026/live.html?brand=…` for Debenhams, boohoo, PLT, Karen Millen. **No Warehouse or Brand Room PDP has been built yet** — those two show the Core PDP (boohooMAN build) with their own message settings; the panel says so.
- **Bag** — `projects/usp-banner/page.html` bag (the live `/basket` rebuild), on the first line item (or every item).

Same origin on Pages, so the wrapper writes into the iframes. Locally, serve a folder holding `debenhamsgroup.design` and `core-pdp-2026` side by side.

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
