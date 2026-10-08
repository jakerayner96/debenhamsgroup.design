/* USP banner behaviour — Figma 11982-37171 (components.css .hd-usp).
   1. Countdown: <span class="usp-cd" data-left="45261"> (seconds) or data-to="2026-10-07T23:59:59" renders DD:HH:MM:SS
      as <b>digits</b><i>:</i> and ticks every second. At zero it holds 00:00:00:00 (hide or swap the banner in the CMS).
   2. Dash wrap: in a .usp-row, once the two sides of a .usp-sep land on different lines the dash becomes a line break
      (a dash at the start or end of a line reads as a typo). Re-run on resize.
   3. Rotation: <div class="usp-stack" data-rotate="5000"> holding .hd-usp messages (one .on) crossfades to the next every 5s
      (the outgoing one stays solid underneath as .was). Pauses while the tab is hidden; stops once the row leaves the page.
   4. Swipe: on any .usp-stack with 2+ messages, swipe left = next, right = previous (restarts the 5s timer; the swipe never fires the link).
   5. Render (drop-in): with assets/ds/usp-live.js loaded, <div data-usp-banners="plt"></div> fills itself with that fascia's live rows
      (data-usp-pos="below" (default) | "above" — rows set to that position; data-usp-caveats="on"; data-usp-auto="0–5"; re-renders at the
      1024 breakpoint). Or DG_uspHTML(rows, {brand, desk, caveats, auto, link}) → {above, below} HTML. Countdown digits: black on light bars; on black bars white, or red when the row sets cd:'red'. */
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
  /* ---- 5. render ---- */
  const esc=v=>String(v??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const MOD={fascia:'',alt:'hd-usp--b',top:'hd-usp--top',g05:'usp--g05',g1:'usp--g1',black:'usp--black',red:'usp--red'};
  const tone=(brand,c)=>({g05:'light',g1:'light',black:'dark',red:'dark'})[c]||(((window.DG_USP_TONE||{})[brand]||(window.DG_USP_TONE||{})._||{})[c||'fascia'])||'light';
  window.DG_uspTone=tone;
  function bar(m,colour,on,o){const b=Object.assign({},m);
    if(!o.caveats){b.t1=(b.t1||'').replace(/\*/g,'').trim();b.t2=(b.t2||'').replace(/\*/g,'').trim()}       // caveats off: no asterisks, no caveat line
    const parts=['<span class="usp-t">'+esc(b.t1)+'</span>'];
    if(b.type==='double'||(/countdown/.test(b.type)&&b.t2))parts.push('<span class="usp-t">'+esc(b.t2)+'</span>'); // countdown messages may carry a second line (KM)
    if(b.type==='code'||b.type==='codecountdown')parts.push('<span class="usp-code">Code: <b>'+esc((b.code||'').toUpperCase())+'</b></span>');
    const cd=(b.type==='countdown'||b.type==='codecountdown')?'<span class="usp-cd" data-left="'+Math.max(0,Math.round((+b.hours||0)*3600))+'"></span>':'';
    const star=/\*/.test((b.t1||'')+(b.type==='double'||/countdown/.test(b.type)?b.t2||'':''));
    const cav=star&&(b.caveat||o.flag)?'<span class="usp-cav">'+(esc(b.caveat)||'*Caveat required, every asterisk needs one')+'</span>':'';
    const dom=(window.DG_USP_DOMAINS||{})[o.brand],href=b.href?(o.link==='path'||!dom||/^https?:/.test(b.href)?b.href:dom+b.href):'';
    const tn=tone(o.brand,colour),cls='hd-usp '+(MOD[colour||'fascia']||'')+' usp-'+tn+(tn==='dark'&&(o.cd==='red'||colour==='red')?' usp-cd-red':'')+(star&&!b.caveat&&o.flag?' cav-missing':'')+(on?' on':'');
    return href?'<a class="'+cls+'" href="'+esc(href)+'" data-href="'+esc(b.href)+'">'+'<span class="usp-row">'+parts.join('<span class="usp-sep"></span>')+'</span>'+cd+cav+'</a>'
               :'<div class="'+cls+'"><span class="usp-row">'+parts.join('<span class="usp-sep"></span>')+'</span>'+cd+cav+'</div>'}
  function rowHTML(r,o){const L=r.items&&r.items.length?r.items:[r];o=Object.assign({},o,{cd:r.cd||'white'});
    if(L.length<2)return '<div class="usp-row1">'+bar(L[0],r.colour,1,o)+'</div>';
    if(o.desk)return '<div class="usp-row1 usp-cells'+((r.colour||'fascia')==='fascia'?' usp-cells--alt':'')+'">'+L.map(m=>bar(m,r.colour,1,o)).join('')+'</div>';
    const cur=(r.rotate?0:(r.idx||0))%L.length,ms=r.rotate&&o.auto>0?o.auto*1000:0;
    return '<div class="usp-row1 usp-stack"'+(ms?' data-rotate="'+ms+'"':'')+'>'+L.map((m,j)=>bar(m,r.colour,j===cur,o)).join('')+'</div>'}
  window.DG_uspHTML=function(rows,o){o=Object.assign({brand:document.documentElement.dataset.brand,desk:innerWidth>=1024,caveats:false,auto:5,link:'live',flag:false},o||{});
    if(typeof rows==='string'){o.brand=rows;rows=(window.DG_USP_LIVE||{})[rows]||[]}
    const out={above:'',below:''};(rows||[]).forEach(r=>{if(r&&r.on!==false)out[r.pos==='above'?'above':'below']+=rowHTML(r,o)});return out};
  function mount(){document.querySelectorAll('[data-usp-banners]').forEach(el=>{const d=el.dataset,brand=d.uspBanners||document.documentElement.dataset.brand;
    el.innerHTML=window.DG_uspHTML(brand,{brand,caveats:d.uspCaveats==='on',auto:d.uspAuto!=null?+d.uspAuto:5})[d.uspPos==='above'?'above':'below'];el.classList.add('usps');window.DG_usp(el)})}
  window.DG_uspMount=mount;
  matchMedia('(min-width:1024px)').addEventListener('change',()=>{if(document.querySelector('[data-usp-banners]'))mount()});
  let t;addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(()=>wrap(),120)});
  const boot=()=>{if(document.querySelector('[data-usp-banners]'))mount();window.DG_usp()};
  if(document.readyState!=='loading')boot();else document.addEventListener('DOMContentLoaded',boot);
})();
