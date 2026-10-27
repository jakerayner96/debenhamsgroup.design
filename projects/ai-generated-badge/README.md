# AI Generated badge — prototype, all fascias

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/ai-generated-badge/
**Brief:** the deck jakerayner96.github.io/ai-generated-badge/ (25 Aug 2026) — AI generated content labelling. EU AI Act Article 50(4), from 02.08.26 (penalty up to €15M or 3% of turnover); ASA treats a missing label as misleading in the UK. **Legal sign-off required.**
**Figma:** AI-Generated-Watermark `d0zY0vt8hoz0gq8ycTimxS` · stacking `25-11775`

Standard review shell (review-prototype skill): fascia chips · Desktop/Mobile · width preset · Full page/Fold · Screenshot · Export on top, configuration on the left, resizable frame.

## Pages (DS only)
`page.html` embeds each DS page and adds the DS strip (`.badge-ai`) to every image the shell flags as AI:
- **Home / recommendations**: each fascia's live homepage (`projects/usp-banner` home, live content). Fascias with no product rail on the homepage (Debenhams, boohoo, boohooMAN) get a DS recommendations rail (`.sec-head` + `.prail` of `.pc`) after the second module. Optional: label the editorial / campaign tiles too.
- **Search**: `search.html`. DS header drop-in, **Search bar · open** (`.srch-bar`, new), Search suggestions (`.srch-sugg`), Top Sellers / Recently Viewed rail, then the products matching the term.
- **PLP**: `projects/plp-alignment/plp.html?mode=new`. Thumbnail (2 col) or grid (3 col) view.
- **PDP**: `templates/pdp.html` with `S.ai` (indexes of the AI images). Landed in the template, so every PDP gets it.
- **Bag**: `templates/bag.html`. The strip never shows here (not in scope).

## Rules (from the deck)
- Shown at first exposure, wherever a shopper first sees an AI image **before add to bag**: home, search, PLP, PDP and carousels. It is driven by an image-level AI flag, so only flagged images get the strip.
- Hidden **after** add to bag (bag, mini bag, checkout). At about 7px the strip can't be read. Never on PDP thumbnails, for the same reason.
- **Live text, never baked into the image**: screen readers read it, 10px stays the minimum size, and there is one translatable string in EN, FR, NL, PL, DE, SV (copy in the DS: `assets/ds/ai-strip.js`). Alt text adds "AI generated image".
- The strip owns the bottom edge of the image at every size, at height `--ai-h` (24px). Every other badge (Plus, Petite, Tall, New…) moves up by exactly that height, with no overlap. Wishlist and quick add stay top right. In the PLP grid view no other badges show; the strip stays.
- The strip colours match the badge on each fascia (`--ai-strip-bg` / `--ai-strip-fg`).

## Wording (checked 27 Oct 2026)
No law sets the words. The EU AI Act Art. 50(4) requires a clear disclosure at first exposure ("artificially generated or manipulated"). The EU Code of Practice on transparency of AI-generated content (final, 10 Jun 2026) wants the capitalised acronym "AI" in English. The national acronym is allowed only where language law requires it (France, Loi Toubon: "IA"). Adding "generated" is encouraged. A UI overlay with no overlap is an accepted placement, and alt text is encouraged.

| | Strip | Alt text |
|---|---|---|
| EN | **AI** Generated | AI generated image |
| FR | Généré par l'**IA** | Image générée par l'IA |
| NL | **AI**-gegenereerd | Door AI gegenereerde afbeelding |
| PL | Wygenerowane przez **AI** | Obraz wygenerowany przez AI |
| DE | **KI**-generiert | KI-generiertes Bild |
| SV | **AI**-genererad | AI-genererad bild |

For legal: German "KI" follows the Act's German text and common usage, but the strict Code reading is "AI-generiert". France: check whether "Photographie retouchée" (Code de la santé publique R.2133-4) also applies to AI-altered model bodies. UK (ASA / CAP): no wording set.

Rail cards (Top Sellers, Recently Viewed, Recommended For You) have no wishlist button. Wishlist is on PLP cards only.

## Panel
Page · which images are AI (some, a fixed scatter / all / none) · language · fit badges on every 2nd card (to show the stacking) · PLP view · home editorial tiles.

## DS changes (27 Oct 2026)
- PLT Virtual Stylist chip from the DS (`--ai-tag-*` tokens, masked hanger), as the VTO prototype.
- `assets/ds/ai-strip.js` copy table · rail cards without wishlist · strip fits Polish on 3-col tiles.

## DS changes (26 Oct 2026)
- Added **AI image host** `.ai-wrap`: adds the strip to any image that isn't a product card (home rails, editorial tiles, PDP slides).
- Added **Search bar · open** `.srch-bar` (+ `--underline` for PLT).
- PDP template: AI flag `S.ai` / `S.aiCopy` / `S.aiAlt`. Gallery tags move up above the strip (`.pdp-gal .main.has-ai .ptags`).
- Fixed: the strip took its text colour from `--ai-fg`, the Ask Deb AI pill colour (teal on Debenhams, burgundy on PLT). It now has its own `--ai-strip-*` tokens and matches the badge, as in the deck.

## Export
Zip: `ai-generated-badge-<page>-<brand>-*-mobile-390.png` + `-desktop-1440.png` (full page), `config.json`, `page.html`, `search.html`.
