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
.pi-hp{margin-top:var(--gap-6,24px)}
.pcar--look[data-pl="look"] .pcar-track>*{cursor:pointer}
.pi-mb{position:fixed;inset:0;z-index:80;display:flex;align-items:flex-end;justify-content:center}
@media(min-width:1024px){.pi-mb{justify-content:flex-end;align-items:stretch}}
.pi-mb>.mdl{z-index:3}
.pi-mb .mdl--up{max-height:calc(100% - 56px);overflow:hidden}
.pi-mb .pi-btns{display:flex;flex-direction:column;gap:var(--gap-2,8px)}.pi-mb .pi-btns .bd,.pi-mb .pi-btns .pay{width:100%}
.pi-mb .pi-items{display:flex;flex-direction:column;gap:var(--gap-2,8px)}.pi-more{font-size:12px;line-height:15px;color:var(--text-secondary)}
.pi-save{display:flex;flex-direction:column;gap:var(--gap-4,16px)}.pi-save h3{margin:0;font-size:18px;line-height:22px;font-weight:var(--w-strong)}.pi-save p{margin:0;font-size:14px;line-height:20px}.pi-save .bd{width:100%}
.pi-save .pi-legal{font-size:12px;line-height:16px;color:var(--text-secondary)}.pi-save .pi-legal a{color:inherit}
.pi-toast{z-index:90}
.pi-mb2{z-index:95}@media(min-width:1024px){.pi-mb2{justify-content:center;align-items:center}}
#pimb .pc .pc-iconbtn--sq{border-radius:var(--radius-default)!important} /* the Shopping agent page forces .pc .pc-iconbtn round (!important); put the DS square back */
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
const items=(o,list)=>list.map(i=>{const x=DG_feedItem(BR(),i);if(x&&o.sp&&o.sp(i))x.sponsored=true;if(x&&o.qa&&ADDED.includes(i)){x.added=true;if(i===JUST)x.pop=true}return x}).filter(Boolean);
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
  const bnpl=x.querySelector('.buy .sns')||x.querySelector('.buy .bnpl')||x.querySelector('.bnpl');   /* under BNPL + Subscribe & Save */
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

/* ---- MINI BAG (after Add to Bag) — versions (PC.mbType), every one from DS parts:
        live  · DS modal (slide up mobile .mdl--up, drawer desktop .mdl--side) — the added item, Continue Shopping / View Bag; no recommendations (as live)
        look  · DS modal (slide up mobile .mdl--up, drawer desktop .mdl--side) — the added item(s) (bag line items), Continue Shopping / View Bag, then
                Complete The Look as the carousel with the mini quick add (.pc-qa): first two Sponsored on Debenhams; Add puts the product in the bag and its
                line item into the modal
        save  · the same modal, then a divider and Save your bag (DS text field + checkbox row + secondary button) — no box
        toast · no modal: the DS product toast (.toast--top .toast--prod), 6s
        Free delivery banner (PC.thresh): the DS threshold (.thresh) under the line items, in the modal versions — fills as items are added ---- */
/* the bag CTA (PC.cta): View Bag → the bag · Checkout → straight to checkout (the Checkout 2026 prototype); PC.applePay adds the DS Apple Pay button under it */
const CHECKOUT='https://jakerayner96.github.io/checkout-2026-promo-gift-card/checkout-gift-card.html';
const CTA=()=>PC.cta==='checkout'?'Checkout':'View Bag';
const ctas=()=>`<button class="bd pri" data-mbgo>${CTA()}</button>${PC.applePay?'<button class="pay pay--apple" data-mbgo="pay" aria-label="Apple Pay"><img src="assets/ds/icons/payments/applepay-onblack.svg" alt="Apple Pay"></button>':''}`;
const MBT=()=>PC.mbType||'live',THRESH=100,ADDED=[];let SAVED=null,JUST=null;   /* JUST = the item quick-added on this render: its line item drops in, its button pops */
const num=s=>parseFloat(String(s).replace(/[^0-9.]/g,''))||0;
function mainItem(){const DP=PDPP(),p=DP?{brand:DP.brand,name:DP.name,price:DP.price,was:DP.was,colour:DP.colour}:PR()[1]||{};
  const sz=(document.querySelector('.sz.on')||{}).textContent,cm=((document.querySelector('.buy')||{}).innerText||'').match(/Colou?r:\s*([^\n]+)/);
  return Object.assign({},p,{img:DP?DP.imgs[0]:IMG(1),size:sz&&sz.trim()||'12',colour:p.colour||(cm&&cm[1].trim())||''})}
function bagItems(){return [mainItem()].concat(ADDED.map(i=>{const x=DG_feedItem(BR(),i);return x&&Object.assign({size:'One Size',colour:x.swatches?x.swatches[0].name:''},x)}).filter(Boolean))}
/* the line item: Live = the live card (DS .bag-item, 99 × 148); the new versions = the mini bag card (DS .bag-item--mini, Bag 2026): brand - name · size / colour · price */
const oldItem=p=>`<div class="bag-item"><img src="${p.img}" alt=""><div class="info"><div class="b">${esc(p.brand||BN())}</div><div class="n">${esc(p.name)}</div><div class="v">${esc(/one size/i.test(p.size||'')?'One size':'Size '+p.size)} · Qty 1</div><div class="p">${p.was?`<span class="sale">${esc(p.price)}</span><s>${esc(p.was)}</s>`:esc(p.price)}</div></div></div>`;
const lineItem=p=>MBT()==='live'?oldItem(p):`<div class="bag-item bag-item--mini${p.i!=null&&p.i===JUST?' bag-item--in':''}"><img src="${p.img}" alt=""><div class="info"><div class="t"><b>${esc(p.brand||BN())}</b> - ${esc(p.name)}</div><div class="v">${esc([p.size,p.colour].filter(Boolean).join(' / '))}</div><div class="p">${p.was?`<span class="sale">${esc(p.price)}</span><s>${esc(p.was)}</s>`:esc(p.price)}</div></div></div>`;
function thresh(){if(PC.thresh===false)return '';const t=bagItems().reduce((a,p)=>a+num(p.price),0);
  const bx=MBT()==='live'?'':' thresh--box';   /* the new versions: in the DS container so it stands out */
  if(t>=THRESH)return `<div class="thresh thresh--ok${bx}"><span class="tick"></span><span>You’ve qualified for free delivery</span></div>`;
  return `<div class="thresh${bx}"><span>Spend <b>£${(THRESH-t).toFixed(2)}</b> more for free delivery</span><div class="track"><div class="fill" style="width:${Math.round(t/THRESH*100)}%"></div></div></div>`}
function saveBag(inModal){if(SAVED)return `<div class="thresh thresh--ok"><span class="tick"></span><span>Bag saved. We’ll email <b>${esc(SAVED)}</b> about your bag — you’re signed up for ${esc(BN())} emails, unsubscribe any time.</span></div>`;
  return `<section class="pi-save">${inModal?'':'<h3>Not ready yet? Save your bag</h3>'}<p>Leave your email and we’ll remind you about the items in your bag.</p>
    <label class="fld"><input type="email" placeholder=" " autocomplete="email" data-mbmail><span class="lbl">Email address</span></label>
    <div class="chk-row"><button type="button" class="chk" aria-checked="false" data-mbopt aria-label="Email me about my bag"></button><span>Email me about my bag, plus offers, new arrivals and style picks from ${esc(BN())}. I can unsubscribe at any time.</span></div>
    <button type="button" class="bd sec" disabled data-mbsave>Email My Bag</button>
    <p class="pi-legal">Tick the box to save your bag. Bag reminders are marketing emails, so we need your consent to send them. See our <a href="#">Privacy Policy</a>.</p></section>`}
function miniBag(){const d=desk(),t=MBT();
  const list=ids('atb',4,10).filter(i=>i!==1);   /* Debenhams: the first two slots are Mirakl sponsored (labelled), then Bloomreach “also bought” */
  /* Complete the look rail (panel): title editable / off (PC.ctlTitle, PC.ctlTitleOn) · card copy 12 or 14 (PC.ctlText) · cards one fixed width, sized to fit (autoFit) */
  const o={id:'atb',size:'sm',title:PC.ctlTitleOn===false?'':(PC.ctlTitle||'Complete The Look'),per:4,card:100,fixed:true,compact:PC.ctlText!=='14',start:4,list,qa:true,sp:BR()==='debenhams'&&PC.sponsored!==false?(i=>list.indexOf(i)<2):null};
  const rail=pcar(o);
  /* order: Live as live (item · threshold · Continue Shopping / View Bag); the new versions lead with the threshold, then the item(s), then their extra */
  /* Complete the look keeps to one view: the item you came for + the one just added (it drops in); earlier adds fold into “+N more in your bag” */
  const all=bagItems(),shown=t==='look'&&all.length>2?[all[0],all[all.length-1]]:all,more=all.length-shown.length;
  const items=`<div class="pi-items">${shown.map(lineItem).join('')}${more?`<div class="pi-more">+${more} more in your bag</div>`:''}</div>`,vb=ctas();
  const body=t==='live'?items+thresh()+`<div class="pi-btns"><button class="bd sec" data-mbx>Continue Shopping</button>${vb}</div>`
    :t==='look'?thresh()+items+rail+(PIN()?'':`<div class="pi-btns">${vb}</div>`)
    :t==='save'?thresh()+items+`<div class="pi-btns">${vb}</div><div class="hr"></div>${saveBag()}`
    :thresh()+items+`<div class="pi-btns">${vb}${SAVED?'':'<button class="bd sec" data-mblater>Save for later</button>'}</div>${SAVED?saveBag():''}`;
  return `<div class="pi-mb" id="pimb"><div class="mdl-scrim" data-mbx></div>
  <div class="mdl ${d?'mdl--side mdl-anim-side':'mdl--up mdl-anim-up'}" role="dialog" aria-modal="true" aria-label="Added to bag">
    <div class="modal-hd"><div class="mt"><span>Added to Bag</span></div><button class="modal-x" aria-label="Close" data-mbx></button></div>
    <div class="mdl-bd">${body}</div>${t==='look'&&PIN()?`<div class="mdl-ft mdl-ft--pinned pi-btns">${vb}</div>`:''}</div></div>`}
/* fit (PC.ctlFit): scale = shrink the rail cards until nothing scrolls · pin = CTAs pinned to the foot, the body scrolls · both */
const FIT=()=>PC.ctlFit||'scale',PIN=()=>FIT()!=='scale';
function autoFit(n){if(MBT()!=='look'||FIT()==='pin')return;const bd=n.querySelector('.mdl-bd'),rail=n.querySelector('[data-pl="atb"]');if(!bd||!rail)return;
  /* scale the rail's cards (image + copy together, so nothing re-wraps) by exactly the overflow; the first card stays on the 24px margin */
  const body=rail.querySelector('.pcar-body'),pad=24;let z=1;body.style.zoom='';body.style.removeProperty('--pcar-pad');
  for(let k=0;k<6;k++){const over=bd.scrollHeight-bd.clientHeight;if(over<=0)break;const h=body.getBoundingClientRect().height;z=Math.max(.4,z*(h-over-3)/h);
    body.style.zoom=z;body.style.setProperty('--pcar-pad',(pad/z)+'px');if(z===.4)break}}
/* Save for later: a second modal over the mini bag with the email capture (Small on desktop, slide up on mobile) */
function laterModal(){const d=desk();return `<div class="pi-mb pi-mb2" id="pimb2"><div class="mdl-scrim" data-mb2x></div>
  <div class="mdl ${d?'mdl--sm mdl-anim-fade':'mdl--up mdl-anim-up'}" role="dialog" aria-modal="true" aria-label="Save your bag">
    <div class="modal-hd"><div class="mt"><span>Save your bag</span></div><button class="modal-x" aria-label="Close" data-mb2x></button></div>
    <div class="mdl-bd">${saveBag(true)}</div></div></div>`}
function toast(){const p=mainItem(),ts=PC.toastStyle==='edge'?'edge':'square';return `<div class="toast toast--top toast--prod${ts==='edge'?' toast--edge':''} pi-toast" id="pitoast" role="status"><img class="toast-img" src="${p.img}" alt=""><span class="toast-tx">Added to Bag</span><button class="act" type="button" data-mbgo>${CTA()}</button>${EXPORTING?'':'<i class="toast-timer"></i>'}</div>`}
let TT=0;
function mountBag(open,instant){const old=document.getElementById('pimb'),ot=document.getElementById('pitoast');clearTimeout(TT);
  if(ot)ot.remove();
  if(!open){document.documentElement.classList.remove('pi-lock');const m2=document.getElementById('pimb2');if(m2)m2.remove();
    if(old&&!instant&&!EXPORTING){const m=old.querySelector('.mdl'),sc=old.querySelector('.mdl-scrim');old.id='';old.style.pointerEvents='none';   /* leave the way it came: drawer out right, slide up down; scrim fades */
      m.classList.remove('mdl-anim-up','mdl-anim-side');m.classList.add(m.classList.contains('mdl--side')?'mdl-anim-side-out':'mdl-anim-down');if(sc)sc.classList.add('mdl-scrim--out');setTimeout(()=>old.remove(),320)}
    else if(old)old.remove();return}
  const keep=old&&old.querySelector('.pcar-track')?old.querySelector('.pcar-track').scrollLeft:0,bs=old?old.querySelector('.mdl-bd').scrollTop:0;
  if(old)old.remove();
  if(MBT()==='toast'){document.documentElement.classList.remove('pi-lock');document.body.insertAdjacentHTML('beforeend',toast());
    const tt=document.getElementById('pitoast');if(desk()){const rows=[...document.querySelectorAll('.usp-row1')].map(r=>r.getBoundingClientRect().bottom).filter(y=>y>0),hb=(document.querySelector('#hdrwrap,header.hd')||{getBoundingClientRect:()=>({bottom:0})}).getBoundingClientRect().bottom;
      tt.style.setProperty('--toast-top',Math.max(16,...rows,hb)+16+'px')}   /* centred under the USP banners (or the sticky bar once scrolled) */
    if(!EXPORTING)TT=setTimeout(()=>{const x=document.getElementById('pitoast');if(x){x.classList.add('toast--out');setTimeout(()=>x.remove(),300)}PC.bagOpen=false},6000);return}
  document.documentElement.classList.add('pi-lock');document.body.insertAdjacentHTML('beforeend',miniBag());
  const n=document.getElementById('pimb');autoFit(n);if(old){n.querySelector('.mdl').classList.remove('mdl-anim-up','mdl-anim-side');n.querySelector('.mdl-scrim').style.animation='none';const tr=n.querySelector('.pcar-track');if(tr)tr.scrollLeft=keep;n.querySelector('.mdl-bd').scrollTop=bs}}
document.addEventListener('click',e=>{
  const lk=e.target.closest('.pcar--look[data-pl="look"]');if(lk&&!e.target.closest('.pcar-arr')){e.preventDefault();const c=e.target.closest('.pcar-track>*'),L=FEEDS.look,idx=c?[...c.parentNode.children].indexOf(c):-1;openPicker(L&&idx>=0?ids('look',L.start||0,10)[idx]:null);return}
  const qa=e.target.closest('#pimb [data-qa]');if(qa){e.preventDefault();const i=+qa.dataset.qa;if(!ADDED.includes(i)){ADDED.push(i);JUST=i}mountBag(true);JUST=null;return}
  const later=e.target.closest('#pimb [data-mblater]');if(later){e.preventDefault();document.body.insertAdjacentHTML('beforeend',laterModal());return}
  if(e.target.closest('[data-mb2x]')){e.preventDefault();const m=document.getElementById('pimb2');if(m){const w=m.querySelector('.mdl');m.style.pointerEvents='none';w.classList.remove('mdl-anim-up','mdl-anim-fade');w.classList.add(w.classList.contains('mdl--up')?'mdl-anim-down':'mdl-anim-fade-out');m.querySelector('.mdl-scrim').classList.add('mdl-scrim--out');setTimeout(()=>m.remove(),320)}return}
  const go=e.target.closest('[data-mbgo]');if(go){e.preventDefault();
    if(go.dataset.mbgo==='pay'||PC.cta==='checkout'){location.href=CHECKOUT+'?brand='+BR();return}
    PC.bagOpen=false;mountBag(false,true);PC.view='bag';S.page='bag';S.search=false;render();scrollTo(0,0);parent.postMessage({protoNav:{view:'bag'}},'*');return}
  const opt=e.target.closest('.pi-mb [data-mbopt]');if(opt){e.preventDefault();const on=opt.getAttribute('aria-checked')!=='true';opt.setAttribute('aria-checked',on);opt.classList.toggle('on',on);opt.closest('.pi-mb').querySelector('[data-mbsave]').disabled=!on;return}
  const sv=e.target.closest('.pi-mb [data-mbsave]');if(sv){e.preventDefault();const f=sv.closest('.pi-mb').querySelector('[data-mbmail]'),v=(f.value||'').trim(),fl=f.closest('.fld');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)){fl.classList.add('invalid');if(!fl.nextElementSibling||!fl.nextElementSibling.classList.contains('fld-err'))fl.insertAdjacentHTML('afterend','<div class="fld-err">Enter an email address like name@example.com</div>');f.focus();return}
    SAVED=v;const m2=document.getElementById('pimb2');if(m2)m2.remove();mountBag(true);return}
  if(e.target.closest('[data-mbx]')){e.preventDefault();PC.bagOpen=false;mountBag(false);return}
  if(S.page==='pdp'&&e.target.closest('.ctas .bd.pri')){e.preventDefault();PC.bagOpen=true;mountBag(true)}
  if(e.target.closest('.pcar a[href="#"]'))e.preventDefault()});

/* ---- BAG page: You Might Also Like under the line items (as templates/bag.html) ---- */
const oBag=PAGES.bag;
PAGES.bag=function(){const h=oBag();return h.replace(/<\/main>/,`<div class="pi-full pi-recs">${pcar({id:'bagrec',size:'md',full:1,title:'You Might Also Like',start:5})}</div></main>`)};

/* ---- after every render: the mini bag ---- */
const oRender=window.render;
window.render=function(){oRender.apply(this,arguments);
  mountBag(PC.view==='minibag'&&PC.bagOpen!==false)};
})();
