/* Product carousel · in situ — runs inside the Shopping agent page (projects/shopping-agent/page.html, the latest home / PDP / search),
   loaded by projects/product-carousel/page.html. It only swaps that page's product rails for the DS Product carousel — markup from the DS builders
   (carousel.js DG_pcarHTML / DG_pcarCard, feeds from templates/feed.js DG_feedItem, the Create the Look picker DG_lookPicker) — and adds the mini bag
   (DS modal .mdl--up / .mdl--side). Nothing here restyles a DS class; the .pi-* rules are page scaffolding.
   Views (PC.view): home (feature carousel with title + subtitle + tabs, Top Sellers) · pdp (Handpicked For You grid under the BNPL box, PC.hpRows rows ·
   Create the Look → opens the Create the Look picker · We Think You'll Like carousel; each on / off) ·
   search (search open: Recently Viewed / Products matching as rails, the overlay width on desktop) · bag (PDP + the mini bag after Add to Bag). */
(function(){
const PC=window.PC_STATE;
const st=document.createElement('style');st.textContent=`
.pi-mod{padding:var(--gap-8,32px) var(--gap-4,16px)}@media(min-width:1024px){.pi-mod{padding:var(--gap-12,48px) var(--gap-10,40px)}}
.pi-full{padding:0 var(--gap-4,16px)}@media(min-width:1024px){.pi-full{padding:0 var(--gap-10,40px)}}
.pi-recs{display:flex;flex-direction:column;gap:var(--gap-10,40px);padding-block:var(--gap-10,40px)}
.pi-hp{margin-top:var(--gap-6,24px)}
.pcar--look[data-pl="look"] .pcar-track>*{cursor:pointer}
.pi-mb{position:fixed;inset:0;z-index:80;display:flex;align-items:flex-end;justify-content:center}
@media(min-width:1024px){.pi-mb{justify-content:flex-end;align-items:stretch}}
.pi-mb>.mdl{z-index:3}
.pi-mb .mdl--up{max-height:calc(100% - 56px);overflow:hidden}
.pi-mb .pi-btns{display:flex;flex-direction:column;gap:var(--gap-2,8px)}.pi-mb .pi-btns .bd{width:100%}
html.pi-lock,html.pi-lock body{overflow:hidden;height:100%}`;
document.head.appendChild(st);

const TABS={debenhams:['Fashion','Home','Beauty'],boohoo:['Women','Men','Beauty'],boohooman:['New In','Hoodies','Jackets'],plt:['New In','Dresses','Shoes'],karenmillen:['Dresses','Coats','Tailoring'],warehouse:['Dresses','Knitwear','Denim'],brandroom:['Women','Men','Accessories']};
const TAB={};
const n=()=>PR().length||1;
/* a feed per rail: a fixed start + 4 per tab, wrapping the fascia's product set */
const FEEDS={};
function ids(id,start,len){const off=start+(TAB[id]||0)*4;return Array.from({length:len},(_,k)=>(off+k*3)%n())}
/* a rail = the DS builder (DG_pcarHTML) over items from the DS feed (DG_feedItem: brand always, -X%, sample swatches); o.sp(i) marks Sponsored slots */
const round=()=>BR()==='plt';
const items=(o,list)=>list.map(i=>{const x=DG_feedItem(BR(),i);if(x&&o.sp&&o.sp(i))x.sponsored=true;return x}).filter(Boolean);
function pcar(o){FEEDS[o.id]=o;const grid=o.fmt==='grid',per=o.per||5,len=o.len||(grid?(desk()?per*2:6):10),list=o.list||ids(o.id,o.start||0,len);
  return DG_pcarHTML(Object.assign({},o,{grid,per,items:items(o,list),arrows:PC.arrows!==false,tab:TAB[o.id]||0,round:round(),eager:EXPORTING,all:false}))}
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
  const bnpl=x.querySelector('.buy .bnpl')||x.querySelector('.bnpl');
  if(PC.hp!==false&&bnpl){const rows=Math.max(1,+PC.hpRows||2),d=doc.createElement('div');d.className='pi-hp';
    d.innerHTML=pcar({id:'hp',size:'sm',fmt:'grid',per:3,len:rows*3,title:'Handpicked For You',start:3,bleed:false});bnpl.after(d)}
  const recs=(PC.look!==false?pcar({id:'look',size:'md',full:1,look:true,title:'Create The Look',start:9}):'')+(PC.car!==false?pcar({id:'recs',size:'md',full:1,title:'We Think You’ll Like',start:15,sp:BR()==='debenhams'&&PC.sponsored!==false?(i=>{const L=ids('recs',15,10);return L.indexOf(i)===1||L.indexOf(i)===3}):null}):'');
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

/* ---- MINI BAG (after Add to Bag): DS modal — slide up on mobile (.mdl--up), drawer on desktop (.mdl--side, proposed) — with
        the added item (DS bag line item), Continue Shopping / View Bag, then Complete The Look as the carousel (sponsored slots on Debenhams) ---- */
function miniBag(){const DP=PDPP(),p=DP?{brand:DP.brand,name:DP.name,price:DP.price,was:DP.was}:PR()[1]||{},img=DP?DP.imgs[0]:IMG(1),d=desk();
  const list=ids('atb',4,10);   /* Debenhams: the first two slots are Mirakl sponsored (labelled), then Bloomreach “also bought” */
  const o={id:'atb',size:'sm',title:'Complete The Look',per:3,start:4,list,sp:BR()==='debenhams'&&PC.sponsored!==false?(i=>list.indexOf(i)<2):null};
  return `<div class="pi-mb" id="pimb"><div class="mdl-scrim" data-mbx></div>
  <div class="mdl ${d?'mdl--side mdl-anim-side':'mdl--up mdl-anim-up'}" role="dialog" aria-modal="true" aria-label="Added to bag">
    <div class="modal-hd"><div class="mt"><span class="mdl-tick" aria-hidden="true"></span><span>Added to Bag</span></div><button class="modal-x" aria-label="Close" data-mbx></button></div>
    <div class="mdl-bd"><div class="bag-item"><img src="${img}" alt=""><div class="info"><div class="b">${esc(p.brand||BN())}</div><div class="n">${esc(p.name)}</div><div class="v">Size 12 · Qty 1</div><div class="p">${p.was?`<span class="sale">${esc(p.price)}</span><s>${esc(p.was)}</s>`:esc(p.price)}</div></div></div>
      <div class="pi-btns"><button class="bd sec" data-mbx>Continue Shopping</button><button class="bd pri">View Bag</button></div>
      ${pcar(o)}</div></div></div>`}
function mountBag(open){const old=document.getElementById('pimb');if(old)old.remove();document.documentElement.classList.toggle('pi-lock',!!open);
  if(open)document.body.insertAdjacentHTML('beforeend',miniBag())}
document.addEventListener('click',e=>{
  const lk=e.target.closest('.pcar--look[data-pl="look"]');if(lk&&!e.target.closest('.pcar-arr')){e.preventDefault();const c=e.target.closest('.pcar-track>*'),L=FEEDS.look,idx=c?[...c.parentNode.children].indexOf(c):-1;openPicker(L&&idx>=0?ids('look',L.start||0,10)[idx]:null);return}
  if(e.target.closest('[data-mbx]')){e.preventDefault();PC.bagOpen=false;mountBag(false);return}
  if(S.page==='pdp'&&e.target.closest('.ctas .bd.pri')){e.preventDefault();PC.bagOpen=true;mountBag(true)}
  if(e.target.closest('.pcar a[href="#"]'))e.preventDefault()});

/* ---- after every render: the mini bag ---- */
const oRender=window.render;
window.render=function(){oRender.apply(this,arguments);
  mountBag(PC.view==='bag'&&PC.bagOpen!==false)};
})();
