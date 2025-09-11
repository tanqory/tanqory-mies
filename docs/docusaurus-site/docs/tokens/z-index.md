# Z-Index

Systematic layering hierarchy ensures predictable stacking order for modals, tooltips, and overlay components. Tanqory Mies uses strategic z-index values to prevent layering conflicts.

## Purpose

Z-index tokens eliminate arbitrary stacking decisions and prevent layering conflicts across components. Systematic z-index values ensure modals, tooltips, and overlays appear in the correct order without interference.

## Usage Guidelines

- Use base z-index (1) for slightly elevated content like cards and dropdowns
- Apply modal z-index (1000) for dialog boxes and overlay components that block interaction
- Implement tooltip z-index (2000) for help text and contextual information that appears above modals
- Reserve maximum z-index (9999) for critical system notifications and error messages

## Token Examples

### Z-Index Scale

```css
:root {
  --mies-z-index-base: 1;
  --mies-z-index-dropdown: 100;
  --mies-z-index-sticky: 200;
  --mies-z-index-modal: 1000;
  --mies-z-index-tooltip: 2000;
  --mies-z-index-toast: 3000;
  --mies-z-index-max: 9999;
}
```

### Component Z-Index

```css
:root {
  --mies-z-index-card: var(--mies-z-index-base);
  --mies-z-index-navigation: var(--mies-z-index-sticky);
  --mies-z-index-sidebar: var(--mies-z-index-sticky);
  --mies-z-index-overlay: var(--mies-z-index-modal);
  --mies-z-index-popover: var(--mies-z-index-tooltip);
}
```

### Interactive Z-Index

```css
:root {
  --mies-z-index-focus: var(--mies-z-index-base);
  --mies-z-index-hover: var(--mies-z-index-base);
  --mies-z-index-active: var(--mies-z-index-dropdown);
}
```

## Implementation

### CSS Custom Properties

```css
.card {
  z-index: var(--mies-z-index-card);
  position: relative;
}

.dropdown {
  z-index: var(--mies-z-index-dropdown);
  position: absolute;
}

.navbar {
  z-index: var(--mies-z-index-navigation);
  position: sticky;
  top: 0;
}

.modal {
  z-index: var(--mies-z-index-modal);
  position: fixed;
}

.modal-backdrop {
  z-index: calc(var(--mies-z-index-modal) - 1);
  position: fixed;
}

.tooltip {
  z-index: var(--mies-z-index-tooltip);
  position: absolute;
}

.toast {
  z-index: var(--mies-z-index-toast);
  position: fixed;
}
```

### JavaScript/TypeScript

```js
import { zIndex } from '@tanqory/mies-tokens';

const styles = {
  card: {
    zIndex: zIndex.card,
    position: 'relative',
  },
  dropdown: {
    zIndex: zIndex.dropdown,
    position: 'absolute',
  },
  modal: {
    zIndex: zIndex.modal,
    position: 'fixed',
  },
  tooltip: {
    zIndex: zIndex.tooltip,
    position: 'absolute',
  },
  toast: {
    zIndex: zIndex.toast,
    position: 'fixed',
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

// React Native uses elevation instead of z-index
const styles = StyleSheet.create({
  card: {
    elevation: tokens.zIndex.card,
  },
  modal: {
    elevation: tokens.zIndex.modal,
  },
  tooltip: {
    elevation: tokens.zIndex.tooltip,
  },
  toast: {
    elevation: tokens.zIndex.toast,
  },
});
```

## Cross-Platform Considerations

### Stacking Contexts

Ensure proper stacking context creation:

```css
.stacking-context {
  position: relative;
  z-index: 0;
  /* Creates new stacking context */
}

.child-element {
  z-index: var(--mies-z-index-base);
  position: relative;
}
```

### Portal Components

For React portals and similar patterns:

```css
.portal-root {
  z-index: var(--mies-z-index-modal);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.portal-content {
  pointer-events: auto;
}
```

## Layer Organization

### Navigation Layers

```css
.header {
  z-index: var(--mies-z-index-navigation);
  position: sticky;
}

.sidebar {
  z-index: var(--mies-z-index-sidebar);
  position: fixed;
}

.main-content {
  z-index: 0;
  position: relative;
}
```

### Overlay Layers

```css
.modal-backdrop {
  z-index: var(--mies-z-index-modal);
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  z-index: calc(var(--mies-z-index-modal) + 1);
  position: fixed;
}

.tooltip {
  z-index: var(--mies-z-index-tooltip);
  position: absolute;
}
```

### Interactive States

```css
.interactive {
  z-index: var(--mies-z-index-base);
}

.interactive:focus {
  z-index: var(--mies-z-index-focus);
}

.interactive:hover {
  z-index: var(--mies-z-index-hover);
}

.interactive:active {
  z-index: var(--mies-z-index-active);
}
```

## Debugging Z-Index

### Development Helpers

```css
/* Debug mode: visualize z-index layers */
[data-debug-z-index="true"] * {
  outline: 1px solid red;
  background-color: rgba(255, 0, 0, 0.1);
}

[data-debug-z-index="true"] *::before {
  content: 'z:' attr(style);
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
  background: yellow;
  color: black;
}
```

## Design Philosophy

> "Architecture belongs to culture, not to civilization." — Ludwig Mies van der Rohe

Z-index hierarchy creates spatial culture in digital interfaces. Systematic layering ensures predictable behavior, reduces conflicts, and creates clear visual hierarchy that guides user attention without confusion.