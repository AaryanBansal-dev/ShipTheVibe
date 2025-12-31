import React from 'react';
import Image from 'next/image';
import { cn } from '@/utils/helpers';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
};

const sizePx: Record<AvatarSize, number> = {
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

/**
 * Avatar Component
 * Displays user avatar with image or fallback initials
 */
const Avatar = ({ src, alt, fallback, size = 'md', className }: AvatarProps): React.ReactElement => {
  const getFallbackInitials = (): string => {
    if (fallback) return fallback.slice(0, 2).toUpperCase();
    if (alt) return alt.slice(0, 2).toUpperCase();
    return '?';
  };

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-medium overflow-hidden',
        sizeStyles[size],
        className
      )}
    >
      {src ? (
        <Image src={src} alt={alt || 'Avatar'} width={sizePx[size]} height={sizePx[size]} className="w-full h-full object-cover" />
      ) : (
        <span>{getFallbackInitials()}</span>
      )}
    </div>
  );
};

export default Avatar;
