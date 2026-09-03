/**
 * Z-index primitives.
 *
 * Locked in 07-foundations.md section 9.
 * Large gaps between values to allow future additions without renumbering.
 */

export const zIndex = {
  base: 0,
  raised: 10,
  dropdown: 100,
  sticky: 200,
  banner: 300,
  overlay: 400,
  modal: 500,
  popover: 600,
  toast: 700,
  tooltip: 800,
} as const;
