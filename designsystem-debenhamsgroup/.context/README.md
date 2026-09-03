# .context/ — Master plan for AI collaborators

This folder contains the master plan and decision history for the Debenhams Group design system. It exists for two reasons:

1. **Continuity across sessions** — Claude Code, Cursor, or any other AI tool can read these files at the start of a session and pick up exactly where the last session left off.
2. **Human onboarding** — a new contributor (human) can read these files in order and understand what's been built, why, and what's next.

## Read these files in order

1. **`00-readme.md`** — overview and phase tracker
2. **`01-decisions.md`** — every locked architectural and process decision
3. **`02-figma-audit.md`** — diagnosis of the existing Debenhams Figma DS file
4. **`03-tokens.md`** — colour primitives (locked) and outstanding token decisions
5. **`04-live-audit.md`** — what we've found from auditing the live sites (mostly deferred)
6. **`05-methodology.md`** — how the audit is being conducted
7. **`06-references.md`** — design systems and brands that inspire this work
8. **`07-foundations.md`** — type, spacing, radius, border, breakpoints, semantic colour layer
9. **`08-build-context.md`** — what's been built so far in this repo, what's next

## How to use these docs

**At the start of a new AI session:**

> "Read everything in `.context/` so you have the full picture, then we'll continue building components."

**When making new decisions:**

Update `01-decisions.md` (and other relevant files) to reflect them. Don't let decisions live only in chat — they get lost.

**When adding components:**

Each new component should be documented in `apps/docs/content/docs/components/<name>.mdx`, not in this folder. This folder is for *project-level* context (decisions, architecture, audit findings), not for individual component specs.

## What ISN'T in here

- Component specs (those live as docs site pages in `apps/docs/content/docs/components/`)
- Code (that lives in `packages/`)
- Live site audit findings (deferred — see `04-live-audit.md` for why)

## Anything missing?

If a decision was made in chat and isn't reflected here, flag it. The whole point of these files is that they're complete and current.
