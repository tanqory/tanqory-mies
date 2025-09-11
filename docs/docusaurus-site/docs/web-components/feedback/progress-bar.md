# Progress Bar

Visual indicator showing completion progress of a task or process.

## Overview

Progress bars communicate the current status of ongoing operations and provide users with clear expectations about completion time. They reduce uncertainty during waiting periods.

**When to use:**
- File uploads or downloads
- Form submissions or data processing
- Loading content or assets
- Multi-step processes

**When not to use:**
- Indeterminate loading (use Spinner instead)
- Very short operations (under 1 second)
- Static percentage displays

## Usage Guidelines

- **Progress indication**: Show specific completion percentage when known
- **Smooth animation**: Use consistent timing for progress updates
- **Clear labeling**: Include descriptive text explaining the operation
- **Appropriate sizing**: Match bar width to available space

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `number` | `0` | Current progress value (0-100) |
| `size` | `small` \| `medium` \| `large` | `medium` | Bar height and styling |
| `variant` | `default` \| `success` \| `warning` \| `error` | `default` | Visual theme |
| `label` | `string` | - | Optional progress description |

## Accessibility

- **Screen readers**: Progress value announced as percentage
- **ARIA attributes**: Uses progressbar role with value/max attributes
- **Label association**: Connected to descriptive text when provided
- **Live regions**: Updates announced during progress changes

## Examples

### Basic Progress
```jsx
<ProgressBar value={45} label="Uploading file..." />
```

### With Status
```jsx
<ProgressBar 
  value={100} 
  variant="success" 
  label="Upload complete" 
/>
```