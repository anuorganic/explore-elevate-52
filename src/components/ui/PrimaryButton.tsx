
import React from 'react';
import { cn } from '@/lib/utils';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  variant?: 'default' | 'outline' | 'subtle';
  className?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
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
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    subtle: 'bg-primary/10 text-primary hover:bg-primary/20'
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

export default PrimaryButton;
