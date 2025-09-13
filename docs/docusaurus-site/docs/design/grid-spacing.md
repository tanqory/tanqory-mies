# Spacing

Tanqory Mies uses systematic grids and consistent spacing to create harmonious, predictable layouts across all screen sizes.

## Grid Philosophy

### Structure & Flexibility
- **Systematic approach**: Consistent grid patterns across platforms
- **Responsive design**: Adapts elegantly to any screen size
- **Content-first**: Grid serves content, not the other way around
- **Performance conscious**: Efficient CSS Grid and Flexbox usage

### Design Principles
- **Rhythm & flow**: Consistent spacing creates visual harmony
- **Hierarchy**: Spacing reinforces content importance
- **Breathing room**: White space improves readability
- **Alignment**: Everything aligns to the grid system

## Grid System

### Base Grid Specifications
```css
/* Grid container */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-4);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

/* Responsive grid */
@media (min-width: 768px) {
  .grid {
    gap: var(--spacing-6);
    padding: 0 var(--spacing-6);
  }
}

@media (min-width: 1024px) {
  .grid {
    gap: var(--spacing-8);
    padding: 0 var(--spacing-8);
  }
}
```

### Grid Breakpoints
```css
:root {
  /* Breakpoint system */
  --breakpoint-sm: 640px;   /* Small tablets */
  --breakpoint-md: 768px;   /* Large tablets */
  --breakpoint-lg: 1024px;  /* Laptops */
  --breakpoint-xl: 1280px;  /* Desktops */
  --breakpoint-2xl: 1536px; /* Large screens */
}
```

### Column System
```css
/* Column utilities */
.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-4 { grid-column: span 4; }
.col-6 { grid-column: span 6; }
.col-8 { grid-column: span 8; }
.col-12 { grid-column: span 12; }

/* Responsive columns */
@media (min-width: 768px) {
  .md\:col-6 { grid-column: span 6; }
  .md\:col-4 { grid-column: span 4; }
  .md\:col-3 { grid-column: span 3; }
}
```

## Spacing System

### Spacing Scale
```css
:root {
  /* Base spacing unit: 4px */
  --spacing-0: 0;
  --spacing-px: 1px;
  --spacing-0\.5: 2px;
  --spacing-1: 4px;
  --spacing-1\.5: 6px;
  --spacing-2: 8px;
  --spacing-2\.5: 10px;
  --spacing-3: 12px;
  --spacing-3\.5: 14px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-7: 28px;
  --spacing-8: 32px;
  --spacing-9: 36px;
  --spacing-10: 40px;
  --spacing-11: 44px;
  --spacing-12: 48px;
  --spacing-14: 56px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
  --spacing-28: 112px;
  --spacing-32: 128px;
}
```

### Spacing Usage Guidelines
- **0-4px**: Fine-tuning, borders, icon spacing
- **8-16px**: Component internal spacing
- **20-32px**: Component external spacing
- **48-96px**: Section spacing
- **112px+**: Page-level spacing

## Layout Patterns

### Common Grid Layouts
```css
/* Single column */
.layout-single {
  grid-template-columns: 1fr;
  max-width: 65ch; /* Optimal reading width */
}

/* Two column */
.layout-two-col {
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-8);
}

/* Sidebar layout */
.layout-sidebar {
  grid-template-columns: 250px 1fr;
  gap: var(--spacing-6);
}

/* Three column */
.layout-three-col {
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
}
```

### Responsive Layout
```css
/* Mobile-first responsive grid */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
}

@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-6);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-8);
  }
}
```

## Component Spacing

### Internal Component Spacing
```css
/* Card component */
.card {
  padding: var(--spacing-6);
  gap: var(--spacing-4);
}

/* Button component */
.button {
  padding: var(--spacing-2) var(--spacing-4);
  gap: var(--spacing-2);
}

/* Input component */
.input {
  padding: var(--spacing-3) var(--spacing-4);
}
```

### Stack Spacing
```css
/* Vertical stack */
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.stack-sm { gap: var(--spacing-2); }
.stack-md { gap: var(--spacing-4); }
.stack-lg { gap: var(--spacing-6); }
.stack-xl { gap: var(--spacing-8); }
```

### Inline Spacing
```css
/* Horizontal spacing */
.inline {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.inline-sm { gap: var(--spacing-1); }
.inline-md { gap: var(--spacing-2); }
.inline-lg { gap: var(--spacing-3); }
```

## Typography & Spacing

### Text Block Spacing
```css
/* Paragraph spacing */
p {
  margin-bottom: var(--spacing-4);
}

/* Heading spacing */
h1, h2, h3, h4, h5, h6 {
  margin-bottom: var(--spacing-2);
  margin-top: var(--spacing-6);
}

h1:first-child,
h2:first-child,
h3:first-child {
  margin-top: 0;
}

/* List spacing */
ul, ol {
  margin-bottom: var(--spacing-4);
  padding-left: var(--spacing-6);
}

li {
  margin-bottom: var(--spacing-1);
}
```

### Reading Width
```css
/* Optimal reading width */
.prose {
  max-width: 65ch; /* ~65 characters */
  line-height: 1.6;
}

.prose-narrow {
  max-width: 45ch;
}

.prose-wide {
  max-width: 80ch;
}
```

## Mobile Considerations

### Touch-Friendly Spacing
```css
/* Minimum touch target: 44px */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  padding: var(--spacing-2);
}

/* Mobile button spacing */
@media (max-width: 640px) {
  .button {
    padding: var(--spacing-3) var(--spacing-6);
    min-height: 44px;
  }
}
```

### Mobile Grid Adaptations
```css
/* Mobile-first grid */
.mobile-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
}

/* Increase spacing on larger screens */
@media (min-width: 768px) {
  .mobile-grid {
    gap: var(--spacing-6);
    padding: var(--spacing-6);
  }
}
```

## Accessibility Considerations

### Focus Spacing
```css
/* Adequate focus indicator spacing */
.focusable:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: var(--spacing-1);
}
```

### Screen Reader Spacing
- **Logical spacing**: Use semantic HTML structure
- **Skip links**: Provide navigation shortcuts
- **Landmark regions**: Clear content areas
- **Heading hierarchy**: Proper heading order

## Performance Optimization

### Efficient CSS
```css
/* Use CSS Grid for complex layouts */
.efficient-grid {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  gap: var(--spacing-6);
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### Avoid Layout Shifts
```css
/* Prevent cumulative layout shift */
.container {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

## Implementation Tools

### CSS Utilities
```css
/* Margin utilities */
.m-0 { margin: 0; }
.m-1 { margin: var(--spacing-1); }
.m-2 { margin: var(--spacing-2); }
.mt-4 { margin-top: var(--spacing-4); }
.mb-6 { margin-bottom: var(--spacing-6); }

/* Padding utilities */
.p-0 { padding: 0; }
.p-4 { padding: var(--spacing-4); }
.px-6 { padding-left: var(--spacing-6); padding-right: var(--spacing-6); }
.py-8 { padding-top: var(--spacing-8); padding-bottom: var(--spacing-8); }
```

### React Components
```typescript
// Spacing component
interface SpacingProps {
  size: 'sm' | 'md' | 'lg' | 'xl';
  direction?: 'vertical' | 'horizontal';
}

const Spacing: React.FC<SpacingProps> = ({ size, direction = 'vertical' }) => {
  const sizeMap = {
    sm: 'var(--spacing-2)',
    md: 'var(--spacing-4)',
    lg: 'var(--spacing-6)',
    xl: 'var(--spacing-8)',
  };

  const style = {
    [direction === 'vertical' ? 'height' : 'width']: sizeMap[size],
  };

  return <div style={style} aria-hidden="true" />;
};
```

## Quality Assurance

### Design Review Checklist
- [ ] Consistent spacing throughout design
- [ ] Grid alignment maintained
- [ ] Responsive behavior tested
- [ ] Accessibility standards met
- [ ] Performance impact assessed
- [ ] Cross-browser compatibility verified

### Testing Guidelines
1. **Visual regression**: Automated screenshot testing
2. **Responsive testing**: Multiple device sizes
3. **Accessibility audit**: Screen reader and keyboard testing
4. **Performance testing**: Layout shift and rendering performance

Systematic grid and spacing create predictable, harmonious layouts that scale beautifully across all devices and enhance the overall user experience.