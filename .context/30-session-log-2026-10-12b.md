# 30 · Session log 12 Oct 2026 (b) — Sign in prototype

`projects/sign-in/` (shell `index.html` + `page.html`, README has the brief, the flag table, Figma nodes and live findings).

## Decisions
- **One form, two weightings.** A = link first: email, then "Sign in with password instead" as a link, then the CTA. B = password first: email + password, then the "Forgot password? | Email me a sign in link" link row, then the CTA. The secondary link swaps the form in place.
- **No email-first branching** (it reveals which emails have accounts or passwords). Confirmations always read "If an account exists for…". Wrong password reads "email or password incorrect".
- **Security switch** (panel): it removes the password route on a fascia that has the link (forces A, plus an optional notice). It's disabled when the link is off.
- **Fascia flags** default to play: Debenhams both on · PLT link only · boohoo password only · boohooMAN both off = the legacy password form (shown as password only, panel warns).
- Create account is a link under the CTA. The "New to X?" block is dropped.
- Context: page or modal. Social: Apple, Google, Facebook, Klarna (Klarna as a tile or a full-width "Sign in with Klarna"). Optional 6-digit code on the link-sent screen (Checkout 2026 1669-43700).

## DS changes
- components.css **C-19 Sign in**: `.auth` `.auth-pg` `.auth-h/-sub/-alt/-family/-fine` `.fld--pw .eye` `.lnk-row .sep` `.or-div` `.soc` `.soc--wide/--klarna` `.otp` `.auth-modal`. Additive only, so nothing else changes.
- catalogue.js entry `sign-in` (Account group, 3 variants). New icon `icons/lib/social-apple.svg` (lib/apple.svg is a fruit outline).
- Footer catalogue sample carries `width:1000px` and the Debenhams logo. In-situ pages need to strip the width and swap the logo (done in sign-in page.html; shopping-agent has the same 1000px footer at desktop).

## Not done / open
- Gymshark reference screenshot wasn't attached. Its pattern was applied from memory: create account as a link under the CTA.
- Desktop and mobile verified with Playwright on all four fascias, plus panel rules, Fold, drag and the export zip.
