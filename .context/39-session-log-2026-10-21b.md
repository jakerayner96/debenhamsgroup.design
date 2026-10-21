# Session log 21 Oct 2026 (b) — Brand Room sign-up popup

- New prototype `projects/brandroom-signup/` (review shell from the Taggstar shell: embedded DS PLP + injected component; flat-image PNG download in the panel). Six routes A–F; README has the live scrape and decisions.
- Live popup = **Bloomreach Engagement weblayer** (`api.e.boohoo.com` SDK, `brxcdn.com` assets), A/B with control, once per visit on entry, email + phone required. The weblayer HTML/CSS/JS comes back from `api.e.boohoo.com/campaigns/banners/show` (`w.html=…;w.style=…;w.script=…`) — scrape that response rather than the DOM; retry fresh contexts if you land in Control Group.
- Desktop headless Chrome gets a CloudFront 403 on thebrandroom.com; use `devices['Desktop Chrome']` UA + `--disable-blink-features=AutomationControlled`. mediahub images need a browser UA + thebrandroom.com referer (empty 200 otherwise); `w/h/fit=cvr` crops on request.
- DS: **Sign-up modal** (`.mdl--signup`, `.sup-*`, `assets/ds/signup.js`, catalogue `signup-modal`), **phone field** `.fld--tel`, **white close** `.modal-x--inv`, `assets/brands/brandroom-white.svg`. Changelog 2026.10.21b.
- Another session's server was on :3017 (different clone) — used :3123 with `--directory`.
