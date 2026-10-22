/* DG design system — Sign-up modal drop-in (21 Oct 2026, Brand Room sign-up popup · projects/brandroom-signup).
   Markup + behaviour for the .mdl--signup component in components.css (styles live there, not here).
     DG_signup.html(o)          → the layer markup (overlay + window) for one layout
     DG_signup.bind(layer,o,cb) → wires close / No thanks / tap outside, validation, steps, lockup rotation, sheet minimise
     DG_signup.LIVE             → the live copy (Bloomreach Engagement weblayer "A - Email & SMS Signup", scraped 21 Oct 2026)
   o = {layout:'split'|'bleed'|'lockup'|'sheet'|'flat'|'steps', img, lockups:[urls], logo, logoInv, flag,
        eyebrow, title, sub, cta, phone:'required'|'optional'|'off', no:bool, state:'form'|'error'|'done'|'step2', ratio:'45'|'34'|'11',
        brands:[names], picks:[names], exporting:bool, anim:bool (false = no open motion), imgM (mobile asset, split), scrim:bool (slide-in only; false = no overlay)}
   Every visible piece is DS: .mdl (Modal), .modal-x, .fld / .fld--tel (Input field), .bd.pri / .bd.txt (Button), .chip (Chips). */
(function(){
const LIVE={
  eyebrow:'Welcome To The Brand Room',
  title:'Sign up today for personalised style tips, exclusive offers & more',
  sub:'',
  cta:'JOIN',
  no:'No Thanks',
  email:'Email address',      /* live placeholder: “Enter your email” — DS floating label */
  phone:'Mobile number',      /* live: “Enter your phone number” — truncates at 390 with “(optional)” */
  errEmail:'Enter a valid email',
  errPhone:'Enter a valid phone number',
  legal:'By submitting your details, you agree to receive marketing communications from The Brand Room & our family of brands by email. You can unsubscribe at any point. You also consent to the use of your details in accordance with our',
  privacy:'https://www.thebrandroom.com/pages/informational/privacy',
  doneT:'Thank you!',
  doneB:'Keep an eye on your inbox for exclusive offers!',
  doneCta:'Continue Shopping'
};
const BRANDS=['Lacoste','BOSS','Calvin Klein','Tommy Hilfiger','Armani Exchange','GUESS','Ted Baker','Valentino','Sweaty Betty','Crew Clothing','Napapijri','Lyle & Scott','HUGO','DKNY','Hunter','Ilse Jacobsen'];
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function fields(o){
  const err=o.state==='error',ph=o.phone||'optional';
  const em=`<label class="fld${err?' invalid':''}"><input type="email" name="email" placeholder=" " autocomplete="email"${err?' value="jake.rayner@"':''}><span class="lbl">${esc(LIVE.email)}</span></label>${err?`<p class="fld-err">${esc(LIVE.errEmail)}</p>`:''}`;
  const tel=ph==='off'?'':`<label class="fld fld--tel"><span class="fld-pre"><img src="${esc(o.flag||'')}" alt=""><span class="fld-cc">+44</span></span><input type="tel" name="phone" placeholder=" " autocomplete="tel-national"><span class="lbl">${esc(LIVE.phone)}${ph==='optional'?'<span class="lbl-opt"> (optional)</span>':''}</span></label>`;
  return em+tel;
}
function legal(){return `<p class="sup-legal">${esc(LIVE.legal)} <a href="${LIVE.privacy}" target="_blank" rel="noopener">Privacy Policy</a></p>`}
/* header; o.thumb = the same 4:5 campaign image as a thumbnail beside the copy (slide-in always, two-step under 768 where the image column goes) */
function hd(o){const tx=`${o.logo?`<img class="sup-logo" src="${esc(o.logo)}" alt="The Brand Room">`:''}${o.eyebrow?`<p class="sup-eyebrow">${esc(o.eyebrow)}</p>`:''}<h2 class="sup-title">${esc(o.title)}</h2>${o.sub?`<p class="sup-sub">${esc(o.sub)}</p>`:''}`;
  return o.thumb?`<div class="sup-hd sup-hd--thumb"><img class="sup-thumb" src="${esc(o.thumb)}" alt=""><div class="sup-hd-tx">${tx}</div></div>`:`<div class="sup-hd">${tx}</div>`}
function form(o){return `<form class="sup-form" novalidate>${fields(o)}<button class="bd pri" type="submit"><span class="lbl">${esc(o.cta||LIVE.cta)}</span></button></form>${o.no!==false?`<button class="bd txt sup-no" type="button" data-sup-close>${esc(LIVE.no)}</button>`:''}${o.layout==='split'?'':legal()}`}   /* split: the legal sits in .sup-foot under both columns */
function done(o){return `<div class="sup-hd">${o.logo?`<img class="sup-logo" src="${esc(o.logo)}" alt="The Brand Room">`:''}<h2 class="sup-title">${esc(LIVE.doneT)}</h2><p class="sup-sub">${esc(LIVE.doneB)}</p></div><button class="bd pri" type="button" data-sup-close style="width:100%;height:50px">${esc(LIVE.doneCta)}</button>`}
/* two-step: 1 email → 2 brands + SMS → done */
function steps(o){
  const s=o.state==='done'?3:o.state==='step2'?2:1,picks=o.picks||['Lacoste','Calvin Klein','Sweaty Betty'];
  const dots=`<div class="sup-dots">${[1,2].map(i=>`<i class="${i<=Math.min(s,2)?'on':''}"></i>`).join('')}</div>`;
  const one=`<div class="sup-step" data-step="1" style="display:${s===1?'flex':'none'};flex-direction:column;gap:24px">${dots}${hd(o)}<form class="sup-form" novalidate>${fields(Object.assign({},o,{phone:'off'}))}<button class="bd pri" type="submit"><span class="lbl">${esc(o.cta||'Continue')}</span></button></form>${o.no!==false?`<button class="bd txt sup-no" type="button" data-sup-close>${esc(LIVE.no)}</button>`:''}${legal()}</div>`;
  const two=`<div class="sup-step" data-step="2" style="display:${s===2?'flex':'none'};flex-direction:column;gap:24px">${dots.replace('<i class="">','<i class="on">')}<div class="sup-hd"><p class="sup-eyebrow">You’re in</p><h2 class="sup-title">Which brands do you love?</h2><p class="sup-sub">Pick a few and we’ll tailor your style tips, new-in drops and offers to them.</p></div>
    <div class="sup-brands">${(o.brands||BRANDS).map(b=>`<button type="button" class="chip${picks.includes(b)?' on':''}" data-pick>${esc(b)}</button>`).join('')}</div>
    <form class="sup-form" novalidate>${o.phone==='off'?'':`<label class="fld fld--tel"><span class="fld-pre"><img src="${esc(o.flag||'')}" alt=""><span class="fld-cc">+44</span></span><input type="tel" name="phone" placeholder=" " autocomplete="tel-national"><span class="lbl">Get texts first<span class="lbl-opt"> (optional)</span></span></label>`}<button class="bd pri" type="submit"><span class="lbl">Save my brands</span></button></form>
    <button class="bd txt sup-no" type="button" data-sup-skip>Skip for now</button></div>`;
  const three=`<div class="sup-step" data-step="3" style="display:${s===3?'flex':'none'};flex-direction:column;gap:24px">${done(o)}</div>`;
  return one+two+three;
}
function body(o){
  if(o.layout==='steps')return `<div class="sup-body">${steps(o)}</div>`;
  return `<div class="sup-body">${o.state==='done'?done(o):hd(o)+form(o)}</div>`;
}
function html(o){
  o=Object.assign({},LIVE,o);
  const L=o.layout||'split',dark=L==='bleed'||L==='flat'||L==='lockup';
  const x=`<button class="modal-x modal-x--abs${dark?' modal-x--inv':''}" type="button" aria-label="Close" data-sup-close></button>`;
  const instant=o.exporting||o.anim===false;   /* anim:false = open with no fade / slide (review prototypes flicking between layouts) */
  const anim=instant?'':(L==='sheet'?' mdl-anim-up':' mdl-anim-fade');
  let win;
  if(L==='flat'){
    win=`<div class="mdl mdl--signup sup--flat${o.ratio==='34'?' sup--r34':o.ratio==='11'?' sup--r11':''}${anim}" role="dialog" aria-label="${esc(o.title)}"><a href="#signup" data-sup-flat>${art(o)}</a>${x}</div>`;
  }else if(L==='lockup'){
    const lk=(o.lockups||[]).map((u,i)=>`<img src="${esc(u)}" alt=""${i===(o.lock||0)?' class="on"':''}>`).join('');
    win=`<div class="mdl mdl--signup sup--lockup${anim}" role="dialog" aria-label="${esc(o.title)}">${x}<div class="sup-lock">${lk}</div>${body(Object.assign({},o,{logo:''}))}</div>`;
  }else{
    const cls=L==='steps'?'sup--split sup--steps':'sup--'+L;
    /* o.img = desktop asset (4:5 portrait), o.imgM = mobile asset (16:9 landscape, split: image on top under 768) — art-directed with <picture> */
    const pic=o.imgM?`<picture><source media="(max-width:767px)" srcset="${esc(o.imgM)}"><img src="${esc(o.img)}" alt=""></picture>`:`<img src="${esc(o.img)}" alt="">`;
    const media=o.img&&L!=='sheet'?`<div class="sup-media">${pic}</div>`:'';
    if(o.img&&(L==='sheet'||L==='steps'))o=Object.assign({},o,{thumb:o.img});
    const foot=L==='split'&&o.state!=='done'?`<div class="sup-foot">${legal()}</div>`:'';   /* split: legal under the content column (desktop) / under everything (mobile) */
    win=`<div class="mdl mdl--signup ${cls}${anim}" role="dialog" aria-label="${esc(o.title)}">${x}${media}${body(Object.assign({},o,{logo:''}))}${foot}</div>`;   /* the eyebrow already names the fascia — the logo is for the flat image only */
  }
  /* the DS Modal overlay (.mdl-scrim, 50% black) sits behind every layout; the slide-in can drop it with o.scrim:false (non-blocking) */
  const scrim=L==='sheet'&&o.scrim===false?'':'<div class="mdl-scrim" data-sup-close></div>';
  return `<div class="sup-layer${L==='sheet'?' sup-layer--free':''}${instant?' sup-layer--instant':''}" data-sup>${scrim}${win}</div>`;
}
/* the flat creative — one image; html2canvas exports .sup-art as the PNG that goes into the weblayer */
function art(o){
  return `<div class="sup-art"><img src="${esc(o.img)}" alt=""><span class="sup-art-fade"></span>
    <div class="sup-art-top">${o.logoInv?`<img src="${esc(o.logoInv)}" alt="The Brand Room">`:''}</div>
    <div class="sup-art-bot">${o.eyebrow?`<p class="sup-eyebrow">${esc(o.eyebrow)}</p>`:''}<h2 class="sup-title">${esc(o.title)}</h2><span class="sup-art-cta">${esc(o.cta||'Sign up')}</span></div></div>`;
}
const okEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const okPhone=v=>/^(?:0|\+?44)?7\d{9}$/.test(v.replace(/[\s()-]/g,''));
function bind(layer,o,cb){
  cb=cb||{};o=Object.assign({},LIVE,o);
  const win=layer.querySelector('.mdl--signup'),close=()=>{
    if(o.layout==='sheet'){win.style.display='none';const sc=layer.querySelector('.mdl-scrim');if(sc)sc.style.display='none';let t=layer.querySelector('.sup-tab');if(!t){layer.insertAdjacentHTML('beforeend',`<button class="sup-tab" type="button">${esc(o.tab||'Get style tips')} <span aria-hidden="true">↑</span></button>`);t=layer.querySelector('.sup-tab');t.onclick=()=>{win.style.display='';const sc=layer.querySelector('.mdl-scrim');if(sc)sc.style.display='';t.remove()}}}
    else{layer.remove()}
    cb.onClose&&cb.onClose()};
  layer.querySelectorAll('[data-sup-close]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();close()}));
  layer.querySelectorAll('[data-sup-flat]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();cb.onFlat&&cb.onFlat()}));
  const show=n=>layer.querySelectorAll('.sup-step').forEach(s=>s.style.display=+s.dataset.step===n?'flex':'none');
  layer.querySelectorAll('[data-pick]').forEach(c=>c.addEventListener('click',()=>c.classList.toggle('on')));
  layer.querySelectorAll('[data-sup-skip]').forEach(b=>b.addEventListener('click',()=>show(3)));
  layer.querySelectorAll('.sup-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();
    f.querySelectorAll('.fld-err').forEach(x=>x.remove());f.querySelectorAll('.fld').forEach(x=>x.classList.remove('invalid'));
    let bad=false;const err=(inp,msg)=>{bad=true;const l=inp.closest('.fld');l.classList.add('invalid');l.insertAdjacentHTML('afterend',`<p class="fld-err">${esc(msg)}</p>`)};
    const em=f.querySelector('input[type=email]'),tel=f.querySelector('input[type=tel]');
    if(em&&!okEmail(em.value.trim()))err(em,LIVE.errEmail);
    if(tel){const v=tel.value.trim(),req=o.phone==='required'&&o.layout!=='steps';if((v||req)&&!okPhone(v))err(tel,LIVE.errPhone)}
    if(bad)return;
    const step=f.closest('.sup-step');
    if(step){show(+step.dataset.step+1);return}
    const b=f.closest('.sup-body');b.innerHTML=done(Object.assign({},o,{logo:''}));const ft=layer.querySelector('.sup-foot');if(ft)ft.remove();
    b.querySelectorAll('[data-sup-close]').forEach(x=>x.addEventListener('click',close));
  }));
  /* co-brand lockup: the live GIF rotates the partner brand every second — here a cross-fade, frozen for exports */
  const lk=[...layer.querySelectorAll('.sup-lock img')];
  if(lk.length>1&&!o.exporting&&o.rotate!==false){let i=Math.max(0,lk.findIndex(x=>x.classList.contains('on')));
    const iv=setInterval(()=>{if(!layer.isConnected){clearInterval(iv);return}lk[i].classList.remove('on');i=(i+1)%lk.length;lk[i].classList.add('on')},2200)}
}
window.DG_signup={LIVE,BRANDS,html,bind,art};
})();
