/* The Brand Room — master brand list. What we sell now and what is coming.
   Source: "Current Brand Mix · 60 Active Portfolio Brands" and "Brands Launching SS27 · 13 Confirmed Brands" (Brand Room trading, sent by Jake 28 Oct 2026).
   Logos: The Brand Room Figma, Content / Logos (NRsu568JGzwCDq4egvkUbn 342:10634) → assets/brands/brandroom-portfolio/<slug>-black.png (black logo, white tile)
   and <slug>-white.png (white logo, black tile). Vector masters for the brands sourced 28 Oct are in assets/brands/brandroom-portfolio/svg/.
   Rendered on the site's The Brand Room › Brand list page (index.html #br-brands). Update this file when a brand is signed, launches or leaves.

   Fields: n name · s logo slug (null = no logo yet) · on other fascias that sell it (codes in DG_BR_FASCIAS) · st 'live' | 'soon'
           deal (SS27 status: signed · confirmed · tc-agreed · tc · final) · note (range, e.g. Womenswear) */
window.DG_BR_FASCIAS={BHM:'boohooMAN',PLT:'PrettyLittleThing',BW:'boohoo',BUR:'Burton',KM:'Karen Millen',DP:'Dorothy Perkins',WALLIS:'Wallis',ALL:'Every fascia'};
window.DG_BR_DEALS={signed:['Signed','ok'],confirmed:['Confirmed','ok'],'tc-agreed':['T&C agreed','ok'],tc:['T&C in progress','wip'],final:['Final stages','wip']};
window.DG_BR_BRANDS={
  updated:'2026-10-28',
  season:'SS27',
  figma:'https://www.figma.com/design/NRsu568JGzwCDq4egvkUbn/The-Brand-Room?node-id=342-10634',
  brands:[
    /* ---- live: current brand mix (60) ---- */
    {n:'Altra',s:'altra',on:[],st:'live'},
    {n:'Aquascutum',s:'aquascutum',on:['BHM','BUR'],st:'live'},
    {n:'Armani Exchange',s:'armani-exchange',on:['BW','BUR','KM'],st:'live'},
    {n:'BOSS',s:'boss',on:['BHM'],st:'live'},
    {n:'Calvin Klein',s:'calvin-klein',on:['BHM','PLT','BW','BUR','KM'],st:'live'},
    {n:'Castore',s:'castore',on:['BHM','BUR'],st:'live'},
    {n:'Clarks',s:'clarks',on:['BHM'],st:'live'},
    {n:'Clarks Originals',s:'clarks-originals',on:['BHM'],st:'live'},
    {n:'Coolway',s:'coolway',on:['PLT','BHM'],st:'live'},
    {n:'Crew Clothing',s:'crew-clothing',on:['BUR'],st:'live'},
    {n:'Crocs',s:'crocs',on:['BHM'],st:'live'},
    {n:'Delta Roam',s:'delta-roam',on:[],st:'live'},
    {n:'Diadora',s:'diadora',on:['BHM'],st:'live'},
    {n:'DKNY',s:'dkny',on:['PLT','BW','KM'],st:'live'},
    {n:'EA7',s:'ea7',on:['BHM','BW'],st:'live'},
    {n:'Emporio Armani',s:'emporio-armani',on:['BHM','BUR','KM'],st:'live'},
    {n:'Farah',s:'farah',on:['BHM','BUR'],st:'live'},
    {n:'Fila',s:'fila',on:['BHM','BUR'],st:'live'},
    {n:'FitFlop',s:'fitflop',on:[],st:'live'},
    {n:'Gabriella Gucci',s:'gabriella-gucci',on:['ALL'],st:'live'},
    {n:'Gant',s:'gant',on:['BHM','BUR','KM'],st:'live'},
    {n:'Guess',s:'guess',on:['BHM','PLT','BW','KM'],st:'live'},
    {n:'Gym King',s:'gym-king',on:['BHM','BW'],st:'live'},
    {n:'Gym + Coffee',s:'gym-coffee',on:['KM'],st:'live'},
    {n:'Hackett',s:'hackett',on:['BUR'],st:'live'},
    {n:'Havaianas',s:'havaianas',on:['PLT','BHM','BW','BUR','KM'],st:'live'},
    {n:'Hey Dude',s:'hey-dude',on:['BUR','BHM'],st:'live'},
    {n:'Hoff',s:'hoff',on:['BHM','BUR','KM'],st:'live'},
    {n:'Hugo',s:'hugo',on:['BHM','BUR','KM'],st:'live'},
    {n:'Hunter',s:'hunter',on:['BHM','KM'],st:'live'},
    {n:'Ilse Jacobsen',s:'ilse-jacobsen',on:[],st:'live'},
    {n:'Ipanema',s:'ipanema',on:['BW'],st:'live'},
    {n:'Juicy Couture',s:'juicy-couture',on:['BW','KM'],st:'live'},
    {n:'Lacoste',s:'lacoste',on:['BHM','BUR'],st:'live',deal:'signed',note:'Womenswear launches SS27'},
    {n:'Lee',s:'lee',on:['BHM','BUR'],st:'live'},
    {n:'Lejan',s:'lejan',on:[],st:'live'},
    {n:'Love Moschino',s:'love-moschino',on:['KM'],st:'live'},
    {n:'Lyle & Scott',s:'lyle-scott',on:['BHM','BW','BUR'],st:'live'},
    {n:'Marshall Artist',s:'marshall-artist',on:['BHM','BUR'],st:'live'},
    {n:'Mastrum',s:'mastrum',on:['BHM','BUR'],st:'live'},
    {n:'Moose Knuckles',s:'moose-knuckles',on:[],st:'live'},
    {n:'Monterrain',s:'monterrain',on:['BHM'],st:'live',deal:'signed',note:'On the SS27 launch list'},
    {n:'Napapijri',s:'napapijri',on:['BHM','BUR'],st:'live'},
    {n:'Reebok',s:'reebok',on:['BHM','BW','BUR'],st:'live'},
    {n:'Scholl',s:'scholl',on:['DP','WALLIS'],st:'live'},
    {n:'Seinse',s:'seinse',on:[],st:'live'},
    {n:'Sergio Tacchini',s:'sergio-tacchini',on:['BHM','BUR'],st:'live'},
    {n:'Skechers',s:'skechers',on:['BHM','BW','BUR'],st:'live'},
    {n:'Sorel',s:'sorel',on:[],st:'live'},
    {n:'Sweaty Betty',s:'sweaty-betty',on:['KM'],st:'live'},
    {n:'Ted Baker',s:'ted-baker',on:['BHM','BUR','KM'],st:'live'},
    {n:'Timberland',s:'timberland',on:[],st:'live'},
    {n:'Tommy Hilfiger',s:'tommy-hilfiger',on:['BHM','PLT','BW','BUR','KM'],st:'live',deal:'confirmed',note:'Men’s apparel launches SS27'},
    {n:'Tommy Jeans',s:null,on:['BHM'],st:'live'},
    {n:'Toms',s:'toms',on:['BHM','BUR'],st:'live'},
    {n:'True Religion',s:'true-religion',on:['BUR'],st:'live',deal:'signed',note:'On the SS27 launch list'},
    {n:'Valentino',s:'valentino',on:['KM'],st:'live',note:'Valentino Bags (Mario Valentino)'},
    {n:'Victoria',s:'victoria',on:[],st:'live'},
    {n:'Wrangler',s:'wrangler',on:['BHM','BUR'],st:'live'},
    {n:'Zavetti Canada',s:'zavetti-canada',on:[],st:'live'},
    /* ---- coming soon: launching SS27, new to The Brand Room ---- */
    {n:'Adidas',s:'adidas',on:[],st:'soon',deal:'signed'},
    {n:'ALDO',s:'aldo',on:[],st:'soon',deal:'tc'},
    {n:'Belstaff',s:'belstaff',on:[],st:'soon',deal:'signed'},
    {n:'Birkenstock',s:'birkenstock',on:[],st:'soon',deal:'signed'},
    {n:'Christian Rose',s:'christian-rose',on:[],st:'soon',deal:'signed'},
    {n:'Dickies',s:'dickies',on:[],st:'soon',deal:'final'},
    {n:'Ed Hardy',s:'ed-hardy',on:[],st:'soon',deal:'signed'},
    {n:'Fred Perry',s:'fred-perry',on:[],st:'soon',deal:'tc'},
    {n:'Vera Wang',s:'vera-wang',on:[],st:'soon',deal:'tc-agreed'}
  ]
};
