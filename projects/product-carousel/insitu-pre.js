/* Product carousel · in situ — runs first in the Shopping agent page (before its own script reads ?s= or registers its message listener).
   Keeps this prototype's state in window.PC_STATE and hands the Shopping agent page the page / search state each view needs. */
(function(){
const D={view:'home',arrows:true,hp:true,hpRows:2,car:true,look:true,sponsored:true,mbType:'live',thresh:true,cta:'bag',applePay:false,ctlTitle:'Complete The Look',ctlTitleOn:true,ctlFmt:'carousel',ctlRows:2,ctaSticky:'fade',ctaLay:'side'};
const sp=new URLSearchParams(location.search);let pc={};try{pc=JSON.parse(sp.get('s')||'{}')}catch(e){}
const PC=window.PC_STATE=Object.assign({},D,pc);
/* Figma match (3 Nov): the Figma PDP's Ask Deb prompts, hugging their copy */
const FIGP=b=>(b||'debenhams')==='debenhams'?{pdpPrompts:['Will this suit me?','Gifts for her under £50','Is this suitable for a winter wedding?'],pdpDir:'row'}:{};
const sa=p=>Object.assign(FIGP(p.brand),{brand:p.brand||'debenhams',page:p.view==='home'||p.view==='search'?'home':p.view==='bag'?'bag':'pdp',search:p.view==='search',chat:false,q:'',sq:'',kb:false,labels:false});
sp.set('s',JSON.stringify(Object.assign({},pc,sa(PC))));history.replaceState(null,'',location.pathname+'?'+sp.toString());
addEventListener('message',e=>{const d=e.data;if(!d||!d.protoSet)return;const p=d.protoSet;
  Object.keys(PC).forEach(k=>delete PC[k]);Object.assign(PC,D,p);Object.assign(p,sa(PC))});
})();
