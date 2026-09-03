# debenhamsgroup.design

The Debenhams Group UX site **and** design system — one repo. Code-first, Figma downstream. Dark, sidebar-driven, no build step.

**Live:** https://jakerayner96.github.io/debenhamsgroup.design/ (GitHub Pages, `main`/root — deploys a few minutes after each push)

## What's here

| Path | What it is |
|---|---|
| `index.html` | The site: design system docs (foundations, components, fascia modes), projects archive, brand centre, requests board. Single file. |
| `assets/ds/tokens.css` | **The design system's single source of truth** — invariant semantic tokens + per-fascia brand modes on `[data-brand]`. The site and every prototype link this file. Never copy values out of it. |
| `assets/ds/components.css` | DS components as token-consuming CSS patterns (C-01 Button so far). Grows as project work merges. |
| `assets/brands/` | Fascia logo SVGs, named by `data-brand` slug. |
| `projects/<name>/` | One folder per project brief (on its project branch until merged): README = the record, prototypes = the work. |
| `.context/` | The master plan: decisions, audits, foundations spec, session logs. **AI sessions start here** (see `CLAUDE.md`). |
| `explorations/` | The design directions that led to the current site (archive). |
| `designsystem-debenhamsgroup/` | ⚠️ RETIRED — an earlier Next.js/Fumadocs build, absorbed into `index.html` on 01 Sep 2026. Archived for reference only. Don't build on it. |

## Run it locally

```bash
python3 -m http.server 3000   # from the repo root
# site → http://localhost:3000
# a project prototype → http://localhost:3000/projects/<name>/
```

(A server is needed for the linked CSS/SVG assets; there is no build step, ever.)

## The operating model

**One repo, branches as briefs.**

1. New brief → branch named for the project (e.g. `plp-alignment`) → folder under `projects/<name>/` with a README recording the brief, Figma source, and decisions.
2. Prototypes link the DS (`../../assets/ds/tokens.css` + `components.css`) and switch fascia only via `data-brand` on the root element. No per-brand CSS, no forks.
3. Options built as separate single-file HTMLs → stakeholder review → the winner merges to `main`.
4. On merge: new components get **promoted into `assets/ds/components.css`** and specced on the site (System → Components); new token facts land in `assets/ds/tokens.css`. The branch stays forever as the project record, linked from the site's Projects page.

## Brand modes

Set `<html data-brand="...">` — currently live: `debenhams` (default) · `boohoo` · `boohooman` · `plt` · `karenmillen`, with `warehouse` + `brandroom` scaffolded. Values are the signed-off Colour Alignment set (post-KM review, 26 Aug 2026). Full slot structure and rules: `.context/07-foundations.md`.

## For AI sessions (Claude Code, chat, etc.)

Read `CLAUDE.md` first — it sets the rules and the reading order through `.context/`. The short version: read `.context/00-readme.md` then the latest session log, work on a branch if it's a brief, consume semantic tokens only, keep `.context/` current, and never introduce a build step.
