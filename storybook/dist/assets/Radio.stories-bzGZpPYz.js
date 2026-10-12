const r={title:"DG/Forms/Radio",tags:["autodocs"],parameters:{docs:{description:{component:`26px ring with a 14px dot. One of a set.

**When to use** 
- Delivery options, payment method, sort order in a sheet.

**Avoid** 
- A single radio on its own.

**Anatomy** 
- 26px ring · 14px dot in --icon-action

**CSS** \`.rad\`

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook. Adopt ours.`}}}},e={name:"Set",render:()=>'<div style="display:flex;flex-direction:column;gap:12px"><div class="rad-row"><button class="rad on" aria-checked="true"></button>Recommended</div><div class="rad-row" style="padding-top:0"><button class="rad" aria-checked="false"></button>Lowest price</div></div>'};var o,t,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Set",
  render: () => \`<div style="display:flex;flex-direction:column;gap:12px"><div class="rad-row"><button class="rad on" aria-checked="true"></button>Recommended</div><div class="rad-row" style="padding-top:0"><button class="rad" aria-checked="false"></button>Lowest price</div></div>\`
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const a=["set"];export{a as __namedExportsOrder,r as default,e as set};
