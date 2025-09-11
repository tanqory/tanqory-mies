import React from 'react';
import Svg, { Path, Circle, SvgProps } from 'react-native-svg';

export interface TagIconProps extends SvgProps {
  size?: number;
  color?: string;
}

export function TagIcon({ 
  size = 16, 
  color = 'currentColor',
  ...props 
}: TagIconProps) {
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
      <Path d="M2 2v4.5l6 6a2 2 0 0 0 2.8 0L13.5 10a2 2 0 0 0 0-2.8L7.5 1H2z" />
      <Circle cx="5" cy="5" r="0.5" fill={color} />
    </Svg>
  );
}