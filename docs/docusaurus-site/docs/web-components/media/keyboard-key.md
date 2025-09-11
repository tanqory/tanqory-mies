# Keyboard Key

Visual representation of keyboard keys for documentation and instructions.

## Overview

Keyboard key components display keyboard shortcuts, key combinations, or individual keys in a standardized visual format. They help users understand keyboard interactions and shortcuts.

**When to use:**
- Keyboard shortcut documentation
- Tutorial or help content
- Application command references
- Accessibility instruction guides

**When not to use:**
- Decorative button styling
- Interactive form controls
- Non-keyboard related content

## Usage Guidelines

- **Accurate representation**: Match actual keyboard key appearance
- **Clear labeling**: Use standard key names and symbols
- **Logical grouping**: Group related key combinations together
- **Consistent styling**: Maintain uniform appearance across all keys

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `children` | `ReactNode` | - | Key content or symbol |
| `size` | `small` \| `medium` \| `large` | `medium` | Key visual size |
| `variant` | `default` \| `modifier` | `default` | Key type styling |
| `pressed` | `boolean` | `false` | Shows pressed state |

## Accessibility

- **Screen readers**: Key names clearly announced
- **High contrast**: Sufficient contrast for visibility
- **Text alternatives**: Descriptive text for symbol keys
- **Context clarity**: Purpose and function clearly communicated

## Examples

### Single Key
```jsx
<KeyboardKey>Enter</KeyboardKey>
```

### Key Combination
```jsx
<div>
  <KeyboardKey variant="modifier">Cmd</KeyboardKey>
  <span>+</span>
  <KeyboardKey>S</KeyboardKey>
</div>
```