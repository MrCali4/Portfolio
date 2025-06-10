
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl'
  };

  return (
    <div className={`font-inter font-bold ${sizeClasses[size]} ${className}`}>
      <span className="relative">
        <span className="text-primary">N</span>
        <span className="text-foreground">ick</span>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-electric-400" />
      </span>
    </div>
  );
};
