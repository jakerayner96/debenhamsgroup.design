/* Product carousel · in situ — runs first in the Shopping agent page (before its own script reads ?s= or registers its message listener).
   Keeps this prototype's state in window.PC_STATE and hands the Shopping agent page the page / search state each view needs. */
(function(){
const D={view:'home',arrows:true,gap:'fascia',hp:true,hpRows:2,car:true,look:true,sponsored:true};
const sp=new URLSearchParams(location.search);let pc={};try{pc=JSON.parse(sp.get('s')||'{}')}catch(e){}
const PC=window.PC_STATE=Object.assign({},D,pc);
const sa=p=>({brand:p.brand||'debenhams',page:p.view==='home'||p.view==='search'?'home':'pdp',search:p.view==='search',chat:false,q:'',sq:'',kb:false,labels:false});
sp.set('s',JSON.stringify(Object.assign({},pc,sa(PC))));history.replaceState(null,'',location.pathname+'?'+sp.toString());
addEventListener('message',e=>{const d=e.data;if(!d||!d.protoSet)return;const p=d.protoSet;
  Object.keys(PC).forEach(k=>delete PC[k]);Object.assign(PC,D,p);Object.assign(p,sa(PC))});
})();
