# Debenhams Group Design System

> ## ⚠️ RETIRED — absorbed into the site on 01 Sep 2026
> Everything of value here (token architecture, brand modes, foundations, docs content) was folded into the repo root: `index.html` + `assets/ds/tokens.css` + `assets/ds/components.css`. This folder is an archived reference — don't run or extend it. See the root `README.md` / `CLAUDE.md` and `.context/13-session-log-2026-09-01c.md` for the record of the merge.

The design system for the Debenhams Group estate — Debenhams, Boohoo, BoohooMAN, PLT, Karen Millen, and 11 other facias.

**Production site (planned):** `debenhamsgroup.design`

---

## What's in this repo

This is a monorepo (one repository, multiple packages inside it).

```
designsystem-debenhamsgroup/
├── apps/
│   └── docs/                 # The website at debenhamsgroup.design (Next.js + Fumadocs)
├── packages/
│   ├── tokens/               # Design tokens — colours, type, spacing, radius, motion
│   └── react/                # React component library — published to npm
└── .context/                 # Master plan + project context for AI collaborators
```

The `tokens` package is the single source of truth for design values. The `react` package consumes those tokens to build components. The `docs` app consumes both to render the documentation site.

## Quick start

```bash
# Install all dependencies (first time only)
pnpm install

# Start the docs site at http://localhost:3000
pnpm dev
```

That's it. Once `pnpm dev` is running, every change to a token or component appears in the browser within a few seconds.

## Working in this repo

### Add a new component

1. Create a folder under `packages/react/src/components/<ComponentName>/`
2. Add `<ComponentName>.tsx`, `<ComponentName>.types.ts`, and `index.ts`
3. Export it from `packages/react/src/index.ts`
4. Add a docs page under `apps/docs/content/docs/components/<component-name>.mdx`

### Add a new token

1. Edit `packages/tokens/src/<category>.ts` (e.g. `colour.ts`, `space.ts`)
2. Tokens are auto-exported via `packages/tokens/src/index.ts`
3. The Tailwind preset picks them up automatically

### Add a new brand mode

1. Add the brand to `packages/tokens/src/brand-modes.ts`
2. Define the mapping for each `brand-*` semantic token
3. Use it in code via `<div data-brand="brandname">`

## Architecture summary

**Two-layer token system:**
- **Primitives** (named by what they are: `primary-aqua`, `space-16`)
- **Semantic tokens** (named by role: `surface/action`, `text/primary`)

**Brand mode mechanism:** semantic tokens that reference a brand colour resolve differently per brand via CSS custom properties scoped to `[data-brand="..."]` selectors.

**Accessibility:** WCAG 2.1 AA throughout. Text floor is Grey 5. No exceptions.

For full architectural detail see `.context/01-decisions.md`.

## Decisions made

See `.context/` for the full master plan. Headlines:

- React + TypeScript + Tailwind v3
- Fumadocs on Next.js 15 for the docs site
- npm package distribution, source visible on the docs site
- Component library is `@designsystem-debenhamsgroup/react`
- Tokens package is `@designsystem-debenhamsgroup/tokens`
- pnpm workspaces, no Turborepo for v1
- Single Light mode (no dark mode for v1)
- Vercel hosting for v1; potentially internal infra later

## License

Internal — Debenhams Group.
