# Tokens

## Status

| Layer | Status |
|---|---|
| Colour primitives (Debenhams) | ✅ Locked |
| Colour primitives (other brands) | ⏳ TBD after differential audit |
| Semantic colour tokens | ⏳ TBD after live audit |
| Type scale | ⏳ TBD after live audit |
| Spacing scale | ⏳ TBD after live audit |
| Radius scale | ⏳ TBD after live audit |
| Border-width scale | ⏳ TBD after live audit |
| Elevation / shadow scale | ⏳ TBD after live audit |
| Breakpoint values | ⏳ TBD after live audit (parking lot for new system) |
| Container / grid system | ⏳ TBD |
| Icon size scale | ⏳ TBD |
| Z-index scale | ⏳ TBD |
| Motion tokens | ⏳ TBD |
| Content-tokens collection | ⏳ TBD (Sale Tag Message lives here eventually) |

---

## 1. Colour primitives — Debenhams (locked)

Names preserved from the existing Debenhams Figma DS. Light mode values only.

### 1.1 Aqua family

| Token name | Hex |
|---|---|
| `Aqua Light 4` | `#e6fffc` |
| `Aqua Light 3` | `#d6fff9` |
| `Aqua Neutral` | `#e8f4f2` |
| `Aqua Light 2` | `#b8fdf4` |
| `Aqua Light 1` | `#9dede2` |
| `Primary Aqua` | `#7be7d8` |
| `Aqua Dark 1` | `#76decf` |
| `Aqua Dark 2` | `#70beb3` |
| `Aqua Dark 3` | `#529c92` |
| `CTA Aqua` | `#00787d` |
| `CTA Aqua - Touch Down` | `#00565a` |
| `Primary Dark` | `#1e6f63` |

### 1.2 Neutrals

| Token name | Hex |
|---|---|
| `White` | `#ffffff` |
| `Grey 05` | `#fafafa` |
| `Grey 1` | `#f2f2f2` |
| `Grey 2` | `#e7e7e7` |
| `Grey 25` | `#d6d6d6` |
| `Grey 3` | `#b5b5b5` |
| `Grey 4` | `#767676` |
| `Grey 5` | `#6b6b6b` |
| `Grey 6` | `#323232` |
| `Soft Black` | `#0f0f0f` |
| `Black` | `#000000` |

### 1.3 Status colours

| Token name | Hex |
|---|---|
| `Red` | `#d33f3f` |
| `Red Light` | `#fff2f2` |
| `Yellow` | `#ffd600` |
| `Yellow Light` | `#fffbe6` |
| `Green` | `#70c474` |
| `Green Light` | `#eaf6ea` |

### 1.4 Removed from primitive layer

- **Karen Millen mode override values** — KM brand colours will eventually change. Will be re-mapped fresh via semantic layer when other brands added.
- **Rewards Primary / Secondary + gradients** — Rewards project dead.

---

## 2. Outstanding token decisions

Each of these blocks the new system being properly built. They'll be informed by the live audit (scraper output, then analysis).

### Type scale
- Sizes (likely 6-8 steps from caption to display)
- Semantic roles (display / heading-{xl,lg,md,sm} / body-{lg,md,sm} / label / caption)
- Line heights (currently `AUTO` everywhere — needs proper values)
- Letter spacing (currently mostly 0 — needs system)
- Weights (Geologica Light + SemiBold confirmed in current file; Regular and others TBC from live)
- Mobile vs desktop scaling (separate values, or fluid scaling via `clamp()`?)

### Spacing scale
- Base unit (likely 4px or 8px)
- Step count (8-12 steps typical)
- Semantic roles (inset / inline / stack? Or just numeric?)
- Component-internal vs layout spacing

### Radius scale
- Step count (likely 4-5: none, sm, md, lg, full/pill)
- Specific values (TBC from live; likely 4, 8, 16, 9999)

### Elevation / shadow
- Existing file has 2 (typo'd). Likely need 4-6: none, subtle, low, medium, high, popover

### Border-width
- 1, 2, 4 typical. Live audit to confirm what's actually in use.

### Breakpoint values for new system
- Currently captured only for *audit* purposes. Final new-system breakpoints will be small and consistent (probably 3-4 values, vs the current chaos).

### Icon size scale
- Existing buttons use 16, 20, 24. Probably need also 32, 48 for hero / decorative use.

### Z-index scale
- Standard layers: base, dropdown, sticky, banner, overlay, modal, popover, toast, tooltip.

### Motion
- Durations (fast / base / slow — typically 100ms / 200ms / 300ms)
- Easing curves (standard, decel, accel, emphasised)
- Live audit will reveal what's in use.

---

## 3. Semantic layer (planned, not yet designed)

When the audit is done, semantic tokens will be designed to map roles → primitives. Examples of roles we'll need:

**Text:** `text/primary`, `text/secondary`, `text/tertiary`, `text/disabled`, `text/inverse`, `text/link`, `text/link/hover`, `text/error`, `text/success`, `text/warning`, `text/on-cta`

**Surface:** `surface/page`, `surface/raised`, `surface/sunken`, `surface/inverse`, `surface/overlay`, `surface/cta/primary`, `surface/cta/primary/hover`, `surface/cta/primary/pressed`, `surface/cta/secondary`, `surface/error`, `surface/success`

**Border:** `border/subtle`, `border/default`, `border/strong`, `border/cta`, `border/error`, `border/focus`

**Brand modes** (eventually): each role above resolves differently per brand. `surface/cta/primary` = `CTA Aqua` in Debenhams, = whatever PLT/boohoo/etc. equivalent in their modes.

This is the *architecture*. The actual mapping happens once the live audit reveals what's truly in use.
