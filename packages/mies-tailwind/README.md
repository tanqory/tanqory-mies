# @tanqory/mies-tailwind

Tailwind CSS preset for the Tanqory Mies design system. Provides design system constraints and CSS variable integration for web applications.

## Installation

```bash
npm install @tanqory/mies-tailwind @tanqory/mies-tokens
# or
pnpm add @tanqory/mies-tailwind @tanqory/mies-tokens
```

## Setup for Next.js

### 1. Import Design Tokens CSS

Import the CSS variables in your global CSS file:

```css
/* app/globals.css or styles/globals.css */
@import '@tanqory/mies-tokens/tokens.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Configure Tailwind

Add the preset to your `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';
import { miesPreset } from '@tanqory/mies-tailwind';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [miesPreset],
};

export default config;
```

Or with JavaScript (`tailwind.config.js`):

```javascript
const { miesPreset } = require('@tanqory/mies-tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [miesPreset],
};
```

### 3. Use in Components

```tsx
export default function MyComponent() {
  return (
    <div className="bg-brand text-black border-1 border-black p-16">
      <h1 className="text-2xl font-sans">Hello World</h1>
      <button className="bg-black text-white px-16 py-8 text-base">
        Click me
      </button>
    </div>
  );
}
```

## What's Included

### Design System Colors

The preset maps to CSS variables from `@tanqory/mies-tokens`:

- `brand` → `var(--mies-color-brand)` (#E1FF00)
- `black` → `var(--mies-color-black)` (#000000)
- `white` → `var(--mies-color-white)` (#FFFFFF)
- `transparent`
- `current` (currentColor)

### Typography

- **Font Family**: Inter font stack via `var(--mies-font-family)`
- **Font Sizes**: xs, sm, base, lg, xl, 2xl with proper line heights
- All mapped to CSS variables for consistency

### Spacing

Limited spacing scale that enforces design constraints:
- `0` - No spacing
- `4` - `var(--mies-spacing-4)` (0.25rem)
- `8` - `var(--mies-spacing-8)` (0.5rem)
- `12` - `var(--mies-spacing-12)` (0.75rem)
- `16` - `var(--mies-spacing-16)` (1rem)
- `24` - `var(--mies-spacing-24)` (1.5rem)
- `32` - `var(--mies-spacing-32)` (2rem)

### Borders

- **Border Radius**: Only `0` (no rounded corners)
- **Border Width**: `0, 1` (1px default via CSS variable)

### Shadows

- **Box Shadow**: Only `none` (flat design system)

### Z-Index

- Standard: `0, 10, 20, 30, 40, 50`
- Semantic: `base` (100), `nav` (200), `overlay` (300)

## Custom Utilities

### Border Width

```html
<!-- 1px border using design system value -->
<div class="border-1">1px border</div>
```

### Brand Colors

```html
<!-- Text -->
<p class="text-brand">Brand colored text</p>

<!-- Background -->
<div class="bg-brand">Brand background</div>

<!-- Border -->
<div class="border-1 border-brand">Brand border</div>
```

## Disabled Features

The preset disables these Tailwind features to maintain design consistency:

- **Gradient utilities** (`bg-gradient-*`) - Disabled via `backgroundImage: false`
- **Rounded corners** (`rounded-*`) - Disabled via `borderRadius: false`
- **Box shadows** (`shadow-*`) - Disabled via `boxShadow: false`

## Usage Examples

### Button Component

```tsx
function Button({ children, variant = 'primary' }) {
  const baseClasses = "px-16 py-8 text-base font-sans border-1 transition-opacity";
  
  const variants = {
    primary: "bg-brand text-black border-black hover:opacity-90",
    secondary: "bg-white text-black border-black hover:bg-brand",
    outline: "bg-transparent text-black border-black hover:bg-brand",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}
```

### Card Component

```tsx
function Card({ children }) {
  return (
    <div className="bg-white border-1 border-black p-24 space-y-16">
      {children}
    </div>
  );
}
```

### Layout with Semantic Z-Index

```tsx
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-1 border-black z-nav fixed top-0 w-full p-16">
        <div className="text-2xl font-sans text-black">Logo</div>
      </nav>
      
      {/* Main content */}
      <main className="pt-32 z-base relative">
        {children}
      </main>
      
      {/* Modal overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-overlay">
        <div className="bg-white border-1 border-black p-24 m-24">
          Modal content
        </div>
      </div>
    </div>
  );
}
```

### Form Components

```tsx
function ContactForm() {
  return (
    <form className="space-y-16 max-w-md">
      <div className="space-y-4">
        <label className="block text-sm font-sans text-black">Name</label>
        <input 
          className="w-full border-1 border-black bg-white px-12 py-8 text-base font-sans focus:bg-brand focus:outline-none"
          type="text" 
        />
      </div>
      
      <div className="space-y-4">
        <label className="block text-sm font-sans text-black">Email</label>
        <input 
          className="w-full border-1 border-black bg-white px-12 py-8 text-base font-sans focus:bg-brand focus:outline-none"
          type="email" 
        />
      </div>
      
      <button 
        type="submit"
        className="w-full bg-brand text-black border-1 border-black px-16 py-12 text-base font-sans hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}
```

## Design System Constraints

This preset enforces design system constraints:

- **Minimal color palette**: brand, black, white only
- **Limited spacing scale**: 4, 8, 12, 16, 24, 32
- **Flat design**: no rounded corners, no shadows
- **Consistent borders**: 1px width only
- **Typography**: Inter font family, xs-2xl scale
- **Semantic z-index**: organized layering system

## Integration with Other Frameworks

### With CSS-in-JS

```tsx
import { tokens } from '@tanqory/mies-tokens';

const Button = styled.button`
  background-color: ${tokens.colors.brand};
  color: ${tokens.colors.black};
  border: ${tokens.border.width} solid ${tokens.colors.black};
  padding: ${tokens.spacing[12]} ${tokens.spacing[16]};
  font-family: ${tokens.typography.fontFamily};
`;
```

### With Vanilla CSS

```css
/* After importing @tanqory/mies-tokens/tokens.css */
.my-button {
  background-color: var(--mies-color-brand);
  color: var(--mies-color-black);
  border: var(--mies-border-width) solid var(--mies-color-black);
  padding: var(--mies-spacing-12) var(--mies-spacing-16);
  font-family: var(--mies-font-family);
}
```

## Requirements

- Tailwind CSS 3.0+
- `@tanqory/mies-tokens` (peer dependency)
- CSS variables must be imported via `@tanqory/mies-tokens/tokens.css`

## TypeScript Support

The preset is fully typed for better development experience:

```typescript
import type { Config } from 'tailwindcss';
import { miesPreset } from '@tanqory/mies-tailwind';

const config: Config = {
  presets: [miesPreset], // Full TypeScript support
};
```