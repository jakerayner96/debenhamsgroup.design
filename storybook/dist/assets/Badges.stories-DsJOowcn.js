const l={title:"DG/Product/Badges",tags:["autodocs"],parameters:{docs:{description:{component:`Overlay tags on imagery: Plus, Petite, Tall, Sale. They stack bottom-left and lift when the AI strip is present.

**When to use** 
- Fit and range information on the image.

**Avoid** 
- Discounts or urgency in a badge.
- More than two stacked.

**Anatomy** 
- White 90% ground · 11px label · brand radius
- Stack gap 4 · lifts by --ai-h over the AI strip

**CSS** \`.badge\` · **Figma** d0zY0vt8hoz0gq8ycTimxS · 25-11775

**Front-end Storybook** no counterpart yet (*ours*). Dev renders badges inside CT Product Card (hideBadges / hidePromoBadges) with no standalone atom. Split out.`}}}},a={name:"Set",render:()=>'<div style="display:flex;gap:8px"><span class="badge">Plus</span><span class="badge">Petite</span><span class="badge">Tall</span><span class="badge badge--sale">Sale</span></div>'},s={name:"Stacked on image",render:()=>`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    <div class="pc-badges has-ai"><span class="badge">Petite</span><span class="badge badge--sale">Sale</span></div><div class="badge-ai"><b>AI</b> Generated</div>
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article>`};var e,n,d;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "Set",
  render: () => \`<div style="display:flex;gap:8px"><span class="badge">Plus</span><span class="badge">Petite</span><span class="badge">Tall</span><span class="badge badge--sale">Sale</span></div>\`
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,t,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Stacked on image",
  render: () => \`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    <div class="pc-badges has-ai"><span class="badge">Petite</span><span class="badge badge--sale">Sale</span></div><div class="badge-ai"><b>AI</b> Generated</div>
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article>\`
}`,...(c=(t=s.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const r=["set","stackedOnImage"];export{r as __namedExportsOrder,l as default,a as set,s as stackedOnImage};
