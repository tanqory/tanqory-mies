# Floating Action Button

Prominent circular action button that floats above content for primary mobile actions.

## Overview

Floating Action Button (FAB) represents the most important action on a mobile screen. It remains persistent and accessible as users scroll through content, providing quick access to key functionality.

## Usage Guidelines

- **Single primary action**: Use for the most important task on the screen
- **Consistent positioning**: Place in bottom-right corner (or bottom-center for single action)
- **Appropriate content**: Use for create, compose, or add actions primarily
- **Animation support**: Implement smooth show/hide animations during scroll

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | `ReactNode` | - | Icon component to display |
| `onPress` | `function` | - | Touch event handler |
| `size` | `small` \| `large` | `large` | Button size variant |
| `position` | `object` | - | Absolute positioning coordinates |

## Accessibility

- **Screen reader support**: Clear action description for assistive technology
- **Touch target size**: Minimum 56dp diameter for easy interaction
- **Focus indicator**: Visible focus state for external keyboard users
- **Semantic role**: Properly identified as button for accessibility services

## Examples

### Basic FAB
```jsx
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

<TouchableOpacity
  style={styles.fab}
  onPress={handleAddAction}
  accessibilityRole="button"
  accessibilityLabel="Add new item"
>
  <Icon name="add" size={24} color="#fff" />
</TouchableOpacity>
```

### Extended FAB with Label
```jsx
import { TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

<TouchableOpacity
  style={styles.extendedFab}
  onPress={handleCompose}
  accessibilityRole="button"
>
  <Icon name="edit" size={20} color="#fff" />
  <Text style={styles.fabLabel}>Compose</Text>
</TouchableOpacity>
```