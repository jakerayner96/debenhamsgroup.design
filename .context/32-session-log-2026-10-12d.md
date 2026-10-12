# Session log 12 Oct 2026 (d): fascia token pass

Jake's brief (DS changes), all in `assets/ds/tokens.css` unless stated:

- **Removed from the estate:** Maine, Gorgeous, Forever Unique, Nasty Gal. Token modes, site brand menu / Brand Centre grid / modes table / `FASCIAS`, Deliver+ checkout logo (`nastygal.svg`, `dplus-logos.js`, `.dpl-*` switches in components.css) and the catalogue `notOn` list. 17 fascias.
- **Warehouse:** buttons 300 (`--w-btn:300`, in both the base block and the Deliver+ hero-set line, which is the one that wins). index.html now loads Roboto 300.
- **Debenhams Outlet:** no aqua. Links, checks, focus, secondary outline, buy button, VTO, dots, card all black like boohoo; Geologica kept; red nav kept (live).
- **Burton:** type + buttons = boohoo / MAN (Montserrat 500/400/700, 600 buttons, black fill + outline). The hero-set line no longer overrides font/weights.
- **Misspap:** boohoo / MAN in #101820 instead of black, secondary outline grey #B5B5B5. Page surface fixed to white (was #000) and footer band to the sunken grey. Header inverted.
- **Training Dept:** black like boohoo, Hanken Grotesk (DSGN Studio's font, family name fixed to `'Hanken Grotesk'` for both), 500 buttons (live). Page surface fixed to white. Header inverted.
- **Inverted header (C-05):** `header.js` entries for misspap + trainingdept with `inv`, `.hd--inv` in components.css driven by `--hd-bg / --hd-fg / --hd-search-bg / --hd-search-fg`. Content from live 12 Oct: Misspap black logo bar + black nav, grey pill search, red mark (`misspap-red.svg`, #C22527); Training Dept black logo bar with underline search, white bold uppercase nav strip, white mark (`trainingdept-white.svg`).
