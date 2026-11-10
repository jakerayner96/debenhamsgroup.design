/* Toast pattern — the layer. Fires the DS toast the panel asks for on the DS template (it draws nothing of its own):
     wishlist → DG_wishlist.toggle on the first wishlist button in view (fills it; spinner → Manage) · removed → toggled twice (Undo)
     bag → DG_toast "Added to Bag · View Bag" · product → the DS .toast--prod (thumbnail) · none → the hearts are live, tap one
   Placement 'ds' = the DS rule (components.css). 'top' / 'bottom' are comparisons only: they pin the shown toast inline.
   Shell protocol: {protoReady} once the toast is up · {protoPing} → {protoPong,h} · {toastReplay} fires it again. */
(function(){
  const C=window.TOASTCFG||{};const HOLD=C.hold?864e5:6000;
  window.DG_WISH_OPTS={ms:HOLD};
  const inView=el=>{const r=el.getBoundingClientRect();return r.width&&r.top>80&&r.bottom<innerHeight-120};
  function pin(el){if(!el||C.place==='ds')return;
    const fix=()=>{if(C.place==='top'){el.style.top=(window.DG_toastTop?DG_toastTop():16)+'px';el.style.bottom='auto';el.style.animationName='toastIn'}
      else{el.style.top='auto';el.style.bottom=(window.DG_toastBottom?DG_toastBottom():16)+'px';el.style.animationName='toastRise';
        if(innerWidth>=1024&&!el.classList.contains('toast--prod')){el.style.left='50%';el.style.marginLeft='-200px'}}};
    fix();addEventListener('scroll',fix,{passive:true})}
  const latest=()=>{const a=document.querySelectorAll('[data-dg-toast],.toast--prod');return a[a.length-1]};
  function fire(){document.querySelectorAll('.toast--prod[data-tp]').forEach(x=>x.remove());
    const btns=[...document.querySelectorAll('[aria-label="Add to wishlist"],[aria-label="Remove from wishlist"]')];const b=btns.find(inView)||btns[0];
    if(C.toast==='wishlist'&&b&&window.DG_wishlist){if(b.classList.contains('is-wished'))DG_wishlist.set(b,false);DG_wishlist.toggle(b)}
    else if(C.toast==='removed'&&b&&window.DG_wishlist){DG_wishlist.set(b,true);DG_wishlist.toggle(b)}
    else if(C.toast==='bag'&&window.DG_toast)DG_toast({msg:'Added to Bag',action:'View Bag',ms:HOLD});
    else if(C.toast==='product'){document.querySelectorAll('[data-dg-toast]').forEach(x=>x.remove());
      const img=new URL('../plp-alignment/img/'+(C.brand==='principles'?'debenhams':C.brand)+'/p1.jpg',document.currentScript?document.currentScript.src:location.href);
      const t=document.createElement('div');t.className='toast toast--top toast--prod';t.setAttribute('role','status');t.setAttribute('data-tp','');
      t.innerHTML='<img class="toast-img" src="'+IMG+'" alt=""><span class="toast-tx">Added to Bag</span><button class="act" type="button">View Bag</button>';
      document.body.appendChild(t);const place=()=>{t.style.setProperty('--toast-top',(window.DG_toastTop?DG_toastTop():16)+'px');t.style.setProperty('--toast-bottom',(window.DG_toastBottom?DG_toastBottom():16)+'px')};
      place();addEventListener('scroll',place,{passive:true});if(!C.hold)setTimeout(()=>{t.classList.add('toast--out');setTimeout(()=>t.remove(),300)},6000)}
    setTimeout(()=>pin(latest()),20)}
  const IMG=new URL('../plp-alignment/img/'+(C.brand==='principles'?'debenhams':C.brand)+'/p1.jpg',(document.currentScript&&document.currentScript.src)||location.href).href;
  function go(){if(C.scroll)window.scrollTo(0,C.page==='pdp'?420:900);setTimeout(()=>{fire();setTimeout(()=>parent.postMessage({protoReady:1},'*'),500)},C.scroll?500:100)}
  addEventListener('message',e=>{const d=e.data||{};
    if(d.protoSet)document.documentElement.classList.toggle('exporting',!!d.exporting);
    if(d.protoPing)parent.postMessage({protoPong:1,h:document.documentElement.scrollHeight},'*');
    if(d.toastReplay)fire()});
  if(document.readyState==='complete')setTimeout(go,1200);else addEventListener('load',()=>setTimeout(go,1200));
})();
