# Product carousel — one component for every product rail and grid

**For:** the web dev team · **Date:** 28 Oct 2026 · **Owner:** Jake Rayner (UX)

- **Prototype (every placement, every fascia):** https://jakerayner96.github.io/debenhamsgroup.design/projects/product-carousel/
- **DS component page:** https://jakerayner96.github.io/debenhamsgroup.design/#c-product-carousel
- **Figma:** Debenhams Design System → ✅ Product Carousel → board "Product carousel" (component set `13566:3764`)
  https://www.figma.com/design/aIHmkCaTy9c5EWOxAGw0So/Debenhams-Design-System?node-id=13566-3771
- **Code:** `assets/ds/components.css` (`.pcar`), `assets/ds/carousel.js` (behaviour), markup in `assets/ds/catalogue.js` (`product-carousel`)

## The ask
Every product rail on site (home, PDP, search, bag, added to bag, empty states) should be **one component**. Today the placements have drifted: different header sizes, card widths, gaps and arrow behaviour. The dev component that maps to this is `Molecules/PersonalisedCarousel`. Please align it to this spec and use it everywhere.

A placement may change **only three things**: the header size, the format (carousel or grid) and how many cards are in view. Everything else is fixed.

## Anatomy
| Part | Spec |
|---|---|
| Header | Title · optional subtitle (Large only) · optional tabs (Large only, home) · optional **View all** link (14px, underlined, right) |
| Header **Large** (home) | Title 40/44 desktop · 24/28 mobile, subtitle 20/28 · 14/20, tabs (chips, 32px) right of the title on desktop, under it on mobile |
| Header **Medium** (recommendations) | Title 20/24 desktop · 18/22 mobile |
| Header **Small** (search, added to bag, modals) | Title 16/20 |
| Header → cards | Large: gap 12 (48px) desktop · gap 6 (24px) mobile · Medium / Small: gap 6 (24px) desktop · gap 4 (16px) mobile |
| Cards | The DS product card: image 2:3, brand, name (2 lines), rail price (now + was, one line). **No wishlist on rail cards.** Create the Look = image-only cards |
| Card gap | gap 2 (8px) |
| Mobile | Cards 165px fixed (2.2 in view at 390). First card on the 16px page margin; rail runs off the right edge. Swipe, scroll-snap to card starts, **no arrows**, no scroll bar |
| Desktop (≥1024) | Cards in view = N + 0.4 peek, width = (rail − 8 × N) / (N + 0.4). At 1344 with N = 5 → 244px (as Figma) |
| Arrows | Desktop with a mouse only. 32px white circle, shadow 0 2 8 rgba(15,15,15,.14), 14px chevron, 12px in from the edge, vertically centred on the card image. Prev hidden at the start, next hidden at the end. One click = one page of whole cards in view |
| Grid format | Same header and cards. 2 columns mobile, N columns desktop, column gap 8, row gap 24, no arrows |
| Not in the component | Dots / pagination, autoplay, looping, wishlist on rail cards |

## Placements
| Placement | Header | Format | In view (desktop) |
|---|---|---|---|
| Home · feature rail | Large + tabs | Carousel | 5 + peek |
| Home · top sellers | Medium + View all | Carousel | 5 + peek |
| PDP · recommendations | Medium + View all | Carousel | 5 + peek |
| PDP · Create the Look | Medium | Carousel, image only | 5 + peek |
| Search overlay | Small | Carousel | 3 + peek |
| Search results | Medium | Grid | 4 columns |
| Added to bag modal | Small | Carousel | 3 + peek (Medium modal, 720 max) |
| Bag · recommendations | Medium + View all | Carousel | 4 + peek |
| Empty bag | Medium | Grid | 4 columns |

**When to use the grid:** the products are the content of the page (search results, empty bag), or there are fewer cards than fit in view.

## Suggested dev props (PersonalisedCarousel)
`headerSize: 'lg' | 'md' | 'sm'` · `title` · `subtitle` · `tabs[]` (+ onTabChange → feed swap) · `viewAllHref` · `format: 'carousel' | 'grid'` · `cardsPerView` (desktop) · `imageOnly` · the existing feeds (brand / category / search term).

## Markup (reference)
```html
<section class="pcar pcar--md pcar--bleed" style="--pcar-per:5">
  <header class="pcar-hd">
    <div class="pcar-tt"><h2 class="pcar-t">Why Not Treat Yourself?</h2></div>
    <a class="pcar-all" href="#">View all</a>
  </header>
  <div class="pcar-body">
    <button class="pcar-arr pcar-arr--prev" disabled></button>
    <div class="pcar-track"><article class="pc">…</article>…</div>
    <button class="pcar-arr pcar-arr--next"></button>
  </div>
</section>
```
Modifiers: `.pcar--lg / --md / --sm` (header), `.pcar--grid`, `.pcar--look` (image only), `.pcar--bleed` (mobile edge-to-edge on a 16px page), `--pcar-per` (cards in view / grid columns on desktop).

## Open
- **Added to bag modal:** placed per the current DS modal (Medium, 720 max; slide-up on mobile) with a Small header "Complete Your Look". Swap in the latest added-to-bag brief when it lands.
- The old Figma sets (Product Carousel, Product Carousel v2, Card Header, Product Card Carousel) stay published so nothing breaks; new work uses the Product carousel set.
