/* DG Group Design System — page copy in FR / NL / PL / DE / SV. Translates any DS page in place (text, aria-label, placeholder, title) and back to English.
   Drop-in: <script src="assets/ds/i18n-copy.js"></script><script src="assets/ds/i18n.js"></script>
     DG_i18n(doc, lang)            → translate the document (or an element) once; lang 'en' puts the English back
     DG_i18nWatch(doc, () => lang) → keep it translated while the page re-renders itself; returns stop()
     DG_t(text, lang)              → one string, or null when there is no translation
   Copy: DG_I18N_COPY (i18n-copy.js) holds the exact strings of the DS pages (header, footers, USP banners, PLP, PDP template, bag template, product names);
   PATTERNS below cover the strings that carry a number, price, date or brand. Prices stay in £ (the prototype shows UK pricing).
   Never touched: the AI Generated strip (.badge-ai, its own copy table in ai-strip.js) and anything under [data-i18n-skip]. */
(function(root){
  const MON={fr:'janv. févr. mars avr. mai juin juil. août sept. oct. nov. déc.',nl:'jan feb mrt apr mei jun jul aug sep okt nov dec',pl:'sty lut mar kwi maj cze lip sie wrz paź lis gru',
    de:'Jan. Feb. März Apr. Mai Juni Juli Aug. Sept. Okt. Nov. Dez.',sv:'jan feb mars apr maj juni juli aug sep okt nov dec'};
  const EN_MON='Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
  const mon=(l,m)=>MON[l].split(' ')[EN_MON.indexOf(m)]||m;
  /* [regex, {lang: template(match) }] — first match wins */
  const PATTERNS=[
    [/^(OR )?(£[\d.,]+) with code:? (\S+)$/i,{fr:m=>`${m[1]?'OU ':''}${m[2]} avec le code ${m[3]}`,nl:m=>`${m[1]?'OF ':''}${m[2]} met code ${m[3]}`,pl:m=>`${m[1]?'LUB ':''}${m[2]} z kodem ${m[3]}`,de:m=>`${m[1]?'ODER ':''}${m[2]} mit Code ${m[3]}`,sv:m=>`${m[1]?'ELLER ':''}${m[2]} med koden ${m[3]}`}],
    [/^Pay in 3 interest-free payments of (£[\d.,]+)(\. Credit option\.)?$/,{fr:m=>`Payez en 3 versements sans frais de ${m[1]}${m[2]?'. Option de crédit.':''}`,nl:m=>`Betaal in 3 renteloze termijnen van ${m[1]}${m[2]?'. Kredietoptie.':''}`,pl:m=>`Zapłać w 3 nieoprocentowanych ratach po ${m[1]}${m[2]?'. Opcja kredytowa.':''}`,de:m=>`Zahlen Sie in 3 zinsfreien Raten à ${m[1]}${m[2]?'. Kreditoption.':''}`,sv:m=>`Betala i 3 räntefria delbetalningar à ${m[1]}${m[2]?'. Kreditalternativ.':''}`}],
    [/^Arrives by (\d+)(?:st|nd|rd|th) ([A-Z][a-z]{2})$/,{fr:m=>`Livré le ${m[1]} ${mon('fr',m[2])}`,nl:m=>`Bezorgd op ${m[1]} ${mon('nl',m[2])}`,pl:m=>`Dostawa do ${m[1]} ${mon('pl',m[2])}`,de:m=>`Lieferung bis ${m[1]}. ${mon('de',m[2])}`,sv:m=>`Levereras senast ${m[1]} ${mon('sv',m[2])}`}],
    [/^Your Bag \((\d+)\)$/i,{fr:m=>`Votre panier (${m[1]})`,nl:m=>`Je winkelmand (${m[1]})`,pl:m=>`Twój koszyk (${m[1]})`,de:m=>`Ihr Warenkorb (${m[1]})`,sv:m=>`Din varukorg (${m[1]})`}],
    [/^([\d,+]+) products$/i,{fr:m=>`${m[1]} produits`,nl:m=>`${m[1]} producten`,pl:m=>`${m[1]} produktów`,de:m=>`${m[1]} Produkte`,sv:m=>`${m[1]} produkter`}],
    [/^Size (\S+) · Qty (\d+)$/,{fr:m=>`Taille ${m[1]} · Qté ${m[2]}`,nl:m=>`Maat ${m[1]} · Aantal ${m[2]}`,pl:m=>`Rozmiar ${m[1]} · Ilość ${m[2]}`,de:m=>`Größe ${m[1]} · Menge ${m[2]}`,sv:m=>`Storlek ${m[1]} · Antal ${m[2]}`}],
    [/^Products matching “(.+)”$/,{fr:m=>`Produits correspondant à « ${m[1]} »`,nl:m=>`Producten voor ‘${m[1]}’`,pl:m=>`Produkty pasujące do „${m[1]}”`,de:m=>`Produkte zu „${m[1]}“`,sv:m=>`Produkter som matchar ”${m[1]}”`}],
    [/^Image (\d+)$/,{fr:m=>`Image ${m[1]}`,nl:m=>`Afbeelding ${m[1]}`,pl:m=>`Zdjęcie ${m[1]}`,de:m=>`Bild ${m[1]}`,sv:m=>`Bild ${m[1]}`}],
    [/^(\d+) days (\d+) hours (\d+) minutes left$/,{fr:m=>`${m[1]} j ${m[2]} h ${m[3]} min restantes`,nl:m=>`Nog ${m[1]} dagen ${m[2]} uur ${m[3]} minuten`,pl:m=>`Pozostało ${m[1]} dni ${m[2]} godz. ${m[3]} min`,de:m=>`Noch ${m[1]} Tage ${m[2]} Std. ${m[3]} Min.`,sv:m=>`${m[1]} dagar ${m[2]} tim ${m[3]} min kvar`}],
    [/^Enjoy unlimited delivery for an entire year from just (£[\d.,]+)$/,{fr:m=>`Profitez de la livraison illimitée pendant un an dès ${m[1]}`,nl:m=>`Een heel jaar onbeperkt bezorging vanaf slechts ${m[1]}`,pl:m=>`Nielimitowana dostawa przez cały rok już od ${m[1]}`,de:m=>`Ein ganzes Jahr unbegrenzte Lieferung ab nur ${m[1]}`,sv:m=>`Obegränsad leverans i ett helt år från endast ${m[1]}`}],
    [/^Save (\d+%)$/i,{fr:m=>`Économisez ${m[1]}`,nl:m=>`Bespaar ${m[1]}`,pl:m=>`Oszczędź ${m[1]}`,de:m=>`Sparen Sie ${m[1]}`,sv:m=>`Spara ${m[1]}`}],
    [/^Save an extra (\d+%)$/i,{fr:m=>`Économisez ${m[1]} de plus`,nl:m=>`Bespaar nog eens ${m[1]}`,pl:m=>`Oszczędź dodatkowe ${m[1]}`,de:m=>`Sparen Sie zusätzlich ${m[1]}`,sv:m=>`Spara ytterligare ${m[1]}`}],
    [/^By submitting your details, you agree to receive marketing communications from us & our family of brands by email\.$/,{fr:()=>'En soumettant vos coordonnées, vous acceptez de recevoir par e-mail des communications marketing de notre part et de notre famille de marques.',nl:()=>'Door je gegevens te verzenden, ga je ermee akkoord per e-mail marketingcommunicatie te ontvangen van ons en onze merkenfamilie.',pl:()=>'Przesyłając swoje dane, wyrażasz zgodę na otrzymywanie e-mailem komunikacji marketingowej od nas i naszej rodziny marek.',de:()=>'Mit dem Absenden Ihrer Daten erhalten Sie Marketingmitteilungen von uns und unserer Markenfamilie per E-Mail.',sv:()=>'Genom att skicka dina uppgifter godkänner du att ta emot marknadsföring via e-post från oss och vår varumärkesfamilj.'}],
    [/^By submitting your details, you agree to receive marketing communications from (.+) & our$/,{fr:m=>`En soumettant vos coordonnées, vous acceptez de recevoir des communications marketing de ${m[1]} et de notre`,nl:m=>`Door je gegevens te verzenden, ga je ermee akkoord marketingcommunicatie te ontvangen van ${m[1]} en onze`,pl:m=>`Przesyłając swoje dane, wyrażasz zgodę na otrzymywanie komunikacji marketingowej od ${m[1]} i naszej`,de:m=>`Mit dem Absenden Ihrer Daten erhalten Sie Marketingmitteilungen von ${m[1]} und unserer`,sv:m=>`Genom att skicka dina uppgifter godkänner du att ta emot marknadsföring från ${m[1]} och vår`}],
    [/^By submitting your details, you agree to receive marketing communications from$/,{fr:()=>'En soumettant vos coordonnées, vous acceptez de recevoir des communications marketing de',nl:()=>'Door je gegevens te verzenden, ga je ermee akkoord marketingcommunicatie te ontvangen van',pl:()=>'Przesyłając swoje dane, wyrażasz zgodę na otrzymywanie komunikacji marketingowej od',de:()=>'Mit dem Absenden Ihrer Daten erhalten Sie Marketingmitteilungen von',sv:()=>'Genom att skicka dina uppgifter godkänner du att ta emot marknadsföring från'}]
  ];
  const LOW={};   // lang → lower-case index, for strings a page shows in another case (NEW IN / New In)
  const caps=s=>/[A-Za-z]/.test(s)&&s===s.toUpperCase();
  function DG_t(s,lang){
    const T=(root.DG_I18N_COPY||{})[lang];if(!T||!s)return null;
    s=s.replace(/\s+/g,' ').trim();
    if(T[s]!=null)return T[s];
    for(const [re,f] of PATTERNS){const m=s.match(re);if(m&&f[lang]){const t=f[lang](m);return caps(s)?t.toUpperCase():t}}
    const L=LOW[lang]||(LOW[lang]=Object.fromEntries(Object.entries(T).map(([k,v])=>[k.toLowerCase(),v])));
    const v=L[s.toLowerCase()];if(v!=null)return caps(s)?v.toUpperCase():v;
    /* "<known offer>, with code: CODE" — the offer from the table, the code as it is */
    const wc=s.match(/^(.+?),? with code:? (\S+)$/i),WC={fr:'avec le code',nl:'met code',pl:'z kodem',de:'mit Code',sv:'med koden'};
    if(wc){const p=DG_t(wc[1],lang);if(p!=null)return `${p}, ${WC[lang]} ${wc[2]}`}
    /* "Name. Feature. Feature." (the PDP description) — sentence by sentence, only when every sentence is known */
    if(s.includes('. ')){const ps=s.replace(/\.$/,'').split('. '),o=ps.map(p=>T[p]??L[p.toLowerCase()]);if(o.every(x=>x!=null))return o.map(x=>x.replace(/\.$/,'')).join('. ')+'.'}
    return null}
  const SKIP='.badge-ai,[data-i18n-skip],script,style,noscript';
  const ATTRS=['aria-label','placeholder','title'];
  const TXT=new WeakMap(),ATT=new WeakMap();
  /* one value: rec = what we last wrote; if the page has since written its own text, that text is the new English */
  function swap(cur,rec,lang){const src=rec&&cur===rec.out?rec.src:cur;
    const t=lang==='en'?null:DG_t(src,lang);
    if(t==null)return{val:src,rec:null};
    const [,a,,b]=src.match(/^(\s*)([\s\S]*?)(\s*)$/);return{val:a+t+b,rec:{src,out:a+t+b}}}
  function DG_i18n(node,lang){
    const doc=node.ownerDocument||node,top=node.body||node.documentElement||node;if(!top)return;
    if(node.documentElement)node.documentElement.lang=lang||'en';
    const tw=doc.createTreeWalker(top,4,{acceptNode:n=>{const p=n.parentElement;return !p||p.closest(SKIP)||!n.nodeValue.trim()?2:1}});
    let n;while(n=tw.nextNode()){const r=swap(n.nodeValue,TXT.get(n),lang);if(r.val!==n.nodeValue)n.nodeValue=r.val;r.rec?TXT.set(n,r.rec):TXT.delete(n)}
    top.querySelectorAll('[aria-label],[placeholder],[title]').forEach(el=>{if(el.closest(SKIP))return;const m=ATT.get(el)||{};
      ATTRS.forEach(a=>{const cur=el.getAttribute(a);if(cur==null||!cur.trim())return;const r=swap(cur,m[a],lang);if(r.val!==cur)el.setAttribute(a,r.val);m[a]=r.rec});ATT.set(el,m)})}
  function DG_i18nWatch(doc,getLang){let t,o;const run=()=>{o.disconnect();DG_i18n(doc,getLang());o.observe(doc.body,OPT)};
    const OPT={childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS};
    o=new MutationObserver(()=>{clearTimeout(t);t=setTimeout(run,60)});run();
    return ()=>{clearTimeout(t);o.disconnect()}}
  Object.assign(root,{DG_t,DG_i18n,DG_i18nWatch,DG_I18N_PATTERNS:PATTERNS});
})(typeof window!=='undefined'?window:globalThis);
