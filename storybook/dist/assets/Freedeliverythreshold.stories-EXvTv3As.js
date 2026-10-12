const d={title:"DG/PDP modules/Free-delivery threshold",tags:["autodocs"],parameters:{docs:{description:{component:`“Spend £X more” progress bar that turns into a tick when the threshold is met.

**When to use** 
- Bag, mini bag, PDP.

**Avoid** 
- Showing it when free delivery is not on offer.

**Anatomy** 
- 14px line with strong amount · 4px track, fill in --surface-action · ok state = tick + message

**CSS** \`.thresh\` · **Figma** BBz64OeCbe5TBmYKbCxvCp · 38-35751

**Front-end Storybook** [Molecules/Delivery Progress](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-delivery-progress--docs) — *partial*. Dev Delivery Progress is a step indicator (step: number). The threshold bar lives in the basket page.`}}}},e={name:"In progress",render:()=>'<div class="thresh" style="width:320px"><span>Spend <b>£12.01</b> more for free delivery</span><div class="track"><div class="fill" style="width:60%"></div></div></div>'},s={name:"Reached",render:()=>'<div class="thresh thresh--ok" style="width:320px"><span class="tick"></span><span>Congratulations, you’re eligible for free delivery</span></div>'};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "In progress",
  render: () => \`<div class="thresh" style="width:320px"><span>Spend <b>£12.01</b> more for free delivery</span><div class="track"><div class="fill" style="width:60%"></div></div></div>\`
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var n,o,i;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Reached",
  render: () => \`<div class="thresh thresh--ok" style="width:320px"><span class="tick"></span><span>Congratulations, you’re eligible for free delivery</span></div>\`
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const l=["inProgress","reached"];export{l as __namedExportsOrder,d as default,e as inProgress,s as reached};
