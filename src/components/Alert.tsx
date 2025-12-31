import React from 'react';
import { cn } from '@/utils/helpers';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  title?: string;
  className?: string;
}

const variantStyles: Record<AlertVariant, { container: string; icon: string }> = {
  info: {
    container: 'bg-info/10 border-info/20 text-info',
    icon: 'ℹ️',
  },
  success: {
    container: 'bg-success/10 border-success/20 text-success',
    icon: '✅',
  },
  warning: {
    container: 'bg-warning/10 border-warning/20 text-warning',
    icon: '⚠️',
  },
  error: {
    container: 'bg-error/10 border-error/20 text-error',
    icon: '❌',
  },
};

/**
 * Alert Component
 * A notification banner with different severity levels
 */
const Alert = ({ children, variant = 'info', title, className }: AlertProps): React.ReactElement => (
  <div
    className={cn(
      'flex items-start gap-3 p-4 rounded-xl border',
      variantStyles[variant].container,
      className
    )}
  >
    <span className="text-lg flex-shrink-0">{variantStyles[variant].icon}</span>
    <div>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-sm">{children}</div>
    </div>
  </div>
);

export default Alert;
