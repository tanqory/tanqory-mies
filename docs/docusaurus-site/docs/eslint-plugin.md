# ESLint Plugin

Enforce design system constraints automatically with the Tanqory Mies ESLint plugin.

## Installation

```bash
npm install --save-dev eslint-plugin-tanqory-mies
```

## Configuration

Add the plugin to your ESLint configuration:

### .eslintrc.js

```javascript
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:tanqory-mies/recommended',
  ],
  plugins: ['tanqory-mies'],
  rules: {
    // All rules are enabled in 'recommended' config
    'tanqory-mies/no-rounded': 'error',
    'tanqory-mies/no-shadow': 'error', 
    'tanqory-mies/no-gradient': 'error',
    'tanqory-mies/enforce-design-tokens': 'error',
    'tanqory-mies/enforce-spacing-scale': 'error',
  },
};
```

### eslint.config.js (ESLint 9+)

```javascript
import tanqoryMies from 'eslint-plugin-tanqory-mies';

export default [
  {
    plugins: {
      'tanqory-mies': tanqoryMies,
    },
    rules: {
      'tanqory-mies/no-rounded': 'error',
      'tanqory-mies/no-shadow': 'error',
      'tanqory-mies/no-gradient': 'error', 
      'tanqory-mies/enforce-design-tokens': 'error',
      'tanqory-mies/enforce-spacing-scale': 'error',
    },
  },
];
```

## Rules

### no-rounded

Prevents rounded corners in CSS classes and styles.

**❌ Incorrect:**
```tsx
<div className="rounded-lg border-2" />
<div className="rounded-full w-10 h-10" />
<div style={{ borderRadius: '8px' }} />
```

**✅ Correct:**
```tsx
<div className="border-2 bg-brand" />
<div className="w-10 h-10 bg-black" />
<div style={{ border: '1px solid black' }} />
```

### no-shadow

Prevents shadow effects in CSS classes and styles.

**❌ Incorrect:**
```tsx
<div className="shadow-lg drop-shadow-md" />
<div className="shadow-xl shadow-black/50" />
<div style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
```

**✅ Correct:**
```tsx
<div className="border border-black bg-white" />
<div className="border-2 border-brand" />
<div style={{ border: '1px solid #000' }} />
```

### no-gradient

Prevents gradient backgrounds and effects.

**❌ Incorrect:**
```tsx
<div className="bg-gradient-to-r from-blue-500 to-green-500" />
<div className="bg-gradient-radial" />
<div style={{ background: 'linear-gradient(45deg, #f00, #00f)' }} />
```

**✅ Correct:**
```tsx
<div className="bg-brand text-black" />
<div className="bg-white border border-black" />
<div style={{ backgroundColor: '#E1FF00' }} />
```

### enforce-design-tokens

Enforces use of design tokens for colors instead of arbitrary values.

**❌ Incorrect:**
```tsx
<div className="text-blue-500 bg-red-400" />
<div style={{ color: '#3b82f6', backgroundColor: 'crimson' }} />
<Text style={{ color: '#ff0000' }}>Red text</Text>
```

**✅ Correct:**
```tsx
<div className="text-brand bg-black" />
<div className="text-black bg-white" />
<Text style={{ color: tokens.colors.brand }}>Brand text</Text>
```

**Allowed colors:**
- `brand` / `#E1FF00` 
- `black` / `#000000`
- `white` / `#FFFFFF`
- `transparent`
- `currentColor`
- `inherit`

### enforce-spacing-scale

Enforces systematic spacing scale instead of arbitrary values.

**❌ Incorrect:**
```tsx
<div className="p-3 m-5 gap-7" />
<div style={{ padding: '14px', margin: '22px' }} />
```

**✅ Correct:**
```tsx
<div className="p-12 m-16 gap-24" />
<div style={{ padding: tokens.spacing.md, margin: tokens.spacing.lg }} />
```

**Allowed spacing values:**
- `4px` (xs)
- `8px` (sm) 
- `12px` (md)
- `16px` (base)
- `24px` (lg)
- `32px` (xl)

## Severity Levels

Configure rule severity to match your workflow:

```javascript
module.exports = {
  rules: {
    'tanqory-mies/no-rounded': 'error',      // Build fails
    'tanqory-mies/no-shadow': 'warn',        // Warning only
    'tanqory-mies/no-gradient': 'off',       // Disabled
    'tanqory-mies/enforce-design-tokens': 'error',
    'tanqory-mies/enforce-spacing-scale': 'warn',
  },
};
```

## Integration

### Pre-commit Hooks

Automatically fix violations before commit:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "git add"
    ]
  }
}
```

### CI/CD Pipeline

Enforce rules in continuous integration:

```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
```

### VS Code Integration

Get real-time feedback in your editor:

```json
// .vscode/settings.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact", 
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Custom Configuration

### Whitelist Exceptions

Sometimes you need to break the rules for third-party components:

```javascript
module.exports = {
  rules: {
    'tanqory-mies/no-rounded': ['error', {
      // Allow rounded classes in specific files
      excludeFiles: ['src/components/ThirdParty/**/*'],
      // Allow specific class patterns
      allowPatterns: ['rounded-full'] // For avatar images
    }],
  },
};
```

### Framework-Specific Rules

Configure rules differently for different frameworks:

```javascript
module.exports = {
  overrides: [
    {
      // Stricter rules for component library
      files: ['packages/mies-core-web/**/*'],
      rules: {
        'tanqory-mies/enforce-design-tokens': 'error',
        'tanqory-mies/enforce-spacing-scale': 'error',
      },
    },
    {
      // More lenient for example projects
      files: ['examples/**/*'],
      rules: {
        'tanqory-mies/enforce-design-tokens': 'warn',
        'tanqory-mies/enforce-spacing-scale': 'warn',
      },
    },
  ],
};
```

## Migration Guide

### Existing Projects

Gradually adopt the plugin in existing codebases:

1. **Start with warnings:**
```javascript
rules: {
  'tanqory-mies/no-rounded': 'warn',
  'tanqory-mies/no-shadow': 'warn', 
  'tanqory-mies/no-gradient': 'warn',
}
```

2. **Fix violations incrementally:**
```bash
# See all violations
npx eslint src/ --format table

# Fix auto-fixable issues
npx eslint src/ --fix

# Focus on specific rules
npx eslint src/ --rule 'tanqory-mies/no-rounded: error'
```

3. **Upgrade to errors:**
```javascript
rules: {
  'tanqory-mies/no-rounded': 'error',
  // etc.
}
```

### Automated Migration

Use codemods to automatically fix common violations:

```bash
# Install codemod
npm install -g @tanqory/mies-codemod

# Transform rounded classes
npx mies-codemod remove-rounded src/

# Transform shadow classes  
npx mies-codemod remove-shadows src/

# Replace arbitrary colors with tokens
npx mies-codemod use-design-tokens src/
```

## Troubleshooting

### False Positives

If the plugin incorrectly flags valid code:

```javascript
// Use ESLint disable comments
/* eslint-disable-next-line tanqory-mies/no-rounded */
<div className="rounded-full"> {/* Avatar image */}

// Or disable for entire file
/* eslint-disable tanqory-mies/no-rounded */
```

### Performance Issues

For large codebases, optimize performance:

```javascript
module.exports = {
  // Only check specific file patterns
  files: ['src/**/*.{ts,tsx}'],
  
  // Exclude large directories
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    '.next/',
  ],
};
```

### TypeScript Integration

Ensure proper TypeScript support:

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

## Contributing

Help improve the plugin by reporting issues or contributing rules:

- [Report bugs](https://github.com/tanqory/mies/issues)
- [Request features](https://github.com/tanqory/mies/discussions)
- [Contributing guide](https://github.com/tanqory/mies/blob/main/CONTRIBUTING.md)