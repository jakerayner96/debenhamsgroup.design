const v={title:"DG/Navigation/USP banner",tags:["autodocs"],parameters:{docs:{description:{component:`Message strips under the header. Single, double, code, countdown and caveat types; a multi-cell strip on desktop that rotates one message at a time on mobile.

**When to use** 
- Delivery promises, promo codes, countdowns.

**Avoid** 
- A mid-dot separator (it is a 4px dash).
- An asterisk without a caveat line.

**Anatomy** 
- Bar 12px regular · code strong · countdown digits with 5px colon columns
- Strip cells 14px on --usp-a-bg / --usp-a-bg2, 63px tall
- Colours per fascia: --usp-a / --usp-b

**CSS** \`.hd-usp · .usp-strip\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 11982-37171 / 13005-165658

**Front-end Storybook** [Molecules/USP Banner](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-usp-banner--docs) — *match*. Dev: items · displayType (ticker / rotate) · rotation delay · stickyBanner · tickerSpacing; USP Item is the cell. Our type set adds the countdown + caveat rules.`}}}},s={name:"Text + code",render:()=>'<div class="hd" style="width:390px"><div class="hd-usp hd-usp--b">Free delivery over £50<span class="usp-sep"></span>Code: <b>FAST</b></div></div>'},e={name:"Caveat",render:()=>'<div class="hd" style="width:390px"><div class="hd-usp"><span class="usp-cav" style="padding:0">*Excludes sale, beauty and marketplace items.</span></div></div>'},a={name:"Desktop strip",render:()=>'<div class="hd" style="width:900px;max-width:100%"><div class="usp-strip"><div class="usp-cell rot-on"><b>Free delivery</b><span class="s">on orders over £50</span></div><div class="usp-cell rot-on"><b>Free returns</b><span class="s">within 28 days</span></div><div class="usp-cell rot-on"><b>Next day delivery</b><span class="s">order by midnight</span></div></div></div>'};var t,d,r;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Text + code",
  render: () => \`<div class="hd" style="width:390px"><div class="hd-usp hd-usp--b">Free delivery over £50<span class="usp-sep"></span>Code: <b>FAST</b></div></div>\`
}`,...(r=(d=s.parameters)==null?void 0:d.docs)==null?void 0:r.source}}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Caveat",
  render: () => \`<div class="hd" style="width:390px"><div class="hd-usp"><span class="usp-cav" style="padding:0">*Excludes sale, beauty and marketplace items.</span></div></div>\`
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Desktop strip",
  render: () => \`<div class="hd" style="width:900px;max-width:100%"><div class="usp-strip"><div class="usp-cell rot-on"><b>Free delivery</b><span class="s">on orders over £50</span></div><div class="usp-cell rot-on"><b>Free returns</b><span class="s">within 28 days</span></div><div class="usp-cell rot-on"><b>Next day delivery</b><span class="s">order by midnight</span></div></div></div>\`
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const u=["textCode","caveat","desktopStrip"];export{u as __namedExportsOrder,e as caveat,v as default,a as desktopStrip,s as textCode};
