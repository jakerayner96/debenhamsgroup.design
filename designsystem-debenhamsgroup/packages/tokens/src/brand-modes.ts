/**
 * Brand modes.
 *
 * Each brand defines how its semantic colour and font tokens resolve.
 * Components consume semantic tokens (via CSS custom properties);
 * the brand mode swaps which primitive each semantic token points to.
 *
 * Active brand on the page is set via `<html data-brand="debenhams">` etc.
 *
 * Adding a new brand:
 * 1. Add an entry to the `brandModes` object below
 * 2. Provide either `aquaFamily`-equivalent palette or pull from existing colour.ts entries
 * 3. The Tailwind preset and CSS generator pick it up automatically
 */

import { aqua, pink, neutral, status } from './colour';
import { fontFamily } from './type';
import { radius } from './radius';

export type BrandId =
  | 'debenhams'
  | 'boohoo'
  | 'boohoo-man'
  | 'plt'
  | 'karen-millen'
  | 'burton'
  | 'coast'
  | 'dorothy-perkins'
  | 'misspap'
  | 'nastygal'
  | 'oasis'
  | 'principles'
  | 'wallis'
  | 'warehouse'
  | 'dsgn-studio'
  | 'brand-room';

/**
 * The shape every brand must populate.
 * Adding a new field here forces every brand to declare it (or TypeScript will error) —
 * which is exactly what we want to prevent accidental drift.
 */
export interface BrandMode {
  /** Display label for this brand */
  label: string;
  /** Font family CSS string */
  fontFamily: string;
  /** Default radius — `radius.4` for most brands, `radius.0` for square-mode brands */
  radiusDefault: string;
  radiusLg: string;
  radiusPill: string;
  /** Brand colour family — semantic tokens resolve via these */
  brandPrimary: string;
  brandAction: string;
  brandActionPressed: string;
  brandNeutral: string;
  brandLight4: string;
  brandLight3: string;
  brandLight2: string;
  brandLight1: string;
  brandDark1: string;
  brandDark2: string;
  brandDark3: string;
  brandPrimaryDark: string;
}

export const brandModes: Record<BrandId, BrandMode> = {
  debenhams: {
    label: 'Debenhams',
    fontFamily: fontFamily.debenhams,
    radiusDefault: radius[4],
    radiusLg: radius[8],
    radiusPill: radius.full,
    brandPrimary: aqua.primary,
    brandAction: aqua.cta,
    brandActionPressed: aqua.ctaTouchDown,
    brandNeutral: aqua.neutral,
    brandLight4: aqua.light4,
    brandLight3: aqua.light3,
    brandLight2: aqua.light2,
    brandLight1: aqua.light1,
    brandDark1: aqua.dark1,
    brandDark2: aqua.dark2,
    brandDark3: aqua.dark3,
    brandPrimaryDark: aqua.primaryDark,
  },

  boohoo: {
    label: 'Boohoo',
    fontFamily: fontFamily.boohoo,
    radiusDefault: radius[4],
    radiusLg: radius[8],
    radiusPill: radius.full,
    brandPrimary: pink.primary,
    brandAction: pink.cta,
    brandActionPressed: pink.ctaTouchDown,
    brandNeutral: pink.neutral,
    brandLight4: pink.light4,
    brandLight3: pink.light3,
    brandLight2: pink.light2,
    brandLight1: pink.light1,
    brandDark1: pink.dark1,
    brandDark2: pink.dark2,
    brandDark3: pink.dark3,
    brandPrimaryDark: pink.primaryDark,
  },

  // TODO: All facias below need their brand colour family populated
  // when each is audited. They currently inherit Debenhams as a placeholder
  // so the docs site doesn't crash.

  'boohoo-man': inheritFrom('Debenhams', fontFamily.boohooMan, false),
  plt: inheritFrom('Debenhams', fontFamily.plt, true), // square radius
  'karen-millen': inheritFrom('Debenhams', fontFamily.karenMillen, false),
  burton: inheritFrom('Debenhams', fontFamily.debenhams, false),
  coast: inheritFrom('Debenhams', fontFamily.debenhams, false),
  'dorothy-perkins': inheritFrom('Debenhams', fontFamily.debenhams, false),
  misspap: inheritFrom('Debenhams', fontFamily.debenhams, false),
  nastygal: inheritFrom('Debenhams', fontFamily.debenhams, false),
  oasis: inheritFrom('Debenhams', fontFamily.debenhams, false),
  principles: inheritFrom('Debenhams', fontFamily.debenhams, false),
  wallis: inheritFrom('Debenhams', fontFamily.debenhams, false),
  warehouse: inheritFrom('Debenhams', fontFamily.debenhams, false),
  'dsgn-studio': inheritFrom('Debenhams', fontFamily.debenhams, false),
  'brand-room': inheritFrom('Debenhams', fontFamily.debenhams, true), // square radius
};

function inheritFrom(label: string, font: string, squareRadius: boolean): BrandMode {
  return {
    label,
    fontFamily: font,
    radiusDefault: squareRadius ? radius[0] : radius[4],
    radiusLg: squareRadius ? radius[0] : radius[8],
    radiusPill: squareRadius ? radius[0] : radius.full,
    brandPrimary: aqua.primary,
    brandAction: aqua.cta,
    brandActionPressed: aqua.ctaTouchDown,
    brandNeutral: aqua.neutral,
    brandLight4: aqua.light4,
    brandLight3: aqua.light3,
    brandLight2: aqua.light2,
    brandLight1: aqua.light1,
    brandDark1: aqua.dark1,
    brandDark2: aqua.dark2,
    brandDark3: aqua.dark3,
    brandPrimaryDark: aqua.primaryDark,
  };
}

/**
 * Mode-invariant tokens — same across every brand.
 * Body text floor is Grey 5 (accessibility AA).
 */
export const invariantTokens = {
  // Text — text floor is Grey 5; no body text uses Grey 4 or below.
  textPrimary: neutral.softBlack,
  textSecondary: neutral.grey5,
  textDisabled: neutral.grey3,
  textInverse: neutral.white,
  textOnAction: neutral.white,
  textError: status.red,
  textSuccess: '#1f7a25', // darker green for text contrast
  textWarning: '#7a5800', // darker yellow for text contrast

  // Surface
  surfacePage: neutral.white,
  surfaceSunken: neutral.grey05,
  surfaceRaised: neutral.white,
  surfaceInverse: neutral.softBlack,
  surfaceOverlay: 'rgba(0, 0, 0, 0.6)',
  surfaceActionDisabled: neutral.grey2,
  surfaceError: status.redLight,
  surfaceSuccess: status.greenLight,
  surfaceWarning: status.yellowLight,

  // Border — Grey 2 is the typical divider colour
  borderSubtle: neutral.grey2,
  borderDefault: neutral.grey25,
  borderStrong: neutral.grey4,
  borderError: status.red,

  // Icon — can use Grey 4 (not subject to text contrast rules)
  iconPrimary: neutral.softBlack,
  iconSecondary: neutral.grey4,
  iconDisabled: neutral.grey3,
  iconInverse: neutral.white,
  iconOnAction: neutral.white,
} as const;
