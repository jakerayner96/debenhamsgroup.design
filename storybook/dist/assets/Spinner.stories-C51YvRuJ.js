const h={title:"DG/Feedback/Spinner",tags:["autodocs"],parameters:{docs:{description:{component:`The DS spinner icon — a ring with a quarter arc — drawn in the current text colour. Inside a button it replaces the label; on its own it marks a loading region.

**When to use** 
- In-flight actions; page or panel loading.

**Avoid** 
- Spinners longer than a couple of seconds without copy.

**Anatomy** 
- 20px ring · 3px stroke · quarter arc in the text colour over a 28% track
- 1.2s turn, ease-in-out — speeds through the rotation and settles
- The label stays in the layout (invisible) so the button keeps its width while spinning
- 32px .lg for page / panel loading

**CSS** \`.bd.spn\`

**Front-end Storybook** [Atoms / Progress Spinner](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-progress-spinner--docs) — *partial*. Dev spinner has small / medium / large + isPage. Ours is button-embedded; add the standalone sizes.`}}}},e={name:"In a button",render:()=>'<button class="bd pri spn"><span class="lbl">Add to bag</span><i></i></button>'},n={name:"Neutral fill",render:()=>'<button class="bd ter spn"><span class="lbl">Tertiary</span><i></i></button>'},a={name:"Standalone",render:()=>'<i class="spin"></i>'},s={name:"Standalone · large",render:()=>'<i class="spin lg"></i>'};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "In a button",
  render: () => \`<button class="bd pri spn"><span class="lbl">Add to bag</span><i></i></button>\`
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var i,l,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Neutral fill",
  render: () => \`<button class="bd ter spn"><span class="lbl">Tertiary</span><i></i></button>\`
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Standalone",
  render: () => \`<i class="spin"></i>\`
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,b,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Standalone · large",
  render: () => \`<i class="spin lg"></i>\`
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const S=["inAButton","neutralFill","standalone","standaloneLarge"];export{S as __namedExportsOrder,h as default,e as inAButton,n as neutralFill,a as standalone,s as standaloneLarge};
