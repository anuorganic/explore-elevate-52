
import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  label: string;
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  label,
  color = 'primary',
  size = 'md',
  className
}) => {
  const colorVariants = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent/10 text-accent',
    muted: 'bg-muted text-muted-foreground'
  };

  const sizeVariants = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        colorVariants[color],
        sizeVariants[size],
        className
      )}
    >
      {label}
    </div>
  );
};

export default Chip;
