# Font & Typography

Typography is the foundation of clear communication. Tanqory Mies uses system fonts for maximum performance and readability, with a limited size scale that creates consistent hierarchy.

## Purpose

System fonts provide instant loading, native feel, and excellent readability across all platforms. Limited font sizes eliminate arbitrary decisions and create predictable, scannable content hierarchy.

## Usage Guidelines

- Use system font stack for all text to ensure zero loading time and native appearance
- Apply base size (16px) for primary body text to maximize readability and accessibility
- Implement heading sizes (18px, 24px, 32px) to create clear content hierarchy
- Reserve small size (14px) only for secondary information like captions and metadata

## Token Examples

### Font Families

```css
:root {
  --mies-font-family-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                           Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --mies-font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', 
                           'Courier New', monospace;
}
```

### Font Sizes

```css
:root {
  --mies-font-size-sm: 14px;
  --mies-font-size-base: 16px;
  --mies-font-size-lg: 18px;
  --mies-font-size-xl: 24px;
  --mies-font-size-2xl: 32px;
}
```

### Font Weights

```css
:root {
  --mies-font-weight-normal: 400;
  --mies-font-weight-medium: 500;
  --mies-font-weight-semibold: 600;
  --mies-font-weight-bold: 700;
}
```

### Line Heights

```css
:root {
  --mies-line-height-tight: 1.25;
  --mies-line-height-normal: 1.5;
  --mies-line-height-relaxed: 1.625;
}
```

### Letter Spacing

```css
:root {
  --mies-letter-spacing-tight: -0.025em;
  --mies-letter-spacing-normal: 0;
  --mies-letter-spacing-wide: 0.025em;
}
```

## Implementation

### CSS Custom Properties

```css
body {
  font-family: var(--mies-font-family-sans);
  font-size: var(--mies-font-size-base);
  line-height: var(--mies-line-height-normal);
  letter-spacing: var(--mies-letter-spacing-normal);
}

h1 {
  font-size: var(--mies-font-size-2xl);
  font-weight: var(--mies-font-weight-bold);
  line-height: var(--mies-line-height-tight);
  letter-spacing: var(--mies-letter-spacing-tight);
}

h2 {
  font-size: var(--mies-font-size-xl);
  font-weight: var(--mies-font-weight-semibold);
  line-height: var(--mies-line-height-tight);
}

code {
  font-family: var(--mies-font-family-mono);
  font-size: var(--mies-font-size-sm);
}
```

### JavaScript/TypeScript

```js
import { typography } from '@tanqory/mies-tokens';

const textStyles = {
  body: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.base,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.normal,
  },
  heading1: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize['2xl'],
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.bold,
  },
  caption: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.normal,
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  body: {
    fontFamily: tokens.typography.fontFamily.sans,
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.fontSize.base * tokens.typography.lineHeight.normal,
    fontWeight: tokens.typography.fontWeight.normal,
  },
  heading: {
    fontFamily: tokens.typography.fontFamily.sans,
    fontSize: tokens.typography.fontSize.xl,
    lineHeight: tokens.typography.fontSize.xl * tokens.typography.lineHeight.tight,
    fontWeight: tokens.typography.fontWeight.semibold,
  },
});
```

## Cross-Platform Considerations

### System Font Optimization

Font stacks optimized for each platform:

```css
/* macOS/iOS optimized */
--mies-font-family-sans-apple: -apple-system, BlinkMacSystemFont, sans-serif;

/* Windows optimized */
--mies-font-family-sans-windows: 'Segoe UI', Tahoma, sans-serif;

/* Android optimized */
--mies-font-family-sans-android: Roboto, 'Droid Sans', sans-serif;

/* Linux optimized */
--mies-font-family-sans-linux: Ubuntu, Cantarell, 'DejaVu Sans', sans-serif;
```

### Responsive Typography

Typography scales with viewport size:

```css
:root {
  --mies-font-size-responsive-base: clamp(14px, 4vw, 16px);
  --mies-font-size-responsive-lg: clamp(16px, 5vw, 18px);
  --mies-font-size-responsive-xl: clamp(20px, 6vw, 24px);
  --mies-font-size-responsive-2xl: clamp(24px, 8vw, 32px);
}
```

### High Contrast Support

Typography adapts for accessibility needs:

```css
@media (prefers-contrast: high) {
  :root {
    --mies-font-weight-normal: 500;
    --mies-font-weight-medium: 600;
    --mies-font-weight-semibold: 700;
    --mies-font-weight-bold: 800;
  }
}
```

## Performance Benefits

### Zero Web Font Loading

- **Instant text rendering**: No font loading delays
- **Reduced bundle size**: No external font files
- **Better Core Web Vitals**: Improved LCP and CLS scores
- **Bandwidth savings**: No additional network requests

### Platform Native Feel

System fonts provide:
- **Familiar reading experience**: Users recognize their system's typography
- **Consistent spacing**: Proper kerning and character spacing
- **Accessibility features**: Built-in support for screen readers and zoom
- **International support**: Comprehensive Unicode coverage

## Design Philosophy

> "Architecture belongs to culture, not to civilization." — Ludwig Mies van der Rohe

Typography creates culture through clear communication. System fonts honor each platform's typographic culture while maintaining consistent information hierarchy across all touchpoints.