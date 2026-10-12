# 30 · Session log 12 Oct 2026 (b): Sign in prototype

`projects/sign-in/` (shell `index.html` + `page.html`, README has the brief, the flag table, Figma nodes and live findings).

## Decisions
- **One form, two weightings.** A = link first: email, then the CTA, then "Sign in with password instead" as a link below it. B = password first: email + password, then the "Forgot password? | Email me a sign in link" link row, then the CTA. The secondary link swaps the form in place.
- **No email-first branching** (it reveals which emails have accounts or passwords). Link sent / reset sent are one message ("If the email address entered matches our records…"), no links. Wrong password reads "email or password incorrect".
- **Panel order:** Weighting A/B first, then Methods: the password switch is live on A (off = link only, which covers the security case) and locked on for B; the sign in link switch is live on B and locked on for A. Fascias start from play: Debenhams A + password, PLT A without password, boohoo and boohooMAN B without the link (boohooMAN both off on play = legacy password form).
- Create account is a link under the CTA. The "New to X?" block is dropped.
- Context: page or modal. Social: Apple, Google, Facebook, Klarna.

## DS changes
- components.css **C-19 Sign in**: `.auth` `.auth-pg` `.auth-h/-sub/-alt` `.fld--pw .eye` `.lnk-row .sep` `.or-div` `.soc` `.auth-modal`. Additive only, so nothing else changes.
- catalogue.js entry `sign-in` (Account group, 3 variants). New icon `icons/lib/social-apple.svg` (lib/apple.svg is a fruit outline).
- Footer catalogue sample carries `width:1000px` and the Debenhams logo. In-situ pages need to strip the width and swap the logo (done in sign-in page.html; shopping-agent has the same 1000px footer at desktop).

## Not done / open
- Gymshark reference screenshot wasn't attached. Its pattern was applied from memory: create account as a link under the CTA.
- Desktop and mobile verified with Playwright on all four fascias, plus panel rules, Fold, drag and the export zip.

## Follow-ups (12 Oct)
- Social tiles now match Social-Login 2032-2027 exactly on every fascia: 54px, white, 1px #E2E2E2, 4px radius, Figma marks (`social-apple/-google/-facebook-circle/-klarna.svg`).
- Link first: "Sign in with password instead" moved below the CTA, centred.
- Security switch card and Klarna full-width option removed (Jake): the method switches cover security; Klarna is always a tile.
- Copy (Jake): link-first intro "We’ll email you a one-time link, to sign in."; link sent = title + one paragraph, no links or code entry; "family of brands" line removed. 6-digit code option and `.otp` / `.auth-wait` / `.auth-fine` / `.auth-family` CSS removed.
- Panel (Jake): one Weighting card, A / B plus the password switch inside it (live on A, locked on B). No Methods card or link switch; B always carries "Email me a sign in link".
- Footer: swapped the old catalogue `.ft` sample for the DS footer drop-in (`assets/ds/footer.js`, `<footer data-ftr>`, C-08, each fascia's live footer). html2canvas can't paint CSS masks, so the page draws `.ftr-chev` as a plain image while exporting. Other prototypes on footer.js will export black squares for the chevrons until the DS handles it.
- Link sent / reset sent small print = `.auth-note` (C-19): 12/16, weight 300, Grey 5 #6B6B6B (`--text-secondary`, the foundations body-text floor) on every fascia. Montserrat 300 now loaded so boohoo / boohooMAN render light.
- Checkout entry added as Context → Checkout (`.co-hd`, `.co-pg`, `.co-grid` in C-19): guest card first with the only primary CTA ("Continue as guest"), then "Have an account?" = the same sign-in form with secondary CTAs and no create-account link. Mobile stacked, desktop two cards. Live reference: Debenhams /checkout screenshots from Jake, 12 Oct.
- Top bar: Sign in / Checkout switch left of Desktop / Mobile (also at the top of the phone panel). Global across fascias; Sign in returns to the last sign-in context (page or modal). Context card shows Page / Modal only, hidden on Checkout.
- Social toggle (panel): All four tiles | Continue with Klarna. Klarna only = `.soc-klarna` (C-19), Sign-In-Link MzGyAVWG5pQVp56ePnGcp9 · 4421-999 exact: 358×50 #0B051D, 4px, Helvetica Neue Medium 15px white "Continue with" + the DS klarna-badge.svg (same paths as the Figma badge), gap 10px. Works in Sign in and Checkout.
- Divider copy: "Or continue with" in sentence case (`.or-div` no longer uppercased).
- Copy pass (Jake): Title Case headers (Sign In · Have an Account? · Guest Checkout · Reset Your Password). Link first: "Enter your email address and we’ll send you a one-time link to sign in." + **Send link**. Sent: "We’ve Emailed You a Sign-In Link" / "…a Password Reset Link", "Use the link we sent to [email] to sign in / reset your password. It expires in [X] minutes." (X = panel field, default 15), small print "Not received it? Check your spam folder or make sure your email address is correct.", then Resend link | Use a different email. Divider "or continue with" (lower-case o). Same sent screen for every email, so it still doesn't reveal accounts.
- Checkout: sign in CTAs back to primary (Jake); guest still leads by position.
- Karen Millen added (play 12 Oct: password only, link off → starts on B). KM header wishlist = bookmark; footer / USP from the DS live sets.
- PLT: social tiles + Continue with Klarna square (0 radius), tiles fill with the field colour (--surface-raised #FFFDF7). Checkout header: no bottom rule (all fascias).
