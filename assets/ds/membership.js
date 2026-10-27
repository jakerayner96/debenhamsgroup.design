/* DG Group Design System — Membership box (C-member-box), drop-in. Added 16 Oct 2026.
   The PDP delivery-membership box: each fascia's live programme (captured 10 Sep 2026 in core-pdp-2026/brands-live.js, re-checked 16 Oct):
   Debenhams Unlimited · boohoo Premier Club · boohooMAN Premier · PLT Royalty · Karen Millen Premier. Warehouse and The Brand Room run none.
   CSS: components.css .member-box (--mb-bg / --mb-fg / --mb-img / --mb-cta-bg / --mb-cta-fg / --mb-cta-line / --mb-line / --mb-lg-h).
   Use:  DG_memberBoxHTML(brand[,o]) → html ('' when the fascia has no programme) · window.DG_MEMBERSHIP (data).
   o (21 Oct 2026, KM Premier colours): override the ground — {bg, fg, ctaBg, ctaFg, ctaLine (outlined ADD), line (1px keyline colour), img:true to keep the art};
   a dark fg swaps in the fascia's dark-ink logo (logoInk) where it has one.
   Membership band (C-member-band, 27 Oct 2026 — promoted from Account 2026's membership page band, used by projects/membership-landing):
   DG_memberBandHTML(brand[,o]) → the programme logo on its art, full width; o = {plus:true (Debenhams Unlimited+ wordmark), status:'Active' (right-hand label), size:'lg' (landing pages)}.
   CSS: components.css .member-band (--mb-bg / --mb-fg / --mb-img / --mb-band-h).
   DG_memberVars(brand[,o]) → the programme colours + art as custom properties · DG_memberLogo(brand[,o]) → the band wordmark url (27 Oct 2026). */
(function(root){
  /* absolute: a relative url() inside a custom property resolves against the stylesheet that uses it, not the page */
  const R=(typeof document!=='undefined'?new URL((root.DG_ASSET_BASE||'')+'assets/',document.baseURI).href:'assets/');
  const A=(typeof document!=='undefined'?new URL((root.DG_ASSET_BASE||'')+'assets/ds/membership/',document.baseURI).href:'assets/ds/membership/');
  const M={
    debenhams:  {band:{logo:'brands/memberships/unlimited-logo.svg',h:40},bandPlus:{name:'Debenhams Unlimited+',logo:'brands/memberships/unlimited-plus-logo.svg',h:40},name:'Debenhams Unlimited',logo:'prem-logo-deb.png',lgH:43,img:'prem-bg-deb.jpg',copy:'Enjoy unlimited delivery for an entire year from just £14.99',bg:'#DCDCDC',fg:'#000',ctaBg:'#000',ctaFg:'#FFF'},
    boohoo:     {band:{logo:'ds/membership/prem-logo-bh.png',h:12},name:'Premier Club',logo:'prem-logo-bh.png',lgH:15,img:'prem-bg-bh.jpg',copy:'Enjoy unlimited delivery for an entire year from just £9.99',bg:'#E1D8CF',fg:'#000',ctaBg:'#8D113A',ctaFg:'#FFF'},
    boohooman:  {band:{logo:'ds/membership/prem-logo-bm.png',h:22},name:'Premier',logo:'prem-logo-bm.png',lgH:24,img:'prem-bg-bm.jpg',copy:'Enjoy unlimited delivery for an entire year from just £9.99',bg:'#CECECE',fg:'#000',ctaBg:'#000',ctaFg:'#FFF'},
    plt:        {band:{logo:'ds/membership/prem-logo-plt.png',h:28},name:'Royalty',logo:'prem-logo-plt.png',lgH:26,img:'prem-bg-plt.jpg',copy:'Enjoy unlimited delivery for an entire year from just £9.99',bg:'#20090C',fg:'#FFF',ctaBg:'#FFF',ctaFg:'#000'},
    karenmillen:{band:{logo:'ds/membership/prem-logo-km.png',h:22},name:'Premier',logo:'prem-logo-km.png',logoInk:'prem-logo-km-ink.png',lgH:22,copy:'Enjoy unlimited delivery for an entire year from just £14.99',bg:'#000',fg:'#FFF',ctaBg:'#FFF',ctaFg:'#000'}
  };
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  root.DG_MEMBERSHIP=M;
  const dark=h=>{const x=String(h||'').replace('#','');if(x.length<6)return x==='000';const n=parseInt(x.slice(0,6),16);return ((n>>16)*299+((n>>8)&255)*587+(n&255)*114)/1000<128};
  root.DG_memberBoxHTML=function(brand,o){const b=M[brand];if(!b)return '';const m=Object.assign({},b,o||{});
    const img=m.img&&!(o&&o.bg&&o.img!==true)?m.img:'';   /* a custom ground drops the fascia art unless o.img:true */
    const logo=b.logoInk&&dark(m.fg)?b.logoInk:b.logo;
    const v=`--mb-bg:${m.bg};--mb-fg:${m.fg};--mb-cta-bg:${m.ctaBg};--mb-cta-fg:${m.ctaFg};--mb-lg-h:${m.lgH}px${m.line?`;--mb-line:${m.line}`:''}${m.ctaLine?`;--mb-cta-line:${m.ctaLine}`:''}${img?`;--mb-img:url(${A}${img})`:''}`;
    return `<div class="member-box" style="${v}"><div class="t"><span class="lg"><img src="${A}${logo}" alt="${esc(m.name)}"></span>${esc(m.copy)}</div><button class="add" type="button">Add</button></div>`};
  /* DG_memberVars(brand) → the programme's colours + art as custom properties, for a page section on the programme's ground (27 Oct 2026, membership landing):
     --mb-bg / --mb-fg / --mb-img / --mb-cta-bg / --mb-cta-fg / --mb-band-h (band logo height). '' when the fascia has no programme. */
  root.DG_memberVars=function(brand,o){const b=M[brand];if(!b)return '';const bd=(o&&o.plus&&b.bandPlus)||b.band||{};
    return `--mb-bg:${b.bg};--mb-fg:${b.fg};--mb-cta-bg:${b.ctaBg};--mb-cta-fg:${b.ctaFg};--mb-band-h:${bd.h||24}px;--mb-img:${b.img?`url(${A}${b.img})`:'none'}`};
  /* DG_memberLogo(brand[,o]) → the band wordmark url (Unlimited+ with o.plus) */
  root.DG_memberLogo=function(brand,o){const b=M[brand];if(!b||!b.band)return '';return R+((o&&o.plus&&b.bandPlus)||b.band).logo};
  root.DG_memberBandHTML=function(brand,o){const b=M[brand];if(!b||!b.band)return '';o=o||{};const bd=(o.plus&&b.bandPlus)||b.band;
    const v=`--mb-bg:${b.bg};--mb-fg:${b.fg};--mb-band-h:${bd.h}px${b.img?`;--mb-img:url(${A}${b.img})`:''}`;
    return `<div class="member-band${o.size==='lg'?' member-band--lg':''}" style="${v}"><span class="lg"><img src="${R}${bd.logo}" alt="${esc(bd.name||b.name)}"></span>${o.status?`<span class="st">${esc(o.status)}</span>`:''}</div>`};
})(typeof window!=='undefined'?window:globalThis);
