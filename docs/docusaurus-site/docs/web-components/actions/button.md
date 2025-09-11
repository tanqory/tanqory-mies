# Button

Primary interactive element for user actions and form submissions.

## Overview

Buttons trigger operations when clicked or tapped. They communicate available actions to users and provide clear interaction targets across all platforms.

**When to use:**
- Primary actions like "Save", "Submit", "Create"
- Secondary actions like "Cancel", "Edit", "Delete" 
- Navigation actions like "Next", "Back", "Learn more"

**When not to use:**
- Navigation to other pages (use Link instead)
- Toggling states (use Toggle or Checkbox)
- Multiple selections (use Checkbox group)

## Usage Guidelines

**Button hierarchy:**
- **Primary**: Most important action on the page
- **Secondary**: Supporting actions 
- **Tertiary**: Least prominent actions

**Button placement:**
- Primary button on the right in button groups
- Consistent placement across similar interfaces
- Adequate spacing between multiple buttons

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `primary` \| `secondary` \| `tertiary` | `secondary` | Visual style hierarchy |
| `size` | `small` \| `medium` \| `large` | `medium` | Button dimensions |
| `disabled` | `boolean` | `false` | Prevents interaction |
| `loading` | `boolean` | `false` | Shows loading state |
| `fullWidth` | `boolean` | `false` | Expands to container width |
| `icon` | `ReactNode` | - | Optional icon element |
| `onClick` | `function` | - | Click event handler |

## Accessibility

- **Keyboard navigation**: Focusable with Tab, activated with Space/Enter
- **Screen readers**: Clear button text describes the action
- **Focus indication**: Visible focus outline for keyboard users
- **Loading state**: Announced to assistive technology
- **Disabled state**: Not focusable, announced as unavailable

## Examples

### Primary Action
```jsx
<Button variant="primary" onClick={handleSave}>
  Save Changes
</Button>
```

### With Icon
```jsx
<Button variant="secondary" icon={<PlusIcon />}>
  Add Item
</Button>
```

### Loading State
```jsx
<Button variant="primary" loading>
  Processing...
</Button>
```

### Button Group
```jsx
<ButtonGroup>
  <Button variant="tertiary">Cancel</Button>
  <Button variant="primary">Confirm</Button>
</ButtonGroup>
```