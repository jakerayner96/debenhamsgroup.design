# USP banner — in situ

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/usp-banner/
**Figma:** DS file `aIHmkCaTy9c5EWOxAGw0So` · USP BANNER `11982-37171` (mobile rotation `13005-165658`)

Configurator in the PLP / Core PDP model: window controls on top (brand, Desktop / Mobile, open page), page + banner controls on the left, the page in the frame. `page.html` renders Home, PLP, PDP, Bag and Account for the seven core fascias from DS components only (catalogue.js markup on tokens.css + components.css; products and images from `projects/plp-alignment`).

## The component (promoted to `assets/ds/components.css` + `assets/ds/usp.js`)
- Types: Single · Double (dash between) · Text + Code ("Code: XYZ") · Text + Countdown · Text + Code + Countdown.
- Colours: fascia bar A / bar B, or Figma Grey 05 · Grey 1 · Black · Black / Red.
- Height follows the copy: one line = 4 + 15 + 4 = **23px** on mobile (was a fixed 56–63px). Countdown bar 42px.
- Dash separator; once a row wraps the dash becomes a line break (usp.js).
- Countdown on its own row, tabular digits, ticks from `data-left` (seconds) or `data-to` (date).
- Any `*` in the copy attaches the 10px caveat line inside the bottom of that banner; the prototype flags a missing caveat.

## Live check (06 Oct 2026, 390 wide)
Debenhams / boohoo / boohooMAN / KM run 16px copy, 42–50px bars, a pipe separator and "Use Code:"; PLT runs 12px light, 18–36px. The DS version follows the Figma: 12/15, dash, "Code:", strong countdown.

## Live content (v2, 06 Oct)
`live.js` holds each fascia's live banners (homepage, 390 wide, 06 Oct) converted to DS types: "Shop Now" stripped, "Use Code:" → "Code: XYZ", countdowns to their own row, click-throughs kept, generic caveats added where the live copy has an asterisk but no caveat. Debenhams grey (4 rotating) + black · boohoo black (3) · boohooMAN black (3) + grey · PLT grey + black (live peach/cream mapped to the two tones) · Karen Millen black (3) · Warehouse black (2) · Brand Room placeholder (its homepage didn't expose the banner).

## Rules the prototype enforces
- At most two banners, never the same tone: one grey (Grey 05 / Grey 1), one black (Black / Black-Red). Turning on the second gives it the other tone; the tone in use is disabled in its colour menu.
- No inline links — no "Shop now". The whole bar is the click-through.
- Each banner holds a list of messages (live bars rotate): pick one to edit, add or remove, or rotate every 4s.

## Pages (v3, 06 Oct)
- **Home** — each fascia's live homepage (`home.js`, captured 06 Oct at 390 + 1440; separate mobile/desktop module lists, images in `img/home/<brand>/`, 6.1MB webp). Videos are their poster stills; carousel dots not drawn.
- **PLP** — the real P-05 prototype embedded: `projects/plp-alignment/plp.html?brand=…&mode=new`, its own header + footer hidden so the banners sit in this page's header.
- **PDP** — Core PDP 2026 embedded: `../core-pdp-2026/pdp.html?mode=new` (sibling Pages repo, same origin on jakerayner96.github.io). It's the boohooMAN build, so every fascia shows the MAN product under its own header; it shares the core-pdp prototype's saved settings. Locally, serve a folder holding both repos side by side.
- **Bag** — payment summary rebuilt to the live `/basket` (`bag.js`): Order Summary (Subtotal · Discount · {Fascia} Deliver+ · Order Total · Discounts included), Checkout with / without Deliver+, OR, PayPal · Pay Later · Apple Pay · Klarna, card strip, Promo Code. Desktop 1024 container, 390px grey right column; mobile total + checkout under the title, summary full-bleed after the items. No Delivery row (live prices delivery at checkout). Discounts shown as one combined line; Deliver+ prices fixed at the captured values.
- **Export** renders each embedded page in its own pass and composites it in (html2canvas leaves iframes blank).

## Rows (v3, 07 Oct)
`live.js` re-captured from each fascia's header at 1440 on 07 Oct: Debenhams row 1 grey ×4 rotating + row 2 black · boohoo one black row ×3 · boohooMAN row 1 black ×3 (red countdown) + row 2 grey #D3D3D3 · PLT row 1 peach countdown + row 2 cream ×2 · Karen Millen one black row ×3 · Warehouse one charcoal row ×2 · Brand Room one black row. Colours are the fascia's own token slots (fascia / alt / top), copy keeps live casing, links are the live click-throughs.
- **No jump:** a row's messages share one grid cell on mobile, so the bar is always the height of its tallest message; desktop lays them out across the bar as cells (Debenhams and PLT alternate cell shades, as live).
- **Caveats:** no em dashes, no full stop ("*Selected lines only, exclusions apply").
- **Controls (08 Oct):** *Position* — each row below the menu (default) or above it (top of the page, over the logo row), or all rows at once · *Auto animate* — 0–5s per message on a rotating row (0 = off, swipe only; default 5) · *Caveats* on/off (off by default).
- **Swipe** (DS `usp.js`): on mobile, swipe a multi-message row left for the next message, right for the previous; restarts the timer and never fires the bar's link.
