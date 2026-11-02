/* DS page templates — product feeds for rails (2 Nov 2026, Master prototype). Data only: rails are drawn by the DS Product carousel (DG_pcarHTML, carousel.js).
   Reads each fascia's PLP set (projects/plp-alignment/data.js, PRODUCTS_ALL). Images: projects/plp-alignment/img/<brand>/pN.jpg —
   Debenhams product i uses p{i}.jpg up to 6 and p{i+1}.jpg after (p7 is an unlisted coat); the others use p.img, else i.
   DG_feedImg(brand,i) · DG_feed(brand,start,n,step,opts) → [{img,brand,name,price,was,pct,swatches,sponsored,i}].
   Every item has a brand (2 Nov 2026, Jake: always brand · name · price): the feed's, else the brand that opens the name (stripped from it), else the fascia.
   Sample colours: some products come in several colours (swatches, no per-colour shot — the card tints as a stand-in). opts.sponsored: slot numbers
   (0-based) labelled Sponsored — Debenhams only (Mirakl). */
(function(){
  const FASCIA={debenhams:'Debenhams',boohoo:'boohoo',boohooman:'boohooMAN',plt:'PrettyLittleThing',karenmillen:'Karen Millen',warehouse:'Warehouse',brandroom:'The Brand Room'};
  const LEAD=/^(boohooMAN|boohoo|Wallis|Coast|Burton|Oasis|Warehouse|Dorothy Perkins|Karen Millen|PrettyLittleThing|Debenhams)\b\s*/i;
  const SW=[['#1F1F1F','Black'],['#C9C9C9','Grey'],['#B4A67A','Stone'],['#2F4A7A','Navy'],['#B97A57','Tan'],['#6E8B6B','Sage'],['#D9B8C4','Pink'],['#FFFFFF','White'],['#8FA3B8','Blue']];
  const nSw=i=>i%4===1?3:i%5===2?2:i%7===3?5:0;
  window.DG_feedBrand=function(b,p){let br=p.brand,n=p.name||'';const m=n.match(LEAD);
    if(!br&&m){br=m[1];n=n.slice(m[0].length)}else if(br&&n.toLowerCase().startsWith(br.toLowerCase()+' '))n=n.slice(br.length+1);
    return [br||FASCIA[b]||'',n]};
  const all=b=>(window.PRODUCTS_ALL||{})[b]||[];
  window.DG_feedImg=function(b,i){const p=all(b)[i];
    if(b==='debenhams')return `projects/plp-alignment/img/debenhams/p${i<7?i:i+1}.jpg`;
    return `projects/plp-alignment/img/${b}/p${p&&p.img!=null?p.img:i}.jpg`};
  window.DG_feedItem=function(b,i){const p=all(b)[i];if(!p)return null;
    const [brand,name]=DG_feedBrand(b,p),k=nSw(i);
    return {img:DG_feedImg(b,i),brand,name,price:p.price,was:p.was,pct:p.pct,i,swatches:k?Array.from({length:k},(_,j)=>{const w=SW[(i+j*2)%SW.length];return {c:w[0],name:w[1],img:''}}):null}};
  /* DG_feedReels(b) — the Create the Look picker's reels: up to 3 categories from the fascia's set (Tops · Bottoms · Dresses · Shoes & accessories),
     topped up with "More to pair" rows when a set is narrow. → [{label, items[]}] */
  const REELS=[['Tops',/top|shirt|jumper|blouse|hoodie|knit|polo|henley|cardigan|tee|jacket|coat|blazer|bomber/i],['Bottoms',/trouser|jean|jogger|skirt|short|jort|legging/i],
    ['Dresses',/dress/i],['Shoes & accessories',/boot|shoe|heel|trainer|sandal|wellies|bag|earring|necklace|belt|scarf|parfum|edp|toilette|gift set/i]];
  window.DG_feedReels=function(b){const P=all(b),used=new Set();
    const rows=REELS.map(([l,re])=>({label:l,items:P.map((p,i)=>i).filter(i=>re.test(P[i].name)&&!used.has(i)).slice(0,10).map(i=>(used.add(i),DG_feedItem(b,i)))})).filter(r=>r.items.length>=3).slice(0,3);
    const rest=P.map((p,i)=>i).filter(i=>!used.has(i));['More to pair','Finishing touches','You might like'].slice(0,3-rows.length).forEach((l,k)=>rows.push({label:l,items:rest.slice(k*8,k*8+8).map(i=>DG_feedItem(b,i))}));
    return rows};
  window.DG_feed=function(b,start,n,step,opts){const L=all(b).length||1,sp=(opts&&opts.sponsored)||[];step=step||1;
    return Array.from({length:n},(_,k)=>{const x=DG_feedItem(b,(start+k*step)%L);if(x&&b==='debenhams'&&sp.includes(k))x.sponsored=true;return x}).filter(Boolean)};
})();
