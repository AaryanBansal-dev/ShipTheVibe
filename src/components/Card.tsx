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
      'p-6 bg-white dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-700/50 backdrop-blur-sm',
      hover && 'transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-zinc-300 dark:hover:border-zinc-600',
      className
    )}
  >
    {children}
  </div>
);

export default Card;
