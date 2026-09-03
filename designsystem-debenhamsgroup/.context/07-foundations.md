# Foundations (v2)

Locked or proposed values for the building blocks every component consumes. Colour primitives were locked in `03-tokens.md`; this document defines everything else plus the semantic colour layer.

**Status legend:** ✅ locked · 🟡 proposed, pending sign-off · ⏳ TBD per brand

---

## 0. Facia inventory

There are **16 facias** across the group, all consuming this design system.

| Facia | Brand font | Radius mode |
|---|---|---|
| Debenhams | Geologica | default (4pt) |
| Boohoo | Montserrat | default |
| BoohooMAN | Montserrat | default |
| PrettyLittleThing (PLT) | Roboto | **square (0)** |
| Karen Millen | Jost | default |
| Burton | TBD | default |
| Coast | TBD | default |
| Dorothy Perkins | TBD | default |
| Misspap | TBD | default |
| NastyGal | TBD | default |
| Oasis | TBD | default |
| Principles | TBD | default |
| Wallis | TBD | default |
| Warehouse | TBD | default |
| DSGN Studio | TBD | default |
| The Brand Room | TBD | **square (0)** |

Boohoo group acquired the Arcadia brands (Burton, Coast, Dorothy Perkins, Oasis, Principles, Wallis, Warehouse, Karen Millen); fonts and other brand-specific tokens for the unconfirmed facias will be filled in as we audit each one. All fonts are Google Fonts and full weight ranges are available.

---

## Architecture recap

Two-layer token system:

1. **Primitives** — the palette, type sizes, spacing values. Named by what they *are* (`Primary Aqua`, `space-16`, `radius-4`). These don't change based on usage.
2. **Semantic tokens** — named by **role** (`surface/action`, `text/primary`, `radius/default`). Components consume only semantic tokens. **Brand mode** swaps the mapping.

A role-based name like `surface/action` is used by buttons, links, CTAs, tags — anything that's an action surface. It doesn't pretend to be `colour/button/primary`. When a role's usage spreads across many components, the name still describes the role correctly.

## Accessibility baseline

The system targets **WCAG 2.1 AA** compliance throughout. This is a hard rule:

- **Text colour floor is Grey 5** (`#6b6b6b`) on a white background. Grey 4 and below are *not* permitted for body text.
- **Minimum contrast** for body text is 4.5:1; for large text (18pt+) and UI components, 3:1.
- **Focus states** must be visible and operate via keyboard.
- **Touch targets** minimum 44×44px on mobile.
- **Motion** must respect `prefers-reduced-motion`.
- **Status and meaning** never communicated by colour alone — always paired with text, icon, or position.

Every component spec includes an Accessibility section flagging compliance, contrast ratios where colour pairings matter, keyboard handling, and screen reader behaviour. Anything borderline is flagged for review before locking.

Borders, dividers, icons, and decorative elements *can* use any grey (Grey 2 is the typical divider colour, for example) — the floor only applies to text.

---

## 1. Type scale

### Approach decisions ✅

- **Fixed per-breakpoint sizes.** No fluid `clamp()` scaling for v1.
- **No line-height tokens.** Use Figma's `AUTO` everywhere; framework CSS configured to mirror Figma's auto behaviour. Per-instance leading exceptions become local CSS overrides on the component.
- **No letter-spacing tokens.** Default to 0 everywhere; per-instance exceptions become local CSS overrides.
- **Per-brand fonts via brand mode.** Same role names work across all facias; the font family changes per brand.
- **Same sizes across all brands.** Brand differences are font family + weight, not size.

### Primitives — sizes 🟡

Sizes in `pt` (rendered as `px` on web).

| Token | Value |
|---|---|
| `type-size-10` | 10pt |
| `type-size-12` | 12pt |
| `type-size-14` | 14pt |
| `type-size-16` | 16pt |
| `type-size-20` | 20pt |
| `type-size-24` | 24pt |
| `type-size-28` | 28pt |
| `type-size-32` | 32pt |
| `type-size-36` | 36pt |
| `type-size-40` | 40pt |
| `type-size-48` | 48pt |

### Primitives — weights 🟡

Numeric to keep brand-agnostic. Each facia uses a subset based on what reads well in that font.

| Token | Weight |
|---|---|
| `type-weight-light` | 300 |
| `type-weight-regular` | 400 |
| `type-weight-medium` | 500 |
| `type-weight-semibold` | 600 |
| `type-weight-bold` | 700 |

### Primitives — font families (per facia) 🟡

| Token | Debenhams | Boohoo/MAN | PLT | KM | Others |
|---|---|---|---|---|---|
| `font-family-base` | Geologica | Montserrat | Roboto | Jost | TBD |

Falls back to a system stack of `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif`.

### Semantic roles 🟡

This is the role set, derived from your existing Checkout-2026 styles and extended for things the existing file doesn't cover (display/hero sizes, micro). Role names are not bound to brand or font — the font swap happens automatically via brand mode.

| Role | Mobile | Desktop | Default weight | Notes |
|---|---|---|---|---|
| `display-lg` | 32pt | 48pt | semibold | Hero / marketing pages |
| `display-md` | 28pt | 40pt | semibold | Section openers |
| `display-sm` | 24pt | 32pt | semibold | Editorial leads |
| `heading-xl` | 20pt | 28pt | semibold | Page titles |
| `heading-lg` | 18pt | 24pt | semibold | Section titles |
| `heading-md` | 16pt | 20pt | semibold | Subsection titles |
| `heading-sm` | 16pt | 16pt | semibold | Small headings, card titles. Matches existing "Header 1" |
| `heading-xs` | 14pt | 14pt | semibold | Inline section labels. Matches existing "Header 2" |
| `body-lg` | 16pt | 16pt | regular* | Long-form body |
| `body-md` | 14pt | 14pt | regular* | Default body. Matches existing "Body M - Light/Reg" |
| `body-md-strong` | 14pt | 14pt | semibold | Emphasis. Matches existing "Body M - Bold" |
| `body-sm` | 12pt | 12pt | regular* | Compact body |
| `caption` | 12pt | 12pt | light* | Captions, T&Cs, legal. Matches existing "Caption" |
| `micro` | 10pt | 10pt | regular* | Smallest legal/micro labels |

\* Default weight that each brand mode resolves: Debenhams maps `regular` → Light (because Geologica reads as default at Light), Boohoo maps `regular` → Regular Montserrat, etc. This keeps role names brand-agnostic while letting each font present at its right "default" weight.

### Per-role weight resolution per brand

| Role | Debenhams (Geologica) | Boohoo/MAN (Montserrat) | PLT (Roboto) | KM (Jost) |
|---|---|---|---|---|
| `body-md` | Light | Regular | Light | Light |
| `body-md-strong` | SemiBold | SemiBold | Regular | SemiBold |
| `heading-*` | SemiBold | SemiBold | Regular | SemiBold |
| `caption` | Light | Regular | Light | Light |

All brands use the same role sizes. Differences across brands are font family + weight only, not size. If a brand's font visually demands a size shift in future, we address that as a brand-mode override at the role layer — but the default is consistency.

---

## 2. Spacing scale ✅

4pt base. Named by px value, not t-shirt sizes.

| Token | Value | Common use |
|---|---|---|
| `space-0` | 0 | Reset |
| `space-2` | 2pt | Hairline gaps |
| `space-4` | 4pt | Tight inline gaps (icon + label) |
| `space-8` | 8pt | Tight component padding |
| `space-12` | 12pt | Standard inline gap |
| `space-16` | 16pt | Default component padding, default mobile margin |
| `space-20` | 20pt | Section internal padding |
| `space-24` | 24pt | Default desktop margin (small), section separation |
| `space-32` | 32pt | Section breaks |
| `space-40` | 40pt | Major section breaks |
| `space-48` | 48pt | Layout-level spacing |
| `space-64` | 64pt | Hero/layout breathing room |
| `space-80` | 80pt | Large layout |
| `space-96` | 96pt | Desktop margin at 1440+ (rounded from 95pt to align to 8-multiples) |
| `space-128` | 128pt | Reserved for editorial layouts |

---

## 3. Radius scale ✅

Default 4pt. Square radius is a **brand-mode option** — any facia can opt into it.

### Primitives 🟡

| Token | Value |
|---|---|
| `radius-0` | 0 |
| `radius-2` | 2pt |
| `radius-4` | 4pt |
| `radius-8` | 8pt |
| `radius-16` | 16pt |
| `radius-full` | 9999pt (pill / circle) |

### Semantic 🟡

| Role | Default mapping | Square-mode mapping |
|---|---|---|
| `radius/default` | `radius-4` | `radius-0` |
| `radius/lg` | `radius-8` | `radius-0` |
| `radius/pill` | `radius-full` | `radius-0` |

Square-mode is an opt-in per facia. Currently used by:
- PrettyLittleThing
- The Brand Room

Any other facia can adopt it in future without architectural change — it's a token mapping swap, not a code change.

---

## 4. Border-width scale ✅

| Token | Value | Use |
|---|---|---|
| `border-0` | 0 | Reset |
| `border-1` | 1pt | Default — borders, dividers, line icons |
| `border-2` | 2pt | Emphasis (rare — focus rings, selected states) |

| Role | Value |
|---|---|
| `border-width/default` | `border-1` |
| `border-width/emphasis` | `border-2` |
| `border-width/focus` | `border-2` |

---

## 5. Elevation / shadow ✅

**No shadow scale.** Aesthetic is flat. Borders and surface-tone shifts carry hierarchy. If a future component genuinely needs elevation, we propose a token then.

---

## 6. Breakpoints ⏳ TBD

Deferred. The Chrome DevTools defaults I previously had here are *not* the live site's actual breakpoints — they're just the Figma frame sizes used for design exploration.

**What we know:**
- Designers work primarily at **390px (mobile)** and **1440px (desktop)** frames in Figma
- Live site's actual breakpoint behaviour is inconsistent (per `01-decisions.md`: "different components break at different points unpredictably")
- The 1440+ wide-screen margin model (`space-96` each side, content scales inside the container) is locked from the PLP exploration

**What's deferred:**
- The full named-breakpoint set for the new system
- Layout-zone definitions
- Component-internal vs layout-level breakpoint policy

We'll define this properly as part of the DS work, once the component audit reveals real reflow needs. Until then, components will be specced as fluid where possible, with any breakpoint dependencies noted per component for later normalisation.

---

## 7. Semantic colour layer 🟡

Primitives locked in `03-tokens.md`. Mode-invariant tokens (greys, white, black, status) shared across all facias. Brand-specific tokens swap per facia.

### Brand slot structure (12 slots per facia, confirmed from Debenhams + Boohoo Figma frames)

| Slot | Debenhams | Boohoo |
|---|---|---|
| Brand-primary | `#7be7d8` Primary Aqua | `#f8b5cc` Pink |
| Brand-action | `#00787d` CTA Aqua | `#bb305f` CTA Pink |
| Brand-action-pressed | `#00565a` CTA Aqua TD | derived TBD |
| Brand-neutral | `#e8f4f2` Aqua Neutral | `#f1dce3` Pink Neutral |
| Brand-light-4 | `#e6fffc` | `#ffe9f0` |
| Brand-light-3 | `#d6fff9` | `#ffe0eb` |
| Brand-light-2 | `#b8fdf4` | `#fcd3e1` |
| Brand-light-1 | `#9dede2` | `#ffc2d7` |
| Brand-dark-1 | `#76decf` | `#eea5be` |
| Brand-dark-2 | `#70beb3` | `#ea92b0` |
| Brand-dark-3 | `#529c92` | `#dd789b` |
| Brand-primary-dark | `#1e6f63` | `#cb4870` |

The other 14 facias populate the same 12 slots when audited. ⏳

### Semantic tokens — text

Body text minimum-contrast floor is Grey 5. No body text uses Grey 4 (accessibility fail).

| Token | Maps to | Use |
|---|---|---|
| `text/primary` | Soft Black `#0f0f0f` | Default body, headings |
| `text/secondary` | Grey 5 `#6b6b6b` | Supporting body, captions, T&Cs |
| `text/disabled` | Grey 3 `#b5b5b5` | Disabled UI text |
| `text/inverse` | White `#ffffff` | Text on dark surfaces |
| `text/on-action` | White `#ffffff` | Text on action surfaces (CTAs) |
| `text/link` | Brand-action | Links |
| `text/link-hover` | Brand-primary-dark | Links on hover |
| `text/error` | Red `#d33f3f` | Error messaging |
| `text/success` | derived from Green | Success messaging |
| `text/warning` | derived from Yellow | Warning messaging |

### Semantic tokens — surface

| Token | Maps to | Use |
|---|---|---|
| `surface/page` | White | Default page background |
| `surface/sunken` | Grey 05 `#fafafa` | Subtle inset (form-field backdrop) |
| `surface/raised` | White, with border | Cards, modals |
| `surface/inverse` | Soft Black | Inverse sections |
| `surface/overlay` | Black @ 60% | Modal scrim |
| `surface/action` | Brand-action | Primary CTAs |
| `surface/action-hover` | Brand-primary-dark | CTA hover |
| `surface/action-pressed` | Brand-action-pressed | CTA active/pressed |
| `surface/action-disabled` | Grey 2 `#e7e7e7` | Disabled CTA |
| `surface/accent` | Brand-primary | Accent fills (badges, highlights) |
| `surface/accent-subtle` | Brand-light-3 | Subtle accent surfaces |
| `surface/error` | Red Light `#fff2f2` | Error backgrounds |
| `surface/success` | Green Light `#eaf6ea` | Success backgrounds |
| `surface/warning` | Yellow Light `#fffbe6` | Warning backgrounds |

### Semantic tokens — border

| Token | Maps to | Use |
|---|---|---|
| `border/subtle` | Grey 2 `#e7e7e7` | Default divider, low-emphasis border |
| `border/default` | Grey 25 `#d6d6d6` | Standard border (cards, inputs) |
| `border/strong` | Grey 4 `#767676` | Emphasised border |
| `border/action` | Brand-action | Secondary button border, focused input |
| `border/focus` | Brand-action | Focus ring |
| `border/error` | Red | Error input border |

### Semantic tokens — icon

Icons can use Grey 4 since they're not subject to text contrast rules.

| Token | Maps to | Use |
|---|---|---|
| `icon/primary` | Soft Black | Default icon colour |
| `icon/secondary` | Grey 4 `#767676` | De-emphasised icons |
| `icon/disabled` | Grey 3 | Disabled icons |
| `icon/inverse` | White | Icons on dark surfaces |
| `icon/on-action` | White | Icons on action surfaces |
| `icon/action` | Brand-action | Active / accent icons |

### Brand mode mechanics

Each `brand-*` semantic token resolves per mode. Greys, white, black, and status colours are mode-invariant.

- `surface/action` in Debenhams mode → CTA Aqua
- `surface/action` in Boohoo mode → CTA Pink
- `text/primary` in any mode → Soft Black

Implemented as CSS custom properties scoped by `[data-brand="debenhams"]`, `[data-brand="boohoo"]` etc. on a root element. The same component renders correctly in any brand context.

---

## 8. Icon sizes 🟡

| Token | Value |
|---|---|
| `icon-size-12` | 12pt |
| `icon-size-16` | 16pt |
| `icon-size-20` | 20pt |
| `icon-size-24` | 24pt |
| `icon-size-32` | 32pt |
| `icon-size-48` | 48pt |

All icons drawn at `border-1` (1pt stroke).

---

## 9. Z-index 🟡

| Token | Value |
|---|---|
| `z-base` | 0 |
| `z-raised` | 10 |
| `z-dropdown` | 100 |
| `z-sticky` | 200 |
| `z-banner` | 300 |
| `z-overlay` | 400 |
| `z-modal` | 500 |
| `z-popover` | 600 |
| `z-toast` | 700 |
| `z-tooltip` | 800 |

---

## 10. Motion 🟡

| Token | Value | Use |
|---|---|---|
| `motion-duration-fast` | 100ms | Micro (button press) |
| `motion-duration-base` | 200ms | Default (hover, fade, modal open) |
| `motion-duration-slow` | 300ms | Larger transitions (drawer slide) |
| `motion-easing-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default |
| `motion-easing-emphasised` | `cubic-bezier(0.3, 0, 0.8, 0.15)` | Attention-pulling |

All transitions respect `prefers-reduced-motion`.

---

## Deliberately not in this doc

- **Grid system specifics** (column count, gutters per breakpoint inside layout zones) — needs design exploration before locking
- **Component-specific tokens** — defined in each component spec
- **Per-facia brand colour values for the unconfirmed 14** — captured as we audit each one
- **Specific weight per role per brand for facias beyond the 5 in Checkout-2026** — captured as we audit each one
