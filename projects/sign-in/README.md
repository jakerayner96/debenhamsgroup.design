# Sign in prototype

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/sign-in/ · built 12 Oct 2026

## Brief
New sign-in page across the fascias, built on DS components. Each fascia starts from its play configuration (12 Oct 2026): link fascias open on A, the others on B.

| Fascia | Play | Password sign in | Sign in link |
|---|---|---|---|
| Debenhams | debenhams.web.play.dbztech.net | on | on |
| PLT | prettylittlething.web.play.dbztech.net | off | on |
| boohoo | boohooww.web.play.dbztech.net | on | off |
| boohooMAN | boohooman.web.play.dbztech.net | off | off → play falls back to the legacy email + password form |

Two weightings:
- **A · Link first.** Email field, then **Email me a sign in link**, then "Sign in with password instead" as a link below the button.
- **B · Password first.** Email and password, then the "Forgot password? | Email me a sign in link" link row (Checkout 2026 pattern), then **Sign in**.

Clicking the secondary link swaps the form in place. Create account is a link under the CTA (Gymshark pattern). The separate "New to X?" block is gone.

## Checkout entry (top bar: Sign in | Checkout)
A signed-out customer heading to checkout (live Debenhams /checkout, 12 Oct 2026): checkout header (logo + lock + "Secure checkout"). **Guest checkout card first**: email and **Continue as guest**, the only primary CTA on the page. Then the **Have an account?** card, which is the same sign-in form with the same A/B weighting and password switch.
- Guest leads for conversion. The sign-in CTAs drop to secondary there, and there's no create-account link ("You can create an account once you have placed your order").
- Mobile stacks guest above sign in. At 1024 and up they sit side by side (max 1356, gap 6 (24px)).

## Rules
- **No email-first branching.** We never ask for the email first and then branch to a password field or create account, because that tells an attacker which emails have an account or a password. The customer picks the method before we look anything up.
- **The same answer either way.** Link sent and reset sent are one message: the title plus "If the email address entered matches our records, we’ll send you a unique link…". No links; back is the browser’s back button. A wrong password reads "The email or password you entered is incorrect".
- **Switching password off.** On A, the Password sign in switch drops "Sign in with password instead", "Forgot password?" and the reset screens, so the link is the only way in. Use it if there is a security risk. On B the switch is locked on.
- If only one method exists, no secondary link is shown.

## Panel
Weighting A/B with the password switch inside it (A only) · screen (sign in, incorrect details, link sent, forgot password, reset sent) · context (page or modal) · social: all four tiles (Apple, Google, Facebook, Klarna) or just the full-width Continue with Klarna button · filled fields · USP banners.

## DS
Footer = the DS footer drop-in (`assets/ds/footer.js`, `<footer data-ftr>`).

New component **C-19 Sign in** in `assets/ds/components.css` (`.auth`, `.fld--pw`, `.lnk-row`, `.or-div`, `.soc`,, `.auth-modal`) and catalogue entry `sign-in`. Also adds the Apple glyph `assets/ds/icons/lib/social-apple.svg`.
Spacing: gap 4 (16px) between blocks · gap 3 (12px) between fields and in the link row · gap 4 (16px) between social tiles. Social tiles are 54px tall. At 1024 and up the form is a 480px card on `--surface-sunken`, padded gap 8 / gap 6 (32/24px).

## Figma sources
- Social-Login `P2RiX62irafEZQjyLRhRx7`: 112-6838 (sign in, social tiles), 112-6710 / 112-6873 (create account, mobile / desktop), 2032-1885 (sign in with the link row), 2032-2027 (social tiles, built exactly)
- Sign-In-Link `MzGyAVWG5pQVp56ePnGcp9`: 4421-999 (Continue with Klarna, built exactly)
- Checkout 2026 `WChEtDPH0LcErdYFS9SESn`: 1669-43380 (sign in, link row), 1669-43700 ("Confirm it's you", 6-digit code, "Resend code | Sign in with password")

## Live findings (play, 12 Oct 2026)
- Debenhams stacks two full forms ("Email me a sign in link", then "Or use your password" with a second email field) and adds Continue with Klarna.
- PLT shows the link only. boohoo and boohooMAN show the legacy password form.
- Every fascia has a separate "New to X? Create an account" block. This design replaces it with a link.
