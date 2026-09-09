const k={title:"DG/Actions/Icon button",tags:["autodocs"],parameters:{docs:{description:{component:`The 32px circle (or square) that holds wishlist and quick-add on imagery. The icon inside swaps per fascia: heart or bookmark.

**When to use** 
- Wishlist and quick add on product imagery.
- Close buttons on sheets and modals.

**Avoid** 
- Putting a label inside it — use a Button.

**Anatomy** 
- 32px hit area · white 90% ground · icon 16px
- Circle everywhere · square on boohooMAN, KM, Brand Room (.pc-iconbtn--sq)
- Plain glyph, no ground, on PLT (.pc-fav--plain)

**CSS** \`.pc-iconbtn\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 5992-10841

**Front-end Storybook** [Molecules/Basket/WishlistButton](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-basket-wishlistbutton--docs) — *match*. Also Atoms/Button variants iconOnlyButton / iconOnlyButtonNoBackground. Dev runs --wishlist-opacity 0.7 on KM and Brand Room.`}}}},s={name:"Heart in circle",render:()=>'<button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button>'},a={name:"Bookmark in square",render:()=>'<button class="pc-iconbtn pc-iconbtn--sq" aria-label="Add to wishlist"><img src="assets/ds/icons/bookmark.svg" alt=""></button>'},t={name:"Plain heart (PLT)",render:()=>'<button class="pc-iconbtn pc-fav--plain" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-24.svg" alt=""></button>'},n={name:"Quick add",render:()=>'<button class="pc-iconbtn" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>'};var o,e,r;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Heart in circle",
  render: () => \`<button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button>\`
}`,...(r=(e=s.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Bookmark in square",
  render: () => \`<button class="pc-iconbtn pc-iconbtn--sq" aria-label="Add to wishlist"><img src="assets/ds/icons/bookmark.svg" alt=""></button>\`
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,u,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Plain heart (PLT)",
  render: () => \`<button class="pc-iconbtn pc-fav--plain" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-24.svg" alt=""></button>\`
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,p,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Quick add",
  render: () => \`<button class="pc-iconbtn" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>\`
}`,...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const g=["heartInCircle","bookmarkInSquare","plainHeartPLT","quickAdd"];export{g as __namedExportsOrder,a as bookmarkInSquare,k as default,s as heartInCircle,t as plainHeartPLT,n as quickAdd};
