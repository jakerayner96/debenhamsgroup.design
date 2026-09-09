const t={title:"DG/PDP modules/Section header + rail",tags:["autodocs"],parameters:{docs:{description:{component:`A 20px title with a View all link, then a horizontal rail of product cards.

**When to use** 
- Recommendations, recently viewed, complete the look.

**Avoid** 
- A rail with fewer than three items — use a grid.

**Anatomy** 
- Title 20/22 --w-mid · link 14px right · rail gap 4, cards 165px

**CSS** \`.sec-head · .prail\` · **Figma** core-pdp C19

**Front-end Storybook** [Molecules/PersonalisedCarousel](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-personalisedcarousel--docs) — *partial*. Dev carousel has controls, brand / category / search-term feeds. Ours fixes the header + spacing.`}}}},s={name:"Default",render:()=>`<div style="width:520px;display:flex;flex-direction:column;gap:12px;font-family:var(--font-family-base)"><div class="sec-head"><h3>You may also like</h3><a href="#">View all</a></div><div class="prail"><article class="pc" style="width:165px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article><article class="pc" style="width:165px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article><article class="pc" style="width:165px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article></div></div>`};var a,i,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div style="width:520px;display:flex;flex-direction:column;gap:12px;font-family:var(--font-family-base)"><div class="sec-head"><h3>You may also like</h3><a href="#">View all</a></div><div class="prail"><article class="pc" style="width:165px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article><article class="pc" style="width:165px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article><article class="pc" style="width:165px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article></div></div>\`
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const n=["default_"];export{n as __namedExportsOrder,t as default,s as default_};
