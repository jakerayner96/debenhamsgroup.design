const r={title:"DG/Navigation/Breadcrumb",tags:["autodocs"],parameters:{docs:{description:{component:`12px trail with slash separators, never wrapping. The first layer (Home) is dropped.

**When to use** 
- PLP and PDP above the title.

**Avoid** 
- Wrapping onto two lines — truncate instead.

**Anatomy** 
- 12px --w-regular capitalised · slash separators · share icon on PDP mobile only

**CSS** \`.bc\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 12711-4044

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook.`}}}},a={name:"Default",render:()=>'<nav class="bc" aria-label="Breadcrumb" style="width:360px"><a href="#">New In</a><span class="sep">/</span><a href="#">Womens New In</a><span class="sep">/</span><span class="cur">New In Dresses</span></nav>'};var e,s,n;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<nav class="bc" aria-label="Breadcrumb" style="width:360px"><a href="#">New In</a><span class="sep">/</span><a href="#">Womens New In</a><span class="sep">/</span><span class="cur">New In Dresses</span></nav>\`
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const t=["default_"];export{t as __namedExportsOrder,r as default,a as default_};
