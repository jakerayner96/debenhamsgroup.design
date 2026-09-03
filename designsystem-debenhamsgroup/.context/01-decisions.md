# Locked decisions

Every architectural and process decision that's been made. Add to this file as new decisions land. Don't remove unless explicitly overturned.

## Architecture

### Site model
- **Code-first.** The production design system website (debenhamsgroup.design) is the source of truth.
- The Figma library is **downstream of code** — generated and maintained from the live components, not the other way round.
- This is deliberate: the existing Figma-first approach has demonstrably failed to keep live sites aligned with design intent. Code-first collapses the drift problem.
- Reference systems with this model: Wise, Polaris (Shopify), Carbon (IBM), Primer (GitHub), Atlassian, Spectrum (Adobe), Lightning (Salesforce), GOV.UK, USWDS.

### Build sequence
- **Vision artefact first** (~1–2 weeks): hero pages, key components, beautifully documented, for stakeholder buy-in. Not a prototype — fast, but real.
- **Then real production site:** built on top of foundations once buy-in is secured. Built, deployed, maintained.

### Brand model
- **One framework, brand variables, brand modes.** Single component library, brand identity applied via theming.
- **Debenhams built first**, others migrated in via mode addition.
- **Variable architecture: two-layer** (primitives → semantic). Promote to component-level only when genuinely needed.
- **Semantic modes:** per-brand (Debenhams, boohoo, BoohooMAN, KM, PLT). Modes live on the **semantic** layer, not primitives.
- Primitives keep brand identity (e.g. Debenhams uses Aqua-named primitives). Semantic tokens map roles → primitives. Brand mode swaps the semantic mapping.

### Naming convention
- `category/role/variant/state` — lowercase, slashes for hierarchy.
- Numeric scales for sizes (spacing, type sizes, etc.).
- **No brand names in token names.** That's what modes are for.
- For Debenhams *primitive* layer specifically, **existing Debenhams Figma names are preserved** (Aqua Light 1-4, CTA Aqua, Grey 1-6, etc.) because they work and the team knows them.

### Out of scope (for now)
- **Dark mode.** Dropped. Light only.
- **Karen Millen primitive overrides.** KM brand colours will eventually change; will be re-mapped fresh when other brands are added via the semantic layer.
- **Rewards colours.** Rewards project dead.
- **Translations / market localisation.** Parked until system is mature. The site will eventually support translating placeholder text per market (UK/IE/US/AU), but that's far downstream.

---

## Brand

- **Debenhams font:** Geologica. Confirmed. Weights observed in current file: SemiBold, Light. Full weight set TBC after live audit.
- **Other brand fonts:** to be captured from each brand's live site during differential audit.

---

## Audit

### Scope
- **Debenhams thoroughly.** Every page archetype, desktop and mobile, every breakpoint we care about.
- **Other 4 brands: differential pass.** Spot-check for components or patterns Debenhams doesn't have, note brand-specific variations. Don't repeat the whole inventory.

### Methodology
- **Scraper-first** (Playwright, separate VS Code project). Captures full-page + above-fold screenshots, post-JS DOM, and computed CSS at 6 breakpoints per page. Aggregates unique design tokens actually rendering.
- **Web_fetch in parallel** for IA / sitemap / link inventory. Useless for visual audit (debenhams.com is heavily client-rendered) but cheap for navigation structure.
- **Manual screenshots only as last resort** — for authenticated flows, interaction states (modals, errors), or anything the scraper can't see.

### Breakpoints (locked for the audit scrape)
- 390 — standard mobile design width (Debenhams convention)
- 402 — iPhone 17 Pro (6.3") @1x
- 440 — iPhone 17 Pro Max (6.9") @1x
- 1023 — just below the live site's mobile/desktop threshold
- 1024 — just above the live site's mobile/desktop threshold
- 1440 — standard desktop design width (Debenhams convention)

### Responsive philosophy (for new system, not the audit)
- New components must be **intrinsically responsive** — fluid + container-aware — not just breakpoint-aware.
- Designers will design at 390 and 1440 by convention. Components themselves should fluidly scale and reflow without being tied to those exact widths.
- Reference: Linear, Vercel, Mercury build this way.

### Live breakpoint reality (significant audit finding)
- The live Debenhams site does **not** apply breakpoints consistently across components. Each component on a page can have different breakpoint logic.
- The Brand Room file's *intended* model is a single 1024px breakpoint (mobile 0–1023, desktop 1024+) but in practice this isn't applied uniformly.
- **The new design system exists in part to fix this.**

---

## Project structure

- **This Claude Project** (the docs) is the master plan.
- **Scraper** is its own VS Code project. Run separately.
- **Future: design system website** will be a third VS Code project, built later. It consumes the docs + scraper outputs + Figma stuff. Spits out the live site AND a Figma library.

---

## Storage / collaboration

- **GitHub:** to be set up. Ideally Debenhams Group org rather than personal account, private repo. Decision pending.
- **Scraper outputs:** large screenshot binaries should not live in Git. Recommend committing manifests + tokens.json (text) and storing screenshots in cloud (S3, Drive, Dropbox) with links from the manifest.

---

## Reference systems (selected from broader inspiration list)

- **Wise** — gold standard for editorial polish + system rigour. Brand-led but systematised. Probably the closest aspirational reference.
- **Polaris (Shopify)** — best example of an ecommerce-context system with strong content alongside components.
- **Mercury, Linear, Vercel/Geist** — modern aesthetic baseline. Confident, restrained, type-led.
- **Carbon (IBM), Atlassian, Primer (GitHub)** — best examples of *scale* (multi-product, multi-brand patterns).
- **Porsche, Audi, Polestar** — useful only for brand-expression pages, not for component library structure.

Mental model: Wise / Polaris for structure and IA, Mercury / Linear / Vercel for visual baseline, Porsche / Audi for brand-expression pages within the system.
