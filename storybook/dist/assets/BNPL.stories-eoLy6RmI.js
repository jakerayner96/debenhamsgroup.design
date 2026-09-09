const n={title:"DG/PDP modules/BNPL",tags:["autodocs"],parameters:{docs:{description:{component:`Provider chips plus the “pay in 3” line and legal small print.

**When to use** 
- PDP under the price; bag summary.

**Avoid** 
- Provider logos in brand colours.

**Anatomy** 
- Chip row (Pay+, Klarna, Clearpay, PayPal) · 14px terms · 12px legal with a strong See more

**CSS** \`.bnpl\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 2969-10048

**Front-end Storybook** [Molecules/BNPL Banner](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-bnpl-banner--docs) — *match*. Dev: label · numberOfPayments · min/max price · paymentLogo · providerLink.`}}}},s={name:"Default",render:()=>'<div class="bnpl" style="width:340px"><div class="chips"><span class="pc pc--payplus"><img src="assets/ds/icons/payments/bnpl-payplus-glyph.svg" alt="Pay+"></span><span class="pc pc--klarna"><img src="assets/ds/icons/payments/bnpl-klarna-word.svg" alt="Klarna"></span><span class="pc pc--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup-mini.svg" alt="Clearpay"></span><span class="pc pc--paypal"><img src="assets/ds/icons/payments/bnpl-paypal-logo.svg" alt="PayPal"></span></div><div class="terms">Pay in 3 interest-free payments of £23.33</div><div class="small">18+, T&amp;C apply. Credit subject to status. <b>See more</b></div></div>'};var a,e,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="bnpl" style="width:340px"><div class="chips"><span class="pc pc--payplus"><img src="assets/ds/icons/payments/bnpl-payplus-glyph.svg" alt="Pay+"></span><span class="pc pc--klarna"><img src="assets/ds/icons/payments/bnpl-klarna-word.svg" alt="Klarna"></span><span class="pc pc--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup-mini.svg" alt="Clearpay"></span><span class="pc pc--paypal"><img src="assets/ds/icons/payments/bnpl-paypal-logo.svg" alt="PayPal"></span></div><div class="terms">Pay in 3 interest-free payments of £23.33</div><div class="small">18+, T&amp;C apply. Credit subject to status. <b>See more</b></div></div>\`
}`,...(p=(e=s.parameters)==null?void 0:e.docs)==null?void 0:p.source}}};const l=["default_"];export{l as __namedExportsOrder,n as default,s as default_};
