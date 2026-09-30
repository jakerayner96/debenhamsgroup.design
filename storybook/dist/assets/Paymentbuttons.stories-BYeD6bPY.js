const d={title:"DG/Actions/Payment buttons",tags:["autodocs"],parameters:{docs:{description:{component:`Wallet and BNPL buttons in their own scheme colours. These never take brand tokens — PayPal is always yellow, Apple Pay always black.

**When to use** 
- Express checkout on PDP, bag and checkout.
- Stack full-width in the order shown here; “or” divider before card payment.

**Avoid** 
- Restyling a wallet button to the fascia colour.
- Mixing mini and full-height in one stack.

**Anatomy** 
- 50px container, radius follows the brand (square on PLT / Brand Room)
- Official artwork only, from assets/ds/icons/payments/ — PayPal uses the full wordmark (paypal-wordmark.svg), never the split letter pieces
- .pay--mini 114px wide for inline placement · .pay--glass for floating chrome
- Checkout Pay CTA (.bd.pay): fixed navy on every fascia, radius 8, 358 wide — card payment, not a wallet

**CSS** \`.pay\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 9144-1931

**Front-end Storybook** no counterpart yet (*ours*). No payment button component in the dev Storybook (PSP renders them today). Dev has the payment icons inside Atoms/Icon (payment_visa … revolut_pay).`}}}},a={name:"Wallet stack",render:()=>'<div style="display:flex;flex-direction:column;gap:8px;width:358px;max-width:100%"><button class="pay pay--paypal"><img src="assets/ds/icons/payments/paypal-wordmark.svg" alt="PayPal"></button><button class="pay pay--apple"><img src="assets/ds/icons/payments/applepay-onblack.svg" alt="Apple Pay"></button><button class="pay pay--gpay"><img src="assets/ds/icons/payments/gpay-g.svg" alt=""><img src="assets/ds/icons/payments/gpay-word.svg" alt="Google Pay"></button><button class="pay pay--klarna"><img src="assets/ds/icons/payments/klarna-badge.svg" alt="Klarna"></button><button class="pay pay--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup.svg" alt="Clearpay"></button></div>'},s={name:"Pay (checkout)",render:()=>'<button class="bd pay cta">Pay £47.99</button>'},t={name:"Payment options",render:()=>'<div class="pay-opts"><span class="pchip"><img src="assets/ds/icons/pay/visa.png" alt="Visa"></span><span class="pchip"><img src="assets/ds/icons/pay/mastercard.png" alt="Mastercard"></span><span class="pchip"><img src="assets/ds/icons/pay/amex.png" alt="Amex"></span><span class="pchip"><img src="assets/ds/icons/pay/apple-pay.png" alt="Apple Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/google-pay.png" alt="Google Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/paypal.png" alt="PayPal"></span><span class="pchip"><img src="assets/ds/icons/pay/klarna.png" alt="Klarna"></span></div>'};var n,p,e;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Wallet stack",
  render: () => \`<div style="display:flex;flex-direction:column;gap:8px;width:358px;max-width:100%"><button class="pay pay--paypal"><img src="assets/ds/icons/payments/paypal-wordmark.svg" alt="PayPal"></button><button class="pay pay--apple"><img src="assets/ds/icons/payments/applepay-onblack.svg" alt="Apple Pay"></button><button class="pay pay--gpay"><img src="assets/ds/icons/payments/gpay-g.svg" alt=""><img src="assets/ds/icons/payments/gpay-word.svg" alt="Google Pay"></button><button class="pay pay--klarna"><img src="assets/ds/icons/payments/klarna-badge.svg" alt="Klarna"></button><button class="pay pay--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup.svg" alt="Clearpay"></button></div>\`
}`,...(e=(p=a.parameters)==null?void 0:p.docs)==null?void 0:e.source}}};var o,c,l;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Pay (checkout)",
  render: () => \`<button class="bd pay cta">Pay £47.99</button>\`
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var r,i,y;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Payment options",
  render: () => \`<div class="pay-opts"><span class="pchip"><img src="assets/ds/icons/pay/visa.png" alt="Visa"></span><span class="pchip"><img src="assets/ds/icons/pay/mastercard.png" alt="Mastercard"></span><span class="pchip"><img src="assets/ds/icons/pay/amex.png" alt="Amex"></span><span class="pchip"><img src="assets/ds/icons/pay/apple-pay.png" alt="Apple Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/google-pay.png" alt="Google Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/paypal.png" alt="PayPal"></span><span class="pchip"><img src="assets/ds/icons/pay/klarna.png" alt="Klarna"></span></div>\`
}`,...(y=(i=t.parameters)==null?void 0:i.docs)==null?void 0:y.source}}};const m=["walletStack","payCheckout","paymentOptions"];export{m as __namedExportsOrder,d as default,s as payCheckout,t as paymentOptions,a as walletStack};
