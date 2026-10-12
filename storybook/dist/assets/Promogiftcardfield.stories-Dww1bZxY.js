const s={title:"DG/Forms/Promo / gift card field",tags:["autodocs"],parameters:{docs:{description:{component:`One field for promo codes and gift cards with a 95px Apply. The smart version detects which it has been given.

**When to use** 
- Bag and checkout payment section.

**Avoid** 
- Two separate fields for promo and gift card.

**Anatomy** 
- Text field + secondary Apply button, 8px gap
- Gift card reveals a PIN field (.fld--pin)

**CSS** \`.promo\` · **Figma** WChEtDPH0LcErdYFS9SESn · 3990:58406

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook as a component; lives inside the basket page. Promote.`}}}},e={name:"Default",render:()=>'<div class="promo" style="width:340px"><label class="fld"><input placeholder=" "><span class="lbl">Promo code or gift card</span></label><button class="bd sec">Apply</button></div>'};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="promo" style="width:340px"><label class="fld"><input placeholder=" "><span class="lbl">Promo code or gift card</span></label><button class="bd sec">Apply</button></div>\`
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const n=["default_"];export{n as __namedExportsOrder,s as default,e as default_};
