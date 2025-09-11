import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { tokens } from '@tanqory/mies-tokens';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onPress,
  disabled = false,
  style,
}) => {
  const buttonStyles = [
    styles.base,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, styles[`${variant}Text`], disabled && styles.disabledText]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: tokens.colors.primary[600],
  },
  secondary: {
    backgroundColor: tokens.colors.gray[200],
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: tokens.colors.gray[300],
  },
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  md: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  lg: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: tokens.colors.gray[900],
  },
  outlineText: {
    color: tokens.colors.gray[900],
  },
  disabledText: {
    opacity: 0.6,
  },
});