const x={title:"DG/Navigation/Sort & filter",tags:["autodocs"],parameters:{docs:{description:{component:`Desktop: a bordered strip of dropdowns with sort on the right. Mobile: the split Filters | Relevance bar today, floating pills in the new format, both opening one combined sheet.

**When to use** 
- Every PLP and search results page.

**Avoid** 
- Separate Sort and Filter sheets on mobile.

**Anatomy** 
- Desktop strip: NDD toggle · dropdown boxes · Show more · sort right
- Mobile: split bar or pill row · sheet with drill-in rows · pinned View products

**CSS** \`.sf-*\` · **Figma** s7WDE3BkCxbgqJ4x4hoV80 · 1783-11572

**Front-end Storybook** no counterpart yet (*ours*). Facets are not in the dev Storybook (Accordion has an isFacetFilter flag; --color-facet-pill-* tokens exist). Ours is the spec.`}}}},s={name:"Desktop strip",render:()=>'<div class="sf-bar" style="width:760px;max-width:100%"><span class="sf-ndd on"><span class="track"></span>Next Day Delivery</span><button class="sf-dd">Size<i></i></button><button class="sf-dd">Colour<i></i></button><button class="sf-dd">Brands<i></i></button><button class="sf-dd">Style<i></i></button><button class="sf-dd sf-sort">Relevance<i></i></button></div>'},t={name:"Applied chips",render:()=>'<div class="sf-bar" style="width:520px"><span class="sf-chip">Women’s: 12, 14, XS, M, L <button aria-label="Remove">×</button></span><span class="sf-chip">Pink <button aria-label="Remove">×</button></span></div>'},e={name:"Mobile split bar",render:()=>'<div style="width:360px"><div class="sf-split"><button>Filters <span class="fic"></span></button><button>Relevance <i class="ch"></i></button></div></div>'},o={name:"Mobile pills (new)",render:()=>'<div style="width:390px;overflow:hidden"><div class="sf-float"><button class="sf-pill on">Next Day Delivery <span class="track"></span></button><button class="sf-pill">Sort &amp; Filter <img src="assets/ds/icons/lib/icons-filter.svg" alt="" ></button><button class="sf-pill">Category <i class="dn"></i></button></div></div>'},i={name:"Filter sheet",render:()=>'<div class="sf-drawer open" style="position:static;width:320px;height:400px;border:1px solid var(--border-subtle);z-index:auto"><div class="head">Filters <button aria-label="Close"><img src="assets/ds/icons/lib/icons-close.svg" alt="" ></button></div><div class="rows"><button class="sf-row">Sort <i></i></button><button class="sf-row">Size <i></i></button><button class="sf-row">Colour <i></i></button><button class="sf-row">Brands <i></i></button><button class="sf-row">Price <i></i></button></div><button class="sf-cta">View products</button></div>'};var a,n,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Desktop strip",
  render: () => \`<div class="sf-bar" style="width:760px;max-width:100%"><span class="sf-ndd on"><span class="track"></span>Next Day Delivery</span><button class="sf-dd">Size<i></i></button><button class="sf-dd">Colour<i></i></button><button class="sf-dd">Brands<i></i></button><button class="sf-dd">Style<i></i></button><button class="sf-dd sf-sort">Relevance<i></i></button></div>\`
}`,...(r=(n=s.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Applied chips",
  render: () => \`<div class="sf-bar" style="width:520px"><span class="sf-chip">Women’s: 12, 14, XS, M, L <button aria-label="Remove">×</button></span><span class="sf-chip">Pink <button aria-label="Remove">×</button></span></div>\`
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,b,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Mobile split bar",
  render: () => \`<div style="width:360px"><div class="sf-split"><button>Filters <span class="fic"></span></button><button>Relevance <i class="ch"></i></button></div></div>\`
}`,...(u=(b=e.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var f,v,m;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Mobile pills (new)",
  render: () => \`<div style="width:390px;overflow:hidden"><div class="sf-float"><button class="sf-pill on">Next Day Delivery <span class="track"></span></button><button class="sf-pill">Sort &amp; Filter <img src="assets/ds/icons/lib/icons-filter.svg" alt="" ></button><button class="sf-pill">Category <i class="dn"></i></button></div></div>\`
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var h,w,S;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Filter sheet",
  render: () => \`<div class="sf-drawer open" style="position:static;width:320px;height:400px;border:1px solid var(--border-subtle);z-index:auto"><div class="head">Filters <button aria-label="Close"><img src="assets/ds/icons/lib/icons-close.svg" alt="" ></button></div><div class="rows"><button class="sf-row">Sort <i></i></button><button class="sf-row">Size <i></i></button><button class="sf-row">Colour <i></i></button><button class="sf-row">Brands <i></i></button><button class="sf-row">Price <i></i></button></div><button class="sf-cta">View products</button></div>\`
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const g=["desktopStrip","appliedChips","mobileSplitBar","mobilePillsNew","filterSheet"];export{g as __namedExportsOrder,t as appliedChips,x as default,s as desktopStrip,i as filterSheet,o as mobilePillsNew,e as mobileSplitBar};
