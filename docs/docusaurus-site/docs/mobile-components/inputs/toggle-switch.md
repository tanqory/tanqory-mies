# Toggle Switch

Binary state control with smooth animation for on/off settings and preferences.

## Overview

Toggle Switch provides intuitive on/off control with fluid animation and clear visual state, perfect for settings, preferences, and feature toggles in mobile applications.

## Usage Guidelines

- **Immediate effect**: Changes should take effect instantly without confirmation
- **Clear labeling**: Descriptive labels that explain what the toggle controls
- **Visual feedback**: Smooth animation between states with appropriate colors
- **Default states**: Logical default positions based on typical user preferences

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `boolean` | `false` | Current switch state |
| `onValueChange` | `function` | - | State change handler |
| `disabled` | `boolean` | `false` | Prevents interaction |
| `trackColor` | `object` | - | Colors for track in different states |

## Accessibility

- **State communication**: Screen readers announce on/off status clearly
- **Action description**: Clear understanding of what toggle controls
- **Visual indicators**: High contrast colors for different states
- **Touch feedback**: Haptic response on supported devices

## Examples

### Settings Toggle
```jsx
import { Switch, View, Text } from 'react-native';

<View style={styles.settingRow}>
  <Text style={styles.settingLabel}>Enable Notifications</Text>
  <Switch
    trackColor={{ false: '#767577', true: '#81b0ff' }}
    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
    ios_backgroundColor="#3e3e3e"
    onValueChange={toggleSwitch}
    value={isEnabled}
    accessibilityLabel="Notifications toggle"
    accessibilityHint="Double tap to toggle notifications"
  />
</View>
```

### Feature Toggle List
```jsx
import { Switch, View, Text, FlatList } from 'react-native';

<FlatList
  data={features}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.featureRow}>
      <View style={styles.featureInfo}>
        <Text style={styles.featureTitle}>{item.title}</Text>
        <Text style={styles.featureDescription}>{item.description}</Text>
      </View>
      <Switch
        value={item.enabled}
        onValueChange={(value) => handleFeatureToggle(item.id, value)}
        disabled={item.premium && !isPremium}
      />
    </View>
  )}
/>
```