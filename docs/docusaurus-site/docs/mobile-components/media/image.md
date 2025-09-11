# Image

Optimized image display component with loading states, error handling, and responsive sizing for mobile screens.

## Overview

Image component provides efficient image rendering with automatic optimization, lazy loading, and graceful error handling for various image sources and formats.

## Usage Guidelines

- **Performance optimization**: Use appropriate image sizes and formats for mobile bandwidth
- **Loading states**: Show placeholders during image loading for better perceived performance
- **Error handling**: Provide meaningful fallbacks when images fail to load
- **Responsive sizing**: Images adapt to different screen densities and orientations

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `source` | `ImageSource` | - | Image source URI or local file |
| `style` | `ImageStyle` | - | Image styling and dimensions |
| `resizeMode` | `string` | `cover` | How image fills container |
| `placeholder` | `ImageSource` | - | Loading placeholder image |

## Accessibility

- **Alternative text**: Descriptive labels for screen readers
- **Content description**: Context about image meaning and purpose
- **Loading feedback**: Status announcements during image loading
- **Error communication**: Clear notification when images fail to load

## Examples

### Basic Image Display
```jsx
import { Image, View } from 'react-native';

<View style={styles.imageContainer}>
  <Image
    source={{ uri: 'https://example.com/image.jpg' }}
    style={styles.image}
    resizeMode="cover"
    accessibilityLabel="Product photo showing blue running shoes"
  />
</View>
```

### Image with Loading and Error States
```jsx
import { Image, View, Text } from 'react-native';
import { useState } from 'react';

const SmartImage = ({ source, placeholder, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <View style={styles.imageWrapper}>
      <Image
        {...props}
        source={error ? placeholder : source}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={() => setError(true)}
      />
      {loading && (
        <View style={styles.imagePlaceholder}>
          <ActivityIndicator size="small" />
        </View>
      )}
    </View>
  );
};
```