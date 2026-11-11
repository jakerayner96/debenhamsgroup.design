---
name: persona-test
description: Use whenever Jake asks to test a prototype, page, flow or live site "against the personas" (e.g. "test against the personas for Debenhams", "run the boohoo personas on this", "test this as Helen", "persona test the PDP"). Runs the prototype as each of that site's customer personas from the Debenhams Group design system (Meet our customers: 5 sites × 8 personas × 8 scenarios): their device, size, payment and budget, walks every scenario's journey, checks each "what to watch for", follows the ground rules, and writes a DS findings report with severities + screenshots, logged on the DS site (#persona-tests).
---

# Persona test: run a prototype as our customers

The personas live in the design system, one source: `assets/ds/personas-data.js` in github.com/jakerayner96/debenhamsgroup.design (site: jakerayner96.github.io/debenhamsgroup.design/#personas, test page #persona-tests). Sites: `debenhams`, `karenmillen`, `boohoo`, `plt`, `boohooman` (aliases: debs, km, bh, bm, prettylittlething). Each persona has 8 scenarios: 5 everyday journeys, then Christmas, Post-Christmas sale and Black Friday. Each scenario has a goal, a journey (steps) and "what to watch for" (the checks).

## 1. Set up
1. Clone or pull the DS into the scratchpad (never ask about Desktop permissions): `git clone https://github.com/jakerayner96/debenhamsgroup.design.git` or `git pull`.
2. Work out from Jake's words:
   - **Site**: the brand named. If none is named, use the prototype's `?brand=` / `data-brand`, otherwise ask.
   - **Target**: the prototype URL or repo path he gave, or the prototype in the conversation. If there is none, use the DS master prototype (`projects/master/`) for that brand. Serve local repos over HTTP (`python3 -m http.server`).
   - **Scope**: all 8 personas and all 64 scenarios by default. Narrow it when he names personas ("as Helen and Donna") or scenario types ("Black Friday only" = `--k bf`; everyday / christmas / sale / bf).
3. Print the brief and follow it exactly: `node tools/persona-test/brief.mjs <site> [ids] [--k ...]`. Use `--json` for machine use and `--list` for the ids. The brief holds the ground rules, each persona's profile and test identity, the device to run as, the questions they'd ask a shopping agent, their last live finding, and every scenario's goal, journey and checks.

## 2. Run each persona
- **Be the persona.** Open the target on their device: `tools/persona-test/snap.mjs` exports `open(url, 'phone'|'tablet'|'laptop')`, which uses Playwright device emulation. Never use headless Chrome `--window-size` under 500px. App shoppers run on the app build if the prototype has one, otherwise on phone web (say which). Catch-all personas (Joanne, Emma, Chelsea, Amber, Ashley) rotate device, payment, size and code use each run, and the brief picks the device.
- **Walk the journey** step by step with their size, budget, payment and code habits. Screenshot each step that matters into `persona-tests/<site>-<date>/shots/`.
- **Answer every "what to watch for"** as pass or issue, with evidence (what's on screen, the numbers). Re-check the persona's last live finding (for example "Deliver+ pre-added to a £44 bag") on the prototype.
- **Agent features:** if the prototype has the shopping agent or Ask Deb, ask the persona's three agent questions word for word and judge the answers.
- **Ground rules always apply:** empty the bag first, never use real credentials or personal or payment details (use the persona's test identity from the brief), stop at the payment step and never submit, and pause for Jake's approval before applying codes, deleting items or any payment step on a live site.
- If a prototype doesn't cover a step (no checkout page, say), mark the scenario `blocked` with the reason. Don't invent results.
- If a category is missing, record it as a search-relevance / empty-state finding, as the source notes say.
- Run personas in parallel subagents only if Jake asks for speed. Otherwise run them in order.

## 3. Severity (same scale as the live runs)
- **CRITICAL**: the shopper pays more than they chose, or loses money or trust. For example, a membership or add-on added to the total without being chosen, a wrong total, or a blocked purchase.
- **HIGH**: a pre-selected paid option, a misleading price or code, a broken step in the journey, or missing delivery / returns info at the point of decision.
- **MEDIUM**: friction or unclear copy that slows the persona but doesn't stop them.
- **LOW**: polish.

## 4. Report and log
1. Write `results.json` in the shape documented at the top of `tools/persona-test/report.mjs`: site, prototype, url, date, a one-paragraph summary, and per persona the device and the scenarios (`i` = scenario index 0–7, outcome pass/issue/blocked/skipped, notes, findings with sev, text and shot).
2. Build the report: `node tools/persona-test/report.mjs results.json <project>/persona-tests/<site>-<date>.html --log`. It's a DS page with tokens, components and the Persona card in the fascia mode. `--log` adds the run to `assets/ds/personas/runs.js`, which the DS #persona-tests page lists.
3. Put the report and shots in the prototype's repo when it has one (`projects/<name>/persona-tests/`), otherwise in the DS repo. Commit and push only when Jake asks. Otherwise tell him it's ready to push.
4. Reply with the tally (e.g. "64 scenarios · 1 critical · 4 high"), the top findings in one line each, and the report link.

## Don'ts
- Never reword persona copy. The cards are the PDF word for word, and the scripts are the source scenario pages word for word.
- Never edit `personas-data.js` by hand to make a test pass. If the persona data needs changing, that's a DS change, which needs a changelog entry and Jake's go-ahead.
- Don't claim a scenario passed without having walked it.
