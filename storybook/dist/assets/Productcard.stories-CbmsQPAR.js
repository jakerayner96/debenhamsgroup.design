const L={title:"DG/Product/Product card",tags:["autodocs"],parameters:{docs:{description:{component:`The hero asset. One card for every PLP, carousel and recommendation — every optional element is a layer you switch on per fascia, never a fork.

**When to use** 
- Product grids, rails, search results, Shop The Look.

**Avoid** 
- Rounding the image corners (live and Figma are square).
- A discount in the product tag — tags are fit and range only.
- Letting quick add squeeze the price row (it sits on the titles row).

**Anatomy** 
- Image 2:3 on --surface-media · actions top-right 32px, 8px in
- Badges bottom-left · AI strip owns the image foot
- Info block: brand (strong) · name (2-line clamp) · price · swatches · stars
- Compact format: 11px caps brand, 12px name — the alignment target

**CSS** \`.pc\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 5992-10841 / 12999-146812

**Front-end Storybook** [Molecules/CT Product Card](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-ct-product-card--docs) — *match*. Dev card layouts default · 1-column · dropdown, flags quickAdd · hideBadges · hideColourSwatches · showRatings · sponsoredStatus · useSquareImage — the same layer model. Molecules/Product Card (CMS) is the simpler content card.`}}}},s={name:"All layers",render:()=>`<article class="pc" style="width:200px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button><button class="pc-iconbtn" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button></div>
    <div class="pc-badges has-ai"><span class="badge">Plus</span></div><div class="badge-ai"><b>AI</b> Generated</div>
  </div>
  
  <div class="pc-taggstar"><img src="assets/ds/icons/trophy.svg" alt=""><b>No. 6 Bestseller</b><span>in Dresses</span></div>
  <div class="pc-info"><div class="pc-sponsored">Sponsored</div>
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    <div class="pc-swatches"><span class="set"><span class="pc-swatch on"><i style="background:#B97A57"></i></span><span class="pc-swatch"><i style="background:#2B2B2B"></i></span><span class="pc-swatch"><i style="background:#8FA3B8"></i></span></span><span class="pc-more">+5</span></div>
    <div class="pc-stars"><span class="set"><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-half.svg" alt=""><img src="assets/ds/icons/star-outline.svg" alt=""></span><span>(9)</span></div>
  </div></article>`},a={name:"Minimal",render:()=>`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article>`},i={name:"Compact (target)",render:()=>`<article class="pc pc--compact" style="width:170px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn pc-iconbtn--sq" aria-label="Add to wishlist"><img src="assets/ds/icons/bookmark.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article>`},c={name:"Quick add · button",render:()=>`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  <button class="pc-add"><img src="assets/ds/icons/quick-add-24.svg" alt="">Add</button>
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article>`},n={name:"Quick add · mini",render:()=>`<article class="pc" style="width:200px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div><button class="pc-qa" aria-label="Quick add"><i></i>Add</button></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article>`},t={name:"No brand line (PLT / Warehouse)",render:()=>`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article>`};var d,e,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "All layers",
  render: () => \`<article class="pc" style="width:200px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button><button class="pc-iconbtn" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button></div>
    <div class="pc-badges has-ai"><span class="badge">Plus</span></div><div class="badge-ai"><b>AI</b> Generated</div>
  </div>
  
  <div class="pc-taggstar"><img src="assets/ds/icons/trophy.svg" alt=""><b>No. 6 Bestseller</b><span>in Dresses</span></div>
  <div class="pc-info"><div class="pc-sponsored">Sponsored</div>
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    <div class="pc-swatches"><span class="set"><span class="pc-swatch on"><i style="background:#B97A57"></i></span><span class="pc-swatch"><i style="background:#2B2B2B"></i></span><span class="pc-swatch"><i style="background:#8FA3B8"></i></span></span><span class="pc-more">+5</span></div>
    <div class="pc-stars"><span class="set"><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-half.svg" alt=""><img src="assets/ds/icons/star-outline.svg" alt=""></span><span>(9)</span></div>
  </div></article>\`
}`,...(l=(e=s.parameters)==null?void 0:e.docs)==null?void 0:l.source}}};var r,p,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Minimal",
  render: () => \`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price"><span class="now">£70.00</span></div>
    
    
  </div></article>\`
}`,...(o=(p=a.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};var v,g,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Compact (target)",
  render: () => \`<article class="pc pc--compact" style="width:170px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn pc-iconbtn--sq" aria-label="Add to wishlist"><img src="assets/ds/icons/bookmark.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article>\`
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var m,u,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Quick add · button",
  render: () => \`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  <button class="pc-add"><img src="assets/ds/icons/quick-add-24.svg" alt="">Add</button>
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article>\`
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var w,y,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Quick add · mini",
  render: () => \`<article class="pc" style="width:200px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-brand">Coast</div><div class="pc-name">Lace and pleated midi shirt dress</div></div><button class="pc-qa" aria-label="Quick add"><i></i>Add</button></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article>\`
}`,...(k=(y=n.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var A,f,x;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "No brand line (PLT / Warehouse)",
  render: () => \`<article class="pc" style="width:180px">
  <div class="pc-img"><span style="position:absolute;inset:0;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"></span>
    <div class="pc-actions"><button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button></div>
    
  </div>
  
  
  <div class="pc-info">
    <div class="pc-toprow"><div class="pc-titles"><div class="pc-name">Lace and pleated midi shirt dress</div></div></div>
    <div class="pc-price sale"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>
    
    
  </div></article>\`
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const B=["allLayers","minimal","compactTarget","quickAddButton","quickAddMini","noBrandLinePLTWarehouse"];export{B as __namedExportsOrder,s as allLayers,i as compactTarget,L as default,a as minimal,t as noBrandLinePLTWarehouse,c as quickAddButton,n as quickAddMini};
