# Checkbox

Binary selection component for individual choices and multi-select scenarios with clear visual state.

## Overview

Checkbox provides clear on/off selection with immediate visual feedback, supporting both single selections and multiple choice scenarios common in mobile forms and settings.

## Usage Guidelines

- **Clear states**: Distinct visual appearance for checked, unchecked, and disabled states
- **Touch targets**: Minimum 44pt touch area including label for easy selection
- **Group organization**: Logical grouping for related multiple selections
- **Immediate feedback**: Instant visual response to touch interactions

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `checked` | `boolean` | `false` | Current selection state |
| `onValueChange` | `function` | - | Selection change handler |
| `disabled` | `boolean` | `false` | Prevents interaction |
| `title` | `string` | - | Label text for checkbox |

## Accessibility

- **State announcements**: Screen readers communicate checked/unchecked status
- **Label association**: Clear connection between checkbox and label text
- **Keyboard support**: External keyboard navigation and activation
- **Group context**: Screen readers understand checkbox group relationships

## Examples

### Basic Checkbox
```jsx
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

<View style={styles.checkboxContainer}>
  <CheckBox
    value={isSelected}
    onValueChange={setSelection}
    style={styles.checkbox}
    tintColors={{ true: '#007AFF', false: '#000' }}
  />
  <Text style={styles.checkboxLabel}>I agree to the terms</Text>
</View>
```

### Checkbox List
```jsx
import CheckBox from '@react-native-community/checkbox';

<View style={styles.checkboxGroup}>
  <Text style={styles.groupTitle}>Preferred Contact Methods</Text>
  {options.map((option) => (
    <View key={option.id} style={styles.checkboxRow}>
      <CheckBox
        value={selectedOptions.includes(option.id)}
        onValueChange={(checked) => handleOptionChange(option.id, checked)}
      />
      <Text style={styles.optionLabel}>{option.label}</Text>
    </View>
  ))}
</View>
```