import type { ReactNode, ComponentProps } from 'react';
import { clsx } from 'clsx';

export interface TableProps extends ComponentProps<'table'> {
  children: ReactNode;
  bordered?: boolean;
  striped?: boolean;
}

export function Table({ 
  children, 
  bordered = true, 
  striped = false,
  className, 
  ...props 
}: TableProps) {
  const baseClasses = 'w-full border-collapse bg-white';
  const borderedClasses = bordered ? 'border-1 border-black' : '';

  return (
    <div className="overflow-x-auto">
      <table
        className={clsx(baseClasses, borderedClasses, className)}
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

export interface TableHeaderProps extends ComponentProps<'thead'> {
  children: ReactNode;
}

export function TableHeader({ children, className, ...props }: TableHeaderProps) {
  return (
    <thead className={clsx('bg-white', className)} {...props}>
      {children}
    </thead>
  );
}

export interface TableBodyProps extends ComponentProps<'tbody'> {
  children: ReactNode;
  striped?: boolean;
}

export function TableBody({ children, striped, className, ...props }: TableBodyProps) {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
}

export interface TableRowProps extends ComponentProps<'tr'> {
  children: ReactNode;
  striped?: boolean;
  index?: number;
}

export function TableRow({ 
  children, 
  striped = false, 
  index = 0,
  className, 
  ...props 
}: TableRowProps) {
  const stripedClasses = striped && index % 2 === 1 ? 'bg-brand bg-opacity-10' : '';
  const hoverClasses = 'hover:bg-brand hover:bg-opacity-20 transition-colors';

  return (
    <tr
      className={clsx(stripedClasses, hoverClasses, className)}
      {...props}
    >
      {children}
    </tr>
  );
}

export interface TableCellProps extends ComponentProps<'td'> {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  padding?: 'sm' | 'base' | 'lg';
}

export function TableCell({ 
  children, 
  align = 'left',
  padding = 'base',
  className, 
  ...props 
}: TableCellProps) {
  const baseClasses = 'border-1 border-black font-sans text-sm';
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const paddingClasses = {
    sm: 'px-8 py-4',
    base: 'px-12 py-8',
    lg: 'px-16 py-12',
  };

  return (
    <td
      className={clsx(
        baseClasses,
        alignClasses[align],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </td>
  );
}

export interface TableHeaderCellProps extends ComponentProps<'th'> {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  padding?: 'sm' | 'base' | 'lg';
  sortable?: boolean;
}

export function TableHeaderCell({ 
  children, 
  align = 'left',
  padding = 'base',
  sortable = false,
  className, 
  ...props 
}: TableHeaderCellProps) {
  const baseClasses = 'border-1 border-black font-sans text-sm font-medium bg-white';
  
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const paddingClasses = {
    sm: 'px-8 py-4',
    base: 'px-12 py-8',
    lg: 'px-16 py-12',
  };

  const sortableClasses = sortable ? 'cursor-pointer hover:bg-brand hover:bg-opacity-10' : '';

  return (
    <th
      className={clsx(
        baseClasses,
        alignClasses[align],
        paddingClasses[padding],
        sortableClasses,
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
}

export interface TableCaptionProps extends ComponentProps<'caption'> {
  children: ReactNode;
}

export function TableCaption({ children, className, ...props }: TableCaptionProps) {
  return (
    <caption
      className={clsx('text-sm text-black mb-8 text-left font-sans', className)}
      {...props}
    >
      {children}
    </caption>
  );
}