import React from 'react';
import { View, StyleSheet, ViewStyle, ViewProps } from 'react-native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export interface CardProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  padding?: 'sm' | 'base' | 'lg';
  bordered?: boolean;
  style?: ViewStyle;
}

export function Card({
  children,
  padding = 'base',
  bordered = true,
  style,
  ...props
}: CardProps) {
  const cardStyle = [
    styles.base,
    styles.paddings[padding],
    bordered && styles.bordered,
    style,
  ];

  return (
    <View style={cardStyle} {...props}>
      {children}
    </View>
  );
}

export interface CardHeaderProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function CardHeader({ children, style, ...props }: CardHeaderProps) {
  return (
    <View style={[styles.header, style]} {...props}>
      {children}
    </View>
  );
}

export interface CardContentProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function CardContent({ children, style, ...props }: CardContentProps) {
  return (
    <View style={[styles.content, style]} {...props}>
      {children}
    </View>
  );
}

export interface CardFooterProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function CardFooter({ children, style, ...props }: CardFooterProps) {
  return (
    <View style={[styles.footer, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: tokens.colors.white,
    borderRadius: 0,
  },
  paddings: {
    sm: {
      padding: tokens.spacing[16],
    },
    base: {
      padding: tokens.spacing[24],
    },
    lg: {
      padding: tokens.spacing[32],
    },
  } as Record<string, ViewStyle>,
  bordered: {
    borderWidth: tokens.border.width,
    borderColor: tokens.colors.black,
  },
  header: {
    marginBottom: tokens.spacing[16],
    paddingBottom: tokens.spacing[16],
    borderBottomWidth: tokens.border.width,
    borderBottomColor: tokens.colors.black,
  },
  content: {
    gap: tokens.spacing[16],
  },
  footer: {
    marginTop: tokens.spacing[16],
    paddingTop: tokens.spacing[16],
    borderTopWidth: tokens.border.width,
    borderTopColor: tokens.colors.black,
  },
});