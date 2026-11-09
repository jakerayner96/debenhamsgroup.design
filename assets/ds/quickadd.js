/* DG Group Design System — Quick add (assets/ds/quickadd.js · DG_quickAdd, 9 Nov 2026; one component with the 11 Nov .qadd modal, merged). Figma Quick-Add i0Dgzx7sPX23ffsI55hhRp · Designs 14/01/2026 (646:12943).
   The PLP quick add. Tap a card's quick add (bag-with-plus .pc-iconbtn, .pc-add "Add", .pc-qa mini):
     · nothing to choose (one colour, one size)  → added from the card: pressed → spinner → tick, back to default after 2s (646:22792)
     · a colour and / or size to choose          → the Quick Add window: centred 480 window on desktop, the DS slide up on mobile
         Beauty  (651:22558) product row with image · Colour: shade dropdown (.cdd), stock note per shade
         Fashion (652:46555) brand / name / price · Colour: image swatches · Size: .sz buttons (struck when out of stock)
         Home    (652:55790) brand / name / price · Colour: image swatches · Size: the DS select (.fsel)
       colour pre-selected (the card's colour, PDP logic) · ADD TO BAG → spinner → ✓ ADDED → closes itself after 2s · VIEW PRODUCT.
   Every add fires `dg:quickadd` {item} on document and bumps the DS header bag count (.hd-count[data-n]) unless a listener cancels it.
   VIEW PRODUCT fires `dg:quickadd-view` {item}.
   API  DG_quickAdd.model(p, peers)                 → the option model (p.qa = {colours, sizes, sizeUi} overrides the inference)
        DG_quickAdd.open({p, img, peers, el, desk})  → direct add or the window (p = {brand,name,price,was,pct,off}, img = its image URL,
                                                       peers = [{name,img}] other products, used for the colourway image swatches)
        DG_quickAdd.html(m, p, img, desk)            → the window markup (catalogue / exports)
        DG_quickAdd.close() */
(function(){
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const hash=s=>{let h=7;for(const c of String(s))h=(h*31+c.charCodeAt(0))|0;return Math.abs(h)};
  const SHADES=[['Ivory Beige','#E7C3A1'],['Light Brown','#D6B79C'],['Natural Beige','#B97A57'],['Warm','#E3B486'],['Honey','#C68E5D'],['Mocha','#8A5A3C'],['Espresso','#5A3A26']];
  const LIPS=[['Rouge Vif','#A3121F'],['Nude Silk','#C98F7A'],['Rosewood','#9A4B53'],['Coral Crush','#E2614C'],['Berry Kiss','#6E1E3A'],['Pink Ballet','#D9688B']];
  const COLW=/\b(black|navy|blue|pink|sage|ivory|grey|gray|camel|emerald|rust|white|cream|khaki|brown|red|green|berry|burgundy|beige|stone|olive|lilac|purple|yellow|orange|silver|gold|tan|chocolate|charcoal|denim|mocha|nude)\b/i;
  const CNAMES=['Black','Navy','Blue','Pink','Sage','Ivory','Grey','Camel','Emerald','Rust'];
  const RX={
    shade:/foundation|concealer|lipstick|\blip\b|lip oil|lip gloss|gloss|blush|bronzer|eyeshadow|eye shadow|palette|mascara|nail|tint|powder|primer|liner/i,
    lip:/lip|gloss|nail/i,
    direct:/eau de|parfum|perfume|fragrance|aftershave|cologne|gift set|bundle|candle|diffuser|serum|moisturi|cleanser|shampoo|conditioner|\bbody\b|wash|cream|balm|\boil\b|toner|spf|book|mug|tote|earring|necklace|bracelet|\bring\b|watch|wallet|purse|sunglasses|umbrella|ornament|statue|frame|print|poster|organi[sz]er|storage|lamp|mirror|vase|blanket|throw|wreath|garland|decoration|cushion|mug|china|bauble/i,
    bed:/\bbed\b|mattress|headboard|divan/i, bedding:/duvet|bedding|sheet|pillow ?case|quilt/i, rug:/\brug\b/i, towel:/towel/i,
    home:/sofa|chair|cushion|curtain|blind|table|desk|wardrobe|drawers|sideboard/i,
    shoe:/trainer|boot|shoe|sandal|heel|loafer|slipper|sneaker|mule|pump|slider|wellies|welly/i,
    men:/\bmen\b|mens|boohooman|\bman\b/i
  };
  const CLOTH=/dress|jumper|cardigan|blazer|trouser|jacket|hoodie|sweatshirt|\btop\b|skirt|coat|jean|shirt|tee|jogger|short|knit|puffer|gilet|bodysuit|corset|playsuit|jumpsuit|chino|legging|belt|suit\b|\bvest\b|\bbra\b|bikini|swimsuit/i;
  const GARMENT=/dress|jumper|cardigan|blazer|trouser|jacket|hoodie|sweatshirt|\btop\b|skirt|coat|jean|shirt|t-shirt|tee|jogger|short|knit|puffer|gilet|bodysuit|corset|playsuit|jumpsuit|bed|sofa|chair|boot|trainer|shoe|heel|sandal/i;
  function sizesFor(p){const n=p.name||'',h=hash(n);let L;let ui='buttons';
    if(RX.bed.test(n)&&!/blanket|throw|sofa/i.test(n)){L=['Single','Small Double','Double','King','Super King'];ui='select'}
    else if(RX.bedding.test(n)){L=['Single','Double','King','Super King'];ui='select'}
    else if(RX.rug.test(n)){L=['120 x 170cm','160 x 230cm','200 x 290cm'];ui='select'}
    else if(RX.towel.test(n)){L=['Hand Towel','Bath Towel','Bath Sheet'];ui='select'}
    else if(RX.home.test(n))return {sizes:[],ui:null};
    else if(RX.shoe.test(n))L=RX.men.test(n+' '+(p.brand||''))?['6','7','8','9','10','11']:['3','4','5','6','7','8'];
    else if(CLOTH.test(n))L=RX.men.test(n+' '+(p.brand||''))?['S','M','L','XL','XXL']:/belt/i.test(n)?['S','M','L']:['6','8','10','12','14'];
    else return {sizes:[],ui:null};
    const oos=1+h%(L.length-1);
    return {sizes:L.map((l,i)=>({l,oos:i===oos,stock:i===(oos+2)%L.length?1+h%3:0})),ui}}
  function model(p,peers){p=p||{};
    if(p.qa)return Object.assign({colourUi:p.qa.colours&&p.qa.colours[0]&&p.qa.colours[0].img?'images':'dropdown',sizeUi:'buttons'},p.qa,{direct:(p.qa.colours||[]).length<=1&&(p.qa.sizes||[]).length<=1});
    const n=p.name||'',h=hash(n);
    if(RX.shade.test(n)){const P=RX.lip.test(n)?LIPS:SHADES,k=4+h%3,s=h%P.length;
      const colours=Array.from({length:k},(_,i)=>{const c=P[(s+i)%P.length];return {n:c[0],hex:c[1],stock:i===(h%k)?1+h%3:(i===((h>>3)%k)?2:0)}});
      return {kind:'beauty',colourUi:'dropdown',colours,sizes:[],sizeUi:null,direct:false}}
    const sized=CLOTH.test(n)||RX.shoe.test(n)||(RX.bed.test(n)&&!/blanket|throw|sofa/i.test(n))||RX.bedding.test(n)||RX.rug.test(n)||RX.towel.test(n);
    if(!sized&&RX.direct.test(n))return {kind:'direct',colours:[],sizes:[],direct:true};
    const sz=sizesFor(p);
    const g=(n.match(GARMENT)||[''])[0].toLowerCase();
    /* colourways: a real feed passes its colour images in p.qa; here the product's own photo stands in, tinted per colourway (prototype data has one photo per product) */
    const TINT=[['Black','grayscale(1) brightness(.45) contrast(1.2)'],['Navy','grayscale(.6) sepia(.4) hue-rotate(190deg) brightness(.6)'],['Stone','grayscale(.7) brightness(1.15)'],['Berry','sepia(.5) hue-rotate(290deg) saturate(1.6) brightness(.75)'],['Sage','sepia(.4) hue-rotate(60deg) saturate(.9)']];
    const w=(n.match(COLW)||[])[0],own=w?w[0].toUpperCase()+w.slice(1).toLowerCase():'Original';
    const k=CLOTH.test(n)||RX.shoe.test(n)||RX.bed.test(n)||RX.bedding.test(n)?1+h%4:0;
    const colours=[{n:own,img:p.img||null,self:1}].concat(TINT.filter(t=>t[0]!==own).slice(h%2,h%2+k).map(t=>({n:t[0],img:p.img||null,f:t[1]})));
    const kind=sz.ui==='select'||RX.home.test(n)?'home':'fashion';
    return {kind,colourUi:colours.length>1?'images':null,colours,sizes:sz.sizes,sizeUi:sz.ui,direct:colours.length<=1&&sz.sizes.length<=1}}
  /* ---- markup ---- */
  const price=p=>`<div class="price-blk price-blk--qa"><div class="price"><span class="now${p.was?' sale':''}">${esc(p.price)}</span>${p.was?`<span class="was">${esc(p.was)}</span>`:''}${p.pct&&!p.thumb?`<span class="save">Save ${esc(String(p.pct).replace(/^-/,''))}</span>`:''}</div>${p.off&&!p.thumb?`<div class="price-code">${esc(p.off)}</div>`:''}</div>`;
  function html(m,p,img,desk,st){st=st||{c:0,s:m.sizes.length===1?0:-1};
    const thumb=m.colourUi!=='images';const P=Object.assign({},p,{thumb});
    const col=m.colours[st.c];const sz=st.s>=0?m.sizes[st.s]:null;
    const stock=st.stock!=null?st.stock:(m.colourUi==='dropdown'&&col&&col.stock)?col.stock:(sz&&sz.stock?sz.stock:0);const SL=esc(m.sizeLabel||'Size'),sl=SL.toLowerCase();
    const name=`<div class="qa-nm"><b>${esc(p.brand||'')}</b><span>${esc(p.name)}</span></div>`;
    const prod=thumb?`<div class="qa-prod">${img?`<img src="${esc(img)}" alt="">`:''}<div class="qa-tx">${name}${price(P)}</div></div>`:`${name}${price(P)}`;
    let colour='';
    if(m.colourUi==='dropdown')colour=`<div class="qa-opt"><div class="opt-label">Colour: <b>${esc(col.n)}</b></div><div class="cdd" data-qa-cdd><button type="button" class="cdd-btn" data-qa="cdd" aria-haspopup="listbox" aria-expanded="false"><i class="cdd-chip" style="background:${col.hex}"></i><span>${esc(col.n)}</span></button><ul class="cdd-list" role="listbox">${m.colours.map((c,i)=>`<li><button type="button" class="cdd-opt${i===st.c?' on':''}" role="option" aria-selected="${i===st.c}" data-qa="c" data-i="${i}"><i class="cdd-chip" style="background:${c.hex}"></i><span>${esc(c.n)}${c.stock?`<small>Only ${c.stock} left in stock</small>`:''}</span></button></li>`).join('')}</ul></div></div>`;
    if(m.colourUi==='images')colour=`<div class="qa-opt"><div class="opt-label">Colour: <b>${esc(col.n)}</b></div><div class="cswatches">${m.colours.map((c,i)=>`<button type="button" class="cswatch${i===st.c?' on':''}" data-qa="c" data-i="${i}" aria-label="${esc(c.n)}"><img src="${esc(c.img)}" alt=""${c.f?` style="filter:${c.f}"`:''}></button>`).join('')}</div></div>`;
    let size='';
    if(m.sizeUi==='buttons'&&m.sizes.length)size=`<div class="qa-opt"><div class="sizes"><div class="sizes-head"><span class="opt-label">${SL}: <b>${sz?esc(sz.l):''}</b></span></div><div class="set">${m.sizes.map((s,i)=>`<button type="button" class="sz${i===st.s?' on':''}${s.oos?' oos oos--strike':''}" data-qa="s" data-i="${i}"${s.oos?' disabled':''}>${esc(s.l)}</button>`).join('')}</div></div>${st.err?`<div class="alert alert--text sm" role="alert">Please select a ${sl}</div>`:''}</div>`;
    if(m.sizeUi==='select'&&m.sizes.length)size=`<div class="qa-opt"><div class="opt-label">${SL}: <b>${sz?esc(sz.l):''}</b></div><label class="fsel"><span>${sz?esc(sz.l):'Select '+sl}</span><select data-qa="sel" aria-label="${SL}"><option value="-1"${st.s<0?' selected':''} disabled>Select ${sl}</option>${m.sizes.map((s,i)=>`<option value="${i}"${i===st.s?' selected':''}${s.oos?' disabled':''}>${esc(s.l)}${s.oos?' — out of stock':''}</option>`).join('')}</select></label>${st.err?`<div class="alert alert--text sm" role="alert">Please select a ${sl}</div>`:''}</div>`;
    const stk=stock?`<div class="alert alert--text">Only ${stock} left in stock</div>`:'';
    const atb=st.phase==='busy'?'<button type="button" class="bd pri spn full" aria-label="Adding"><i></i></button>':st.phase==='done'?'<button type="button" class="bd pri done full">Added</button>':'<button type="button" class="bd pri full" data-qa="add">Add to bag</button>';
    return `<div class="mdl ${desk?'mdl--qa':'mdl--up'} qa${thumb?'':' qa--sw'}" role="dialog" aria-modal="true" aria-label="Quick Add"><div class="modal-hd"><div class="mt">Quick Add</div><button type="button" class="modal-x" data-qa="close" aria-label="Close"></button></div><div class="mdl-bd">${prod}${colour}${size}${stk}<div class="mdl-ft" style="gap:8px">${atb}<button type="button" class="bd sec full" data-qa="view">View product</button></div></div></div>`}
  /* ---- behaviour ---- */
  let cur=null;
  const fire=(type,item)=>{const ev=new CustomEvent(type,{detail:{item},cancelable:true});const ok=document.dispatchEvent(ev);
    if(type==='dg:quickadd'&&ok)document.querySelectorAll('.hd-count').forEach(b=>b.setAttribute('data-n',(+b.getAttribute('data-n')||0)+1))};
  const itemOf=(p,img,m,st)=>({brand:p.brand,name:p.name,price:p.price,img,colour:m&&m.colours[st.c]?m.colours[st.c].n:null,size:m&&st&&st.s>=0&&m.sizes[st.s]?m.sizes[st.s].l:null});
  function direct(el,item){if(!el||el.classList.contains('qa-busy')||el.classList.contains('qa-ok'))return fire('dg:quickadd',item);
    const keep=el.innerHTML,small=el.classList.contains('pc-iconbtn');
    el.classList.add('qa-press');
    setTimeout(()=>{el.classList.remove('qa-press');el.classList.add('qa-busy');el.innerHTML=`<i class="spin${small?' sm':''}"></i>`;el.setAttribute('aria-label','Adding to bag')},140);
    setTimeout(()=>{el.classList.remove('qa-busy');el.classList.add('qa-ok');el.innerHTML='<i class="qa-tick"></i>';el.setAttribute('aria-label','Added to bag');fire('dg:quickadd',item)},1040);
    setTimeout(()=>{el.classList.remove('qa-ok');el.innerHTML=keep;el.setAttribute('aria-label','Quick add')},3040)}
  function close(){if(!cur)return;const c=cur;cur=null;clearTimeout(c.t);const w=c.layer.querySelector('.mdl'),s=c.layer.querySelector('.mdl-scrim');
    if(w)w.classList.add(c.desk?'mdl-anim-fade-out':'mdl-anim-down');if(s)s.classList.add('mdl-scrim--out');
    document.removeEventListener('keydown',c.key);setTimeout(()=>c.layer.remove(),300);if(c.el&&c.el.focus)try{c.el.focus({preventScroll:true})}catch(e){}}
  function paint(){const c=cur;const w=c.layer.querySelector('.mdl');const sc=w&&w.querySelector('.mdl-bd');const top=sc?sc.scrollTop:0;
    const tmp=document.createElement('div');tmp.innerHTML=html(c.m,c.p,c.img,c.desk,c.st);const nw=tmp.firstElementChild;nw.style.animation='none';w.replaceWith(nw);const ns=nw.querySelector('.mdl-bd');if(ns)ns.scrollTop=top}
  function open(o){o=o||{};const p=o.p||{},img=o.img||p.img||'';const m=o.model||model(Object.assign({},p,{img}),o.peers);
    const desk=o.desk!=null?o.desk:matchMedia('(min-width:768px)').matches;
    if(m.direct)return direct(o.el,itemOf(p,img,m,{c:0,s:m.sizes.length?0:-1}));
    close();document.querySelectorAll('[data-qa-layer]').forEach(x=>x.remove());
    const st={c:0,s:m.sizes.length===1?0:-1};
    const layer=document.createElement('div');layer.className='qa-layer'+(desk?'':' qa-layer--up');layer.setAttribute('data-qa-layer','');
    layer.innerHTML='<div class="mdl-scrim" data-qa="close"></div>'+html(m,p,img,desk,st);document.body.appendChild(layer);
    const key=e=>{if(e.key==='Escape'){const dd=layer.querySelector('.cdd.open');if(dd){dd.classList.remove('open');return}close()}};document.addEventListener('keydown',key);
    cur={layer,m,p,img,desk,st,el:o.el,key};
    layer.addEventListener('click',e=>{const t=e.target.closest('[data-qa]');const dd=layer.querySelector('.cdd.open');
      if(dd&&!e.target.closest('.cdd')){dd.classList.remove('open')}
      if(!t||!cur)return;const a=t.dataset.qa,i=+t.dataset.i;
      if(a==='close'){close();return}
      if(a==='cdd'){const d=t.closest('.cdd');d.classList.toggle('open');t.setAttribute('aria-expanded',d.classList.contains('open'));return}
      if(a==='c'){if(cur.m.colours[i].oos)return;cur.st.c=i;paint();return}
      if(a==='s'){cur.st.s=i;cur.st.err=0;paint();return}
      if(a==='view'){fire('dg:quickadd-view',itemOf(cur.p,cur.img,cur.m,cur.st));close();return}
      if(a==='add'){if(cur.m.sizes.length&&cur.st.s<0){cur.st.err=1;paint();return}
        cur.st.phase='busy';paint();const me=cur;
        me.t=setTimeout(()=>{if(cur!==me)return;me.st.phase='done';paint();fire('dg:quickadd',itemOf(me.p,me.img,me.m,me.st));me.t=setTimeout(()=>{if(cur===me)close()},2000)},900)}});
    layer.addEventListener('change',e=>{const s=e.target.closest('[data-qa="sel"]');if(!s||!cur)return;cur.st.s=+s.value;cur.st.err=0;paint()});
    const x=layer.querySelector('.modal-x');if(x)try{x.focus({preventScroll:true})}catch(e){}}

  /* ---- the earlier API (product-carousel prototype, Added to Bag quick add): DG_quickAdd.html(p, {desk, stock}) + DG_quickAdd.wire(layer).
     p = {i, brand, name, price, was, pct, img, colour, opt ('Size' | 'Shade'), sizes[], href}. The same window as above; the page owns the bag:
     wire() fires 'dg:quickadd' {i, size} · 'dg:quickadd-pdp' {i, href} · 'dg:quickadd-close' on the layer (bubbling) and the page removes it. */
  const LEG={};let legN=0;
  function legacyModel(p){const L=p.sizes||[],lbl=p.opt||'Size',drop=lbl!=='Size'||L.some(z=>/ml$/i.test(z));
    return {colourUi:p.colour&&!drop?'images':null,colours:[{n:p.colour||'',img:p.img}],sizes:L.map(l=>({l:String(l)})),sizeUi:drop?'select':'buttons',sizeLabel:lbl}}
  function legacyHtml(p,o){o=o||{};const m=legacyModel(p),k='q'+(++legN),st={c:0,s:m.sizes.length===1?0:-1,stock:o.stock===false?0:3};
    LEG[k]={m,p:Object.assign({},p,{pct:p.pct&&!/%/.test(p.pct)?p.pct+'%':p.pct}),desk:!!o.desk,st};
    return `<div class="qa-layer${o.desk?'':' qa-layer--up'} qadd-layer" data-qa-layer data-qadd="${esc(p.i)}" data-qa-k="${k}" data-href="${esc(p.href||'')}"><div class="mdl-scrim" data-qa="close"></div>${html(m,LEG[k].p,p.img,o.desk,st)}</div>`}
  function wire(layer){if(!layer||layer.__w)return;layer.__w=1;const c=LEG[layer.dataset.qaK];if(!c)return;const i=+layer.dataset.qadd;
    const out=(t,d)=>layer.dispatchEvent(new CustomEvent(t,{bubbles:true,detail:d}));
    const re=()=>{const w=layer.querySelector('.mdl');const t=document.createElement('div');t.innerHTML=html(c.m,c.p,c.p.img,c.desk,c.st);const n=t.firstElementChild;n.style.animation='none';w.replaceWith(n)};
    layer.addEventListener('click',e=>{const t=e.target.closest('[data-qa]');if(!t)return;const a=t.dataset.qa,j=+t.dataset.i;
      if(a==='close')return out('dg:quickadd-close');
      if(a==='view')return out('dg:quickadd-pdp',{i,href:layer.dataset.href});
      if(a==='s'){c.st.s=j;c.st.err=0;return re()}
      if(a==='add'){if(c.m.sizes.length&&c.st.s<0){c.st.err=1;return re()}out('dg:quickadd',{i,size:c.st.s>=0?c.m.sizes[c.st.s].l:''})}});
    layer.addEventListener('change',e=>{const s=e.target.closest('[data-qa="sel"]');if(s){c.st.s=+s.value;c.st.err=0;re()}})}
  function htmlAny(a,b){return a&&a.colours?html.apply(null,arguments):legacyHtml(a,b)}
  window.DG_quickAdd={model,open,html:htmlAny,wire,close,direct};
})();
