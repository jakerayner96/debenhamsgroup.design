# Putting a sign-up option into Bloomreach

For whoever builds the weblayers in Bloomreach Engagement. Applies to every option (A–E). Each option is **two weblayers**, as live today:
**A - Email & SMS Signup - Desktop** and **A - Email & SMS Signup - Mobile**.

**Unzip first** (right-click → Extract All). Only `OPEN-ME-preview.html` opens in a browser; the `paste-into-…` files are .txt on purpose —
they are the text you paste into Bloomreach, not pages (opened in a browser they show an empty grey box).

## Is it just pasting the HTML?
Yes — the HTML file is self-contained (28 Oct): the **CSS is inside it** in a `<style>` block, and the **image and copy are the param defaults**,
so pasting just the HTML gives the finished popup. Plus one small JS change:

| Tab | What to do | Why |
|---|---|---|
| **HTML** | Replace with `desktop/paste-into-HTML-tab.txt` (desktop weblayer) or `mobile/paste-into-HTML-tab.txt` (mobile weblayer) — paste **all** of it | Live template with tiny fixes (see below), the design CSS in a `<style>` block at the top, the image + copy as defaults. |
| **CSS** | If the weblayer has a CSS tab: **clear the old CSS** (or paste `…/paste-into-CSS-tab.txt`, the same CSS) | Old CSS left in the tab fights the new design. |
| **JS** | **Keep the live script.** Set the params in the option's README, and make the one-line phone change. Option E: also append `addon.js`. | The script does the capture — don't replace it. |

## Will the email still be captured?
Yes, as long as the live JS stays. The capture is done by the weblayer script, not the HTML: on submit it validates the fields, identifies the
customer by email, records the `thebrandroom_email` / `thebrandroom_sms` consents and tracks the `banner` subscribe event. It finds the form by
these ids and classes, and **every one is unchanged** in the new HTML:

`#exponea-greyout` · `.banner-item` · `#exponea-form` · `#exponea-main-fieldsets` · `input[name="email"]` / `.email` · `.email_fieldset` ·
`input[name="phone"]` / `.phone` · `.phone_fieldset` · `.step-one` · `.step-two` · `#noThanksButton` · `#thankYouButton` · `.close` · `#exponea-voucher`

All the `[[ … ]]` params (image, copy, placeholders, button text, privacy link, voucher, close icon) and the `{% if customer.email %}` prefill are
kept, so they still show up as editable fields in the weblayer editor.

**What changed in the HTML** (all options): the phone `<label>` now points at the phone field (`for="phone"`, it said `for="email"`), and the phone
input is no longer `required`. **Option E** also adds a brand-picker block inside step two (needs `addon.js`).

**One thing that changes in the editor:** the old CSS tab had its own params (colours, sizes) — the new CSS has fixed design-system values, so those
CSS params go away. Copy, images and the close icon are still params in the HTML.

## Step by step (per weblayer — do Desktop, then Mobile)
1. **Don't edit the live weblayer.** Duplicate *A - Email & SMS Signup - Desktop* (or add the option as a new variant in its A/B test) so live is untouched.
2. Open the copy → **HTML** tab → select all → paste the contents of `desktop/paste-into-HTML-tab.txt`.
3. **CSS** tab (if there is one) → select all → delete, or paste `desktop/paste-into-CSS-tab.txt` (same CSS as in the HTML).
4. **JS** tab → keep it. At the top, set the params from the option's README (position, `PARAM_includePhone`).
   Find `if(typeof phoneInput !== "undefined") {` inside `form.onsubmit` and change it to
   `if(typeof phoneInput !== "undefined" && phoneInput.value.trim() !== "") {` — phone becomes optional (a typed number is still checked).
   Option E: paste `addon.js` at the very end of the script, before the final closing brace of the function.
5. **Params / visual editor** → the image and copy are already filled in. For go-live, upload the image from `images/` to Bloomreach and pick it in the `image` param (the default points at the prototype site).
6. **Preview** in the editor — check the layout, the close, No Thanks, a click outside.
7. **Test it end to end**: on a test page (or the preview) submit a test email you can look up → check the customer profile has the email, the
   `thebrandroom_email` consent and a `banner` event with action `subscribe`. Then submit with a phone too and check the phone + SMS consent.
8. Device target stays as live: *Desktop* weblayer → desktop, *Mobile* weblayer → mobile. Keep the trigger (on entry), frequency (once per visit) and the A/B control group.
9. Repeat 1–8 for **Mobile** with the `mobile/` files.
10. Start the variant.

## The font (Archivo)
The first line of the CSS (the top of the `<style>` block in the HTML file) loads Archivo from Google Fonts — keep it as the first line (an `@import` further down is ignored).
On thebrandroom.com the weblayer sits in the page, so it already gets the site's own Archivo. The Bloomreach editor preview isn't the site, so
without this line it falls back to a system font, which is why Archivo has looked unreliable before. The site's own font files can't be borrowed
(they don't allow other sites to load them), so Google Fonts is the source. If it still shows a fallback anywhere, the stack is
`Archivo → system sans`, so nothing breaks; tell Jake where it happened.

## SMS consent when the phone is empty
The live script grants both consent categories on submit. With phone optional, only grant `thebrandroom_sms` when a phone was given — in the
consent loop, skip the sms category when `!eventProperties.phone`. Worth checking with CRM / legal.

## Previews
`desktop/OPEN-ME-preview.html` and `mobile/OPEN-ME-preview.html` open in a browser with the live copy filled in and the same phone plugin (intl-tel-input 17.0.13)
and step logic as the weblayer. They are for review only — they are not what you paste.
