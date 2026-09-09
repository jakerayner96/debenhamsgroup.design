const m={title:"DG/Feedback/Message banner",tags:["autodocs"],parameters:{docs:{description:{component:`Inline status: a 4px colour bar, icon and text. Success, neutral and error tones; optional dismiss and inline action.

**When to use** 
- Confirming an applied code, showing a balance, explaining a failure — in place, next to the thing it is about.

**Avoid** 
- Stacking more than one at a time.
- A dismiss on a neutral message — it is a readout, not an alert.

**Anatomy** 
- 4px status bar · 20px icon · 14px text · optional action / ×
- Tones: --success-bar/-bg · --surface-sunken · --error-bg

**CSS** \`.msg\` · **Figma** WChEtDPH0LcErdYFS9SESn · K11

**Front-end Storybook** [Molecules/Message Block](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-message-block--docs) — *match*. Dev types: error · warning · info · infoNew · warningNew · infoWithIcon · message. Reconcile to three tones + optional icon.`}}}},s={name:"Success",render:()=>'<div class="msg msg--success" style="width:380px"><i></i><div class="body"><span style="flex:1">Promo code SUMMER applied — £6.00 off</span><button class="x" aria-label="Dismiss"></button></div></div>'},e={name:"Neutral",render:()=>'<div class="msg msg--neutral" style="width:380px"><i></i><div class="body"><span style="flex:1">Gift card balance: £25.00</span><button class="act">Apply</button></div></div>'},a={name:"Error",render:()=>'<div class="msg msg--error" style="width:380px"><i></i><div class="body"><span style="flex:1">We couldn’t find that gift card. Check the number and PIN.</span></div></div>'};var n,t,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Success",
  render: () => \`<div class="msg msg--success" style="width:380px"><i></i><div class="body"><span style="flex:1">Promo code SUMMER applied — £6.00 off</span><button class="x" aria-label="Dismiss"></button></div></div>\`
}`,...(r=(t=s.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Neutral",
  render: () => \`<div class="msg msg--neutral" style="width:380px"><i></i><div class="body"><span style="flex:1">Gift card balance: £25.00</span><button class="act">Apply</button></div></div>\`
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Error",
  render: () => \`<div class="msg msg--error" style="width:380px"><i></i><div class="body"><span style="flex:1">We couldn’t find that gift card. Check the number and PIN.</span></div></div>\`
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const u=["success","neutral","error"];export{u as __namedExportsOrder,m as default,a as error,e as neutral,s as success};
