/* DG Group Design System — Google shopping agent drop-in (11 Nov 2026; from projects/shopping-agent, landed in the PLP template for every fascia).
   Mounts the agent's on-page entry points on any page, in the page's fascia (html[data-brand]), from DS pieces only:
     · Ask pill beside the search (.ai-pill--outline "Ask" — every option reads "Ask", Jake 20 Oct) · desktop: after the search field · mobile: beside the field when search opens (not in the header row)
     · PLP Next Best Action (.ai-nba) as a full-width grid row: after row 4 on mobile (8 products), after row 3 on desktop 1024+ (Jake 12 Nov)
     · the chat window (.ag-layer > .mdl > .agent-chat): start screen, or the query as a user bubble + a mock reply (labelled mock) with product tiles and quick replies
   Production: every entry point calls window.googleAgent.sendQuery(text) — the window itself is Google's widget styled by salesAgentConfig.json.
     DG_agent.mount({grid, after:4, afterDesk:3, products:[{n,img,now,was}], header:document}) → re-call after the grid re-renders
     DG_agent.open(query?) · DG_agent.close()
   Names: Debenhams = Deb ("Ask Deb"); boohoo = Jordan AI (the chat title "Ask Jordan AI", Jake 12 Nov); every other fascia speaks as the brand ("your boohooMAN Personal Assistant").
   The page entry points always read "Ask"; the agent's name is in the chat window (title, greeting, input). */
(function(root){
  if(root.DG_agent)return;
  const BN={debenhams:'Debenhams',boohoo:'boohoo',boohooman:'boohooMAN',plt:'PrettyLittleThing',karenmillen:'Karen Millen',warehouse:'Warehouse',brandroom:'The Brand Room',wallis:'Wallis',burton:'Burton',coast:'Coast',oasis:'Oasis',dorothyperkins:'Dorothy Perkins',misspap:'Misspap',dsgnstudio:'DSGN Studio',principles:'Principles'};
  const MEN=['boohooman','burton'];
  const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const brand=()=>document.documentElement.getAttribute('data-brand')||'debenhams';
  const AGENT={debenhams:'Deb',boohoo:'Jordan AI'};   /* the agent's own name, where it has one */
  const name=b=>AGENT[b]||BN[b]||'us';
  const NBA=b=>MEN.includes(b)?{q:'What are you shopping for?',a:['Wedding guest','Smart casual']}:{q:'What’s the occasion?',a:['Wedding guest','Party season']};
  const STARTERS=b=>MEN.includes(b)?['Find me an outfit for a wedding','Gifts for my dad under £50','What goes with my black jeans?']:['Find me an outfit for a wedding','Gifts for my mum under £50','What goes with a black midi dress?'];
  let state={products:[],grid:null,after:4,afterDesk:3};
  const send=q=>{try{root.googleAgent&&root.googleAgent.sendQuery&&root.googleAgent.sendQuery(q)}catch(e){}};

  /* Ask pill */
  function askPills(scope){scope=scope||document;
    const pill=cls=>`<button class="ai-pill ai-pill--outline ag-ask ${cls||''}" type="button" data-agent-open><i class="ai-icon"></i>Ask</button>`;
    scope.querySelectorAll('.hd-search').forEach(s=>{if(s.nextElementSibling&&s.nextElementSibling.matches('.ag-ask'))return;s.insertAdjacentHTML('afterend',pill())});
    /* mobile: not in the header row (decided 19 Oct — Ask sits beside the field once search opens; a header pill crowds the logo) — opts.mobileHeader:true forces it */
    if(state.mobileHeader)scope.querySelectorAll('.hd-bar:not(.hd-bar--desktop) .hd-icons').forEach(ic=>{if(ic.querySelector('.ag-ask'))return;ic.insertAdjacentHTML('afterbegin',pill('ag-ask--sm'))});}

  /* Next best action row */
  function nbaRow(){const b=brand(),n=NBA(b);
    return `<div class="ai-nba ag-nba" data-agent-nba><div class="grp"><h3>${esc(n.q)}</h3><p>Select an option to start a chat with ${esc(name(b))}</p></div><div class="set">${n.a.map(a=>`<button class="ai-pill ai-pill--soft ai-pill--wrap" type="button" data-agent-q="${esc(a)}"><i class="ai-icon"></i>${esc(a)}</button>`).join('')}<button class="ai-pill ai-pill--outline ai-pill--wrap" type="button" data-agent-q="Help me decide"><i class="ai-icon"></i>Help me decide</button></div></div>`}
  function placeNba(){const g=state.grid;if(!g)return;let row=g.querySelector('[data-agent-nba]');if(!row){g.insertAdjacentHTML('beforeend',nbaRow());row=g.querySelector('[data-agent-nba]')}
    const cols=Math.max(1,(getComputedStyle(g).gridTemplateColumns||'').split(' ').filter(Boolean).length);
    const cards=[...g.children].filter(c=>c!==row);const rows=matchMedia('(min-width:1024px)').matches?state.afterDesk:state.after;const at=Math.min(cards.length,cols*rows);
    if(cards[at-1]&&cards[at-1].nextElementSibling!==row)cards[at-1].after(row)}

  /* chat window */
  function tiles(){const ps=(state.products||[]).slice(0,4);if(!ps.length)return '';
    return `<div class="ac-car">${ps.map(p=>`<div class="ac-tile">${p.img?`<img class="im" src="${esc(p.img)}" alt="">`:'<span class="im"></span>'}<span class="n">${esc(p.n||'')}</span>${p.now?`<div class="price-blk price-blk--sm"><div class="price"><span class="now${p.was?' sale':''}">${esc(p.now)}</span>${p.was?`<span class="was">${esc(p.was)}</span>`:''}</div></div>`:''}<button class="ac-cart" type="button">Add to bag</button></div>`).join('')}</div>`}
  function body(q){const b=brand(),who=name(b);
    if(!q)return `<div class="ac-start"><h2><i class="ai-icon" style="width:24px;height:24px"></i><span>Hi there – I’m ${AGENT[b]?'<b>'+esc(AGENT[b])+'</b>, your '+esc(BN[b]||b):'your <b>'+esc(BN[b]||b)+'</b>'} Personal Assistant!</span></h2><p>Whatever you’re looking for, I’ll help you find it.</p><div class="ac-starters">${STARTERS(b).map(s=>`<button class="ac-starter" type="button" data-agent-q="${esc(s)}"><i class="ai-icon"></i>${esc(s)}</button>`).join('')}</div></div>`;
    return `<div class="ac-user">${esc(q)}</div><div class="ac-bot"><span>Here are a few ideas to start with — tell me your size and budget and I’ll narrow them down. <em class="ac-disc">(mock reply — production: googleAgent.sendQuery)</em></span>${tiles()}<div class="ac-qr"><button class="ai-pill ai-pill--outline" type="button" data-agent-q="Show me more like these"><i class="ai-icon"></i>Show me more</button></div></div>`}
  function close(){document.querySelectorAll('.ag-layer').forEach(l=>l.remove())}
  function open(q){close();const b=brand();if(q)send(q);
    document.body.insertAdjacentHTML('beforeend',`<div class="ag-layer" data-agent-layer role="dialog" aria-modal="true" aria-label="Ask ${esc(name(b))}"><div class="mdl-scrim" data-agent-close></div><div class="mdl ag-mdl"><div class="modal-hd"><span class="mt">Ask ${esc(name(b))}</span><button class="mdl-refresh" type="button" aria-label="New chat" data-agent-new></button><button class="modal-x" type="button" aria-label="Close" data-agent-close></button></div><div class="mdl-bd"><div class="agent-chat">${body(q)}</div></div><div class="ac-input"><span class="ph">Ask ${esc(name(b))} anything...</span><span class="ac-send"></span></div></div></div>`)}
  document.addEventListener('click',e=>{const t=e.target.closest&&e.target.closest('[data-agent-open],[data-agent-q],[data-agent-close],[data-agent-new]');if(!t)return;
    e.preventDefault();e.stopPropagation();
    if(t.hasAttribute('data-agent-close'))return close();
    if(t.hasAttribute('data-agent-new'))return open();
    if(t.hasAttribute('data-agent-q'))return open(t.getAttribute('data-agent-q'));
    open()},true);
  addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  let rz;addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(placeNba,120)});
  function mount(o){o=o||{};state=Object.assign(state,o);askPills(o.header||document);if(o.grid)placeNba()}
  root.DG_agent={mount,open,close,nbaRow};
})(typeof window!=='undefined'?window:globalThis);
