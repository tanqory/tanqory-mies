# Tanqory Mies - Documentation Site

Next.js-based documentation site for the Tanqory Mies design system.

## Features

- **Next.js 15** with App Router
- **MDX** support for documentation content
- **Tailwind CSS** with Mies preset
- **React Server Components** for performance
- **Syntax highlighting** for code examples
- **Responsive design** with mobile-first approach
- **Static export** ready for deployment

## Documentation Structure

### 🚀 Getting Started
- **Introduction** - Overview of the design system
- **Web Installation** - Next.js and React setup guide
- **Mobile Installation** - React Native setup guide

### 🎨 Foundations
- **Colors** - Brand palette and usage guidelines
- **Typography** - Font system and hierarchy
- **Spacing** - Spacing scale and grid system
- **Layout** - Layout principles and structure

### 🔧 Tokens
- **Overview** - Understanding design tokens
- **CSS Variables** - Using tokens in CSS and web
- **TypeScript** - Typed tokens for TypeScript
- **JSON** - Tokens for React Native

### 🧱 Components Web
- **Overview** - React Server Components overview
- **Button** - Interactive button component
- **Card** - Container and content cards
- **Form** - Form controls and inputs
- **Table** - Data tables and lists
- **Layout** - Page structure and containers

### 📱 Components Mobile
- **Overview** - React Native components overview
- **Button** - Touchable button component
- **Card** - Mobile container cards
- **Form** - Native form components
- **List** - Scrollable lists and items
- **Layout** - Screen structure and containers

### 🎯 Icons
- **Catalog** - Browse all available icons
- **Web Usage** - Using icons in React/Next.js
- **Mobile Usage** - Using icons in React Native

### 💡 Inspiration
- **Mies van der Rohe** - Design philosophy and principles
- **Design Principles** - Core design values

## Development

### Prerequisites
- Node.js 20+
- pnpm 8+

### Getting Started

```bash
# From the monorepo root
pnpm install

# Start the development server
cd docs/site
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation site.

### Building

```bash
# Build the site
pnpm build

# Export static files
pnpm export
```

### Adding Documentation

#### Creating MDX Pages

Create MDX files in `src/app/` with the `.mdx` extension:

```mdx
# Page Title

Content goes here with **markdown** formatting.

## Code Examples

```tsx
import { Button } from '@tanqory/mies-core-web/button';

export default function Example() {
  return <Button variant="primary">Click me</Button>;
}
```

## Interactive Components

You can also include React components directly in MDX.
```

#### Adding Navigation

Update `src/data/navigation.ts` to add new pages to the navigation:

```typescript
{
  title: 'New Section',
  href: '/new-section',
  description: 'Description of the new section',
  items: [
    {
      title: 'Sub Page',
      href: '/new-section/sub-page',
      description: 'Sub page description',
    },
  ],
},
```

#### Using Components

Import and use design system components in documentation:

```tsx
import { Button } from '@tanqory/mies-core-web/button';
import { Card } from '@tanqory/mies-core-web/card';
import { CartIcon } from '@tanqory/mies-icons/web';

// Use components to demonstrate functionality
<Card padding="base">
  <Button variant="primary">
    <CartIcon size={16} /> Add to Cart
  </Button>
</Card>
```

## Design System Integration

The documentation site uses the Tanqory Mies design system:

### Styling
- **Tailwind CSS** with Mies preset
- **Design tokens** via CSS variables
- **No shadows, gradients, or border radius**
- **Brand colors** throughout the interface

### Components
- **Layout components** for page structure
- **Interactive examples** using actual components
- **Icons** integrated throughout the documentation

### Typography
- **Prose styling** customized for the design system
- **Code blocks** with syntax highlighting
- **Consistent hierarchy** using design system fonts

## Deployment

The site is configured for static export and can be deployed to:

- **Vercel** (recommended)
- **Netlify** 
- **GitHub Pages**
- **Any static hosting service**

### Environment Variables

No environment variables required for basic functionality.

### Static Export

The site is configured to export as static HTML:

```javascript
// next.config.js
output: 'export',
trailingSlash: true,
images: {
  unoptimized: true
}
```

## Performance

### Optimizations
- **Static generation** for all documentation pages
- **Tree-shaking** for component imports
- **Image optimization** disabled for static export
- **Minimal JavaScript** using React Server Components

### Bundle Analysis

To analyze the bundle size:

```bash
# Install bundle analyzer
npm install -g @next/bundle-analyzer

# Analyze the bundle
ANALYZE=true pnpm build
```

## Customization

### Styling
Customize the documentation appearance by modifying:
- `src/app/globals.css` - Global styles and prose customization
- `tailwind.config.ts` - Tailwind configuration
- `src/components/Layout.tsx` - Site layout and navigation

### Content
Add or modify documentation content:
- Create new MDX files in `src/app/`
- Update navigation in `src/data/navigation.ts`
- Add interactive examples in component files

### Code Highlighting
Syntax highlighting is provided by `react-syntax-highlighter` with custom styling that matches the design system.

## Contributing

To contribute to the documentation:

1. **Add new pages** as MDX files
2. **Update navigation** structure
3. **Include interactive examples** using the design system components
4. **Follow design constraints** (no shadows, gradients, border radius)
5. **Test responsive behavior** on mobile devices

## License

Documentation content is licensed under MIT. The design system components are licensed separately.