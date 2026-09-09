const i={title:"DG/Actions/Quantity stepper",tags:["autodocs"],parameters:{docs:{description:{component:`Minus / count / plus. At quantity one the minus becomes remove — the same rule the dev QuantityPill follows.

**When to use** 
- Bag line items, samples, gift quantities.

**Avoid** 
- Free-typing quantity in a field.

**Anatomy** 
- 28px controls · 1px --border-default · count centred

**CSS** \`.qty\` · **Figma** CYyGeUDy4w02enV7uFxZ6W · 1234:76756

**Front-end Storybook** [Molecules/Basket/QuantityPill](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-basket-quantitypill--docs) — *match*. Dev states: quantity of one shows remove · mid range shows minus · max disables plus · fixed · disabled · debounced taps. Ours needs the max / fixed / disabled states drawn.`}}}},e={name:"Default",render:()=>'<div class="qty"><button aria-label="Remove">–</button><span>2</span><button aria-label="Add">+</button></div>'},t={name:"At one (remove)",render:()=>'<div class="qty"><button aria-label="Remove">🗑</button><span>1</span><button aria-label="Add">+</button></div>'};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="qty"><button aria-label="Remove">–</button><span>2</span><button aria-label="Add">+</button></div>\`
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,r,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "At one (remove)",
  render: () => \`<div class="qty"><button aria-label="Remove">🗑</button><span>1</span><button aria-label="Add">+</button></div>\`
}`,...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const u=["default_","atOneRemove"];export{u as __namedExportsOrder,t as atOneRemove,i as default,e as default_};
