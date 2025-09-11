# Mies 101

Your comprehensive introduction to the Tanqory Mies design system.

## What is Tanqory Mies?

Tanqory Mies is a cross-platform design system built for e-commerce applications. Named after legendary architect Ludwig Mies van der Rohe, it embodies his "less is more" philosophy through systematic constraints and functional minimalism.

### Key Principles

- **Systematic Constraints**: Limited color palette, no rounded corners, no shadows
- **Cross-Platform Consistency**: Same design tokens work on Web and React Native
- **Performance First**: Zero-JS by default, sub-1KB components
- **E-commerce Focus**: Built specifically for commerce applications

## Design Language

### Color System
Tanqory Mies uses only three colors:
- **Brand**: `#E1FF00` (Lime green) - For primary actions and highlights
- **Black**: `#000000` - For text, borders, and structure
- **White**: `#FFFFFF` - For backgrounds and negative space

### Spacing Scale
Mathematical spacing system based on 4px increments:
- `4px` (xs) - Micro spacing
- `8px` (sm) - Small gaps
- `12px` (md) - Medium spacing
- `16px` (base) - Default spacing
- `24px` (lg) - Large sections
- `32px` (xl) - Major divisions

### Typography
System font stacks optimized for performance and readability:
- **Font Family**: System sans-serif
- **Font Sizes**: 14px, 16px, 18px, 24px, 32px
- **Font Weights**: Normal (400), Medium (500)

## Architecture Overview

### Package Structure

```
@tanqory/mies-*
├── mies-tokens        # Design tokens (CSS, TS, JSON)
├── mies-tailwind      # Tailwind CSS preset
├── mies-core-web      # React components for web
├── mies-core-native   # React Native components
├── mies-icons         # Cross-platform icon library
└── eslint-plugin-*   # Design system enforcement
```

### Design Token Flow

```
Design Tokens
├── CSS Variables (Web)
├── TypeScript Constants (Web)
└── JSON (React Native)
    ├── Web Components
    └── Native Components
```

## Platform Targets

### Web Platform
- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS with custom preset
- **Components**: React Server Components by default
- **Icons**: SVG with currentColor inheritance

### Mobile Platform
- **Framework**: React Native 0.75+ with Expo
- **Styling**: StyleSheet with design tokens
- **Components**: Platform-specific optimizations
- **Icons**: react-native-svg with explicit colors

## Core Concepts

### Component Variants
Every component follows consistent variant patterns:

- **Primary**: Brand color background, high contrast
- **Secondary**: White background with brand border
- **Outline**: Transparent background with border
- **Ghost**: Minimal styling, hover effects only

### Responsive Design
Mobile-first approach with systematic breakpoints:

- **Mobile**: Default styles (320px+)
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)
- **Large**: `xl:` prefix (1280px+)

### State Management
Components handle state consistently:

- **Default**: Base appearance
- **Hover**: Subtle color transitions
- **Focus**: Clear focus indicators for accessibility
- **Active**: Pressed/selected state
- **Disabled**: Reduced opacity, no interactions

## Performance Characteristics

### Bundle Sizes
Optimized for minimal impact:

- **Base tokens**: ~500 bytes
- **Single component**: ~300-800 bytes
- **Icon**: ~150-300 bytes
- **Full web library**: less than 50KB
- **Full native library**: less than 75KB

### Runtime Performance
- **Zero runtime CSS-in-JS**: Uses CSS variables
- **Tree-shakable**: Import only what you use
- **SSR-friendly**: Works with server-side rendering
- **Fast hydration**: Minimal client-side JavaScript

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install @tanqory/mies-core-web @tanqory/mies-tailwind

# Configure Tailwind
echo "module.exports = require('@tanqory/mies-tailwind')" > tailwind.config.js

# Import base styles
import '@tanqory/mies-tokens/tokens.css'
```

### Component Usage
```tsx
import { Button, Card } from '@tanqory/mies-core-web';
import { CartIcon } from '@tanqory/mies-icons/web';

export default function ProductCard({ product }) {
  return (
    <Card padding="base" bordered>
      <h3 className="text-lg font-medium">{product.name}</h3>
      <p className="text-base text-black">{product.price}</p>
      <Button variant="primary">
        <CartIcon size={16} />
        Add to Cart
      </Button>
    </Card>
  );
}
```

## Quality Assurance

### Design System Enforcement
- **ESLint Plugin**: Prevents design violations at build time
- **TypeScript Strict**: Full type safety across all packages
- **Visual Testing**: Automated screenshot comparisons
- **Performance Budgets**: Bundle size monitoring

### Accessibility Standards
- **WCAG 2.1 AA**: All components meet accessibility guidelines
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: Exceeds minimum contrast ratios

## Migration Strategies

### From Other Design Systems
1. **Audit current components**: Map existing components to Mies equivalents
2. **Update color tokens**: Replace custom colors with brand/black/white
3. **Simplify spacing**: Convert to 4px-based spacing scale
4. **Remove decorative styles**: Eliminate shadows, gradients, rounded corners
5. **Test accessibility**: Verify WCAG compliance

### Gradual Adoption
1. **Start with tokens**: Install design tokens package
2. **Add new components**: Use Mies for new features
3. **Update existing components**: Migrate one component at a time
4. **Enable ESLint rules**: Gradually increase rule strictness
5. **Full migration**: Complete transition to Mies components

## Common Patterns

### E-commerce Layouts
```tsx
// Product grid
<Grid columns={3} gap="base">
  {products.map(product => <ProductCard key={product.id} {...product} />)}
</Grid>

// Shopping cart
<Stack spacing="base">
  {items.map(item => <CartItem key={item.id} {...item} />)}
  <Button variant="primary">Checkout</Button>
</Stack>
```

### Navigation Patterns
```tsx
// Header navigation
<Header sticky>
  <Container>
    <Stack direction="row" spacing="lg" align="center">
      <Logo />
      <Navigation />
      <UserActions />
    </Stack>
  </Container>
</Header>
```

## Next Steps

Ready to start building with Mies? Continue with:

- [Component Lifecycle](/docs/getting-started/component-lifecycle) - Learn how components work
- [Building with Mies](/docs/getting-started/building-with-mies) - Practical implementation guide
- [Design Tokens](/docs/design-tokens) - Deep dive into the token system
- [Examples](/docs/examples) - See real-world implementations