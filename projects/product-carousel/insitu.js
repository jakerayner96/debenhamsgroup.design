/* Product carousel · in situ — runs inside the Shopping agent page (projects/shopping-agent/page.html, the latest home / PDP / search),
   loaded by projects/product-carousel/page.html. It only swaps that page's product rails for the DS Product carousel (.pcar + carousel.js,
   proposed changes in ds-next.css) and adds the mini bag. Nothing here restyles a DS class; the .pi-* rules are page scaffolding.
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
.pi-ctl{z-index:90}.pi-ctl .head .modal-x{height:16px}.pi-ctl .foot .bd{width:100%}.pi-ctl .body{gap:var(--gap-8,32px);overflow-x:hidden}.pi-ctl .pcar--bleed{--pcar-pad:24px;margin-inline:-24px}
.pi-mb{position:fixed;inset:0;z-index:80;display:flex;align-items:flex-end;justify-content:center}
@media(min-width:1024px){.pi-mb{justify-content:flex-end;align-items:stretch}}
.pi-mb>.mdl{z-index:3}
.pi-mb .mdl--up{max-height:calc(100% - 56px);overflow:hidden}.pi-mb .mdl--up .mdl-bd{overflow-y:auto;margin:0 -24px;padding:0 24px}
.pi-mb .pi-btns{display:flex;flex-direction:column;gap:var(--gap-2,8px)}.pi-mb .pi-btns .bd{width:100%}
html.pi-lock,html.pi-lock body{overflow:hidden;height:100%}`;
document.head.appendChild(st);

const TABS={debenhams:['Fashion','Home','Beauty'],boohoo:['Women','Men','Beauty'],boohooman:['New In','Hoodies','Jackets'],plt:['New In','Dresses','Shoes'],karenmillen:['Dresses','Coats','Tailoring'],warehouse:['Dresses','Knitwear','Denim'],brandroom:['Women','Men','Accessories']};
const TAB={};
const n=()=>PR().length||1;
/* a feed per rail: a fixed start + 4 per tab, wrapping the fascia's product set */
const FEEDS={};
function ids(id,start,len){const off=start+(TAB[id]||0)*4;return Array.from({length:len},(_,k)=>(off+k*3)%n())}
/* DS product card for a rail: image · (Sponsored) · brand · name · rail price. Look = image only. No wishlist on rail cards. */
/* every rail card follows the DS product card: (Sponsored) · brand (always — the feed's, else the brand that opens the name, else the fascia) ·
   name (2 lines) · price (now · was · -X%) · colour swatches when the product comes in more than one colour */
const BRANDS=/^(boohooMAN|boohoo|Wallis|Coast|Burton|Oasis|Warehouse|Dorothy Perkins|Karen Millen|PrettyLittleThing|Debenhams)\b\s*/i;
function brandOf(p){let b=p.brand,n=p.name||'';const m=n.match(BRANDS);
  if(!b&&m){b=m[1];n=n.slice(m[0].length)}else if(b&&n.toLowerCase().startsWith(b.toLowerCase()+' '))n=n.slice(b.length+1);
  return [b||BN(),n]}
const SWP=['#1F1F1F','#C9C9C9','#B4A67A','#2F4A7A','#B97A57','#6E8B6B','#D9B8C4','#FFFFFF','#8FA3B8'];
const nSw=i=>i%4===1?3:i%5===2?2:i%7===3?5:0;   /* sample feed: some products come in several colours, most in one (as live) */
function swatches(i){const k=nSw(i);if(!k)return'';const cs=Array.from({length:k},(_,j)=>SWP[(i+j*2)%SWP.length]),show=cs.slice(0,4);
  return `<div class="pc-swatches${BR()==='plt'?' pc-swatches--round':''}"><span class="set">${show.map((c,j)=>`<span class="pc-swatch${j?'':' on'}"><i style="background:${c}"></i></span>`).join('')}</span>${k>4?`<span class="pc-more">+${k-4}</span>`:''}</div>`}
function info(i,o){const p=PR()[i],[b,n]=brandOf(p),pct=p.was&&p.pct?String(p.pct).replace(/[^0-9]/g,''):'';
  return `<div class="pc-info">${o.sp&&o.sp(i)?'<div class="pc-sponsored">Sponsored</div>':''}<div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">${esc(b)}</div><div class="pc-name">${esc(n)}</div></div></div>
    <div class="price-blk price-blk--rail"><div class="price"><span class="now${p.was?' sale':''}">${esc(p.price)}</span>${p.was?`<span class="was">${esc(p.was)}</span>`:''}${pct?`<span class="save" data-pct="${pct}"></span>`:''}</div></div>${swatches(i)}</div>`}
function pc(i,o){const p=PR()[i];if(!p)return'';
  const img=`<div class="pc-img"><img class="ph" src="${IMG(i)}" alt="${esc(brandOf(p).join(' '))}" loading="${EXPORTING?'eager':'lazy'}"></div>`;
  if(o.look)return `<article class="pc">${img}</article>`;
  return `<article class="pc">${img}${info(i,o)}</article>`}
/* the component — markup per the DS catalogue entry 'product-carousel' */
function pcar(o){FEEDS[o.id]=o;const grid=o.fmt==='grid',per=o.per||5,len=o.len||(grid?(desk()?per*2:6):10),list=o.list||ids(o.id,o.start||0,len);
  const cls=['pcar','pcar--'+(o.size||'md'),grid&&'pcar--grid',o.look&&'pcar--look',o.full&&'pcar--full',o.bleed!==false&&'pcar--bleed',!PC.arrows&&'pcar--no-arr'].filter(Boolean).join(' ');
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

/* ---- CREATE THE LOOK PICKER (the "slot machine"): a tap anywhere on Create the Look opens it. DS sheet (.sheet: slide up on mobile, centred 480 on
        desktop) with one reel per category — a small-header carousel of pickable cards (.pc--pick + DS checkbox .chk, proposed) — and
        Add to bag (n) in the foot, which hands over to the mini bag. ---- */
const REELS=[['Tops',/top|shirt|jumper|blouse|hoodie|knit|polo|henley|cardigan|tee|jacket|coat|blazer|bomber/i],['Bottoms',/trouser|jean|jogger|skirt|short|jort|legging/i],
  ['Dresses',/dress/i],['Shoes & accessories',/boot|shoe|heel|trainer|sandal|wellies|bag|earring|necklace|belt|scarf|hardware|parfum|edp|toilette|gift set|wreath|diffuser|throw/i]];
let PICK={};
function reels(){const all=PR().map((p,i)=>[p,i]),used=new Set();
  let rs=REELS.map(([l,re])=>{const it=all.filter(([p,i])=>re.test(p.name)&&!used.has(i)).slice(0,10).map(([p,i])=>(used.add(i),i));return {l,it}}).filter(r=>r.it.length>=3).slice(0,3);
  if(rs.length<3){const rest=all.map(x=>x[1]).filter(i=>!used.has(i));['More to pair','Finishing touches','You might like'].slice(0,3-rs.length).forEach((l,k)=>rs.push({l,it:rest.slice(k*8,k*8+8)}))}
  return rs}
function picker(){const rs=reels(),n=Object.keys(PICK).length,num=s=>parseFloat(String(s).replace(/[^0-9.]/g,''))||0;
  const tot=Object.keys(PICK).reduce((a,i)=>a+num((PR()[i]||{}).price),0);
  const card=i=>{const p=PR()[i];if(!p)return'';const on=!!PICK[i];
    return `<article class="pc pc--pick${on?' on':''}" data-pick="${i}"><div class="pc-img"><img class="ph" src="${IMG(i)}" alt="${esc(p.name)}"><button class="chk${on?' on':''}" aria-label="${on?'Remove':'Add'} ${esc(p.name)}" aria-checked="${on}"></button></div>
      ${info(i,{})}</article>`};
  return `<div class="sheet pi-ctl" id="pictl"><div class="scrim" data-ctlx></div><div class="panel" role="dialog" aria-modal="true" aria-label="Create The Look">
    <div class="head"><h2>Create The Look</h2><button class="modal-x" aria-label="Close" data-ctlx></button></div>
    <div class="body">${rs.map((r,k)=>`<section class="pcar pcar--sm pcar--bleed${PC.arrows?'':' pcar--no-arr'}" style="--pcar-per:3;--pcar-card:140px"><header class="pcar-hd"><div class="pcar-tt"><h2 class="pcar-t">${esc(r.l)}</h2></div></header>
      <div class="pcar-body"><button class="pcar-arr pcar-arr--prev" disabled></button><div class="pcar-track">${r.it.map(card).join('')}</div><button class="pcar-arr pcar-arr--next"></button></div></section>`).join('')}</div>
    <div class="foot"><div class="tot"><span>${n} item${n===1?'':'s'}</span><span>£${tot.toFixed(2)}</span></div><button class="bd pri"${n?'':' disabled'} data-ctladd>Add to bag (${n})</button></div></div></div>`}
function mountPicker(open){const old=document.getElementById('pictl'),keep=old?[...old.querySelectorAll('.pcar-track')].map(t=>t.scrollLeft):null,bs=old?old.querySelector('.body').scrollTop:0;
  if(old)old.remove();document.documentElement.classList.toggle('pi-lock',!!open);if(!open)return;
  document.body.insertAdjacentHTML('beforeend',picker());const sh=document.getElementById('pictl');
  if(keep){sh.classList.add('open');sh.querySelectorAll('.pcar-track').forEach((t,k)=>t.scrollLeft=keep[k]||0);sh.querySelector('.body').scrollTop=bs}
  else requestAnimationFrame(()=>requestAnimationFrame(()=>sh.classList.add('open')))}
function openPicker(pre){PICK={};if(pre!=null)PICK[pre]=1;mountPicker(true)}

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
    <div class="mdl-bd"><div class="bag-item"><img src="${img}" alt=""><div class="info"><div class="b">${esc(p.brand||BN())}</div><div class="n">${esc(p.name)}</div><div class="v">Size 12 · Qty 1</div><div class="p">${p.was?`<span class="sale">${esc(p.price)}</span><s>${esc(p.was)}</s>`:esc(p.price)}</div></div></div>
      <div class="pi-btns"><button class="bd sec" data-mbx>Continue Shopping</button><button class="bd pri">View Bag</button></div>
      ${pcar(o)}</div></div></div>`}
function mountBag(open){const old=document.getElementById('pimb');if(old)old.remove();document.documentElement.classList.toggle('pi-lock',!!open);
  if(open)document.body.insertAdjacentHTML('beforeend',miniBag())}
document.addEventListener('click',e=>{
  const pk=e.target.closest('#pictl [data-pick]');if(pk){e.preventDefault();const i=+pk.dataset.pick;if(PICK[i])delete PICK[i];else PICK[i]=1;mountPicker(true);return}
  if(e.target.closest('[data-ctlx]')){e.preventDefault();const sh=document.getElementById('pictl');if(sh){sh.classList.remove('open');setTimeout(()=>mountPicker(false),300)}return}
  if(e.target.closest('[data-ctladd]')){e.preventDefault();mountPicker(false);PC.bagOpen=true;mountBag(true);return}
  const lk=e.target.closest('.pcar--look[data-pl="look"]');if(lk&&!e.target.closest('.pcar-arr')){e.preventDefault();const c=e.target.closest('.pcar-track>*'),L=FEEDS.look,idx=c?[...c.parentNode.children].indexOf(c):-1;openPicker(L&&idx>=0?ids('look',L.start||0,10)[idx]:null);return}
  if(e.target.closest('[data-mbx]')){e.preventDefault();PC.bagOpen=false;mountBag(false);return}
  if(S.page==='pdp'&&e.target.closest('.ctas .bd.pri')){e.preventDefault();PC.bagOpen=true;mountBag(true)}
  if(e.target.closest('.pcar a[href="#"]'))e.preventDefault()});

/* ---- after every render: the mini bag ---- */
const oRender=window.render;
window.render=function(){oRender.apply(this,arguments);
  mountBag(PC.view==='bag'&&PC.bagOpen!==false)};
})();
