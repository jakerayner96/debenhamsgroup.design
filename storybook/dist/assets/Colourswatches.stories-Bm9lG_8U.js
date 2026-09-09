const i={title:"DG/Product/Colour swatches",tags:["autodocs"],parameters:{docs:{description:{component:`Two scales: 20px colour chips on the card, 60×89 image swatches on the PDP. Selection is a black keyline with a white inset.

**When to use** 
- Colourways on card and PDP.

**Avoid** 
- Rounding the PDP image swatches.

**Anatomy** 
- Card: 20px, 4px radius, Grey 2 border, +N overflow
- PDP: 60×89 image, selected = 1px black + white inset

**CSS** \`.cswatch · .pc-swatch\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 921-7470

**Front-end Storybook** no counterpart yet (*partial*). Dev renders colour variants inside CT Product Card (colourVariants, hideColourSwatches). No standalone atom.`}}}},a={name:"Card chips",render:()=>'<div class="pc-swatches" style="font-family:var(--font-family-base)"><span class="set"><span class="pc-swatch on"><i style="background:#B97A57"></i></span><span class="pc-swatch"><i style="background:#2B2B2B"></i></span><span class="pc-swatch"><i style="background:#8FA3B8"></i></span><span class="pc-swatch"><i style="background:#D9C7B8"></i></span></span><span class="pc-more">+5</span></div>'},s={name:"PDP image swatches",render:()=>'<div class="cswatches"><button class="cswatch on"><span style="display:block;width:60px;height:89px;background:linear-gradient(160deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span></button><button class="cswatch"><span style="display:block;width:60px;height:89px;background:linear-gradient(200deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span></button><button class="cswatch"><span style="display:block;width:60px;height:89px;background:linear-gradient(240deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span></button></div>'};var n,t,e;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Card chips",
  render: () => \`<div class="pc-swatches" style="font-family:var(--font-family-base)"><span class="set"><span class="pc-swatch on"><i style="background:#B97A57"></i></span><span class="pc-swatch"><i style="background:#2B2B2B"></i></span><span class="pc-swatch"><i style="background:#8FA3B8"></i></span><span class="pc-swatch"><i style="background:#D9C7B8"></i></span></span><span class="pc-more">+5</span></div>\`
}`,...(e=(t=a.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};var c,r,o;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "PDP image swatches",
  render: () => \`<div class="cswatches"><button class="cswatch on"><span style="display:block;width:60px;height:89px;background:linear-gradient(160deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span></button><button class="cswatch"><span style="display:block;width:60px;height:89px;background:linear-gradient(200deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span></button><button class="cswatch"><span style="display:block;width:60px;height:89px;background:linear-gradient(240deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span></button></div>\`
}`,...(o=(r=s.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const l=["cardChips","pDPImageSwatches"];export{l as __namedExportsOrder,a as cardChips,i as default,s as pDPImageSwatches};
