const s={title:"DG/Forms/Select",tags:["autodocs"],parameters:{docs:{description:{component:`A styled trigger over a real native select, so the platform picker does the work on mobile.

**When to use** 
- Sort order, country, title, quantity beyond the stepper.

**Avoid** 
- Custom dropdown lists where the native one will do.

**Anatomy** 
- 50px trigger · chevron right · native <select> stretched invisibly over it

**CSS** \`.fsel\` · **Figma** —

**Front-end Storybook** [Atoms/Select](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-select--docs) — *match*. Dev Select: label · options · selectedOption · placeholder · error.`}}}},e={name:"Default",render:()=>'<div class="fsel" style="width:240px"><span>Relevance</span><select aria-label="Sort"><option>Relevance</option><option>Price low to high</option><option>Newest</option></select></div>'};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="fsel" style="width:240px"><span>Relevance</span><select aria-label="Sort"><option>Relevance</option><option>Price low to high</option><option>Newest</option></select></div>\`
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const r=["default_"];export{r as __namedExportsOrder,s as default,e as default_};
