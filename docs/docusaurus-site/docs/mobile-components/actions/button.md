# Button

Primary interactive element for touch-based user actions and form submissions on mobile devices.

## Overview

Mobile buttons provide clear touch targets for user actions with haptic feedback and touch states. They adapt to platform conventions while maintaining consistent functionality across iOS and Android.

## Usage Guidelines

- **Touch target size**: Minimum 44pt height for comfortable finger taps
- **Visual feedback**: Clear pressed states and loading indicators
- **Platform adaptation**: Follow iOS/Android design patterns automatically
- **Spacing considerations**: Adequate margins between multiple buttons in mobile layouts

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `primary` \| `secondary` \| `tertiary` | `secondary` | Visual hierarchy for mobile |
| `onPress` | `function` | - | Touch event handler |
| `disabled` | `boolean` | `false` | Prevents touch interaction |
| `loading` | `boolean` | `false` | Shows loading spinner |

## Accessibility

- **Voice Over support**: Clear button labels announced to screen readers
- **Touch accessibility**: Adequate size for users with motor impairments
- **High contrast support**: Adapts to system accessibility settings
- **Haptic feedback**: Provides tactile response on supported devices

## Examples

### Primary Action
```jsx
import { TouchableOpacity, Text } from 'react-native';

<TouchableOpacity 
  style={styles.primaryButton}
  onPress={handleSave}
  accessibilityRole="button"
  accessibilityLabel="Save changes"
>
  <Text style={styles.primaryText}>Save</Text>
</TouchableOpacity>
```

### Loading State
```jsx
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

<TouchableOpacity 
  style={[styles.button, loading && styles.disabled]}
  onPress={loading ? null : handleSubmit}
  disabled={loading}
>
  {loading ? (
    <ActivityIndicator size="small" color="#fff" />
  ) : (
    <Text style={styles.buttonText}>Submit</Text>
  )}
</TouchableOpacity>
```