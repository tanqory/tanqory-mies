# @tanqory/mies-tokens

Cross-platform design tokens for the Tanqory Mies design system. Optimized for both Web (CSS) and Mobile (React Native) applications.

## Installation

```bash
npm install @tanqory/mies-tokens
# or
pnpm add @tanqory/mies-tokens
```

## Usage

### For Web (CSS Variables)

Import the CSS file to use CSS custom properties:

```css
/* globals.css or main.css */
@import '@tanqory/mies-tokens/tokens.css';

.my-component {
  color: var(--mies-color-brand);
  font-family: var(--mies-font-family);
  padding: var(--mies-spacing-16);
  border: var(--mies-border-width) solid var(--mies-color-black);
  z-index: var(--mies-z-index-overlay);
}
```

Or in your HTML:

```html
<link rel="stylesheet" href="node_modules/@tanqory/mies-tokens/dist/tokens.css">
```

### For Web (TypeScript/JavaScript)

Import tokens as typed constants:

```typescript
import { colors, spacing, typography, border, zIndex } from '@tanqory/mies-tokens';

// Individual token categories
console.log(colors.brand); // '#E1FF00'
console.log(spacing[16]); // '1rem'
console.log(typography.fontFamily); // 'Inter, -apple-system, ...'

// Or import all tokens
import { tokens } from '@tanqory/mies-tokens';
console.log(tokens.colors.brand); // '#E1FF00'
```

### For React Native (JSON)

Import raw JSON data optimized for React Native StyleSheet:

```typescript
// React Native usage
import tokensJson from '@tanqory/mies-tokens/json';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokensJson.colors.brand, // '#E1FF00'
    padding: tokensJson.spacing[16], // 16
    borderWidth: tokensJson.border.width, // 1
    borderRadius: tokensJson.border.radius, // 0
  },
  text: {
    fontFamily: tokensJson.typography.fontFamily, // 'Inter'
    fontSize: tokensJson.typography.fontSize.base, // 16
    lineHeight: tokensJson.typography.lineHeight.base, // 24
    color: tokensJson.colors.black, // '#000000'
  },
});

// Usage in component
<View style={styles.container}>
  <Text style={styles.text}>Hello World</Text>
</View>
```

### Cross-Platform Hook (Optional)

Create a custom hook for cross-platform token access:

```typescript
// useTokens.ts
import { Platform } from 'react-native';
import { tokens } from '@tanqory/mies-tokens';
import tokensJson from '@tanqory/mies-tokens/json';

export const useTokens = () => {
  return Platform.OS === 'web' ? tokens : tokensJson;
};

// Usage
const MyComponent = () => {
  const tokens = useTokens();
  
  return (
    <View style={{ 
      backgroundColor: tokens.colors.brand,
      padding: tokens.spacing[16] 
    }}>
      <Text>Cross-platform component</Text>
    </View>
  );
};
```

## Token Categories

### Colors

```typescript
colors = {
  brand: '#E1FF00',
  black: '#000000',
  white: '#FFFFFF',
}
```

**CSS Variables:**
- `--mies-color-brand`
- `--mies-color-black`  
- `--mies-color-white`

### Spacing

```typescript
spacing = {
  4: '0.25rem',   // 4px
  8: '0.5rem',    // 8px
  12: '0.75rem',  // 12px
  16: '1rem',     // 16px
  24: '1.5rem',   // 24px
  32: '2rem',     // 32px
}
```

**CSS Variables:**
- `--mies-spacing-4` through `--mies-spacing-32`

**React Native JSON:** Uses raw pixel values (4, 8, 12, 16, 24, 32)

### Typography

```typescript
typography = {
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
  }
}
```

**CSS Variables:**
- `--mies-font-family`
- `--mies-font-size-xs` through `--mies-font-size-2xl`
- `--mies-line-height-xs` through `--mies-line-height-2xl`

**React Native JSON:** Uses raw pixel values for fontSize and lineHeight

### Border

```typescript
border = {
  width: '1px',
  radius: '0',    // No border radius
}
```

**CSS Variables:**
- `--mies-border-width`
- `--mies-border-radius`

### Shadow

```typescript
shadow = {
  none: 'none'  // No shadows in design system
}
```

**CSS Variables:**
- `--mies-shadow`

### Z-Index

```typescript
zIndex = {
  base: 100,
  nav: 200,
  overlay: 300,
}
```

**CSS Variables:**
- `--mies-z-index-base`
- `--mies-z-index-nav`
- `--mies-z-index-overlay`

## Export Formats

| Platform | Import | Format | Use Case |
|----------|--------|--------|----------|
| **Web** | `@tanqory/mies-tokens/tokens.css` | CSS Variables | Stylesheets, CSS-in-JS |
| **Web** | `@tanqory/mies-tokens` | TypeScript | Styled-components, Theme objects |
| **Mobile** | `@tanqory/mies-tokens/json` | JSON | React Native StyleSheet |

## Examples

### Web with Tailwind CSS

```css
/* After importing tokens.css */
.button {
  background-color: var(--mies-color-brand);
  color: var(--mies-color-black);
  padding: var(--mies-spacing-12) var(--mies-spacing-16);
  font-family: var(--mies-font-family);
  font-size: var(--mies-font-size-base);
  border: var(--mies-border-width) solid var(--mies-color-black);
  border-radius: var(--mies-border-radius);
  box-shadow: var(--mies-shadow);
}
```

### React Native StyleSheet

```typescript
import tokens from '@tanqory/mies-tokens/json';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: tokens.colors.brand,
    color: tokens.colors.black,
    paddingVertical: tokens.spacing[12],
    paddingHorizontal: tokens.spacing[16],
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.fontSize.base,
    borderWidth: tokens.border.width,
    borderColor: tokens.colors.black,
    borderRadius: tokens.border.radius,
  },
});
```

### Styled Components (Web)

```typescript
import styled from 'styled-components';
import { tokens } from '@tanqory/mies-tokens';

const Button = styled.button`
  background-color: ${tokens.colors.brand};
  color: ${tokens.colors.black};
  padding: ${tokens.spacing[12]} ${tokens.spacing[16]};
  font-family: ${tokens.typography.fontFamily};
  font-size: ${tokens.typography.fontSize.base[0]};
  border: ${tokens.border.width} solid ${tokens.colors.black};
  border-radius: ${tokens.border.radius};
  box-shadow: none;
`;
```

## Design System Constraints

- **Colors**: Minimal palette (brand, black, white)
- **Spacing**: Limited scale (4, 8, 12, 16, 24, 32)
- **Typography**: Inter font family, xs-2xl scale
- **Borders**: 1px width only, no radius
- **Shadows**: None (flat design)
- **Z-Index**: Semantic layers (base, nav, overlay)

This ensures design consistency and prevents token sprawl across your cross-platform applications.