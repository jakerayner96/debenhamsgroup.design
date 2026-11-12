/* DS drop-in: PDP sticky Add to bag (.pdp-sticky) — phones and tablets (under 1024).
   Once the page's own Add to bag has scrolled up out of view, the same button docks at the bottom of the screen;
   scroll back up to it and the bar goes. While it shows, --fab-lift on :root = its height, so floating chrome
   (the agent re-open FAB .ai-fab) rides 16 above it and drops back when it goes — as the App Master Prototype's dock.
   DG_pdpSticky.mount(root) — root holds .pdp-ctas (or [data-slot="ctas"] / .ctas) with a .bd.pri button. Tapping the
   sticky button clicks the page's own one. Safe to call again after a re-render (it replaces its bar). */
(function(){
  let bar=null,off=null;
  function setLift(on){const r=document.documentElement;if(on&&bar)r.style.setProperty('--fab-lift',bar.offsetHeight+'px');else r.style.removeProperty('--fab-lift')}
  function unmount(){if(off){off();off=null}if(bar){bar.remove();bar=null}setLift(false)}
  function mount(root){unmount();root=root||document;
    const src=root.querySelector('.pdp-ctas .bd.pri,[data-slot="ctas"] .bd.pri,.ctas .bd.pri');if(!src)return null;
    bar=document.createElement('div');bar.className='pdp-sticky';bar.setAttribute('aria-hidden','true');
    const b=document.createElement('button');b.type='button';b.className='bd pri';b.textContent=src.textContent;b.tabIndex=-1;
    b.addEventListener('click',()=>src.click());bar.appendChild(b);document.body.appendChild(bar);
    const mq=matchMedia('(min-width:1024px)');let on=null;
    /* a scroll check, not an IntersectionObserver: a jump past the button in one go never crosses it, so an observer wouldn't fire */
    const check=()=>{if(!bar)return;const past=!mq.matches&&src.isConnected&&src.getBoundingClientRect().bottom<0;if(past===on)return;on=past;
      bar.classList.toggle('is-on',past);bar.setAttribute('aria-hidden',past?'false':'true');b.tabIndex=past?0:-1;setLift(past)};
    addEventListener('scroll',check,{passive:true});addEventListener('resize',check);
    off=()=>{removeEventListener('scroll',check);removeEventListener('resize',check)};check();
    return bar}
  window.DG_pdpSticky={mount,unmount};
})();
