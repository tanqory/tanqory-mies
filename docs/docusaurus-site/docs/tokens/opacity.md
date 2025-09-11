# Opacity

Systematic opacity values communicate interface states and create visual hierarchy through transparency. Tanqory Mies uses strategic opacity tokens for disabled elements, overlays, and state variations.

## Purpose

Opacity tokens provide consistent transparency values that communicate element states, create layered interfaces, and improve accessibility. Systematic opacity ensures predictable visual feedback across all interactive elements.

## Usage Guidelines

- Use full opacity (1.0) for active, interactive elements that require maximum visibility
- Apply high opacity (0.8) for secondary content that should remain clearly visible
- Implement medium opacity (0.6) for muted content and subtle background elements  
- Reserve low opacity (0.4) for disabled states and placeholder content

## Token Examples

### Opacity Scale

```css
:root {
  --mies-opacity-0: 0;
  --mies-opacity-20: 0.2;
  --mies-opacity-40: 0.4;
  --mies-opacity-60: 0.6;
  --mies-opacity-80: 0.8;
  --mies-opacity-100: 1;
}
```

### State Opacity

```css
:root {
  --mies-opacity-disabled: var(--mies-opacity-40);
  --mies-opacity-muted: var(--mies-opacity-60);
  --mies-opacity-subtle: var(--mies-opacity-80);
  --mies-opacity-active: var(--mies-opacity-100);
}
```

### Overlay Opacity

```css
:root {
  --mies-opacity-backdrop: var(--mies-opacity-60);
  --mies-opacity-overlay-light: var(--mies-opacity-80);
  --mies-opacity-overlay-dark: var(--mies-opacity-40);
  --mies-opacity-scrim: var(--mies-opacity-20);
}
```

### Interaction Opacity

```css
:root {
  --mies-opacity-hover: var(--mies-opacity-80);
  --mies-opacity-pressed: var(--mies-opacity-60);
  --mies-opacity-focus: var(--mies-opacity-100);
  --mies-opacity-loading: var(--mies-opacity-40);
}
```

## Implementation

### CSS Custom Properties

```css
.disabled {
  opacity: var(--mies-opacity-disabled);
  pointer-events: none;
}

.muted {
  opacity: var(--mies-opacity-muted);
}

.subtle {
  opacity: var(--mies-opacity-subtle);
}

.backdrop {
  opacity: var(--mies-opacity-backdrop);
  background-color: var(--mies-color-black);
}

.loading {
  opacity: var(--mies-opacity-loading);
  pointer-events: none;
}

.interactive:hover {
  opacity: var(--mies-opacity-hover);
}

.interactive:active {
  opacity: var(--mies-opacity-pressed);
}
```

### JavaScript/TypeScript

```js
import { opacity } from '@tanqory/mies-tokens';

const styles = {
  disabled: {
    opacity: opacity.disabled,
    pointerEvents: 'none',
  },
  muted: {
    opacity: opacity.muted,
  },
  backdrop: {
    opacity: opacity.backdrop,
    backgroundColor: 'black',
  },
  interactive: {
    opacity: opacity.active,
    transition: 'opacity 0.15s ease',
  },
  interactiveHover: {
    opacity: opacity.hover,
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  disabled: {
    opacity: tokens.opacity.disabled,
  },
  muted: {
    opacity: tokens.opacity.muted,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Using backdrop opacity
  },
  loading: {
    opacity: tokens.opacity.loading,
  },
});
```

## Cross-Platform Considerations

### Accessibility Compliance

Ensure opacity meets accessibility requirements:

```css
.accessible-disabled {
  opacity: var(--mies-opacity-disabled);
  /* Ensure minimum contrast is maintained */
}

@media (prefers-contrast: high) {
  :root {
    --mies-opacity-disabled: 0.6;
    --mies-opacity-muted: 0.8;
  }
}
```

### Performance Optimization

Use opacity for smooth animations:

```css
.fade-transition {
  opacity: var(--mies-opacity-0);
  transition: opacity 0.15s ease;
  will-change: opacity;
}

.fade-transition.visible {
  opacity: var(--mies-opacity-100);
}
```

### Color Opacity Combinations

```css
:root {
  --mies-color-overlay: rgba(0, 0, 0, var(--mies-opacity-backdrop));
  --mies-color-disabled: rgba(0, 0, 0, var(--mies-opacity-disabled));
  --mies-color-muted: rgba(0, 0, 0, var(--mies-opacity-muted));
}
```

## Interactive States

### Button States

```css
.button {
  opacity: var(--mies-opacity-active);
  transition: opacity 0.15s ease;
}

.button:hover {
  opacity: var(--mies-opacity-hover);
}

.button:active {
  opacity: var(--mies-opacity-pressed);
}

.button:disabled {
  opacity: var(--mies-opacity-disabled);
  pointer-events: none;
}
```

### Loading States

```css
.loading-container {
  position: relative;
}

.loading-container.is-loading {
  opacity: var(--mies-opacity-loading);
  pointer-events: none;
}

.loading-container.is-loading::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--mies-color-white);
  opacity: var(--mies-opacity-overlay-light);
}
```

### Overlay Patterns

```css
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--mies-color-black);
  opacity: var(--mies-opacity-backdrop);
}

.tooltip-overlay {
  background-color: var(--mies-color-black);
  opacity: var(--mies-opacity-overlay-dark);
}
```

## Animation and Transitions

### Fade Animations

```css
@keyframes fadeIn {
  from { opacity: var(--mies-opacity-0); }
  to { opacity: var(--mies-opacity-100); }
}

@keyframes fadeOut {
  from { opacity: var(--mies-opacity-100); }
  to { opacity: var(--mies-opacity-0); }
}

.fade-in {
  animation: fadeIn 0.15s ease;
}

.fade-out {
  animation: fadeOut 0.15s ease;
}
```

### Hover Transitions

```css
.interactive {
  opacity: var(--mies-opacity-100);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

.interactive:hover {
  opacity: var(--mies-opacity-hover);
}
```

## Design Philosophy

> "I don't want to be interesting. I want to be good." — Ludwig Mies van der Rohe

Opacity serves functional purposes—communicating states, creating hierarchy, and providing feedback. Systematic transparency values eliminate arbitrary decisions while ensuring accessibility and visual clarity across all interface elements.