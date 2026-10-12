/* ============================================================
   DG Group Design System — Footer (C-08), drop-in.
   Figma DS aIHmkCaTy9c5EWOxAGw0So · 664-1064 (Desktop 664-1062 · Mobile 664-1063).
   Content = each fascia's live footer, captured 12 Oct 2026 at 1440 and 390.

   Use:   <footer data-ftr></footer>               (fascia from <html data-brand>)
          <footer data-ftr="plt"></footer>          (fixed fascia)
          window.DG_footer(el, slug)                (render into any element)
   One responsive component (container queries in components.css .ftr):
   ≥ 1024 wide = desktop (columns + social / app rail); below = mobile (accordions, centred stack).
   ============================================================ */
(function (root) {
const A = (root.DG_ASSET_BASE || '') + 'assets/';
const PAY = { visa: 'Visa', mastercard: 'Mastercard', amex: 'American Express', maestro: 'Maestro', 'visa-electron': 'Visa Electron', 'apple-pay': 'Apple Pay', payplus: 'Pay+', paypal: 'PayPal', klarna: 'Klarna', clearpay: 'Clearpay', 'google-pay': 'Google Pay' };
const PAY_ALL = ['visa', 'mastercard', 'amex', 'maestro', 'visa-electron', 'apple-pay', 'paypal', 'klarna', 'clearpay', 'google-pay'];
const PAY_PLUS = ['visa', 'mastercard', 'amex', 'maestro', 'visa-electron', 'apple-pay', 'payplus', 'paypal', 'klarna', 'clearpay', 'google-pay'];
const SOC = { instagram: ['social-instagram.svg', 'Instagram'], pinterest: ['social-pintrest.svg', 'Pinterest'], facebook: ['social-facebook.svg', 'Facebook'], x: ['social-x.svg', 'X'], youtube: ['you-tube.svg', 'YouTube'], tiktok: ['social-tik-tok.svg', 'TikTok'] };
const SISTERS = [['debenhams', 'Debenhams'], ['dorothyperkins', 'Dorothy Perkins'], ['wallis', 'Wallis'], ['oasis', 'Oasis'], ['coast', 'Coast'], ['burton', 'Burton'], ['misspap', 'Misspap'], ['warehouse', 'Warehouse']];
const NEWS = { t: "Let's get to know each other", s: 'Sign up to receive emails from us, so you never miss out on the good stuff.' };
const NEWS_KM = { t: '', s: 'Receive style tips, exclusive offers & more' };

/* per fascia — live 12 Oct 2026 (column order = live desktop left → right) */
const F = {
  debenhams: { name: 'Debenhams', news: NEWS, social: ['instagram', 'pinterest', 'facebook', 'youtube', 'tiktok'], apps: true, pay: PAY_PLUS, sisters: true, cols: [
    ['Shopping with Debenhams', ['Download The App', 'Unlimited Delivery', 'Debenhams Deliver+', 'Gift Card Balance', 'DebenhamsPay+', 'Debenhams Mastercard', 'Clearpay', 'Klarna', 'PayPal', 'Student Beans', 'UNiDAYS', 'Beauty Club']],
    ['Customer Care', ['About Us', 'Return or Track Your Order', 'Frequently Asked Questions', 'Delivery Information', 'Returns Information', 'Contact Us']],
    ['Privacy & Legal', ['Privacy Policy', 'Terms & Conditions', 'About Cookies', 'Terms of Use', 'Concessionaire Brands', 'Product']],
    ['More From Debenhams', ['The Debrief', 'Careers At Debenhams', 'Modern Slavery Statement', 'Beauty Showroom', 'Debenhams Rewards']],
    ['Grow With Debenhams', ['Sell on Debenhams', 'Delivered By Debenhams', 'Fulfilled By Debenhams']]] },
  boohoo: { name: 'boohoo', news: NEWS, social: ['instagram', 'pinterest', 'facebook', 'youtube', 'tiktok'], country: 'Boohoo United Kingdom | £ GBP', apps: true, pay: PAY_ALL, cols: [
    ['Shopping with boohoo', ['Premier Delivery', 'Gift Cards', 'Gift Card Balance', 'PayPal', 'Klarna', 'Clearpay', 'Student Beans', 'UNiDAYS', 'boohoo Collective', 'boohoo App', 'Size Guide']],
    ['Customer Care', ['Return Your Order', 'Frequently Asked Questions', 'Delivery Information', 'Returns Information', 'Contact Us']],
    ['Privacy & Legal', ['Privacy Policy', 'Terms & Conditions', 'About Cookies', 'Terms of Use', 'Product']],
    ['More From boohoo', ['Modern Slavery Statement', 'Careers At boohoo', 'boohoo Rewards', 'Refer a friend', 'Listen Now: Overdressed & Oversharing Podcast']],
    ['Other Countries', ['United States', 'France', 'Ireland', 'Netherlands', 'Australia', 'Sweden', 'Germany', 'Rest of World']]] },
  boohooman: { name: 'BOOHOOMAN', caps: true, news: NEWS, social: ['instagram', 'pinterest', 'facebook', 'youtube', 'tiktok', 'x'], country: 'United Kingdom | £ GBP', apps: true, pay: PAY_ALL, cols: [
    ['How can we help?', ['Frequently Asked Questions', 'Contact Us', 'Track & Return My Order', 'Delivery Options', 'Returns Policy - Updated September 2026', 'Size Guide', 'Premier Delivery']],
    ['Information', ["T&C's - Updated September 2026", 'Terms of Use', 'Gift Cards', 'Gift Card Balance', 'Klarna', 'Clearpay', 'PayPal', 'Deliver+', 'Privacy Notice - Updated June 2026', 'About Cookies', 'Student Discount', 'Key Worker Discount', 'BOOHOOMAN App', 'Refer A Friend', 'Ambassador Programme', 'Rewards']],
    ['About us', ['Investor Relations', 'Modern Slavery Statement', 'Careers']]] },
  plt: { name: 'PrettyLittleThing', caps: true, quiet: true, news: NEWS, social: ['instagram', 'facebook', 'youtube', 'tiktok', 'x'], country: 'PrettyLittleThing United Kingdom | GBP', apps: true, pay: PAY_ALL, cols: [
    ['Let us help you', ['Help', 'Returns', 'Delivery', 'Size Guide', 'Royalty', 'Gift Cards', 'Clearpay', 'Klarna', 'PayPal']],
    ['About us', ['About Us', 'Diversity', 'Graduate & Student Discount', 'Student Beans', 'Modern Slavery Statement', 'PLT Rewards']],
    ['Information', ['Terms & Conditions', 'Privacy Policy', 'App Info', 'About Cookies', 'Terms of Use']],
    ['My account', ['Order History', 'Track My Order', 'Refer A Friend']]] },
  karenmillen: { name: 'Karen Millen', news: NEWS_KM, social: ['instagram', 'pinterest', 'facebook', 'youtube', 'tiktok'], country: 'Karen Millen UK £', apps: true, pay: PAY_ALL, cols: [
    ['Shopping with Karen Millen', ['Premier Delivery', 'Karen Millen App', 'Black Friday 2026 - Sign Up Now', 'Gift Cards', 'Gift Card Balance', 'Student Beans', 'UNiDAYS', 'Key Workers Discount', 'PayPal', 'Klarna', 'Clearpay']],
    ['Customer Care', ['Frequently Asked Questions', 'Return Your Order', 'Delivery Information', 'Deliver+', 'Returns Information', 'Contact Us', 'Size Guide']],
    ['Privacy & Legal', ['Privacy Policy', 'Terms & Conditions', 'Terms of Use', 'About Cookies', 'Product']],
    ['More From Karen Millen', ['About Karen Millen', 'Notebook', 'Karen Millen Alterations', 'Modern Slavery Statement']],
    ['Other Countries', ['United Kingdom', 'Ireland', 'United States', 'Australia', 'Rest of the World']]] },
  warehouse: { name: 'Warehouse', news: NEWS, social: ['instagram', 'pinterest', 'facebook'], apps: true, pay: PAY_PLUS, sisters: true, cols: [
    ['Shopping with Warehouse', ['Unlimited Delivery', 'Clearpay', 'Klarna', 'Student Beans']],
    ['Customer Care', ['Return Your Order', 'Frequently Asked Questions', 'Delivery Information', 'Returns Information', 'Contact Us']],
    ['Privacy & Legal', ['Privacy Policy', 'Terms & Conditions', 'About Cookies', 'Terms of Use', 'Concessionaire Brands', 'Product', 'Modern Slavery Statement']]] },
  brandroom: { name: 'The Brand Room', news: NEWS_KM, social: [], apps: false, pay: ['visa', 'mastercard', 'amex', 'maestro', 'visa-electron', 'apple-pay', 'paypal', 'clearpay', 'klarna'], cols: [
    ['Customer Care', ['Frequently Asked Questions', 'Return Your Order', 'Delivery Information', 'Returns Information', 'Contact Us']],
    ['Shopping with The Brand Room', ['PayPal', 'Klarna', 'Clearpay']],
    ['Privacy & Legal', ['Privacy Policy', 'Terms & Conditions', 'Terms of Use', 'About Cookies', 'Product']],
    ['More From The Brand Room', ['About The Brand Room', 'Modern Slavery Statement']]] },
};
/* fascias without a captured footer use the Debenhams-family template with their own name */
const fallback = slug => Object.assign({}, F.debenhams, { name: (root.DG_FASCIAS || []).reduce((n, f) => f[0] === slug ? f[1] : n, slug), sisters: false, cols: F.debenhams.cols.slice(1, 4).map(([h, l]) => [h.replace('Debenhams', ''), l]) });

const esc = s => String(s).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
const chev = '<i class="ftr-chev" aria-hidden="true"></i>';
function html(slug) {
  const d = F[slug] || fallback(slug);
  const sister = d.sisters ? SISTERS.filter(([s]) => s !== slug) : [];
  const social = d.social.length ? `<div class="ftr-blk ftr-soc"><b class="ftr-h4">Follow Us On Social Media</b><div class="ftr-icons">${d.social.map(s => `<a href="#" aria-label="${SOC[s][1]}"><img src="${A}ds/icons/lib/${SOC[s][0]}" alt=""></a>`).join('')}</div></div>` : '';
  const country = d.country ? `<div class="ftr-blk ftr-ctry"><b class="ftr-h4">Country</b><button class="ftr-select" type="button"><img src="${A}ds/icons/flags/united-kingdom.svg" alt=""><span>${esc(d.country)}</span>${chev}</button></div>` : '';
  const apps = d.apps ? `<div class="ftr-blk ftr-app"><b class="ftr-h4">Download Our App</b><div class="ftr-badges"><a href="#"><img src="${A}ds/icons/apps/google-play.png" alt="Get it on Google Play"></a><a href="#"><img src="${A}ds/icons/apps/app-store.svg" alt="Download on the App Store"></a></div></div>` : '';
  return `
  <div class="ftr-news"><div class="ftr-in">
    <div class="ftr-copy">${d.news.t ? `<h3>${esc(d.news.t)}</h3>` : ''}<p>${esc(d.news.s)}</p></div>
    <div class="ftr-form"><div class="ftr-sub"><input type="email" placeholder="Please enter your email address" aria-label="Email address"><button class="bd pri" type="button">Subscribe</button></div>
      <p class="ftr-legal">By submitting your details, you agree to receive marketing communications from ${esc(d.name)} &amp; our <a href="#">family of brands</a> by email. You can unsubscribe at any point. You also consent to the use of your details in accordance with our <a href="#">Privacy Policy.</a></p></div>
  </div></div>
  <div class="ftr-in ftr-main">
    <nav class="ftr-cols${d.caps ? ' caps' : ''}" aria-label="Footer">${d.cols.map(([h, ls], i) => `<div class="ftr-col"><button class="ftr-h" type="button" aria-expanded="false" aria-controls="ftr-l-${slug}-${i}">${esc(h)}${chev}</button><ul id="ftr-l-${slug}-${i}">${ls.map(l => `<li><a href="#">${esc(l)}</a></li>`).join('')}</ul></div>`).join('')}</nav>
    <div class="ftr-rail">${social}${country}${apps}</div>
  </div>
  <div class="ftr-in ftr-strip">
    ${sister.length ? `<div class="ftr-sis">${sister.map(([s, n]) => `<img src="${A}brands/${s}.svg" alt="${n}">`).join('')}</div>` : '<span></span>'}
    <div class="ftr-pay">${d.pay.map(p => `<img src="${A}ds/icons/pay/${p}.png" alt="${PAY[p]}">`).join('')}</div>
  </div>
  <div class="ftr-base"><img class="ftr-logo" src="${A}brands/${slug}.svg" alt="${esc(d.name)}" onerror="this.remove()"><small>Copyright &copy; 2026 ${esc(d.name)}</small></div>`;
}
function render(el, slug) {
  slug = slug || el.getAttribute('data-ftr') || (el.closest('[data-brand]') || document.documentElement).getAttribute('data-brand') || 'debenhams';
  el.classList.add('ftr'); el.dataset.ftrBrand = slug; el.innerHTML = html(slug);
  el.querySelectorAll('.ftr-h').forEach(b => b.addEventListener('click', () => { const o = b.getAttribute('aria-expanded') !== 'true'; b.setAttribute('aria-expanded', o); b.parentElement.classList.toggle('open', o) }));
  return el;
}
root.DG_FOOTER = F;
root.DG_footerHTML = html;
root.DG_footer = render;
const auto = () => document.querySelectorAll('[data-ftr]').forEach(el => render(el));
if (typeof document !== 'undefined') { if (document.readyState !== 'loading') auto(); else document.addEventListener('DOMContentLoaded', auto) }
})(typeof window !== 'undefined' ? window : globalThis);
