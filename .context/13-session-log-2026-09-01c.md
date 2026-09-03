# Session log — 01 Sep 2026, part 3 (the merge: DS monorepo absorbed into index.html)

Supersedes log 12's framing. **Current state of record.**

## The correction (from Jake)

There were two wireframes of the same site: `index.html` (newer, more progressed UI — dark, sidebar, Linear-ish) and the `designsystem-debenhamsgroup/` monorepo (older, more logic — real token architecture, brand modes, docs content, but plain black-and-white Fumadocs UI). The instruction: smash them together into `index.html`, make the monorepo folder redundant, render the index. `debenhamsgroup.design` (this repo / this file) is the website that hosts the design system *and* projects, brand centre, requests.

## What was merged into index.html

- **Full canonical token layer** (from `packages/tokens`), in the wireframe's own idiom: mode-invariant semantic tokens (text/surface/border/icon, spacing, border widths, motion, z-index) at `:root`, plus five live fascia modes as `[data-brand]` overrides. The old thin `--b-*` demo vars are gone; everything (buttons, product card, swatches) consumes the canonical names (`--surface-action`, `--radius-default`, `--w-strong`, `--cta-case`…).
- **Foundations pages, all real now**: Colour (live brand-resolved roles + invariant semantics + neutrals + status + Debenhams/boohoo 12-slot primitive families), Typography (role scale, live specimen per brand, per-fascia weight resolution), Spacing (+ icon sizes, z-index, breakpoints-deferred note), Radius, Borders, Motion, Accessibility (AA baseline). Plus **Using the system** (npm/tokens/tailwind/data-brand story from the monorepo's installation page).
- **Button page**: monorepo spec content merged — full props (incl. tertiary + loading), accessibility table, "still to specify" list, Figma node link (aIHmkCaTy9c5EWOxAGw0So / 9144-1807).
- **Brand Centre**: real logo marks in the estate wall (inverted for dark bg) + the 16-fascia mode table (font / mode state / radius).
- **Changelog feeds** record the merge.
- **Bug fixed in the shell**: in-page anchors (e.g. Button's toc) used to blank every page — `route()` now scrolls within the current page when the hash isn't a page id.

## Conflicts resolved (signed-off Colour Alignment beats the monorepo where they clashed)

- boohoo pressed `#A82A55` (not monorepo's `#A02651`); boohoo light-1 `#FBC7D8`, light-3 `#FEE0EA`.
- Per-brand weight resolution: live values are Deb 300/600, boohoo+BHM 500/700, PLT 400/700, KM 400/600 (07-foundations' proposed table was pre-sign-off).
- PLT page surface `#FFFDF7` — so `surface/page` is brand-overridable, not invariant.
- Flagged, unresolved: disabled button label — golden truth `#767676` (Grey 4) vs DS token `text/disabled` Grey 3. Kept `#767676`, noted on the Button page.
- boohooMAN/PLT/KM carry only their signed-off CTA set; remaining primitive slots inherit Debenhams defaults until audited (only known-good tokens are displayed for them).

## Structure changes

- **Brand slugs standardised, no dashes** (matching the wireframe's existing `data-brand` values): `debenhams, boohoo, boohooman, plt, karenmillen, burton, coast, dorothyperkins, misspap, nastygal, oasis, principles, wallis, warehouse, brandroom, dsgnstudio`.
- **Logos** now at `assets/brands/<slug>.svg` (moved out of the monorepo's public dir). DSGN Studio mark still missing.
- **`07-foundations.md` copied into root `.context/`** — it existed only inside the monorepo and would otherwise be lost when the folder goes. `08-build-context.md` was NOT copied (it documents the retired repo).
- **`designsystem-debenhamsgroup/` is now fully redundant** — nothing references it; everything of value is in `index.html`, root `.context/`, or `assets/`. Safe to delete whenever Jake says (it's untracked, so deletion is permanent — his call, not Claude's). Its React/Next code remains a useful reference for the eventual production build, nothing more.

## Serving

`python3 -m http.server 3000` from the repo root → http://localhost:3000. (HTTP needed for the logo assets; plain file:// works for everything else.)

## Part 4 (same session) — shell restyle per Jake

- **Brand switcher is now a FAB**, fixed top-right: app-icon tile (brand colour + logo mark) showing the current fascia; click pops a speed-dial menu of app icons + labels (scrollable — built for the full fascia list eventually). Sidebar chip row removed. Escape / outside-click closes. This doubles as the interaction prototype for the OptionSwitcher overlay.
- **Hue purge**: base palette is now pure neutral — bg #000000, panels #0A0A0A/#111111, raise #171717, inks #F7F7F7/#B0B0B0/#707070. Aqua stays as the only accent; green/amber status tints stay (semantic).
- **Type**: Inter and Geist Mono removed entirely — the whole shell is Montserrat (400/500/600/700); Archivo Black stays for display. All the previously-mono treatments (tags, kickers, ids, values, code blocks) keep their caps/tracking but render sans.
- **Sizes bumped** ~1px across the board: body 15px, sidebar items 14, ledes 17, tables 14, h1 42, tags/pills up half a point.

## Still open (carried from logs 11/12)

- M-01 master web PLP (Scott's brief, w/c 08 Sep) — needs plt-app-prototype ingested.
- OptionSwitcher overlay; screenshot benchmark pass → v3 crit.
- Git: repo push + Pages; the whole working tree beyond the last commit is uncommitted.
- Token provenance: index.html's token block is now hand-carried; re-wire to the extract-tokens.mjs chain when plt-app-prototype lands.
