import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export interface ChartIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function ChartIcon({ 
  size = 16, 
  color = 'currentColor',
  ...props 
}: ChartIconProps) {
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
      <Path d="M3 3v10a2 2 0 0 0 2 2h10" />
      <Path d="m7 8 4-4 3 3" />
    </Svg>
  );
}