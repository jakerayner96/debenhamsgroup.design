/* Shopping agent (Google Cloud Shopping Agent) — the config layer.
   base-config.json = the dev's salesAgentConfig as delivered (retrieveConfig, UAT, 07 Oct).
   AG.build(base, edits) applies the prototype's edits and returns the file the devs paste back into the backend.
   Shared by the shell (download / export) and page.html (renders the chat window from the same object). */
(function(root){
const DEF={
  name:'Deb',
  title:'Ask Deb',
  intro:"Hi there – I’m Deb, your Debenhams Personal Assistant! Whatever you’re looking for, I’ll help you find it. I can guide you based on budget, occasion, colour, style, size & more. Let me know what you’re shopping for today and we can get started…",
  ask:'You can ask me things like:',
  prompts:["Women's Dresses","Beauty & Skincare","Men's Shirts & Suits","Home & Bedding"],
  placeholder:'Ask Deb anything...',
  disclosure:'Our AI is learning and may make mistakes.',
  primary:'#00787d',
  accent:'#7be7d8',
  chipBg:'#f8f8f8',
  chipBorder:'#959499',
  chipRadius:24,
  width:606,
  radius:24,
  hero:true,
  icon:'config',            // config = the teal tile in the dev config · spark = the Ask Deb sparkle
  cart:'ADD TO BAG',
  /* small ADD TO BAG = the primary CTA, small: aqua --surface-action #7BE7D8, black label, 4px radius */
  cartBg:'#7be7d8',
  cartFg:'#000000',
  cartRadius:4,
  sendBg:'#7be7d8',sendFg:'#000000',sendOffBg:'#e8f4f2',sendOffFg:'#b5b5b5',
  /* the Agent start screen (prototype only): one line of copy + four one-line starter prompts */
  tagline:'Whatever you’re looking for, I’ll help you find it. I can guide you based on budget, occasion, colour, style, size & more. Let me know what you’re shopping for today and we can get started…',
  starters:['Find me an outfit for a wedding','Does this dress come in petite?','Gifts for my mum under £50','What goes with my black blazer?'],
};
/* the other fascias (19 Oct): same dev file, the brand's name, domain and DS colours (tokens.css --surface-action / --text-on-action;
   AI colour = the CTA colour, all pass 3:1). Debenhams keeps DEF as delivered. */
const BRANDS={
  debenhams:{n:'Debenhams',d:'debenhams.com'},
  boohoo:{n:'boohoo',d:'boohoo.com',cta:'#000000',on:'#ffffff',font:'Montserrat'},
  boohooman:{n:'boohooMAN',d:'boohooman.com',cta:'#000000',on:'#ffffff',men:true,font:'Montserrat'},
  plt:{n:'PrettyLittleThing',d:'prettylittlething.com',cta:'#550503',on:'#ffffff',r:0,font:'Roboto'},
  karenmillen:{n:'Karen Millen',d:'karenmillen.com',cta:'#d24508',on:'#ffffff',ai:'#000000',font:'Jost'},   /* KM AI is black, not its orange CTA (DS --ai-fg) */
  warehouse:{n:'Warehouse',d:'warehousefashion.com',cta:'#000000',on:'#ffffff',font:'Roboto'},
  brandroom:{n:'The Brand Room',d:'thebrandroom.com',cta:'#000000',on:'#ffffff',r:0,font:'Archivo'}};
function def(b){const B=BRANDS[b]||BRANDS.debenhams;if(!B.cta)return Object.assign({},DEF,{brandName:B.n,domain:B.d});
  return Object.assign({},DEF,{brandName:B.n,domain:B.d,font:B.font,name:B.n,title:'Ask '+B.n,
    intro:`Hi there – I’m your ${B.n} Personal Assistant! Whatever you’re looking for, I’ll help you find it. I can guide you based on budget, occasion, colour, style, size & more. Let me know what you’re shopping for today and we can get started…`,
    prompts:B.men?['Shirts','New In','Jeans','Shoes & Trainers']:['Party Dresses','New In','Going Out Tops','Shoes & Accessories'],
    starters:B.men?['Find me an outfit for a wedding','Does this shirt come in tall?','Gifts for my dad under £50','What goes with my black jeans?']:DEF.starters,
    placeholder:`Ask ${B.n} anything...`,primary:B.ai||B.cta,accent:B.ai||B.cta,cartBg:B.cta,cartFg:B.on,cartRadius:B.r??4,sendBg:B.cta,sendFg:B.on,sendOffBg:'#e7e7e7',sendOffFg:'#b5b5b5'})}
const clone=o=>JSON.parse(JSON.stringify(o));
const rx=(s)=>new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi');
function build(base,e,brand){
  e=Object.assign({},def(brand),e||{});
  /* typography: the dev file sets Geologica (Debenhams) on every text key; other fascias get their DS font (tokens.css --font-family-base) */
  const c=e.font?JSON.parse(JSON.stringify(base).replace(/Geologica/g,e.font)):clone(base),p=c.payload,st=p.settings,sy=p.style,zs=p.components.zeroState.payload;
  st['chat-title']=e.title;
  st['placeholder-text']=e.placeholder;
  st['disclosure-text']=e.disclosure;
  st['cart-button-text']=e.cart;
  if(e.icon==='spark'){st['chat-icon']=st['chat-title-icon']='https://jakerayner96.github.io/debenhamsgroup.design/projects/shopping-agent/img/ask-deb-spark.png'}
  /* colour: every key carrying the teal / the mint gets the new value (primary, send, cart button, bot-writing dots, input gradient) */
  const swap=(o)=>{for(const k in o){if(typeof o[k]==='string')o[k]=o[k].replace(rx('#00787d'),e.primary).replace(rx('#7be7d8'),e.accent)}};
  swap(sy);
  sy['--chat-messenger-internal-chat-window-width']=e.width+'px';
  /* send button = the DS primary: aqua + black when there is text, the disabled primary (light aqua + grey) when empty */
  sy['--chat-messenger-internal-send-icon-active-background']=e.sendBg;sy['--chat-messenger-internal-send-icon-active-color']=e.sendFg;
  sy['--chat-messenger-internal-send-icon-background']=e.sendOffBg;sy['--chat-messenger-internal-send-icon-color']=e.sendOffFg;
  sy['--cart-button-background-color']=e.cartBg;
  sy['--cart-button-font-color']=e.cartFg;
  for(const k of ['start-start','start-end','end-end','end-start'])sy[`--chat-messenger-cart-button--${k}-corner-radius`]=e.cartRadius+'px';
  sy['--chat-messenger-cart-button-min-width']='0';
  /* PA Deck Figma 6:167: 104px tiles, 12/500 title, 13/700 price */
  sy['--chat-messenger-product-carousel-tile-width']='104px';
  const rc=p['rich-content-config'];for(const k of ['tileConfig','productDetailConfig']){const m=rc[k]&&rc[k].metadata;if(!m)continue;
    for(const row of m){if(row.type==='title')row.config.fontSize='12px';if(row.type==='primaryPriceContainer'){row.config.fontSize='13px';if(row.config.onSaleConfig)row.config.onSaleConfig.fontSize='13px'}}}
  sy['--chat-messenger-internal-chat-border-radius']=e.radius+'px';
  sy['--chat-messenger-internal-chips-background-color']=e.chipBg;
  sy['--chat-messenger-internal-chips-border-color']=e.chipBorder;
  const zst=zs.styles;
  zst['--df-messenger-prompt-background-color']=e.chipBg;
  zst['--df-messenger-prompt-border-color']=e.chipBorder;
  zst['--df-messenger-prompt-border-radius']=e.chipRadius+'px';
  zs.text=e.intro+' <br/><br/>'+e.ask+'<br/>';
  zs.prompts=e.prompts.filter(Boolean);
  p.components.text.payload.text=`By using ${e.title}, you agree to ${/s$/.test(e.brandName)?e.brandName+"'":e.brandName+"'s"} [Privacy Notice](https://www.${e.domain}/content/privacy-notice) and [Terms & Conditions](https://www.${e.domain}/content/terms-conditions)`;
  if(!e.hero)delete p.components.hero;
  return c;
}
/* flat list of changed leaf paths — the "what we changed" list for the devs */
function diff(a,b,pre='',out=[]){
  const keys=new Set([...Object.keys(a||{}),...Object.keys(b||{})]);
  for(const k of keys){const x=a?a[k]:undefined,y=b?b[k]:undefined,pth=pre?pre+'.'+k:k;
    if(x&&y&&typeof x==='object'&&typeof y==='object'&&!Array.isArray(x))diff(x,y,pth,out);
    else if(JSON.stringify(x)!==JSON.stringify(y))out.push({path:pth,from:x,to:y});}
  return out;
}
root.AG={DEF,BRANDS,def,build,diff};
})(window);
