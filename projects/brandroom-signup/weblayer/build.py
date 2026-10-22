#!/usr/bin/env python3
"""Brand Room sign-up popup → Bloomreach Engagement weblayer exports (22 Oct 2026).

Run from anywhere:  python3 projects/brandroom-signup/weblayer/build.py
Source: the live weblayer HTML tabs, pasted by Jake 22 Oct — "A - Email & SMS Signup - Desktop" (template-live-desktop.html)
and "- Mobile" (template-live-mobile.html). They are identical; live differs only in the CSS and the device target.
Output: one folder per option (a-split, b-full-bleed, c-brand-lockup, d-slide-in, e-two-step), each with a desktop/ and a mobile/ weblayer:
  desktop|mobile/weblayer.html → paste into that weblayer's HTML tab (same structure, ids, classes and [[ params ]] as live)
  desktop|mobile/weblayer.css  → paste into that weblayer's CSS tab  (the DS Sign-up modal on the weblayer's classes — no media queries:
                                 the desktop CSS is the desktop layout, the mobile CSS the mobile layout)
  desktop|mobile/preview.html  → open in a browser: params filled with the live copy, same intl-tel-input 17.0.13 + step logic as live
  README.md                    → the params to set, the images, the JS changes (phone optional; two-step add-on)
  addon.js                     → (two-step only) append inside the weblayer JS
Shared: HOW-TO-BLOOMREACH.md (step by step, and what keeps the capture working).
The visual spec is the DS Sign-up modal (assets/ds/components.css .mdl--signup) — change it there first, then here.
"""
import os, re, json, html

HERE = os.path.dirname(os.path.abspath(__file__))
PAGES = 'https://jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-signup/img/'
LOCKUP_GIF = 'https://brxcdn.com/bho-app-storage/f37de144-1e20-11f1-873f-0adbe2143e4a/media/original/3362fefe-6faa-11f1-8365-b69466d21866'
DEVICES = ('desktop', 'mobile')
TEMPLATES = {d: open(os.path.join(HERE, f'template-live-{d}.html')).read() for d in DEVICES}

LIVE = {  # live weblayer copy (scraped 21 Oct) + DS field labels
    'textLineOne': 'Welcome To The Brand Room',
    'heading': 'Sign up today for personalised style tips, exclusive offers & more',
    'textLineTwo': '',
    'EmailInputPlaceholder': 'Email address',
    'PhoneInputPlaceholder': 'Mobile number (optional)',
    'buttonText': 'JOIN',
    'noThanksText': 'No Thanks',
    'conditionsText': 'By submitting your details, you agree to receive marketing communications from The Brand Room & our family of brands by email. You can unsubscribe at any point. You also consent to the use of your details in accordance with our',
    'conditionsLink': 'https://www.thebrandroom.com/pages/informational/privacy',
    'conditionsLinkText': 'Privacy Policy',
    'thankYouHeading': 'Thank you!',
    'thankYouMessage': 'Keep an eye on your inbox for exclusive offers!',
    'ThankYouButtonText': 'Continue Shopping',
    'voucherCode': '',
    'closeIconSize': '16', 'closeIconColor': '#000000', 'imageWidth': '100%',
    'prePopulateEmail': 'no', 'prePopulatePhone': 'no',
}

# ---------------------------------------------------------------- CSS: the DS Sign-up modal on the weblayer's classes
BASE = r"""/* ==========================================================================
   Brand Room sign-up weblayer — {title}
   Built from the DG design system: Sign-up modal (.mdl--signup) + Input field + Button, 22 Oct 2026.
   Paste into the weblayer CSS tab (replaces the old CSS). HTML structure, ids and classes are the live template's,
   so the weblayer JS keeps working — see README.md for the params to set.
   Brand Room tokens: Archivo · black #000 / hover #242424 · Grey 3 #B5B5B5 keylines · Grey 4 #767676 secondary text · square corners.
   Spacing in gaps (1 gap = 4px): body gap 10 (40px) top, gap 6 (24px) sides; fields gap 3 (12px); close inset gap 4 (16px).
   ========================================================================== */

/* overlay — DS Modal overlay, 50% black. Click outside the box closes (weblayer JS). */
#exponea-greyout {{ position: fixed; inset: 0; z-index: 2147482999; background-color: rgba(0,0,0,0.5); }}
#exponea-greyout.no-greyout {{ pointer-events: none; }}

/* window */
.weblayer--box-subscription {{
  position: fixed; display: flex; flex-direction: column; box-sizing: border-box; z-index: 2147483000; pointer-events: auto; cursor: default;
  width: 480px; max-width: calc(100vw - 32px); max-height: calc(100vh - 32px); overflow-y: auto; scrollbar-width: none; margin: 0;
  background: #FFFFFF; color: #000000; border-radius: 0; box-shadow: none; text-align: left;
  font-family: Archivo, ui-sans-serif, -apple-system, system-ui, sans-serif; font-size: 16px; line-height: normal; text-decoration: none;
  -webkit-font-smoothing: antialiased;
}}
.weblayer--box-subscription::-webkit-scrollbar {{ display: none; }}
.weblayer--box-subscription * {{ box-sizing: border-box; outline: none; }}
.weblayer--box-subscription .inner {{ display: flex; flex-direction: column; width: 100%; margin: 0; padding: 0; }}
.weblayer--box-subscription .image-surround {{ position: relative; overflow: hidden; background: #F2F2F2; }}
.weblayer--box-subscription .image-surround img,
.weblayer--box-subscription .image-surround picture img {{ position: absolute; inset: 0; display: block; width: 100% !important; height: 100%; object-fit: cover; }}
.weblayer--box-subscription .form-inner {{ display: flex; flex-direction: column; padding: 40px 24px 24px; }}

/* type */
.weblayer--box-subscription p, .weblayer--box-subscription h6 {{ text-align: left; }}
.weblayer--box-subscription .text.line-one {{ margin: 0 0 8px; padding: 0 24px 0 0; font-size: 12px; line-height: 16px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: inherit; }}
.weblayer--box-subscription .heading {{ margin: 0; padding: 0 24px 0 0; font-size: 28px; line-height: 32px; font-weight: 700; letter-spacing: -.01em; color: inherit; text-wrap: balance; }}
.weblayer--box-subscription .text.line-two {{ margin: 0; padding: 0; font-size: 14px; line-height: 20px; color: inherit; }}

/* form — DS Input field: 50px, Grey 3 keyline (black while focused), 14px */
.weblayer--box-subscription #exponea-form {{ width: 100%; margin: 24px 0 0; }}
.weblayer--box-subscription #exponea-form > * {{ width: 100%; }}
.weblayer--box-subscription #exponea-form fieldset {{ border: 0; padding: 0; margin: 0 0 12px; min-width: 0; }}
.weblayer--box-subscription .input-label {{ position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }} /* kept for screen readers */
.weblayer--box-subscription #exponea-form input:not([type='checkbox']) {{
  display: block; width: 100%; max-width: 100%; height: 50px; min-height: 0; margin: 0; padding: 0 16px; resize: none;
  background: #FFFFFF; border: 1px solid #B5B5B5; border-radius: 0; box-shadow: none; -webkit-appearance: none; appearance: none;
  font-family: inherit; font-size: 14px; line-height: 18px; font-weight: 400; color: #000000; caret-color: #2797FF; cursor: text; text-align: left;
}}
.weblayer--box-subscription #exponea-form input::placeholder {{ color: #767676; opacity: 1; }}
.weblayer--box-subscription #exponea-form input:focus {{ border-color: #000000; }}
.weblayer--box-subscription #exponea-form .iti {{ display: block; width: 100%; }}
.weblayer--box-subscription #exponea-form .iti__flag-container {{ z-index: 10; }}
.weblayer--box-subscription #exponea-form .iti__selected-flag {{ padding: 0 8px 0 16px; background: none; }}
.weblayer--box-subscription #exponea-form input.phone {{ padding-left: 60px; }}
.weblayer--box-subscription #exponea-form .iti--allow-dropdown ul {{ width: 100%; }}
.weblayer--box-subscription #exponea-form .iti__country-name {{ white-space: break-spaces; }}
.iti--container {{ z-index: 2147483002 !important; }}

/* buttons — DS primary CTA (50px, black, white 600 16 caps) · "No Thanks" DS text button hugging the CTA */
.weblayer--box-subscription .button {{ font-family: inherit; border: 0; margin: 0; user-select: none; outline: none; text-decoration: none; cursor: pointer; }}
.weblayer--box-subscription .button.submit,
.weblayer--box-subscription .step-two .button {{
  display: flex; align-items: center; justify-content: center; width: 100%; height: 50px; margin-top: 4px; padding: 0 24px;
  background: #000000; color: #FFFFFF; border-radius: 0; font-size: 16px; line-height: 24px; font-weight: 600; text-transform: uppercase; letter-spacing: 0;
}}
.weblayer--box-subscription .button.submit:hover, .weblayer--box-subscription .step-two .button:hover {{ background: #242424; }}
.weblayer--box-subscription .step-one .button.close {{
  display: block; width: auto; height: auto; align-self: center; margin: 12px auto 0; padding: 2px 16px;
  background: none; color: #000000; font-size: 14px; line-height: 20px; font-weight: 700; text-transform: none;
}}
.weblayer--box-subscription .button:focus-visible {{ outline: 2px solid #2797FF; outline-offset: 2px; }}

/* legal */
.weblayer--box-subscription .inner.step-one .conditions {{ width: 100%; margin: 16px 0 0; font-size: 11px; line-height: 15px; font-weight: 400; color: #767676; }}
.weblayer--box-subscription .inner.step-one .conditions > .link {{ color: inherit; text-decoration: underline; }}

/* thank you */
.weblayer--box-subscription .inner.step-two .heading {{ padding-bottom: 8px; }}
.weblayer--box-subscription .inner.step-two .text {{ margin: 0 0 24px; font-size: 14px; line-height: 20px; color: inherit; }}
.weblayer--box-subscription #exponea-voucher {{ margin: 0; font-size: 24px; font-weight: 700; text-align: center; display: flex; align-items: center; justify-content: center; }}
.weblayer--box-subscription #exponea-voucher:not(:empty) {{ margin: 0 0 16px; }}

/* close — DS 16px close, inset gap 4 (16px) */
.weblayer--box-subscription .close-icon {{ position: absolute; top: 12px; right: 12px; z-index: 2147483001; width: 40px; height: 40px; padding: 12px; margin: 0;
  border: 0; background: transparent; line-height: 0; cursor: pointer; color: transparent; }}
.weblayer--box-subscription .close-icon svg {{ width: 16px; height: 16px; display: block; }}
.weblayer--box-subscription .close-icon path {{ stroke: #000000; stroke-width: 1.25; }}

/* position + entrance — the weblayer JS adds these from the position / animation params */
.weblayer--box-subscription.enter-fade {{ animation: wlFade .3s ease-in-out; }}
@keyframes wlFade {{ from {{ opacity: 0; }} to {{ opacity: 1; }} }}
.weblayer--box-subscription.horizontal-left {{ left: 0; }}
.weblayer--box-subscription.horizontal-right {{ right: 0; }}
.weblayer--box-subscription.horizontal-center {{ left: 50%; transform: translateX(-50%); }}
.weblayer--box-subscription.vertical-top {{ top: 0; }}
.weblayer--box-subscription.vertical-bottom {{ bottom: 0; }}
.weblayer--box-subscription.vertical-center {{ top: 50%; transform: translateY(-50%); }}
.weblayer--box-subscription.vertical-center.horizontal-center {{ transform: translate(-50%, -50%); }}

@media only screen and (max-width: 767px) {{
  .weblayer--box-subscription .heading {{ font-size: 24px; line-height: 28px; }}
  .weblayer--box-subscription .form-inner {{ padding: 32px 16px 16px; }}
}}
"""

WHITE_X = ".weblayer--box-subscription .close-icon path { stroke: #FFFFFF; }"

LAYOUT = {
'a-split': r"""
/* ---------- A · Split — desktop 50/50: 4:5 image (448 × 560) | content · mobile: 16:9 mobile asset on top, content under ---------- */
@media only screen and (min-width: 768px) {
  .weblayer--box-subscription { width: 928px; max-width: calc(100vw - 64px); }
  .weblayer--box-subscription .inner.step-one { display: grid; grid-template-columns: 448px 1fr; }   /* no !important: the JS hides it inline */
  .weblayer--box-subscription .inner.step-two[style*="block"] { display: grid !important; grid-template-columns: 448px 1fr; }   /* beats the JS inline display:block */
  .weblayer--box-subscription .image-surround { min-height: 560px; }
  .weblayer--box-subscription .form-inner { padding: 48px 40px 32px; justify-content: center; }
}
@media only screen and (max-width: 767px) {
  .weblayer--box-subscription { width: 358px; }
  .weblayer--box-subscription .image-surround { aspect-ratio: 16 / 9; flex: none; }
  .weblayer--box-subscription .form-inner { padding: 24px 16px 16px; }
  .weblayer--box-subscription .heading { font-size: 22px; line-height: 26px; }
  .weblayer--box-subscription .close-icon path { stroke: #FFFFFF; } /* the close sits on the image */
}
""",
'b-full-bleed': r"""
/* ---------- B · Full bleed — 2:3 portrait image behind everything, form on a black gradient, white fields + CTA ---------- */
.weblayer--box-subscription { width: 480px; background: #000000; color: #FFFFFF; }
.weblayer--box-subscription .inner.step-one,
.weblayer--box-subscription .inner.step-two { position: relative; aspect-ratio: 2 / 3; }
.weblayer--box-subscription .inner.step-two[style*="block"] { display: flex !important; }   /* beats the JS inline display:block; step one keeps its own flex and can still be hidden */
.weblayer--box-subscription .image-surround { position: absolute; inset: 0; }
.weblayer--box-subscription .form-inner { position: relative; margin-top: auto; padding-top: 160px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0, rgba(0,0,0,.55) 120px, rgba(0,0,0,.88) 100%); }
.weblayer--box-subscription #exponea-form input:not([type='checkbox']) { border-color: #FFFFFF; }
.weblayer--box-subscription .button.submit, .weblayer--box-subscription .step-two .button { background: #FFFFFF; color: #000000; }
.weblayer--box-subscription .button.submit:hover, .weblayer--box-subscription .step-two .button:hover { background: #E7E7E7; }
.weblayer--box-subscription .step-one .button.close { color: #FFFFFF; }
.weblayer--box-subscription .inner.step-one .conditions { color: rgba(255,255,255,.78); }
""" + WHITE_X + r"""
@media only screen and (max-width: 767px) {
  .weblayer--box-subscription { width: 358px; }
  .weblayer--box-subscription .form-inner { padding-top: 96px; }
}
""",
'c-brand-lockup': r"""
/* ---------- C · Brand lockup — the live partner lockup GIF (brand | The Brand Room, 600 × 234) on black over a white form ---------- */
.weblayer--box-subscription { width: 480px; }
.weblayer--box-subscription .image-surround { background: #000000; aspect-ratio: 600 / 234; flex: none; }
.weblayer--box-subscription .image-surround img { object-fit: contain; }
.weblayer--box-subscription .form-inner { padding-top: 32px; }
""" + WHITE_X + r"""
@media only screen and (max-width: 767px) { .weblayer--box-subscription { width: 358px; } }
""",
'd-slide-in': r"""
/* ---------- D · Slide-in — 400 card bottom-left (desktop) / bottom of the screen (mobile) over the 50% overlay;
   the 4:5 image as a 104px thumbnail beside the copy. Set position params Bottom + Left (README). ---------- */
.weblayer--box-subscription { width: 400px; box-shadow: 0 8px 18px rgba(22,19,20,.14); }
.weblayer--box-subscription.horizontal-left { left: 24px; }
.weblayer--box-subscription.vertical-bottom { bottom: 24px; }
.weblayer--box-subscription .inner.step-one { display: grid; grid-template-columns: 104px 1fr; column-gap: 16px; align-items: start; padding: 24px; }
.weblayer--box-subscription .inner.step-one .form-inner { display: contents; }
.weblayer--box-subscription .inner.step-one .image-surround { grid-column: 1; grid-row: 1 / 4; aspect-ratio: 4 / 5; align-self: center; }
.weblayer--box-subscription .inner.step-one .text.line-one,
.weblayer--box-subscription .inner.step-one .heading,
.weblayer--box-subscription .inner.step-one .text.line-two { grid-column: 2; }
.weblayer--box-subscription .inner.step-one .text.line-one { align-self: end; }
.weblayer--box-subscription .inner.step-one #exponea-form,
.weblayer--box-subscription .inner.step-one .button.close,
.weblayer--box-subscription .inner.step-one .conditions { grid-column: 1 / -1; }
.weblayer--box-subscription .inner.step-one .heading { font-size: 20px; line-height: 24px; padding-right: 16px; }
.weblayer--box-subscription .inner.step-two .image-surround { display: none; }
.weblayer--box-subscription .inner.step-two .form-inner { padding: 32px 24px 24px; }
@media only screen and (max-width: 767px) {
  .weblayer--box-subscription, .weblayer--box-subscription.horizontal-left { left: 0; width: 100%; max-width: 100%; }
  .weblayer--box-subscription.vertical-bottom { bottom: 0; }
  .weblayer--box-subscription .inner.step-one { padding: 24px 16px 16px; }
  .weblayer--box-subscription .inner.step-one .heading { font-size: 20px; line-height: 24px; }
}
""",
'e-two-step': r"""
/* ---------- E · Two-step — step 1 email only; step 2 pick favourite brands (DS chips), then thank you.
   Desktop as A (4:5 image | content); mobile the 4:5 image as a thumbnail beside the copy. Needs addon.js (README). ---------- */
@media only screen and (min-width: 768px) {
  .weblayer--box-subscription { width: 928px; max-width: calc(100vw - 64px); }
  .weblayer--box-subscription .inner.step-one { display: grid; grid-template-columns: 448px 1fr; }   /* no !important: the JS hides it inline */
  .weblayer--box-subscription .inner.step-two[style*="block"] { display: grid !important; grid-template-columns: 448px 1fr; }   /* beats the JS inline display:block */
  .weblayer--box-subscription .image-surround { min-height: 560px; }
  .weblayer--box-subscription .form-inner { padding: 48px 40px 32px; justify-content: center; }
}
@media only screen and (max-width: 767px) {
  .weblayer--box-subscription { width: 358px; }
  .weblayer--box-subscription .inner.step-one { display: grid; grid-template-columns: 104px 1fr; column-gap: 16px; padding: 24px 16px 16px; }
  .weblayer--box-subscription .inner.step-one .form-inner { display: contents; }
  .weblayer--box-subscription .inner.step-one .image-surround { grid-column: 1; grid-row: 1 / 4; aspect-ratio: 4 / 5; align-self: center; }
  .weblayer--box-subscription .inner.step-one .text.line-one,
  .weblayer--box-subscription .inner.step-one .heading,
  .weblayer--box-subscription .inner.step-one .text.line-two { grid-column: 2; }
  .weblayer--box-subscription .inner.step-one .text.line-one { align-self: end; }
  .weblayer--box-subscription .inner.step-one #exponea-form,
  .weblayer--box-subscription .inner.step-one .button.close,
  .weblayer--box-subscription .inner.step-one .conditions { grid-column: 1 / -1; }
  .weblayer--box-subscription .inner.step-one .heading { font-size: 20px; line-height: 24px; padding-right: 16px; }
  .weblayer--box-subscription .inner.step-two .image-surround { display: none; }
}
/* brand picker (step 2) — DS chips: 36px, Grey keyline, black when picked */
.weblayer--box-subscription .brand-chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 0 0 24px; }
.weblayer--box-subscription .brand-chip { height: 36px; padding: 0 14px; border: 1px solid #E7E7E7; background: #FFFFFF; color: #000000; border-radius: 0;
  font-family: inherit; font-size: 13px; font-weight: 400; cursor: pointer; white-space: nowrap; }
.weblayer--box-subscription .brand-chip.on { background: #000000; border-color: #000000; color: #FFFFFF; }
.weblayer--box-subscription .step-two .button.skip-brands { background: none; color: #000000; height: auto; margin: 12px auto 0; padding: 2px 16px; width: auto;
  font-size: 14px; line-height: 20px; font-weight: 700; text-transform: none; }
.weblayer--box-subscription .step-two .button.skip-brands:hover { background: none; }
.weblayer--box-subscription .step-two .text.line-one { margin-bottom: 8px; }
""",
}

TITLES = {'a-split':'A · Split','b-full-bleed':'B · Full bleed','c-brand-lockup':'C · Brand lockup','d-slide-in':'D · Slide-in','e-two-step':'E · Two-step'}

# ---------------------------------------------------------------- HTML: the live template, minimal edits per option
def base_html(device):
    h = TEMPLATES[device]
    # the phone label pointed at the email input (template bug) — point it at the phone input
    h = h.replace('<label for="email" class="input-label">[[ {name: \'PhoneInputPlaceholder\'', '<label for="phone" class="input-label">[[ {name: \'PhoneInputPlaceholder\'')
    # phone optional: drop `required` (pair with the one-line JS change in README)
    h = h.replace('required class="phone">', 'class="phone">')
    return h

def html_for(oid, device):
    h = base_html(device)
    if oid == 'e-two-step':
        brands = ['Lacoste','BOSS','Calvin Klein','Tommy Hilfiger','Armani Exchange','GUESS','Ted Baker','Valentino','Sweaty Betty','Crew Clothing','Napapijri','Lyle & Scott','HUGO','DKNY','Hunter','Ilse Jacobsen']
        chips = ''.join(f'\n\t                <button type="button" class="brand-chip" data-brand="{html.escape(b)}" aria-pressed="false">{html.escape(b)}</button>' for b in brands)
        step = f'''<div class="brand-step">
	            <p class="text line-one">[[ {{name: 'brandEyebrow', category: 'Copywriting', orderIndex: '6040', isJsonParam: true}} : text | You’re in ]]</p>
	            <p class="heading">[[ {{name: 'brandHeading', category: 'Copywriting', orderIndex: '6041', isJsonParam: true}} : text | Which brands do you love? ]]</p>
	            <p class="text">[[ {{name: 'brandText', category: 'Copywriting', orderIndex: '6042', isJsonParam: true}} : text | Pick a few and we’ll tailor your style tips, new-in drops and offers to them. ]]</p>
	            <div class="brand-chips">{chips}
	            </div>
	            <button type="button" class="button save-brands">[[ {{name: 'brandButtonText', category: 'Copywriting', orderIndex: '6043', isJsonParam: true}} : text | Save my brands ]]</button>
	            <button type="button" class="button skip-brands">[[ {{name: 'brandSkipText', category: 'Copywriting', orderIndex: '6044', isJsonParam: true}} : text | Skip for now ]]</button>
	        </div>
	        <div class="thanks" style="display: none;">'''
        a = '<div class="form-inner">\n\t            <p class="heading">'
        assert a in h
        h = h.replace(a, '<div class="form-inner">\n\t        ' + step + '\n\t            <p class="heading">')
        b = '[[ {name: \'ThankYouButtonText\', category: \'Copywriting\', orderIndex: \'6055\', isJsonParam: true} : text | Continue Shopping ]]\n                </button>'
        assert b in h
        h = h.replace(b, b + '\n\t        </div>')
    return h

ADDON = r"""/* ---- E · Two-step add-on — paste at the very end of the weblayer JS, inside the function (after the last line).
   Step 2 (.step-two) opens on the brand picker; Save stores the picks and shows the thank-you; Skip goes straight to it.
   Saves to the customer profile (favourite_brands) and tracks a favourite_brands event. ---- */
(function () {
  if (window.__tbrBrandPicker) return; window.__tbrBrandPicker = true;
  document.addEventListener('click', function (e) {
    var box = e.target.closest && e.target.closest('.weblayer--box-subscription'); if (!box) return;
    var chip = e.target.closest('.brand-chip');
    if (chip) { chip.classList.toggle('on'); chip.setAttribute('aria-pressed', chip.classList.contains('on')); return; }
    var save = e.target.closest('.save-brands'), skip = e.target.closest('.skip-brands'); if (!save && !skip) return;
    var picks = [].slice.call(box.querySelectorAll('.brand-chip.on')).map(function (c) { return c.getAttribute('data-brand'); });
    if (save && picks.length) {
      try { self.sdk.update({ favourite_brands: picks }); } catch (err) { console.error(err); }
      try { self.sdk.track('favourite_brands', { brands: picks.join(', '), source: self.data && self.data.banner_name, location: window.location.href }); } catch (err) { console.error(err); }
    }
    box.querySelector('.brand-step').style.display = 'none';
    box.querySelector('.thanks').style.display = 'block';
  });
})();
"""

PARAMS = {  # script params (weblayer JS → "DEFAULT SETUP / FORM / POSITION" params) per option
    'a-split': {'PARAM_positionVertical':'Center','PARAM_positionHorizontal':'Center','PARAM_enterAnimation':'Fade in','PARAM_includePhone':'yes'},
    'b-full-bleed': {'PARAM_positionVertical':'Center','PARAM_positionHorizontal':'Center','PARAM_enterAnimation':'Fade in','PARAM_includePhone':'yes'},
    'c-brand-lockup': {'PARAM_positionVertical':'Center','PARAM_positionHorizontal':'Center','PARAM_enterAnimation':'Fade in','PARAM_includePhone':'yes'},
    'd-slide-in': {'PARAM_positionVertical':'Bottom','PARAM_positionHorizontal':'Left','PARAM_enterAnimation':'Fade in','PARAM_includePhone':'yes'},
    'e-two-step': {'PARAM_positionVertical':'Center','PARAM_positionHorizontal':'Center','PARAM_enterAnimation':'Fade in','PARAM_includePhone':'no'},
}
IMAGES = {  # per option, per weblayer — upload to Bloomreach and pick in the editor's `image` param
    'a-split':        {'desktop': PAGES+'lacoste-p.jpg', 'mobile': PAGES+'lacoste-m.jpg'},   # 4:5 portrait column · 16:9 landscape on top
    'b-full-bleed':   {'desktop': PAGES+'lacoste-p.jpg', 'mobile': PAGES+'lacoste-p.jpg'},
    'c-brand-lockup': {'desktop': LOCKUP_GIF,            'mobile': LOCKUP_GIF},              # already in Bloomreach
    'd-slide-in':     {'desktop': PAGES+'lacoste-p.jpg', 'mobile': PAGES+'lacoste-p.jpg'},   # 4:5 thumbnail
    'e-two-step':     {'desktop': PAGES+'lacoste-p.jpg', 'mobile': PAGES+'lacoste-p.jpg'},
}

# split the one stylesheet into the desktop and the mobile weblayer's CSS (no media queries left in either)
def css_for(oid, device):
    css = BASE.format(title=TITLES[oid] + ' — ' + device.upper() + ' weblayer') + LAYOUT[oid]
    out, i = '', 0
    for m in re.finditer(r'@media[^{]*\{', css):
        if m.start() < i: continue
        depth, j = 1, m.end()
        while depth:
            depth += {'{': 1, '}': -1}.get(css[j], 0); j += 1
        q, inner = m.group(0), css[m.end():j - 1]
        keep = ('max-width: 767px' in q and device == 'mobile') or ('min-width: 768px' in q and device == 'desktop')
        out += css[i:m.start()] + (re.sub(r'(?m)^  ', '', inner.strip('\n')) + '\n' if keep else '')
        i = j
    out += css[i:]
    assert '@media' not in out.replace('@keyframes', ''), 'media query left in ' + oid + ' ' + device
    return re.sub(r'\n{3,}', '\n\n', out)

PHONE_FIX = """// was:   if(typeof phoneInput !== "undefined") {            (inside form.onsubmit, "Phone number validation if input exists")
// now:   if(typeof phoneInput !== "undefined" && phoneInput.value.trim() !== "") {
// → an empty phone is allowed (optional); a phone that is typed is still validated as a UK mobile.
// SMS consent: only grant thebrandroom_sms when a phone was given — in the consent loop, skip the sms category when !eventProperties.phone."""

def readme(oid):
    p = PARAMS[oid]
    rows = '\n'.join(f'| `{k}` | `{v}` | `{v}` |' for k, v in p.items())
    imgs = f"| `image` | {IMAGES[oid]['desktop']} | {IMAGES[oid]['mobile']} |"
    copy = '\n'.join(f'| `{k}` | {v or "(empty)"} |' for k, v in LIVE.items() if k not in ('closeIconSize','closeIconColor','imageWidth','prePopulateEmail','prePopulatePhone'))
    extra = ''
    if oid == 'e-two-step':
        extra = """
## Two-step add-on (required, both weblayers)
Append `addon.js` at the very end of each weblayer's JS (inside the function). Step 2 opens on the brand picker; **Save my brands** writes
`favourite_brands` to the customer and tracks a `favourite_brands` event, then shows the thank-you; **Skip for now** goes straight to it.
Brand chips are plain buttons in the HTML — edit the list there. New copy params: `brandEyebrow`, `brandHeading`, `brandText`, `brandButtonText`, `brandSkipText`.
`PARAM_includePhone = "no"` removes the phone from step 1 (email only) — the email capture and consent run exactly as today on step 1.
"""
    if oid == 'a-split':
        extra = """
## Images
Desktop and mobile are separate weblayers, so each takes its own asset in the normal `image` param: desktop the 4:5 portrait, mobile the 16:9 landscape.
"""
    if oid == 'c-brand-lockup':
        extra = """
## Images
Uses the live partner lockup GIF already in Bloomreach — nothing to upload.
"""
    return f"""# {TITLES[oid]} — Bloomreach weblayers (Desktop + Mobile)

Built 22 Oct 2026 from the DG design system Sign-up modal (prototype: https://jakerayner96.github.io/debenhamsgroup.design/projects/brandroom-signup/).
Based on the live templates ("A - Email & SMS Signup - Desktop" / "- Mobile") — same structure, ids, classes and `[[ params ]]`, so the existing weblayer JS keeps capturing.
**Read HOW-TO-BLOOMREACH.md first.**

**Status:** checked in `desktop/preview.html` (1440) and `mobile/preview.html` (390): layout, empty phone passes, submit → thank you{', brand step' if oid=='e-two-step' else ''}.
**Not yet run inside Bloomreach** — test in the weblayer editor preview and with a test email before it goes live.

## Files
| Weblayer | HTML tab | CSS tab | Preview |
|---|---|---|---|
| A - Email & SMS Signup - **Desktop** | `desktop/weblayer.html` | `desktop/weblayer.css` | `desktop/preview.html` |
| A - Email & SMS Signup - **Mobile** | `mobile/weblayer.html` | `mobile/weblayer.css` | `mobile/preview.html` |

The two HTML files are the same (as live); the CSS is the difference.

## Script params (JS tab, top of the script)
| Param | Desktop | Mobile |
|---|---|---|
{rows}

Everything else in the JS stays as it is (consent categories, identify, next weblayer id, triggers).

## Phone optional (JS change, one line, both weblayers)
```js
{PHONE_FIX}
```
The HTML already drops `required` from the phone input and fixes its label (`for="phone"`, was `for="email"`).
Without the JS change the phone stays required (the script validates it) — everything else still works.
{extra}
## Image param
| Param | Desktop | Mobile |
|---|---|---|
{imgs}

## Copy params (live copy, both weblayers)
| Param | Value |
|---|---|
{copy}
"""

# ---------------------------------------------------------------- preview: fill the params, inline the CSS, mimic the weblayer JS
PARAM_RE = re.compile(r"\[\[\s*\{(.*?)\}\s*:\s*[a-z]+(?:\([^)]*\))?\s*(?:\|\s*(.*?))?\s*\]\]", re.S)
def fill(h, values):
    h = re.sub(r'\{%\s*if.*?%\}.*?\{%\s*endif\s*%\}', '', h, flags=re.S)  # prefill Jinja → off in preview
    def sub(m):
        name = re.search(r"name:\s*'([^']+)'", m.group(1)).group(1)
        if name in values: return html.escape(values[name], quote=True)
        return (m.group(2) or '').strip()
    return PARAM_RE.sub(sub, h)

def preview(oid, device, wl_html, css):
    vals = dict(LIVE); vals['image'] = IMAGES[oid][device]
    if oid == 'e-two-step': vals['buttonText'] = 'Continue'
    body = fill(wl_html, vals)
    p = PARAMS[oid]
    cls = {'Top':'vertical-top','Center':'vertical-center','Bottom':'vertical-bottom'}[p['PARAM_positionVertical']] + ' ' + \
          {'Left':'horizontal-left','Center':'horizontal-center','Right':'horizontal-right'}[p['PARAM_positionHorizontal']] + ' enter-fade'
    addon = ADDON if oid == 'e-two-step' else ''
    return f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{TITLES[oid]} · {device} weblayer preview</title>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/css/intlTelInput.css">
<style>
/* preview page only — a plain Brand Room-ish page behind the weblayer */
html,body{{margin:0;font-family:Archivo,system-ui,sans-serif;background:#FFF}}
.pv-page{{padding:24px;color:#000}}.pv-page h1{{font-size:28px;margin:0 0 16px}}.pv-grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:2px}}.pv-grid i{{display:block;aspect-ratio:3/4;background:#F2F2F2}}
.pv-bar{{position:fixed;left:8px;bottom:8px;z-index:2147483003;font:12px system-ui;background:#000;color:#FFF;padding:6px 10px;border-radius:6px}}.pv-bar a{{color:#7CC4FF}}
</style>
<style>
{css}
</style></head>
<body>
<div class="pv-page"><h1>THE BRAND ROOM</h1><div class="pv-grid">{'<i></i>'*12}</div></div>
<div class="pv-bar">{TITLES[oid]} · {device.upper()} weblayer preview · <a href="#" onclick="location.reload();return false">replay</a></div>
{body}
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/intlTelInput.min.js"></script>
<script>
/* mimics the weblayer JS for the preview: position classes, close, background click, phone (intl-tel-input, GB only), validation, step-one → step-two */
var self = {{ sdk: {{ update: function (p) {{ console.log('sdk.update', p); }}, track: function (e, p) {{ console.log('sdk.track', e, p); }} }}, data: {{ banner_name: 'preview' }} }};
(function () {{
  var g = document.getElementById('exponea-greyout'), box = g.querySelector('.weblayer--box-subscription');
  box.className += ' {cls}';
  var remove = function (e) {{ if (e) e.preventDefault(); g.remove(); }};
  g.querySelectorAll('.close').forEach(function (b) {{ b.onclick = remove; }});
  g.onclick = function (e) {{ if (e.target === e.currentTarget) remove(); }};
  var phone = g.querySelector('.phone'), email = g.querySelector('.email'), iti;
  if ({'true' if p['PARAM_includePhone']=='no' else 'false'}) {{ var pf = g.querySelector('.phone_fieldset'); if (pf) pf.remove(); phone = null; }}
  if (phone) iti = window.intlTelInput(phone, {{ initialCountry: 'gb', onlyCountries: ['gb'], preferredCountries: ['gb'] }});
  var bad = function (input, msg) {{ input.setCustomValidity(msg); input.reportValidity(); }};
  [phone, email].forEach(function (i) {{ if (i) i.oninput = function () {{ i.setCustomValidity(''); }}; }});
  g.querySelector('#exponea-form').onsubmit = function (e) {{
    e.preventDefault();
    if (phone && phone.value.trim() !== '' && !(iti && iti.isValidNumber())) return bad(phone, 'Enter a valid phone number');   /* phone optional */
    if (email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{{2,}}$/.test(email.value.toLowerCase())) return bad(email, 'Enter a valid email');
    g.querySelector('.step-one').style.display = 'none'; g.querySelector('.step-two').style.display = 'block';
  }};
}})();
{addon}
</script>
</body></html>
"""

def main():
    import shutil
    index = []
    for oid in LAYOUT:
        d = os.path.join(HERE, oid)
        if os.path.isdir(d): shutil.rmtree(d)
        files = []
        for dev in DEVICES:
            dd = os.path.join(d, dev); os.makedirs(dd)
            h, css = html_for(oid, dev), css_for(oid, dev)
            open(os.path.join(dd, 'weblayer.html'), 'w').write(h)
            open(os.path.join(dd, 'weblayer.css'), 'w').write(css)
            open(os.path.join(dd, 'preview.html'), 'w').write(preview(oid, dev, h, css))
            files += [f'{dev}/weblayer.html', f'{dev}/weblayer.css', f'{dev}/preview.html']
        open(os.path.join(d, 'README.md'), 'w').write(readme(oid)); files.append('README.md')
        if oid == 'e-two-step':
            open(os.path.join(d, 'addon.js'), 'w').write(ADDON); files.append('addon.js')
        index.append({'id': oid, 'title': TITLES[oid], 'files': files})
    open(os.path.join(HERE, 'index.json'), 'w').write(json.dumps({'shared': ['HOW-TO-BLOOMREACH.md', 'template-live-desktop.html', 'template-live-mobile.html'], 'options': index}, indent=1))
    print('built', [i['id'] for i in index])

if __name__ == '__main__':
    main()
