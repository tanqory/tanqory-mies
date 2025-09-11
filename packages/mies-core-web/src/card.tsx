import type { ReactNode, ComponentProps } from 'react';
import { clsx } from 'clsx';

export interface CardProps extends ComponentProps<'div'> {
  children: ReactNode;
  padding?: 'sm' | 'base' | 'lg';
  bordered?: boolean;
}

export function Card({ 
  children, 
  padding = 'base', 
  bordered = true,
  className,
  ...props 
}: CardProps) {
  const baseClasses = 'bg-white';
  
  const paddingClasses = {
    sm: 'p-16',
    base: 'p-24',
    lg: 'p-32',
  };

  const borderClasses = bordered ? 'border-1 border-black' : '';

  return (
    <div
      className={clsx(
        baseClasses,
        paddingClasses[padding],
        borderClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends ComponentProps<'header'> {
  children: ReactNode;
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <header
      className={clsx('mb-16 pb-16 border-b border-black border-1', className)}
      {...props}
    >
      {children}
    </header>
  );
}

export interface CardContentProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={clsx('space-y-16', className)} {...props}>
      {children}
    </div>
  );
}

export interface CardFooterProps extends ComponentProps<'footer'> {
  children: ReactNode;
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <footer
      className={clsx('mt-16 pt-16 border-t border-black border-1', className)}
      {...props}
    >
      {children}
    </footer>
  );
}