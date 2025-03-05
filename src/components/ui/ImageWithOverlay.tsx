
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  className?: string;
  height?: string | number;
  width?: string | number;
  aspectRatio?: string;
  fit?: 'cover' | 'contain' | 'fill';
  overlayColor?: string;
  overlayOpacity?: string;
  priority?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  children?: React.ReactNode;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  src,
  alt,
  className,
  height,
  width,
  aspectRatio,
  fit = 'cover',
  overlayColor = 'black',
  overlayOpacity = '40',
  priority = false,
  rounded = 'none',
  children
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  const roundedClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden',
        roundedClasses[rounded],
        aspectRatio && `aspect-[${aspectRatio}]`,
        className
      )}
      style={{ 
        height: height || 'auto',
        width: width || 'auto'
      }}
    >
      <img
        src={isError ? '/placeholder.svg' : src}
        alt={alt}
        className={cn(
          'smooth-image w-full h-full transition-opacity duration-500 ease-in-out',
          fit === 'cover' && 'object-cover',
          fit === 'contain' && 'object-contain',
          fit === 'fill' && 'object-fill',
          isLoaded ? 'opacity-100' : 'opacity-0 blur'
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Overlay */}
      <div 
        className={cn(
          'absolute inset-0 transition-opacity',
          !isLoaded && 'bg-muted'
        )}
        style={{ 
          backgroundColor: isLoaded ? `${overlayColor}` : undefined,
          opacity: isLoaded ? `0.${overlayOpacity}` : 1
        }}
      />
      
      {/* Content */}
      {children && (
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default ImageWithOverlay;
