/* ============================================================
   REVIEW COMMENTS — Figma-style pinned threads for prototypes.
   Drop-in: <script src=".../assets/review/comments.js" defer></script>
   The page sets window.REVIEW_CTX = {proj:'p05', key:'debenhams:new'}
   and calls PLPC.refresh() after each render. Pins anchor to the
   nearest [data-ckey] element (auto-tagged) so they survive reflow.
   Store: Cloudflare worker (assets/review/comments-worker) with
   localStorage fallback — offline/local review still keeps comments.
   ============================================================ */
(function(){
'use strict';
const REMOTE='https://plp-comments.jakerayner96.workers.dev'; // '' disables sync (localStorage only)
const LS=k=>{try{return localStorage.getItem(k)}catch(_){return null}};
const LSSET=(k,v)=>{try{localStorage.setItem(k,v)}catch(_){}};

const S={ctx:null,threads:[],show:LS('plpc:show')==='1',armed:false,offline:!REMOTE,open:null,compose:null};
const EMBED=(()=>{try{return window.self!==window.top}catch(_){return true}})(); // in the review shell the strip hosts the controls

/* ---------- chrome ---------- */
const css=document.createElement('style');
css.textContent=`
#plpc-controls{position:fixed;right:16px;bottom:16px;z-index:960;display:flex;flex-direction:column;gap:8px;font-family:'Google Sans',system-ui,sans-serif}
.plpc-btn{width:44px;height:44px;border-radius:99px;background:#000;color:#FFF;border:1px solid rgba(255,255,255,.35);box-shadow:0 4px 14px rgba(0,0,0,.35);cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0;position:relative}
.plpc-btn svg{width:20px;height:20px;display:block}
.plpc-btn.on{background:#FFF;color:#000;border-color:#000}
.plpc-btn .n{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;border-radius:99px;background:#FFF;color:#000;border:1px solid #000;font-size:10.5px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 4px}
.plpc-btn.on .n{background:#000;color:#FFF;border-color:#FFF}
#plpc-catcher{position:fixed;inset:0;z-index:940;cursor:crosshair;display:none}
html.plpc-arm #plpc-catcher{display:block}
#plpc-layer{position:absolute;left:0;top:0;width:100%;height:0;overflow:visible;z-index:930;pointer-events:none}
.plpc-pin{position:absolute;width:28px;height:28px;margin:-14px 0 0 -14px;border-radius:99px 99px 99px 4px;background:#0D99FF;color:#FFF;border:2px solid #FFF;box-shadow:0 2px 10px rgba(0,0,0,.4);font:700 12px/1 'Google Sans',system-ui,sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;pointer-events:auto;transform:rotate(-45deg)}
.plpc-pin span{transform:rotate(45deg)}
.plpc-pin.open{background:#FFF;color:#0D99FF;border-color:#0D99FF}
#plpc-pop{position:absolute;z-index:970;width:280px;background:#0A0A0A;color:#B0B0B0;border:1px solid rgba(255,255,255,.22);border-radius:12px;padding:12px;font-family:'Google Sans',system-ui,sans-serif;font-size:12.5px;box-shadow:0 12px 40px rgba(0,0,0,.5);display:flex;flex-direction:column;gap:8px}
#plpc-pop .hd{display:flex;align-items:center;justify-content:space-between;color:#F7F7F7;font-weight:600;font-size:12.5px}
#plpc-pop .hd .x{cursor:pointer;color:#B0B0B0;font-size:16px;padding:0 2px;background:none;border:none}
#plpc-pop input,#plpc-pop textarea{width:100%;box-sizing:border-box;background:#161616;border:1px solid rgba(255,255,255,.18);border-radius:8px;color:#F7F7F7;padding:7px 9px;font:inherit;font-size:12px;resize:vertical}
#plpc-pop .row{display:flex;gap:6px;justify-content:flex-end;align-items:center}
#plpc-pop .status{margin-right:auto;font-size:10px;color:#707070}
#plpc-pop button.act{background:#F7F7F7;color:#000;border:none;border-radius:99px;padding:6px 14px;font:600 12px 'Google Sans',system-ui,sans-serif;cursor:pointer}
#plpc-pop button.act:disabled{opacity:.5}
#plpc-pop button.ghost{background:none;color:#B0B0B0;border:1px solid rgba(255,255,255,.25);border-radius:99px;padding:6px 12px;font:500 12px 'Google Sans',system-ui,sans-serif;cursor:pointer}
#plpc-pop button.ghost.del{color:#FF6B6B;border-color:rgba(255,107,107,.5)}
#plpc-pop .thread{display:flex;flex-direction:column;gap:8px;max-height:300px;overflow-y:auto}
#plpc-pop .msg b{color:#F7F7F7;font-weight:600}
#plpc-pop .msg small{color:#707070;font-size:9.5px;margin-left:6px}
#plpc-pop .msg div{color:#D9D9D9;margin-top:2px;white-space:pre-wrap;word-break:break-word}
#plpc-pop .resolved{font-size:10px;color:#707070}
`;
document.head.appendChild(css);

const layer=el('div',{id:'plpc-layer'});
const catcher=el('div',{id:'plpc-catcher'});
const controls=el('div',{id:'plpc-controls'});
const armBtn=btn('Add a comment — then click anywhere on the page','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.3c-1.5 0-3-.4-4.2-1L3 20l1.3-4.1A8.1 8.1 0 0 1 3.5 11.5 8.4 8.4 0 0 1 12 3.2a8.4 8.4 0 0 1 9 8.3Z"/><path d="M12 8v6M9 11h6"/></svg>');
const eyeBtn=btn('Show / hide comment pins','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12Z"/><circle cx="12" cy="12" r="2.6"/></svg>');
const pop=el('div',{id:'plpc-pop'});pop.style.display='none';
controls.append(armBtn,eyeBtn);

function el(t,attrs){const e=document.createElement(t);for(const k in attrs||{})e.setAttribute(k,attrs[k]);return e}
function btn(title,svg){const b=el('button',{class:'plpc-btn',title});b.innerHTML=svg+'<span class="n" hidden></span>';return b}
function esc(fn){return e=>{e.stopPropagation();fn(e)}}
function need(inp){ // required field: flag it red until it has a value
  if(inp.value.trim()){inp.style.borderColor='';return true}
  inp.style.borderColor='#FF6B6B';inp.focus();
  inp.addEventListener('input',()=>inp.style.borderColor='',{once:true});
  return false;
}

let inited=false;
document.addEventListener('DOMContentLoaded',init);
if(document.readyState!=='loading')init();
function init(){
  if(inited)return;inited=true;
  document.body.append(layer,catcher,controls,pop);
  if(EMBED)controls.style.display='none';
  addEventListener('message',e=>{const d=e.data;if(!d||!d.plpcCmd)return;
    if(d.plpcCmd==='arm')arm(!S.armed);
    if(d.plpcCmd==='pins'){S.show=!S.show;LSSET('plpc:show',S.show?'1':'0');draw()}
  });
  armBtn.onclick=esc(()=>arm(!S.armed));
  eyeBtn.onclick=esc(()=>{S.show=!S.show;LSSET('plpc:show',S.show?'1':'0');draw()});
  catcher.addEventListener('click',onPlace);
  addEventListener('resize',()=>{clearTimeout(init._t);init._t=setTimeout(place,150)});
  new ResizeObserver(()=>{clearTimeout(init._t);init._t=setTimeout(place,150)}).observe(document.body); // images loading / grid reflow move anchors
  addEventListener('keydown',e=>{if(e.key==='Escape'){arm(false);closePop()}});
  refresh();
}

/* ---------- context + data ---------- */
function ctxKey(){const c=window.REVIEW_CTX;return c?`${c.proj}:${c.key}`:null}
async function refresh(){
  if(!inited)return;
  tagAnchors();
  const k=ctxKey();
  if(k!==S.ctx){S.ctx=k;closePop();await load()}
  draw();
}
function tagAnchors(){
  const map={'header':'hd','#usptop':'usptop','#uspstrip':'usps','#uspb':'uspb','.bc':'bc','.plp-title':'title','.cat-wrap':'cat','.sf-split':'sfm','.sf-bar':'sf','.seo':'seo','.showmore':'more','footer':'ft'};
  for(const sel in map){const n=document.querySelector(sel);if(n)n.dataset.ckey=map[sel]}
  document.querySelectorAll('.pc').forEach((n,i)=>n.dataset.ckey='pc:'+i);
}
async function load(){
  const k=S.ctx;if(!k){S.threads=[];return}
  let local=[];try{local=JSON.parse(LS('plpc:doc:'+k)||'[]')}catch(_){}
  S.threads=local;S.offline=!REMOTE;
  if(REMOTE){
    try{
      const r=await fetch(`${REMOTE}/doc?k=${encodeURIComponent(k)}`);
      const j=await r.json();
      if(j.ok){S.threads=merge(j.threads,local);S.offline=false;cache()}
    }catch(_){S.offline=true}
  }
}
function merge(remote,local){
  const m=new Map(remote.map(t=>[t.id,t]));
  local.forEach(t=>{if(!m.has(t.id))m.set(t.id,t)});
  return [...m.values()].sort((a,b)=>a.ts-b.ts);
}
function cache(){LSSET('plpc:doc:'+S.ctx,JSON.stringify(S.threads))}
async function push(path,body){
  if(!REMOTE)return false;
  try{
    const r=await fetch(REMOTE+path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.assign({k:S.ctx},body))});
    const j=await r.json();
    if(j.ok){S.threads=merge(j.threads,[]);S.offline=false;cache();return true}
  }catch(_){}
  S.offline=true;return false;
}

/* ---------- pins ---------- */
function anchorPoint(a){
  const n=a.key&&document.querySelector(`[data-ckey="${a.key}"]`);
  if(n){const r=n.getBoundingClientRect();return{x:r.left+scrollX+a.rx*r.width,y:r.top+scrollY+a.ry*r.height}}
  return{x:a.rx*document.documentElement.scrollWidth,y:a.ry*document.body.scrollHeight};
}
function draw(){
  layer.innerHTML='';
  const vis=S.show?S.threads.filter(t=>!t.resolved):[];
  vis.forEach(t=>{
    const p=anchorPoint(t.anchor);
    const pin=el('div',{class:'plpc-pin'+(S.open===t.id?' open':''),title:t.name+': '+t.text.slice(0,80)});
    pin.innerHTML='<span></span>';pin.firstChild.textContent=String(S.threads.filter(x=>!x.resolved).indexOf(t)+1);
    pin.style.left=p.x+'px';pin.style.top=p.y+'px';
    pin.onclick=esc(()=>openThread(t.id));
    layer.appendChild(pin);
  });
  const openCount=S.threads.filter(t=>!t.resolved).length;
  [armBtn,eyeBtn].forEach(b=>b.classList.remove('on'));
  if(S.armed)armBtn.classList.add('on');
  if(!S.show)eyeBtn.classList.add('on');
  const n=eyeBtn.querySelector('.n');n.hidden=!openCount;n.textContent=openCount;
  if(EMBED)try{parent.postMessage({plpcState:{armed:S.armed,show:S.show,count:openCount}},'*')}catch(_){}
}
function place(){draw();if(S.open)positionPop(S.threads.find(t=>t.id===S.open))}

/* ---------- composing ---------- */
function arm(on){S.armed=on;if(on&&!S.show){S.show=true;LSSET('plpc:show','1')} // adding comments implies seeing them
  document.documentElement.classList.toggle('plpc-arm',on);if(on)closePop();draw()}
function onPlace(e){
  e.stopPropagation(); // the placing click must not reach the document-level close handler
  catcher.style.pointerEvents='none';
  const under=document.elementFromPoint(e.clientX,e.clientY);
  catcher.style.pointerEvents='';
  const holder=under&&under.closest('[data-ckey]');
  let anchor;
  if(holder){const r=holder.getBoundingClientRect();anchor={key:holder.dataset.ckey,rx:(e.clientX-r.left)/r.width,ry:(e.clientY-r.top)/r.height}}
  else anchor={key:'page',rx:(e.pageX)/document.documentElement.scrollWidth,ry:(e.pageY)/document.body.scrollHeight};
  arm(false);
  composer(anchor,{x:e.pageX,y:e.pageY});
}
function composer(anchor,at){
  S.open=null;S.compose={anchor,at};
  pop.innerHTML='';
  const hd=el('div',{class:'hd'});hd.textContent='New comment';
  const x=el('button',{class:'x'});x.textContent='×';x.onclick=esc(closePop);hd.appendChild(x);
  const name=el('input',{placeholder:'Your name',maxlength:'60'});name.value=LS('plpc:name')||'';
  const text=el('textarea',{rows:'3',placeholder:'Leave a comment…',maxlength:'2000'});
  const row=el('div',{class:'row'});
  const st=el('span',{class:'status'});
  const save=el('button',{class:'act'});save.textContent='Save';
  row.append(st,save);
  pop.append(hd,name,text,row);
  save.onclick=esc(async()=>{
    const okName=need(name),okText=need(text);if(!okName||!okText)return; // name is forced
    const v=text.value.trim();
    save.disabled=true;st.textContent='Saving…';
    LSSET('plpc:name',name.value.trim());
    const t={id:Date.now()+'-'+Math.random().toString(36).slice(2,8),anchor,name:name.value.trim(),text:v,ts:Date.now(),resolved:false,replies:[]};
    const ok=await push('/thread',{thread:t});
    if(!ok){S.threads.push(t);cache()}
    closePop();draw();
  });
  showPop(at);text.focus();
}

/* ---------- threads ---------- */
function openThread(id){
  const t=S.threads.find(x=>x.id===id);if(!t)return;
  S.open=id;S.compose=null;
  pop.innerHTML='';
  const hd=el('div',{class:'hd'});hd.textContent='Comment';
  const x=el('button',{class:'x'});x.textContent='×';x.onclick=esc(closePop);hd.appendChild(x);
  const list=el('div',{class:'thread'});
  [{name:t.name,text:t.text,ts:t.ts},...t.replies].forEach(m=>{
    const d=el('div',{class:'msg'});
    const b=el('b');b.textContent=m.name;
    const sm=el('small');sm.textContent=new Date(m.ts).toLocaleString([],{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});
    const tx=el('div');tx.textContent=m.text;
    d.append(b,sm,tx);list.appendChild(d);
  });
  const name=el('input',{placeholder:'Your name',maxlength:'60'});name.value=LS('plpc:name')||'';
  const text=el('textarea',{rows:'2',placeholder:'Reply…',maxlength:'2000'});
  const row=el('div',{class:'row'});
  const st=el('span',{class:'status'});st.textContent=S.offline?'offline — saving locally':'';
  const del=el('button',{class:'ghost del'});del.textContent='Delete';
  const res=el('button',{class:'ghost'});res.textContent=t.resolved?'Reopen':'Resolve';
  const rep=el('button',{class:'act'});rep.textContent='Reply';
  row.append(st,del,res,rep);
  pop.append(hd,list,name,text,row);
  rep.onclick=esc(async()=>{
    const okName=need(name),okText=need(text);if(!okName||!okText)return; // name is forced
    const v=text.value.trim();
    rep.disabled=true;st.textContent='Saving…';
    LSSET('plpc:name',name.value.trim());
    const r={name:name.value.trim(),text:v,ts:Date.now()};
    const ok=await push('/reply',{id:t.id,text:r.text,name:r.name});
    if(!ok){t.replies.push(r);cache()}
    openThread(id);positionPop(t);
  });
  del.onclick=esc(async()=>{
    if(del.textContent!=='Sure?'){del.textContent='Sure?';return} // two-click confirm
    const ok=await push('/delete',{id:t.id});
    if(!ok){S.threads=S.threads.filter(x=>x.id!==t.id);cache()}
    closePop();draw();
  });
  res.onclick=esc(async()=>{
    const to=!t.resolved;
    const ok=await push('/resolve',{id:t.id,resolved:to});
    if(!ok){t.resolved=to;cache()}
    closePop();draw();
  });
  positionPop(t);
  list.scrollTop=list.scrollHeight;
}
function positionPop(t){if(t)showPop(anchorPoint(t.anchor))}
function showPop(at){
  pop.style.display='flex';
  const w=280,vw=document.documentElement.clientWidth;
  let x=at.x+18;if(x-scrollX+w>vw-8)x=Math.max(scrollX+8,at.x-w-18);
  pop.style.left=Math.min(Math.max(x,scrollX+8),scrollX+vw-w-8)+'px';
  pop.style.top=Math.max(at.y-10,scrollY+8)+'px';
}
function closePop(){pop.style.display='none';S.open=null;S.compose=null;draw()}
document.addEventListener('click',e=>{if(pop.style.display!=='none'&&!pop.contains(e.target)&&!e.target.closest('.plpc-pin'))closePop()});

window.PLPC={refresh,place};
})();
