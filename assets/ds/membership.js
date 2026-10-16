/* DG Group Design System — Membership box (C-member-box), drop-in. Added 16 Oct 2026.
   The PDP delivery-membership box: each fascia's live programme (captured 10 Sep 2026 in core-pdp-2026/brands-live.js, re-checked 16 Oct):
   Debenhams Unlimited · boohoo Premier Club · boohooMAN Premier · PLT Royalty · Karen Millen Premier. Warehouse and The Brand Room run none.
   CSS: components.css .member-box (--mb-bg / --mb-fg / --mb-img / --mb-cta-bg / --mb-cta-fg / --mb-lg-h).
   Use:  DG_memberBoxHTML(brand) → html ('' when the fascia has no programme) · window.DG_MEMBERSHIP (data). */
(function(root){
  /* absolute: a relative url() inside a custom property resolves against the stylesheet that uses it, not the page */
  const A=(typeof document!=='undefined'?new URL((root.DG_ASSET_BASE||'')+'assets/ds/membership/',document.baseURI).href:'assets/ds/membership/');
  const M={
    debenhams:  {name:'Debenhams Unlimited',logo:'prem-logo-deb.png',lgH:43,img:'prem-bg-deb.jpg',copy:'Enjoy unlimited delivery for an entire year from just £14.99',bg:'#DCDCDC',fg:'#000',ctaBg:'#000',ctaFg:'#FFF'},
    boohoo:     {name:'Premier Club',logo:'prem-logo-bh.png',lgH:15,img:'prem-bg-bh.jpg',copy:'Enjoy unlimited delivery for an entire year from just £9.99',bg:'#E1D8CF',fg:'#000',ctaBg:'#8D113A',ctaFg:'#FFF'},
    boohooman:  {name:'Premier',logo:'prem-logo-bm.png',lgH:24,img:'prem-bg-bm.jpg',copy:'Enjoy unlimited delivery for an entire year from just £9.99',bg:'#CECECE',fg:'#000',ctaBg:'#000',ctaFg:'#FFF'},
    plt:        {name:'Royalty',logo:'prem-logo-plt.png',lgH:26,img:'prem-bg-plt.jpg',copy:'Enjoy unlimited delivery for an entire year from just £9.99',bg:'#20090C',fg:'#FFF',ctaBg:'#FFF',ctaFg:'#000'},
    karenmillen:{name:'Premier',logo:'prem-logo-km.png',lgH:22,copy:'Enjoy unlimited delivery for an entire year from just £14.99',bg:'#000',fg:'#FFF',ctaBg:'#FFF',ctaFg:'#000'}
  };
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  root.DG_MEMBERSHIP=M;
  root.DG_memberBoxHTML=function(brand){const m=M[brand];if(!m)return '';
    const v=`--mb-bg:${m.bg};--mb-fg:${m.fg};--mb-cta-bg:${m.ctaBg};--mb-cta-fg:${m.ctaFg};--mb-lg-h:${m.lgH}px${m.img?`;--mb-img:url(${A}${m.img})`:''}`;
    return `<div class="member-box" style="${v}"><div class="t"><span class="lg"><img src="${A}${m.logo}" alt="${esc(m.name)}"></span>${esc(m.copy)}</div><button class="add" type="button">Add</button></div>`};
})(typeof window!=='undefined'?window:globalThis);
