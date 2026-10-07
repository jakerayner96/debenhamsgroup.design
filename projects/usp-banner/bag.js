/* Bag payment summary, matched to the live bags (captured 06 Oct 2026, /basket on each fascia, 390 + 1440).
   All seven fascias run the same basket. Desktop: a 390px right column on --surface-sunken holding a white summary card
   (Order Summary, Deliver+ CTAs, OR, wallets, card logos) and a separate Promo Code card under it. Mobile: the same block sits
   below the items, full-bleed, with Promo Code first, then a hairline, then the summary. There is no sticky checkout bar.
   Live has no Delivery row (delivery is priced at checkout); the optional Deliver+ add-on is the only extra row.
   renderBagSummary(brand, items, desk) returns the right-column html. renderBagTop(brand, items) is the mobile-only
   "Order Total + Checkout" strip live shows under "Your Bag (n)", above the items. */
(function(){
const I='assets/ds/icons/pay/',W='assets/ds/icons/payments/',L='projects/usp-banner/img/bag/';
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
window.renderBagSummary=function(brand,items,desk){
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
window.renderBagTop=function(brand,items){const B=window.BAG_LIVE,c=B[brand]||B.debenhams,t=sums(c,items||[]);
  return `<div class="bs bs-top${c.small?' bs--sm':''}${c.light?' bs--lt':''}" style="--bs-bg:${c.bg};--bs-fg:${c.fg};--bs-case:${c.up?'uppercase':'none'}"><div class="bs-ot">Order Total: <b>${gbp(t.goods)}</b></div><button type="button" class="bs-cta">${esc(c.cta[0])}</button></div>`};
window.BAG_CSS=`
.bs{font-family:var(--font-family-base);color:#000;background:var(--surface-sunken,#FAFAFA);display:flex;flex-direction:column;-webkit-font-smoothing:antialiased;text-align:left;line-height:normal;box-sizing:border-box}
.bs *{box-sizing:border-box}
.bs--d{gap:16px;width:100%;max-width:390px}.bs--m{padding-top:24px}
.bs-card{background:var(--surface-raised,#FFF);padding:24px;border-radius:var(--radius-default);display:flex;flex-direction:column;gap:24px}
.bs--m .bs-card{padding:24px 16px}.bs--m .bs-flat{background:none;border-radius:0}
.bs-hr{height:1px;background:#E5E7EB}
.bs-sum{display:flex;flex-direction:column;gap:16px}
.bs-h{font-size:20px;line-height:20px;font-weight:600}
.bs-r{display:flex;justify-content:space-between;align-items:center;gap:12px;font-size:16px;line-height:24px;font-weight:400}
.bs-r>span:last-child{white-space:nowrap}
.bs-dp{margin:8px 0}.bs-dp small{display:block;font-size:12px;line-height:18px;color:#6B7280}
.bs-tot{border-top:1px solid #E5E7EB;padding-top:16px;margin-top:0}.bs-tot b{font-weight:600}
.bs-di{display:flex;flex-direction:column;align-items:flex-end;font-size:14px;line-height:21px;margin-bottom:12px}
.bs-di b{font-weight:600}.bs-di .bs-r{font-size:14px;line-height:21px;justify-content:flex-end;gap:0}.bs-di .bs-r>span:first-child{text-align:right}.bs-di .bs-r>span:last-child{min-width:85px;text-align:right}
.bs-ctas{display:flex;flex-direction:column;gap:8px}
.bs-cta{display:flex;align-items:center;justify-content:center;width:100%;height:50px;border:0;border-radius:var(--radius-default);background:var(--bs-bg);color:var(--bs-fg);font:600 16px/16px var(--font-family-base);text-transform:var(--bs-case);cursor:pointer;padding:0 12px}
.bs-or{display:flex;align-items:center;gap:16px;color:#9CA3AF;font-size:14px;line-height:21px;margin:0 0 0}
.bs-or:before,.bs-or:after{content:"";flex:1;height:1px;background:#E5E7EB}
.bs-w{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;height:50px;border:0;border-radius:4px;cursor:pointer;font:400 18px/1 'Helvetica Neue',Helvetica,Arial,sans-serif;padding:0}
.bs-w img{display:block;width:auto}
.bs-pp{background:#FFC439;color:#2C2E2F}.bs-ap{background:#000}.bs-kl{background:#0E0E0E;color:#FFF;font-size:16px;gap:6px}
.bs-msg{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px 6px;font:400 11px/16px 'Helvetica Neue',Helvetica,Arial,sans-serif;color:#2C2E2F;text-align:center;margin:4px 0 0}
.bs-msg img{height:12px;width:auto;display:block}.bs-msg u{color:#0070E0}
.bs-cards{display:flex;justify-content:space-between;align-items:center;gap:2px}
.bs-cards img{height:21px;width:auto;min-width:0;flex:0 1 auto;display:block;object-fit:contain}
.bs-pr{gap:16px}
.bs-ph{font-size:18px;line-height:27px;font-weight:600}
.bs-pf{display:flex;gap:16px}
.bs-in{flex:1;min-width:0;height:50px;display:flex;align-items:center;padding:0 16px;border:1px solid #B5B5B5;border-radius:var(--radius-default);background:var(--surface-raised,#FFF);font-size:16px;font-weight:300;color:#757575;white-space:nowrap;overflow:hidden}
.bs-ap2{flex:none;height:50px;padding:0 20px;border:1px solid #B5B5B5;border-radius:var(--radius-default);background:var(--surface-raised,#FFF);font:400 16px/16px var(--font-family-base);color:#000;cursor:pointer}
.bs--lt .bs-cta{font-weight:400}
.bs--sm,.bs--sm .bs-ap2{color:#333}
.bs--sm .bs-h{font-size:16px;line-height:16px;font-weight:400}
.bs--sm .bs-r{font-size:12px;line-height:18px;font-weight:300}.bs--sm .bs-r>span:last-child{font-weight:400}
.bs--sm .bs-tot b{font-weight:400}.bs--sm .bs-di,.bs--sm .bs-di .bs-r{font-size:12px;line-height:18px}.bs--sm .bs-di b{font-weight:400}
.bs--sm .bs-cta{font-size:14px;font-weight:400}.bs--sm .bs-or{font-size:12px}
.bs--sm .bs-ph{font-size:16px;line-height:24px;font-weight:400}.bs--sm .bs-ap2{font-size:14px;font-weight:300}
.bs-top{background:var(--surface-raised,#FFF);gap:24px;padding:0 0 24px}
.bs-top .bs-ot{font-size:16px;line-height:24px}.bs-top .bs-ot b{font-weight:600;margin-left:4px}
.bs-top.bs--sm .bs-ot{font-size:12px}.bs-top.bs--sm .bs-ot b{font-weight:400}
`;
})();
