import React from 'react';
import { cn } from '@/utils/helpers';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-surface-overlay text-foreground-muted border-border',
  success: 'bg-success/10 text-success border-success/20',
  warning: 'bg-warning/10 text-warning border-warning/20',
  error: 'bg-error/10 text-error border-error/20',
  info: 'bg-info/10 text-info border-info/20',
};

/**
 * Badge Component
 * A small status indicator with various color variants
 */
const Badge = ({ children, variant = 'default', className }: BadgeProps): React.ReactElement => (
  <span
    className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
      variantStyles[variant],
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
