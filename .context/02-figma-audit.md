# Existing Debenhams Figma DS — audit

**File:** `aIHmkCaTy9c5EWOxAGw0So`
**Conducted via:** Figma MCP, foundation-level inspection, button components inspected in detail.

## Top-line diagnosis

64 pages. Significant accumulation over ~2.5 years. Old/new versioning by page suffix indicates partial migration in progress. Empty separator pages and whiteboard pages mixed in with production components. Variable architecture is wrong shape (flat palette, no semantic split). Type system barely started.

**Decision (locked):** clean new Figma file later, migrate selectively. The Figma file is downstream of the code site, so it doesn't need to be perfect day one — but it needs to be coherent.

---

## Foundation layer

### Variables
- **32 variables**, single collection ("Variable collection")
- **Modes:** Light, Dark, KM
- **Wrong shape:** flat palette, no primitive/semantic split
- **KM mode lives at primitive layer** — wrong place. Should be a semantic-layer override.
- **Dark mode is a stub** — Light and Dark have identical values for almost everything except `Black` (which flips to `#ffffff` in Dark, suggesting a confused mental model). Decision: drop dark mode.
- **`ALL_SCOPES` on every variable** — no scoping discipline. A spacing variable could currently be used as a fill colour.
- **Only state variant captured:** `CTA Aqua - Touch Down`. No `hover`, `disabled`, `focus`. State styling is presumably hard-coded in components.
- **Sale Tag Message** — STRING variable mixed in with colours. Should live in a content-tokens collection.

### Local styles
- **Paint:** 5, all gradients (Rewards, Circle, Home Image Overlay). Solid colours all live in variables. Gradients can't be Figma variables, so this is correct.
- **Text:** 7 styles, single folder, **two typo'd names** (`Conent Title`, `Drop Shaddow`). Geologica family, SemiBold/Light weights only. **Not a type system** — just a few one-off styles for content/USP banner contexts. No heading scale, no body scale, no labels, no line heights set (all `AUTO`), no letter spacing system.
- **Effect:** 2, both typo'd "Drop Shaddow" (Large + Small). Will fix on rebuild and expand to a proper elevation scale.

### Missing entirely (no variables exist)
- Spacing (4, 8, 12, 16, 24, 32, 48, 64...)
- Radius
- Type (font family, size, weight, line-height)
- Border-width
- Semantic colour tokens (`text/primary`, `surface/raised`, etc.)
- Icon size
- Breakpoint / container widths
- Z-index scale
- Motion tokens

---

## Component-level findings (buttons inspected in detail)

### `(new)` suffix pattern
Several pages exist as `BUTTONS` and `BUTTONS (new)`, `TABS` and `TABS (new)`, `Breadcrumb` and `Breadcrumb (new)`. Mid-migration state.

**`(new)` versions are the source of truth.** The old pages should be deprecated.

### Buttons (new) — what's good
- Proper component sets with `Type` and `State` properties
- Primary / Secondary / Tertiary / Tertiary XS, with Default / Pressed / Disabled / Spinner / Icon variants
- 30 variants in one well-organised set
- Plus separate sets for Quantity Selector, Pill Buttons, Icon Only Button, Navigation Button, Payment Buttons, Roundel, Dropdown Button, Icon Link, App Store Badges

### Buttons — what's structurally problematic (will fix on rebuild)
1. **Display canvas mixed with component source.** The "Button Styles" frame is a documentation layout containing the actual component sets *inline*. Components and their specimen documentation should be on separate pages.
2. **Inconsistent variant property naming.** Some components use `State=Pressed` (mobile), others `State=Hover` (desktop), no unified language.
3. **Icon variants encoded as states, not slots.** `State=Icon 24x24`, `State=Icon 20x20`, `State=Icon 16x16` — three component variants per type just to handle icon presence/size. Should be a Boolean `Has Icon` + separate Size, or a swappable icon instance slot.
4. **Conflated semantics in Type property.** `Type=Primary` and `Type=Buy It Now` as siblings — but "Buy It Now" is arguably a *use* of a primary button, not a different *type*.
5. **Auto-named groups everywhere.** `Group 4528`, `Group 4529`, `Group 4537`. No semantic meaning. Makes the file harder to navigate.
6. **`Component 1` exists.** Unfinished naming.
7. **No use of variables (probably).** Given the variable layer is wrong shape and minimal, components likely use raw hex values or local style references. To verify on rebuild and rebind.

---

## Pages that exist (high-level inventory)

Foundations:
- 🎨 COLOURS, 🔠 TYPOGRAPHY, 📐 FRAME SIZES, 🧰 UTILITY, *️⃣ ICONS & LOGOS

Atoms (with `(new)` migrations in progress):
- BUTTONS / BUTTONS (new), TABS / TABS (new), DIVIDERS, BREADCRUMB / BREADCRUMB (new), BADGES, INPUTS, ACCORDION, PAGINATION, SIZE/COLOUR SELECTION, REVIEWS

Components:
- BANNERS & MESSAGING, CELLS, PRODUCT CARDS, MODAL WINDOWS, PAGE HEADERS, WISHLIST, FORM CONTAINERS, HEADER/MENU/SEARCH, FOOTER, PLP, ACCOUNT

Page templates:
- CHECKOUT, PDP, PLP, BAG, EMPTY PAGE, CORE PAGES

Brand-specific:
- KM page (Karen Millen)
- CONTENT COMPONENTS (72 children — biggest section)

App:
- 📱 APP COMPONENTS

Whiteboards / explorations:
- 8+ pages of work-in-progress

Cruft:
- DEFINITIONS (to tidy), VALIDATION + FORM RULES (empty), Archive, multiple `------` separator pages

---

## Migration plan (high-level)

When rebuilding:
1. **Build the variable architecture first** in a clean new file (primitives + semantic, scoped properly, single Light mode, Debenhams as the only mode initially).
2. **Migrate `(new)` components** to use the new variables. Discard the old non-`(new)` versions.
3. **Separate components from specimens.** Components on dedicated pages; documentation/showcase frames on separate pages that *reference* the components.
4. **Restructure variant properties** — fix the `Pressed` vs `Hover` inconsistency, separate icon presence/size from state, unify Type naming.
5. **Move content-tokens (e.g. Sale Tag Message) to a separate collection.**
6. **Build the missing token categories** (spacing, radius, type variables, elevation, breakpoints) — driven by live audit findings.
7. **Drop:** dark mode stub, KM mode at primitive layer, Rewards colours, archive pages, separator pages.

This is the rebuild plan **for the Figma file**. The code site is built independently and the Figma file mirrors it — so the Figma rebuild may happen later than the code work.
