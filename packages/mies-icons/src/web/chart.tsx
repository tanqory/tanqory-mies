import React from 'react';

export interface ChartIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function ChartIcon({ size = 16, className, style }: ChartIconProps) {
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
      <path d="M3 3v10a2 2 0 0 0 2 2h10" />
      <path d="m7 8 4-4 3 3" />
    </svg>
  );
}