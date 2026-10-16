/* Taggstar social proof — DS drop-in.
   Figma Taggstar 00YKWCHwTarfwWZ1HayFUI · MAN use case 3483-23105 (PLP card 9196-26858 · PDP 3553-78608 / 3574-156761 · Bag 3510-4230)
   · message library Taggstar/V2 3001-3762 (PDP 1–14, Bag 1–9). Live check 16 Oct 2026 (390 + 1440, 10 PDPs per fascia).
   Same component as components.css .pc-taggstar / .sp-pdp / .sp-bag, packaged so it can drop into pages that don't load the DS
   (the Core PDP and the live PDPs): it carries its own CSS and injects it into the target document.

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
  const CSS=`
.pc-taggstar.ts,.sp-pdp.ts,.sp-bag.ts{background:var(--sp-bg,var(--surface-media,#F2F2F2));color:var(--sp-fg,var(--text-primary,#000));border-radius:var(--sp-r,var(--radius-default,4px));font-family:inherit;line-height:normal;letter-spacing:normal;text-transform:var(--sp-case,none);text-align:left;box-sizing:border-box;-webkit-font-smoothing:antialiased;-webkit-backdrop-filter:blur(3.5px);backdrop-filter:blur(3.5px);border:0;margin:0}
.ts b{font-weight:600}.ts span{font-weight:400}.ts span b{font-weight:600}
.ts img.sp-ico{display:block;flex:none;width:16px;height:16px;margin:0;object-fit:contain;max-width:none}
.pc-taggstar.ts{display:flex;align-items:center;gap:4px;width:fit-content;max-width:100%;padding:4px 8px;font-size:12px;white-space:nowrap;overflow:hidden}
.pc-taggstar.ts img.sp-ico{width:14px;height:14px}
.pc-taggstar.ts .t{overflow:hidden;text-overflow:ellipsis;min-width:0}
.sp-pdp.ts{display:inline-flex;align-items:center;gap:32px;padding:8px 12px;font-size:12px;box-shadow:0 0 8.7px rgba(0,0,0,.22);max-width:calc(100% - 24px)}
.sp-pdp.ts .in{display:flex;align-items:center;gap:8px;min-width:0}
.sp-pdp.ts img.sp-ico{width:24px;height:24px}
.sp-pdp.ts .tx{display:flex;flex-direction:column;gap:2px;min-width:0}
.sp-pdp.ts .sp-x{width:12px;height:12px;flex:none;padding:0;border:0;background:none;cursor:pointer;display:block;margin:0}
.sp-pdp.ts .sp-x img{display:block;width:12px;height:12px}
.sp-pdp.ts.sp-pdp--lg{font-size:14px}
.sp-pdp.ts.off{display:none!important}
.sp-pdp.ts.sp-on-img{position:absolute;left:12px;bottom:12px;z-index:6}
.sp-pdp.ts.sp-centre{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:6}
.sp-pdp.ts.sp-pin{position:fixed;z-index:60}
.sp-bag.ts{display:flex;align-items:center;gap:4px;width:100%;padding:8px;font-size:12px}
.sp-bag.ts img.sp-ico{width:20px;height:20px}
.sp-bag.ts .t{flex:1;min-width:0}`;
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
    css(doc){doc=doc||document;if(doc.getElementById('dg-taggstar-css'))return;const st=doc.createElement('style');st.id='dg-taggstar-css';st.textContent=CSS;(doc.head||doc.documentElement).appendChild(st)},
    plp(o){const m=msgOf(o);return `<div class="pc-taggstar ts" data-ts style="${vars(o)}">${ico(o,m)}<span class="t">${m.c?`<b>${esc(m.c)}</b> `:''}<span>${md(m.d)}</span></span></div>`},
    pdp(o){const m=msgOf(o),x=uri(CLOSE,fg(hex(o.bg)||'#F2F2F2')),pos=o.pos==='pin'?' sp-pin':o.pos==='centre'?' sp-centre':' sp-on-img';
      return `<div class="sp-pdp ts${o.lg?' sp-pdp--lg':''}${pos}" data-ts style="${vars(o)}"><div class="in">${ico(o,m)}<div class="tx">${m.c?`<b>${esc(m.c)}</b>`:''}<span>${md(m.d)}</span></div></div><button class="sp-x" type="button" aria-label="Dismiss"><img src="${x}" alt=""></button></div>`},
    bag(o){const m=msgOf(o);return `<div class="sp-bag ts" data-ts style="${vars(o)}">${ico(o,m)}<span class="t">${m.c?`<b>${esc(m.c)}</b> `:''}<span>${md(m.d)}</span></span></div>`}
  };
  root.DG_taggstar=T;
})(typeof window!=='undefined'?window:globalThis);
