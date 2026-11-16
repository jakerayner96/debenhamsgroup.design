/* DG Group Design System — Homepage 2.0 content components (16 Nov 2026, Conversion master).
   Source: Figma "Homepage 2.0" Hd0yRD6JgyyyJMWhWzFcNe (Designs 69:4875 profiles 1–6 · Whiteboard Homepage 763:11725 app builds Ruby / Freya / Patricia ·
   Overview 753:39609 "the Brain": user data → intelligence engine → personalised experience, 5 experience types G S V P T).
   One renderer per module type; every module is live text on clean imagery (no copy baked into images), 2:3 product imagery through the DS product
   card (DG_pcarCard / DG_pcarHTML), DS buttons (.bd), roundels, category pills. Data contract: assets/ds/home2-profiles.js (DG_H2_PROFILES).
   API:  DG_h2HTML(profile, {brand, desk}) → html of the module stack · DG_h2Module(m, ctx) → one module · DG_h2Mount(root) → wires the interactions
         (stories viewer, quiz sheet, before/after, hotspots, scratch, countdowns, bundle totals, scroll reveal). CSS: components.css "Homepage 2.0". */
(function(root){
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const IMG=k=>k?(/[\/.]/.test(k)?k:`assets/ds/img/home2/${k}.webp`):'';
  const XT={G:'Guided & interactive',S:'Social & community',V:'Visually similar',P:'Personalisation & context',T:'Themes & moments'};
  root.DG_H2_XT=XT;
  /* ---------- products ---------- */
  function products(brand,q,n,seed){const all=((root.PRODUCTS_ALL||{})[brand])||[];let ix=[];
    if(q){let re;try{re=new RegExp(q,'i')}catch(e){re=null}
      if(re)all.forEach((p,i)=>{if(re.test(p.name||''))ix.push(i)})}
    if(ix.length<4){const s=(seed||0)%Math.max(1,all.length);ix=ix.concat(all.map((p,i)=>(i+s)%all.length).filter(i=>ix.indexOf(i)<0))}
    return ix.slice(0,n||10).map(i=>root.DG_feedItem?root.DG_feedItem(brand,i):null).filter(Boolean)}
  root.DG_h2Products=products;
  const card=(p,o)=>root.DG_pcarCard?root.DG_pcarCard(p,Object.assign({info:'noswatch'},o||{})):'';
  const rail=(c,items,o)=>root.DG_pcarHTML?`<div class="h2-pad">${root.DG_pcarHTML(Object.assign({size:'md',items,full:true,eager:c.eager,round:c.brand==='plt'},o||{}))}</div>`:'';
  const btn=(label,cls,attrs)=>label?`<a class="bd ${cls||'pri'}" href="#" data-h2-go="plp"${attrs||''}>${esc(label)}</a>`:'';
  const head=(m,o)=>{o=o||{};if(!m.title&&!m.eyebrow)return '';
    return `<header class="h2-head${o.center?' h2-head--c':''}">${m.eyebrow?`<p class="h2-eyebrow">${esc(m.eyebrow)}</p>`:''}${m.title?`<h2 class="h2-title">${esc(m.title)}</h2>`:''}${m.sub?`<p class="h2-sub">${esc(m.sub)}</p>`:''}${o.cta?`<div class="h2-head-cta">${o.cta}</div>`:''}</header>`};
  const media=(k,cls,alt,eager)=>`<span class="h2-media ${cls||''}"><img src="${esc(IMG(k))}" alt="${esc(alt||'')}" loading="${eager?'eager':'lazy'}" decoding="async"></span>`;
  /* ---------- module renderers ---------- */
  const R={};
  R.hero=(m,c)=>`<section class="h2-hero"><div class="h2-hero-stage">${media(m.img,'h2-hero-img',m.title,true)}
      <div class="h2-hero-copy">${m.eyebrow?`<p class="h2-eyebrow">${esc(m.eyebrow)}</p>`:''}<h1 class="h2-display">${esc(m.title)}</h1>${m.sub?`<p class="h2-sub">${esc(m.sub)}</p>`:''}<div class="h2-ctas">${btn(m.cta||'Shop now','inv')}</div></div></div>
      ${m.rail?`<div class="h2-hero-rail">${rail(c,products(c.brand,m.rail.q,10,c.k),{size:'sm',title:m.rail.title||''})}</div>`:''}</section>`;
  R.split=(m,c)=>{const P=products(c.brand,m.q,4,c.k);
    return `<section class="h2-split"><a class="h2-split-panel" href="#" data-h2-go="plp">${media(m.img,'',m.title)}<span class="h2-split-copy">${m.eyebrow?`<span class="h2-eyebrow">${esc(m.eyebrow)}</span>`:''}<span class="h2-title">${esc(m.title)}</span>${m.sub?`<span class="h2-sub">${esc(m.sub)}</span>`:''}<span class="bd inv sm">${esc(m.cta||'Shop now')}</span></span></a>
      <div class="h2-grid2">${P.map(p=>card(p)).join('')}</div></section>`};
  R.rail=(m,c)=>{let P=products(c.brand,m.q,10,c.k);
    if(m.flag==='drop')P=P.map((p,j)=>j<3&&!p.was?Object.assign({},p,{was:p.price,price:'£'+(parseFloat(String(p.price).replace(/[^0-9.]/g,''))*.8).toFixed(2),pct:'20'}):p);
    const tag=m.flag==='drop'?'<span class="h2-flag">Price drops on 3 of your saved items</span>':m.flag==='rated'?'<span class="h2-flag">4.5★ and above, from people who bought them</span>':m.flag==='wish'?'<span class="h2-flag">Saved by you</span>':'';
    return `<section class="h2-rail">${tag}${rail(c,P,{size:'lg',title:m.title,sub:m.sub,tabs:m.tabs})}</section>`};
  R.trio=(m,c)=>`<section class="h2-trio">${head(m)}<div class="h2-scroller h2-trio-row">${(m.items||[]).map(t=>`<a class="h2-tile" href="#" data-h2-go="plp">${media(t.img,'',t.title)}<span class="h2-tile-copy"><span class="h2-tile-t">${esc(t.title)}</span>${t.sub?`<span class="h2-tile-s">${esc(t.sub)}</span>`:''}<span class="bd inv sm">${esc(t.cta||'View collection')}</span></span></a>`).join('')}</div></section>`;
  R.ugc=(m,c)=>`<section class="h2-ugc">${head(m)}<div class="h2-ugc-grid">${(m.items||[]).slice(0,4).map((u,j)=>`<a class="h2-ugc-post" href="#" data-h2-go="pdp">${media(u.img,'',`Post by ${u.handle}`)}<span class="h2-handle">${esc(u.handle)}</span><span class="h2-ugc-shop" aria-hidden="true"><img src="assets/ds/icons/quick-add-16.svg" alt=""></span></a>`).join('')}</div></section>`;
  R.creators=(m,c)=>`<section class="h2-creators">${head(m)}<div class="h2-scroller">${(m.items||[]).map(u=>`<a class="h2-creator-card" href="#" data-h2-go="plp">${media(u.img,'',u.handle)}<span class="h2-creator-copy"><span class="h2-eyebrow">Style like</span><span class="h2-creator-h">${esc(u.handle)}</span><span class="bd inv sm">Shop the look</span></span></a>`).join('')}</div></section>`;
  R.creator=(m,c)=>`<section class="h2-creator"><header class="h2-creator-hd">${media(m.img,'h2-avatar',m.name)}<span><span class="h2-eyebrow">${esc(m.eyebrow||'Top picks from')}</span><span class="h2-title">${esc(m.name)}</span></span></header>${rail(c,products(c.brand,m.q,10,c.k+3),{size:'sm'})}</section>`;
  R.stories=(m,c)=>`<section class="h2-stories" data-h2-stories='${esc(JSON.stringify((m.items||[]).map(s=>({l:s.label,i:IMG(s.img)}))))}'>${head(m)}<div class="h2-scroller h2-story-row">${(m.items||[]).map((s,j)=>`<button type="button" class="h2-story" data-story="${j}">${media(s.img,'h2-ring',s.label)}<span>${esc(s.label)}</span></button>`).join('')}</div></section>`;
  R.roundels=(m,c)=>`<section class="h2-roundels">${head(m)}<div class="h2-scroller h2-roundel-row">${(m.items||[]).map(r=>`<a class="roundel" href="#" data-h2-go="plp"><i>${r.img?`<img src="${esc(IMG(r.img))}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover">`:''}</i><span>${esc(r.label)}</span></a>`).join('')}</div></section>`;
  R.pills=(m,c)=>`<section class="h2-pills">${head(m,{center:true})}<div class="h2-pill-cloud">${(m.items||[]).map(t=>`<a class="catpill" href="#" data-h2-go="plp">${esc(t)}</a>`).join('')}</div></section>`;
  R.wheel=(m,c)=>`<section class="h2-wheel"><ul>${(m.items||[]).map((t,j)=>`<li><a href="#" data-h2-go="plp" class="${j===Math.floor((m.items||[]).length/2)?'on':''}">${esc(t)}</a></li>`).join('')}</ul></section>`;
  R.marquee=(m,c)=>{const L=m.items||[],I=m.imgs||[];const run=L.map((t,j)=>`<span class="h2-mq-t">${esc(t)}</span>${I.length?`<span class="h2-mq-chip"><img src="${esc(IMG(I[j%I.length]))}" alt="" loading="lazy"></span>`:''}`).join('');
    return `<section class="h2-marquee" aria-label="${esc(L.join(', '))}"><div class="h2-mq-track">${run}${run}</div><div class="h2-mq-track h2-mq-track--rev">${run}${run}</div></section>`};
  R.band=(m,c)=>{if(['unlimited','subscribe'].includes(m.kind)&&root.DG_hasDplus&&!root.DG_hasDplus(c.brand)&&m.kind==='unlimited')return '';
    return `<section class="h2-band h2-band--${esc(m.kind||'account')}"><div class="h2-band-in">${m.eyebrow?`<p class="h2-eyebrow">${esc(m.eyebrow)}</p>`:''}<h2 class="h2-title">${esc(m.title)}</h2>${m.sub?`<p class="h2-sub">${esc(m.sub)}</p>`:''}<div class="h2-ctas">${btn(m.cta||'Find out more','pri')}</div></div></section>`};
  R.countdown=(m,c)=>{const left=Math.round((+m.hours||48)*3600);
    return `<section class="h2-count">${head(Object.assign({},m,{sub:''}),{cta:btn(m.cta||'Shop now','sec sm')})}<div class="h2-cd" data-left="${left}" aria-label="Time left">${['Days','Hours','Mins','Secs'].map(u=>`<span><b>00</b><small>${u}</small></span>`).join('')}</div>${rail(c,products(c.brand,m.q,10,c.k+5),{size:'sm'})}</section>`};
  R.quiz=(m,c)=>`<section class="h2-quiz"><div class="h2-quiz-in">${m.img?media(m.img,'h2-quiz-img'):''}<div class="h2-quiz-copy"><p class="h2-eyebrow">${esc(m.eyebrow||'Two minutes')}</p><h2 class="h2-title">${esc(m.title)}</h2>${m.sub?`<p class="h2-sub">${esc(m.sub)}</p>`:''}<button type="button" class="bd pri" data-h2-quiz="${esc(m.title)}">${esc(m.cta||'Take the quiz')}</button></div></div></section>`;
  R.bundle=(m,c)=>{const P=products(c.brand,m.q,4,c.k+2);const num=s=>parseFloat(String(s).replace(/[^0-9.]/g,''))||0;const tot=P.reduce((a,p)=>a+num(p.price),0);
    return `<section class="h2-bundle"><div class="h2-bundle-media">${media(m.img,'',m.title)}<div class="h2-bundle-copy">${m.eyebrow?`<p class="h2-eyebrow">${esc(m.eyebrow)}</p>`:''}<h2 class="h2-title">${esc(m.title)}</h2>${m.sub?`<p class="h2-sub">${esc(m.sub)}</p>`:''}</div></div>
      <div class="h2-kit"><ul>${P.map((p,j)=>`<li><label><input type="checkbox" checked data-price="${num(p.price)}"><span class="h2-kit-img"><img src="${esc(p.img)}" alt="" loading="lazy"></span><span class="h2-kit-t"><b>${esc(p.brand)}</b><span>${esc(p.name)}</span><span class="h2-kit-p">${esc(p.price)}</span></span></label></li>`).join('')}</ul>
      <div class="h2-kit-foot"><span>Kit total <b data-kit-total>£${tot.toFixed(2)}</b></span><button type="button" class="bd pri" data-h2-addall>Add <span data-kit-n>${P.length}</span> to bag</button></div></div></section>`};
  R.beforeafter=(m,c)=>`<section class="h2-ba">${head(m)}<div class="h2-ba-stage" style="--ba:50%">${media(m.img,'h2-ba-a','Before')}${media(m.img2||m.img,'h2-ba-b','After')}<span class="h2-ba-l">Before</span><span class="h2-ba-r">After</span><span class="h2-ba-knob" aria-hidden="true"></span><input type="range" min="0" max="100" value="50" aria-label="Compare before and after" data-h2-ba>${m.product?`<a class="h2-ba-prod" href="#" data-h2-go="pdp">${esc(m.product)}<span>Shop it</span></a>`:''}</div></section>`;
  R.hotspot=(m,c)=>{const S=m.spots||[];return `<section class="h2-hot">${head(m)}<div class="h2-hot-stage">${media(m.img,'',m.title)}${S.map((s,j)=>{const p=products(c.brand,s.q,1,c.k+j)[0]||{};
      return `<button type="button" class="h2-dot" style="left:${+s.x||50}%;top:${+s.y||50}%" data-dot="${j}" aria-label="Show ${esc(p.name||'product')}" aria-expanded="false"></button><a class="h2-dot-card" href="#" data-h2-go="pdp" data-card="${j}" style="--x:${+s.x||50}%;top:${+s.y||50}%" hidden><span class="h2-dot-img"><img src="${esc(p.img)}" alt="" loading="lazy"></span><span><b>${esc(p.brand)}</b><span>${esc(p.name)}</span><span class="h2-kit-p">${esc(p.price)}</span></span></a>`}).join('')}</div></section>`};
  R.editorial=(m,c)=>`<section class="h2-edit">${head(m)}<div class="h2-scroller h2-edit-row">${(m.items||[]).map(a=>`<a class="h2-story-card" href="#" data-h2-go="plp">${media(a.img,'',a.title)}<span class="h2-story-t">${esc(a.title)}</span>${a.sub?`<span class="h2-story-s">${esc(a.sub)}</span>`:''}<span class="h2-story-d">${esc(a.date||'')}</span><span class="bd txt">Read more</span></a>`).join('')}</div></section>`;
  R.scratch=(m,c)=>`<section class="h2-scratch"><div class="h2-scratch-in">${m.eyebrow?`<p class="h2-eyebrow">${esc(m.eyebrow)}</p>`:''}<h2 class="h2-title">${esc(m.title)}</h2><div class="h2-scratch-card"><span class="h2-scratch-prize">${esc(m.prize||'10% back in rewards')}</span><canvas data-h2-scratch aria-label="Scratch to reveal"></canvas></div><div class="h2-ctas h2-scratch-cta" hidden>${btn(m.cta||'Create account','pri','')}</div></div></section>`;
  R.brands=(m,c)=>`<section class="h2-brands">${head(m)}<div class="h2-brand-grid">${(m.items||[]).map(b=>`<a href="#" data-h2-go="plp" class="h2-brand">${esc(b)}</a>`).join('')}</div></section>`;
  R.assistant=(m,c)=>`<section class="h2-ask">${head(m)}${root.DG_aiPromptsHTML?root.DG_aiPromptsHTML(c.brand,{prompts:m.prompts,dir:'column',head:false,ask:true}):''}</section>`;
  R.rituals=(m,c)=>`<section class="h2-rituals">${head(m)}<div class="h2-scroller h2-rit-row">${(m.items||[]).map((r,j)=>{const p=products(c.brand,r.q,1,c.k+j)[0]||{};
      return `<article class="h2-rit"><a class="h2-rit-p" href="#" data-h2-go="pdp"><span class="h2-media"><img src="${esc(p.img)}" alt="" loading="lazy"></span><span><b>${esc(p.brand)}</b> ${esc(p.name)}</span><span class="h2-kit-p">${esc(p.price)}</span></a><div class="h2-rit-steps"><h3>${esc(r.title)}</h3><ol>${(r.steps||[]).map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div></article>`}).join('')}</div></section>`;
  R.takeover=(m,c)=>`<section class="h2-take"><div class="h2-take-stage">${media(m.img,'',m.brand)}<div class="h2-take-copy"><p class="h2-take-brand">${esc(m.brand)}</p><h2 class="h2-title">${esc(m.title)}</h2>${btn('Explore '+(m.brand||''),'inv')}</div></div>${rail(c,products(c.brand,m.q,10,c.k+7),{size:'sm'})}</section>`;
  root.DG_h2Module=function(m,c){const f=R[m&&m.t];if(!f)return '';
    return `<div class="h2-mod h2-mod--${esc(m.t)}" data-xt="${esc(m.x||'')}" data-why="${esc(m.why||'')}">${f(m,c)}</div>`};
  root.DG_h2HTML=function(profile,o){o=Object.assign({brand:(profile&&profile.brand)||'debenhams',desk:innerWidth>=1024},o||{});
    return `<div class="h2">${((profile&&profile.modules)||[]).map((m,k)=>root.DG_h2Module(m,Object.assign({},o,{k:k*3,eager:o.eager||k<2}))).join('')}</div>`};
  /* ---------- interactions ---------- */
  function sheet(html,cls){const d=document.createElement('div');d.className='h2-sheet '+(cls||'');d.innerHTML=`<div class="h2-sheet-in" role="dialog" aria-modal="true">${html}</div>`;
    document.body.appendChild(d);requestAnimationFrame(()=>d.classList.add('on'));
    const close=()=>{d.classList.remove('on');setTimeout(()=>d.remove(),260);removeEventListener('keydown',k)};const k=e=>{if(e.key==='Escape')close()};addEventListener('keydown',k);
    d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-close]'))close()});const f=d.querySelector('button,a,input');f&&f.focus();return {el:d,close}}
  function stories(sec,start){let L=[];try{L=JSON.parse(sec.dataset.h2Stories)}catch(e){}if(!L.length)return;let i=start,t;
    const s=sheet(`<div class="h2-sv"><div class="h2-sv-bars">${L.map(()=>'<i><b></b></i>').join('')}</div><img alt=""><p class="h2-sv-l"></p><button type="button" class="h2-sv-x" data-close aria-label="Close">✕</button><button type="button" class="bd inv h2-sv-cta" data-h2-go="plp">Shop this</button><button type="button" class="h2-sv-prev" aria-label="Previous"></button><button type="button" class="h2-sv-next" aria-label="Next"></button></div>`,'h2-sheet--full');
    const show=()=>{if(i>=L.length){s.close();return}i=Math.max(0,i);const v=s.el.querySelector('.h2-sv');v.querySelector('img').src=L[i].i;v.querySelector('.h2-sv-l').textContent=L[i].l;
      v.querySelectorAll('.h2-sv-bars i').forEach((b,j)=>{b.className=j<i?'done':j===i?'run':''});clearTimeout(t);t=setTimeout(()=>{i++;show()},4200)};
    s.el.querySelector('.h2-sv-next').onclick=()=>{i++;show()};s.el.querySelector('.h2-sv-prev').onclick=()=>{i--;show()};show()}
  function quiz(title){const Q=[['Who is it for?',['Me','Someone else','The home']],['What is the moment?',['Everyday','Going out','Work','Holiday']],['Your style?',['Classic','Relaxed','Bold','Minimal']]];let k=0;
    const s=sheet(`<button type="button" class="h2-sheet-x" data-close aria-label="Close">✕</button><p class="h2-eyebrow">${esc(title)}</p><div class="h2-q"></div><div class="h2-q-prog"><i></i></div>`);
    const draw=()=>{const box=s.el.querySelector('.h2-q');s.el.querySelector('.h2-q-prog i').style.width=((k)/Q.length*100)+'%';
      if(k>=Q.length){box.innerHTML=`<h2 class="h2-title">Your edit is ready</h2><p class="h2-sub">24 pieces picked from your answers.</p><button type="button" class="bd pri" data-h2-go="plp" data-close>See my edit</button>`;return}
      box.innerHTML=`<h2 class="h2-title">${esc(Q[k][0])}</h2><div class="h2-pill-cloud">${Q[k][1].map(a=>`<button type="button" class="chip">${esc(a)}</button>`).join('')}</div>`;
      box.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{b.classList.add('on');setTimeout(()=>{k++;draw()},180)})};draw()}
  function scratch(cv){const r=cv.getBoundingClientRect();if(!r.width)return;const dpr=devicePixelRatio||1;cv.width=r.width*dpr;cv.height=r.height*dpr;const x=cv.getContext('2d');x.scale(dpr,dpr);
    x.fillStyle=getComputedStyle(cv).getPropertyValue('--h2-foil')||'#B5B5B5';x.fillRect(0,0,r.width,r.height);x.fillStyle='#FFF';x.font='600 15px system-ui';x.textAlign='center';x.fillText('Scratch here',r.width/2,r.height/2+5);
    x.globalCompositeOperation='destination-out';let down=false,n=0;
    const at=e=>{const b=cv.getBoundingClientRect();x.beginPath();x.arc(e.clientX-b.left,e.clientY-b.top,22,0,7);x.fill();if(++n===28){cv.style.transition='opacity .4s';cv.style.opacity=0;const c=cv.closest('.h2-scratch').querySelector('.h2-scratch-cta');c&&(c.hidden=false)}};
    cv.addEventListener('pointerdown',e=>{down=true;at(e)});cv.addEventListener('pointermove',e=>{if(down)at(e)});addEventListener('pointerup',()=>down=false);
    cv.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){n=27;at({clientX:r.left+r.width/2,clientY:r.top+r.height/2})}});cv.tabIndex=0}
  function tick(){document.querySelectorAll('.h2-cd[data-left]').forEach(el=>{let l=+el.dataset.left;if(l>0)el.dataset.left=--l;const v=[l/86400|0,(l%86400)/3600|0,(l%3600)/60|0,l%60];
    el.querySelectorAll('b').forEach((b,j)=>b.textContent=String(v[j]).padStart(2,'0'))})}
  let ticking=0;
  root.DG_h2Mount=function(rt){rt=rt||document;
    rt.querySelectorAll('canvas[data-h2-scratch]').forEach(scratch);
    rt.querySelectorAll('[data-h2-ba]').forEach(r=>r.addEventListener('input',()=>r.parentNode.style.setProperty('--ba',r.value+'%')));
    rt.querySelectorAll('.h2-kit').forEach(k=>k.addEventListener('change',()=>{const on=[...k.querySelectorAll('input:checked')];k.querySelector('[data-kit-total]').textContent='£'+on.reduce((a,i)=>a+(+i.dataset.price),0).toFixed(2);k.querySelector('[data-kit-n]').textContent=on.length}));
    if(!ticking){ticking=setInterval(tick,1000)}tick();
    const io='IntersectionObserver' in root&&!matchMedia('(prefers-reduced-motion: reduce)').matches?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'}):null;
    rt.querySelectorAll('.h2-mod').forEach((m,j)=>{if(io&&j>0){m.classList.add('rv');io.observe(m)}})};
  document.addEventListener('click',e=>{const st=e.target.closest('[data-story]');if(st){stories(st.closest('.h2-stories'),+st.dataset.story);return}
    const q=e.target.closest('[data-h2-quiz]');if(q){quiz(q.dataset.h2Quiz);return}
    const d=e.target.closest('.h2-dot');if(d){const stg=d.parentNode,c=stg.querySelector(`[data-card="${d.dataset.dot}"]`),open=c.hidden;stg.querySelectorAll('.h2-dot-card').forEach(x=>x.hidden=true);stg.querySelectorAll('.h2-dot').forEach(x=>x.setAttribute('aria-expanded','false'));c.hidden=!open;d.setAttribute('aria-expanded',String(open));return}
    const a=e.target.closest('[data-h2-addall]');if(a){a.classList.add('done');a.textContent='Added to bag';root.DG_toast&&root.DG_toast({msg:'Kit added to bag',action:'View bag'});return}});
})(typeof window!=='undefined'?window:globalThis);
