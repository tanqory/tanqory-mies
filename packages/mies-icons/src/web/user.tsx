import React from 'react';

export interface UserIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function UserIcon({ size = 16, className, style }: UserIconProps) {
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
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M3 14s1-2 5-2 5 2 5 2" />
    </svg>
  );
}