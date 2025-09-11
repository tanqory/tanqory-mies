# Breakpoints

Responsive design breakpoints ensure consistent multi-device experiences. Tanqory Mies uses strategic breakpoints that align with common device categories and usage patterns.

## Purpose

Breakpoints define when layouts adapt to different screen sizes. Strategic breakpoints ensure optimal reading experiences, touch target sizes, and content organization across phones, tablets, and desktops.

## Usage Guidelines

- Use mobile breakpoint (480px) for small phone optimizations and compact layouts
- Apply tablet breakpoint (768px) for medium screens that benefit from multi-column layouts
- Implement desktop breakpoint (1024px) for larger screens with expanded navigation and content
- Reserve large desktop breakpoint (1440px) for wide screens requiring constrained content width

## Token Examples

### Breakpoint Scale

```css
:root {
  --mies-breakpoint-mobile: 480px;
  --mies-breakpoint-tablet: 768px;
  --mies-breakpoint-desktop: 1024px;
  --mies-breakpoint-wide: 1440px;
}
```

### Media Query Helpers

```css
:root {
  --mies-media-mobile: 'screen and (max-width: 479px)';
  --mies-media-tablet: 'screen and (min-width: 480px) and (max-width: 767px)';
  --mies-media-desktop: 'screen and (min-width: 768px) and (max-width: 1023px)';
  --mies-media-wide: 'screen and (min-width: 1024px)';
}
```

### Container Max Widths

```css
:root {
  --mies-container-mobile: 100%;
  --mies-container-tablet: 720px;
  --mies-container-desktop: 960px;
  --mies-container-wide: 1200px;
}
```

## Implementation

### CSS Media Queries

```css
/* Mobile First Approach */
.component {
  padding: var(--mies-spacing-sm);
  font-size: var(--mies-font-size-sm);
}

@media (min-width: 480px) {
  .component {
    padding: var(--mies-spacing-base);
    font-size: var(--mies-font-size-base);
  }
}

@media (min-width: 768px) {
  .component {
    padding: var(--mies-spacing-lg);
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--mies-spacing-lg);
  }
}

@media (min-width: 1024px) {
  .component {
    max-width: var(--mies-container-wide);
    margin: 0 auto;
  }
}
```

### JavaScript/TypeScript

```js
import { breakpoints } from '@tanqory/mies-tokens';

const mediaQueries = {
  mobile: `(max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  wide: `(min-width: ${breakpoints.wide}px)`,
};

// Usage with window.matchMedia
const isMobile = window.matchMedia(mediaQueries.mobile).matches;
const isTablet = window.matchMedia(mediaQueries.tablet).matches;
```

### React Native

```js
import { Dimensions } from 'react-native';
import tokens from '@tanqory/mies-tokens/native.json';

const { width } = Dimensions.get('window');

const getDeviceType = () => {
  if (width < tokens.breakpoints.tablet) return 'mobile';
  if (width < tokens.breakpoints.desktop) return 'tablet';
  return 'desktop';
};

const styles = StyleSheet.create({
  container: {
    padding: width < tokens.breakpoints.tablet 
      ? tokens.spacing.sm 
      : tokens.spacing.base,
  },
});
```

## Cross-Platform Considerations

### Mobile-First Design

Design for mobile first, then enhance for larger screens:

```css
/* Base styles for mobile */
.navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

/* Enhance for desktop */
@media (min-width: 768px) {
  .navigation {
    position: static;
    display: flex;
    justify-content: space-between;
  }
}
```

### Touch Target Optimization

```css
.button {
  min-height: 44px;
  min-width: 44px;
}

@media (min-width: 1024px) {
  .button {
    min-height: 32px;
    min-width: auto;
  }
}
```

### Content Width Constraints

```css
.content {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 var(--mies-spacing-base);
}

@media (min-width: 1024px) {
  .content {
    max-width: var(--mies-container-wide);
  }
}
```

## Performance Considerations

### Critical CSS

Load mobile styles inline, defer desktop enhancements:

```html
<style>
  /* Critical mobile styles inline */
  .component { padding: 8px; }
</style>

<link rel="stylesheet" href="desktop.css" media="(min-width: 768px)">
```

### Image Optimization

```css
.hero-image {
  width: 100%;
  height: auto;
}

@media (min-width: 768px) {
  .hero-image {
    width: 50%;
  }
}
```

## Design Philosophy

> "Architecture belongs to culture, not to civilization." — Ludwig Mies van der Rohe

Breakpoints create cultural adaptations for different contexts while maintaining systematic consistency. Mobile-first design honors the majority of users while desktop enhancements serve specific needs without compromising core functionality.