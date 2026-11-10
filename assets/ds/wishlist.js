/* DG Group Design System — wishlist drop-in (10 Nov 2026; toast pattern, Jake: Principles' black "Added to wishlist · Manage" bar → the DS floating white toast).
   Every wishlist button on a page — PLP cards (.pc-iconbtn), the PDP title (.wish), .wl-btn, anything with aria-label "Add to wishlist" or [data-wish] —
   toggles on tap: the glyph swaps to its filled form (heart / bookmark / PLT heart → *-fill.svg) with a small pop, and the DS toast confirms it
     add    → "Added to Wishlist" · Manage   (spinner while saving, then Manage — Figma DS Toast 13557-10294) · Manage fires dg:wishlist-manage
     remove → "Removed from Wishlist" · Undo
   Placement is the DS toast's (toast.js): bottom of the screen on phones, top-centred under the USP banners on desktop. Needs toast.js (loaded on demand).
   Events: dg:wishlist {on, el} · dg:wishlist-manage {el}.  Options: window.DG_WISH_OPTS = {busy:true, ms:6000, msgOn, msgOff, action, undo}. */
(function(root){
  if(root.DG_wishlist)return;
  const me=document.currentScript&&document.currentScript.src;
  const SEL='[aria-label="Add to wishlist"],[aria-label="Remove from wishlist"],[data-wish]';
  const O=()=>Object.assign({busy:true,ms:6000,msgOn:'Added to Wishlist',msgOff:'Removed from Wishlist',action:'Manage',undo:'Undo'},root.DG_WISH_OPTS||{});
  function needToast(cb){if(root.DG_toast)return cb();const s=document.createElement('script');s.src=me?me.replace(/wishlist\.js(\?.*)?$/,'toast.js'):'assets/ds/toast.js';s.onload=cb;document.head.appendChild(s)}
  function glyph(btn,on){const img=btn.querySelector('img');if(!img)return;const src=img.getAttribute('src')||'';
    const n=on?(/-fill\.svg/.test(src)?src:src.replace(/\.svg(\?.*)?$/,'-fill.svg$1')):src.replace(/-fill\.svg/,'.svg');if(n!==src)img.setAttribute('src',n)}
  function set(btn,on){btn.classList.toggle('is-wished',on);btn.setAttribute('aria-pressed',on?'true':'false');
    if(btn.hasAttribute('aria-label'))btn.setAttribute('aria-label',on?'Remove from wishlist':'Add to wishlist');glyph(btn,on);
    btn.dispatchEvent(new CustomEvent('dg:wishlist',{bubbles:true,detail:{on,el:btn}}))}
  function toggle(btn,quiet){const on=!btn.classList.contains('is-wished');set(btn,on);if(quiet)return;const o=O();
    needToast(()=>{
      if(on){const t=root.DG_toast({msg:o.msgOn,action:o.busy?null:o.action,busy:o.busy,ms:o.ms,onAction:()=>btn.dispatchEvent(new CustomEvent('dg:wishlist-manage',{bubbles:true,detail:{el:btn}}))});
        if(o.busy)setTimeout(()=>t.done(o.action),700)}
      else root.DG_toast({msg:o.msgOff,action:o.undo,ms:o.ms,onAction:()=>toggle(btn,true)})})}
  document.addEventListener('click',e=>{const b=e.target.closest&&e.target.closest(SEL);if(!b||b.closest('[data-wish-off]'))return;
    e.preventDefault();e.stopPropagation();toggle(b)},true);
  root.DG_wishlist={toggle,set};
})(typeof window!=='undefined'?window:globalThis);
