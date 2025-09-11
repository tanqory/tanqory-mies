# Slider

Range selection component for choosing values within a continuous or discrete range using touch gestures.

## Overview

Slider provides intuitive value selection through drag gestures, with visual feedback and support for both continuous ranges and discrete step values.

## Usage Guidelines

- **Clear value indication**: Display current value and range boundaries
- **Appropriate step sizes**: Use logical increments based on the value type
- **Visual feedback**: Smooth thumb movement with haptic feedback when available
- **Range context**: Show meaningful labels for minimum and maximum values

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `number` | `0` | Current slider value |
| `onValueChange` | `function` | - | Value change handler |
| `minimumValue` | `number` | `0` | Minimum selectable value |
| `maximumValue` | `number` | `1` | Maximum selectable value |

## Accessibility

- **Value announcements**: Screen readers communicate current value and changes
- **Increment/decrement**: Support for adjusting value with accessibility controls
- **Range context**: Min/max values clearly communicated to assistive technology
- **Touch guidance**: Hints about slider interaction available

## Examples

### Volume Control
```jsx
import Slider from '@react-native-community/slider';
import { View, Text } from 'react-native';

<View style={styles.sliderContainer}>
  <Text style={styles.sliderLabel}>Volume: {Math.round(volume * 100)}%</Text>
  <Slider
    style={styles.slider}
    minimumValue={0}
    maximumValue={1}
    value={volume}
    onValueChange={setVolume}
    minimumTrackTintColor="#1fb28a"
    maximumTrackTintColor="#d3d3d3"
    thumbStyle={{ backgroundColor: '#1fb28a' }}
    accessibilityLabel="Volume slider"
  />
</View>
```

### Price Range Filter
```jsx
import Slider from '@react-native-community/slider';

<View style={styles.priceFilter}>
  <Text style={styles.filterTitle}>Price Range</Text>
  <View style={styles.priceLabels}>
    <Text>${minPrice}</Text>
    <Text>${maxPrice}</Text>
  </View>
  <Slider
    minimumValue={0}
    maximumValue={1000}
    value={priceRange}
    onValueChange={setPriceRange}
    step={10}
    thumbStyle={styles.sliderThumb}
    trackStyle={styles.sliderTrack}
  />
</View>
```