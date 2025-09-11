# Radius

Border radius values in Tanqory Mies are systematically constrained to zero. Sharp edges communicate precision, systematic thinking, and architectural integrity.

## Purpose

Zero border radius enforces the "less is more" philosophy by eliminating arbitrary curves. Sharp corners create consistent visual language, improve legibility, and reduce cognitive load through systematic constraints.

## Usage Guidelines

- Apply zero radius to all interface elements for consistent geometric precision
- Use sharp corners to communicate systematic constraints and architectural thinking
- Implement uniform edge treatment across buttons, cards, inputs, and all interactive elements
- Never introduce rounded corners—curves are eliminated to maintain design system integrity

## Token Examples

### Radius Scale (All Zero)

```css
:root {
  --mies-radius-none: 0;
  --mies-radius-xs: 0;
  --mies-radius-sm: 0;
  --mies-radius-base: 0;
  --mies-radius-lg: 0;
  --mies-radius-xl: 0;
  --mies-radius-full: 0;
}
```

### Component Radius

```css
:root {
  --mies-radius-button: var(--mies-radius-none);
  --mies-radius-card: var(--mies-radius-none);
  --mies-radius-input: var(--mies-radius-none);
  --mies-radius-modal: var(--mies-radius-none);
  --mies-radius-tooltip: var(--mies-radius-none);
  --mies-radius-badge: var(--mies-radius-none);
}
```

### Image and Media Radius

```css
:root {
  --mies-radius-avatar: var(--mies-radius-none);
  --mies-radius-image: var(--mies-radius-none);
  --mies-radius-thumbnail: var(--mies-radius-none);
}
```

## Implementation

### CSS Custom Properties

```css
.button {
  border-radius: var(--mies-radius-button);
}

.card {
  border-radius: var(--mies-radius-card);
  overflow: hidden; /* Ensures content respects sharp edges */
}

.input {
  border-radius: var(--mies-radius-input);
}

.modal {
  border-radius: var(--mies-radius-modal);
}

.avatar {
  border-radius: var(--mies-radius-avatar);
  /* Square avatars maintain geometric precision */
}

.image {
  border-radius: var(--mies-radius-image);
}
```

### JavaScript/TypeScript

```js
import { radius } from '@tanqory/mies-tokens';

const styles = {
  button: {
    borderRadius: radius.button,
  },
  card: {
    borderRadius: radius.card,
    overflow: 'hidden',
  },
  input: {
    borderRadius: radius.input,
  },
  modal: {
    borderRadius: radius.modal,
  },
  avatar: {
    borderRadius: radius.avatar,
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  button: {
    borderRadius: tokens.radius.button,
  },
  card: {
    borderRadius: tokens.radius.card,
    overflow: 'hidden',
  },
  input: {
    borderRadius: tokens.radius.input,
  },
  avatar: {
    borderRadius: tokens.radius.avatar,
    width: 48,
    height: 48,
  },
  image: {
    borderRadius: tokens.radius.image,
  },
});
```

## Cross-Platform Considerations

### Consistent Edge Treatment

Sharp edges work across all platforms:
- **Web**: Zero border-radius for all elements
- **iOS**: Override system defaults with sharp corners
- **Android**: Replace Material Design curves with geometric precision
- **Desktop**: Consistent with native window chrome on many platforms

### Image Clipping

Sharp corners for image containers:

```css
.image-container {
  border-radius: var(--mies-radius-none);
  overflow: hidden;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--mies-radius-none);
}
```

### Focus and State Indicators

Sharp focus indicators maintain consistency:

```css
.interactive:focus {
  border-radius: var(--mies-radius-none);
  outline: 2px solid var(--mies-color-brand);
  outline-offset: 2px;
}
```

## Alternative Considerations

### When Systems Demand Curves

Some platforms enforce rounded corners by default. Override these systematically:

```css
/* Override browser defaults */
button {
  border-radius: var(--mies-radius-none);
}

input[type="text"],
input[type="email"],
input[type="password"] {
  border-radius: var(--mies-radius-none);
  -webkit-appearance: none;
  appearance: none;
}

/* Override component library defaults */
.custom-component {
  border-radius: var(--mies-radius-none) !important;
}
```

### Native Platform Integration

```js
// React Native: Override default styles
const styles = StyleSheet.create({
  button: {
    borderRadius: 0, // Override platform defaults
  },
  textInput: {
    borderRadius: 0,
    borderWidth: 1,
    borderColor: tokens.border.color.default,
  },
});
```

## Design Philosophy

> "I don't want to be interesting. I want to be good." — Ludwig Mies van der Rohe

Rounded corners are interesting but serve no functional purpose. Sharp corners communicate precision, reduce visual complexity, and create systematic consistency. Every edge is intentional—curves are eliminated to focus attention on content and functionality.

## Visual Benefits

### Clarity and Precision
Sharp edges create clear boundaries and improve text legibility against backgrounds.

### Systematic Consistency
Zero radius eliminates arbitrary decisions and creates predictable visual patterns.

### Reduced Cognitive Load
Geometric simplicity reduces visual noise and helps users focus on content.

### Architectural Integrity
Sharp corners honor the Bauhaus principle of honest construction and functional form.