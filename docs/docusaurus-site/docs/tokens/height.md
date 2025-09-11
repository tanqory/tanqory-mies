# Height

Systematic height constraints ensure consistent component sizing and predictable layout behavior. Tanqory Mies uses strategic height tokens for optimal usability and visual harmony.

## Purpose

Height tokens eliminate arbitrary sizing decisions and create consistent component behavior across all contexts. Systematic height constraints improve accessibility, touch target sizing, and cross-platform consistency.

## Usage Guidelines

- Use auto height for content that should expand based on inner content length
- Apply fixed heights for interactive elements that require consistent touch targets
- Implement minimum heights for accessibility compliance and optimal usability
- Reserve specific heights for components that need predictable sizing behavior

## Token Examples

### Basic Heights

```css
:root {
  --mies-height-auto: auto;
  --mies-height-full: 100%;
  --mies-height-screen: 100vh;
  --mies-height-min: min-content;
  --mies-height-max: max-content;
}
```

### Fixed Heights

```css
:root {
  --mies-height-xs: 24px;
  --mies-height-sm: 32px;
  --mies-height-base: 44px;
  --mies-height-lg: 56px;
  --mies-height-xl: 72px;
}
```

### Component Heights

```css
:root {
  --mies-height-button: var(--mies-height-base);
  --mies-height-input: var(--mies-height-base);
  --mies-height-navbar: var(--mies-height-lg);
  --mies-height-header: var(--mies-height-xl);
  --mies-height-card: var(--mies-height-auto);
}
```

### Minimum Heights

```css
:root {
  --mies-height-min-touch: 44px;
  --mies-height-min-button: 32px;
  --mies-height-min-input: 44px;
  --mies-height-min-card: 120px;
}
```

## Implementation

### CSS Custom Properties

```css
.button {
  height: var(--mies-height-button);
  min-height: var(--mies-height-min-button);
}

.input {
  height: var(--mies-height-input);
  min-height: var(--mies-height-min-input);
}

.navbar {
  height: var(--mies-height-navbar);
  min-height: var(--mies-height-navbar);
}

.card {
  height: var(--mies-height-card);
  min-height: var(--mies-height-min-card);
}

.full-height {
  height: var(--mies-height-full);
}

.screen-height {
  height: var(--mies-height-screen);
}
```

### JavaScript/TypeScript

```js
import { height } from '@tanqory/mies-tokens';

const styles = {
  button: {
    height: height.button,
    minHeight: height.min.button,
  },
  input: {
    height: height.input,
    minHeight: height.min.input,
  },
  navbar: {
    height: height.navbar,
    minHeight: height.navbar,
  },
  modal: {
    maxHeight: height.screen,
    overflow: 'auto',
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  button: {
    height: tokens.height.button,
    minHeight: tokens.height.min.button,
  },
  input: {
    height: tokens.height.input,
    minHeight: tokens.height.min.input,
  },
  card: {
    minHeight: tokens.height.min.card,
  },
  container: {
    flex: 1, // Equivalent to height: 100%
  },
});
```

## Cross-Platform Considerations

### Touch Target Sizing

Ensure adequate touch targets for mobile:

```css
.touch-interactive {
  min-height: var(--mies-height-min-touch);
  min-width: var(--mies-height-min-touch);
}

@media (min-width: 768px) {
  .touch-interactive {
    min-height: var(--mies-height-min-button);
  }
}
```

### Responsive Heights

```css
.hero-section {
  height: 50vh;
  min-height: 400px;
  max-height: 600px;
}

@media (max-width: 767px) {
  .hero-section {
    height: 40vh;
    min-height: 300px;
  }
}
```

### Content Adaptation

```css
.flexible-content {
  height: auto;
  min-height: var(--mies-height-min-card);
  max-height: 80vh;
  overflow-y: auto;
}
```

## Accessibility Considerations

### WCAG Compliance

Ensure minimum heights meet accessibility requirements:

```css
.accessible-button {
  min-height: var(--mies-height-min-touch);
  min-width: var(--mies-height-min-touch);
}

.accessible-input {
  min-height: var(--mies-height-min-input);
  padding: var(--mies-spacing-sm);
}
```

### Focus Indicators

```css
.interactive:focus {
  outline: 2px solid var(--mies-color-brand);
  outline-offset: 2px;
  min-height: var(--mies-height-min-touch);
}
```

## Layout Patterns

### Full Height Layouts

```css
.layout {
  height: var(--mies-height-screen);
  display: flex;
  flex-direction: column;
}

.header {
  height: var(--mies-height-header);
  flex-shrink: 0;
}

.main {
  flex: 1;
  overflow-y: auto;
}

.footer {
  height: var(--mies-height-navbar);
  flex-shrink: 0;
}
```

### Grid Heights

```css
.grid-container {
  display: grid;
  grid-template-rows: var(--mies-height-header) 1fr var(--mies-height-navbar);
  height: var(--mies-height-screen);
}
```

## Design Philosophy

> "God is in the details" — Ludwig Mies van der Rohe

Height constraints create predictable, accessible interfaces that work consistently across all devices and contexts. Every height serves a functional purpose—from touch target accessibility to content organization—eliminating arbitrary decisions that compromise user experience.