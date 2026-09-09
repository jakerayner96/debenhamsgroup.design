const d={title:"DG/Feedback/Toast",tags:["autodocs"],parameters:{docs:{description:{component:`Transient confirmation. Bottom black snackbar for “done”; top light toast when there is something to act on.

**When to use** 
- Added to wishlist, copied, saved — anything that needs no reply.

**Avoid** 
- Errors in a toast — they disappear.

**Anatomy** 
- Snackbar 1.8s · top toast 6s with a strong action label

**CSS** \`.toast\`

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook. Adopt ours.`}}}},t={name:"Snackbar",render:()=>'<div class="toast" style="position:static;transform:none">Added to wishlist</div>'},o={name:"Top, actionable",render:()=>'<div class="toast toast--top" style="position:static;width:340px"><span style="flex:1">Item added to bag</span><button class="act">View</button></div>'};var a,s,e;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Snackbar",
  render: () => \`<div class="toast" style="position:static;transform:none">Added to wishlist</div>\`
}`,...(e=(s=t.parameters)==null?void 0:s.docs)==null?void 0:e.source}}};var n,r,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Top, actionable",
  render: () => \`<div class="toast toast--top" style="position:static;width:340px"><span style="flex:1">Item added to bag</span><button class="act">View</button></div>\`
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const c=["snackbar","topActionable"];export{c as __namedExportsOrder,d as default,t as snackbar,o as topActionable};
