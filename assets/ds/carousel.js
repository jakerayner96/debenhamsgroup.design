/* DG Group Design System — Product carousel behaviour (.pcar, 28 Oct 2026, projects/product-carousel).
   Load after components.css. Every .pcar on the page is wired on load, and any .pcar injected later is wired automatically (DG_pcar(root) to force it).
   - Arrows (desktop): page by the whole cards in view, hidden (disabled) at each end, centred on the card image.
   - Tabs (.pcar-tabs .chip): single select; fires a 'pcar:tab' event on the .pcar with detail {index, label} so the page swaps the feed.
   - Grid format (.pcar--grid) has no arrows. */
(function(){
  function wire(c){
    if(c.__pcar)return;c.__pcar=1;
    const track=c.querySelector('.pcar-track'),prev=c.querySelector('.pcar-arr--prev'),next=c.querySelector('.pcar-arr--next');
    c.querySelectorAll('.pcar-tabs .chip').forEach((b,i,all)=>b.addEventListener('click',()=>{
      all.forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});
      if(track)track.scrollTo({left:0,behavior:'auto'});
      c.dispatchEvent(new CustomEvent('pcar:tab',{bubbles:true,detail:{index:i,label:b.textContent.trim()}}));
    }));
    if(!track||c.classList.contains('pcar--grid'))return;
    const step=()=>{const k=track.children[0];if(!k)return track.clientWidth;const gap=parseFloat(getComputedStyle(track).columnGap)||0,w=k.getBoundingClientRect().width+gap;
      return Math.max(1,Math.floor((track.clientWidth+gap)/w))*w};
    const sync=()=>{const max=track.scrollWidth-track.clientWidth-2;
      if(prev)prev.disabled=track.scrollLeft<=2;if(next)next.disabled=track.scrollLeft>=max;
      const img=track.querySelector('.pc-img');if(img)c.style.setProperty('--pcar-arr-y',(img.offsetTop+img.offsetHeight/2)+'px')};
    if(prev){prev.setAttribute('aria-label','Previous');prev.addEventListener('click',()=>track.scrollBy({left:-step(),behavior:'smooth'}))}
    if(next){next.setAttribute('aria-label','Next');next.addEventListener('click',()=>track.scrollBy({left:step(),behavior:'smooth'}))}
    track.addEventListener('scroll',sync,{passive:true});
    if(window.ResizeObserver)new ResizeObserver(sync).observe(track);else addEventListener('resize',sync);
    track.querySelectorAll('img').forEach(i=>i.complete||i.addEventListener('load',sync,{once:true}));
    sync();
  }
  window.DG_pcar=function(root){(root||document).querySelectorAll('.pcar').forEach(wire)};
  /* DG_pcarHTML(o) — the markup (catalogue entry 'product-carousel') for a placement, so pages never hand-build a rail (2 Nov 2026, Master prototype).
     o: size 'lg'|'md'|'sm' · title · sub · tabs[] · all (View all label) · per (cards in view / grid columns, desktop) · grid · look (image only) · bleed (mobile edge to edge)
        items[]: {img, brand, name, price, was, href} — the DS product card, rail price, no wishlist. */
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  window.DG_pcarCard=function(p,o){o=o||{};
    const img=`<div class="pc-img"><img class="ph" src="${esc(p.img)}" alt="${esc((p.brand?p.brand+' ':'')+p.name)}" loading="${o.eager?'eager':'lazy'}"></div>`;
    if(o.look)return `<article class="pc"${p.href?` data-href="${esc(p.href)}"`:''}>${img}</article>`;
    return `<article class="pc"${p.href?` data-href="${esc(p.href)}"`:''}>${img}<div class="pc-info"><div class="pc-toprow"><div class="pc-titles">${p.brand?`<div class="pc-brand">${esc(p.brand)}</div>`:''}<div class="pc-name">${esc(p.name)}</div></div></div>
      <div class="price-blk price-blk--rail"><div class="price"><span class="now${p.was?' sale':''}">${esc(p.price)}</span>${p.was?`<span class="was">${esc(p.was)}</span>`:''}</div></div></div></article>`};
  window.DG_pcarHTML=function(o){o=o||{};const grid=!!o.grid,tabs=o.tabs&&o.tabs.length?o.tabs:null,hd=o.title||o.sub||tabs||o.all;
    const cls=['pcar','pcar--'+(o.size||'md'),grid&&'pcar--grid',o.look&&'pcar--look',o.bleed!==false&&'pcar--bleed'].filter(Boolean).join(' ');
    return `<section class="${cls}" style="--pcar-per:${o.per||5}">${hd?`<header class="pcar-hd">${o.title||o.sub?`<div class="pcar-tt">${o.title?`<h2 class="pcar-t">${esc(o.title)}</h2>`:''}${o.sub?`<p class="pcar-sub">${esc(o.sub)}</p>`:''}</div>`:''}${tabs?`<div class="pcar-tabs">${tabs.map((t,i)=>`<button class="chip${i?'':' on'}" aria-pressed="${!i}">${esc(t)}</button>`).join('')}</div>`:''}${o.all?`<a class="pcar-all" href="#">${esc(o.all===true?'View all':o.all)}</a>`:''}</header>`:''}
  <div class="pcar-body">${grid?'':'<button class="pcar-arr pcar-arr--prev" disabled></button>'}<div class="pcar-track">${(o.items||[]).map(p=>DG_pcarCard(p,o)).join('')}</div>${grid?'':'<button class="pcar-arr pcar-arr--next"></button>'}</div></section>`};
  const boot=()=>{DG_pcar();if(window.MutationObserver)new MutationObserver(m=>{if(m.some(r=>r.addedNodes.length))DG_pcar()}).observe(document.body,{childList:true,subtree:true})};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
