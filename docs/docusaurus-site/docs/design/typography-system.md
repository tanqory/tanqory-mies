# Typography System

Tanqory Mies establishes a comprehensive typography system that ensures readability, hierarchy, and brand consistency across all platforms.

## Typography Philosophy

### Readable by Design
- **Clarity first**: Optimal readability in all contexts
- **Hierarchical structure**: Clear information organization
- **Performance optimized**: Fast-loading, efficient fonts
- **Accessible typography**: Works with assistive technologies

### Design Principles
- **Functional beauty**: Typography serves content
- **Consistent rhythm**: Harmonious line heights and spacing
- **Scalable system**: Works at any size or screen
- **Cultural adaptability**: Supports global character sets

## Font Family

### Primary Typeface
```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', Consolas, 'Liberation Mono', 
    Menlo, Courier, monospace;
}
```

### Font Loading Strategy
```css
/* Font face declarations */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./fonts/inter-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('./fonts/inter-medium.woff2') format('woff2');
}
```

## Type Scale

### Font Size System
```css
:root {
  /* Type scale */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  --text-7xl: 4.5rem;    /* 72px */
}
```

### Line Height Scale
```css
:root {
  /* Line heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

## Typography Hierarchy

### Heading Styles
```css
h1, .text-display {
  font-size: var(--text-5xl);
  font-weight: 700;
  line-height: var(--leading-tight);
  letter-spacing: -0.025em;
}

h2, .text-title {
  font-size: var(--text-3xl);
  font-weight: 600;
  line-height: var(--leading-tight);
  letter-spacing: -0.015em;
}

h3, .text-heading {
  font-size: var(--text-xl);
  font-weight: 600;
  line-height: var(--leading-snug);
}

h4, .text-subheading {
  font-size: var(--text-lg);
  font-weight: 500;
  line-height: var(--leading-snug);
}
```

### Body Text Styles
```css
.text-body {
  font-size: var(--text-base);
  font-weight: 400;
  line-height: var(--leading-normal);
}

.text-body-large {
  font-size: var(--text-lg);
  font-weight: 400;
  line-height: var(--leading-relaxed);
}

.text-body-small {
  font-size: var(--text-sm);
  font-weight: 400;
  line-height: var(--leading-normal);
}
```

### Utility Text Styles
```css
.text-caption {
  font-size: var(--text-xs);
  font-weight: 400;
  line-height: var(--leading-normal);
  color: var(--text-secondary);
}

.text-overline {
  font-size: var(--text-xs);
  font-weight: 600;
  line-height: var(--leading-none);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.text-code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}
```

## Responsive Typography

### Fluid Type Scale
```css
/* Responsive headings */
h1 {
  font-size: clamp(2.25rem, 4vw, 4.5rem);
}

h2 {
  font-size: clamp(1.875rem, 3vw, 3rem);
}

h3 {
  font-size: clamp(1.5rem, 2.5vw, 2.25rem);
}

/* Responsive body text */
.text-body {
  font-size: clamp(0.875rem, 2vw, 1rem);
}
```

### Breakpoint Adjustments
```css
/* Mobile typography adjustments */
@media (max-width: 640px) {
  h1, .text-display {
    font-size: var(--text-4xl);
    line-height: var(--leading-tight);
  }
  
  .text-body {
    font-size: var(--text-sm);
    line-height: var(--leading-relaxed);
  }
}
```

## Text Color System

### Color Hierarchy
```css
:root {
  /* Text colors */
  --text-primary: var(--neutral-900);
  --text-secondary: var(--neutral-600);
  --text-tertiary: var(--neutral-500);
  --text-disabled: var(--neutral-400);
  --text-inverse: var(--neutral-50);
}

/* Dark mode adjustments */
[data-theme="dark"] {
  --text-primary: var(--neutral-100);
  --text-secondary: var(--neutral-400);
  --text-tertiary: var(--neutral-500);
  --text-disabled: var(--neutral-600);
  --text-inverse: var(--neutral-900);
}
```

### Semantic Text Colors
```css
.text-success { color: var(--success-700); }
.text-warning { color: var(--warning-700); }
.text-error { color: var(--error-700); }
.text-info { color: var(--info-700); }
.text-link { color: var(--brand-accent); }
```

## Typography Components

### React Typography Components
```typescript
interface TypographyProps {
  variant: 'display' | 'title' | 'heading' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'tertiary';
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  color = 'primary',
  as = 'p',
  children,
  ...props
}) => {
  const Component = as;
  
  return (
    <Component 
      className={`text-${variant} text-${color}`}
      {...props}
    >
      {children}
    </Component>
  );
};
```

### Usage Examples
```typescript
// Display text
<Typography variant="display" as="h1">
  Welcome to Tanqory Mies
</Typography>

// Body text
<Typography variant="body" color="secondary">
  This is secondary body text with proper hierarchy.
</Typography>

// Caption text
<Typography variant="caption" as="span">
  Last updated 2 hours ago
</Typography>
```

## International Typography

### Multi-Language Support
```css
/* Font stacks for different languages */
.font-latin {
  font-family: 'Inter', sans-serif;
}

.font-thai {
  font-family: 'Inter', 'Noto Sans Thai', sans-serif;
}

.font-chinese {
  font-family: 'Inter', 'Noto Sans SC', sans-serif;
}

.font-japanese {
  font-family: 'Inter', 'Noto Sans JP', sans-serif;
}

.font-arabic {
  font-family: 'Inter', 'Noto Sans Arabic', sans-serif;
  direction: rtl;
}
```

### Line Height Adjustments
```css
/* Increased line height for complex scripts */
.text-complex-script {
  line-height: var(--leading-loose);
}

/* Adjust for languages with diacritics */
.text-diacritics {
  line-height: var(--leading-relaxed);
}
```

## Accessibility Features

### High Contrast Support
```css
@media (prefers-contrast: high) {
  :root {
    --text-primary: #000000;
    --text-secondary: #000000;
    --text-link: #0000FF;
  }
}
```

### Focus Indicators
```css
.focusable-text:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  background: var(--color-focus-bg);
}
```

### Screen Reader Considerations
```typescript
// Screen reader friendly text
<Typography 
  variant="caption" 
  aria-label="Published on March 15, 2024"
>
  March 15
</Typography>

// Hidden text for screen readers
<span className="sr-only">
  This button will delete the item permanently
</span>
```

## Code Typography

### Code Block Styling
```css
.code-block {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  background: var(--neutral-100);
  border-radius: 6px;
  padding: var(--spacing-4);
  overflow-x: auto;
}

.code-inline {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--neutral-100);
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
}
```

### Syntax Highlighting
```css
.token.comment { color: var(--neutral-500); }
.token.keyword { color: var(--info-600); }
.token.string { color: var(--success-600); }
.token.number { color: var(--warning-600); }
.token.function { color: var(--error-600); }
```

## Performance Optimization

### Font Loading
```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/inter-medium.woff2" as="font" type="font/woff2" crossorigin>
```

### Variable Fonts
```css
/* Use variable fonts for better performance */
@font-face {
  font-family: 'Inter Variable';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('./fonts/inter-variable.woff2') format('woff2');
}
```

## React Native Typography

### Text Styles
```typescript
import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
  display: {
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 56,
    letterSpacing: -1,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    lineHeight: 36,
    letterSpacing: -0.5,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#666666',
  },
});
```

### Dynamic Type Support
```typescript
import { useAccessibilityInfo } from 'react-native';

const DynamicText = ({ style, children, ...props }) => {
  const { isScreenReaderEnabled } = useAccessibilityInfo();
  
  const adjustedStyle = {
    ...style,
    fontSize: isScreenReaderEnabled ? style.fontSize * 1.2 : style.fontSize,
  };
  
  return (
    <Text style={adjustedStyle} {...props}>
      {children}
    </Text>
  );
};
```

## Quality Assurance

### Typography Checklist
- [ ] Sufficient contrast ratios (4.5:1 for normal text)
- [ ] Proper heading hierarchy maintained
- [ ] Text remains readable at 200% zoom
- [ ] Font loading performance optimized
- [ ] Multi-language support tested
- [ ] Accessibility features verified

### Testing Guidelines
1. **Readability testing**: Various lighting conditions
2. **Accessibility audit**: Screen reader compatibility
3. **Performance testing**: Font loading metrics
4. **Cross-platform testing**: Consistent appearance
5. **Responsive testing**: All breakpoints and orientations

Our typography system creates clear, accessible, and beautiful text experiences that scale across all platforms while maintaining brand consistency and optimal readability.