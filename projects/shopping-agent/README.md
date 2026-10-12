# Shopping agent — Debenhams (Google Cloud Shopping Agent, Holiday 2026)

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/shopping-agent/
**Source:** Google Cloud deck "Shopping Agent Holiday Package — Debenhams — 5 Oct", UX workshop 07 Oct (Gemini notes), the dev's `salesAgentConfig` (retrieveConfig, `debenhams_uat`), the dev's `<google-ai-prompts>` + "Ask Debs" launcher markup, the live chat screenshot. No Figma file yet: Google are checking whether a UI kit exists (workshop action, Francesco).

Standard review shell. Debenhams only (workshop decision: Debenhams first, other brands later on their own commerce-search instances). The left panel lists every feature in scope. Clicking one jumps to its page and scrolls to it, then you pick its placement (A / B / C). The panel also edits the config file the devs deploy.

## Scope
In: PDP prompts · Shop similar · Next best action · Autocomplete · Virtual try-on · Custom prompts. The entry point and the chat window are always in.
Out (this phase): AI Overview (separate SKU, CPM) · Compare · Shop the look.

## Placements
| Feature | A | B | C |
|---|---|---|---|
| Entry point "Ask Deb" | 1 · Inside the search box (white DS AI pill, no outline) | 2 · Outside the search box (AI gradient-outline pill) | — |
| Mobile search | Exposed: field under the header, no search icon in the header or field | In the header icons: AI icon beside the search icon | Desktop always exposed |
| PDP prompts | Replaces At a Glance | Above Add to Bag | Below Add to Bag |
| Shop similar | On the PDP image | Under Add to Bag | On PLP cards |
| Virtual try-on | On the PDP image | Under Add to Bag | — |
| Next best action | Above the results | Under sort & filter | In the grid |
| Autocomplete | Replaces the live suggestions | Above them | Below them (before Top Sellers) |
| Custom prompts | Homepage module (image + chips) | Promo strip | Chips on the hero |

Every entry point opens the chat with its query, the same as `window.googleAgent.sendQuery("…")` in production. Mock replies are labelled as mock.

## The deliverable: the config file
- `base-config.json` is the dev's file exactly as it was delivered. `agent.js` (`AG.build`) applies the panel's edits and returns `salesAgentConfig.json`.
- The chat window in `page.html` renders **from that built file**. Every `payload.style` key is set on the window as the custom property of the same name (desktop, then the `mobile` block below 768). The zero-state and text-block styles are applied the same way. What you see is what the file sets.
- The file covers the chat window: settings, style, the components in the zero state (T&Cs text block, hero, intro + prompts) and the rich-content tiles. It is one file for the whole agent. The on-page entry points (PDP prompts component, shop similar / VTO buttons, NBA, autocomplete, custom prompts) are our front end calling `sendQuery`, plus Google's `<google-ai-prompts>` web component.
- **Export** zip = 390 + 1440 full-page PNGs, `config.json` (the shell state), `salesAgentConfig.json`, `HANDOFF.md` (changed keys, chosen placements, the calls) and the page code. The panel also has Download / Copy for the config on its own.

## Copy
Intro, as briefed: "Hi there – I'm Deb, your Debenhams Personal Assistant! Whatever you're looking for, I'll help you find it. I can guide you based on budget, occasion, colour, style, size & more. Let me know what you're shopping for today and we can get started…" ("your shopping" in the brief corrected to "you're shopping".)
- `chat-title` "Debenhams Assistant" → "Ask Deb". The T&Cs line follows the title ("By using Ask Deb…").
- The name is still with the creative director. The dev build says "Ask Debs" and the copy says "Deb". One **Agent name** field drives every entry point.

## Live findings (debenhams.com, 12 Oct, 390 + 1440)
- PDP order: gallery · brand / name · price · colour · size · ADD TO BAG · Deliver+ · delivery box · BNPL · **At a Glance** (ticked list; under the gallery on desktop, after BNPL on mobile) · accordions · We Think You'll Like. A "View Similar" button already exists in the page markup.
- Search dropdown: 5 term suggestions (completion in bold) · divider · Top Sellers rail.

## Notes
- Google's docs links in the deck (docs.cloud.google.com/…/pdp-prompts, /ai-overview) 404 without allow-listing, so the CSS custom-property names for `<google-ai-prompts>` are unconfirmed. The prompts here mirror its DOM (`prompts-container / prompt-item / prompt-link__icon / __text`, `direction="column"` as in the dev build).
- Config images (hero, chat icon, chips spark) are local copies in `img/` for the export. Production should load them from our CDN via the backend config: Francesco warned that client-side overrides flicker.
- `img/ask-deb-spark.png` is the sparkle from the dev launcher (teal gradient), offered as a `chat-icon` alternative to the teal tile.
- Products and images come from `projects/plp-alignment` (Debenhams set). In `data.js`, product i uses `p{i}.jpg` up to 6 and `p{i+1}.jpg` after that (p7 is an unlisted coat).
- html2canvas: `color-mix()` (Deliver+ footer border) is flattened in the page CSS, and agent chips use `display:flex` (it drops the text in an `inline-flex` button inside a flex container). Sparkles are drawn solid when exporting (it drops gradient fills).

## AI look (13 Oct): in the DS
- `--ai-gradient` (107°, #70BEB3 → #9DEDE2, Figma PLP Reviews jNQsrePXxw0j0AksixkseD · 265:3677) and the AI icon `assets/ds/icons/ai.svg` (27:37643) are group-wide tokens / assets.
- `.ai-pill` (white), `.ai-pill--outline` (gradient outline, entry point outside search only), `.ai-pill--soft` (puck shadow, every prompt chip / on-image button), `.ai-iconbtn` (header icon). Catalogue entry `ai-pill`.
- Prompt chips have no solid outline: shadow only. The NBA box is `--surface-sunken`, no border. The PDP prompts heading is just "Ask Deb".
- Size selector (DS): selected is the same 1px border in black + bold (Figma 9000:3082), default border `--border-control` #B5B5B5, hover black, Geologica.
