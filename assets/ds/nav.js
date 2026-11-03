/* DG Group Design System — navigation menu (3 Nov 2026): the mobile burger drawer (.mnav) and the desktop mega menu (.mega), copied from the live sites.
   Data: assets/ds/nav-live.js (DG_NAV_LIVE). CSS: components.css (.mnav · .mega). Load both after header.js; nothing else to call.
   It mounts on any page with the DS header (<html data-brand> picks the fascia):
     · .hd-burger click → the drawer (level 1 rows → level 2 groups for the row, back, close, Escape)
     · desktop .hd-nav → its links become the live categories (label colours as live); hovering one opens its mega menu, leaving closes it
   Links in the menu are .mnav-a / .mega-a (href="#"): a page or prototype can route them (the Master prototype sends them to the PLP).
   DG_nav.open() / .close() / .mega(i) for scripted states (exports, screenshots). */
(function(){
  /* asset paths from this script's own URL (…/assets/ds/nav.js), so pages with any <base> (the PLP resolves from its own folder) find them */
  const ME=(document.currentScript&&document.currentScript.src)||new URL('assets/ds/nav.js',document.baseURI).href;
  const DS=new URL('./',ME).href,ROOT=new URL('../../',ME).href,R=p=>new URL(p,ROOT).href;
  const LIB=()=>DS+'icons/lib/icons-';
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const brand=()=>document.documentElement.getAttribute('data-brand')||'debenhams';
  const D=()=>(window.DG_NAV_LIVE||{})[brand()]||(window.DG_NAV_LIVE||{}).debenhams;
  const norm=s=>String(s).toLowerCase().replace(/[^a-z]/g,'');
  function vars(st){const v={'--mn-l1-fs':st.l1[0]+'px','--mn-l1-fw':st.l1[1],'--mn-l1-col':st.l1[2],'--mn-mh-fs':st.mh[0]+'px','--mn-mh-fw':st.mh[1],'--mn-ml-fs':st.ml[0]+'px','--mn-ml-fw':st.ml[1],
      '--mn-dh-fs':st.dh[0]+'px','--mn-dh-fw':st.dh[1],'--mn-dl-fs':st.dl[0]+'px','--mn-dl-fw':st.dl[1],'--mn-line':st.line,'--mn-panel':st.panel,'--mn-veil':st.veil,'--mn-act':st.act,'--mn-badge':st.badge[0],'--mn-badge-fg':st.badge[1]};
    return Object.entries(v).map(([k,x])=>k+':'+x).join(';')}
  const groups=row=>{const d=D(),it=row.d&&d.d.find(x=>norm(x.t)===row.d);if(it&&it.cols.length)return it.cols.flat();return [{h:row.t,l:[{t:'View All '+row.t.replace(/^(view all )/i,'')}]}]};
  const badge=(b,cls)=>b?`<span class="${cls}">${esc(b)}</span>`:'';
  const link=(l,cls)=>`<a class="${cls}" href="#"${l.c?` style="color:${l.c}"`:''}>${esc(l.t)}${badge(l.b,cls==='mnav-a'?'mnav-b':'mega-b')}</a>`;
  /* ---- mobile drawer ---- */
  function drawer(){const d=D(),lg=document.querySelector('.hd-logo');
    return `<div class="mnav" role="dialog" aria-modal="true" aria-label="Menu" data-mnav style="${vars(d.st)}">
      <div class="mnav-hd">${lg&&lg.src?`<img class="lg" src="${esc(lg.src)}" alt="${esc(lg.alt||'')}">`:''}<i class="dv"></i><span class="cur"><img src="${DS}icons/flags/united-kingdom.svg" alt="">GBP £</span><button class="mnav-x" data-mn="close" aria-label="Close menu"><img src="${LIB()}close.svg" alt=""></button></div>
      <div class="mnav-body"><div class="mnav-pane mnav-pane--l1">${d.m.map((r,i)=>`<${r.sub?'button':'a href="#"'} class="mnav-row${r.sub?'':' mnav-a'}" data-mn="${r.sub?'l2':'go'}" data-i="${i}"${r.hl?` style="background:${r.hl[0]};color:${r.hl[1]}"`:''}>${r.img?`<img class="rd" src="${esc(R(r.img))}" alt="">`:''}<span>${esc(r.t)}</span>${r.sub?`<img class="ch" src="${LIB()}right.svg" alt="">`:''}</${r.sub?'button':'a'}>`).join('')}</div><div class="mnav-pane mnav-pane--l2" data-l2></div></div></div>`}
  function l2(i){const d=D(),r=d.m[i],el=document.querySelector('[data-l2]');if(!el||!r)return;
    el.innerHTML=`<button class="mnav-back" data-mn="back"><img src="${LIB()}left.svg" alt="">${esc(r.t)}</button>${groups(r).map(g=>`<div class="mnav-grp">${g.h?`<h3 class="mnav-h">${esc(g.h)}</h3>`:''}${g.l.map(l=>link(l,'mnav-a')).join('')}</div>`).join('')}`;
    el.scrollTop=0;document.querySelector('[data-mnav]').classList.add('l2')}
  function open(){close();document.body.insertAdjacentHTML('beforeend',drawer());document.documentElement.style.overflow='hidden'}
  function close(){document.querySelectorAll('[data-mnav]').forEach(x=>x.remove());document.documentElement.style.overflow=''}
  /* ---- desktop: live categories + mega menu ---- */
  function syncNav(){const d=D();document.querySelectorAll('.hd--desktop .hd-nav, .hd-nav').forEach(n=>{if(n.__mn===brand())return;n.__mn=brand();
    n.setAttribute('style',(n.getAttribute('style')||'')+';'+vars(d.st));
    const hl=t=>{const r=d.m.find(m=>m.hl&&norm(m.t)===norm(t));return r?r.hl:null};   /* a row highlighted in the drawer is highlighted in the bar too (Warehouse OUTLET) */
    n.innerHTML=d.d.map((x,i)=>{const h=hl(x.t);return `<a href="#" data-mega="${i}"${h?` class="hl" style="background:${h[0]};color:${h[1]}"`:x.c?` style="color:${x.c}"`:''}>${esc(x.t)}</a>`}).join('')})}
  let mt=null,cur=-1;
  function mega(i){const d=D(),it=d.d[i];clearTimeout(mt);if(i===cur&&document.querySelector('[data-mega-panel]'))return;unmega(true);cur=i;
    const a=document.querySelector(`.hd-nav [data-mega="${i}"]`);if(!a||!it||!it.cols.length){cur=-1;return}
    a.classList.add('mega-on');const top=Math.round((a.closest('.hd-nav')||a).getBoundingClientRect().bottom);
    document.body.insertAdjacentHTML('beforeend',`<div class="mega-veil" data-mega-veil style="top:${top}px;${vars(d.st)}"></div><div class="mega" data-mega-panel style="top:${top}px;${vars(d.st)}"><div class="mega-in">${it.cols.map(c=>`<div class="mega-col">${c.map(g=>`<div>${g.h?`<h3 class="mega-h">${esc(g.h)}</h3>`:''}${g.l.map(l=>link(l,'mega-a')).join('')}</div>`).join('')}</div>`).join('')}${it.tile?`<a class="mega-tile mega-a" href="#"><img src="${esc(R(it.tile.src))}" alt="">${it.tile.cap?`<span>${esc(it.tile.cap)}</span>`:''}</a>`:''}</div></div>`)}
  function unmega(now){const go=()=>{document.querySelectorAll('[data-mega-panel],[data-mega-veil]').forEach(x=>x.remove());document.querySelectorAll('.hd-nav .mega-on').forEach(x=>x.classList.remove('mega-on'));cur=-1};
    clearTimeout(mt);if(now)go();else mt=setTimeout(go,160)}
  document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('.hd-burger,[data-mn]');if(!t)return;
    if(t.classList.contains('hd-burger')){e.preventDefault();e.stopPropagation();open();return}
    const a=t.dataset.mn;if(a==='close'){e.preventDefault();close()}if(a==='l2'){e.preventDefault();l2(+t.dataset.i)}if(a==='back'){e.preventDefault();document.querySelector('[data-mnav]').classList.remove('l2')}
    if(a==='go')close()},true);
  document.addEventListener('mouseover',e=>{const t=e.target.closest&&e.target.closest('.hd-nav [data-mega]');if(t){mega(+t.dataset.mega);return}
    if(e.target.closest&&e.target.closest('[data-mega-panel]')){clearTimeout(mt);return}if(cur>=0&&!(e.target.closest&&e.target.closest('.hd-nav')))unmega()});
  document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('.mega-a,.mnav-a')){unmega(true);close()}});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){close();unmega(true)}});
  addEventListener('scroll',()=>{if(cur>=0)unmega(true)},{passive:true});
  const boot=()=>{syncNav();new MutationObserver(()=>{if(document.querySelector('.hd-nav')&&[...document.querySelectorAll('.hd-nav')].some(n=>n.__mn!==brand()))syncNav()}).observe(document.body,{childList:true,subtree:true})};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
  document.addEventListener('dg:render',syncNav);
  window.DG_nav={open,close,mega,l2,unmega:()=>unmega(true)};
})();
