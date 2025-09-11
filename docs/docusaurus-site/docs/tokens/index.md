# Tokens

Design tokens are the foundational building blocks of the Tanqory Mies design system. They capture design decisions as data, enabling consistent experiences across all platforms and technologies.

## System Architecture

Design tokens eliminate arbitrary values and enforce systematic constraints. Instead of using magic numbers like `#FF5733` or `12px`, tokens provide semantic names that communicate intent and maintain consistency.

```css
/* Instead of arbitrary values */
.button { color: #E1FF00; padding: 16px; }

/* Use semantic tokens */
.button { color: var(--mies-color-brand); padding: var(--mies-spacing-base); }
```

## Cross-Platform Consistency

Tokens work identically across Web, React Native, iOS, Android, and any future platform. The same design decision translates to different formats automatically:

- **CSS Custom Properties** for web applications
- **JavaScript objects** for React and Node.js
- **JSON files** for React Native and mobile
- **SCSS variables** for legacy stylesheets

## Token Categories

### [Color Palette](color-palette)
Brand colors, semantic colors, and neutral tones that build trust and guide user actions.

### [Spacing Scale](spacing-scale)
Mathematical spacing system that creates visual rhythm and consistent layouts.

### [Font & Typography](font-typography)
Font families, weights, and sizes optimized for readability and performance.

### [Text Styles](text-styles)
Pre-configured typography combinations for headings, body text, and UI elements.

### [Border](border)
Border widths and styles that maintain sharp, precise edges throughout the system.

### [Radius](radius)
Border radius values (always 0px in Mies philosophy).

### [Shadow Rules](shadow-rules)
Elevation and depth through systematic shadow definitions.

### [Breakpoints](breakpoints)
Responsive design breakpoints for consistent multi-device experiences.

### [Spacing Scale](spacing-scale)
Systematic spacing values for margins, padding, and component spacing.

### [Width](width)
Fixed width constraints for components and layout elements.

### [Height](height)
Fixed height values for consistent component sizing.

### [Z-Index](z-index)
Layering hierarchy for modals, tooltips, and overlay components.

### [Opacity](opacity)
Transparency values for various UI states and disabled elements.

### [Duration](duration)
Time values for animations, transitions, and micro-interactions.

### [Motion & Easing](motion-easing)
Animation timing functions and easing curves for smooth transitions.

## Implementation

### Installation

```bash
npm install @tanqory/mies-tokens
```

### CSS Custom Properties

```css
@import '@tanqory/mies-tokens/css/variables.css';

.component {
  color: var(--mies-color-brand);
  padding: var(--mies-spacing-base);
  font-size: var(--mies-font-size-base);
}
```

### JavaScript/TypeScript

```js
import { tokens } from '@tanqory/mies-tokens';

const styles = {
  color: tokens.color.brand,
  padding: tokens.spacing.base,
  fontSize: tokens.fontSize.base,
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  container: {
    backgroundColor: tokens.color.brand,
    padding: tokens.spacing.base,
  },
});
```

## Philosophy

> "Architecture is the will of an epoch translated into space."  
> — Ludwig Mies van der Rohe

Design tokens translate our epoch's need for systematic, accessible, and performance-focused interfaces into code. They enforce the "less is more" philosophy by providing exactly what's needed—nothing more, nothing less.

## Benefits

- **Consistency**: Same visual language across all touchpoints
- **Maintainability**: Update once, change everywhere
- **Performance**: Optimized values reduce bundle size
- **Accessibility**: Built-in contrast ratios and readable typography
- **Developer Experience**: Type-safe tokens with IntelliSense support
- **Design System Alignment**: Code matches design specifications exactly