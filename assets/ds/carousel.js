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
  const boot=()=>{DG_pcar();if(window.MutationObserver)new MutationObserver(m=>{if(m.some(r=>r.addedNodes.length))DG_pcar()}).observe(document.body,{childList:true,subtree:true})};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
