# Brand Room sign-up popup

**Brief (Jake, 21 Oct 2026):** the email + SMS sign-up popup on thebrandroom.com needs a redesign. At least five options, on the DS, with the live content; one option a flat exportable image, the rest with real input fields.

**Live:** https://jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-signup/

**Figma:** The Brand Room `NRsu568JGzwCDq4egvkUbn` · `546-18664` (partner logo, Armani Exchange) · `780-116608` (Brand Room PLP set). There is no popup frame in Figma; the layouts are built from the live weblayer + the DS.

## Live today (scraped 21 Oct 2026, Playwright, desktop 1440 + iPhone 390)
- **Tool: Bloomreach Engagement weblayers** (the Exponea SDK, served from `api.e.boohoo.com`, assets on `brxcdn.com`, project `f37de144-1e20-11f1-873f-0adbe2143e4a`). Weblayers are custom HTML / CSS / JS (Jinja), so an image background with an input and a button is a template change, not a new tool. Warehouse's popup is the same thing.
- Two weblayers, `A - Email & SMS Signup - Desktop` / `- Mobile`, on every page, **once per visit, on entry**, personalised, **A/B tested against a control group** (control = no popup; the first fresh session got control).
- Variants served: `Small / White Text Black BG / JOIN` (desktop) and `Small / Black Text White BG / JOIN` (mobile).
- Image: a 600×234 GIF of 8 partner lockups at 1s a frame (Armani Exchange, Calvin Klein, Ted Baker, Lacoste, Valentino, Ilse Jacobsen, Tommy Hilfiger, Hunter) — frames in `img/lockup-1…8.png`.
- Copy: "Welcome To The Brand Room" / "Sign up today for personalised style tips, exclusive offers & more" / JOIN / No Thanks / legal + Privacy Policy. Thank you: "Thank you!" / "Keep an eye on your inbox for exclusive offers!" / Continue Shopping (+ an empty voucher slot).
- Form: email **and** GB phone both `required` (intl-tel-input, GB only); errors "Enter a valid email" / "Enter a valid phone number"; consent categories `thebrandroom_email`, `thebrandroom_sms`; next weblayer `6a3ced7fa28ca0f5f4b2a8dd`.
- Problems: required phone, oversized type on mobile (the headline is 4–5 lines at 390), inputs run off at 390, no imagery beyond logos, desktop is a 600px black box with tiny legal.

## Options (left panel) — stakeholder review, 22 Oct
The panel is just the option list (click or ↑ ↓); copy, image and fields are fixed at the recommended set (live copy, Lacoste AW26, phone optional). The popup opens with no motion so flicking is instant.
| | Route | What |
|---|---|---|
| A | Split | Desktop: 50/50 — 4:5 portrait image (448 × 560, `img/<brand>-p.jpg`) beside the form. Mobile: its own 16:9 landscape asset (`img/<brand>-m.jpg`) on top, form underneath, legal last (639px tall at 390). |
| B | Full bleed | 2:3 portrait on both breakpoints; form on a black gradient, white fields + CTA. |
| C | Brand lockup | Today's structure on the DS — partner lockup band cross-fading through the 8 partners over a white form. |
| D | Slide-in | Smaller card bottom-left (desktop) / bottom of screen (mobile), 4:5 thumbnail, over the DS 50% black Modal overlay (22 Oct); tapping the overlay or close minimises it to a "Get style tips" tab. |
| E | Two-step | Same image column on desktop, 4:5 thumbnail beside the headline on mobile. Email first, then favourite brands (DS chips) + optional SMS, then thank you. |

The flat-image route (old A) was dropped from the review on 22 Oct; `.sup--flat` stays in the DS. Mobile popup heights at 390: 456–612px.

## Design system
New / changed in the DS for this project (changelog 2026.10.21b):
- **Sign-up modal** — `components.css` `.mdl--signup` + `.sup-*`, a Modal type; behaviour + markup `assets/ds/signup.js` (`DG_signup.html / bind / LIVE`); catalogue `signup-modal` (Overlays & bag).
- **Phone field** — `.fld--tel` / `.fld-pre` on the Text field (catalogue variant "Phone").
- **White close** — `.modal-x--inv`.
- Asset `assets/brands/brandroom-white.svg`.
Everything else is existing DS: Modal (`.mdl`, `.modal-x`, `.mdl-scrim`), Input field, Buttons (`.bd.pri`, `.bd.txt`), Chips. Page behind = DS PLP template `projects/plp-alignment/plp.html?brand=brandroom&mode=new`.

## Spacing
Body padding gap 10 (40px) top, gap 6 (24px) sides/bottom (gap 4 (16px) under 768) · gap 6 (24px) between blocks · fields gap 3 (12px) · close inset gap 6 (24px).

## Decisions / assumptions
- Phone defaults to **optional** (live requires it). Flagged in the panel.
- Floating labels "Email address" / "Mobile number" replace the live placeholders (DS field; the live phone placeholder truncates at 390).
- The Brand Room logo only on the flat image — the eyebrow already names the fascia.
- Export pins the popup to the first screen (900 desktop / 844 mobile) with the overlay over the full page.
