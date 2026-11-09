/* Product carousel · in situ — runs inside the Shopping agent page (projects/shopping-agent/page.html, the latest home / PDP / search),
   loaded by projects/product-carousel/page.html. It only swaps that page's product rails for the DS Product carousel — markup from the DS builders
   (carousel.js DG_pcarHTML / DG_pcarCard, feeds from templates/feed.js DG_feedItem, the Create the Look picker DG_lookPicker) — and adds the mini bag
   (DS modal .mdl--up / .mdl--side). Nothing here restyles a DS class; the .pi-* rules are page scaffolding.
   Views (PC.view): home (feature carousel with title + subtitle + tabs, Top Sellers) · pdp (Handpicked For You grid under the BNPL box, PC.hpRows rows ·
   Create the Look → opens the Create the Look picker · We Think You'll Like carousel; each on / off) ·
   search (search open: Recently Viewed / Products matching as rails, the overlay width on desktop) · minibag (PDP + the mini bag after Add to Bag) ·
   bag (the bag page + You Might Also Like). */
(function(){
const PC=window.PC_STATE;
const st=document.createElement('style');st.textContent=`
.pi-mod{padding:var(--gap-8,32px) var(--gap-4,16px)}@media(min-width:1024px){.pi-mod{padding:var(--gap-12,48px) var(--gap-10,40px)}}
.pi-full{padding:0 var(--gap-4,16px)}@media(min-width:1024px){.pi-full{padding:0 var(--gap-10,40px)}}
.pi-recs{display:flex;flex-direction:column;gap:var(--gap-10,40px);padding-block:var(--gap-10,40px)}
.pi-hp{padding-bottom:6px}.pi-hp .pcar{--pcar-row-gap:40px} /* Figma Handpicked: straight under Subscribe & Save, 40 between rows */
.wrap~.pi-recs{padding-top:10px} /* Figma PDP: Create the Look right under the accordions */
.pcar--look[data-pl="look"] .pcar-track>*{cursor:pointer}
.pi-mb{position:fixed;inset:0;z-index:80;display:flex;align-items:flex-end;justify-content:center}
@media(min-width:1024px){.pi-mb{justify-content:flex-end;align-items:stretch}}
.pi-mb>.mdl{z-index:3}
.pi-mb .mdl--up{max-height:calc(100% - 56px);overflow:hidden}
.pi-mb .pi-btns{display:flex;flex-direction:column;gap:var(--gap-2,8px)}.pi-mb .pi-btns .bd,.pi-mb .pi-btns .pay{width:100%}
.pi-mb .pi-items{display:flex;flex-direction:column;gap:var(--gap-2,8px)}.pi-more{font-size:12px;line-height:15px;color:var(--text-secondary)}
#pimb .pc .pc-iconbtn--sq{border-radius:var(--radius-default)!important} /* the Shopping agent page forces .pc .pc-iconbtn round (!important); put the DS square back */
html.pi-lock,html.pi-lock body{overflow:hidden;height:100%}
.pi-bag{display:flex;flex-direction:column;gap:var(--gap-6,24px);padding:var(--gap-4,16px) var(--gap-4,16px) 0}.pi-bag-hd .bs-top{padding:0;gap:16px;margin-top:16px}.pi-bag-hd .bs-ctas{gap:12px}
.pi-bag~[data-slot="summary"] .bs-flat{margin-top:16px}.pi-bag~.pi-recs{padding-block:16px;gap:24px} /* Figma Bag: summary 16 under Promo · rails 16 in, 24 apart */.pi-bag .bag-list{display:flex;flex-direction:column;gap:16px}`;
document.head.appendChild(st);

const TABS={debenhams:['Fashion','Home','Beauty'],boohoo:['Women','Men','Beauty'],boohooman:['New In','Hoodies','Jackets'],plt:['New In','Dresses','Shoes'],karenmillen:['Dresses','Coats','Tailoring'],warehouse:['Dresses','Knitwear','Denim'],brandroom:['Women','Men','Accessories']};
const TAB={};

/* ---- FIGMA MATCH (Jake 3 Nov 2026): the screens on the DS Figma review page (aIHmkCaTy9c5EWOxAGw0So 13639:18 mobile) are the master —
        this prototype renders the same DS components in the same state, with the same content (Debenhams). ---- */
const FM=()=>BR()==='debenhams';
/* rails pinned to the Figma products, by brand + name */
const BYN=names=>names.map(nm=>{for(let i=0;i<n();i++){const x=DG_feedItem(BR(),i);if(x&&((x.brand?x.brand+' ':'')+x.name).indexOf(nm)===0)return i}return -1}).filter(i=>i>=0);
const FIG={
  hp:['Burton Cotton Rich Ribbed Roll Neck Jumper','Burton Blue Black Dark Wash Stretch Slim Fit Jean','Wallis Petite Floral Cape Detail Pencil Dress','Wallis Hista Ruched Mid Heel Pointed Knee Boots','Long Waxed Coat Drifter Cotton Relaxed V-neck Cardigan','Wallis Wide Fit Darcia Snaffle Detail'],
  look:['boohoo Oversized Faux Suede Jacket','Burton Navy Wool Look Harrington Jacket','Burton Black Stretch Slim Fit Jeans','Living and Home 45cm Prelit Autumn Wreath','OHS Autumn Gonk Throw','Living and Home 180cm Autumn Garland','Coast Pleat Detail Lace Trim Maxi Dress','Debenhams Up to 40% off Wallis Ponte','Burton Khaki Slim Fit Chino Trousers','Wallis Petite Ponte Snaffle Trim Midi Dress'],
  recs:['Living and Home 45cm Prelit Autumn Wreath','Catherine Lansfield Scottish Everlastings','OHS Autumn Gonk Throw','Nicola Spring Diffuser','Living and Home 180cm Autumn Garland','Living and Home 45cm Artificial Pre-lit Autumn Harvest','Coast Pleat Detail Lace Trim Maxi Dress','Furn Picking Patch Pumpkin Duvet','Debenhams Up to 40% off Wallis Ponte','Dorothy Perkins Petite Berry Floral'],
  bagrec:['Wallis Petite Floral Cape Detail Pencil Dress','Wallis Wide Fit Darcia Snaffle Detail','Burton Navy Wool Look Harrington Jacket','Debenhams Watercolour Print Duvet Cover','OHS Autumn Gonk Throw','Living and Home 45cm Artificial Pre-lit Autumn Harvest']};
const FL=k=>FM()?BYN(FIG[k]):undefined;
/* USP: the Figma USP Banner (Use Code) — the code message without the midnight countdown */
if(window.DG_USP_LIVE&&DG_USP_LIVE.debenhams)DG_USP_LIVE.debenhams.forEach(r=>(r.items||[]).forEach(it=>{if(it.type==='codecountdown')it.type='code'}));
/* PDP buy column, as the Figma PDP (13796:18062): price · Size Selector (Size: · Size Guide + Icons / Measure · M out of stock, none chosen) ·
   PayPal word mark · Ask Deb prompts (hugging) · DS Membership box · BNPL logos + legal · At A Glance chips */
const FIG_SIZES=`<div class="sizes"><div class="sizes-head"><span>Size:</span><span class="guide"><img src="assets/ds/icons/lib/icons-measure.svg" alt="">Size Guide</span></div><div class="set">${['XS','S','M','L','XL'].map(z=>`<button class="sz${z==='M'?' oos oos--strike':''}">${z}</button>`).join('')}</div></div>`;
const FIG_BNPL=`<div class="bnpl bnpl--legal"><div class="chips"><span class="pc pc--paypal"><img src="assets/ds/icons/payments/bnpl-paypal-logo.svg" alt="PayPal"></span><span class="pc pc--payplus"><img src="assets/ds/icons/payments/bnpl-payplus-glyph.svg" alt="Pay+"></span><span class="pc pc--klarna"><img src="assets/ds/icons/payments/bnpl-klarna-word.svg" alt="Klarna"></span><span class="pc pc--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup-mini.svg" alt="Clearpay"></span></div><div class="small">18+, T&amp;C apply. Credit subject to status</div><a class="more" href="#">See more</a></div>`;
function figPdp(x){if(!FM())return;const q=s=>x.querySelector(s);
  const pb=q('.buy .price-blk');if(pb)pb.outerHTML=`<div class="price-blk price-blk--pdp"><div class="price"><span class="now sale">£98.00</span><span class="was">£140.00</span><span class="save" data-pct="30"></span></div><div class="price-code">£63.00 with code FASHION</div></div>`;
  const sz=q('.buy .sizes');if(sz)sz.outerHTML=FIG_SIZES;
  x.querySelectorAll('.buy .ctas .pp-co').forEach(e=>e.remove());
  const unl=q('.buy .unl');if(unl&&window.DG_memberBoxHTML)unl.outerHTML=DG_memberBoxHTML('debenhams');
  const bn=q('.buy .bnpl');if(bn)bn.outerHTML=FIG_BNPL;
  const sns=q('.buy .sns');if(sns)sns.innerHTML=sns.innerHTML.replace(/£\d+\.\d\d(?=<\/b>|<\/span>)/,'£93.10');
  x.querySelectorAll('.acc-set .glance').forEach(u=>{u.classList.add('glance--chips');u.innerHTML=u.innerHTML.replace('Regular fit','Relaxed fit')});
  x.querySelectorAll('.acc-set .acc-h').forEach(h=>{if(/^At a Glance/.test(h.textContent))h.firstChild.textContent='At A Glance'})}
/* header: the Figma Agent header has no bag count */
function figHeader(){if(FM())document.querySelectorAll('.hd-count').forEach(b=>b.classList.remove('hd-count'))}
/* footer: the DS Footer (footer.js — Figma 664-1063), as the Figma screens */
function figFooter(){const pf=document.querySelector('.pgfoot');if(!FM()||!pf||!window.DG_footer)return;if(!pf.querySelector('[data-ftr]')){pf.innerHTML='<footer data-ftr="debenhams"></footer>';DG_footer(pf.firstChild,'debenhams')}}
const n=()=>PR().length||1;
/* a feed per rail: a fixed start + 4 per tab, wrapping the fascia's product set */
const FEEDS={};
function ids(id,start,len){const off=start+(TAB[id]||0)*4;return Array.from({length:len},(_,k)=>(off+k*3)%n())}
/* a rail = the DS builder (DG_pcarHTML) over items from the DS feed (DG_feedItem: brand always, -X%, sample swatches); o.sp(i) marks Sponsored slots */
const round=()=>BR()==='plt';
/* FI(i): a feed item, or (i ≥ 1000) one of the real Added to Bag scenario products (recs.js — PI_RECS, Debenhams) */
const RK=['look','similar','fbt','till'];
const FI=i=>{if(i>=1000){const R=window.PI_RECS&&PI_RECS[RK[Math.floor(i/1000)-1]],x=R&&R.items[i%1000];return x?Object.assign({},x,{i}):null}return DG_feedItem(BR(),i)};
const items=(o,list)=>list.map(i=>{const x=FI(i);if(x&&o.noQa&&o.noQa(x))x.noQa=true;if(x&&SZ[i])x.size=SZ[i];if(x&&o.sp&&o.sp(i))x.sponsored=true;if(x&&o.qa&&ADDED.includes(i)){x.added=true;if(i===JUST)x.pop=true}return x}).filter(Boolean);
function pcar(o){FEEDS[o.id]=o;const grid=o.fmt==='grid',per=o.per||5,len=o.len||(grid?(desk()?per*2:6):10),list=o.list||ids(o.id,o.start||0,len);
  return DG_pcarHTML(Object.assign({info:PC.cardInfo||'full',swatches:PC.cardSw==null?undefined:PC.cardSw!==false},o,{grid,per,items:items(o,list),arrows:PC.arrows!==false,tab:TAB[o.id]||0,round:round(),eager:EXPORTING,all:false}))}
document.addEventListener('pcar:tab',e=>{const el=e.target,o=FEEDS[el.dataset.pl];if(!o)return;TAB[o.id]=e.detail.index;delete o.list;
  const grid=o.fmt==='grid',len=grid?(desk()?(o.per||5)*2:6):10;el.querySelector('.pcar-track').innerHTML=items(o,ids(o.id,o.start||0,len)).map(p=>DG_pcarCard(p,Object.assign({},o,{round:round(),eager:EXPORTING}))).join('')});

/* ---- HOME: every products module in the live home becomes the carousel (title · subtitle · tabs, large header);
        fascias whose home has none (Debenhams, boohoo, MAN) get one after the second module. Top Sellers further down. ---- */
const oHome=PAGES.home;
PAGES.home=function(){const doc=new DOMParser().parseFromString(oHome(),'text/html'),hm=doc.querySelector('.hm');if(!hm)return oHome();
  const mods=((window.HOME_LIVE||{})[BR()]||[]).map(x=>x[desk()?'d':'m']).filter(o=>o&&o.t==='products');
  const box=h=>{const d=doc.createElement('div');d.className='pi-mod';d.innerHTML=h;return d};
  const feat=k=>{const o=mods[k]||{};return pcar({id:'home'+k,size:'lg',full:1,title:o.title||'Transition Between Seasons',sub:o.sub||'Get ready for cosier days with our easy autumn upgrades',tabs:o.tabs||TABS[BR()],start:k*5})};
  const ps=[...hm.querySelectorAll(':scope>.hm-p')];
  if(ps.length)ps.forEach((el,k)=>el.replaceWith(box(feat(k))));
  else{const at=hm.children[Math.min(1,hm.children.length-1)];at&&at.after(box(feat(0)))}
  const kids=[...hm.children],at2=kids[Math.min(kids.length-1,5)];
  at2&&at2.after(box(pcar({id:'homeTop',size:'md',full:1,title:'Top Sellers',start:7})));
  return hm.outerHTML};

/* ---- PDP: Create the Look (grey panel, image only), then the recommendations (carousel or grid) under the PDP ---- */
const oPdp=PAGES.pdp;
/*   Handpicked For You: the grid, 3 across, in the buy column under the BNPL box (as live), PC.hpRows rows. */
PAGES.pdp=function(){const doc=new DOMParser().parseFromString('<div id="x">'+oPdp()+'</div>','text/html'),x=doc.getElementById('x');
  const bnpl=x.querySelector('.buy .sns')||x.querySelector('.buy .bnpl')||x.querySelector('.bnpl');   /* under BNPL + Subscribe & Save */
  if(PC.hp!==false&&bnpl){const rows=Math.max(1,+PC.hpRows||2),d=doc.createElement('div');d.className='pi-hp';
    d.innerHTML=pcar({id:'hp',size:'sm',fmt:'grid',per:3,len:rows*3,title:'Handpicked For You',start:3,bleed:false,list:FM()&&rows===2?FL('hp'):undefined});bnpl.after(d)}
  const recs=(PC.look!==false?pcar({id:'look',size:'md',full:1,look:true,title:'Create The Look',start:9,list:FL('look')}):'')+(PC.car!==false?pcar({id:'recs',size:'md',full:1,title:'We Think You’ll Like',start:15,list:FL('recs'),sp:BR()==='debenhams'&&PC.sponsored!==false?(i=>{const L=FL('recs')||ids('recs',15,10);return L.indexOf(i)===1||L.indexOf(i)===3}):null}):'');
  figPdp(x);
  if(recs){const r=doc.createElement('div');r.className='pi-recs pi-full';r.innerHTML=recs;x.appendChild(r)}   /* outside the PDP's 1440 wrap: full width to the page margin */
  return x.innerHTML};

/* ---- CREATE THE LOOK PICKER: a tap anywhere on Create the Look opens the DS picker (DG_lookPicker — reels from templates/feed.js DG_feedReels);
        Add to bag (n) hands over to the mini bag. ---- */
function openPicker(pre){DG_lookPicker({rows:DG_feedReels(BR()),pick:pre!=null?[pre]:[],round:round(),arrows:PC.arrows!==false,onAdd:()=>{PC.bagOpen=true;mountBag(true)}})}

/* ---- SEARCH: Recently Viewed / Products matching “…” rails become the carousel (small header); 6 in view on desktop, where the overlay is wide ---- */
const oAc=window.acInner;
window.acInner=function(){const doc=new DOMParser().parseFromString('<div id="x">'+oAc()+'</div>','text/html'),typing=!!(S.q||'').trim();
  doc.querySelectorAll('.ac-rv').forEach((rv,k)=>{const sec=rv.closest('.ac-sec')||rv,t=(sec.querySelector('h4')||{}).textContent||'Recently Viewed';
    const list=typing&&window.matches?matches(S.q).map(x=>x[1]):[1,21,5,24,31,27,3,9,12,15].map(i=>i%n());
    const d=doc.createElement('div');d.className='ac-sec';d.innerHTML=pcar({id:'ac'+k,size:'sm',title:t,per:6,list});sec.replaceWith(d)});
  return doc.getElementById('x').innerHTML};

/* ---- MINI BAG (after Add to Bag) — versions (PC.mbType), every one from DS parts:
        live  · DS modal (slide up mobile .mdl--up, drawer desktop .mdl--side) — the added item, Continue Shopping / View Bag; no recommendations (as live)
        look  · DS modal (slide up mobile .mdl--up, drawer desktop .mdl--side) — the added item(s) (bag line items), Continue Shopping / View Bag, then
                Complete The Look as the carousel with the mini quick add (.pc-qa): first two Sponsored on Debenhams; Add puts the product in the bag and its
                line item into the modal
        fbt   · the same modal with Frequently Bought Together instead (9 Nov): the rail (carousel / grid) · a list (.rec-list rows, quick add) · the DS bundle (.bndl)
        Free delivery banner (PC.thresh): the DS threshold (.thresh) under the line items, in the modal versions — fills as items are added ---- */
/* the bag CTA (PC.cta): View Bag → the bag · Checkout → straight to checkout (the Checkout 2026 prototype); PC.applePay adds the DS Apple Pay button under it */
const CHECKOUT='https://jakerayner96.github.io/checkout-2026-promo-gift-card/checkout-gift-card.html';
const CTA=()=>PC.cta==='checkout'?'Checkout':'View Bag';
/* Bag CTA (panel): View Bag · Checkout · both — Checkout primary + View Bag secondary, side by side (.bd-pair, View Bag left) or stacked (Checkout on top) */
const ctas=()=>`${PC.cta==='both'?(PC.ctaLay==='stack'?'<button class="bd pri" data-mbgo="checkout">Checkout</button><button class="bd sec" data-mbgo>View Bag</button>':'<div class="bd-pair"><button class="bd sec" data-mbgo>View Bag</button><button class="bd pri" data-mbgo="checkout">Checkout</button></div>'):`<button class="bd pri" data-mbgo>${CTA()}</button>`}${PC.applePay?'<button class="pay pay--apple" data-mbgo="pay" aria-label="Apple Pay"><img src="assets/ds/icons/payments/applepay-onblack.svg" alt="Apple Pay"></button>':''}`;
const MBT=()=>['live','look','similar','fbt','till'].includes(PC.mbType)?PC.mbType:'live',THRESH=100,ADDED=[];let SAVED=null,JUST=null;   /* JUST = the item quick-added on this render: its line item drops in, its button pops */
const num=s=>parseFloat(String(s).replace(/[^0-9.]/g,''))||0;
function mainItem(){if(FM()&&MBT()==='fbt'&&window.PI_RECS&&PI_RECS.fbt.bag){const b=PI_RECS.fbt.bag;return Object.assign({},b,{price:String(b.price).replace(/^From\s*/,''),size:b.size||'50ml',colour:''})}   /* Frequently bought together: the bag holds Prada Paradoxe */
  const DP=PDPP(),p=DP?{brand:DP.brand,name:DP.name,price:DP.price,was:DP.was,colour:DP.colour}:PR()[1]||{};
  const sz=(document.querySelector('.sz.on')||{}).textContent,cm=((document.querySelector('.buy')||{}).innerText||'').match(/Colou?r:\s*([^\n]+)/);
  return Object.assign({},p,{img:DP?DP.imgs[0]:IMG(1),size:sz&&sz.trim()||(FM()?'M':'12'),colour:p.colour||(cm&&cm[1].trim())||''})}
function bagItems(){return [mainItem()].concat(ADDED.map(i=>{const x=FI(i);return x&&Object.assign({},x,{size:SZ[i]||'One Size',colour:x.colour||(x.swatches?x.swatches[0].name:''),price:String(x.price).replace(/^From\s*/,'')})}).filter(Boolean))}
/* the line item: Live = the live card (DS .bag-item, 99 × 148); the new versions = the mini bag card (DS .bag-item--mini, Bag 2026): brand - name · size / colour · price */
const oldItem=p=>`<div class="bag-item"><img src="${p.img}" alt=""><div class="info"><div class="b">${esc(p.brand||BN())}</div><div class="n">${esc(p.name)}</div><div class="v">${esc(/one size/i.test(p.size||'')?'One size':'Size '+p.size)} · Qty 1</div><div class="p">${p.was?`<span class="sale">${esc(p.price)}</span><s>${esc(p.was)}</s>`:esc(p.price)}</div></div></div>`;
const lineItem=p=>MBT()==='live'?oldItem(p):`<div class="bag-item bag-item--mini${p.i!=null&&p.i===JUST?' bag-item--in':''}"><img src="${p.img}" alt=""><div class="info"><div class="t"><b>${esc(p.brand||BN())}</b> - ${esc(p.name)}</div><div class="v">${esc([p.size,p.colour].filter(Boolean).join(' / '))}</div><div class="p">${p.was?`<span class="sale">${esc(p.price)}</span><s>${esc(p.was)}</s>`:esc(p.price)}</div></div></div>`;
function thresh(){if(PC.thresh===false)return '';const t=bagItems().reduce((a,p)=>a+num(p.price),0);
  const bx=MBT()==='live'||FM()?'':' thresh--box';   /* Figma mini bags (3 Nov): the plain threshold line */   /* the new versions: in the DS container so it stands out */
  if(t>=THRESH)return `<div class="thresh thresh--ok${bx}"><span class="tick"></span><span>You’ve qualified for free delivery</span></div>`;
  return `<div class="thresh${bx}"><span>Spend <b>£${(THRESH-t).toFixed(2)}</b> more for free delivery</span><div class="track"><div class="fill" style="width:${Math.round(t/THRESH*100)}%"></div></div></div>`}
/* the recommendations in the Added to Bag sheet (panel): Complete The Look (outfit pieces — first two Sponsored on Debenhams, Mirakl) or
   Frequently Bought Together (what goes with it — Bloomreach "bought together") · title editable / off · the rail as a carousel or a 3-across grid of
   1 – 3 rows; Frequently Bought Together can also be a list (.rec-list) or the DS bundle (.bndl, tick and add them all) · cards say as much as PC.cardInfo */
/* the recommendations in the Added to Bag sheet (panel, PC.mbType) — four scenarios, each with real debenhams.com products (recs.js):
     look    · Complete The Look — outfit pieces for the dress (shoes, bag, jewellery, a coat); first two Sponsored (Mirakl marketplace)
     similar · You May Also Like — alternatives to the dress (same occasion, other styles)
     fbt     · Frequently Bought Together — the bag holds Prada Paradoxe: its hand cream, refill, gift set, the Intense
     till    · Little Extras Under £10 — the till: small cheap add-ons (socks, lip balm, a claw clip, hand cream)
   Style: cards (carousel / 1–3 row grid) · list (.rec-list rows) · bundle (the DS .bndl, Frequently Bought Together only). Card text, swatches,
   quick add shape, card size and image gap from the Cards panel (Jake's Figma review variants 13939:19737 … 13939:26225). */
const RECL=t=>{const k=RK.indexOf(t)+1,R=window.PI_RECS&&PI_RECS[t];return FM()&&R?R.items.map((x,j)=>k*1000+j):t==='fbt'?ids('fbt',12,8):t==='till'?ids('till',30,8):ids('atb',4,10).filter(i=>i!==1)};
const RECT=t=>(PC['title_'+t]||'').trim()||(window.PI_RECS&&PI_RECS[t]&&PI_RECS[t].title)||{look:'Complete The Look',similar:'You May Also Like',fbt:'Frequently Bought Together',till:'Little Extras Under £10'}[t];
function rec(t){const grid=PC.ctlFmt==='grid',rows=Math.max(1,Math.min(3,+PC.ctlRows||2)),st=PC.recStyle==='list'?'list':PC.recStyle==='bundle'&&t==='fbt'?'bundle':'rail';
  const title=PC.ctlTitleOn===false?'':RECT(t),list=RECL(t);
  const hd=title?`<header class="pcar-hd"><div class="pcar-tt"><h2 class="pcar-t">${esc(title)}</h2></div></header>`:'';
  if(st==='list'){const L=items({qa:true},list.slice(0,3)),lv=PC.cardInfo||'full',sq=PC.qaShape==='square'?' pc-iconbtn--sq':'';
    const tx=x=>lv==='price'?'':lv==='inline'||lv==='inline2'?`<span class="n"><b>${esc(x.brand||'')}</b>${lv==='inline'?' - ':' '}${esc(x.name)}</span>`:`${lv==='clean'?'':`<span class="b">${esc(x.brand||'')}</span>`}<span class="n">${esc(x.name)}</span>`;
    return `<section class="pcar pcar--sm pi-rec">${hd}<div class="rec-list">${L.map(x=>`<div class="rec-row"><img src="${esc(x.img)}" alt=""><div class="t">${tx(x)}<div class="price-blk price-blk--rail"><div class="price"><span class="now${x.was?' sale':''}">${esc(x.price)}</span>${x.was?`<span class="was">${esc(x.was)}</span>`:''}</div></div></div><button type="button" class="pc-iconbtn${sq}${x.added?' on':''}" data-qa="${x.i}" aria-label="${x.added?'Added':'Quick add'} ${esc(x.name)}"${x.added?' disabled':''}><img src="assets/ds/icons/${x.added?'lib/icons-tick':'quick-add-16'}.svg" alt=""></button></div>`).join('')}</div></section>`}
  if(st==='bundle'&&window.DG_bundle){const L=list.slice(0,2).map(i=>Object.assign({},FI(i),{sizes:/ml/i.test((FI(i)||{}).name||'')?['One size']:['30ml','50ml','90ml'],i}));
    return DG_bundle.html({title:title||RECT(t),items:L,cta:'Add to bag'})}
  /* card (Jake 11 Nov, Figma 13943:31066): std = 127 × 190 image, min height 250, Brand - Name, price · sm = 100 × 150, price only.
     quick add (PC.qaMode): bag — the button only on single-variant products, it adds straight to the bag; multi-variant cards go to the PDP ·
     modal — every card has it; single adds, multi opens the DS Quick Add modal · pdp — no button, a tap opens the PDP · inline — multi-variant cards
     carry "Size: Select size ⌄" and the button adds once a size is chosen */
  const sm=PC.recCard==='sm',m=QAM(),multi=x=>!!(x.sizes&&x.sizes.length);
  return pcar({id:'rec-'+t,size:'sm',title,per:grid?3:4,card:sm?100:127,fixed:!grid,compact:true,tall:!sm,info:sm?'price':'inline',swatches:false,start:4,list:grid?list.slice(0,rows*3):list,fmt:grid?'grid':undefined,len:grid?rows*3:undefined,bleed:grid?false:undefined,
    qa:m!=='pdp',qaShape:'square',inlineSize:m==='inline'&&!sm,noQa:x=>multi(x)&&(m==='bag'||(m==='inline'&&sm)),
    sp:t==='look'&&BR()==='debenhams'&&PC.sponsored!==false?(i=>list.indexOf(i)<2):null})}
const QAM=()=>['bag','modal','pdp','inline'].includes(PC.qaMode)?PC.qaMode:'bag',SZ={};
function miniBag(){const d=desk(),t=MBT();
  const rail=rec(t);
  /* order: Live as live (item · threshold · Continue Shopping / View Bag); the new versions lead with the threshold, then the item(s), then their extra */
  /* Complete the look keeps to one view: the item you came for + the one just added (it drops in); earlier adds fold into “+N more in your bag” */
  const all=bagItems(),shown=all,more=0;
  const items=`<div class="pi-items">${shown.map(lineItem).join('')}${more?`<div class="pi-more">+${more} more in your bag</div>`:''}</div>`,vb=ctas();
  const body=t==='live'?items+thresh()+`<div class="pi-btns"><button class="bd sec" data-mbx>Continue Shopping</button>${vb}</div>`
    :thresh()+items+rail+`<div class="pi-btns">${vb}</div>`;
  return `<div class="pi-mb" id="pimb"><div class="mdl-scrim" data-mbx></div>
  <div class="mdl ${t==='live'?'mdl--tight-hd':'mdl--compact'} ${d?'mdl--side mdl-anim-side':'mdl--up mdl-anim-up'}" role="dialog" aria-modal="true" aria-label="Added to bag">
    <div class="modal-hd"><div class="mt"><span>Added to Bag</span></div><button class="modal-x" aria-label="Close" data-mbx></button></div>
    <div class="mdl-bd">${body}</div></div></div>`}
/* fit: scale to fit — the rail cards shrink until nothing scrolls (the Figma mini bag; the panel options were removed 3 Nov) */
const FIT=()=>'scale',PIN=()=>false;
function autoFit(n){return;   /* 11 Nov: the carousel keeps its height — the sheet scrolls and the CTAs float pinned instead */
if(MBT()==='live'||PC.ctlFmt==='grid'||PC.cardSize==='lg'||(PC.recStyle&&PC.recStyle!=='rail'))return;const bd=n.querySelector('.mdl-bd'),rail=n.querySelector('[data-pl^="rec-"]');if(!bd||!rail)return;
  /* scale the rail's cards (image + copy together, so nothing re-wraps) by exactly the overflow; the first card stays on the 24px margin */
  const body=rail.querySelector('.pcar-body'),pad=24;let z=1;body.style.zoom='';body.style.removeProperty('--pcar-pad');
  for(let k=0;k<6;k++){const over=bd.scrollHeight-bd.clientHeight;if(over<=0)break;const h=body.getBoundingClientRect().height;z=Math.max(.4,z*(h-over-3)/h);
    body.style.zoom=z;body.style.setProperty('--pcar-pad',(pad/z)+'px');if(z===.4)break}}
/* once the sheet body scrolls, the CTA group sticks to its foot — floating (shadow only) or on a white fade (panel, PC.ctaSticky); the title stays pinned */
function sticky(n){const bd=n&&n.querySelector('.mdl-bd');if(!bd)return;const b=[...bd.children].filter(x=>x.classList.contains('pi-btns')).pop();if(!b)return;
  b.classList.remove('mdl-sticky','mdl-sticky--float','mdl-sticky--fade');if(bd.scrollHeight>bd.clientHeight+2)b.classList.add('mdl-sticky','mdl-sticky--'+(PC.ctaSticky==='float'?'float':'fade'))}
let TT=0;
function mountBag(open,instant){const old=document.getElementById('pimb'),ot=document.getElementById('pitoast');clearTimeout(TT);
  if(ot)ot.remove();
  if(!open){document.documentElement.classList.remove('pi-lock');
    if(old&&!instant&&!EXPORTING){const m=old.querySelector('.mdl'),sc=old.querySelector('.mdl-scrim');old.id='';old.style.pointerEvents='none';   /* leave the way it came: drawer out right, slide up down; scrim fades */
      m.classList.remove('mdl-anim-up','mdl-anim-side');m.classList.add(m.classList.contains('mdl--side')?'mdl-anim-side-out':'mdl-anim-down');if(sc)sc.classList.add('mdl-scrim--out');setTimeout(()=>old.remove(),320)}
    else if(old)old.remove();return}
  const keep=old&&old.querySelector('.pcar-track')?old.querySelector('.pcar-track').scrollLeft:0,bs=old?old.querySelector('.mdl-bd').scrollTop:0;
  if(old)old.remove();
  document.documentElement.classList.add('pi-lock');document.body.insertAdjacentHTML('beforeend',miniBag());
  const n=document.getElementById('pimb');if(window.DG_bundle)DG_bundle.wire(n);autoFit(n);sticky(n);if(old){n.querySelector('.mdl').classList.remove('mdl-anim-up','mdl-anim-side');n.querySelector('.mdl-scrim').style.animation='none';const tr=n.querySelector('.pcar-track');if(tr)tr.scrollLeft=keep;n.querySelector('.mdl-bd').scrollTop=bs}}
/* inline size: the choice shows in the row */
document.addEventListener('change',e=>{const sel=e.target.closest('#pimb [data-qsz]');if(!sel)return;const l=sel.closest('.pc-size'),x=FI(+sel.dataset.qsz)||{};l.classList.remove('err');l.classList.toggle('on',!!sel.value);l.querySelector('.v').textContent=sel.value||('Select '+(x.opt||'size').toLowerCase())});
/* the DS Quick Add modal: add → the bag (line item drops in); View Product → the PDP; X / scrim → closes */
const qaClose=()=>document.querySelectorAll('.qadd-layer').forEach(l=>l.remove());
document.addEventListener('dg:quickadd',e=>{const{i,size}=e.detail;SZ[i]=size;qaClose();if(!ADDED.includes(i)){ADDED.push(i);JUST=i}mountBag(true);JUST=null});
document.addEventListener('dg:quickadd-pdp',e=>{if(e.detail.href)window.open(e.detail.href,'_blank','noopener')});
document.addEventListener('dg:quickadd-close',qaClose);
/* the bundle's Add to bag: its ticked items go in the bag, their line items drop in */
document.addEventListener('dg:bundle',e=>{if(!e.target.closest('#pimb'))return;const L=RECL('fbt').slice(0,2);e.detail.items.forEach(x=>{const i=L.find(k=>(FI(k)||{}).name===x.name);if(i!=null&&!ADDED.includes(i)){ADDED.push(i);JUST=i}});mountBag(true);JUST=null});
document.addEventListener('click',e=>{
  const lk=e.target.closest('.pcar--look[data-pl="look"]');if(lk&&!e.target.closest('.pcar-arr')){e.preventDefault();const c=e.target.closest('.pcar-track>*'),L=FEEDS.look,idx=c?[...c.parentNode.children].indexOf(c):-1;openPicker(L&&idx>=0?ids('look',L.start||0,10)[idx]:null);return}
  const qa=e.target.closest('#pimb [data-qa]');if(qa){e.preventDefault();e.stopPropagation();const i=+qa.dataset.qa,x=FI(i)||{};
    if(x.sizes&&x.sizes.length&&!ADDED.includes(i)){
      if(QAM()==='modal'||PC.recCard==='sm'){if(window.DG_quickAdd){document.body.insertAdjacentHTML('beforeend',DG_quickAdd.html(x,{desk:desk()}));DG_quickAdd.wire(document.body.lastElementChild)}return}
      const card=qa.closest('.pc'),sel=card&&card.querySelector('[data-qsz]');if(sel&&!sel.value){const l=sel.closest('.pc-size');l.classList.add('err');l.querySelector('.v').textContent='Select a '+(x.opt||'size').toLowerCase();return}
      if(sel)SZ[i]=sel.value}
    if(!ADDED.includes(i)){ADDED.push(i);JUST=i}mountBag(true);JUST=null;return}
  /* no quick add (or a tap on the card itself): the product's PDP */
  const card=e.target.closest('#pimb .pc[data-href]');if(card&&!e.target.closest('button,select,label,.pc-size')){e.preventDefault();window.open(card.dataset.href,'_blank','noopener');return}
  const go=e.target.closest('[data-mbgo]');if(go){e.preventDefault();
    if(go.dataset.mbgo==='pay'||go.dataset.mbgo==='checkout'||PC.cta==='checkout'){location.href=CHECKOUT+'?brand='+BR();return}
    PC.bagOpen=false;mountBag(false,true);PC.view='bag';S.page='bag';S.search=false;render();scrollTo(0,0);parent.postMessage({protoNav:{view:'bag'}},'*');return}
  if(e.target.closest('[data-mbx]')){e.preventDefault();PC.bagOpen=false;mountBag(false);return}
  if(S.page==='pdp'&&e.target.closest('.ctas .bd.pri')){e.preventDefault();PC.bagOpen=true;mountBag(true)}
  if(e.target.closest('.pcar a[href="#"]'))e.preventDefault()});

/* ---- BAG page: You Might Also Like under the line items (as templates/bag.html) ---- */
const oBag=PAGES.bag;
PAGES.bag=function(){
  if(FM()&&!desk()&&window.DG_bag&&window.DG_bagSummaryHTML){
    /* the Figma mobile Bag: Your Bag (2) · Order Total · threshold · both checkouts · Bag Product Cards (Coast · Prada + Subscribe & Save) · Promo Code ·
       Order Summary · You Might Also Like · Recently Viewed */
    const cards=[DG_bag.card({id:'b1',type:'std',img:'projects/plp-alignment/img/debenhams/p1.jpg',brand:'Coast',name:'Long Sleeve Lace and Pleated Midi Shirt Dress',variant:'12 / Grey',price:'£70.00',was:'£139.00',qty:1,max:10}),
      DG_bag.card({id:'b2',type:'std',img:'templates/img/bag/prada.webp',brand:'Prada',name:'Paradoxe Eau De Parfum',variant:'90ml / Misc',price:'£103.00',was:'£145.00',qty:1,max:10,addon:'sns'})].join('');
    const top=`<div class="bs bs-top" style="--bs-bg:#7BE7D8;--bs-fg:#000;--bs-case:uppercase"><div class="bs-ot">Order Total: <b>£64.00</b></div><div class="thresh"><span>Spend <b>£30.00</b> more for free delivery</span><div class="track"><div class="fill" style="width:70%"></div></div></div><div class="bs-ctas"><button type="button" class="bs-cta">Checkout with Deliver+</button><button type="button" class="bs-cta">Checkout without Deliver+</button></div></div>`;
    const sum=DG_bagSummaryHTML('debenhams',[{price:'£63.20',was:'£79.00'}],false,{wf:3.18,pay3:28.08});
    const rails=`<div class="pi-full pi-recs">${pcar({id:'bagrec',size:'md',full:1,title:'You Might Also Like',start:5,list:FL('bagrec')})}${pcar({id:'bagrv',size:'md',full:1,title:'Recently Viewed',start:5,list:FL('bagrec')})}</div>`;
    return `<main class="pi-bag"><div class="pi-bag-hd"><h1 class="bag-title">Your Bag (2)</h1>${top}</div><div class="bag-list">${cards}</div></main><div data-slot="summary">${sum}</div>${rails}`}
  const h=oBag();return h.replace(/<\/main>/,`<div class="pi-full pi-recs">${pcar({id:'bagrec',size:'md',full:1,title:'You Might Also Like',start:5})}</div></main>`)};

/* ---- after every render: the mini bag ---- */
const oRender=window.render;
window.render=function(){oRender.apply(this,arguments);figHeader();figFooter();
  mountBag(PC.view==='minibag'&&PC.bagOpen!==false)};
})();
