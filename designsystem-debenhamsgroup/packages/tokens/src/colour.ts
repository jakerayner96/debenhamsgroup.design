/**
 * Colour primitives.
 *
 * These are the raw palette. Named by what they ARE, not by what they DO.
 * Components never reference these directly — they reference semantic tokens,
 * which map to these.
 *
 * Locked in 03-tokens.md.
 */

// Aqua family (Debenhams brand)
export const aqua = {
  light4: '#e6fffc',
  light3: '#d6fff9',
  neutral: '#e8f4f2',
  light2: '#b8fdf4',
  light1: '#9dede2',
  primary: '#7be7d8',
  dark1: '#76decf',
  dark2: '#70beb3',
  dark3: '#529c92',
  cta: '#00787d',
  ctaTouchDown: '#00565a',
  primaryDark: '#1e6f63',
} as const;

// Pink family (Boohoo brand)
export const pink = {
  light4: '#fef6fa',
  light3: '#f9d7ea',
  neutral: '#f6e3ee',
  light2: '#fce9f3',
  light1: '#ffc2d7',
  primary: '#f9d7ea',
  dark1: '#f5c2df',
  dark2: '#f0b2d5',
  dark3: '#e495c2',
  cta: '#000000',
  ctaTouchDown: '#a02651', // TODO: confirm with brand team
  primaryDark: '#cd6aa2',
} as const;

// TODO: Add brand colour families for the other 14 facias as they are audited:
// PLT, BoohooMAN, KM, Burton, Coast, Dorothy Perkins, Misspap, NastyGal,
// Oasis, Principles, Wallis, Warehouse, DSGN Studio, The Brand Room

// Neutrals (shared across all brands)
export const neutral = {
  white: '#ffffff',
  grey05: '#fafafa',
  grey1: '#f2f2f2',
  grey2: '#e7e7e7',
  grey25: '#d6d6d6',
  grey3: '#b5b5b5',
  grey4: '#767676',
  grey5: '#6b6b6b',
  grey6: '#323232',
  softBlack: '#0f0f0f',
  black: '#000000',
} as const;

// Status colours (shared across all brands)
export const status = {
  red: '#d33f3f',
  redLight: '#fff2f2',
  yellow: '#ffd600',
  yellowLight: '#fffbe6',
  green: '#70c474',
  greenLight: '#eaf6ea',
} as const;
