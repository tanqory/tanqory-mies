# Migration Guide

Step-by-step guide for migrating existing projects to Tanqory Mies design system.

## Migration Strategy

### Assessment Phase
Evaluate your current system and plan the migration approach.

**Audit Current Components**  
Catalog existing components and identify Mies equivalents.

**Identify Dependencies**  
Map out component dependencies and usage patterns.

**Plan Migration Order**  
Start with foundational components, then build up complexity.

**Set Success Metrics**  
Define measurable goals for the migration process.

### Gradual Migration
Migrate incrementally to minimize disruption and risk.

**Parallel Systems**  
Run old and new systems side-by-side during transition.

**Feature Flagging**  
Use feature flags to control rollout of new components.

**Team Coordination**  
Coordinate migration across multiple development teams.

**User Testing**  
Validate migrated components with real users.

## Pre-Migration Preparation

### Environment Setup
Prepare your development environment for Mies components.

**Package Installation**
```bash
npm install @tanqory/mies-core-web @tanqory/mies-tailwind @tanqory/mies-tokens
```

**Build Configuration**
```javascript
// tailwind.config.js
module.exports = require('@tanqory/mies-tailwind');
```

**CSS Integration**
```css
/* Import Mies tokens */
@import '@tanqory/mies-tokens/tokens.css';
```

### Code Analysis
Analyze existing code to identify migration opportunities.

**Component Inventory**
```bash
# Find all component files
find src -name "*.jsx" -o -name "*.tsx" | grep -i component

# Analyze component complexity
wc -l src/components/**/*.{jsx,tsx}
```

**Style Analysis**
```bash
# Find CSS files that need updating
find src -name "*.css" -o -name "*.scss" -o -name "*.less"

# Look for style patterns that violate Mies constraints
grep -r "border-radius\|border-radius\|box-shadow" src/
```

## Component Migration

### Button Components
Replace existing buttons with Mies Button component.

**Before (Example)**
```jsx
// Old button component
<button className="btn btn-primary rounded-lg shadow-md">
  Submit
</button>
```

**After**
```jsx
// Mies button component
import { Button } from '@tanqory/mies-core-web';

<Button variant="primary">
  Submit
</Button>
```

### Form Components
Migrate form inputs to Mies form components.

**Before**
```jsx
<div className="form-group">
  <label className="form-label">Email</label>
  <input 
    type="email" 
    className="form-input rounded border-gray-300"
    placeholder="Enter email"
  />
</div>
```

**After**
```jsx
import { TextField } from '@tanqory/mies-core-web';

<TextField
  label="Email"
  type="email"
  placeholder="Enter email"
/>
```

### Layout Components
Replace custom layouts with Mies layout components.

**Before**
```jsx
<div className="flex flex-col space-y-4">
  <div>Header</div>
  <div>Content</div>
  <div>Footer</div>
</div>
```

**After**
```jsx
import { Stack } from '@tanqory/mies-core-web';

<Stack spacing="base">
  <div>Header</div>
  <div>Content</div>
  <div>Footer</div>
</Stack>
```

## Style Migration

### Color System Migration
Replace custom colors with Mies three-color system.

**Color Mapping**
```css
/* Before - Custom colors */
.primary-color { color: #007bff; }
.success-color { color: #28a745; }
.danger-color { color: #dc3545; }

/* After - Mies colors only */
.primary-color { color: var(--mies-color-brand); }
.text-color { color: var(--mies-color-black); }
.background-color { color: var(--mies-color-white); }
```

**Remove Decorative Styles**
```css
/* Remove these styles - violate Mies constraints */
.rounded { border-radius: 8px; } /* ❌ */
.shadow { box-shadow: 0 2px 4px rgba(0,0,0,0.1); } /* ❌ */
.gradient { background: linear-gradient(to right, #ff0000, #00ff00); } /* ❌ */

/* Use these instead */
.bordered { border: 1px solid var(--mies-color-black); } /* ✅ */
.flat { background: var(--mies-color-white); } /* ✅ */
```

### Spacing Migration
Replace custom spacing with Mies spacing tokens.

**Spacing Conversion**
```css
/* Before - Custom spacing */
.margin-small { margin: 10px; }
.padding-medium { padding: 20px; }
.gap-large { gap: 30px; }

/* After - Mies spacing tokens */
.margin-small { margin: var(--mies-space-sm); } /* 8px */
.padding-medium { padding: var(--mies-space-lg); } /* 24px */
.gap-large { gap: var(--mies-space-xl); } /* 32px */
```

### Typography Migration
Migrate to Mies typography system.

**Font Size Mapping**
```css
/* Before - Custom font sizes */
.text-xs { font-size: 11px; }
.text-sm { font-size: 13px; }
.text-base { font-size: 15px; }
.text-lg { font-size: 17px; }

/* After - Mies font sizes */
.text-sm { font-size: var(--mies-font-size-sm); } /* 14px */
.text-base { font-size: var(--mies-font-size-base); } /* 16px */
.text-lg { font-size: var(--mies-font-size-lg); } /* 18px */
.text-xl { font-size: var(--mies-font-size-xl); } /* 24px */
```

## Testing Migration

### Component Testing
Ensure migrated components maintain functionality.

**Test Component Props**
```jsx
import { render, screen } from '@testing-library/react';
import { Button } from '@tanqory/mies-core-web';

test('migrated button renders correctly', () => {
  render(<Button variant="primary">Click me</Button>);
  
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('Click me');
  expect(button).toHaveClass('mies-button-primary');
});
```

**Visual Regression Testing**
```javascript
// Use visual testing tools to catch styling changes
import { getStorybookUI } from '@storybook/react-native';

// Capture screenshots of before/after components
const compareComponents = async () => {
  await captureScreenshot('old-button');
  await migrateComponent();
  await captureScreenshot('new-button');
  await compareScreenshots();
};
```

### Accessibility Testing
Verify accessibility improvements after migration.

```javascript
import { axe } from '@axe-core/react';

test('migrated component maintains accessibility', async () => {
  const { container } = render(<MigratedComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Performance Validation

### Bundle Size Analysis
Monitor bundle size changes during migration.

```bash
# Analyze bundle size before migration
npm run build
npx webpack-bundle-analyzer build/static/js/*.js

# Compare after migration
npm run build:mies
npx webpack-bundle-analyzer build/static/js/*.js
```

### Runtime Performance
Measure performance improvements from migration.

```javascript
// Performance monitoring
import { performance } from 'perf_hooks';

const measureComponentRender = () => {
  const start = performance.now();
  render(<MigratedComponent />);
  const end = performance.now();
  
  console.log(`Render time: ${end - start}ms`);
};
```

## Common Migration Issues

### Breaking Changes
Handle common issues that arise during migration.

**Props Changes**
```jsx
// Old component with custom props
<OldButton color="blue" size="large" rounded={true}>
  Submit
</OldButton>

// New component - map to Mies variants
<Button variant="primary" size="lg">
  Submit
</Button>
```

**Event Handlers**
```jsx
// Ensure event handlers still work
<Button onClick={handleClick} onFocus={handleFocus}>
  Click me
</Button>
```

**CSS Class Conflicts**
```css
/* Avoid CSS conflicts with existing styles */
.mies-button {
  /* Mies styles take precedence */
  all: unset;
  /* Apply Mies styling */
}
```

## Migration Checklist

### Pre-Migration
- [ ] Component inventory completed
- [ ] Migration plan documented
- [ ] Development environment configured
- [ ] Team training completed

### During Migration
- [ ] Components migrated incrementally
- [ ] Tests updated and passing
- [ ] Visual regression tests passing
- [ ] Accessibility tests passing
- [ ] Performance benchmarks met

### Post-Migration
- [ ] Old components removed
- [ ] Documentation updated
- [ ] Team feedback collected
- [ ] Success metrics achieved
- [ ] Migration lessons documented

## Rollback Strategy

### Safe Rollback
Plan for rolling back changes if issues arise.

**Version Pinning**
```json
{
  "dependencies": {
    "@tanqory/mies-core-web": "1.2.3",
    "old-design-system": "2.1.0"
  }
}
```

**Feature Flags**
```javascript
// Use feature flags for gradual rollout
const useMiesComponents = useFeatureFlag('mies-components');

return useMiesComponents ? 
  <MiesButton /> : 
  <OldButton />;
```

## Getting Help

### Support Resources
- **Documentation**: Comprehensive migration examples
- **GitHub Issues**: Report migration problems
- **Community Discord**: Get help from other developers
- **Office Hours**: Weekly migration support sessions

### Professional Services
- **Migration Assessment**: Professional evaluation of your codebase
- **Custom Training**: Tailored training for your team
- **Implementation Support**: Hands-on migration assistance