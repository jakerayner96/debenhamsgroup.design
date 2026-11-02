/* DG Group Design System — PDP gallery behaviour (.pdp-gal, 2 Nov 2026). Endless: after the last image comes the first, before the first the last —
   arrows (desktop), swipe (mobile peek rail) and thumbnails alike. The slides are cloned once on each side; when the rail settles on a clone it
   jumps (no animation) to the same real image, so the loop never shows a seam. Thumbnails, the mobile progress bar and the arrows follow the real image.
   DG_gallery(root, {endless}) — endless defaults to true; pass false for exports (html2canvas ignores the scroll position, so clones would show first). */
(function(){
  window.DG_gallery=function(g,o){o=o||{};if(!g||g.__dgGal)return;g.__dgGal=1;
    const sl=g.querySelector('.slides');if(!sl||!sl.children.length)return;
    const th=[...g.querySelectorAll('.thumbs button')],bar=g.querySelector('.pag i'),prev=g.querySelector('.nav.prev'),next=g.querySelector('.nav.next');
    const real=[...sl.children],n=real.length,loop=o.endless!==false&&n>1;
    if(loop){const clone=el=>{const c=el.cloneNode(true);c.setAttribute('aria-hidden','true');c.setAttribute('data-clone','');c.querySelectorAll('img').forEach(i=>{i.alt='';i.loading='eager'});return c};
      real.slice().reverse().forEach(el=>sl.insertBefore(clone(el),sl.firstChild));real.forEach(el=>sl.appendChild(clone(el)))}
    const kids=()=>[...sl.children],off=loop?n:0;
    const left=k=>kids()[k].offsetLeft-kids()[0].offsetLeft;
    const at=()=>{const x=sl.scrollLeft,K=kids();let b=0,d=1e9;K.forEach((c,k)=>{const dd=Math.abs(left(k)-x);if(dd<d){d=dd;b=k}});return b};
    const jump=k=>{const s=sl.style.scrollBehavior,t=sl.style.scrollSnapType;sl.style.scrollBehavior='auto';sl.style.scrollSnapType='none';sl.scrollLeft=left(k);sl.offsetHeight;sl.style.scrollSnapType=t;sl.style.scrollBehavior=s};
    const go=k=>sl.scrollTo({left:left(k),behavior:'smooth'});
    const idx=()=>((at()-off)%n+n)%n;
    function sync(){const i=idx();th.forEach((b,j)=>b.classList.toggle('on',j===i));if(bar){bar.style.width=Math.round(100/n)+'%';bar.style.left=(n>1?i/(n-1)*(100-100/n):0)+'%'}}
    function settle(){if(!loop)return;const k=at();if(k<n)jump(k+n);else if(k>=2*n)jump(k-n);sync()}
    if(loop)jump(n);
    th.forEach((b,j)=>b.onclick=()=>go(off+j));
    if(prev)prev.onclick=()=>{settle();go(at()-1)};
    if(next)next.onclick=()=>{settle();go(at()+1)};
    if(!loop&&prev&&next){prev.onclick=()=>go(Math.max(0,at()-1));next.onclick=()=>go(Math.min(n-1,at()+1))}
    let t;sl.addEventListener('scroll',()=>{sync();clearTimeout(t);t=setTimeout(settle,140)},{passive:true});
    if('onscrollend' in window)sl.addEventListener('scrollend',()=>{clearTimeout(t);settle()});
    addEventListener('resize',()=>jump(off+idx()));
    sync()};
})();
