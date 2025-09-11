# Icon

Scalable symbolic graphics component for actions, states, and content representation across the mobile interface.

## Overview

Icon provides consistent symbolic communication through scalable vector graphics, supporting multiple icon libraries and custom SVGs with accessibility features.

## Usage Guidelines

- **Semantic meaning**: Choose icons that clearly communicate their intended function
- **Consistent library**: Use icons from the same library for visual cohesion
- **Appropriate sizing**: Match icon size to surrounding content and touch targets
- **Platform conventions**: Respect iOS and Android icon style differences

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `string` | - | Icon identifier from library |
| `size` | `number` | `24` | Icon size in points |
| `color` | `string` | `#000` | Icon fill color |
| `library` | `string` | `MaterialIcons` | Icon library to use |

## Accessibility

- **Descriptive labels**: Clear accessibility labels for icon meaning
- **Context awareness**: Icons supplemented with text when meaning isn't obvious
- **Touch target size**: Interactive icons meet minimum 44pt touch requirements
- **High contrast**: Icon colors meet accessibility contrast ratios

## Examples

### Navigation Icons
```jsx
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

<TouchableOpacity 
  style={styles.iconButton}
  onPress={handleBack}
  accessibilityLabel="Go back"
  accessibilityRole="button"
>
  <Icon name="arrow-back" size={24} color="#000" />
</TouchableOpacity>
```

### Status Icons
```jsx
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

<View style={styles.statusItem}>
  <Icon 
    name="check-circle" 
    size={20} 
    color="#4CAF50"
    accessibilityLabel="Complete"
  />
  <Text style={styles.statusText}>Task completed</Text>
</View>
```