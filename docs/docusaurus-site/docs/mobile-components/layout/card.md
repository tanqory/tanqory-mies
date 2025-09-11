# Card

Elevated container component that groups related content with subtle shadows and rounded corners.

## Overview

Cards present information as discrete, scannable sections with clear boundaries. They work effectively for displaying related content like profiles, articles, or product information on mobile screens.

## Usage Guidelines

- **Content grouping**: Organize related information within clear visual boundaries
- **Touch targets**: Include interactive elements like buttons or tappable areas
- **Appropriate elevation**: Use subtle shadows to create hierarchy without overwhelming
- **Responsive spacing**: Maintain adequate margins and padding for comfortable reading

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `elevation` | `number` | `2` | Shadow depth for material design |
| `onPress` | `function` | - | Makes entire card touchable |
| `children` | `ReactNode` | - | Card content components |
| `style` | `ViewStyle` | - | Additional styling options |

## Accessibility

- **Focus management**: Clear focus indicators when card is interactive
- **Content structure**: Logical heading hierarchy for screen readers
- **Touch feedback**: Visual response when card is pressable
- **Contrast compliance**: Adequate color contrast for text and backgrounds

## Examples

### Basic Information Card
```jsx
import { View, Text, StyleSheet } from 'react-native';

<View style={styles.card}>
  <Text style={styles.cardTitle}>Project Update</Text>
  <Text style={styles.cardContent}>
    The mobile app redesign is progressing well with positive user feedback.
  </Text>
  <Text style={styles.cardDate}>2 hours ago</Text>
</View>
```

### Interactive Product Card
```jsx
import { TouchableOpacity, View, Text, Image } from 'react-native';

<TouchableOpacity 
  style={styles.productCard}
  onPress={() => navigateToProduct(product.id)}
  accessibilityRole="button"
  accessibilityLabel={`View ${product.name} details`}
>
  <Image source={{ uri: product.image }} style={styles.productImage} />
  <View style={styles.productInfo}>
    <Text style={styles.productName}>{product.name}</Text>
    <Text style={styles.productPrice}>${product.price}</Text>
  </View>
</TouchableOpacity>
```