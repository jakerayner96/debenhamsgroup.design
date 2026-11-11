# Session log 11 Nov 2026: Customer personas (Meet our customers)

**Brief (Jake):** build the "Meet our customers" PDF into the DS, with a dedicated section and each brand's personas on its brand page. Copy identical to the PDF: no rewording, nothing added or removed. Make it interactive. We'll test prototypes against the personas ("test against the personas for Debenhams" should just work). Also a deck in the AI Generated Badge deck style.

## Source
- `assets/ds/personas/meet-our-customers.pdf` (Chromium print, 9 Oct 2026; one 930×7026pt page). Text was parsed by position (pypdf visitor). Portraits are vector art, rendered with a PDFKit Swift script at 6× (432px PNG, `assets/ds/personas/portraits/<site>-<id>.png`).
- The PDF links to 10 claude.ai artifacts (shared in the org). The 5 "<site> test personas and scenarios" pages were read and run offline in Playwright (network blocked) to get their final data: goal / journey / watch-fors per scenario, ground rules, share note, test identity, shopping-agent questions, email times. The 5 "live results" pages return 404 for this account, so they are links only, as in the PDF.
- Cross-check: every PDF description, scenario title and value equals the source pages. The only differences: chips carry "Size " in the PDF; the PDF wraps "first-time". All 1,055 card strings rendered on the site were found in the PDF text.

## Built
- **Data:** `assets/ds/personas-data.js` (`window.DG_PERSONAS`, GENERATED, don't hand-edit): meta (intro, stats, legend, footnote) + 5 brands × 8 personas. The card fields are the PDF. `test` = the source pages.
- **Component:** Persona card `.persona` (+ `.persona-av`, `.persona-legend`, `.persona-grid`) in components.css. Catalogue: new group Research › Persona card. Tokens: `--season-*`, `--sev-*`, and `--persona-hd` / `--persona-accent` declared on `:root,[data-brand]` (on :root alone the var() freezes to Debenhams). Drop-in `assets/ds/personas.js`.
- **Site:** Customers sidebar group. #personas (hero, count-up stats, 40-portrait mosaic, site tabs, season filter, all 40 cards, footnote, PDF), #pp-<site> (fascia hero, share bars, cards; setBrand on load), #persona-tests (builds the Claude Code line + ground rules + run log), and a Customer profiles section on the 5 Brand Centre pages (before Sub-brands). Card ids: pc- (overview), ps- (site page), bc- (brand centre).
- **Testing:** `~/.claude/skills/persona-test/SKILL.md` (copy in `tools/persona-test/`): brief.mjs (test script), snap.mjs (device emulation), report.mjs (DS findings report, `--log` → `assets/ds/personas/runs.js`).
- **Deck:** `projects/personas-deck/` (48 slides, generated from the data).

## Open
- Figma: the Persona card is not in the Debenhams Design System library yet (code only). Next: a board + component set (typical / cohort / catch-all × fascia), then figma-lib.js.
- Scenario rows open the source pages' test script (goal · Journey · What to watch for). That text isn't on the PDF card, but it is the PDF's linked scenario pages word for word. Jake to confirm he wants it shown (it's `scripts:false` per card to switch off).
