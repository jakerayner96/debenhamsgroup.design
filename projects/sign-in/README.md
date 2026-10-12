# Sign in prototype

**Live:** jakerayner96.github.io/debenhamsgroup.design/projects/sign-in/ · built 12 Oct 2026

## Brief
New sign-in page across the fascias, built on DS components. Each fascia has its own configuration (play, 12 Oct 2026):

| Fascia | Play | Password sign in | Sign in link |
|---|---|---|---|
| Debenhams | debenhams.web.play.dbztech.net | on | on |
| PLT | prettylittlething.web.play.dbztech.net | off | on |
| boohoo | boohooww.web.play.dbztech.net | on | off |
| boohooMAN | boohooman.web.play.dbztech.net | off | off → play falls back to the legacy email + password form |

Two weightings:
- **A · Link first.** Email field, then "Sign in with password instead" as a link under it, then **Email me a sign in link**.
- **B · Password first.** Email and password, then the "Forgot password? | Email me a sign in link" link row (Checkout 2026 pattern), then **Sign in**.

Clicking the secondary link swaps the form in place. Create account is a link under the CTA (Gymshark pattern). The separate "New to X?" block is gone.

## Rules
- **No email-first branching.** We never ask for the email first and then branch to a password field or create account, because that tells an attacker which emails have an account or a password. The customer picks the method before we look anything up.
- **The same answer either way.** Link sent and reset sent read "If an account exists for …". A wrong password reads "The email or password you entered is incorrect".
- **Security switch.** It turns off password sign in on a fascia that has the link. The link becomes the only route: "Sign in with password" and "Forgot password?" are removed, B is disabled, and an optional notice appears above the form. The switch can't be used on a fascia with the link off, because then nobody could sign in.
- If only one method exists, no secondary link is shown.

## Panel
Fascia flags · weighting A/B · security switch (+ notice) · screen (sign in, incorrect details, link sent, forgot password, reset sent) · context (page or modal) · social (Apple, Google, Facebook, Klarna; Klarna as a tile or full width) · 6-digit code in the link email · filled fields · USP banners.

## DS
New component **C-19 Sign in** in `assets/ds/components.css` (`.auth`, `.fld--pw`, `.lnk-row`, `.or-div`, `.soc`, `.otp`, `.auth-modal`) and catalogue entry `sign-in`. Also adds the Apple glyph `assets/ds/icons/lib/social-apple.svg`.
Spacing: gap 4 (16px) between blocks · gap 3 (12px) between fields and in the link row · gap 4 (16px) between social tiles. Social tiles are 54px tall. At 1024 and up the form is a 480px card on `--surface-sunken`, padded gap 8 / gap 6 (32/24px).

## Figma sources
- Social-Login `P2RiX62irafEZQjyLRhRx7`: 112-6838 (sign in, social tiles), 112-6710 / 112-6873 (create account, mobile / desktop), 2032-1885 (sign in with the link row and Klarna)
- Checkout 2026 `WChEtDPH0LcErdYFS9SESn`: 1669-43380 (sign in, link row), 1669-43700 ("Confirm it's you", 6-digit code, "Resend code | Sign in with password")

## Live findings (play, 12 Oct 2026)
- Debenhams stacks two full forms ("Email me a sign in link", then "Or use your password" with a second email field) and adds Continue with Klarna.
- PLT shows the link only. boohoo and boohooMAN show the legacy password form.
- Every fascia has a separate "New to X? Create an account" block. This design replaces it with a link.
