# Spacing Scale

Systematic spacing creates visual rhythm and consistent layouts. The Tanqory Mies spacing scale follows a precise mathematical progression: 4, 8, 12, 16, 24, 32 pixels—nothing else.

## Purpose

Consistent spacing reduces cognitive load, improves scanability, and creates professional layouts that build user trust. Mathematical progression ensures harmonious relationships between all interface elements.

## Usage Guidelines

- Use base spacing (16px) for most component padding and standard element separation
- Apply small spacing (8px) for tight groupings like form labels and inputs
- Implement large spacing (24px) for section separation and content organization
- Reserve extra-large spacing (32px) for major layout divisions and page-level structure

## Token Examples

### Core Spacing Scale

```css
:root {
  --mies-spacing-xs: 4px;
  --mies-spacing-sm: 8px;
  --mies-spacing-md: 12px;
  --mies-spacing-base: 16px;
  --mies-spacing-lg: 24px;
  --mies-spacing-xl: 32px;
}
```

### Component Spacing

```css
:root {
  --mies-spacing-component-padding: var(--mies-spacing-base);
  --mies-spacing-component-margin: var(--mies-spacing-lg);
  --mies-spacing-component-gap: var(--mies-spacing-sm);
}
```

### Layout Spacing

```css
:root {
  --mies-spacing-section: var(--mies-spacing-xl);
  --mies-spacing-content: var(--mies-spacing-lg);
  --mies-spacing-element: var(--mies-spacing-base);
  --mies-spacing-inline: var(--mies-spacing-sm);
}
```

### Grid and Layout

```css
:root {
  --mies-spacing-grid-gutter: var(--mies-spacing-base);
  --mies-spacing-grid-margin: var(--mies-spacing-lg);
  --mies-spacing-container-padding: var(--mies-spacing-base);
}
```

## Implementation

### CSS Custom Properties

```css
.card {
  padding: var(--mies-spacing-base);
  margin-bottom: var(--mies-spacing-lg);
  gap: var(--mies-spacing-sm);
}

.section {
  margin-bottom: var(--mies-spacing-xl);
  padding: var(--mies-spacing-lg) var(--mies-spacing-base);
}

.form-group {
  margin-bottom: var(--mies-spacing-base);
}

.form-group label {
  margin-bottom: var(--mies-spacing-xs);
}
```

### JavaScript/TypeScript

```js
import { spacing } from '@tanqory/mies-tokens';

const componentStyles = {
  padding: spacing.base,
  marginBottom: spacing.lg,
  gap: spacing.sm,
};

// Layout utilities
const layoutStyles = {
  section: {
    marginBottom: spacing.xl,
    padding: `${spacing.lg} ${spacing.base}`,
  },
  container: {
    padding: `0 ${spacing.base}`,
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.base,
    marginBottom: tokens.spacing.lg,
  },
  section: {
    marginBottom: tokens.spacing.xl,
    paddingHorizontal: tokens.spacing.base,
    paddingVertical: tokens.spacing.lg,
  },
  formGroup: {
    marginBottom: tokens.spacing.base,
    gap: tokens.spacing.xs,
  },
});
```

## Cross-Platform Considerations

### Responsive Scaling

Spacing scales proportionally across breakpoints:

```css
:root {
  --mies-spacing-responsive-base: clamp(12px, 4vw, 16px);
  --mies-spacing-responsive-lg: clamp(18px, 6vw, 24px);
  --mies-spacing-responsive-xl: clamp(24px, 8vw, 32px);
}
```

### Touch Target Spacing

Mobile-optimized spacing for interactive elements:

```css
:root {
  --mies-spacing-touch-target: 44px;
  --mies-spacing-touch-margin: var(--mies-spacing-sm);
}
```

### Density Variations

Spacing adapts to different density needs:

```css
/* Compact density */
:root {
  --mies-spacing-compact-xs: 2px;
  --mies-spacing-compact-sm: 4px;
  --mies-spacing-compact-base: 8px;
}

/* Comfortable density */
:root {
  --mies-spacing-comfortable-base: 20px;
  --mies-spacing-comfortable-lg: 28px;
}
```

## Mathematical Relationships

The spacing scale follows intentional mathematical relationships:

- **Base unit**: 4px (minimum spacing quantum)
- **Primary scale**: 4px × (1, 2, 3, 4, 6, 8)
- **Harmonic ratios**: Each step relates to others through multiplication
- **Grid alignment**: All values align to 4px baseline grid

## Design Philosophy

> "Less is more" — Ludwig Mies van der Rohe

Six spacing values serve all layout needs. More options create inconsistency and decision paralysis. Constraints enable better, faster design decisions that scale across any interface complexity.