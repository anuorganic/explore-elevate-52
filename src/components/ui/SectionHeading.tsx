
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'left',
  className,
  titleClassName,
  subtitleClassName
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={cn('mb-12', alignmentClasses[align], className)}>
      <h2 
        className={cn(
          'text-3xl md:text-4xl font-bold tracking-tight text-balance relative inline-block',
          align === 'center' && 'after:content-[""] after:block after:w-24 after:h-1 after:bg-primary/30 after:mx-auto after:mt-4 after:rounded-full',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            'mt-5 text-lg text-muted-foreground max-w-3xl',
            align === 'center' && 'mx-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
