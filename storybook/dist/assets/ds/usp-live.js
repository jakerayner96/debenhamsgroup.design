/* DG USP banners — each fascia's live header bars, as DS rows. Captured from the live sites at 1440, 08 Oct 2026.
   Render with assets/ds/usp.js: <div data-usp-banners="plt"></div> (or DG_uspHTML(rows, opts)) — see the USP banner page in the component library.
   Row 1 = [0], row 2 = [1] (one row on boohoo, KM, Warehouse, Brand Room; PLT row 1 is the fixed peach countdown, row 2 rotates).
   Row: on · colour (fascia = --usp-a, alt = --usp-b, top = --usp-top, or g05 / g1 / black / red) · pos (below | above the menu) · rotate · items[].
   Item types: single · double (t1 – t2) · code · countdown · codecountdown. Copy keeps live casing; "Shop Now" / "Use Code:" / "Download Now"
   removed (the bar is the link, "Code: XYZ"); generic caveat fills an asterisk the live bar doesn't explain; caveats carry no em dash or full stop.
   Midnight countdowns are computed at load. href = path on the fascia's live domain (DG_USP_DOMAINS). */
(function(root){
const MID=(()=>{const n=new Date(),m=new Date(n);m.setHours(24,0,0,0);return +((m-n)/3600000).toFixed(3)})(); // hours to tonight's midnight
root.DG_USP_DOMAINS={debenhams:'https://www.debenhams.com',boohoo:'https://www.boohoo.com',boohooman:'https://www.boohooman.com',plt:'https://www.prettylittlething.com',karenmillen:'https://www.karenmillen.com',warehouse:'https://www.warehousefashion.com',brandroom:'https://www.thebrandroom.com'};
root.DG_USP_CAPTURED='2026-10-08';
/* light / dark per colour slot and fascia: drives the two-row rule (never the same tone twice) and the countdown colour (red digits only on dark bars) */
root.DG_USP_TONE={_:{fascia:'light',alt:'dark',top:'light'},debenhams:{fascia:'light',alt:'dark',top:'light'},boohoo:{fascia:'dark',alt:'light',top:'dark'},boohooman:{fascia:'dark',alt:'light',top:'dark'},
  plt:{fascia:'light',alt:'light',top:'light'},karenmillen:{fascia:'dark',alt:'dark',top:'dark'},warehouse:{fascia:'dark',alt:'dark',top:'dark'},brandroom:{fascia:'dark',alt:'dark',top:'dark'}};
root.DG_USP_LIVE={
 "debenhams": [
  {
   "on": true,
   "colour": "fascia",
   "pos": "below",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "code",
     "t1": "£10 Off Orders Over £100",
     "t2": "",
     "code": "SAVE10",
     "hours": 12,
     "href": "/categories/brands-at-debenhams?usp_bagoffer",
     "caveat": ""
    },
    {
     "type": "single",
     "t1": "Autumn Steals Up To 70% Off",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/promotion-2?usp_mixedoffer",
     "caveat": ""
    },
    {
     "type": "code",
     "t1": "Up To 50% Off Beauty + EXTRA 5% Off",
     "t2": "",
     "code": "BEAUTY5",
     "hours": 12,
     "href": "/categories/debenhams-beauty?usp_beautyoffer",
     "caveat": ""
    },
    {
     "type": "single",
     "t1": "Clearpay Available at Checkout",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/pages/informational/payments/clearpay?usp_clearpay",
     "caveat": ""
    }
   ]
  },
  {
   "on": true,
   "colour": "black",
   "pos": "below",
   "rotate": false,
   "idx": 0,
   "items": [
    {
     "type": "codecountdown",
     "t1": "£2 Next Day & Express Delivery On Orders Over £25",
     "t2": "",
     "code": "SPEEDY",
     "hours": MID,
     "href": "/categories/home?usp_1express",
     "caveat": ""
    }
   ]
  }
 ],
 "boohoo": [
  {
   "on": true,
   "colour": "fascia",
   "pos": "below",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "code",
     "t1": "EXTRA 10% OFF ALMOST EVERYTHING*",
     "t2": "",
     "code": "EXTRA",
     "hours": 12,
     "href": "/categories/womens-new-season?homepage_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    },
    {
     "type": "single",
     "t1": "20% OFF ALMOST EVERYTHING*",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/womens-clothing?homepage_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    },
    {
     "type": "double",
     "t1": "PREMIER NEXT DAY DELIVERY",
     "t2": "ONLY £9.99 FOR 1 YEAR!",
     "code": "",
     "hours": 12,
     "href": "/pages/informational/premier-delivery",
     "caveat": ""
    }
   ]
  }
 ],
 "boohooman": [
  {
   "on": true,
   "colour": "fascia",
   "pos": "below",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "single",
     "t1": "FREE DELIVERY!*",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/boohooman-new-season?USP1",
     "caveat": "*on orders over £40"
    },
    {
     "type": "double",
     "t1": "APP EXCLUSIVE",
     "t2": "MAKE YOUR 20% OFF, 40% OFF",
     "code": "",
     "hours": 12,
     "href": "/pages/informational/download-the-app",
     "caveat": ""
    },
    {
     "type": "single",
     "t1": "BRANDS AT MAN",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/view-all?USP3",
     "caveat": ""
    }
   ]
  },
  {
   "on": true,
   "colour": "alt",
   "pos": "below",
   "rotate": false,
   "idx": 0,
   "items": [
    {
     "type": "single",
     "t1": "20% OFF ALL MENSWEAR*",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/boohooman-new-season?USP4",
     "caveat": "*Excludes sale & selected lines"
    }
   ]
  }
 ],
 "plt": [
  {
   "on": true,
   "colour": "top",
   "pos": "below",
   "rotate": false,
   "idx": 0,
   "items": [
    {
     "type": "countdown",
     "t1": "ORDER BY MIDNIGHT FOR NEXT DAY DELIVERY",
     "t2": "",
     "code": "",
     "hours": MID,
     "href": "/categories/womens-new-in?homepage_topstrip",
     "caveat": ""
    }
   ]
  },
  {
   "on": true,
   "colour": "fascia",
   "pos": "below",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "single",
     "t1": "20-30% OFF ALMOST EVERYTHING*",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/womens?homepage_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    },
    {
     "type": "code",
     "t1": "EXTRA 10% OFF*",
     "t2": "",
     "code": "BONUS10",
     "hours": 12,
     "href": "/categories/womens-new-in",
     "caveat": "*Selected lines only, exclusions apply"
    }
   ]
  }
 ],
 "karenmillen": [
  {
   "on": true,
   "colour": "fascia",
   "pos": "below",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "single",
     "t1": "30% off coats & jackets*",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/karen-millen-flash-promo-2?web_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    },
    {
     "type": "countdown",
     "t1": "£2.99 express delivery on orders over £150*",
     "t2": "",
     "code": "",
     "hours": MID,
     "href": "/categories/karen-millen-flash-promo-2?web_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    }
   ]
  }
 ],
 "warehouse": [
  {
   "on": true,
   "colour": "fascia",
   "pos": "below",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "code",
     "t1": "10% off your first order",
     "t2": "",
     "code": "WH10",
     "hours": 12,
     "href": "/categories/womens-new-in?homepage_topstrip",
     "caveat": ""
    },
    {
     "type": "single",
     "t1": "15% off almost everything*",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/womens-new-in?homepage_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    }
   ]
  }
 ],
 "brandroom": [
  {
   "on": true,
   "colour": "fascia",
   "pos": "below",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "double",
     "t1": "The Autumn Edit",
     "t2": "Shop The Season",
     "code": "",
     "hours": 12,
     "href": "/categories/autumn-shop",
     "caveat": ""
    },
    {
     "type": "double",
     "t1": "Sweaty Betty",
     "t2": "Shop Active Summer",
     "code": "",
     "hours": 12,
     "href": "/categories/brands-sweaty-betty",
     "caveat": ""
    },
    {
     "type": "double",
     "t1": "Just Landed Lacoste",
     "t2": "Shop All Here",
     "code": "",
     "hours": 12,
     "href": "/categories/brands-lacoste",
     "caveat": ""
    }
   ]
  }
 ]
};
})(typeof window!=="undefined"?window:globalThis);
