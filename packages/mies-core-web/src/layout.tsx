import type { ReactNode, ComponentProps } from 'react';
import { clsx } from 'clsx';

export interface PageProps extends ComponentProps<'main'> {
  children: ReactNode;
  padding?: 'none' | 'sm' | 'base' | 'lg';
  maxWidth?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function Page({ 
  children, 
  padding = 'base',
  maxWidth = 'full',
  className, 
  ...props 
}: PageProps) {
  const baseClasses = 'min-h-screen bg-white';
  
  const paddingClasses = {
    none: '',
    sm: 'p-16',
    base: 'p-24',
    lg: 'p-32',
  };

  const maxWidthClasses = {
    none: '',
    sm: 'max-w-2xl mx-auto',
    md: 'max-w-4xl mx-auto',
    lg: 'max-w-6xl mx-auto',
    xl: 'max-w-7xl mx-auto',
    full: 'w-full',
  };

  return (
    <main
      className={clsx(
        baseClasses,
        paddingClasses[padding],
        maxWidthClasses[maxWidth],
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
}

export interface HeaderProps extends ComponentProps<'header'> {
  children: ReactNode;
  bordered?: boolean;
  sticky?: boolean;
  padding?: 'sm' | 'base' | 'lg';
}

export function Header({ 
  children, 
  bordered = true,
  sticky = false,
  padding = 'base',
  className, 
  ...props 
}: HeaderProps) {
  const baseClasses = 'bg-white w-full z-nav';
  const borderedClasses = bordered ? 'border-b border-1 border-black' : '';
  const stickyClasses = sticky ? 'sticky top-0' : '';
  
  const paddingClasses = {
    sm: 'px-16 py-8',
    base: 'px-24 py-16',
    lg: 'px-32 py-24',
  };

  return (
    <header
      className={clsx(
        baseClasses,
        borderedClasses,
        stickyClasses,
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
}

export interface ToolbarProps extends ComponentProps<'div'> {
  children: ReactNode;
  align?: 'left' | 'center' | 'right' | 'between' | 'around';
  spacing?: 'sm' | 'base' | 'lg';
  wrap?: boolean;
}

export function Toolbar({ 
  children, 
  align = 'between',
  spacing = 'base',
  wrap = false,
  className, 
  ...props 
}: ToolbarProps) {
  const baseClasses = 'flex items-center';
  
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center', 
    right: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const spacingClasses = {
    sm: 'gap-8',
    base: 'gap-16',
    lg: 'gap-24',
  };

  const wrapClasses = wrap ? 'flex-wrap' : 'flex-nowrap';

  return (
    <div
      className={clsx(
        baseClasses,
        alignClasses[align],
        spacingClasses[spacing],
        wrapClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'base' | 'lg';
  centered?: boolean;
}

export function Container({ 
  children, 
  maxWidth = 'lg',
  padding = 'base',
  centered = true,
  className, 
  ...props 
}: ContainerProps) {
  const baseClasses = 'w-full';
  
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    sm: 'px-16',
    base: 'px-24',
    lg: 'px-32',
  };

  const centeredClasses = centered ? 'mx-auto' : '';

  return (
    <div
      className={clsx(
        baseClasses,
        maxWidthClasses[maxWidth],
        paddingClasses[padding],
        centeredClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface SectionProps extends ComponentProps<'section'> {
  children: ReactNode;
  spacing?: 'none' | 'sm' | 'base' | 'lg' | 'xl';
}

export function Section({ 
  children, 
  spacing = 'base',
  className, 
  ...props 
}: SectionProps) {
  const spacingClasses = {
    none: '',
    sm: 'py-16',
    base: 'py-24',
    lg: 'py-32',
    xl: 'py-48',
  };

  return (
    <section
      className={clsx(spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </section>
  );
}

export interface StackProps extends ComponentProps<'div'> {
  children: ReactNode;
  direction?: 'row' | 'col';
  spacing?: 'sm' | 'base' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
}

export function Stack({ 
  children, 
  direction = 'col',
  spacing = 'base',
  align = 'stretch',
  justify = 'start',
  className, 
  ...props 
}: StackProps) {
  const baseClasses = 'flex';
  
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const spacingClasses = {
    sm: direction === 'row' ? 'gap-8' : 'space-y-8',
    base: direction === 'row' ? 'gap-16' : 'space-y-16', 
    lg: direction === 'row' ? 'gap-24' : 'space-y-24',
    xl: direction === 'row' ? 'gap-32' : 'space-y-32',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  return (
    <div
      className={clsx(
        baseClasses,
        directionClasses[direction],
        spacingClasses[spacing],
        alignClasses[align],
        justifyClasses[justify],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}