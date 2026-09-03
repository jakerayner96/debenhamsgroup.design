/**
 * Button — PLACEHOLDER.
 *
 * This is a stub. The real Button needs to be specced from the Figma node
 * at https://www.figma.com/design/aIHmkCaTy9c5EWOxAGw0So/Debenhams-Design-System?node-id=9144-1807
 *
 * Variants and states to be defined.
 */

import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant. Default: 'primary'. */
  variant?: ButtonVariant;
  /** Size. Default: 'md'. */
  size?: ButtonSize;
  /** Disabled state. */
  disabled?: boolean;
  /** Show loading spinner and disable interaction. */
  loading?: boolean;
  /** Button label or content. */
  children: ReactNode;
}
