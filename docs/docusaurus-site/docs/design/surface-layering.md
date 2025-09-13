# Layout

Tanqory Mies creates depth and hierarchy through subtle elevation, strategic layering, and thoughtful surface treatments.

## Layering Philosophy

### Depth with Purpose
- **Functional elevation**: Layers serve clear interaction purposes
- **Minimal shadows**: Subtle depth without visual clutter
- **Content hierarchy**: Important content appears closer
- **Performance conscious**: Efficient rendering of layers

### Surface Principles
- **Clean backgrounds**: Uncluttered canvas for content
- **Purposeful contrast**: Surfaces differentiate content types
- **Consistent materials**: Unified surface language
- **Accessible contrast**: Sufficient differentiation for all users

## Elevation System

### Elevation Levels
```css
/* Surface elevation tokens */
--elevation-0: 0px;           /* Base surface */
--elevation-1: 0 1px 3px;     /* Raised elements */
--elevation-2: 0 2px 6px;     /* Cards, panels */
--elevation-3: 0 4px 12px;    /* Modals, dropdowns */
--elevation-4: 0 8px 24px;    /* Floating elements */
--elevation-5: 0 16px 48px;   /* Overlays, tooltips */
```

### Shadow Values
```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
```

## Surface Types

### Background Surfaces
- **Page background**: The foundational canvas
- **Section backgrounds**: Content area separation
- **Card backgrounds**: Grouped content containers
- **Modal backgrounds**: Overlay content areas

### Interactive Surfaces
- **Button surfaces**: Clickable elements
- **Input surfaces**: Form field backgrounds
- **Navigation surfaces**: Menu and tab backgrounds
- **Hover surfaces**: Interactive state changes

## Material Design

### Surface Colors
```css
/* Light theme surfaces */
--surface-primary: #ffffff;     /* Cards, panels */
--surface-secondary: #f9fafb;   /* Subtle backgrounds */
--surface-tertiary: #f3f4f6;    /* Input fields */
--surface-inverse: #111827;     /* Dark surfaces */

/* Dark theme surfaces */
[data-theme="dark"] {
  --surface-primary: #1f2937;
  --surface-secondary: #374151;
  --surface-tertiary: #4b5563;
  --surface-inverse: #f9fafb;
}
```

### Surface States
- **Resting**: Default appearance
- **Hover**: Subtle elevation increase
- **Active**: Pressed or selected state
- **Disabled**: Reduced opacity and elevation

## Layout Layers

### Z-Index Scale
```css
:root {
  --z-base: 0;          /* Normal document flow */
  --z-raised: 10;       /* Raised elements */
  --z-floating: 100;    /* Floating panels */
  --z-modal: 1000;      /* Modal dialogs */
  --z-popover: 1100;    /* Popovers, tooltips */
  --z-toast: 1200;      /* Notifications */
  --z-overlay: 1300;    /* Full-screen overlays */
}
```

### Layer Hierarchy
1. **Base layer**: Page content, text, images
2. **Raised layer**: Cards, panels, buttons
3. **Floating layer**: Dropdowns, menus
4. **Modal layer**: Dialogs, sheets
5. **Overlay layer**: Loading states, alerts

## Responsive Layering

### Mobile Adaptations
- **Reduced shadows**: Lighter shadows for smaller screens
- **Simplified layers**: Fewer elevation levels
- **Touch-friendly**: Larger surfaces for finger interaction
- **Performance**: Optimized for mobile rendering

### Breakpoint Considerations
```css
/* Responsive elevation */
.card {
  box-shadow: var(--shadow-sm);
}

@media (min-width: 768px) {
  .card {
    box-shadow: var(--shadow-md);
  }
}

@media (min-width: 1024px) {
  .card {
    box-shadow: var(--shadow-lg);
  }
}
```

## Component Applications

### Cards & Panels
```css
.card {
  background: var(--surface-primary);
  border-radius: 8px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border-color);
}

.card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}
```

### Navigation Surfaces
```css
.navbar {
  background: var(--surface-primary);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}
```

### Modal Surfaces
```css
.modal {
  background: var(--surface-primary);
  border-radius: 12px;
  box-shadow: var(--shadow-2xl);
  z-index: var(--z-modal);
}

.modal-backdrop {
  background: rgb(0 0 0 / 0.5);
  backdrop-filter: blur(4px);
  z-index: var(--z-modal);
}
```

## Accessibility Considerations

### Contrast Requirements
- **Surface differentiation**: Sufficient contrast between layers
- **Focus indicators**: Clear focus states on all surfaces
- **Color independence**: Don't rely solely on elevation for meaning
- **High contrast mode**: Support system accessibility features

### Screen Reader Support
- **Semantic layering**: Use proper HTML structure
- **Layer announcements**: Announce modal and overlay states
- **Focus management**: Proper focus trapping in layers
- **Layer descriptions**: Clear labeling of surface purposes

## Performance Optimization

### Efficient Rendering
- **GPU acceleration**: Use transform for animations
- **Composite layers**: Minimize paint operations
- **Shadow optimization**: Efficient shadow implementations
- **Layer management**: Avoid unnecessary z-index stacking

### Animation Guidelines
```css
/* Smooth elevation transitions */
.elevated {
  transition: 
    box-shadow 200ms ease-out,
    transform 200ms ease-out;
  will-change: box-shadow, transform;
}

.elevated:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

## Dark Mode Adaptations

### Surface Adjustments
```css
[data-theme="dark"] {
  /* Reduced shadow opacity for dark backgrounds */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.4);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.5);
}
```

### Enhanced Borders
- **Subtle borders**: Additional definition in dark mode
- **Highlight edges**: Light borders for surface separation
- **Consistent contrast**: Maintain accessibility standards

## Implementation Best Practices

### Development Guidelines
1. **Use design tokens**: Consistent elevation values
2. **Test across devices**: Verify appearance on various screens
3. **Optimize performance**: Monitor rendering performance
4. **Validate accessibility**: Test with assistive technologies

### Quality Checklist
- [ ] Proper z-index hierarchy maintained
- [ ] Accessible contrast ratios between surfaces
- [ ] Smooth transitions and animations
- [ ] Responsive behavior across breakpoints
- [ ] Performance optimization implemented
- [ ] Dark mode compatibility verified

Thoughtful surface and layering design creates intuitive, accessible interfaces that guide users naturally through content and interactions.