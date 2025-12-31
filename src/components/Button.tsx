import React from 'react';
import { cn } from '@/utils/helpers';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'border border-border-strong text-foreground hover:bg-surface-overlay hover:border-accent-muted transition-all',
  ghost: 'text-foreground-muted hover:text-foreground hover:bg-surface-elevated transition-all',
  danger: 'bg-error text-surface hover:bg-error/90 shadow-lg shadow-error/25 transition-all',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

/**
 * Button Component
 * A versatile button with multiple variants, sizes, and states
 * @param label - The label for the button
 * @param onClick - Click handler
 * @param variant - Visual style variant
 * @param size - Button size
 * @param disabled - Disable state
 * @param loading - Loading state
 * @param className - Additional CSS classes
 * @param icon - Optional icon element
 */
const Button = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className,
  icon,
}: ButtonProps): React.ReactElement => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    className={cn(
      'inline-flex items-center justify-center gap-2 font-medium rounded-xl',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-muted focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variantStyles[variant],
      sizeStyles[size],
      className
    )}
  >
    {loading ? (
      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
    ) : icon}
    {label}
  </button>
);

export default Button;
