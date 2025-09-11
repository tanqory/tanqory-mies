# Width

Systematic width constraints create predictable layouts and consistent component sizing. Tanqory Mies uses strategic width tokens for components, containers, and layout elements.

## Purpose

Width tokens eliminate arbitrary sizing decisions and create predictable component behavior. Systematic width constraints improve layout stability, responsive design, and cross-platform consistency.

## Usage Guidelines

- Use full width (100%) for container elements that should fill available space
- Apply fixed widths for components that require consistent sizing across contexts
- Implement content-based widths for text containers that prioritize readability
- Reserve minimum widths for interactive elements that need adequate touch targets

## Token Examples

### Percentage Widths

```css
:root {
  --mies-width-full: 100%;
  --mies-width-half: 50%;
  --mies-width-third: 33.333333%;
  --mies-width-quarter: 25%;
  --mies-width-auto: auto;
}
```

### Fixed Widths

```css
:root {
  --mies-width-xs: 160px;
  --mies-width-sm: 240px;
  --mies-width-base: 320px;
  --mies-width-lg: 480px;
  --mies-width-xl: 640px;
  --mies-width-2xl: 768px;
}
```

### Component Widths

```css
:root {
  --mies-width-button: auto;
  --mies-width-button-small: 80px;
  --mies-width-button-large: 160px;
  --mies-width-input: var(--mies-width-full);
  --mies-width-modal: var(--mies-width-lg);
  --mies-width-sidebar: 280px;
}
```

### Content Widths

```css
:root {
  --mies-width-content-narrow: 480px;
  --mies-width-content-base: 640px;
  --mies-width-content-wide: 768px;
  --mies-width-content-full: 100%;
}
```

### Minimum Widths

```css
:root {
  --mies-width-min-touch: 44px;
  --mies-width-min-button: 80px;
  --mies-width-min-input: 120px;
  --mies-width-min-modal: 280px;
}
```

## Implementation

### CSS Custom Properties

```css
.container {
  width: var(--mies-width-full);
  max-width: var(--mies-width-content-wide);
  margin: 0 auto;
}

.button {
  width: var(--mies-width-button);
  min-width: var(--mies-width-min-button);
}

.input {
  width: var(--mies-width-input);
  min-width: var(--mies-width-min-input);
}

.modal {
  width: var(--mies-width-modal);
  min-width: var(--mies-width-min-modal);
  max-width: 90vw;
}

.sidebar {
  width: var(--mies-width-sidebar);
  min-width: var(--mies-width-sidebar);
  max-width: var(--mies-width-sidebar);
}
```

### JavaScript/TypeScript

```js
import { width } from '@tanqory/mies-tokens';

const styles = {
  container: {
    width: width.full,
    maxWidth: width.content.wide,
    margin: '0 auto',
  },
  button: {
    width: width.button,
    minWidth: width.min.button,
  },
  modal: {
    width: width.modal,
    minWidth: width.min.modal,
    maxWidth: '90vw',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: `${width.sidebar} 1fr`,
    gap: '24px',
  },
};
```

### React Native

```js
import { Dimensions } from 'react-native';
import tokens from '@tanqory/mies-tokens/native.json';

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: tokens.width.content.wide,
    alignSelf: 'center',
  },
  button: {
    minWidth: tokens.width.min.button,
    paddingHorizontal: tokens.spacing.base,
  },
  modal: {
    width: Math.min(tokens.width.modal, screenWidth * 0.9),
    minWidth: tokens.width.min.modal,
  },
});
```

## Cross-Platform Considerations

### Responsive Width

```css
.component {
  width: var(--mies-width-full);
}

@media (min-width: 768px) {
  .component {
    width: var(--mies-width-content-base);
  }
}

@media (min-width: 1024px) {
  .component {
    width: var(--mies-width-content-wide);
  }
}
```

### Flexible Containers

```css
.flexible-container {
  width: 100%;
  min-width: var(--mies-width-xs);
  max-width: var(--mies-width-content-wide);
  margin: 0 auto;
}
```

### Grid Systems

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--mies-width-sm), 1fr));
  gap: var(--mies-spacing-base);
}
```

## Touch Target Considerations

### Mobile Optimization

```css
.touch-target {
  min-width: var(--mies-width-min-touch);
  min-height: var(--mies-width-min-touch);
}

@media (min-width: 768px) {
  .touch-target {
    min-width: auto;
    min-height: auto;
  }
}
```

### Button Sizing

```css
.button-small {
  width: var(--mies-width-button-small);
}

.button-base {
  width: var(--mies-width-button);
  min-width: var(--mies-width-min-button);
}

.button-large {
  width: var(--mies-width-button-large);
}

.button-full {
  width: var(--mies-width-full);
}
```

## Design Philosophy

> "Architecture starts when you carefully put two bricks together." — Ludwig Mies van der Rohe

Width constraints are the foundation stones of systematic layout. Predictable widths create architectural integrity, reduce layout shifts, and ensure consistent user experiences across all devices and contexts.