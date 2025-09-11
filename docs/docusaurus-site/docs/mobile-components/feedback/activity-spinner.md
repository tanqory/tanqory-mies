# Activity Spinner

Animated loading indicator for brief waiting states and background processing tasks.

## Overview

Activity Spinner provides immediate feedback during short loading states, network requests, and processing operations with smooth animation that maintains user engagement.

## Usage Guidelines

- **Brief operations**: Use for loading states expected to complete within seconds
- **Contextual sizing**: Match spinner size to surrounding content and importance
- **Appropriate placement**: Center in loading areas or inline with related content
- **Loading context**: Accompany with descriptive text when space permits

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `small` \| `large` | `small` | Spinner dimensions |
| `color` | `string` | `#007AFF` | Spinner color |
| `animating` | `boolean` | `true` | Whether spinner is animated |
| `hidesWhenStopped` | `boolean` | `true` | Hide when not animating |

## Accessibility

- **Loading announcement**: Screen readers announce loading state to users
- **Context description**: Clear indication of what is loading or processing
- **Animation pause**: Respects system reduce motion accessibility settings
- **Focus management**: Maintains focus context during loading states

## Examples

### Basic Loading Spinner
```jsx
import { View, ActivityIndicator, Text } from 'react-native';

<View style={styles.loadingContainer}>
  <ActivityIndicator 
    size="large" 
    color="#007AFF" 
    accessibilityLabel="Loading"
  />
  <Text style={styles.loadingText}>Please wait...</Text>
</View>
```

### Inline Spinner
```jsx
import { View, Text, ActivityIndicator } from 'react-native';

<View style={styles.inlineLoader}>
  <Text style={styles.statusText}>Saving changes</Text>
  <ActivityIndicator 
    size="small" 
    color="#4CAF50"
    style={styles.inlineSpinner} 
  />
</View>
```