const m={title:"DG/Product/Price",tags:["autodocs"],parameters:{docs:{description:{component:`Now, was and saving. Sale prices go red (PLT’s own red), the was price is struck through in the mid weight.

**When to use** 
- Cards, PDP, bag lines, order summary.

**Avoid** 
- Showing a saving without the was price.

**Anatomy** 
- Now 16–20px strong · was struck, --w-mid · save badge --badge-save-bg/-fg
- Promo line in --price-sale under the block

**CSS** \`.price · .pc-price\` · **Figma** core-pdp C5

**Front-end Storybook** [Molecules/Product Price](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-product-price--docs) — *match*. Dev: wasPrice · percentageSaving · priceSavingInline · showFromPriceRange · priceMatch label. Same anatomy.`}}}},s={name:"PDP block",render:()=>'<div><div class="price"><span class="now sale">£70.00</span><span class="was">£139.00</span><span class="save">Save 50%</span></div><div class="price-promo">£63.00 with code FASHION</div></div>'},a={name:"Card price",render:()=>'<div class="pc-price sale" style="font-family:var(--font-family-base)"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>'},e={name:"Full price",render:()=>'<div class="price"><span class="now">£45.00</span></div>'};var r,n,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "PDP block",
  render: () => \`<div><div class="price"><span class="now sale">£70.00</span><span class="was">£139.00</span><span class="save">Save 50%</span></div><div class="price-promo">£63.00 with code FASHION</div></div>\`
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var o,i,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Card price",
  render: () => \`<div class="pc-price sale" style="font-family:var(--font-family-base)"><span class="now">£70.00</span><span class="was">£139.00</span><span class="pct">-50%</span></div>\`
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,t,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Full price",
  render: () => \`<div class="price"><span class="now">£45.00</span></div>\`
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const v=["pDPBlock","cardPrice","fullPrice"];export{v as __namedExportsOrder,a as cardPrice,m as default,e as fullPrice,s as pDPBlock};
