import React from 'react';

export interface CreditCardIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function CreditCardIcon({ size = 16, className, style }: CreditCardIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <rect width="14" height="10" x="1" y="3" rx="2" />
      <path d="M1 7h14" />
    </svg>
  );
}