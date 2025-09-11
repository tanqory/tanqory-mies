# Bottom Tabs

Primary navigation component using tab bar at screen bottom for main app sections.

## Overview

Bottom Tabs provide persistent navigation between top-level app sections, positioned for easy thumb access with clear visual indicators for current selection.

## Usage Guidelines

- **Limited tabs**: Use 3-5 tabs maximum for optimal usability and visual clarity
- **Clear iconography**: Distinctive icons that communicate section purpose instantly
- **Active indicators**: Strong visual differentiation between active and inactive states
- **Safe area respect**: Properly positioned above home indicator on modern devices

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tabs` | `TabItem[]` | - | Array of tab configuration objects |
| `activeTab` | `string` | - | Currently active tab identifier |
| `onTabPress` | `function` | - | Tab selection handler |
| `badgeCount` | `object` | - | Badge numbers for tabs |

## Accessibility

- **Tab announcements**: Screen readers identify each tab and its purpose
- **Selection status**: Current active tab clearly communicated
- **Badge information**: Badge counts announced with tab labels
- **Navigation shortcuts**: Quick tab switching with assistive technology

## Examples

### Basic Tab Navigation
```jsx
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

<View style={styles.tabBar}>
  {tabs.map((tab) => (
    <TouchableOpacity
      key={tab.id}
      style={[styles.tab, activeTab === tab.id && styles.activeTab]}
      onPress={() => onTabPress(tab.id)}
      accessibilityRole="tab"
      accessibilityState={{ selected: activeTab === tab.id }}
      accessibilityLabel={tab.label}
    >
      <Icon 
        name={tab.icon} 
        size={24} 
        color={activeTab === tab.id ? '#007AFF' : '#8E8E93'} 
      />
      <Text style={[styles.tabLabel, activeTab === tab.id && styles.activeLabel]}>
        {tab.label}
      </Text>
    </TouchableOpacity>
  ))}
</View>
```

### Tab with Badge
```jsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const iconName = getIconName(route.name);
      return <Icon name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#007AFF',
    tabBarInactiveTintColor: '#8E8E93',
  })}
>
  <Tab.Screen 
    name="Messages" 
    component={MessagesScreen}
    options={{
      tabBarBadge: unreadCount > 0 ? unreadCount : undefined
    }}
  />
  <Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>
```