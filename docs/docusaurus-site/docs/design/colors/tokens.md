# Tokens

CSS custom properties, JavaScript objects, and implementation code examples.

## CSS Custom Properties

Use these CSS custom properties to implement the Tanqory Mies color system in your projects.

### Brand tokens

```css
:root {
  /* Brand colors */
  --brand-primary: #E1FF00;      /* Tanqory Yellow */
  --brand-charcoal: #1a1a1a;     /* Primary text & interface */
  --brand-blue: #0066cc;         /* Interactive elements */
}
```

### Neutral tokens

```css
:root {
  /* Neutral scale */
  --neutral-50: #fafafa;   /* Lightest gray */
  --neutral-100: #f5f5f5;  /* Very light gray */
  --neutral-200: #e5e5e5;  /* Light gray */
  --neutral-300: #d4d4d4;  /* Medium-light gray */
  --neutral-400: #a3a3a3;  /* Medium gray */
  --neutral-500: #737373;  /* True gray */
  --neutral-600: #525252;  /* Medium-dark gray */
  --neutral-700: #404040;  /* Dark gray */
  --neutral-800: #262626;  /* Very dark gray */
  --neutral-900: #171717;  /* Darkest gray */
}
```

### Semantic tokens

```css
:root {
  /* Success colors */
  --success-50: #f0fdf4;
  --success-500: #22c55e;
  --success-700: #15803d;
  
  /* Warning colors */
  --warning-50: #fffbeb;
  --warning-500: #f59e0b;
  --warning-700: #b45309;
  
  /* Error colors */
  --error-50: #fef2f2;
  --error-500: #ef4444;
  --error-700: #b91c1c;
  
  /* Info colors */
  --info-50: #eff6ff;
  --info-500: #3b82f6;
  --info-700: #1d4ed8;
}
```

### Dark theme tokens

```css
[data-theme="dark"] {
  --background: var(--neutral-900);
  --surface: var(--neutral-800);
  --text-primary: var(--neutral-100);
  --text-secondary: var(--neutral-400);
  --border: var(--neutral-700);
}
```

## JavaScript tokens

For React and JavaScript applications:

```javascript
export const colors = {
  brand: {
    primary: '#E1FF00',
    charcoal: '#1a1a1a',
    blue: '#0066cc',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  semantic: {
    success: {
      50: '#f0fdf4',
      500: '#22c55e',
      700: '#15803d',
    },
    warning: {
      50: '#fffbeb',
      500: '#f59e0b',
      700: '#b45309',
    },
    error: {
      50: '#fef2f2',
      500: '#ef4444',
      700: '#b91c1c',
    },
    info: {
      50: '#eff6ff',
      500: '#3b82f6',
      700: '#1d4ed8',
    },
  },
};
```

## React Native tokens

```javascript
export const colorTokens = {
  light: {
    brand: {
      primary: '#E1FF00',
      charcoal: '#1a1a1a',
      blue: '#0066cc',
    },
    background: '#fafafa',
    surface: '#ffffff',
    text: {
      primary: '#171717',
      secondary: '#525252',
    },
    border: '#e5e5e5',
  },
  dark: {
    brand: {
      primary: '#E1FF00',
      charcoal: '#fafafa',
      blue: '#0066cc',
    },
    background: '#171717',
    surface: '#262626',
    text: {
      primary: '#fafafa',
      secondary: '#a3a3a3',
    },
    border: '#404040',
  },
};
```

## Usage examples

### Button component

```css
.btn-primary {
  background: var(--brand-blue);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #0052a3; /* Darker blue */
}
```

### Alert component

```css
.alert-success {
  background: var(--success-50);
  color: var(--success-700);
  border: 1px solid var(--success-500);
}

.alert-error {
  background: var(--error-50);
  color: var(--error-700);
  border: 1px solid var(--error-500);
}
```

## Design token structure

Our design tokens follow a consistent naming pattern:

```
[category]-[scale/role]
```

**Examples:**
- `neutral-500` (category: neutral, scale: 500)
- `success-50` (category: success, scale: 50)
- `brand-primary` (category: brand, role: primary)

### Token categories

- **Brand**: Core brand identity colors
- **Neutral**: Grayscale palette for text and backgrounds
- **Semantic**: Status and feedback colors (success, warning, error, info)
- **System**: Platform-specific colors (focus, selection, etc.)

### Scale system

We use a numeric scale from 50-900 where:
- **50-200**: Light tints, backgrounds, subtle fills
- **300-400**: Borders, disabled states, placeholders
- **500**: Base color, primary usage
- **600-700**: Hover states, secondary emphasis
- **800-900**: High contrast, primary text

## Platform considerations

### Web implementation
- Use CSS custom properties for easy theme switching
- Leverage `prefers-color-scheme` for automatic dark mode
- Ensure proper fallbacks for older browsers

### Mobile implementation
- Consider platform design guidelines (iOS HIG, Material Design)
- Test colors on actual devices for accurate representation
- Account for ambient lighting conditions

## Testing and validation

Always test your color implementations:

1. **Contrast validation**: Use tools like WebAIM Contrast Checker
2. **Colorblind testing**: Verify accessibility with simulators
3. **Device testing**: Check appearance across different screens
4. **Performance**: Monitor impact on loading and rendering

Use these tokens consistently across your application to maintain visual coherence and enable easy theming.