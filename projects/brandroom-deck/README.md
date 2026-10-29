# The Brand Room deck template

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-deck/
**Source:** "THE BRAND ROOM x ADI.pdf" (Ellie Cartwright, Google Drive 1jbSiXU-HDGDLx_eYKkwq4IXAAx_xoASE, 29 Oct 2026). Every word and figure in the slides comes from that PDF. Photography was taken from the PDF into `img/`.
**Format:** the same as the AI Generated Badge deck (jakerayner96.github.io/ai-generated-badge): a fixed 1920×1080 stage scaled to the window, arrow keys / click / space to move, `#n` deep links, print to PDF gives one slide per page.

## Brand
- `data-brand="brandroom"` + `assets/ds/tokens.css`: Archivo (`--font-family-base`), ink `#0A0A0A` (`--primary`), grey `#767676` (`--text-secondary`). Square corners, mono only, no accent colour.
- Display type is Archivo at width 125% (expanded) and weight 700, uppercase, matching the wordmark. Copy is Archivo at 100%, weight 300/400. Eyebrows are 16px, weight 500, letter-spaced .24em, uppercase.
- The wordmark is `assets/brands/brandroom.svg`, used as a CSS mask so it takes the slide colour. Partner and adjacent-brand logos come from `assets/brands/brandroom-portfolio/` (Puma and Berghaus have no DS logo yet, so their tiles show the name).
- The 30° slanted photo panels come from the original PDF.
- Three slide themes: `.dark` (ink), `.light` (white), `.stone` (#F2F2F2, the DS neutral).

## Templates (bank these into Figma Slides)
Each `<section>` carries `data-layout`. Press **G** for the overview of every layout.

| | Layout | Use |
|---|---|---|
| T01 | Cover | Wordmark × partner logo, three slanted images, date / confidential |
| T02 | Statement + image | Lead paragraph, body copy, tags, a note row; full-height image on the right |
| T03 | Numbered points | Four numbered columns |
| T04 | Chart + split | Bar chart (data in `AGES`) and a split stat with a callout |
| T05 | KPI grid | Six big numbers, 3 × 2 |
| T06 | Stat list + image | Five stat rows with a device or cut-out image |
| T07 | Section divider | Big index number, section title, slanted images |
| T08 | Logo wall | Launched / Launching tiles + In conversation names (data in `LIVE` / `SOON` / `TALK`) |
| T09 | Timeline | Three years of revenue vs at-cost bars + a total (data in `YEARS`) |
| T10 | Two column | Two big ranges with bullet lists; partner mark top right |
| T11 | Three column | Text column, large category list, text column |
| T12 | Image grid | Moodboard of 8 images + 4 swatches |
| T13 | Close | Thank you |

Content slides get the footer automatically: wordmark left, `data-section` + folio right. The cover, divider and close have no footer.

## Notes
- The age chart values were read from the PDF chart (12 / 23 / 21 / 19 / 13 / 9%). Check them against the source data before the deck is shared.
- No DS components were added or changed. The deck uses DS tokens and brand assets only; its slide layouts are deck-only and live in this file until they move to Figma Slides.
