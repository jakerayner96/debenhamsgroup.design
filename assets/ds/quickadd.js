/* DG Group Design System — Quick Add modal (.qadd, 11 Nov 2026). Markup + behaviour; CSS in components.css (.qadd-*).
   As live (Figma Quick Add i0Dgzx7sPX23ffsI55hhRp · fashion 652:47180 · beauty 651:33756 · home 652:56024): the multi-variant product's choices
   without leaving the page — a slide up on phones (.mdl--up), a small centred modal on desktop (.mdl--sm).
   DG_quickAdd.html(p, {desk, stock}) → the modal layer. p = {i, brand, name, price, was, pct, img, colour, opt ('Size' | 'Shade'), sizes[], href}
     opt Size with sizes → the size buttons (DS .sizes .sz) under "Size: X · Size guide"; Shade or ml sizes → the DS select (.fsel) beside a thumbnail.
   DG_quickAdd.wire(layer): a choice fills the label; Add To Bag needs one (else "Please select a size"), then fires 'dg:quickadd' {i, size} on the layer;
     View Product fires 'dg:quickadd-pdp' {i, href}; the scrim / X fire 'dg:quickadd-close'. The page adds to its bag and removes the layer. */
(function(){
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const price=p=>{const pct=p.was&&p.pct?String(p.pct).replace(/[^0-9]/g,''):'';
    return `<div class="price-blk price-blk--qa"><div class="price"><span class="now${p.was?' sale':''}">${esc(String(p.price).replace(/^From\s*/,''))}</span>${p.was?`<span class="was">${esc(p.was)}</span>`:''}</div>${pct?`<div class="price-code">Save ${pct}%</div>`:''}</div>`};
  function html(p,o){o=o||{};const L=p.sizes||[],lbl=p.opt||'Size',drop=lbl!=='Size'||L.some(z=>/ml$/i.test(z)),low=lbl.toLowerCase();
    const head=drop?`<div class="qadd-row"><img src="${esc(p.img)}" alt=""><div class="qadd-p"><b>${esc(p.brand||'')}</b><span>${esc(p.name)}</span>${price(p)}</div></div>`
      :`<div class="qadd-p"><b>${esc(p.brand||'')}</b><span>${esc(p.name)}</span></div>${price(p)}
        ${p.colour?`<div class="qadd-opt"><div class="qadd-lbl"><span>Colour: <b>${esc(p.colour)}</b></span></div><div class="cswatches"><button type="button" class="cswatch on" aria-label="${esc(p.colour)}"><img src="${esc(p.img)}" alt=""></button></div></div>`:''}`;
    const pick=drop?`<div class="qadd-opt"><div class="qadd-lbl"><span>${esc(lbl)}: <b data-qadd-v></b></span></div><div class="fsel"><span class="ph">Select ${esc(low)}</span><select data-qadd-sel aria-label="${esc(lbl)}"><option value="">Select ${esc(low)}</option>${L.map(z=>`<option>${esc(z)}</option>`).join('')}</select></div></div>`
      :`<div class="qadd-opt sizes"><div class="qadd-lbl"><span>${esc(lbl)}: <b data-qadd-v></b></span><span class="guide"><img src="assets/ds/icons/lib/icons-measure.svg" alt="">Size guide</span></div><div class="set">${L.map(z=>`<button type="button" class="sz" data-qadd-sz="${esc(z)}">${esc(z)}</button>`).join('')}</div></div>`;
    return `<div class="qadd-layer" data-qadd="${esc(p.i)}" data-href="${esc(p.href||'')}"><div class="mdl-scrim" data-qadd-x></div>
      <div class="mdl qadd ${o.desk?'mdl--sm mdl-anim-fade':'mdl--up mdl-anim-up'}" role="dialog" aria-modal="true" aria-label="Quick add">
        <div class="modal-hd"><div class="mt"><span>Quick Add</span></div><button class="modal-x" aria-label="Close" data-qadd-x></button></div>
        <div class="mdl-bd">${head}${pick}${o.stock===false?'':`<p class="qadd-stock">Only 3 left in stock</p>`}
          <div class="qadd-ctas"><button type="button" class="bd pri" data-qadd-add>Add to Bag</button><button type="button" class="bd sec" data-qadd-pdp>View Product</button></div></div></div></div>`}
  function wire(layer){if(!layer||layer.__w)return;layer.__w=1;const i=+layer.dataset.qadd;let v='';
    const set=x=>{v=x;const b=layer.querySelector('[data-qadd-v]');if(b)b.textContent=x;const e=layer.querySelector('.qadd-err');if(e&&x)e.remove()};
    layer.addEventListener('click',e=>{const sz=e.target.closest('[data-qadd-sz]');
      if(sz){layer.querySelectorAll('[data-qadd-sz]').forEach(b=>b.classList.toggle('on',b===sz));set(sz.dataset.qaddSz);return}
      if(e.target.closest('[data-qadd-x]')){layer.dispatchEvent(new CustomEvent('dg:quickadd-close',{bubbles:true}));return}
      if(e.target.closest('[data-qadd-pdp]')){layer.dispatchEvent(new CustomEvent('dg:quickadd-pdp',{bubbles:true,detail:{i,href:layer.dataset.href}}));return}
      if(e.target.closest('[data-qadd-add]')){if(!v){const os=layer.querySelectorAll('.qadd-opt'),o=os[os.length-1];if(o&&!layer.querySelector('.qadd-err'))o.insertAdjacentHTML('afterend','<p class="qadd-err">Please select a '+((layer.querySelector('.qadd-lbl span')||{}).textContent||'size:').split(':')[0].toLowerCase()+'</p>');return}
        layer.dispatchEvent(new CustomEvent('dg:quickadd',{bubbles:true,detail:{i,size:v}}))}});
    const sel=layer.querySelector('[data-qadd-sel]');if(sel)sel.addEventListener('change',()=>{const ph=sel.previousElementSibling;ph.dataset.ph=ph.dataset.ph||ph.textContent;ph.textContent=sel.value||ph.dataset.ph;ph.classList.toggle('ph',!sel.value);set(sel.value)})}
  window.DG_quickAdd={html,wire};
})();
