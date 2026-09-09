const s={title:"DG/Feedback/Stock alert",tags:["autodocs"],parameters:{docs:{description:{component:`Red-light urgency line under a price or size.

**When to use** 
- Low stock, last chance.

**Avoid** 
- Fake urgency.

**Anatomy** 
- --error-bg ground · 2px red rule · 12px text

**CSS** \`.alert\`

**Front-end Storybook** [Atoms/Social Proof](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-social-proof--docs) — *partial*. Dev social proof covers urgency messaging (PLP / PDP / CART locations, dismissible). Our stock alert is the fixed-copy version.`}}}},e={name:"Default",render:()=>'<div class="alert" style="width:280px">Only 2 left — order soon</div>'};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="alert" style="width:280px">Only 2 left — order soon</div>\`
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const a=["default_"];export{a as __namedExportsOrder,s as default,e as default_};
