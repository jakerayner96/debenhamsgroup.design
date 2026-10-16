/* DG Group Design System — Delivery grid (PDP "Delivery Methods" box) + Delivery options modal. Drop-in, 16 Oct 2026.
   Sources: live PDP Delivery Methods (Dynamo, the same methods checkout serves) · Demi Adesanya's tabbed mockup (Delivery / Click & Collect,
   checkout-style rows, Premier view) · Paul Dossis's modal, Figma Gifting PIh1ikzvYNH1FR4arKJbe4 · 209-294935 (Home Delivery) / 209-295333 (Collect Nearby)
   · Delivery Grid UX catch up 16 Oct 2026 (James's PR: badges + a third home row when two click & collects come back; bulky surcharge upfront).
   CSS: components.css "Delivery grid" block (.dgrid-*, .dopts-*). Markup only — no styles in here.

   Use:  DG_delivery.grid(o)  → the PDP box html      (o.layout 'list' live sentences · 'tabs' Demi · 'line' one-liner)
         DG_delivery.modal(o) → the modal layer html  (o.modal 'toggle' Paul's Figma · 'list' one sectioned list · 'tab' the tab you came from)
         DG_delivery.bulky()  → the surcharge caveat that sits under the price
         DG_delivery.wire(root, o, open) → tabs, See more (calls open(tab)), modal toggle (root = the document or element holding them)
         DG_delivery.mount(document, o) → wire + See more opens the modal over the page, X / scrim closes it (what templates/pdp.html uses)
   o: {layout, scen:'std'|'cc'|'market'|'bulky', premier, prog, pr, prBadge:'fastest'|'home', badges, tab, modal, ni:'split'|'mixed',
       sort:'price'|'speed', cut:'midnight'|'12am', more2:'hide'|'show', ret, retDays, pc, known, sheet:'alert'|'up', desk, today:Date} */
(function(root){
  const esc=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const IC='assets/ds/icons/lib/';
  /* methods as the Figma (Debenhams). d = days from today (1 = tomorrow), cut = next-day cut-off applies, ni = Northern Ireland, nom = nominated */
  const HOME=[
    {id:'ss',  n:'UK Super Saver Delivery',      s:'Super Saver Delivery', p:.99, was:2.99, d:6},
    {id:'std', n:'UK Standard Delivery',         s:'Standard Delivery',    p:3.99, d:4},
    {id:'exp', n:'UK Express Delivery',          s:'Express Delivery',     p:4.99, d:2},
    {id:'nd',  n:'UK Next Day Delivery',         s:'Next Day Delivery',    p:5.99, d:1, cut:1},
    {id:'dpd', n:'Premium DPD Next Day Delivery',s:'DPD Next Day',         p:6.90, d:1, cut:1},
    {id:'nom', n:'Nominated Delivery',           s:'Nominated Delivery',   p:6.99, from:1, nom:1},
    {id:'niss',n:'NI Super Saver Delivery',      s:'NI Super Saver',       p:.99, was:2.99, d:7, ni:1},
    {id:'nistd',n:'NI Standard Delivery',        s:'NI Standard',          p:6.99, d:5, ni:1}];
  const COLLECT=[
    {id:'inp', n:'24/7 InPost Locker | Shop Collect',          s:'24/7 InPost Locker or Shop', p:2.49, d:3, c:1},
    {id:'evs', n:'Evri ParcelShop Click & Collect - Standard', s:'Evri ParcelShop, Standard',  p:3.99, d:3, c:1},
    {id:'evn', n:'Evri ParcelShop Click & Collect - Next Day', s:'Evri ParcelShop, Next Day',  p:5.99, d:1, cut:1, c:1}];
  /* marketplace / bulky: two home methods only (live Coast examples, 16 Oct) */
  const MARKET=[{id:'mexp',n:'UK Express Delivery',s:'Express Delivery',p:4.99,d:2,cut:2},{id:'mstd',n:'UK Standard Delivery',s:'Standard Delivery',p:3.99,d:5}];
  const BULKY=[{id:'bexp',n:'UK Express Delivery',s:'Express Delivery',p:9.99,d:4,cut:2},{id:'bstd',n:'UK Standard Delivery',s:'Standard Delivery',p:4.99,d:7}];
  const BULKY_COPY='This is a bulky item, therefore delivery costs include a bulky item surcharge.';
  const FOOT='This product cannot be delivered to the Channel Islands, British Forces Post Office or PO Box addresses.';

  const ord=n=>n+(n%10===1&&n!==11?'st':n%10===2&&n!==12?'nd':n%10===3&&n!==13?'rd':'th');
  const MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const day=(o,d)=>{const t=new Date(o.today||Date.now());t.setDate(t.getDate()+d);return ord(t.getDate())+' '+MON[t.getMonth()]};
  const money=p=>p===0?'Free':p<1?Math.round(p*100)+'p':'£'+p.toFixed(2);
  const cutoff=(o,m)=>m.cut===2?(o.cut==='12am'?'Order by 11PM':'Order by 11pm'):m.cut?(o.cut==='12am'?'Order by 12AM':'Order by midnight'):'';

  /* the response for a scenario, in the order the API returns it. 'cc' = the live bug: collect comes back first and Super Saver isn't on */
  function methods(o){
    let home,collect;
    if(o.scen==='market'){home=MARKET;collect=[]}
    else if(o.scen==='bulky'){home=BULKY;collect=[]}
    else{home=HOME.map(m=>o.scen==='cc'&&m.was?Object.assign({},m,{p:m.was,was:0}):m);collect=COLLECT}
    const prem=m=>o.premier&&m.d===1?Object.assign({},m,{was:m.p,p:0,prem:1}):m;   /* Premier: next day (home + collect) free */
    home=home.map(prem);collect=collect.map(prem);
    return {home,collect,resp:o.scen==='cc'?collect.concat(home):home.concat(collect)};
  }
  const pdpPool=l=>l.filter(m=>!m.ni&&!m.nom);
  const fastest=l=>l.reduce((a,m)=>!a||m.d<a.d?m:a,null);                       /* ties: first in the response (the lottery) */
  const cheapest=l=>l.reduce((a,m)=>!a||m.p<a.p||(m.p===a.p&&m.d<a.d)?m:a,null);

  /* the rows the PDP box shows */
  function picks(o,list){const pool=pdpPool(list),f=fastest(pool),c=cheapest(pool),rows=[];
    if(f)rows.push({m:f,b:o.premier&&f.prem?o.prog||'Premier':'Fastest'});
    if(c&&c!==f)rows.push({m:c,b:'Cheapest'});
    return rows}
  function rowsList(o){const M=methods(o),rows=picks(o,M.resp);
    if(o.pr&&rows.length===2&&rows.every(r=>r.m.c)){const h=fastest(pdpPool(M.home));if(h)rows.push({m:h,b:o.prBadge==='home'?'Fastest home delivery':'Fastest',third:1})}
    return rows}

  const badge=(o,b)=>o.badges===false||!b?'':`<span class="dgrid-badge${/Premier|Unlimited|Royalty|Club/.test(b)?' dgrid-badge--member':''}">${esc(b)}</span>`;
  const when=(o,m,lead)=>m.nom?'On a day of your choice':m.d===1?'Tomorrow':(lead?'By ':'')+day(o,m.d);
  const total=o=>{const M=methods(o);return M.home.length+M.collect.length};
  const moreLink=(o,tab,label)=>(total(o)<=2&&o.more2!=='show')?'':`<button class="dgrid-more" data-dg-more="${tab}">${label}</button>`;
  const ret=o=>o.ret===false?'':`<div class="dgrid-ret"><img src="${IC}icons-calendar.svg" alt=""><div><div class="t">Eligible for return within ${esc(o.retDays||21)} days</div><div class="s">Exclusions apply. Please see our <a href="#">returns policy</a></div></div></div>`;
  const bulkyNote=o=>o.scen==='bulky'?`<p class="dgrid-note">${BULKY_COPY}</p>`:'';

  /* A · live list + James's PR: "Get it Tomorrow with … (£5.99)" sentences */
  function list(o){const rows=rowsList(o);
    return `<div class="dgrid-list">${rows.map(({m,b})=>`<div class="dgrid-line">${badge(o,b)}<p>${m.d===1?`Get it <b>Tomorrow</b>`:`Arrives by <b>${day(o,m.d)}</b>`} with ${esc(m.n)}${cutoff(o,m)?' '+cutoff(o,m):''} (${m.prem?`<b>Free</b> <s>${money(m.was)}</s>`:money(m.p)})</p></div>`).join('')}</div>${bulkyNote(o)}${moreLink(o,'home','See more')}`}

  /* B · Demi: Delivery / Click & Collect tabs, checkout-style rows with the price on the right */
  function row(o,{m,b}){return `<li class="dgrid-row"><div class="l"><div class="w"><b>${when(o,m,1)}</b>${badge(o,b)}</div><span class="n">${esc(m.s)}</span>${cutoff(o,m)?`<span class="c">${cutoff(o,m)}</span>`:''}</div>
      <div class="r"><b>${m.prem?'Free':(m.from?'From ':'')+money(m.p)}</b>${m.was?`<s>${money(m.was)}</s>`:''}</div></li>`}
  function tabs(o){const M=methods(o),hasC=M.collect.length>0,first=o.tab==='collect'&&hasC?'collect':'home';
    const panel=(k,l,more)=>`<div class="dgrid-panel" data-dg-panel="${k}"${k===first?'':' hidden'}><ul class="dgrid-rows">${picks(o,M[k]).map(r=>row(o,r)).join('')}</ul>${k==='home'?bulkyNote(o):''}${moreLink(o,k,more)}</div>`;
    const order=first==='collect'?['collect','home']:['home','collect'];
    const T={home:'Delivery',collect:'Click &amp; Collect'};
    return `${hasC?`<div class="dgrid-tabs" role="tablist">${order.map(k=>`<button role="tab" data-dg-tab="${k}" class="${k===first?'on':''}" aria-selected="${k===first}">${T[k]}</button>`).join('')}</div>`:''}
      <div class="dgrid-panes">${panel('home','Delivery','See more delivery options')}${hasC?panel('collect','Click & Collect','See more collection options'):''}</div>`}

  /* C · one-liner (Amazon style) — everything else lives in the modal */
  function line(o){const M=methods(o),f=fastest(pdpPool(M.home)),cc=cheapest(M.collect);if(!f)return '';
    const to=o.known&&o.pc?` to <b>${esc(o.pc)}</b>`:` with ${esc(f.s)}`;
    return `<div class="dgrid-one"><img src="${IC}icons-delivery-fast.svg" alt=""><div><p>Get it <b>${when(o,f,0)}</b>${to}</p>
      <span class="s">${[cutoff(o,f),f.prem?`Free with ${esc(o.prog||'Premier')}`:money(f.p)].filter(Boolean).join(' · ')}${cc?` · or collect from ${cc.prem?'free':money(cc.p)}`:''}</span></div></div>${bulkyNote(o)}
      <button class="dgrid-more" data-dg-more="home">${M.collect.length?'Delivery &amp; collection options':'Delivery options'}</button>`}

  function grid(o){const body=o.layout==='tabs'?tabs(o):o.layout==='line'?line(o):list(o);
    return `<section class="dgrid${o.layout==='line'?' dgrid--line':''}" data-dg aria-label="Delivery methods">${o.layout==='line'?'':`<div class="dgrid-hd"><h2>Delivery Methods</h2></div>`}${body}${ret(o)}</section>`}

  /* ---- modal ---- */
  function sortL(o,l){const s=l.slice();s.sort(o.sort==='speed'?(a,b)=>(a.nom?99:a.d)-(b.nom?99:b.d)||a.p-b.p:(a,b)=>a.p-b.p||(a.nom?99:a.d)-(b.nom?99:b.d));return s}
  const mrow=(o,m)=>`<li class="dopts-row"><div class="l"><b>${esc(m.n)}</b><span>${m.nom?'Arrives on a day and time of your choice':m.d===1?'Arrives Tomorrow':'Arrives by '+day(o,m.d)}${cutoff(o,m)?` · ${cutoff(o,m)}`:''}</span></div>
      <div class="r">${m.was?`<s>${money(m.was)}</s>`:''}<b>${m.prem?'Free':(m.from?'From ':'')+money(m.p)}</b></div></li>`;
  const ul=(o,l)=>`<ul class="dopts-list">${l.map(m=>mrow(o,m)).join('')}</ul>`;
  function homeBlock(o,M,head){const uk=M.home.filter(m=>!m.ni),ni=M.home.filter(m=>m.ni);
    if(o.ni==='mixed'||!ni.length)return (head?`<h3 class="dopts-grp">Home delivery</h3>`:'')+ul(o,sortL(o,M.home));
    return (head?`<h3 class="dopts-grp">Home delivery</h3>`:'')+ul(o,sortL(o,uk))+`<hr class="dopts-hr">`+(head?`<h3 class="dopts-grp">Northern Ireland</h3>`:'')+ul(o,sortL(o,ni))}
  const collectBlock=(o,M,head)=>M.collect.length?(head?`<h3 class="dopts-grp">Click &amp; collect</h3>`:'')+ul(o,sortL(o,M.collect)):`<p class="dopts-empty">Click &amp; collect isn’t available for this item.</p>`;
  function modal(o,tab){const M=methods(o);tab=tab==='collect'?'collect':'home';
    const lay=o.desk?'mdl--sm':o.sheet==='up'?'mdl--up':'mdl--alert';
    const bulky=o.scen==='bulky'?`<div class="msg msg--neutral"><i></i><div class="body"><span>${BULKY_COPY}</span></div></div>`:'';
    let body,title='Delivery Options';
    if(o.modal==='list'){body=homeBlock(o,M,1)+(M.collect.length?`<hr class="dopts-hr">`+collectBlock(o,M,1):'')}
    else if(o.modal==='tab'){title=tab==='collect'?'Collection Options':'Delivery Options';body=tab==='collect'?collectBlock(o,M,0):homeBlock(o,M,0)}
    else{body=`<div class="dopts-seg" role="tablist"><button data-dg-seg="home" class="${tab==='home'?'on':''}">Home Delivery</button><button data-dg-seg="collect" class="${tab==='collect'?'on':''}">Collect Nearby</button></div>
      <div class="dopts-panes"><div data-dg-mpanel="home"${tab==='home'?'':' hidden'}>${homeBlock(o,M,0)}</div><div data-dg-mpanel="collect"${tab==='collect'?'':' hidden'}>${collectBlock(o,M,0)}</div></div>`}
    return `<div class="dopts-layer${lay==='mdl--up'?' dopts-layer--up':''}" data-dg-modal><div class="mdl-scrim" data-dg-close></div>
      <div class="mdl ${lay} dopts" role="dialog" aria-modal="true" aria-label="${title}"><div class="modal-hd"><span class="mt">${title}</span><button class="modal-x" data-dg-close aria-label="Close"></button></div>
      <div class="mdl-bd">${bulky}${body}<p class="dopts-note">${FOOT}</p></div></div></div>`}

  function wire(r,o,open){const q=s=>[...r.querySelectorAll(s)];
    q('[data-dg-tab]').forEach(t=>t.onclick=()=>{const k=t.dataset.dgTab;q('[data-dg-tab]').forEach(x=>{x.classList.toggle('on',x===t);x.setAttribute('aria-selected',x===t)});q('[data-dg-panel]').forEach(p=>p.hidden=p.dataset.dgPanel!==k)});
    q('[data-dg-more]').forEach(b=>b.onclick=e=>{e.preventDefault();open&&open(b.dataset.dgMore)});
    q('[data-dg-seg]').forEach(b=>b.onclick=()=>{const k=b.dataset.dgSeg;q('[data-dg-seg]').forEach(x=>x.classList.toggle('on',x===b));q('[data-dg-mpanel]').forEach(p=>p.hidden=p.dataset.dgMpanel!==k)});
  }
  /* page drop-in: grid already in the page → See more opens the modal over doc.body; X or the scrim closes it */
  function mount(doc,o){const open=tab=>{doc.querySelectorAll('[data-dg-modal]').forEach(n=>n.remove());doc.body.insertAdjacentHTML('beforeend',modal(o,tab));
      const m=doc.querySelector('[data-dg-modal]');wire(m,o);m.querySelectorAll('[data-dg-close]').forEach(x=>x.onclick=()=>m.remove())};
    wire(doc,o,open);return open}
  const bulky=()=>`<p class="dgrid-bulky"><img src="${IC}icons-info.svg" alt="">${BULKY_COPY}</p>`;
  root.DG_delivery={grid,modal,wire,mount,bulky,methods,rows:rowsList,HOME,COLLECT};
})(typeof window!=='undefined'?window:globalThis);
