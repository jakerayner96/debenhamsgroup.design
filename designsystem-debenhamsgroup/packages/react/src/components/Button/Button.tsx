/**
 * Button — PLACEHOLDER implementation.
 *
 * This is intentionally minimal. It renders correctly with the brand-mode
 * system so we can see something on the docs site, but the real Button
 * spec (variants, sizes, icon slot, loading state, etc.) comes next session
 * when we inspect the Figma node.
 */

import { forwardRef } from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-action text-text-on-action hover:bg-action-hover active:bg-action-pressed disabled:bg-action-disabled disabled:text-text-disabled',
  secondary:
    'bg-page text-text-primary border border-border-action hover:bg-accent-subtle disabled:border-border-default disabled:text-text-disabled',
  tertiary:
    'bg-transparent text-text-link hover:text-text-link-hover underline-offset-2 hover:underline disabled:text-text-disabled disabled:no-underline',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 px-3 text-12',
  md: 'h-10 px-4 text-14',
  lg: 'h-12 px-5 text-16',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', loading = false, disabled, children, className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={clsx(
        // Base — all buttons share these
        'inline-flex items-center justify-center gap-2 font-semibold rounded-default',
        'transition-colors duration-base ease-standard',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed',
        // Variant
        variantClasses[variant],
        // Size
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {loading ? <span aria-hidden>…</span> : null}
      {children}
    </button>
  );
});
