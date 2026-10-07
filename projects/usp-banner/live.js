/* Live USP banner content — each fascia's header bars at 1440, 07 Oct 2026, converted to DS types.
   Row 1 = banners[0], row 2 = banners[1]; one row on boohoo, KM, Warehouse and Brand Room. Colours are the fascia's own slots
   (tokens.css: fascia = --usp-a, alt = --usp-b, top = --usp-top) so each bar keeps its live colour; copy keeps live casing.
   "Shop Now" removed (the bar is the link), "Use Code:" → "Code: XYZ", countdowns on their own row, links = the live click-throughs.
   Generic caveats fill asterisks the live bar doesn't explain. Debenhams FLASH10 runs as Text + Code — its live timer had run out. */
window.USP_LIVE={
 "debenhams": [
  {
   "on": true,
   "colour": "fascia",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "code",
     "t1": "10% Off Orders Over £75",
     "t2": "",
     "code": "FLASH10",
     "hours": 12,
     "href": "/categories/brands-at-debenhams?usp_bagoffer",
     "caveat": ""
    },
    {
     "type": "countdown",
     "t1": "48% Off for 48 Hours",
     "t2": "",
     "code": "",
     "hours": 13.97,
     "href": "/categories/fashion-brands-offer-6?usp_fashionoffer",
     "caveat": ""
    },
    {
     "type": "codecountdown",
     "t1": "Up To An Extra 20% Off Selected Beauty",
     "t2": "",
     "code": "BEAUTY",
     "hours": 13.97,
     "href": "/categories/beauty-brands-offer?usp_beautyoffer",
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
    }
   ]
  },
  {
   "on": true,
   "colour": "black",
   "rotate": false,
   "idx": 0,
   "items": [
    {
     "type": "code",
     "t1": "£1 Express Delivery On Home & Electricals Orders Over £25",
     "t2": "",
     "code": "1EXPRESS",
     "hours": 12,
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
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "code",
     "t1": "MYSTERY DISCOUNT - UP TO 25% OFF*",
     "t2": "",
     "code": "BHMYSTERY",
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
     "type": "single",
     "t1": "£1.99 NEXT DAY DELIVERY",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/womens-new-season?homepage_topstrip",
     "caveat": ""
    }
   ]
  }
 ],
 "boohooman": [
  {
   "on": true,
   "colour": "fascia",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "countdown",
     "t1": "ORDER BY MIDNIGHT TO GET IT TOMORROW",
     "t2": "",
     "code": "",
     "hours": 13.97,
     "href": "/categories/boohooman-new-season?USP1",
     "caveat": ""
    },
    {
     "type": "single",
     "t1": "25% OFF NEW SEASON*",
     "t2": "",
     "code": "",
     "hours": 12,
     "href": "/categories/boohooman-new-season?USP2",
     "caveat": "*Excludes sale & selected lines"
    },
    {
     "type": "code",
     "t1": "EXTRA 15% OFF BRANDS AT MAN",
     "t2": "",
     "code": "BRAND15",
     "hours": 12,
     "href": "/categories/view-all?USP3",
     "caveat": ""
    }
   ]
  },
  {
   "on": true,
   "colour": "alt",
   "rotate": false,
   "idx": 0,
   "items": [
    {
     "type": "countdown",
     "t1": "48% OFF 100'S OF STYLES*",
     "t2": "",
     "code": "",
     "hours": 13.97,
     "href": "/categories/boohooman-mp-promotions-6?USP4",
     "caveat": "*Selected lines only, exclusions apply"
    }
   ]
  }
 ],
 "plt": [
  {
   "on": true,
   "colour": "top",
   "rotate": false,
   "idx": 0,
   "items": [
    {
     "type": "countdown",
     "t1": "ORDER BY MIDNIGHT FOR NEXT DAY DELIVERY",
     "t2": "",
     "code": "",
     "hours": 13.97,
     "href": "/categories/womens-new-in?homepage_topstrip",
     "caveat": ""
    }
   ]
  },
  {
   "on": true,
   "colour": "fascia",
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
     "t1": "EXTRA 20% OFF KNITWEAR & OUTERWEAR*",
     "t2": "",
     "code": "TREATME",
     "hours": 12,
     "href": "/categories/plt-promotion-10?homepage_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    }
   ]
  }
 ],
 "karenmillen": [
  {
   "on": true,
   "colour": "fascia",
   "rotate": true,
   "idx": 0,
   "items": [
    {
     "type": "code",
     "t1": "extra 15% off sale dresses*",
     "t2": "",
     "code": "KMDRESS15",
     "hours": 12,
     "href": "/categories/womens-sale-dresses?web_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    },
    {
     "type": "double",
     "t1": "SALE",
     "t2": "up to 50% off*",
     "code": "",
     "hours": 12,
     "href": "/categories/womens-sale?web_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    },
    {
     "type": "countdown",
     "t1": "£2.99 express delivery on orders over £150*",
     "t2": "",
     "code": "",
     "hours": 37.97,
     "href": "/categories/womens-sale?web_topstrip",
     "caveat": "*Selected lines only, exclusions apply"
    }
   ]
  }
 ],
 "warehouse": [
  {
   "on": true,
   "colour": "fascia",
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
   "rotate": false,
   "idx": 0,
   "items": [
    {
     "type": "double",
     "t1": "Sweaty Betty",
     "t2": "Shop Active Summer",
     "code": "",
     "hours": 12,
     "href": "/categories/brands-sweaty-betty",
     "caveat": ""
    }
   ]
  }
 ]
};
