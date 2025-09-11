# Shadow Rules

Tanqory Mies eliminates shadows entirely. Flat surfaces communicate honesty, reduce visual complexity, and maintain the "less is more" philosophy through systematic constraints.

## Purpose

Zero shadows create flat, honest interfaces that focus attention on content rather than artificial depth effects. Elimination of shadows reduces cognitive load and maintains consistent visual hierarchy through typography and spacing alone.

## Usage Guidelines

- Apply no shadows to any interface elements to maintain flat, honest design language
- Use spacing, borders, and typography to create visual hierarchy instead of artificial depth
- Implement flat surfaces that communicate systematic constraints and architectural precision
- Never introduce box shadows, drop shadows, or any depth effects—flat is the only option

## Token Examples

### Shadow Scale (All Zero)

```css
:root {
  --mies-shadow-none: none;
  --mies-shadow-xs: none;
  --mies-shadow-sm: none;
  --mies-shadow-base: none;
  --mies-shadow-lg: none;
  --mies-shadow-xl: none;
}
```

### Component Shadows

```css
:root {
  --mies-shadow-button: var(--mies-shadow-none);
  --mies-shadow-card: var(--mies-shadow-none);
  --mies-shadow-modal: var(--mies-shadow-none);
  --mies-shadow-dropdown: var(--mies-shadow-none);
  --mies-shadow-tooltip: var(--mies-shadow-none);
}
```

### Elevation Alternatives

Instead of shadows, use borders and background colors:

```css
:root {
  --mies-elevation-surface: var(--mies-color-white);
  --mies-elevation-raised: var(--mies-color-gray-50);
  --mies-elevation-overlay: var(--mies-color-white);
  --mies-elevation-border: 1px solid var(--mies-color-black);
}
```

## Implementation

### CSS Custom Properties

```css
.card {
  box-shadow: var(--mies-shadow-card);
  border: var(--mies-elevation-border);
  background-color: var(--mies-elevation-surface);
}

.button {
  box-shadow: var(--mies-shadow-button);
  border: 1px solid var(--mies-color-black);
}

.modal {
  box-shadow: var(--mies-shadow-modal);
  border: var(--mies-elevation-border);
  background-color: var(--mies-elevation-overlay);
}

.dropdown {
  box-shadow: var(--mies-shadow-dropdown);
  border: var(--mies-elevation-border);
  background-color: var(--mies-elevation-surface);
}

/* Override any inherited shadows */
* {
  box-shadow: none !important;
  text-shadow: none !important;
}
```

### JavaScript/TypeScript

```js
import { shadows } from '@tanqory/mies-tokens';

const styles = {
  card: {
    boxShadow: shadows.card,
    border: '1px solid black',
    backgroundColor: 'white',
  },
  button: {
    boxShadow: shadows.button,
    border: '1px solid black',
  },
  modal: {
    boxShadow: shadows.modal,
    border: '1px solid black',
    backgroundColor: 'white',
  },
  // Ensure no shadows are applied
  resetShadows: {
    boxShadow: 'none',
    textShadow: 'none',
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  card: {
    // No shadow properties in React Native
    borderWidth: 1,
    borderColor: tokens.colors.black,
    backgroundColor: tokens.colors.white,
  },
  button: {
    borderWidth: 1,
    borderColor: tokens.colors.black,
    backgroundColor: tokens.colors.brand,
  },
  modal: {
    borderWidth: 1,
    borderColor: tokens.colors.black,
    backgroundColor: tokens.colors.white,
  },
});
```

## Cross-Platform Considerations

### Web Platform Override

Override common shadow-generating properties:

```css
/* Reset all possible shadow properties */
*,
*::before,
*::after {
  box-shadow: none !important;
  text-shadow: none !important;
  filter: none !important;
}

/* Override component library shadows */
.mui-paper,
.ant-card,
.chakra-ui-card {
  box-shadow: none !important;
  border: 1px solid var(--mies-color-black) !important;
}
```

### Mobile Platform Considerations

Native platforms often add default shadows. Override these:

```js
// React Native: Explicitly remove elevation
const styles = StyleSheet.create({
  card: {
    elevation: 0, // Android
    shadowOpacity: 0, // iOS
    shadowRadius: 0, // iOS
    shadowOffset: { width: 0, height: 0 }, // iOS
    borderWidth: 1,
    borderColor: '#000000',
  },
});
```

### Focus and State Alternatives

Use borders instead of shadow focus indicators:

```css
.interactive:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid var(--mies-color-brand);
}

.interactive:hover {
  box-shadow: none;
  border-color: var(--mies-color-brand);
}

.interactive:active {
  box-shadow: none;
  background-color: var(--mies-color-gray-50);
}
```

## Visual Hierarchy Alternatives

### Using Spacing

```css
.elevated-content {
  /* Instead of shadow, use spacing */
  margin: var(--mies-spacing-lg);
  padding: var(--mies-spacing-base);
  border: 1px solid var(--mies-color-black);
}
```

### Using Background Colors

```css
.surface-level-1 {
  background-color: var(--mies-color-white);
}

.surface-level-2 {
  background-color: var(--mies-color-gray-50);
  border: 1px solid var(--mies-color-black);
}
```

### Using Typography

```css
.content-priority-high {
  font-weight: var(--mies-font-weight-semibold);
  font-size: var(--mies-font-size-lg);
}

.content-priority-low {
  font-weight: var(--mies-font-weight-normal);
  font-size: var(--mies-font-size-sm);
}
```

## Design Philosophy

> "Less is more" — Ludwig Mies van der Rohe

Shadows are visual noise that distract from content and functionality. Flat surfaces create honest interfaces that communicate through systematic constraints rather than artificial depth effects. Every element exists on the same plane—hierarchy comes from typography, spacing, and content, not shadows.

## Benefits of Flat Design

### Performance
- Reduced rendering complexity
- Faster paint times
- Smaller CSS bundle size

### Clarity
- Focused attention on content
- Reduced visual distractions
- Clear element boundaries

### Systematic Consistency
- Predictable visual language
- Eliminated arbitrary depth decisions
- Architectural integrity