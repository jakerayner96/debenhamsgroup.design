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

## Addendum — 10 Sep 2026 (later): single-SVG lockups, per-brand component pages, no sign-off language

- **Lockups are now one SVG per fascia** at `assets/brands/deliverplus/<slug>.svg` (wordmark + DELIVER+ composed as nested `<svg>` at the design geometry; boohoo and the DSGN Studio wordmark are the PNGs Figma itself holds, embedded). `assets/ds/dplus-logos.js` is a flat list of `<img class="dpl dpl-<slug>">`. Fixed on the way: `calc(50%-…)` without spaces (invalid CSS — Coast/Warehouse/Principles/Oasis/Nasty Gal/Misspap/DSGN offset), un-inlined `<Logos>` React stubs (Nasty Gal, Principles had no wordmark), PLT monogram inset mis-parsed.
- **Component pages** (`#c-*`): the page is now one full-width box per fascia, every variant/type side by side inside it, repeated down the page — Figma-file order of the estate, The Brand Room last. Markup is a collapsed `Markup` block under the stack. `notOn:['brandroom']` on the catalogue entry leaves that box empty (Deliver+ isn't offered on The Brand Room).
- **No sign-off / draft language anywhere** in `index.html`, `tokens.css`, `components.css`, `catalogue.js`: the system is a single version of truth — Lego bricks. Brand centre says "21 fascias · 21 modes"; the old "signed off" / "dev-mapped draft" labels and tile badges are gone. Design-vs-live differences (above) stay as open questions, not as sign-off gates.

## Addendum 2 — 10 Sep 2026: exact-to-design fixes, modal, live controls, fascia activation

- **Bag/modal band copy** ("Shop with confidence…"): the site's global `p{color:var(--ink-2)}` was greying it and Debenhams' `--w-regular:300` thinned it. Now `color:inherit`, weight `--dplus-pw` (400; 500 Burton/Misspap/DSGN Studio), size `--dplus-p` (14 Debs/boohoo/MAN/KM; 12 elsewhere) — read per fascia from the SEEL bag nodes.
- **Checkout banner** (3209:161446): lockup left, 24px checkbox top-right in the same row (`.top`), unselected by default (white / #B5B5B5 border / 3px radius), selected = `--dplus-check` with the tick in `--dplus-tick` (black on MAN/KM/DP/PLT whose check is white). Title incl. price is one SemiBold run.
- **PLT surfaces**: `--dplus-white:#FFFDF7` (the design's "Background White") drives the bag body, pucks and checkbox — never pure white on PLT.
- **PDP + checkout modal** (3209:13791) added: `.dplus-bag--modal`, 388 mobile / 480 desktop, 16px close in the band.
- **Variant order** on the page: PDP › PDP modal › Bag › Checkout, mobile above desktop (catalogue `col:` groups render as columns). PDP/checkout desktop = the same fluid component at 480 (the design has one PDP/checkout frame; 480 is the modal's desktop width).
- **Controls are live** in every catalogue demo: `.chk` / `.tog` flip, `.rad` exclusive within its list (delegated handler in index.html).
- **Fascia activation**: fascias without Deliver+ (`notOn`) render as a one-line "Deliver+ not active on <Fascia>" row at the bottom, no white box. Live-PDP check 10 Sep (Playwright, category → first PDP, "Deliver+" in rendered text): see the table below.

| Fascia | Live PDP checked | Deliver+ (Seel) present | Page shows |
|---|---|---|---|
| Debenhams · boohoo · boohooMAN · PLT · Karen Millen · Wallis · Burton · Coast · Oasis · Dorothy Perkins · Misspap · Nasty Gal · DSGN Studio | yes | yes | full set |
| Warehouse | yes | yes (lockup is an image, so text match missed it; Seel footer present) | full set |
| The Brand Room · Training Dept | yes | no | "not active" row |
| Principles · Maine · Gorgeous · Forever Unique | no PDP on their own domain (principles.co.uk / maine.co.uk / gorgeous.co.uk / foreverunique.co.uk) | — | "not active" row |
| Debenhams Outlet | outlet has no separate storefront (debenhams.com/outlet → Debenhams PDP) | Jake: not on Outlet | "not active" row |

Open: Principles has a lockup in the SEEL set but no live PDP of its own — if it launches Deliver+ via debenhams.com, drop it from `notOn`.
