# Stack

Linear arrangement component for organizing child elements vertically or horizontally with consistent spacing.

## Overview

Stack simplifies layout by automatically distributing space between children, handling alignment, and ensuring consistent spacing patterns across mobile interfaces.

## Usage Guidelines

- **Consistent spacing**: Maintains uniform gaps between elements for visual rhythm
- **Flexible alignment**: Center, start, end, or stretch items based on content needs
- **Responsive behavior**: Adapts spacing and alignment to different screen sizes
- **Nested stacks**: Combine horizontal and vertical stacks for complex layouts

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `direction` | `row` \| `column` | `column` | Layout direction |
| `spacing` | `number` | `16` | Gap between stack items |
| `align` | `flex-start` \| `center` \| `flex-end` \| `stretch` | `flex-start` | Cross-axis alignment |
| `justify` | `flex-start` \| `center` \| `flex-end` \| `space-between` | `flex-start` | Main axis alignment |

## Accessibility

- **Focus order**: Maintains logical tab sequence through stack items
- **Screen reader flow**: Natural reading order for assistive technology
- **Spacing consistency**: Predictable layout for users with cognitive disabilities
- **Touch targets**: Adequate space between interactive elements in stacks

## Examples

### Vertical Form Stack
```jsx
import { View } from 'react-native';

<View style={styles.formStack}>
  <TextInput 
    placeholder="Email" 
    style={styles.input}
    accessibilityLabel="Email address"
  />
  <TextInput 
    placeholder="Password" 
    secureTextEntry
    style={styles.input}
    accessibilityLabel="Password"
  />
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Sign In</Text>
  </TouchableOpacity>
</View>
```

### Horizontal Action Stack
```jsx
import { View, TouchableOpacity, Text } from 'react-native';

<View style={styles.actionStack}>
  <TouchableOpacity 
    style={[styles.button, styles.secondaryButton]}
    onPress={handleCancel}
  >
    <Text style={styles.secondaryButtonText}>Cancel</Text>
  </TouchableOpacity>
  <TouchableOpacity 
    style={[styles.button, styles.primaryButton]}
    onPress={handleConfirm}
  >
    <Text style={styles.primaryButtonText}>Confirm</Text>
  </TouchableOpacity>
</View>
```