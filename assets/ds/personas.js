/* DG Group Design System — Persona card drop-in (11 Nov 2026, Customer personas).
   Needs assets/ds/personas-data.js (window.DG_PERSONAS) + tokens.css + components.css (.persona).
   DG_personaCard(p, {scripts})       → one card's HTML (p = a persona from DG_PERSONAS.brands[].personas)
   DG_personaGrid(slug, {scripts})    → that site's eight cards in a .persona-grid, wrapped in data-brand="<slug>"
   DG_personaLegend({filter})         → the season key (buttons when filter: true; toggles [data-season] on the closest [data-season-host])
   DG_persona(slug, id)               → look a persona up
   Scenario rows open their test script (goal · Journey · What to watch for) — one listener on document, wired on load.
   Copy comes from the data untouched: the PDF wording on the card, the linked scenario pages in the script. */
(function(){
  var me=document.currentScript&&document.currentScript.src||'';
  var BASE=me.indexOf('assets/ds/')>-1?me.slice(0,me.indexOf('assets/ds/')):'';
  var esc=function(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')};
  var D=function(){return window.DG_PERSONAS||{brands:[]}};
  window.DG_personaBase=BASE;
  window.DG_personaBrand=function(slug){return D().brands.filter(function(b){return b.slug===slug})[0]};
  window.DG_persona=function(slug,id){var b=DG_personaBrand(slug);return b&&b.personas.filter(function(p){return p.id===id})[0]};
  /* share meter: the largest cohort share in the set (~9.3%) reads near full, as the PDF; typical = full; catch-all = track only */
  var fill=function(p){return p.kind==='typical'?100:p.kind==='catchall'||p.share==null?0:Math.min(100,Math.round(p.share/11*100))};
  window.DG_personaAv=function(p,size){return '<span class="persona-av'+(size?' persona-av--'+size:'')+'"><img src="'+BASE+esc(p.img)+'" alt="" loading="lazy"></span>'};
  window.DG_personaCard=function(p,o){o=o||{};var t=p.test||{};
    var scen=p.scen.map(function(s,i){var sc=o.scripts!==false&&t.s&&t.s[i];
      var row='<button class="persona-row" type="button"'+(sc?' aria-expanded="false"':' tabindex="-1"')+'><i></i><span>'+esc(s.t)+'</span><em>'+esc(s.v)+'</em></button>';
      var body=sc?'<div class="persona-script"><p>'+esc(sc.g)+'</p><h6>Journey</h6><ol>'+sc.st.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ol><h6>What to watch for</h6><ul>'+sc.w.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul></div>':'';
      return '<li data-k="'+s.k+'">'+row+body+'</li>'}).join('');
    var find=p.finding?'<p class="persona-find"><span class="persona-sev" data-sev="'+esc(p.finding.sev.toLowerCase())+'">'+esc(p.finding.sev)+'</span>'+esc(p.finding.text)+'</p>':'';
    var st=p.status.url?'<a class="persona-status" href="'+esc(p.status.url)+'" target="_blank" rel="noopener">'+esc(p.status.text)+'</a>':'<span class="persona-status">'+esc(p.status.text)+'</span>';
    return '<article class="persona" data-kind="'+p.kind+'" data-id="'+esc(p.id)+'" id="'+(o.idPrefix||'pc-')+esc(o.slug||'')+'-'+esc(p.id)+'">'+
      '<header class="persona-hd">'+DG_personaAv(p)+(p.tag?'<span class="persona-tag">'+esc(p.tag)+'</span>':'')+'<div class="persona-id"><b>'+esc(p.label)+'</b><span>'+esc(p.role)+'</span></div></header>'+
      '<div class="persona-bd"><div class="persona-share"><b>'+esc(p.head)+'</b><span class="persona-meter" style="--p:'+fill(p)+'%"><i></i></span></div>'+
      '<p class="persona-sub">'+esc(p.headSub)+'</p><ul class="persona-chips">'+p.chips.map(function(c){return '<li>'+esc(c)+'</li>'}).join('')+'</ul>'+
      '<p class="persona-desc">'+esc(p.desc)+'</p><ol class="persona-scen">'+scen+'</ol><div class="persona-ft">'+find+st+'</div></div></article>'};
  window.DG_personaGrid=function(slug,o){o=o||{};var b=DG_personaBrand(slug);if(!b)return '';
    return '<div class="persona-grid" data-brand="'+esc(slug)+'">'+b.personas.map(function(p){return DG_personaCard(p,{scripts:o.scripts,slug:slug,idPrefix:o.idPrefix})}).join('')+'</div>'};
  window.DG_personaLegend=function(o){o=o||{};var L=(D().meta||{}).legend||[];
    return '<ul class="persona-legend">'+L.map(function(l){return '<li data-k="'+l[0]+'">'+(o.filter?'<button type="button" data-season-btn="'+l[0]+'" aria-pressed="false"><i></i>'+esc(l[1])+'</button>':'<i></i>'+esc(l[1]))+'</li>'}).join('')+'</ul>'};
  document.addEventListener('click',function(e){
    var r=e.target.closest&&e.target.closest('.persona-row[aria-expanded]');
    if(r){r.setAttribute('aria-expanded',r.getAttribute('aria-expanded')==='true'?'false':'true');return}
    var s=e.target.closest&&e.target.closest('[data-season-btn]');
    if(s){var host=s.closest('[data-season-host]')||document.body,k=s.getAttribute('data-season-btn'),on=host.getAttribute('data-season')===k;
      if(on)host.removeAttribute('data-season');else host.setAttribute('data-season',k);
      host.querySelectorAll('[data-season-btn]').forEach(function(b){b.setAttribute('aria-pressed',!on&&b.getAttribute('data-season-btn')===k?'true':'false')})}
  });
})();
