import React from 'react';
import Svg, { Rect, Path, SvgProps } from 'react-native-svg';

export interface CreditCardIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function CreditCardIcon({ 
  size = 16, 
  color = 'currentColor',
  ...props 
}: CreditCardIconProps) {
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
      <Rect width="14" height="10" x="1" y="3" rx="2" />
      <Path d="M1 7h14" />
    </Svg>
  );
}