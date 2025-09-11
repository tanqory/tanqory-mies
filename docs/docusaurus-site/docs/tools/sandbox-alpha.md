# Sandbox (Alpha)

**Interactive playground for rapid experimentation.**

The Tanqory Mies Sandbox provides a zero-configuration development environment for testing components, patterns, and design tokens in isolation with real-time preview, hot reloading, and shareable URLs.

> **Alpha Release**: This tool is in active development. Features and APIs may change. Use in development environments only.

## Purpose

Reduce the feedback loop between design and code. The Sandbox lets developers and designers experiment with components, test edge cases, and validate design decisions without the overhead of full application setup or build processes.

## Installation

### Local Development Server

```bash
npm install --save-dev @tanqory/mies-sandbox
# or
yarn add --dev @tanqory/mies-sandbox
# or
pnpm install -D @tanqory/mies-sandbox
```

### Global CLI Tool

```bash
npm install -g @tanqory/mies-sandbox
# Access from anywhere with `mies-sandbox` command
```

### Docker Container

```bash
docker run -p 3001:3001 -v $(pwd):/workspace tanqory/mies-sandbox:latest
```

## Setup

### Quick Start

```bash
# Start sandbox server
npx @tanqory/mies-sandbox start

# Open in browser
# http://localhost:3001
```

### Project Integration

Add to `package.json`:

```json
{
  "scripts": {
    "sandbox": "mies-sandbox start",
    "sandbox:build": "mies-sandbox build",
    "sandbox:deploy": "mies-sandbox deploy"
  }
}
```

### Configuration File

Create `mies-sandbox.config.js`:

```javascript
module.exports = {
  // Port for development server
  port: 3001,
  
  // Component entry points
  components: {
    src: './src/components',
    pattern: '**/*.{tsx,jsx}',
    exclude: ['**/*.test.*', '**/*.stories.*']
  },
  
  // Design token configuration
  tokens: {
    path: './design-tokens/build/tokens.json',
    format: 'json' // json | js | css
  },
  
  // Preview settings
  preview: {
    viewport: {
      width: 375,
      height: 667,
      breakpoints: ['mobile', 'tablet', 'desktop']
    },
    theme: 'light' // light | dark | system
  },
  
  // Hot reloading
  hotReload: true,
  
  // Sharing and collaboration
  sharing: {
    enabled: true,
    baseUrl: 'https://sandbox.mies.dev'
  }
}
```

## Usage Guidelines

- **Component isolation** — Test components independently without application context or side effects
- **Real-time editing** — Modify props, tokens, and content with immediate visual feedback
- **Cross-device testing** — Preview responsive behavior across different viewport sizes
- **Shareable experiments** — Generate URLs for specific configurations to share with team members

## Examples

### Component Testing

```tsx
// Sandbox automatically discovers components
// src/components/Button/Button.tsx

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
}

export function Button({ variant, size, disabled, children }: ButtonProps) {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// Sandbox provides interactive controls for all props
// Test all combinations: variant × size × disabled state
```

### Design Token Experimentation

```javascript
// Modify tokens in real-time
const customTokens = {
  color: {
    primary: '#FF6B6B',    // Changed from lime
    secondary: '#4ECDC4',  // Added new token
    text: '#2C3E50'
  },
  spacing: {
    xs: '2px',   // Modified from 4px
    sm: '6px',   // Modified from 8px  
    md: '10px'   // Modified from 12px
  }
}

// See changes applied instantly across all components
```

### Multi-Variant Testing

```tsx
// Test multiple component variations simultaneously
const buttonVariations = [
  { variant: 'primary', size: 'sm', children: 'Small Primary' },
  { variant: 'primary', size: 'md', children: 'Medium Primary' },
  { variant: 'primary', size: 'lg', children: 'Large Primary' },
  { variant: 'secondary', size: 'md', children: 'Secondary' },
  { variant: 'ghost', size: 'md', children: 'Ghost', disabled: true }
];

// Sandbox renders all variations in a grid layout
```

### Responsive Testing

```javascript
// Configure viewport breakpoints
const viewports = {
  mobile: { width: 375, height: 812 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1440, height: 900 }
};

// Test component behavior at each breakpoint
// Automatic detection of responsive design issues
```

## Advanced Features

### Custom Themes

```javascript
// mies-sandbox.config.js
module.exports = {
  themes: {
    light: {
      background: '#FFFFFF',
      surface: '#F8F9FA'
    },
    dark: {
      background: '#1A1A1A', 
      surface: '#2D2D2D'
    },
    highContrast: {
      background: '#000000',
      surface: '#FFFFFF'
    }
  }
}
```

### Plugin System

```javascript
// plugins/accessibility-checker.js
module.exports = {
  name: 'accessibility-checker',
  hooks: {
    onComponentRender: async (component) => {
      const violations = await axeCheck(component);
      return { violations };
    }
  }
};

// mies-sandbox.config.js
module.exports = {
  plugins: [
    './plugins/accessibility-checker.js',
    '@tanqory/mies-sandbox-plugin-figma'
  ]
}
```

### Collaboration Features

```javascript
// Share specific component configurations
const shareUrl = await sandbox.share({
  component: 'Button',
  props: { variant: 'primary', size: 'lg' },
  viewport: 'mobile',
  theme: 'dark'
});

// Generated URL: https://sandbox.mies.dev/s/abc123
// Anyone can view and modify the shared configuration
```

## Troubleshooting

### Components Not Discovered

**Issue**: Components don't appear in Sandbox component list

**Solutions**:
1. Check component file paths in configuration
2. Verify export statements use `export` (not `export default` only)
3. Ensure component files match the configured pattern
4. Restart Sandbox server after configuration changes

### Slow Performance

**Issue**: Sandbox becomes unresponsive with many components

**Solutions**:
1. Reduce the number of components loaded simultaneously
2. Use more specific `pattern` in configuration to exclude unnecessary files
3. Disable hot reloading temporarily: Set `hotReload: false`
4. Increase system memory allocation:
   ```bash
   node --max-old-space-size=4096 mies-sandbox start
   ```

### Token Changes Not Reflected

**Issue**: Design token modifications don't update component previews

**Solutions**:
1. Verify token file path in configuration
2. Check token file format matches expected structure
3. Clear browser cache and refresh
4. Restart Sandbox with `--fresh-tokens` flag:
   ```bash
   mies-sandbox start --fresh-tokens
   ```

### Sharing URLs Not Working

**Issue**: Generated share URLs return 404 or expired errors

**Solutions**:
1. Verify `sharing.baseUrl` is configured correctly
2. Check network connectivity to sharing service
3. Ensure sharing is enabled in configuration
4. Try sharing simpler configurations (fewer props, smaller components)