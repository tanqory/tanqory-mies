import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style'> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'base' | 'lg';
  children: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'base',
  children,
  style,
  textStyle,
  disabled = false,
  ...props
}: ButtonProps) {
  const buttonStyle = [
    styles.base,
    styles.variants[variant],
    styles.sizes[size],
    disabled && styles.disabled,
    style,
  ];

  const buttonTextStyle = [
    styles.baseText,
    styles.variantTexts[variant],
    styles.sizeTexts[size],
    disabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={buttonTextStyle}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderWidth: tokens.border.width,
    borderColor: tokens.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
  variants: {
    primary: {
      backgroundColor: tokens.colors.brand,
    },
    secondary: {
      backgroundColor: tokens.colors.white,
    },
    outline: {
      backgroundColor: 'transparent',
    },
  } as Record<string, ViewStyle>,
  sizes: {
    sm: {
      paddingHorizontal: tokens.spacing[12],
      paddingVertical: tokens.spacing[4],
    },
    base: {
      paddingHorizontal: tokens.spacing[16],
      paddingVertical: tokens.spacing[8],
    },
    lg: {
      paddingHorizontal: tokens.spacing[24],
      paddingVertical: tokens.spacing[12],
    },
  } as Record<string, ViewStyle>,
  disabled: {
    opacity: 0.5,
  },
  baseText: {
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '400',
  },
  variantTexts: {
    primary: {
      color: tokens.colors.black,
    },
    secondary: {
      color: tokens.colors.black,
    },
    outline: {
      color: tokens.colors.black,
    },
  } as Record<string, TextStyle>,
  sizeTexts: {
    sm: {
      fontSize: tokens.typography.fontSize.sm,
      lineHeight: tokens.typography.lineHeight.sm,
    },
    base: {
      fontSize: tokens.typography.fontSize.base,
      lineHeight: tokens.typography.lineHeight.base,
    },
    lg: {
      fontSize: tokens.typography.fontSize.lg,
      lineHeight: tokens.typography.lineHeight.lg,
    },
  } as Record<string, TextStyle>,
  disabledText: {
    opacity: 0.5,
  },
});