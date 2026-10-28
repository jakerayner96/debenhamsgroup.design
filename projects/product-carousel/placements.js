/* Product carousel — every placement on site and the one setting each changes (header size, format, cards in view).
   Shared by the review shell (panel + spec table) and page.html. The component is the DS Product carousel (.pcar, assets/ds/carousel.js). */
window.PCAR_PLACES=[
 {id:'home',  name:'Home · feature rail',        where:'Home page module (CMS)',              size:'lg', fmt:'carousel', per:5, tabs:true, all:false, title:'Transition Between Seasons', sub:'Get ready for cosier days with our easy autumn upgrades'},
 {id:'home2', name:'Home · top sellers',         where:'Home page module (CMS)',              size:'md', fmt:'carousel', per:5, all:true,  title:'Top Sellers'},
 {id:'pdp',   name:'PDP · recommendations',      where:'PDP, under the buy column + accordions', size:'md', fmt:'carousel', per:5, all:true,  title:'Why Not Treat Yourself?'},
 {id:'look',  name:'PDP · Create the Look',      where:'PDP, under recommendations',          size:'md', fmt:'carousel', per:5, look:true, title:'Create The Look'},
 {id:'search',name:'Search overlay',             where:'Search open, under suggestions',      size:'sm', fmt:'carousel', per:3, title:'Recently Viewed'},
 {id:'results',name:'Search results',            where:'Search results page',                 size:'md', fmt:'grid',     per:4, title:'Products matching “new in”'},
 {id:'atb',   name:'Added to bag modal',         where:'Modal after Add to bag (Medium modal on desktop, slide-up on mobile)', size:'sm', fmt:'carousel', per:3, title:'Complete Your Look'},
 {id:'bag',   name:'Bag · recommendations',      where:'Bag, under the line items',           size:'md', fmt:'carousel', per:4, all:true,  title:'You Might Also Like'},
 {id:'empty', name:'Empty bag',                  where:'Bag with no items',                   size:'md', fmt:'grid',     per:4, title:'Popular Right Now'},
];
window.PCAR_SIZES={lg:'Large · title 40 desktop / 24 mobile + subtitle + tabs',md:'Medium · title 20 / 18',sm:'Small · title 16'};
window.PCAR_TABS={debenhams:['Fashion','Home','Beauty'],boohoo:['Women','Men','Beauty'],boohooman:['New In','Hoodies','Jackets'],plt:['New In','Dresses','Shoes'],karenmillen:['Dresses','Coats','Tailoring'],warehouse:['Dresses','Knitwear','Denim'],brandroom:['Women','Men','Accessories']};
