# D · Slide-in — Bloomreach weblayer

Built 22 Oct 2026 from the DG design system Sign-up modal (prototype: https://jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-signup/).
Based on the live weblayer template ("A - Email & SMS Signup", `template-live.html`) — same structure, ids, classes and `[[ params ]]`, so the existing weblayer JS keeps working.

**Status:** checked in `preview.html` (params filled with the live copy, the same intl-tel-input 17.0.13 the weblayer loads, the same step-one → step-two switch). **Not yet run inside Bloomreach** — test in the weblayer editor preview before it goes live.

## Paste
1. **HTML tab** ← `weblayer.html`
2. **CSS tab** ← `weblayer.css` (replaces the old CSS; the old CSS-tab params are no longer read — values are fixed to the DS)
3. **JS tab** ← keep the live script; set the params below and make the phone change

## Script params
| Param | Value |
|---|---|
| `PARAM_positionVertical` | `Bottom` |
| `PARAM_positionHorizontal` | `Left` |
| `PARAM_enterAnimation` | `Fade in` |
| `PARAM_includePhone` | `yes` |

## Phone optional (JS change, one line)
```js
// was:   if(typeof phoneInput !== "undefined") {            (inside form.onsubmit, "Phone number validation if input exists")
// now:   if(typeof phoneInput !== "undefined" && phoneInput.value.trim() !== "") {
// → an empty phone is allowed (optional); a phone that is typed is still validated as a UK mobile.
// SMS consent: only grant thebrandroom_sms when a phone was given — in the consent loop, skip the sms category when !eventProperties.phone.
```
The HTML already drops `required` from the phone input and fixes its label (`for="phone"`, was `for="email"`).

## Images
| Param | Asset |
|---|---|
| `image` | https://jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-signup/img/lacoste-p.jpg |

## Copy params (live copy)
| Param | Value |
|---|---|
| `textLineOne` | Welcome To The Brand Room |
| `heading` | Sign up today for personalised style tips, exclusive offers & more |
| `textLineTwo` | (empty) |
| `EmailInputPlaceholder` | Email address |
| `PhoneInputPlaceholder` | Mobile number (optional) |
| `buttonText` | JOIN |
| `noThanksText` | No Thanks |
| `conditionsText` | By submitting your details, you agree to receive marketing communications from The Brand Room & our family of brands by email. You can unsubscribe at any point. You also consent to the use of your details in accordance with our |
| `conditionsLink` | https://www.thebrandroom.com/pages/informational/privacy |
| `conditionsLinkText` | Privacy Policy |
| `thankYouHeading` | Thank you! |
| `thankYouMessage` | Keep an eye on your inbox for exclusive offers! |
| `ThankYouButtonText` | Continue Shopping |
| `voucherCode` | (empty) |
