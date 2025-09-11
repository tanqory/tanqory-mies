import { forwardRef } from 'react';
import { clsx } from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, helperText, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={clsx(
            'flex h-10 w-full rounded-md border px-3 py-2 text-sm',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-gray-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            {
              'border-gray-300 focus-visible:ring-blue-500': !error,
              'border-red-500 focus-visible:ring-red-500': error,
            },
            className
          )}
          {...props}
        />
        {helperText && (
          <p className={clsx('mt-1 text-sm', {
            'text-gray-600': !error,
            'text-red-600': error,
          })}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';