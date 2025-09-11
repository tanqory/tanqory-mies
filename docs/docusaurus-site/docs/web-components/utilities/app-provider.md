# App Provider

Root-level provider component for theme, configuration, and global state management.

## Overview

App Provider wraps the entire application to provide theme context, global configuration, and shared state. It establishes the foundation for consistent styling and behavior across all components.

**When to use:**
- Application root-level setup
- Theme and styling consistency
- Global configuration management
- Shared context provision

**When not to use:**
- Component-level state management
- Feature-specific providers
- Non-root application levels

## Usage Guidelines

- **Single instance**: Use only one App Provider per application
- **Root placement**: Place at the highest level of your component tree
- **Configuration centralization**: Manage global settings centrally
- **Theme consistency**: Ensure consistent theming throughout the app

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme` | `Theme` | `defaultTheme` | Application theme configuration |
| `locale` | `string` | `en` | Application locale/language |
| `config` | `AppConfig` | `{}` | Global configuration object |
| `children` | `ReactNode` | - | Application components |

## Accessibility

- **Language context**: Provides proper language context for screen readers
- **Theme support**: Ensures consistent accessibility across theme variants
- **Focus management**: Establishes global focus management patterns
- **ARIA support**: Provides consistent ARIA labeling patterns

## Examples

### Basic Setup
```jsx
<AppProvider theme={customTheme} locale="en">
  <App />
</AppProvider>
```

### Full Configuration
```jsx
<AppProvider 
  theme={theme}
  locale={userLocale}
  config={{
    apiUrl: process.env.API_URL,
    features: featureFlags,
    analytics: analyticsConfig
  }}
>
  <Router>
    <Routes />
  </Router>
</AppProvider>
```