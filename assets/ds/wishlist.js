/* DG Group Design System — wishlist drop-in (10 Nov 2026 toast pattern · 11 Nov 2026 Wishlist 2026: the collections flow + the store).
   Figma Best App Ever HoBuVNEhf1qpL61XFipy0f · 1187:352498 (Wishlisting + Creating Collections) · 1187:359355 (My Items) · 2101:44520 (header / tabs / tiles).
   Every wishlist button on a page — PLP cards (.pc-iconbtn), the PDP title (.wish), .wl-btn, anything with aria-label "Add to wishlist" or [data-wish] —
   toggles on tap: the glyph swaps to its filled form (heart / bookmark / PLT heart → *-fill.svg) with a small pop, and the item goes into the store:
     add, first wishlist ever with no collections → the onboarding Add to Collections modal (NEW · Organise your wishlist · fanned collage · + Create New), no toast
     add, after that  → the DS toast "Added to Wishlist" · Manage (spinner while saving) · Manage opens Add to Collections
     remove           → "Removed from Wishlist" · Undo — un-wishlisting removes the item from the wishlist AND every collection
   Add to Collections: + Create New · the collections (most recently added to first; thumb, name, N items, ⊕ / ✓) · SAVE → "Added to <name>" / "Added to N collections"
     · link under SAVE: "Remove from wishlist" (in no collection) / "Remove from wishlist and collections" — removes the item and closes.
   Create New Collection: back · field "Name of collection" · CREATE · errors "Please enter a collection name" / "A collection with this name already exists"; the new one comes back ticked.
   Placement: centred .mdl--sm on ≥ 768, the slide up (.mdl--up, stops 56 from the top) below. Toasts are the DS toast (toast.js, loaded on demand).
   STORE (per fascia, localStorage "dg-wishlist:<brand>", every access in try/catch; falls back to memory):
     DG_wishlist.items() · item(id) · has(id) · add(item) · remove(id) · update(id, patch) · collections() · collection(id) · collectionsOf(id)
     createCollection(name) → {coll} | {err} · setCollections(id, collIds) · renameCollection(id, name) · deleteCollection(id) · seed({items, pool, colls}) · reset() · on(fn)
     item = {id, brand, name, img, price, was, colour, size, sizes:[{l, oos, stock}], stock, tag, ts, oos}
   UI:  DG_wishlist.openCollections(id, {onboard, btn, done, createOnly, rename, renameOnly}) · layer(html, {up}) → {el, close} · desk()
   MARKUP (DS builders, used by templates/wishlist.html + the catalogue): DG_wishlist.html.tile(item, {notified}) · .coll(c, {handle, more}) · .sizes(item, desk) · .notify(item, desk) · .confirm(desk)
   Events: dg:wishlist {on, el, item} · dg:wishlist-manage {el} · dg:wishlist-change (store). Options: window.DG_WISH_OPTS = {busy, ms, msgOn, msgOff, action, undo, promo:[{name, n, imgs}]}. */
(function(root){
  if(root.DG_wishlist&&root.DG_wishlist.v2)return;
  const me=document.currentScript&&document.currentScript.src;
  const DS=me?me.replace(/wishlist\.js(\?.*)?$/,''):new URL('assets/ds/',document.baseURI).href;
  const ROOT=new URL('../../',DS).href;
  const SEL='[aria-label="Add to wishlist"],[aria-label="Remove from wishlist"],[data-wish]';
  const O=()=>Object.assign({busy:true,ms:6000,msgOn:'Added to Wishlist',msgOff:'Removed from Wishlist',action:'Manage',undo:'Undo'},root.DG_WISH_OPTS||{});
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const hash=s=>{let h=7;for(const c of String(s))h=(h*31+c.charCodeAt(0))|0;return Math.abs(h).toString(36)};
  function needToast(cb){if(root.DG_toast)return cb();const s=document.createElement('script');s.src=DS+'toast.js';s.onload=cb;document.head.appendChild(s)}
  const toast=o=>needToast(()=>root.DG_toast(o));

  /* ---------- store ---------- */
  const brand=()=>document.documentElement.getAttribute('data-brand')||'debenhams';
  const KEY=()=>'dg-wishlist:'+brand();
  const MEM={};
  const blank=()=>({v:2,items:[],all:{},colls:[],seen:false,seeded:false});
  function st(){const k=KEY();if(MEM[k])return MEM[k];let s=null;try{s=JSON.parse(root.localStorage.getItem(k)||'null')}catch(e){}
    MEM[k]=s&&s.v===2&&s.all?s:blank();return MEM[k]}
  const subs=[];
  function save(){const s=st();try{root.localStorage.setItem(KEY(),JSON.stringify(s))}catch(e){}
    subs.forEach(f=>{try{f(s)}catch(e){}});document.dispatchEvent(new CustomEvent('dg:wishlist-change',{detail:{brand:brand()}}))}
  const now=()=>Date.now()+(now.n=(now.n||0)+1)/1000;
  const S={
    items:()=>st().items.map(id=>st().all[id]).filter(Boolean),
    item:id=>st().all[id]||null,
    has:id=>st().items.includes(id),
    add(it){const s=st();if(!it||!it.id)return;s.all[it.id]=Object.assign({},s.all[it.id]||{},it);if(!s.items.includes(it.id))s.items.unshift(it.id);save()},
    remove(id){const s=st();s.items=s.items.filter(x=>x!==id);s.colls.forEach(c=>{c.items=c.items.filter(x=>x!==id)});save()},
    update(id,p){const s=st();if(s.all[id]){Object.assign(s.all[id],p);save()}},
    collections:()=>st().colls.slice().sort((a,b)=>b.t-a.t),
    collection:id=>st().colls.find(c=>c.id===id)||null,
    collectionsOf:id=>st().colls.filter(c=>c.items.includes(id)).map(c=>c.id),
    nameErr(name,except){const n=String(name||'').trim();if(!n)return 'Please enter a collection name';
      if(st().colls.some(c=>c.id!==except&&c.name.trim().toLowerCase()===n.toLowerCase()))return 'A collection with this name already exists';return ''},
    createCollection(name){const err=S.nameErr(name);if(err)return {err};const c={id:'c'+hash(name+Date.now()),name:String(name).trim(),items:[],t:now()};st().colls.push(c);st().seen=true;save();return {coll:c}},
    renameCollection(id,name){const err=S.nameErr(name,id);if(err)return {err};const c=S.collection(id);if(c){c.name=String(name).trim();save()}return {coll:c}},
    deleteCollection(id){const s=st();s.colls=s.colls.filter(c=>c.id!==id);save()},
    setCollections(id,ids){st().colls.forEach(c=>{const want=ids.includes(c.id),has=c.items.includes(id);
      if(want&&!has){c.items.unshift(id);c.t=now()}if(!want&&has)c.items=c.items.filter(x=>x!==id)});save()},
    /* seed({items, pool, colls}): once per fascia — the saved items go after anything wishlisted already; pool = items only in collections / groups */
    seed(d,force){const s=st();if(s.seeded&&!force)return false;
      (d.pool||[]).forEach(it=>{if(!s.all[it.id])s.all[it.id]=Object.assign({},it)});
      (d.items||[]).forEach(it=>{s.all[it.id]=Object.assign({},s.all[it.id]||{},it)});   /* the saved items' states win over their pool copy */
      (d.items||[]).forEach(it=>{if(!s.items.includes(it.id))s.items.push(it.id)});
      (d.colls||[]).forEach(c=>{if(!s.colls.some(x=>x.name===c.name))s.colls.push({id:c.id||'c'+hash(c.name),name:c.name,items:(c.items||[]).slice(),t:c.t||now()})});
      s.seeded=true;s.seen=true;save();return true},
    reset(){const k=KEY();MEM[k]=blank();try{root.localStorage.removeItem(k)}catch(e){}save()},
    on(fn){subs.push(fn);return ()=>{const i=subs.indexOf(fn);if(i>=0)subs.splice(i,1)}}
  };

  /* ---------- the item behind a wishlist button (PLP card, PDP title, or data-wish-item JSON) ---------- */
  const txt=(el,q)=>{const x=el&&el.querySelector(q);return x?x.textContent.trim():''};
  const COLW=/\b(black|navy|blue|pink|sage|ivory|grey|gray|camel|emerald|rust|white|cream|khaki|brown|red|green|berry|burgundy|beige|stone|olive|lilac|purple|yellow|orange|silver|gold|tan|chocolate|charcoal|denim|mocha|nude)\b/i;
  function itemFrom(btn){let it=null;
    if(btn.dataset.wishItem)try{it=JSON.parse(btn.dataset.wishItem)}catch(e){}
    if(!it){const card=btn.closest('article.pc,.pc,.pcar-card,[data-wish-card]');
      if(card){const im=card.querySelector('.pc-img img,img');it={brand:txt(card,'.pc-brand'),name:txt(card,'.pc-name')||txt(card,'[class*="name"]'),img:im?im.src:'',price:txt(card,'.now'),was:txt(card,'.was')}}
      else{const head=btn.closest('.pdp-head')||document;const im=document.querySelector('.pdp-gal img,.pdp img');
        const pr=document.querySelector('.price-blk--pdp')||document;
        const sz=[...document.querySelectorAll('.pdp .sizes .sz,.sizes .set .sz')].map(b=>({l:b.textContent.trim(),oos:b.classList.contains('oos')})).filter(x=>x.l);
        it={brand:txt(head,'.brand'),name:txt(head,'.name')||document.title,img:im?im.src:'',price:txt(pr,'.now'),was:txt(pr,'.was'),sizes:sz.length?sz:null}}}
    const w=(it.name||'').match(COLW);
    return Object.assign({colour:w?w[0][0].toUpperCase()+w[0].slice(1).toLowerCase():'Black',size:null,sizes:[{l:'6'},{l:'8'},{l:'10'},{l:'12'},{l:'14'}]},
      {id:'w'+hash((it.brand||'')+'|'+(it.name||''))},Object.fromEntries(Object.entries(it).filter(([,v])=>v!=null&&v!=='')))}

  /* ---------- buttons ---------- */
  function glyph(btn,on){const img=btn.querySelector('img');if(!img)return;const src=img.getAttribute('src')||'';
    const n=on?(/-fill\.svg/.test(src)?src:src.replace(/\.svg(\?.*)?$/,'-fill.svg$1')):src.replace(/-fill\.svg/,'.svg');if(n!==src)img.setAttribute('src',n)}
  function set(btn,on,item){btn.classList.toggle('is-wished',on);btn.setAttribute('aria-pressed',on?'true':'false');
    if(btn.hasAttribute('aria-label'))btn.setAttribute('aria-label',on?'Remove from wishlist':'Add to wishlist');glyph(btn,on);
    btn.dispatchEvent(new CustomEvent('dg:wishlist',{bubbles:true,detail:{on,el:btn,item}}))}
  /* fill the hearts of items already in the wishlist (on load and on every template render) */
  function sync(){document.querySelectorAll(SEL).forEach(b=>{if(b.closest('[data-wish-off]'))return;let id;try{id=itemFrom(b).id}catch(e){return}
    const on=S.has(id);if(on!==b.classList.contains('is-wished')){b.classList.toggle('is-wished',on);b.setAttribute('aria-pressed',on?'true':'false');if(b.hasAttribute('aria-label'))b.setAttribute('aria-label',on?'Remove from wishlist':'Add to wishlist');glyph(b,on)}})}
  function toggle(btn,quiet){const on=!btn.classList.contains('is-wished');const it=itemFrom(btn);set(btn,on,it);
    if(on)S.add(it);else S.remove(it.id);
    if(quiet)return;const o=O();
    if(on&&!st().seen&&!st().colls.length){st().seen=true;save();openCollections(it.id,{onboard:true,btn});return}
    needToast(()=>{
      if(on){const t=root.DG_toast({msg:o.msgOn,action:o.busy?null:o.action,busy:o.busy,ms:o.ms,onAction:()=>{btn.dispatchEvent(new CustomEvent('dg:wishlist-manage',{bubbles:true,detail:{el:btn}}));openCollections(it.id,{btn})}});
        if(o.busy)setTimeout(()=>t.done(o.action),700)}
      else root.DG_toast({msg:o.msgOff,action:o.undo,ms:o.ms,onAction:()=>toggle(btn,true)})})}
  document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest(SEL);if(!b||b.closest('[data-wish-off]'))return;
    e.preventDefault();e.stopPropagation();toggle(b)},true);
  document.addEventListener('dg:render',()=>setTimeout(sync,0));
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(sync,0));else setTimeout(sync,0);

  /* ---------- modal layer (DS Modal: .mdl--sm centred on ≥ 768, .mdl--up slide up / .mdl--alert below) ---------- */
  const desk=()=>matchMedia('(min-width:768px)').matches;
  function layer(html,o){o=o||{};document.querySelectorAll('[data-wl-layer]').forEach(x=>x.remove());
    const el=document.createElement('div');el.className='wl-layer'+(o.up&&!desk()?' wl-layer--up':'');el.setAttribute('data-wl-layer','');
    el.innerHTML='<div class="mdl-scrim" data-wl="close"></div>'+html;document.body.appendChild(el);
    let done=false;const key=e=>{if(e.key==='Escape')close()};document.addEventListener('keydown',key);
    function close(){if(done)return;done=true;document.removeEventListener('keydown',key);const w=el.querySelector('.mdl'),s=el.querySelector('.mdl-scrim');
      if(w)w.classList.add(el.classList.contains('wl-layer--up')?'mdl-anim-down':'mdl-anim-fade-out');if(s)s.classList.add('mdl-scrim--out');setTimeout(()=>el.remove(),300);o.onClose&&o.onClose()}
    el.addEventListener('click',e=>{if(e.target.closest('[data-wl="close"]'))close()});
    const x=el.querySelector('.modal-x');if(x)try{x.focus({preventScroll:true})}catch(e){}
    return {el,close,swap(h){const w=el.querySelector('.mdl');const t=document.createElement('div');t.innerHTML=h;const n=t.firstElementChild;n.style.animation='none';w.replaceWith(n)}}}
  const mclass=(up)=>desk()?'mdl--sm':up?'mdl--up':'mdl--alert';
  const hd=(t,back)=>`<div class="modal-hd"><div class="mt">${back?'<button class="mdl-back" type="button" data-wl="back" aria-label="Back"></button>':''}<span>${esc(t)}</span></div><button class="modal-x" type="button" data-wl="close" aria-label="Close"></button></div>`;

  /* ---------- markup builders ---------- */
  const img=(src,cls)=>src?`<img${cls?` class="${cls}"`:''} src="${esc(src)}" alt="" loading="lazy">`:'';
  const H={};
  /* Collection tile: c = {id, name, n, imgs[], handle}; o.more = ⋮ */
  H.coll=(c,o)=>{o=o||{};const imgs=(c.imgs||[]).slice(0,4);const n=c.n!=null?c.n:(c.items||[]).length;
    return `<article class="wlc${c.handle?' wlc--insp':''}"${c.id?` data-wl-c="${esc(c.id)}"`:''} tabindex="0" aria-label="${esc(c.name)}"><div class="wlc-art${imgs.length?'':' is-empty'}">${imgs.map(s=>img(s)).join('')}</div>`
      +`<div class="wlc-tx"><b>${esc(c.name)}</b>${c.handle?`<span>${esc(c.handle)}</span>`:''}<div class="wlc-ft"><span>${n} item${n===1?'':'s'}</span>${o.more?'<button class="wlc-more" type="button" data-wl-c-more aria-label="More options"></button>':''}</div></div></article>`};
  const collImgs=c=>(c.items||[]).map(id=>S.item(id)).filter(Boolean).map(x=>x.img).slice(0,4);
  /* Wishlist tile */
  H.tile=(it,o)=>{o=o||{};const sz=(it.sizes||[]).find(s=>s.l===it.size);const oosSel=!!(sz&&sz.oos);const stock=it.stock||(sz&&sz.stock)||0;
    const ts=it.ts&&root.DG_taggstar?root.DG_taggstar.bag(Object.assign({},(root.DG_taggstar.LIVE[brand()]||{}).bag||{},{icon:false,upper:!!(root.DG_taggstar.LIVE[brand()]||{}).upper,msg:it.ts})):'';
    const cta=o.notified?`<p class="wlt-note">You’ll be notified when it’s available</p>`
      :(it.oos||oosSel)?'<button class="bd pri md full" type="button" data-wl-t="notify">Notify Me</button>':'<button class="bd pri md full" type="button" data-wl-t="atb">Add to Bag</button>';
    return `<article class="wlt" data-wl-id="${esc(it.id)}"><div class="wlt-media"><a href="#" data-wl-t="pdp" aria-label="${esc(it.name)}">${img(it.img)}</a>`
      +`<div class="wlt-acts"><button class="wlt-ic wlt-ic--coll" type="button" data-wl-t="coll" aria-label="Add to collection"></button><button class="wlt-ic wlt-ic--del" type="button" data-wl-t="del" aria-label="Delete from wishlist"></button></div>`
      +`${it.tag?`<span class="badge wlt-tag">${esc(it.tag)}</span>`:''}</div>`
      +`<div class="wlt-info"><div class="wlt-nm">${it.brand?`<b>${esc(it.brand)}</b>`:''}<span>${esc(it.name)}</span></div>`
      +`<div class="price-blk price-blk--bag"><div class="price"><span class="now${it.was?' sale':''}">${esc(it.price)}</span>${it.was?`<span class="was">${esc(it.was)}</span>`:''}</div></div>`
      +`${it.colour?`<p class="wlt-kv">Colour: <b>${esc(it.colour)}</b></p>`:''}`
      +`${(it.sizes||[]).length&&!it.oos?`<button class="wlt-kv wlt-size${it.size?'':' is-empty'}" type="button" data-wl-t="size">Size: <b>${esc(it.size||'Select size')}</b></button>`:''}`
      +`${stock&&!it.oos&&!oosSel?`<p class="alert alert--text xs">Only ${stock} left in stock</p>`:''}${ts}`
      +`${it.oos?'<div class="wlt-oos"><span>Out of Stock</span><a href="#" class="wlt-similar" data-wl-t="similar">Shop Similar Products</a></div>':''}`
      +`</div><div class="wlt-ft">${cta}</div></article>`};
  /* Select a size */
  H.sizes=(it,d)=>`<div class="mdl ${d?'mdl--sm':'mdl--up'} mdl--compact" role="dialog" aria-modal="true" aria-label="Select a size">${hd('Select a size')}<div class="mdl-bd"><div class="sel-list">`
    +(it.sizes||[]).map(s=>`<button type="button" data-wl-size="${esc(s.l)}"${s.l===it.size?' class="on"':''}><span>${esc(s.l)}</span>${s.oos?'<span class="meta">Notify Me</span>':''}</button>`).join('')+'</div></div></div>';
  /* Notify Me */
  H.notify=(it,d)=>`<div class="mdl ${d?'mdl--sm':'mdl--up'}" role="dialog" aria-modal="true" aria-label="Notify Me">${hd('Notify Me')}<div class="mdl-bd">`
    +`<div class="ntf-prod">${img(it.img)}<div class="ntf-tx">${it.brand?`<b>${esc(it.brand)}</b>`:''}<span>${esc(it.name)}</span><span>${esc(it.price)}</span>${it.size?`<span>Size: <b>${esc(it.size)}</b></span>`:''}${it.colour?`<span>Colour: <b>${esc(it.colour)}</b></span>`:''}</div></div>`
    +`<p class="ntf-q">Get notified when it’s available?</p><button class="bd pri full" type="button" data-wl="notify-yes"><i class="ico-bell"></i>Notify Me</button>`
    +`<div class="chk-row chk-row--lg"><button class="chk on" type="button" aria-checked="true" data-wl="chk" aria-label="Consent"></button><p class="ntf-legal">By selecting ‘Notify Me’ you confirm that you are aged 16 or over &amp; consent to receiving email alerts about products, offers &amp; marketing communications. Please see our <a href="#">Privacy Policy</a> for more information.</p></div></div></div>`;
  /* Remove From Wishlist confirm (only when the item is in a collection) */
  H.confirm=d=>`<div class="mdl ${d?'mdl--sm':'mdl--alert'}" role="dialog" aria-modal="true" aria-label="Remove From Wishlist">${hd('Remove From Wishlist')}<div class="mdl-bd"><p style="margin:0;font-size:14px">This will also remove the item from any collections it’s included in.</p></div><div class="mdl-ft"><button class="bd pri" type="button" data-wl="remove-yes">Remove</button><button class="bd sec" type="button" data-wl="close">Cancel</button></div></div>`;
  /* Add to Collections (list · onboarding · create) */
  const PROMO=()=>(O().promo||[['Sam’s Birthday',11,'dinner-date'],['Autumn Inspo',14,'autumn-look'],['NYE Party',8,'club-night']].map(([name,n,k])=>({name,n,imgs:[1,2,3,4].map(i=>ROOT+'templates/img/wishlist/insp/'+k+'-'+i+'.jpg')})));
  H.collections=(m,d)=>{const C=S.collections();const cls=`mdl ${d?'mdl--sm':'mdl--up'} coll-mdl`;
    if(m.page==='create'){const t=m.rename?'Rename Collection':'Create New Collection';
      return `<div class="${cls}" role="dialog" aria-modal="true" aria-label="${t}">${hd(t,true)}<div class="mdl-bd"><div><label class="fld${m.err?' invalid':''}"><input data-wl-in placeholder=" " value="${esc(m.val||'')}" maxlength="40" autocomplete="off"><span class="lbl">Name of collection</span></label>${m.err?`<div class="fld-err">${esc(m.err)}</div>`:''}</div></div><div class="mdl-ft"><button class="bd pri" type="button" data-wl="create">${m.rename?'Save':'Create'}</button></div></div>`}
    const promo=m.onboard?`<div class="coll-promo"><div class="h"><em>NEW</em>Organise your wishlist</div><p>Create Collections and group your fave items by occasion, style or whatever you want.</p><div class="coll-fan" aria-hidden="true">${PROMO().map(c=>H.coll(c)).join('')}</div></div>`:'';
    const rows=C.map(c=>{const im=collImgs(c);const n=c.items.length;
      const th=im.length>=4?`<span class="coll-thumb q">${im.slice(0,4).map(s=>img(s)).join('')}</span>`:im.length?img(im[0],'coll-thumb'):'<span class="coll-thumb"></span>';
      return `<button class="coll-row" type="button" role="checkbox" aria-checked="${m.ticks.has(c.id)}" data-wl-coll="${esc(c.id)}"><span class="m">${th}<span class="t"><b>${esc(c.name)}</b><span>${n} item${n===1?'':'s'}</span></span></span></button>`}).join('');
    const inAny=S.collectionsOf(m.id).length>0;
    const ft=C.length&&!m.onboard?`<div class="mdl-ft"><button class="bd pri" type="button" data-wl="save">Save</button><button class="bd txt" type="button" data-wl="rm">${inAny?'Remove from wishlist and collections':'Remove from wishlist'}</button></div>`:'';
    return `<div class="${cls}" role="dialog" aria-modal="true" aria-label="Add to Collections">${hd('Add to Collections')}<div class="mdl-bd">${promo}<div class="coll-list"><button class="coll-new" type="button" data-wl="new"><i></i>Create New</button>${rows}</div></div>${ft}</div>`};

  /* ---------- Add to Collections flow ---------- */
  function syncButtons(id,on){document.querySelectorAll(SEL).forEach(b=>{let x;try{x=itemFrom(b).id}catch(e){return}if(x===id&&b.classList.contains('is-wished')!==on)set(b,on)})}
  function openCollections(id,o){o=o||{};const m={id,page:'list',onboard:!!o.onboard,ticks:new Set(S.collectionsOf(id)),val:'',err:''};
    if(o.rename){m.page='create';m.rename=o.rename;m.val=(S.collection(o.rename)||{}).name||''}
    if(o.createOnly)m.page='create';   /* My Collections + : straight to Create New Collection, closes on CREATE */
    const L=layer(H.collections(m,desk()),{up:true});
    const paint=()=>{L.swap(H.collections(m,desk()));if(m.page==='create'){const i=L.el.querySelector('[data-wl-in]');if(i){i.focus();i.setSelectionRange(i.value.length,i.value.length)}}};
    const create=()=>{const i=L.el.querySelector('[data-wl-in]');m.val=i?i.value:'';
      const r=m.rename?S.renameCollection(m.rename,m.val):S.createCollection(m.val);if(r.err){m.err=r.err;paint();return}
      if(o.renameOnly||o.createOnly){L.close();o.done&&o.done();return}
      if(!m.rename)m.ticks.add(r.coll.id);m.page='list';m.onboard=false;m.err='';m.val='';m.rename=null;paint()};
    L.el.addEventListener('click',e=>{const t=e.target.closest('[data-wl],[data-wl-coll]');if(!t)return;
      if(t.dataset.wlColl){const c=t.dataset.wlColl;m.ticks.has(c)?m.ticks.delete(c):m.ticks.add(c);t.setAttribute('aria-checked',m.ticks.has(c));return}
      const a=t.dataset.wl;
      if(a==='new'){m.page='create';m.err='';m.val='';paint()}
      else if(a==='back'){if(o.renameOnly||o.createOnly){L.close();return}m.page='list';m.err='';m.rename=null;paint()}
      else if(a==='create')create();
      else if(a==='save'){const ids=[...m.ticks];if(!S.has(id)&&S.item(id))S.add(S.item(id));S.setCollections(id,ids);L.close();
        const names=ids.map(c=>(S.collection(c)||{}).name).filter(Boolean);
        if(names.length)toast({msg:names.length===1?'Added to '+names[0]:'Added to '+names.length+' collections'});o.done&&o.done()}
      else if(a==='rm'){S.remove(id);syncButtons(id,false);if(o.btn)set(o.btn,false);L.close();toast({msg:O().msgOff});o.done&&o.done()}});
    L.el.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('[data-wl-in]')){e.preventDefault();create()}});
    L.el.addEventListener('input',e=>{if(e.target.matches('[data-wl-in]')&&m.err){m.err='';const f=L.el.querySelector('.fld');f&&f.classList.remove('invalid');const x=L.el.querySelector('.fld-err');x&&x.remove()}});
    return L}

  root.DG_wishlist=Object.assign(S,{v2:true,toggle,set,sync,itemFrom,openCollections,layer,desk,html:H,collImgs,brand});
})(typeof window!=='undefined'?window:globalThis);
