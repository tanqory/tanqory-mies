# Color Palette

The Tanqory Mies color system is built on systematic constraints: three colors only. This limitation forces better design decisions and ensures consistency across all platforms.

## Purpose

Color is a powerful communication tool in e-commerce. Our minimal palette builds trust, reduces cognitive load, and directs attention to critical actions like "Add to Cart" and "Purchase Now."

## Usage Guidelines

- Use brand lime (#E1FF00) exclusively for primary actions and key interactive elements
- Apply pure black (#000000) for text, borders, and structural elements that require clarity
- Implement pure white (#FFFFFF) for backgrounds and negative space that lets content breathe
- Never introduce additional colors—constraints liberate creativity and ensure consistency

## Token Examples

### Brand Colors

```css
:root {
  --mies-color-brand: #E1FF00;
  --mies-color-brand-hover: #D4F200;
  --mies-color-brand-pressed: #C7E600;
}
```

### Neutral Colors

```css
:root {
  --mies-color-black: #000000;
  --mies-color-white: #FFFFFF;
  --mies-color-gray-50: #F8F8F8;
  --mies-color-gray-100: #E5E5E5;
  --mies-color-gray-200: #CCCCCC;
}
```

### Semantic Colors

```css
:root {
  --mies-color-success: #00C851;
  --mies-color-warning: #FFBB33;
  --mies-color-error: #FF4444;
  --mies-color-info: #33B5E5;
}
```

### State Colors

```css
:root {
  --mies-color-disabled: #999999;
  --mies-color-focus: #E1FF00;
  --mies-color-selection: rgba(225, 255, 0, 0.2);
}
```

## Implementation

### CSS Custom Properties

```css
.primary-button {
  background-color: var(--mies-color-brand);
  color: var(--mies-color-black);
  border: 1px solid var(--mies-color-black);
}

.primary-button:hover {
  background-color: var(--mies-color-brand-hover);
}

.primary-button:active {
  background-color: var(--mies-color-brand-pressed);
}
```

### JavaScript/TypeScript

```js
import { colors } from '@tanqory/mies-tokens';

const buttonStyles = {
  backgroundColor: colors.brand,
  color: colors.black,
  border: `1px solid ${colors.black}`,
};

// State variants
const hoverStyles = {
  backgroundColor: colors.brand.hover,
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: tokens.colors.brand,
    borderColor: tokens.colors.black,
    borderWidth: 1,
  },
  buttonText: {
    color: tokens.colors.black,
  },
});
```

## Cross-Platform Considerations

### Accessibility

All color combinations meet WCAG AA contrast requirements:
- Brand lime on black: 16.75:1 contrast ratio
- Black text on white: 21:1 contrast ratio
- White text on black: 21:1 contrast ratio

### Mobile Optimization

Colors are optimized for various screen technologies:
- High contrast for outdoor visibility
- Consistent appearance across OLED and LCD displays
- Reduced blue light for better user experience

### Print Compatibility

Colors translate well to print media:
- Pure black provides crisp text reproduction
- Brand lime maintains visibility in grayscale conversion
- High contrast ensures readability when printed

## Design Philosophy

> "I don't want to be interesting. I want to be good." — Ludwig Mies van der Rohe

Our color palette isn't interesting—it's good. It serves the user's needs without distraction, builds trust through consistency, and drives conversions through clear visual hierarchy.