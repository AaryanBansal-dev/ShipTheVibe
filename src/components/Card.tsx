import React from 'react';
import { cn } from '@/utils/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Card Component
 * A versatile card component with optional hover effects
 * @param children - Card content
 * @param className - Additional CSS classes
 * @param hover - Enable hover animation
 */
const Card = ({ children, className, hover = false }: CardProps): React.ReactElement => (
  <div
    className={cn(
      'p-6 bg-surface-elevated rounded-2xl border border-border backdrop-blur-sm',
      hover && 'transition-all duration-400 hover:shadow-xl hover:shadow-black/20 hover:translate-y-[-4px] hover:border-border-strong',
      className
    )}
  >
    {children}
  </div>
);

export default Card;
