# Color Picker

Interactive control for selecting colors with visual preview and input options.

## Overview

Color pickers allow users to choose colors through various input methods including swatches, spectrum, or direct value entry. They provide immediate visual feedback and support different color formats.

**When to use:**
- Theme customization interfaces
- Design or creative applications
- Brand color selection
- Styling configuration tools

**When not to use:**
- Limited color options (use Color Swatches instead)
- Simple present/theme selection
- Form fields requiring text input

## Usage Guidelines

- **Visual preview**: Show selected color prominently
- **Multiple input methods**: Support swatch, spectrum, and text input
- **Format flexibility**: Allow different color formats (hex, RGB, HSL)
- **Recent colors**: Provide quick access to recently used colors

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | `#000000` | Current color value |
| `format` | `hex` \| `rgb` \| `hsl` | `hex` | Color format for value |
| `swatches` | `string[]` | - | Predefined color options |
| `showInput` | `boolean` | `true` | Shows text input field |

## Accessibility

- **Keyboard navigation**: All controls accessible via keyboard
- **Color contrast**: Ensures sufficient contrast for visibility
- **Screen readers**: Color values announced clearly
- **Focus management**: Logical focus flow through picker components

## Examples

### Basic Color Picker
```jsx
<ColorPicker 
  value="#3b82f6" 
  onChange={setColor}
/>
```

### With Swatches
```jsx
<ColorPicker 
  value="#ef4444"
  swatches={['#ef4444', '#f97316', '#eab308', '#22c55e']}
  onChange={setColor}
/>
```