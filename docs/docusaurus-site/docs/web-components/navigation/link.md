# Link

Navigation element for connecting to other pages or sections.

## Overview

Links provide navigation between pages, sections, or external resources. They include proper accessibility attributes, state management, and support various interaction patterns.

**When to use:**
- Page or section navigation
- External resource references
- Download or file links
- Email or phone contact links

**When not to use:**
- Action triggers (use Button instead)
- Tab switching (use Tabs instead)
- Menu selections (use Menu Item instead)

## Usage Guidelines

- **Clear destinations**: Make link purposes obvious from text
- **Consistent styling**: Distinguish links from regular text
- **External indicators**: Show when links open externally
- **Keyboard accessibility**: Ensure proper focus and activation

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | - | Link destination URL |
| `external` | `boolean` | `false` | Opens in new tab/window |
| `disabled` | `boolean` | `false` | Prevents link activation |
| `variant` | `default` \| `subtle` \| `strong` | `default` | Link visual style |

## Accessibility

- **Keyboard navigation**: Focusable and activatable with Enter
- **Screen readers**: Purpose and destination clearly announced
- **External links**: New window/tab opening announced
- **Focus indication**: Visible focus outline provided

## Examples

### Basic Link
```jsx
<Link href="/documentation">
  View Documentation
</Link>
```

### External Link
```jsx
<Link href="https://example.com" external>
  Visit Example.com
</Link>
```