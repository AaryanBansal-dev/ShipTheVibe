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
    container: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300',
    icon: 'ℹ️',
  },
  success: {
    container: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300',
    icon: '✅',
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300',
    icon: '⚠️',
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300',
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
