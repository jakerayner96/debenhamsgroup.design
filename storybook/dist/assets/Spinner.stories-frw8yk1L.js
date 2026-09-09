const p={title:"DG/Feedback/Spinner",tags:["autodocs"],parameters:{docs:{description:{component:`24px arc in the current text colour. Inside a button it replaces the label; on its own it marks a loading region.

**When to use** 
- In-flight actions; page or panel loading.

**Avoid** 
- Spinners longer than a couple of seconds without copy.

**Anatomy** 
- 24px arc · 2px stroke · 0.8s rotation

**CSS** \`.bd.spn\`

**Front-end Storybook** [Atoms / Progress Spinner](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-progress-spinner--docs) — *partial*. Dev spinner has small / medium / large + isPage. Ours is button-embedded; add the standalone sizes.`}}}},n={name:"In a button",render:()=>'<button class="bd pri spn"><i></i></button>'},e={name:"Neutral fill",render:()=>'<button class="bd ter spn"><i></i></button>'};var t,o,r;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "In a button",
  render: () => \`<button class="bd pri spn"><i></i></button>\`
}`,...(r=(o=n.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var s,a,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Neutral fill",
  render: () => \`<button class="bd ter spn"><i></i></button>\`
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const d=["inAButton","neutralFill"];export{d as __namedExportsOrder,p as default,n as inAButton,e as neutralFill};
