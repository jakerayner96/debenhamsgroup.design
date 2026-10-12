const t={title:"DG/Chips & pills/Tag pill",tags:["autodocs"],parameters:{docs:{description:{component:`Small status pills: black tag, count bubble, red-light save chip.

**When to use** 
- Status in account rows, counts on chips, savings in the bag.

**Avoid** 
- Tag pills as buttons.

**Anatomy** 
- 24px black pill 11px caps · count bubble · save chip on --badge-save-bg

**CSS** \`.tagpill · .chip-save\`

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook.`}}}},s={name:"Set",render:()=>'<div style="display:flex;gap:10px;align-items:center"><span class="tagpill">Active</span><span class="tagpill tagpill--n">3</span><span class="chip-save">Save 5%</span></div>'};var a,e,n;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Set",
  render: () => \`<div style="display:flex;gap:10px;align-items:center"><span class="tagpill">Active</span><span class="tagpill tagpill--n">3</span><span class="chip-save">Save 5%</span></div>\`
}`,...(n=(e=s.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const p=["set"];export{p as __namedExportsOrder,t as default,s as set};
