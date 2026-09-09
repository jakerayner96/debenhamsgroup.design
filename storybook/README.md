# DG Group Design System — Storybook

Our own Storybook of the Debenhams Group component library, built to hand to the front-end team.
It renders the **canonical CSS** (`../assets/ds/tokens.css` + `components.css`) as plain HTML stories,
one per component variant, themed by the same `fascia` toolbar global the front-end Storybook uses
(`web-storybook.jamesb.play.dbztech.net`).

- **Source of truth:** `../assets/ds/catalogue.js` — one entry per component (summary, when to use, avoid,
  anatomy, variants as HTML, matching front-end component + status). The site's Component library pages
  render from the same file. `npm run gen` regenerates `stories/` from it; never edit `stories/` by hand.
- **Grouping:** `DG/<Group>/<Component>` — Actions · Forms · Feedback · Product · PDP modules · Navigation ·
  Overlays & bag · Chips & pills · Account · Layout.
- **Docs tab** of every component: what it is, when to use, anatomy, CSS class, Figma node, and the
  front-end counterpart with alignment status (`match` / `partial` / `ours`).
- **Introduction** page: the full front-end → DG overlay table and the theme-variable → token map.

## Run

```
cd storybook
npm install
npm run storybook          # dev server on :6006 (regenerates stories first)
npm run build-storybook    # static build → dist/ (committed — Pages serves it)
```

Requires Node 20+. `dist/` is committed so GitHub Pages serves it at https://jakerayner96.github.io/debenhamsgroup.design/storybook/dist/ — rebuild and commit after changing the catalogue. `node_modules/` and `stories/` are not committed.

## For the front-end team

Implement each `DG/…` story as the React/Tailwind component named in its Docs tab, keeping the variant names.
Where a DG component has no front-end counterpart (`ours`), it is a new component; where the status is
`partial`, the Docs note says which states to add on which side. Token names to target are in the
Introduction table — the intent is that the front-end theme file gains our semantic names, not that either
side re-skins by hand.
