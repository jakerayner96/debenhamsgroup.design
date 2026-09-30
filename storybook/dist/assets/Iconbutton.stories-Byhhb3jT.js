const A={title:"DG/Actions/Icon button",tags:["autodocs"],parameters:{docs:{description:{component:`The 32px circle (or square) that holds wishlist and quick-add on imagery. One wishlist glyph per fascia, never both: heart on most, bookmark on boohooMAN, Karen Millen and The Brand Room, plain heart on PLT.

**When to use** 
- Wishlist and quick add on product imagery.
- Close buttons on sheets and modals.

**Avoid** 
- Putting a label inside it — use a Button.

**Anatomy** 
- 32px hit area · white 90% ground · icon 16px
- Heart in a circle on most fascias · bookmark in a square on boohooMAN, KM, Brand Room (.pc-iconbtn--sq) · plain heart, no ground, on PLT (.pc-fav--plain)
- Quick add takes the same shape as the wishlist button on that fascia

**CSS** \`.pc-iconbtn\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 5992-10841

**Front-end Storybook** [Molecules/Basket/WishlistButton](https://web-storybook.jamesb.play.dbztech.net/?path=/docs/molecules-basket-wishlistbutton--docs) — *match*. Also Atoms/Button variants iconOnlyButton / iconOnlyButtonNoBackground. Dev runs --wishlist-opacity 0.7 on KM and Brand Room.`}}}},s={name:"Wishlist · heart in circle",render:()=>'<button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button>'},a={name:"Wishlist · bookmark in square",render:()=>'<button class="pc-iconbtn pc-iconbtn--sq" aria-label="Add to wishlist"><img src="assets/ds/icons/bookmark.svg" alt=""></button>'},t={name:"Wishlist · plain heart",render:()=>'<button class="pc-iconbtn pc-fav--plain" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-24.svg" alt=""></button>'},n={name:"Quick add · circle",render:()=>'<button class="pc-iconbtn" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>'},o={name:"Quick add · square",render:()=>'<button class="pc-iconbtn pc-iconbtn--sq" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>'};var e,i,r;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "Wishlist · heart in circle",
  render: () => \`<button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button>\`
}`,...(r=(i=s.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Wishlist · bookmark in square",
  render: () => \`<button class="pc-iconbtn pc-iconbtn--sq" aria-label="Add to wishlist"><img src="assets/ds/icons/bookmark.svg" alt=""></button>\`
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,b,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Wishlist · plain heart",
  render: () => \`<button class="pc-iconbtn pc-fav--plain" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-24.svg" alt=""></button>\`
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var p,h,k;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Quick add · circle",
  render: () => \`<button class="pc-iconbtn" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>\`
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,q,w;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Quick add · square",
  render: () => \`<button class="pc-iconbtn pc-iconbtn--sq" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>\`
}`,...(w=(q=o.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const v=["wishlistHeartInCircle","wishlistBookmarkInSquare","wishlistPlainHeart","quickAddCircle","quickAddSquare"];export{v as __namedExportsOrder,A as default,n as quickAddCircle,o as quickAddSquare,a as wishlistBookmarkInSquare,s as wishlistHeartInCircle,t as wishlistPlainHeart};
