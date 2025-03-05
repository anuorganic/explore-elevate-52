
import React from 'react';
import { cn } from '@/lib/utils';

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  size = 'md',
  fullWidth = false,
  variant = 'default',
  className,
  endIcon,
  startIcon,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const variantClasses = {
    default: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-secondary text-foreground hover:bg-secondary/30',
    ghost: 'text-foreground hover:bg-secondary'
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default SecondaryButton;
