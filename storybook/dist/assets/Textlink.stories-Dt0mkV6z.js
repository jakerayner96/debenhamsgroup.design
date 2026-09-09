const l={title:"DG/Actions/Text link",tags:["autodocs"],parameters:{docs:{description:{component:`Inline action in the brand link colour. Strong weight on every fascia except Karen Millen (500).

**When to use** 
- Secondary navigation inside copy — Size guide, Learn more, View all.

**Avoid** 
- Using a link where the action changes data (that is a button).

**Anatomy** 
- 12–14px label · --text-link · hover shifts to --text-link-hover

**CSS** \`.lnk\` · **Figma** colour-alignment · brand-colours

**Front-end Storybook** [Atoms/Link](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-link--docs) — *match*. Dev Link is Internal / External routing; styling comes from the caller. Ours fixes the visual.`}}}},e={name:"Default",render:()=>'<a class="lnk" href="#">Size guide</a>'},n={name:"In copy",render:()=>'<p style="font-size:14px;margin:0">By continuing you agree to our <a class="lnk" href="#" style="font-size:14px">terms</a>.</p>'};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<a class="lnk" href="#">Size guide</a>\`
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var r,s,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "In copy",
  render: () => \`<p style="font-size:14px;margin:0">By continuing you agree to our <a class="lnk" href="#" style="font-size:14px">terms</a>.</p>\`
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const c=["default_","inCopy"];export{c as __namedExportsOrder,l as default,e as default_,n as inCopy};
