const c={title:"DG/Account/Balance card",tags:["autodocs"],parameters:{docs:{description:{component:`The account hero: a 62.5px balance on the fascia fill, loyalty label, View balance button.

**When to use** 
- Account home.

**Avoid** 
- More than one number on the card.

**Anatomy** 
- Fill --card-bg (Debenhams aqua gradient, boohoo black, PLT garnet, KM orange) · numeral 62.5px tight · caps label · white button

**CSS** \`.acct-card\` · **Figma** 2KLlzqIWlDcri8YIHwEd63

**Front-end Storybook** [Layouts/Customer Account](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/layouts-customer-account--docs) — *partial*. Dev layout carries rewardsSummary / storeCreditSummary with --store-credit-* gradient tokens (teal on every fascia, pink on PLT). Ours skins it per brand.`}}}},a={name:"Default",render:()=>'<div class="acct-page" style="width:340px;padding:16px"><div class="acct-card"><div class="amt">£12<small>.00</small></div><div class="lbl">Unlimited balance</div><button class="bd">View balance</button></div></div>'};var e,t,n;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="acct-page" style="width:340px;padding:16px"><div class="acct-card"><div class="amt">£12<small>.00</small></div><div class="lbl">Unlimited balance</div><button class="bd">View balance</button></div></div>\`
}`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const s=["default_"];export{s as __namedExportsOrder,c as default,a as default_};
