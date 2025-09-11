import React from 'react';
import { TextInput as RNTextInput, View, Text, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native';
import { tokens } from '@tanqory/mies-tokens';

export interface TextInputProps extends RNTextInputProps {
  error?: boolean;
  helperText?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  error = false,
  helperText,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <RNTextInput
        style={[
          styles.input,
          error && styles.inputError,
          style,
        ]}
        placeholderTextColor={tokens.colors.gray[500]}
        {...props}
      />
      {helperText && (
        <Text style={[styles.helperText, error && styles.helperTextError]}>
          {helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: tokens.colors.gray[300],
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: 'white',
    color: tokens.colors.gray[900],
    fontFamily: tokens.typography.fontFamily.sans[0],
  },
  inputError: {
    borderColor: tokens.colors.semantic.error,
  },
  helperText: {
    fontSize: 12,
    color: tokens.colors.gray[600],
    marginTop: 4,
  },
  helperTextError: {
    color: tokens.colors.semantic.error,
  },
});