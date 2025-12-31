import React from 'react';
import { cn } from '@/utils/helpers';

type LoadingSize = 'sm' | 'md' | 'lg';

interface LoadingProps {
  size?: LoadingSize;
  className?: string;
  text?: string;
}

const sizeStyles: Record<LoadingSize, string> = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-2',
  lg: 'w-12 h-12 border-4',
};

/**
 * Loading Component
 * A spinning loader with optional text
 */
const Loading = ({ size = 'md', className, text }: LoadingProps): React.ReactElement => (
  <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
    <div
      className={cn(
        'rounded-full border-blue-500 border-t-transparent animate-spin',
        sizeStyles[size]
      )}
    />
    {text && (
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{text}</p>
    )}
  </div>
);

export default Loading;
