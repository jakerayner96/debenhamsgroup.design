const o={title:"DG/PDP modules/At a glance",tags:["autodocs"],parameters:{docs:{description:{component:`Ticked key facts, as a list or as chips.

**When to use** 
- PDP above the description.

**Avoid** 
- More than five items.

**Anatomy** 
- Tick in --tickc · 14px label · chip variant on --surface-sunken

**CSS** \`.glance\`

**Front-end Storybook** no counterpart yet (*ours*). atAGlanceDefault icon exists in dev; no component.`}}}},e={name:"Chips",render:()=>'<ul class="glance glance--chips"><li><i>✓</i>Regular fit</li><li><i>✓</i>Machine washable</li><li><i>✓</i>Recycled polyester</li></ul>'},s={name:"Link chips",render:()=>'<div class="linkchips" style="width:320px"><a href="#">Midi dresses</a><a href="#">Coast</a><a href="#">Occasion</a><a href="#">Pink dresses</a></div>'};var a,i,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Chips",
  render: () => \`<ul class="glance glance--chips"><li><i>✓</i>Regular fit</li><li><i>✓</i>Machine washable</li><li><i>✓</i>Recycled polyester</li></ul>\`
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var r,c,t;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Link chips",
  render: () => \`<div class="linkchips" style="width:320px"><a href="#">Midi dresses</a><a href="#">Coast</a><a href="#">Occasion</a><a href="#">Pink dresses</a></div>\`
}`,...(t=(c=s.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};const l=["chips","linkChips"];export{l as __namedExportsOrder,e as chips,o as default,s as linkChips};
