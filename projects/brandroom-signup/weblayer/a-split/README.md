# A · Split — Bloomreach weblayers (Desktop + Mobile)

Built 22 Oct 2026 from the DG design system Sign-up modal (prototype: https://jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-signup/).
Based on the live templates ("A - Email & SMS Signup - Desktop" / "- Mobile") — same structure, ids, classes and `[[ params ]]`, so the existing weblayer JS keeps capturing.
**Read HOW-TO-BLOOMREACH.md first.**

**Status:** checked in `desktop/OPEN-ME-preview.html` (1440) and `mobile/OPEN-ME-preview.html` (390): layout, empty phone passes, submit → thank you.
**Not yet run inside Bloomreach** — test in the weblayer editor preview and with a test email before it goes live.

## Files
| Weblayer | HTML tab (everything — CSS + image included) | CSS tab (optional, same CSS) | Preview |
|---|---|---|---|
| A - Email & SMS Signup - **Desktop** | `desktop/paste-into-HTML-tab.txt` | `desktop/paste-into-CSS-tab.txt` | `desktop/OPEN-ME-preview.html` |
| A - Email & SMS Signup - **Mobile** | `mobile/paste-into-HTML-tab.txt` | `mobile/paste-into-CSS-tab.txt` | `mobile/OPEN-ME-preview.html` |

**Unzip first** (right-click → Extract All). Only the `OPEN-ME-preview.html` files open in a browser — the `paste-into-…` files are the text you paste into Bloomreach.

The HTML file is self-contained: the CSS sits in a `<style>` block at the top and every param defaults to the copy and image below, so pasting just the HTML gives the finished popup. The CSS tab file is the same CSS, for a weblayer that has a CSS tab (replace the old CSS — don't leave it in). The images are in `images/` — upload them to Bloomreach for go-live (see Image param).

## Script params (JS tab, top of the script)
| Param | Desktop | Mobile |
|---|---|---|
| `PARAM_positionVertical` | `Center` | `Center` |
| `PARAM_positionHorizontal` | `Center` | `Center` |
| `PARAM_enterAnimation` | `Fade in` | `Fade in` |
| `PARAM_includePhone` | `yes` | `yes` |

Everything else in the JS stays as it is (consent categories, identify, next weblayer id, triggers).

## Phone optional (JS change, one line, both weblayers)
```js
// was:   if(typeof phoneInput !== "undefined") {            (inside form.onsubmit, "Phone number validation if input exists")
// now:   if(typeof phoneInput !== "undefined" && phoneInput.value.trim() !== "") {
// → an empty phone is allowed (optional); a phone that is typed is still validated as a UK mobile.
// SMS consent: only grant thebrandroom_sms when a phone was given — in the consent loop, skip the sms category when !eventProperties.phone.
```
The HTML already drops `required` from the phone input and fixes its label (`for="phone"`, was `for="email"`).
Without the JS change the phone stays required (the script validates it) — everything else still works.

## Images
Desktop and mobile are separate weblayers, so each takes its own asset in the normal `image` param: desktop the 4:5 portrait, mobile the 16:9 landscape.

## Image param
| Param | Desktop | Mobile |
|---|---|---|
| `image` | https://jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-signup/img/lacoste-p.jpg | https://jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-signup/img/lacoste-m.jpg |

## Copy params (live copy, both weblayers)
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
