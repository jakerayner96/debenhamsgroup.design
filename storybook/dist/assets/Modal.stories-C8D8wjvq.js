const e={title:"DG/Overlays & bag/Modal",tags:["autodocs"],parameters:{docs:{description:{component:`Centred card that scales in from 0.96. Title, body, actions.

**When to use** 
- Confirmations, gift card detail, size guide on desktop.

**Avoid** 
- Long forms in a modal — use a page or sheet.

**Anatomy** 
- Scrim 50% · card 358px max · 20px padding · title 18px strong

**CSS** \`.modal\` · **Figma** —

**Front-end Storybook** [Atoms/Modal](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-modal--docs) — *match*. Dev Modal: title · onClose · showBackdrop · useSmallClose · addInfoIconToTitle · uspModal flags.`}}}},a={name:"Card (inline)",render:()=>'<div class="modal on" style="position:static;background:transparent;padding:0"><div class="card" style="box-shadow:var(--shadow-float)"><div class="t">Remove this item?</div><div class="b">You can add it back from your wishlist later.</div><div style="display:flex;flex-direction:column;gap:8px;width:100%"><button class="bd pri">Remove</button><button class="bd sec">Keep it</button></div></div></div>'};var o,t,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Card (inline)",
  render: () => \`<div class="modal on" style="position:static;background:transparent;padding:0"><div class="card" style="box-shadow:var(--shadow-float)"><div class="t">Remove this item?</div><div class="b">You can add it back from your wishlist later.</div><div style="display:flex;flex-direction:column;gap:8px;width:100%"><button class="bd pri">Remove</button><button class="bd sec">Keep it</button></div></div></div>\`
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const d=["cardInline"];export{d as __namedExportsOrder,a as cardInline,e as default};
