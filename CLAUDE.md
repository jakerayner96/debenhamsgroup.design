# CLAUDE.md — debenhamsgroup.design

Read `.context/` before doing anything. Start with `00-readme.md`, then `14-session-log-2026-09-03.md` for current state (11–13 are the earlier history), then whichever doc matches the task.

**Repo:** github.com/jakerayner96/debenhamsgroup.design · **Live site (Pages):** jakerayner96.github.io/debenhamsgroup.design

## What this repo is
The Debenhams Group UX site: design system docs, project archive (options + chosen routes), brand centre, requests board — plus (incoming) the master prototypes for core pages. **`index.html` IS the site** — single file, no build step, dark, sidebar-driven — and since 01 Sep it carries the design system layer itself: canonical tokens (invariant semantic layer + five live fascia modes on `data-brand`), foundations pages (colour, typography, spacing, radius, borders, motion, accessibility), component specs, brand centre with real logo marks. Serve it with `python3 -m http.server 3000` from the repo root (assets need HTTP, not file://).

- **`assets/brands/`** — fascia logo SVGs, named by `data-brand` slug (no dashes: `boohooman`, `karenmillen`, `dorothyperkins`, `brandroom`…). DSGN Studio's mark still missing.
- **`.context/07-foundations.md`** — the locked foundations spec the site pages render.
- **`designsystem-debenhamsgroup/`** — **RETIRED.** The older Next/Fumadocs monorepo; its tokens, brand modes, foundations and docs content were absorbed into `index.html` (see log 13). Kept only as reference until Jake deletes it — don't build on it, don't run it.

## Git & session workflow

- **Remote:** `origin → https://github.com/jakerayner96/debenhamsgroup.design.git`. Auth is the Mac's keychain (osxkeychain) — on Jake's machine, plain `git pull` / `git push` just work. A session on any other machine/environment must authenticate to GitHub once first (`gh auth login` or a PAT); a chat-only session can read the public repo but cannot push.
- **Start of session:** `git pull`, check `git branch --show-current` — briefs live on their own branch, site/DS work happens on `main`.
- **New brief:** branch from main named for the project (`plp-alignment` pattern) → `projects/<name>/README.md` (brief, Figma source, decisions) + prototypes that link `../../assets/ds/tokens.css` + `components.css`. Add the branch link to the project's page on the site.
- **Merge = promote:** when a brief's winner merges to main, move its reusable patterns into `assets/ds/components.css`, land any new token facts in `assets/ds/tokens.css`, and spec the component on the site. The branch is never deleted — it's the record.
- **Never force-push.** Commit messages: what + why, ending `Co-Authored-By: Claude <the model> <noreply@anthropic.com>`.
- **End of session:** decisions and state go into a `.context/` session log (next number), and CLAUDE.md's pointer updates to it. Chat history is disposable; the repo is not.

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
