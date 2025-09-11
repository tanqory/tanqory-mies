# App Bar

Top navigation component providing screen title, action buttons, and navigation controls.

## Overview

App Bar serves as the primary navigation header, displaying current screen context with consistent placement of back buttons, titles, and action items across the mobile application.

## Usage Guidelines

- **Clear hierarchy**: Screen title prominently displayed with appropriate back navigation
- **Action accessibility**: Important actions easily reachable with thumb navigation
- **Platform consistency**: Follows iOS and Android navigation patterns respectively
- **Status bar integration**: Proper handling of device status bar and safe areas

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | - | Screen or section title |
| `onBackPress` | `function` | - | Back button handler |
| `actions` | `ActionItem[]` | - | Right-side action buttons |
| `showBackButton` | `boolean` | `true` | Display back navigation |

## Accessibility

- **Navigation clarity**: Back button clearly labeled for screen readers
- **Action descriptions**: Action buttons have descriptive accessibility labels
- **Title announcement**: Screen title communicated to assistive technology
- **Touch targets**: Adequate size for buttons and interactive elements

## Examples

### Basic App Bar
```jsx
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

<View style={styles.appBar}>
  <TouchableOpacity 
    style={styles.backButton}
    onPress={() => navigation.goBack()}
    accessibilityLabel="Go back"
    accessibilityRole="button"
  >
    <Icon name="arrow-back" size={24} color="#000" />
  </TouchableOpacity>
  <Text style={styles.title}>Profile Settings</Text>
  <View style={styles.actions}>
    <TouchableOpacity 
      style={styles.actionButton}
      onPress={handleSave}
    >
      <Icon name="save" size={24} color="#007AFF" />
    </TouchableOpacity>
  </View>
</View>
```

### Search App Bar
```jsx
import { View, TextInput, TouchableOpacity } from 'react-native';

<View style={styles.searchBar}>
  <TouchableOpacity 
    style={styles.backButton}
    onPress={() => navigation.goBack()}
  >
    <Icon name="arrow-back" size={24} />
  </TouchableOpacity>
  <TextInput
    style={styles.searchInput}
    placeholder="Search products..."
    value={searchQuery}
    onChangeText={setSearchQuery}
    autoFocus
  />
  <TouchableOpacity 
    style={styles.clearButton}
    onPress={() => setSearchQuery('')}
  >
    <Icon name="clear" size={20} />
  </TouchableOpacity>
</View>
```