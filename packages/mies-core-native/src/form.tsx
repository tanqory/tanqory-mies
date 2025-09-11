import React from 'react';
import { View, Text, TextInput, StyleSheet, ViewStyle, TextStyle, TextInputProps, ViewProps } from 'react-native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export interface FormProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  spacing?: 'sm' | 'base' | 'lg';
  style?: ViewStyle;
}

export function Form({ children, spacing = 'base', style, ...props }: FormProps) {
  const formStyle = [
    styles.form,
    styles.spacings[spacing],
    style,
  ];

  return (
    <View style={formStyle} {...props}>
      {children}
    </View>
  );
}

export interface FormFieldProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  spacing?: 'sm' | 'base';
  style?: ViewStyle;
}

export function FormField({ children, spacing = 'base', style, ...props }: FormFieldProps) {
  const fieldStyle = [
    styles.field,
    styles.fieldSpacings[spacing],
    style,
  ];

  return (
    <View style={fieldStyle} {...props}>
      {children}
    </View>
  );
}

export interface LabelProps extends Omit<ViewProps, 'style'> {
  children: string;
  required?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Label({ children, required, style, textStyle, ...props }: LabelProps) {
  return (
    <View style={[styles.labelContainer, style]} {...props}>
      <Text style={[styles.label, textStyle]}>
        {children}
        {required && <Text style={styles.required}> *</Text>}
      </Text>
    </View>
  );
}

export interface InputProps extends Omit<TextInputProps, 'style'> {
  error?: boolean;
  style?: ViewStyle;
}

export function Input({ error, style, ...props }: InputProps) {
  const inputStyle = [
    styles.input,
    error && styles.inputError,
    style,
  ];

  return (
    <TextInput
      style={inputStyle}
      placeholderTextColor={tokens.colors.black + '80'}
      {...props}
    />
  );
}

export interface TextareaProps extends Omit<TextInputProps, 'style'> {
  error?: boolean;
  rows?: number;
  style?: ViewStyle;
}

export function Textarea({ error, rows = 4, style, ...props }: TextareaProps) {
  const textareaStyle = [
    styles.input,
    styles.textarea,
    { height: rows * 20 + tokens.spacing[16] },
    error && styles.inputError,
    style,
  ];

  return (
    <TextInput
      style={textareaStyle}
      multiline
      numberOfLines={rows}
      textAlignVertical="top"
      placeholderTextColor={tokens.colors.black + '80'}
      {...props}
    />
  );
}

export interface ErrorMessageProps extends Omit<ViewProps, 'style'> {
  children: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function ErrorMessage({ children, style, textStyle, ...props }: ErrorMessageProps) {
  return (
    <View style={[styles.errorContainer, style]} {...props}>
      <Text style={[styles.errorText, textStyle]}>{children}</Text>
    </View>
  );
}

export interface FormActionsProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'base';
  direction?: 'row' | 'column';
  style?: ViewStyle;
}

export function FormActions({
  children,
  align = 'left',
  spacing = 'base',
  direction = 'row',
  style,
  ...props
}: FormActionsProps) {
  const actionsStyle = [
    styles.actions,
    styles.actionsAlign[align],
    styles.actionsSpacing[spacing],
    direction === 'column' && styles.actionsColumn,
    style,
  ];

  return (
    <View style={actionsStyle} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: tokens.spacing[16],
  },
  spacings: {
    sm: {
      gap: tokens.spacing[12],
    },
    base: {
      gap: tokens.spacing[16],
    },
    lg: {
      gap: tokens.spacing[24],
    },
  } as Record<string, ViewStyle>,
  field: {
    gap: tokens.spacing[8],
  },
  fieldSpacings: {
    sm: {
      gap: tokens.spacing[4],
    },
    base: {
      gap: tokens.spacing[8],
    },
  } as Record<string, ViewStyle>,
  labelContainer: {
    marginBottom: tokens.spacing[4],
  },
  label: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '400',
  },
  required: {
    color: tokens.colors.black,
  },
  input: {
    borderWidth: tokens.border.width,
    borderColor: tokens.colors.black,
    backgroundColor: tokens.colors.white,
    paddingHorizontal: tokens.spacing[12],
    paddingVertical: tokens.spacing[8],
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    borderRadius: 0,
  },
  textarea: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: tokens.colors.black,
    backgroundColor: tokens.colors.white,
  },
  errorContainer: {
    marginTop: tokens.spacing[4],
  },
  errorText: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing[12],
  },
  actionsAlign: {
    left: {
      justifyContent: 'flex-start',
    },
    center: {
      justifyContent: 'center',
    },
    right: {
      justifyContent: 'flex-end',
    },
  } as Record<string, ViewStyle>,
  actionsSpacing: {
    sm: {
      gap: tokens.spacing[8],
    },
    base: {
      gap: tokens.spacing[12],
    },
  } as Record<string, ViewStyle>,
  actionsColumn: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});