# Border

Sharp, precise borders define structure and create clear boundaries in the Tanqory Mies design system. All borders maintain consistent width and color while eschewing rounded corners entirely.

## Purpose

Borders communicate structure, indicate interactive states, and separate content areas. The single border width creates predictable layouts while pure black borders ensure maximum contrast and clarity.

## Usage Guidelines

- Apply standard border width (1px) for all structural elements and component boundaries
- Use pure black borders to maintain high contrast and ensure accessibility compliance
- Implement borders to indicate focus states, form validation, and interactive boundaries
- Never use rounded corners—sharp edges communicate precision and systematic constraints

## Token Examples

### Border Widths

```css
:root {
  --mies-border-width-none: 0;
  --mies-border-width-thin: 1px;
  --mies-border-width-thick: 2px;
}
```

### Border Colors

```css
:root {
  --mies-border-color-default: var(--mies-color-black);
  --mies-border-color-subtle: var(--mies-color-gray-200);
  --mies-border-color-brand: var(--mies-color-brand);
  --mies-border-color-error: var(--mies-color-error);
  --mies-border-color-success: var(--mies-color-success);
}
```

### Border Styles

```css
:root {
  --mies-border-style-solid: solid;
  --mies-border-style-dashed: dashed;
  --mies-border-style-dotted: dotted;
}
```

### Border Combinations

```css
:root {
  --mies-border-default: var(--mies-border-width-thin) var(--mies-border-style-solid) var(--mies-border-color-default);
  --mies-border-subtle: var(--mies-border-width-thin) var(--mies-border-style-solid) var(--mies-border-color-subtle);
  --mies-border-brand: var(--mies-border-width-thin) var(--mies-border-style-solid) var(--mies-border-color-brand);
  --mies-border-focus: var(--mies-border-width-thick) var(--mies-border-style-solid) var(--mies-border-color-brand);
}
```

### Border Radius (Always Zero)

```css
:root {
  --mies-border-radius-none: 0;
  --mies-border-radius-sm: 0;
  --mies-border-radius-base: 0;
  --mies-border-radius-lg: 0;
  --mies-border-radius-full: 0;
}
```

## Implementation

### CSS Custom Properties

```css
.card {
  border: var(--mies-border-default);
  border-radius: var(--mies-border-radius-none);
}

.button {
  border: var(--mies-border-default);
  border-radius: var(--mies-border-radius-none);
}

.button:focus {
  border: var(--mies-border-focus);
  outline: none;
}

.input {
  border: var(--mies-border-subtle);
  border-radius: var(--mies-border-radius-none);
}

.input:focus {
  border: var(--mies-border-focus);
}

.input.error {
  border-color: var(--mies-border-color-error);
}
```

### JavaScript/TypeScript

```js
import { border } from '@tanqory/mies-tokens';

const styles = {
  card: {
    border: border.default,
    borderRadius: border.radius.none,
  },
  button: {
    border: border.default,
    borderRadius: border.radius.none,
  },
  buttonFocus: {
    border: border.focus,
    outline: 'none',
  },
  input: {
    border: border.subtle,
    borderRadius: border.radius.none,
  },
  inputError: {
    borderColor: border.color.error,
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  card: {
    borderWidth: tokens.border.width.thin,
    borderColor: tokens.border.color.default,
    borderStyle: tokens.border.style.solid,
  },
  button: {
    borderWidth: tokens.border.width.thin,
    borderColor: tokens.border.color.default,
    borderRadius: tokens.border.radius.none,
  },
  input: {
    borderWidth: tokens.border.width.thin,
    borderColor: tokens.border.color.subtle,
    borderRadius: tokens.border.radius.none,
  },
  inputFocus: {
    borderWidth: tokens.border.width.thick,
    borderColor: tokens.border.color.brand,
  },
});
```

## Cross-Platform Considerations

### Focus Indicators

Borders provide accessible focus indicators:

```css
.interactive:focus {
  border: var(--mies-border-focus);
  outline: none;
}

@media (prefers-reduced-motion: no-preference) {
  .interactive {
    transition: border-color 0.15s ease;
  }
}
```

### High Contrast Support

Borders adapt for accessibility:

```css
@media (prefers-contrast: high) {
  :root {
    --mies-border-width-thin: 2px;
    --mies-border-width-thick: 3px;
  }
}
```

### Mobile Touch Targets

Border considerations for mobile:

```css
.mobile-interactive {
  border: var(--mies-border-default);
  min-height: 44px;
  min-width: 44px;
}
```

## State Variations

### Interactive States

```css
.button {
  border: var(--mies-border-default);
}

.button:hover {
  border-color: var(--mies-border-color-brand);
}

.button:focus {
  border: var(--mies-border-focus);
}

.button:active {
  border: var(--mies-border-focus);
}

.button:disabled {
  border-color: var(--mies-border-color-subtle);
  opacity: 0.5;
}
```

### Form Validation

```css
.input.valid {
  border-color: var(--mies-border-color-success);
}

.input.invalid {
  border-color: var(--mies-border-color-error);
}

.input.warning {
  border-color: var(--mies-border-color-warning);
}
```

## Design Philosophy

> "Architecture starts when you carefully put two bricks together." — Ludwig Mies van der Rohe

Borders are the bricks of interface architecture. Sharp, precise borders create structure and communicate systematic thinking. Rounded corners are eliminated—every edge serves a purpose, creating clarity through constraint.