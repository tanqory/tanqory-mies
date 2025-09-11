# Drawer

Side navigation panel that slides in from screen edge for secondary navigation and settings.

## Overview

Drawer provides expanded navigation options accessed through edge swipe or hamburger menu, offering hierarchical navigation structure without cluttering main interface.

## Usage Guidelines

- **Clear hierarchy**: Organize navigation items in logical groups with proper nesting
- **Easy dismissal**: Support swipe-away gesture and backdrop tap for closing
- **Profile integration**: Include user profile information when authentication is present
- **Consistent positioning**: Left-side drawer for main navigation, right-side for contextual actions

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Current drawer visibility state |
| `onToggle` | `function` | - | Drawer open/close handler |
| `position` | `left` \| `right` | `left` | Drawer slide direction |
| `width` | `number` | `280` | Drawer panel width |

## Accessibility

- **Focus management**: Proper focus trapping when drawer is open
- **Navigation announcements**: Screen readers communicate drawer state changes
- **Keyboard navigation**: Full navigation support with external keyboards
- **Hierarchical structure**: Clear heading levels for navigation organization

## Examples

### Main Navigation Drawer
```jsx
import { DrawerLayoutAndroid, View, Text, TouchableOpacity } from 'react-native';

const navigationView = (
  <View style={styles.drawerContainer}>
    <View style={styles.drawerHeader}>
      <Text style={styles.userNameText}>John Doe</Text>
      <Text style={styles.userEmailText}>john@example.com</Text>
    </View>
    <TouchableOpacity 
      style={styles.drawerItem}
      onPress={() => navigateAndClose('Home')}
    >
      <Icon name="home" size={24} />
      <Text style={styles.drawerItemText}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.drawerItem}
      onPress={() => navigateAndClose('Profile')}
    >
      <Icon name="person" size={24} />
      <Text style={styles.drawerItemText}>Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.drawerItem}
      onPress={() => navigateAndClose('Settings')}
    >
      <Icon name="settings" size={24} />
      <Text style={styles.drawerItemText}>Settings</Text>
    </TouchableOpacity>
  </View>
);

<DrawerLayoutAndroid
  ref={drawerRef}
  drawerWidth={300}
  drawerPosition="left"
  renderNavigationView={() => navigationView}
>
  {/* Main content */}
</DrawerLayoutAndroid>
```

### Settings Drawer
```jsx
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

<Drawer.Navigator
  drawerContent={(props) => <CustomDrawerContent {...props} />}
  screenOptions={{
    drawerStyle: {
      backgroundColor: '#fff',
      width: 280,
    },
    drawerActiveTintColor: '#007AFF',
  }}
>
  <Drawer.Screen name="Dashboard" component={DashboardScreen} />
  <Drawer.Screen name="Analytics" component={AnalyticsScreen} />
  <Drawer.Screen name="Reports" component={ReportsScreen} />
</Drawer.Navigator>
```