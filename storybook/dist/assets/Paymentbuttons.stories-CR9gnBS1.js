const l={title:"DG/Actions/Payment buttons",tags:["autodocs"],parameters:{docs:{description:{component:`Wallet and BNPL buttons in their own scheme colours. These never take brand tokens — PayPal is always yellow, Apple Pay always black.

**When to use** 
- Express checkout on PDP, bag and checkout.
- Stack full-width in the order shown here; “or” divider before card payment.

**Avoid** 
- Restyling a wallet button to the fascia colour.
- Mixing mini and full-height in one stack.

**Anatomy** 
- 50px container, radius follows the brand (square on PLT / Brand Room)
- Official artwork only, from assets/ds/icons/payments/
- .pay--mini 114px wide for inline placement · .pay--glass for floating chrome

**CSS** \`.pay\` · **Figma** aIHmkCaTy9c5EWOxAGw0So · 9144-1931

**Front-end Storybook** no counterpart yet (*ours*). No payment button component in the dev Storybook (PSP renders them today). Dev has the payment icons inside Atoms/Icon (payment_visa … revolut_pay).`}}}},a={name:"Wallet stack",render:()=>'<div style="display:flex;flex-direction:column;gap:8px;width:300px"><button class="pay pay--paypal"><img src="assets/ds/icons/payments/paypal-word-1.svg" alt="PayPal"></button><button class="pay pay--apple"><img src="assets/ds/icons/payments/applepay-onblack.svg" alt="Apple Pay"></button><button class="pay pay--gpay"><img src="assets/ds/icons/payments/gpay-g.svg" alt=""><img src="assets/ds/icons/payments/gpay-word.svg" alt="Google Pay"></button><button class="pay pay--klarna"><img src="assets/ds/icons/payments/klarna-badge.svg" alt="Klarna"></button><button class="pay pay--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup.svg" alt="Clearpay"></button></div>'},s={name:"Payment options",render:()=>'<div class="pay-opts"><span class="pchip"><img src="assets/ds/icons/pay/visa.png" alt="Visa"></span><span class="pchip"><img src="assets/ds/icons/pay/mastercard.png" alt="Mastercard"></span><span class="pchip"><img src="assets/ds/icons/pay/amex.png" alt="Amex"></span><span class="pchip"><img src="assets/ds/icons/pay/apple-pay.png" alt="Apple Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/google-pay.png" alt="Google Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/paypal.png" alt="PayPal"></span><span class="pchip"><img src="assets/ds/icons/pay/klarna.png" alt="Klarna"></span></div>'};var n,p,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Wallet stack",
  render: () => \`<div style="display:flex;flex-direction:column;gap:8px;width:300px"><button class="pay pay--paypal"><img src="assets/ds/icons/payments/paypal-word-1.svg" alt="PayPal"></button><button class="pay pay--apple"><img src="assets/ds/icons/payments/applepay-onblack.svg" alt="Apple Pay"></button><button class="pay pay--gpay"><img src="assets/ds/icons/payments/gpay-g.svg" alt=""><img src="assets/ds/icons/payments/gpay-word.svg" alt="Google Pay"></button><button class="pay pay--klarna"><img src="assets/ds/icons/payments/klarna-badge.svg" alt="Klarna"></button><button class="pay pay--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup.svg" alt="Clearpay"></button></div>\`
}`,...(t=(p=a.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var e,o,c;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: "Payment options",
  render: () => \`<div class="pay-opts"><span class="pchip"><img src="assets/ds/icons/pay/visa.png" alt="Visa"></span><span class="pchip"><img src="assets/ds/icons/pay/mastercard.png" alt="Mastercard"></span><span class="pchip"><img src="assets/ds/icons/pay/amex.png" alt="Amex"></span><span class="pchip"><img src="assets/ds/icons/pay/apple-pay.png" alt="Apple Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/google-pay.png" alt="Google Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/paypal.png" alt="PayPal"></span><span class="pchip"><img src="assets/ds/icons/pay/klarna.png" alt="Klarna"></span></div>\`
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const i=["walletStack","paymentOptions"];export{i as __namedExportsOrder,l as default,s as paymentOptions,a as walletStack};
