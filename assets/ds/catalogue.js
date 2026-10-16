/* ============================================================
   DG GROUP DESIGN SYSTEM — COMPONENT CATALOGUE (single source)
   One entry per component. Drives:
     · the site's Component library gallery + wiki pages (index.html)
     · storybook/gen-stories.mjs → our own Storybook for the dev team
     · .context/inventory/05-dev-storybook.md overlay tables
   Markup uses assets/ds/components.css classes only; every colour is a token.
   `dev` = the matching component in the front-end Storybook
   (web-storybook.jamesb.play.dbztech.net) and how well it lines up:
     match   — same component, same job; ours is the visual target
     partial — overlaps, but one side has states/variants the other lacks
     ours    — no dev counterpart yet (dev to build)
   Asset paths are relative to the repo root (the site + Storybook both serve it).
   ============================================================ */
(function(root){
const IMG = (deg, a, b) => `<span style="position:absolute;inset:0;background:linear-gradient(${deg}deg,var(${a}),var(${b}))"></span>`;
const ICON = (n, extra='') => `<img src="assets/ds/icons/lib/icons-${n}.svg" alt="" ${extra}>`;
const PH = (w, h, deg=160) => `<span style="display:block;width:${w}px;height:${h}px;background:linear-gradient(${deg}deg,var(--brand-light-3),var(--brand-light-1));flex:none"></span>`;

const CARD = (opts={}) => `<article class="pc${opts.compact?' pc--compact':''}" style="width:${opts.w||200}px">
  <div class="pc-img">${IMG(165,'--brand-light-3','--brand-light-1')}
    <div class="pc-actions"><button class="pc-iconbtn${opts.sq?' pc-iconbtn--sq':''}" aria-label="Add to wishlist"><img src="assets/ds/icons/${opts.sq?'bookmark':'heart-16'}.svg" alt=""></button>${opts.qa==='icon'?'<button class="pc-iconbtn" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>':''}</div>
    ${opts.badges?`<div class="pc-badges${opts.ai?' has-ai':''}">${opts.badges}</div>`:''}${opts.ai?'<div class="badge-ai"><b>AI</b> Generated</div>':''}
  </div>
  ${opts.qa==='button'?'<button class="pc-add"><img src="assets/ds/icons/quick-add-24.svg" alt="">Add</button>':''}
  ${opts.taggstar?'<div class="pc-taggstar"><b>Selling Fast!</b><span>79 Sold</span></div>':''}
  <div class="pc-info">${opts.sponsored?'<div class="pc-sponsored">Sponsored</div>':''}
    <div class="pc-toprow"><div class="pc-titles">${opts.brand===false?'':'<div class="pc-brand">Coast</div>'}<div class="pc-name">Lace and pleated midi shirt dress</div></div>${opts.qa==='mini'?'<button class="pc-qa" aria-label="Quick add"><i></i>Add</button>':''}</div>
    ${opts.price||`<div class="pc-price${opts.sale===false?'':' sale'}"><span class="now">£70.00</span>${opts.sale===false?'':'<span class="was">£139.00</span><span class="pct">-50%</span>'}</div>`}
    ${opts.swatches?'<div class="pc-swatches"><span class="set"><span class="pc-swatch on"><i style="background:#B97A57"></i></span><span class="pc-swatch"><i style="background:#2B2B2B"></i></span><span class="pc-swatch"><i style="background:#8FA3B8"></i></span></span><span class="pc-more">+5</span></div>':''}
    ${opts.stars?'<div class="pc-stars"><span class="set"><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-half.svg" alt=""><img src="assets/ds/icons/star-outline.svg" alt=""></span><span>(9)</span></div>':''}
  </div></article>`;

const DG_CATALOGUE = [

/* ───────────── ACTIONS ───────────── */
{ slug:'button', name:'Button', group:'Actions', tier:'atom', css:'.bd', figma:'aIHmkCaTy9c5EWOxAGw0So · 9144-1807 / 12681-158518',
  summary:'The one action component. Five types (Buy It Now is off for now), every state, every fascia — colour, type, radius and case all come from the brand tokens.',
  use:['One primary per view — the thing you most want the customer to do.','Secondary for the alternative path (Continue shopping, Cancel).','Tertiary and text buttons for low-emphasis actions inside modules.'],
  avoid:['Two primaries side by side.','Colouring a button per instance — the brand mode does it.','Sentence-case a primary label on a fascia that runs uppercase (PLT, Brand Room).'],
  anatomy:['Full-width CTAs 358 × 50 (Primary, Secondary, Text only) · Buy It Now removed from every fascia for now (15 Oct 2026); .bd.buy stays for the CTA-colour icon buttons (Added, Checkout securely) · Tertiary 40 hugs · XS 31 hugs','Label 16/24 · weight from --w-btn · case from --case-btn1/2','Icon slot 16px (20 / 24 also in Figma), left of the label — drawn in the label colour','Spinner state: label gives way to a 24px arc, fill drops to Neutral'],
  variants:[
    {name:'Default', html:'<div class="bd-stack"><button class="bd pri">Add to bag</button><button class="bd sec">Continue shopping</button><button class="bd ter">Tertiary</button><button class="bd xs">Tertiary XS</button><button class="bd txt">Text only</button></div>'},
    {name:'Disabled', html:'<div class="bd-stack"><button class="bd pri" disabled>Add to bag</button><button class="bd sec" disabled>Continue shopping</button><button class="bd ter" disabled>Tertiary</button><button class="bd xs" disabled>Tertiary XS</button><button class="bd txt" disabled>Text only</button></div>'},
    {name:'Spinner', html:'<div class="bd-stack"><button class="bd pri spn"><span class="lbl">Add to bag</span><i></i></button><button class="bd sec spn"><span class="lbl">Continue shopping</span><i></i></button><button class="bd ter spn"><span class="lbl">Tertiary</span><i></i></button><button class="bd xs spn"><span class="lbl">Tertiary XS</span><i></i></button></div>'},
    {name:'Icon 16 · Added', html:'<div class="bd-stack"><button class="bd buy ic16"><svg class="ico" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.33 8.67 5.67 12l8-8" stroke-linecap="round" stroke-linejoin="round"/></svg>Added</button><button class="bd pri ic16"><svg class="ico" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.33 8.67 5.67 12l8-8" stroke-linecap="round" stroke-linejoin="round"/></svg>Added</button><button class="bd sec ic16"><svg class="ico" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.33 8.67 5.67 12l8-8" stroke-linecap="round" stroke-linejoin="round"/></svg>Added</button><button class="bd ter ic16"><svg class="ico" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2.33 8.67 5.67 12l8-8" stroke-linecap="round" stroke-linejoin="round"/></svg>Tertiary</button></div>'},
    {name:'Icon 16 · Checkout securely', html:'<div class="bd-stack"><button class="bd buy ic16"><svg class="ico" viewBox="0 0 18.14 23.29" fill="none" aria-hidden="true"><path d="M15.93 9.07H2.21A1.71 1.71 0 0 0 .5 10.79v10.28a1.71 1.71 0 0 0 1.71 1.72h13.72a1.71 1.71 0 0 0 1.71-1.72V10.79a1.71 1.71 0 0 0-1.71-1.72Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.07 9.07V6.5a6 6 0 1 0-12 0v2.57" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.06" cy="14.49" r="1.5" fill="currentColor" stroke="none"/></svg>Checkout securely</button><button class="bd pri ic16"><svg class="ico" viewBox="0 0 18.14 23.29" fill="none" aria-hidden="true"><path d="M15.93 9.07H2.21A1.71 1.71 0 0 0 .5 10.79v10.28a1.71 1.71 0 0 0 1.71 1.72h13.72a1.71 1.71 0 0 0 1.71-1.72V10.79a1.71 1.71 0 0 0-1.71-1.72Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.07 9.07V6.5a6 6 0 1 0-12 0v2.57" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.06" cy="14.49" r="1.5" fill="currentColor" stroke="none"/></svg>Checkout securely</button><button class="bd sec ic16"><svg class="ico" viewBox="0 0 18.14 23.29" fill="none" aria-hidden="true"><path d="M15.93 9.07H2.21A1.71 1.71 0 0 0 .5 10.79v10.28a1.71 1.71 0 0 0 1.71 1.72h13.72a1.71 1.71 0 0 0 1.71-1.72V10.79a1.71 1.71 0 0 0-1.71-1.72Z" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.07 9.07V6.5a6 6 0 1 0-12 0v2.57" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.06" cy="14.49" r="1.5" fill="currentColor" stroke="none"/></svg>Checkout securely</button></div>'},
    {name:'Small', html:'<button class="bd sec sm">Add photo</button>'},
  ],
  dev:{title:'Atoms/Button', status:'match', note:'19 dev variants map onto our 6 types + states. primary → .pri · secondary → .sec · tertiary → .ter · tertiaryXs → .xs · text → .txt · unlimitedAddToBag → .buy · iconOnlyButton → Icon button · iconPillButton → Filter pill. primaryAlt/secondaryAlt (boohoo pink), closeChat, countdownBannerCTA, customColour are page-specific skins we fold into tokens rather than keep as variants. Dev secondary uses a grey #B5B5B5 outline on every fascia; ours is the brand outline.'} },

{ slug:'payment-buttons', name:'Payment buttons', group:'Actions', tier:'atom', css:'.pay', universal:true, figma:'aIHmkCaTy9c5EWOxAGw0So · 9144-1931',
  summary:'Wallet and BNPL buttons in their own scheme colours. These never take brand tokens — PayPal is always yellow, Apple Pay always black.',
  use:['Express checkout on PDP, bag and checkout.','Stack full-width in the order shown here; “or” divider before card payment.'],
  avoid:['Restyling a wallet button to the fascia colour.','Mixing mini and full-height in one stack.'],
  anatomy:['50px container, radius follows the brand (square on PLT / Brand Room)','Official artwork only, from assets/ds/icons/payments/ — PayPal uses the full wordmark (paypal-wordmark.svg), never the split letter pieces','.pay--mini 114px wide for inline placement · .pay--glass for floating chrome','Checkout Pay CTA (.bd.pay): fixed navy on every fascia, radius 8, 358 wide — card payment, not a wallet'],
  variants:[
    {name:'Wallet stack', html:'<div style="display:flex;flex-direction:column;gap:8px;width:358px;max-width:100%"><button class="pay pay--paypal"><img src="assets/ds/icons/payments/paypal-wordmark.svg" alt="PayPal"></button><button class="pay pay--apple"><img src="assets/ds/icons/payments/applepay-onblack.svg" alt="Apple Pay"></button><button class="pay pay--gpay"><img src="assets/ds/icons/payments/gpay-g.svg" alt=""><img src="assets/ds/icons/payments/gpay-word.svg" alt="Google Pay"></button><button class="pay pay--klarna"><img src="assets/ds/icons/payments/klarna-badge.svg" alt="Klarna"></button><button class="pay pay--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup.svg" alt="Clearpay"></button></div>'},
    {name:'Pay (checkout)', html:'<button class="bd pay cta">Pay £47.99</button>'},
    {name:'Payment options', html:'<div class="pay-opts"><span class="pchip"><img src="assets/ds/icons/pay/visa.png" alt="Visa"></span><span class="pchip"><img src="assets/ds/icons/pay/mastercard.png" alt="Mastercard"></span><span class="pchip"><img src="assets/ds/icons/pay/amex.png" alt="Amex"></span><span class="pchip"><img src="assets/ds/icons/pay/apple-pay.png" alt="Apple Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/google-pay.png" alt="Google Pay"></span><span class="pchip"><img src="assets/ds/icons/pay/paypal.png" alt="PayPal"></span><span class="pchip"><img src="assets/ds/icons/pay/klarna.png" alt="Klarna"></span></div>'},
  ],
  dev:{title:'—', status:'ours', note:'No payment button component in the dev Storybook (PSP renders them today). Dev has the payment icons inside Atoms/Icon (payment_visa … revolut_pay).'} },

{ slug:'text-link', name:'Text link', group:'Actions', tier:'atom', css:'.lnk', figma:'colour-alignment · brand-colours',
  summary:'Inline action in the brand link colour. Strong weight on every fascia except Karen Millen (500).',
  use:['Secondary navigation inside copy — Size guide, Learn more, View all.'],
  avoid:['Using a link where the action changes data (that is a button).'],
  anatomy:['12–14px label · --text-link · hover shifts to --text-link-hover'],
  variants:[{name:'Default', html:'<a class="lnk" href="#">Size guide</a>'}, {name:'In copy', html:'<p style="font-size:14px;margin:0">By continuing you agree to our <a class="lnk" href="#" style="font-size:14px">terms</a>.</p>'}],
  dev:{title:'Atoms/Link', status:'match', note:'Dev Link is Internal / External routing; styling comes from the caller. Ours fixes the visual.'} },

{ slug:'icon-button', name:'Icon button', group:'Actions', tier:'atom', css:'.pc-iconbtn', figma:'aIHmkCaTy9c5EWOxAGw0So · 5992-10841',
  summary:'The 32px circle (or square) that holds wishlist and quick-add on imagery. One wishlist glyph per fascia, never both: heart on most, bookmark on boohooMAN, Karen Millen and The Brand Room, plain heart on PLT.',
  use:['Wishlist and quick add on product imagery.','Close buttons on modals.'],
  avoid:['Putting a label inside it — use a Button.'],
  anatomy:['32px hit area · white 90% ground · icon 16px','Heart in a circle on most fascias · bookmark in a square on boohooMAN, KM, Brand Room (.pc-iconbtn--sq) · plain heart, no ground, on PLT (.pc-fav--plain)','Quick add takes the same shape as the wishlist button on that fascia'],
  variants:[
    {name:'Wishlist · heart in circle', not:['plt','boohooman','karenmillen','brandroom'], html:'<button class="pc-iconbtn" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-16.svg" alt=""></button>'},
    {name:'Wishlist · bookmark in square', only:['boohooman','karenmillen','brandroom'], html:'<button class="pc-iconbtn pc-iconbtn--sq" aria-label="Add to wishlist"><img src="assets/ds/icons/bookmark.svg" alt=""></button>'},
    {name:'Wishlist · plain heart', only:['plt'], html:'<button class="pc-iconbtn pc-fav--plain" aria-label="Add to wishlist"><img src="assets/ds/icons/heart-24.svg" alt=""></button>'},
    {name:'Quick add · circle', not:['boohooman','karenmillen','brandroom'], html:'<button class="pc-iconbtn" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>'},
    {name:'Quick add · square', only:['boohooman','karenmillen','brandroom'], html:'<button class="pc-iconbtn pc-iconbtn--sq" aria-label="Quick add"><img src="assets/ds/icons/quick-add-16.svg" alt=""></button>'},
  ],
  dev:{title:'Molecules/Basket/WishlistButton', status:'match', note:'Also Atoms/Button variants iconOnlyButton / iconOnlyButtonNoBackground. Dev runs --wishlist-opacity 0.7 on KM and Brand Room.'} },

{ slug:'quantity', name:'Quantity stepper', group:'Actions', tier:'atom', css:'.qty', figma:'CYyGeUDy4w02enV7uFxZ6W · 1234:76756',
  summary:'Minus / count / plus. At quantity one the minus becomes remove — the same rule the dev QuantityPill follows.',
  use:['Bag line items, samples, gift quantities.'],
  avoid:['Free-typing quantity in a field.'],
  anatomy:['28px controls · 1px --border-default · count centred'],
  variants:[{name:'Default', html:'<div class="qty"><button aria-label="Remove">–</button><span>2</span><button aria-label="Add">+</button></div>'}, {name:'At one (remove)', html:'<div class="qty"><button aria-label="Remove">🗑</button><span>1</span><button aria-label="Add">+</button></div>'}],
  dev:{title:'Molecules/Basket/QuantityPill', status:'match', note:'Dev states: quantity of one shows remove · mid range shows minus · max disables plus · fixed · disabled · debounced taps. Ours needs the max / fixed / disabled states drawn.'} },

/* ───────────── FORMS ───────────── */
{ slug:'text-field', name:'Text field', group:'Forms', tier:'atom', css:'.fld', figma:'WChEtDPH0LcErdYFS9SESn · 3990:36587',
  summary:'Floating-label input. The label shrinks from 14 to 12 as the value arrives; errors turn the keyline red and add a message underneath.',
  use:['Every text entry: email, address, promo code, search inside forms.'],
  avoid:['Placeholder text as the only label.','Error colour without an error message.'],
  anatomy:['50px · padding gap 2 (8px) top/bottom, gap 4 (16px) sides · radius 4 (brand) · Figma 9925-5828','Outline Grey 3 #B5B5B5 at rest and when filled — black only while focused (caret in the field), back to grey on blur','Label 14 grey #6B6B6B, floats to 12 on focus / filled; value 14 black; caret #2797FF','Error: #D33F3F outline + 14 regular message gap 2 (8px) under · Inactive: Grey 1 #F2F2F2 fill, grey text'],
  variants:[
    {name:'Empty', html:'<label class="fld" style="width:280px"><input placeholder=" "><span class="lbl">Email address</span></label>'},
    {name:'Filled', html:'<label class="fld" style="width:280px"><input placeholder=" " value="jake@debenhams.com"><span class="lbl">Email address</span></label>'},
    {name:'Error', html:'<div style="width:280px"><label class="fld invalid"><input placeholder=" " value="SUMMER"><span class="lbl">Promo code</span></label><div class="fld-err">Sorry, we don’t recognise that code</div></div>'},
    {name:'Inactive', html:'<label class="fld inactive" style="width:280px"><input placeholder=" " value="jake@debenhams.com" disabled><span class="lbl">Email address</span></label>'},
    {name:'Error · empty', html:'<div style="width:280px"><label class="fld invalid"><input placeholder=" "><span class="lbl">Email address</span></label><div class="fld-err">This field is required</div></div>'},
  ],
  dev:{title:'Atoms/Input Field', status:'match', note:'Dev has label / errors / readOnlyValue / hyphenatedInput / errorOnlyBorder. Molecules/Date Select is three of these — compose, not a new component.'} },

{ slug:'select', name:'Select', group:'Forms', tier:'atom', css:'.fsel', figma:'—',
  summary:'A styled trigger over a real native select, so the platform picker does the work on mobile.',
  use:['Sort order, country, title, quantity beyond the stepper.'],
  avoid:['Custom dropdown lists where the native one will do.'],
  anatomy:['50px trigger · chevron right · native <select> stretched invisibly over it'],
  variants:[{name:'Default', html:'<div class="fsel" style="width:240px"><span>Relevance</span><select aria-label="Sort"><option>Relevance</option><option>Price low to high</option><option>Newest</option></select></div>'}],
  dev:{title:'Atoms/Select', status:'match', note:'Dev Select: label · options · selectedOption · placeholder · error.'} },

{ slug:'checkbox', name:'Checkbox', group:'Forms', tier:'atom', css:'.chk',
  summary:'24px box, 3px radius, filled with the brand action colour when on.',
  use:['Multiple choice, consent, add-ons (protection, gift wrap).'],
  avoid:['A checkbox for an either/or choice — that is a radio.'],
  anatomy:['24px · radius 3 · off = 1px --border-control (Grey 3 #B5B5B5) on white','On = --icon-action fill (Debenhams #00787D) + the white 1pt Icons / Tick — exact Figma path, Figma 669-892 / 5915-6388','Box → label gap 2 (8px); .chk-row--lg top-aligns long copy'],
  variants:[{name:'On / off', html:'<div style="display:flex;flex-direction:column;gap:12px"><div class="chk-row"><button class="chk on" aria-checked="true"></button>Add Worry-Free Purchase® for £3.18</div><div class="chk-row"><button class="chk" aria-checked="false"></button>Use my delivery address for billing</div></div>'}],
  dev:{title:'—', status:'ours', note:'No checkbox atom in the dev Storybook (checkout forms use native inputs). Adopt ours.'} },

{ slug:'radio', name:'Radio', group:'Forms', tier:'atom', css:'.rad',
  summary:'24px ring with a 13.7px dot in the CTA colour. One of a set.',
  use:['Delivery options, payment method, sort order in a modal.'],
  avoid:['A single radio on its own.'],
  anatomy:['24px · 1px --border-control ring (Grey 3 #B5B5B5) on white — stays Grey 3 when selected','Selected dot r 6.86 (13.7px) in --icon-action — the CTA colour (Debenhams #00787D), never black · Figma 669-2125','Ring → label gap 4 (16px) · row 44px'],
  variants:[{name:'Set', html:'<div style="display:flex;flex-direction:column;gap:12px"><div class="rad-row"><button class="rad on" aria-checked="true"></button>Recommended</div><div class="rad-row" style="padding-top:0"><button class="rad" aria-checked="false"></button>Lowest price</div></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook. Adopt ours.'} },

{ slug:'toggle', name:'Toggle', group:'Forms', tier:'atom', css:'.tog',
  summary:'On/off switch for an immediate setting — Next Day Delivery on the PLP is the canonical use.',
  use:['Instant filters and preferences that apply on tap.'],
  avoid:['Settings that need a Save button (use a checkbox).'],
  anatomy:['Track 36×20 · knob 16 · on = --surface-action'],
  variants:[{name:'On / off', html:'<div style="display:flex;gap:16px"><button class="tog on" aria-checked="true"></button><button class="tog" aria-checked="false"></button></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook. Adopt ours (the PLP NDD toggle exists in production without a shared component).'} },

{ slug:'promo-field', name:'Promo / gift card field', group:'Forms', tier:'molecule', css:'.promo', figma:'WChEtDPH0LcErdYFS9SESn · 3990:58406',
  summary:'One field for promo codes and gift cards with a 95px Apply. The smart version detects which it has been given.',
  use:['Bag and checkout payment section.'],
  avoid:['Two separate fields for promo and gift card.'],
  anatomy:['Text field + secondary Apply button, gap 2 (8px) between','Gift card reveals a PIN field (.fld--pin)'],
  variants:[{name:'Default', html:'<div class="promo" style="width:340px"><label class="fld"><input placeholder=" "><span class="lbl">Promo code or gift card</span></label><button class="bd sec">Apply</button></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook as a component; lives inside the basket page. Promote.'} },

{ slug:'psp-field', name:'Card field (PSP)', group:'Forms', tier:'atom', css:'.sfield',
  summary:'The payment provider renders these, so they are fixed across every fascia: navy set, #EFEFF1 grey, 8px radius.',
  use:['Card number, expiry, CVC inside checkout only.'],
  avoid:['Using this style for any field we render ourselves.'],
  anatomy:['50px · fixed --field-grey / --field-border · 8px radius on all brands'],
  variants:[{name:'Grey + white', html:'<div style="display:flex;flex-direction:column;gap:10px;width:280px"><div><div class="sfield-lbl">Card number</div><div class="sfield sfield--grey">•••• •••• •••• 4242</div></div><div class="sfield sfield--white">MM / YY</div></div>'}],
  dev:{title:'—', status:'ours', note:'PSP-owned; documented so the checkout looks intentional around it.'} },

/* ───────────── FEEDBACK ───────────── */
{ slug:'message', name:'Message banner', group:'Feedback', tier:'molecule', css:'.msg', figma:'WChEtDPH0LcErdYFS9SESn · K11',
  summary:'Inline status: a 4px colour bar, icon and text. Success, neutral and error tones; optional dismiss and inline action.',
  use:['Confirming an applied code, showing a balance, explaining a failure — in place, next to the thing it is about.'],
  avoid:['Stacking more than one at a time.','A dismiss on a neutral message — it is a readout, not an alert.'],
  anatomy:['4px status bar · 20px icon · 14px text · optional action / ×','Tones: --success-bar/-bg · --surface-sunken · --error-bg'],
  variants:[
    {name:'Success', html:'<div class="msg msg--success" style="width:380px"><i></i><div class="body"><span style="flex:1">Promo code SUMMER applied — £6.00 off</span><button class="x" aria-label="Dismiss"></button></div></div>'},
    {name:'Neutral', html:'<div class="msg msg--neutral" style="width:380px"><i></i><div class="body"><span style="flex:1">Gift card balance: £25.00</span><button class="act">Apply</button></div></div>'},
    {name:'Error', html:'<div class="msg msg--error" style="width:380px"><i></i><div class="body"><span style="flex:1">We couldn’t find that gift card. Check the number and PIN.</span></div></div>'},
  ],
  dev:{title:'Molecules/Message Block', status:'match', note:'Dev types: error · warning · info · infoNew · warningNew · infoWithIcon · message. Reconcile to three tones + optional icon.'} },

{ slug:'toast', name:'Toast', group:'Feedback', tier:'molecule', css:'.toast',
  summary:'Transient confirmation. Bottom black snackbar for “done”; top light toast when there is something to act on.',
  use:['Added to wishlist, copied, saved — anything that needs no reply.'],
  avoid:['Errors in a toast — they disappear.'],
  anatomy:['Snackbar 1.8s · top toast 6s with a strong action label'],
  variants:[{name:'Snackbar', html:'<div class="toast" style="position:static;transform:none">Added to wishlist</div>'}, {name:'Top, actionable', html:'<div class="toast toast--top" style="position:static;width:340px"><span style="flex:1">Item added to bag</span><button class="act">View</button></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook. Adopt ours.'} },

{ slug:'stock-alert', name:'Stock alert', group:'Feedback', tier:'atom', css:'.alert',
  summary:'Red-light urgency line under a price or size.',
  use:['Low stock, last chance.'],
  avoid:['Fake urgency.'],
  anatomy:['--error-bg ground · 2px red rule · 12px text'],
  variants:[{name:'Default', html:'<div class="alert" style="width:280px">Only 2 left — order soon</div>'}],
  dev:{title:'Atoms/Social Proof', status:'partial', note:'Dev social proof covers urgency messaging (PLP / PDP / CART locations, dismissible). Our stock alert is the fixed-copy version.'} },

{ slug:'empty-state', name:'Empty state', group:'Feedback', tier:'molecule', css:'.empty', figma:'erREG2vwLzUF2QKTp5Uh6R · 3178-24710',
  summary:'A 32px glyph, one line, one button. Empty bag, wishlist, orders, search.',
  use:['Any list with nothing in it.'],
  avoid:['Long explanations — one line and a way out.'],
  anatomy:['32px icon · 16/23 text · primary button · optional recently-viewed rail beneath'],
  variants:[{name:'Empty bag', html:'<div class="empty" style="width:320px"><img src="assets/ds/icons/lib/icons-bag.svg" alt=""><p>Your bag is empty</p><button class="bd pri">Continue shopping</button></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook.'} },

{ slug:'spinner', name:'Spinner', group:'Feedback', tier:'atom', css:'.bd.spn',
  summary:'The DS spinner icon — a ring with a quarter arc — drawn in the current text colour. Inside a button it replaces the label; on its own it marks a loading region.',
  use:['In-flight actions; page or panel loading.'],
  avoid:['Spinners longer than a couple of seconds without copy.'],
  anatomy:['20px ring · 3px stroke · quarter arc in the text colour over a 28% track','1.2s turn, ease-in-out — speeds through the rotation and settles','The label stays in the layout (invisible) so the button keeps its width while spinning','32px .lg for page / panel loading'],
  variants:[{name:'In a button', html:'<button class="bd pri spn"><span class="lbl">Add to bag</span><i></i></button>'}, {name:'Neutral fill', html:'<button class="bd ter spn"><span class="lbl">Tertiary</span><i></i></button>'}, {name:'Standalone', html:'<i class="spin"></i>'}, {name:'Standalone · large', html:'<i class="spin lg"></i>'}],
  dev:{title:'Atoms / Progress Spinner', status:'partial', note:'Dev spinner has small / medium / large + isPage. Ours is button-embedded; add the standalone sizes.'} },

/* ───────────── PRODUCT ───────────── */
{ slug:'product-card', name:'Product card', group:'Product', tier:'molecule', css:'.pc', figma:'aIHmkCaTy9c5EWOxAGw0So · 5992-10841 / 12999-146812',
  summary:'The hero asset. One card for every PLP, carousel and recommendation — every optional element is a layer you switch on per fascia, never a fork.',
  use:['Product grids, rails, search results, Shop The Look.'],
  avoid:['Rounding the image corners (live and Figma are square).','A discount in the product tag — tags are fit and range only.','Letting quick add squeeze the price row (it sits on the titles row).'],
  anatomy:['Image 2:3 on --surface-media · actions top-right 32px, inset gap 2 (8px)','Badges bottom-left · AI strip owns the image foot','Info block: brand (strong) · name (2-line clamp) · price · swatches · stars','Compact format: 11px caps brand, 12px name — the alignment target'],
  variants:[
    {name:'All layers', html:CARD({qa:'icon',badges:'<span class="badge">Plus</span>',ai:true,taggstar:true,sponsored:true,swatches:true,stars:true})},
    {name:'Minimal', html:CARD({sale:false,w:180})},
    {name:'Compact (target)', html:CARD({compact:true,sq:true,w:170})},
    {name:'Quick add · button', html:CARD({qa:'button',w:180})},
    {name:'Quick add · mini', html:CARD({qa:'mini',w:200})},
    {name:'No brand line (PLT / Warehouse)', html:CARD({brand:false,w:180})},
  ],
  dev:{title:'Molecules/CT Product Card', status:'match', note:'Dev card layouts default · 1-column · dropdown, flags quickAdd · hideBadges · hideColourSwatches · showRatings · sponsoredStatus · useSquareImage — the same layer model. Molecules/Product Card (CMS) is the simpler content card.'} },

{ slug:'badges', name:'Badges', group:'Product', tier:'atom', css:'.badge', figma:'d0zY0vt8hoz0gq8ycTimxS · 25-11775',
  summary:'Overlay tags on imagery: Plus, Petite, Tall, Sale. They stack bottom-left and lift when the AI strip is present.',
  use:['Fit and range information on the image.'],
  avoid:['Discounts or urgency in a badge.','More than two stacked.'],
  anatomy:['White 90% ground · 11px label · brand radius','Stack gap 4 · lifts by --ai-h over the AI strip'],
  variants:[{name:'Set', html:'<div style="display:flex;gap:8px"><span class="badge">Plus</span><span class="badge">Petite</span><span class="badge">Tall</span><span class="badge badge--sale">Sale</span></div>'}, {name:'Stacked on image', html:CARD({badges:'<span class="badge">Petite</span><span class="badge badge--sale">Sale</span>',ai:true,w:180,sale:false})}],
  dev:{title:'—', status:'ours', note:'Dev renders badges inside CT Product Card (hideBadges / hidePromoBadges) with no standalone atom. Split out.'} },

{ slug:'ai-strip', name:'AI Generated strip', group:'Product', tier:'atom', css:'.badge-ai', figma:'d0zY0vt8hoz0gq8ycTimxS',
  summary:'Mandatory label for AI-generated imagery (EU AI Act Art. 50(4)). Live text, full width, pinned to the image foot, before add-to-bag everywhere.',
  use:['Every image flagged AI, on PLP, PDP, rails and search.'],
  avoid:['Baking it into the image.','Hiding it behind other badges.'],
  anatomy:['Height --ai-h 24px · 10px minimum text · badge colours per brand','Other badges shift up by exactly --ai-h · hidden in bag / checkout (legal sign-off)'],
  variants:[{name:'On image', html:CARD({ai:true,w:180,sale:false})}, {name:'Strip alone', html:'<div style="position:relative;width:200px;height:24px"><div class="badge-ai" style="position:absolute;inset:0"><b>AI</b> Generated</div></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook (icons_ai / ai_summary_sparkles exist in Atoms/Icon). Build to this spec.'} },

{ slug:'price', name:'Price', group:'Product', tier:'atom', css:'.price-blk · .price-blk--pdp / --card / --rail / --drawer / --line / --sm · .price · .price-code · tokens --price-*', figma:'core-pdp C5 · live capture 15 Oct 2026 (debenhams, boohoo, PLT, Karen Millen)',
  summary:'One price component placed in every context — PDP, PLP card, rail card, quick add, added to bag, basket, chat. Now, was (a struck number, no label), saving, then the code or promo line on its own row. Each fascia changes only type size, weights, colours and the saving style; which elements show depends on where it is placed.',
  use:['PDP: now · was · saving · code line(s).','PLP card: now · was · -X% · code line (Karen Millen: no % or code on cards).','Rail cards (recommendations, complete the look): now · was only.','Quick add modal: as the basket line, plus saving and code.','Added to bag: now · was, 12px, both ink.','Basket line: now · was, 16px, no saving.'],
  avoid:['A saving without the was price.','Labels on the was price (Was, RRP, Now) — live never uses them.','A saving or strike on a full-price item.','Running the now and was prices together — live added-to-bag drops the 8px gap (£26.03£34.70); the DS keeps it.'],
  anatomy:[
    'Order: now (--price-now-w, red --price-sale on sale, ink at full price) · was (struck, --price-was-w) · saving · code / promo line on its own row in --price-sale',
    'PDP (.price-blk--pdp): 24/30 · 16px between prices · code line 14/21 gap 3 (12px) below · saving copy from --price-save-pre: Save 25% (Debenhams, Karen Millen) or -25% (boohoo, PLT)',
    'Saving style per fascia: Debenhams plain red 24px · boohoo pill 14px red on #FDE8E8, 0 8px, r4, 30 tall, was 20px light grey · PLT plain 14px light, whole block 16px · Karen Millen outlined box 12px black, 1px black, 30 tall',
    'PLP card (.price-blk--card): 14/21 (boohoo mobile 12/18, PLT 12/18) · 8px between prices · -25% · code line gap 1 (4px) below, wraps on a 171 card',
    'Rail (.price-blk--rail): now + was, one line · Added to bag (.price-blk--drawer): 12/18, both ink · Basket (.price-blk--line): 16/24 (PLT 12/18), now red + was',
    'Live DOM: data-test-id product-price-current · product-max-price-was · product-price-saving · price-badge (PDP) / price-badge-ct-card (card). Not on live today: price ranges / From, quick add on cards'],
  variants:(()=>{
    const CODE={def:['£23.43 with code FASHION'],boohoo:['Extra 10% Off, with code: EXTRA'],plt:['£37.12 with code TREATME'],karenmillen:['get in time for the weekend* - £2.99 next day delivery','extra 10% off* - code: KMEXTRA10']};
    const SETS=[['def',{not:['boohoo','plt','karenmillen']}],['boohoo',{only:['boohoo']}],['plt',{only:['plt']}],['karenmillen',{only:['karenmillen']}]];
    const ROW=(o={})=>o.full?'<div class="price"><span class="now">£69.00</span></div>':`<div class="price"><span class="now sale">£26.03</span><span class="was">£34.70</span>${o.save===false?'':'<span class="save" data-pct="25"></span>'}</div>`;
    const BLK=(k,o={})=>`<div class="price-blk price-blk--${k}${o.m?' m':''}">${ROW(o)}${(o.code||[]).map(c=>`<div class="price-code">${c}</div>`).join('')}</div>`;
    const per=(f)=>SETS.map(([k,lim])=>Object.assign(f(CODE[k],k),lim));
    const PDPW=h=>`<div style="width:358px;font-family:var(--font-family-base)"><div style="font-size:16px;font-weight:var(--w-strong);line-height:24px">Busem</div><div style="font-size:16px;line-height:24px;margin-bottom:12px">Sleeveless Fitted Midi Dress With Tie Detail</div>${h}</div>`;
    const LINE=(h,o={})=>`<div class="bag-item" style="width:${o.w||358}px">${PH(o.iw||99,o.ih||148)}<div class="info"><div class="b">Busem</div><div class="n">Sleeveless Fitted Midi Dress With Tie Detail</div>${o.v?'<div class="v">S / Navy</div>':''}${h}</div></div>`;
    return [
      ...per((c)=>({name:'PDP · sale + code', col:'pdp', html:PDPW(BLK('pdp',{code:c}))})),
      {name:'PDP · sale', col:'pdp', html:PDPW(BLK('pdp'))},
      {name:'PDP · full price', col:'pdp', html:PDPW(BLK('pdp',{full:1})), not:['karenmillen']},
      {name:'PDP · full price', col:'pdp', html:PDPW(BLK('pdp',{full:1,code:['*This product is not included in onsite promotions']})), only:['karenmillen']},
      ...per((c)=>({name:'PLP card · desktop · sale + code', html:CARD({w:220,price:BLK('card',{code:c})})})),
      ...per((c)=>({name:'PLP card · mobile 171 · sale + code', html:CARD({w:171,price:BLK('card',{code:c,m:1})})})),
      {name:'PLP card · sale', html:CARD({w:220,price:BLK('card')})},
      {name:'PLP card · full price', html:CARD({w:220,price:BLK('card',{full:1})})},
      {name:'Rail card · recommendations, complete the look', html:CARD({w:160,price:BLK('rail',{save:false})})},
      ...per((c)=>({name:'Quick add modal (slide up) · DS spec — no quick add on live cards yet', html:'<div class="mdl mdl--up" style="width:390px;box-shadow:var(--shadow-float)"><div class="modal-hd"><div class="mt"><span>Quick add</span></div><button class="modal-x" aria-label="Close"></button></div><div class="mdl-bd">'+LINE(BLK('line',{code:c}),{w:342})+'<div class="sizes"><div class="sizes-head"><span>Size: <b>Select a size</b></span><span class="guide">Size guide</span></div><div class="set"><button class="sz">S</button><button class="sz">M</button><button class="sz">L</button><button class="sz">XL</button></div></div></div><div class="mdl-ft"><button class="bd pri">Add to bag</button></div></div>'})),
      {name:'Added to bag · now + was, 12px, ink', html:LINE(BLK('drawer',{save:false}),{v:1,w:420,iw:100,ih:150})},
      {name:'Basket line · now + was, 16px', html:LINE(BLK('line',{save:false}))},
      ...per((c)=>({name:'Small (chat, agent rails) · 13px', html:'<div style="width:160px">'+BLK('sm',{code:c})+'</div>'}))
    ];})(),
  dev:{title:'Molecules/Product Price', status:'match', note:'Live = dev: one component (product-price-current · product-max-price-was · product-price-saving · price-badge / price-badge-ct-card), themed per fascia. Dev: wasPrice · percentageSaving · priceSavingInline · showFromPriceRange · priceMatch label. Live bug: added-to-bag now price has no mr-2 so the prices touch.'} },

{ slug:'size-selector', name:'Size selector', group:'Product', tier:'molecule', css:'.sizes', figma:'aIHmkCaTy9c5EWOxAGw0So · 8942-6191 · Size Button 9000-3082 · bell 11190:23531 · OOS states: Coming Soon - Back in Stock 2ddMaYHCL1pPI00dqPdmNt · 344-357437',
  summary:'60×50 size buttons. Out of stock has two states: just out of stock (greyed), or out of stock with the notification bell, so the customer can ask to be told when it is back in stock.',
  use:['PDP, quick add, set builder.','Out of stock + bell (.sz.oos.oos--notify) when back-in-stock alerts are live for that size; plain out of stock (.sz.oos) when they are not.'],
  avoid:['Hiding out-of-stock sizes — show them so the customer can ask to be notified.','The info "i" icon on an out-of-stock size — the notify state is always the bell (icons-notification.svg).'],
  anatomy:['Header: Size: M · Size guide link','Buttons 60×50 · 1px #B5B5B5 border, 4px radius, light 16px · hover = black border · selected = the same 1px border in black + bold label (Figma 9000:3082, never 2px)','Out of stock: .oos (greyed, optional .oos--strike) · .oos.oos--notify adds the 14px bell top-right (3px inset) → notify me'],
  variants:[{name:'Default', html:'<div class="sizes" style="width:360px"><div class="sizes-head"><span>Size: <b>M</b></span><span class="guide">Size guide</span></div><div class="set"><button class="sz">XS</button><button class="sz">S</button><button class="sz on">M</button><button class="sz oos oos--strike">L</button><button class="sz oos oos--notify" aria-label="XL, out of stock, notify me">XL'+ICON('notification','class="bell" alt="Notify me" onerror="this.remove()"')+'</button><button class="sz">One size</button></div></div>'},
    {name:'Out of stock', html:'<div class="sizes" style="width:360px"><div class="sizes-head"><span>Select a size:</span></div><div class="set"><button class="sz">8</button><button class="sz oos" aria-disabled="true">10</button><button class="sz oos" aria-disabled="true">12</button><button class="sz">14</button><button class="sz">16</button></div></div>'},
    {name:'Out of stock · notify me', html:'<div class="sizes" style="width:360px"><div class="sizes-head"><span>Select a size:</span></div><div class="set">'+['8','10','12','14','16'].map(z=>'<button class="sz oos oos--notify" aria-label="'+z+', out of stock, notify me">'+z+ICON('notification','class="bell" alt="Notify me" onerror="this.remove()"')+'</button>').join('')+'</div></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook as a component (lives in the PDP). Promote.'} },

{ slug:'colour-swatches', name:'Colour swatches', group:'Product', tier:'atom', css:'.cswatch · .pc-swatch', figma:'aIHmkCaTy9c5EWOxAGw0So · 921-7470',
  summary:'Two scales: 20px colour chips on the card, 60×89 image swatches on the PDP. Selection is a black keyline with a white inset.',
  use:['Colourways on card and PDP.'],
  avoid:['Rounding the PDP image swatches.'],
  anatomy:['Card: 20px, 4px radius, Grey 2 border, +N overflow','PDP: 60×89 image, selected = 1px black + white inset'],
  variants:[{name:'Card chips', html:'<div class="pc-swatches" style="font-family:var(--font-family-base)"><span class="set"><span class="pc-swatch on"><i style="background:#B97A57"></i></span><span class="pc-swatch"><i style="background:#2B2B2B"></i></span><span class="pc-swatch"><i style="background:#8FA3B8"></i></span><span class="pc-swatch"><i style="background:#D9C7B8"></i></span></span><span class="pc-more">+5</span></div>'}, {name:'PDP image swatches', html:'<div class="cswatches"><button class="cswatch on">'+PH(60,89,160)+'</button><button class="cswatch">'+PH(60,89,200)+'</button><button class="cswatch">'+PH(60,89,240)+'</button></div>'}],
  dev:{title:'—', status:'partial', note:'Dev renders colour variants inside CT Product Card (colourVariants, hideColourSwatches). No standalone atom.'} },

{ slug:'social-proof', name:'Social proof', group:'Product', tier:'atom', css:'.pc-taggstar · .sp-pdp · .sp-bag', figma:'Taggstar 00YKWCHwTarfwWZ1HayFUI · 3483-23105 (PLP card 9196-26858 · PDP 3553-78608 / 3574-156761 · Bag 3510-4230) · message library V2 3001-3762',
  summary:'Taggstar: one social-proof message per product, styled for where it sits — a one-line chip on the PLP card, a dismissible two-line card on the PDP, a line in the bag. Grey 1 ground and black text by default; the background is set per fascia (--sp-bg, text flips to white on dark) and an icon for the message type can be switched on per fascia. Drop-in for pages without the DS: assets/ds/taggstar.js. Prototype: projects/taggstar/.',
  use:['PLP card: under the image and Add button, above the brand — "Selling Fast! 79 Sold".','PDP: on the main image (mobile, 12px from left and bottom) or pinned to the bottom of the browser window (desktop) — "Selling Fast!" / "Last sold 32 minutes ago", with a close.','Bag: in the line item under its details — "Sold X times since your last visit X days ago", only for a returning visit.'],
  avoid:['Picking an icon for its look — the icon follows the message type (cart purchases, bag added to bag, eye views, flame trending, clock recent sale, trophy best seller).','Colouring the icon on its own — it takes the text colour.','More than one message per product per placement.','Showing the PDP message again once it has been closed in the session.','Pure white on PLT — warm white #FFFDF7.','A background that leaves the text under 4.5:1.'],
  anatomy:['Ground --surface-media (Grey 1 #F2F2F2, PLT sand) · text --text-primary · radius --radius-default · 3.5px backdrop blur','PLP: 12px, claim strong + count regular on one line · padding gap 1 / gap 2 (4px 8px) · hugs its text','PDP: claim strong over context regular, gap 2px · padding 8px 12px · gap 8 (32px) to the 12px close · shadow 0 0 8.7 22% black · 12px on mobile, 14px on desktop','Bag: full width of the line info · padding gap 2 (8px) · 12px regular, the count strong','Logic: PLP shows the sold count · PDP shows the most recent purchase (minutes / hours ago) and closes on X · bag compares against the last visit','Icon (optional, per fascia): .sp-ico before the text — PLP 14px gap 1 (4px) · PDP 24px gap 2 (8px) · Bag 20px gap 1 (4px). Live 16 Oct: Debenhams line icons (eye, bag) on a black 60% card, boohoo animated eyes / heart on white, PLT none'],
  variants:[
    {name:'PLP card', html:CARD({w:170,qa:'button',taggstar:true})},
    {name:'PLP · chip', html:'<div class="pc-taggstar" style="font-family:var(--font-family-base)"><b>Selling Fast!</b><span>79 Sold</span></div>'},
    {name:'PLP · chip · icon', html:'<div class="pc-taggstar" style="font-family:var(--font-family-base)"><img class="sp-ico" src="assets/ds/icons/lib/icons-cart.svg" alt=""><b>Selling Fast!</b><span>79 Sold</span></div>'},
    {name:'PDP · icon · fascia background', html:'<div class="sp-pdp" style="--sp-bg:rgba(0,0,0,.6);--sp-fg:#FFF"><div class="in"><img class="sp-ico" src="assets/ds/icons/lib/icons-show.svg" alt="" style="filter:invert(1)"><div class="tx"><b>Popular!</b><span>210 others viewed in the last 24 hours</span></div></div><button class="sp-x" aria-label="Dismiss" style="filter:invert(1)"></button></div>'},
    {name:'Bag line · icon', html:'<div class="sp-bag" style="width:358px"><img class="sp-ico" src="assets/ds/icons/lib/icons-time.svg" alt=""><span>Selling Fast! <b>Last sold 32 minutes ago</b></span></div>'},
    {name:'PDP · mobile, on the main image', html:'<div style="position:relative;width:358px;height:440px;background:linear-gradient(165deg,var(--brand-light-3),var(--brand-light-1))"><div class="sp-pdp sp-on-img"><div class="tx"><b>Selling Fast!</b><span>Last sold 32 minutes ago</span></div><button class="sp-x" aria-label="Dismiss"></button></div></div>'},
    {name:'PDP · desktop, pinned to the bottom of the browser window', html:'<div class="sp-pdp sp-pdp--lg"><div class="tx"><b>Selling Fast!</b><span>Last sold 32 minutes ago</span></div><button class="sp-x" aria-label="Dismiss"></button></div>'},
    {name:'Bag line', html:'<div class="bag-item" style="width:358px">'+PH(99,148)+'<div class="info"><div class="b">boohooMAN</div><div class="n">Oversized Revere Pleated Shirt &amp; Short Set</div><div class="v">Size 10 · Blush</div><div class="p"><span class="sale">£27.50</span><s>£55.00</s></div><div class="sp-bag">Sold <b>X times</b> since your last visit X days ago</div></div></div>'}],
  dev:{title:'Atoms/Social Proof', status:'match', note:'Dev: location PLP / PDP / CART, dismissible, per-fascia --social-proof-* tokens (Debenhams black 60% + blur on PDP; boohoo pink; PLT peach). Plus Molecules/Product Social Proof and Basket Social Proof.'} },

{ slug:'ratings', name:'Ratings', group:'Product', tier:'atom', css:'.pc-stars',
  summary:'Five 12px stars and a count.',
  use:['Cards and PDP header.'],
  avoid:['Stars without the count.'],
  anatomy:['12px stars, gap 0.5 (2px) between · count in --text-secondary'],
  variants:[{name:'Default', html:'<div class="pc-stars" style="font-family:var(--font-family-base)"><span class="set"><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-fill.svg" alt=""><img src="assets/ds/icons/star-half.svg" alt=""><img src="assets/ds/icons/star-outline.svg" alt=""></span><span>(9)</span></div>'}],
  dev:{title:'—', status:'partial', note:'Inside CT Product Card (showRatings, averageRating, totalReviewCount).'} },

/* ───────────── PDP MODULES ───────────── */
{ slug:'accordion', name:'Accordion', group:'PDP modules', tier:'molecule', css:'.acc', figma:'core-pdp C16',
  summary:'Title row with a chevron; body reveals beneath. Divider between items, none above the first.',
  use:['PDP details, delivery and returns, footer link groups on mobile.'],
  avoid:['Nesting accordions.'],
  anatomy:['Header 48px · 16px title · chevron rotates · body 14/20'],
  variants:[{name:'Set · PDP info rows (master PDP)', html:'<div class="acc-set" style="width:358px">'+[['At a Glance','<ul class="glance"><li><i>✓</i>Delicate lace bodice</li><li><i>✓</i>Regular fit</li></ul>',1],['Description','',0],['Product Details &amp; Care','',0],['Delivery','',0],['Returns','',0],['Manufacturer','',0]].map(r=>'<div class="acc'+(r[2]?' open':'')+'"><button class="acc-h">'+r[0]+'<img src="assets/ds/icons/lib/icons-down.svg" alt=""></button><div class="acc-b">'+r[1]+'</div></div>').join('')+'</div>'},{name:'Open + closed', html:'<div style="width:340px"><div class="acc open"><button class="acc-h">Description'+ICON('down-arrow','onerror="this.remove()"')+'</button><div class="acc-b">Long sleeve lace and pleated midi shirt dress in pink. Regular fit, concealed zip.</div></div><div class="hr"></div><div class="acc"><button class="acc-h">Delivery &amp; returns'+ICON('down-arrow','onerror="this.remove()"')+'</button><div class="acc-b">Free returns within 28 days.</div></div></div>'}],
  dev:{title:'Molecules/Accordion', status:'match', note:'Dev: expandOnDesktop · defaultExpandState · isFacetFilter · collapseAll. Organisms/Product Accordion is the PDP flavour.'} },

{ slug:'section-rail', name:'Section header + rail', group:'PDP modules', tier:'organism', css:'.sec-head · .prail', figma:'core-pdp C19',
  summary:'A 20px title with a View all link, then a horizontal rail of product cards.',
  use:['Recommendations, recently viewed, complete the look.'],
  avoid:['A rail with fewer than three items — use a grid.'],
  anatomy:['Title 20/22 --w-mid · link 14px right · rail gap 4, cards 165px'],
  variants:[{name:'Default', html:'<div style="width:520px;display:flex;flex-direction:column;gap:12px;font-family:var(--font-family-base)"><div class="sec-head"><h3>You may also like</h3><a href="#">View all</a></div><div class="prail">'+CARD({w:165,sale:false})+CARD({w:165})+CARD({w:165,sale:false})+'</div></div>'}],
  dev:{title:'Molecules/PersonalisedCarousel', status:'partial', note:'Dev carousel has controls, brand / category / search-term feeds. Ours fixes the header + spacing.'} },

{ slug:'usp-box', name:'USP box', group:'PDP modules', tier:'molecule', css:'.usp-box', figma:'aIHmkCaTy9c5EWOxAGw0So · 3619-10541',
  summary:'Delivery and returns rows with an icon, title and sub line.',
  use:['PDP under the add-to-bag; bag sidebar.'],
  avoid:['More than three rows.'],
  anatomy:['24px icon centred to the row · 14px strong title · 12px sub'],
  variants:[{name:'Default', html:'<div class="usp-box" style="width:320px"><div class="r">'+ICON('delivery-fast')+'<div><div class="t">Next day delivery</div><div class="s">Order by midnight</div></div></div><div class="r">'+ICON('quick-add')+'<div><div class="t">Free returns</div><div class="s">28 days, in store or by post</div></div></div></div>'}],
  dev:{title:'Molecules/USP Item', status:'partial', note:'Dev USP Item is the header banner cell (label · href · dropdown copy). The PDP box is page-local in dev.'} },

{ slug:'bnpl', name:'BNPL', group:'PDP modules', tier:'molecule', css:'.bnpl', figma:'aIHmkCaTy9c5EWOxAGw0So · 2969-10048',
  summary:'Provider chips plus the “pay in 3” line and legal small print.',
  use:['PDP under the price; bag summary.'],
  avoid:['Provider logos in brand colours.'],
  anatomy:['Chip row (Pay+, Klarna, Clearpay, PayPal) · 14px terms · 12px legal with a strong See more'],
  variants:[{name:'Default', html:'<div class="bnpl" style="width:340px"><div class="chips"><span class="pc pc--payplus"><img src="assets/ds/icons/payments/bnpl-payplus-glyph.svg" alt="Pay+"></span><span class="pc pc--klarna"><img src="assets/ds/icons/payments/bnpl-klarna-word.svg" alt="Klarna"></span><span class="pc pc--clearpay"><img src="assets/ds/icons/payments/clearpay-lockup-mini.svg" alt="Clearpay"></span><span class="pc pc--paypal"><img src="assets/ds/icons/payments/bnpl-paypal-logo.svg" alt="PayPal"></span></div><div class="terms">Pay in 3 interest-free payments of £23.33</div><div class="small">18+, T&amp;C apply. Credit subject to status. <b>See more</b></div></div>'}],
  dev:{title:'Molecules/BNPL Banner', status:'match', note:'Dev: label · numberOfPayments · min/max price · paymentLogo · providerLink.'} },

{ slug:'threshold', name:'Free-delivery threshold', group:'PDP modules', tier:'molecule', css:'.thresh', figma:'BBz64OeCbe5TBmYKbCxvCp · 38-35751',
  summary:'“Spend £X more” progress bar that turns into a tick when the threshold is met.',
  use:['Bag, mini bag, PDP.'],
  avoid:['Showing it when free delivery is not on offer.'],
  anatomy:['14px line with strong amount · 4px track, fill in --surface-action · ok state = tick + message'],
  variants:[{name:'In progress', html:'<div class="thresh" style="width:320px"><span>Spend <b>£12.01</b> more for free delivery</span><div class="track"><div class="fill" style="width:60%"></div></div></div>'}, {name:'Reached', html:'<div class="thresh thresh--ok" style="width:320px"><span class="tick"></span><span>Congratulations, you’re eligible for free delivery</span></div>'}],
  dev:{title:'Molecules/Delivery Progress', status:'partial', note:'Dev Delivery Progress is a step indicator (step: number). The threshold bar lives in the basket page.'} },

{ slug:'delivery-grid', name:'Delivery grid', group:'PDP modules', tier:'organism', css:'.dgrid · .dgrid-rows--pr / -tabs / --line · .dgrid-row · .dgrid-badge · .dgrid-ret · .dgrid-bulky · modal .dopts-seg / -list / -row / -hr / -grp / -note (+ assets/ds/delivery.js)', figma:'Gifting PIh1ikzvYNH1FR4arKJbe4 · 209-294935 / 209-295333 (modal, Paul Dossis) · Demi Adesanya tabbed mockup · live PDP Delivery Methods 16 Oct 2026',
  summary:'The PDP “Delivery Methods” box: the fastest and cheapest ways to get the item (from Dynamo, the same methods checkout serves), a See more link into the Delivery Options modal, and the returns line. Three layouts — live sentences, Delivery / Click & Collect tabs, a one-liner.',
  use:['Drop-in: load assets/ds/delivery.js, put DG_delivery.grid(o) under Add to bag and DG_delivery.wire(document,o,openModal); See more opens DG_delivery.modal(o,tab) over the page (.mdl--sm desktop · .mdl--alert mobile web · .mdl--up app).','Phase 1 logic for everyone: fastest first, cheapest last; when both come back as click & collect add the fastest home delivery (James’s PR). Modal sorted price low → high, as checkout.','Bulky items: DG_delivery.bulky() straight under the price (upfront) and the caveat repeated in the box and the modal.'],
  avoid:['Static delivery copy (the old Strappy USP box) next to it — it duplicates and contradicts the live methods.','Two “Fastest” badges side by side without saying which is home delivery.','“Order by 12AM” — write “Order by midnight”.','A second modal for caveats: they sit in the one Delivery Options modal.'],
  anatomy:['Box: 1px --border-subtle, radius --radius-default, padding gap 4 (16px), gap 4 (16px) · title 14 medium','Badge beside the arrival line: 22px, 12 semibold, --radius-default · Fastest red (--text-error on --error-bg) · Cheapest grey (--text-secondary on --surface-sunken) · programme badge (Premier, Unlimited, Royalty) inverts','Tabs top right on the title line: 12px, 2px underline on the active tab · A rows (PR): arrival strong + badge / method regular | price strong, centred, no keylines · B rows: when + badge / method 14 light / cut-off 12 secondary | price 14 medium, was struck under','Returns: 24px calendar, 14 / 12 copy above a keyline','Modal: DS .mdl · .dopts-seg 44px toggle, active --surface-action · rows 16px name strong / “Arrives by …” | was struck + price strong, gap 4 (16px) · NI after a keyline · 12px footnote'],
  variants:(()=>{const D=root.DG_delivery||(typeof require!=='undefined'?(require('./delivery.js'),globalThis.DG_delivery):null);if(!D)return [];
    const T=new Date('2026-10-16T10:00:00'),o=x=>Object.assign({today:T,pr:true,prog:'Premier',ni:'split',modal:'toggle',cut:'midnight'},x);
    const box=(x,w)=>'<div style="width:'+(w||358)+'px">'+D.grid(o(x))+'</div>';
    const mdl=(x,tab)=>D.modal(o(x),tab).replace(/^[\s\S]*?<div class="mdl /,'<div style="width:358px;max-width:100%" class="mdl ').replace(/<\/div>\s*$/,'');
    return [{name:'A · James’s PR (two C&C → third home row)', col:'pdp', html:box({layout:'list',scen:'cc'})},
      {name:'B · Delivery / Click & Collect tabs', col:'pdp', html:box({layout:'tabs'})},
      {name:'B · Premier customer', col:'pdp', html:box({layout:'tabs',premier:true})},
      {name:'C · one-liner', col:'pdp', html:box({layout:'line',known:true,pc:'M4 7BB'})},
      {name:'Bulky item', col:'pdp', html:'<div style="width:358px;display:flex;flex-direction:column;gap:16px">'+D.bulky()+D.grid(o({layout:'tabs',scen:'bulky',more2:'show'}))+'</div>'},
      {name:'Modal · Home Delivery', col:'modal', html:mdl({},'home')},
      {name:'Modal · Collect Nearby', col:'modal', html:mdl({},'collect')},
      {name:'Modal · one list, sectioned', col:'modal', html:mdl({modal:'list'},'home')}];})(),
  dev:{title:'—', status:'ours', note:'New 16 Oct 2026 (PDP delivery grid prototype). Live PDP renders the methods from Dynamo; this is the agreed front end.'} },
{ slug:'pdp-ctas', name:'PDP buy buttons', group:'PDP modules', tier:'molecule', css:'.pdp-ctas · .bd.pri · .pay--paypal (+ .pp-co) · .pay--apple', figma:'live PDP (Debenhams, 12 Oct 2026) · Shopping agent PDP',
  summary:'Every PDP buys with three full-width buttons stacked in this order: Add to bag, PayPal Checkout, Apple Pay.',
  use:['Directly under the size selector on every PDP, every fascia, web and app.'],
  avoid:['Any other order, side-by-side wallets, or dropping a wallet.','Brand colours on the wallet buttons — PayPal is always yellow, Apple Pay always black.'],
  anatomy:['Column, gap 2 (8px), each button full width','Add to bag = .bd.pri (brand primary) · PayPal = wordmark + “Checkout” 20px #2C2E2F · Apple Pay = black, 22px mark'],
  variants:[{name:'Default', col:'pdp', html:'<div class="pdp-ctas" style="width:358px"><button class="bd pri">Add to bag</button><button class="pay pay--paypal"><img src="assets/ds/icons/payments/paypal-wordmark.svg" alt="PayPal"><span class="pp-co">Checkout</span></button><button class="pay pay--apple"><img src="assets/ds/icons/payments/applepay-onblack.svg" alt="Apple Pay"></button></div>'}],
  dev:{title:'—', status:'ours', note:'Rule from Jake, 16 Oct 2026. In templates/pdp.html.'} },
{ slug:'ai-prompts', name:'Google PDP prompts', group:'PDP modules', tier:'molecule', css:'.ai-prompts · .ai-prompts-hd · .prompts-container[data-dir] · .prompt-item · .prompt-link (+ assets/ds/ai-prompts.js)', figma:'— (Google Cloud <google-ai-prompts>; Shopping agent prototype)',
  summary:'The Google shopping agent’s pre-baked questions on the PDP (“Does this fit true to size?”), each sending a query to the agent, plus an outlined “Ask anything”. Mirrors the <google-ai-prompts product-id direction> web component.',
  use:['Every PDP, straight under the buy buttons. Drop-in: DG_aiPromptsHTML(brand,{prompts,dir,head,ask,sku}).','Column (as the dev build) by default; row-wrap where the space is wide and the prompts short.'],
  avoid:['A solid outline on the prompt chips — shadow only; the outline is for “Ask anything”.','Inventing an agent name: only Debenhams has one (Deb); others read “Ask AI”.'],
  anatomy:['Heading 16 semibold + 18px AI icon · gap 3 (12px) to the chips','Chips .ai-pill--soft --wrap, 16px AI icon, gap 2 (8px) · last chip .ai-pill--outline'],
  variants:(()=>{const f=root.DG_aiPromptsHTML||(typeof require!=='undefined'?(require('./ai-prompts.js'),globalThis.DG_aiPromptsHTML):null);if(!f)return [];
    return [{name:'Column (dev build)', col:'pdp', html:'<div style="width:358px">'+f('debenhams',{})+'</div>'},{name:'Row · wrap', col:'pdp', html:'<div style="width:480px">'+f('debenhams',{dir:'row'})+'</div>'}];})(),
  dev:{title:'google-ai-prompts', status:'partial', note:'Google’s web component renders this; CSS custom-property names unconfirmed (docs 404 without allow-listing). Promoted from projects/shopping-agent 16 Oct 2026.'} },
{ slug:'deliver-plus', notOn:['principles','trainingdept','debenhamsoutlet','brandroom'], /* live-PDP check 10 Sep 2026 + Jake: Outlet off */ name:'Deliver+', group:'PDP modules', tier:'molecule', css:'.dplus · .dplus-co · .dplus-bag · .dplus-bag--modal', figma:'CQIe2e2c0iagD1T9WjdYsx · Latest Components 28.08.26 (3209-10203 …) · checkout banner = Small New 3516-156668 (Debs) / 3522-* per fascia, 08 Oct 2026',
  summary:'The SEEL Deliver+ set, exact to the 28 Aug 2026 designs — PDP banner, the PDP + checkout modal, bag banner and checkout banner with the opt-in checkbox — each in mobile and desktop form, every fascia on its own ground, ink, link colour and lockup.',
  use:['PDP: under the buy buttons, above the USP box; Learn More opens the modal.','Modal: the bag module as a dialog — 388 mobile, 480 desktop, close top-right.','Bag: the full benefits module, mobile stacked / desktop five-up.','Checkout (new, 08 Oct 2026): no ground — lockup left, 24px checkbox right, one line of copy with the price strong, Learn more in the fascia link colour. Each fascia uses its own font and lockup.'],
  avoid:['Restyling the lockup — it is the brand\'s own vector, sized as designed.','Changing ground or link colour per instance: --dplus-* carries the design values per fascia.','Adding benefits: the five are contractual copy.'],
  anatomy:['Ground --dplus-bg · ink --dplus-fg · link --dplus-link · checkbox --dplus-check · radius --dplus-radius (4px group brands, 0 elsewhere)','Lockup at native size · title 14 strong · USP rows 12 regular with 16px tick, gap 2 (8px) between','Learn More 12 strong in the link colour · italic testimonial above a 25% rule','Bag: 48px white pucks (0 0 14px −4px 18%), 14 strong + 12 regular rows, Seel + Trustpilot foot'],
  variants:[
    {name:'PDP banner · mobile', col:'pdp', html:'<div class="dplus" style="width:357px"><div class="col">'+(root.DG_DPLUS_LOGOS||'')+'<div class="h">Peace of mind, guaranteed</div><ul><li>Free &amp; simple resale - recover value and give your items a second life</li><li>+14-day return extension</li><li>£5/day late delivery compensation</li><li>Full order coverage (lost, stolen, damaged) with instant payout on eligible claims</li></ul><span class="more">Learn More</span><div class="foot">“Refund was approved and back in my account the same day.” — Deliver+ customer</div></div></div>'},
    {name:'PDP banner · desktop', col:'pdp', html:'<div class="dplus" style="width:480px"><div class="col">'+(root.DG_DPLUS_LOGOS||'')+'<div class="h">Peace of mind, guaranteed</div><ul><li>Free &amp; simple resale - recover value and give your items a second life</li><li>+14-day return extension</li><li>£5/day late delivery compensation</li><li>Full order coverage (lost, stolen, damaged) with instant payout on eligible claims</li></ul><span class="more">Learn More</span><div class="foot">“Refund was approved and back in my account the same day.” — Deliver+ customer</div></div></div>'},
    {name:'PDP + checkout modal · mobile', col:'modal', html:'<div class="dplus-bag dplus-bag--modal" style="width:388px"><div class="band"><button class="x" aria-label="Close"></button>'+(root.DG_DPLUS_LOGOS||'')+'<p>Shop with confidence. Protected delivery, rapid returns and dedicated support, available with any order at checkout.</p></div><div class="body">'+[['dp-resale','Free &amp; simple resale - recover value and give your items a second life','Resell directly from your order, no listing fees'],['dp-calendar','35-day extended returns','Extra 14 days on top of our standard 21-day window.'],['dp-compensation','£5 per day late delivery compensation','Up to £25 if your order arrives late'],['dp-cover','Full order coverage with 48hr payout','Lost, stolen, or damaged - eligible claims are paid within 48 hours.'],['dp-support','Instant 24/7 support','Dedicated online help when you need it.']].map(r=>'<div class="row"><span class="puck"><img src="assets/ds/icons/seel/'+r[0]+'.png" alt=""></span><div><p class="t">'+r[1]+'</p><p class="s">'+r[2]+'</p></div></div>').join('')+'</div><div class="foot"><div class="tp"><img src="assets/ds/icons/seel/seel-logo.png" alt="Seel"><span class="r">Rated <b>4.4</b><br>out of 5 stars</span><span class="r"><b>7k+ Reviews</b><br><img src="assets/ds/icons/seel/trustpilot-stars.png" alt="" style="height:12px"></span><img src="assets/ds/icons/seel/trustpilot-logo.png" alt="Trustpilot"></div><div class="powered">Powered by <img src="assets/ds/icons/seel/seel-logo.png" alt="seel"> - your trusted shopper protection partner</div></div></div>'},
    {name:'PDP + checkout modal · desktop', col:'modal', html:'<div class="dplus-bag dplus-bag--modal" style="width:480px"><div class="band"><button class="x" aria-label="Close"></button>'+(root.DG_DPLUS_LOGOS||'')+'<p>Shop with confidence. Protected delivery, rapid returns and dedicated support, available with any order at checkout.</p></div><div class="body">'+[['dp-resale','Free &amp; simple resale - recover value and give your items a second life','Resell directly from your order, no listing fees'],['dp-calendar','35-day extended returns','Extra 14 days on top of our standard 21-day window.'],['dp-compensation','£5 per day late delivery compensation','Up to £25 if your order arrives late'],['dp-cover','Full order coverage with 48hr payout','Lost, stolen, or damaged - eligible claims are paid within 48 hours.'],['dp-support','Instant 24/7 support','Dedicated online help when you need it.']].map(r=>'<div class="row"><span class="puck"><img src="assets/ds/icons/seel/'+r[0]+'.png" alt=""></span><div><p class="t">'+r[1]+'</p><p class="s">'+r[2]+'</p></div></div>').join('')+'</div><div class="foot"><div class="tp"><img src="assets/ds/icons/seel/seel-logo.png" alt="Seel"><span class="r">Rated <b>4.4</b><br>out of 5 stars</span><span class="r"><b>7k+ Reviews</b><br><img src="assets/ds/icons/seel/trustpilot-stars.png" alt="" style="height:12px"></span><img src="assets/ds/icons/seel/trustpilot-logo.png" alt="Trustpilot"></div><div class="powered">Powered by <img src="assets/ds/icons/seel/seel-logo.png" alt="seel"> - your trusted shopper protection partner</div></div></div>'},
    {name:'Bag banner · mobile', col:'bag', html:'<div class="dplus-bag" style="width:357px"><div class="band">'+(root.DG_DPLUS_LOGOS||'')+'<p>Shop with confidence. Protected delivery, rapid returns and dedicated support, available with any order at checkout.</p></div><div class="body">'+[['dp-resale','Free &amp; simple resale - recover value and give your items a second life','Resell directly from your order, no listing fees'],['dp-calendar','35-day extended returns','Extra 14 days on top of our standard 21-day window.'],['dp-compensation','£5 per day late delivery compensation','Up to £25 if your order arrives late'],['dp-cover','Full order coverage with 48hr payout','Lost, stolen, or damaged - eligible claims are paid within 48 hours.'],['dp-support','Instant 24/7 support','Dedicated online help when you need it.']].map(r=>'<div class="row"><span class="puck"><img src="assets/ds/icons/seel/'+r[0]+'.png" alt=""></span><div><p class="t">'+r[1]+'</p><p class="s">'+r[2]+'</p></div></div>').join('')+'</div><div class="foot"><div class="tp"><img src="assets/ds/icons/seel/seel-logo.png" alt="Seel"><span class="r">Rated <b>4.4</b><br>out of 5 stars</span><span class="r"><b>7k+ Reviews</b><br><img src="assets/ds/icons/seel/trustpilot-stars.png" alt="" style="height:12px"></span><img src="assets/ds/icons/seel/trustpilot-logo.png" alt="Trustpilot"></div><div class="powered">Powered by <img src="assets/ds/icons/seel/seel-logo.png" alt="seel"> - your trusted shopper protection partner</div></div></div>'},
    {name:'Bag banner · desktop', col:'bag', html:'<div class="zfit"><div class="dplus-bag dplus-bag--desktop" style="width:900px"><div class="band">'+(root.DG_DPLUS_LOGOS||'')+'<p>Shop with confidence. Protected delivery, rapid returns and dedicated support, available with any order at checkout.</p></div><div class="body">'+[['dp-resale','NEW: Free &amp; simple resale','Resell directly from your order, no listing fees'],['dp-calendar','35-day extended returns','Extra 14 days on top of our standard 21-day window.'],['dp-compensation','£5 per day late delivery compensation','Up to £25 if your order arrives late'],['dp-cover','Full order coverage with 48hr payout','Lost, stolen, or damaged - eligible claims are paid within 48 hours.'],['dp-support','Instant support','Dedicated online help when you need it.']].map(r=>'<div class="row"><span class="puck"><img src="assets/ds/icons/seel/'+r[0]+'.png" alt=""></span><div><p class="t">'+r[1]+'</p><p class="s">'+r[2]+'</p></div></div>').join('')+'</div><div class="foot"><div class="tp"><img src="assets/ds/icons/seel/seel-logo.png" alt="Seel"><span class="r">Rated <b>4.4</b><br>out of 5 stars</span><span class="r"><b>7k+ Reviews</b><br><img src="assets/ds/icons/seel/trustpilot-stars.png" alt="" style="height:12px"></span><img src="assets/ds/icons/seel/trustpilot-logo.png" alt="Trustpilot"></div><div class="powered">Powered by <img src="assets/ds/icons/seel/seel-logo.png" alt="seel"> - your trusted shopper protection partner</div></div></div></div>'},
    {name:'Checkout banner · mobile', col:'checkout', html:'<div style="background:#FFF;padding:16px;width:390px;box-sizing:border-box"><div class="dplus-co"><div class="top">'+(root.DG_DPLUS_CO_LOGOS||'')+'<button class="chk on" aria-checked="true" aria-label="Deliver+ added"></button></div><p>Peace of mind, guaranteed <b>£3.90</b></p><span class="more">Learn more</span></div></div>'},
    {name:'Checkout banner · desktop', col:'checkout', html:'<div style="background:#FFF;padding:16px;width:512px;box-sizing:border-box"><div class="dplus-co"><div class="top">'+(root.DG_DPLUS_CO_LOGOS||'')+'<button class="chk on" aria-checked="true" aria-label="Deliver+ added"></button></div><p>Peace of mind, guaranteed <b>£3.90</b></p><span class="more">Learn more</span></div></div>'},
    {name:'Checkout banner · not added', col:'checkout', html:'<div style="background:#FFF;padding:16px;width:390px;box-sizing:border-box"><div class="dplus-co"><div class="top">'+(root.DG_DPLUS_CO_LOGOS||'')+'<button class="chk" aria-checked="false" aria-label="Add Deliver+"></button></div><p>Peace of mind, guaranteed <b>£3.90</b></p><span class="more">Learn more</span></div></div>'},
  ],
  dev:{title:'Molecules/Seel Banner',status:'partial',note:'Dev has a single Seel banner; our set adds the checkout opt-in and the bag module, all fifteen fascias skinned from the 28 Aug designs.'} },
{ slug:'at-a-glance', name:'At a glance', group:'PDP modules', tier:'molecule', css:'.glance',
  summary:'Ticked key facts, as a list or as chips.',
  use:['PDP above the description.'],
  avoid:['More than five items.'],
  anatomy:['Tick in --tickc · 14px label · chip variant on --surface-sunken'],
  variants:[{name:'Chips', html:'<ul class="glance glance--chips"><li><i>✓</i>Regular fit</li><li><i>✓</i>Machine washable</li><li><i>✓</i>Recycled polyester</li></ul>'}, {name:'Link chips', html:'<div class="linkchips" style="width:320px"><a href="#">Midi dresses</a><a href="#">Coast</a><a href="#">Occasion</a><a href="#">Pink dresses</a></div>'}],
  dev:{title:'—', status:'ours', note:'atAGlanceDefault icon exists in dev; no component.'} },

/* ───────────── NAVIGATION ───────────── */
{ slug:'header', name:'Header', group:'Navigation', tier:'organism', css:'.hd · .co-hd (+ assets/ds/header.js)', figma:'aIHmkCaTy9c5EWOxAGw0So · 3793-3545 · checkout header: live Debenhams checkout, 12 Oct 2026',
  summary:'The two site headers, each mobile and desktop. Main header: logo, search, account / wishlist / bag (+ country flag on desktop where the fascia runs one), category nav on desktop. Checkout header: logo and the lock + Secure checkout. Content is each fascia\'s live header (12 Oct 2026); USP banners sit underneath (see USP banner).',
  use:['Main header on every shopping page; checkout header from checkout onwards (no nav, no search — keep the customer in the funnel).','Drop in <header data-hd> (mobile), data-hd="desktop", or data-hd="checkout" + data-hd-device, and load header.js — it renders the fascia from html[data-brand].'],
  avoid:['Hand-built headers — logo, icons, nav and search copy come from header.js.','A heart on boohooMAN, Karen Millen or The Brand Room — their wishlist is the bookmark.','The main nav or search inside checkout.'],
  anatomy:['Mobile bar 56px: burger · logo fitted to 106 wide · search · account · wishlist · bag (count roundel) · padding gap 4 (16px) sides','Desktop bar 88px: logo 141 wide · grey pill search (PLT: underline) with camera + search · flag (Debenhams, boohoo, MAN, PLT, KM) · account · wishlist · bag · gap 10 (40px)','Desktop nav 40px on --nav-bg (Debenhams aqua, PLT black, others white) · 16px in the fascia\'s own case (MAN bold, PLT 12 light caps) · sale link red (KM / PLT bold) · Warehouse Outlet highlighted','Checkout 54px: logo (centred on desktop) · lock 20px + SECURE CHECKOUT 12/16 caps · padding gap 4 (16px) mobile, gap 20 (80px) desktop'],
  variants:(function(){const H=root.DG_headerHTML||(typeof require!=='undefined'?(()=>{try{require('./header.js');return globalThis.DG_headerHTML}catch(e){return null}})():null);
    if(!H)return [{name:'Mobile 390 (legacy — load header.js for per-fascia)', html:'<div class="hd" style="width:390px;border:1px solid var(--border-subtle)"><div class="hd-bar"><div class="hd-left"><button class="hd-burger" aria-label="Menu"><img src="assets/ds/icons/hamburger.svg" alt=""></button><img class="hd-logo brandlogo" src="assets/brands/debenhams.svg" alt=""></div><div class="hd-icons"><button aria-label="Search"><img src="assets/ds/icons/search.svg" alt=""></button><button aria-label="Account"><img src="assets/ds/icons/account.svg" alt=""></button><button aria-label="Wishlist"><img src="assets/ds/icons/heart-24.svg" alt=""></button><button class="hd-count" data-n="2" aria-label="Bag"><img src="assets/ds/icons/bag.svg" alt=""></button></div></div><div class="hd-usp">Free delivery over £50</div></div>'},{name:'Desktop (legacy — load header.js for per-fascia)', html:'<div class="hd" style="width:900px;max-width:100%;border:1px solid var(--border-subtle)"><div class="hd-bar hd-bar--desktop" style="--plp-margin:24px"><img class="hd-logo brandlogo" src="assets/brands/debenhams.svg" alt=""><div class="hd-search"><span>Search over 10,000+ brands...</span><span class="ics"><img src="assets/ds/icons/camera.svg" alt=""><img src="assets/ds/icons/search.svg" alt=""></span></div><div class="hd-icons"><button aria-label="Account"><img src="assets/ds/icons/account.svg" alt=""></button><button aria-label="Wishlist"><img src="assets/ds/icons/heart-24.svg" alt=""></button><button aria-label="Bag"><img src="assets/ds/icons/bag.svg" alt=""></button></div></div><nav class="hd-nav"><a class="sale" href="#">Sale</a><a href="#">New</a><a href="#">Women</a><a href="#">Men</a><a href="#">Kids</a><a href="#">Shoes</a><a href="#">Beauty</a><a href="#">Home</a><a href="#">Brands</a></nav><div class="hd-usp">Free delivery over £50</div></div>'}]; /* no header.js on the page: keep the old [mobile, desktop] markup in slots 0 / 1 so V('header',0|1) never breaks */
    const box=(k,d,w)=>'<header class="hd'+(k==='checkout'?' hd--checkout':'')+'" data-hd="'+(k==='checkout'?'checkout':d==='desktop'?'desktop':'')+'" data-hd-device="'+d+'" data-hd-brand="debenhams" style="width:'+w+'px;max-width:none">'+H('debenhams',k,d)+'</header>';
    const fit=h=>'<div class="ftr-fit" style="width:1440px">'+h+'</div>';
    return [{name:'Main · mobile 390', col:'main', html:box('main','mobile',390)},{name:'Main · desktop 1440', col:'maind', html:fit(box('main','desktop',1440))},
            {name:'Checkout · mobile 390', col:'co', html:box('checkout','mobile',390)},{name:'Checkout · desktop 1440', col:'cod', html:fit(box('checkout','desktop',1440))}]})(),
  dev:{title:'Organisms/Header', status:'match', note:'Dev Header = menu · searchPanel · logoSrc · displayMode · uspCollection; Primary Navigation (Desktop / Mobile) covers the panels. Molecules/Cart Link = our bag icon + count; Molecules/Search Link = the search trigger.'} },

{ slug:'usp-banner', name:'USP banner', group:'Navigation', tier:'molecule', css:'.hd-usp · .usp-row · .usp-code · .usp-cd · .usp-cav · .usp-stack · .usp-cells · .usp-strip (+ assets/ds/usp.js renderer · assets/ds/usp-live.js live rows per fascia)', figma:'aIHmkCaTy9c5EWOxAGw0So · 11982-37171 / 13005-165658',
  summary:'Message bars under the header. Five types — single, double, text + code, text + countdown, text + code + countdown — in the fascia colours or the Figma Grey 05 / Grey 1 / Black / Black-Red colourways. Height follows the content: one line is 23px on mobile. Up to two rows — row 1 usually rotates, row 2 is fixed; a rotating row holds the height of its tallest message so it never moves the page.',
  use:['Drop-in: load assets/ds/usp-live.js + usp.js and put <div data-usp-banners="plt"></div> under the header nav (add data-usp-pos="above" on a second slot above the logo row) — it renders that fascia\'s live rows exactly as the USP banner prototype (live copy, colours, rows, rotation, swipe). Options: data-usp-caveats="on" (off by default), data-usp-auto="0–5" (seconds per message, 5 default). Script API: DG_uspHTML(brandOrRows, {desk, caveats, auto}) → {above, below}.','Delivery promises, promo codes, countdowns — one message per bar, stacked bars for two messages.','Several messages in one row: .usp-stack on mobile (crossfades every 5s, fixed to the tallest message) and .usp-cells on desktop (laid across the bar as equal cells).','Any copy with a * must carry its caveat: the 10px caveat line attaches to the bottom of the same banner.','Caveat copy has no em dashes and no full stop — "*Selected lines only, exclusions apply".'],
  avoid:['Inline links such as "Shop now" — the whole bar is the click-through.','Two banners of the same tone stacked — one grey, one black, at most two.','A fixed height — a one-line banner is 23px on mobile, never 56–63.','A mid-dot or pipe separator (it is the 4px dash), or "Use Code:" (it is "Code: XYZ").','An asterisk without a caveat line.','A countdown inline with the text — it always sits on its own row.','A rotating row that changes height between messages (the page jumps) — use .usp-stack.','A fade that shows the page through the bar — the outgoing message stays solid underneath while the next fades in.','Em dashes or a closing full stop in the caveat.','A countdown that ignores its bar — on grey, cream, peach or any light bar the countdown is the bar ink (black); on a black bar it is white or red, set per row (cd) to match the fascia live (Debenhams and boohooMAN red, Karen Millen white).'],
  anatomy:['Bar: padding gap 1 (4px) top/bottom, gap 4 (16px) sides · 12/15 regular (14/18, gap 1.5 (6px) top/bottom at ≥1024)','Row: parts joined by the 4px dash, gap 2 (8px) each side; once the row wraps the dash becomes a line break (usp.js)','Code: "Code:" regular + value strong, value selects on tap','Countdown: own row gap 0.5 (2px) under · DD:HH:MM:SS strong tabular digits, 5px colon columns · red digits (#D33F3F) or white on a black bar, set per row (cd: red | white, .usp-cd-red), black digits on every other colour (.usp-light runs the bar ink)','Caveat: 10/10, gap 1 (4px) above, attached inside the banner','Colours: fascia --usp-a / --usp-b / --usp-top, or .usp--g05 / --g1 / --black / --red · desktop cells alternate --usp-a-bg / --usp-a-bg2','Rotation: .usp-stack data-rotate="5000" — 5s per message by default (data-rotate sets it), 700ms fade in over the solid outgoing message (usp.js); off under reduced motion · swipe left / right steps to the next / previous message and restarts the timer'],
  variants:[
    {name:"Single text", col:"Single text", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">Free delivery on orders over £50</span></span></div></div>"},
    {name:"Single text \u00b7 Black", col:"Single text", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--black\"><span class=\"usp-row\"><span class=\"usp-t\">Free delivery on orders over £50</span></span></div></div>"},
    {name:"Double text", col:"Double text", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">Free delivery over £50</span><span class=\"usp-sep\"></span><span class=\"usp-t\">Free returns</span></span></div></div>"},
    {name:"Double text \u00b7 Black", col:"Double text", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--black\"><span class=\"usp-row\"><span class=\"usp-t\">Free delivery over £50</span><span class=\"usp-sep\"></span><span class=\"usp-t\">Free returns</span></span></div></div>"},
    {name:"Text + code", col:"Text + code", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">Extra 20% off everything</span><span class=\"usp-sep\"></span><span class=\"usp-t\"><span class=\"usp-code\">Code: <b>FAST</b></span></span></span></div></div>"},
    {name:"Text + code \u00b7 Black", col:"Text + code", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--black\"><span class=\"usp-row\"><span class=\"usp-t\">Extra 20% off everything</span><span class=\"usp-sep\"></span><span class=\"usp-t\"><span class=\"usp-code\">Code: <b>FAST</b></span></span></span></div></div>"},
    {name:"Text + countdown", col:"Text + countdown", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">48% off for 48 hours</span></span><span class=\"usp-cd\" data-left=\"45261\"><b>00</b><i>:</i><b>12</b><i>:</i><b>34</b><i>:</i><b>21</b></span></div></div>"},
    {name:"Text + countdown \u00b7 Black", col:"Text + countdown", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--black\"><span class=\"usp-row\"><span class=\"usp-t\">48% off for 48 hours</span></span><span class=\"usp-cd\" data-left=\"45261\"><b>00</b><i>:</i><b>12</b><i>:</i><b>34</b><i>:</i><b>21</b></span></div></div>"},
    {name:"Text + countdown \u00b7 Black / Red", col:"Text + countdown", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--red\"><span class=\"usp-row\"><span class=\"usp-t\">48% off for 48 hours</span></span><span class=\"usp-cd\" data-left=\"45261\"><b>00</b><i>:</i><b>12</b><i>:</i><b>34</b><i>:</i><b>21</b></span></div></div>"},
    {name:"Text + code + countdown", col:"Text + code + countdown", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">Extra 20% off everything</span><span class=\"usp-sep\"></span><span class=\"usp-t\"><span class=\"usp-code\">Code: <b>FAST</b></span></span></span><span class=\"usp-cd\" data-left=\"45261\"><b>00</b><i>:</i><b>12</b><i>:</i><b>34</b><i>:</i><b>21</b></span></div></div>"},
    {name:"Text + code + countdown \u00b7 Black", col:"Text + code + countdown", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--black\"><span class=\"usp-row\"><span class=\"usp-t\">Extra 20% off everything</span><span class=\"usp-sep\"></span><span class=\"usp-t\"><span class=\"usp-code\">Code: <b>FAST</b></span></span></span><span class=\"usp-cd\" data-left=\"45261\"><b>00</b><i>:</i><b>12</b><i>:</i><b>34</b><i>:</i><b>21</b></span></div></div>"},
    {name:"Text + code + countdown \u00b7 Black / Red", col:"Text + code + countdown", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--red\"><span class=\"usp-row\"><span class=\"usp-t\">Extra 20% off everything</span><span class=\"usp-sep\"></span><span class=\"usp-t\"><span class=\"usp-code\">Code: <b>FAST</b></span></span></span><span class=\"usp-cd\" data-left=\"45261\"><b>00</b><i>:</i><b>12</b><i>:</i><b>34</b><i>:</i><b>21</b></span></div></div>"},
    {name:"Asterisk \u2192 caveat attached", col:"Caveat", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">25% off almost everything*</span></span><span class=\"usp-cav\">*Excludes sale, beauty and marketplace items</span></div></div>"},
    {name:"Code + caveat \u00b7 Black", col:"Caveat", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--black\"><span class=\"usp-row\"><span class=\"usp-t\">Extra 10% off sale*</span><span class=\"usp-sep\"></span><span class=\"usp-t\"><span class=\"usp-code\">Code: <b>FAST</b></span></span></span><span class=\"usp-cav\">*Ends midnight, selected lines only</span></div></div>"},
    {name:"Countdown + caveat \u00b7 Black / Red", col:"Caveat", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp usp--red\"><span class=\"usp-row\"><span class=\"usp-t\">48% off 100s of styles*</span></span><span class=\"usp-cd\" data-left=\"45261\"><b>00</b><i>:</i><b>12</b><i>:</i><b>34</b><i>:</i><b>21</b></span><span class=\"usp-cav\">*Excludes sale & selected lines</span></div></div>"},
    {name:"Long copy wraps (dash becomes a break)", col:"Wrap", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">£1 express delivery on home & electricals orders over £25</span><span class=\"usp-sep\"></span><span class=\"usp-t\"><span class=\"usp-code\">Code: <b>FAST</b></span></span></span></div></div>"},
    {name:"Rotating row (mobile) · fixed height", col:"Rows", html:"<div class=\"hd\" style=\"width:390px\"><div class=\"usp-stack\" data-rotate=\"5000\"><div class=\"hd-usp usp--black on\"><span class=\"usp-row\"><span class=\"usp-t\">Free delivery over £50</span></span></div><div class=\"hd-usp usp--black\"><span class=\"usp-row\"><span class=\"usp-t\">Extra 20% off everything*</span><span class=\"usp-sep\"></span><span class=\"usp-code\">Code: <b>EXTRA</b></span></span><span class=\"usp-cav\">*Selected lines only, exclusions apply</span></div></div></div>"},
    {name:"Row on desktop · cells", col:"Rows", html:"<div class=\"hd\" style=\"width:900px;max-width:100%\"><div class=\"usp-cells usp-cells--alt\"><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">Free delivery over £50</span></span></div><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">48% off for 48 hours</span></span><span class=\"usp-cd\" data-left=\"45261\"></span></div><div class=\"hd-usp\"><span class=\"usp-row\"><span class=\"usp-t\">Extra 20% off beauty</span><span class=\"usp-sep\"></span><span class=\"usp-code\">Code: <b>BEAUTY</b></span></span></div></div></div>"},
    {name:"Desktop strip", col:"Desktop", html:"<div class=\"hd\" style=\"width:900px;max-width:100%\"><div class=\"usp-strip\"><div class=\"usp-cell rot-on\"><b>Free delivery</b><span class=\"s\">on orders over £50</span></div><div class=\"usp-cell rot-on\"><b>Free returns</b><span class=\"s\">within 28 days</span></div><div class=\"usp-cell rot-on\"><b>Next day delivery</b><span class=\"s\">order by midnight</span></div></div></div>"}
  ],
  dev:{title:'Molecules/USP Banner', status:'match', note:'Dev: items · displayType (ticker / rotate) · rotation delay · stickyBanner · tickerSpacing; USP Item is the cell. Our type set adds the countdown + caveat rules.'} },

{ slug:'category-nav', name:'Category navigation', group:'Navigation', tier:'molecule', css:'.cat-row · .roundel · .catpill · .catlinks', figma:'App-PLP 1124-2505 · 13003-149196',
  summary:'The row under the PLP title: image roundels, grey pills or underlined links, per fascia.',
  use:['Sub-category entry on PLP and landing pages.'],
  avoid:['Fully rounded pills (they are badge-format, brand radius).'],
  anatomy:['Roundel 90px mobile / 173px desktop, label beneath · outline and on-image variants','Pill 36px on --surface-media · Links 14px underlined'],
  variants:[
    {name:'Roundels', html:'<div class="cat-row cat-row--r" style="width:440px"><a class="roundel" href="#"><i>'+IMG(160,'--brand-light-3','--brand-light-1')+'</i><span>Dresses</span></a><a class="roundel" href="#"><i>'+IMG(200,'--brand-light-2','--brand-dark-1')+'</i><span>Tops</span></a><a class="roundel roundel--outline" href="#"><i></i><span>Jeans</span></a><a class="roundel roundel--onimage" href="#"><i>'+IMG(220,'--brand-dark-2','--brand-primary-dark')+'</i><span>Sale</span></a></div>'},
    {name:'Pills', html:'<div class="cat-row cat-row--pills"><a class="catpill" href="#">Dresses</a><a class="catpill" href="#">Tops</a><a class="catpill" href="#">Jeans</a><a class="catpill" href="#">Knitwear</a></div>'},
    {name:'Links', html:'<div class="catlinks"><a href="#">Dresses</a><a href="#">Tops</a><a href="#">Jeans</a><a href="#">Knitwear</a><a href="#">Coats</a></div>'},
  ],
  dev:{title:'Molecules/Category Header', status:'partial', note:'Dev Category Header is title + back link; Category Highlight is a content tile. Roundels / pills are page-local in dev today.'} },

{ slug:'breadcrumb', name:'Breadcrumb', group:'Navigation', tier:'atom', css:'.bc', figma:'aIHmkCaTy9c5EWOxAGw0So · 12711-4044',
  summary:'12px trail with slash separators, never wrapping. The first layer (Home) is dropped.',
  use:['PLP and PDP above the title.'],
  avoid:['Wrapping onto two lines — truncate instead.'],
  anatomy:['12px --w-regular capitalised · slash separators · share icon on PDP mobile only','Padding gap 4 (16px) above and below — the same space under the trail as over it (16 Oct 2026)'],
  variants:[{name:'Default', html:'<nav class="bc" aria-label="Breadcrumb" style="width:360px"><a href="#">New In</a><span class="sep">/</span><a href="#">Womens New In</a><span class="sep">/</span><span class="cur">New In Dresses</span></nav>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook.'} },

{ slug:'sort-filter', name:'Sort & filter', group:'Navigation', tier:'organism', css:'.sf-*', figma:'s7WDE3BkCxbgqJ4x4hoV80 · 1783-11572',
  summary:'Desktop: a bordered strip of dropdowns with sort on the right. Mobile: the split Filters | Relevance bar today, floating pills in the new format, both opening one combined modal (mobile: Large, slide up).',
  use:['Every PLP and search results page.'],
  avoid:['Separate Sort and Filter modals on mobile.'],
  anatomy:['Desktop strip: NDD toggle · dropdown boxes · Show more · sort right','Mobile: split bar or pill row · slide-up modal with drill-in rows · pinned View products'],
  variants:[
    {name:'Desktop strip', html:'<div class="sf-bar" style="width:760px;max-width:100%"><span class="sf-ndd on"><span class="track"></span>Next Day Delivery</span><button class="sf-dd">Size<i></i></button><button class="sf-dd">Colour<i></i></button><button class="sf-dd">Brands<i></i></button><button class="sf-dd">Style<i></i></button><button class="sf-dd sf-sort">Relevance<i></i></button></div>'},
    {name:'Applied chips', html:'<div class="sf-bar" style="width:520px"><span class="sf-chip">Women’s: 12, 14, XS, M, L <button aria-label="Remove">×</button></span><span class="sf-chip">Pink <button aria-label="Remove">×</button></span></div>'},
    {name:'Mobile split bar', html:'<div style="width:360px"><div class="sf-split"><button>Filters <span class="fic"></span></button><button>Relevance <i class="ch"></i></button></div></div>'},
    {name:'Mobile pills (new)', html:'<div style="width:390px;overflow:hidden"><div class="sf-float"><button class="sf-pill on">Next Day Delivery <span class="track"></span></button><button class="sf-pill">Sort &amp; Filter '+ICON('filter')+'</button><button class="sf-pill">Category <i class="dn"></i></button></div></div>'},
    {name:'Filter modal (slide up)', html:'<div class="sf-drawer open" style="position:static;width:320px;height:400px;border:1px solid var(--border-subtle);z-index:auto"><div class="head">Filters <button aria-label="Close">'+ICON('close')+'</button></div><div class="rows"><button class="sf-row">Sort <i></i></button><button class="sf-row">Size <i></i></button><button class="sf-row">Colour <i></i></button><button class="sf-row">Brands <i></i></button><button class="sf-row">Price <i></i></button></div><button class="sf-cta">View products</button></div>'},
  ],
  dev:{title:'—', status:'ours', note:'Facets are not in the dev Storybook (Accordion has an isFacetFilter flag; --color-facet-pill-* tokens exist). Ours is the spec.'} },

{ slug:'footer', name:'Footer', group:'Navigation', tier:'organism', css:'.ftr (+ assets/ds/footer.js)', figma:'aIHmkCaTy9c5EWOxAGw0So · 664-1064 (Desktop 664-1062 · Mobile 664-1063)',
  summary:'One responsive footer: newsletter band, link columns with a social · country · app rail, sister brands (Debenhams and Warehouse), payment badges, logo and copyright. Desktop at ≥ 1024, accordions below. Content is each fascia\'s live footer (12 Oct 2026).',
  use:['Every page. Drop in <footer data-ftr></footer> and load footer.js — it renders the fascia from html[data-brand].'],
  avoid:['Hand-built footers — the copy, links and badges come from footer.js (re-capture live to update).','Payment badges as text chips — use the official artwork set.','Title Case forced on headings — keep the fascia\'s own casing (boohooMAN and PLT run caps).'],
  anatomy:['Band --ftr-band = the page background --surface-sunken (#FAFAFA; PLT cream #FAF5E7) · padding gap 8 (32px) · desktop title 36 bold / 18-28 sub, field + primary Subscribe (50px); mobile 24 / 16, full-width field and button, gap 4 (16px) between','Desktop: side margin gap 20 (80px) · columns gap 8 (32px) · headings 16 bold, links 16 on a 35px row · rail gap 10 (40px): social 24px icons gap 26px, country select, app badges 40px','Strip: hairline, sister-brand logos left, payment badges 46×32 gap 2 (8px) right · centre logo + 14 caps copyright, bottom gap 12 (48px)','Mobile (Figma 664-1063): band · sister brands + payments (wrapping, centred) · accordions (16px rows, chevron) · social · country · apps · logo'],
  variants:(function(){const H=root.DG_footerHTML||(typeof require!=='undefined'?(()=>{try{require('./footer.js');return globalThis.DG_footerHTML}catch(e){return null}})():null);
    if(!H)return [{name:'Default', html:'<footer class="ft" style="margin:0;width:1000px;max-width:100%"><div class="ft-news" style="--plp-margin:24px"><div><h3>Let’s get to know each other</h3><p>Sign up to receive emails from us, so you never miss out on the good stuff.</p></div><div><div class="ft-sub"><input type="email" placeholder="Please enter your email address" aria-label="Email address"><button class="bd pri">Subscribe</button></div><p class="ft-legal">By submitting your details, you agree to receive marketing communications from us &amp; our family of brands by email.</p></div></div><div class="ft-cols" style="--plp-margin:24px"><div class="ft-col"><h4>Let us help you</h4><a href="#">Help</a><a href="#">Returns</a><a href="#">Delivery</a><a href="#">Size Guide</a></div><div class="ft-col"><h4>About us</h4><a href="#">About Us</a><a href="#">Careers</a><a href="#">Rewards</a></div><div class="ft-col"><h4>Privacy &amp; legal</h4><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="#">Cookies</a></div><div class="ft-col"><h4>My account</h4><a href="#">Order History</a><a href="#">Track My Order</a></div><div class="ft-col"><h4>Follow us</h4><div class="ft-social"><img src="assets/ds/icons/lib/social-instagram.svg" alt=""><img src="assets/ds/icons/lib/social-facebook.svg" alt=""><img src="assets/ds/icons/lib/social-tik-tok.svg" alt=""><img src="assets/ds/icons/lib/social-x.svg" alt=""></div><h4>Download our app</h4><span class="ft-badge"> App Store</span><span class="ft-badge">▶ Google Play</span></div></div><div class="ft-pay"><img src="assets/ds/icons/pay/visa.png" alt="Visa"><img src="assets/ds/icons/pay/mastercard.png" alt="Mastercard"><img src="assets/ds/icons/pay/amex.png" alt="American Express"><img src="assets/ds/icons/pay/maestro.png" alt="Maestro"><img src="assets/ds/icons/pay/apple-pay.png" alt="Apple Pay"><img src="assets/ds/icons/pay/paypal.png" alt="PayPal"><img src="assets/ds/icons/pay/klarna.png" alt="Klarna"><img src="assets/ds/icons/pay/clearpay.png" alt="Clearpay"><img src="assets/ds/icons/pay/google-pay.png" alt="Google Pay"></div><div class="ft-base"><img class="brandlogo" src="assets/brands/debenhams.svg" alt=""><small>Copyright © 2026</small></div></footer>'}];
    const f=(w,b)=>'<footer class="ftr" data-ftr data-ftr-brand="'+b+'" style="width:'+w+'px;max-width:none">'+H(b)+'</footer>';
    return [{name:'Desktop · 1440', html:'<div class="ftr-fit" style="width:1440px">'+f(1440,'debenhams')+'</div>'},{name:'Mobile · 390', html:f(390,'debenhams')}]})(),
  dev:{title:'Organisms/Footer', status:'match', note:'Dev: footerLinks · paymentMethods · countries · marketFlagCountry; Footer Link = the column groups; Newsletter Signup = our band. Dev runs a peach --color-footer-help-header-background #FFF1E8 on every fascia — ours uses --ft-band per brand.'} },

{ slug:'app-tabbar', name:'App tab bar', group:'Navigation', tier:'organism', css:'.app-tabbar · .app-tabbar--plt', figma:'aIHmkCaTy9c5EWOxAGw0So · 3824:9530 / 9893:28665 · PLT HoBuVNEhf1qpL61XFipy0f · 1128:225860',
  summary:'The native app bottom bar. One standard bar for Debenhams and most fascias (bookmark in place of the heart on boohooMAN and Karen Millen); PLT runs its own labelled bar.',
  use:['Every app screen, pinned to the bottom of the viewport (apps are always shown at the fold).'],
  avoid:['A heart on boohooMAN or Karen Millen: their wishlist is the bookmark.','An Account tab on PLT: it has Home · Shop · Discover · Wishlist · Bag.'],
  anatomy:['Standard: 83px white · 0 -0.5px #E8E8E8 top shadow · five 48×40 tabs, 28px icons, inactive 30% · 139×5 home indicator','PLT: 88px #FFFDF7 · 0.3px black top rule · 48×43 tabs with 10/14 Roboto Medium labels; only the icon dims'],
  variants:(()=>{const I='assets/ds/icons/app/';
    const std=(fav,sel)=>'<div class="app-tabbar" style="width:390px"><div class="tabs">'+['tab-home','tab-menusearch','tab-bag',fav,'tab-account'].map((t,i)=>'<button class="tab'+(i===sel?' on':'')+'" aria-label="'+t.replace('tab-','')+'"><img src="'+I+t+'.svg" alt=""></button>').join('')+'</div><span class="hi"></span></div>';
    const plt=sel=>'<div class="app-tabbar app-tabbar--plt" style="width:390px"><div class="tabs">'+[['plt-tab-home','Home'],['plt-tab-shop','Shop'],['plt-tab-discover','Discover'],['plt-tab-wishlist','Wishlist'],['plt-tab-bag','Bag']].map(([t,l],i)=>'<button class="tab'+(i===sel?' on':'')+'"><img src="'+I+t+'.svg" alt=""><span>'+l+'</span></button>').join('')+'</div></div>';
    return [{name:'Standard · Account selected', html:std('tab-wishlist',4)},{name:'Standard · Home selected', html:std('tab-wishlist',0)},{name:'Bookmark (boohooMAN, Karen Millen)', html:std('tab-bookmark',4)},{name:'PLT · Home selected', html:plt(0)}];})(),
  dev:{title:'—', status:'ours', note:'App chrome; not in the web Storybook.'} },

{ slug:'app-top', name:'App top bar', group:'Navigation', tier:'organism', css:'.app-top · .sb · .nav', figma:'— (app PDP chrome, 16 Oct 2026)',
  summary:'The native app top: iOS status row (9:41, signal, wifi, battery) and the PDP nav — back on the left, share and wishlist on the right. Pairs with the App tab bar.',
  use:['Top of every app PDP screen, sticky; the web header, USP bars, breadcrumb and footer are not shown in the app.'],
  avoid:['The heart on boohooMAN, Karen Millen or Brand Room — use the bookmark (same rule as the tab bar); PLT uses plt-heart.'],
  anatomy:['Status row 47px, SF 17 semibold time','Nav 44px, 12px sides, 40×40 buttons with 24px icons'],
  variants:[{name:'Standard', html:'<div class="app-top" style="width:390px;position:relative"><div class="sb"><span>9:41</span><span class="sys"><svg width="18" height="12" viewBox="0 0 18 12" fill="#000"><rect x="0" y="8" width="3" height="4" rx=".8"/><rect x="5" y="5.5" width="3" height="6.5" rx=".8"/><rect x="10" y="3" width="3" height="9" rx=".8"/><rect x="15" y="0" width="3" height="12" rx=".8"/></svg><svg width="28" height="13" viewBox="0 0 28 13"><rect x=".5" y=".5" width="24" height="12" rx="3.5" fill="none" stroke="#000" stroke-opacity=".4"/><rect x="2" y="2" width="21" height="9" rx="2" fill="#000"/></svg></span></div><div class="nav"><button aria-label="Back"><img src="assets/ds/icons/lib/icons-left.svg" alt=""></button><span><button aria-label="Share"><img src="assets/ds/icons/lib/icons-share.svg" alt=""></button><button aria-label="Wishlist"><img src="assets/ds/icons/heart-24.svg" alt=""></button></span></div></div>'}],
  dev:{title:'—', status:'ours', note:'App chrome; not in the web Storybook.'} },

/* ───────────── OVERLAYS & BAG ───────────── */
{ slug:'modal', name:'Modal', group:'Overlays & bag', tier:'organism', css:'.mdl · .mdl--sm/md/lg/full · .mdl--alert/up/fs · .modal-hd · .modal-x · .mdl-scrim', figma:'aIHmkCaTy9c5EWOxAGw0So · Desktop 8085-17553 · Mobile 8084-24491 · Overlay + animation 8084-23215 · Modal Headers 8113-19029',
  summary:'Everything that opens over the page is a modal — one component in types: Small, Medium, Large and Full screen on desktop; Small (alert), Large (slide up) and Full screen on mobile. There is no separate bottom sheet: the mobile slide up is the Large modal.',
  use:['Small: seller info, confirmations, short messages.','Medium / Large: returns, size guide, delivery options, filters and sort on mobile (slide up), added to bag, Shop The Set.','Full screen: View in 3D, image zoom, video.'],
  avoid:['A modal inside a modal.','Two columns under 1024w — Large drops to one column.','The info icon on a title that wraps — that needs a new header component.','A 24px or 2pt close, or a close at a different inset per modal.'],
  anatomy:[
    'Window: white (--surface-raised), radius 4, padding gap 6 (24px), gap 6 (24px) between header, body and foot · Medium pads gap 8 (32px) at the bottom',
    'Header (.modal-hd): title Geologica SemiBold 20 · close 16 × 16 (Icons / Close) on the title line · five types: title + X · X only · back + title + X · title + info + X · back + title + info + X (info only when the title sits on one line)',
    'Desktop sizes: Small max 512, 16px margins under 480w · Medium max 720, 16px margins under 688w · Large max 960, 32px margins under 896w, two columns → one under 1024w · Full screen max 1248 × 960, 32px side margins under 1184w, 32px top / bottom under 896h',
    'Mobile types: Small (alert) — centred, gap 6 (24px) inside, gap 4 (16px) left / right; taller than the screen → gap 4 (16px) top margin and the body scrolls · Large (slide up) — full width, hugs its content up to the bottom of the site header (header stays visible), body scrolls, CTAs sticky · Full screen',
    'Overlay (.mdl-scrim): 50% black, behind the window, on top of the page',
    'Motion: desktop and mobile alert — modal and overlay fade in and out together · mobile slide up — overlay fades, window slides up from the bottom of the browser · 300ms ease in and out · close on X or a tap anywhere outside the window'],
  use_close:'Every modal type uses the same 16px close.',
  variants:(()=>{
    const X='<button class="modal-x" aria-label="Close"></button>';
    const HD=(t,o={})=>`<div class="modal-hd">${t?`<div class="mt">${o.back?'<button class="mdl-back" aria-label="Back"></button>':''}<span>${t}</span>${o.info?'<button class="mdl-info" aria-label="More info"></button>':''}</div>`:''}${X}</div>`;
    const SELLER='<div class="mdl-bd" style="gap:16px"><div class="mdl-kv"><b>Owned by:</b><span>Living and Home Limited</span></div><div class="mdl-kv"><b>Registered address:</b><span>22 Kay Street<br>Manchester<br>M11 2DU</span></div><div class="mdl-kv"><b>VAT registration number:</b><span>368761060</span></div><div class="mdl-kv"><b>Registered company number:</b><span>13032507</span></div></div>';
    const OPTS='<p style="margin:0">To arrange a return to Living and Home, choose how you’d like your refund.</p><div class="mdl-opts"><div class="mdl-opt"><span class="tile">'+ICON('gift-card')+'<span class="tag">+10% bonus</span></span><div class="tx"><div class="rad-row"><button class="rad on" aria-checked="true"></button><span>Refund to <b>Gift Card</b></span></div><p>Get 10% extra on top of your refund.</p></div></div><div class="mdl-opt"><span class="tile">'+ICON('return-to-payment')+'</span><div class="tx"><div class="rad-row"><button class="rad" aria-checked="false"></button><span>Refund to <b>payment</b></span></div><p>Back to the card you paid with.</p></div></div></div>';
    const FAQ='<div class="mdl-faq">'+['When will I receive my refund?','How long do I have to return?','Will I get cash or credit refund?','Items excluded from returns','Can I return more than one order?'].map(q=>'<div class="acc"><button class="acc-h">'+q+ICON('down')+'</button></div>').join('')+'</div>';
    const CTA='<div class="mdl-ft"><button class="bd pri">Confirm choice</button></div>';
    const T='Returning your item to Living and Home';
    const VIEW3D=(h)=>`<div class="mdl-bd"><span style="display:block;width:100%;max-width:578px;height:${h}px;background:linear-gradient(160deg,var(--brand-light-3),var(--brand-light-1))"></span></div><div class="mdl-3d-ctl"><button aria-label="Play">${ICON('play-control')}</button><span><button aria-label="Info">${ICON('info')}</button><button aria-label="360"><img src="assets/ds/icons/lib/360.svg" alt=""></button><button aria-label="Full screen">${ICON('expand')}</button></span></div>`;
    const PAIR=(a,b)=>`<div class="zfit"><div style="display:flex;gap:24px;align-items:flex-start;width:804px">${[a,b].map(([n,h])=>`<div style="display:flex;flex-direction:column;gap:10px">${h}<span class="fvn">${n}</span></div>`).join('')}</div></div>`;
    const STAGE=(kind,mdl,o={})=>`<div class="mdl-stage mdl-stage--${kind}" style="width:390px;height:${o.h||844}px;--mdl-top:${o.top||0}px"><header data-hd data-hd-device="mobile"></header><div class="mdl-page"></div><div class="mdl-scrim"></div><div class="mdl-layer">${mdl}</div></div>`;
    return [
      {name:'Header · title + close', col:'hd', html:'<div class="mdl" style="width:390px">'+HD('Modal header')+'</div>'},
      {name:'Header · close only', col:'hd', html:'<div class="mdl" style="width:390px">'+HD('')+'</div>'},
      {name:'Header · back + title + close', col:'hd', html:'<div class="mdl" style="width:390px">'+HD('Modal header',{back:1})+'</div>'},
      {name:'Header · title + info + close', col:'hd', html:'<div class="mdl" style="width:390px">'+HD('Modal header',{info:1})+'</div>'},
      {name:'Header · back + title + info + close', col:'hd', html:'<div class="mdl" style="width:390px">'+HD('Modal header',{back:1,info:1})+'</div>'},
      {name:'Desktop · Small · max 512', html:'<div class="zfit"><div class="mdl mdl--sm" style="width:512px">'+HD('Living and Home')+SELLER+'</div></div>'},
      {name:'Desktop · Medium · max 720', html:'<div class="zfit"><div class="mdl mdl--md" style="width:720px">'+HD(T)+'<div class="mdl-bd">'+FAQ+'</div>'+CTA+'</div></div>'},
      {name:'Desktop · Large · max 960 · two columns (one under 1024w)', html:'<div class="zfit"><div class="mdl mdl--lg" style="width:960px">'+HD(T)+'<div class="mdl-bd"><div class="mdl-cols"><div style="display:flex;flex-direction:column;gap:24px">'+OPTS+'</div>'+FAQ+'</div></div>'+CTA+'</div></div>'},
      {name:'Desktop · Full screen · max 1248 × 960', html:'<div class="zfit"><div class="mdl mdl--full" style="width:1248px">'+HD('View in 3D')+VIEW3D(560)+'</div></div>'},
      {name:'Mobile · Small (alert) — centred, 16px margins, fades in with the overlay', html:PAIR(['Seller info',STAGE('alert','<div class="mdl mdl--alert">'+HD('Living and Home')+SELLER+'</div>')],['Confirm',STAGE('alert','<div class="mdl mdl--alert">'+HD('Remove this item?')+'<div class="mdl-bd">You can add it back from your wishlist later.</div><div class="mdl-ft"><button class="bd pri">Remove</button><button class="bd sec">Keep it</button></div></div>')])},
      {name:'Mobile · Large (slide up) and Full screen', html:PAIR(['Large (slide up) — hugs content up to the header; body scrolls, CTA sticky',STAGE('up','<div class="mdl mdl--up">'+HD(T)+'<div class="mdl-bd">'+OPTS+FAQ+'</div>'+CTA+'</div>',{top:120,h:960})],['Full screen',STAGE('fs','<div class="mdl mdl--fs">'+HD('View in 3D')+VIEW3D(420)+'</div>')])}
    ];})(),
  dev:{title:'Atoms/Modal', status:'partial', note:'Dev Modal: title · onClose · showBackdrop · useSmallClose · addInfoIconToTitle · uspModal flags. Molecules/Side Panel (slides from the side) is the old sheet — retire it for the mobile Large (slide up) type: one Modal with a size prop (sm · md · lg · full) and a mobile type (alert · up · fs).'} },

{ slug:'bag-item', name:'Bag line item', group:'Overlays & bag', tier:'molecule', css:'.bag-item', figma:'CYyGeUDy4w02enV7uFxZ6W · 1337:250088',
  summary:'99×148 image beside brand, name, variant and price. Quantity and remove live in the row.',
  use:['Bag, mini bag, added-to-bag, order confirmation.'],
  avoid:['A different image ratio to the product card.'],
  anatomy:['Image 99×148 · brand strong · name 2-line · variant --text-secondary · price with strike'],
  variants:[{name:'Default', html:'<div class="bag-item" style="width:340px">'+PH(99,148)+'<div class="info"><div class="b">Coast</div><div class="n">Long Sleeve Lace and Pleated Midi Shirt Dress</div><div class="v">Size 12 · Pink</div><div class="p"><span class="sale">£70.00</span><s>£139.00</s></div></div></div>'}],
  dev:{title:'Molecules/Basket/CartLineItemV2Card', status:'partial', note:'Dev has 23 states (low stock, max quantity, gift card, premier, sample, pre-order, price promise, protection plan, subscribe & save, free gift, Taggstar…). Ours draws the base; states to follow from the CA bag variants.'} },

{ slug:'order-summary', name:'Order summary', group:'Overlays & bag', tier:'organism', css:".bs · .bs-sum · .bs-ctas · .summary (legacy)", figma:"CYyGeUDy4w02enV7uFxZ6W · 1337:250678 · live /basket 06 Oct 2026",
  summary:"The bag payment summary as live (06 Oct 2026, every fascia): Order Summary (Subtotal · Discount · {Fascia} Deliver+ · Order Total · Discounts included), Checkout with / without Deliver+, OR, wallets, card strip, Promo Code. Drop-in: assets/ds/bag-summary.js (DG_bagSummaryHTML / DG_bagTopHTML). Updated 16 Oct from the USP banner bag rebuild; .summary is the older Figma version.",
  use:["Bag (templates/bag.html): desktop right column on --surface-sunken; mobile full-bleed after the items, with the Order Total + Checkout strip under the title."],
  avoid:["A Delivery row — live prices delivery at checkout.","Hand-built summaries in a project."],
  anatomy:["Card padding gap 6 (24px), gap 6 between blocks · rows 16/24 · total row top border","CTAs 50px in the fascia checkout colour (BAG_LIVE) · wallets 50px · card logos 21px"],
  variants:[{name:'Desktop',html:"<div style=\"width:390px;background:var(--surface-sunken)\"><div class=\"bs bs--d\" style=\"--bs-bg:#7BE7D8;--bs-fg:#000;--bs-case:uppercase\"><div class=\"bs-card\"><div class=\"bs-sum\"><div class=\"bs-h\">Order Summary</div><div class=\"bs-r\"><span>Subtotal</span><span>£66.00</span></div><div class=\"bs-r\"><span>Discount</span><span>-£16.50</span></div>\n    <div class=\"bs-r bs-dp\"><span>Debenhams Deliver+<small>Optional add-on</small></span><span>£2.99</span></div><div class=\"bs-r bs-tot\"><span>Order Total</span><span><b>£52.49</b></span></div></div>\n    <div class=\"bs-di\"><b>Discounts included:</b><div class=\"bs-r\"><span>25% Off applied</span><span>-£16.50</span></div></div><div class=\"bs-ctas\"><button type=\"button\" class=\"bs-cta\">Checkout with Deliver+</button><button type=\"button\" class=\"bs-cta\">Checkout without Deliver+</button>\n    <div class=\"bs-or\"><span>OR</span></div><button type=\"button\" class=\"bs-w bs-pp\"><img src=\"assets/ds/icons/payments/paypal-wordmark.svg\" alt=\"PayPal\" style=\"height:22px\"></button><button type=\"button\" class=\"bs-w bs-pp\"><img src=\"assets/ds/icons/payments/paypal-monogram.png\" alt=\"\" style=\"height:20px\"><span>Pay Later</span></button><div class=\"bs-msg\"><img src=\"assets/ds/icons/payments/bnpl-paypal-logo.svg\" alt=\"PayPal\"><span>Pay in 30 days. Credit option. <u>Learn more</u></span></div><button type=\"button\" class=\"bs-w bs-ap\"><img src=\"assets/ds/icons/payments/applepay-onblack.svg\" alt=\"Apple Pay\" style=\"height:22px\"></button><button type=\"button\" class=\"bs-w bs-kl\"><span>Pay with</span><img src=\"assets/ds/icons/payments/klarna-badge.svg\" alt=\"Klarna\" style=\"height:26px\"></button></div>\n    <div class=\"bs-cards\"><img src=\"assets/ds/icons/pay/visa.png\" alt=\"visa\"><img src=\"assets/ds/icons/pay/mastercard.png\" alt=\"mastercard\"><img src=\"assets/ds/icons/pay/amex.png\" alt=\"amex\"><img src=\"assets/ds/icons/pay/maestro.png\" alt=\"maestro\"><img src=\"assets/ds/icons/pay/visa-electron.png\" alt=\"visa-electron\"><img src=\"assets/ds/icons/pay/apple-pay.png\" alt=\"apple-pay\"><img src=\"assets/ds/icons/pay/payplus.png\" alt=\"payplus\"><img src=\"assets/ds/icons/pay/paypal.png\" alt=\"paypal\"><img src=\"assets/ds/icons/pay/klarna.png\" alt=\"klarna\"><img src=\"assets/ds/icons/pay/clearpay.png\" alt=\"clearpay\"><img src=\"assets/ds/icons/pay/google-pay.png\" alt=\"google-pay\"><img src=\"assets/ds/icons/pay/revolut-pay.png\" alt=\"revolut\"></div></div><div class=\"bs-card bs-pr\"><div class=\"bs-ph\">Promo Code</div><div class=\"bs-pf\"><span class=\"bs-in\">Enter code here...</span><button type=\"button\" class=\"bs-ap2\">APPLY</button></div></div></div></div>"},{name:'Mobile',html:"<div style=\"width:390px\"><div class=\"bs bs-top\" style=\"--bs-bg:#7BE7D8;--bs-fg:#000;--bs-case:uppercase\"><div class=\"bs-ot\">Order Total: <b>£49.50</b></div><button type=\"button\" class=\"bs-cta\">Checkout with Deliver+</button></div><div class=\"bs bs--m\" style=\"--bs-bg:#7BE7D8;--bs-fg:#000;--bs-case:uppercase\"><div class=\"bs-card bs-pr\"><div class=\"bs-ph\">Promo Code</div><div class=\"bs-pf\"><span class=\"bs-in\">Enter code here...</span><button type=\"button\" class=\"bs-ap2\">APPLY</button></div></div><div class=\"bs-hr\"></div><div class=\"bs-card bs-flat\"><div class=\"bs-sum\"><div class=\"bs-h\">Order Summary</div><div class=\"bs-r\"><span>Subtotal</span><span>£66.00</span></div><div class=\"bs-r\"><span>Discount</span><span>-£16.50</span></div>\n    <div class=\"bs-r bs-dp\"><span>Debenhams Deliver+<small>Optional add-on</small></span><span>£2.99</span></div><div class=\"bs-r bs-tot\"><span>Order Total</span><span><b>£52.49</b></span></div></div>\n    <div class=\"bs-di\"><b>Discounts included:</b><div class=\"bs-r\"><span>25% Off applied</span><span>-£16.50</span></div></div><div class=\"bs-ctas\"><button type=\"button\" class=\"bs-cta\">Checkout with Deliver+</button><button type=\"button\" class=\"bs-cta\">Checkout without Deliver+</button>\n    <div class=\"bs-or\"><span>OR</span></div><button type=\"button\" class=\"bs-w bs-pp\"><img src=\"assets/ds/icons/payments/paypal-wordmark.svg\" alt=\"PayPal\" style=\"height:22px\"></button><button type=\"button\" class=\"bs-w bs-pp\"><img src=\"assets/ds/icons/payments/paypal-monogram.png\" alt=\"\" style=\"height:20px\"><span>Pay Later</span></button><div class=\"bs-msg\"><img src=\"assets/ds/icons/payments/bnpl-paypal-logo.svg\" alt=\"PayPal\"><span>Pay in 30 days. Credit option. <u>Learn more</u></span></div><button type=\"button\" class=\"bs-w bs-ap\"><img src=\"assets/ds/icons/payments/applepay-onblack.svg\" alt=\"Apple Pay\" style=\"height:22px\"></button><button type=\"button\" class=\"bs-w bs-kl\"><span>Pay with</span><img src=\"assets/ds/icons/payments/klarna-badge.svg\" alt=\"Klarna\" style=\"height:26px\"></button></div>\n    <div class=\"bs-cards\"><img src=\"assets/ds/icons/pay/visa.png\" alt=\"visa\"><img src=\"assets/ds/icons/pay/mastercard.png\" alt=\"mastercard\"><img src=\"assets/ds/icons/pay/amex.png\" alt=\"amex\"><img src=\"assets/ds/icons/pay/maestro.png\" alt=\"maestro\"><img src=\"assets/ds/icons/pay/visa-electron.png\" alt=\"visa-electron\"><img src=\"assets/ds/icons/pay/apple-pay.png\" alt=\"apple-pay\"><img src=\"assets/ds/icons/pay/payplus.png\" alt=\"payplus\"><img src=\"assets/ds/icons/pay/paypal.png\" alt=\"paypal\"><img src=\"assets/ds/icons/pay/klarna.png\" alt=\"klarna\"><img src=\"assets/ds/icons/pay/clearpay.png\" alt=\"clearpay\"><img src=\"assets/ds/icons/pay/google-pay.png\" alt=\"google-pay\"><img src=\"assets/ds/icons/pay/revolut-pay.png\" alt=\"revolut\"></div></div></div></div>"},{name:'Legacy (Figma)',html:"<div class=\"summary\" style=\"width:320px\"><div class=\"sum-row\"><span>Subtotal</span><span>£70.00</span></div><div class=\"sum-row\"><span>Delivery</span><span><b>FREE</b></span></div><div class=\"sum-disc\">Discounts <span style=\"font-weight:400\">−£6.00</span></div><div class=\"hr\"></div><div class=\"sum-row total\"><span>Order total</span><span>£64.00</span></div></div>"}],
  dev:{title:'Molecules/Basket/OrderSummaryV2', status:'match', note:'Dev stories: Figma default · free delivery with add-on · multiple discounts · no discounts · all rows.'} },

/* ───────────── ADDED 16 OCT 2026 — DS page templates (templates/pdp.html, templates/bag.html) + promoted from the PLP ───────────── */
{"slug":"pdp-gallery","name":"PDP gallery","group":"PDP modules","tier":"organism","css":".pdp-gal","figma":"Taggstar 00YKWCHwTarfwWZ1HayFUI · MAN PDP 3484:23546 (mobile) / 3484:21984 (desktop)","summary":"The product image gallery. Mobile: 2:3 slides at 60% width that scroll and snap, with a 4px pagination bar under. Desktop: a 100px thumbnail column and one main slide with round prev / next.","use":["The top of every PDP (templates/pdp.html).","Product tags (Back In Stock, Petite, As Seen In Our Ad) stack bottom right of the gallery in .ptags — white 90%, 13px light (14 desktop) — as the master PDP (Shopping agent, 16 Oct 2026).","Drop overlays (Taggstar, AI badge) into .main — it is the positioning box."],"avoid":["Cropping product shots out of 2:3.","More than one tag row on the image."],"anatomy":["Mobile: slides 60% wide, gap 1 (4px), scroll-snap, full bleed · pagination 4px, margin gap 4 (16px)","Desktop ≥1024: thumbs 100px column, gap 2 (8px), selected = 1px --text-primary keyline · gap 6 (24px) to the main slide · nav 32px round, --shadow-pill, 12px in","Tags .ptags gap 4 (16px) from the right, gap 3 (12px) from the bottom (16px desktop) · images on --surface-media"],"variants":[{"name":"Desktop · thumbs + main","html":"<div class=\"pdp-gal\" style=\"width:100%;max-width:900px\"><div class=\"thumbs\"><button class=\"on\"><img src=\"templates/img/debenhams/1.webp\" alt=\"\"></button><button class=\"\"><img src=\"templates/img/debenhams/2.webp\" alt=\"\"></button><button class=\"\"><img src=\"templates/img/debenhams/3.webp\" alt=\"\"></button><button class=\"\"><img src=\"templates/img/debenhams/4.webp\" alt=\"\"></button></div><div class=\"main\"><span class=\"ptags\"><span>Back In Stock</span></span><div class=\"slides\"><img src=\"templates/img/debenhams/1.webp\" alt=\"\"><img src=\"templates/img/debenhams/2.webp\" alt=\"\"><img src=\"templates/img/debenhams/3.webp\" alt=\"\"><img src=\"templates/img/debenhams/4.webp\" alt=\"\"></div><button class=\"nav prev\" aria-label=\"Previous image\"><img src=\"assets/ds/icons/lib/icons-left.svg\" alt=\"\"></button><button class=\"nav next\" aria-label=\"Next image\"><img src=\"assets/ds/icons/lib/icons-right.svg\" alt=\"\"></button></div><div class=\"pag\"><i style=\"width:25%\"></i></div></div>"},{"name":"Mobile · scroller + pagination","html":"<div class=\"pdp-gal\" style=\"width:390px\"><div class=\"main\"><div class=\"slides\"><img src=\"templates/img/boohooman/1.webp\" alt=\"\"><img src=\"templates/img/boohooman/2.webp\" alt=\"\"><img src=\"templates/img/boohooman/3.webp\" alt=\"\"><img src=\"templates/img/boohooman/4.webp\" alt=\"\"></div></div><div class=\"pag\"><i style=\"width:25%\"></i></div></div>"}],"dev":{"title":"Organisms/Product Image Gallery","status":"partial","note":"Added 16 Oct 2026 for the DS PDP template."}},

{"slug":"pdp-head","name":"PDP title","group":"PDP modules","tier":"molecule","css":".pdp-head","figma":"Taggstar 00YKWCHwTarfwWZ1HayFUI · Brand and Product 3484:23598","summary":"Brand over product name, with the round wishlist button on the right.","use":["Top of the PDP buy block."],"avoid":["A brand line on fascias that hide it (MAN new format drops it)."],"anatomy":["Brand 16/20 strong · name 16/20 regular, gap 1 (4px)","Wishlist 44px round, --surface-raised, --shadow-pill, 20px glyph (each fascia's own: heart, bookmark, PLT heart)"],"variants":[{"name":"Default","html":"<div class=\"pdp-head\" style=\"width:358px\"><div class=\"titles\"><span class=\"brand\">Coast</span><h1 class=\"name\">Celestial All Over Embellished Velvet Mini Dress</h1></div><button class=\"wish\" aria-label=\"Add to wishlist\"><img src=\"assets/ds/icons/heart-24.svg\" alt=\"\"></button></div>"}],"dev":{"title":"Molecules/Product Title","status":"partial","note":"Added 16 Oct 2026."}},

{"slug":"ndd","name":"Delivery countdown","group":"PDP modules","tier":"atom","css":".ndd","figma":"Taggstar 00YKWCHwTarfwWZ1HayFUI · Icon Messaging 3484:23615","summary":"\"Order in 11 hrs 22 mins for Next Day Delivery\" under the price, live on every fascia but The Brand Room.","use":["PDP buy block, under the price."],"avoid":["Showing it once the cut-off has passed."],"anatomy":["20px delivery-fast icon · gap 2 (8px) · 14/20 · the time strong","Markup: icon + one <span> (text runs must not be separate flex items)"],"variants":[{"name":"Default","html":"<div class=\"ndd\"><img src=\"assets/ds/icons/lib/icons-delivery-fast.svg\" alt=\"\"><span>Order in <b>11 hrs 22 mins</b> for Next Day Delivery</span></div>"}],"dev":{"title":"—","status":"partial","note":"Added 16 Oct 2026."}},

{"slug":"opt-label","name":"Option label","group":"PDP modules","tier":"atom","css":".opt-label","summary":"\"Colour: Black\" — the label over colour swatches and fit options.","use":["Above .cswatches and fit buttons."],"avoid":["Using it above the size selector — .sizes has its own head."],"anatomy":["16/24 · value --w-mid"],"variants":[{"name":"Default","html":"<div class=\"opt-label\">Colour: <b>Black</b></div>"}],"dev":{"title":"—","status":"partial","note":"Added 16 Oct 2026."}},

{"slug":"member-box","name":"Membership box","group":"PDP modules","tier":"molecule","css":".member-box","figma":"core-pdp-2026 live capture (10 Sep 2026)","summary":"The PDP delivery-membership box in each fascia's own art: Debenhams Unlimited, boohoo Premier Club, boohooMAN Premier, PLT Royalty, Karen Millen Premier. Rendered by assets/ds/membership.js (DG_memberBoxHTML).","use":["PDP, under Add to bag."],"avoid":["Warehouse and The Brand Room — they run no programme."],"anatomy":["Padding gap 4 / 5 (16px 20px) · gap 6 (24px) to ADD · logo 12px over 14/20 copy","Colours + art per fascia: --mb-bg / --mb-fg / --mb-img / --mb-cta-bg / --mb-cta-fg"],"variants":[{"name":"Debenhams Unlimited","html":"<div class=\"member-box\" style=\"width:358px;--mb-bg:#DCDCDC;--mb-fg:#000;--mb-cta-bg:#000;--mb-cta-fg:#FFF;--mb-lg-h:43px;--mb-img:url(membership/prem-bg-deb.jpg)\"><div class=\"t\"><span class=\"lg\"><img src=\"assets/ds/membership/prem-logo-deb.png\" alt=\"\"></span>Enjoy unlimited delivery for an entire year from just £14.99</div><button class=\"add\" type=\"button\">Add</button></div>"},{"name":"boohoo Premier Club","html":"<div class=\"member-box\" style=\"width:358px;--mb-bg:#E1D8CF;--mb-fg:#000;--mb-cta-bg:#8D113A;--mb-cta-fg:#FFF;--mb-lg-h:15px;--mb-img:url(membership/prem-bg-bh.jpg)\"><div class=\"t\"><span class=\"lg\"><img src=\"assets/ds/membership/prem-logo-bh.png\" alt=\"\"></span>Enjoy unlimited delivery for an entire year from just £9.99</div><button class=\"add\" type=\"button\">Add</button></div>"},{"name":"PLT Royalty","html":"<div class=\"member-box\" style=\"width:358px;--mb-bg:#20090C;--mb-fg:#FFF;--mb-cta-bg:#FFF;--mb-cta-fg:#000;--mb-lg-h:26px;--mb-img:url(membership/prem-bg-plt.jpg)\"><div class=\"t\"><span class=\"lg\"><img src=\"assets/ds/membership/prem-logo-plt.png\" alt=\"\"></span>Enjoy unlimited delivery for an entire year from just £9.99</div><button class=\"add\" type=\"button\">Add</button></div>"}],"dev":{"title":"—","status":"partial","note":"Added 16 Oct 2026."}},

{"slug":"pg-title","name":"Page title","group":"Layout","tier":"atom","css":".pg-title · .plp-title","summary":"The page h1 with an optional count: \"Your Bag (2)\" (.pg-title), the PLP category title + product count (.plp-title, centred from 768).","use":["Bag, account and listing pages."],"avoid":["Styling an h1 per page."],"anatomy":["22px mobile / 26px desktop, --w-strong · count 13px --text-secondary"],"variants":[{"name":"Page","html":"<div class=\"pg-title\"><h1>Your Bag (2)</h1></div>"},{"name":"PLP","html":"<div class=\"plp-title\" style=\"width:358px\"><h1>Dresses</h1><div class=\"count\">1,204 products</div></div>"}],"dev":{"title":"—","status":"partial","note":"Added 16 Oct 2026 (.plp-title promoted from plp-alignment)."}},

{"slug":"seo-copy","name":"SEO copy + Show more","group":"Navigation","tier":"atom","css":".seo · .seo--line · .showmore","summary":"Category intro copy under the PLP title, clamped to one line with Show more.","use":["PLP, under the title."],"avoid":["More than one paragraph open by default."],"anatomy":["13px --text-secondary, max 860px, centred from 768 · Show more 14px"],"variants":[{"name":"One line + Show more","html":"<div style=\"width:358px\"><p class=\"seo seo--line\"><span class=\"t\">Shop dresses for every occasion, from party sequins to everyday midis and maxis.</span></p><button class=\"showmore\">Show more</button></div>"}],"dev":{"title":"—","status":"partial","note":"Promoted from plp-alignment 16 Oct 2026."}},

{"slug":"view-toggle","name":"Grid view toggle","group":"Navigation","tier":"atom","css":".gt · .viewtoggle","figma":"PLP-Grid-View H679chUDMrAVSdARchnheR · 194-2513","summary":"Switch the PLP between views: a 16px icon right of the title on mobile, a segmented toggle on desktop.","use":["PLP header."],"avoid":["A toggle with one view."],"anatomy":["Mobile icon 24px hit, 16px glyph · desktop 36 × 38 cells, on = --surface-sunken"],"variants":[{"name":"Desktop","html":"<div class=\"viewtoggle\"><button class=\"on\"><img src=\"assets/ds/icons/lib/view-grid.svg\" alt=\"\"></button><button><img src=\"assets/ds/icons/lib/view-thumb.svg\" alt=\"\"></button></div>"}],"dev":{"title":"—","status":"partial","note":"Promoted from plp-alignment 16 Oct 2026."}},

{"slug":"content-slot","name":"Content slot","group":"Product","tier":"molecule","css":".cslot · .cslot--gtl","figma":"DS aIHmkCaTy9c5EWOxAGw0So · 8556-18755","summary":"An in-grid content tile that opens its row: Button (media + white CTA), Text (media + gradient + View All + optional Sponsored), Get The Look (sunken card + 2×2 mosaic).","use":["PLP grid, after row 3."],"avoid":["Two slots in one row.","Slots in the images-only tile view."],"anatomy":["Spans 2 columns, 1:1 · CTA 50px white, 24px in · gradient 130 / 200px · Get The Look padding gap 4 / 6, radius 8"],"variants":[{"name":"Button","html":"<div style=\"display:grid;grid-template-columns:1fr 1fr;width:358px\"><div class=\"cslot\"><img class=\"media\" src=\"templates/img/plt/1.webp\" alt=\"\"><button class=\"slot-btn\">Shop now</button></div></div>"}],"dev":{"title":"Organisms/Content Slot","status":"partial","note":"Promoted from plp-alignment 16 Oct 2026."}},

/* ───────────── CHIPS & PILLS ───────────── */
{ slug:'chip', name:'Chip', group:'Chips & pills', tier:'atom', css:'.chip',
  summary:'40px outlined choice that fills with ink when selected.',
  use:['Single-select filters on rails and content pages.'],
  avoid:['Chips for navigation (use category pills).'],
  anatomy:['40px · 1px outline · selected = --text-primary fill, inverse label'],
  variants:[{name:'Set', html:'<div style="display:flex;gap:8px"><button class="chip on">All items</button><button class="chip">New in</button><button class="chip">Sale</button></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook.'} },

{ slug:'filter-pill', name:'Filter pill', group:'Chips & pills', tier:'atom', css:'.fpill · .sf-pill', figma:'TBR 739-92209',
  summary:'44px white pill with a soft shadow, optional inline toggle or chevron. The floating mobile filter row.',
  use:['Mobile PLP filter entry (new format).'],
  avoid:['Solid fills — it floats over imagery.'],
  anatomy:['44px · white · --shadow-pill · 14px label · toggle / chevron right'],
  variants:[{name:'Set', html:'<div style="display:flex;gap:8px"><button class="fpill">Next Day Delivery <span class="tog on"></span></button><button class="fpill">Size ▾</button></div>'}],
  dev:{title:'Atoms/Button', status:'partial', note:'Dev iconPillButton variant is the nearest; facet pill tokens --color-facet-pill-bg/border-selected exist.'} },

{ slug:'tag-pill', name:'Tag pill', group:'Chips & pills', tier:'atom', css:'.tagpill · .chip-save',
  summary:'Small status pills: black tag, count bubble, red-light save chip.',
  use:['Status in account rows, counts on chips, savings in the bag.'],
  avoid:['Tag pills as buttons.'],
  anatomy:['24px black pill 11px caps · count bubble · save chip on --badge-save-bg'],
  variants:[{name:'Set', html:'<div style="display:flex;gap:10px;align-items:center"><span class="tagpill">Active</span><span class="tagpill tagpill--n">3</span><span class="chip-save">Save 5%</span></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook.'} },

{ slug:'membership-pill', name:'Membership pill', group:'Chips & pills', tier:'atom', css:'.mpill · .mpill--plus · --mpill-bg / --mpill-fg / --mpill-dot', figma:'WChEtDPH0LcErdYFS9SESn · 3996:173990 · 3996:174293',
  summary:'Active-membership status on checkout Delivery Method: dot + programme name + Active. Grey on most fascias, gradient for Debenhams Unlimited+, square sand with a garnet dot on PLT.',
  use:['Checkout Delivery Method heading / app checkout delivery row, only when the shopper has an active membership.'],
  avoid:['Hard-coding the radius or colours — PLT must stay square and sand.','Showing it when there is no membership.'],
  anatomy:['20px · 10px caps · name strong + Active light · 8px dot · radius --radius-pill (0 on PLT)'],
  variants:[{name:'Unlimited', html:'<span class="mpill"><i></i><b>Unlimited</b><span>Active</span></span>'},{name:'Unlimited+', html:'<span class="mpill mpill--plus"><i></i><b>Unlimited+</b><span>Active</span></span>'},{name:'PLT Royalty', html:'<div data-brand="plt" style="padding:12px;background:#FFFDF7"><span class="mpill"><i></i><b>Royalty</b><span>Active</span></span></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook. Prototype: account-2026 checkout + new checkout.'} },

{ slug:'checkout-tile', name:'Checkout tile', group:'Checkout', tier:'atom', css:'.co-tile · .co-tile--lg · .co-tiles · --co-tile-bg / --co-tile-border', figma:'WChEtDPH0LcErdYFS9SESn · 2290:437863 (PLT)',
  summary:'Payment method tiles and the promo Apply button on the new checkout. Keyline on raised for most fascias; PLT is a sand fill with no outline, square.',
  use:['Payment method grid (two columns, 8px gaps).','Promo code Apply (.co-tile--lg, 50px).'],
  avoid:['White fills on PLT.'],
  anatomy:['44px (50 for Apply) · radius --radius-default · fill --co-tile-bg · 1px --co-tile-border'],
  variants:[{name:'Default', html:'<div class="co-tiles" style="width:358px"><span class="co-tile">Card</span><span class="co-tile">Pay Later</span></div>'},{name:'PLT', html:'<div data-brand="plt" style="padding:16px;background:#FFFDF7"><div class="co-tiles" style="width:358px"><span class="co-tile">Card</span><span class="co-tile">Pay Later</span></div></div>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook.'} },

{ slug:'ai-pill', name:'AI pill', group:'Chips & pills', tier:'atom', css:'.ai-pill · .ai-pill--outline · .ai-icon · .ai-iconbtn · --ai-gradient', figma:'jNQsrePXxw0j0AksixkseD · AI Gradient 265:3677 · Icons / AI 27:37643',
  summary:'The one look for anything AI: the AI icon and the AI gradient. White pill inside a field or on an image; gradient-outline pill when it stands on its own. Same on every fascia.',
  use:['Agent entry point: inside the search box (.ai-pill, no outline) or beside it (.ai-pill--outline).','Prompt chips that open the agent (PDP prompts, next best action, autocomplete suggestions, custom prompts): .ai-pill--soft .ai-pill--wrap — white on the puck shadow.','On imagery (Shop similar, Try it on): .ai-pill--soft.','Mobile header icon row: .ai-iconbtn next to the search icon.'],
  avoid:['The AI icon or gradient on anything that does not open the agent.','A gradient outline inside the search box: inside is white, no outline.','Solid dark outlines on prompt chips — shadow (--shadow-puck), or --border-subtle at most.','Recolouring per fascia — AI is one look group-wide.'],
  anatomy:['36px pill (32 small) · radius pill · 14px medium · AI icon 18px, gap 1.5 (6px) · padding gap 3 (12px) left / gap 4 (16px) right','Outline: 1.5px --ai-gradient (#70BEB3 → #9DEDE2, 107°), white fill','Icon: assets/ds/icons/ai.svg, gradient #529C92 → #70BEB3'],
  variants:[{name:'Tag chip · above the PDP title', html:'<div class="pdp-chips"><button class="ai-pill ai-pill--soft ai-pill--tag"><i class="ai-icon"></i>Shop Similar</button></div>'},
    {name:'Inside search', html:'<div class="hd-search" style="width:420px;padding-right:8px"><span>Search Fashion, Home &amp; Beauty</span><button class="ai-pill"><i class="ai-icon"></i>Ask Deb</button></div>'},
    {name:'Outline', html:'<button class="ai-pill ai-pill--outline"><i class="ai-icon"></i>Ask Deb</button>'},
    {name:'Prompt chips', html:'<div style="display:flex;flex-wrap:wrap;gap:8px;width:360px"><button class="ai-pill ai-pill--soft ai-pill--wrap"><i class="ai-icon"></i>Does this fit true to size?</button><button class="ai-pill ai-pill--soft ai-pill--wrap"><i class="ai-icon"></i>Ask anything</button></div>'},
    {name:'Icon', html:'<div style="display:flex;gap:8px;align-items:center"><button class="ai-iconbtn" aria-label="Ask Deb"><i class="ai-icon"></i></button><span style="width:120px;height:36px;border-radius:99px;background:var(--ai-gradient)"></span></div>'},
  ],
  dev:{title:'—', status:'ours', note:'Dev launcher (shopping-agent-pill) draws its sparkle with the fascia primary — swap to icons/ai.svg + --ai-gradient.'} },

{ slug:'entry-chip', name:'Entry chip', group:'Chips & pills', tier:'atom', css:'.entry-chip',
  summary:'Floating white chip with an icon and count badge — the PDP entry to Virtual Try On or a set.',
  use:['Over the PDP gallery.'],
  avoid:['More than two on one image.'],
  anatomy:['Pill 100 radius · --shadow-pill · 12px strong · count badge in --text-link'],
  variants:[{name:'Default', html:'<button class="entry-chip">'+ICON('quick-add','style="width:16px;height:16px"')+'Virtual try on<span class="n">2</span></button>'}],
  dev:{title:'—', status:'ours', note:'Not in the dev Storybook.'} },

/* ───────────── ACCOUNT ───────────── */
{ slug:'account-card', name:'Balance card', group:'Account', tier:'molecule', css:'.acct-card', figma:'2KLlzqIWlDcri8YIHwEd63',
  summary:'The account hero: a 62.5px balance on the fascia fill, loyalty label, View balance button.',
  use:['Account home.'],
  avoid:['More than one number on the card.'],
  anatomy:['Fill --card-bg (Debenhams aqua gradient, boohoo black, PLT garnet, KM orange) · numeral 62.5px tight · caps label · white button'],
  variants:[{name:'Default', html:'<div class="acct-page" style="width:340px;padding:16px"><div class="acct-card"><div class="amt">£12<small>.00</small></div><div class="lbl">Unlimited balance</div><button class="bd">View balance</button></div></div>'}],
  dev:{title:'Layouts/Customer Account', status:'partial', note:'Dev layout carries rewardsSummary / storeCreditSummary with --store-credit-* gradient tokens (teal on every fascia, pink on PLT). Ours skins it per brand.'} },

{ slug:'account-row', name:'Account row', group:'Account', tier:'molecule', css:'.acct-row',
  summary:'White panel row with a 24px icon, label and a status or tag on the right.',
  use:['Account menu, settings.'],
  avoid:['Rows without an icon.'],
  anatomy:['56px row · 24px icon · 16px label · status with 8px dot or tag pill'],
  variants:[{name:'Set', html:'<div class="acct-page" style="width:340px;padding:16px;display:flex;flex-direction:column;gap:8px"><button class="acct-row">'+ICON('delivery-fast')+'<span class="lbl">My orders</span><span class="st"><span class="dot"></span>1 on its way</span></button><button class="acct-row">'+ICON('quick-add')+'<span class="lbl">Unlimited</span><span class="tagpill">Active</span></button></div>'}],
  dev:{title:'Molecules/AccountLink', status:'match', note:'Dev AccountLink: name · route.'} },

{ slug:'sign-in', name:'Sign in', group:'Account', tier:'organism', css:'.auth · .auth-note · .lnk-row · .or-div · .soc · .soc-klarna', figma:'P2RiX62irafEZQjyLRhRx7 · 112-6838 / 2032-1885 / 2032-2027 (social tiles) · MzGyAVWG5pQVp56ePnGcp9 · 4421-999 (Continue with Klarna) · WChEtDPH0LcErdYFS9SESn · 1669-43380 / 1669-43700',
  summary:'One sign-in form, two weightings: email me a sign in link first (password as a link below the button) or email + password first (sign in link in the link row). Create account is a link under the CTA.',
  use:['Account sign in page, header account icon, checkout sign in (modal).','Link-first wherever the fascia has the sign in link; the password route can be switched off for security without a redesign.'],
  avoid:['Email-first-then-branch flows (enter email → password or create account): they reveal which emails have accounts.','Errors or confirmations that differ by whether the account exists: show the same sent screen for every email.','A separate “New to X?” create-account block.'],
  anatomy:['Title 24/30 strong, Title Case · intro 14/20 · gap 4 (16px) between blocks','Email (+ password with show/hide eye) · DS text fields, gap 3 (12px)','.lnk-row: 14px strong links, 1px rule between, gap 3 (12px)','Primary CTA full width · centred create-account link','OR divider · social tiles 54px equal width, white, 1px #E2E2E2, 4px radius on every fascia, or Klarna only: .soc-klarna 50px #0B051D “Continue with” + badge','≥1024: 480 card on --surface-sunken'],
  variants:[
    {name:'Link first', html:'<div class="auth" style="width:390px"><h2 class="auth-h">Sign In</h2><p class="auth-sub">Enter your email address and we’ll send you a one-time link to sign in.</p><div class="auth-fields"><label class="fld"><input placeholder=" " type="email"><span class="lbl">Email address</span></label></div><button class="bd pri">Send link</button><div class="or-div">or continue with</div><div class="soc-row"><button class="soc" aria-label="Sign in with Apple"><span class="ic"><img src="assets/ds/icons/lib/social-apple.svg" alt=""></span></button><button class="soc" aria-label="Sign in with Google"><span class="ic"><img src="assets/ds/icons/lib/social-google.svg" alt=""></span></button><button class="soc" aria-label="Sign in with Facebook"><span class="ic"><img src="assets/ds/icons/lib/social-facebook-circle.svg" alt=""></span></button><button class="soc" aria-label="Sign in with Klarna"><span class="ic ic--21"><img src="assets/ds/icons/lib/social-klarna.svg" alt=""></span></button></div><div class="lnk-row auth-pw" style="justify-content:center"><button class="lnk">Sign in with password</button></div><p class="auth-alt">New here? <a class="lnk" href="#">Create an account</a></p></div>'},
    {name:'Password first', html:'<div class="auth" style="width:390px"><h2 class="auth-h">Sign In</h2><div class="auth-fields"><label class="fld"><input placeholder=" " type="email"><span class="lbl">Email address</span></label><label class="fld fld--pw"><input placeholder=" " type="password"><span class="lbl">Password</span><button class="eye" aria-label="Show password">'+ICON('show')+'</button></label></div><div class="lnk-row"><button class="lnk">Forgot password?</button><span class="sep"></span><button class="lnk">Email me a sign in link</button></div><button class="bd pri">Sign in</button><div class="or-div">or continue with</div><div class="soc-row"><button class="soc" aria-label="Sign in with Apple"><span class="ic"><img src="assets/ds/icons/lib/social-apple.svg" alt=""></span></button><button class="soc" aria-label="Sign in with Google"><span class="ic"><img src="assets/ds/icons/lib/social-google.svg" alt=""></span></button><button class="soc" aria-label="Sign in with Facebook"><span class="ic"><img src="assets/ds/icons/lib/social-facebook-circle.svg" alt=""></span></button><button class="soc" aria-label="Sign in with Klarna"><span class="ic ic--21"><img src="assets/ds/icons/lib/social-klarna.svg" alt=""></span></button></div><p class="auth-alt">New here? <a class="lnk" href="#">Create an account</a></p></div>'},
    {name:'Link sent', html:'<div class="auth" style="width:390px"><h2 class="auth-h">Check Your Inbox</h2><p class="auth-sub">Use the link we sent to <b>jake@debenhams.com</b> to sign in. It expires in 15 minutes.</p><p class="auth-note">Not received it? Check your spam folder or make sure your email address is correct.</p></div>'}],
  dev:{title:', ', status:'partial', note:'Live play build (12 Oct) has the link + “Or use your password” stacked as two full forms and a separate Create account block; this is the target.'} },

/* ───────────── LAYOUT ───────────── */
{ slug:'tile-rail', name:'Square tile rail', group:'Layout', tier:'molecule', css:'.tile-rail',
  summary:'Edge-to-edge square tiles with 1px gutters — the Brand Room brand and category rail.',
  use:['Brand walls, category entry on content pages.'],
  avoid:['Mixing with roundels in one view.'],
  anatomy:['Square tiles · 1px gutters · label bottom-left'],
  variants:[{name:'Default', html:'<div class="tile-rail" style="width:480px"><a class="tile" href="#"><i style="display:block;position:relative;aspect-ratio:1;overflow:hidden">'+IMG(160,'--brand-light-3','--brand-light-1')+'</i><span>Tops</span></a><a class="tile" href="#"><i style="display:block;position:relative;aspect-ratio:1;overflow:hidden">'+IMG(200,'--brand-light-2','--brand-dark-1')+'</i><span>Jeans</span></a><a class="tile" href="#"><i style="display:block;position:relative;aspect-ratio:1;overflow:hidden">'+IMG(220,'--brand-dark-2','--brand-primary-dark')+'</i><span>Jackets</span></a></div>'}],
  dev:{title:'Molecules/CTA Card', status:'partial', note:'Dev CTA Card / Content Grid are the CMS equivalents (gradient, liveText, columns per breakpoint).'} },
];

/* ============================================================
   DEV STORYBOOK OVERLAY — every title in web-storybook.jamesb.play.dbztech.net
   (index.json, 09 Sep 2026: 80 components · 178 stories · 21 fascias) → ours.
   ours: catalogue slug(s) · status: match | partial | ours | dev-only | infra
   ============================================================ */
const DG_DEV_OVERLAY = [
 {dev:'BackToTop', stories:1, ours:[], status:'dev-only', note:'Adopt — position via buttonLocation. Needs our styling.'},
 {dev:'Atoms/Button', stories:11, ours:['button','icon-button','filter-pill'], status:'match', note:'19 variants → 6 types + states.'},
 {dev:'Atoms/Heading', stories:1, ours:[], status:'infra', note:'Typography foundations page is the spec.'},
 {dev:'Atoms/Text', stories:1, ours:[], status:'infra', note:'Typography foundations.'},
 {dev:'Atoms/Markdown', stories:1, ours:[], status:'infra', note:'CMS rich text — inherits type tokens.'},
 {dev:'Atoms/Icon', stories:9, ours:[], status:'match', note:'240 dev icons vs our 146-icon Figma library — reconcile names (System → Icons page).'},
 {dev:'Atoms/Image', stories:4, ours:[], status:'infra', note:'Media plumbing (CMS asset, crop, lazy).'},
 {dev:'Atoms/Picture', stories:4, ours:[], status:'infra', note:'Responsive sources.'},
 {dev:'Atoms/Video', stories:1, ours:[], status:'infra', note:'—'},
 {dev:'Atoms/Input Field', stories:2, ours:['text-field'], status:'match', note:''},
 {dev:'Atoms/Link', stories:2, ours:['text-link'], status:'match', note:''},
 {dev:'Atoms/Modal', stories:1, ours:['modal'], status:'match', note:''},
 {dev:'Atoms/Select', stories:1, ours:['select'], status:'match', note:''},
 {dev:'Atoms/Social Proof', stories:1, ours:['social-proof','stock-alert'], status:'match', note:''},
 {dev:'Atoms / Progress Spinner', stories:3, ours:['spinner'], status:'partial', note:'Add standalone sizes to ours.'},
 {dev:'Molecules/Accordion', stories:2, ours:['accordion'], status:'match', note:''},
 {dev:'Organisms/Product Accordion', stories:1, ours:['accordion'], status:'match', note:'PDP flavour of the same.'},
 {dev:'Molecules/AccountLink', stories:1, ours:['account-row'], status:'match', note:''},
 {dev:'Layouts/Customer Account', stories:1, ours:['account-card','account-row'], status:'partial', note:''},
 {dev:'Molecules/BNPL Banner', stories:1, ours:['bnpl'], status:'match', note:''},
 {dev:'Molecules/Banner', stories:2, ours:['usp-banner'], status:'partial', note:'CMS promo banner (colour, body, CTA). Ours covers the header USP types.'},
 {dev:'Molecules/Basket Social Proof', stories:1, ours:['social-proof'], status:'match', note:''},
 {dev:'Molecules/Product Social Proof', stories:1, ours:['social-proof'], status:'match', note:''},
 {dev:'Molecules/Basket/CartLineItemV2Card', stories:23, ours:['bag-item'], status:'partial', note:'23 dev states; ours draws the base.'},
 {dev:'Molecules/Basket/CartLineItemV2List', stories:1, ours:['bag-item'], status:'partial', note:'Compose.'},
 {dev:'Molecules/Basket/FreeGiftItemCard', stories:2, ours:[], status:'dev-only', note:'Bag GWP — spec from the bag project.'},
 {dev:'Molecules/Basket/FreeGiftsList', stories:3, ours:[], status:'dev-only', note:''},
 {dev:'Molecules/Basket/GiftcardDetailModal', stories:1, ours:['modal'], status:'partial', note:'Compose from Modal.'},
 {dev:'Molecules/Basket/OrderSummaryV2', stories:5, ours:['order-summary'], status:'match', note:''},
 {dev:'Molecules/Basket/QuantityPill', stories:6, ours:['quantity'], status:'match', note:''},
 {dev:'Molecules/Basket/WishlistButton', stories:2, ours:['icon-button'], status:'match', note:''},
 {dev:'Molecules/Blog Card', stories:1, ours:[], status:'dev-only', note:'Content / blog family — Brand Room backlog.'},
 {dev:'Molecules/Blog Header', stories:1, ours:[], status:'dev-only', note:''},
 {dev:'Molecules/Blog Panel/Detail', stories:1, ours:[], status:'dev-only', note:''},
 {dev:'Molecules/Blog Panel/Product Highlight', stories:1, ours:[], status:'dev-only', note:''},
 {dev:'Molecules/Blog Panel/Style Overview', stories:1, ours:[], status:'dev-only', note:''},
 {dev:'Molecules/Blog Panel Product Focus', stories:1, ours:[], status:'dev-only', note:''},
 {dev:'Molecules/CT Product Card', stories:3, ours:['product-card','badges','colour-swatches','ratings'], status:'match', note:'Same layer model.'},
 {dev:'Molecules/Product Card', stories:1, ours:['product-card'], status:'partial', note:'Simple CMS card.'},
 {dev:'Molecules/CTA Card', stories:1, ours:['tile-rail'], status:'partial', note:'Content tile.'},
 {dev:'Molecules/Cart Link', stories:2, ours:['header'], status:'match', note:'Bag icon + count.'},
 {dev:'Molecules/Search Link', stories:1, ours:['header'], status:'match', note:'Search trigger.'},
 {dev:'Molecules/Category Header', stories:1, ours:['category-nav','breadcrumb'], status:'partial', note:''},
 {dev:'Molecules/Category Highlight', stories:1, ours:[], status:'dev-only', note:'Content tile with gradient text panel.'},
 {dev:'Molecules/Content Container', stories:2, ours:[], status:'infra', note:'CMS section wrapper.'},
 {dev:'Organisms/Content Grid', stories:1, ours:['tile-rail'], status:'infra', note:'Columns per breakpoint.'},
 {dev:'Organisms/Content Sections', stories:1, ours:[], status:'infra', note:'CMS dynamic zone.'},
 {dev:'Molecules/Spacing', stories:1, ours:[], status:'infra', note:'Spacer — our spacing scale applies.'},
 {dev:'Molecules/Iframe', stories:1, ours:[], status:'infra', note:''},
 {dev:'Molecules/ContentImage', stories:1, ours:[], status:'infra', note:''},
 {dev:'Molecules/Image Header', stories:1, ours:[], status:'dev-only', note:'Content header.'},
 {dev:'Molecules/Magazine Header', stories:2, ours:[], status:'dev-only', note:''},
 {dev:'Molecules/Marquee', stories:1, ours:[], status:'dev-only', note:'Core PDP 2026 has a marquee entry (08 family) — align later.'},
 {dev:'Molecules/Hero Banner', stories:1, ours:[], status:'dev-only', note:'CMS hero with hotspots, carousel, live text.'},
 {dev:'Molecules/Countdown Timer', stories:2, ours:['usp-banner'], status:'partial', note:'Our countdown is the USP banner digits (.usp-cd).'},
 {dev:'Organisms/Countdown Banner', stories:4, ours:['usp-banner'], status:'partial', note:''},
 {dev:'Molecules/ Date Select', stories:1, ours:['select'], status:'partial', note:'Three selects — compose.'},
 {dev:'Molecules/Delivery Progress', stories:1, ours:['threshold'], status:'partial', note:'Step indicator; ours is the spend bar.'},
 {dev:'Molecules/Login Form', stories:2, ours:['text-field','button'], status:'partial', note:'Compose from field + button.'},
 {dev:'Molecules/Signup Form', stories:2, ours:['text-field','button'], status:'partial', note:'Compose.'},
 {dev:'Molecules/Newsletter Signup', stories:1, ours:['footer'], status:'match', note:'Our footer band.'},
 {dev:'Molecules/Message Block', stories:3, ours:['message'], status:'match', note:'7 dev types → 3 tones + icon flag.'},
 {dev:'Molecules/OrderTrack', stories:1, ours:[], status:'dev-only', note:'Account — order tracking.'},
 {dev:'Molecules/PersonalisedCarousel', stories:1, ours:['section-rail'], status:'partial', note:''},
 {dev:'Molecules/Product Image Gallery', stories:2, ours:[], status:'dev-only', note:'PDP gallery — Core PDP 2026 backlog.'},
 {dev:'Molecules/Product Price', stories:2, ours:['price'], status:'match', note:''},
 {dev:'Molecules/Search Promo Card', stories:1, ours:[], status:'dev-only', note:''},
 {dev:'Molecules/Side Panel', stories:3, ours:['modal'], status:'partial', note:'Retire for Modal · mobile Large (slide up) — one component, typed.'},
 {dev:'Molecules/Style Together', stories:3, ours:[], status:'dev-only', note:'= Shop The Look / Set (Core PDP 2026 repo).'},
 {dev:'Molecules/USP Banner', stories:1, ours:['usp-banner'], status:'match', note:''},
 {dev:'Molecules/USP Item', stories:1, ours:['usp-banner','usp-box'], status:'match', note:''},
 {dev:'Organisms/Footer', stories:1, ours:['footer'], status:'match', note:''},
 {dev:'Organisms/Footer Link', stories:1, ours:['footer'], status:'match', note:''},
 {dev:'Organisms/Header', stories:1, ours:['header'], status:'match', note:''},
 {dev:'Organisms/Primary Navigation (Desktop)', stories:4, ours:['header'], status:'partial', note:'Mega-menu panels not yet drawn on our side.'},
 {dev:'Organisms/Primary Navigation (Mobile)', stories:4, ours:['header'], status:'partial', note:'Drawer + sub nav.'},
 {dev:'Organisms/Basket/ProductReplenishmentV2Section', stories:4, ours:[], status:'dev-only', note:'Bag — buy again.'},
 {dev:'Organisms/Basket/ProductSamplesV2Section', stories:4, ours:[], status:'dev-only', note:'Bag — samples.'},
 {dev:'Pages/Basket/BasketV2Page', stories:4, ours:['bag-item','order-summary','promo-field','threshold'], status:'partial', note:'Page composition.'},
];

/* Dev theme variables (per fascia, RGB triplets consumed by Tailwind) → our semantic tokens. */
const DG_TOKEN_MAP = [
 {dev:'--color-primary', ours:'--surface-action', note:'Button fill. Debenhams 7BE7D8 ✓ · PLT 550503 ✓ · MAN/WH/TBR 000 ✓ · boohoo 444444 ✗ (ours 000) · KM 000 ✗ (ours D24508).'},
 {dev:'--color-button-text-primary', ours:'--text-on-action', note:'Debenhams black ✓, others white ✓ (Warehouse F1F1F1 ~).'},
 {dev:'--color-cta-primary / --color-cta-accent', ours:'--text-link · --border-action · --icon-action', note:'Debenhams 00787D ✓.'},
 {dev:'--color-primary-dark', ours:'--surface-action-pressed · --brand-dark-3', note:'Debenhams 529C92 = our brand-dark-3 ✓.'},
 {dev:'--color-primary-alt / --color-button-text-primary-alt', ours:'--brand-primary (boohoo F8B5CC)', note:'Alt pink button on boohoo — no variant on our side; token exists.'},
 {dev:'--color-primary-dark-alt', ours:'--brand-primary-dark', note:'boohoo BB305F vs ours CB4870 — confirm.'},
 {dev:'--color-secondary', ours:'--surface-raised', note:'White — but KM / Warehouse / TBR set it to black ✗ (check usage).'},
 {dev:'--color-text-secondary', ours:'--text-secondary', note:'Dev 767676 (Grey 4) vs ours 6B6B6B (Grey 5, AA body floor) ✗.'},
 {dev:'--color-bg-grey', ours:'--surface-sunken', note:'F8F8F8 vs ours FAFAFA · PLT FAF5E7 sand ✓.'},
 {dev:'--color-bg-secondary', ours:'--surface-media', note:'Grey 1 F2F2F2 ✓ (also feeds bg-grey-1/2 utilities).'},
 {dev:'--color-button-secondary-border', ours:'--btn-outline', note:'Dev grey B5B5B5 on every fascia; ours brand outline (70BEB3 / 000 / 360502) ✗ — decide.'},
 {dev:'--color-primary-nav / --color-primary-nav-text', ours:'--nav-bg / --nav-fg', note:'Debenhams B1F1E8 vs ours B8FDF4 (light-2) ~ · PLT black/white ✓ · KM/TBR values malformed in dev (NaN).'},
 {dev:'--color-header-background', ours:'--surface-page', note:'PLT FFFDF7 ✓.'},
 {dev:'--color-search-input-background / -text / -placeholder', ours:'--surface-media · --text-primary · --text-secondary', note:'F2F2F2 / 000 / 767676.'},
 {dev:'--color-facet-pill-bg-selected / -border-selected', ours:'--brand-neutral · --border-action', note:'Debenhams E8F4F2 / 00787D ✓.'},
 {dev:'--color-footer-help-header-background / -text', ours:'--ft-band', note:'Dev peach FFF1E8 on all fascias; Warehouse F1F1F1 + D6FF00 text. Ours: per-brand band.'},
 {dev:'--font-body / --font-serif / --font-cta / --font-heading', ours:'--font-family-base', note:'Same families (Geologica, Montserrat, Roboto, Jost, Archivo) except KM CTA/heading = WorkSans in dev ✗; Warehouse Roboto — ours now Roboto too.'},
 {dev:'--font-weight-base / -semibold / -bold', ours:'--w-regular / --w-mid / --w-strong', note:'PLT 300 / 400 / 400 in dev vs ours 400 / 400 / 700 ✗.'},
 {dev:'--default-rounding', ours:'--radius-default', note:'PLT 0 · TBR 0 ✓ — identical square-mode rule.'},
 {dev:'--default-text-colour', ours:'--text-primary', note:'PLT 333333 vs ours 0F0F0F.'},
 {dev:'--text-cta', ours:'button label size (16px)', note:'PLT 14px in dev.'},
 {dev:'--text-xs … --text-4xl', ours:'type scale (Typography page)', note:'PLT flattens 12/12/16/16/16/16 in dev — check against the locked scale.'},
 {dev:'--wishlist-opacity', ours:'.pc-iconbtn ground', note:'0.7 on KM / TBR.'},
 {dev:'--social-proof-* (plp / pdp / basket)', ours:'--surface-media · .pc-taggstar / .sp-pdp / .sp-bag', note:'Per-location colour, alpha, blur, border.'},
 {dev:'--store-credit-gradient-* / -button / -text', ours:'--card-bg · --card-btn-bg', note:'Teal 1ABC9C gradient on all but PLT (pink) in dev; ours per brand.'},
 {dev:'--unlimited-*-bag-button-bg / -text', ours:'--action-buy / --text-on-action', note:'Debenhams Unlimited ATB (black).'},
 {dev:'--text-markdown-colour', ours:'--price-sale', note:'PLT C90000 ✓.'},
 {dev:'--swiper-pagination-color', ours:'--dot', note:'Carousel dots — MAN 284D7B in dev looks stale.'},
 {dev:'grey-1 … grey-6 (fixed utilities)', ours:'Grey 1–6 primitives', note:'F2F2F2 · E7E7E7 · B5B5B5 · 767676 · 6B6B6B · 323232 — identical ramp ✓.'},
];

/* our data-brand slug ↔ dev fascia global */
const DG_FASCIA_MAP = {debenhams:'debenhams', boohoo:'boohooww', boohooman:'boohooman', plt:'prettylittlething', karenmillen:'karenmillen', warehouse:'warehouse', brandroom:'thebrandroom'};

const api = {DG_CATALOGUE, DG_DEV_OVERLAY, DG_TOKEN_MAP, DG_FASCIA_MAP};
if (typeof module !== 'undefined' && module.exports) module.exports = api; else Object.assign(root, api);
})(typeof window !== 'undefined' ? window : globalThis);
