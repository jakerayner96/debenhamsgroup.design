# AI card minimum (17 Nov 2026)

**Brief (Jake, 16 Nov):** the carousels need to allow for the AI Generated badge, with a minimum product card size in case a card has an AI image.

**Finding:** the strip text is a fixed 10px (the legal floor, EU AI Act Art. 50(4)), so it can't shrink. Polish ("WYGENEROWANE PRZEZ AI") is the only long copy. In compact mode (≤150px wide) it needs:

| Font | Fascias | Polish strip | `--ai-card-min` |
|---|---|---|---|
| Geologica / Roboto / Jost / Lato / Hanken | Debenhams, PLT, Warehouse, KM, Coast, Oasis … | 134–144px | 144px |
| Archivo | Brand Room | 145px | 152px |
| Montserrat | boohoo, boohooMAN, Burton, Misspap | 153px | 160px |

English, French, Dutch, German and Swedish all fit in under 105px.

**Placements below the minimum:** mobile 3-up grid (Handpicked For You, ~117px at 390) · mini bag Complete Your Look (140px).

**Options (choose one in the prototype):**
- **Today**: no rule, so the strip is cut off.
- **A · Swap** (`aiFit:'swap'`): a card narrower than the minimum shows the product's own non-AI shot (`item.real`) with no strip. The layout never changes.
- **B · Widen** (`aiFit:'widen'`): every card in a placement with an AI image is at least the minimum. The mobile grid goes 2 across.

The DS supports both (carousel.js `DG_pcarCard` / `DG_pcarHTML`, components.css `.pc--ai`, `.pcar--ai-swap`, `.pcar--ai-widen`). Once Jake picks one, it becomes the default.

Prototype stand-in: the feed has one photo per product, so Swap shows the same photo without the strip.
