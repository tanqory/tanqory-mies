# Text Styles

Pre-configured typography combinations eliminate design decisions and ensure consistent text hierarchy across all platforms. Text styles combine font size, weight, line height, and spacing into semantic tokens.

## Purpose

Text styles provide ready-made typography for common interface patterns. They reduce cognitive load for designers and developers while ensuring accessibility, readability, and visual consistency across all content types.

## Usage Guidelines

- Use heading styles (h1-h3) to establish clear content hierarchy and improve scanability
- Apply body styles for all readable content to maintain optimal line length and spacing
- Implement caption styles for secondary information like metadata and helper text
- Reserve code styles exclusively for technical content and inline code snippets

## Token Examples

### Heading Styles

```css
:root {
  --mies-text-h1-font-size: var(--mies-font-size-2xl);
  --mies-text-h1-font-weight: var(--mies-font-weight-bold);
  --mies-text-h1-line-height: var(--mies-line-height-tight);
  --mies-text-h1-letter-spacing: var(--mies-letter-spacing-tight);

  --mies-text-h2-font-size: var(--mies-font-size-xl);
  --mies-text-h2-font-weight: var(--mies-font-weight-semibold);
  --mies-text-h2-line-height: var(--mies-line-height-tight);
  --mies-text-h2-letter-spacing: var(--mies-letter-spacing-normal);

  --mies-text-h3-font-size: var(--mies-font-size-lg);
  --mies-text-h3-font-weight: var(--mies-font-weight-semibold);
  --mies-text-h3-line-height: var(--mies-line-height-normal);
  --mies-text-h3-letter-spacing: var(--mies-letter-spacing-normal);
}
```

### Body Styles

```css
:root {
  --mies-text-body-font-size: var(--mies-font-size-base);
  --mies-text-body-font-weight: var(--mies-font-weight-normal);
  --mies-text-body-line-height: var(--mies-line-height-normal);
  --mies-text-body-letter-spacing: var(--mies-letter-spacing-normal);

  --mies-text-body-large-font-size: var(--mies-font-size-lg);
  --mies-text-body-large-font-weight: var(--mies-font-weight-normal);
  --mies-text-body-large-line-height: var(--mies-line-height-normal);
  --mies-text-body-large-letter-spacing: var(--mies-letter-spacing-normal);
}
```

### UI Text Styles

```css
:root {
  --mies-text-button-font-size: var(--mies-font-size-base);
  --mies-text-button-font-weight: var(--mies-font-weight-semibold);
  --mies-text-button-line-height: var(--mies-line-height-tight);
  --mies-text-button-letter-spacing: var(--mies-letter-spacing-wide);

  --mies-text-caption-font-size: var(--mies-font-size-sm);
  --mies-text-caption-font-weight: var(--mies-font-weight-normal);
  --mies-text-caption-line-height: var(--mies-line-height-normal);
  --mies-text-caption-letter-spacing: var(--mies-letter-spacing-normal);

  --mies-text-label-font-size: var(--mies-font-size-sm);
  --mies-text-label-font-weight: var(--mies-font-weight-medium);
  --mies-text-label-line-height: var(--mies-line-height-normal);
  --mies-text-label-letter-spacing: var(--mies-letter-spacing-normal);
}
```

### Code Styles

```css
:root {
  --mies-text-code-font-family: var(--mies-font-family-mono);
  --mies-text-code-font-size: var(--mies-font-size-sm);
  --mies-text-code-font-weight: var(--mies-font-weight-normal);
  --mies-text-code-line-height: var(--mies-line-height-normal);

  --mies-text-code-block-font-family: var(--mies-font-family-mono);
  --mies-text-code-block-font-size: var(--mies-font-size-sm);
  --mies-text-code-block-font-weight: var(--mies-font-weight-normal);
  --mies-text-code-block-line-height: var(--mies-line-height-relaxed);
}
```

## Implementation

### CSS Custom Properties

```css
.text-h1 {
  font-size: var(--mies-text-h1-font-size);
  font-weight: var(--mies-text-h1-font-weight);
  line-height: var(--mies-text-h1-line-height);
  letter-spacing: var(--mies-text-h1-letter-spacing);
}

.text-body {
  font-size: var(--mies-text-body-font-size);
  font-weight: var(--mies-text-body-font-weight);
  line-height: var(--mies-text-body-line-height);
  letter-spacing: var(--mies-text-body-letter-spacing);
}

.text-button {
  font-size: var(--mies-text-button-font-size);
  font-weight: var(--mies-text-button-font-weight);
  line-height: var(--mies-text-button-line-height);
  letter-spacing: var(--mies-text-button-letter-spacing);
}

.text-caption {
  font-size: var(--mies-text-caption-font-size);
  font-weight: var(--mies-text-caption-font-weight);
  line-height: var(--mies-text-caption-line-height);
  letter-spacing: var(--mies-text-caption-letter-spacing);
}
```

### JavaScript/TypeScript

```js
import { textStyles } from '@tanqory/mies-tokens';

const styles = {
  heading1: {
    fontSize: textStyles.h1.fontSize,
    fontWeight: textStyles.h1.fontWeight,
    lineHeight: textStyles.h1.lineHeight,
    letterSpacing: textStyles.h1.letterSpacing,
  },
  body: {
    fontSize: textStyles.body.fontSize,
    fontWeight: textStyles.body.fontWeight,
    lineHeight: textStyles.body.lineHeight,
    letterSpacing: textStyles.body.letterSpacing,
  },
  button: {
    fontSize: textStyles.button.fontSize,
    fontWeight: textStyles.button.fontWeight,
    lineHeight: textStyles.button.lineHeight,
    letterSpacing: textStyles.button.letterSpacing,
  },
};
```

### React Native

```js
import tokens from '@tanqory/mies-tokens/native.json';

const styles = StyleSheet.create({
  heading1: {
    fontSize: tokens.textStyles.h1.fontSize,
    fontWeight: tokens.textStyles.h1.fontWeight,
    lineHeight: tokens.textStyles.h1.fontSize * tokens.textStyles.h1.lineHeight,
    letterSpacing: tokens.textStyles.h1.letterSpacing,
  },
  body: {
    fontSize: tokens.textStyles.body.fontSize,
    fontWeight: tokens.textStyles.body.fontWeight,
    lineHeight: tokens.textStyles.body.fontSize * tokens.textStyles.body.lineHeight,
    letterSpacing: tokens.textStyles.body.letterSpacing,
  },
  caption: {
    fontSize: tokens.textStyles.caption.fontSize,
    fontWeight: tokens.textStyles.caption.fontWeight,
    lineHeight: tokens.textStyles.caption.fontSize * tokens.textStyles.caption.lineHeight,
    letterSpacing: tokens.textStyles.caption.letterSpacing,
  },
});
```

## Cross-Platform Considerations

### Accessibility Compliance

All text styles meet accessibility requirements:
- **Minimum font sizes**: No text smaller than 14px
- **Adequate line height**: 1.5 minimum for body text
- **Sufficient contrast**: All combinations tested for WCAG compliance
- **Scalability**: Styles adapt to user zoom preferences

### Responsive Scaling

Text styles adapt to different screen sizes:

```css
@media (max-width: 768px) {
  :root {
    --mies-text-h1-font-size: var(--mies-font-size-xl);
    --mies-text-h2-font-size: var(--mies-font-size-lg);
    --mies-text-h3-font-size: var(--mies-font-size-base);
  }
}
```

### Performance Optimization

Text styles optimize for performance:
- **System fonts only**: Zero loading time
- **Minimal font weights**: Reduced bundle size
- **Semantic naming**: Better compression
- **Consistent line height**: Improved layout stability

## Design Philosophy

> "The details are not details. They make the design." — Charles Eames

Text styles handle the details of typography so designers and developers can focus on content and functionality. Every combination is tested for readability, accessibility, and aesthetic harmony across all platforms and contexts.