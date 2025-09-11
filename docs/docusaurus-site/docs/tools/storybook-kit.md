# Storybook Kit

**Pre-configured documentation and testing environment.**

The Tanqory Mies Storybook Kit provides a complete Storybook setup with Mies components, design tokens, automated visual regression testing, and accessibility validation built-in.

## Purpose

Documentation and testing are essential but time-consuming to set up correctly. The Storybook Kit eliminates configuration overhead by providing a production-ready Storybook environment optimized for Mies design system development and quality assurance.

## Installation

### New Project Setup

```bash
npx create-storybook-mies my-design-system
cd my-design-system
npm run storybook
```

### Add to Existing Project

```bash
npm install --save-dev @tanqory/mies-storybook-kit
# or
yarn add --dev @tanqory/mies-storybook-kit
# or
pnpm install -D @tanqory/mies-storybook-kit
```

### Initialize Configuration

```bash
npx mies-storybook init
```

This creates:
- `.storybook/` configuration directory
- `stories/` example stories
- `package.json` scripts
- Visual regression testing setup

## Setup

### Basic Configuration

The kit provides sensible defaults. Basic `.storybook/main.js`:

```javascript
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls', 
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@tanqory/mies-storybook-addon'
  ],
  framework: '@storybook/react',
  features: {
    buildStoriesJson: true
  }
};
```

### Design Token Integration

`.storybook/preview.js`:

```javascript
import { miesTheme } from '@tanqory/mies-storybook-kit';

export const parameters = {
  docs: {
    theme: miesTheme,
  },
  backgrounds: {
    default: 'white',
    values: [
      { name: 'white', value: '#FFFFFF' },
      { name: 'black', value: '#000000' },
      { name: 'lime', value: '#E1FF00' }
    ]
  },
  viewport: {
    viewports: {
      mobile: { name: 'Mobile', styles: { width: '375px', height: '812px' } },
      tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
      desktop: { name: 'Desktop', styles: { width: '1440px', height: '900px' } }
    }
  }
};
```

## Usage Guidelines

- **Component documentation** — Write stories that serve as both documentation and test cases
- **Design token showcase** — Use the tokens addon to display and test all design tokens
- **Visual regression testing** — Capture screenshots automatically for each story variant
- **Accessibility validation** — Built-in a11y addon catches accessibility issues in development

## Examples

### Basic Component Story

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Primary interactive element for user actions following Mies design principles.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'ghost']
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg']
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Buy Now'
  }
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants demonstrate the systematic visual hierarchy.'
      }
    }
  }
};
```

### Design Token Story

```tsx
// DesignTokens.stories.tsx
import type { Meta } from '@storybook/react';
import { TokenGrid } from '@tanqory/mies-storybook-kit';

const meta: Meta = {
  title: 'Design System/Tokens',
  parameters: {
    docs: {
      page: () => (
        <div>
          <h1>Design Tokens</h1>
          <p>The systematic constraints that define Mies visual language.</p>
          
          <h2>Colors</h2>
          <TokenGrid tokens="color" />
          
          <h2>Spacing</h2>
          <TokenGrid tokens="spacing" />
          
          <h2>Typography</h2>
          <TokenGrid tokens="typography" />
        </div>
      )
    }
  }
};

export default meta;
export const Overview = {};
```

### Responsive Component Testing

```tsx
// Card.stories.tsx
export const ResponsiveCard: Story = {
  args: {
    title: 'Product Title',
    description: 'Product description text that may wrap across multiple lines on smaller screens.',
    price: '$99.99'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile'
    },
    chromatic: {
      viewports: [375, 768, 1440]
    }
  }
};
```

## Configuration Options

### Visual Regression Testing

```javascript
// .storybook/main.js
module.exports = {
  addons: [
    {
      name: '@storybook/addon-storysource',
      options: {
        loaderOptions: {
          injectStoryParameters: false
        }
      }
    }
  ]
};

// chromatic.config.json
{
  "projectToken": "your-chromatic-token",
  "buildScriptName": "build-storybook",
  "exitZeroOnChanges": true,
  "ignoreLastBuildOnBranch": "main"
}
```

### Custom Theme

```javascript
// .storybook/mies-theme.js
import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Mies Design System',
  brandUrl: 'https://mies.tanqory.com',
  
  // Colors following Mies constraints
  colorPrimary: '#E1FF00',
  colorSecondary: '#000000',
  
  // Typography
  fontBase: '-apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: 'SF Mono, Monaco, monospace',
  
  // UI colors
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appBorderColor: '#000000',
  
  // Toolbar
  barTextColor: '#000000',
  barSelectedColor: '#E1FF00',
  barBg: '#FFFFFF'
});
```

### Automated Testing

```json
// package.json
{
  "scripts": {
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook",
    "test-storybook": "test-storybook",
    "chromatic": "chromatic --exit-zero-on-changes"
  }
}
```

## Troubleshooting

### Stories Not Loading

**Issue**: Components don't appear in Storybook sidebar

**Solutions**:
1. Check story file naming matches pattern in `.storybook/main.js`
2. Verify default export exists in story files
3. Ensure story files are in the correct directory structure
4. Restart Storybook server after configuration changes

### Design Tokens Not Displaying

**Issue**: Token addon shows empty or incorrect values

**Solutions**:
1. Verify `@tanqory/mies-tokens` is installed and up to date
2. Check token file path in Storybook configuration  
3. Ensure token file format matches expected JSON schema
4. Clear Storybook cache: `rm -rf node_modules/.cache/storybook`

### Visual Tests Failing

**Issue**: Chromatic visual tests show unexpected differences

**Solutions**:
1. Review changes in Chromatic UI to accept intended updates
2. Check for system font differences across environments
3. Ensure consistent browser and viewport settings
4. Use `chromatic.config.json` to ignore non-essential changes:
   ```json
   {
     "ignoreLastBuildOnBranch": "main",
     "threshold": 0.2
   }
   ```

### Performance Issues

**Issue**: Storybook loads slowly or becomes unresponsive

**Solutions**:
1. Reduce the number of stories loaded at once
2. Use lazy loading for heavy components:
   ```javascript
   const HeavyComponent = lazy(() => import('./HeavyComponent'));
   ```
3. Optimize addon configuration by disabling unused addons
4. Use Storybook's webpack optimization features:
   ```javascript
   // .storybook/main.js
   module.exports = {
     webpackFinal: async (config) => {
       config.optimization.splitChunks = {
         chunks: 'all'
       };
       return config;
     }
   };
   ```