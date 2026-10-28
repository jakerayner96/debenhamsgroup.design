# 40 · 28 Oct 2026 · The Brand Room brand list + logo audit

## What landed
- **Sidebar group "The Brand Room"** (between Brand Centre and Projects): *Brand list* (`#br-brands`) and *Brand page* (`#b-brandroom`).
- **Brand list page**: every brand the Brand Room sells today (60, "Current Brand Mix") and the brands launching SS27 (9 new; Lacoste womenswear, Tommy Hilfiger men's apparel, Monterrain and True Religion are already live and flagged on their cards). Filter All / Live now / Coming SS27, search (name, fascia, note), CSV download. Logo tile follows the site theme: white logo on black in dark, black on white in light.
- **Data: `assets/ds/brandroom-brands.js`**: `DG_BR_BRANDS` (n, s logo slug, on fascias, st live|soon, deal, note), `DG_BR_FASCIAS` (code → fascia), `DG_BR_DEALS` (SS27 status → label + pill). Edit this file when a brand signs, launches or leaves; the page re-renders from it.
- **Logos: `assets/brands/brandroom-portfolio/`**: `<slug>-black.png` / `<slug>-white.png` (320px tiles cropped from the Brand Room Figma Content / Logos page, NRsu568JGzwCDq4egvkUbn 342:10634) + `svg/` vector masters for the 22 brands re-sourced on 28 Oct.

## Figma (The Brand Room file, Content / Logos)
- Tiles now sit in pairs, A–Z, 6 pairs per row: `<slug>-black` (black logo, white tile) beside `<slug>-white` (white logo, black tile). Logo layer = tile name + `-logo`.
- Calvin Klein → current wordmark (vector, Jake's SVG); Valentino → Valentino Bags (Mario Valentino) wordmark from valentinobymariovalentino.it (the old tile was Valentino Garavani); Sweaty Betty → current wordmark from sweatybetty.com.
- 19 brands added (Altra, Belstaff, Castore, Christian Rose, Clarks, Dickies, Ed Hardy, Gym King, Lejan, Marshall Artist, Monterrain, Moose Knuckles, Scholl, Seinse, Skechers, Timberland, True Religion, Vera Wang, Zavetti Canada).
- Colour only where the brand has no mono version: Tommy Hilfiger, Lacoste, Hunter, Zavetti Canada.
- Still on the Figma page but on neither list: Oakley, Puma, Converse, Giorgio Armani, Berghaus, Under Armour (not in the DS list).

## Open
- **Tommy Jeans**: no logo (every source blocked); card shows the name. Needs an official SVG.
- Traced from the brand's own PNG (no vector exists): Marshall Artist, Seinse, Christian Rose, Vera Wang. Dickies mono built from the colour master. Moose Knuckles + Ed Hardy vectors are from VectorSeek ("not for commercial use"); swap for official files when available.
- Seinse = Italian menswear label (Sseinse); confirm it's the intended brand.
- Fascia codes: BHM boohooMAN, BW boohoo, BUR Burton, KM Karen Millen, DP Dorothy Perkins, PLT, WALLIS are read from the trading sheet; confirm BW = boohoo.
