/* Master prototype — the journey layer. projects/master/page.html writes a DS page template into the frame as it stands
   (Home templates/home.html · PLP projects/plp-alignment/plp.html · PDP templates/pdp.html · Bag templates/bag.html) and adds this file last.
   It draws nothing of its own and restyles nothing: it only turns the templates' own DS pieces into links between the pages.
     header logo → Home · header bag → Bag · category nav / roundels / home tiles / breadcrumb / View all → PLP
     any product card (PLP grid, home + PDP + bag rails) → PDP · PDP Add to bag → DS toast “Added to Bag · View Bag” → Bag · wishlist hearts (wishlist.js) → “Added to Wishlist · Manage”
   Inside the review shell it posts {protoNav:{page}} and the shell loads that page; opened on its own it navigates itself.
   PLP has its own configurator protocol (plpSet / plpReady), so for it this file also speaks the shell's (protoReady, protoPong). */
(function(){
  const M=window.MASTER||{page:'home'};
  const go=page=>{if(!page||page===M.page&&page!=='pdp')return;
    if(parent!==window)parent.postMessage({protoNav:{page}},'*');
    else{const s=Object.assign({},M.state||{},{page});location.href=location.pathname+'?s='+encodeURIComponent(JSON.stringify(s))}};
  const IGNORE='.pc-iconbtn,.pc-add,.pc-qa,[data-qa-layer],.pcar-arr,.pcar-tabs,.chip,.wish,.sz,.cswatch,.acc-h,[data-sns-open],.dgrid-tabs,.dgrid-more,.hd-burger,input,select,textarea';
  document.addEventListener('click',e=>{const t=e.target;if(!t.closest)return;
    const act=t.closest('[data-master-toast] .act');if(act){e.preventDefault();go('bag');return}
    if(t.closest('.hd-logo')){e.preventDefault();go('home');return}
    if(t.closest('.hd-count,[aria-label="Bag"]')){e.preventDefault();e.stopPropagation();go('bag');return}
    if(t.closest(IGNORE))return;
    if(M.page==='pdp'&&t.closest('.pdp-ctas .bd.pri')){e.preventDefault();added();return}
    if(t.closest('.pdp-gal'))return;
    if(t.closest('article.pc,.bag-item,.bpc-img,.bpc-name')){e.preventDefault();e.stopPropagation();go('pdp');return}
    if(t.closest('.hd-nav a,.mega-a,.mnav-a,.roundel,.hm-t,.hm-ov,.bc a,.pcar-all,.catpill,.linkchips a,.cat-row a')){e.preventDefault();e.stopPropagation();go('plp')}
  },true);
  /* Add to bag: the DS toast (catalogue Toast · Top, actionable), 6s; the header bag count goes up by one. Bundling (dg:bundle) adds n items */
  let tt;
  document.addEventListener('dg:bundle',e=>added((e.detail.items||[]).length));
  /* Quick add (DS quickadd.js) bumps the header bag count itself; View product → PDP */
  document.addEventListener('dg:quickadd-view',()=>go('pdp'));
  function added(n){n=n||1;const msg=(n>1?n+' items':'Item')+' added to bag';
    /* the DS toast drop-in (toast.js: bottom on phones, top-centre on desktop); inline fallback if a template doesn't load it */
    if(window.DG_toast)window.DG_toast({msg:n>1?msg:'Added to Bag',action:'View Bag',onAction:()=>go('bag')});
    else{document.querySelectorAll('[data-master-toast]').forEach(x=>x.remove());clearTimeout(tt);
      document.body.insertAdjacentHTML('beforeend','<div class="toast toast--top" data-master-toast role="status"><span class="toast-msg">'+msg+'</span><span class="toast-end"><button class="act">View Bag</button></span></div>');
      tt=setTimeout(()=>document.querySelectorAll('[data-master-toast]').forEach(x=>x.remove()),6000)}
    document.querySelectorAll('.hd-count').forEach(b=>b.setAttribute('data-n',(+b.getAttribute('data-n')||0)+n))}
  /* the PLP speaks its own protocol: answer the shell for it */
  if(M.page==='plp'){
    addEventListener('message',e=>{const d=e.data||{};
      if(d.protoSet)document.documentElement.classList.toggle('exporting',!!d.exporting);   /* DS export fixes (export-masks.js) key off html.exporting */
      if(d.protoPing)parent.postMessage({protoPong:1,h:document.documentElement.scrollHeight},'*')});
    /* the DS navigation menu (burger drawer + mega menu) on the PLP's own header */
    if(!window.DG_nav){const base=document.currentScript?document.currentScript.src:location.href;['../../assets/ds/nav-live.js','../../assets/ds/nav.js'].forEach(f=>{const x=document.createElement('script');x.src=new URL(f,base).href;x.async=false;document.head.appendChild(x)})}
    if(!window.DG_exportMasks){const x=document.createElement('script');x.src=new URL('../../assets/ds/export-masks.js',document.currentScript?document.currentScript.src:location.href).href;document.head.appendChild(x)}
    const ready=()=>parent.postMessage({protoReady:1},'*');
    if(document.readyState==='complete')setTimeout(ready,50);else addEventListener('load',ready);
  }
})();
