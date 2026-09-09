const u={title:"DG/Navigation/Category navigation",tags:["autodocs"],parameters:{docs:{description:{component:`The row under the PLP title: image roundels, grey pills or underlined links, per fascia.

**When to use** 
- Sub-category entry on PLP and landing pages.

**Avoid** 
- Fully rounded pills (they are badge-format, brand radius).

**Anatomy** 
- Roundel 90px mobile / 173px desktop, label beneath · outline and on-image variants
- Pill 36px on --surface-media · Links 14px underlined

**CSS** \`.cat-row · .roundel · .catpill · .catlinks\` · **Figma** App-PLP 1124-2505 · 13003-149196

**Front-end Storybook** [Molecules/Category Header](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-category-header--docs) — *partial*. Dev Category Header is title + back link; Category Highlight is a content tile. Roundels / pills are page-local in dev today.`}}}},a={name:"Roundels",render:()=>'<div class="cat-row cat-row--r" style="width:440px"><a class="roundel" href="#"><i><span style="position:absolute;inset:0;background:linear-gradient(160deg,var(--brand-light-3),var(--brand-light-1))"></span></i><span>Dresses</span></a><a class="roundel" href="#"><i><span style="position:absolute;inset:0;background:linear-gradient(200deg,var(--brand-light-2),var(--brand-dark-1))"></span></i><span>Tops</span></a><a class="roundel roundel--outline" href="#"><i></i><span>Jeans</span></a><a class="roundel roundel--onimage" href="#"><i><span style="position:absolute;inset:0;background:linear-gradient(220deg,var(--brand-dark-2),var(--brand-primary-dark))"></span></i><span>Sale</span></a></div>'},e={name:"Pills",render:()=>'<div class="cat-row cat-row--pills"><a class="catpill" href="#">Dresses</a><a class="catpill" href="#">Tops</a><a class="catpill" href="#">Jeans</a><a class="catpill" href="#">Knitwear</a></div>'},s={name:"Links",render:()=>'<div class="catlinks"><a href="#">Dresses</a><a href="#">Tops</a><a href="#">Jeans</a><a href="#">Knitwear</a><a href="#">Coats</a></div>'};var r,n,i;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Roundels",
  render: () => \`<div class="cat-row cat-row--r" style="width:440px"><a class="roundel" href="#"><i><span style="position:absolute;inset:0;background:linear-gradient(160deg,var(--brand-light-3),var(--brand-light-1))"></span></i><span>Dresses</span></a><a class="roundel" href="#"><i><span style="position:absolute;inset:0;background:linear-gradient(200deg,var(--brand-light-2),var(--brand-dark-1))"></span></i><span>Tops</span></a><a class="roundel roundel--outline" href="#"><i></i><span>Jeans</span></a><a class="roundel roundel--onimage" href="#"><i><span style="position:absolute;inset:0;background:linear-gradient(220deg,var(--brand-dark-2),var(--brand-primary-dark))"></span></i><span>Sale</span></a></div>\`
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,o,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Pills",
  render: () => \`<div class="cat-row cat-row--pills"><a class="catpill" href="#">Dresses</a><a class="catpill" href="#">Tops</a><a class="catpill" href="#">Jeans</a><a class="catpill" href="#">Knitwear</a></div>\`
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Links",
  render: () => \`<div class="catlinks"><a href="#">Dresses</a><a href="#">Tops</a><a href="#">Jeans</a><a href="#">Knitwear</a><a href="#">Coats</a></div>\`
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const g=["roundels","pills","links"];export{g as __namedExportsOrder,u as default,s as links,e as pills,a as roundels};
