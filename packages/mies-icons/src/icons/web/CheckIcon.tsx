import { forwardRef } from 'react';
import type { IconProps } from '../../types';

export const CheckIcon = forwardRef<SVGSVGElement, IconProps & React.SVGProps<SVGSVGElement>>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  }
);

CheckIcon.displayName = 'CheckIcon';