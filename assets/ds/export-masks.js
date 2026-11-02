/* DG Group Design System — export fix for masked icons (2 Nov 2026, Master prototype).
   html2canvas can't paint CSS masks, so every masked glyph (carousel arrows .pcar-arr::before, the AI icon on non-Debenhams fascias,
   the masked Virtual Stylist hanger, …) exports as a solid square. While the page has html.exporting, this swaps each one for its own
   SVG recoloured to the element's computed background colour, as a plain background image — same glyph, same fascia colour.
   Drop-in: <script src="assets/ds/export-masks.js"></script> on any page that sets html.exporting. Nothing changes outside exports. */
(function(){
  const cache={},urlOf=m=>{const x=/url\("([^"]*)"\)|url\('([^']*)'\)|url\(([^)"']*)\)/.exec(m||'');return x&&(x[1]||x[2]||x[3])};
  /* inline data: SVGs (e.g. the Deliver+ ticks) are read in place; files are fetched once */
  const data=u=>{const i=u.indexOf(',');const head=u.slice(0,i),body=u.slice(i+1);try{return /;base64/.test(head)?atob(body):decodeURIComponent(body)}catch(e){return body}};
  const svg=u=>cache[u]||(cache[u]=/^data:/.test(u)?Promise.resolve(data(u)):fetch(u).then(r=>r.ok?r.text():'').catch(()=>''));
  const paint=(t,c)=>t.replace(/(fill|stroke)=(["'])(?!none)[^"']*\2/g,`$1="${c}"`).replace(/(fill|stroke):(?!\s*none)[^;"]+/g,`$1:${c}`)
    .replace(/<linearGradient[\s\S]*?<\/linearGradient>/g,'').replace(/url\(#[^)]+\)/g,c)
    .replace(/<svg(?![^>]*\swidth=)([^>]*?)viewBox=(["'])([\d.\s-]+)\2/,(m,a,q,vb)=>{const v=vb.trim().split(/\s+/);return `<svg width="${v[2]}" height="${v[3]}"${a}viewBox="${vb}"`});   /* html2canvas needs an intrinsic size */
  let sheet,n=0,busy=false,again=false;
  async function run(){if(!document.documentElement.classList.contains('exporting'))return;
    if(busy){again=true;return}busy=true;
    if(!sheet){sheet=document.createElement('style');sheet.id='dg-export-masks';document.head.appendChild(sheet)}
    const rules=[];
    for(const el of document.querySelectorAll('body *')){
      for(const ps of [null,'::before','::after']){
        if(ps&&el.hasAttribute('data-xm'+ps.slice(2,3)))continue;if(!ps&&el.hasAttribute('data-xm'))continue;
        const cs=getComputedStyle(el,ps),m=cs.webkitMaskImage||cs.maskImage,u=urlOf(m);if(!u)continue;
        const t=await svg(u);if(!t)continue;
        const col=cs.backgroundColor&&cs.backgroundColor!=='rgba(0, 0, 0, 0)'?cs.backgroundColor:cs.color;
        const uri='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(paint(t,col));
        const id='x'+(++n),attr=ps?'data-xm'+ps.slice(2,3):'data-xm';el.setAttribute(attr,id);
        rules.push(`[${attr}="${id}"]${ps||''}{-webkit-mask:none!important;mask:none!important;background:url("${uri}") center/contain no-repeat!important}`)}}
    sheet.textContent+=rules.join('\n');busy=false;if(again){again=false;run()}}
  let t;const soon=()=>{clearTimeout(t);t=setTimeout(run,60)};
  new MutationObserver(soon).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
  const watch=()=>new MutationObserver(()=>{if(document.documentElement.classList.contains('exporting'))soon()}).observe(document.body,{childList:true,subtree:true});
  if(document.body)watch();else document.addEventListener('DOMContentLoaded',watch);
  document.addEventListener('dg:render',soon);
  window.DG_exportMasks=run;
})();
