# Persona test

Test any prototype against a site's customer personas: the 40 personas from "Meet our customers" (5 sites × 8 personas × 8 scenarios).

- **Ask Claude Code:** "test <prototype> against the personas for Debenhams". The `persona-test` skill (`~/.claude/skills/persona-test/SKILL.md`, a copy is here as `SKILL.md`) runs it. The DS page **#persona-tests** builds that line for you: pick the site, the personas and the scenario types.
- **Data:** `assets/ds/personas-data.js`, the one source. Card copy is the PDF word for word. `test` holds the linked scenario pages: goal, journey, what to watch for, ground rules and test identities.
- `brief.mjs <site> [ids] [--k everyday,christmas,sale,bf] [--json|--list]`: the test script for a run.
- `snap.mjs <url> <out.png> [phone|tablet|laptop] [--full]`: a screenshot with real device emulation. `import { open }` to drive a journey.
- `report.mjs <results.json> <out.html> [--log]`: the findings report (a DS page with the Persona card). `--log` adds the run to `assets/ds/personas/runs.js`, which the site's run list shows.
