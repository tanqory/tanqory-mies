# Text Field

Single-line text input component optimized for mobile keyboards and touch interaction.

## Overview

Text Field provides native mobile text input with automatic keyboard type optimization, validation states, and accessibility features for efficient data entry on mobile devices.

## Usage Guidelines

- **Keyboard optimization**: Use appropriate keyboardType for email, phone, numeric inputs
- **Clear affordances**: Include placeholder text and labels for input context
- **Validation feedback**: Show real-time validation with clear error messaging
- **Touch-friendly design**: Adequate touch target size with comfortable text sizing

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | - | Current input value |
| `onChangeText` | `function` | - | Text change handler |
| `placeholder` | `string` | - | Hint text when empty |
| `keyboardType` | `string` | `default` | Keyboard type for input |

## Accessibility

- **Screen reader labels**: Clear field descriptions and current value announced
- **Input validation**: Error states communicated to assistive technology
- **Focus management**: Logical tab order through form fields
- **High contrast**: Text and borders respect system contrast settings

## Examples

### Basic Text Input
```jsx
import { TextInput, View, Text } from 'react-native';

<View style={styles.inputContainer}>
  <Text style={styles.label}>Full Name</Text>
  <TextInput
    style={styles.textInput}
    value={name}
    onChangeText={setName}
    placeholder="Enter your full name"
    accessibilityLabel="Full name input field"
    autoCapitalize="words"
  />
</View>
```

### Email Input with Validation
```jsx
import { TextInput, View, Text } from 'react-native';

<View style={styles.inputContainer}>
  <Text style={styles.label}>Email Address</Text>
  <TextInput
    style={[styles.textInput, hasError && styles.errorInput]}
    value={email}
    onChangeText={handleEmailChange}
    placeholder="your@email.com"
    keyboardType="email-address"
    autoCapitalize="none"
    autoCorrect={false}
    accessibilityLabel="Email address"
    accessibilityHint="Enter your email address"
  />
  {hasError && (
    <Text style={styles.errorText}>Please enter a valid email</Text>
  )}
</View>
```