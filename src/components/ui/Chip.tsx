
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
    primary: 'bg-primary/15 text-primary border border-primary/20',
    secondary: 'bg-secondary text-secondary-foreground border border-secondary/50',
    accent: 'bg-accent/15 text-accent border border-accent/20',
    muted: 'bg-muted text-muted-foreground border border-muted/50'
  };

  const sizeVariants = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full font-medium shadow-sm',
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
