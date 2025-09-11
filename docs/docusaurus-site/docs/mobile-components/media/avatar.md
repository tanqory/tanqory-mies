# Avatar

User profile image component with fallback options and various sizing for identity representation.

## Overview

Avatar displays user profile pictures with automatic fallback to initials or default icons when images are unavailable, supporting multiple sizes for different UI contexts.

## Usage Guidelines

- **Consistent sizing**: Use appropriate sizes for context (list items, headers, details)
- **Fallback hierarchy**: Image → initials → default icon for graceful degradation
- **Touch interactions**: Make avatars tappable when they lead to user profiles
- **Loading states**: Show placeholder during image loading for smooth experience

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `source` | `ImageSource` | - | Avatar image source |
| `size` | `small` \| `medium` \| `large` | `medium` | Avatar dimensions |
| `name` | `string` | - | User name for initials fallback |
| `onPress` | `function` | - | Touch handler for interactive avatars |

## Accessibility

- **User identification**: Screen readers announce user name from avatar
- **Role clarity**: Interactive avatars identified as buttons for navigation
- **Image descriptions**: Alt text provided for profile images
- **Fallback communication**: Initials or default state clearly announced

## Examples

### User Profile Avatar
```jsx
import { View, Image, Text, TouchableOpacity } from 'react-native';

const Avatar = ({ user, size = 'medium', onPress }) => {
  const sizeValue = { small: 32, medium: 48, large: 80 }[size];
  
  return (
    <TouchableOpacity 
      style={[styles.avatar, { width: sizeValue, height: sizeValue }]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`View ${user.name} profile`}
    >
      {user.avatar ? (
        <Image 
          source={{ uri: user.avatar }} 
          style={styles.avatarImage}
        />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.initials}>
            {user.name.charAt(0).toUpperCase()}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
```

### Avatar Group
```jsx
import { View } from 'react-native';

<View style={styles.avatarGroup}>
  {users.slice(0, 3).map((user) => (
    <Avatar 
      key={user.id}
      user={user} 
      size="small"
      style={styles.groupAvatar}
    />
  ))}
  {users.length > 3 && (
    <View style={styles.moreIndicator}>
      <Text style={styles.moreText}>+{users.length - 3}</Text>
    </View>
  )}
</View>
```