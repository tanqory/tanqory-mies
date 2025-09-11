# Theme Switcher

System preference-aware component for toggling between light and dark themes in mobile applications.

## Overview

Theme Switcher provides seamless light/dark mode toggling with automatic system preference detection and persistent user choices across app sessions.

## Usage Guidelines

- **System preference detection**: Automatically detect and respect user's system theme preference
- **Smooth transitions**: Implement smooth color transitions when switching themes
- **Persistent storage**: Remember user's theme choice across app restarts
- **Accessibility compliance**: Ensure adequate contrast in both light and dark modes

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme` | `light` \| `dark` \| `system` | `system` | Current theme mode |
| `onThemeChange` | `function` | - | Called when theme changes |
| `supportSystemTheme` | `boolean` | `true` | Whether to support system theme detection |
| `persistTheme` | `boolean` | `true` | Save theme choice to storage |

## Accessibility

- **Theme announcements**: Screen readers announce theme changes to users
- **Contrast compliance**: Both themes meet WCAG contrast requirements
- **System integration**: Respects system accessibility settings and preferences
- **Visual consistency**: Icons and labels clearly indicate current theme state

## Examples

### Basic Theme Toggle
```jsx
import { useColorScheme } from 'react-native';
import { Switch, View, Text } from 'react-native';

const ThemeSwitch = ({ isDark, onToggle }) => {
  const systemTheme = useColorScheme();
  
  return (
    <View style={styles.themeContainer}>
      <Text style={styles.themeLabel}>Dark Mode</Text>
      <Switch
        value={isDark}
        onValueChange={onToggle}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
        accessibilityLabel="Toggle dark mode"
        accessibilityRole="switch"
      />
    </View>
  );
};
```

### Theme Context Provider
```jsx
import { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState('system');
  
  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  useEffect(() => {
    loadThemePreference();
  }, []);
  
  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) setTheme(savedTheme);
    } catch (error) {
      console.log('Error loading theme:', error);
    }
  };
  
  const changeTheme = async (newTheme) => {
    setTheme(newTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };
  
  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      <StatusBar 
        barStyle={currentTheme === 'dark' ? 'light-content' : 'dark-content'} 
      />
      {children}
    </ThemeContext.Provider>
  );
};
```