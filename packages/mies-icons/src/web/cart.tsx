import React from 'react';

export interface CartIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function CartIcon({ size = 16, className, style }: CartIconProps) {
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
      <circle cx="6" cy="13" r="1" />
      <circle cx="11" cy="13" r="1" />
      <path d="m2 2 1.5 8.5h9l1-6H3" />
    </svg>
  );
}