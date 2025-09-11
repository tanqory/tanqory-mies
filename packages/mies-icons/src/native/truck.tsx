import React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export interface TruckIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function TruckIcon({ 
  size = 16, 
  color = 'currentColor',
  ...props 
}: TruckIconProps) {
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
      <Path d="M1 9h8l1-2h3l1 2v4H1V9z" />
      <Circle cx="4" cy="13" r="1" />
      <Circle cx="11" cy="13" r="1" />
      <Path d="M1 9V5a1 1 0 0 1 1-1h6v5" />
    </Svg>
  );
}