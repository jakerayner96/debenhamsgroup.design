const i={title:"DG/Product/Social proof",tags:["autodocs"],parameters:{docs:{description:{component:`Taggstar bar: trophy, bold claim, context. Grey 6 by default; brand-tinted on boohoo.

**When to use** 
- Bestseller rank, trending, viewed-recently — under the card image or on the PDP.

**Avoid** 
- More than one claim per product.

**Anatomy** 
- --surface-callout ground · 16px icon · 12px strong + regular

**CSS** \`.pc-taggstar\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 5992-10841

**Front-end Storybook** [Atoms/Social Proof](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-social-proof--docs) — *match*. Dev: location PLP / PDP / CART, dismissible, per-fascia --social-proof-* tokens (Debenhams black 60% + blur on PDP; boohoo pink; PLT peach). Plus Molecules/Product Social Proof and Basket Social Proof.`}}}},a={name:"Default",render:()=>'<div class="pc-taggstar" style="width:200px;font-family:var(--font-family-base)"><img src="assets/ds/icons/trophy.svg" alt=""><b>No. 6 Bestseller</b><span>in Dresses</span></div>'},s={name:"Brand tint",render:()=>'<div class="pc-taggstar pc-taggstar--brand" style="width:200px;font-family:var(--font-family-base)"><img src="assets/ds/icons/trophy.svg" alt=""><b>Trending</b><span>120 bought today</span></div>'};var t,o,e;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="pc-taggstar" style="width:200px;font-family:var(--font-family-base)"><img src="assets/ds/icons/trophy.svg" alt=""><b>No. 6 Bestseller</b><span>in Dresses</span></div>\`
}`,...(e=(o=a.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};var r,n,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Brand tint",
  render: () => \`<div class="pc-taggstar pc-taggstar--brand" style="width:200px;font-family:var(--font-family-base)"><img src="assets/ds/icons/trophy.svg" alt=""><b>Trending</b><span>120 bought today</span></div>\`
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const d=["default_","brandTint"];export{d as __namedExportsOrder,s as brandTint,i as default,a as default_};
