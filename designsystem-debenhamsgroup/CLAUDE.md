# CLAUDE.md

Project-specific guidance for Claude Code (or any AI assistant working in this repo).

## Start here

**Before doing anything**, read these files in order:

1. `.context/README.md` — context folder index
2. `.context/08-build-context.md` — what's been built, what's next
3. `.context/01-decisions.md` — locked architectural decisions
4. `.context/07-foundations.md` — token system, type, spacing, radius, semantic colour layer

These four files give you 90% of what you need. The remaining `.context/` files are reference material for specific topics.

## What this project is

A design system for the Debenhams Group estate (Debenhams, Boohoo, BoohooMAN, PLT, Karen Millen, plus 11 other facias). The deliverable is **debenhamsgroup.design** — a code-first design system website that serves as the source of truth, with the Figma library generated downstream.

## Who you're working with

Jake Rayner — designer (not a developer). He drives the design and architectural decisions; you handle the implementation. Explain in plain language. Assume no developer knowledge unless he demonstrates otherwise.

## Working principles

- **Lean over heavy.** Small team, small repo. Push back on over-engineering.
- **Components consume semantic tokens only.** Never reference primitives directly in components. Never hardcode colour, font, or radius values.
- **AA accessibility is the floor.** Body text floor is Grey 5. Focus states mandatory. Touch targets 44×44 min. Status never communicated by colour alone.
- **Brand mode at runtime via `<html data-brand="...">`.** This is the only mechanism. Don't introduce per-brand CSS files or component variants.
- **Docs page = component spec.** When you add a component, you also add `apps/docs/content/docs/components/<name>.mdx`. The two ship together.
- **No dark mode.** Decided against. Don't introduce it.
- **No shadow tokens.** Aesthetic is flat. Hierarchy via borders and surface tones.

## Tech stack

- React 18 + TypeScript
- Tailwind v3 (NOT v4 — devs are on v3, don't migrate)
- Next.js 15 + App Router
- Fumadocs (for the docs site)
- pnpm workspaces (no Turborepo for v1)

## Adding a new component

1. Inspect the Figma node (use Figma MCP if available)
2. Create files under `packages/react/src/components/<Name>/`:
   - `<Name>.tsx` — the implementation
   - `<Name>.types.ts` — the TypeScript types and props interface
   - `index.ts` — the re-exports
3. Export from `packages/react/src/index.ts`
4. Write `apps/docs/content/docs/components/<name>.mdx` covering:
   - What it is, when to use, when not to use
   - Variants and states
   - API table
   - **Accessibility section** (mandatory)
   - Source code reference
5. Add to `apps/docs/content/docs/components/meta.json` for sidebar order
6. Test it renders in `localhost:3000`

## Adding a new brand

1. Add an entry to `brandModes` in `packages/tokens/src/brand-modes.ts`
2. Add the `[data-brand="..."]` block in `packages/tokens/src/tokens.css`
3. (Optional) Add a brand-specific primitive colour family in `packages/tokens/src/colour.ts`
4. Update `apps/docs/content/docs/brand/overview.mdx`

## Commands

```bash
# Install all dependencies (first time)
pnpm install

# Start the docs site at localhost:3000
pnpm dev

# Typecheck everything
pnpm typecheck
```

## When in doubt

Ask Jake before changing architecture, adding dependencies, introducing new patterns, or making decisions that affect more than one component. He's the design owner; you're the implementer.

If something feels under-specified, push back rather than guessing. Better to clarify than to ship something that needs unwinding.
