# Palette & Contrast

Tanqory Mies uses a carefully crafted color system that ensures accessibility, brand consistency, and visual clarity across all platforms.

## Color Strategy

### Systematic Approach
- **Purpose-driven**: Each color serves a specific function
- **Accessibility first**: WCAG 2.1 AA compliance minimum
- **Cross-platform**: Consistent appearance on web and mobile
- **Cultural awareness**: Colors work globally

### Color Categories
- **Brand colors**: Primary identity colors
- **Neutral scale**: Grays for typography and backgrounds
- **Semantic colors**: Success, warning, error, info states
- **Interactive colors**: Link and button colors

## Brand Color Palette

### Primary Brand Colors
```css
--brand-primary: #1a1a1a;    /* Deep charcoal */
--brand-secondary: #f5f5f5;  /* Light gray */
--brand-accent: #0066cc;     /* Professional blue */
```

### Brand Color Usage
- **Primary**: Headlines, key interface elements
- **Secondary**: Backgrounds, subtle accents
- **Accent**: Call-to-action buttons, links, highlights

## Neutral Color System

### Gray Scale
```css
--neutral-50: #fafafa;   /* Lightest gray */
--neutral-100: #f5f5f5;  /* Very light gray */
--neutral-200: #e5e5e5;  /* Light gray */
--neutral-300: #d4d4d4;  /* Medium-light gray */
--neutral-400: #a3a3a3;  /* Medium gray */
--neutral-500: #737373;  /* True gray */
--neutral-600: #525252;  /* Medium-dark gray */
--neutral-700: #404040;  /* Dark gray */
--neutral-800: #262626;  /* Very dark gray */
--neutral-900: #171717;  /* Darkest gray */
```

### Neutral Applications
- **50-200**: Backgrounds, subtle borders
- **300-500**: Placeholder text, disabled states
- **600-900**: Body text, headings, icons

## Semantic Color System

### Status Colors
```css
/* Success */
--success-50: #f0fdf4;
--success-500: #22c55e;
--success-700: #15803d;

/* Warning */
--warning-50: #fffbeb;
--warning-500: #f59e0b;
--warning-700: #b45309;

/* Error */
--error-50: #fef2f2;
--error-500: #ef4444;
--error-700: #b91c1c;

/* Info */
--info-50: #eff6ff;
--info-500: #3b82f6;
--info-700: #1d4ed8;
```

### Semantic Usage
- **Light tints (50)**: Background fills, subtle highlights
- **Medium shades (500)**: Primary color for icons, borders
- **Dark shades (700)**: Text, strong emphasis

## Contrast Standards

### WCAG Compliance
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **UI elements**: Minimum 3:1 for interactive components
- **Focus indicators**: Minimum 3:1 against adjacent colors

### Contrast Testing
```css
/* Example: Ensuring proper contrast */
.text-primary {
  color: var(--neutral-900); /* 21:1 on white */
  background: var(--neutral-50);
}

.text-secondary {
  color: var(--neutral-600); /* 7.2:1 on white */
  background: var(--neutral-50);
}
```

## Dark Mode Palette

### Dark Theme Colors
```css
[data-theme="dark"] {
  --background: var(--neutral-900);
  --foreground: var(--neutral-100);
  --muted: var(--neutral-800);
  --muted-foreground: var(--neutral-400);
  --border: var(--neutral-700);
}
```

### Dark Mode Strategy
- **Inverted contrast**: Maintain accessibility ratios
- **Reduced brightness**: Easier on eyes in low light
- **Preserved semantics**: Status colors remain meaningful
- **Brand consistency**: Identity colors adapt appropriately

## Implementation Guidelines

### CSS Custom Properties
```css
:root {
  /* Light mode colors */
  --text-primary: var(--neutral-900);
  --text-secondary: var(--neutral-600);
  --background: var(--neutral-50);
  --surface: var(--neutral-100);
}

[data-theme="dark"] {
  /* Dark mode overrides */
  --text-primary: var(--neutral-100);
  --text-secondary: var(--neutral-400);
  --background: var(--neutral-900);
  --surface: var(--neutral-800);
}
```

### React Native Implementation
```javascript
const colors = {
  light: {
    text: '#171717',
    background: '#fafafa',
    surface: '#ffffff',
    border: '#e5e5e5',
  },
  dark: {
    text: '#fafafa',
    background: '#171717',
    surface: '#262626',
    border: '#404040',
  },
};
```

## Color Accessibility

### Testing Tools
- **Contrast analyzers**: WebAIM, Stark, Colour Contrast Analyser
- **Automated testing**: axe-core, Pa11y
- **Screen readers**: Test with actual assistive technology
- **Color blindness**: Verify with colorblind simulators

### Best Practices
- **Don't rely on color alone**: Use icons, text, patterns
- **Test in context**: Colors may appear different in layouts
- **Consider lighting**: Test in various ambient conditions
- **User preferences**: Respect system accessibility settings

## Platform Considerations

### Web Implementation
- **CSS custom properties**: Easy theme switching
- **Prefers-color-scheme**: Respect user preferences
- **High contrast mode**: Support system accessibility features
- **Print styles**: Ensure contrast in printed materials

### Mobile Implementation
- **Platform conventions**: iOS and Android color guidelines
- **Dynamic type**: Colors work with larger text sizes
- **Reduced motion**: Color animations respect accessibility
- **Voice control**: Colors support voice navigation

## Quality Assurance

### Review Process
1. **Design review**: Colors meet brand and accessibility standards
2. **Technical review**: Implementation matches design specs
3. **Accessibility audit**: Automated and manual testing
4. **User testing**: Validation with diverse users

### Maintenance
- **Regular audits**: Periodic accessibility compliance checks
- **Token updates**: Systematic color system improvements
- **Documentation**: Keep usage guidelines current
- **Training**: Ensure team understands color standards

Our color and contrast system creates beautiful, accessible experiences that work for everyone, everywhere.