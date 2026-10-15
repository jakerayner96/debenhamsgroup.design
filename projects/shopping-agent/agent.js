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
  /* the Agent start screen (prototype only): one line of copy + four one-line starter prompts */
  tagline:'Tell me what you’re shopping for and I’ll find it.',
  starters:['Find me an outfit for a wedding','Does this dress come in petite?','Gifts for my mum under £50','What goes with my black blazer?'],
};
const clone=o=>JSON.parse(JSON.stringify(o));
const rx=(s)=>new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi');
function build(base,e){
  e=Object.assign({},DEF,e||{});
  const c=clone(base),p=c.payload,st=p.settings,sy=p.style,zs=p.components.zeroState.payload;
  st['chat-title']=e.title;
  st['placeholder-text']=e.placeholder;
  st['disclosure-text']=e.disclosure;
  st['cart-button-text']=e.cart;
  if(e.icon==='spark'){st['chat-icon']=st['chat-title-icon']='https://jakerayner96.github.io/debenhamsgroup.design/projects/shopping-agent/img/ask-deb-spark.png'}
  /* colour: every key carrying the teal / the mint gets the new value (primary, send, cart button, bot-writing dots, input gradient) */
  const swap=(o)=>{for(const k in o){if(typeof o[k]==='string')o[k]=o[k].replace(rx('#00787d'),e.primary).replace(rx('#7be7d8'),e.accent)}};
  swap(sy);
  sy['--chat-messenger-internal-chat-window-width']=e.width+'px';
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
  p.components.text.payload.text=`By using ${e.title}, you agree to Debenhams' [Privacy Notice](https://www.debenhams.com/content/privacy-notice) and [Terms & Conditions](https://www.debenhams.com/content/terms-conditions)`;
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
root.AG={DEF,build,diff};
})(window);
