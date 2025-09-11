# Swipe Actions

Touch gesture-based actions that reveal contextual options through horizontal swipes on list items.

## Overview

Swipe actions provide quick access to common item-level actions like delete, archive, or favorite through natural mobile gestures. They maintain discoverability while keeping interfaces clean.

## Usage Guidelines

- **Common actions only**: Use for frequently needed operations like delete, share, or mark
- **Logical direction**: Destructive actions typically on right swipe, positive actions on left
- **Visual feedback**: Clear icons and colors to indicate action type and severity
- **Fallback access**: Always provide alternative access through tap menus or buttons

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `leftActions` | `Action[]` | - | Actions revealed by right swipe |
| `rightActions` | `Action[]` | - | Actions revealed by left swipe |
| `onSwipeOpen` | `function` | - | Called when actions are revealed |
| `threshold` | `number` | `75` | Minimum swipe distance to trigger |

## Accessibility

- **Alternative access**: Provide tap-based access for users who cannot swipe
- **Action announcements**: Clear labels for screen reader users
- **Custom gestures**: Support for assistive touch and switch control
- **Visual indicators**: High contrast action buttons with clear icons

## Examples

### Basic Swipe Actions
```jsx
import { SwipeRow } from 'react-native-swipe-list-view';
import { View, Text, TouchableOpacity } from 'react-native';

<SwipeRow
  leftOpenValue={75}
  rightOpenValue={-150}
  onRowDidOpen={(direction) => console.log('Opened', direction)}
>
  <View style={styles.hiddenContainer}>
    <TouchableOpacity 
      style={styles.deleteButton}
      onPress={() => handleDelete(item.id)}
    >
      <Text style={styles.actionText}>Delete</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.rowFront}>
    <Text>{item.title}</Text>
  </View>
</SwipeRow>
```

### Multiple Actions
```jsx
import { SwipeRow } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/MaterialIcons';

<SwipeRow rightOpenValue={-225}>
  <View style={styles.hiddenContainer}>
    <TouchableOpacity 
      style={styles.favoriteButton}
      onPress={() => handleFavorite(item)}
    >
      <Icon name="favorite" size={20} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.shareButton}
      onPress={() => handleShare(item)}
    >
      <Icon name="share" size={20} color="#fff" />
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.deleteButton}
      onPress={() => handleDelete(item)}
    >
      <Icon name="delete" size={20} color="#fff" />
    </TouchableOpacity>
  </View>
  <View style={styles.rowFront}>
    <Text>{item.content}</Text>
  </View>
</SwipeRow>
```