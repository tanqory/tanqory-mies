import React from 'react';

export interface TagIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function TagIcon({ size = 16, className, style }: TagIconProps) {
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
      <path d="M2 2v4.5l6 6a2 2 0 0 0 2.8 0L13.5 10a2 2 0 0 0 0-2.8L7.5 1H2z" />
      <circle cx="5" cy="5" r="0.5" fill="currentColor" />
    </svg>
  );
}