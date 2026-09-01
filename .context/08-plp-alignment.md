# PLP alignment — boohoo / boohooMAN / PLT / Warehouse / Brand Room

**Brief source:** Scott (Head of Ecommerce & Trading, PLT & boohoo), email 01/09/26. Target: 1st–2nd week of September, ahead of BHW brand elevation + Warehouse relaunch.

**The design thesis:** one core PLP template. Per-brand differences are *configuration* (fonts, card toggles, grid, container) — not separate builds. PLT is the reference implementation; the others align to it.

---

## 1. Requirements distilled from the brief (web PLP scope)

| Requirement | BHW | Warehouse | Source |
|---|---|---|---|
| Full-width product images (like PLT) | ✅ | ✅ | Email |
| Site-wide font size reduced to PLT scale | ✅ | ✅ | Email |
| Desktop grid 4-across (from 5) | — | ✅ | Email |
| Hide 'Brand' label on card (like PLT) | — | ✅ | Email |
| Favourite icon: same as KM | — | ✅ | Email |

Out of PLP scope but in the same email: footer square corners + black/white buttons (BHW), app header/bottom-icon alignment (both). Track separately.

App PLP asks (Hide Brand, KM favourite icon) mirror the web ones — one card spec should drive both.

---

## 2. Core PLP template — brand config schema

Every difference between the five fascias should be expressible in this shape. If it can't be, the template is wrong or the difference should be killed.

```ts
interface PLPBrandConfig {
  // Grid & container
  grid: {
    columnsDesktop: 4 | 5;        // Warehouse moving 5 → 4
    columnsMobile: 2;
    gutter: string;                // token ref
    containerMargin: string;       // token ref; 0 = full-bleed
    imageFullWidth: boolean;       // PLT pattern — image bleeds to card edge
  };
  // Product card anatomy — toggles
  card: {
    showBrand: boolean;            // PLT: false, Warehouse → false
    showPrice: true;
    showWasPrice: boolean;
    showColourSwatches: boolean;
    showRatings: boolean;
    showBadges: boolean;           // sale / new / trending
    showQuickAdd: boolean;
    favouriteIcon: 'default' | 'km';  // Warehouse → 'km'
    imageAspectRatio: string;      // confirm per brand — likely 3:4
    imageHoverSwap: boolean;
  };
  // Type
  type: {
    fontFamily: string;            // brand font token
    scale: 'plt';                  // PLT scale is the target for all
  };
  // Page furniture
  furniture: {
    breadcrumb: boolean;
    categoryHeader: 'plain' | 'editorial';
    filterLayout: 'sidebar' | 'topbar' | 'drawer';
    seoCopyBlock: boolean;
    pagination: 'load-more' | 'numbered' | 'infinite';
  };
}
```

---

## 3. Audit matrix — current live state (to fill)

One column per fascia. Fill from scraper output / browser session / screenshots. Every cell that differs from the PLT column is either a deliberate brand config or a bug to align.

| Dimension | PLT (target) | boohoo | boohooMAN | Warehouse | Brand Room |
|---|---|---|---|---|---|
| PLP URL audited | | | | | |
| Desktop columns | | | | 5 → **4** | |
| Mobile columns | | | | | |
| Container margin (px @1440) | | | | | |
| Image full-width in card | ✅ | → ✅ | → ✅ | → ✅ | |
| Image aspect ratio | | | | | |
| Card: brand label | ❌ | | | → ❌ | |
| Card: was-price | | | | | |
| Card: swatches | | | | | |
| Card: ratings | | | | | |
| Card: badges | | | | | |
| Card: quick-add | | | | | |
| Favourite icon style | | | | → KM | |
| Font family | | | | | |
| Card title size/weight | reference | → match | → match | → match | |
| Price size/weight | reference | → match | → match | → match | |
| Filter layout desktop | | | | | |
| Filter layout mobile | | | | | |
| Sort control | | | | | |
| Breadcrumb | | | | | |
| Category header style | | | | | |
| SEO copy block | | | | | |
| Pagination model | | | | | |
| Sticky header behaviour | | | | | |

---

## 4. Capture plan

All five fascias run on the same client-rendered platform (`/categories/...` URLs), so web_fetch is IA-only. Two capture routes:

**Route A — scraper (preferred, tokens too).** Add a `plp-alignment` config to the Playwright scraper: 5 fascias × 1 representative PLP × 390 + 1440 breakpoints. Reuse the OneTrust dismissal. Confirm live PLP URLs first — suggested shape:

- boohoo: `www.boohoo.com/categories/womens-dresses`
- boohooMAN: confirm domain/path
- PLT: confirm post-rebrand path
- Warehouse: confirm domain (warehousefashion.com?) and path
- Brand Room: a Brand Room category on debenhams.com — confirm canonical PLP URL

**Route B — Claude in Chrome.** Connect the extension; Claude visits each PLP, resizes to 390/1440, screenshots, and fills the matrix directly in-session.

Either way the matrix in §3 is the deliverable; §2 config values fall straight out of it.

---

## 5. Sequence

1. Confirm the five PLP URLs (Jake — 2 mins)
2. Capture (Route A or B)
3. Fill §3 matrix → derive the five `PLPBrandConfig` objects
4. Cross-check against Figma designs (Jake sends PLP component/screen links)
5. Build the core PLP template in the components package + configs — Claude Code session
6. OptionSwitcher variants where the brief allows choices (e.g. card density) for stakeholder review
7. Merge chosen config to master prototype; hand spec to Ewan for app parity (Hide Brand, KM favourite)
