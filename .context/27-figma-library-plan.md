# 27 · Figma library — plan (07 Oct 2026, draft for Jake)

**Goal:** bring every Figma file the team has made (hundreds of features, most never shipped) into the design system's memory, tidied and searchable, so that when a piece of work comes back up we already know what was explored, when, by whom, what the live site looked like at the time and what happened to it. Nothing is binned; everything gets a status. Long term the useful work is built into the master prototypes (M-01 PLP, M-02 PDP, M-03 Bag, M-04 Checkout, M-05 Home, plus Account and Navigation), which needs its own roadmap once the inventory exists.

## What Claude can and can't do today
- **Can:** read any Figma file it is given a link to (Figma MCP: pages, frames, screenshots, design context, version comments it can see), screenshot and describe frames, extract component usage, compare against our DS and the live sites (Playwright), write the records.
- **Can't (yet):** list the team's files. The MCP needs a file key. A full inventory with *dates* needs the **Figma REST API** with a personal access token (`/v1/teams/:id/projects` → `/v1/projects/:id/files` gives every file with `last_modified`; `/v1/files/:key/versions` gives the version history with dates and authors). Alternative: Jake pastes the file lists per Figma project.
- **Site state at the time:** three sources, best first — our own scraper captures (`TOOLS/SITE scraper`, when they exist for that date) · **Change Radar** (Group analytics: every promotion, banner, page, GTM release and deploy with dates — via the exec-assistant skill) · the **Wayback Machine** (archive.org snapshots of each fascia's homepage / PLP / PDP closest to the date). Each feature record links the snapshot nearest its working dates.

## ⚠ Confidentiality
`debenhamsgroup.design` is a **public** GitHub repo and the site is public on GitHub Pages. Unreleased feature work, screenshots of unshipped designs and internal decisions should **not** go there. Recommendation: the library lives in a **private repo** (e.g. `debenhamsgroup-figma-library`, or `.context` moved private) and only shipped / approved work is promoted to the public site. Needs Jake's call before ingestion starts.

## The record (one per feature, plus an inventory row per file / page)
| Field | Example |
|---|---|
| Feature | "Shop the look on PDP" |
| Journey area | Home · PLP · PDP · Bag · Checkout · Account · Navigation & header · Promo & banners · Membership · Email & CRM · App · Brand · Other |
| Fascias | boohooMAN, Debenhams |
| Figma | file key · page · node ids · link |
| Dates | first worked · last edited · version history milestones (from the API) |
| People | who edited (from the versions) |
| Type | exploration · final design · dev handoff · component · research / audit · presentation |
| **Status** | `shipped` (live — when) · `built, not shipped` · `parked` (good, waiting) · `superseded` (by what) · `reference` (audits, benchmarks) · `archive` (kept, low value) |
| Site at the time | Change Radar entries · Wayback / scraper snapshot links for the fascia + page |
| Decision | why it stopped / what was chosen (from Figma comments, Jake, Slack/Jira if connected) |
| Master prototype | which master + module it belongs to, and whether it's a candidate |
| DS impact | components it introduces or changes, matched against `catalogue.js` |

## Phases
1. **Access + scope (Jake, ~30 min):** decide where the library lives (private repo), provide either a Figma personal access token + team id(s) or the file links per Figma project, and say which teams / projects are in scope.
2. **Inventory (automated):** pull every file → pages → top-level frames with dates, versions, editors and a thumbnail. Output: `inventory.json` + a sortable "Figma library" page in the private site. No judgement yet — just the map.
3. **Triage (Claude proposes, Jake confirms, in batches):** cluster pages into features, propose journey area / type / status / duplicates / supersessions; flag the obvious junk (empty pages, scratch, copies). Jake reviews a batch at a time (a review table with accept / change per row) so the statuses are his, not guesses.
4. **Feature dossiers:** one `features/<feature>.md` per feature — timeline of every file and page that touched it, what was explored, what shipped, the site state at each point, open questions. Indexed so "the bundling work from last year" is one lookup.
5. **Tidy Figma itself (optional, after sign-off):** propose a new project structure (by journey area, with an Archive project), cover pages with status + date, and moves — executed only with Jake's approval, never deletes.
6. **Master-prototype roadmap:** from the `parked` and `built, not shipped` set, a ranked backlog per master prototype (value, effort, DS readiness, dependencies), feeding the brief → branch → options → merge workflow.

## Suggested pilot
Run phases 2–4 on **one Figma project** (or ~15 files) first — e.g. the PDP work, since Core PDP 2026 is fresh — to settle the record format, the status vocabulary and the review flow before scaling to hundreds.

## Already known (seed rows)
The eleven projects on the site now carry their Figma source (`DG_PROJECTS.f` in index.html): PLP MASTER `GP04SeG99nevXl4yuwY3sM`, PLP Grid View `H679chUDMrAVSdARchnheR`, Sort & Filter `s7WDE3BkCxbgqJ4x4hoV80`, Core-PDP-2026 `vVJJ1bgaTGCbGd68bsNiVT` (+ DOM export `NP51VuDk959arTzzTr9cBo`), Checkout 2026 `WChEtDPH0LcErdYFS9SESn`, VTO – Virtual Wardrobe `LxHqA4rFpRYNWJu8vzn18X`, AI-Generated Watermark `d0zY0vt8hoz0gq8ycTimxS`, The Brand Room `NRsu568JGzwCDq4egvkUbn`, Homepage 2.0 `Hd0yRD6JgyyyJMWhWzFcNe`, Gift card email `XbDt0A59FmPQN3pj7RevaG`, SEEL Enhancements 2026 `CQIe2e2c0iagD1T9WjdYsx`, Taggstar `00YKWCHwTarfwWZ1HayFUI`, DS `aIHmkCaTy9c5EWOxAGw0So`. Design Request Form has no Figma file recorded.
