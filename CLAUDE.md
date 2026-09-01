# CLAUDE.md — debenhamsgroup.design

Read `.context/` before doing anything. Start with `00-readme.md`, then `11-session-log-2026-09-01.md` for current state, then whichever doc matches the task.

## What this repo is
The Debenhams Group UX site: design system docs, project archive (options + chosen routes), brand centre, requests board — plus (incoming) the master prototypes for core pages. `index.html` is the current v3 wireframe: single file, no build step, dark, sidebar-driven.

## Rules that always apply
- **Code first, Figma downstream.** Production is canonical; the Figma library mirrors it.
- **Ship fast over perfect.** Jake pushes back on over-engineering and over-clarification. "Go" means proceed; make judgment calls, state assumptions, execute to a defined endpoint.
- **Single-file HTML prototypes, no build step** is the house style for options and reviews. Only the eventual production site gets a real build.
- **Every project records its Figma source** (file key + node id) in its README/page.
- **One repo, branches as briefs**: main = master prototypes; brief → branch → options (OptionSwitcher) → review → merge winner → branch archived as the record.
- **Token provenance**: Figma → plt-app-prototype `src/theme/brands.ts` → `extract-tokens.mjs` → tokens.css. Extend that chain, don't fork it. Signed-off colour truth = colour-alignment-prototype (post-KM review, Aug 26).
- Assets/binaries don't live in git — cloud storage + manifest.

## Current priorities (Sep 26)
1. M-01 master web PLP seeded from plt-app-prototype, five brand configs per `.context/08-plp-alignment.md` (Scott's brief, target w/c 08 Sep).
2. OptionSwitcher as a reusable overlay (model: Group-Design-System brand dock).
3. Site v3 refinement after the reference screenshot pass.

## Related repos (under github.com/jakerayner96, migrating to a new org later via Transfer)
Group-Design-System · colour-alignment-prototype · UX-Design-Request · checkout-2026-promo-gift-card · vto-prototype · plt-app-prototype (private) · debenhams-design-system-scraper (private)
