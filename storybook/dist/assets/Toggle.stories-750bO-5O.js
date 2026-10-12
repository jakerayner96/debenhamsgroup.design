const a={title:"DG/Forms/Toggle",tags:["autodocs"],parameters:{docs:{description:{component:`On/off switch for an immediate setting — Next Day Delivery on the PLP is the canonical use.

**When to use** 
- Instant filters and preferences that apply on tap.

**Avoid** 
- Settings that need a Save button (use a checkbox).

**Anatomy** 
- Track 36×20 · knob 16 · on = --surface-action

**CSS** \`.tog\`

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook. Adopt ours (the PLP NDD toggle exists in production without a shared component).`}}}},t={name:"On / off",render:()=>'<div style="display:flex;gap:16px"><button class="tog on" aria-checked="true"></button><button class="tog" aria-checked="false"></button></div>'};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "On / off",
  render: () => \`<div style="display:flex;gap:16px"><button class="tog on" aria-checked="true"></button><button class="tog" aria-checked="false"></button></div>\`
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const s=["onOff"];export{s as __namedExportsOrder,a as default,t as onOff};
