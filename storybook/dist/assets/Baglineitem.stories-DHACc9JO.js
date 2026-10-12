const t={title:"DG/Overlays & bag/Bag line item",tags:["autodocs"],parameters:{docs:{description:{component:`99×148 image beside brand, name, variant and price. Quantity and remove live in the row.

**When to use** 
- Bag, mini bag, added-to-bag, order confirmation.

**Avoid** 
- A different image ratio to the product card.

**Anatomy** 
- Image 99×148 · brand strong · name 2-line · variant --text-secondary · price with strike

**CSS** \`.bag-item\` · **Figma** CYyGeUDy4w02enV7uFxZ6W · 1337:250088

**Front-end Storybook** [Molecules/Basket/CartLineItemV2Card](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-basket-cartlineitemv2card--docs) — *partial*. Dev has 23 states (low stock, max quantity, gift card, premier, sample, pre-order, price promise, protection plan, subscribe & save, free gift, Taggstar…). Ours draws the base; states to follow from the CA bag variants.`}}}},e={name:"Default",render:()=>'<div class="bag-item" style="width:340px"><span style="display:block;width:99px;height:148px;background:linear-gradient(160deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span><div class="info"><div class="b">Coast</div><div class="n">Long Sleeve Lace and Pleated Midi Shirt Dress</div><div class="v">Size 12 · Pink</div><div class="p"><span class="sale">£70.00</span><s>£139.00</s></div></div></div>'};var a,s,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="bag-item" style="width:340px"><span style="display:block;width:99px;height:148px;background:linear-gradient(160deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span><div class="info"><div class="b">Coast</div><div class="n">Long Sleeve Lace and Pleated Midi Shirt Dress</div><div class="v">Size 12 · Pink</div><div class="p"><span class="sale">£70.00</span><s>£139.00</s></div></div></div>\`
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const n=["default_"];export{n as __namedExportsOrder,t as default,e as default_};
