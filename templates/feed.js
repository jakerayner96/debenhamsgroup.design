/* DS page templates — product feeds for rails (2 Nov 2026, Master prototype). Data only: rails are drawn by the DS Product carousel (DG_pcarHTML, carousel.js).
   Reads each fascia's PLP set (projects/plp-alignment/data.js, PRODUCTS_ALL). Images: projects/plp-alignment/img/<brand>/pN.jpg —
   Debenhams product i uses p{i}.jpg up to 6 and p{i+1}.jpg after (p7 is an unlisted coat); the others use p.img, else i.
   DG_feedImg(brand,i) · DG_feed(brand,start,n,step) → [{img,brand,name,price,was}] · PLT and Warehouse cards carry no brand line (as live). */
(function(){
  const NOBRAND=['plt','warehouse'];
  const all=b=>(window.PRODUCTS_ALL||{})[b]||[];
  window.DG_feedImg=function(b,i){const p=all(b)[i];
    if(b==='debenhams')return `projects/plp-alignment/img/debenhams/p${i<7?i:i+1}.jpg`;
    return `projects/plp-alignment/img/${b}/p${p&&p.img!=null?p.img:i}.jpg`};
  window.DG_feedItem=function(b,i){const p=all(b)[i];if(!p)return null;
    return {img:DG_feedImg(b,i),brand:NOBRAND.includes(b)?'':p.brand,name:p.name,price:p.price,was:p.was,i}};
  window.DG_feed=function(b,start,n,step){const L=all(b).length||1;step=step||1;
    return Array.from({length:n},(_,k)=>DG_feedItem(b,(start+k*step)%L)).filter(Boolean)};
})();
