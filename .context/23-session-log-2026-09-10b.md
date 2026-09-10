# Session log — 10 Sep 2026 (b): P-05 quick add · PLT Social prototype kicked off (own repo)

## P-05 PLP (branch `plp-alignment`, published to main)
- **Quick add is page-level**, never per card. Review strip: **Quick add Off/On** (every product or none) + **style** select — `image` (bag-with-plus on the photo, takes the wishlist button's shape: chip on PLT/MAN new, square KM, circle Debenhams), `button` (full-width Add under the image, MAN live), `mini` (28px primary-styled "Quick add" pill on the price row — Adanola Complete-The-Look reference; zero card-height cost; `.pc-qa` in `assets/ds/components.css`, icon CSS-masked to take the button ink). Both follow the fascia config until touched; `?qa=off|image|button|mini` on plp.html. Per-card anatomy toggle removed (it produced a stray circle on fascias whose config was off).
- Pages serves **main** — branch pushes never reach the live URL. Publish = copy `projects/plp-alignment` + `assets/ds` from the branch onto main as a "Publish P-05: …" commit (path checkout), same as the previous session. Two publishes this session (99de8b9, bd7cc2d); the second also carried the MAN header sizes + 169-icon aspect fix.

## PLT Social — new repo `github.com/jakerayner96/plt-social` (private), local `Desktop/PROTOTYPES/plt-social`
Brief (UX briefing 10 Sep, Dan Gwynne / YFD, Gemini notes in the chat): TikTok-style swipeable product feed for PLT, launch "a week on Monday"; tab bar needs rearranging for a sixth destination; Glass UI out of phase one; work directly with Andrei on the live app rather than Figma. Jake + Paul Dossis own nav options, feed UI, onboarding.

- **PLT-only fork of plt-app-prototype** (Expo SDK 57 / expo-router). Other fascias' catalogue JSON removed and `index.generated.ts` hand-trimmed (raw scrapes stay in the parent repo); `BRAND_ORDER = ['plt']`; PLT faces only. Multi-brand architecture kept for the later group conversion.
- **Social feed** `src/screens/SocialFeedScreen.tsx` + `src/data/social.ts`: vertical paging, per-product horizontal gallery with dots, right action stack Quick Buy (size sheet → shared bag) · View (PDP inside the tab's own stack) · Wishlist · Share, brand line (brand not "PLT" — Andrei; PLT's own = wordmark) + title + price, top feed tabs For You / New In / Dresses / Co-ords from real category slugs, gradient scrims (Andrei's legibility fix). Only products with a PDP gallery (2+ images). Page height is measured from the tab navigator, not the window.
- **Glass ⇄ Flat chrome toggle** (settings sheet, tap the PLT logo on Home): glass = iOS 26 Liquid Glass (native bar where the layout fits five, custom glass bar otherwise); flat = current PLT app (solid labelled bar, plain nav icons, grey search pill, solid header with "Sign In"). Flat bar animates to **black on PLT Social**; glass bar goes dark glass + white glyphs (Instagram pattern). Applied in three places only: `GlassView`, `NavBar`, Home header.
- **Tab-bar layout options** for six destinations in five slots: **A** six tabs (YFD concept / dev build — forces the custom glass bar, native overflows into "More"), **B** account into the Home header (Adidas pattern, Gabriella's Slack suggestion), **C** wishlist folds into Bag (heart in the header). More options coming from the other designer — add to `TAB_LAYOUTS` + `tabsForLayout` + Home `HEADER_CONFIG`.
- Tab icon: PLT heart carrying a play glyph (`tab-social-plt` in PLTIcon; PNG template images 26/52/78 rendered from the SVG with headless Chromium).
- **Distribution**: EAS project `@group-ux/plt-social` (id 2f4ce709-7350-4a38-bf6e-8fbdd1405dbf), branch `expo-go`, runtime pinned `exposdk:57.0.0`; link + QR in the repo README. `eas update` non-interactive needs `--environment preview`. Metro also runs on the LAN (`npx expo start --lan`).
- Gotchas: `rsync --exclude dist` also strips every `dist/` inside node_modules — re-sync node_modules without it. Onboarding screens not built (phase-one inclusion unconfirmed).

## Open
- Onboarding flow (3 questions) once phase one is confirmed.
- Merge the other designer's tab-bar options into `TAB_LAYOUTS`.
- Group conversion of plt-social back onto the multi-brand base when PLT signs off.
