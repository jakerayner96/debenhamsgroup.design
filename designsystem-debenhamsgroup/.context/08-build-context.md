# 08 — Build context

Current state of the repo and instructions for continuing the work.

---

## What's been built (v0.0.1, scaffold)

A working monorepo with:

- ✅ Architecture decisions all locked (see `01-decisions.md` and `07-foundations.md`)
- ✅ Token system in place: primitives + brand-mode mechanism + CSS variables + Tailwind v3 preset
- ✅ Five facias wired up with at least font + radius:
  - **Debenhams** — full Aqua palette, Geologica font, 4pt radius
  - **Boohoo** — full Pink palette, Montserrat font, 4pt radius
  - **BoohooMAN** — Montserrat font (palette TODO)
  - **PLT** — Roboto font, square radius (palette TODO)
  - **Karen Millen** — Jost font (palette TODO)
- ✅ 11 other facias scaffolded as inheritFrom('Debenhams') placeholders
- ✅ Brand mode mechanism working — `<html data-brand="boohoo">` swaps the theme
- ✅ Mode-invariant tokens (text floor at Grey 5, status colours, surface defaults) locked
- ✅ AA accessibility baseline documented system-wide
- ✅ Next.js + Fumadocs docs site running with left-sidebar IA (Porsche-style)
- ✅ Docs pages drafted for: welcome, installation, brand overview, foundations (colour, typography, spacing, radius, borders, motion, accessibility)
- 🟡 Button — placeholder implementation only, awaiting Figma audit

## Repo structure

```
designsystem-debenhamsgroup/
├── apps/
│   └── docs/                            # The docs website
│       ├── app/
│       │   ├── layout.tsx               # Root layout — sets data-brand="debenhams"
│       │   ├── page.tsx                 # Homepage
│       │   ├── global.css               # Imports tokens CSS + Fumadocs UI styles
│       │   ├── docs/
│       │   │   ├── layout.tsx           # Fumadocs DocsLayout (left sidebar)
│       │   │   └── [[...slug]]/page.tsx # Dynamic MDX renderer
│       │   └── lib/source.ts            # Fumadocs source loader
│       ├── content/docs/                # All MDX pages live here
│       ├── next.config.mjs              # MDX + transpilePackages
│       ├── source.config.ts             # Fumadocs content config
│       ├── tailwind.config.js           # Pulls in the tokens preset
│       └── postcss.config.js
├── packages/
│   ├── tokens/
│   │   └── src/
│   │       ├── colour.ts                # Primitives: aqua, pink, neutral, status
│   │       ├── space.ts                 # 4pt-based spacing scale
│   │       ├── radius.ts                # Radius primitives
│   │       ├── border.ts                # Border-width primitives
│   │       ├── type.ts                  # Sizes, weights, font families per brand
│   │       ├── motion.ts                # Durations + easing
│   │       ├── zindex.ts                # Z-index scale
│   │       ├── icon.ts                  # Icon size scale
│   │       ├── brand-modes.ts           # The per-brand mode definitions (TS source)
│   │       ├── tokens.css               # CSS custom properties scoped per brand
│   │       ├── tailwind-preset.js       # Tailwind v3 preset
│   │       └── index.ts                 # Re-exports everything
│   └── react/
│       └── src/
│           ├── components/Button/
│           │   ├── Button.tsx           # Placeholder implementation
│           │   ├── Button.types.ts
│           │   └── index.ts
│           └── index.ts                 # Public exports
├── .context/                            # YOU ARE HERE — master plan docs
├── package.json                         # Monorepo root, workspace declaration
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── .gitignore
└── README.md
```

## Architecture in 60 seconds

**Two-layer token system:**
- **Primitives** — raw values (`aqua.primary`, `space[16]`, `radius[4]`). Named by what they ARE.
- **Semantic tokens** — role-based names (`surface/action`, `text/primary`, `radius/default`). Components consume only these.

**Brand mode mechanism:**
- Active brand is set on `<html data-brand="...">`
- CSS in `tokens.css` defines mode-invariant tokens at `:root`, then per-brand overrides at `[data-brand="boohoo"]` etc.
- The Tailwind preset maps utility classes (`bg-action`, `text-primary`) to CSS variables
- Result: same component renders correctly in any brand context without code changes

**To switch brands at runtime:**
```tsx
<html data-brand="boohoo">  // or "debenhams", "plt", "karen-millen", etc.
```

**Adding a new component:**
1. Create `packages/react/src/components/<Name>/{Name}.tsx, Name.types.ts, index.ts}`
2. Export from `packages/react/src/index.ts`
3. Add docs page at `apps/docs/content/docs/components/<name>.mdx`
4. Add to `apps/docs/content/docs/components/meta.json` for sidebar order

**Adding a new brand:**
1. Add an entry to `brandModes` in `packages/tokens/src/brand-modes.ts`
2. Add the corresponding `[data-brand="..."]` block in `packages/tokens/src/tokens.css`
3. (Optional) Add brand-specific primitive colour family in `packages/tokens/src/colour.ts`

## What's coming next

### Immediate (next session)
- Audit the Button Figma node and write the full Button spec + implementation
- Add Inputs (Figma audit + implementation)
- Add Modals (Figma audit + implementation)

### Short-term (next few sessions)
- Populate the 11 placeholder facias with their fonts and colour primitives
- Build out the foundations into more concrete docs pages with visual swatches/scales
- Add more components: Cards, Badges, Tabs, Accordion, Inputs (Text, Select, Checkbox, Radio, Switch), Toasts, Tooltips

### Medium-term
- A concept "core site" built using the components — single page proving the system works for real layouts
- Gap analysis against the live sites — screenshot the concept site against live, fill missing components
- Differential pass on the 4 other major brands (Boohoo, BoohooMAN, PLT, KM)

### Longer-term
- Production deployment of debenhamsgroup.design (Vercel for v1; potentially internal infra later)
- npm package publishing (when ready: claim `@designsystem-debenhamsgroup` scope on npm)
- Figma library generation downstream of code (the reverse of the failed Figma-first model)

## Open token decisions

These are flagged with `🟡` in `07-foundations.md`. They need locking but aren't blocking initial component work:

- Type weights — confirm Geologica Regular and Medium are licensed (note: all Google Fonts so should be free)
- Per-brand body text size — confirmed: same across all brands, only font/weight differs
- Breakpoints — wiped back to TBD. Define properly as part of DS work later. Designers work at 390 + 1440.
- Brand colour values for the 11 unaudited facias

## How to continue in a fresh AI session

### Option A — Claude Code in VS Code (preferred for ongoing dev)

1. Open VS Code in this repo
2. Install Claude Code extension if not already installed
3. Start a session and prompt:

   > "Read everything in `.context/` and the repo `README.md`, then summarise where we are and what we're working on next."

4. The AI will read all the context docs and know:
   - Architecture decisions
   - What's built and what's not
   - What the next component is
   - Where to put new code, docs, tokens

### Option B — Continue in Claude.ai (this Project)

1. New conversation in this Claude Project
2. The Project already contains the original markdown docs (`00-readme.md` through `06-references.md`)
3. Mention that `07-foundations.md` and `08-build-context.md` also exist in `.context/` in the repo
4. The Project files give the strategic picture; the repo gives the implementation picture

### Option C — Cursor or other AI IDE

Same as Option A. Cursor reads context files automatically when they're in the workspace; just point it at `.context/` and ask it to summarise.

## What I (Claude) would do in your shoes for the very next session

1. Get this repo running locally and confirm the docs site loads
2. Commit to a Git repo (private GitHub or wherever the team prefers)
3. Open a new Claude Code session in VS Code, point it at the repo
4. Send the buttons Figma link again
5. Have Claude Code:
   - Use Figma MCP to inspect the button node
   - Write the proper `Button.tsx` implementation
   - Write the proper `button.mdx` docs page
   - Replace the placeholders

That's the rhythm. Component → spec → code → docs page → see it on localhost:3000 → commit → repeat.

## Things to be careful of

- **Don't edit tokens by guessing.** Each token has a reason. If something feels wrong, check `07-foundations.md` and `03-tokens.md` for the decision history.
- **Don't add brand colours to components.** Components consume semantic tokens (`bg-action`, `text-primary`). Brand colours only ever appear in `brand-modes.ts` and `tokens.css`. This is the rule that keeps multi-brand working.
- **Don't add a component without a docs page.** The two ship together. The docs page IS the spec.
- **AA accessibility is the floor.** No grey below Grey 5 for text. Focus states are mandatory. Touch targets 44×44 minimum.
- **No dark mode.** Decided against. Don't accidentally introduce it.
