/* Taggstar social proof — DS drop-in.
   Figma Taggstar 00YKWCHwTarfwWZ1HayFUI · MAN use case 3483-23105 (PLP card 9196-26858 · PDP 3553-78608 / 3574-156761 · Bag 3510-4230)
   · message library Taggstar/V2 3001-3762 (PDP 1–14, Bag 1–9). Live check 16 Oct 2026 (390 + 1440, 10 PDPs per fascia).
   Markup + behaviour for the components.css .pc-taggstar / .sp-pdp / .sp-bag component (CSS lives only in components.css).

   API
     DG_taggstar.load(base)          → Promise; preloads the line glyphs. base = URL of assets/ds/ (resolved against this document)
     DG_taggstar.css(doc)            injects the component CSS into doc once
     DG_taggstar.plp(o) .pdp(o) .bag(o) → html for one message
     DG_taggstar.LIB / TYPES / LIVE  message library · type → icon · per-fascia live defaults
   o = { msg:{t,c,d} | id, bg:'#hex', alpha:0–1, icon:bool, set:'line'|'boohoo', upper:bool, radius:'4px', lg:bool, pos:'img'|'pin'|'centre' }
   Copy: c = the claim (strong), d = the detail (regular, **bold** marks strong runs). PLP runs it on one line, PDP on two, Bag on one.
   Icon: one per message type, from the DS line set (icons/lib: cart · bag · show · flame · time · trophy — the V2 Figma glyphs);
   boohoo runs its own animated set live (eyes for views, heart for purchases). Glyphs are recoloured data URIs, not CSS masks,
   so html2canvas exports them, and they follow the text colour, which follows the background (black or white, whichever contrasts more). */
(function(root){
  const TYPES={sold:'cart',bag:'bag',viewed:'show',trending:'flame',recent:'time',best:'trophy'};
  const TYPE_NAMES={sold:'Purchases',bag:'Added to bag',viewed:'Views',trending:'Trending',recent:'Recent sale',best:'Best seller'};
  /* Taggstar/V2 (3001-3762) + the MAN use case. X filled with sample numbers. at = placements the message is written for. */
  const LIB=[
    {id:'fast-min', t:'recent',   c:'Selling Fast!',     d:'Last sold 32 minutes ago',                    at:'pdp'},
    {id:'fast-sec', t:'recent',   c:'Selling Fast!',     d:'Last sold 40 seconds ago',                    at:'pdp'},
    {id:'fast-sold',t:'sold',     c:'Selling Fast!',     d:'79 Sold',                                     at:'plp'},
    {id:'trending', t:'trending', c:'Trending Now!',     d:'Sold 54 times in the last week',              at:'plp pdp bag'},
    {id:'demand',   t:'sold',     c:'In Demand!',        d:'Sold 38 times in the last week',              at:'plp pdp bag'},
    {id:'demand-bag',t:'bag',     c:'In Demand!',        d:'13 added to bag in the last week',            at:'pdp'},
    {id:'dontmiss', t:'bag',      c:"Don't Miss Out!",   d:'Added to bag 24 times in the last week',      at:'pdp bag'},
    {id:'popular-now',t:'viewed', c:'Popular!',          d:'89 others are looking at this right now',     at:'pdp'},
    {id:'popular-day',t:'viewed', c:'Popular!',          d:'210 others viewed in the last 24 hours',      at:'pdp'},
    {id:'no1',      t:'trending', c:'',                  d:'**Number 1 best seller on this site**',       at:'plp pdp'},
    {id:'bestcat',  t:'best',     c:'',                  d:'**No. 2 best seller in Dresses**',            at:'plp pdp bag'},
    {id:'since-sold',t:'sold',    c:'',                  d:'Sold **12 times** since your last visit 3 days ago', at:'bag pdp'},
    {id:'since-bag',t:'bag',      c:'',                  d:'**9 added to bag since your last visit 3 days ago**', at:'bag pdp'},
    {id:'since-view',t:'viewed',  c:'',                  d:'Viewed **140 times** since your last visit 3 days ago', at:'bag pdp'},
    {id:'still-view',t:'viewed',  c:'Still interested?', d:'You viewed this 3 times recently',            at:'pdp'},
    {id:'still-bag',t:'bag',      c:'Still interested?', d:'Added to bag in your last visit',             at:'pdp'},
    {id:'pct',      t:'bag',      c:'',                  d:'**64% bought this product after adding it to their bag**', at:'bag'}
  ];
  /* Live, 16 Oct 2026 (production PDP toast + the dev Storybook --social-proof-* tokens). null = no token / not seen live → Figma Grey 1. */
  const LIVE={
    debenhams:  {pdp:{bg:'#000000',alpha:.6},  icon:true,  set:'line',   seen:'PDP · line icons (eye, bag) · black 60% + blur · white text · "Popular! 210 others viewed in the last 24 hours" · "In Demand! 13 added to bag in the last week"'},
    boohoo:     {pdp:{bg:'#FFFFFF',alpha:1},   plp:{bg:'#F7B6CC',alpha:1}, bag:{bg:'#F7B6CC',alpha:1}, icon:true, set:'boohoo', seen:'PDP (desktop) · animated eyes / heart · white · "Act fast! 503 people have checked this out in the last day." · "Most loved. 30 purchased in the last week."'},
    boohooman:  {icon:false, seen:'not seen on 10 PDPs (390 + 1440) — Figma MAN use case: Grey 1, no icon'},
    plt:        {pdp:{bg:'#FFFDF7',alpha:1},   plp:{bg:'#FFFDF7',alpha:.8}, bag:{bg:'#FFD4CD',alpha:1}, icon:false, upper:true, seen:'PDP · no icon · white (DS: warm white, never #FFF on PLT) · uppercase Roboto 12 light · "IT GIRL APPROVED. SOLD 38 TIMES IN THE LAST WEEK." · "TRENDING. LAST SOLD 19 MINUTES AGO."'},
    karenmillen:{icon:false, seen:'not seen on 10 PDPs'},
    warehouse:  {icon:false, seen:'not seen on 10 PDPs'},
    brandroom:  {icon:false, seen:'not seen on 10 PDPs'}
  };
  const SVG={};let BASE=null;
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const md=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>');
  const hex=c=>{c=String(c||'').trim().replace('#','');if(c.length===3)c=c.split('').map(x=>x+x).join('');return /^[0-9a-f]{6}$/i.test(c)?'#'+c.toUpperCase():null};
  const rgb=h=>[1,3,5].map(i=>parseInt(h.substr(i,2),16));
  const lum=c=>{const ch=rgb(hex(c)||'#F2F2F2').map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*ch[0]+.7152*ch[1]+.0722*ch[2]};
  const contrast=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
  const fg=bg=>contrast(bg,'#000000')>=contrast(bg,'#FFFFFF')?'#000':'#FFF';
  const fill=o=>{const h=hex(o.bg)||'#F2F2F2',a=o.alpha==null?1:+o.alpha;return a>=1?h:`rgba(${rgb(h).join(',')},${a})`};
  const uri=(svg,col)=>'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg.replace(/(stroke|fill)="black"/g,`$1="${col}"`));
  const CLOSE='<svg width="12" height="12" viewBox="0 0 11.75 11.75" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.375 0.375L0.375 11.375M0.375 0.375L11.375 11.375" stroke="black" stroke-width="0.75" stroke-linecap="round"/></svg>';
  const base=()=>BASE||new URL('assets/ds/',document.baseURI).href;
  const msgOf=o=>typeof o.msg==='string'?(LIB.find(m=>m.id===o.msg)||LIB[0]):(o.msg||LIB[0]);
  function vars(o){const col=fg(hex(o.bg)||'#F2F2F2');return `--sp-bg:${fill(o)};--sp-fg:${col};--sp-case:${o.upper?'uppercase':'none'}${o.radius!=null?`;--sp-r:${o.radius}`:''}`}
  function ico(o,m){if(!o.icon)return '';
    if(o.set==='boohoo')return `<img class="sp-ico" src="${base()}icons/taggstar/boohoo-${m.t==='viewed'?'eyes':'heart'}.webp" alt="">`;
    const k=TYPES[m.t]||'flame';return SVG[k]?`<img class="sp-ico" src="${uri(SVG[k],fg(hex(o.bg)||'#F2F2F2'))}" alt="">`:''}
  const T={
    TYPES,TYPE_NAMES,LIB,LIVE,fg,hex,contrast,
    load(b){if(b)BASE=new URL(b,document.baseURI).href;return Promise.all(Object.values(TYPES).map(k=>SVG[k]?0:fetch(base()+'icons/lib/icons-'+k+'.svg').then(r=>r.ok?r.text():'').then(t=>{if(t)SVG[k]=t}).catch(()=>{})))},
    /* the component CSS lives in components.css only (16 Oct 2026). DS pages already load it; this links it into a page that doesn't. */
    css(doc){doc=doc||document;if([...doc.styleSheets].some(s=>/assets\/ds\/components\.css/.test(s.href||''))||doc.getElementById('dg-components-css'))return;const l=doc.createElement('link');l.id='dg-components-css';l.rel='stylesheet';l.href=base()+'components.css';(doc.head||doc.documentElement).appendChild(l)},
    plp(o){const m=msgOf(o);return `<div class="pc-taggstar ts" data-ts style="${vars(o)}">${ico(o,m)}<span class="t">${m.c?`<b>${esc(m.c)}</b> `:''}<span>${md(m.d)}</span></span></div>`},
    pdp(o){const m=msgOf(o),x=uri(CLOSE,fg(hex(o.bg)||'#F2F2F2')),pos=o.pos==='pin'?' sp-pin':o.pos==='centre'?' sp-centre':' sp-on-img';
      return `<div class="sp-pdp ts${o.lg?' sp-pdp--lg':''}${pos}" data-ts style="${vars(o)}"><div class="in">${ico(o,m)}<div class="tx">${m.c?`<b>${esc(m.c)}</b>`:''}<span>${md(m.d)}</span></div></div><button class="sp-x" type="button" aria-label="Dismiss"><img src="${x}" alt=""></button></div>`},
    bag(o){const m=msgOf(o);return `<div class="sp-bag ts" data-ts style="${vars(o)}">${ico(o,m)}<span class="t">${m.c?`<b>${esc(m.c)}</b> `:''}<span>${md(m.d)}</span></span></div>`}
  };
  root.DG_taggstar=T;
})(typeof window!=='undefined'?window:globalThis);
