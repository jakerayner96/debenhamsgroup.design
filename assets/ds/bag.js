/* DG Group Design System — Bag product cards + bag sections (2 Nov 2026). Markup + a tiny reducer; CSS lives in components.css (.bpc · .bag-*).
   Figma: Bag 2026 CYyGeUDy4w02enV7uFxZ6W · Bag Product Cards mobile 1337:250006 / desktop 1337:256981 · Quantity Selector 1234:76756.
   DG_bag.card(it)                  → one bag product card. it = {id, type, img, brand, name, variant, price, was, qty, max, note, badge,
                                       addon:'xcover'|'xcover-on'|'sns'|'sns-on'|'taskrabbit', ts:{…DG_taggstar o}, gift:{img,brand,name}, custom:[[label,value]], dispatch}
                                       type: 'std' · 'oos' (out of stock) · 'qtyerr' (quantity unavailable) · 'egift' · 'member' · 'sample' (complimentary) · 'preorder'
   DG_bag.gifts(list) · .seller(name, items, n) · .topup(items, at) · .samples(o) → the sections · DG_bag.oosBanner() → the page-level error
   DG_bag.modal(kind, it, desk)     → 'wish' (Move to your Wishlist?) · 'egift' (e-Gift Card Details) — a .bag-layer with the DS modal
   DG_bag.act(st, act, id)          → mutates the bag state: minus · plus · del · wish-yes · xadd · xrem · sns · smp · topup · tnext · tprev
   DG_bag.lines(st)                 → [{price, was}] per unit in stock, for the DS bag summary (bag-summary.js) · DG_bag.count(st) → lines (Your Bag (n))
   Clicks: any [data-bag] element carries the action, [data-id] the item. The page calls act() and re-renders. */
(function(){
  const LIB='assets/ds/icons/lib/icons-';
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const num=s=>parseFloat(String(s||'').replace(/[^0-9.]/g,''))||0,gbp=n=>'£'+n.toFixed(2);
  const ic=(n,alt)=>`<img src="${LIB}${n}.svg" alt="${alt||''}">`;
  const times=(p,q)=>p?gbp(num(p)*(q||1)):'';
  function qty(it){
    if(['oos','egift','member','sample'].includes(it.type)||it.qtyMode==='remove')return `<div class="qty"><button data-bag="del" data-id="${it.id}" aria-label="Remove ${esc(it.name)}">${ic('delete')}</button></div>`;
    const q=it.qty||1,max=it.max||10;
    return `<div class="qty">${q>1?`<button data-bag="minus" data-id="${it.id}" aria-label="Decrease quantity">${ic('minus')}</button>`:`<button data-bag="del" data-id="${it.id}" aria-label="Remove ${esc(it.name)}">${ic('delete')}</button>`}<span aria-live="polite">${q}</span><button data-bag="plus" data-id="${it.id}" aria-label="Increase quantity"${q>=max?' disabled':''}>${ic('add')}</button></div>`}
  const price=it=>it.price?`<div class="price-blk price-blk--bag"><div class="price"><span class="now${it.was?' sale':''}">${times(it.price,it.qty)}</span>${it.was?`<span class="was">${times(it.was,it.qty)}</span>`:''}</div></div>`:'';
  const name=it=>`<p class="bpc-name">${it.brand?`<b>${esc(it.brand)}</b> - `:''}${esc(it.name)}</p>`;
  const ERR={oos:'This item is out of stock',qtyerr:'This quantity of items is currently unavailable. Please adjust the amount.'};
  const msg=t=>`<div class="msg msg--error"><i></i><div class="body">${ic('alert')}<span>${esc(t)}</span></div></div>`;
  function addon(it){const a=it.addon;if(!a)return '';
    const fine='<p class="bpc-fine">See <u>Terms &amp; Conditions</u> and <u>IPID</u> for more information.</p>';
    if(a==='xcover')return `<div class="bpc-add"><div class="bpc-add-hd"><div><span class="bpc-add-t">Protect Your Purchase?</span><span>3 Year Protection Plan - £${it.plan||'24.99'}</span></div><button class="bd xs" data-bag="xadd" data-id="${it.id}">Add</button></div><button class="bpc-cta">What’s Covered?</button>${fine}</div>`;
    if(a==='xcover-on')return `<div class="bpc-add"><div class="bpc-add-hd"><div><span class="bpc-add-t">Purchase Protection</span><span>3 Year Protection Plan: <b class="bpc-add-t">£${it.plan||'24.99'}</b></span></div><button class="bd xs line" data-bag="xrem" data-id="${it.id}">Remove</button></div>${fine}</div>`;
    if(a==='sns'||a==='sns-on')return `<div class="bpc-add"><div class="bpc-add-hd"><div><span class="bpc-add-t">Subscribe &amp; Save</span><span>Deliver Every: <b class="bpc-add-t">1 week</b></span></div><div class="bpc-sns"><button data-bag="sns" data-id="${it.id}" class="${a==='sns-on'?'on':''}" aria-pressed="${a==='sns-on'}">${a==='sns-on'?'Subscribed':'Subscribe'}</button><span class="save">Save 5%</span></div></div>
      <p class="bpc-grey">By signing up to a Subscribe &amp; Save subscription you agree to our <u>Terms &amp; Conditions</u>.</p><p class="bpc-grey">Your subscription will continue until cancelled, subject to a 30-day cancellation notice period. Please note that live prices may fluctuate.</p></div>`;
    if(a==='taskrabbit')return `<div class="bpc-add"><div class="bpc-add-hd"><div><span class="bpc-add-t">Assembly Available</span><span class="bpc-pow">Powered by <img src="templates/img/bag/taskrabbit.png" alt="Taskrabbit"></span></div><button class="bd xs">Learn More</button></div></div>`;
    return ''}
  function card(it){
    if(it.type==='sample')return `<article class="bpc" data-id="${it.id}"><div class="bpc-gift-hd">${ic('xmas')}Complimentary Sample</div><div class="bpc-row"><div class="bpc-main"><img class="bpc-img" src="${esc(it.img)}" alt=""><div class="bpc-info">${name(it)}<b class="bpc-add-t">FREE</b></div></div><div class="bpc-act" style="justify-content:center">${qty(it)}</div></div></article>`;
    const err=ERR[it.type],cls=['bpc',err&&'bpc--err',it.type==='oos'&&'bpc--oos'].filter(Boolean).join(' ');
    const info=`${name(it)}${it.badge?`<span class="bpc-badge">${ic('calendar')}${esc(it.badge)}</span>`:''}${it.variant?`<p class="bpc-var">${esc(it.variant)}</p>`:''}${price(it)}${it.note?`<p class="bpc-note">${esc(it.note)}</p>`:''}${it.type==='egift'?`<button class="bpc-link" data-bag="egift" data-id="${it.id}">${ic('info')}View Details</button>`:''}`;
    const wish=['egift','member'].includes(it.type)?'<i></i>':`<button class="bpc-wish" data-bag="wish" data-id="${it.id}" aria-label="Move to wishlist">${ic('wishlist')}</button>`;
    const ts=it.ts&&window.DG_taggstar?DG_taggstar.bag(it.ts).replace('class="sp-bag ts"','class="sp-bag sp-bag--sm ts"'):'';
    const gift=it.gift?`<div class="bpc-add"><div class="bpc-gift-hd">${ic('xmas')}Free Gift</div><div class="bpc-main"><img class="bpc-img" src="${esc(it.gift.img)}" alt=""><div class="bpc-info">${name(it.gift)}</div></div></div>`:'';
    const custom=it.custom?`<div class="bpc-add"><span class="bpc-add-t">Your Customisation</span><div class="bpc-kv">${it.custom.map(([k,v])=>`<div><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}</div></div>`:'';
    const disp=it.dispatch?`<div class="bpc-dispatch">${ic('calendar')}<span>Pre-Order estimated dispatch date: <b>${esc(it.dispatch)}</b></span></div>`:'';
    return `<article class="${cls}" data-id="${it.id}">${err?msg(err):''}<div class="bpc-row"><div class="bpc-main"><img class="bpc-img" src="${esc(it.img)}" alt="${esc((it.brand?it.brand+' ':'')+it.name)}" loading="${window.DG_BAG_EAGER?'eager':'lazy'}"><div class="bpc-info">${info}</div></div><div class="bpc-act">${wish}${qty(it)}<i></i></div></div>${ts}${disp}${addon(it)}${gift}${custom}</article>`}
  const seller=(nm,items,n)=>`<section class="bag-sec bag-panel" data-slot="seller"><div class="bag-sec-hd">${ic('order')}<span class="bag-seller">Delivered by <b>${esc(nm)}</b>${n?` <b>(${n})</b>`:''}</span></div><div class="bag-list">${items.map(card).join('')}</div></section>`;
  const gifts=list=>`<section class="bag-sec bag-panel" data-slot="gifts"><div class="bag-sec-hd">${ic('xmas')}<h2 class="bag-sec-t">Your Gifts</h2></div>${list.map(g=>`<div class="bag-gift"><img class="bpc-img" src="${esc(g.img)}" alt=""><div><b>${esc(g.title)}</b><span>${esc(g.text)}</span></div></div>`).join('')}</section>`;
  function topup(items,at){at=Math.max(0,Math.min(at||0,items.length-1));const it=items[at];if(!it)return '';
    return `<section class="bag-sec bag-panel" data-slot="topup"><div class="bag-sec-hd"><div class="bag-sec-tt"><h2 class="bag-sec-t">Need A Top-Up?</h2><span class="bag-sec-sub">It’s been a while...</span></div>${items.length>1?`<div class="bag-nav"><button class="pcar-arr pcar-arr--prev" data-bag="tprev" aria-label="Previous"${at?'':' disabled'}></button><button class="pcar-arr pcar-arr--next" data-bag="tnext" aria-label="Next"${at<items.length-1?'':' disabled'}></button></div>`:''}</div>
      <article class="bpc"><div class="bpc-row"><div class="bpc-main"><img class="bpc-img" src="${esc(it.img)}" alt=""><div class="bpc-info">${name(it)}${it.variant?`<p class="bpc-var">${esc(it.variant)}</p>`:''}${price(Object.assign({},it,{qty:1}))}</div></div><div class="bpc-act" style="justify-content:center"><button class="bd xs" data-bag="topup" data-id="${it.id}">Add to Bag</button></div></div></article></section>`}
  function samples(o){const n=o.n||2,sel=o.sel||[],full=sel.length>=n;
    return `<section class="bag-sec bag-panel" data-slot="samples"><div class="bag-sec-tt"><div class="bag-sec-hd">${ic('xmas')}<h2 class="bag-sec-t">Choose ${n} free samples</h2></div><span class="bag-sec-sub">${sel.length} of ${n} selected</span></div>
      <div class="bsmp-wrap"><button class="pcar-arr pcar-arr--prev" data-bag="sprev" aria-label="Previous" disabled></button><div class="bsmp-rail">${o.items.map(s=>{const on=sel.includes(s.id);
        return `<div class="bsmp"><img src="${esc(s.img)}" alt=""><p><b>${esc(s.brand)}</b> - ${esc(s.name)}</p>${on?`<button class="bd xs line" data-bag="smp" data-id="${s.id}">Remove</button>`:`<button class="bd xs" data-bag="smp" data-id="${s.id}"${full?' disabled':''}>Add to Bag</button>`}</div>`}).join('')}</div><button class="pcar-arr pcar-arr--next" data-bag="snext" aria-label="Next"></button></div></section>`}
  const oosBanner=()=>`<div class="msg msg--error" data-slot="oos">${'<i></i>'}<div class="body">${ic('alert')}<span>Oops! Some of the items below are currently out of stock. Please remove them from your bag to continue.</span></div></div>`;
  function modal(kind,it,desk){const w=desk?'mdl--sm':'mdl--alert';
    if(kind==='wish')return `<div class="bag-layer" data-bag-modal><div class="mdl-scrim" data-bag="close"></div><div class="mdl ${w}" role="dialog" aria-modal="true" aria-label="Move to your Wishlist?"><div class="modal-hd"><div class="mt"><span>Move to your Wishlist?</span></div></div><div class="mdl-bd"><p style="margin:0">This will remove the item from your bag.</p></div><div class="mdl-ft"><button class="bd pri" data-bag="wish-yes" data-id="${it.id}">Move to Wishlist</button><button class="bd sec" data-bag="close">Cancel</button></div></div></div>`;
    if(kind==='egift')return `<div class="bag-layer" data-bag-modal><div class="mdl-scrim" data-bag="close"></div><div class="mdl ${w}" role="dialog" aria-modal="true" aria-label="e-Gift Card Details"><div class="modal-hd"><div class="mt"><span>e-Gift Card Details</span></div><button class="modal-x" data-bag="close" aria-label="Close"></button></div><div class="mdl-bd">${[['Amount:',it.price],['Recipient name:',it.to||'John Smith'],['Message:',it.message||'Happy Birthday!'],['Delivery Date:',it.when||'13:49 on 20 January 2026']].map(([k,v])=>`<div class="mdl-kv"><span>${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}</div></div></div>`;
    return ''}
  const all=st=>st.sellers.flatMap(s=>s.items);
  const find=(st,id)=>all(st).find(x=>x.id===id);
  function act(st,a,id){const it=id&&find(st,id);
    if(a==='plus'&&it)it.qty=Math.min((it.qty||1)+1,it.max||10);
    if(a==='minus'&&it)it.qty=Math.max(1,(it.qty||1)-1);
    if((a==='del'||a==='wish-yes')&&it)st.sellers.forEach(s=>s.items=s.items.filter(x=>x.id!==id&&!(x.type==='sample'&&x.for===id)));
    if(a==='xadd'&&it)it.addon='xcover-on';if(a==='xrem'&&it)it.addon='xcover';
    if(a==='sns'&&it)it.addon=it.addon==='sns-on'?'sns':'sns-on';
    if(a==='smp'&&st.samples){const sel=st.samples.sel,k=sel.indexOf(id);if(k>=0)sel.splice(k,1);else if(sel.length<st.samples.n)sel.push(id)}
    if(a==='tnext')st.topAt=(st.topAt||0)+1;if(a==='tprev')st.topAt=Math.max(0,(st.topAt||0)-1);
    if(a==='topup'&&st.topup){const t=st.topup.find(x=>x.id===id);if(t&&st.sellers[0]){st.sellers[0].items.push(Object.assign({},t,{id:t.id+'-b'+Date.now(),qty:1,type:'std'}));st.topup=st.topup.filter(x=>x!==t);st.topAt=0}}
    st.sellers=st.sellers.filter(s=>s.items.length);return st}
  const lines=st=>all(st).filter(x=>x.price&&x.type!=='oos').flatMap(x=>Array.from({length:x.qty||1},()=>({price:x.price,was:x.was})));
  const count=st=>all(st).filter(x=>x.type!=='sample').length;   /* Your Bag (n) counts lines, as Bag 2026 */
  window.DG_bag={card,seller,gifts,topup,samples,oosBanner,modal,act,lines,count,esc};
})();
