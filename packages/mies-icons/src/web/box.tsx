import React from 'react';

export interface BoxIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function BoxIcon({ size = 16, className, style }: BoxIconProps) {
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
      <path d="M2 5 8 2l6 3v8l-6 3-6-3V5z" />
      <path d="m2 5 6 3" />
      <path d="m8 8 6-3" />
      <path d="M8 8v6" />
    </svg>
  );
}