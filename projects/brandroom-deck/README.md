# The Brand Room partner deck template

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-deck/ · adidas `?p=adidas` (default) · Vans `?p=vans`
**Source:** "THE BRAND ROOM x ADI.pdf" (Ellie Cartwright, Google Drive 1jbSiXU-HDGDLx_eYKkwq4IXAAx_xoASE, 29 Oct 2026). The Brand Room words and figures come from that PDF.
**Figma:** The Brand Room `NRsu568JGzwCDq4egvkUbn`: logos Content / Logos (546:18029 adidas), campaign imagery Content (2:77 Napapijri), site screens NEW SITE - Designs (947:14702 Home, 725:76318 Brand PLP, 725:6961 Bags PLP, 695:21921 PDP).
**Format:** the AI Generated Badge deck's fixed 1920×1080 stage, scaled to the window. Arrow keys, click or space to move; `#n` deep links; print to PDF gives one slide per page. **G** opens the overview of all 14 layouts. The HUD switches partner.

## One template, one content set per partner
Every slide is the same template. Partner content lives in `PARTNERS` at the top of the script (name, logo, cover / divider / close images, budgets, sell-through, categories, opportunities). The content-day slide (`MOOD`) is shared. To make a new partner deck, copy a block, change its content and open `?p=<key>`. A figure set to `null` shows as "to confirm" (grey £— / —%, dashed bars), so a deck can go out before trading has the numbers.

- **adidas**: everything from the PDF.
- **Vans**: Brand Room slides as adidas. **The Vans budgets and sell-through are not agreed yet, so they show as "to confirm".** The Vans categories, bullets and opportunities are draft copy for the team to edit.

## Brand
- `data-brand="brandroom"` + `assets/ds/tokens.css`: Archivo, ink `#0A0A0A`, grey `#767676`. Square, mono.
- Display type is Archivo Expanded Bold (width 125%) in caps, to echo the wordmark. Copy is Archivo 300/400.
- The wordmark (`assets/brands/brandroom.svg`) and partner logos (`logos/adidas.svg`, from Figma, and `logos/vans.svg`, the public-domain wordmark from Wikimedia Commons) are CSS masks, so they take the slide colour.
- Image panels keep the Brand Room's 30° cut from the PDF. It's a `clip-path`, so the photo is never skewed or zoomed.

## Images: no stretching, no upscaling
Every `<img>` is `object-fit: cover` in a slot no bigger than its source at 1920 wide. The check (Playwright, every slide, both partners) measures rendered size against natural size: worst case 0.99 (no upscaling) and nothing stretched. 
- `img/content/`: the Brand Room content-day shoot (Calvin Klein, Hunter, Juicy, Tommy; masters on Jake's laptop in `~/Desktop/TheBrandRoom/Imagery`, never `JUICY/do not use`), resized to 2400px. Used on T02 and T13, the same in every partner deck.
- `img/screens/`: the new site's Home, Brand PLP, Bags PLP and PDP, exported from Figma at 3× (1170 × 2532).
- Phones are the App Store screenshot template's device (Figma `vebOMPnswl12a9JehBSt1m` 15:863 · Device): bezel #111111 with a #4A4A4A edge, and its iOS status bar + home indicator as a vector overlay (`img/phone-chrome.svg`). Set a phone's size with `--w`.
- `img/adidas/`: from the PDF (court) + the adidas concrete tile from the Figma home page.
- `img/vans/`: **placeholders** from Wikimedia Commons (CC BY / CC BY-SA / CC0; attribution needed if the deck goes external). Swap for Vans campaign assets when the team has them.

## Templates (bank these into Figma Slides)
| | Layout | | Layout |
|---|---|---|---|
| T01 | Cover (partner) | T08 | Section divider (partner) |
| T02 | Statement + image | T09 | Logo wall (`LIVE` / `SOON` / `TALK_ALL`) |
| T03 | Numbered points | T10 | Timeline (partner budgets) |
| T04 | Chart + split (`AGES`) | T11 | Two column (partner sell-through + mark) |
| T05 | KPI grid | T12 | Three column (partner vision) |
| T06 | Stat list + phones | T13 | Image grid (Brand Room content day + palette) |
| T07 | Phone row (the new site) | T14 | Close (partner) |

## Notes
- Colour: black, white and greys only. Slides use ink #0A0A0A, white and #F2F2F2 (the DS Brand Room neutral, as on the App Store template). Moodboard swatches are the DS Brand Room palette (`SW`: --primary, --light-1, --light-3, --neutral), not partner colours.
- The age chart values were read off the PDF chart (12 / 23 / 21 / 19 / 13 / 9%). Check them against the source data.
- "In conversation" drops the partner's own name.
- DS change: Puma, Berghaus and Converse logo tiles added to `assets/brands/brandroom-portfolio/` (changelog 29 Oct). No components added or changed.
