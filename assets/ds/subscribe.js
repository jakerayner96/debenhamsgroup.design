/* DG Group DS — Subscribe & Save drop-in (Figma ed2M0bCy3GMtlTRdtkwM4F · PDP box 172:24095 · modal 34:8920), added 16 Oct 2026.
   The PDP box carries an ADD button like the membership box (Jake); ADD opens the Subscribe & Save modal on the DS .mdl
   (desktop .mdl--sm · mobile + app .mdl--up bottom sheet as the Figma).
   Use:  DG_subscribe.box(p)        → the PDP box html
         DG_subscribe.modal(p,o)    → the modal layer html (o.desk → .mdl--sm)
         DG_subscribe.mount(doc,p,o)→ wires every [data-sns-open] in doc to open the modal over doc.body; X / scrim close it
   p = {brand,name,price:'£21.60',img,size,pct:5} — the subscribe price is price less pct. */
(function(root){
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const num=s=>parseFloat(String(s).replace(/[^0-9.]/g,''))||0;
  const sub=p=>'£'+(num(p.price)*(1-(p.pct||5)/100)).toFixed(2);
  const EVERY=['Every 2 weeks','Every 4 weeks','Every 6 weeks','Every 8 weeks','Every 12 weeks'];
  function box(p){const pct=p.pct||5;
    return `<div class="sns" data-sns><div class="t"><div class="sns-hd"><b>Subscribe &amp; Save</b><span class="sns-tag">Save ${pct}%</span></div>
      <ul class="sns-ticks"><li>Get it for only <b class="sale">${sub(p)}</b></li><li><span><b>Save an extra ${pct}%</b> when you subscribe</span></li><li>Choose your subscription frequency</li></ul></div>
      <button class="add" type="button" data-sns-open>Add</button></div>`}
  function modal(p,o){o=o||{};const pct=p.pct||5;
    return `<div class="sns-layer${o.desk?'':' sns-layer--up'}" data-sns-modal><div class="mdl-scrim" data-sns-close></div>
      <div class="mdl ${o.desk?'mdl--sm':'mdl--up'} sns-mdl" role="dialog" aria-modal="true" aria-label="Subscribe &amp; Save">
      <div class="modal-hd"><span class="mt">Subscribe &amp; Save<button class="mdl-info" aria-label="About Subscribe &amp; Save"></button></span><button class="modal-x" data-sns-close aria-label="Close"></button></div>
      <div class="mdl-bd">
        <div class="sns-prod">${p.img?`<img src="${esc(p.img)}" alt="">`:''}<div class="i"><b>${esc(p.brand)}</b><span>${esc(p.name)}</span>
          <span class="sns-tag">Save extra ${pct}%</span>
          <div class="price-blk price-blk--pdp"><div class="price"><span class="now sale">${sub(p)}</span><span class="was">${esc(p.price)}</span></div></div>
          ${p.size?`<span class="sns-size">Size: <b>${esc(p.size)}</b></span>`:''}</div></div>
        <label class="sns-f"><span>Deliver every:</span><div class="fsel"><span data-sns-every>Please select</span><select aria-label="Deliver every"><option value="" selected disabled>Please select</option>${EVERY.map(e=>`<option>${e}</option>`).join('')}</select></div></label>
        <div class="sns-f"><span>Quantity:</span><div class="qty qty--lg"><button type="button" aria-label="Decrease" data-sns-q="-1"><img src="assets/ds/icons/lib/icons-minus.svg" alt=""></button><span data-sns-n>1</span><button type="button" aria-label="Increase" data-sns-q="1"><img src="assets/ds/icons/lib/icons-add.svg" alt=""></button></div></div>
      </div>
      <div class="mdl-ft"><button class="bd pri" type="button">Add to bag</button>
        <p class="sns-legal">By signing up to a Subscribe &amp; Save subscription you agree to our <a href="#">Terms &amp; Conditions</a>.</p>
        <p class="sns-legal">Your subscription will continue until cancelled, subject to a 30-day cancellation notice period. Please note that live prices may fluctuate.</p></div>
      </div></div>`}
  function wire(m){const n=m.querySelector('[data-sns-n]'),sel=m.querySelector('select'),lab=m.querySelector('[data-sns-every]');
    m.querySelectorAll('[data-sns-q]').forEach(b=>b.onclick=()=>{n.textContent=Math.max(1,Math.min(10,+n.textContent+ +b.dataset.snsQ))});
    if(sel)sel.onchange=()=>{lab.textContent=sel.value};
    m.querySelectorAll('[data-sns-close]').forEach(x=>x.onclick=()=>m.remove())}
  function mount(doc,p,o){const open=()=>{doc.querySelectorAll('[data-sns-modal]').forEach(x=>x.remove());doc.body.insertAdjacentHTML('beforeend',modal(p,o));wire(doc.querySelector('[data-sns-modal]'))};
    doc.querySelectorAll('[data-sns-open]').forEach(b=>b.onclick=open);return open}
  root.DG_subscribe={box,modal,wire,mount,price:sub};
})(typeof window!=='undefined'?window:globalThis);
