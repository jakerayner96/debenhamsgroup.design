const o={title:"DG/Chips & pills/Chip",tags:["autodocs"],parameters:{docs:{description:{component:`40px outlined choice that fills with ink when selected.

**When to use** 
- Single-select filters on rails and content pages.

**Avoid** 
- Chips for navigation (use category pills).

**Anatomy** 
- 40px · 1px outline · selected = --text-primary fill, inverse label

**CSS** \`.chip\`

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook.`}}}},t={name:"Set",render:()=>'<div style="display:flex;gap:8px"><button class="chip on">All items</button><button class="chip">New in</button><button class="chip">Sale</button></div>'};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "Set",
  render: () => \`<div style="display:flex;gap:8px"><button class="chip on">All items</button><button class="chip">New in</button><button class="chip">Sale</button></div>\`
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const i=["set"];export{i as __namedExportsOrder,o as default,t as set};
