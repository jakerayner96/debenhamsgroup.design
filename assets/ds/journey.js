/* Journey — ONE source for a shopping journey (18 Nov 2026, Conversion master 2027 · the CTO's persona run on debenhams.com).
   The run found the same basket priced three ways, "Arrives tomorrow" on the PDP and a two-day range at checkout, one seller under three names,
   and a code box that kept the last code. Every one of those is two pages working something out on their own. This file works it out once:
     DG_journey.basket(brand)        → the journey basket [{id,img,brand,name,price,was,size,colour,qty,seller}] (the PDP product + one more line)
     DG_journey.sellers(items)       → [{name, site, items, note}] grouped by who sells and sends them ("Sold and sent by", one wording everywhere)
     DG_journey.METH                 → the delivery methods (pence, working days) — the PDP grid, the bag and checkout all read these
     DG_journey.by(n) / .arrive(n)   → the date n working days on from today ("Tomorrow, Thu 19 Nov" · "Wed 25 Nov"), the same on every page
     DG_journey.sums(items, o)       → {sub, mark, disc[], dsum, del, me, total, …} — Subtotal (full prices) · Discounts (sale + codes, named) · Delivery · Order Total
     DG_journey.code(codes, raw)     → {codes, msg} — applies a typed code: the field clears, the code shows as a chip, FREEDEL picks the fastest free method
     DG_journey.returns(seller)      → the one returns sentence (PDP, bag, checkout, confirmation)
     DG_journey.help(o)              → the DS Help strip (.help-strip): chat, email, help centre
   Today is fixed (window.DG_TODAY, default Wed 18 Nov 2026 10:38, the run) so every export reads the same. Order by midnight = today's cut-off. */
(function(){
  const DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const pn=s=>Math.round((parseFloat(String(s==null?'':s).replace(/[^0-9.]/g,''))||0)*100),gbp=p=>'£'+(p/100).toFixed(2);
  const today=()=>new Date(window.DG_TODAY||'2026-11-18T10:38:00');
  const SITE={debenhams:'Debenhams',boohoo:'boohoo',boohooman:'boohooMAN',plt:'PrettyLittleThing',karenmillen:'Karen Millen',warehouse:'Warehouse',brandroom:'The Brand Room'};
  /* delivery methods: one table. days = working days; Next Day only for lines the fascia sends itself (marketplace sellers send their own way) */
  const METH=[
    {id:'ss', n:'Super Saver Delivery',          d:'Up to 5 working days',   p:99, was:299,days:5,mfree:true},
    {id:'std',n:'Standard Delivery',             d:'Up to 4 working days',   p:399,days:4,mfree:true},
    {id:'exp',n:'Express Delivery',              d:'Within 2 working days',  p:499,days:2},
    {id:'nd', n:'Next Day Delivery',             d:'Order by midnight',      p:599,days:1,mfree:true},
    {id:'dpd',n:'Premium DPD Next Day Delivery', d:'Order by midnight',      p:690,days:1}];
  /* a marketplace seller sends its own parcel: its own lead time, free to the customer, no Next Day */
  const MARKET={debenhams:{name:'Living and Home',days:7}};
  function by(n,from){const d=new Date(from||today());let k=0;while(k<n){d.setDate(d.getDate()+1);if(d.getDay()%6)k++}return d}
  const fmt=d=>`${DAYS[d.getDay()]} ${d.getDate()} ${MON[d.getMonth()]}`;
  const ord=n=>n+(n%10===1&&n!==11?'st':n%10===2&&n!==12?'nd':n%10===3&&n!==13?'rd':'th');
  /* the PDP grid's own format ("Tomorrow" · "25th Nov"), from the same dates */
  const short=n=>{const d=by(n),t=today();const tm=new Date(t);tm.setDate(t.getDate()+1);return d.toDateString()===tm.toDateString()?'Tomorrow':ord(d.getDate())+' '+MON[d.getMonth()]};
  function arrive(n,o){const d=by(n),t=today(),tm=new Date(t);tm.setDate(t.getDate()+1);const tom=d.toDateString()===tm.toDateString();
    return (o&&o.bare?'':'Arrives ')+(tom?(o&&o.bare?'Tomorrow, ':'tomorrow, ')+fmt(d):(o&&o.bare?'':'by ')+fmt(d))}
  /* the journey basket: the fascia's PDP product (templates/products.js) in the persona's size + one more line (Debenhams: a marketplace seller's) */
  function basket(b){b=b||'debenhams';const P=(window.DG_PDP_PRODUCTS||{})[b]||(window.DG_PDP_PRODUCTS||{}).debenhams||{};
    const a={id:'j1',img:(P.imgs||[])[0]||'',brand:P.brand||SITE[b],name:P.name||'Product',price:P.price||'£20.00',was:P.was||'',size:(P.sizes||[])[3]||'One Size',colour:P.colour||'Black',qty:1,seller:'site'};
    const L=((window.PRODUCTS_ALL||{})[b]||[]),k=b==='debenhams'?15:3,x=L[k]||{};
    const m=MARKET[b];
    const two={id:'j2',img:`projects/plp-alignment/img/${b}/p${x.img!=null?x.img:k}.jpg`,brand:x.brand||SITE[b],name:x.name||'Product',price:x.price||'£20.00',was:x.was||'',size:'One Size',colour:'Multi',qty:1,seller:m?'market':'site'};
    return [a,two]}
  function sellers(items,b){b=b||'debenhams';const out=[],site=items.filter(x=>x.seller!=='market'),mk=items.filter(x=>x.seller==='market');
    if(site.length)out.push({name:SITE[b]||'Debenhams',site:true,items:site});
    if(mk.length){const m=MARKET[b]||{name:'Partner',days:7};out.push({name:m.name,site:false,items:mk,days:m.days,note:`${arrive(m.days)} · sent free by ${m.name}`})}
    return out}
  /* codes: one money-off and one delivery code can sit together; the field always clears; an unknown code says so */
  const CODES={FREEDEL:{kind:'del',label:'Free delivery on every method'},FASHION:{kind:'off',pct:10,label:'10% off full-price items'},WELCOME:{kind:'off',pct:10,label:'10% off full-price items'}};
  function code(codes,raw){const c=String(raw||'').trim().toUpperCase();codes=(codes||[]).slice();if(!c)return {codes,msg:null};
    const k=CODES[c];if(!k)return {codes,msg:{err:1,t:`We don’t recognise ${c}. Check the spelling, or try another code.`}};
    if(codes.includes(c))return {codes,msg:{t:`${c} is already applied.`}};
    const clash=codes.find(x=>CODES[x]&&CODES[x].kind===k.kind);if(clash)codes=codes.filter(x=>x!==clash);
    codes.push(c);return {codes,msg:{ok:1,t:clash?`${c} applied, in place of ${clash}. One ${k.kind==='del'?'delivery':'money-off'} code per order.`:k.kind==='del'?`${c} applied: delivery is free, so we’ve picked Next Day.`:''},picked:k.kind==='del'?'nd':null}}
  /* the order maths, once: Subtotal = full prices · Discounts = sale savings + each code, named · Delivery = the method (free with a delivery code or membership) */
  function sums(items,o){o=o||{};const me=METH.find(m=>m.id===o.meth)||METH[0],codes=o.codes||[];
    const sub=items.reduce((a,x)=>a+pn(x.was||x.price)*x.qty,0),mark=items.reduce((a,x)=>a+(x.was?(pn(x.was)-pn(x.price))*x.qty:0),0);
    const disc=[];if(mark)disc.push({n:'Sale savings',p:mark});
    codes.forEach(c=>{const k=CODES[c];if(k&&k.kind==='off'){const full=items.filter(x=>!x.was).reduce((a,x)=>a+pn(x.price)*x.qty,0),p=Math.round(full*k.pct/100);if(p)disc.push({n:`${c} · ${k.label}`,p})}});
    const freeDel=codes.some(c=>(CODES[c]||{}).kind==='del')||(o.member&&me.mfree);
    const del=freeDel?0:me.p,dsum=disc.reduce((a,d)=>a+d.p,0),extras=(o.extras||[]).reduce((a,x)=>a+x.p,0);
    return {sub,mark,disc,dsum,del,was:freeDel&&me.p?me.p:me.was||0,me,freeDel,extras,goods:sub-dsum,total:sub-dsum+del+extras,n:items.reduce((a,x)=>a+x.qty,0)}}
  const returns=s=>s&&!s.site?`Return within 21 days from Your Orders. ${esc(s.name)} emails your label: no printer or delivery note needed, and no fee per parcel.`
    :'Return within 21 days from Your Orders. We email your label: no printer or delivery note needed.';
  /* the Help strip (DS .help-strip): every page that takes money says how to reach a person */
  const IC='assets/ds/icons/lib/';
  const help=o=>{o=o||{};return `<section class="help-strip${o.flat?' help-strip--flat':''}" aria-labelledby="help-h"><h2 id="help-h">Need a hand?</h2><p>Real people, 8am to 10pm, every day.</p>
    <div class="help-acts"><button type="button" class="help-act"><img src="${IC}icons-support.svg" alt="" aria-hidden="true"><span>Chat with us</span></button><button type="button" class="help-act"><img src="${IC}icons-email.svg" alt="" aria-hidden="true"><span>Email us</span></button><button type="button" class="help-act"><img src="${IC}icons-question.svg" alt="" aria-hidden="true"><span>Help centre</span></button></div></section>`};
  window.DG_journey={METH,MARKET,CODES,SITE,SOLD:'Sold and sent by',today,by,fmt,short,arrive,basket,sellers,code,sums,returns,help,pn,gbp,esc};
})();
