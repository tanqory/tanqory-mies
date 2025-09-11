# Banner

Prominent message component for important announcements and persistent notifications at screen top.

## Overview

Banner displays important information that remains visible until user acknowledgment, providing space for detailed messaging and actions without blocking core functionality.

## Usage Guidelines

- **Important messaging**: Use for critical updates, warnings, or announcements requiring attention
- **Persistent display**: Remains visible until user dismisses or acknowledges
- **Clear actions**: Include appropriate dismiss or action buttons for user response
- **Contextual styling**: Use colors and icons that match message urgency and type

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `info` \| `warning` \| `error` \| `success` | `info` | Banner style and color scheme |
| `message` | `string` | - | Main banner message text |
| `dismissible` | `boolean` | `true` | Whether banner can be dismissed |
| `actions` | `Action[]` | - | Action buttons for banner |

## Accessibility

- **Priority announcement**: Screen readers prioritize banner content when displayed
- **Action accessibility**: All banner actions have proper labels and roles
- **Keyboard navigation**: Full keyboard support for banner interaction
- **Color independence**: Information conveyed through text and icons, not just color

## Examples

### Information Banner
```jsx
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

<View style={styles.infoBanner}>
  <Icon name="info" size={24} color="#2196F3" />
  <Text style={styles.bannerText}>
    New features available! Update your app to access the latest improvements.
  </Text>
  <TouchableOpacity 
    style={styles.dismissButton}
    onPress={dismissBanner}
    accessibilityLabel="Dismiss banner"
  >
    <Icon name="close" size={20} color="#666" />
  </TouchableOpacity>
</View>
```

### Warning Banner with Action
```jsx
import { View, Text, TouchableOpacity } from 'react-native';

<View style={styles.warningBanner}>
  <Icon name="warning" size={24} color="#FF9800" />
  <View style={styles.bannerContent}>
    <Text style={styles.bannerTitle}>Storage Almost Full</Text>
    <Text style={styles.bannerMessage}>
      Free up space to continue backing up your photos
    </Text>
  </View>
  <TouchableOpacity 
    style={styles.actionButton}
    onPress={openStorageSettings}
  >
    <Text style={styles.actionText}>Manage</Text>
  </TouchableOpacity>
</View>
```