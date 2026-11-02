/* Product carousel · in situ — runs inside the Shopping agent page (projects/shopping-agent/page.html, the latest home / PDP / search),
   loaded by projects/product-carousel/page.html. It only swaps that page's product rails for the DS Product carousel (.pcar + carousel.js,
   proposed changes in ds-next.css) and adds the mini bag. Nothing here restyles a DS class; the .pi-* rules are page scaffolding.
   Views (PC.view): home (feature carousel with title + subtitle + tabs, Top Sellers) · pdp (Create the Look + recommendations) ·
   search (search open: Recently Viewed / Products matching as rails, the overlay width on desktop) · bag (PDP + the mini bag after Add to Bag). */
(function(){
const PC=window.PC_STATE;
const st=document.createElement('style');st.textContent=`
.pi-mod{padding:var(--gap-8,32px) var(--gap-4,16px)}@media(min-width:1024px){.pi-mod{padding:var(--gap-12,48px) var(--gap-10,40px);max-width:1440px;margin:0 auto}}
.pi-recs{display:flex;flex-direction:column;gap:var(--gap-10,40px);padding:var(--gap-10,40px) 0}
.pi-mb{position:fixed;inset:0;z-index:80;display:flex;align-items:flex-end;justify-content:center}
@media(min-width:1024px){.pi-mb{justify-content:flex-end;align-items:stretch}}
.pi-mb>.mdl{z-index:3}
.pi-mb .mdl--up{max-height:calc(100% - 56px);overflow:hidden}.pi-mb .mdl--up .mdl-bd{overflow-y:auto;margin:0 -24px;padding:0 24px}
.pi-mb .pi-btns{display:flex;flex-direction:column;gap:var(--gap-2,8px)}.pi-mb .pi-btns .bd{width:100%}
html.pi-lock,html.pi-lock body{overflow:hidden;height:100%}`;
document.head.appendChild(st);

const NOBRAND=['plt','warehouse'];
const TABS={debenhams:['Fashion','Home','Beauty'],boohoo:['Women','Men','Beauty'],boohooman:['New In','Hoodies','Jackets'],plt:['New In','Dresses','Shoes'],karenmillen:['Dresses','Coats','Tailoring'],warehouse:['Dresses','Knitwear','Denim'],brandroom:['Women','Men','Accessories']};
const TAB={};
const n=()=>PR().length||1;
/* a feed per rail: a fixed start + 4 per tab, wrapping the fascia's product set */
const FEEDS={};
function ids(id,start,len){const off=start+(TAB[id]||0)*4;return Array.from({length:len},(_,k)=>(off+k*3)%n())}
/* DS product card for a rail: image · (Sponsored) · brand · name · rail price. Look = image only. No wishlist on rail cards. */
function pc(i,o){const p=PR()[i];if(!p)return'';
  const img=`<div class="pc-img"><img class="ph" src="${IMG(i)}" alt="${esc((p.brand?p.brand+' ':'')+p.name)}" loading="${EXPORTING?'eager':'lazy'}"></div>`;
  if(o.look)return `<article class="pc">${img}</article>`;
  return `<article class="pc">${img}<div class="pc-info">${o.sp&&o.sp(i)?'<div class="pc-sponsored">Sponsored</div>':''}<div class="pc-toprow"><div class="pc-titles">${p.brand&&!NOBRAND.includes(BR())?`<div class="pc-brand">${esc(p.brand)}</div>`:''}<div class="pc-name">${esc(p.name)}</div></div></div>
    <div class="price-blk price-blk--rail"><div class="price"><span class="now${p.was?' sale':''}">${esc(p.price)}</span>${p.was?`<span class="was">${esc(p.was)}</span>`:''}</div></div></div></article>`}
/* the component — markup per the DS catalogue entry 'product-carousel' */
function pcar(o){FEEDS[o.id]=o;const grid=o.fmt==='grid',per=o.per||5,len=grid?(desk()?per*2:6):10,list=o.list||ids(o.id,o.start||0,len);
  const cls=['pcar','pcar--'+(o.size||'md'),grid&&'pcar--grid',o.look&&'pcar--look',o.bleed!==false&&'pcar--bleed',!PC.arrows&&'pcar--no-arr'].filter(Boolean).join(' ');
  const tabs=o.tabs&&o.tabs.length?o.tabs:null,hd=o.title||o.sub||tabs||o.all;
  return `<section class="${cls}" style="--pcar-per:${per}" data-pl="${o.id}">
  ${hd?`<header class="pcar-hd">${o.title||o.sub?`<div class="pcar-tt">${o.title?`<h2 class="pcar-t">${esc(o.title)}</h2>`:''}${o.sub?`<p class="pcar-sub">${esc(o.sub)}</p>`:''}</div>`:''}
    ${tabs?`<div class="pcar-tabs">${tabs.map((t,i)=>`<button class="chip${i===(TAB[o.id]||0)?' on':''}">${esc(t)}</button>`).join('')}</div>`:''}${o.all?'<a class="pcar-all" href="#">View all</a>':''}</header>`:''}
  <div class="pcar-body">${grid?'':'<button class="pcar-arr pcar-arr--prev" disabled></button>'}<div class="pcar-track">${list.map(i=>pc(i,o)).join('')}</div>${grid?'':'<button class="pcar-arr pcar-arr--next"></button>'}</div></section>`}
document.addEventListener('pcar:tab',e=>{const el=e.target,o=FEEDS[el.dataset.pl];if(!o)return;TAB[o.id]=e.detail.index;delete o.list;
  const grid=o.fmt==='grid',len=grid?(desk()?(o.per||5)*2:6):10;el.querySelector('.pcar-track').innerHTML=ids(o.id,o.start||0,len).map(i=>pc(i,o)).join('')});

/* ---- HOME: every products module in the live home becomes the carousel (title · subtitle · tabs, large header);
        fascias whose home has none (Debenhams, boohoo, MAN) get one after the second module. Top Sellers further down. ---- */
const oHome=PAGES.home;
PAGES.home=function(){const doc=new DOMParser().parseFromString(oHome(),'text/html'),hm=doc.querySelector('.hm');if(!hm)return oHome();
  const mods=((window.HOME_LIVE||{})[BR()]||[]).map(x=>x[desk()?'d':'m']).filter(o=>o&&o.t==='products');
  const box=h=>{const d=doc.createElement('div');d.className='pi-mod';d.innerHTML=h;return d};
  const feat=k=>{const o=mods[k]||{};return pcar({id:'home'+k,size:'lg',title:o.title||'Transition Between Seasons',sub:o.sub||'Get ready for cosier days with our easy autumn upgrades',tabs:o.tabs||TABS[BR()],start:k*5})};
  const ps=[...hm.querySelectorAll(':scope>.hm-p')];
  if(ps.length)ps.forEach((el,k)=>el.replaceWith(box(feat(k))));
  else{const at=hm.children[Math.min(1,hm.children.length-1)];at&&at.after(box(feat(0)))}
  const kids=[...hm.children],at2=kids[Math.min(kids.length-1,5)];
  at2&&at2.after(box(pcar({id:'homeTop',size:'md',title:'Top Sellers',start:7})));
  return hm.outerHTML};

/* ---- PDP: Create the Look (grey panel, image only), then the recommendations (carousel or grid) under the PDP ---- */
const oPdp=PAGES.pdp;
PAGES.pdp=function(){const h=oPdp(),i=h.lastIndexOf('</div>');
  const recs=`<div class="pi-recs">${PC.look!==false?pcar({id:'look',size:'md',look:true,title:'Create The Look',start:9}):''}
    ${pcar({id:'recs',size:'md',fmt:PC.recsFmt==='grid'?'grid':'carousel',title:'Why Not Treat Yourself?',start:3})}
    ${pcar({id:'recent',size:'md',title:'Recently Viewed',start:12})}</div>`;
  return h.slice(0,i)+recs+h.slice(i)};

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
  const o={id:'atb',size:'sm',title:'Complete The Look',per:3,bleed:!d,start:4,list,sp:BR()==='debenhams'&&PC.sponsored!==false?(i=>list.indexOf(i)<2):null};
  return `<div class="pi-mb" id="pimb"><div class="mdl-scrim" data-mbx></div>
  <div class="mdl ${d?'mdl--side mdl-anim-side':'mdl--up mdl-anim-up'}" role="dialog" aria-modal="true" aria-label="Added to bag">
    <div class="modal-hd"><div class="mt"><span class="mdl-tick" aria-hidden="true"></span><span>Added to Bag</span></div><button class="modal-x" aria-label="Close" data-mbx></button></div>
    <div class="mdl-bd"><div class="bag-item"><img src="${img}" alt=""><div class="info">${p.brand&&!NOBRAND.includes(BR())?`<div class="b">${esc(p.brand)}</div>`:''}<div class="n">${esc(p.name)}</div><div class="v">Size 12 · Qty 1</div><div class="p">${p.was?`<span class="sale">${esc(p.price)}</span><s>${esc(p.was)}</s>`:esc(p.price)}</div></div></div>
      <div class="pi-btns"><button class="bd sec" data-mbx>Continue Shopping</button><button class="bd pri">View Bag</button></div>
      ${pcar(o)}</div></div></div>`}
function mountBag(open){const old=document.getElementById('pimb');if(old)old.remove();document.documentElement.classList.toggle('pi-lock',!!open);
  if(open)document.body.insertAdjacentHTML('beforeend',miniBag())}
document.addEventListener('click',e=>{
  if(e.target.closest('[data-mbx]')){e.preventDefault();PC.bagOpen=false;mountBag(false);return}
  if(S.page==='pdp'&&e.target.closest('.ctas .bd.pri')){e.preventDefault();PC.bagOpen=true;mountBag(true)}
  if(e.target.closest('.pcar a[href="#"]'))e.preventDefault()});

/* ---- after every render: chevrons / gap, the mini bag ---- */
const oRender=window.render;
window.render=function(){oRender.apply(this,arguments);
  const rs=document.documentElement.style;if(PC.gap==='fascia'||!PC.gap){rs.removeProperty('--pcar-gap-x');rs.removeProperty('--pcar-info-x')}else{rs.setProperty('--pcar-gap-x',PC.gap+'px');rs.setProperty('--pcar-info-x',PC.gap==='0'?'4px':'0px')}
  mountBag(PC.view==='bag'&&PC.bagOpen!==false)};
})();
