import React from 'react';

export interface TruckIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function TruckIcon({ size = 16, className, style }: TruckIconProps) {
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
      <path d="M1 9h8l1-2h3l1 2v4H1V9z" />
      <circle cx="4" cy="13" r="1" />
      <circle cx="11" cy="13" r="1" />
      <path d="M1 9V5a1 1 0 0 1 1-1h6v5" />
    </svg>
  );
}