# Safe Area Container

Container component that ensures content respects device-specific safe areas like notches, home indicators, and status bars.

## Overview

Safe Area Container automatically adjusts padding to prevent content from being obscured by system UI elements across different mobile devices and orientations.

## Usage Guidelines

- **Screen-level containers**: Apply to root containers of screens and modals
- **Flexible edge control**: Choose which edges need safe area protection
- **Orientation support**: Automatically adapts to landscape and portrait modes
- **Platform differences**: Handles iOS notches and Android navigation bars appropriately

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `edges` | `Edge[]` | `['top', 'bottom']` | Which edges to apply safe area |
| `style` | `ViewStyle` | - | Additional styling for container |
| `children` | `ReactNode` | - | Child components to protect |
| `mode` | `padding` \| `margin` | `padding` | How to apply safe area spacing |

## Accessibility

- **Content visibility**: Ensures all interactive elements remain accessible
- **Screen reader navigation**: Maintains logical focus order within safe boundaries
- **High contrast support**: Safe area respects system contrast settings
- **Landscape support**: Content remains accessible in all orientations

## Examples

### Basic Screen Container
```jsx
import { SafeAreaView, View, Text } from 'react-native';

<SafeAreaView style={styles.container} edges={['top', 'bottom']}>
  <View style={styles.content}>
    <Text style={styles.title}>Welcome</Text>
    <Text style={styles.subtitle}>Your content is safe here</Text>
  </View>
</SafeAreaView>
```

### Modal with Custom Edges
```jsx
import { SafeAreaView, View } from 'react-native';

<SafeAreaView 
  style={styles.modalContainer}
  edges={['bottom']}
>
  <View style={styles.modalHeader}>
    <Text>Modal Title</Text>
  </View>
  <View style={styles.modalContent}>
    {/* Modal content */}
  </View>
</SafeAreaView>
```