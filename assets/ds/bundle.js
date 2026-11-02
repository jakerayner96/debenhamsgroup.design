/* DG Group Design System — Bundling · Complete Your Purchase With (.bndl, 2 Nov 2026). Markup + behaviour.
   DG_bundle.html({title, items:[{img, brand, name, price, was, colour, sizes[], current}], cta}) → the component (components.css .bndl).
     The current product (current:true) is first and reads "Currently viewing". Every item starts ticked.
   DG_bundle.wire(root): tick (.chk) toggles an item in / out of the total and the ADD TO BAG (n) count; a size select drops its error.
     ADD TO BAG: every ticked item needs a size — missing ones get the select error + "Please select a size"; otherwise it fires
     'dg:bundle' {items:[{name, size, price}]} on the component (the page shows its added-to-bag toast / mini bag). */
(function(){
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const num=s=>parseFloat(String(s).replace(/[^0-9.]/g,''))||0;
  const gbp=n=>'£'+n.toFixed(2);
  function item(p,i){
    return `<div class="bndl-item" data-i="${i}" data-price="${num(p.price)}">
    <div class="bndl-img"><img src="${esc(p.img)}" alt="${esc((p.brand?p.brand+' ':'')+p.name)}" loading="lazy"><button class="chk on" role="checkbox" aria-checked="true" aria-label="Include ${esc(p.name)}"></button></div>
    <div class="bndl-info">
      <div class="bndl-hd">${p.current?'<span class="bndl-cur">Currently viewing</span>':''}${p.brand?`<span class="bndl-brand">${esc(p.brand)}</span>`:''}<span class="bndl-name">${esc(p.name)}</span></div>
      <div class="price-blk price-blk--card"><div class="price"><span class="now${p.was?' sale':''}">${esc(p.price)}</span>${p.was?`<span class="was">${esc(p.was)}</span>`:''}</div></div>
      ${p.colour?`<div class="opt-label">Colour: <b>${esc(p.colour)}</b></div>`:''}
      <div class="bndl-size"><span>Select a size</span>
        <div class="fsel fsel--sm"><span class="ph">Select a size</span><select aria-label="Size for ${esc(p.name)}"><option value="">Select a size</option>${(p.sizes||[]).map(z=>`<option>${esc(z)}</option>`).join('')}</select></div></div>
    </div></div>`}
  function html(o){o=o||{};const items=o.items||[],tot=items.reduce((a,p)=>a+num(p.price),0);
    return `<section class="bndl" data-bundle><h2 class="bndl-t">${esc(o.title||'Complete Your Purchase With')}</h2>
    <div class="bndl-box">${items.map(item).join('')}
      <div class="bndl-ft"><div><b>Total:</b> <span data-bndl-tot>${gbp(tot)}</span></div><button class="bd sec" data-bndl-add data-cta="${esc(o.cta||'Add to bag')}"><span data-bndl-lbl>${esc(o.cta||'Add to bag')} (${items.length})</span></button></div></div></section>`}
  function wire(root){(root||document).querySelectorAll('[data-bundle]').forEach(b=>{if(b.__w)return;b.__w=1;
    const rows=()=>[...b.querySelectorAll('.bndl-item')];
    const sync=()=>{const on=rows().filter(r=>!r.classList.contains('off'));
      b.querySelector('[data-bndl-tot]').textContent=gbp(on.reduce((a,r)=>a+(+r.dataset.price),0));
      const add=b.querySelector('[data-bndl-add]');add.querySelector('[data-bndl-lbl]').textContent=add.dataset.cta+' ('+on.length+')';add.disabled=!on.length};   /* one text run: the button's flex gap would space a separate count */
    const err=(r,show)=>{const f=r.querySelector('.fsel'),e=r.querySelector('.fld-err');f.classList.toggle('err',show);
      if(show&&!e)f.insertAdjacentHTML('afterend','<div class="fld-err">Please select a size</div>');if(!show&&e)e.remove()};
    rows().forEach(r=>{const c=r.querySelector('.chk'),s=r.querySelector('select'),lab=r.querySelector('.fsel span');
      c.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const on=!c.classList.contains('on');c.classList.toggle('on',on);c.setAttribute('aria-checked',on);r.classList.toggle('off',!on);if(!on)err(r,false);sync()});
      s.addEventListener('change',()=>{lab.textContent=s.value||'Select a size';lab.classList.toggle('ph',!s.value);if(s.value)err(r,false)})});
    b.querySelector('[data-bndl-add]').addEventListener('click',e=>{e.preventDefault();const on=rows().filter(r=>!r.classList.contains('off'));
      const miss=on.filter(r=>!r.querySelector('select').value);on.forEach(r=>err(r,miss.includes(r)));if(miss.length)return;
      b.dispatchEvent(new CustomEvent('dg:bundle',{bubbles:true,detail:{items:on.map(r=>({name:r.querySelector('.bndl-name').textContent,size:r.querySelector('select').value,price:+r.dataset.price}))}}))});
    sync()})}
  window.DG_bundle={html,wire};
})();
