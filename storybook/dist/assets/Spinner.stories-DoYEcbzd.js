const h={title:"DG/Feedback/Spinner",tags:["autodocs"],parameters:{docs:{description:{component:`The DS spinner icon — a ring with a quarter arc — drawn in the current text colour. Inside a button it replaces the label; on its own it marks a loading region.

**When to use** 
- In-flight actions; page or panel loading.

**Avoid** 
- Spinners longer than a couple of seconds without copy.

**Anatomy** 
- 20px ring · 3px stroke · quarter arc in the text colour over a 28% track
- 1.2s turn, ease-in-out — speeds through the rotation and settles
- 32px .lg for page / panel loading

**CSS** \`.bd.spn\`

**Front-end Storybook** [Atoms / Progress Spinner](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-progress-spinner--docs) — *partial*. Dev spinner has small / medium / large + isPage. Ours is button-embedded; add the standalone sizes.`}}}},e={name:"In a button",render:()=>'<button class="bd pri spn"><i></i></button>'},n={name:"Neutral fill",render:()=>'<button class="bd ter spn"><i></i></button>'},a={name:"Standalone",render:()=>'<i class="spin"></i>'},r={name:"Standalone · large",render:()=>'<i class="spin lg"></i>'};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "In a button",
  render: () => \`<button class="bd pri spn"><i></i></button>\`
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,d,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Neutral fill",
  render: () => \`<button class="bd ter spn"><i></i></button>\`
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Standalone",
  render: () => \`<i class="spin"></i>\`
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Standalone · large",
  render: () => \`<i class="spin lg"></i>\`
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const S=["inAButton","neutralFill","standalone","standaloneLarge"];export{S as __namedExportsOrder,h as default,e as inAButton,n as neutralFill,a as standalone,r as standaloneLarge};
