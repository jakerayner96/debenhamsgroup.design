# 22 · Deliver+ hero set — SEEL Enhancements 2026 (10 Sep 2026)

Source: Figma `CQIe2e2c0iagD1T9WjdYsx`, page **Latest Components – 28.08.26** (node 3218:43734): for 15 fascias — PDP banner (symbol), Checkout banner (symbol), PDP + Checkout modal (frame), Bag banner (frame, mobile + desktop) + the Trustpilot source. Read via the Figma desktop Dev-Mode MCP (127.0.0.1:3845); all 60 nodes' code, 100 assets and 30 screenshots are in the session scratchpad and the assets are committed to `assets/ds/icons/seel/2026/`. Lockups (brand wordmark + DELIVER+) are rebuilt from the banner code as HTML at native size → `assets/ds/dplus-logos.js`.

**Implemented (exact):** `.dplus` PDP banner · `.dplus--checkout` (24px opt-in checkbox, price in title) · `.dplus-bag` mobile + `.dplus-bag--desktop` (5 benefit rows, 48px pucks, Seel + Trustpilot foot). Tokens per fascia: `--dplus-bg / -fg / -link / -check / -radius`. Catalogue entry `deliver-plus` → site page **Design system → PDP modules → Deliver+** renders all 21 fascias.

## What the designs say per brand (hero indication)

| fascia | banner ground | ink | link | font · weights seen | radius | lockup (w×h) |
|---|---|---|---|---|---|---|
| Debenhams | #E8F4F2 (Neutral) | black | #00787D (CTA) | Geologica · Light / SemiBold (+ Light Italic) | 4 | 142.16×30 |
| boohoo | #FFE0EB (Light 3) | black | **#BB305F** | Montserrat · Regular / SemiBold / Bold | 4 | 160×15 (png) |
| boohooMAN | **black** | white | white | Montserrat · Regular / SemiBold / Bold | 4 | 160×20 |
| PLT | #EAAFA4 (Light 2) | black | black | Roboto · Light / Regular | 0 | 90×32 |
| Karen Millen | **black** | white | white | Jost · Regular / SemiBold | 4 | 134×11 |
| Burton | #E2EAF4 | black | black | Montserrat · Regular / Medium | 0 | 92×8 (+wordmark) |
| Coast | #E2E0DC | black | black | Roboto · Light / Regular | 0 | 142×35.19 |
| Dorothy Perkins | **#181729** | white | white | Public Sans · Light / Regular | 0 | 84×60 |
| DSGN Studio | #F4F6F0 | black | black | Hanken Grotesk · Regular / Medium | 0 | 150×16 |
| Misspap | #E7D5C6 | black | black | Montserrat · Regular / Medium | 0 | header frame |
| Nasty Gal | #EEEEED | black | black | **Roboto** · Light / Regular | 0 | 129×54 |
| Oasis | #EDE6DF | black | black | Geologica · Light / Regular | 0 | 120×27.12 |
| Principles | #FBF6F0 | black | black | Lato · Light / Regular | 0 | 230×38 |
| Wallis | #F9EEF3 | black | black | Urbanist · Light / Regular | 0 | 90.33×7.82 (+wordmark) |
| Warehouse | #FDFFF5 | black | black | **Roboto** · Light / Regular | 0 | 99.18×8.59 (+wordmark) |

Not in the SEEL set: Debenhams Outlet, Maine, Gorgeous, Forever Unique, Training Dept, The Brand Room (keep dev-mapped drafts; Outlet reuses the Debenhams lockup).

## Discrepancies — design vs live site (front-end theme, 09 Sep) vs our signed-off tokens — FOR JAKE TO CLARIFY

1. **boohoo link/CTA colour** — design uses **#BB305F** (pink CTA, Deliver+ "Learn More"); live dev theme: primary #444444, CTA #000000; our signed-off colour-alignment set: black. Three different answers. Which is boohoo's CTA colour?
2. **Karen Millen** — design banner is **black with white ink/link**; live dev: black primary/CTA; our signed-off set: primary #D24508 orange, CTA #892D05. Is KM black or orange?
3. **Burton** — design ink/link black on #E2EAF4; live dev primary + CTA **#284D7B navy**. Is navy Burton's CTA or a leftover?
4. **Dorothy Perkins** — design ground **#181729** (navy) with white ink; live dev: black. Which is DP's brand colour?
5. **Misspap** — design ground #E7D5C6 sand, black ink; live dev primary **#101820**.
6. **Nasty Gal font** — design set in **Roboto**; live site runs **NG Grotesque**. Which is the brand face?
7. **Warehouse font** — design + live dev: **Roboto**; our tokens carried Helvetica Neue from the 03 Sep live capture. Now set to Roboto — confirm.
8. **Principles / Wallis / Coast / Oasis / DSGN Studio** — live dev primary is the **unthemed #444444 or black default**; designs give a proper neutral tint + black ink. Do these fascias have a CTA colour beyond black?
9. **PLT** — design "Learn More" is black on the salmon ground (not garnet); fine for Deliver+, but confirm garnet stays the CTA elsewhere.
10. **Weights** — designs use Light (300) body copy for Debenhams, PLT, Coast, Oasis, Principles, Wallis, Warehouse, Nasty Gal, DP; Regular/Medium for Burton, Misspap, DSGN; Regular/SemiBold for boohoo, MAN, KM. Our seven signed-off modes match; the ten drafts now follow the designs.
11. **Radius** — designs: 4px on Debenhams / boohoo / MAN / KM, **0 on PLT and all ten newer fascias**. Applied to Deliver+ only (`--dplus-radius`); the fascias' general radius tokens untouched pending sign-off.

## Tokens changed
`--dplus-bg/-fg/-link/-check/-radius` for 15 fascias (design values). For the ten fascias without a signed-off palette: `--font-family-base`, `--w-regular/-mid/-strong/-btn`, `--surface-neutral`, `--brand-light-3` now follow the designs (hero indication). Debenhams / boohoo / MAN / PLT / KM palettes unchanged pending answers to 1–2 above.
