/**
 * Tailwind preset for the Debenhams Group design system.
 *
 * This preset tells Tailwind v3 about all our design tokens, so components
 * can use classes like `bg-action`, `text-primary`, `rounded-default`,
 * `p-16` etc. Each class resolves to the right CSS variable, which
 * resolves per brand mode.
 *
 * Consumer apps import this preset in their tailwind.config.js:
 *   presets: [require('@designsystem-debenhamsgroup/tokens/tailwind-preset')]
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // We override the default theme entirely with our token-driven values.
    // (Don't `extend` — that would mix in Tailwind's defaults and create drift.)

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',

      // Text
      'text-primary': 'var(--text-primary)',
      'text-secondary': 'var(--text-secondary)',
      'text-disabled': 'var(--text-disabled)',
      'text-inverse': 'var(--text-inverse)',
      'text-on-action': 'var(--text-on-action)',
      'text-link': 'var(--text-link)',
      'text-link-hover': 'var(--text-link-hover)',
      'text-error': 'var(--text-error)',
      'text-success': 'var(--text-success)',
      'text-warning': 'var(--text-warning)',

      // Surface
      page: 'var(--surface-page)',
      sunken: 'var(--surface-sunken)',
      raised: 'var(--surface-raised)',
      inverse: 'var(--surface-inverse)',
      overlay: 'var(--surface-overlay)',
      action: 'var(--surface-action)',
      'action-hover': 'var(--surface-action-hover)',
      'action-pressed': 'var(--surface-action-pressed)',
      'action-disabled': 'var(--surface-action-disabled)',
      accent: 'var(--surface-accent)',
      'accent-subtle': 'var(--surface-accent-subtle)',
      'surface-error': 'var(--surface-error)',
      'surface-success': 'var(--surface-success)',
      'surface-warning': 'var(--surface-warning)',

      // Border (also used as colour values for border-*)
      'border-subtle': 'var(--border-subtle)',
      'border-default': 'var(--border-default)',
      'border-strong': 'var(--border-strong)',
      'border-action': 'var(--border-action)',
      'border-focus': 'var(--border-focus)',
      'border-error': 'var(--border-error)',

      // Icon
      'icon-primary': 'var(--icon-primary)',
      'icon-secondary': 'var(--icon-secondary)',
      'icon-disabled': 'var(--icon-disabled)',
      'icon-inverse': 'var(--icon-inverse)',
      'icon-on-action': 'var(--icon-on-action)',
      'icon-action': 'var(--icon-action)',
    },

    spacing: {
      0: 'var(--space-0)',
      0.5: 'var(--space-2)',
      1: 'var(--space-4)',
      2: 'var(--space-8)',
      3: 'var(--space-12)',
      4: 'var(--space-16)',
      5: 'var(--space-20)',
      6: 'var(--space-24)',
      8: 'var(--space-32)',
      10: 'var(--space-40)',
      12: 'var(--space-48)',
      16: 'var(--space-64)',
      20: 'var(--space-80)',
      24: 'var(--space-96)',
      32: 'var(--space-128)',
    },

    borderRadius: {
      none: '0',
      default: 'var(--radius-default)',
      DEFAULT: 'var(--radius-default)',
      lg: 'var(--radius-lg)',
      pill: 'var(--radius-pill)',
      full: '9999px',
    },

    borderWidth: {
      0: '0',
      DEFAULT: 'var(--border-width-default)',
      1: 'var(--border-width-default)',
      2: 'var(--border-width-emphasis)',
    },

    fontFamily: {
      base: 'var(--font-family-base)',
      DEFAULT: 'var(--font-family-base)',
    },

    fontSize: {
      10: ['10px', { lineHeight: 'normal' }],
      12: ['12px', { lineHeight: 'normal' }],
      14: ['14px', { lineHeight: 'normal' }],
      16: ['16px', { lineHeight: 'normal' }],
      20: ['20px', { lineHeight: 'normal' }],
      24: ['24px', { lineHeight: 'normal' }],
      28: ['28px', { lineHeight: 'normal' }],
      32: ['32px', { lineHeight: 'normal' }],
      36: ['36px', { lineHeight: 'normal' }],
      40: ['40px', { lineHeight: 'normal' }],
      48: ['48px', { lineHeight: 'normal' }],
    },

    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },

    zIndex: {
      base: 'var(--z-base)',
      raised: 'var(--z-raised)',
      dropdown: 'var(--z-dropdown)',
      sticky: 'var(--z-sticky)',
      banner: 'var(--z-banner)',
      overlay: 'var(--z-overlay)',
      modal: 'var(--z-modal)',
      popover: 'var(--z-popover)',
      toast: 'var(--z-toast)',
      tooltip: 'var(--z-tooltip)',
    },

    transitionDuration: {
      fast: 'var(--motion-duration-fast)',
      base: 'var(--motion-duration-base)',
      slow: 'var(--motion-duration-slow)',
    },

    transitionTimingFunction: {
      standard: 'var(--motion-easing-standard)',
      emphasised: 'var(--motion-easing-emphasised)',
    },
  },
};
