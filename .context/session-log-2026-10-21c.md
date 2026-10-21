# Session 21 Oct 2026 (c) — KM Premier colours
- New prototype projects/km-premier-colours (review shell, DS PDP template embedded for KM, 6 options + Custom, from Jake's two inspo mocks).
- DS: Membership box --mb-line / --mb-cta-line + DG_memberBoxHTML overrides + KM dark-ink logo; Deliver+ --dplus-line + light-ground catalogue variant; both boxes now 1px border (transparent) + 15/19 padding, so the size is unchanged.
- DS fix: .dplus .foot rule color-mix() → ::before (html2canvas Export failed on every PDP with Deliver+).
- Verified with Playwright (chromium_headless_shell-1243; the 1217 build and Chrome won't launch here): 6 options × 390/1440, panel → Custom, Export zip with both PNGs.
- Open: html2canvas draws mask icons as squares in Export (Ask AI, Deliver+ ticks).
- Jake: KM buttons black like his Figma → tokens.css KM --surface-action/#000, hover+pressed #242424, --border-action #000, --action-buy #000. Orange kept for brand accent. Checked PDP / bag / PLP at 390. App (brands.ts) not in this repo — not updated.
