/**
 * Type primitives.
 *
 * Locked in 07-foundations.md section 1.
 *
 * Notes:
 * - Fixed-per-breakpoint sizes (no fluid scaling for v1).
 * - No line-height tokens — framework uses Figma's AUTO behaviour.
 * - No letter-spacing tokens — default 0 everywhere.
 * - Per-brand fonts swap via brand mode at the semantic layer.
 * - Same sizes across all brands; only font family + weight differ.
 */

export const typeSize = {
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  20: '20px',
  24: '24px',
  28: '28px',
  32: '32px',
  36: '36px',
  40: '40px',
  48: '48px',
} as const;

export const typeWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

/**
 * Font families per facia.
 * All fonts are Google Fonts and full weight ranges are available.
 *
 * The system stack fallback is consistent across all brands.
 */
export const fontStack = {
  systemFallback:
    'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
} as const;

export const fontFamily = {
  debenhams: `'Geologica', ${fontStack.systemFallback}`,
  boohoo: `'Montserrat', ${fontStack.systemFallback}`,
  boohooMan: `'Montserrat', ${fontStack.systemFallback}`,
  plt: `'Roboto', ${fontStack.systemFallback}`,
  karenMillen: `'Jost', ${fontStack.systemFallback}`,
  // TODO: Add for the other 11 facias as they are audited
} as const;
