/* DG Group Design System — customer personas (11 Nov 2026). GENERATED: edit the source, not by hand.
   Content is the "Meet our customers" PDF word for word (assets/ds/personas/meet-our-customers.pdf): 5 sites × 8 personas × 8 scenarios.
   Card fields (label · role · tag · head · headSub · chips · desc · scen[t,v,k] · finding · status) are what the cards show — never reword them.
   `test` on each persona + `brands[].test` = the linked "test personas and scenarios" pages, verbatim: goal (g), journey (st), what to watch for (w),
   ground rules, test identity, agent questions. Used by the persona-test skill (tools/persona-test) to run a prototype against a site's personas.
   Renderer: assets/ds/personas.js (DG_personaCard, DG_personaGrid). Component: Persona card (.persona) in components.css + catalogue.js. */
window.DG_PERSONAS={
"meta": {
"eyebrow": "DEBENHAMS GROUP · SHOPPING BY PERSONA",
"title": "Meet our customers",
"intro": "Eight personas for each of our five sites: the typical customer, the next six largest behavioural cohorts from 12 months of order data, and a catch-all for everyone else. Each has eight scenarios.",
"stats": [
[
"40",
"personas"
],
[
"320",
"scenarios"
],
[
"5",
"websites"
],
[
"12 months",
"of orders behind the cohorts"
]
],
"legend": [
[
"everyday",
"Everyday journey"
],
[
"christmas",
"Christmas"
],
[
"sale",
"Post-Christmas sale"
],
[
"bf",
"Black Friday"
]
],
"foot": "Portraits are original illustrations, not photographs of real people. Catch-all personas rotate their details on each run, so their portraits are placeholders. Cohort shares are behavioural: the typical customer from the last three months of orders, the other four from 12 months (10 Oct 2025 to 8 Oct 2026). They overlap and don't sum to 100%. Cards link to live results where a persona has been run.",
"source": "meet-our-customers.pdf (Chromium print, 9 Oct 2026) + the five linked \"test personas and scenarios\" pages",
"pdf": "assets/ds/personas/meet-our-customers.pdf",
"updated": "2026-11-11"
},
"brands": [
{
"slug": "debenhams",
"name": "Debenhams",
"site": "https://www.debenhams.com",
"full": {
"label": "Full personas and scenarios (debenhams.com)",
"url": "https://claude.ai/artifact/QNLSB2e2KzqdtfR2FRXWKW"
},
"test": {
"title": "Debenhams test personas and scenarios",
"intro": [
"Eight personas for this site: the typical customer, the next six largest behavioural cohorts, and a catch-all for everyone else, from 12 months of order data (10 Oct 2025 to 8 Oct 2026). Each has eight scenarios: five everyday journeys plus Christmas, post-Christmas sale and Black Friday.",
"Personas are ordered by their share of customers, largest first. The typical customer is built from the largest cohort; the others are the next four largest cohorts."
],
"rules": [
"Start by deleting all items in the cart, then log out.",
"Use a dedicated test account, not live credentials.",
"Never enter personal, address or payment details.",
"Pause for approval before applying codes, deleting items or submitting any payment step."
],
"shareNote": "Each profile shows the share of the site's customers over the last three months (3 Jul to 2 Oct 2026) for the typical customer, and over 12 months (10 Oct 2025 to 8 Oct 2026) for the other four, whose orders match a behavioural proxy for the persona. Order data holds no age, gender or household details, so the proxies use what is observable: categories bought, payment method, delivery choice, app use, postcode area, promo codes and spend. They are indicative only, overlap between personas, and don't sum to 100%. Source: Group analytics warehouse, excluding staff and sample orders.",
"note": "Scenario products are typical Debenhams categories. Availability was not checked against the live site, so swap in what is in stock. Where a category looks thin or missing, treat that as a search-relevance and empty-state test."
},
"personas": [
{
"id": "helen",
"label": "Helen, 46",
"name": "Helen",
"age": 46,
"role": "Office manager",
"kind": "typical",
"tag": "TYPICAL CUSTOMER",
"head": "Typical customer",
"headSub": "Built from the largest cohort on Debenhams",
"share": null,
"chips": [
"Size UK 14",
"Laptop in the evening, phone at lunch; doesn't use the app",
"Debit card, Apple Pay",
"£50–£60 per order, one or two orders a season"
],
"desc": "Shops Debenhams once or twice a season, usually in the evening on her laptop or phone, for something for herself and something for the house. Pays by card or Apple Pay, rarely uses a code, and most of what she buys turns out to be marketplace stock.",
"scen": [
{
"t": "A dress for herself and a lamp for the hall",
"v": "£55",
"k": "everyday"
},
{
"t": "Marketplace trust check",
"v": "£60",
"k": "everyday"
},
{
"t": "Checking out as a returning guest",
"v": "£52",
"k": "everyday"
},
{
"t": "Evening browsing on her phone",
"v": "£50",
"k": "everyday"
},
{
"t": "Returning a dress that didn't suit",
"v": "Refund",
"k": "everyday"
},
{
"t": "Christmas for the household and her mum",
"v": "£300",
"k": "christmas"
},
{
"t": "Post-Christmas home refresh",
"v": "£100",
"k": "sale"
},
{
"t": "Black Friday without the rush",
"v": "£120",
"k": "bf"
}
],
"finding": {
"sev": "HIGH",
"text": "Deliver+ pre-added to a £44 bag"
},
"status": {
"text": "See Helen's live results →",
"url": "https://claude.ai/artifact/71bYgVdGQ2qvEWW6z6uRVN"
},
"img": "assets/ds/personas/portraits/debenhams-helen.png",
"test": {
"sub": "46 · Office manager · Married, two children · The typical Debenhams customer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Mark; children Sophie 14 and Ben 11"
],
[
"Work",
"Office manager at a solicitors' firm"
],
[
"Device",
"Laptop in the evening, phone at lunch; doesn't use the app"
],
[
"Pays with",
"Debit card, Apple Pay"
],
[
"Size",
"UK 14"
],
[
"Budget",
"£50–£60 per order, one or two orders a season"
],
[
"Full name",
"Helen Claudeai"
],
[
"Test email",
"helen.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE HELEN, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, Instagram, Pinterest"
],
[
"Share of customers",
"Largest cohort — the modal Debenhams customer: returning, one order in the period, UK, no app, card or Apple Pay, median order £51.73 (36.7% returning customers; 82.9% placed one order in three months; 74.6% bought marketplace stock)"
]
],
"fam": [
"Mark, 47, husband: cycling, smart-casual shirts",
"Sophie, 14, daughter: skincare, oversized hoodies",
"Ben, 11, son: football, Lego",
"Pat, 72, her mum: cosy knitwear, puzzles"
],
"angle": "Represents the largest Debenhams cohort: a returning but infrequent UK shopper, buying women's fashion and home, mostly marketplace items, around £52 an order, in the evening, without a code. Tests whether the everyday journey is quick, trusted and free of surprises.",
"q": [
"Find me a midi dress in a 14 under £40 that gets here by Friday, and tell me the total including delivery before I add anything.",
"If I buy the dress and a table lamp from different sellers, will they arrive separately, and who do I send each one back to?",
"Is there a code or offer that works on this basket, so I don't pay more than I need to?"
],
"emailTimes": [
"20:30",
"20:30",
"20:30",
"20:30",
"19:30",
"10:00",
"20:00"
],
"s": [
{
"g": "Buy one dress and one home item in a single evening session, in as few steps as possible.",
"st": [
"Search 'midi dress' and filter by size 14",
"Add a dress",
"Search 'table lamp' and add one",
"Review the bag",
"Check the total and delivery before checkout"
],
"w": [
"Is Deliver+ added to the total without being chosen?",
"Does the bag say which items come from marketplace sellers and when each will arrive?",
"Does the bag show the delivery cost, and does it match the delivery page?",
"Are the two sellers' delivery dates clear?"
]
},
{
"g": "Helen notices most items are 'Sold & Delivered by' other companies and wants to know what that means for returns and delivery.",
"st": [
"Open a marketplace product",
"Find who sells it and who delivers it",
"Find the returns process for marketplace items",
"Compare it with a Debenhams-sold product",
"Check the delivery estimate on both"
],
"w": [
"Is the seller clearly identified before adding to bag?",
"Is the different returns process explained before purchase?",
"Are marketplace delivery estimates shown on the product page?",
"Does the 'Free next day' banner apply to marketplace items?"
]
},
{
"g": "She has an account but can't remember the password, so she checks out as a guest.",
"st": [
"Add an item and go to checkout",
"Choose guest checkout with her test email",
"Enter the test address and phone",
"Review pre-selected delivery and consent options",
"Stop at the payment method step"
],
"w": [
"Is the cheapest qualifying delivery option selected by default?",
"Are marketing consent boxes pre-ticked?",
"Does the total match what the bag showed?",
"Is the 'forgot password' route easy if she changes her mind?"
]
},
{
"g": "Helen browses on her phone at 8.30pm and expects pages to load quickly.",
"st": [
"Open the homepage on mobile",
"Browse Women and then Home",
"Open three product pages",
"Add one to the bag",
"Time how long listings take to appear"
],
"w": [
"Do product grids take more than two seconds to populate?",
"Do pop-ups or sponsored banners get in the way?",
"Are 'Popular' and 'In demand' overlays obscuring images?",
"Does the bag persist when she leaves and returns?"
]
},
{
"g": "The dress arrived but didn't suit her, and she wants to send it back without fuss.",
"st": [
"Find returns information from the footer",
"Check the window, the fee and how it's refunded",
"Find the route for a marketplace item",
"Check whether an exchange is offered",
"Stop before submitting"
],
"w": [
"Is the returns fee stated on the product page or only on the returns page?",
"Is the marketplace returns route clear?",
"Is refund timing explained?",
"Is there a store or locker drop-off option?"
]
},
{
"g": "Buy a gift each for Mark, Sophie, Ben and her mum, plus a festive tablecloth, in one evening.",
"st": [
"Browse gifts by recipient",
"Add a gift for each person",
"Add a festive home item",
"Check which items are marketplace and their delivery dates",
"Check last order dates and gift options"
],
"w": [
"Are Christmas last order dates shown for marketplace items?",
"Are gift messages or receipts offered?",
"Does the bag flag items that may arrive separately?",
"Is Deliver+ added without being chosen?"
]
},
{
"g": "Helen uses the January sale to replace bedding and towels.",
"st": [
"Open the home sale",
"Filter bedding by size",
"Compare was and now prices",
"Add bedding and towels",
"Check the delivery cost and total"
],
"w": [
"Are was prices credible?",
"Does 'single' or 'double' filtering work?",
"Is the delivery cost shown in the bag?",
"Is Deliver+ pre-added?"
]
},
{
"g": "She looks at Black Friday offers but only wants genuine reductions on things she already planned to buy.",
"st": [
"Open the Black Friday offers",
"Compare prices on a watched dress and lamp",
"Check countdown timers",
"Add items and check the total",
"Check out as a guest, stopping at payment"
],
"w": [
"Are reference prices credible against earlier prices?",
"Do countdowns run out, or roll into new offers?",
"Does the basket hold stock while she decides?",
"Are codes' minimum spends shown up front?"
]
}
]
}
},
{
"id": "donna",
"label": "Donna, 38",
"name": "Donna",
"age": 38,
"role": "Teaching assistant",
"kind": "cohort",
"tag": null,
"head": "9.3%",
"headSub": "of Debenhams customers, 12 months",
"share": 9.3,
"chips": [
"Size UK 12",
"Phone in the evening",
"Debit card",
"£50–£60, one order"
],
"desc": "Buys from Debenhams once, when a code lands in her inbox or a banner catches her eye. Spends around £54, checks the code worked before she pays, and won't be back until the next offer.",
"scen": [
{
"t": "Buying with the banner code",
"v": "£55",
"k": "everyday"
},
{
"t": "Code price on the product page",
"v": "£60",
"k": "everyday"
},
{
"t": "Countdown offers",
"v": "£55",
"k": "everyday"
},
{
"t": "First-time guest checkout",
"v": "£55",
"k": "everyday"
},
{
"t": "Returning one of two items",
"v": "£2.49 fee",
"k": "everyday"
},
{
"t": "Christmas gifts with the code",
"v": "£120",
"k": "christmas"
},
{
"t": "January sale plus code",
"v": "£60",
"k": "sale"
},
{
"t": "Black Friday code hunt",
"v": "£70",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/debenhams-donna.png",
"test": {
"sub": "38 · Teaching assistant · Married, two children · One order, with a code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Carl; children Alfie 9 and Grace 6"
],
[
"Work",
"Teaching assistant"
],
[
"Device",
"Phone in the evening"
],
[
"Pays with",
"Debit card"
],
[
"Size",
"UK 12"
],
[
"Budget",
"£50–£60, one order"
],
[
"Full name",
"Donna Claudeai"
],
[
"Test email",
"donna.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE DONNA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, Instagram, Pinterest"
],
[
"Share of customers",
"9.3% — one order in 12 months with a promo code (486k of 5.2m customers); median order £53.63; 58% first-time"
]
],
"fam": [
"Carl, 40, husband: gadgets, trainers",
"Alfie, 9, son: football, Lego",
"Grace, 6, daughter: crafts, unicorns",
"Jackie, 64, her mum: bath sets"
],
"angle": "Second-largest Debenhams cohort over 12 months: one order with a promo code, median £54, mostly first-time customers. Tests whether the code journey, from banner to bag to checkout, holds together.",
"q": [
"Which code actually works on my basket, and what's the minimum spend and what's excluded?",
"Is the price on the listing the price I'll really pay once the code is applied?",
"Is this offer really ending today, or will it be back tomorrow?"
],
"emailTimes": [
"20:30",
"20:30",
"20:30",
"20:30",
"19:30",
"10:30",
"20:00"
],
"s": [
{
"g": "Donna sees '10% off orders over £75' and 'free next day delivery' and wants to use both on a £55 basket.",
"st": [
"Note the codes and conditions in the banners",
"Add a dress and a top in size 12",
"Apply each code in the bag",
"Read the result",
"Check the total before checkout"
],
"w": [
"Are minimum spends and exclusions shown in the banner, or only when a code fails?",
"Is the error wording clear?",
"Is Deliver+ added to the total without being chosen?",
"Does the bag show the real delivery price?"
]
},
{
"g": "A product page shows a 'with code' price and she wants that exact price in the bag.",
"st": [
"Open a product showing a code price",
"Add it",
"Apply the code",
"Compare the bag price with the product page",
"Remove and re-apply"
],
"w": [
"Does the bag match the advertised code price?",
"Does the discount show against the right line?",
"Can the code be removed?",
"Is the saving shown clearly?"
]
},
{
"g": "The banner has a countdown and she wants to know if the offer really ends.",
"st": [
"Note the countdown and the code",
"Return later in the day",
"Check whether the offer rolled into a new one",
"Compare the new terms",
"Apply whichever code is live"
],
"w": [
"Does the countdown end, or roll into a new offer?",
"Do terms change between offers?",
"Is the urgency honest?",
"Does the code still work after the timer ends?"
]
},
{
"g": "Donna has never had an account and checks out as a guest.",
"st": [
"Go to checkout as a guest with the test details",
"Review pre-selected delivery and consent",
"Check the total against the bag",
"Note any upsells",
"Stop at payment"
],
"w": [
"Is the cheapest delivery selected by default?",
"Is consent pre-ticked?",
"Does the checkout total match the bag?",
"Are Deliver+ or protection plans pushed again?"
]
},
{
"g": "One item didn't fit, and she wants to know what a return costs before she decides.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Check whether marketplace items differ",
"Look for an exchange",
"Stop before submitting"
],
"w": [
"Is the fee shown on the product page or only on the returns page?",
"Is the marketplace route clear?",
"Are exchanges offered?",
"Is refund timing explained?"
]
},
{
"g": "Gifts for Carl, the children and her mum in one coded order.",
"st": [
"Pick a gift each",
"Apply the code",
"Check which gifts are excluded",
"Check Christmas cut-offs",
"Check for gift messages"
],
"w": [
"Does the code apply to gifts and gift sets?",
"Are exclusions clear?",
"Are cut-offs published?",
"Are gift options offered?"
]
},
{
"g": "She wants the extra code on top of sale prices.",
"st": [
"Open the sale",
"Add two items in size 12",
"Apply the code",
"Check stacking",
"Check was prices"
],
"w": [
"Do codes stack with sale prices, and is that stated?",
"Are was prices credible?",
"Is the returns fee the same for sale items?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Donna compares Black Friday prices with the everyday code price.",
"st": [
"Note everyday code prices on three items",
"Compare on the day",
"Apply any Black Friday code",
"Check countdowns",
"Check out, stopping at payment"
],
"w": [
"Are Black Friday prices genuinely lower than the code price?",
"Do countdowns run honestly?",
"Is consent pre-ticked?",
"Is Deliver+ pre-added?"
]
}
]
}
},
{
"id": "claire",
"label": "Claire, 44",
"name": "Claire",
"age": 44,
"role": "Office administrator",
"kind": "cohort",
"tag": null,
"head": "6.6%",
"headSub": "of Debenhams customers, 12 months",
"share": 6.6,
"chips": [
"Size UK 14",
"Phone in the evening",
"Debit card",
"£40, one order"
],
"desc": "Buys one piece of women's fashion from Debenhams a year, around £40, nearly always a marketplace brand, without a code.",
"scen": [
{
"t": "First order: a blouse",
"v": "£40",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "£40",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "£40",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£40",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "£40",
"k": "everyday"
},
{
"t": "Christmas: a scarf for her mum and a top for herself",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: a blouse and a cardigan",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/debenhams-claire.png",
"test": {
"sub": "44 · Office administrator · Married, two children · One women's fashion order",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Simon; children aged 13 and 10"
],
[
"Work",
"Office administrator"
],
[
"Device",
"Phone in the evening"
],
[
"Pays with",
"Debit card"
],
[
"Size",
"UK 14"
],
[
"Budget",
"£40, one order"
],
[
"Full name",
"Claire Claudeai"
],
[
"Test email",
"claire.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE CLAIRE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, Instagram, Pinterest"
],
[
"Share of customers",
"6.6% — one order in 12 months, women's fashion (marketplace), no promo code (346k customers); median order £40.48; 54% first-time"
]
],
"fam": [
"Simon, 46, husband",
"Ellie, 13, daughter",
"Max, 10, son",
"Jean, 70, her mum"
],
"angle": "One-order women's fashion buyers without a code are 6.6% of Debenhams customers over 12 months (346k), median order £40, 54% first-time, almost all marketplace brands.",
"q": [
"Is this blouse true to size, and what do people in a 14 say about the fit?",
"Who is actually selling this, and how long will it take to get here?",
"What does it cost to send back if it doesn't fit?"
],
"emailTimes": [
"20:30",
"20:30",
"20:30",
"20:30",
"19:30",
"10:30",
"20:00"
],
"s": [
{
"g": "Claire buys a blouse in UK 14 without a code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Skip the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Is the shopper pushed to find a code?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A scarf for her mum and a top for herself before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A blouse and a cardigan in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "linda",
"label": "Linda, 55",
"name": "Linda",
"age": 55,
"role": "Practice manager",
"kind": "cohort",
"tag": null,
"head": "4.9%",
"headSub": "of Debenhams customers, 12 months",
"share": 4.9,
"chips": [
"Size UK 14",
"iPad in the evening",
"Debit card, PayPal",
"£35–£45, one order"
],
"desc": "Comes to Debenhams for the house, not the wardrobe: bedding, towels, a lamp or kitchenware, around £38 in a single order. Most of it is marketplace stock, and she rarely uses a code.",
"scen": [
{
"t": "Bedding and towels for the spare room",
"v": "£40",
"k": "everyday"
},
{
"t": "Who am I buying from?",
"v": "£38",
"k": "everyday"
},
{
"t": "A lamp with the right dimensions",
"v": "£35",
"k": "everyday"
},
{
"t": "Guest checkout with PayPal",
"v": "£38",
"k": "everyday"
},
{
"t": "Returning a towel set",
"v": "£2.49 fee",
"k": "everyday"
},
{
"t": "Christmas table and gifts",
"v": "£150",
"k": "christmas"
},
{
"t": "January home sale",
"v": "£60",
"k": "sale"
},
{
"t": "Black Friday home offers",
"v": "£80",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/debenhams-linda.png",
"test": {
"sub": "55 · Practice manager · Married, grown-up children · One home order",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Keith; children have left home"
],
[
"Work",
"GP practice manager"
],
[
"Device",
"iPad in the evening"
],
[
"Pays with",
"Debit card, PayPal"
],
[
"Size",
"UK 14"
],
[
"Budget",
"£35–£45, one order"
],
[
"Full name",
"Linda Claudeai"
],
[
"Test email",
"linda.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE LINDA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, Pinterest, YouTube"
],
[
"Share of customers",
"4.9% — one order in 12 months, home products only (255k customers); median order £38.46; 60% first-time"
]
],
"fam": [
"Keith, 57, husband: DIY, golf",
"Jenny, 28, daughter: first flat",
"Ross, 25, son: cycling",
"Barbara, 80, her mum: cosy blankets"
],
"angle": "Home-only one-order buyers are 4.9% of Debenhams customers over 12 months (255k), median order £38, 60% first-time, and almost entirely marketplace. Tests marketplace trust, home search and delivery clarity.",
"q": [
"Show me double duvet sets, not single, under £40, and tell me who is selling and delivering each one.",
"Will this lamp fit on a bedside table? How tall is it, and what are the dimensions?",
"Can I pay with PayPal without making an account, and will the delivery cost be added right at the end?"
],
"emailTimes": [
"20:00",
"20:00",
"20:00",
"20:00",
"19:00",
"10:00",
"15:00"
],
"s": [
{
"g": "Buy a double duvet set and two towels in one order.",
"st": [
"Search double duvet set",
"Filter by size",
"Add a set and two towels",
"Check who sells and delivers each",
"Review the bag total and delivery"
],
"w": [
"Does 'double' return double sets?",
"Are sellers and delivery dates clear?",
"Does the bag show the delivery price correctly?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Linda notices 'Sold & Delivered by' and wants to understand it before paying.",
"st": [
"Open a marketplace home product",
"Read the seller and delivery information",
"Find the returns process for that seller",
"Compare with a Debenhams-sold item",
"Check the delivery estimate"
],
"w": [
"Does the product page say one thing and the bag another?",
"Is a delivery estimate shown?",
"Is the marketplace returns route explained?",
"Is the seller named before adding to bag?"
]
},
{
"g": "She needs a lamp under 45cm tall for a bedside table.",
"st": [
"Search table lamp",
"Open three products",
"Check for dimensions",
"Compare sponsored and organic results",
"Add one"
],
"w": [
"Are dimensions on the product page?",
"Are the first results all sponsored?",
"Are duplicate listings present?",
"Is the image representative?"
]
},
{
"g": "Linda prefers PayPal and doesn't want an account.",
"st": [
"Go to guest checkout with the test details",
"Check defaults and consent",
"Select PayPal, stopping before authorising",
"Check the pop-up behaviour",
"Check the total"
],
"w": [
"Is consent pre-ticked?",
"Is the cheapest delivery the default?",
"Does PayPal open outside the controlled tab?",
"Does the total match the bag?"
]
},
{
"g": "The colour wasn't right and she wants to return it.",
"st": [
"Find the returns policy",
"Check the fee for marketplace items",
"Check drop-off options",
"Look for exchanges",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Does the marketplace process differ?",
"Is refund timing explained?",
"Are lockers or shops offered?"
]
},
{
"g": "Festive table linen and glasses, plus a blanket for her mum.",
"st": [
"Search festive table linen",
"Add glasses and a blanket",
"Check sellers and delivery dates",
"Check Christmas cut-offs",
"Check gift options"
],
"w": [
"Are cut-offs shown for marketplace items?",
"Do items arrive separately?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Replace bedding and kitchenware in the sale.",
"st": [
"Open the home sale",
"Compare was and now prices",
"Add bedding and a pan",
"Check delivery",
"Check returns"
],
"w": [
"Are was prices credible?",
"Is delivery shown in the bag?",
"Is Deliver+ pre-added?",
"Are returns fees clear?"
]
},
{
"g": "Linda watches a kettle and bedding for Black Friday.",
"st": [
"Record prices before the event",
"Compare on the day",
"Check countdowns",
"Add and check the total",
"Check out as a guest, stopping at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is stock held in the basket?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "nicola",
"label": "Nicola, 42",
"name": "Nicola",
"age": 42,
"role": "Account manager",
"kind": "cohort",
"tag": null,
"head": "4.4%",
"headSub": "of Debenhams customers, 12 months",
"share": 4.4,
"chips": [
"Size UK 12",
"Phone and laptop, after 9pm",
"Debit card, Klarna occasionally",
"£50 per order, two or three a year"
],
"desc": "Shops Debenhams two or three times a year, always late in the evening after work and homework are done, and always with a code. Spends about £120 a year across fashion, beauty and the odd home item.",
"scen": [
{
"t": "Late-night order with a code",
"v": "£50",
"k": "everyday"
},
{
"t": "Returning customer, forgotten password",
"v": "£50",
"k": "everyday"
},
{
"t": "Wishlist across sessions",
"v": "£60",
"k": "everyday"
},
{
"t": "Beauty with Beauty Club",
"v": "£55",
"k": "everyday"
},
{
"t": "Teen skincare for Molly",
"v": "£40",
"k": "everyday"
},
{
"t": "Christmas for Molly, her mum and sister",
"v": "£180",
"k": "christmas"
},
{
"t": "January sale after bedtime",
"v": "£60",
"k": "sale"
},
{
"t": "Black Friday evening",
"v": "£90",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/debenhams-nicola.png",
"test": {
"sub": "42 · Account manager · Divorced, one teenager · Repeat evening shopper",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her daughter Molly, 15"
],
[
"Work",
"Account manager, hybrid"
],
[
"Device",
"Phone and laptop, after 9pm"
],
[
"Pays with",
"Debit card, Klarna occasionally"
],
[
"Size",
"UK 12"
],
[
"Budget",
"£50 per order, two or three a year"
],
[
"Full name",
"Nicola Claudeai"
],
[
"Test email",
"nicola.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE NICOLA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, Facebook, Pinterest"
],
[
"Share of customers",
"4.4% — 2 to 3 orders in 12 months with a promo code (228k customers); median spend £118.88; 48% order between 8pm and 2am"
]
],
"fam": [
"Molly, 15, daughter: skincare, oversized hoodies",
"Sue, 68, her mum: knitwear, puzzles",
"Jo, 44, sister: candles, wine",
"Pete, 46, brother"
],
"angle": "Repeat, code-using, late-night customers are 4.4% of Debenhams customers over 12 months (228k), with 2 to 3 orders, median spend £119 and nearly half ordering between 8pm and 2am. Tests the returning-customer and evening experience.",
"q": [
"What's the best code I can use on this basket right now, and does it stack with the sale price?",
"Are these skincare products gentle enough for a 15-year-old, with nothing too strong or heavily scented?",
"If I order after 10pm tonight, when will it arrive, and how much is next day?"
],
"emailTimes": [
"21:30",
"21:30",
"21:30",
"21:30",
"20:30",
"10:30",
"20:30"
],
"s": [
{
"g": "At 9.30pm Nicola buys a top and a skincare product with the banner code.",
"st": [
"Browse on mobile",
"Add a top in size 12 and a serum",
"Apply the code",
"Check the total",
"Check out as a guest, stopping at payment"
],
"w": [
"Are pages fast at this time?",
"Does the code apply to both items?",
"Is Deliver+ pre-added?",
"Is consent pre-ticked?"
]
},
{
"g": "She has an account but can't remember the password.",
"st": [
"Go to checkout",
"Use the forgot-password route, stopping at the email step",
"Fall back to guest checkout",
"Check whether the bag persists",
"Check defaults"
],
"w": [
"Is password reset easy to find?",
"Is guest checkout offered without friction?",
"Does the bag survive the switch?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Nicola browses in the evening and buys a week later.",
"st": [
"Try to save three items to the wishlist",
"Note whether sign-in is needed",
"Return a week later as a guest",
"Check the bag and wishlist",
"Add from the wishlist"
],
"w": [
"Does the wishlist need an account?",
"Does the bag persist between visits?",
"Do saved prices change?",
"Is there a back-in-stock alert?"
]
},
{
"g": "She wants to see points and samples before buying.",
"st": [
"Add two beauty products",
"Check whether points show when signed out",
"Check free samples",
"Apply the beauty code",
"Review the total"
],
"w": [
"Are points visible to guests?",
"Are samples offered in the bag?",
"Does the beauty code apply?",
"Is the code price shown on listings?"
]
},
{
"g": "Buy popular teen skincare for her daughter without the hype products.",
"st": [
"Search teen skincare",
"Check age guidance and ingredients",
"Compare prices",
"Add two items",
"Check delivery"
],
"w": [
"Are results relevant or sponsored?",
"Is ingredient information available?",
"Are age notes shown?",
"Is a delivery date shown?"
]
},
{
"g": "Gifts for three people in one late-night order with a code.",
"st": [
"Pick a gift for each",
"Apply the code",
"Check exclusions",
"Check Christmas cut-offs",
"Check gift options"
],
"w": [
"Does the code apply to gift sets?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Sale browsing at 10pm with the extra code.",
"st": [
"Open the sale on mobile",
"Filter by size 12",
"Apply the code",
"Check stacking",
"Check returns"
],
"w": [
"Do codes stack with sale prices?",
"Are was prices credible?",
"Is the mobile layout easy at night?",
"Is Deliver+ pre-added?"
]
},
{
"g": "She shops the event after 9pm and compares with the usual code price.",
"st": [
"Compare prices with earlier code prices",
"Add three items",
"Apply any code",
"Check basket holding",
"Check out, stopping at payment"
],
"w": [
"Are prices genuinely lower?",
"Does the site cope in the evening peak?",
"Is stock held?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "ahmed",
"label": "Ahmed, 36",
"name": "Ahmed",
"age": 36,
"role": "Pharmacist",
"kind": "cohort",
"tag": null,
"head": "3.9%",
"headSub": "of Debenhams customers, 12 months",
"share": 3.9,
"chips": [
"Size M",
"Laptop at the weekend",
"Debit card, Klarna for larger items",
"£80–£120, one order"
],
"desc": "Bought a sofa or a bed from Debenhams once, after moving into his first house with his wife. Spent around £95, paid by card, and is the first-time customer most likely to be surprised by delivery and protection add-ons.",
"scen": [
{
"t": "A bedside table and a lamp for the new house",
"v": "£95",
"k": "everyday"
},
{
"t": "Furniture delivery promises",
"v": "£95",
"k": "everyday"
},
{
"t": "Paying with Klarna",
"v": "£95",
"k": "everyday"
},
{
"t": "Assembly and returns for furniture",
"v": "Refund",
"k": "everyday"
},
{
"t": "Guest checkout as a first-time customer",
"v": "£95",
"k": "everyday"
},
{
"t": "Christmas: hosting for the first time",
"v": "£200",
"k": "christmas"
},
{
"t": "January furniture sale",
"v": "£150",
"k": "sale"
},
{
"t": "Black Friday big-ticket",
"v": "£300",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/debenhams-ahmed.png",
"test": {
"sub": "36 · Pharmacist · Married, first home · One furniture order",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Sara; first home, no children yet"
],
[
"Work",
"Community pharmacist"
],
[
"Device",
"Laptop at the weekend"
],
[
"Pays with",
"Debit card, Klarna for larger items"
],
[
"Size",
"M"
],
[
"Budget",
"£80–£120, one order"
],
[
"Full name",
"Ahmed Claudeai"
],
[
"Test email",
"ahmed.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE AHMED, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, YouTube, Facebook"
],
[
"Share of customers",
"3.9% — one order in 12 months, furniture only (202k customers); median order £95.46; 67% first-time"
]
],
"fam": [
"Sara, 34, wife: interiors, plants",
"Yusuf, 62, his dad: tea, crosswords",
"Fatima, 60, his mum: cookware",
"Bilal, 30, brother: gaming"
],
"angle": "Furniture-only, one-order customers are 3.9% of Debenhams customers over 12 months (202k), median order £95, and 67% are first-time. Tests big-ticket delivery, protection upsells and marketplace furniture trust.",
"q": [
"Will this bedside table arrive on the date I'm given, and what extra delivery charges apply to a bulky item?",
"What does the protection plan actually cover, and do I really need it?",
"Can I split the cost into payments, and what are the limits?"
],
"emailTimes": [
"12:30",
"12:30",
"12:30",
"12:30",
"18:00",
"10:00",
"11:00"
],
"s": [
{
"g": "Ahmed compares bedside tables and adds one with a lamp.",
"st": [
"Search bedside table",
"Open three products and compare dimensions",
"Add one",
"Note any protection plan pop-up",
"Add a lamp"
],
"w": [
"Are dimensions and materials shown?",
"Is a protection plan pop-up pre-selected?",
"Is the opt-out wording fair ('No thanks, I'll risk it')?",
"Is a delivery estimate shown?"
]
},
{
"g": "He wants to know when the table will arrive before paying.",
"st": [
"Compare the product page lead time with the bag and checkout",
"Check the delivery cost line in the bag",
"Check the bulky item note",
"Check the delivery options at checkout",
"Compare the dates"
],
"w": [
"Does the product page lead time match checkout?",
"Does the bag say '99p delivery' while charging more?",
"Is bulky delivery priced clearly?",
"Can a date be chosen?"
]
},
{
"g": "Ahmed wants to spread the cost of furniture.",
"st": [
"Go to guest checkout with the test details",
"Select Klarna",
"Check the schedule and limits",
"Note pop-ups",
"Stop before authorising"
],
"w": [
"Does Klarna load inline?",
"Are limits explained?",
"Is the amount correct?",
"Is Clearpay offered and working?"
]
},
{
"g": "He checks what happens if the table arrives damaged or doesn't fit.",
"st": [
"Find the returns policy for furniture",
"Check fees for large items",
"Check the assembly option",
"Check how damage is reported",
"Stop before submitting"
],
"w": [
"Is the large-item returns fee (up to £50) clear before purchase?",
"Is assembly priced?",
"Is the damage process clear?",
"Is the seller's role explained?"
]
},
{
"g": "His first checkout on the site.",
"st": [
"Enter the test details as a guest",
"Review defaults and consent",
"Check the total against the bag",
"Note upsells",
"Stop at payment"
],
"w": [
"Is consent pre-ticked?",
"Is Deliver+ or Unlimited pushed?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "A dining set, cushions and a gift for Sara before Christmas.",
"st": [
"Search dining chairs and cushions",
"Check lead times against Christmas",
"Add a gift for Sara",
"Check cut-offs",
"Check gift options"
],
"w": [
"Are furniture lead times realistic for Christmas?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "An armchair in the sale, delivered after the move.",
"st": [
"Open the furniture sale",
"Compare was and now prices",
"Check lead times",
"Add and check the bag",
"Check the protection plan pop-up"
],
"w": [
"Are was prices credible?",
"Are lead times clear?",
"Is the protection plan pre-selected?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Ahmed waits for Black Friday for a bed frame.",
"st": [
"Record the price before the event",
"Compare on the day",
"Check delivery lead time",
"Select Klarna, stopping before details",
"Check the total"
],
"w": [
"Is the reduction genuine?",
"Do lead times hold at peak?",
"Does Klarna cover the amount?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "martin",
"label": "Martin, 45",
"name": "Martin",
"age": 45,
"role": "Site manager",
"kind": "cohort",
"tag": null,
"head": "2.5%",
"headSub": "of Debenhams customers, 12 months",
"share": 2.5,
"chips": [
"Size L, 34 waist",
"Phone at lunchtime",
"Debit card, PayPal",
"£40–£45, one order"
],
"desc": "Buys one piece of menswear from Debenhams a year, around £42, usually a marketplace brand, without a code. Often it's a gift or a replacement for something worn out.",
"scen": [
{
"t": "First order: a pair of chinos",
"v": "£42",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "£42",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "£42",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£42",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "£42",
"k": "everyday"
},
{
"t": "Christmas: a shirt for his dad and a hoodie for Luke",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: a jacket and a jumper",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/debenhams-martin.png",
"test": {
"sub": "45 · Site manager · Married, grown-up son · One menswear order",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Karen; son Luke, 20"
],
[
"Work",
"Construction site manager"
],
[
"Device",
"Phone at lunchtime"
],
[
"Pays with",
"Debit card, PayPal"
],
[
"Size",
"L, 34 waist"
],
[
"Budget",
"£40–£45, one order"
],
[
"Full name",
"Martin Claudeai"
],
[
"Test email",
"martin.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE MARTIN, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, YouTube, Instagram"
],
[
"Share of customers",
"2.5% — one order in 12 months, menswear (marketplace), no promo code (131k customers); median order £42.23; 66% first-time"
]
],
"fam": [
"Karen, 44, wife",
"Luke, 20, son: university",
"Brian, 72, his dad",
"Sue, 70, his mum"
],
"angle": "One-order menswear buyers without a code are 2.5% of Debenhams customers over 12 months (131k), median order £42, 66% first-time.",
"q": [
"How do these chinos fit in a 34 waist, and do they shrink in the wash?",
"What's the quickest way to return them if they're wrong, and does it cost me anything?",
"Is there a cheaper pair that's just as good? I don't want to pay extra for the brand name."
],
"emailTimes": [
"12:30",
"12:30",
"12:30",
"12:30",
"17:00",
"10:00",
"19:00"
],
"s": [
{
"g": "Martin buys a pair of chinos in L / 34 waist without a code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Skip the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Is the shopper pushed to find a code?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A shirt for his dad and a hoodie for luke before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A jacket and a jumper in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "joanne",
"label": "Joanne",
"name": "Joanne",
"age": null,
"role": "Any role",
"kind": "catchall",
"tag": "CATCH-ALL",
"head": "58% catch-all",
"headSub": "of Debenhams customers not covered by the other seven",
"share": 58.0,
"chips": [
"Rotates across the size ranges sold",
"Rotates: phone, laptop, tablet, app",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card",
"Rotates: £15 to £300"
],
"desc": "Not one person but a rotating stand-in for everyone the five cohorts don't describe. Each run picks a different mix of category, device, payment, code use, size range and market so the long tail of Joanne's site gets tested too.",
"scen": [
{
"t": "Random mixed basket",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Switching device mid-journey",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Abandon and come back",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Unusual payment mix",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Finding help",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Christmas for an unlikely list",
"v": "£100–£250",
"k": "christmas"
},
{
"t": "Sale from a random angle",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday from a random angle",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/debenhams-joanne.png",
"test": {
"sub": "Any age · Any role · The catch-all shopper",
"surname": "Claudeai",
"facts": [
[
"Household",
"Rotates each run (see examples below)"
],
[
"Work",
"Rotates each run"
],
[
"Device",
"Rotates: phone, laptop, tablet, app"
],
[
"Pays with",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card"
],
[
"Size",
"Rotates across the size ranges sold"
],
[
"Budget",
"Rotates: £15 to £300"
],
[
"Full name",
"Joanne Claudeai"
],
[
"Test email",
"joanne.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE JOANNE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Rotates each run"
],
[
"Share of customers",
"58% — the 58% of Debenhams customers over 12 months who sit outside the seven cohorts: every other mix of frequency, category, channel, code use and payment"
]
],
"fam": [
"Jo, 48: shops kids' and electricals at Easter",
"Priyanka, 31: one beauty order a year, via the app",
"Graham, 59: a suit for a funeral, next day",
"Beth, 26: a Mirakl furniture order split on Klarna"
],
"angle": "A catch-all for the 67% of customers outside the seven cohorts. Scenarios are deliberately mixed and are randomised on each run so that unusual but real journeys get covered.",
"q": [
"Pick the best of these three for me and explain how you chose it.",
"What's the real total I'll pay, including delivery, any membership and any add-ons?",
"Can I carry on with this basket on my phone later, and will my items and prices still be here?"
],
"emailTimes": [
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00"
],
"s": [
{
"g": "Build a basket from three unrelated categories chosen at random for this run.",
"st": [
"Pick three categories at random",
"Add one item from each in a random size",
"Check cross-category delivery and sellers",
"Review the bag",
"Check out as a guest, stopping at payment"
],
"w": [
"Do mixed baskets show one clear delivery promise?",
"Is Deliver+ or a subscription pre-added?",
"Is consent pre-ticked?",
"Does the total match the bag?"
]
},
{
"g": "Start on one device and finish on another.",
"st": [
"Add two items on the first device",
"Open the site on a second device as the same guest or account",
"Check what carried over",
"Complete the bag",
"Stop at payment"
],
"w": [
"Does the bag persist across devices?",
"Do codes carry over?",
"Does a wishlist need sign-in?",
"Is the layout usable on both?"
]
},
{
"g": "Leave a basket for a day and return.",
"st": [
"Build a basket",
"Leave for 24 hours",
"Return and check the bag and prices",
"Check for subscriptions or add-ons that appeared",
"Check out, stopping at payment"
],
"w": [
"Is stock held?",
"Did prices or codes change?",
"Did Premier, Royalty or Deliver+ appear in the bag?",
"Are abandoned-basket emails sent with pre-ticked consent?"
]
},
{
"g": "Pay part by gift card and the rest another way.",
"st": [
"Build a basket",
"Apply a gift card at checkout, stopping before numbers",
"Check the remaining balance",
"Select a pay-later or wallet method",
"Stop before authorising"
],
"w": [
"Can gift cards combine with other methods?",
"Are limits explained?",
"Do pop-ups open outside the controlled tab?",
"Is the amount correct?"
]
},
{
"g": "Pick a random problem (lost parcel, wrong item, size question) and try to get help.",
"st": [
"Search the help pages for the problem",
"Try the contact routes",
"Check hours and response times",
"Check guest order tracking",
"Stop before sending"
],
"w": [
"Is help easy to find?",
"Is a phone or chat route available?",
"Are response times stated?",
"Can a guest track an order?"
]
},
{
"g": "Gifts for a random mix of recipients, including some the site doesn't obviously serve.",
"st": [
"Pick four random recipients",
"Search for each",
"Note dead ends and alternatives",
"Check cut-offs and gift options",
"Stop at payment"
],
"w": [
"Do empty states offer gift cards?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Enter the sale through a random route: search, email code, category, app banner.",
"st": [
"Enter by the chosen route",
"Apply any code",
"Check stacking",
"Check was prices",
"Check returns on sale items"
],
"w": [
"Do all routes reach the same prices?",
"Do codes stack?",
"Are was prices credible?",
"Are final-sale items labelled?"
]
},
{
"g": "Shop the event with a random device, payment and basket.",
"st": [
"Enter via a random route",
"Build a random basket",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
}
]
},
{
"slug": "karenmillen",
"name": "Karen Millen",
"site": "https://www.karenmillen.com",
"full": {
"label": "Full personas and scenarios (karenmillen.com)",
"url": "https://claude.ai/artifact/CpMuBhXbi8xQvrcoYThL5T"
},
"test": {
"title": "Karen Millen test personas and scenarios",
"intro": [
"Eight personas for this site: the typical customer, the next six largest behavioural cohorts, and a catch-all for everyone else, from 12 months of order data (10 Oct 2025 to 8 Oct 2026). Each has eight scenarios: five everyday journeys plus Christmas, post-Christmas sale and Black Friday.",
"Personas are ordered by their share of customers, largest first. The typical customer is built from the largest cohort; the others are the next four largest cohorts."
],
"rules": [
"Start by deleting all items in the cart, then log out.",
"Use a dedicated test account, not live credentials.",
"Never enter personal, address or payment details.",
"Pause for approval before applying codes, deleting items or submitting any payment step."
],
"shareNote": "Each profile shows the share of the site's customers over the last three months (3 Jul to 2 Oct 2026) for the typical customer, and over 12 months (10 Oct 2025 to 8 Oct 2026) for the other four, whose orders match a behavioural proxy for the persona. Order data holds no age, gender or household details, so the proxies use what is observable: categories bought, payment method, delivery choice, app use, postcode area, promo codes and spend. They are indicative only, overlap between personas, and don't sum to 100%. Source: Group analytics warehouse, excluding staff and sample orders.",
"note": "Scenario products are typical Karen Millen categories and availability was not checked against the live site, so swap in what is in stock. Details such as the delivery pass, loyalty programme, NHS and student discounts, returns fees and Northern Ireland delivery came from third-party voucher and review sites, which sometimes disagree. Verify them on karenmillen.com and treat any mismatch as a finding."
},
"personas": [
{
"id": "rebecca",
"label": "Rebecca, 39",
"name": "Rebecca",
"age": 39,
"role": "Events manager",
"kind": "typical",
"tag": "TYPICAL CUSTOMER",
"head": "Typical customer",
"headSub": "Built from the largest cohort on Karen Millen",
"share": null,
"chips": [
"Size UK 12",
"Karen Millen app and laptop",
"Apple Pay, card, occasionally Klarna",
"£100–£130 per order, a few times a year"
],
"desc": "Buys a Karen Millen dress for a specific event every few months, nearly always with a discount code, often on the app. She compares the code price carefully and expects next-day delivery when the event is close.",
"scen": [
{
"t": "A dress for a wedding in three weeks",
"v": "£130",
"k": "everyday"
},
{
"t": "Code stacking and exclusions",
"v": "£110",
"k": "everyday"
},
{
"t": "App versus website prices",
"v": "£120",
"k": "everyday"
},
{
"t": "Next-day delivery for a last-minute event",
"v": "£115",
"k": "everyday"
},
{
"t": "Returning the dress after the event",
"v": "£4 fee",
"k": "everyday"
},
{
"t": "Christmas party dress and gifts for James and her mum",
"v": "£250",
"k": "christmas"
},
{
"t": "January sale with an extra code",
"v": "£120",
"k": "sale"
},
{
"t": "Black Friday dress hunt",
"v": "£130",
"k": "bf"
}
],
"finding": {
"sev": "HIGH",
"text": "Deliver+ pre-added at £12.95"
},
"status": {
"text": "See Rebecca's live results →",
"url": "https://claude.ai/artifact/KCPKBRqYwttVAhwNDYHso2"
},
"img": "assets/ds/personas/portraits/karenmillen-rebecca.png",
"test": {
"sub": "39 · Events manager · Married, one child · The typical Karen Millen customer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to James; daughter Isla, 7"
],
[
"Work",
"Events manager at a hotel group"
],
[
"Device",
"Karen Millen app and laptop"
],
[
"Pays with",
"Apple Pay, card, occasionally Klarna"
],
[
"Size",
"UK 12"
],
[
"Budget",
"£100–£130 per order, a few times a year"
],
[
"Full name",
"Rebecca Claudeai"
],
[
"Test email",
"rebecca.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE REBECCA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, Facebook, Pinterest"
],
[
"Share of customers",
"Largest cohort — the modal Karen Millen customer: returning, code user, dress buyer, median order £109.29 (55.5% returning customers; 80.6% used a promo code; 35.7% ordered via the app)"
]
],
"fam": [
"James, 41, husband: watches, running",
"Isla, 7, daughter: crafts, dressing up",
"Linda, 66, her mum: scarves, knitwear",
"Claire, 36, sister: handbags"
],
"angle": "Represents the largest Karen Millen cohort: a returning UK dress buyer who uses a code on four orders in five, often via the app, with a median order of £109. Tests code accuracy, dress discovery and next-day reliability.",
"q": [
"Find me an occasion dress in a 12 for a wedding in three weeks, and tell me which code gives me the best price.",
"Will it definitely arrive before the event, and what's the cut-off for ordering?",
"If it doesn't suit, how much does it cost to send back, and how long do I have?"
],
"emailTimes": [
"20:00",
"12:30",
"20:00",
"12:30",
"17:30",
"10:30",
"19:30"
],
"s": [
{
"g": "Find a size 12 occasion dress using the current code and have it in time.",
"st": [
"Browse Occasion Wear and filter by size 12",
"Compare the code price shown on listings with the bag price",
"Add a dress",
"Apply the banner code",
"Check the delivery date and the returns window"
],
"w": [
"Does the code price on the product page match what the bag charges?",
"Is the code's exclusion list clear if it fails?",
"Is Deliver+ added without being chosen?",
"Does the returns window cover the event date?"
]
},
{
"g": "Rebecca has a code from the site and one from an email, and wants to know which to use.",
"st": [
"Add a sale dress and a full-price dress",
"Apply the site-wide code",
"Try a second code",
"Check which lines the discount applies to",
"Remove and re-apply"
],
"w": [
"Can codes stack, and does the site say so?",
"Does the discount show against the right lines?",
"Is the error wording clear when a code doesn't apply?",
"Does removing a code restore the price correctly?"
]
},
{
"g": "She has seen different codes in the app and on the website and wants to check they agree.",
"st": [
"Open the same dress on the website and in the app",
"Compare the code shown and the code price",
"Compare the delivery options offered",
"Add to bag in both and compare totals",
"Note any app-only offers"
],
"w": [
"Do the website and app show the same code and price?",
"Is Premier pre-selected in either?",
"Are app-only offers explained?",
"Does the bag sync between app and website?"
]
},
{
"g": "The event is the day after tomorrow and she needs the dress tomorrow.",
"st": [
"Open a dress after the stated cut-off time",
"Check what the countdown says",
"Add and go to checkout",
"Compare the delivery date on the product page with checkout",
"Check the price of next-day"
],
"w": [
"Is the cut-off time unambiguous (midnight versus midday)?",
"Do the product page and checkout agree on the date?",
"Is Premier offered as the default or as a choice?",
"Is the next-day price consistent with the delivery page?"
]
},
{
"g": "The dress didn't work out and she wants her refund quickly.",
"st": [
"Find the returns policy",
"Check the fee and the window",
"Look for an exchange option",
"Check the drop-off options",
"Stop before submitting"
],
"w": [
"Is the £4 fee stated before purchase?",
"Is the absence of exchanges clear?",
"Is refund timing stated?",
"Can online orders be returned in store?"
]
},
{
"g": "Buy a party dress for herself with the code, plus a scarf for her mum and a gift card for James.",
"st": [
"Browse party dresses in size 12",
"Apply the code",
"Add a scarf for Linda",
"Find gift cards for James",
"Check Christmas delivery dates"
],
"w": [
"Does the code apply to gift items?",
"Are gift cards easy to find and delivered by email?",
"Are Christmas cut-offs published?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Rebecca waits for the sale and expects the extra percentage code to work on top.",
"st": [
"Open the sale",
"Filter by size 12",
"Apply the extra-off code",
"Check the discount lines",
"Check the returns policy on sale items"
],
"w": [
"Does the extra code stack with sale prices, and is that stated?",
"Are was prices credible?",
"Are final-sale items labelled?",
"Is the returns fee the same for sale items?"
]
},
{
"g": "She watches a dress through November and buys when the Black Friday price beats the usual code.",
"st": [
"Record the price and code before the event",
"Compare on the day",
"Apply any Black Friday code",
"Check the delivery and returns terms",
"Check out, stopping at payment"
],
"w": [
"Is the Black Friday price genuinely lower than the everyday code price?",
"Do countdowns run honestly?",
"Is consent pre-ticked at checkout?",
"Is Premier pre-selected?"
]
}
]
}
},
{
"id": "anneke",
"label": "Anneke, 36",
"name": "Anneke",
"age": 36,
"role": "Marketing director",
"kind": "cohort",
"tag": null,
"head": "5.2%",
"headSub": "of Karen Millen customers, 12 months",
"share": 5.2,
"chips": [
"Size EU 38 / UK 10",
"Laptop and phone",
"Card, iDEAL if offered, PayPal",
"€150–€180 per order"
],
"desc": "Orders a Karen Millen dress from the Netherlands once or twice a year for an event, always with a code, and expects clear euro pricing, duties and delivery times before she commits.",
"scen": [
{
"t": "Switching to the Netherlands",
"v": "€170",
"k": "everyday"
},
{
"t": "Duties and delivery to Amsterdam",
"v": "€170",
"k": "everyday"
},
{
"t": "EU sizing",
"v": "€170",
"k": "everyday"
},
{
"t": "Returning from the Netherlands",
"v": "Refund",
"k": "everyday"
},
{
"t": "Wishlist and stock alerts",
"v": "€180",
"k": "everyday"
},
{
"t": "Christmas party dress from abroad",
"v": "€180",
"k": "christmas"
},
{
"t": "January sale from the Netherlands",
"v": "€120",
"k": "sale"
},
{
"t": "Black Friday from abroad",
"v": "€170",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/karenmillen-anneke.png",
"test": {
"sub": "36 · Marketing director · Lives in Amsterdam · International dress buyer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her partner Bram"
],
[
"Work",
"Marketing director at a bank"
],
[
"Device",
"Laptop and phone"
],
[
"Pays with",
"Card, iDEAL if offered, PayPal"
],
[
"Size",
"EU 38 / UK 10"
],
[
"Budget",
"€150–€180 per order"
],
[
"Full name",
"Anneke Claudeai"
],
[
"Test email",
"anneke.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE ANNEKE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, LinkedIn, Pinterest"
],
[
"Share of customers",
"5.2% — one order in 12 months, dresses, outside the UK, with a code (20k customers); median order £146.93; 68% first-time"
]
],
"fam": [
"Bram, 38, partner: cycling, watches",
"Els, 66, her mum: scarves",
"Joris, 33, brother",
"Lotte, 4, niece"
],
"angle": "International one-order dress buyers using a code are 5.2% of Karen Millen customers over 12 months (20k), median order £147, 68% first-time. Tests the international journey: currency, duties, delivery and returns.",
"q": [
"What will this dress cost me in euro including delivery and any import duty, and when will it reach Amsterdam?",
"What's the EU 38 equivalent, and how does this brand fit?",
"How do I send it back from the Netherlands, and who pays for it?"
],
"emailTimes": [
"12:30",
"20:00",
"12:30",
"20:00",
"17:30",
"10:30",
"19:00"
],
"s": [
{
"g": "Set the site to the Netherlands and check prices and codes.",
"st": [
"Find the region selector",
"Choose the Netherlands and euro",
"Check a dress price and the code price",
"Add a dress in EU 38",
"Check the bag total"
],
"w": [
"Is the selector easy to find?",
"Are euro prices consistent from listing to bag?",
"Does the code apply internationally?",
"Is Deliver+ offered or pre-added internationally?"
]
},
{
"g": "Anneke wants the landed cost and date before paying.",
"st": [
"Check the delivery page for the Netherlands",
"Check duties and customs messaging",
"Go to checkout with the test details",
"Check the delivery options and dates",
"Stop at payment"
],
"w": [
"Are duties explained before checkout?",
"Are delivery times realistic?",
"Which payment methods appear for the Netherlands?",
"Is consent pre-ticked?"
]
},
{
"g": "She wants to be sure EU 38 is UK 10.",
"st": [
"Open the size guide",
"Check EU conversions",
"Check model height and size",
"Compare two dresses",
"Add one"
],
"w": [
"Does the size guide show EU sizes?",
"Is model information given?",
"Is the size selector in EU or UK sizes?",
"Is stock shown per size?"
]
},
{
"g": "The dress didn't fit and she needs to return it from abroad.",
"st": [
"Find international returns",
"Check the cost and route",
"Check refund timing and currency",
"Look for an exchange",
"Stop before submitting"
],
"w": [
"Is the international returns route clear?",
"Is the fee shown in euro?",
"Is the refund currency explained?",
"Are exchanges offered?"
]
},
{
"g": "Her size is sold out and she wants to know when it's back.",
"st": [
"Open a sold-out size",
"Look for a notify-me option",
"Save to the wishlist",
"Check whether sign-in is needed",
"Check alternatives"
],
"w": [
"Is a back-in-stock alert offered?",
"Does the wishlist need sign-in?",
"Are alternatives suggested?",
"Is stock status clear?"
]
},
{
"g": "A party dress delivered to Amsterdam before Christmas.",
"st": [
"Add a party dress",
"Check cut-offs for the Netherlands",
"Apply the code",
"Check duties",
"Stop at payment"
],
"w": [
"Are international Christmas cut-offs published?",
"Does the code apply?",
"Are duties shown?",
"Is Deliver+ pre-added?"
]
},
{
"g": "The extra code on sale prices, in euro.",
"st": [
"Open the sale in euro",
"Apply the extra code",
"Check stacking",
"Check delivery and returns costs",
"Check was prices"
],
"w": [
"Do codes stack?",
"Are euro was prices credible?",
"Are returns costs clear?",
"Is delivery priced in euro?"
]
},
{
"g": "Anneke compares Black Friday with the everyday code price in euro.",
"st": [
"Record the euro price before the event",
"Compare on the day",
"Apply any code",
"Check delivery and duties",
"Stop at payment"
],
"w": [
"Is the reduction genuine in euro?",
"Do countdowns run honestly?",
"Is consent pre-ticked?",
"Are duties shown?"
]
}
]
}
},
{
"id": "caroline",
"label": "Caroline, 48",
"name": "Caroline",
"age": 48,
"role": "Headteacher",
"kind": "cohort",
"tag": null,
"head": "4.2%",
"headSub": "of Karen Millen customers, 12 months",
"share": 4.2,
"chips": [
"Size UK 14",
"iPad in the evening",
"Credit card",
"£115–£130, one order"
],
"desc": "Buys one Karen Millen dress a year for a specific occasion and pays full price without hunting for a code. Values fit, fabric and a reliable delivery date over a discount.",
"scen": [
{
"t": "An occasion dress in size 14",
"v": "£120",
"k": "everyday"
},
{
"t": "Ignoring the code pressure",
"v": "£120",
"k": "everyday"
},
{
"t": "Fit confidence",
"v": "£120",
"k": "everyday"
},
{
"t": "Next-day for the event",
"v": "£120",
"k": "everyday"
},
{
"t": "Returning after the event",
"v": "£4 fee",
"k": "everyday"
},
{
"t": "Christmas party dress and a gift for her mum",
"v": "£200",
"k": "christmas"
},
{
"t": "A January coat at full price",
"v": "£180",
"k": "sale"
},
{
"t": "Black Friday, if the dress she wants is included",
"v": "£120",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/karenmillen-caroline.png",
"test": {
"sub": "48 · Headteacher · Married, two teenagers · Full-price dress buyer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Richard; children Tom 17 and Lucy 14"
],
[
"Work",
"Primary school headteacher"
],
[
"Device",
"iPad in the evening"
],
[
"Pays with",
"Credit card"
],
[
"Size",
"UK 14"
],
[
"Budget",
"£115–£130, one order"
],
[
"Full name",
"Caroline Claudeai"
],
[
"Test email",
"caroline.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE CAROLINE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, Instagram, Pinterest"
],
[
"Share of customers",
"4.2% — one order in 12 months, dresses, no promo code (16k customers); median order £116.60; 66% first-time"
]
],
"fam": [
"Richard, 50, husband: golf, red wine",
"Tom, 17, son: rugby",
"Lucy, 14, daughter: dance, skincare",
"Margaret, 76, her mum: knitwear"
],
"angle": "One-order dress buyers who don't use a code are 4.2% of Karen Millen customers over 12 months (16k), median order £117, 66% first-time. Tests whether the site serves a full-price buyer well without pushing codes and subscriptions.",
"q": [
"Which midi dresses with sleeves in a 14 would suit a school awards evening, and what are the fabric and length?",
"I don't want to spend time hunting for codes. Is today's price the lowest I'll see?",
"Can I be certain it will arrive by Thursday? I'd rather pay for guaranteed delivery."
],
"emailTimes": [
"20:00",
"20:00",
"20:00",
"20:00",
"19:00",
"10:00",
"17:00"
],
"s": [
{
"g": "Find a midi dress with sleeves for a school awards evening.",
"st": [
"Browse Occasion Wear and filter by size 14 and sleeve",
"Open two dresses",
"Check model height, length and composition",
"Add one",
"Review the bag"
],
"w": [
"Are sleeve filters available?",
"Is model height and size given?",
"Is Deliver+ pre-added?",
"Is the delivery cost shown in the bag?"
]
},
{
"g": "Caroline doesn't want codes, pop-ups or subscriptions.",
"st": [
"Note banners, pop-ups and code prompts",
"Add a dress",
"Check the bag for subscriptions or add-ons",
"Go to checkout with the test details",
"Check defaults"
],
"w": [
"Are pop-ups easy to dismiss?",
"Is Premier or Deliver+ pre-selected?",
"Is consent pre-ticked?",
"Is the cheapest standard delivery the default?"
]
},
{
"g": "She wants to get the size right first time.",
"st": [
"Open the size guide",
"Compare model size and height with hers",
"Read reviews for fit",
"Check fabric and stretch",
"Add the dress"
],
"w": [
"Is the size guide measurement-based?",
"Do reviews mention fit?",
"Is stretch or fabric weight noted?",
"Is stock shown for size 14?"
]
},
{
"g": "The event is in two days.",
"st": [
"Check the product page countdown",
"Compare with the delivery page cut-off",
"Go to checkout",
"Compare the delivery date",
"Check the next-day price"
],
"w": [
"Is the cut-off unambiguous?",
"Do product page and checkout agree?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The dress didn't suit and she wants a refund.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the £4 fee stated before purchase?",
"Are exchanges offered?",
"Can online orders be returned in store?",
"Is refund timing stated?"
]
},
{
"g": "A party dress and a scarf for her mum.",
"st": [
"Add a party dress in size 14",
"Add a scarf",
"Check Christmas cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?",
"Is consent pre-ticked?"
]
},
{
"g": "Caroline buys a coat in January but ignores the sale.",
"st": [
"Browse coats",
"Check composition and length",
"Add one in size 14",
"Check delivery",
"Check returns"
],
"w": [
"Is composition shown?",
"Is the delivery cost in the bag?",
"Is Deliver+ pre-added?",
"Is the returns fee clear?"
]
},
{
"g": "She only buys if her chosen dress is reduced.",
"st": [
"Record the price before the event",
"Compare on the day",
"Check countdowns",
"Add and check the total",
"Stop at payment"
],
"w": [
"Is the reduction genuine?",
"Are countdowns honest?",
"Is consent pre-ticked?",
"Is Premier pre-selected?"
]
}
]
}
},
{
"id": "natalie",
"label": "Natalie, 35",
"name": "Natalie",
"age": 35,
"role": "Project manager",
"kind": "cohort",
"tag": null,
"head": "4.2%",
"headSub": "of Karen Millen customers, 12 months",
"share": 4.2,
"chips": [
"Size UK 10",
"Karen Millen app",
"Apple Pay, Klarna",
"£115–£125, one order"
],
"desc": "Downloads the Karen Millen app for an event dress, orders once with the code, around £118, and judges the brand on that app experience.",
"scen": [
{
"t": "First order: an occasion dress",
"v": "£118",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "£118",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "£118",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£118",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "£118",
"k": "everyday"
},
{
"t": "Christmas: a party dress for herself and a scarf for her mum",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: a midi dress",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/karenmillen-natalie.png",
"test": {
"sub": "35 · Project manager · Lives with her partner · One app dress order",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her partner Chris"
],
[
"Work",
"Project manager"
],
[
"Device",
"Karen Millen app"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"UK 10"
],
[
"Budget",
"£115–£125, one order"
],
[
"Full name",
"Natalie Claudeai"
],
[
"Test email",
"natalie.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE NATALIE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, LinkedIn, Pinterest"
],
[
"Share of customers",
"4.2% — one order in 12 months, dresses, app, with a code (16k customers); median order £117.60; 53% first-time"
]
],
"fam": [
"Chris, 37, partner",
"Lorraine, 62, her mum",
"Kate, 32, sister",
"Ava, 5, niece"
],
"angle": "One-order app dress buyers with a code are 4.2% of Karen Millen customers over 12 months (16k), median order £118, 53% first-time.",
"q": [
"Find me an occasion dress in a 10 on the app and apply whichever code gives the best price.",
"Can I pay in instalments, and is there any interest?",
"Is the price the same on the app and on the website?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"10:30",
"19:30"
],
"s": [
{
"g": "Natalie buys an occasion dress in UK 10 with the code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Apply the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Does the code apply as advertised?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A party dress for herself and a scarf for her mum before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A midi dress in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "amelia",
"label": "Amelia, 33",
"name": "Amelia",
"age": 33,
"role": "Solicitor",
"kind": "cohort",
"tag": null,
"head": "2.5%",
"headSub": "of Karen Millen customers, 12 months",
"share": 2.5,
"chips": [
"Size UK 8 Petite, 5ft 2in",
"Karen Millen app, late evening",
"Apple Pay, Klarna",
"£125 per order, two or three a year"
],
"desc": "Buys two or three Karen Millen dresses a year on the app, often late in the evening, always with a code, and nearly always Petite. Spends close to £300 a year.",
"scen": [
{
"t": "Petite dress on the app",
"v": "£125",
"k": "everyday"
},
{
"t": "App and website parity",
"v": "£125",
"k": "everyday"
},
{
"t": "Late-night checkout with Klarna",
"v": "£125",
"k": "everyday"
},
{
"t": "Returning customer sign-in",
"v": "£125",
"k": "everyday"
},
{
"t": "Returning a dress on the app",
"v": "£4 fee",
"k": "everyday"
},
{
"t": "Christmas: engagement party dress",
"v": "£180",
"k": "christmas"
},
{
"t": "January sale on the app",
"v": "£130",
"k": "sale"
},
{
"t": "Black Friday on the app",
"v": "£150",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/karenmillen-amelia.png",
"test": {
"sub": "33 · Solicitor · Engaged · Repeat app buyer, petite",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her fiancé Will"
],
[
"Work",
"Solicitor"
],
[
"Device",
"Karen Millen app, late evening"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"UK 8 Petite, 5ft 2in"
],
[
"Budget",
"£125 per order, two or three a year"
],
[
"Full name",
"Amelia Claudeai"
],
[
"Test email",
"amelia.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE AMELIA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, TikTok, LinkedIn"
],
[
"Share of customers",
"2.5% — 2 to 3 orders in 12 months, dresses, app, with a code (10k customers); median spend £288.95; 30% bought Petite"
]
],
"fam": [
"Will, 35, fiancé: running, coffee",
"Diane, 60, her mum: handbags",
"Sophie, 30, sister: bridesmaid",
"Oscar, 2, nephew"
],
"angle": "Repeat app dress buyers with a code are 2.5% of Karen Millen customers over 12 months (10k), with 2 to 3 orders, median spend £289, 30% Petite and 55% ordering late evening. Tests the app, Petite range and repeat-customer journey.",
"q": [
"Which of these dresses comes in Petite 8, and how long will it be on someone who's 5ft 2?",
"Does my code stack with the sale price?",
"Which delivery option gets it to me tomorrow, and is there a cut-off tonight?"
],
"emailTimes": [
"21:30",
"21:30",
"21:30",
"21:30",
"20:30",
"11:00",
"20:30"
],
"s": [
{
"g": "Find a Petite occasion dress in size 8 with the code.",
"st": [
"Browse Petite dresses",
"Open one and check length and model height",
"Apply the code",
"Check the bag",
"Check out, stopping at payment"
],
"w": [
"Is model height given on Petite products?",
"Does the code apply?",
"Is Deliver+ pre-added?",
"Is Premier pre-selected?"
]
},
{
"g": "She sees different codes in the app and on the site.",
"st": [
"Compare the same dress in the app and on the website",
"Compare codes and prices",
"Compare delivery options",
"Compare bag totals",
"Note app-only offers"
],
"w": [
"Do app and web agree on code and price?",
"Does the bag sync?",
"Are app-only offers explained?",
"Is Premier pre-selected in either?"
]
},
{
"g": "A 10pm order split with Klarna.",
"st": [
"Add a dress",
"Go to checkout with the test details",
"Select Klarna",
"Check the schedule",
"Stop before authorising"
],
"w": [
"Does Klarna load?",
"Are limits explained?",
"Is consent pre-ticked?",
"Is the next-day cut-off shown correctly at night?"
]
},
{
"g": "Amelia has an account and wants a quick checkout.",
"st": [
"Sign in with the test account (when created)",
"Check saved details",
"Check the bag merge",
"Check defaults",
"Stop at payment"
],
"w": [
"Does the bag merge silently on sign-in?",
"Are saved details correct?",
"Is the cheapest delivery the default?",
"Is consent pre-ticked?"
]
},
{
"g": "She returns one of two dresses.",
"st": [
"Find returns in the app",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear?",
"Are exchanges offered?",
"Is the route easy in the app?",
"Is refund timing stated?"
]
},
{
"g": "A dress for her engagement party and a gift for her mum.",
"st": [
"Add a Petite party dress",
"Add a handbag for Diane",
"Apply the code",
"Check cut-offs",
"Check gift options"
],
"w": [
"Does the code apply to both?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Petite sale dresses with the extra code.",
"st": [
"Open the sale in the app",
"Filter Petite and size 8",
"Apply the extra code",
"Check stacking",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Petite stock holding up?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Amelia shops the event late in the evening on the app.",
"st": [
"Compare with earlier code prices",
"Add two dresses",
"Apply any code",
"Check Premier and Deliver+",
"Stop at payment"
],
"w": [
"Are prices genuinely lower?",
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Does the app cope at peak?"
]
}
]
}
},
{
"id": "louise",
"label": "Louise, 45",
"name": "Louise",
"age": 45,
"role": "NHS ward manager",
"kind": "cohort",
"tag": null,
"head": "2.5%",
"headSub": "of Karen Millen customers, 12 months",
"share": 2.5,
"chips": [
"Size UK 14",
"Phone in the evening",
"Debit card",
"£130, one order"
],
"desc": "Comes to Karen Millen once a year for a good coat, around £130 with a code, and wants to know it will last. Checks composition, length and the returns fee before buying.",
"scen": [
{
"t": "A wool coat that will last",
"v": "£130",
"k": "everyday"
},
{
"t": "Using the key worker discount",
"v": "£130",
"k": "everyday"
},
{
"t": "'Cashmere' and 'wool' searches",
"v": "£130",
"k": "everyday"
},
{
"t": "Guest checkout with card",
"v": "£130",
"k": "everyday"
},
{
"t": "Returning a coat",
"v": "£4 fee",
"k": "everyday"
},
{
"t": "Christmas: a coat for herself and knitwear for her mum",
"v": "£200",
"k": "christmas"
},
{
"t": "January coat sale",
"v": "£100",
"k": "sale"
},
{
"t": "Black Friday coat",
"v": "£130",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/karenmillen-louise.png",
"test": {
"sub": "45 · NHS ward manager · Married, three children · Coat buyer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Gary; children aged 19, 16 and 12"
],
[
"Work",
"NHS ward manager"
],
[
"Device",
"Phone in the evening"
],
[
"Pays with",
"Debit card"
],
[
"Size",
"UK 14"
],
[
"Budget",
"£130, one order"
],
[
"Full name",
"Louise Claudeai"
],
[
"Test email",
"louise.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE LOUISE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, Instagram, Pinterest"
],
[
"Share of customers",
"2.5% — one order in 12 months, outerwear, with a code (10k customers); median order £132.51; 64% first-time"
]
],
"fam": [
"Gary, 47, husband: fishing, football",
"Hannah, 19, daughter: university",
"Josh, 16, son: gaming",
"Lily, 12, daughter: netball"
],
"angle": "One-order outerwear buyers using a code are 2.5% of Karen Millen customers over 12 months (10k), median order £133, 64% first-time. Tests outerwear discovery, composition information and the NHS discount route.",
"q": [
"Show me wool coats in a 14 and tell me the composition and length, so I know it will last.",
"Do I get an NHS or key worker discount, and how do I claim it?",
"Is this coat warm enough for winter shifts, and what do other buyers say about it?"
],
"emailTimes": [
"20:30",
"20:30",
"20:30",
"20:30",
"19:30",
"10:00",
"19:00"
],
"s": [
{
"g": "Find a wool coat in size 14 and check the composition.",
"st": [
"Browse coats and filter by size 14",
"Filter by material if possible",
"Open two coats and compare composition and length",
"Add one",
"Review the bag"
],
"w": [
"Is there a material filter?",
"Is composition shown in full?",
"Is model height given?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Louise looks for the NHS or key worker discount.",
"st": [
"Find the discount page",
"Check the terms and verification",
"Add a coat",
"Look for where a code is entered",
"Check the total"
],
"w": [
"Is the key worker page complete, or blank?",
"Is verification explained?",
"Does the discount apply to outerwear?",
"Does the discount show on each line?"
]
},
{
"g": "She searches by fabric.",
"st": [
"Search cashmere coat",
"Search wool coat",
"Compare results with compositions",
"Check duplicates",
"Add one"
],
"w": [
"Do fabric searches return matching fabrics?",
"Are duplicate listings present?",
"Are compositions accurate?",
"Are results relevant?"
]
},
{
"g": "A first-time checkout on the site.",
"st": [
"Go to checkout with the test details",
"Check defaults and consent",
"Check the total",
"Note upsells",
"Stop at payment"
],
"w": [
"Is consent pre-ticked?",
"Is Premier pre-selected?",
"Does the total match the bag?",
"Is the delivery cost shown in the bag?"
]
},
{
"g": "The coat was too long.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Can it go back in store?"
]
},
{
"g": "A coat with the code and a jumper for a gift.",
"st": [
"Add a coat",
"Add a jumper",
"Apply the code",
"Check cut-offs",
"Check gift options"
],
"w": [
"Does the code apply to both?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A coat in the sale with the extra code.",
"st": [
"Open the coat sale",
"Apply the extra code",
"Check stacking",
"Check was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Louise waits for Black Friday for the coat she wants.",
"st": [
"Record the price before the event",
"Compare on the day",
"Apply any code",
"Check countdowns",
"Stop at payment"
],
"w": [
"Is the reduction genuine?",
"Are countdowns honest?",
"Is consent pre-ticked?",
"Is Premier pre-selected?"
]
}
]
}
},
{
"id": "gemma",
"label": "Gemma, 40",
"name": "Gemma",
"age": 40,
"role": "Dental practice owner",
"kind": "cohort",
"tag": null,
"head": "2.5%",
"headSub": "of Karen Millen customers, 12 months",
"share": 2.5,
"chips": [
"Size UK 12",
"Laptop and phone",
"Credit card",
"£80–£90, one order"
],
"desc": "Buys a Karen Millen bag, belt or top rather than a dress, once a year with the code, around £83.",
"scen": [
{
"t": "First order: a leather belt and a top",
"v": "£83",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "£83",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "£83",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£83",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "£83",
"k": "everyday"
},
{
"t": "Christmas: a handbag for her mum and a belt for herself",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: a bag and a top",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/karenmillen-gemma.png",
"test": {
"sub": "40 · Dental practice owner · Married, one child · Accessories and separates with a code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Married to Tom; daughter Isla, 8"
],
[
"Work",
"Dental practice owner"
],
[
"Device",
"Laptop and phone"
],
[
"Pays with",
"Credit card"
],
[
"Size",
"UK 12"
],
[
"Budget",
"£80–£90, one order"
],
[
"Full name",
"Gemma Claudeai"
],
[
"Test email",
"gemma.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE GEMMA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, Facebook, Pinterest"
],
[
"Share of customers",
"2.5% — one order in 12 months, accessories or mixed separates, with a code (10k customers); median order £82.71; 66% first-time"
]
],
"fam": [
"Tom, 42, husband",
"Isla, 8, daughter",
"Judy, 66, her mum",
"Mel, 38, sister"
],
"angle": "One-order buyers of accessories and separates with a code are 2.5% of Karen Millen customers over 12 months (10k), median order £83, 66% first-time.",
"q": [
"Which bag or belt goes with this top, and what's the best code price?",
"Is this genuine leather, and how do I look after it?",
"Can this go as a gift, wrapped, with the price hidden?"
],
"emailTimes": [
"12:30",
"20:00",
"12:30",
"20:00",
"17:30",
"10:30",
"19:00"
],
"s": [
{
"g": "Gemma buys a leather belt and a top in UK 12 with the code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Apply the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Does the code apply as advertised?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A handbag for her mum and a belt for herself before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A bag and a top in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "emma",
"label": "Emma",
"name": "Emma",
"age": null,
"role": "Any role",
"kind": "catchall",
"tag": "CATCH-ALL",
"head": "69% catch-all",
"headSub": "of Karen Millen customers not covered by the other seven",
"share": 69.0,
"chips": [
"Rotates across the size ranges sold",
"Rotates: phone, laptop, tablet, app",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card",
"Rotates: £15 to £300"
],
"desc": "Not one person but a rotating stand-in for everyone the five cohorts don't describe. Each run picks a different mix of category, device, payment, code use, size range and market so the long tail of Emma's site gets tested too.",
"scen": [
{
"t": "Random mixed basket",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Switching device mid-journey",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Abandon and come back",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Unusual payment mix",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Finding help",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Christmas for an unlikely list",
"v": "£100–£250",
"k": "christmas"
},
{
"t": "Sale from a random angle",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday from a random angle",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/karenmillen-emma.png",
"test": {
"sub": "Any age · Any role · The catch-all shopper",
"surname": "Claudeai",
"facts": [
[
"Household",
"Rotates each run (see examples below)"
],
[
"Work",
"Rotates each run"
],
[
"Device",
"Rotates: phone, laptop, tablet, app"
],
[
"Pays with",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card"
],
[
"Size",
"Rotates across the size ranges sold"
],
[
"Budget",
"Rotates: £15 to £300"
],
[
"Full name",
"Emma Claudeai"
],
[
"Test email",
"emma.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE EMMA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Rotates each run"
],
[
"Share of customers",
"69% — the 69% of Karen Millen customers over 12 months who sit outside the seven cohorts: knitwear and trouser buyers, accessory-only orders, non-coded app users, 4+ order regulars"
]
],
"fam": [
"Emma, 41: knitwear twice a year, no code",
"Suki, 29: a handbag for a birthday",
"Pauline, 61: trousers in Curve",
"Ingrid, 38: four orders a year from Sweden"
],
"angle": "A catch-all for the 76% of customers outside the seven cohorts. Scenarios are deliberately mixed and are randomised on each run so that unusual but real journeys get covered.",
"q": [
"Which of these knitwear pieces is really cashmere or wool, and what's the fabric breakdown?",
"What's the total once delivery and any extras are added?",
"Can you tell me when something I like is back in my size?"
],
"emailTimes": [
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00"
],
"s": [
{
"g": "Build a basket from three unrelated categories chosen at random for this run.",
"st": [
"Pick three categories at random",
"Add one item from each in a random size",
"Check cross-category delivery and sellers",
"Review the bag",
"Check out as a guest, stopping at payment"
],
"w": [
"Do mixed baskets show one clear delivery promise?",
"Is Deliver+ or a subscription pre-added?",
"Is consent pre-ticked?",
"Does the total match the bag?"
]
},
{
"g": "Start on one device and finish on another.",
"st": [
"Add two items on the first device",
"Open the site on a second device as the same guest or account",
"Check what carried over",
"Complete the bag",
"Stop at payment"
],
"w": [
"Does the bag persist across devices?",
"Do codes carry over?",
"Does a wishlist need sign-in?",
"Is the layout usable on both?"
]
},
{
"g": "Leave a basket for a day and return.",
"st": [
"Build a basket",
"Leave for 24 hours",
"Return and check the bag and prices",
"Check for subscriptions or add-ons that appeared",
"Check out, stopping at payment"
],
"w": [
"Is stock held?",
"Did prices or codes change?",
"Did Premier, Royalty or Deliver+ appear in the bag?",
"Are abandoned-basket emails sent with pre-ticked consent?"
]
},
{
"g": "Pay part by gift card and the rest another way.",
"st": [
"Build a basket",
"Apply a gift card at checkout, stopping before numbers",
"Check the remaining balance",
"Select a pay-later or wallet method",
"Stop before authorising"
],
"w": [
"Can gift cards combine with other methods?",
"Are limits explained?",
"Do pop-ups open outside the controlled tab?",
"Is the amount correct?"
]
},
{
"g": "Pick a random problem (lost parcel, wrong item, size question) and try to get help.",
"st": [
"Search the help pages for the problem",
"Try the contact routes",
"Check hours and response times",
"Check guest order tracking",
"Stop before sending"
],
"w": [
"Is help easy to find?",
"Is a phone or chat route available?",
"Are response times stated?",
"Can a guest track an order?"
]
},
{
"g": "Gifts for a random mix of recipients, including some the site doesn't obviously serve.",
"st": [
"Pick four random recipients",
"Search for each",
"Note dead ends and alternatives",
"Check cut-offs and gift options",
"Stop at payment"
],
"w": [
"Do empty states offer gift cards?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Enter the sale through a random route: search, email code, category, app banner.",
"st": [
"Enter by the chosen route",
"Apply any code",
"Check stacking",
"Check was prices",
"Check returns on sale items"
],
"w": [
"Do all routes reach the same prices?",
"Do codes stack?",
"Are was prices credible?",
"Are final-sale items labelled?"
]
},
{
"g": "Shop the event with a random device, payment and basket.",
"st": [
"Enter via a random route",
"Build a random basket",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
}
]
},
{
"slug": "boohoo",
"name": "boohoo",
"site": "https://www.boohoo.com",
"full": {
"label": "Full personas and scenarios (boohoo.com)",
"url": "https://claude.ai/artifact/PWNCXoTuAzFkYaAJAK6ZBM"
},
"test": {
"title": "boohoo test personas and scenarios",
"intro": [
"Eight personas for this site: the typical customer, the next six largest behavioural cohorts, and a catch-all for everyone else, from 12 months of order data (10 Oct 2025 to 8 Oct 2026). Each has eight scenarios: five everyday journeys plus Christmas, post-Christmas sale and Black Friday.",
"Personas are ordered by their share of customers, largest first. The typical customer is built from the largest cohort; the others are the next four largest cohorts."
],
"rules": [
"Start by deleting all items in the cart, then log out.",
"Use a dedicated test account, not live credentials.",
"Never enter personal, address or payment details.",
"Pause for approval before applying codes, deleting items or submitting any payment step."
],
"shareNote": "Each profile shows the share of the site's customers over the last three months (3 Jul to 2 Oct 2026) for the typical customer, and over 12 months (10 Oct 2025 to 8 Oct 2026) for the other four, whose orders match a behavioural proxy for the persona. Order data holds no age, gender or household details, so the proxies use what is observable: categories bought, payment method, delivery choice, app use, postcode area, promo codes and spend. They are indicative only, overlap between personas, and don't sum to 100%. Source: Group analytics warehouse, excluding staff and sample orders.",
"note": "Scenario products are typical boohoo categories and availability was not checked against the live site, so swap in what is in stock. Details such as the delivery pass price (reported as £9.99 and £12.99), the £1.99 returns fee, student, graduate and NHS discounts, parcel lockers, gift card limits and Ireland delivery came from third-party voucher and review sites, which sometimes disagree. Verify them on boohoo.com and treat any mismatch as a finding. All personas are 18 or over."
},
"personas": [
{
"id": "courtney",
"label": "Courtney, 25",
"name": "Courtney",
"age": 25,
"role": "Dental nurse",
"kind": "typical",
"tag": "TYPICAL CUSTOMER",
"head": "Typical customer",
"headSub": "Built from the largest cohort on boohoo",
"share": null,
"chips": [
"Size UK 10",
"boohoo app, evenings",
"Apple Pay, Klarna",
"£40 per order, a few times a year"
],
"desc": "Orders from boohoo a few times a year, almost always in the evening on the app, pays with Apple Pay or Klarna, and never checks out without a code. Buys dresses and tops around £40 a go and picks next-day delivery.",
"scen": [
{
"t": "Evening app order with a code",
"v": "£40",
"k": "everyday"
},
{
"t": "Which code is real?",
"v": "£40",
"k": "everyday"
},
{
"t": "Klarna at checkout",
"v": "£45",
"k": "everyday"
},
{
"t": "Next-day cut-off at 9pm",
"v": "£40",
"k": "everyday"
},
{
"t": "Dresses and tops that fit",
"v": "£45",
"k": "everyday"
},
{
"t": "Christmas pyjamas and gifts",
"v": "£80",
"k": "christmas"
},
{
"t": "Boxing Day app sale",
"v": "£50",
"k": "sale"
},
{
"t": "Black Friday on the app",
"v": "£60",
"k": "bf"
}
],
"finding": {
"sev": "CRITICAL",
"text": "Premier added to the bag total before checkout"
},
"status": {
"text": "See Courtney's live results →",
"url": "https://claude.ai/artifact/ABB6Q9gbSSgHsNUa9RwyB6"
},
"img": "assets/ds/personas/portraits/boohoo-courtney.png",
"test": {
"sub": "25 · Dental nurse · Lives with her boyfriend · The typical boohoo customer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her boyfriend Josh"
],
[
"Work",
"Dental nurse"
],
[
"Device",
"boohoo app, evenings"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"UK 10"
],
[
"Budget",
"£40 per order, a few times a year"
],
[
"Full name",
"Courtney Claudeai"
],
[
"Test email",
"courtney.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE COURTNEY, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Instagram, Snapchat"
],
[
"Share of customers",
"Largest cohort — the modal boohoo customer: returning, code user, dress and tops buyer, median order £41.01 (80.3% returning customers; 78.1% used a promo code; 45.5% ordered via the app; 54.3% chose next day)"
]
],
"fam": [
"Josh, 27, boyfriend: gym, trainers",
"Tracy, 52, mum: loungewear, candles",
"Kyle, 20, brother: hoodies",
"Nan Joan, 78: slippers"
],
"angle": "Represents the largest boohoo cohort: a returning UK app shopper who uses a code on four orders in five, pays with Apple Pay or Klarna, buys dresses and tops around £41 and chooses next-day delivery. Tests the code, app, pay-later and next-day flow end to end.",
"q": [
"Find me a going-out dress in a 10 under £25, and apply the best code.",
"If I order by 9pm, will it be here tomorrow?",
"Which code actually works: the one in the banner or the one on the product page?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:30",
"11:00",
"20:30"
],
"s": [
{
"g": "Buy a dress and a top on the app with the banner code and next-day delivery.",
"st": [
"Open the app in the evening",
"Add a dress and a top in size 10",
"Apply the banner code",
"Choose delivery",
"Check out with Apple Pay, stopping at payment"
],
"w": [
"Does the code apply as advertised?",
"Is Premier pre-selected over standard delivery?",
"Is Deliver+ pre-added?",
"Is consent pre-ticked?"
]
},
{
"g": "Courtney sees EXTRA in the banner, 15EXTRA on a product page and 15PREM for Premier members, and wants to know which works.",
"st": [
"Note the codes shown across the homepage, listing and product page",
"Add two items",
"Try each code in turn",
"Check which applies and the message when one fails",
"Remove and re-apply"
],
"w": [
"Do different pages advertise different codes?",
"Is a members-only code shown to non-members?",
"Are failure messages specific?",
"Does the discount show against each line?"
]
},
{
"g": "She wants to split a £45 order with Klarna.",
"st": [
"Build a £45 bag",
"Go to checkout with the test details",
"Select Klarna",
"Check the schedule shown",
"Stop before authorising"
],
"w": [
"Does Klarna load inline?",
"Are minimums and eligibility clear?",
"Is the amount correct?",
"Does the pop-up open outside the controlled tab?"
]
},
{
"g": "She orders at 9pm and expects it tomorrow.",
"st": [
"Check the countdown on a product page",
"Add and go to checkout",
"Compare the delivery date shown",
"Check the next-day price and the Premier offer",
"Confirm the date at checkout"
],
"w": [
"Is the cut-off shown and consistent?",
"Does checkout honour the product page's promise?",
"Is next-day priced as the delivery page says?",
"Is Premier offered honestly as a choice?"
]
},
{
"g": "Courtney wants dresses and tops in size 10 with enough fit information to avoid a return.",
"st": [
"Browse dresses and tops",
"Open three products",
"Check for model size, height and fabric",
"Compare photos of the same style in different colours",
"Add two items"
],
"w": [
"Is model size and height given?",
"Are fit notes present?",
"Do colour variants load correctly?",
"Are duplicates cluttering the results?"
]
},
{
"g": "Buy matching Christmas pyjamas for her and Josh, loungewear for her mum and a gift card for Kyle.",
"st": [
"Search Christmas pyjamas",
"Add a women's and a men's set",
"Add loungewear for Tracy",
"Find gift cards",
"Check Christmas cut-offs"
],
"w": [
"Are men's items reachable from boohoo?",
"Does the code apply to gift items?",
"Are cut-offs published?",
"Is Deliver+ pre-added?"
]
},
{
"g": "She opens the app on Boxing Day morning and wants bargains with the extra code.",
"st": [
"Open the sale in the app",
"Filter by size 10",
"Apply the extra code",
"Check urgency labels",
"Check delivery and returns"
],
"w": [
"Does the code stack with sale prices?",
"Are low-stock labels accurate?",
"Are was prices credible?",
"Is the returns fee clear?"
]
},
{
"g": "Courtney shops the Black Friday event on the app in the evening.",
"st": [
"Open the event on the app",
"Add three items",
"Apply any code",
"Check Premier and Deliver+ defaults",
"Check out, stopping at payment"
],
"w": [
"Do prices beat the everyday code price?",
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Does the app cope at peak?"
]
}
]
}
},
{
"id": "danielle",
"label": "Danielle, 27",
"name": "Danielle",
"age": 27,
"role": "Nursery practitioner",
"kind": "cohort",
"tag": null,
"head": "3.3%",
"headSub": "of boohoo customers, 12 months",
"share": 3.3,
"chips": [
"Size UK 12",
"Android phone",
"Debit card",
"£30, one order"
],
"desc": "Buys from boohoo once a year, a mixed basket around £31, and never bothers with a code even though one is always advertised.",
"scen": [
{
"t": "First order: a top and leggings",
"v": "£31",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "£31",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "£31",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£31",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "£31",
"k": "everyday"
},
{
"t": "Christmas: pyjamas for her mum and a jumper for herself",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: a jumper and jeans",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohoo-danielle.png",
"test": {
"sub": "27 · Nursery practitioner · Lives with her boyfriend · One order, no code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her boyfriend Lewis"
],
[
"Work",
"Nursery practitioner"
],
[
"Device",
"Android phone"
],
[
"Pays with",
"Debit card"
],
[
"Size",
"UK 12"
],
[
"Budget",
"£30, one order"
],
[
"Full name",
"Danielle Claudeai"
],
[
"Test email",
"danielle.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE DANIELLE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, Instagram, TikTok"
],
[
"Share of customers",
"3.3% — one order in 12 months, UK, no promo code (111k customers); median order £30.61; 43% first-time"
]
],
"fam": [
"Lewis, 28, boyfriend",
"Angela, 50, her mum",
"Dean, 52, her dad",
"Nan Pat, 74"
],
"angle": "UK one-order customers without a code are 3.3% of boohoo customers over 12 months (111k), median order £31, 43% first-time.",
"q": [
"What's the cheapest way to get a top and leggings in a 12, delivery included?",
"Do I need a code, or is the price I see the price I pay?",
"Will delivery fit around my shifts, and can I use a locker?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:30",
"12:00",
"20:00"
],
"s": [
{
"g": "Danielle buys a top and leggings in UK 12 without a code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Skip the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Is the shopper pushed to find a code?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "Pyjamas for her mum and a jumper for herself before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A jumper and jeans in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "lena",
"label": "Lena, 22",
"name": "Lena",
"age": 22,
"role": "Student",
"kind": "cohort",
"tag": null,
"head": "2.2%",
"headSub": "of boohoo customers, 12 months",
"share": 2.2,
"chips": [
"Size EU 36 / UK 8",
"iPhone",
"PayPal, Klarna",
"€45–€50, one order"
],
"desc": "Found boohoo through TikTok and placed one order from Germany without a code, around £43. Everything about currency, delivery, duties and returns is new to her.",
"scen": [
{
"t": "Switching to Germany",
"v": "€45",
"k": "everyday"
},
{
"t": "Delivery and duties to Berlin",
"v": "€45",
"k": "everyday"
},
{
"t": "First-time checkout without a code",
"v": "€45",
"k": "everyday"
},
{
"t": "Returning from Germany",
"v": "Refund",
"k": "everyday"
},
{
"t": "Sizing in EU sizes",
"v": "€45",
"k": "everyday"
},
{
"t": "Christmas order to Berlin",
"v": "€60",
"k": "christmas"
},
{
"t": "January sale from Germany",
"v": "€40",
"k": "sale"
},
{
"t": "Black Friday from Berlin",
"v": "€60",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohoo-lena.png",
"test": {
"sub": "22 · Student · Lives in Berlin · International first-timer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Student flat share in Berlin"
],
[
"Work",
"Student, part-time barista"
],
[
"Device",
"iPhone"
],
[
"Pays with",
"PayPal, Klarna"
],
[
"Size",
"EU 36 / UK 8"
],
[
"Budget",
"€45–€50, one order"
],
[
"Full name",
"Lena Claudeai"
],
[
"Test email",
"lena.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE LENA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Instagram, Snapchat"
],
[
"Share of customers",
"2.2% — one order in 12 months, outside the UK, no promo code (75k customers); median order £43.29; 57% first-time"
]
],
"fam": [
"Petra, 50, mum",
"Jonas, 52, dad",
"Mia-Sophie, 17, sister: trends",
"Oma Helga, 78"
],
"angle": "International one-order customers without a code are 2.2% of boohoo customers over 12 months (75k), median order £43, 57% first-time. Tests the international first-time journey.",
"q": [
"What does this cost to Germany in euro, including delivery and duties?",
"What size is EU 36 in your sizing?",
"How do I send things back from Germany, and how long does a refund take?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"12:00",
"20:00"
],
"s": [
{
"g": "Set the site to Germany and compare prices.",
"st": [
"Find the region selector",
"Choose Germany and euro",
"Check a dress price",
"Add a dress in EU 36",
"Check the bag total"
],
"w": [
"Is the selector easy to find?",
"Are euro prices consistent?",
"Does the size selector show EU sizes?",
"Is Deliver+ offered internationally?"
]
},
{
"g": "Lena wants the total cost and date before paying.",
"st": [
"Check the delivery page for Germany",
"Check duties messaging",
"Go to checkout with the test details",
"Check options and dates",
"Stop at payment"
],
"w": [
"Are duties explained?",
"Are delivery times realistic?",
"Which payment methods appear?",
"Is consent pre-ticked?"
]
},
{
"g": "She doesn't know about codes and checks out as advertised.",
"st": [
"Add two items",
"Go to checkout as a guest",
"Check defaults",
"Check the total",
"Stop at payment"
],
"w": [
"Is Premier pre-selected for an international order?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "The top didn't fit.",
"st": [
"Find international returns",
"Check cost and route",
"Check refund timing",
"Look for an exchange",
"Stop before submitting"
],
"w": [
"Is the international route clear?",
"Is the fee shown in euro?",
"Are exchanges offered?",
"Is timing stated?"
]
},
{
"g": "She wants to be sure EU 36 is UK 8.",
"st": [
"Open the size guide",
"Check EU conversions",
"Check model size and height",
"Compare two items",
"Add one"
],
"w": [
"Does the size guide show EU sizes?",
"Is model information given?",
"Is stock shown per size?",
"Are fit notes present?"
]
},
{
"g": "A Christmas party outfit delivered before she flies home.",
"st": [
"Add an outfit",
"Check German cut-offs",
"Check duties",
"Apply any code",
"Stop at payment"
],
"w": [
"Are international cut-offs published?",
"Are duties shown?",
"Does the code apply?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Sale items in euro with the extra code.",
"st": [
"Open the sale in euro",
"Apply the extra code",
"Check stacking",
"Check delivery and returns costs",
"Check was prices"
],
"w": [
"Do codes stack?",
"Are euro was prices credible?",
"Are returns costs clear?",
"Is delivery priced in euro?"
]
},
{
"g": "Lena shops Black Friday on her phone in euro.",
"st": [
"Compare euro prices before and during",
"Add three items",
"Apply any code",
"Check delivery and duties",
"Stop at payment"
],
"w": [
"Are reductions genuine in euro?",
"Do countdowns run honestly?",
"Is consent pre-ticked?",
"Are duties shown?"
]
}
]
}
},
{
"id": "shannon",
"label": "Shannon, 23",
"name": "Shannon",
"age": 23,
"role": "Hairdresser",
"kind": "cohort",
"tag": null,
"head": "2.1%",
"headSub": "of boohoo customers, 12 months",
"share": 2.1,
"chips": [
"Size UK 10",
"iPhone",
"Debit card, Clearpay",
"£35, one order"
],
"desc": "Buys one boohoo dress for a specific night out, with the banner code, around £35, and may not come back until the next occasion.",
"scen": [
{
"t": "Saturday dress with the code",
"v": "£35",
"k": "everyday"
},
{
"t": "Which code is real?",
"v": "£35",
"k": "everyday"
},
{
"t": "Next-day cut-off on Thursday night",
"v": "£35",
"k": "everyday"
},
{
"t": "Clearpay for a £35 dress",
"v": "£35",
"k": "everyday"
},
{
"t": "Returning the dress after Saturday",
"v": "£1.99 fee",
"k": "everyday"
},
{
"t": "Christmas party dress",
"v": "£40",
"k": "christmas"
},
{
"t": "New Year's Eve from the sale",
"v": "£30",
"k": "sale"
},
{
"t": "Black Friday dress",
"v": "£40",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohoo-shannon.png",
"test": {
"sub": "23 · Hairdresser · Lives with her mum · Dress for a night out",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her mum and younger brother"
],
[
"Work",
"Hairdresser"
],
[
"Device",
"iPhone"
],
[
"Pays with",
"Debit card, Clearpay"
],
[
"Size",
"UK 10"
],
[
"Budget",
"£35, one order"
],
[
"Full name",
"Shannon Claudeai"
],
[
"Test email",
"shannon.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE SHANNON, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Instagram, Snapchat"
],
[
"Share of customers",
"2.1% — one order in 12 months, dresses, with a promo code (70k customers); median order £35.14; 39% order between 8pm and 2am"
]
],
"fam": [
"Tina, 46, mum: pyjamas",
"Kai, 15, brother: gaming",
"Nan Pat, 70",
"Jade, 23, best friend"
],
"angle": "One-order, code-using dress buyers are 2.1% of boohoo customers over 12 months (70k), median order £35, 39% ordering late evening. Tests the dress-for-an-occasion journey end to end.",
"q": [
"Find me a going-out dress in a 10 that arrives by Friday, and tell me the cut-off.",
"Can I split £35 into payments?",
"What will it cost to return if it doesn't fit?"
],
"emailTimes": [
"21:30",
"21:30",
"21:30",
"21:30",
"18:00",
"12:00",
"20:30"
],
"s": [
{
"g": "A going-out dress in size 10 for Saturday with the banner code.",
"st": [
"Search going out dress",
"Filter by size 10",
"Open one and check model information",
"Add it and apply the code",
"Check the bag"
],
"w": [
"Does the trend search work?",
"Is model size and height given?",
"Does the code apply?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Different codes appear on the banner and product page.",
"st": [
"Note the codes shown",
"Try each in the bag",
"Read the error for any that fail",
"Check the discount per line",
"Remove and re-apply"
],
"w": [
"Do pages advertise different codes?",
"Are failure messages specific?",
"Does the discount show per line?",
"Is a members-only code shown to everyone?"
]
},
{
"g": "She orders at 10pm on Thursday for Saturday.",
"st": [
"Check the countdown",
"Go to checkout",
"Compare the delivery date",
"Check the next-day price",
"Confirm the date"
],
"w": [
"Is the cut-off consistent?",
"Does checkout honour the product page date?",
"Is Premier pre-selected?",
"Is next-day priced as stated?"
]
},
{
"g": "She splits a small order with Clearpay.",
"st": [
"Go to checkout with the test details",
"Look for Clearpay",
"Select it if offered",
"Check minimums",
"Stop before authorising"
],
"w": [
"Is Clearpay offered at checkout, or only shown as a logo in the bag?",
"Are minimums explained?",
"Does Klarna load as an alternative?",
"Is consent pre-ticked?"
]
},
{
"g": "It didn't fit and she wants her money back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers offered?"
]
},
{
"g": "A sparkly dress for the work Christmas party.",
"st": [
"Search Christmas party dress",
"Add one in size 10",
"Apply the code",
"Check cut-offs",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply?",
"Is Premier pre-selected?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A sale dress before New Year's Eve.",
"st": [
"Open the sale",
"Filter by size 10",
"Apply the extra code",
"Check delivery against 31 December",
"Check returns"
],
"w": [
"Do codes stack?",
"Is a delivery date shown?",
"Are was prices credible?",
"Is the returns fee clear?"
]
},
{
"g": "Shannon buys her Christmas party dress on Black Friday.",
"st": [
"Compare prices before and during",
"Add a dress",
"Apply any code",
"Check Premier and Deliver+",
"Stop at payment"
],
"w": [
"Is the reduction genuine?",
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Do countdowns run honestly?"
]
}
]
}
},
{
"id": "jodie",
"label": "Jodie, 22",
"name": "Jodie",
"age": 22,
"role": "Call centre agent",
"kind": "cohort",
"tag": null,
"head": "1.9%",
"headSub": "of boohoo customers, 12 months",
"share": 1.9,
"chips": [
"Size UK 8",
"iPhone, evenings",
"Debit card, Clearpay",
"£32, one order"
],
"desc": "Buys tops and knitwear from boohoo once a year with the banner code, around £32, late in the evening.",
"scen": [
{
"t": "First order: two tops",
"v": "£32",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "£32",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "£32",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£32",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "£32",
"k": "everyday"
},
{
"t": "Christmas: a jumper for her mum and a top for herself",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: three tops",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohoo-jodie.png",
"test": {
"sub": "22 · Call centre agent · Lives with her parents · Tops with a code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her parents"
],
[
"Work",
"Call centre agent"
],
[
"Device",
"iPhone, evenings"
],
[
"Pays with",
"Debit card, Clearpay"
],
[
"Size",
"UK 8"
],
[
"Budget",
"£32, one order"
],
[
"Full name",
"Jodie Claudeai"
],
[
"Test email",
"jodie.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE JODIE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Instagram, Snapchat"
],
[
"Share of customers",
"1.9% — one order in 12 months, tops and knitwear, with a promo code (62k customers); median order £32.28; 38% order between 8pm and 2am"
]
],
"fam": [
"Lisa, 48, mum",
"Gary, 50, dad",
"Tyler-Jay, 16, brother",
"Nan Doreen, 73"
],
"angle": "One-order buyers of tops and knitwear with a code are 1.9% of boohoo customers over 12 months (62k), median order £32, 38% ordering late evening.",
"q": [
"Show me tops in an 8 and which code takes the most off.",
"Is the price in my bag the same as the price I saw with the code?",
"What's the cheapest delivery, and is Premier worth it for me?"
],
"emailTimes": [
"21:30",
"21:30",
"21:30",
"21:30",
"18:30",
"12:30",
"20:30"
],
"s": [
{
"g": "Jodie buys two tops in UK 8 with the code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Apply the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Does the code apply as advertised?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A jumper for her mum and a top for herself before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Three tops in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "abbie",
"label": "Abbie, 20",
"name": "Abbie",
"age": 20,
"role": "Apprentice",
"kind": "cohort",
"tag": null,
"head": "1.6%",
"headSub": "of boohoo customers, 12 months",
"share": 1.6,
"chips": [
"Size UK 8",
"boohoo app",
"Apple Pay, Klarna",
"£30–£35, one order"
],
"desc": "Downloaded the boohoo app for an app-only offer, placed one order with a code, around £33, and judges the brand on that first app experience.",
"scen": [
{
"t": "The app-only offer",
"v": "£33",
"k": "everyday"
},
{
"t": "App checkout with Apple Pay",
"v": "£33",
"k": "everyday"
},
{
"t": "Trend search in the app",
"v": "£33",
"k": "everyday"
},
{
"t": "Push notifications and consent",
"v": "Free",
"k": "everyday"
},
{
"t": "Returning from the app",
"v": "£1.99 fee",
"k": "everyday"
},
{
"t": "Christmas gifts in the app",
"v": "£60",
"k": "christmas"
},
{
"t": "Boxing Day in the app",
"v": "£35",
"k": "sale"
},
{
"t": "Black Friday on the app",
"v": "£50",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohoo-abbie.png",
"test": {
"sub": "20 · Apprentice · Lives with her parents · App first-timer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her parents"
],
[
"Work",
"Business admin apprentice"
],
[
"Device",
"boohoo app"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"UK 8"
],
[
"Budget",
"£30–£35, one order"
],
[
"Full name",
"Abbie Claudeai"
],
[
"Test email",
"abbie.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE ABBIE, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Snapchat, Instagram"
],
[
"Share of customers",
"1.6% — one order in 12 months, app, with a promo code (52k customers); median order £33.30; 22% bought Petite"
]
],
"fam": [
"Sharon, 47, mum: candles",
"Dave, 49, dad",
"Leon, 17, brother: trainers",
"Nan Carol, 72"
],
"angle": "One-order app customers with a code are 1.6% of boohoo customers over 12 months (52k), median order £33, 28% first-time, 22% Petite. Tests the app-only offer and first app order.",
"q": [
"What is the app-only offer, and is it really better than the website?",
"Can I pay with Apple Pay or Klarna on the app?",
"Will you send me offers all the time, and how do I switch notifications off?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:30",
"12:30",
"20:30"
],
"s": [
{
"g": "Abbie installs the app for an advertised app-only discount.",
"st": [
"Note the app-only offer on the website",
"Open the same product in the app",
"Compare prices and codes",
"Add to bag in the app",
"Check the bag"
],
"w": [
"Is the app-only offer real and explained?",
"Do app and web prices match otherwise?",
"Does the bag sync?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Her first order on the app with Apple Pay.",
"st": [
"Go to checkout with the test details",
"Check defaults and consent",
"Select Apple Pay, stopping before authorising",
"Check the total",
"Note any upsells"
],
"w": [
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "She searches a TikTok trend term.",
"st": [
"Search a trend term",
"Filter by size 8",
"Check relevance and duplicates",
"Open one",
"Add it"
],
"w": [
"Does the app search handle trend terms?",
"Are duplicates present?",
"Does the size filter hold?",
"Is model information given?"
]
},
{
"g": "She wants offers without being spammed.",
"st": [
"Review consent prompts in the app",
"Check marketing defaults",
"Check notification settings",
"Check the privacy wording",
"Stop before submitting"
],
"w": [
"Are consent boxes pre-ticked?",
"Are notification prompts clear?",
"Can she opt out easily?",
"Is the wording plain?"
]
},
{
"g": "The top was too small.",
"st": [
"Find returns in the app",
"Check the fee and window",
"Look for an exchange",
"Check drop-off",
"Stop before submitting"
],
"w": [
"Is the route easy in the app?",
"Is the fee clear?",
"Are exchanges offered?",
"Is timing stated?"
]
},
{
"g": "Gifts for her mum and brother plus a party top.",
"st": [
"Add a candle set and a hoodie",
"Add a party top",
"Apply the code",
"Check cut-offs",
"Stop at payment"
],
"w": [
"Does the code apply to gifts?",
"Are cut-offs published?",
"Is Premier pre-selected?",
"Is Deliver+ pre-added?"
]
},
{
"g": "The sale with the extra code on the app.",
"st": [
"Open the sale in the app",
"Filter by size 8",
"Apply the extra code",
"Check stacking",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is the app fast?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Abbie shops the event on the app in the evening.",
"st": [
"Compare with earlier prices",
"Add three items",
"Apply any code",
"Check Premier and Deliver+",
"Stop at payment"
],
"w": [
"Are prices genuinely lower?",
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Does the app cope at peak?"
]
}
]
}
},
{
"id": "kayleigh",
"label": "Kayleigh, 28",
"name": "Kayleigh",
"age": 28,
"role": "Care worker",
"kind": "cohort",
"tag": null,
"head": "1.5%",
"headSub": "of boohoo customers, 12 months",
"share": 1.5,
"chips": [
"Size UK 10 Petite",
"Android phone, after 9pm",
"Debit card, Klarna",
"£35 per order, two or three a year"
],
"desc": "Orders from boohoo two or three times a year, late in the evening once her son is asleep, always with a code and often Petite. Spends about £77 a year.",
"scen": [
{
"t": "Petite loungewear at 10pm",
"v": "£35",
"k": "everyday"
},
{
"t": "Second order: does the bag remember Premier?",
"v": "£35",
"k": "everyday"
},
{
"t": "Cheapest delivery",
"v": "£35",
"k": "everyday"
},
{
"t": "Petite fit information",
"v": "£35",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£1.99 fee",
"k": "everyday"
},
{
"t": "Christmas pyjamas for Theo and her",
"v": "£50",
"k": "christmas"
},
{
"t": "Boxing Day on her phone",
"v": "£40",
"k": "sale"
},
{
"t": "Black Friday after bedtime",
"v": "£50",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohoo-kayleigh.png",
"test": {
"sub": "28 · Care worker · Single mum of one · Repeat evening bargain shopper",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her son Theo, 4"
],
[
"Work",
"Care worker, shifts"
],
[
"Device",
"Android phone, after 9pm"
],
[
"Pays with",
"Debit card, Klarna"
],
[
"Size",
"UK 10 Petite"
],
[
"Budget",
"£35 per order, two or three a year"
],
[
"Full name",
"Kayleigh Claudeai"
],
[
"Test email",
"kayleigh.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE KAYLEIGH, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Facebook, Instagram"
],
[
"Share of customers",
"1.5% — 2 to 3 orders in 12 months with a promo code (50k customers); median spend £76.54; 57% order between 8pm and 2am; 26% bought Petite"
]
],
"fam": [
"Theo, 4, son: dinosaurs",
"Debbie, 52, mum: loungewear",
"Craig, 54, dad",
"Nan Rose, 75"
],
"angle": "Repeat, code-using customers ordering late in the evening are 1.5% of boohoo customers over 12 months (50k), with 2 to 3 orders, median spend £77, 26% Petite and 57% ordering between 8pm and 2am. Tests the repeat evening journey.",
"q": [
"Which Petite loungewear sets are under £30, and what's the cheapest delivery?",
"Will I be charged for Premier without realising? Show me exactly what's in my basket.",
"Can you tell me when something in my size drops in price?"
],
"emailTimes": [
"21:30",
"21:30",
"21:30",
"21:30",
"21:00",
"20:30",
"20:30"
],
"s": [
{
"g": "A Petite loungewear set with the code after bedtime.",
"st": [
"Browse Petite loungewear on mobile",
"Add a set in size 10",
"Apply the code",
"Check the bag",
"Check out, stopping at payment"
],
"w": [
"Is the mobile layout easy at night?",
"Does the code apply?",
"Is Deliver+ pre-added?",
"Is Premier pre-selected?"
]
},
{
"g": "On her second visit the bag shows a subscription she never chose.",
"st": [
"Return as a guest after an earlier checkout",
"Add an item",
"Check the bag's Order Summary for Premier",
"Look for a remove control",
"Go to checkout and check the default"
],
"w": [
"Does Premier appear in the bag as a line item?",
"Can it be removed?",
"Is it pre-selected at checkout?",
"Does the total make sense?"
]
},
{
"g": "Every pound matters, so she wants the cheapest delivery.",
"st": [
"Go to checkout with the test details",
"Compare options and prices",
"Check what's pre-selected",
"Check lockers",
"Pick the cheapest"
],
"w": [
"Is the cheapest option easy to choose?",
"Is Premier the default?",
"Are lockers offered?",
"Is the free-delivery threshold shown?"
]
},
{
"g": "She wants Petite lengths and model height.",
"st": [
"Open two Petite items",
"Check for model height and length",
"Compare with standard",
"Check fit notes",
"Add one"
],
"w": [
"Is model height given?",
"Is length stated?",
"Is sizing explained between Petite and standard?",
"Is stock shown?"
]
},
{
"g": "One item didn't fit.",
"st": [
"Find the returns policy",
"Check the fee",
"Look for an exchange",
"Check lockers and shops",
"Stop before submitting"
],
"w": [
"Is the fee clear?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are drop-off options convenient?"
]
},
{
"g": "Matching pyjamas and a gift for her mum.",
"st": [
"Search family pyjamas",
"Add adult and kids' sizes if available",
"Add loungewear for Debbie",
"Apply the code",
"Check cut-offs"
],
"w": [
"Are kids' sizes available?",
"Does the code apply?",
"Are cut-offs published?",
"Is Premier pre-selected?"
]
},
{
"g": "Sale bargains with the extra code after bedtime.",
"st": [
"Open the sale on mobile",
"Filter Petite and size 10",
"Apply the extra code",
"Check stacking",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Petite stock holding?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Kayleigh shops the event at 10pm.",
"st": [
"Compare with earlier code prices",
"Add three items",
"Apply any code",
"Check Premier and Deliver+",
"Stop at payment"
],
"w": [
"Are prices genuinely lower?",
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Does the site cope at peak?"
]
}
]
}
},
{
"id": "chelsea",
"label": "Chelsea",
"name": "Chelsea",
"age": null,
"role": "Any role",
"kind": "catchall",
"tag": "CATCH-ALL",
"head": "84% catch-all",
"headSub": "of boohoo customers not covered by the other seven",
"share": 84.0,
"chips": [
"Rotates across the size ranges sold",
"Rotates: phone, laptop, tablet, app",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card",
"Rotates: £15 to £300"
],
"desc": "Not one person but a rotating stand-in for everyone the five cohorts don't describe. Each run picks a different mix of category, device, payment, code use, size range and market so the long tail of Chelsea's site gets tested too.",
"scen": [
{
"t": "Random mixed basket",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Switching device mid-journey",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Abandon and come back",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Unusual payment mix",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Finding help",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Christmas for an unlikely list",
"v": "£100–£250",
"k": "christmas"
},
{
"t": "Sale from a random angle",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday from a random angle",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohoo-chelsea.png",
"test": {
"sub": "Any age · Any role · The catch-all shopper",
"surname": "Claudeai",
"facts": [
[
"Household",
"Rotates each run (see examples below)"
],
[
"Work",
"Rotates each run"
],
[
"Device",
"Rotates: phone, laptop, tablet, app"
],
[
"Pays with",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card"
],
[
"Size",
"Rotates across the size ranges sold"
],
[
"Budget",
"Rotates: £15 to £300"
],
[
"Full name",
"Chelsea Claudeai"
],
[
"Test email",
"chelsea.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE CHELSEA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Rotates each run"
],
[
"Share of customers",
"84% — the 84% of boohoo customers over 12 months who sit outside the seven cohorts: tops and bottoms buyers without a code, Plus and Tall shoppers, Premier members, 4+ order regulars, other international markets"
]
],
"fam": [
"Chelsea, 24: Tall jeans, no code",
"Nadia, 30: Plus going-out tops twice a year",
"Ewa, 27: swimwear from Poland",
"Jess, 33: Premier member, eight orders a year"
],
"angle": "A catch-all for the 89% of customers outside the seven cohorts. Scenarios are deliberately mixed and are randomised on each run so that unusual but real journeys get covered.",
"q": [
"Find me jeans in Tall under £30, and tell me how they fit.",
"Are there any extra charges or memberships added to my total?",
"Which delivery option is best if I'm not home during the day?"
],
"emailTimes": [
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00"
],
"s": [
{
"g": "Build a basket from three unrelated categories chosen at random for this run.",
"st": [
"Pick three categories at random",
"Add one item from each in a random size",
"Check cross-category delivery and sellers",
"Review the bag",
"Check out as a guest, stopping at payment"
],
"w": [
"Do mixed baskets show one clear delivery promise?",
"Is Deliver+ or a subscription pre-added?",
"Is consent pre-ticked?",
"Does the total match the bag?"
]
},
{
"g": "Start on one device and finish on another.",
"st": [
"Add two items on the first device",
"Open the site on a second device as the same guest or account",
"Check what carried over",
"Complete the bag",
"Stop at payment"
],
"w": [
"Does the bag persist across devices?",
"Do codes carry over?",
"Does a wishlist need sign-in?",
"Is the layout usable on both?"
]
},
{
"g": "Leave a basket for a day and return.",
"st": [
"Build a basket",
"Leave for 24 hours",
"Return and check the bag and prices",
"Check for subscriptions or add-ons that appeared",
"Check out, stopping at payment"
],
"w": [
"Is stock held?",
"Did prices or codes change?",
"Did Premier, Royalty or Deliver+ appear in the bag?",
"Are abandoned-basket emails sent with pre-ticked consent?"
]
},
{
"g": "Pay part by gift card and the rest another way.",
"st": [
"Build a basket",
"Apply a gift card at checkout, stopping before numbers",
"Check the remaining balance",
"Select a pay-later or wallet method",
"Stop before authorising"
],
"w": [
"Can gift cards combine with other methods?",
"Are limits explained?",
"Do pop-ups open outside the controlled tab?",
"Is the amount correct?"
]
},
{
"g": "Pick a random problem (lost parcel, wrong item, size question) and try to get help.",
"st": [
"Search the help pages for the problem",
"Try the contact routes",
"Check hours and response times",
"Check guest order tracking",
"Stop before sending"
],
"w": [
"Is help easy to find?",
"Is a phone or chat route available?",
"Are response times stated?",
"Can a guest track an order?"
]
},
{
"g": "Gifts for a random mix of recipients, including some the site doesn't obviously serve.",
"st": [
"Pick four random recipients",
"Search for each",
"Note dead ends and alternatives",
"Check cut-offs and gift options",
"Stop at payment"
],
"w": [
"Do empty states offer gift cards?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Enter the sale through a random route: search, email code, category, app banner.",
"st": [
"Enter by the chosen route",
"Apply any code",
"Check stacking",
"Check was prices",
"Check returns on sale items"
],
"w": [
"Do all routes reach the same prices?",
"Do codes stack?",
"Are was prices credible?",
"Are final-sale items labelled?"
]
},
{
"g": "Shop the event with a random device, payment and basket.",
"st": [
"Enter via a random route",
"Build a random basket",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
}
]
},
{
"slug": "plt",
"name": "PrettyLittleThing",
"site": "https://www.prettylittlething.com",
"full": {
"label": "Full personas and scenarios (prettylittlething.com)",
"url": "https://claude.ai/artifact/UzxcQs7yRFNTHm2ewsg8uj"
},
"test": {
"title": "PrettyLittleThing test personas and scenarios",
"intro": [
"Eight personas for this site: the typical customer, the next six largest behavioural cohorts, and a catch-all for everyone else, from 12 months of order data (10 Oct 2025 to 8 Oct 2026). Each has eight scenarios: five everyday journeys plus Christmas, post-Christmas sale and Black Friday.",
"Personas are ordered by their share of customers, largest first. The typical customer is built from the largest cohort; the others are the next four largest cohorts."
],
"rules": [
"Start by deleting all items in the cart, then log out.",
"Use a dedicated test account, not live credentials.",
"Never enter personal, address or payment details.",
"Pause for approval before applying codes, deleting items or submitting any payment step."
],
"shareNote": "Each profile shows the share of the site's customers over the last three months (3 Jul to 2 Oct 2026) for the typical customer, and over 12 months (10 Oct 2025 to 8 Oct 2026) for the other four, whose orders match a behavioural proxy for the persona. Order data holds no age, gender or household details, so the proxies use what is observable: categories bought, payment method, delivery choice, app use, postcode area, promo codes and spend. They are indicative only, overlap between personas, and don't sum to 100%. Source: Group analytics warehouse, excluding staff and sample orders.",
"note": "Scenario products are typical PrettyLittleThing categories and availability was not checked against the live site, so swap in what is in stock. Details such as the Royalty subscription price (reported at £9.99, with other figures elsewhere), the £1.99 returns fee, store credit, student, graduate, teacher and key worker discounts, collection points and remote-area delivery came from third-party voucher and review sites, which sometimes disagree. Verify them on prettylittlething.com and treat any mismatch as a finding. Review sites also report late parcels, wrong colours and inconsistent sizing, so those are worth watching for. All personas are 18 or over."
},
"personas": [
{
"id": "mia",
"label": "Mia, 23",
"name": "Mia",
"age": 23,
"role": "Trainee accountant",
"kind": "typical",
"tag": "TYPICAL CUSTOMER",
"head": "Typical customer",
"headSub": "Built from the largest cohort on PrettyLittleThing",
"share": null,
"chips": [
"Size UK 8, buys Petite",
"PLT app",
"Card, Klarna",
"£45 per order, several times a year"
],
"desc": "A returning PLT shopper who orders on the app, usually with a code, and has been a Royalty member for the free next-day delivery. Buys dresses and co-ords around £45, several times a year.",
"scen": [
{
"t": "Royalty member's evening order",
"v": "£45",
"k": "everyday"
},
{
"t": "Is the listing code price real?",
"v": "£45",
"k": "everyday"
},
{
"t": "Renewing Royalty",
"v": "£9.99",
"k": "everyday"
},
{
"t": "Co-ords in Petite",
"v": "£50",
"k": "everyday"
},
{
"t": "Returning two items",
"v": "£1.99",
"k": "everyday"
},
{
"t": "Christmas party outfits and gifts for mum and Ella",
"v": "£150",
"k": "christmas"
},
{
"t": "Boxing Day app sale",
"v": "£60",
"k": "sale"
},
{
"t": "Black Friday on the app",
"v": "£70",
"k": "bf"
}
],
"finding": {
"sev": "CRITICAL",
"text": "Royalty added to the bag total before checkout"
},
"status": {
"text": "See Mia's live results →",
"url": "https://claude.ai/artifact/JExHrtGBZQ9xXaaRMLsZtZ"
},
"img": "assets/ds/personas/portraits/plt-mia.png",
"test": {
"sub": "23 · Trainee accountant · Shares a flat · The typical PrettyLittleThing customer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Shares a flat with two friends"
],
[
"Work",
"Trainee accountant"
],
[
"Device",
"PLT app"
],
[
"Pays with",
"Card, Klarna"
],
[
"Size",
"UK 8, buys Petite"
],
[
"Budget",
"£45 per order, several times a year"
],
[
"Full name",
"Mia Claudeai"
],
[
"Test email",
"mia.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE MIA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Instagram, Snapchat"
],
[
"Share of customers",
"Largest cohort — the modal PrettyLittleThing customer: returning, app user, code user, dress and Petite buyer, median order £45.15 (75.9% returning customers; 69.7% used a promo code; 55.1% ordered via the app; 30.3% are Royalty members)"
]
],
"fam": [
"Karen, 50, mum: pyjamas, skincare",
"Dean, 52, dad",
"Ella, 19, sister: student, trends",
"Gran Pam, 76"
],
"angle": "Represents the largest PrettyLittleThing cohort: a returning UK app shopper, often Royalty, who uses a code on seven orders in ten, chooses next day and buys dresses, Petite and co-ords around £45. Tests Royalty value, code accuracy and the app journey.",
"q": [
"Find me a Petite dress in an 8 and tell me the price after the code.",
"Is my Royalty free next day delivery applied, and what do I get back on returns?",
"Is Royalty worth renewing, going by how often I order?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"11:30",
"20:30"
],
"s": [
{
"g": "Order a Petite dress on the app and check Royalty's free next day is applied.",
"st": [
"Open the app and browse Petite dresses",
"Add a dress in size 8",
"Apply the banner code",
"Go to checkout as a Royalty member (sign in with the test account when created)",
"Check delivery is free and next day"
],
"w": [
"Is Royalty's free delivery recognised at checkout?",
"Does the code apply as advertised on the listing?",
"Is Deliver+ pre-added?",
"Is the cut-off consistent with the delivery page?"
]
},
{
"g": "Nearly every listing shows a 'with code' price, and Mia wants to be sure it works.",
"st": [
"Note the code price on three listings",
"Add the items",
"Apply the code",
"Compare the bag total with the listing prices",
"Check the message if it fails"
],
"w": [
"Does the advertised code work on these items?",
"Does the bag show the discount per line?",
"Is the failure message specific about eligibility?",
"Are code prices shown only where the code applies?"
]
},
{
"g": "Her Royalty year is ending and she wants to know what happens next.",
"st": [
"Find the Royalty page",
"Check the price, renewal and cancellation terms",
"Compare with the delivery table",
"Check the free returns promise against the returns page",
"Check how to cancel"
],
"w": [
"Is renewal explained (automatic or not)?",
"Do the Royalty page and returns page agree on free returns?",
"Is the price shown per year, not per order?",
"Is cancellation possible online?"
]
},
{
"g": "Mia wants a co-ord set in Petite with the top and bottom in different sizes.",
"st": [
"Browse Petite co-ords",
"Open a set",
"Check whether pieces are sold separately",
"Add top and bottom in different sizes",
"Check fit information"
],
"w": [
"Can pieces be sized separately?",
"Is model height given for Petite?",
"Are duplicate listings present?",
"Do colour variants load correctly?"
]
},
{
"g": "Two items didn't fit and she wants to return them in one parcel.",
"st": [
"Find the returns policy",
"Check the fee for Royalty members",
"Look at refund versus store credit",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the Royalty returns rule clear and consistent?",
"Is the fee per parcel or per item?",
"Is store credit explained?",
"Is refund timing stated?"
]
},
{
"g": "Buy a party dress and a going-out set for herself, pyjamas for her mum and a gift card for Ella.",
"st": [
"Browse party dresses in Petite",
"Add a dress and a set",
"Add pyjamas for Karen",
"Find gift cards",
"Check Christmas cut-offs and Royalty delivery"
],
"w": [
"Does Royalty next day hold up in December?",
"Are cut-offs published?",
"Does the code apply to gifts?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Mia shops the sale on the app with the extra code.",
"st": [
"Open the sale in the app",
"Filter Petite and size 8",
"Apply the extra code",
"Check urgency labels",
"Check Royalty delivery and returns"
],
"w": [
"Does the code stack with sale prices?",
"Are low-stock labels accurate?",
"Are was prices credible?",
"Are Royalty benefits applied?"
]
},
{
"g": "She shops the Black Friday event on the app at midnight.",
"st": [
"Open the event at launch",
"Add three items",
"Apply any code",
"Check Royalty and Deliver+ at checkout",
"Stop at payment"
],
"w": [
"Does the app cope at launch?",
"Is Royalty recognised?",
"Is consent pre-ticked?",
"Are prices genuinely lower than the everyday code price?"
]
}
]
}
},
{
"id": "chiara",
"label": "Chiara, 24",
"name": "Chiara",
"age": 24,
"role": "Fashion student",
"kind": "cohort",
"tag": null,
"head": "3.9%",
"headSub": "of PrettyLittleThing customers, 12 months",
"share": 3.9,
"chips": [
"Size IT 40 / UK 8 Petite",
"iPhone",
"PayPal, card",
"€55–€60, one order"
],
"desc": "Placed one PLT order from Italy without a code, around £53, with a strong lean to Petite. Wants euro prices, duties and returns made clear before she buys.",
"scen": [
{
"t": "Switching to Italy",
"v": "€55",
"k": "everyday"
},
{
"t": "Duties and delivery to Milan",
"v": "€55",
"k": "everyday"
},
{
"t": "Petite from abroad",
"v": "€55",
"k": "everyday"
},
{
"t": "Returning from Italy",
"v": "Refund",
"k": "everyday"
},
{
"t": "No code, no surprises",
"v": "€55",
"k": "everyday"
},
{
"t": "Christmas order to Milan",
"v": "€70",
"k": "christmas"
},
{
"t": "January sale from Italy",
"v": "€45",
"k": "sale"
},
{
"t": "Black Friday from Milan",
"v": "€70",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/plt-chiara.png",
"test": {
"sub": "24 · Fashion student · Lives in Milan · International one-off",
"surname": "Claudeai",
"facts": [
[
"Household",
"Flat share in Milan"
],
[
"Work",
"Fashion student, part-time retail"
],
[
"Device",
"iPhone"
],
[
"Pays with",
"PayPal, card"
],
[
"Size",
"IT 40 / UK 8 Petite"
],
[
"Budget",
"€55–€60, one order"
],
[
"Full name",
"Chiara Claudeai"
],
[
"Test email",
"chiara.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE CHIARA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, TikTok, Pinterest"
],
[
"Share of customers",
"3.9% — one order in 12 months, outside the UK, no promo code (134k customers); median order £52.67; 60% first-time; 32% bought Petite"
]
],
"fam": [
"Giulia, 52, mum",
"Marco, 55, dad",
"Luca, 21, brother",
"Nonna Rosa, 80"
],
"angle": "International one-order customers without a code are the largest PLT segment over 12 months at 3.9% (134k), median order £53, 60% first-time and 32% Petite. Tests the international first-time journey.",
"q": [
"How much will this cost delivered to Italy in euro, with duties?",
"What's a UK Petite 8 in Italian sizes?",
"How do I return from Italy, and who pays the shipping?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"12:00",
"20:00"
],
"s": [
{
"g": "Set the site to Italy and compare prices.",
"st": [
"Find the region selector",
"Choose Italy and euro",
"Check a Petite dress price",
"Add it in IT 40 or UK 8",
"Check the bag"
],
"w": [
"Is the selector easy to find?",
"Are euro prices consistent?",
"Are sizes shown in IT or UK?",
"Is Deliver+ offered internationally?"
]
},
{
"g": "Chiara wants the landed cost and date.",
"st": [
"Check the delivery page for Italy",
"Check duties messaging",
"Go to checkout with the test details",
"Check options and dates",
"Stop at payment"
],
"w": [
"Are duties explained?",
"Are delivery times realistic?",
"Which payment methods appear?",
"Is Royalty pre-selected for an international order?"
]
},
{
"g": "She buys Petite and wants model height.",
"st": [
"Browse Petite",
"Open two items",
"Check model height and length",
"Compare with standard",
"Add one"
],
"w": [
"Is model height given on Petite items?",
"Is length stated?",
"Is stock shown?",
"Are fit notes present?"
]
},
{
"g": "The dress didn't fit.",
"st": [
"Find international returns",
"Check cost and route",
"Check refund timing",
"Look for an exchange",
"Stop before submitting"
],
"w": [
"Is the route clear?",
"Is the fee shown in euro?",
"Are exchanges offered?",
"Is timing stated?"
]
},
{
"g": "She checks out as advertised, without hunting for codes.",
"st": [
"Add two items",
"Go to checkout as a guest",
"Check defaults and add-ons",
"Check the total",
"Stop at payment"
],
"w": [
"Is consent pre-ticked?",
"Is Royalty or Deliver+ pre-added?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "A party outfit before Christmas.",
"st": [
"Add an outfit",
"Check Italian cut-offs",
"Check duties",
"Apply any code",
"Stop at payment"
],
"w": [
"Are international cut-offs published?",
"Are duties shown?",
"Does the code apply?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Sale in euro with the extra code.",
"st": [
"Open the sale in euro",
"Apply the extra code",
"Check stacking",
"Check delivery and returns",
"Check was prices"
],
"w": [
"Do codes stack?",
"Are euro was prices credible?",
"Are returns costs clear?",
"Is delivery priced in euro?"
]
},
{
"g": "Chiara shops the event in euro on her phone.",
"st": [
"Compare euro prices before and during",
"Add three items",
"Apply any code",
"Check delivery and duties",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is consent pre-ticked?",
"Are duties shown?"
]
}
]
}
},
{
"id": "keira",
"label": "Keira, 21",
"name": "Keira",
"age": 21,
"role": "Retail assistant",
"kind": "cohort",
"tag": null,
"head": "3.4%",
"headSub": "of PrettyLittleThing customers, 12 months",
"share": 3.4,
"chips": [
"Size UK 6 Petite",
"iPhone",
"Debit card",
"£30, one order"
],
"desc": "Placed one small PLT order, around £31, without using a code even though one was advertised everywhere. Often buys Petite.",
"scen": [
{
"t": "A £30 top without a code",
"v": "£30",
"k": "everyday"
},
{
"t": "Trying the advertised code",
"v": "£30",
"k": "everyday"
},
{
"t": "Petite in size 6",
"v": "£30",
"k": "everyday"
},
{
"t": "Guest checkout for a small order",
"v": "£30",
"k": "everyday"
},
{
"t": "Returning a £30 item",
"v": "£1.99 fee",
"k": "everyday"
},
{
"t": "Christmas pyjamas for her mum",
"v": "£40",
"k": "christmas"
},
{
"t": "Boxing Day under £30",
"v": "£30",
"k": "sale"
},
{
"t": "Black Friday small basket",
"v": "£40",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/plt-keira.png",
"test": {
"sub": "21 · Retail assistant · Lives with her parents · UK one-off, no code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her parents and brother"
],
[
"Work",
"Retail assistant"
],
[
"Device",
"iPhone"
],
[
"Pays with",
"Debit card"
],
[
"Size",
"UK 6 Petite"
],
[
"Budget",
"£30, one order"
],
[
"Full name",
"Keira Claudeai"
],
[
"Test email",
"keira.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE KEIRA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Instagram, Snapchat"
],
[
"Share of customers",
"3.4% — one order in 12 months, UK, no promo code (116k customers); median order £30.87; 55% first-time; 33% bought Petite"
]
],
"fam": [
"Lisa, 48, mum: pyjamas",
"Mark, 50, dad",
"Callum, 18, brother: trainers",
"Nan June, 74"
],
"angle": "UK one-order customers who didn't use a code are 3.4% of PLT customers over 12 months (116k), median order £31, 55% first-time, 33% Petite. Tests whether the site's constant code messaging helps or hinders a small first order.",
"q": [
"What's the cheapest top in a Petite 6, and is delivery worth paying for a £30 order?",
"Does the advertised code actually work, and what does it save me?",
"What does it cost to send back if it doesn't fit?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"13:00",
"20:00"
],
"s": [
{
"g": "Keira buys a top at the price shown, not the 'with code' price.",
"st": [
"Open a listing showing a 'with code' price",
"Add the item",
"Don't apply the code",
"Check the bag total and add-ons",
"Check out, stopping at payment"
],
"w": [
"Is the 'with code' price misleading if she doesn't use it?",
"Is Deliver+ pre-added to a £30 bag?",
"Does delivery wipe out the value of a small order?",
"Is Royalty pre-selected?"
]
},
{
"g": "She tries BONUS10 after seeing it everywhere.",
"st": [
"Apply the advertised code in the bag",
"Read the result",
"Check the listing price it promised",
"Try again at checkout",
"Note the message"
],
"w": [
"Does the advertised code work?",
"Is the error message specific?",
"Does the bag reflect the listing price?",
"Is the code shown only where it applies?"
]
},
{
"g": "She needs Petite 6 with model height.",
"st": [
"Browse Petite and filter by size 6",
"Open two items",
"Check model height and length",
"Check stock",
"Add one"
],
"w": [
"Is size 6 Petite stocked?",
"Is model height given?",
"Is length stated?",
"Are fit notes present?"
]
},
{
"g": "Her first checkout with card.",
"st": [
"Go to checkout with the test details",
"Check defaults and consent",
"Compare delivery options",
"Check the total",
"Stop at payment"
],
"w": [
"Is Royalty pre-selected?",
"Is consent pre-ticked?",
"Is the cheapest delivery the default?",
"Does the total match the bag?"
]
},
{
"g": "The fee is a big share of a small order.",
"st": [
"Find the returns policy",
"Check the fee",
"Look for an exchange",
"Check drop-off",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Is store credit explained?",
"Are exchanges offered?",
"Is timing stated?"
]
},
{
"g": "Pyjamas for her mum and a top for herself.",
"st": [
"Add pyjamas",
"Add a top",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Are gift options offered?",
"Is Royalty pre-selected?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Sale items under £30 with the extra code.",
"st": [
"Open the sale",
"Filter Petite size 6 and price",
"Apply the extra code",
"Check stacking",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Does delivery outweigh the saving?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Keira tries to make a small Black Friday basket worthwhile.",
"st": [
"Compare prices before and during",
"Add two items",
"Check delivery against the saving",
"Apply any code",
"Stop at payment"
],
"w": [
"Is the reduction genuine?",
"Does delivery cancel the saving?",
"Is Royalty pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "sofia",
"label": "Sofia, 25",
"name": "Sofia",
"age": 25,
"role": "Nurse",
"kind": "cohort",
"tag": null,
"head": "2.8%",
"headSub": "of PrettyLittleThing customers, 12 months",
"share": 2.8,
"chips": [
"Size ES 36 / UK 8 Petite",
"iPhone",
"PayPal, card",
"€60–€65, one order"
],
"desc": "Orders from PLT once from Spain, with a code, around £56. A third of her cohort buys Petite.",
"scen": [
{
"t": "First order: a Petite dress",
"v": "€60",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "€60",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "€60",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "€60",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "€60",
"k": "everyday"
},
{
"t": "Christmas: a party dress before flying home",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: a Petite dress and a top",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/plt-sofia.png",
"test": {
"sub": "25 · Nurse · Lives in Madrid · International order with a code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Flat share in Madrid"
],
[
"Work",
"Nurse"
],
[
"Device",
"iPhone"
],
[
"Pays with",
"PayPal, card"
],
[
"Size",
"ES 36 / UK 8 Petite"
],
[
"Budget",
"€60–€65, one order"
],
[
"Full name",
"Sofia Claudeai"
],
[
"Test email",
"sofia.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE SOFIA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, TikTok, Pinterest"
],
[
"Share of customers",
"2.8% — one order in 12 months, outside the UK, with a promo code (98k customers); median order £55.54; 53% first-time; 34% bought Petite"
]
],
"fam": [
"Carmen, 54, mum",
"Javier, 56, dad",
"Lucía, 22, sister",
"Abuela Pilar, 79"
],
"angle": "International one-order customers using a code are 2.8% of PLT customers over 12 months (98k), median order £56, 53% first-time, 34% Petite.",
"q": [
"Which Petite dress ships to Spain, and what's the final price in euro with the code?",
"How long will delivery to Madrid take?",
"Can I pay with PayPal from Spain?"
],
"emailTimes": [
"21:30",
"21:30",
"21:30",
"21:30",
"18:30",
"12:00",
"20:30"
],
"s": [
{
"g": "Sofia buys a Petite dress in ES 36 / UK 8 Petite with the code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Apply the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Does the code apply as advertised?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A party dress before flying home before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A petite dress and a top in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "tasha",
"label": "Tasha, 24",
"name": "Tasha",
"age": 24,
"role": "Beauty therapist",
"kind": "cohort",
"tag": null,
"head": "2.4%",
"headSub": "of PrettyLittleThing customers, 12 months",
"share": 2.4,
"chips": [
"Size UK 10 Petite",
"PLT app, late evening",
"Klarna, Clearpay",
"£45 per order, eight or more a year"
],
"desc": "Orders from PLT eight or more times a year on the app, almost always after 8pm, pays with Klarna or Clearpay, uses a code every time and is a Royalty member. Buys Petite and Tall for herself and her flatmate. Spends over £650 a year.",
"scen": [
{
"t": "Royalty order on the app at 10pm",
"v": "£45",
"k": "everyday"
},
{
"t": "Royalty renewal and returns",
"v": "£9.99",
"k": "everyday"
},
{
"t": "Tall for Dani, Petite for herself",
"v": "£90",
"k": "everyday"
},
{
"t": "Clearpay versus Klarna",
"v": "£45",
"k": "everyday"
},
{
"t": "Frequent returns as a member",
"v": "Free for Royalty?",
"k": "everyday"
},
{
"t": "Christmas party season",
"v": "£180",
"k": "christmas"
},
{
"t": "Boxing Day as a member",
"v": "£70",
"k": "sale"
},
{
"t": "Black Friday at midnight on the app",
"v": "£90",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/plt-tasha.png",
"test": {
"sub": "24 · Beauty therapist · Shares a flat · Royalty superfan",
"surname": "Claudeai",
"facts": [
[
"Household",
"Shares a flat with her friend Dani"
],
[
"Work",
"Beauty therapist"
],
[
"Device",
"PLT app, late evening"
],
[
"Pays with",
"Klarna, Clearpay"
],
[
"Size",
"UK 10 Petite"
],
[
"Budget",
"£45 per order, eight or more a year"
],
[
"Full name",
"Tasha Claudeai"
],
[
"Test email",
"tasha.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE TASHA, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Instagram, Snapchat"
],
[
"Share of customers",
"2.4% — 8 or more orders in 12 months, app, Royalty, pay-later, with a code (82k customers); median spend £652.42; 84% bought Petite, 38% Tall; 98% order between 8pm and 2am"
]
],
"fam": [
"Dani, 25, flatmate: Tall range",
"Kerry, 48, mum: loungewear",
"Steve, 50, dad",
"Nan Brenda, 73"
],
"angle": "Heavy app users with Royalty, pay-later and a code on every order are 2.4% of PLT customers over 12 months (82k) but worth far more: 8+ orders, median spend £652, 84% Petite, 38% Tall, 98% ordering late evening. Tests the loyal heavy-user experience.",
"q": [
"Which new Petite and Tall dresses dropped tonight, and which ones take my code?",
"Can I split this with Clearpay, and how does that compare with Klarna?",
"From my orders, how many am I sending back, and is Royalty actually saving me money?"
],
"emailTimes": [
"22:00",
"22:00",
"22:00",
"22:00",
"21:30",
"21:00",
"21:30"
],
"s": [
{
"g": "A Petite dress with the code and Royalty free next day.",
"st": [
"Sign in with the test account (when created)",
"Add a Petite dress",
"Apply the code",
"Check Royalty delivery applied",
"Check out with Klarna, stopping before authorising"
],
"w": [
"Is Royalty free delivery recognised?",
"Does the code apply?",
"Is Deliver+ pre-added to a member's bag?",
"Does Klarna load?"
]
},
{
"g": "Her Royalty year is ending.",
"st": [
"Find the Royalty page",
"Check renewal and cancellation",
"Compare free returns promises",
"Check the delivery table",
"Check how to cancel"
],
"w": [
"Is renewal explained?",
"Do the Royalty and returns pages agree?",
"Is the price per year, not per order?",
"Can she cancel online?"
]
},
{
"g": "One order with Petite and Tall items.",
"st": [
"Add a Petite item and a Tall item",
"Check model heights",
"Check both deliver together",
"Apply the code",
"Check the bag"
],
"w": [
"Is model height given on both ranges?",
"Do items ship together?",
"Does the code apply to both?",
"Is Deliver+ pre-added?"
]
},
{
"g": "She compares the two at checkout.",
"st": [
"Go to checkout",
"Select Klarna and note the schedule",
"Select Clearpay and note the schedule",
"Check limits",
"Stop before authorising"
],
"w": [
"Do both load?",
"Are schedules clear?",
"Are limits explained?",
"Is consent pre-ticked?"
]
},
{
"g": "She returns one item from most orders.",
"st": [
"Find the returns policy for Royalty",
"Check the fee and the one-free-return rule",
"Look for an exchange",
"Check drop-off",
"Stop before submitting"
],
"w": [
"Is the Royalty returns rule clear?",
"Does it match the Royalty page?",
"Are exchanges offered?",
"Is timing stated?"
]
},
{
"g": "Several party outfits across December with Royalty delivery.",
"st": [
"Add three outfits over three orders",
"Check Royalty delivery holds",
"Apply the code each time",
"Check cut-offs",
"Stop at payment"
],
"w": [
"Does Royalty next day hold up in December?",
"Are cut-offs published?",
"Does the code apply?",
"Is Deliver+ pre-added each time?"
]
},
{
"g": "Sale with the extra code and Royalty delivery.",
"st": [
"Open the sale in the app",
"Filter Petite and size 10",
"Apply the extra code",
"Check Royalty delivery",
"Check returns"
],
"w": [
"Do codes stack?",
"Is Royalty recognised?",
"Are was prices credible?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Tasha shops the launch at midnight.",
"st": [
"Open the event at launch",
"Add four items",
"Apply any code",
"Check Royalty and Deliver+",
"Stop at payment"
],
"w": [
"Does the app cope at launch?",
"Is Royalty recognised?",
"Is consent pre-ticked?",
"Are prices genuinely lower?"
]
}
]
}
},
{
"id": "leah",
"label": "Leah, 24",
"name": "Leah",
"age": 24,
"role": "Marketing assistant",
"kind": "cohort",
"tag": null,
"head": "2.2%",
"headSub": "of PrettyLittleThing customers, 12 months",
"share": 2.2,
"chips": [
"Size UK 10",
"iPhone, evenings",
"Apple Pay, Klarna",
"£34, one order"
],
"desc": "Buys a mixed PLT basket once a year with the advertised code, around £34, usually after 8pm.",
"scen": [
{
"t": "First order: a top and a skirt",
"v": "£34",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "£34",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "£34",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£34",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "£34",
"k": "everyday"
},
{
"t": "Christmas: a party top for herself and pyjamas for her mum",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: a top and a skirt",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/plt-leah.png",
"test": {
"sub": "24 · Marketing assistant · Shares a flat · UK mixed order with a code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Shares a flat with two friends"
],
[
"Work",
"Marketing assistant"
],
[
"Device",
"iPhone, evenings"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"UK 10"
],
[
"Budget",
"£34, one order"
],
[
"Full name",
"Leah Claudeai"
],
[
"Test email",
"leah.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE LEAH, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"TikTok, Instagram, Snapchat"
],
[
"Share of customers",
"2.2% — one order in 12 months, UK, mixed basket, with a promo code (75k customers); median order £33.63; 42% order between 8pm and 2am"
]
],
"fam": [
"Sarah, 50, mum",
"Paul, 52, dad",
"Josh, 21, brother",
"Nan Val, 76"
],
"angle": "UK one-order customers using a code are 2.2% of PLT customers over 12 months (75k), median order £34, 42% ordering late evening, 37% Petite.",
"q": [
"Which top and skirt go well together, and what's the best code price?",
"Will it arrive by Saturday if I order tonight?",
"Does Klarna cost anything extra?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:30",
"12:00",
"20:30"
],
"s": [
{
"g": "Leah buys a top and a skirt in UK 10 with the code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Apply the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Does the code apply as advertised?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A party top for herself and pyjamas for her mum before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A top and a skirt in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "holly",
"label": "Holly, 25",
"name": "Holly",
"age": 25,
"role": "Recruitment consultant",
"kind": "cohort",
"tag": null,
"head": "1.7%",
"headSub": "of PrettyLittleThing customers, 12 months",
"share": 1.7,
"chips": [
"Size UK 10",
"iPhone",
"Apple Pay, Klarna",
"£38, one order"
],
"desc": "Buys one PLT dress a year for an event, with the advertised code, around £38, late in the evening. Expects the code price on the listing to be the price she pays.",
"scen": [
{
"t": "The listing code price",
"v": "£38",
"k": "everyday"
},
{
"t": "Wedding guest dress search",
"v": "£38",
"k": "everyday"
},
{
"t": "Checkout with Apple Pay",
"v": "£38",
"k": "everyday"
},
{
"t": "Next-day cut-off for the event",
"v": "£38",
"k": "everyday"
},
{
"t": "Returning the dress",
"v": "£1.99 fee",
"k": "everyday"
},
{
"t": "Christmas party dress",
"v": "£45",
"k": "christmas"
},
{
"t": "New Year's Eve from the sale",
"v": "£35",
"k": "sale"
},
{
"t": "Black Friday dress",
"v": "£45",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/plt-holly.png",
"test": {
"sub": "25 · Recruitment consultant · Lives with her boyfriend · Dress with a code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with her boyfriend Jake"
],
[
"Work",
"Recruitment consultant"
],
[
"Device",
"iPhone"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"UK 10"
],
[
"Budget",
"£38, one order"
],
[
"Full name",
"Holly Claudeai"
],
[
"Test email",
"holly.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE HOLLY, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, TikTok, Facebook"
],
[
"Share of customers",
"1.7% — one order in 12 months, dresses, UK, with a promo code (60k customers); median order £37.99; 43% order between 8pm and 2am"
]
],
"fam": [
"Jake, 27, boyfriend: football, trainers",
"Karen, 50, mum: skincare",
"Rob, 52, dad",
"Chloe-Ann, 22, sister"
],
"angle": "One-order UK dress buyers using a code are 1.7% of PLT customers over 12 months (60k), median order £38, 43% ordering late evening. Tests the code-price promise from listing to bag.",
"q": [
"Find me a wedding guest dress in a 10 in this colour and apply the code.",
"The listing says £34.20 with the code. Will my total really match?",
"Can I have it by this weekend?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"11:00",
"20:00"
],
"s": [
{
"g": "A dress listed at '£34.20 with code' should cost £34.20.",
"st": [
"Open a dress with a code price",
"Add it in size 10",
"Apply the code",
"Compare with the listing",
"Note any error"
],
"w": [
"Does the bag honour the listing's code price?",
"Is the error specific if not?",
"Does the discount show per line?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A wedding guest dress in a specific colour.",
"st": [
"Search wedding guest dress in a colour",
"Filter by size 10",
"Check colour matches",
"Check model information",
"Add one"
],
"w": [
"Does the colour search work?",
"Is model height given?",
"Are duplicates present?",
"Is a delivery date shown?"
]
},
{
"g": "Her first PLT checkout.",
"st": [
"Go to checkout with the test details",
"Check defaults and consent",
"Select Apple Pay, stopping before authorising",
"Check the total",
"Note upsells"
],
"w": [
"Is Royalty pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "The wedding is this weekend.",
"st": [
"Check the product page countdown",
"Compare with the delivery page",
"Go to checkout",
"Compare the date",
"Check the next-day price"
],
"w": [
"Is the cut-off consistent across pages?",
"Does checkout honour the promise?",
"Is Royalty pushed as the way to get next day?",
"Is next-day priced as stated?"
]
},
{
"g": "The colour wasn't as pictured.",
"st": [
"Find the returns policy",
"Check the fee",
"Look for store credit versus refund",
"Look for an exchange",
"Stop before submitting"
],
"w": [
"Is the fee clear?",
"Is store credit explained?",
"Are exchanges offered?",
"Is timing stated?"
]
},
{
"g": "A party dress with the code.",
"st": [
"Search Christmas party dress",
"Add one in size 10",
"Apply the code",
"Check cut-offs",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply?",
"Is Royalty pre-selected?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A sale dress before New Year's Eve.",
"st": [
"Open the sale",
"Filter by size 10",
"Apply the extra code",
"Check delivery against 31 December",
"Check returns"
],
"w": [
"Do codes stack?",
"Is a date shown?",
"Are was prices credible?",
"Is the returns fee clear?"
]
},
{
"g": "Holly buys her party dress on Black Friday.",
"st": [
"Compare prices before and during",
"Add a dress",
"Apply any code",
"Check Royalty and Deliver+",
"Stop at payment"
],
"w": [
"Is the reduction genuine?",
"Is Royalty pre-selected?",
"Is consent pre-ticked?",
"Do countdowns run honestly?"
]
}
]
}
},
{
"id": "amber",
"label": "Amber",
"name": "Amber",
"age": null,
"role": "Any role",
"kind": "catchall",
"tag": "CATCH-ALL",
"head": "81% catch-all",
"headSub": "of PrettyLittleThing customers not covered by the other seven",
"share": 81.0,
"chips": [
"Rotates across the size ranges sold",
"Rotates: phone, laptop, tablet, app",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card",
"Rotates: £15 to £300"
],
"desc": "Not one person but a rotating stand-in for everyone the five cohorts don't describe. Each run picks a different mix of category, device, payment, code use, size range and market so the long tail of Amber's site gets tested too.",
"scen": [
{
"t": "Random mixed basket",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Switching device mid-journey",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Abandon and come back",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Unusual payment mix",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Finding help",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Christmas for an unlikely list",
"v": "£100–£250",
"k": "christmas"
},
{
"t": "Sale from a random angle",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday from a random angle",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/plt-amber.png",
"test": {
"sub": "Any age · Any role · The catch-all shopper",
"surname": "Claudeai",
"facts": [
[
"Household",
"Rotates each run (see examples below)"
],
[
"Work",
"Rotates each run"
],
[
"Device",
"Rotates: phone, laptop, tablet, app"
],
[
"Pays with",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card"
],
[
"Size",
"Rotates across the size ranges sold"
],
[
"Budget",
"Rotates: £15 to £300"
],
[
"Full name",
"Amber Claudeai"
],
[
"Test email",
"amber.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE AMBER, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Rotates each run"
],
[
"Share of customers",
"81% — the 81% of PrettyLittleThing customers over 12 months who sit outside the seven cohorts: tops and co-ord buyers, Shape and Tall shoppers, app regulars without Royalty, other international markets"
]
],
"fam": [
"Amber, 22: a co-ord with a code on the app",
"Zoe, 29: Shape bodycon twice a year",
"Maja, 25: dresses from Sweden",
"Kelly, 34: three orders a year, standard delivery"
],
"angle": "A catch-all for the 86% of customers outside the seven cohorts. Scenarios are deliberately mixed and are randomised on each run so that unusual but real journeys get covered.",
"q": [
"Find me Shape bodycon dresses in a 14, and tell me how they fit.",
"What's the total with delivery, any membership and any add-ons?",
"Can you compare these two dresses on price, fit and returns?"
],
"emailTimes": [
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00"
],
"s": [
{
"g": "Build a basket from three unrelated categories chosen at random for this run.",
"st": [
"Pick three categories at random",
"Add one item from each in a random size",
"Check cross-category delivery and sellers",
"Review the bag",
"Check out as a guest, stopping at payment"
],
"w": [
"Do mixed baskets show one clear delivery promise?",
"Is Deliver+ or a subscription pre-added?",
"Is consent pre-ticked?",
"Does the total match the bag?"
]
},
{
"g": "Start on one device and finish on another.",
"st": [
"Add two items on the first device",
"Open the site on a second device as the same guest or account",
"Check what carried over",
"Complete the bag",
"Stop at payment"
],
"w": [
"Does the bag persist across devices?",
"Do codes carry over?",
"Does a wishlist need sign-in?",
"Is the layout usable on both?"
]
},
{
"g": "Leave a basket for a day and return.",
"st": [
"Build a basket",
"Leave for 24 hours",
"Return and check the bag and prices",
"Check for subscriptions or add-ons that appeared",
"Check out, stopping at payment"
],
"w": [
"Is stock held?",
"Did prices or codes change?",
"Did Premier, Royalty or Deliver+ appear in the bag?",
"Are abandoned-basket emails sent with pre-ticked consent?"
]
},
{
"g": "Pay part by gift card and the rest another way.",
"st": [
"Build a basket",
"Apply a gift card at checkout, stopping before numbers",
"Check the remaining balance",
"Select a pay-later or wallet method",
"Stop before authorising"
],
"w": [
"Can gift cards combine with other methods?",
"Are limits explained?",
"Do pop-ups open outside the controlled tab?",
"Is the amount correct?"
]
},
{
"g": "Pick a random problem (lost parcel, wrong item, size question) and try to get help.",
"st": [
"Search the help pages for the problem",
"Try the contact routes",
"Check hours and response times",
"Check guest order tracking",
"Stop before sending"
],
"w": [
"Is help easy to find?",
"Is a phone or chat route available?",
"Are response times stated?",
"Can a guest track an order?"
]
},
{
"g": "Gifts for a random mix of recipients, including some the site doesn't obviously serve.",
"st": [
"Pick four random recipients",
"Search for each",
"Note dead ends and alternatives",
"Check cut-offs and gift options",
"Stop at payment"
],
"w": [
"Do empty states offer gift cards?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Enter the sale through a random route: search, email code, category, app banner.",
"st": [
"Enter by the chosen route",
"Apply any code",
"Check stacking",
"Check was prices",
"Check returns on sale items"
],
"w": [
"Do all routes reach the same prices?",
"Do codes stack?",
"Are was prices credible?",
"Are final-sale items labelled?"
]
},
{
"g": "Shop the event with a random device, payment and basket.",
"st": [
"Enter via a random route",
"Build a random basket",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
}
]
},
{
"slug": "boohooman",
"name": "boohooMAN",
"site": "https://www.boohooman.com",
"full": {
"label": "Full personas and scenarios (boohooman.com)",
"url": "https://claude.ai/artifact/CTCnG99bYgUCDuU1eRhQ7n"
},
"test": {
"title": "boohooMAN test personas and scenarios",
"intro": [
"Eight personas for this site: the typical customer, the next six largest behavioural cohorts, and a catch-all for everyone else, from 12 months of order data (10 Oct 2025 to 8 Oct 2026). Each has eight scenarios: five everyday journeys plus Christmas, post-Christmas sale and Black Friday.",
"Personas are ordered by their share of customers, largest first. The typical customer is built from the largest cohort; the others are the next four largest cohorts."
],
"rules": [
"Start by deleting all items in the cart, then log out.",
"Use a dedicated test account, not live credentials.",
"Never enter personal, address or payment details.",
"Pause for approval before applying codes, deleting items or submitting any payment step."
],
"shareNote": "Each profile shows the share of the site's customers over the last three months (3 Jul to 2 Oct 2026) for the typical customer, and over 12 months (10 Oct 2025 to 8 Oct 2026) for the other four, whose orders match a behavioural proxy for the persona. Order data holds no age, gender or household details, so the proxies use what is observable: categories bought, payment method, delivery choice, app use, postcode area, promo codes and spend. They are indicative only, overlap between personas, and don't sum to 100%. Source: Group analytics warehouse, excluding staff and sample orders.",
"note": "Scenario products are typical boohooMAN categories and availability was not checked against the live site, so swap in what is in stock. Details such as the delivery subscription price (reported at £9.99 and £12.99), the returns fee and window, store credit, student, key worker, teacher and military discounts, code exclusions, collection points and the pay-later methods came from third-party voucher and review sites, which sometimes disagree. Verify them on boohooman.com and treat any mismatch as a finding. All personas are 18 or over."
},
"personas": [
{
"id": "tyler",
"label": "Tyler, 24",
"name": "Tyler",
"age": 24,
"role": "Warehouse team leader",
"kind": "typical",
"tag": "TYPICAL CUSTOMER",
"head": "Typical customer",
"headSub": "Built from the largest cohort on boohooMAN",
"share": null,
"chips": [
"Size L, UK 9 shoe",
"boohooMAN app, phone",
"Apple Pay, Klarna",
"£50 per order, a few times a year"
],
"desc": "Orders tees, joggers and jeans from boohooMAN a couple of times a year, usually one order at a time on the app in the evening, paid with Apple Pay. Uses a code about half the time and goes for standard delivery.",
"scen": [
{
"t": "Tees and joggers on the app",
"v": "£50",
"k": "everyday"
},
{
"t": "Which code applies to what",
"v": "£50",
"k": "everyday"
},
{
"t": "Fit and sizing without returns",
"v": "£50",
"k": "everyday"
},
{
"t": "Standard delivery versus Premier",
"v": "£50",
"k": "everyday"
},
{
"t": "Ordering from abroad",
"v": "€60",
"k": "everyday"
},
{
"t": "Christmas: joggers for his dad, a gift card for Megan",
"v": "£120",
"k": "christmas"
},
{
"t": "Boxing Day app sale",
"v": "£60",
"k": "sale"
},
{
"t": "Black Friday on the app",
"v": "£70",
"k": "bf"
}
],
"finding": {
"sev": "HIGH",
"text": "Deliver+ pre-added"
},
"status": {
"text": "See Tyler's live results →",
"url": "https://claude.ai/artifact/BbGqqZHqdr9UwriTwXunRt"
},
"img": "assets/ds/personas/portraits/boohooman-tyler.png",
"test": {
"sub": "24 · Warehouse team leader · Lives with his girlfriend · The typical boohooMAN customer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with his girlfriend Megan"
],
[
"Work",
"Warehouse team leader"
],
[
"Device",
"boohooMAN app, phone"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"L, UK 9 shoe"
],
[
"Budget",
"£50 per order, a few times a year"
],
[
"Full name",
"Tyler Claudeai"
],
[
"Test email",
"tyler.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE TYLER, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, TikTok, YouTube"
],
[
"Share of customers",
"Largest cohort — the modal boohooMAN customer: returning, app user, Apple Pay, tees and joggers buyer, median order £49.90 (59.8% returning customers; 48.6% used a promo code; 44.1% ordered via the app; 48.8% paid with Apple Pay; 40% ordered from outside the UK)"
]
],
"fam": [
"Megan, 23, girlfriend: trends, beauty",
"Dawn, 49, mum: candles",
"Steve, 51, dad: football",
"Jordan, 19, brother: trainers"
],
"angle": "Represents the largest boohooMAN cohort: a returning app shopper buying tees, joggers and denim around £50, paying with Apple Pay, using a code about half the time. Notably 40% of boohooMAN customers order from outside the UK, so the international journey matters too.",
"q": [
"Find me a 2-pack of tees and joggers in an L, and apply whichever code works.",
"What's the cheapest delivery, and is Premier worth it?",
"What's the difference between regular, slim and muscle fit in an L?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"13:00",
"20:00"
],
"s": [
{
"g": "Buy a 2-pack of tees and joggers in size L on the app with Apple Pay.",
"st": [
"Open the app and browse tees",
"Add a 2-pack in L",
"Add joggers",
"Apply the banner code if it applies",
"Check out with Apple Pay, stopping at payment"
],
"w": [
"Does the banner code apply, and is the message clear if not?",
"Is Deliver+ pre-added?",
"Is a delivery option pre-selected?",
"Is consent pre-ticked?"
]
},
{
"g": "Tyler sees 40OFF and BRAND15 in the banners and wants to know which works on his basket.",
"st": [
"Add own-brand tees and a branded item",
"Try each code",
"Read the error when one fails",
"Check the discount per line",
"Remove and re-apply"
],
"w": [
"Do errors explain eligibility rather than 'not found'?",
"Do codes apply to the right lines?",
"Are exclusions shown with the banner?",
"Can a code be removed?"
]
},
{
"g": "He wants to get the size right first time on tees and jeans.",
"st": [
"Open a tee and a pair of jeans",
"Check model size and height",
"Check waist and leg options",
"Compare regular, muscle and oversized fits",
"Add one of each"
],
"w": [
"Is model height and size given?",
"Are waist and leg sizes available?",
"Are fit types explained?",
"Are there duplicate listings?"
]
},
{
"g": "Tyler wants the cheapest delivery and to understand the Premier upsell.",
"st": [
"Go to checkout with the test details",
"Compare delivery options and dates",
"Check what's pre-selected",
"Read the Premier terms",
"Choose standard"
],
"w": [
"Is the cheapest option easy to pick?",
"Is Premier offered as a choice rather than a default?",
"Are the dates realistic?",
"Is the Premier small print (minimum spend, returns) visible?"
]
},
{
"g": "Many boohooMAN customers are overseas; Tyler checks the journey for a friend in Ireland and one in the US.",
"st": [
"Switch region to Ireland, then USA",
"Check prices, delivery costs and duties messaging",
"Check which payment methods appear",
"Check returns from abroad",
"Compare with the UK site"
],
"w": [
"Are prices and delivery shown in local currency up front?",
"Are duties and customs explained?",
"Which payment methods disappear by region?",
"Is the returns route clear for international orders?"
]
},
{
"g": "Buy joggers and a hoodie for his dad, trainers for Jordan and a gift card for Megan.",
"st": [
"Add joggers and a hoodie in his dad's size",
"Find trainers for Jordan",
"Find gift cards",
"Check Christmas cut-offs",
"Check out, stopping at payment"
],
"w": [
"Are cut-offs published?",
"Is the gift card route clear on a menswear site for a woman's gift?",
"Is Deliver+ pre-added?",
"Is consent pre-ticked?"
]
},
{
"g": "Tyler opens the app on Boxing Day for tees and denim bargains.",
"st": [
"Open the sale in the app",
"Filter by L",
"Apply any code",
"Check low-stock labels",
"Check delivery and returns"
],
"w": [
"Do codes stack with sale prices?",
"Are labels accurate?",
"Are was prices credible?",
"Is the returns fee clear?"
]
},
{
"g": "He shops the Black Friday event on the app in the evening.",
"st": [
"Open the event",
"Add tees, joggers and trainers",
"Apply any code",
"Check delivery defaults",
"Stop at payment"
],
"w": [
"Are prices genuinely lower?",
"Is Premier pre-selected?",
"Does the app cope at peak?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "connor",
"label": "Connor, 22",
"name": "Connor",
"age": 22,
"role": "Trainee electrician",
"kind": "cohort",
"tag": null,
"head": "6.6%",
"headSub": "of boohooMAN customers, 12 months",
"share": 6.6,
"chips": [
"Size L Tall, 6ft 3in",
"iPhone",
"Apple Pay",
"£30–£35, one order"
],
"desc": "Placed one boohooMAN order, around £32, without a code, probably for tees or joggers, and one in five like him buys Tall. Judges the brand on that first order.",
"scen": [
{
"t": "Tall tees and joggers",
"v": "£32",
"k": "everyday"
},
{
"t": "Ignoring the codes",
"v": "£32",
"k": "everyday"
},
{
"t": "Apple Pay checkout",
"v": "£32",
"k": "everyday"
},
{
"t": "Trainer sizing",
"v": "£35",
"k": "everyday"
},
{
"t": "Returning a tee pack",
"v": "£1.99 fee",
"k": "everyday"
},
{
"t": "Christmas: a hoodie for his dad",
"v": "£60",
"k": "christmas"
},
{
"t": "Boxing Day basics",
"v": "£35",
"k": "sale"
},
{
"t": "Black Friday basics",
"v": "£50",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohooman-connor.png",
"test": {
"sub": "22 · Trainee electrician · Lives with his parents · One order, no code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with his parents"
],
[
"Work",
"Trainee electrician"
],
[
"Device",
"iPhone"
],
[
"Pays with",
"Apple Pay"
],
[
"Size",
"L Tall, 6ft 3in"
],
[
"Budget",
"£30–£35, one order"
],
[
"Full name",
"Connor Claudeai"
],
[
"Test email",
"connor.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE CONNOR, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, Snapchat, YouTube"
],
[
"Share of customers",
"6.6% — one order in 12 months, UK, no promo code (131k customers); median order £31.61; 61% first-time; 22% bought Tall"
]
],
"fam": [
"Karen, 50, mum: candles",
"Steve, 52, dad: football",
"Ellie-Mae, 19, sister",
"Grandad Jim, 78"
],
"angle": "UK one-order customers without a code are the largest boohooMAN segment over 12 months at 6.6% (131k), median order £32, 61% first-time, 22% Tall. Tests the first order at face value.",
"q": [
"Which joggers have a long enough leg for someone 6ft 3?",
"What's the cheapest way to get this, and do I need a code?",
"How do I send them back if they turn out too short?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"13:00",
"20:00"
],
"s": [
{
"g": "Two tees and joggers in L Tall.",
"st": [
"Browse Tall",
"Add a 2-pack of tees and joggers",
"Check model height",
"Check the bag",
"Check out, stopping at payment"
],
"w": [
"Is the Tall range easy to find?",
"Is model height given?",
"Is Deliver+ pre-added?",
"Is a delivery method pre-selected?"
]
},
{
"g": "Connor buys at the price shown and doesn't use the banner codes.",
"st": [
"Note the codes advertised",
"Add items",
"Don't apply a code",
"Check the bag total and add-ons",
"Check out"
],
"w": [
"Is the shopper pushed to find a code?",
"Is Deliver+ pre-added?",
"Does the total match the listing prices?",
"Is Premier pushed?"
]
},
{
"g": "First checkout with Apple Pay.",
"st": [
"Go to checkout with the test details",
"Check defaults and consent",
"Select Apple Pay, stopping before authorising",
"Check the total",
"Note upsells"
],
"w": [
"Is consent pre-ticked?",
"Is Premier pre-selected?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "He adds trainers in UK 10.",
"st": [
"Browse trainers",
"Check sizes and half sizes",
"Check sizing advice",
"Add a pair",
"Check the bag"
],
"w": [
"Are half sizes offered?",
"Is there sizing advice?",
"Are duplicates present?",
"Is stock shown?"
]
},
{
"g": "The tees were too short.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off",
"Stop before submitting"
],
"w": [
"Is the fee clear?",
"Are exchanges offered?",
"Is timing stated?",
"Are lockers offered?"
]
},
{
"g": "A hoodie for his dad and joggers for himself.",
"st": [
"Add a hoodie in his dad's size",
"Add joggers",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?",
"Is consent pre-ticked?"
]
},
{
"g": "Tees and joggers in the sale.",
"st": [
"Open the sale",
"Filter by L Tall",
"Compare was and now prices",
"Add two items",
"Check delivery"
],
"w": [
"Are was prices credible?",
"Is Tall stock holding?",
"Is Deliver+ pre-added?",
"Is delivery shown in the bag?"
]
},
{
"g": "Connor stocks up on Black Friday.",
"st": [
"Compare prices before and during",
"Add three items",
"Apply any code",
"Check delivery defaults",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Does the site cope at peak?"
]
}
]
}
},
{
"id": "marco",
"label": "Marco, 26",
"name": "Marco",
"age": 26,
"role": "Logistics coordinator",
"kind": "cohort",
"tag": null,
"head": "6.4%",
"headSub": "of boohooMAN customers, 12 months",
"share": 6.4,
"chips": [
"Size IT 50 / UK L",
"Android phone",
"PayPal, card",
"€55–€65, one order"
],
"desc": "Ordered once from Italy without a code, around £54. New to the brand and to buying from a UK site, so currency, duties and returns matter most.",
"scen": [
{
"t": "Switching to Italy",
"v": "€60",
"k": "everyday"
},
{
"t": "Delivery and duties to Milan",
"v": "€60",
"k": "everyday"
},
{
"t": "Sizing in IT sizes",
"v": "€60",
"k": "everyday"
},
{
"t": "Returning from Italy",
"v": "Refund",
"k": "everyday"
},
{
"t": "PayPal checkout from abroad",
"v": "€60",
"k": "everyday"
},
{
"t": "Christmas order to Milan",
"v": "€80",
"k": "christmas"
},
{
"t": "January sale from Italy",
"v": "€45",
"k": "sale"
},
{
"t": "Black Friday from Milan",
"v": "€80",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohooman-marco.png",
"test": {
"sub": "26 · Logistics coordinator · Lives in Milan · International first-timer",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with his girlfriend Elena"
],
[
"Work",
"Logistics coordinator"
],
[
"Device",
"Android phone"
],
[
"Pays with",
"PayPal, card"
],
[
"Size",
"IT 50 / UK L"
],
[
"Budget",
"€55–€65, one order"
],
[
"Full name",
"Marco Claudeai"
],
[
"Test email",
"marco.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE MARCO, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, YouTube, TikTok"
],
[
"Share of customers",
"6.4% — one order in 12 months, outside the UK, no promo code (126k customers); median order £54.19; 72% first-time; 27% bought Tall"
]
],
"fam": [
"Elena, 25, girlfriend",
"Paolo, 56, dad",
"Francesca, 54, mum",
"Nonno Enzo, 82"
],
"angle": "International one-order customers without a code are 6.4% of boohooMAN customers over 12 months (126k), median order £54, 72% first-time, 27% Tall. Tests the international first-time journey, which matters because 40% of boohooMAN customers order from outside the UK.",
"q": [
"Do you ship to Italy, and what's the total with duties?",
"Which size is IT 50?",
"How do I return something from Italy?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:30",
"12:00",
"20:00"
],
"s": [
{
"g": "Set the site to Italy and compare prices.",
"st": [
"Find the region selector",
"Choose Italy and euro",
"Check a tee price",
"Add two items in L",
"Check the bag"
],
"w": [
"Is a region selector available?",
"Are euro prices consistent?",
"Are sizes shown in IT or UK?",
"Is Deliver+ offered internationally?"
]
},
{
"g": "Marco wants the landed cost and date.",
"st": [
"Check the delivery page for Italy",
"Check duties messaging",
"Go to checkout with the test details",
"Check options and dates",
"Stop at payment"
],
"w": [
"Is international delivery information available?",
"Are duties explained?",
"Which payment methods appear?",
"Is consent pre-ticked?"
]
},
{
"g": "He wants to be sure IT 50 is UK L.",
"st": [
"Open the size guide",
"Check conversions",
"Check model height",
"Compare two items",
"Add one"
],
"w": [
"Does the size guide show EU sizes?",
"Is model height given?",
"Is stock shown?",
"Are fit types explained?"
]
},
{
"g": "The joggers were too short.",
"st": [
"Find international returns",
"Check cost and route",
"Check refund timing",
"Look for an exchange",
"Stop before submitting"
],
"w": [
"Is the route clear?",
"Is the fee shown in euro?",
"Are exchanges offered?",
"Is timing stated?"
]
},
{
"g": "He pays with PayPal.",
"st": [
"Go to checkout",
"Select PayPal, stopping before authorising",
"Check the pop-up",
"Check the currency",
"Check the total"
],
"w": [
"Does PayPal open outside the controlled tab?",
"Is the amount in euro?",
"Is consent pre-ticked?",
"Is Premier pre-selected?"
]
},
{
"g": "A jacket before Christmas.",
"st": [
"Add a jacket",
"Check Italian cut-offs",
"Check duties",
"Apply any code",
"Stop at payment"
],
"w": [
"Are international cut-offs published?",
"Are duties shown?",
"Does the code apply?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Sale in euro with the extra code.",
"st": [
"Open the sale in euro",
"Apply the extra code",
"Check stacking",
"Check delivery and returns",
"Check was prices"
],
"w": [
"Do codes stack?",
"Are euro was prices credible?",
"Are returns costs clear?",
"Is delivery priced in euro?"
]
},
{
"g": "Marco shops the event in euro.",
"st": [
"Compare euro prices before and during",
"Add three items",
"Apply any code",
"Check delivery and duties",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is consent pre-ticked?",
"Are duties shown?"
]
}
]
}
},
{
"id": "ryan",
"label": "Ryan, 23",
"name": "Ryan",
"age": 23,
"role": "Warehouse operative",
"kind": "cohort",
"tag": null,
"head": "5.0%",
"headSub": "of boohooMAN customers, 12 months",
"share": 5.0,
"chips": [
"Size L",
"iPhone",
"Apple Pay, Klarna",
"£34, one order"
],
"desc": "Buys tees and joggers from boohooMAN once a year with the banner code, around £34. A quarter of his cohort buys Tall.",
"scen": [
{
"t": "First order: a 2-pack of tees and joggers",
"v": "£34",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "£34",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "£34",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "£34",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "£34",
"k": "everyday"
},
{
"t": "Christmas: a hoodie for his dad and joggers for himself",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: tees and joggers",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohooman-ryan.png",
"test": {
"sub": "23 · Warehouse operative · Lives with his girlfriend · One UK order with a code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with his girlfriend Chloe-Louise"
],
[
"Work",
"Warehouse operative"
],
[
"Device",
"iPhone"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"L"
],
[
"Budget",
"£34, one order"
],
[
"Full name",
"Ryan Claudeai"
],
[
"Test email",
"ryan.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE RYAN, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, TikTok, YouTube"
],
[
"Share of customers",
"5.0% — one order in 12 months, UK, with a promo code (99k customers); median order £34.31; 60% first-time; 24% bought Tall"
]
],
"fam": [
"Chloe-Louise, 22, girlfriend",
"Mandy, 48, mum",
"Kev, 50, dad",
"Kai, 17, brother"
],
"angle": "UK one-order customers using a code are 5.0% of boohooMAN customers over 12 months (99k), median order £34, 60% first-time, 24% Tall.",
"q": [
"Find me a 2-pack of tees and joggers in an L with a code, under £35.",
"Does the banner code work on these items, and if not, why not?",
"Can I pay with Klarna, and when is the first payment?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"18:00",
"13:00",
"20:00"
],
"s": [
{
"g": "Ryan buys a 2-pack of tees and joggers in L with the code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Apply the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Does the code apply as advertised?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A hoodie for his dad and joggers for himself before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Tees and joggers in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "noah",
"label": "Noah, 23",
"name": "Noah",
"age": 23,
"role": "Barista",
"kind": "cohort",
"tag": null,
"head": "3.5%",
"headSub": "of boohooMAN customers, 12 months",
"share": 3.5,
"chips": [
"Size M Tall, 6ft 2in",
"boohooMAN app",
"Apple Pay, Klarna",
"€75–€85, one order"
],
"desc": "Shops boohooMAN on the app from Ireland, one bigger order a year around £70, no code, often Tall. Expects the app to handle euro, delivery and duties smoothly.",
"scen": [
{
"t": "Ireland on the app",
"v": "€80",
"k": "everyday"
},
{
"t": "Delivery and duties to Dublin",
"v": "€80",
"k": "everyday"
},
{
"t": "Apple Pay in euro",
"v": "€80",
"k": "everyday"
},
{
"t": "Tall fit on the app",
"v": "€80",
"k": "everyday"
},
{
"t": "Returning from Ireland",
"v": "Refund",
"k": "everyday"
},
{
"t": "Christmas order to Dublin",
"v": "€100",
"k": "christmas"
},
{
"t": "January sale from Dublin",
"v": "€60",
"k": "sale"
},
{
"t": "Black Friday on the app from Dublin",
"v": "€100",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohooman-noah.png",
"test": {
"sub": "23 · Barista · Lives in Dublin · International app shopper",
"surname": "Claudeai",
"facts": [
[
"Household",
"Flat share in Dublin"
],
[
"Work",
"Barista, part-time DJ"
],
[
"Device",
"boohooMAN app"
],
[
"Pays with",
"Apple Pay, Klarna"
],
[
"Size",
"M Tall, 6ft 2in"
],
[
"Budget",
"€75–€85, one order"
],
[
"Full name",
"Noah Claudeai"
],
[
"Test email",
"noah.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE NOAH, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, TikTok, SoundCloud"
],
[
"Share of customers",
"3.5% — one order in 12 months, outside the UK, app, no promo code (69k customers); median order £70.16; 31% bought Tall"
]
],
"fam": [
"Siobhán, 52, mum",
"Declan, 55, dad",
"Aoife, 20, sister",
"Granny Mary, 79"
],
"angle": "International one-order app customers without a code are 3.5% of boohooMAN customers over 12 months (69k), median order £70, 49% first-time, 31% Tall. Tests the app for an international shopper.",
"q": [
"Can I set the app to Ireland, and what's the total in euro with duties?",
"Which jackets come in M Tall, and how tall is the model?",
"How long does delivery to Dublin take?"
],
"emailTimes": [
"21:30",
"21:30",
"21:30",
"21:30",
"19:00",
"13:00",
"20:30"
],
"s": [
{
"g": "Set the app to Ireland and build a bigger basket.",
"st": [
"Set the region to Ireland in the app",
"Add a jacket, tees and joggers in M Tall",
"Check euro prices",
"Check the bag",
"Check Deliver+"
],
"w": [
"Is Ireland available in the app?",
"Are euro prices consistent?",
"Is Deliver+ pre-added?",
"Is Tall stock shown?"
]
},
{
"g": "He wants the landed cost and date.",
"st": [
"Check the delivery page for Ireland",
"Check duties messaging",
"Go to checkout with the test details",
"Check options and dates",
"Stop at payment"
],
"w": [
"Is Irish delivery information available?",
"Are duties explained post-Brexit?",
"Which payment methods appear?",
"Is consent pre-ticked?"
]
},
{
"g": "He pays with Apple Pay.",
"st": [
"Go to checkout",
"Select Apple Pay, stopping before authorising",
"Check the currency",
"Check the total",
"Note upsells"
],
"w": [
"Is the amount in euro?",
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?"
]
},
{
"g": "Model height and fit types for Tall.",
"st": [
"Open two Tall items",
"Check model height",
"Check fit types",
"Compare with regular",
"Add one"
],
"w": [
"Is model height given?",
"Are fit types explained?",
"Is stock shown?",
"Are duplicates present?"
]
},
{
"g": "The jacket didn't fit.",
"st": [
"Find Irish returns",
"Check cost and route",
"Check refund timing",
"Look for an exchange",
"Stop before submitting"
],
"w": [
"Is the route clear?",
"Is the fee shown in euro?",
"Are exchanges offered?",
"Is timing stated?"
]
},
{
"g": "Gifts for his dad and himself before Christmas.",
"st": [
"Add a jacket and a hoodie",
"Check Irish cut-offs",
"Check duties",
"Apply any code",
"Stop at payment"
],
"w": [
"Are Irish cut-offs published?",
"Are duties shown?",
"Does the code apply?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Sale in euro with the extra code.",
"st": [
"Open the sale in the app",
"Apply the extra code",
"Check stacking",
"Check delivery and returns",
"Check was prices"
],
"w": [
"Do codes stack?",
"Are euro was prices credible?",
"Are returns costs clear?",
"Is delivery priced in euro?"
]
},
{
"g": "Noah shops the event in the app.",
"st": [
"Compare euro prices before and during",
"Add three items",
"Apply any code",
"Check delivery and duties",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Does the app cope at peak?",
"Is consent pre-ticked?",
"Are duties shown?"
]
}
]
}
},
{
"id": "mateo",
"label": "Mateo, 24",
"name": "Mateo",
"age": 24,
"role": "Graphic designer",
"kind": "cohort",
"tag": null,
"head": "3.3%",
"headSub": "of boohooMAN customers, 12 months",
"share": 3.3,
"chips": [
"Size ES 50 / UK L Tall",
"Android phone",
"PayPal, card",
"€65–€70, one order"
],
"desc": "Orders from boohooMAN once from Spain, using a code, around £60. Three in ten of his cohort buy Tall.",
"scen": [
{
"t": "First order: a Tall hoodie and jeans",
"v": "€65",
"k": "everyday"
},
{
"t": "Guest checkout",
"v": "€65",
"k": "everyday"
},
{
"t": "Delivery promises",
"v": "€65",
"k": "everyday"
},
{
"t": "Returning one item",
"v": "€65",
"k": "everyday"
},
{
"t": "Search relevance",
"v": "€65",
"k": "everyday"
},
{
"t": "Christmas: a jacket before Christmas",
"v": "Rotates",
"k": "christmas"
},
{
"t": "January sale: a hoodie and jeans",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohooman-mateo.png",
"test": {
"sub": "24 · Graphic designer · Lives in Barcelona · International order with a code",
"surname": "Claudeai",
"facts": [
[
"Household",
"Flat share in Barcelona"
],
[
"Work",
"Graphic designer"
],
[
"Device",
"Android phone"
],
[
"Pays with",
"PayPal, card"
],
[
"Size",
"ES 50 / UK L Tall"
],
[
"Budget",
"€65–€70, one order"
],
[
"Full name",
"Mateo Claudeai"
],
[
"Test email",
"mateo.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE MATEO, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Instagram, YouTube, TikTok"
],
[
"Share of customers",
"3.3% — one order in 12 months, outside the UK, with a promo code (66k customers); median order £60.45; 70% first-time; 31% bought Tall"
]
],
"fam": [
"Marta, 55, mum",
"Jordi, 57, dad",
"Alba, 21, sister",
"Avi Pau, 80"
],
"angle": "International one-order customers using a code are 3.3% of boohooMAN customers over 12 months (66k), median order £60, 70% first-time, 31% Tall.",
"q": [
"What's the final price in euro to Spain for a Tall hoodie and jeans with the code?",
"What's ES 50 in your sizing?",
"How do I return something from Spain?"
],
"emailTimes": [
"21:30",
"21:30",
"21:30",
"21:30",
"18:30",
"12:30",
"20:30"
],
"s": [
{
"g": "Mateo buys a Tall hoodie and jeans in ES 50 / UK L Tall with the code, as most of this cohort does.",
"st": [
"Search for the item",
"Filter by size",
"Open two products and check model information",
"Add one",
"Apply the code and review the bag"
],
"w": [
"Is model size and height given?",
"Does the size filter hold?",
"Is Deliver+ pre-added?",
"Does the code apply as advertised?"
]
},
{
"g": "A first checkout on the site with the test details.",
"st": [
"Go to guest checkout",
"Enter the test details",
"Check pre-selected delivery and consent",
"Check the total against the bag",
"Stop at payment"
],
"w": [
"Is a subscription pre-selected?",
"Is consent pre-ticked?",
"Does the total match the bag?",
"Is the cheapest delivery the default?"
]
},
{
"g": "Compare the delivery date and price across product page, bag and checkout.",
"st": [
"Note the product page cut-off",
"Check the bag delivery line",
"Compare at checkout",
"Check the delivery page",
"Note any gaps"
],
"w": [
"Do the pages agree?",
"Is delivery shown in the bag?",
"Is next-day priced as stated?",
"Is a date shown?"
]
},
{
"g": "The item didn't fit and needs to go back.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off options",
"Stop before submitting"
],
"w": [
"Is the fee clear before purchase?",
"Are exchanges offered?",
"Is refund timing stated?",
"Are lockers or shops offered?"
]
},
{
"g": "Search the way this shopper would and judge the first row.",
"st": [
"Enter a plain-language search",
"Count sponsored and duplicate results",
"Check the first row's relevance",
"Open the best match",
"Add it"
],
"w": [
"Are the first results relevant?",
"Are sponsored results crowding the top?",
"Are duplicates present?",
"Does the filter hold?"
]
},
{
"g": "A jacket before christmas before the cut-off.",
"st": [
"Add the items",
"Apply any code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Are cut-offs published?",
"Does the code apply to gifts?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "A hoodie and jeans in the sale with the extra code.",
"st": [
"Open the sale",
"Filter by size",
"Apply the extra code",
"Check stacking and was prices",
"Check returns"
],
"w": [
"Do codes stack?",
"Are was prices credible?",
"Is Deliver+ pre-added?",
"Is the returns fee the same?"
]
},
{
"g": "Shop the event the way this cohort does.",
"st": [
"Compare prices before and during",
"Add two or three items",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
},
{
"id": "lewis",
"label": "Lewis, 29",
"name": "Lewis",
"age": 29,
"role": "Delivery driver",
"kind": "cohort",
"tag": null,
"head": "1.7%",
"headSub": "of boohooMAN customers, 12 months",
"share": 1.7,
"chips": [
"Size XL Tall, 6ft 4in",
"Android phone, evenings",
"PayPal, card",
"£38 per order, two or three a year"
],
"desc": "Orders from boohooMAN two or three times a year, always with a code, often Tall, usually in the evening. Spends about £84 a year.",
"scen": [
{
"t": "Tall hoodie with the code",
"v": "£38",
"k": "everyday"
},
{
"t": "Which banner code applies",
"v": "£38",
"k": "everyday"
},
{
"t": "Second order as a returning guest",
"v": "£38",
"k": "everyday"
},
{
"t": "Jeans by waist and leg",
"v": "£40",
"k": "everyday"
},
{
"t": "Returning one of two",
"v": "£1.99 fee",
"k": "everyday"
},
{
"t": "Christmas: joggers for his dad and brother",
"v": "£80",
"k": "christmas"
},
{
"t": "Boxing Day Tall sale",
"v": "£45",
"k": "sale"
},
{
"t": "Black Friday in the evening",
"v": "£60",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohooman-lewis.png",
"test": {
"sub": "29 · Delivery driver · Lives with his partner · Repeat coded buyer, Tall",
"surname": "Claudeai",
"facts": [
[
"Household",
"Lives with his partner Amy"
],
[
"Work",
"Delivery driver"
],
[
"Device",
"Android phone, evenings"
],
[
"Pays with",
"PayPal, card"
],
[
"Size",
"XL Tall, 6ft 4in"
],
[
"Budget",
"£38 per order, two or three a year"
],
[
"Full name",
"Lewis Claudeai"
],
[
"Test email",
"lewis.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE LEWIS, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Facebook, Instagram, YouTube"
],
[
"Share of customers",
"1.7% — 2 to 3 orders in 12 months, UK, with a promo code (34k customers); median spend £83.51; 35% bought Tall; 57% order between 8pm and 2am"
]
],
"fam": [
"Amy, 28, partner: trends",
"Gaz, 55, dad: football",
"Tracy, 53, mum",
"Kyle, 24, brother: gym"
],
"angle": "Repeat, code-using UK customers are 1.7% of boohooMAN customers over 12 months (34k), with 2 to 3 orders, median spend £84, 35% Tall and 57% ordering late evening. Tests the returning code-user and Tall journey.",
"q": [
"Find me jeans in a 36 waist, long leg, and apply the best code.",
"Which of the codes in the banners applies to my basket?",
"Can I have this delivered to a locker near my depot?"
],
"emailTimes": [
"21:00",
"21:00",
"21:00",
"21:00",
"20:00",
"13:00",
"20:00"
],
"s": [
{
"g": "A Tall hoodie and tee with the banner code.",
"st": [
"Browse Tall",
"Add a hoodie and a tee in XL Tall",
"Apply the code",
"Check the bag",
"Check out, stopping at payment"
],
"w": [
"Does the code apply?",
"Is the error clear if not?",
"Is Deliver+ pre-added?",
"Is a delivery method pre-selected?"
]
},
{
"g": "40OFF and BRAND15 are both advertised.",
"st": [
"Add own-brand and branded items",
"Try each code",
"Read the errors",
"Check the discount per line",
"Remove and re-apply"
],
"w": [
"Do errors explain eligibility rather than 'not found'?",
"Do codes apply to the right lines?",
"Are exclusions shown with the banner?",
"Can a code be removed?"
]
},
{
"g": "On a later visit he checks what the bag remembers.",
"st": [
"Return as a guest",
"Add an item",
"Check the bag for subscriptions or add-ons",
"Go to checkout",
"Check defaults"
],
"w": [
"Does Premier appear in the bag?",
"Is Deliver+ pre-added?",
"Is a delivery method pre-selected?",
"Is consent pre-ticked?"
]
},
{
"g": "Jeans in a 36 waist, long leg.",
"st": [
"Browse jeans",
"Check waist and leg options",
"Check model height",
"Add one",
"Check the bag"
],
"w": [
"Are waist and leg sizes offered?",
"Is model height given?",
"Is stock shown?",
"Are duplicates present?"
]
},
{
"g": "The tee was too short.",
"st": [
"Find the returns policy",
"Check the fee and window",
"Look for an exchange",
"Check drop-off",
"Stop before submitting"
],
"w": [
"Is the fee clear?",
"Are exchanges offered?",
"Is timing stated?",
"Are lockers offered?"
]
},
{
"g": "Gifts with the code in one order.",
"st": [
"Add joggers in two sizes",
"Apply the code",
"Check cut-offs",
"Check gift options",
"Stop at payment"
],
"w": [
"Does the code apply to gifts?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Tall sale items with the extra code.",
"st": [
"Open the sale",
"Filter by XL Tall",
"Apply the extra code",
"Check stacking",
"Check returns"
],
"w": [
"Do codes stack?",
"Is Tall stock holding?",
"Are was prices credible?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Lewis shops the event at 9pm.",
"st": [
"Compare with earlier code prices",
"Add three items",
"Apply any code",
"Check delivery defaults",
"Stop at payment"
],
"w": [
"Are prices genuinely lower?",
"Is Premier pre-selected?",
"Is consent pre-ticked?",
"Does the site cope at peak?"
]
}
]
}
},
{
"id": "ashley",
"label": "Ashley",
"name": "Ashley",
"age": null,
"role": "Any role",
"kind": "catchall",
"tag": "CATCH-ALL",
"head": "69% catch-all",
"headSub": "of boohooMAN customers not covered by the other seven",
"share": 69.0,
"chips": [
"Rotates across the size ranges sold",
"Rotates: phone, laptop, tablet, app",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card",
"Rotates: £15 to £300"
],
"desc": "Not one person but a rotating stand-in for everyone the five cohorts don't describe. Each run picks a different mix of category, device, payment, code use, size range and market so the long tail of Ashley's site gets tested too.",
"scen": [
{
"t": "Random mixed basket",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Switching device mid-journey",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Abandon and come back",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Unusual payment mix",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Finding help",
"v": "Rotates",
"k": "everyday"
},
{
"t": "Christmas for an unlikely list",
"v": "£100–£250",
"k": "christmas"
},
{
"t": "Sale from a random angle",
"v": "Rotates",
"k": "sale"
},
{
"t": "Black Friday from a random angle",
"v": "Rotates",
"k": "bf"
}
],
"finding": null,
"status": {
"text": "Not yet run live",
"url": null
},
"img": "assets/ds/personas/portraits/boohooman-ashley.png",
"test": {
"sub": "Any age · Any role · The catch-all shopper",
"surname": "Claudeai",
"facts": [
[
"Household",
"Rotates each run (see examples below)"
],
[
"Work",
"Rotates each run"
],
[
"Device",
"Rotates: phone, laptop, tablet, app"
],
[
"Pays with",
"Rotates: card, PayPal, Apple Pay, Klarna, Clearpay, gift card"
],
[
"Size",
"Rotates across the size ranges sold"
],
[
"Budget",
"Rotates: £15 to £300"
],
[
"Full name",
"Ashley Claudeai"
],
[
"Test email",
"ashley.claudeai@debenhamsgroup.com"
],
[
"Home delivery address",
"DBZ CLAUDE ASHLEY, 49 / 51 Dale Street, Manchester, M1 2HG"
],
[
"Phone number",
"07738889663"
],
[
"Social media",
"Rotates each run"
],
[
"Share of customers",
"69% — the 69% of boohooMAN customers over 12 months who sit outside the seven cohorts: coded one-off UK buyers, app shoppers, Big & Tall, international repeat customers, 4+ order regulars"
]
],
"fam": [
"Ashley, 25: one coded order of tees",
"Daniel, 31: Big & Tall jackets",
"Luis, 23: three orders a year from Spain",
"Sam, 19: trainers on the app with Klarna"
],
"angle": "A catch-all for the 77% of customers outside the seven cohorts. Scenarios are deliberately mixed and are randomised on each run so that unusual but real journeys get covered.",
"q": [
"Find me a jacket under £50 and show me the total with delivery and any add-ons.",
"Which size should I order if I'm between M and L?",
"What's your returns policy, and does it cost me anything?"
],
"emailTimes": [
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00",
"12:00"
],
"s": [
{
"g": "Build a basket from three unrelated categories chosen at random for this run.",
"st": [
"Pick three categories at random",
"Add one item from each in a random size",
"Check cross-category delivery and sellers",
"Review the bag",
"Check out as a guest, stopping at payment"
],
"w": [
"Do mixed baskets show one clear delivery promise?",
"Is Deliver+ or a subscription pre-added?",
"Is consent pre-ticked?",
"Does the total match the bag?"
]
},
{
"g": "Start on one device and finish on another.",
"st": [
"Add two items on the first device",
"Open the site on a second device as the same guest or account",
"Check what carried over",
"Complete the bag",
"Stop at payment"
],
"w": [
"Does the bag persist across devices?",
"Do codes carry over?",
"Does a wishlist need sign-in?",
"Is the layout usable on both?"
]
},
{
"g": "Leave a basket for a day and return.",
"st": [
"Build a basket",
"Leave for 24 hours",
"Return and check the bag and prices",
"Check for subscriptions or add-ons that appeared",
"Check out, stopping at payment"
],
"w": [
"Is stock held?",
"Did prices or codes change?",
"Did Premier, Royalty or Deliver+ appear in the bag?",
"Are abandoned-basket emails sent with pre-ticked consent?"
]
},
{
"g": "Pay part by gift card and the rest another way.",
"st": [
"Build a basket",
"Apply a gift card at checkout, stopping before numbers",
"Check the remaining balance",
"Select a pay-later or wallet method",
"Stop before authorising"
],
"w": [
"Can gift cards combine with other methods?",
"Are limits explained?",
"Do pop-ups open outside the controlled tab?",
"Is the amount correct?"
]
},
{
"g": "Pick a random problem (lost parcel, wrong item, size question) and try to get help.",
"st": [
"Search the help pages for the problem",
"Try the contact routes",
"Check hours and response times",
"Check guest order tracking",
"Stop before sending"
],
"w": [
"Is help easy to find?",
"Is a phone or chat route available?",
"Are response times stated?",
"Can a guest track an order?"
]
},
{
"g": "Gifts for a random mix of recipients, including some the site doesn't obviously serve.",
"st": [
"Pick four random recipients",
"Search for each",
"Note dead ends and alternatives",
"Check cut-offs and gift options",
"Stop at payment"
],
"w": [
"Do empty states offer gift cards?",
"Are cut-offs published?",
"Are gift options offered?",
"Is Deliver+ pre-added?"
]
},
{
"g": "Enter the sale through a random route: search, email code, category, app banner.",
"st": [
"Enter by the chosen route",
"Apply any code",
"Check stacking",
"Check was prices",
"Check returns on sale items"
],
"w": [
"Do all routes reach the same prices?",
"Do codes stack?",
"Are was prices credible?",
"Are final-sale items labelled?"
]
},
{
"g": "Shop the event with a random device, payment and basket.",
"st": [
"Enter via a random route",
"Build a random basket",
"Apply any code",
"Check defaults at checkout",
"Stop at payment"
],
"w": [
"Are reductions genuine?",
"Do countdowns run honestly?",
"Is a subscription pre-selected?",
"Is consent pre-ticked?"
]
}
]
}
}
]
}
]
};
