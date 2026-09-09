const n={title:"DG/Product/Size selector",tags:["autodocs"],parameters:{docs:{description:{component:`60×50 size buttons with three out-of-stock treatments: greyed, struck, or a bell for notify-me.

**When to use** 
- PDP, quick add, set builder.

**Avoid** 
- Hiding out-of-stock sizes — show them so the customer can ask to be notified.

**Anatomy** 
- Header: Size: M · Size guide link
- Buttons 60×50 · selected = black fill · OOS = grey / strike / bell

**CSS** \`.sizes\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 8942-6191 · bell 11190:23531

**Front-end Storybook** no counterpart yet (*ours*). Not in the dev Storybook as a component (lives in the PDP). Promote.`}}}},s={name:"Default",render:()=>'<div class="sizes" style="width:360px"><div class="sizes-head"><span>Size: <b>M</b></span><span class="guide">Size guide</span></div><div class="set"><button class="sz">XS</button><button class="sz">S</button><button class="sz on">M</button><button class="sz oos oos--strike">L</button><button class="sz oos">XL<img src="assets/ds/icons/lib/icons-notification.svg" alt="" class="bell" onerror="this.remove()"></button><button class="sz">One size</button></div></div>'};var t,e,o;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Default",
  render: () => \`<div class="sizes" style="width:360px"><div class="sizes-head"><span>Size: <b>M</b></span><span class="guide">Size guide</span></div><div class="set"><button class="sz">XS</button><button class="sz">S</button><button class="sz on">M</button><button class="sz oos oos--strike">L</button><button class="sz oos">XL<img src="assets/ds/icons/lib/icons-notification.svg" alt="" class="bell" onerror="this.remove()"></button><button class="sz">One size</button></div></div>\`
}`,...(o=(e=s.parameters)==null?void 0:e.docs)==null?void 0:o.source}}};const i=["default_"];export{i as __namedExportsOrder,n as default,s as default_};
