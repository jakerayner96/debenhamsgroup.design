const r={title:"DG/PDP modules/Accordion",tags:["autodocs"],parameters:{docs:{description:{component:`Title row with a chevron; body reveals beneath. Divider between items, none above the first.

**When to use** 
- PDP details, delivery and returns, footer link groups on mobile.

**Avoid** 
- Nesting accordions.

**Anatomy** 
- Header 48px · 16px title · chevron rotates · body 14/20

**CSS** \`.acc\` · **Figma** core-pdp C16

**Front-end Storybook** [Molecules/Accordion](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-accordion--docs) — *match*. Dev: expandOnDesktop · defaultExpandState · isFacetFilter · collapseAll. Organisms/Product Accordion is the PDP flavour.`}}}},e={name:"Open + closed",render:()=>'<div style="width:340px"><div class="acc open"><button class="acc-h">Description<img src="assets/ds/icons/lib/icons-down-arrow.svg" alt="" onerror="this.remove()"></button><div class="acc-b">Long sleeve lace and pleated midi shirt dress in pink. Regular fit, concealed zip.</div></div><div class="hr"></div><div class="acc"><button class="acc-h">Delivery &amp; returns<img src="assets/ds/icons/lib/icons-down-arrow.svg" alt="" onerror="this.remove()"></button><div class="acc-b">Free returns within 28 days.</div></div></div>'};var s,o,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Open + closed",
  render: () => \`<div style="width:340px"><div class="acc open"><button class="acc-h">Description<img src="assets/ds/icons/lib/icons-down-arrow.svg" alt="" onerror="this.remove()"></button><div class="acc-b">Long sleeve lace and pleated midi shirt dress in pink. Regular fit, concealed zip.</div></div><div class="hr"></div><div class="acc"><button class="acc-h">Delivery &amp; returns<img src="assets/ds/icons/lib/icons-down-arrow.svg" alt="" onerror="this.remove()"></button><div class="acc-b">Free returns within 28 days.</div></div></div>\`
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const i=["openClosed"];export{i as __namedExportsOrder,r as default,e as openClosed};
