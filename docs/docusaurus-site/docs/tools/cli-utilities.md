# CLI Utilities

**Command-line tools for development workflow optimization.**

The Tanqory Mies CLI provides command-line utilities for scaffolding, validation, bundle analysis, and development workflow automation, eliminating repetitive tasks and ensuring consistent project structure.

## Purpose

Repetitive development tasks slow down productivity and introduce inconsistencies. The CLI utilities automate common workflows, enforce project standards, and provide instant feedback on performance, accessibility, and design system compliance.

## Installation

### Global Installation

```bash
npm install -g @tanqory/mies-cli
# or
yarn global add @tanqory/mies-cli
# or
pnpm install -g @tanqory/mies-cli
```

### Project Installation

```bash
npm install --save-dev @tanqory/mies-cli
# or
yarn add --dev @tanqory/mies-cli
# or
pnpm install -D @tanqory/mies-cli
```

### Verify Installation

```bash
mies --version
mies --help
```

## Usage Guidelines

- **Automate repetitive tasks** — Use CLI for component generation, validation, and project setup
- **Integrate with CI/CD** — Add validation commands to build pipelines for automated quality checks
- **Customize for your workflow** — Configure commands through project config files for team consistency
- **Monitor performance impact** — Use bundle analysis tools to track design system overhead and optimization opportunities

## Examples

### Component Scaffolding

```bash
# Generate new component with full setup
mies generate component Button --variant primary,secondary,ghost

# Creates:
# src/components/Button/
# ├── Button.tsx
# ├── Button.test.tsx
# ├── Button.stories.tsx
# ├── Button.module.css
# └── index.ts
```

### Project Initialization

```bash
# Initialize new project with Mies setup
mies init my-commerce-app --template nextjs --platform web

# Add Mies to existing project
mies init --existing --platform mobile
```

### Validation Commands

```bash
# Validate design system compliance
mies validate --components src/components --tokens

# Check accessibility
mies validate --a11y --fix

# Bundle analysis
mies analyze --bundle --report
```

### Token Management

```bash
# Generate design tokens from source
mies tokens build --input tokens.json --output dist/

# Validate token usage across codebase
mies tokens validate --strict

# Generate documentation
mies tokens docs --format html,json
```

## Command Reference

### `mies generate`

Create new components, pages, or project structures.

```bash
# Component generation
mies generate component <name> [options]

# Options:
--variant <variants>     # Component variants to generate
--platform web|mobile    # Target platform
--template <template>    # Base template to use
--directory <path>       # Output directory
--typescript            # Generate TypeScript files
--tests                 # Include test files
--stories              # Include Storybook stories
```

### `mies validate`

Perform design system and quality validation.

```bash
# Validation commands
mies validate [options]

# Options:
--components <path>     # Component directory to validate
--tokens               # Validate design token usage
--a11y                 # Accessibility validation
--performance          # Performance checks
--fix                  # Auto-fix violations where possible
--format json|table    # Output format
--ci                   # CI-friendly output (exit codes)
```

### `mies analyze`

Analyze bundle size, performance, and usage patterns.

```bash
# Analysis commands
mies analyze [options]

# Options:
--bundle               # Bundle size analysis
--usage               # Component usage statistics
--performance         # Performance metrics
--report              # Generate detailed report
--output <path>       # Report output directory
--format html|json    # Report format
```

### `mies tokens`

Design token management and utilities.

```bash
# Token commands
mies tokens <command> [options]

# Commands:
build                 # Build tokens from source
validate             # Validate token usage
docs                 # Generate documentation
sync                 # Sync with external sources

# Options:
--input <path>       # Source token file
--output <path>      # Output directory  
--format <formats>   # Output formats (css,js,json,scss)
--platform <name>    # Target platform
--strict            # Strict validation mode
```

## Configuration

### Project Configuration

Create `mies.config.js`:

```javascript
module.exports = {
  // Project structure
  structure: {
    components: 'src/components',
    tokens: 'design-tokens',
    tests: '__tests__',
    stories: 'stories'
  },
  
  // Component generation
  generate: {
    typescript: true,
    tests: true,
    stories: true,
    platform: 'web',
    template: 'functional'
  },
  
  // Validation rules
  validation: {
    tokens: {
      strict: true,
      allowHardcoded: false,
      requiredProps: ['variant', 'size']
    },
    accessibility: {
      level: 'AA',
      autofix: true
    },
    performance: {
      bundleThreshold: '50kb',
      componentThreshold: '5kb'
    }
  },
  
  // Token configuration
  tokens: {
    source: 'design-tokens/tokens.json',
    output: 'dist/tokens',
    formats: ['css', 'js', 'json'],
    platforms: {
      web: {
        transforms: ['size/rem'],
        prefix: 'mies'
      },
      mobile: {
        transforms: ['size/dp'],
        prefix: 'Mies'
      }
    }
  },
  
  // Analysis settings
  analysis: {
    bundle: {
      threshold: 100,
      showDetails: true
    },
    usage: {
      includeTests: false,
      includeStories: false
    }
  }
}
```

### Environment Variables

```bash
# Configuration through environment variables
export MIES_CONFIG_PATH=./config/mies.config.js
export MIES_TOKEN_SOURCE=https://api.figma.com/tokens
export MIES_OUTPUT_FORMAT=typescript
export MIES_PLATFORM=web
export MIES_STRICT_MODE=true
```

### Package.json Integration

```json
{
  "scripts": {
    "generate": "mies generate component",
    "validate": "mies validate --components src --tokens --a11y",
    "analyze": "mies analyze --bundle --report",
    "tokens:build": "mies tokens build",
    "tokens:validate": "mies tokens validate --strict",
    "mies:init": "mies init --existing"
  }
}
```

## Workflow Integration

### Pre-commit Hooks

```bash
# Install husky for Git hooks
npm install --save-dev husky lint-staged

# Configure in package.json
{
  "lint-staged": {
    "src/**/*.{ts,tsx}": [
      "mies validate --components --fix",
      "git add"
    ],
    "design-tokens/**": [
      "mies tokens validate",
      "mies tokens build"
    ]
  }
}
```

### CI/CD Pipeline

```yaml
# .github/workflows/mies-validation.yml
name: Mies Validation
on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Validate components
        run: mies validate --components src --tokens --ci
        
      - name: Analyze bundle
        run: mies analyze --bundle --ci
        
      - name: Generate report
        run: mies analyze --report --format json
        
      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: mies-analysis
          path: mies-report.json
```

## Troubleshooting

### Command Not Found

**Issue**: `mies` command is not recognized

**Solutions**:
1. Verify installation: `npm list -g @tanqory/mies-cli`
2. Check PATH includes npm global bin directory
3. Reinstall globally: `npm install -g @tanqory/mies-cli --force`
4. Use npx as alternative: `npx @tanqory/mies-cli@latest <command>`

### Generation Failures

**Issue**: Component generation fails with template errors

**Solutions**:
1. Check project structure matches expected layout
2. Verify write permissions in target directory
3. Update CLI to latest version: `npm update -g @tanqory/mies-cli`
4. Use absolute paths in configuration
5. Clear CLI cache: `mies cache clear`

### Validation False Positives

**Issue**: Validation reports errors for correct implementations

**Solutions**:
1. Update design tokens: `mies tokens sync`
2. Check configuration file for correct paths
3. Use `--debug` flag for detailed error information
4. Exclude problematic files: Add to `.miesignore` file

### Performance Issues

**Issue**: CLI commands run slowly on large projects

**Solutions**:
1. Exclude unnecessary directories in configuration:
   ```javascript
   {
     validation: {
       exclude: ['node_modules/**', 'dist/**', '*.min.js']
     }
   }
   ```
2. Use incremental validation: `mies validate --changed`
3. Enable caching: `mies config set cache.enabled true`
4. Run commands in parallel where possible