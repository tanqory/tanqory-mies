import React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export interface CartIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function CartIcon({ 
  size = 16, 
  color = 'currentColor',
  ...props 
}: CartIconProps) {
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
      <Circle cx="6" cy="13" r="1" />
      <Circle cx="11" cy="13" r="1" />
      <Path d="m2 2 1.5 8.5h9l1-6H3" />
    </Svg>
  );
}