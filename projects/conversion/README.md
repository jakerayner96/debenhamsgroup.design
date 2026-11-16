# Conversion master 2027

**Live:** https://jakerayner96.github.io/debenhamsgroup.design/projects/conversion/
**Date:** 16 Nov 2026 · **Owner:** Jake Rayner (UX)

The conversion programme's master prototype: the whole journey, **Home → PLP → PDP → Bag → Checkout** (+ Wishlist), every fascia, with a **Today / 2027** switch. Mobile web first, desktop equivalent.

## What 2027 changes
| Page | 2027 | Evidence |
|---|---|---|
| Every page | USP banners in calm mode: one row, one message, still (`usp.js` `data-usp-calm`) | 4 promo layers = 214px (25%) before content on live mobile |
| Home | `templates/home2.html`: Homepage 2.0, a personalised home per customer from `assets/ds/home2-profiles.js` (53 profiles: 6 Figma Homepage 2.0 profiles, the 40 DS personas, a default per fascia), rendered by `assets/ds/home2.js` (22 modules, catalogue `homepage-2`) | First product 2.4 screens down; 20+ discount figures baked into images |
| Bag | `templates/bag.html` with `clean:true` (one Checkout securely CTA) and no pre-added / upsell sections | Two totals (£44.25 / £47.46), Deliver+ ×8, prize draw; all 5 typical personas HIGH/CRITICAL |
| Checkout | `templates/checkout.html` (`co:'new'`): express pay first, two-line delivery, one opt-in membership moment, a summary that reads, sticky Pay, keyboard-operable | 4 entry routes, discount shown twice, 4 delivery prices, card field focus trap (a11y audit Apr 2026) |

## How it works
Same pattern as `projects/master`: `page.html` opens the DS template for the page **as it stands** and adds `conversion.js` (journey layer: logo → Home, card → PDP, Add to bag → toast → Bag, Bag CTA → Checkout, Homepage 2.0 `[data-h2-go]` links, calm USP, 240ms page fade). `?s={"brand","page","ver":"new|live","profile"}`.

On Home, the left panel's **Customer** picker lists every profile for the fascia, with their background, drivers and every module's experience type (Guided · Social · Visually similar · Personalisation · Themes) and the data that put it there.

## Not yet
- PLP has its own USP markup, so calm mode doesn't reach it yet.
- PDP 2027 (PDP Redesign 2027 decision zone O-01…O-04) is the next round; today the PDP is the master PDP + calm USP.
- Prototype product sets are small: some Debenhams beauty / kitchen modules show the nearest products.
