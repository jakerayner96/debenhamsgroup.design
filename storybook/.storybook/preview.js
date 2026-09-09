/** DG Group Design System — preview.
 *  Loads the canonical token + component CSS and exposes the same `fascia` toolbar the
 *  front-end Storybook uses (same key, same values), mapped onto our `data-brand` modes. */
import '../../assets/ds/tokens.css';
import '../../assets/ds/components.css';

// Web fonts the fascias use (the site loads the same set).
if (typeof document !== 'undefined' && !document.getElementById('dg-fonts')) {
  const l = document.createElement('link');
  l.id = 'dg-fonts'; l.rel = 'stylesheet';
  l.href = 'https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;600&family=Montserrat:wght@400;500;600;700&family=Roboto:wght@400;700&family=Jost:wght@400;500;600&family=Archivo:wght@400;600;700&display=swap';
  document.head.appendChild(l);
}

// dev fascia value → our data-brand slug (fascias we have not themed fall back to Debenhams)
const FASCIA_TO_BRAND = {
  debenhams: 'debenhams', debenhamsoutlet: 'debenhams', boohooww: 'boohoo', boohooman: 'boohooman',
  prettylittlething: 'plt', karenmillen: 'karenmillen', warehouse: 'warehouse', thebrandroom: 'brandroom',
};

export const globalTypes = {
  fascia: {
    description: 'Fascia (brand) used to theme the preview — mirrors the front-end Storybook toolbar',
    toolbar: {
      title: 'Fascia', icon: 'globe', dynamicTitle: true,
      items: [
        { value: 'debenhams', title: 'Debenhams' },
        { value: 'boohooww', title: 'Boohoo' },
        { value: 'boohooman', title: 'BOOHOOMAN' },
        { value: 'prettylittlething', title: 'PrettyLittleThing' },
        { value: 'karenmillen', title: 'Karen Millen' },
        { value: 'warehouse', title: 'Warehouse (draft)' },
        { value: 'thebrandroom', title: 'The Brand Room (draft)' },
        { value: 'debenhamsoutlet', title: 'Debenhams Outlet → Debenhams tokens' },
      ],
    },
  },
};

export const initialGlobals = { fascia: 'debenhams' };

const withBrand = (story, ctx) => {
  const brand = FASCIA_TO_BRAND[ctx.globals.fascia] || 'debenhams';
  document.documentElement.setAttribute('data-brand', brand);
  const wrap = document.createElement('div');
  wrap.style.cssText = 'font-family:var(--font-family-base);color:var(--text-primary);background:var(--surface-page);padding:24px;min-height:100%;display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start';
  const out = story();
  if (typeof out === 'string') wrap.innerHTML = out; else wrap.appendChild(out);
  // brand logos follow the mode, as on the site
  wrap.querySelectorAll('.brandlogo').forEach(i => { i.src = 'assets/brands/' + brand + '.svg'; });
  return wrap;
};

export const decorators = [withBrand];

export const parameters = {
  backgrounds: { disable: true },
  layout: 'fullscreen',
  options: {
    storySort: { order: ['DG', ['Introduction', 'Actions', 'Forms', 'Feedback', 'Product', 'PDP modules', 'Navigation', 'Overlays & bag', 'Chips & pills', 'Account', 'Layout']] },
  },
};
