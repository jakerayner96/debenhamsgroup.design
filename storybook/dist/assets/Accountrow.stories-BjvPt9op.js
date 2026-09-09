const c={title:"DG/Account/Account row",tags:["autodocs"],parameters:{docs:{description:{component:`White panel row with a 24px icon, label and a status or tag on the right.

**When to use** 
- Account menu, settings.

**Avoid** 
- Rows without an icon.

**Anatomy** 
- 56px row · 24px icon · 16px label · status with 8px dot or tag pill

**CSS** \`.acct-row\`

**Front-end Storybook** [Molecules/AccountLink](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-accountlink--docs) — *match*. Dev AccountLink: name · route.`}}}},s={name:"Set",render:()=>'<div class="acct-page" style="width:340px;padding:16px;display:flex;flex-direction:column;gap:8px"><button class="acct-row"><img src="assets/ds/icons/lib/icons-delivery-fast.svg" alt="" ><span class="lbl">My orders</span><span class="st"><span class="dot"></span>1 on its way</span></button><button class="acct-row"><img src="assets/ds/icons/lib/icons-quick-add.svg" alt="" ><span class="lbl">Unlimited</span><span class="tagpill">Active</span></button></div>'};var t,a,n;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Set",
  render: () => \`<div class="acct-page" style="width:340px;padding:16px;display:flex;flex-direction:column;gap:8px"><button class="acct-row"><img src="assets/ds/icons/lib/icons-delivery-fast.svg" alt="" ><span class="lbl">My orders</span><span class="st"><span class="dot"></span>1 on its way</span></button><button class="acct-row"><img src="assets/ds/icons/lib/icons-quick-add.svg" alt="" ><span class="lbl">Unlimited</span><span class="tagpill">Active</span></button></div>\`
}`,...(n=(a=s.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const o=["set"];export{o as __namedExportsOrder,c as default,s as set};
