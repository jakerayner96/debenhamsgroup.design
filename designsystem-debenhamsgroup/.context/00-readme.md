# Debenhams Group Design System — Master Plan

This Project is the source of truth for the Debenhams Group design system work. Every decision, audit finding, and reference lives here so any future Claude session can pick up where this one leaves off.

## What this Project is for

Long-term: build **debenhamsgroup.design** — a production design system website (code-first) for the Debenhams Group estate, with a Figma library generated downstream. Multi-brand: Debenhams (primary), boohoo, BoohooMAN, PrettyLittleThing, Karen Millen, plus 18 satellite fascias across UK/IE/US/AU.

Short-term:
1. Audit the existing Debenhams Figma DS — done (see `02-figma-audit.md`)
2. Audit all 5 live sites — in progress, requires the scraper output
3. Lock the foundations (type, spacing, radius, semantic colour, breakpoints) — colour primitives done, rest pending audit
4. Build a vision artefact for stakeholder buy-in (1–2 weeks)
5. Build the real production site

## Files in this Project

- **`00-readme.md`** — this file
- **`01-decisions.md`** — every locked architectural and process decision, in one place
- **`02-figma-audit.md`** — diagnosis of the existing Debenhams Figma DS file
- **`03-tokens.md`** — colour primitives (locked) and outstanding token decisions
- **`04-live-audit.md`** — what we've found from auditing the live sites (mostly pending scraper)
- **`05-methodology.md`** — how the audit is being conducted (scraper, web_fetch, etc.)
- **`06-references.md`** — the design systems and brands that inspire this work

## Tools in use

- **Figma MCP** — direct read/write access to the Debenhams DS Figma file
- **Web search + fetch** — for IA-only passes on live sites; useless for visual audit
- **Scraper** — Playwright-based VS Code project, lives separately, run on your machine. Captures screenshots + DOM + computed CSS at 6 breakpoints per page. Outputs feed the live audit.

## How to use this Project

When starting a new Claude session, ask Claude to read these files first. Reference specific files by name when asking about a topic — e.g. "based on `01-decisions.md`, draft the type scale" or "extend `04-live-audit.md` with the PDP findings."

When new decisions are made, ask Claude to update `01-decisions.md`. When new audit findings come in, update `02-figma-audit.md` or `04-live-audit.md` as appropriate.

## Phase tracker

- [x] Project setup
- [x] Existing Figma audit (foundation level)
- [x] Colour primitives locked
- [x] Audit methodology agreed
- [x] Scraper built
- [ ] Scraper run on Debenhams
- [ ] Live audit complete (Debenhams)
- [ ] Type scale locked
- [ ] Spacing scale locked
- [ ] Radius scale locked
- [ ] Semantic token layer designed
- [ ] Breakpoint strategy locked
- [ ] Differential audit on other 4 brands
- [ ] Vision artefact built
- [ ] Production site built
- [ ] Figma library generated from production site
