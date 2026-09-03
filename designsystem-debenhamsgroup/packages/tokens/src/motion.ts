/**
 * Motion primitives.
 *
 * Locked in 07-foundations.md section 10.
 * All transitions respect prefers-reduced-motion.
 */

export const motionDuration = {
  fast: '100ms',
  base: '200ms',
  slow: '300ms',
} as const;

export const motionEasing = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  emphasised: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
} as const;
