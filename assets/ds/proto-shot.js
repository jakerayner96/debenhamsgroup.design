/* Review shell: "Screenshot" button beside Export (Jake, 19 Oct 2026).
   One click saves a PNG of exactly what is on screen inside the device frame — the page as it is right now (scroll position, open chat,
   search, modals) at 2x, without the shell, panel or frame chrome. Saved via a download, so it lands in Downloads.
   Drop-in: <script src="../../assets/ds/proto-shot.js"></script> after the shell's own script. Needs html2canvas (the shells load it). */
(function(){
const ICON='<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M2 5.5h2.5L6 3.5h4l1.5 2H14v7.5H2z"/><circle cx="8" cy="9" r="2.4"/></svg>';
const stamp=()=>new Date().toISOString().slice(0,19).replace('T','-').replace(/:/g,'');
const slug=s=>String(s||'prototype').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
/* the preview the reviewer is looking at: the visible, largest page iframe (the App view's frame when that is on) */
function target(){return [...document.querySelectorAll('iframe')].filter(f=>{const r=f.getBoundingClientRect();return f.offsetParent&&r.width>50&&r.height>50&&getComputedStyle(f).visibility!=='hidden'})
  .sort((a,b)=>{const A=a.getBoundingClientRect(),B=b.getBoundingClientRect();return B.width*B.height-A.width*A.height})[0]}
/* the part of the iframe that is actually on screen: clipped by every scrolling / overflow-hidden ancestor and the window */
function visibleRect(el){let r=el.getBoundingClientRect(),L=r.left,T=r.top,R=r.right,B=r.bottom;
  for(let p=el.parentElement;p&&p!==document.documentElement;p=p.parentElement){const cs=getComputedStyle(p);
    if(/(auto|scroll|hidden|clip)/.test(cs.overflow+cs.overflowX+cs.overflowY)){const q=p.getBoundingClientRect();L=Math.max(L,q.left);T=Math.max(T,q.top);R=Math.min(R,q.right);B=Math.min(B,q.bottom)}}
  L=Math.max(L,0);T=Math.max(T,0);R=Math.min(R,innerWidth);B=Math.min(B,innerHeight);
  return {r,L,T,W:Math.max(0,R-L),H:Math.max(0,B-T)}}
let busy=false;
async function shot(btn){if(busy)return;const f=target();if(!f||!window.html2canvas){alert('Nothing to capture yet');return}
  let win,doc;try{win=f.contentWindow;doc=f.contentDocument}catch(e){}
  if(!doc){alert('This preview cannot be captured (cross-origin)');return}
  busy=true;btn&&(btn.disabled=true);
  const panel=document.querySelector('.panel.open');if(panel)panel.classList.remove('open');   /* phones: the panel slides over the page */
  try{
    await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
    const v=visibleRect(f),k=v.r.width/(f.offsetWidth||v.r.width)||1;   /* k = any CSS scale on the device frame */
    const x=win.scrollX+(v.L-v.r.left)/k,y=win.scrollY+(v.T-v.r.top)/k,w=Math.round(v.W/k),h=Math.round(v.H/k);
    /* the page's html2canvas fallbacks (gradient text, color-mix, …) — same switch the Export uses, held only for the capture */
    const B=doc.body,H=doc.documentElement,hadB=B.classList.contains('exporting'),hadH=H.classList.contains('exporting');
    B.classList.add('exporting');
    const c=await html2canvas(H,{x,y,width:w,height:h,windowWidth:win.innerWidth,windowHeight:win.innerHeight,scrollX:win.scrollX,scrollY:win.scrollY,scale:2,useCORS:true,backgroundColor:getComputedStyle(B).backgroundColor||'#FFFFFF',logging:false});
    if(!hadB)B.classList.remove('exporting');if(!hadH)H.classList.remove('exporting');
    const brand=(document.querySelector('#brands .chip.on')||{}).textContent||'';
    const name=`${slug(document.title.split('·')[0])}${brand?'-'+slug(brand):''}-${w}w-${stamp()}.png`;
    await new Promise(res=>c.toBlob(b=>{const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();res()},500)},'image/png'));
    toast('Screenshot saved to Downloads');
  }catch(e){console.error(e);alert('Screenshot failed: '+e.message)}
  finally{busy=false;btn&&(btn.disabled=false)}}
function toast(t){let el=document.getElementById('shot-toast');if(!el){el=document.createElement('div');el.id='shot-toast';el.style.cssText='position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;background:#0A0A0A;color:#FFF;border:1px solid rgba(255,255,255,.2);border-radius:99px;padding:8px 16px;font:600 12px/1.2 system-ui,sans-serif;opacity:0;transition:opacity .2s;pointer-events:none';document.body.appendChild(el)}
  el.textContent=t;el.style.opacity='1';clearTimeout(el._h);el._h=setTimeout(()=>el.style.opacity='0',1800)}
function mount(){for(const id of ['exportbtn','exportbtn2']){const ex=document.getElementById(id);if(!ex||document.getElementById(id+'-shot'))continue;
    const b=document.createElement('button');b.id=id+'-shot';b.className=ex.className;b.type='button';b.title='Save a PNG of what is on screen in the device frame (to Downloads)';
    b.innerHTML=id==='exportbtn'?ICON+'Screenshot':'Screenshot';b.onclick=()=>shot(b);ex.parentNode.insertBefore(b,ex)}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
window.DG_protoShot=shot;
})();
