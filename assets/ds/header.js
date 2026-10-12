/* ============================================================
   DG Group Design System — Header (C-05), drop-in. Two headers, each mobile + desktop:
     · Main header  — logo · search · flag · account · wishlist · bag (+ burger on mobile), category nav on desktop.
       Figma DS aIHmkCaTy9c5EWOxAGw0So · 3793-3545. Content = each fascia's live header, captured 12 Oct 2026.
     · Inverted (Misspap, Training Dept) — .hd--inv: black logo bar, light mark + white icons from the --hd-* tokens.
     · Checkout header — logo + lock + "Secure checkout" (live Debenhams checkout, 12 Oct 2026); logo centred on desktop.
   Use:   <header data-hd></header>                         main, mobile (fascia from html[data-brand])
          <header data-hd="desktop"></header>                main, desktop
          <header data-hd="checkout" data-hd-device="desktop"></header>
          window.DG_header(el, slug, kind, device)  ·  window.DG_headerHTML(slug, kind, device)
   USP banners sit under the main header (assets/ds/usp.js, <div data-usp-banners>) — not part of this component.
   ============================================================ */
(function (root) {
const A = (root.DG_ASSET_BASE || '') + 'assets/';
/* live 12 Oct 2026 — nav in live order and live case; '!' = sale styling, '+' = highlighted (Warehouse Outlet) */
const F = {
  debenhams: { name: 'Debenhams', search: 'Search Fashion, Home & Beauty', flag: true, wish: 'heart', nav: ['!Sale', 'New', 'Women', 'Men', 'Kids', 'Home', 'Electricals', 'Wedding', 'Beauty', 'Fragrance', 'Gifts', 'Christmas', 'Brands'] },
  boohoo: { name: 'boohoo', search: 'Search Products and Brands', flag: true, wish: 'heart', nav: ['NEW IN', 'WOMENS', 'DRESSES', 'AUTUMN', 'SHOES', 'ACCESSORIES', 'SHOP BY FIT', 'DENIM', 'OCCASION', 'TRENDS', 'DSGN', 'MENS', 'BEAUTY', 'BRANDS', '!SALE'] },
  boohooman: { name: 'BOOHOOMAN', search: 'Search Products and Brands', flag: true, wish: 'bookmark', bold: true, nav: ['NEW', 'CLOTHING', 'BRANDS', 'ACTIVE', 'ESSENTIALS', 'PLUS', 'TALL', 'GOING OUT', 'SHOES & ACCESSORIES', '!SALE'] },
  plt: { name: 'PrettyLittleThing', search: 'SEARCH', flag: true, wish: 'heart', plt: true, nav: ['NEW ARRIVALS', 'CLOTHING', 'DRESSES', 'CO-ORDS', 'AUTUMN', 'TOPS', 'SHOES & ACCESSORIES', 'TRENDING', 'SHOP BY FIT', 'DENIM', 'ATHLEISURE', 'DSGN', 'BEAUTY', 'BRANDS', '!SALE'] },
  karenmillen: { name: 'Karen Millen', search: 'Search Products and Brands', flag: true, wish: 'bookmark', nav: ['!SALE', 'NEW IN', 'CLOTHING', 'DRESSES', 'COATS & JACKETS', 'OCCASION WEAR', 'SHOES', 'BEAUTY', 'BRANDS', 'HOME'] },
  warehouse: { name: 'Warehouse', search: 'Search Products and Brands', flag: false, wish: 'heart', nav: ['NEW ARRIVALS', 'CLOTHING', 'DRESSES', 'DAYWEAR', 'FORMAL', '+OUTLET'] },
  brandroom: { name: 'The Brand Room', search: 'Search Products and Brands', flag: false, wish: 'bookmark', nav: ['New', 'Women', 'Men', 'Footwear', 'Accessories', 'Brands'] },
  /* inv = inverted header (black logo bar, white icons; --hd-* tokens), logo = the light-on-dark mark */
  misspap: { name: 'Misspap', search: 'Search Products and Brands', flag: false, wish: 'heart', inv: true, logo: 'misspap-red', nav: ['Sale', 'New In', 'Clothing', 'Dresses', 'Shoes & Accessories', 'Going Out', 'Occasion', 'Beauty'] },
  trainingdept: { name: 'Training Dept', search: 'SEARCH', flag: false, wish: 'bookmark', inv: true, underline: true, bold: true, logo: 'trainingdept-white', nav: ['SHOP', 'NEW IN', 'BESTSELLERS', 'LIFTING', 'PERFORMANCE'] },
};
const fallback = slug => Object.assign({}, F.debenhams, { name: (root.DG_FASCIAS || []).reduce((n, f) => f[0] === slug ? f[1] : n, slug), flag: false });
const esc = s => String(s).replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
const ic = (d, n) => d.plt ? `${A}ds/icons/plt-${n === 'wish' ? 'heart' : n}.svg` : `${A}ds/icons/${n === 'wish' ? (d.wish === 'bookmark' ? 'bookmark' : 'heart-24') : n}.svg`;
const logo = (slug, d, cls, inv) => `<img class="${cls}" src="${A}brands/${inv && d.logo || slug}.svg" alt="${esc(d.name)}" onerror="this.replaceWith(Object.assign(document.createElement('b'),{className:'${cls} hd-logo-txt',textContent:'${esc(d.name).replace(/'/g, "\\'")}'}))">`;

function main(slug, d, device) {
  const flag = d.flag ? `<button aria-label="Country"><img class="hd-flag" src="${A}ds/icons/flags/united-kingdom.svg" alt=""></button>` : '';
  const icons = (search) => `<div class="hd-icons">${search}${device === 'desktop' ? flag : ''}<button aria-label="Account"><img src="${ic(d, 'account')}" alt=""></button><button aria-label="Wishlist"><img src="${ic(d, 'wish')}" alt=""></button><button class="hd-count" data-n="2" aria-label="Bag"><img src="${ic(d, 'bag')}" alt=""></button></div>`;
  if (device !== 'desktop') return `<div class="hd-bar"><div class="hd-left"><button class="hd-burger" aria-label="Menu"><img src="${A}ds/icons/hamburger.svg" alt=""></button>${logo(slug, d, 'hd-logo', true)}</div>${icons(`<button aria-label="Search"><img src="${ic(d, 'search')}" alt=""></button>`)}</div>`;
  const nav = d.nav.map(n => n[0] === '!' ? `<a class="sale" href="#">${esc(n.slice(1))}</a>` : n[0] === '+' ? `<a class="hl" href="#">${esc(n.slice(1))}</a>` : `<a href="#">${esc(n)}</a>`).join('');
  return `<div class="hd-bar hd-bar--desktop">${logo(slug, d, 'hd-logo', true)}<div class="hd-search${d.plt || d.underline ? ' hd-search--underline' : ''}"><span>${esc(d.search)}</span><span class="ics"><img src="${A}ds/icons/camera.svg" alt=""><img src="${ic(d, 'search')}" alt=""></span></div>${icons('')}</div><nav class="hd-nav${d.bold ? ' hd-nav--bold' : ''}" aria-label="Categories">${nav}</nav>`;
}
function checkout(slug, d) {
  return `<div class="co-hd">${logo(slug, d, 'co-logo')}<span class="co-sec"><img src="${A}ds/icons/lib/icons-lock.svg" alt="">Secure checkout</span></div>`;
}
function html(slug, kind, device) {
  const d = F[slug] || fallback(slug);
  return kind === 'checkout' ? checkout(slug, d) : main(slug, d, device);
}
function render(el, slug, kind, device) {
  const a = el.getAttribute('data-hd') || '';
  kind = kind || (a === 'checkout' ? 'checkout' : 'main');
  device = device || el.getAttribute('data-hd-device') || (a === 'desktop' ? 'desktop' : 'mobile');
  slug = slug || (el.closest('[data-brand]') || document.documentElement).getAttribute('data-brand') || 'debenhams';
  el.classList.add('hd'); el.classList.toggle('hd--checkout', kind === 'checkout'); el.classList.toggle('hd--desktop', device === 'desktop'); el.classList.toggle('hd--inv', kind !== 'checkout' && !!(F[slug] || {}).inv);
  el.dataset.hdBrand = slug; el.dataset.hdKind = kind; el.dataset.hdDevice = device;
  el.innerHTML = html(slug, kind, device);
  return el;
}
root.DG_HEADER = F;
root.DG_headerHTML = html;
root.DG_header = render;
const auto = () => document.querySelectorAll('[data-hd]').forEach(el => render(el));
if (typeof document !== 'undefined') { if (document.readyState !== 'loading') auto(); else document.addEventListener('DOMContentLoaded', auto) }
})(typeof window !== 'undefined' ? window : globalThis);
