import type { ReactNode, ComponentProps } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'base' | 'lg';
  children: ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'base', 
  className, 
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-sans border-1 transition-opacity focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-brand text-black border-black hover:opacity-90',
    secondary: 'bg-white text-black border-black hover:bg-brand',
    outline: 'bg-transparent text-black border-black hover:bg-brand',
  };

  const sizeClasses = {
    sm: 'px-12 py-4 text-sm',
    base: 'px-16 py-8 text-base', 
    lg: 'px-24 py-12 text-lg',
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}