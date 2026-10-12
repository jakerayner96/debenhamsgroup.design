const m={title:"DG/Forms/Text field",tags:["autodocs"],parameters:{docs:{description:{component:`Floating-label input. The label shrinks from 14 to 12 as the value arrives; errors turn the keyline red and add a message underneath.

**When to use** 
- Every text entry: email, address, promo code, search inside forms.

**Avoid** 
- Placeholder text as the only label.
- Error colour without an error message.

**Anatomy** 
- 50px container · 1px keyline · 4px radius (brand)
- Label floats to the top-left on focus / filled
- Inline error 12px in --text-error under the field

**CSS** \`.fld\` · **Figma** WChEtDPH0LcErdYFS9SESn · 3990:36587

**Front-end Storybook** [Atoms/Input Field](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-input-field--docs) — *match*. Dev has label / errors / readOnlyValue / hyphenatedInput / errorOnlyBorder. Molecules/Date Select is three of these — compose, not a new component.`}}}},e={name:"Empty",render:()=>'<label class="fld" style="width:280px"><input placeholder=" "><span class="lbl">Email address</span></label>'},a={name:"Filled",render:()=>'<label class="fld" style="width:280px"><input placeholder=" " value="jake@debenhams.com"><span class="lbl">Email address</span></label>'},r={name:"Error",render:()=>'<div style="width:280px"><label class="fld invalid"><input placeholder=" " value="SUMMER"><span class="lbl">Promo code</span></label><div class="fld-err">Sorry, we don’t recognise that code</div></div>'};var l,s,n;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Empty",
  render: () => \`<label class="fld" style="width:280px"><input placeholder=" "><span class="lbl">Email address</span></label>\`
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,t,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Filled",
  render: () => \`<label class="fld" style="width:280px"><input placeholder=" " value="jake@debenhams.com"><span class="lbl">Email address</span></label>\`
}`,...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Error",
  render: () => \`<div style="width:280px"><label class="fld invalid"><input placeholder=" " value="SUMMER"><span class="lbl">Promo code</span></label><div class="fld-err">Sorry, we don’t recognise that code</div></div>\`
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const h=["empty","filled","error"];export{h as __namedExportsOrder,m as default,e as empty,r as error,a as filled};
