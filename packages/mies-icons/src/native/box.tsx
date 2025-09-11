import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export interface BoxIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function BoxIcon({ 
  size = 16, 
  color = 'currentColor',
  ...props 
}: BoxIconProps) {
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
      <Path d="M2 5 8 2l6 3v8l-6 3-6-3V5z" />
      <Path d="m2 5 6 3" />
      <Path d="m8 8 6-3" />
      <Path d="M8 8v6" />
    </Svg>
  );
}