/* USP banner behaviour — Figma 11982-37171 (components.css .hd-usp).
   1. Countdown: <span class="usp-cd" data-left="45261"> (seconds) or data-to="2026-10-07T23:59:59" renders DD:HH:MM:SS
      as <b>digits</b><i>:</i> and ticks every second. At zero it holds 00:00:00:00 (hide or swap the banner in the CMS).
   2. Dash wrap: in a .usp-row, once the two sides of a .usp-sep land on different lines the dash becomes a line break
      (a dash at the start or end of a line reads as a typo). Re-run on resize. */
(function(){
  const pad=n=>String(n).padStart(2,'0');
  const draw=(el,s)=>{s=Math.max(0,s);const p=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60].map(pad);
    el.innerHTML=p.map((d,i)=>(i?'<i>:</i>':'')+'<b>'+d+'</b>').join('');el.setAttribute('aria-label',`${+p[0]} days ${+p[1]} hours ${+p[2]} minutes left`)};
  const left=el=>el.dataset.to?Math.round((new Date(el.dataset.to)-Date.now())/1000):(el._end?Math.round((el._end-Date.now())/1000):0);
  function cds(root){(root||document).querySelectorAll('.usp-cd[data-left],.usp-cd[data-to]').forEach(el=>{if(el._t)return;
    if(el.dataset.left)el._end=Date.now()+(+el.dataset.left)*1000;el.setAttribute('role','timer');draw(el,left(el));el._t=setInterval(()=>draw(el,left(el)),1000)})}
  function wrap(root){(root||document).querySelectorAll('.usp-row').forEach(r=>{const k=[...r.children];k.forEach(e=>e.classList.remove('wrapbr'));
    k.forEach((e,i)=>{if(!e.classList.contains('usp-sep'))return;const a=k[i-1],b=k[i+1];if(a&&b&&Math.abs(a.offsetTop-b.offsetTop)>=4)e.classList.add('wrapbr')})})}
  window.DG_usp=function(root){cds(root);wrap(root)};
  let t;addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(()=>wrap(),120)});
  if(document.readyState!=='loading')window.DG_usp();else document.addEventListener('DOMContentLoaded',()=>window.DG_usp());
})();
