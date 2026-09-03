# Methodology

How this design system project is being conducted. Tools, processes, what works and what doesn't.

## Tools in use

### Figma MCP
- Direct read/write access to Debenhams DS Figma file (`aIHmkCaTy9c5EWOxAGw0So`)
- Used for: foundation audit (variables, styles), component inspection
- Limitations: large file pages can time out on `loadAsync()`. Solved by inspecting at smaller granularity.

### Web fetch (Anthropic-built)
- Returns server-rendered HTML reduced to markdown
- Useful for: IA, sitemap, link inventory, navigation structure
- Useless for: visual audit. Debenhams is heavily client-rendered — homepage fetch returned ~9000 lines of nav with no body content.

### Web search
- For confirming live URLs, brand info, technical reference data
- Used to unlock web_fetch on debenhams.com (web_fetch can only fetch URLs that have been provided by user or returned by search)

### Scraper (Playwright, separate VS Code project)
- The unblocker for visual audit
- See scraper README for full detail
- Captures screenshots + DOM + computed CSS at 6 breakpoints per page
- Outputs per-brand/per-date folders, `manifest.json`, aggregated `tokens.json`

### Manual screenshots (last resort)
- For things scraper genuinely can't see: hover states, modals, errors, authenticated flows
- Avoided where possible — slow and depends on the human being available

---

## Audit sequence

1. **Existing Figma DS audit** — done (foundation-level, button-level)
2. **Build scraper** — done
3. **Run scraper on Debenhams** — pending (requires user)
4. **Analyse scraper output** — pending
   - Open `tokens.json` first → reveals real token universe in production
   - Compare to existing Figma DS → gap analysis
   - Lock outstanding token decisions (type, spacing, radius, etc.)
5. **Page-by-page audit using scraper screenshots + DOM** — pending
   - For each page archetype, inventory components observed
   - Note variants, states (where visible without interaction)
   - Note responsive behaviour across breakpoints
   - Flag inconsistencies (e.g. different breakpoint behaviour per component)
6. **Manual screenshot pass** — only for things scraper missed
7. **Differential audit on other 4 brands** — same scraper, different config, lighter analysis
8. **Vision artefact build** — fast, beautiful, for stakeholder buy-in
9. **Production site build** — proper, deployed, maintained
10. **Figma library generation** — downstream of code

---

## Why scraper-first not Figma-first

Standard design system projects build the Figma library first and document it on a website. This project deliberately inverts that.

**Reasoning:**
1. The team's *actual* problem is "live sites don't match Figma." Two and a half years of Figma-first hasn't fixed it.
2. Code-first means devs copy real components into the live tech stack. Drift collapses structurally.
3. PLT case study: their rebrand was Figma-perfect, code implementation was poor, brand team is now precious about the gap. Code-first sidesteps the entire problem.
4. The reference systems we want to emulate (Wise, Polaris, Linear, Mercury, Vercel, Stripe) are all code-first.

**Practical consequence:** the audit reveals what *actually* exists in production. The new design system is built to match (or improve) reality, not to perpetuate aspirational documents that haven't shipped.

---

## Why this project lives in a Claude Project

- Multi-week timeline. Claude conversations get long, and lose context as they grow.
- Multiple workstreams (Figma audit, live audit, scraper, foundation work, vision artefact, production site).
- Need a stable shared brain across many sessions.
- Project files = source of truth. Each conversation reads them, updates them, hands off to the next conversation.

When a conversation gets long enough that Claude is straining, start a fresh conversation, point it at this Project, ask it to read the docs, continue.

---

## Limitations to be honest about

- **Claude can't sustain a multi-week, multi-thousand-component build alone.** The realistic role is senior collaborator — architecting, auditing, writing, reviewing — not a build-it-all engine. Engineers will eventually need to be involved for the production site.
- **Claude has no memory across conversations** outside what's in the Project files. If a decision is made in chat and not written here, it's lost.
- **Figma MCP can be slow** on a 64-page file. Sometimes calls time out. Workaround: inspect at smaller granularity.
- **Web_fetch can't see client-rendered content.** This is why the scraper is essential.
- **The scraper can't see interaction states.** Manual coverage required for those.

---

## Considered and parked: Apify

[Apify](https://apify.com/) is a hosted scraping platform — pre-built "Actors", custom scrapers via their Crawlee library (open-source Playwright wrapper), cloud deployment, proxies, anti-blocking, scheduling.

**Considered for the audit, parked.** Reasoning:

- Their core strengths (anti-blocking, proxies, cloud scale) are irrelevant for a one-off audit on sites Debenhams Group operates.
- No off-the-shelf Actor does what we need (design-system-shaped audit with our specific breakpoints, tokens, archetype tagging). We'd write a custom Actor — which is the same Playwright code we already have, just deployed to their cloud.
- Local script is free, debuggable in VS Code, full control.
- Crawlee is open-source. If we ever migrate, the existing Playwright code ports over almost unchanged. So the work isn't wasted.

**When to revisit:** once the design system is live, run the scraper as a **scheduled drift-detection job** weekly across all 5 brands. Each run diffs against the previous, flags where production has drifted from system spec. Apify is genuinely good at that recurring scheduled work — the local script approach gets tedious for weekly automation. This becomes a real loop: design system says "buttons should use `CTA Aqua`," scraper runs weekly, alerts if any brand starts using something else.

Other reasons to revisit:
- Brand sites start blocking our local IP (unlikely on Debenhams Group sites)
- Scrape grows to thousands of pages per brand and local execution becomes painful
