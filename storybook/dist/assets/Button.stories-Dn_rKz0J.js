const R={title:"DG/Actions/Button",tags:["autodocs"],parameters:{docs:{description:{component:`The one action component. Six types, every state, every fascia — colour, type, radius and case all come from the brand tokens.

**When to use** 
- One primary per view — the thing you most want the customer to do.
- Secondary for the alternative path (Continue shopping, Cancel).
- Tertiary and text buttons for low-emphasis actions inside modules.
- Buy It Now only for the express-checkout path.

**Avoid** 
- Two primaries side by side.
- Colouring a button per instance — the brand mode does it.
- Sentence-case a primary label on a fascia that runs uppercase (PLT, Brand Room).

**Anatomy** 
- Container 50px (md) · 40px tertiary · 32px XS
- Label 16/24 · weight from --w-btn · case from --case-btn1/2
- Optional 20px icon slot, left of the label
- Spinner state: label gives way to a 24px arc, fill drops to Neutral

**CSS** \`.bd\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 9144-1807 / 12681-158518

**Front-end Storybook** [Atoms/Button](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/atoms-button--docs) — *match*. 19 dev variants map onto our 6 types + states. primary → .pri · secondary → .sec · tertiary → .ter · tertiaryXs → .xs · text → .txt · unlimitedAddToBag → .buy · iconOnlyButton → Icon button · iconPillButton → Filter pill. primaryAlt/secondaryAlt (boohoo pink), closeChat, countdownBannerCTA, customColour are page-specific skins we fold into tokens rather than keep as variants. Dev secondary uses a grey #B5B5B5 outline on every fascia; ours is the brand outline.`}}}},e={name:"Primary",render:()=>'<button class="bd pri">Add to bag</button>'},t={name:"Secondary",render:()=>'<button class="bd sec">Continue shopping</button>'},r={name:"Buy it now",render:()=>'<button class="bd buy">Buy it now</button>'},a={name:"Tertiary",render:()=>'<button class="bd ter">Tertiary</button>'},n={name:"Tertiary XS",render:()=>'<button class="bd xs">Tertiary XS</button>'},o={name:"Text only",render:()=>'<button class="bd txt">Text only</button>'},s={name:"Disabled",render:()=>'<button class="bd pri" disabled>Disabled</button> <button class="bd sec" disabled>Disabled</button>'},c={name:"Loading",render:()=>'<button class="bd pri spn"><i></i></button>'},d={name:"With icon",render:()=>'<button class="bd pri ic24"><img src="assets/ds/icons/lib/icons-quick-add.svg" alt="">Added</button>'},i={name:"Small",render:()=>'<button class="bd sec sm">Add photo</button>'},u={name:"Pay (checkout)",render:()=>'<button class="bd pay">Pay £47.99</button>'};var b,m,p;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Primary",
  render: () => \`<button class="bd pri">Add to bag</button>\`
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,y,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Secondary",
  render: () => \`<button class="bd sec">Continue shopping</button>\`
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,S,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Buy it now",
  render: () => \`<button class="bd buy">Buy it now</button>\`
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var w,T,A;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Tertiary",
  render: () => \`<button class="bd ter">Tertiary</button>\`
}`,...(A=(T=a.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var B,f,k;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Tertiary XS",
  render: () => \`<button class="bd xs">Tertiary XS</button>\`
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,C,D;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Text only",
  render: () => \`<button class="bd txt">Text only</button>\`
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var P,X,I;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Disabled",
  render: () => \`<button class="bd pri" disabled>Disabled</button> <button class="bd sec" disabled>Disabled</button>\`
}`,...(I=(X=s.parameters)==null?void 0:X.docs)==null?void 0:I.source}}};var O,_,L;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Loading",
  render: () => \`<button class="bd pri spn"><i></i></button>\`
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,W,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "With icon",
  render: () => \`<button class="bd pri ic24"><img src="assets/ds/icons/lib/icons-quick-add.svg" alt="">Added</button>\`
}`,...(F=(W=d.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var q,E,G;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: "Small",
  render: () => \`<button class="bd sec sm">Add photo</button>\`
}`,...(G=(E=i.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var j,z,H;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Pay (checkout)",
  render: () => \`<button class="bd pay">Pay £47.99</button>\`
}`,...(H=(z=u.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const J=["primary","secondary","buyItNow","tertiary","tertiaryXS","textOnly","disabled","loading","withIcon","small_","payCheckout"];export{J as __namedExportsOrder,r as buyItNow,R as default,s as disabled,c as loading,u as payCheckout,e as primary,t as secondary,i as small_,a as tertiary,n as tertiaryXS,o as textOnly,d as withIcon};
