import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export interface UserIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function UserIcon({ 
  size = 16, 
  color = 'currentColor',
  ...props 
}: UserIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <Path d="M3 14s1-2 5-2 5 2 5 2" />
    </Svg>
  );
}