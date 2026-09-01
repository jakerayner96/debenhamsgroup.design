# debenhamsgroup.design — 20 directions

The site holds four content types: **System** (tokens, components, docs), **Projects** (file browser/wiki: every brief, its options, the chosen route), **Brand Centre** (guidelines, fonts, palettes per fascia), **Requests** (intake + status, seeded by UX-Design-Request). The 20 directions below vary the IA skeleton and the visual language. Decide the skeleton first — most visual treatments can sit on most skeletons.

## Five IA skeletons

- **S1 Docs-first** — left sidebar reference site (Polaris/Porsche). System is the site; Projects/Brands/Requests are top-level sections.
- **S2 Portal** — dashboard landing with tiles + activity feed; four sections are peers.
- **S3 Workspace** — app not site (Linear-like): persistent left rail is a file tree of everything; feels like a tool you live in.
- **S4 Brand-led** — the fascias are the front door; each brand page hosts its guidelines and its themed view of the system; shared docs beneath.
- **S5 Feed-first** — homepage is a shipping changelog; every merged option/project is a post; reference docs hang off it.

## The 20

| # | Name | Skeleton | The idea |
|---|---|---|---|
| 1 | **The Reference Library** | S1 | Straight Polaris: light, calm, sidebar docs, search-first. Fastest to build on Fumadocs, zero risk, least memorable. |
| 2 | **The Group Deck** | S1 | The dg-presentations language made live: black/white, aqua hairline accents, Antonio display + Geologica body. The site *is* the stakeholder deck. Instant internal recognition. |
| 3 | **The Showcase** | S1 | Remix-3 dark, type-led, "site as live tech showcase": every component renders live inline, homepage is an animated component collage. Highest polish signal; costs the most craft. |
| 4 | **The Wise Route** | S4 | Editorial warmth, oversized friendly type, brand-forward landing pages per fascia, rigorous system beneath. Closest to the stated aspiration. |
| 5 | **The Console** | S3 | Linear-grade app feel: left rail = file browser (Projects tree, System, Brands as top folders), cmd-K everywhere, dense and fast. Best fit for the "file browser + wiki" requirement. |
| 6 | **The Portal** | S2 | Tasteful intranet: four big tiles, recent activity, "what shipped this week". Lowest learning curve for stakeholders; blandness is the risk. |
| 7 | **The Changelog** | S5 | Vercel energy: homepage is the merge feed. Makes delivery visible — political value in a team proving momentum. Docs feel secondary. |
| 8 | **The Brand Room** | S4 | 16 fascia tiles as the front door; pick a brand, everything inside is themed to it — guidelines, components, projects filtered to that brand. The multi-brand story *as* the IA. |
| 9 | **The Configurator** | S1+ | The GDS repo's brand dock, site-wide: persistent brand switcher re-themes the entire site live, docs chrome included. The system demos itself continuously. Pairs with any visual style. |
| 10 | **The Museum** | S4 | Porsche brand-expression: full-bleed photography per fascia, cinematic scroll, confident silence; utilitarian docs sub-site behind it. Best stakeholder wow per page; heaviest content demand. |
| 11 | **The Monorepo Mirror** | S1 | IA mirrors the repo: /tokens, /components, /apps, /projects. Radical transparency, GitHub links everywhere. Devs feel at home; non-devs may not. |
| 12 | **The Wiki** | S3 | Notion-shaped: one content model, everything is a page in a tree with backlinks. Fastest to populate and maintain; weakest visual identity. |
| 13 | **The Two-Door** | S2 | Honest split: "System" (reference, calm, light) and "Studio" (projects, prototypes, dark, expressive) as two sub-sites under one header. Serves both audiences without compromise. |
| 14 | **The Storefront** | S2 | Eat your own dog food: the site is built as an ecommerce experience — mega-menu nav, projects as PLP cards, project detail as a PDP, "add to review" bag. Unforgettable; must be executed straight-faced. |
| 15 | **The Terminal** | S3 | GOV.UK clarity meets developer mono: dense, zero decoration, keyboard palette as primary nav, instant loads. Substance signal; zero brand romance. |
| 16 | **The Magazine** | S5 | The Debrief energy: projects as cover-art articles, system as the "reference desk" at the back. Great for storytelling delivery; wrong shape for daily component lookup. |
| 17 | **The Atlas** | S2 | A zoomable visual map of the estate (brands × pages × components) as the homepage; click any node to dive in. The information model literally is the UI. High concept, needs real data plumbing. |
| 18 | **The Playground** | S1 | Storybook-forward: every doc page leads with an interactive sandbox, props editable, docs beneath. Stakeholders play rather than read. |
| 19 | **The Broadcast** | S5 | Motion-led: title-still hero (AI GEN deck style), projects as episodes with stills and reels. Strongest for quarterly showcase moments; overkill for reference use. |
| 20 | **The Quiet System** | S1 | Mercury restraint: warm neutrals, small confident type, generous space, no tricks — the fascia brand pages provide all the colour. Ages best; wins no demo. |

## Recommendation

Composite, not a single pick:

- **Skeleton: S3-leaning S1** — a docs site with a real file tree for Projects (the Console's browser inside the Library's structure). Fumadocs handles both.
- **Signature moves: #9 Configurator + #3 Showcase** — the persistent brand switcher and live inline components are the two features no reference site in your Tier 1 list combines. They're also already half-built (GDS dock; Fumadocs live demos).
- **Visual language: #2 Group Deck as the chrome** (black/white/aqua, Antonio + Geologica) with **#20 Quiet System restraint** in the docs body — expression at the edges, calm where people work.
- **Brand Centre: #8 Brand Room pattern** — each fascia page themed to itself, using the configurator machinery.
- **Requests: wrap the UX-Design-Request worker** with a status board page. No new ticketing system.

Next step: mock the composite plus the two strongest challengers (**#14 Storefront**, **#4 Wise Route**) as single-file HTML homepage + one docs page each — three tangible options to react to, OptionSwitcher-style.
