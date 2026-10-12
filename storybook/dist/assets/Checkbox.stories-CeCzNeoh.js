const t={title:"DG/Forms/Checkbox",tags:["autodocs"],parameters:{docs:{description:{component:`24px box, 3px radius, filled with the brand action colour when on.

**When to use** 
- Multiple choice, consent, add-ons (protection, gift wrap).

**Avoid** 
- A checkbox for an either/or choice — that is a radio.

**Anatomy** 
- 24px · 1px --border-strong · on = --icon-action fill + white tick
- Row variant aligns the label at 14/20; .chk-row--lg top-aligns long copy

**CSS** \`.chk\`

**Front-end Storybook** no counterpart yet (*ours*). No checkbox atom in the dev Storybook (checkout forms use native inputs). Adopt ours.`}}}},o={name:"On / off",render:()=>'<div style="display:flex;flex-direction:column;gap:12px"><div class="chk-row"><button class="chk on" aria-checked="true"></button>Add Worry-Free Purchase® for £3.18</div><div class="chk-row"><button class="chk" aria-checked="false"></button>Use my delivery address for billing</div></div>'};var e,n,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "On / off",
  render: () => \`<div style="display:flex;flex-direction:column;gap:12px"><div class="chk-row"><button class="chk on" aria-checked="true"></button>Add Worry-Free Purchase® for £3.18</div><div class="chk-row"><button class="chk" aria-checked="false"></button>Use my delivery address for billing</div></div>\`
}`,...(r=(n=o.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const c=["onOff"];export{c as __namedExportsOrder,t as default,o as onOff};
