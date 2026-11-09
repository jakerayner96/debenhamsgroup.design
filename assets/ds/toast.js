/* DG Group Design System — top toast drop-in (9 Nov 2026, Virtual Stylist v2; Figma DS Toast 5146-559, Device=Web).
   One spec: white 90% + blur, radius --radius-lg, shadow 0 0 20 10%, padding 16 · message 14/18 regular · action 13.33 strong in --text-link · 16 gap · 12px close.
   Sits UNDER THE USP BANNERS: --toast-top = the bottom of the lowest USP row in view (the sticky black bar once the page scrolls) + 12 on phones / + 16 on desktop,
   and it follows that edge while it is on screen (scroll / resize), so it never covers the header or the pinned bar.
     DG_toast({msg, action:'View', onAction, close:true, ms:6000}) → {el, close()}   (one at a time; a new toast replaces the old)
     DG_toastTop() → the px value the toast uses (also exported for .toast--prod callers) */
(function(root){
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  function toastTop(){const gap=innerWidth>=1024?16:12;let y=0;
    document.querySelectorAll('.usp-row1').forEach(r=>{const b=r.getBoundingClientRect();if(b.height&&b.bottom>0&&b.top<innerHeight)y=Math.max(y,b.bottom)});
    if(!y){const h=document.querySelector('.hd');if(h){const b=h.getBoundingClientRect();if(b.bottom>0)y=b.bottom}}
    return Math.round(y)+gap}
  let cur=null;
  function toast(o){o=o||{};if(cur)cur.close(true);
    const el=document.createElement('div');el.className='toast toast--top';el.setAttribute('role','status');el.setAttribute('data-dg-toast','');
    el.innerHTML=`<span class="toast-msg">${esc(o.msg)}</span><span class="toast-end">${o.action?`<button class="act" type="button">${esc(o.action)}</button>`:''}${o.close===false?'':'<button class="toast-x" type="button" aria-label="Close"></button>'}</span>`;
    document.body.appendChild(el);
    const place=()=>el.style.setProperty('--toast-top',toastTop()+'px');let raf=0;const onMove=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(place)};
    place();addEventListener('scroll',onMove,{passive:true});addEventListener('resize',onMove);
    let t=0,done=false;
    const close=now=>{if(done)return;done=true;clearTimeout(t);removeEventListener('scroll',onMove);removeEventListener('resize',onMove);if(cur&&cur.el===el)cur=null;
      if(now){el.remove();return}el.classList.add('toast--out');setTimeout(()=>el.remove(),300)};
    const a=el.querySelector('.act'),x=el.querySelector('.toast-x');
    if(a)a.onclick=()=>{close();o.onAction&&o.onAction()};if(x)x.onclick=()=>close();
    t=setTimeout(close,o.ms||6000);
    cur={el,close};return cur}
  root.DG_toast=toast;root.DG_toastTop=toastTop;
})(typeof window!=='undefined'?window:globalThis);
