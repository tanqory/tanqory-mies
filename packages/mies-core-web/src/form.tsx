import type { ReactNode, ComponentProps } from 'react';
import { clsx } from 'clsx';

export interface FormProps extends ComponentProps<'form'> {
  children: ReactNode;
  spacing?: 'sm' | 'base' | 'lg';
}

export function Form({ children, spacing = 'base', className, ...props }: FormProps) {
  const spacingClasses = {
    sm: 'space-y-12',
    base: 'space-y-16',
    lg: 'space-y-24',
  };

  return (
    <form className={clsx(spacingClasses[spacing], className)} {...props}>
      {children}
    </form>
  );
}

export interface FormFieldProps extends ComponentProps<'div'> {
  children: ReactNode;
  spacing?: 'sm' | 'base';
}

export function FormField({ children, spacing = 'base', className, ...props }: FormFieldProps) {
  const spacingClasses = {
    sm: 'space-y-4',
    base: 'space-y-8',
  };

  return (
    <div className={clsx(spacingClasses[spacing], className)} {...props}>
      {children}
    </div>
  );
}

export interface LabelProps extends ComponentProps<'label'> {
  children: ReactNode;
  required?: boolean;
}

export function Label({ children, required, className, ...props }: LabelProps) {
  return (
    <label
      className={clsx('block text-sm font-sans text-black', className)}
      {...props}
    >
      {children}
      {required && <span className="text-black ml-4">*</span>}
    </label>
  );
}

export interface InputProps extends ComponentProps<'input'> {
  error?: boolean;
}

export function Input({ error, className, ...props }: InputProps) {
  const baseClasses = 'w-full border-1 bg-white px-12 py-8 text-base font-sans focus:outline-none transition-colors';
  const stateClasses = error 
    ? 'border-black bg-white focus:bg-brand' 
    : 'border-black focus:bg-brand';

  return (
    <input
      className={clsx(baseClasses, stateClasses, className)}
      {...props}
    />
  );
}

export interface TextareaProps extends ComponentProps<'textarea'> {
  error?: boolean;
  rows?: number;
}

export function Textarea({ error, rows = 4, className, ...props }: TextareaProps) {
  const baseClasses = 'w-full border-1 bg-white px-12 py-8 text-base font-sans focus:outline-none transition-colors resize-vertical';
  const stateClasses = error 
    ? 'border-black bg-white focus:bg-brand' 
    : 'border-black focus:bg-brand';

  return (
    <textarea
      rows={rows}
      className={clsx(baseClasses, stateClasses, className)}
      {...props}
    />
  );
}

export interface SelectProps extends ComponentProps<'select'> {
  error?: boolean;
  placeholder?: string;
}

export function Select({ error, placeholder, className, children, ...props }: SelectProps) {
  const baseClasses = 'w-full border-1 bg-white px-12 py-8 text-base font-sans focus:outline-none transition-colors';
  const stateClasses = error 
    ? 'border-black bg-white focus:bg-brand' 
    : 'border-black focus:bg-brand';

  return (
    <select
      className={clsx(baseClasses, stateClasses, className)}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {children}
    </select>
  );
}

export interface ErrorMessageProps extends ComponentProps<'div'> {
  children: ReactNode;
}

export function ErrorMessage({ children, className, ...props }: ErrorMessageProps) {
  return (
    <div
      className={clsx('text-sm text-black mt-4', className)}
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
}

export interface FormActionsProps extends ComponentProps<'div'> {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'base';
}

export function FormActions({ 
  children, 
  align = 'left', 
  spacing = 'base',
  className, 
  ...props 
}: FormActionsProps) {
  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const spacingClasses = {
    sm: 'gap-8',
    base: 'gap-12',
  };

  return (
    <div
      className={clsx(
        'flex items-center',
        alignClasses[align],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}