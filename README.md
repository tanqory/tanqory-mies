# Tanqory Mies Design System

Cross-platform design system for Web and Mobile applications. Built with the philosophy of "less is more" — enforcing consistency through meaningful constraints.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3%2B-blue.svg)

## Features

- 🚀 **Zero-JS by default** - React Server Components when possible
- 🎨 **Design constraints** - No shadows, gradients, or border radius  
- 🔄 **Cross-platform** - Same tokens work on Web and React Native
- 📦 **E-commerce focused** - Components and icons for commerce apps
- 🏗️ **TypeScript first** - Full type safety across all packages
- ⚡ **Performance optimized** - Tree-shakable with minimal runtime
- 🎯 **ESLint enforced** - Custom rules enforce design constraints

## Architecture

The design system consists of five main packages:

```
packages/
├── mies-tokens/         # Design tokens (CSS, TS, JSON)
├── mies-core-web/       # React components for Web
├── mies-core-native/    # React Native components  
├── mies-icons/          # Cross-platform icon library
└── mies-tailwind/       # Tailwind CSS preset
```

## Quick Start

### Web Development (Next.js)

```bash
npm install @tanqory/mies-core-web @tanqory/mies-tailwind @tanqory/mies-tokens
```

```css
/* app/globals.css */
@import '@tanqory/mies-tokens/tokens.css';
@tailwind base;
@tailwind components; 
@tailwind utilities;
```

```typescript
// tailwind.config.ts
import { miesPreset } from '@tanqory/mies-tailwind';

export default {
  presets: [miesPreset],
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
};
```

### Mobile Development (React Native)

```bash
npm install @tanqory/mies-core-native @tanqory/mies-tokens react-native-svg
```

```tsx
import { Button } from '@tanqory/mies-core-native/button';
import tokens from '@tanqory/mies-tokens/tokens.json';

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing[16],
    backgroundColor: tokens.colors.white,
  },
});
```

## Design Philosophy

Inspired by Ludwig Mies van der Rohe's architectural principle of "less is more," the design system embraces:

### Functional Minimalism
Every element serves a purpose. Decorative elements are eliminated in favor of clarity and usability.

### Systematic Constraints
Design constraints ensure consistency:
- **Colors**: Brand (#E1FF00), Black (#000000), White (#FFFFFF) only
- **No shadows**: Flat design without depth effects
- **No gradients**: Solid colors for performance and consistency  
- **No border radius**: Sharp, geometric edges
- **Systematic spacing**: 4, 8, 12, 16, 24, 32 pixel scale

### Cross-Platform Consistency
The same design tokens work across Web and React Native, ensuring identical experiences across platforms.

## Code Quality & Linting

The design system includes custom ESLint rules to enforce design constraints:

### Installation

ESLint configuration is included in the monorepo. For external projects:

```bash
npm install --save-dev eslint-plugin-tanqory-mies
```

### Configuration

```javascript
// .eslintrc.js
module.exports = {
  extends: ['plugin:tanqory-mies/recommended'],
  rules: {
    'tanqory-mies/no-rounded': 'error',      // Prevent rounded corners
    'tanqory-mies/no-shadow': 'error',       // Prevent shadows  
    'tanqory-mies/no-gradient': 'error',     // Prevent gradients
    'tanqory-mies/enforce-design-tokens': 'error', // Enforce design system colors
    'tanqory-mies/enforce-spacing-tokens': 'warn',  // Enforce spacing scale
  },
};
```

### Enforced Rules

#### Design System Violations

```typescript
// ❌ These will trigger ESLint errors:
const badStyle = "rounded-lg shadow-md bg-gradient-to-r from-blue-500";
const customColor = "text-red-500 bg-purple-600";
const wrongSpacing = "p-5 m-7 gap-15";

// ✅ Design system compliant:
const goodStyle = "border-1 border-black bg-brand";
const systemColor = "text-black bg-white";
const correctSpacing = "p-16 m-24 gap-8";
```

### TypeScript Strict Mode

All packages use strict TypeScript configuration:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### Available Scripts

```bash
# Lint all packages and examples
pnpm lint

# Check linting without fixing
pnpm lint:check  

# Type check all packages
pnpm typecheck

# Format code with Prettier
pnpm format

# Build all packages
pnpm build

# Run development servers
pnpm dev
```

## Examples

The monorepo includes complete example applications:

### Web Application (Next.js 15)
```
examples/web-app/
```
- App Router with React Server Components
- Tailwind CSS integration
- Server actions for forms
- Component showcase

### Mobile Application (React Native)
```
examples/mobile-app/
```
- Expo-based React Native app
- Cross-platform components
- Navigation with React Navigation
- StyleSheet integration

### Documentation Site
```
docs/site/
```
- Next.js-based documentation
- Interactive component examples
- Design philosophy and guidelines

## Package Documentation

- **[@tanqory/mies-tokens](./packages/mies-tokens)** - Design tokens for all platforms
- **[@tanqory/mies-core-web](./packages/mies-core-web)** - React components for web
- **[@tanqory/mies-core-native](./packages/mies-core-native)** - React Native components
- **[@tanqory/mies-icons](./packages/mies-icons)** - Cross-platform icon library
- **[@tanqory/mies-tailwind](./packages/mies-tailwind)** - Tailwind CSS preset
- **[eslint-plugin-tanqory-mies](./eslint-plugin-tanqory-mies)** - ESLint rules for design constraints

## Browser & Platform Support

### Web
- Chrome 90+
- Firefox 88+ 
- Safari 14+
- Edge 90+

### Mobile
- iOS 13.0+
- Android API Level 21+ (Android 5.0)
- React Native 0.75+

## Development

### Prerequisites
- Node.js 20+
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/tanqory/mies.git
cd mies

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development servers
pnpm dev
```

### Monorepo Structure

```
tanqory-mies/
├── packages/                 # Design system packages
├── examples/                 # Example applications
├── docs/                     # Documentation site
├── eslint-plugin-tanqory-mies/ # Custom ESLint plugin
├── .eslintrc.js             # Root ESLint config
├── tsconfig.json            # Root TypeScript config
└── pnpm-workspace.yaml      # Workspace configuration
```

### Contributing

1. **Follow design constraints** - No shadows, gradients, or border radius
2. **Use design tokens** - Only brand, black, white colors
3. **Write tests** - All new features need tests
4. **Update documentation** - Keep docs in sync with changes
5. **Run linting** - ESLint will enforce design system rules

### Release Process

```bash
# Create changeset for your changes
pnpm changeset

# Version packages
pnpm version-packages

# Build and release
pnpm release
```

## Design Tokens

### Colors
```typescript
const colors = {
  brand: '#E1FF00',    // Electric lime
  black: '#000000',    // Pure black  
  white: '#FFFFFF',    // Pure white
};
```

### Spacing Scale
```typescript
const spacing = {
  4: '0.25rem',   // 4px
  8: '0.5rem',    // 8px
  12: '0.75rem',  // 12px
  16: '1rem',     // 16px
  24: '1.5rem',   // 24px
  32: '2rem',     // 32px
};
```

### Typography
```typescript
const typography = {
  fontFamily: 'Inter, sans-serif',
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem', 
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
};
```

## Performance

- **Tree-shakable imports** - Import only components you need
- **Zero-runtime CSS** - Design tokens compile to static CSS
- **Server-first** - React Server Components by default
- **Minimal JavaScript** - No complex visual effects
- **CSS variables** - Efficient theming without runtime overhead

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Credits

- **Design Philosophy**: Inspired by Ludwig Mies van der Rohe
- **Icons**: Based on [Lucide](https://lucide.dev/) (MIT License)
- **Typography**: Uses Inter font family

---

> "Less is more" - Ludwig Mies van der Rohe