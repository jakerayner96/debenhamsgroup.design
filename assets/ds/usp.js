/* USP banner behaviour — Figma 11982-37171 (components.css .hd-usp).
   1. Countdown: <span class="usp-cd" data-left="45261"> (seconds) or data-to="2026-10-07T23:59:59" renders DD:HH:MM:SS
      as <b>digits</b><i>:</i> and ticks every second. At zero it holds 00:00:00:00 (hide or swap the banner in the CMS).
   2. Dash wrap: in a .usp-row, once the two sides of a .usp-sep land on different lines the dash becomes a line break
      (a dash at the start or end of a line reads as a typo). Re-run on resize.
   3. Rotation: <div class="usp-stack" data-rotate="5000"> holding .hd-usp messages (one .on) crossfades to the next every 5s
      (the outgoing one stays solid underneath as .was). Pauses while the tab is hidden; stops once the row leaves the page.
   4. Swipe: on any .usp-stack with 2+ messages, swipe left = next, right = previous (restarts the 5s timer; the swipe never fires the link). */
(function(){
  const pad=n=>String(n).padStart(2,'0');
  const draw=(el,s)=>{s=Math.max(0,s);const p=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60].map(pad);
    el.innerHTML=p.map((d,i)=>(i?'<i>:</i>':'')+'<b>'+d+'</b>').join('');el.setAttribute('aria-label',`${+p[0]} days ${+p[1]} hours ${+p[2]} minutes left`)};
  const left=el=>el.dataset.to?Math.round((new Date(el.dataset.to)-Date.now())/1000):(el._end?Math.round((el._end-Date.now())/1000):0);
  function cds(root){(root||document).querySelectorAll('.usp-cd[data-left],.usp-cd[data-to]').forEach(el=>{if(el._t)return;
    if(el.dataset.left)el._end=Date.now()+(+el.dataset.left)*1000;el.setAttribute('role','timer');draw(el,left(el));el._t=setInterval(()=>draw(el,left(el)),1000)})}
  function wrap(root){(root||document).querySelectorAll('.usp-row').forEach(r=>{const k=[...r.children];k.forEach(e=>e.classList.remove('wrapbr'));
    k.forEach((e,i)=>{if(!e.classList.contains('usp-sep'))return;const a=k[i-1],b=k[i+1];if(a&&b&&Math.abs(a.offsetTop-b.offsetTop)>=4)e.classList.add('wrapbr')})})}
  /* step a row by dir (1 = next, -1 = previous): the incoming message fades in over the outgoing one, which stays solid (.was) */
  function go(st,dir){const k=[...st.children];if(k.length<2)return;const i=Math.max(0,k.findIndex(e=>e.classList.contains('on'))),n=k[(i+dir+k.length)%k.length];
    k.forEach(e=>e.classList.remove('was','in'));k[i].classList.replace('on','was');n.classList.add('on','in');
    clearTimeout(st._w);st._w=setTimeout(()=>k[i].classList.remove('was'),750)}
  function timer(st){clearInterval(st._r);if(!st.dataset.rotate)return;
    st._r=setInterval(()=>{if(!st.isConnected)return clearInterval(st._r);if(!document.hidden)go(st,1)},+st.dataset.rotate||5000)}
  function rot(root){(root||document).querySelectorAll('.usp-stack[data-rotate]').forEach(st=>{if(!st._r)timer(st)})}
  /* swipe: left → next, right → previous, on any multi-message row; restarts the timer; a swipe never fires the bar's link */
  function swipe(root){(root||document).querySelectorAll('.usp-stack').forEach(st=>{if(st._s||st.children.length<2)return;st._s=1;let x0=null,y0=0,t=0;
    st.addEventListener('pointerdown',e=>{x0=e.clientX;y0=e.clientY});
    st.addEventListener('pointerup',e=>{if(x0===null)return;const dx=e.clientX-x0,dy=e.clientY-y0;x0=null;
      if(Math.abs(dx)>=30&&Math.abs(dx)>Math.abs(dy)){go(st,dx<0?1:-1);timer(st);t=Date.now()}});
    st.addEventListener('pointercancel',()=>{x0=null});
    st.addEventListener('click',e=>{if(Date.now()-t<500){e.preventDefault();e.stopPropagation()}},true);
    st.addEventListener('dragstart',e=>e.preventDefault())})}
  window.DG_usp=function(root){cds(root);wrap(root);rot(root);swipe(root)};
  let t;addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(()=>wrap(),120)});
  if(document.readyState!=='loading')window.DG_usp();else document.addEventListener('DOMContentLoaded',()=>window.DG_usp());
})();
