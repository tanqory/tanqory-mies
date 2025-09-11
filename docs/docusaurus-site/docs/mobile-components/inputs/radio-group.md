# Radio Group

Mutually exclusive selection component for choosing one option from multiple alternatives.

## Overview

Radio Group ensures only one selection is active at a time, providing clear visual hierarchy and immediate feedback for single-choice scenarios in mobile forms.

## Usage Guidelines

- **Exclusive selection**: Only one option can be selected within a group
- **Clear grouping**: Visual organization that shows related options belong together
- **Default selection**: Consider providing a logical default choice
- **Consistent spacing**: Uniform gaps between options for easy scanning

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | - | Currently selected value |
| `onValueChange` | `function` | - | Selection change handler |
| `options` | `RadioOption[]` | - | Array of selectable options |
| `disabled` | `boolean` | `false` | Prevents all interactions |

## Accessibility

- **Group announcement**: Screen readers identify related radio options as group
- **Selection status**: Current selection clearly communicated
- **Navigation support**: Arrow key navigation through options with external keyboard
- **Label clarity**: Each option has descriptive, unique labels

## Examples

### Payment Method Selection
```jsx
import { View, Text, TouchableOpacity } from 'react-native';

<View style={styles.radioGroup}>
  <Text style={styles.groupTitle}>Payment Method</Text>
  {paymentMethods.map((method) => (
    <TouchableOpacity
      key={method.value}
      style={styles.radioOption}
      onPress={() => setPaymentMethod(method.value)}
      accessibilityRole="radio"
      accessibilityState={{ selected: paymentMethod === method.value }}
    >
      <View style={styles.radioCircle}>
        {paymentMethod === method.value && (
          <View style={styles.radioSelected} />
        )}
      </View>
      <Text style={styles.radioLabel}>{method.label}</Text>
    </TouchableOpacity>
  ))}
</View>
```

### Size Selection
```jsx
import RadioGroup from 'react-native-radio-buttons-group';

<View style={styles.container}>
  <Text style={styles.title}>Size</Text>
  <RadioGroup 
    radioButtons={sizeOptions}
    onPress={setSizeSelection}
    selectedId={selectedSize}
    containerStyle={styles.radioContainer}
  />
</View>
```