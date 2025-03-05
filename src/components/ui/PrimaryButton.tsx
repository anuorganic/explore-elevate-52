
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
    default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
    outline: 'border border-primary text-primary hover:bg-primary/10 shadow-sm hover:shadow-md',
    subtle: 'bg-primary/10 text-primary hover:bg-primary/20 shadow-sm hover:shadow-md'
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {startIcon && <span className="mr-2 transition-transform">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2 transition-transform">{endIcon}</span>}
    </button>
  );
};

export default PrimaryButton;
