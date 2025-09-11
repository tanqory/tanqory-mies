# ESLint Plugin - Tanqory Mies

ESLint plugin to enforce Tanqory Mies design system constraints and coding standards.

## Installation

```bash
npm install --save-dev eslint-plugin-tanqory-mies
# or
pnpm add -D eslint-plugin-tanqory-mies
```

## Configuration

### Recommended Configuration

Add the plugin to your ESLint configuration:

```javascript
// .eslintrc.js
module.exports = {
  plugins: ['tanqory-mies'],
  extends: ['plugin:tanqory-mies/recommended'],
};
```

### Strict Configuration

For stricter enforcement of design system rules:

```javascript
// .eslintrc.js
module.exports = {
  plugins: ['tanqory-mies'],
  extends: ['plugin:tanqory-mies/strict'],
};
```

### Manual Configuration

Configure individual rules:

```javascript
// .eslintrc.js
module.exports = {
  plugins: ['tanqory-mies'],
  rules: {
    'tanqory-mies/no-rounded': 'error',
    'tanqory-mies/no-shadow': 'error',
    'tanqory-mies/no-gradient': 'error',
    'tanqory-mies/enforce-design-tokens': 'error',
    'tanqory-mies/enforce-spacing-tokens': 'warn',
  },
};
```

## Rules

### `tanqory-mies/no-rounded`

**Type:** Problem  
**Severity:** Error  
**Category:** Design System

Disallows rounded corners in CSS classes and inline styles. The Mies design system uses sharp, geometric edges.

#### ❌ Incorrect

```typescript
// Tailwind classes
const className = "rounded-lg border";
const style = "rounded-md p-4";

// CSS properties
const inlineStyle = { borderRadius: '8px' };
```

#### ✅ Correct

```typescript
// Sharp edges only
const className = "border";
const style = "p-4";

// Explicit sharp edges
const inlineStyle = { borderRadius: 0 };
```

### `tanqory-mies/no-shadow`

**Type:** Problem  
**Severity:** Error  
**Category:** Design System

Disallows shadows and elevation effects. The Mies design system uses flat design without depth effects.

#### ❌ Incorrect

```typescript
// Tailwind shadow classes
const className = "shadow-lg";
const style = "shadow-md hover:shadow-xl";

// CSS properties
const inlineStyle = { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' };

// React Native elevation
const nativeStyle = { elevation: 4 };
```

#### ✅ Correct

```typescript
// Flat design only
const className = "border border-black";
const style = "border-1 border-black";

// Explicit no shadow
const inlineStyle = { boxShadow: 'none' };
const nativeStyle = { elevation: 0 };
```

### `tanqory-mies/no-gradient`

**Type:** Problem  
**Severity:** Error  
**Category:** Design System

Disallows gradient backgrounds. The Mies design system uses solid colors only.

#### ❌ Incorrect

```typescript
// Tailwind gradient classes
const className = "bg-gradient-to-r from-blue-500 to-green-500";
const style = "bg-gradient-to-b from-red-400 via-yellow-500 to-pink-500";

// CSS gradients
const inlineStyle = { background: 'linear-gradient(45deg, #E1FF00, #ffffff)' };
```

#### ✅ Correct

```typescript
// Solid colors only
const className = "bg-brand";
const style = "bg-white";

// Design system colors
const inlineStyle = { backgroundColor: '#E1FF00' };
```

### `tanqory-mies/enforce-design-tokens`

**Type:** Problem  
**Severity:** Error  
**Category:** Design System

Enforces usage of design system colors (brand, black, white, transparent, current).

#### ❌ Incorrect

```typescript
// Custom colors not allowed
const className = "text-red-500 bg-blue-600";
const style = "text-purple-400 border-green-500";

// Hex colors not allowed
const inlineStyle = { color: '#FF6B6B', backgroundColor: '#4ECDC4' };
```

#### ✅ Correct

```typescript
// Design system colors only
const className = "text-black bg-brand border-white";
const style = "text-brand bg-white";

// CSS variables (allowed)
const inlineStyle = { 
  color: 'var(--mies-color-black)', 
  backgroundColor: 'var(--mies-color-brand)' 
};

// Tokens import (allowed)
import tokens from '@tanqory/mies-tokens/tokens.json';
const nativeStyle = { color: tokens.colors.brand };
```

### `tanqory-mies/enforce-spacing-tokens`

**Type:** Problem  
**Severity:** Warning  
**Category:** Design System

Enforces usage of design system spacing tokens (0, 4, 8, 12, 16, 24, 32).

#### ❌ Incorrect

```typescript
// Custom spacing values
const className = "p-5 m-3 gap-7";
const style = "p-10 space-y-6";
```

#### ✅ Correct

```typescript
// Design system spacing only
const className = "p-4 m-8 gap-16";
const style = "p-24 space-y-12";

// Available values: 0, 4, 8, 12, 16, 24, 32
```

## Configuration Presets

### Recommended Preset

Suitable for most projects:

```javascript
{
  "tanqory-mies/no-rounded": "error",
  "tanqory-mies/no-shadow": "error", 
  "tanqory-mies/no-gradient": "error",
  "tanqory-mies/enforce-design-tokens": "error",
  "tanqory-mies/enforce-spacing-tokens": "warn"
}
```

### Strict Preset

For strict design system enforcement:

```javascript
{
  "tanqory-mies/no-rounded": "error",
  "tanqory-mies/no-shadow": "error",
  "tanqory-mies/no-gradient": "error", 
  "tanqory-mies/enforce-design-tokens": "error",
  "tanqory-mies/enforce-spacing-tokens": "error"
}
```

## Integration Examples

### Next.js Project

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:tanqory-mies/recommended'
  ],
  rules: {
    // Custom overrides
    'tanqory-mies/enforce-spacing-tokens': 'error',
  },
};
```

### React Native Project

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    '@react-native-community',
    'plugin:tanqory-mies/recommended'
  ],
  rules: {
    // React Native specific
    'react-native/no-color-literals': 'error',
    'tanqory-mies/enforce-design-tokens': 'error',
  },
};
```

### Monorepo Configuration

```javascript
// Root .eslintrc.js
module.exports = {
  extends: ['plugin:tanqory-mies/recommended'],
  overrides: [
    // Stricter rules for packages
    {
      files: ['packages/*/src/**/*'],
      extends: ['plugin:tanqory-mies/strict'],
    },
    // Relaxed rules for examples
    {
      files: ['examples/**/*'],
      rules: {
        'tanqory-mies/enforce-spacing-tokens': 'warn',
      },
    },
  ],
};
```

## Troubleshooting

### Common Issues

#### False Positives with URLs or Non-UI Code

If you get false positives in URLs or other non-UI code:

```javascript
// .eslintrc.js
module.exports = {
  rules: {
    'tanqory-mies/no-gradient': 'off', // Disable for specific files
  },
  overrides: [
    {
      files: ['src/config/**/*', 'src/utils/**/*'],
      rules: {
        'tanqory-mies/enforce-design-tokens': 'off',
      },
    },
  ],
};
```

#### Dynamic Class Names

For dynamic class names that ESLint can't analyze:

```typescript
// Use eslint-disable comments
const dynamicClass = `bg-${colorName}-500`; // eslint-disable-line tanqory-mies/enforce-design-tokens

// Or use a function to validate at runtime
function getValidColor(color: string) {
  const validColors = ['brand', 'black', 'white'];
  return validColors.includes(color) ? color : 'black';
}
```

### Performance

The plugin performs static analysis on string literals and template strings. For optimal performance:

- Use static class names when possible
- Avoid complex string concatenation in class names
- Use design system tokens consistently

## Contributing

To contribute to the ESLint plugin:

1. **Add new rules** in `src/rules/`
2. **Update tests** for rule validation
3. **Update documentation** with examples
4. **Follow existing patterns** for rule structure

## License

MIT License - See LICENSE file for details.