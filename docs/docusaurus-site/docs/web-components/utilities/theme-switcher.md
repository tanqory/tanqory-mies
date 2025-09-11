# Theme Switcher

Control component for switching between different application themes.

## Overview

Theme Switcher provides users with the ability to change the application's visual theme, typically between light and dark modes, while maintaining their preference across sessions.

**When to use:**
- Applications with multiple theme options
- Accessibility preferences for light/dark modes
- User customization features
- Brand theme variations

**When not to use:**
- Applications with only one theme
- Temporary styling changes
- Component-specific styling options

## Usage Guidelines

- **Persistent preferences**: Save user theme choices across sessions
- **System preference respect**: Honor system theme preferences initially
- **Smooth transitions**: Provide smooth theme switching animations
- **Clear indication**: Show current theme state clearly

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `themes` | `Array<Theme>` | `[light, dark]` | Available theme options |
| `currentTheme` | `string` | `light` | Currently active theme |
| `onThemeChange` | `function` | - | Theme change handler |
| `followSystem` | `boolean` | `false` | Follows system theme preference |

## Accessibility

- **Keyboard operation**: Fully keyboard accessible theme switching
- **Screen readers**: Theme names and states announced clearly
- **High contrast**: Works with high contrast system settings
- **Focus indication**: Clear focus states for all interactive elements

## Examples

### Basic Theme Switcher
```jsx
<ThemeSwitcher 
  currentTheme={theme}
  onThemeChange={setTheme}
  themes={['light', 'dark']}
/>
```

### Advanced Options
```jsx
<ThemeSwitcher 
  currentTheme={currentTheme}
  onThemeChange={handleThemeChange}
  themes={[
    { name: 'light', label: 'Light Mode' },
    { name: 'dark', label: 'Dark Mode' },
    { name: 'auto', label: 'System Preference' }
  ]}
  followSystem={followSystemTheme}
/>
```