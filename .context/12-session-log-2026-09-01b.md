# Session log — 01 Sep 2026, part 2 (monorepo landing + repo tidy)

> **SUPERSEDED by `13-session-log-2026-09-01c.md` (same day).** This log wrongly framed the monorepo as the production build going forward. Jake's correction: `index.html` is the working site; the monorepo was the *older* effort and has been absorbed into it. Details below remain accurate as a record of what the monorepo contained.

Read after `11-session-log-2026-09-01.md`. This session ingested the production design system monorepo into this repo and tidied the file structure.

## What landed

**`designsystem-debenhamsgroup/`** — the production DS monorepo, built in a separate Claude session, now lives inside this repo (plain folder, no nested `.git`; committable to this repo as-is). It is the "System" section of the UX site made real:

- pnpm workspaces: `packages/tokens` + `packages/react` + `apps/docs`
- Tokens: full primitive + semantic layer as CSS custom properties (`tokens.css`), Tailwind v3 preset, TS sources per category. Brand mode via `<html data-brand="...">` — Debenhams + Boohoo fully populated, BoohooMAN/PLT/KM font+radius only, 11 other facias scaffolded as Debenhams-inheriting placeholders
- React: Button placeholder only (real spec awaits Figma node audit)
- Docs: Next.js 15 + Fumadocs, pages for welcome/installation/brand overview/foundations (colour, typography, spacing, radius, borders, motion, accessibility) + button
- Its `.context/` carries docs 00–06 (same as ours) **plus `07-foundations.md` (the locked foundations spec) and `08-build-context.md` (build state + next steps)** — those two exist only there
- Runs: `cd designsystem-debenhamsgroup && pnpm dev` → localhost:3000. Deps installed with pnpm 11.4.0 / Node 24. Known harmless warning: `experimental.turbo` deprecation from fumadocs-mdx internals — fix by upgrading fumadocs-mdx later, not by editing our config

**Relationship to the wireframe:** root `index.html` (v3, dark, sidebar) is still the UX-site front-door wireframe. The monorepo is the production docs-site build. They coexist until the site build proper absorbs the wireframe's IA (Fumadocs port was already the plan — see 11 §Immediate next actions).

## Tidy-up done this session

- **`AUDIT/` deleted.** It held byte-identical copies of `.context/00–06` plus an April-era zip of older versions of the same seven files. Verified identical before deleting; nothing unique was lost.
- **`BRAND LOGOS/` moved** → `designsystem-debenhamsgroup/apps/docs/public/brands/`, renamed to `data-brand` slugs (`debenhams.svg`, `boohoo-man.svg`, `dorothy-perkins.svg` from DP.svg, `brand-room.svg` from thebrandroom.svg, etc.). 15 marks; **DSGN Studio logo still missing**. All are dark marks — render fine on the light docs site. Nothing referenced the old folder (grepped all root HTML first).
- **Facia overview page** (`apps/docs/content/docs/brand/overview.mdx`) now renders the estate as a logo grid from those assets.
- **Monorepo `.gitignore`** gained `.source/` (Fumadocs-generated, was about to be committed).
- **Root `CLAUDE.md`** updated: repo now described as two builds (wireframe + monorepo), reading order includes this log.

## Open questions carried forward

- Whole monorepo is still untracked in git — needs a commit (Jake to say when; also still to do from log 11: `git remote add origin && push`, GitHub Pages).
- Duplication of docs 00–06 between root `.context/` and monorepo `.context/` is deliberate for now (monorepo must stay self-contained in case it splits out). If they drift, monorepo copy wins for DS matters, root copy for UX-site matters.
- Token provenance rule (root CLAUDE.md: Figma → plt-app-prototype → extract-tokens.mjs → tokens.css) vs the monorepo's hand-written `tokens.css`: the monorepo's token values came from the same signed-off sources (03-tokens + colour-alignment), but the *pipeline* isn't wired to it. Reconcile when plt-app-prototype is ingested (log 11 next-action 2).
- Everything else from log 11's "Immediate next actions" still stands (M-01 PLP, OptionSwitcher, screenshot benchmark pass).
