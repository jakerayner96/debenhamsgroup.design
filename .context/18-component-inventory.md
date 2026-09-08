# 18 · Component inventory — the whole jakerayner96 estate (08 Sep 2026)

Every UI component used across the 10 sibling repos, reconciled against the live DS (`assets/ds/`). Four full agent reads sit in `.context/inventory/01–04*.md` (≈310KB, verbatim CSS + file:line). This file is the consolidated catalogue and the decisions taken.

Repos read: core-pdp-2026 · vto-prototype · checkout-2026-promo-gift-card · Group-Design-System (GDS) · colour-alignment-prototype (CA, signed-off colour truth) · plt-app-prototype (RN, token model in `src/theme/brands.ts`) · THEBRANDROOM (Next.js, 6th fascia) · ai-generated-badge (deck) · debenhams-design-system-scraper (schema) · UX-Design-Request (form kit).

**Not done yet — blocked:** the page-by-page read of the Figma DS file (aIHmkCaTy9c5EWOxAGw0So, page 470-770). The Figma connector disconnected this session; re-authorise it in claude.ai connector settings and the pass runs next.

## 1. Status legend
**have** = already in `components.css` · **ported 08 Sep** = added this round (C-09 → C-18 on the site) · **backlog** = catalogued, not yet in the DS (fascia-specific, dev tooling, or needs a Figma check first).

## 2. Catalogue

### Buttons & CTAs
| Component | Sources | Status |
|---|---|---|
| Button — primary / secondary | CA brand-colours (golden), GDS `.btn`, app `Button.tsx` | have (C-01) |
| Button — **Buy It Now**, **tertiary**, **tertiary XS**, **text only** | CA matrix `BTNS` (2345-2472), GDS components.css 39-105, app Button.tsx | **ported** (`.bd.buy/.ter/.xs/.txt`) |
| Button states — pressed / disabled / **spinner (Figma 12533:14818: label→arc, fill→neutral)** | CA matrix, checkout `.btn.is-loading` | **ported** |
| Button sizes sm (6/12, 12px) · md (8/16, 14/24) · icon slot 20/24 | VTO `.btn-addphoto/.btn-tbag/.btn-pink`, checkout `.btn-pay` | **ported** (`.bd.sm/.md`, `.bd img`) |
| **Pay button (navy #00112C, 8px radius)** | checkout K3, CA `.co-btn-pay` | **ported** (`.bd.pay`) |
| **Payment / wallet buttons** PayPal · Pay Later · Apple Pay · Google Pay · Klarna · Clearpay · mini · glass | GDS `.pay-btn` 107-136 + `assets/payments/*` (copied to `assets/ds/icons/payments/`), app PaymentButton.tsx (DS 9144-1931), CA wallets | **ported** (`.pay`) |
| Collapsible inline Apply (width morph) | checkout `.btn-inline` | backlog (behaviour) |
| Text link (`--link-ink/--link-w`; KM 500) | CA `.link` | **ported** (`.lnk`) |

### Forms & controls
| Text field — floating label (default / focus / filled / error) | checkout K10a `.field`, request `input` | **ported** (`.fld`) |
| Select | VTO invisible-native-select-over-label, core-pdp `.cyp .sel`, request `select` | **ported** (`.sel`) |
| Checkbox 24px r3, fill = `--icon-action`; large top-aligned | checkout `.box`, core-pdp `.cb`, CA `.check`, GDS `.seel-banner__check` | **ported** (`.chk`) |
| Radio 26px ring / 14px dot | app SortSheet, request radio card | **ported** (`.rad`) |
| Toggle / switch | P-05 NDD toggle, app FilterPill Switch | **ported** (`.tog`) |
| Quantity stepper 28px (minus→trash at 1) | CA `.qty` (Bag 2026 1234:76756), TBR bag, app bag | **ported** (`.qty`) |
| Promo code / gift card field + Apply (95px) + PIN + type detection | checkout K10, CA `.promo-field`, TBR bag | **ported** field + apply (`.promo`); detection/morph = backlog |
| Static / read-only PSP field (navy set, 8px radius) | checkout K12, CA `.stat-field` | **ported** (`.stat`) |
| Inline field error | checkout K10d | **ported** (`.fld-err`) |
| Stepper / wizard progress · radio card · scope badge · toast (form kit) | UX-Design-Request | backlog (internal tooling) |

### Messaging & feedback
| Banner — success / neutral / error, 4px bar, dismiss, inline action | checkout K11 | **ported** (`.msg`) |
| Toast — bottom black snackbar · top light actionable | core-pdp `.toast`, VTO `.toast` | **ported** (`.toast`, `.toast--top`) |
| Stock alert (red-light, 2px red rule) | CA `.balert` | **ported** (`.alert`) |
| Empty state (32px glyph, 16/23, CTA, recently-viewed rail) | GDS `.empty`, app EmptyState, VTO, TBR | **ported** (`.empty`) |
| Loading status block (pulsing icon, progress, phases) | VTO V12 | backlog (VTO-specific) |

### PDP kit
| Price block — now / was / **save badge** / promo line / OOS label | core-pdp C5, CA `.price-*`, VTO V3, TBR PDP | **ported** (`.price`) |
| Size selector 60×50 — selected / OOS (strike · bell · greyed) / size guide | GDS `.size` (DS 8942-6191), core-pdp C8, VTO V2, CA `.size-btn`, TBR 50px squares, app SizeSelector | **ported** (`.sizes`) |
| Colour image swatches 60×89 (PDP) | core-pdp C7, app 44×58 rail | **ported** (`.cswatch`) |
| Accordion + divider | core-pdp C16, TBR, app Accordion, TBR footer grid-rows animation | **ported** (`.acc`, `.hr`) |
| Section header + product rail / 3-up grid | GDS, core-pdp C19, app SectionHeader, TBR | **ported** (`.sec-head`, `.rail`) |
| USP box (delivery / returns rows) | GDS `.usp-box` (DS 3619-10541), core-pdp `.uspbox`, TBR | **ported** (`.usp-box`) |
| BNPL box + provider chips | GDS `.bnpl`, core-pdp C14, app Bnpl (DS 2969-10048), TBR | **ported** (`.bnpl`) |
| Free-delivery threshold bar / eligible tick | GDS `.threshold` (BBz64OeCbe5TBmYKbCxvCp 38-35751), app, TBR, CA `.free-del` | **ported** (`.thresh`) |
| Deliver+ / SEEL banner (PDP + checkout) and bag module, per-brand lockups | GDS 227-298 + `assets/seel/*` (copied), CA deliver-*, app Seel*, core-pdp C12, VTO V5 | **ported** banner + module (`.dplus`); lockup artwork in `assets/ds/icons/seel/` |
| At-a-glance ticked list · share row · recommendation link chips | core-pdp C15/17/18 | **ported** (`.glance`, `.linkchips`) |
| Gallery + pagination + thumbs + arrows | core-pdp C1, TBR, app | backlog (PDP template work — core-pdp repo) |
| Shop The Look (3 variants) · bundle entry family (11) · set builder · size picker popover | core-pdp C21-C27 | backlog (lives in core-pdp; promote when signed off) |
| Notify-me / back-in-stock form | core-pdp C10 (Figma 1042:66804) | backlog (compose from `.fld` + `.chk` + `.bd`) |
| VTO chip + count badge · takeover · result canvas · wardrobe tile · try-on card | VTO | backlog (VTO project) |

### Overlays & bag
| Bottom sheet / modal shell (scrim, panel, head, scroll body, sticky foot; ≥768 centred card) | core-pdp C24, app BottomSheet, VTO sheets, CA `.bag-sheet` | **ported** (`.sheet`, `.modal`) |
| Bag line item 99×148 | core-pdp C28, VTO V17, CA `.bcard` (+18 variants), TBR, app | **ported** (`.bag-item`); the 18 CA variants = backlog |
| Order summary (rows, discounts, total) | checkout K14, CA, TBR, app | **ported** (`.summary`) |
| Added-to-bag sheet | core-pdp/VTO/CA | compose (`.sheet` + `.bag-item` + `.bd`) |
| Saved card row · selected card · add card tile | checkout K12/K13, CA | backlog (checkout project) |

### Chips, pills, tags
| Chip 40px outlined → ink fill | app Chip, request chip (42 radius) | **ported** (`.chip`) |
| Filter pill 44px shadowed, optional inline toggle | app FilterPill (TBR 739-92209), TBR native-select pills | **ported** (`.fpill`) |
| Tag pill black 24px · count bubble | CA `.tag`, GDS `.acc-row__badge`, VTO | **ported** (`.tagpill`) |
| Save chip (red-light) | CA `.chip-save` | **ported** (`.chip-save`) |

### Account
| Balance card (62.5px numeral, per-brand fill/ink) + View balance | CA `.rewards` 692-718, GDS `.rewards`, VTO V22, app | **ported** (`.acct-card`) |
| Account row (icon puck, label, status/tag) · sign out | CA `.acct-row`, GDS `.acc-row`, VTO, app | **ported** (`.acct-row`) |

### Navigation & chrome
| Glass nav bar / floating tab bar / liquid glass / 6 header patterns | app NavBar, TabBar, AppHeader, header-nav-scroll-pattern-audit.md | backlog (app-native; document only) |
| Brand Room header 56px + 2-level drawer + category tabs + square brand rail + hero family + social scroller + blog cards | THEBRANDROOM | backlog (Brand Room fascia build); square rail **ported** as `.roundel--sq` |
| Search overlay · shop menus · content area formats | app | backlog |

### Badges
| **AI Generated strip** — full-width bottom strip, live text, 10px min, alt-text rule, other badges shift up by strip height, hidden post-ATB, Sponsored→badge in grid view | ai-generated-badge deck (EU AI Act Art.50(4), live 02.08.26) | have (`.badge-ai`) — **spec updated** (`--ai-h`, rules on site C-07) |
| Card tag = fit/range only, never a discount | GDS/app rule | have (documented) |

## 3. Tokens reconciled (into `assets/ds/tokens.css`)
Added per fascia: `--action-buy/-pressed/-disabled`, `--action-disabled-bg/-fg`, `--sec-pressed`, `--sec-disabled-border`, `--surface-neutral/-pressed` (tertiary), `--text-link-pressed/-disabled`, `--tickc`, `--vto`, `--badge-save-bg/-fg`, `--card-bg/-ink/-btn-bg/-btn-ink`, `--page-bg/--panel-bg`, `--dot`, `--new`, `--paypal`, `--dplus-bg/-fg/-link/-check`, fixed checkout set `--navy/--navy-border/--field-grey/--field-border/--field-text`, `--success-bar/-bg`, `--error-bg`, shadows `--shadow-pill/-card/-float/-puck/-tile`, `--ai-h`. Values = CA signed-off (KM #D24508/#892D05 ramp; boohoo black/white), GDS for architecture.

**Open conflicts (decide with Jake):** KM component radius 0 (GDS/app) vs 4px (CA); Debenhams `--w-medium` 600 (GDS) vs 300 (CA, live-verified — adopted); boohooMAN Light 1-3 ramp (GDS #767676/#B5B5B5/#C6C6C6 vs CA #4D4D4D/#808080/#B5B5B5); PLT primary ink warm #FFFDF7 (GDS/app) vs #FFF (CA — adopted); GDS `--seel-check` PLT #5F0000 / MAN #01FE8A unverified; KM Buy It Now uses CTA #892D05 with a disabled state darker than default (Figma anomaly); boohoo/MAN buy/text buttons have no pressed/disabled differentiation (Figma anomaly). Brand Room `--soft-black` is #0F0F0F vs group #242424.

## 4. Provenance map (Figma nodes)
Buttons 12681-158518 · Card 5992-10841 · Size selector 8942-6191 · USP box 3619-10541 · Payment buttons 9144-1931 · BNPL 2969-10048 · Roundels 8469-2351/2307 · Threshold BBz64OeCbe5TBmYKbCxvCp 38-35751/36504 · Deliver+ CQIe2e2c0iagD1T9WjdYsx (PLT 1529-25556, Deb 1529-19109, bh 1529-24658, bm 1529-24155, KM 164-23434; bag module 2903:2410) · Colours aIHmkCaTy9c5EWOxAGw0So (PLT 11904-2395, Deb 11241-47116, bh 11241:47015/12681-158104, KM 11763:2228/12681-158380, MAN 12482:2057/12681-158242) · Bag 2026 CYyGeUDy4w02enV7uFxZ6W (1337:250006 bag, 1337:253191 ATB, 1234:76756 qty, 1337:250678 summary, 1337:250088 card) · Account 2026 2KLlzqIWlDcri8YIHwEd63 · Checkout 2026 WChEtDPH0LcErdYFS9SESn (3990:36587, 3990:58406; spinner 12533:14818) · VTO LxHqA4rFpRYNWJu8vzn18X · Empty pages erREG2vwLzUF2QKTp5Uh6R (3178-24710) · Notify-me 1042:66804 · Icons 470-935 · TBR filter pills 739-92209.

## 5. Bugs found in sources (fix at source)
VTO `--dark-2`/`--grey-1` consumed but undeclared; `.wtile-media.expired` unstyled; toast typo "Virtal" + group-teal link in pink flow. GDS `assets/logos/*.svg` are 0 bytes; `ds-heart-outline` never emitted; KM/boohoo ramps stale. TBR: ~200 inline font decls, 30+ live figma.com/api/mcp/asset URLs (404 outside MCP), inline icons against its own CLAUDE.md, 20px hit areas, Klarna pink #ffb1d2 vs #ffb3c7, dark-mode query on a light design. core-pdp `.cyp .sel` justify typo. app: checkout.tsx not themed; 18 PROVISIONAL colours; SHOW_DEV_CONTROLS=true.
