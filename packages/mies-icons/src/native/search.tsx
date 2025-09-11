import React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export interface SearchIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function SearchIcon({ 
  size = 16, 
  color = 'currentColor',
  ...props 
}: SearchIconProps) {
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
      <Circle cx="7" cy="7" r="5" />
      <Path d="m13 13-3-3" />
    </Svg>
  );
}