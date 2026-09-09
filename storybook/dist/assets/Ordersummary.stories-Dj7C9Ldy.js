const n={title:"DG/Overlays & bag/Order summary",tags:["autodocs"],parameters:{docs:{description:{component:`Subtotal, delivery, discounts, total on the sunken surface.

**When to use** 
- Bag, checkout, confirmation.

**Avoid** 
- Hiding discounts inside the subtotal.

**Anatomy** 
- Rows 14px · discount row in --text-success · divider · total 16px strong

**CSS** \`.summary\` · **Figma** CYyGeUDy4w02enV7uFxZ6W · 1337:250678

**Front-end Storybook** [Molecules/Basket/OrderSummaryV2](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-basket-ordersummaryv2--docs) — *match*. Dev stories: Figma default · free delivery with add-on · multiple discounts · no discounts · all rows.`}}}},s={name:"Default",render:()=>'<div class="summary" style="width:320px"><div class="sum-row"><span>Subtotal</span><span>£70.00</span></div><div class="sum-row"><span>Delivery</span><span><b>FREE</b></span></div><div class="sum-disc">Discounts <span style="font-weight:400">−£6.00</span></div><div class="hr"></div><div class="sum-row total"><span>Order total</span><span>£64.00</span></div></div>'};var a,t,e;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="summary" style="width:320px"><div class="sum-row"><span>Subtotal</span><span>£70.00</span></div><div class="sum-row"><span>Delivery</span><span><b>FREE</b></span></div><div class="sum-disc">Discounts <span style="font-weight:400">−£6.00</span></div><div class="hr"></div><div class="sum-row total"><span>Order total</span><span>£64.00</span></div></div>\`
}`,...(e=(t=s.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const o=["default_"];export{o as __namedExportsOrder,n as default,s as default_};
