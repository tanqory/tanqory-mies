# Modal

Centered overlay dialog for important content or actions requiring user attention.

## Overview

Modals display focused content above the main interface, requiring user interaction before proceeding. They handle critical workflows, confirmations, and detailed information display.

**When to use:**
- Critical confirmations or warnings
- Complex forms or multi-step processes
- Detailed information display
- User decision points

**When not to use:**
- Non-critical information
- Simple notifications (use Toast instead)
- Navigation purposes

## Usage Guidelines

- **Purpose clarity**: Make modal purpose immediately clear
- **Action hierarchy**: Emphasize primary actions appropriately
- **Content focus**: Keep content concise and scannable
- **Easy dismissal**: Provide obvious close mechanisms

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls modal visibility |
| `title` | `string` | - | Modal header title |
| `onClose` | `function` | - | Close handler function |
| `size` | `small` \| `medium` \| `large` \| `fullscreen` | `medium` | Modal size variant |

## Accessibility

- **Focus management**: Traps focus within modal when open
- **Keyboard navigation**: Escape closes, Tab cycles through elements
- **Screen readers**: Modal state and content announced
- **ARIA attributes**: Uses dialog role with proper labeling

## Examples

### Confirmation Modal
```jsx
<Modal 
  open={showConfirm}
  title="Delete Item"
  onClose={() => setShowConfirm(false)}
>
  <p>Are you sure you want to delete this item?</p>
  <ButtonGroup>
    <Button variant="tertiary" onClick={() => setShowConfirm(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleDelete}>
      Delete
    </Button>
  </ButtonGroup>
</Modal>
```

### Form Modal
```jsx
<Modal 
  open={showForm}
  title="Create New Project"
  size="large"
  onClose={closeForm}
>
  <ProjectForm onSubmit={handleSubmit} />
</Modal>
```