/* DG Group Design System — Bag payment summary (order-summary v2), drop-in. Promoted 16 Oct 2026 from projects/usp-banner/bag.js; CSS lives in components.css (.bs-*).
   Use: DG_bagSummaryHTML(brand, items, desk) · DG_bagTopHTML(brand, items) · window.BAG_LIVE (per-fascia data).
   Bag payment summary, matched to the live bags (captured 06 Oct 2026, /basket on each fascia, 390 + 1440).
   All seven fascias run the same basket. Desktop: a 390px right column on --surface-sunken holding a white summary card
   (Order Summary, Deliver+ CTAs, OR, wallets, card logos) and a separate Promo Code card under it. Mobile: the same block sits
   below the items, full-bleed, with Promo Code first, then a hairline, then the summary. There is no sticky checkout bar.
   Live has no Delivery row (delivery is priced at checkout); the optional Deliver+ add-on is the only extra row.
   renderBagSummary(brand, items, desk) returns the right-column html. renderBagTop(brand, items) is the mobile-only
   "Order Total + Checkout" strip live shows under "Your Bag (n)", above the items. */
(function(){
const A=(window.DG_ASSET_BASE||''),I=A+'assets/ds/icons/pay/',W=A+'assets/ds/icons/payments/',L=A+'assets/ds/icons/pay/';
const CARDS16=['visa','mastercard','amex','maestro','visa-electron','apple-pay','payplus','paypal','klarna','clearpay','google-pay','revolut'];
const CARDS25=['visa','mastercard','amex','maestro','visa-electron','apple-pay','paypal','klarna','clearpay','google-pay'];
const D=(o)=>Object.assign({dplus:null,dprice:2.99,cta:['Checkout with Deliver+','Checkout without Deliver+'],bg:'#000',fg:'#FFF',up:true,promo:null,
  pp:'Checkout',msg:'Pay in 30 days. Credit option.',wallets:['paypal','paylater','apple','klarna'],cards:CARDS25,applyUp:true},o);
window.BAG_LIVE={
  debenhams:D({dplus:'Debenhams Deliver+',bg:'#7BE7D8',fg:'#000',promo:'{p}% Off applied',pp:'',cards:CARDS16}),
  boohoo:D({dplus:'Boohoo Deliver+',bg:'#444444',promo:'{p}% off!*'}),
  boohooman:D({dplus:'BOOHOOMAN Deliver+',promo:'{p}% OFF'}),
  plt:D({dplus:'PLT Deliver+',cta:['Checkout with PLT Deliver+','Checkout without PLT Deliver+'],bg:'#550503',promo:'{p}% OFF*!',small:true}),
  karenmillen:D({dplus:'Karen Millen Deliver+',dprice:3.33,up:false,applyUp:false,light:true}), /* KM: markdowns sit in the price, no Discount row */
  warehouse:D({dplus:'Warehouse Deliver+',dprice:11.25,fg:'#F1F1F1',msg:'Pay in 3 interest-free payments of {3}. Credit option.',cards:CARDS16}),
  brandroom:D({cta:['Checkout'],up:false,applyUp:false,wallets:['paypal','paylater'],cards:['visa','mastercard','amex','maestro','visa-electron','apple-pay','paypal','clearpay','klarna']}) /* no Deliver+, single CTA, no OR, no Apple Pay / Klarna buttons */
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=s=>parseFloat(String(s||'').replace(/[^\d.]/g,''))||0,gbp=n=>'£'+n.toFixed(2);
const sums=(c,items)=>{const now=items.reduce((a,x)=>a+num(x.price),0),was=items.reduce((a,x)=>a+num(x.was||x.price),0);
  const disc=c.promo&&was>now?was-now:0,sub=disc?was:now,dp=c.dplus?c.dprice:0;return{sub,disc,dp,total:sub-disc+dp,goods:sub-disc}};
const row=(l,v,cls)=>`<div class="bs-r${cls?' '+cls:''}"><span>${l}</span><span>${v}</span></div>`;
const logo=k=>`<img src="${k==='revolut'?L+'revolut-pay.png':I+k+'.png'}" alt="${esc(k)}">`;
const WAL={
  paypal:c=>`<button type="button" class="bs-w bs-pp"><img src="${W}paypal-wordmark.svg" alt="PayPal" style="height:22px">${c.pp?`<span>${esc(c.pp)}</span>`:''}</button>`,
  paylater:()=>`<button type="button" class="bs-w bs-pp"><img src="${W}paypal-monogram.png" alt="" style="height:20px"><span>Pay Later</span></button>`,
  apple:()=>`<button type="button" class="bs-w bs-ap"><img src="${W}applepay-onblack.svg" alt="Apple Pay" style="height:22px"></button>`,
  klarna:()=>`<button type="button" class="bs-w bs-kl"><span>Pay with</span><img src="${W}klarna-badge.svg" alt="Klarna" style="height:26px"></button>`
};
window.DG_bagSummaryHTML=window.renderBagSummary=function(brand,items,desk){
  const B=window.BAG_LIVE,c=B[brand]||B.debenhams,t=sums(c,items||[]),pct=t.sub?Math.round(t.disc/t.sub*100):0;
  const sum=`<div class="bs-sum"><div class="bs-h">Order Summary</div>${row('Subtotal',gbp(t.sub))}${t.disc?row('Discount','-'+gbp(t.disc)):''}
    ${c.dplus?`<div class="bs-r bs-dp"><span>${esc(c.dplus)}<small>Optional add-on</small></span><span>${gbp(c.dprice)}</span></div>`:''}${row('Order Total',`<b>${gbp(t.total)}</b>`,'bs-tot')}</div>
    ${t.disc?`<div class="bs-di"><b>Discounts included:</b>${row(esc(c.promo.replace('{p}',pct)),'-'+gbp(t.disc))}</div>`:''}`;
  const msg=esc(c.msg.replace('{3}',gbp(t.total/3)));
  const pay=`<div class="bs-ctas">${c.cta.map(l=>`<button type="button" class="bs-cta">${esc(l)}</button>`).join('')}
    ${c.cta.length>1?'<div class="bs-or"><span>OR</span></div>':''}${c.wallets.map(k=>(WAL[k](c))+(k==='paylater'?`<div class="bs-msg"><img src="${W}bnpl-paypal-logo.svg" alt="PayPal"><span>${msg} <u>Learn more</u></span></div>`:'')).join('')}</div>
    <div class="bs-cards">${c.cards.map(logo).join('')}</div>`;
  const promo=`<div class="bs-card bs-pr"><div class="bs-ph">Promo Code</div><div class="bs-pf"><span class="bs-in">Enter code here...</span><button type="button" class="bs-ap2">${c.applyUp?'APPLY':'Apply'}</button></div></div>`;
  const vars=`--bs-bg:${c.bg};--bs-fg:${c.fg};--bs-case:${c.up?'uppercase':'none'}`;
  return `<div class="bs${desk?' bs--d':' bs--m'}${c.small?' bs--sm':''}${c.light?' bs--lt':''}" style="${vars}">${desk?`<div class="bs-card">${sum}${pay}</div>${promo}`:`${promo}<div class="bs-hr"></div><div class="bs-card bs-flat">${sum}${pay}</div>`}</div>`;
};
window.DG_bagTopHTML=window.renderBagTop=function(brand,items){const B=window.BAG_LIVE,c=B[brand]||B.debenhams,t=sums(c,items||[]);
  return `<div class="bs bs-top${c.small?' bs--sm':''}${c.light?' bs--lt':''}" style="--bs-bg:${c.bg};--bs-fg:${c.fg};--bs-case:${c.up?'uppercase':'none'}"><div class="bs-ot">Order Total: <b>${gbp(t.goods)}</b></div><button type="button" class="bs-cta">${esc(c.cta[0])}</button></div>`};
})();
