# Project inventory — GitHub ingest (01/09/26)

Source: `github.com/jakerayner96` (5 public repos cloned) + uploaded zip. Two repos are **private and not yet ingested**: `plt-app-prototype`, `debenhams-design-system-scraper`.

## What exists

| Project | What it is | Stack | Role in the new world |
|---|---|---|---|
| **Group-Design-System** | The DS extracted from `plt-app-prototype` as plain HTML/CSS. 5 brands (`data-brand` switching: plt, debenhams, boohoo, boohooman, karenmillen), generated `tokens.css` from the prototype's `brands.ts` (itself lifted from Figma). Sections: Foundations, Core components, Delivery & USP, Deliver+, Account & states. Brand dock re-themes everything live. | HTML/CSS/JS, zero deps | **Seed of the web DS.** The token shape and brand-switch pattern port straight into the monorepo. The live brand dock is the prototype of the site-wide brand configurator. |
| **colour-alignment-prototype** | **Signed-off** brand colours (post-KM review Aug 2026) across PDP, Added to Bag, Bag, Checkout, Account for all 5 brands, side by side. Includes the "golden truth" button state matrix (Default/Touch down/Disabled/Spinner + Added/Checkout). Deep-linkable per brand. | Single HTML + assets | **Canonical colour source.** Sign-off artefact — the semantic colour mapping for the token layer comes from here. Projects-wiki entry with 'chosen route' already baked in. |
| **UX-Design-Request** | Design request intake form, logging to Google Sheets via Apps Script + Cloudflare Worker. | HTML + GAS + CF Worker | **Seed of the tracker/ticketing idea.** Intake already works; the site's Requests section wraps a status view around this data. |
| **checkout-2026-promo-gift-card** | Interactive prototype: promo/gift-card field for Checkout 2026 mobile, built from Figma `WChEtDPH0LcErdYFS9SESn` §3990:58406. Single self-contained file. | Single HTML | Projects-wiki entry. Component candidates: smart single input, inline validation pattern. |
| **vto-prototype** | Virtual Try On first-use journey, pixel-matched to Figma "VTO – Virtual Wardrobe". Has asset-embed script (Figma MCP URLs expire in 7 days → `npm run embed` inlines base64). Has its own CLAUDE.md. | Single HTML + node script | Projects-wiki entry. The embed-assets pattern is worth standardising for all Figma-derived prototypes. |
| **AI GEN mark** (zip) | AI-Generated content labelling deck (HTML deck + screens/collages for all fascias). 110MB, asset-heavy. | HTML deck | Projects-wiki entry. Assets don't belong in Git — cloud storage + manifest per the established rule. |
| **plt-app-prototype** 🔒 | The best PLP built so far (Expo/React Native). Source of the GDS extraction (`src/theme/brands.ts`). | Expo RN | **Needed for the PLP job** — card anatomy, behaviours. Flip public briefly or zip it. |
| **debenhams-design-system-scraper** 🔒 | Playwright audit scraper (known from project docs). | Node/Playwright | Needed when we run the 5-fascia PLP capture. |

## Patterns across the estate

- **Single-file HTML prototypes, no build step** is the house style — fast, shareable, survives. Keep this for option prototypes; the master site is the only thing that needs a real build.
- **Figma file → prototype → sign-off** is the repeated loop; each repo README already records its Figma source. Carry that convention into the projects wiki (every project page links its Figma file + node).
- **The brand-switch dock** (GDS repo) is already the interaction model for the future OptionSwitcher and the site-wide brand configurator.
- **Token provenance chain already exists**: Figma → `brands.ts` (prototype) → `extract-tokens.mjs` → `tokens.css`. The monorepo formalises this chain; nothing needs inventing.

## Migration to the new org (when created)

Transfer, don't re-push: GitHub repo **Transfer ownership** preserves stars/issues/history and sets up redirects. Order: create org → transfer all 7 (+ future) → archive superseded ones (AI GEN mark assets to cloud storage) → monorepo absorbs GDS tokens/components as packages; standalone prototypes stay standalone repos linked from the projects wiki.
