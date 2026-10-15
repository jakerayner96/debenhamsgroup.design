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

## 15 Oct: chat as the PA Deck Figma, typing, agent start screen, radio panel
- **Chat window** rebuilt to the PA Deck Figma (OUmnWDam0w0czh9VZnaqx0 · 6:167): Ask Deb title bar with the AI icon, #EEE user bubbles (16/4/16/16 radii), 14px replies, a "Using · Size 10 · Tailored · Family wedding" context row, 104px product tiles (12/500 name · 13/700 sale price · teal ADD TO BAG, radius 24), gradient-bordered input "Ask Deb anything...". The tile sizes are written into `salesAgentConfig.json` too (`--chat-messenger-product-carousel-tile-width`, tileConfig / productDetailConfig font sizes).
- **You can type to it.** Enter or the arrow sends; the send button lights up as you type; replies are scripted by keyword (wedding / work / knits / shoes / fit / gift / similar / discover) with context chips, tiles and outline quick-reply chips. Production: `window.googleAgent.sendQuery(text)`. Replies are prototype copy, not the agent's.
- **Start screen toggle** (Chat window card): *Config* = the dev file (T&Cs · hero · intro · prompts). *Agent* = the new one: an animated AI-gradient orb with the AI icon, "Hi there, I'm **Deb**" (gradient name), the intro copy, four capability cards (Find an outfit · Check the fit · Style what I own · Gift ideas, each a `sendQuery`), the config prompts as chips, T&Cs beneath. Benchmarked on Gemini / ChatGPT / Perplexity / Shopify Sidekick start states: greeting + capability cards + one input, no hero banner. The orb floats and its ring rotates; both stop under reduced motion and in exports. In production this is a `custom_template` in the `messages-header` slot.
- **Final chip of every group is the gradient-outline pill** (`.ai-pill--outline`, no shadow): PDP "Ask anything", PLP "Help me decide", search "Help me discover", home "Help me choose", and the quick replies in the chat.
- **Search active** follows the Search Figma (gKuKG9M8kSM2BCL6dy0G30 · 1012:2295): caret in the field, X beside it (no pill while searching), then Recent Searches (grey chips with ×) · **Suggestions from Deb** in the Popular Searches slot · Recently Viewed rail. Autocomplete A/B/C placements are gone.
- **PDP gallery** = Core PDP 2026 (jakerayner96.github.io/core-pdp-2026/?brand=debenhams): mobile 233×350 peek rail from the left edge, **4px gap**, 4px progress bar; desktop 100px thumb column (selected full, rest 30%), white round arrows. **Virtual Stylist** chip (VTO Figma LxHqA4rFpRYNWJu8vzn18X · 15203:68330: white pill, puck shadow, teal hanger `img/hanger.svg`, 13px SemiBold) replaces "Try it on"; it stacks above Shop similar on mobile, sits beside it on desktop.
- **Panel**: the Page card is gone. Features are one radio list, in order: Entry point · Icon in header / Exposed search (inside) / Exposed search (outside) · Content Prompts Banner · Search Suggestions · PLP Next Best Action · PDP Prompts · Virtual Try On · Shop Similar. Picking one shows its page (and opens search for suggestions) and scrolls to it; the card beneath holds its A/B/C placement and content. **Icon in header** = the AI icon in the header icon row beside search on both breakpoints (mobile search stays an icon, opening the Figma search state).
- **PLP = live Women's Partywear** (debenhams.com/categories/womens-partywear, 15 Oct, 390 + 1440): breadcrumb Home / Womens / Shop By Collection / Partywear · "Women's Partywear" + "1,000+ products" (centred on desktop) · nine photo roundels (DS `.roundel`, 90px mobile / 120px desktop) · mobile Filters | Relevance split bar then NDD toggle + Size / Colour / Style pills; desktop NDD · Category · Size · Colour · Style · Show more filters · Relevance · grid 2-up (16px gutters) / 5-up, cards with brand · name · price · swatches · "Get It Tomorrow", "As Seen In Our Ad" / Petite badges. **Next Best Action placement** is now a row picker: below the filters, or a full-width row after row 1–5 (2 products per row on mobile, 5 on desktop).
