# Iconography

Tanqory Mies uses a curated icon system that communicates clearly, scales beautifully, and maintains consistency across all platforms.

## Icon Philosophy

### Design Principles
- **Universal clarity**: Icons transcend language barriers
- **Geometric precision**: Clean, mathematical forms
- **Functional purpose**: Every icon serves a clear function
- **Cultural neutrality**: Avoiding culturally specific symbols

### Visual Characteristics
- **Outline style**: Consistent 1.5px stroke weight
- **Rounded corners**: 2px radius for friendliness
- **Optical alignment**: Visually balanced, not mathematically centered
- **Scalable design**: Crisp at any resolution

## Icon Library

### Core Icon Set
Based on Lucide icons with Tanqory Mies customizations:
- **Navigation**: Home, menu, back, forward, close
- **Actions**: Add, edit, delete, save, share
- **Communication**: Message, mail, phone, video
- **Status**: Success, warning, error, info, loading
- **Content**: Document, image, download, upload

### Icon Categories
```
Navigation (12 icons)
├── Home, Menu, Back, Forward
├── Close, Minimize, Maximize
└── Breadcrumb, Pagination

Actions (24 icons)
├── Create: Add, Plus, New
├── Edit: Pencil, Edit, Settings
├── Delete: Trash, Remove, Clear
└── Utility: Save, Copy, Share

Communication (16 icons)
├── Messaging: Chat, Comment, Reply
├── Contact: Phone, Email, Video
└── Social: Like, Heart, Star

Status (10 icons)
├── Success: Check, Thumbs-up
├── Warning: Alert, Caution
├── Error: X, Exclamation
└── Info: Question, Help
```

## Technical Specifications

### Icon Sizing
```css
/* Icon size tokens */
--icon-xs: 12px;    /* Small inline icons */
--icon-sm: 16px;    /* Default UI icons */
--icon-md: 20px;    /* Prominent icons */
--icon-lg: 24px;    /* Hero icons */
--icon-xl: 32px;    /* Large decorative */
```

### SVG Implementation
```xml
<!-- Standard icon template -->
<svg 
  width="20" 
  height="20" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="1.5" 
  stroke-linecap="round" 
  stroke-linejoin="round"
>
  <!-- Icon paths -->
</svg>
```

### React Component
```typescript
interface IconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
  'aria-label'?: string;
}

const Icon: React.FC<IconProps> = ({ 
  size = 'sm', 
  color = 'currentColor',
  className,
  'aria-label': ariaLabel,
  ...props 
}) => {
  const sizeValue = {
    xs: 12,
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  }[size];

  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : 'presentation'}
      {...props}
    />
  );
};
```

## Usage Guidelines

### Icon + Text Combinations
```css
/* Icon with text */
.icon-text {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon-text svg {
  flex-shrink: 0;
  color: var(--text-secondary);
}
```

### Button Icons
```typescript
// Icon-only button
<Button variant="ghost" size="sm" aria-label="Close dialog">
  <XIcon size="sm" />
</Button>

// Icon + text button
<Button>
  <PlusIcon size="sm" />
  Add Item
</Button>
```

### Status Icons
```typescript
// Success state
<div className="status-success">
  <CheckCircleIcon size="sm" />
  <span>Operation completed successfully</span>
</div>

// Error state
<div className="status-error">
  <XCircleIcon size="sm" />
  <span>Something went wrong</span>
</div>
```

## Platform Adaptations

### Web Implementation
```css
/* CSS icon styling */
.icon {
  display: inline-block;
  vertical-align: middle;
  color: currentColor;
  fill: none;
  stroke: currentColor;
}

/* Responsive sizing */
@media (max-width: 768px) {
  .icon-responsive {
    width: var(--icon-md);
    height: var(--icon-md);
  }
}
```

### React Native Implementation
```typescript
import { Svg, Path } from 'react-native-svg';

const Icon = ({ size = 20, color = '#000', ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* SVG paths */}
  </Svg>
);
```

## Accessibility Standards

### Screen Reader Support
```typescript
// Decorative icons (no aria-label)
<StarIcon role="presentation" />

// Meaningful icons (with aria-label)
<SearchIcon aria-label="Search" role="img" />

// Icons in buttons (button provides context)
<button aria-label="Delete item">
  <TrashIcon role="presentation" />
</button>
```

### Color and Contrast
- **Sufficient contrast**: Icons meet 3:1 contrast ratio
- **Color independence**: Never rely solely on color
- **Focus indicators**: Clear focus states for interactive icons
- **High contrast mode**: Icons work in system high contrast

## Custom Icons

### Design Guidelines
When creating custom icons:
1. **Follow grid system**: Design on 24x24 pixel grid
2. **Consistent stroke**: Use 1.5px stroke weight
3. **Rounded corners**: Apply 2px corner radius
4. **Optical balance**: Adjust for visual weight
5. **Test at sizes**: Ensure clarity at 16px and smaller

### Icon Creation Process
1. **Sketch concepts**: Start with rough ideas
2. **Vector creation**: Build in design tool (Figma, Illustrator)
3. **Optimization**: Clean up paths and optimize file size
4. **Testing**: Verify at various sizes and backgrounds
5. **Documentation**: Add to icon library with usage notes

## Performance Optimization

### SVG Optimization
```xml
<!-- Optimized SVG -->
<svg viewBox="0 0 24 24" fill="none">
  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
</svg>
```

### Icon Loading
- **Inline SVGs**: For frequently used icons
- **Icon sprites**: For large icon sets
- **Lazy loading**: For decorative or below-fold icons
- **Caching strategy**: Proper cache headers for icon assets

## Icon Maintenance

### Version Control
- **Icon versioning**: Track changes to individual icons
- **Backward compatibility**: Maintain existing icon names
- **Migration guides**: Document breaking changes
- **Usage analytics**: Track icon usage for optimization

### Quality Assurance
1. **Visual review**: Ensure consistent style
2. **Accessibility audit**: Test with screen readers
3. **Cross-platform testing**: Verify on all target platforms
4. **Performance testing**: Monitor loading and rendering

## Future Considerations

### Emerging Technologies
- **Variable fonts**: Icon fonts with adjustable weights
- **Adaptive icons**: Icons that respond to system themes
- **3D icons**: Depth and dimension for modern interfaces
- **Animated icons**: Subtle motion for enhanced feedback

### Scalability
- **Icon management**: Tools for large-scale icon systems
- **Automated optimization**: Build-time icon processing
- **Usage tracking**: Data-driven icon library optimization
- **Community contributions**: Process for external icon submissions

Our iconography system creates a unified visual language that enhances usability while maintaining the clean, purposeful aesthetic of Tanqory Mies.