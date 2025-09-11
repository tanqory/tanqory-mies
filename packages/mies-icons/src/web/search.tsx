import React from 'react';

export interface SearchIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function SearchIcon({ size = 16, className, style }: SearchIconProps) {
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
      <circle cx="7" cy="7" r="5" />
      <path d="m13 13-3-3" />
    </svg>
  );
}