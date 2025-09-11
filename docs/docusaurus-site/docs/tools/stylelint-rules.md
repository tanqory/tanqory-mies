# Stylelint Rules

**Design system enforcement through automated linting.**

The Tanqory Mies Stylelint configuration prevents design drift by automatically detecting and fixing CSS/SCSS that violates design system constraints, ensuring consistent visual implementation across your entire codebase.

## Purpose

Manual design system enforcement fails. Automated enforcement succeeds. These Stylelint rules catch design token violations, accessibility issues, and implementation inconsistencies before they reach production, maintaining visual consistency without human oversight.

## Installation

### ESLint Plugin Installation

```bash
npm install --save-dev eslint-plugin-tanqory-mies @tanqory/mies-tokens
# or
yarn add --dev eslint-plugin-tanqory-mies @tanqory/mies-tokens  
# or
pnpm install -D eslint-plugin-tanqory-mies @tanqory/mies-tokens
```

### Stylelint Plugin Installation

```bash  
npm install --save-dev stylelint-config-tanqory-mies stylelint
# or
yarn add --dev stylelint-config-tanqory-mies stylelint
# or
pnpm install -D stylelint-config-tanqory-mies stylelint
```

### Complete Setup

```bash
# Install all linting tools
npm install --save-dev eslint-plugin-tanqory-mies stylelint-config-tanqory-mies @tanqory/mies-tokens eslint stylelint
```

## Usage Guidelines

- **Fix automatically** — Most violations can be auto-fixed with `--fix` flag for immediate compliance
- **Run on pre-commit** — Integrate with Git hooks to prevent non-compliant code from being committed  
- **Configure severity** — Set rules to `error` for CI/CD blocking or `warn` for development guidance
- **Customize selectively** — Override specific rules only when business requirements demand exceptions

## Examples

### ESLint Configuration

Create `.eslintrc.js`:

```javascript
module.exports = {
  extends: [
    '@tanqory/mies/eslint-config'
  ],
  plugins: [
    'tanqory-mies'
  ],
  rules: {
    // Design token enforcement
    'tanqory-mies/no-hardcoded-colors': 'error',
    'tanqory-mies/no-magic-spacing': 'error', 
    'tanqory-mies/use-design-tokens': 'error',
    
    // Component usage
    'tanqory-mies/prefer-mies-components': 'warn',
    'tanqory-mies/no-deprecated-props': 'error',
    
    // Accessibility
    'tanqory-mies/require-alt-text': 'error',
    'tanqory-mies/color-contrast-ratio': 'error',
    'tanqory-mies/keyboard-navigation': 'warn'
  }
}
```

### Stylelint Configuration

Create `.stylelintrc.js`:

```javascript
module.exports = {
  extends: [
    'stylelint-config-tanqory-mies'
  ],
  rules: {
    // Color enforcement
    'mies/color-tokens-only': true,
    'mies/no-hardcoded-hex': true,
    'mies/no-rgb-values': true,
    
    // Spacing constraints  
    'mies/spacing-scale-only': true,
    'mies/no-magic-numbers': [true, {
      ignore: ['0', '1', '100%']
    }],
    
    // Typography rules
    'mies/font-size-tokens': true,
    'mies/line-height-unitless': true,
    
    // Layout restrictions
    'mies/no-border-radius': true,
    'mies/no-box-shadow': true,
    'mies/no-gradient': true
  }
}
```

### Package.json Scripts

```json
{
  "scripts": {
    "lint": "eslint src --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint src --ext .ts,.tsx,.js,.jsx --fix",
    "lint:css": "stylelint 'src/**/*.{css,scss,tsx}'",
    "lint:css:fix": "stylelint 'src/**/*.{css,scss,tsx}' --fix",
    "lint:all": "npm run lint && npm run lint:css"
  }
}
```

## Configuration

### Rule Severity Levels

Set appropriate severity based on your workflow:

```javascript
{
  rules: {
    // Block CI/CD pipeline
    'tanqory-mies/no-hardcoded-colors': 'error',
    
    // Show warnings in development  
    'tanqory-mies/prefer-mies-components': 'warn',
    
    // Disable specific rules
    'tanqory-mies/no-magic-spacing': 'off'
  }
}
```

### Custom Token Configuration

For custom design token setups:

```javascript
// .eslintrc.js
module.exports = {
  settings: {
    'tanqory-mies': {
      tokenPath: './design-tokens/build/tokens.json',
      componentLibrary: '@company/design-system',
      customRules: './eslint-custom-rules.js'
    }
  }
}
```

### IDE Integration

Configure VS Code to show linting errors inline:

```json
// .vscode/settings.json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact", 
    "typescript",
    "typescriptreact"
  ],
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  }
}
```

### Git Hooks Integration

Install Husky and lint-staged:

```bash
npm install --save-dev husky lint-staged
```

Configure in `package.json`:

```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["eslint --fix"],
    "*.{css,scss}": ["stylelint --fix"]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

## Troubleshooting

### False Positives on Design Tokens

**Issue**: Linter flags valid design tokens as violations

**Solutions**:
1. Verify design token file path in configuration
2. Update `@tanqory/mies-tokens` to latest version
3. Clear ESLint cache: `npx eslint --cache-location ./node_modules/.cache/eslint/ --cache src`
4. Check token format matches expected schema

### Performance Issues

**Issue**: Linting takes too long on large codebases

**Solutions**:
1. Enable ESLint caching: Add `"cache": true` to `.eslintrc.js`
2. Exclude unnecessary files in `.eslintignore`:
   ```
   node_modules/
   dist/
   build/
   *.min.js
   ```
3. Run linting on changed files only: Use `lint-staged` with Git hooks
4. Use faster parser options:
   ```javascript
   {
     parserOptions: {
       project: false // Disable type checking for faster linting
     }
   }
   ```

### Rule Configuration Conflicts

**Issue**: Custom rules conflict with Mies rules

**Solutions**:
1. Use rule precedence: Local rules override extended configurations
2. Disable conflicting rules explicitly:
   ```javascript
   {
     rules: {
       'some-other-plugin/conflicting-rule': 'off'
     }
   }
   ```
3. Create custom rule overrides for specific files:
   ```javascript
   {
     overrides: [{
       files: ['*.test.ts'],
       rules: {
         'tanqory-mies/no-hardcoded-colors': 'off'
       }
     }]
   }
   ```

### Auto-fix Not Working

**Issue**: `--fix` flag doesn't resolve violations automatically

**Solutions**:
1. Check if rule supports auto-fixing (not all rules do)
2. Verify file permissions allow writing
3. Run with verbose output: `eslint --fix --debug src`
4. Some violations require manual intervention for complex refactoring