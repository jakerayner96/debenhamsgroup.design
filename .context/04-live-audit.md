# Live site audit — Debenhams

Most of the visual audit awaits scraper output. This file captures what we have so far (mostly IA from web_fetch passes) and is the home for everything that comes next.

## Method

See `05-methodology.md` for full detail. Summary: scraper-first (Playwright project, separate VS Code), web_fetch in parallel for IA, manual screenshots only as last resort.

---

## What web_fetch has given us so far

### Information architecture

**Top-level navigation:**
1. Sale
2. New
3. Women
4. Men
5. Kids
6. Home
7. Garden
8. Beauty
9. Spring (seasonal)
10. Holiday (seasonal)
11. Wedding (seasonal/standing)

**Mega-menu pattern:** each top-level expands into a column-based mega-menu with 4–7 columns. Columns are themed sections with section headers + link lists. Some links carry inline `TRENDING` / `NEW` / `NEW!` badges.

**Header utility nav (top right):**
- Search (visual_search + text search)
- Account
- Wishlist
- Cart

**Visual search feature** — distinct flow with its own UI: image upload, crop-to-frame, "View Similar."

### IA observations
- **Curation pages** (`/curation/...`) are a distinct page archetype from regular PLPs (`/categories/...`). Worth distinguishing in the audit.
- **Brand pages** vary in URL pattern: some at `/categories/brands-...`, some at `/pages/brands/...`. Inconsistency to flag.
- **Diagnostic / interactive tools** exist (Foundation Advisor, Skincare Advisor, etc.) — these are richer than standard pages and have their own UI.
- **Hub pages** (Wedding, Spring, Holiday) are hybrid landing/category pages with editorial framing.

### Components inferred from homepage (not yet visually confirmed)

From markup, likely exists:
- Logo (mediahub.debenhams.com hosted)
- Header bar (sticky?)
- Mega-menu trigger + flyout panel (desktop)
- Mobile nav drawer (assumed — needs confirming)
- Visual search overlay/modal with image upload, crop tool
- Search overlay/modal
- Account / wishlist / cart icons (likely with cart badge)

Plus on the homepage body (none came through fetch — needs scraper):
- Hero carousel / banners
- USP banner strip ("free delivery", etc — Figma audit shows a "USP Banner Text" style)
- Category tile grids
- Product carousels (trending, new in, bestsellers)
- Editorial / content blocks
- Brand tile rows
- Email signup / newsletter
- App download prompts
- Recently viewed
- Footer (mega-footer presumably)

---

## What the scraper will give us

When run, `outputs/debenhams/<date>/` will contain:

- **`manifest.json`** — every capture, dimensions, errors
- **`tokens.json`** — aggregated unique design tokens *actually rendering* across the whole site (colours, font sizes, weights, line heights, letter spacings, radii, shadows, spacings, z-indices). This is **gold dust** for the foundations work — it'll tell us exactly which type sizes, spacings, radii, etc. are in use, which deduplicates and unifies, and what's redundant.
- **Per-page folders:** for each of ~25 pages × 6 breakpoints, a `full.png`, `fold.png`, `dom.html`, `data.json` (structural tree + tokens for that page).

Once scraper runs, this file gets populated with:

### Per-archetype findings

#### Homepage
_pending scraper_

#### PLP (`/categories/...`)
_pending scraper_

#### Curated PLP (`/curation/...`)
_pending scraper_

#### PDP
_pending scraper — also need to add product URLs to scraper config first_

#### Bag
_pending scraper_

#### Sign-in / auth wall
_pending scraper_

#### Wishlist
_pending scraper_

#### Department landing (Womens, Mens, Kids, Beauty, Home)
_pending scraper_

#### Brand storefront page
_pending scraper_

#### Editorial (The Debrief)
_pending scraper_

#### Diagnostic tool (Foundation Advisor etc.)
_pending scraper_

#### Brand directory (A-Z)
_pending scraper_

#### Footer
_pending scraper — captured as part of every full-page screenshot_

---

## Things the scraper won't catch (manual screenshot territory if we want them)

- Hover / focus / active states
- Modal open states (size guide, store finder, image zoom on PDP, etc.)
- Drawer open states (filter drawer on PLP, mobile nav drawer)
- Error states (form validation, out-of-stock, payment error)
- Empty states (empty bag is captured, but empty wishlist requires login, etc.)
- Loading states
- Authenticated flows (account dashboard, full checkout, order history, returns)
- Toast notifications
- Tooltips
- A/B test variants
- Personalisation (recently viewed when logged in, recommended for you)

If/when these matter, we screenshot manually or extend the scraper to trigger interactions.

---

## Differential audit (other 4 brands) — pending

After Debenhams audit completes, do a differential pass on:
- boohoo
- BoohooMAN
- Karen Millen
- PrettyLittleThing (the genuinely hard one — see `01-decisions.md` re: their rebrand situation)

For each: scrape, then for each page archetype, compare to Debenhams equivalent. Note:
- Brand-specific styling (colour palette, font, tone)
- Components that exist on this brand but not Debenhams
- Components that are the same shape but styled radically differently
- Components that are the same and just need theming
