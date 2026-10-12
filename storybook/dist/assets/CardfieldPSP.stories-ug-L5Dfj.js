const r={title:"DG/Forms/Card field (PSP)",tags:["autodocs"],parameters:{docs:{description:{component:`The payment provider renders these, so they are fixed across every fascia: navy set, #EFEFF1 grey, 8px radius.

**When to use** 
- Card number, expiry, CVC inside checkout only.

**Avoid** 
- Using this style for any field we render ourselves.

**Anatomy** 
- 50px · fixed --field-grey / --field-border · 8px radius on all brands

**CSS** \`.sfield\`

**Front-end Storybook** no counterpart yet (*ours*). PSP-owned; documented so the checkout looks intentional around it.`}}}},e={name:"Grey + white",render:()=>'<div style="display:flex;flex-direction:column;gap:10px;width:280px"><div><div class="sfield-lbl">Card number</div><div class="sfield sfield--grey">•••• •••• •••• 4242</div></div><div class="sfield sfield--white">MM / YY</div></div>'};var d,i,s;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Grey + white",
  render: () => \`<div style="display:flex;flex-direction:column;gap:10px;width:280px"><div><div class="sfield-lbl">Card number</div><div class="sfield sfield--grey">•••• •••• •••• 4242</div></div><div class="sfield sfield--white">MM / YY</div></div>\`
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const n=["greyWhite"];export{n as __namedExportsOrder,r as default,e as greyWhite};
