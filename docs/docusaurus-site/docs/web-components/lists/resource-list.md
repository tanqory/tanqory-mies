# Resource List

Structured list for displaying items with metadata, actions, and bulk operations.

## Overview

Resource lists present collections of items with rich metadata, thumbnails, and actions. They support bulk operations, filtering, and sorting, making them ideal for management interfaces and content libraries.

**When to use:**
- Content management interfaces
- File or document libraries
- Product or inventory lists
- User or contact management

**When not to use:**
- Simple text lists (use List instead)
- Tabular data with many columns (use Data Table instead)
- Single-item displays

## Usage Guidelines

- **Consistent item structure**: Maintain uniform layout across all items
- **Clear actions**: Make available actions obvious and accessible
- **Bulk operations**: Provide efficient multi-item selection
- **Visual hierarchy**: Emphasize important information appropriately

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `Array<ResourceItem>` | `[]` | Resource items to display |
| `selectable` | `boolean` | `false` | Enables item selection |
| `sortable` | `boolean` | `false` | Allows column sorting |
| `onAction` | `function` | - | Item action handler |

## Accessibility

- **Keyboard navigation**: Full keyboard support for all interactions
- **Screen readers**: Item details and actions properly announced
- **Bulk selection**: Clear indication of selected items
- **Action communication**: Available actions clearly indicated

## Examples

### File List
```jsx
<ResourceList 
  items={fileItems}
  selectable
  onAction={handleFileAction}
  bulkActions={[
    { label: "Download", action: "download" },
    { label: "Delete", action: "delete" }
  ]}
/>
```

### Product Catalog
```jsx
<ResourceList 
  items={products}
  sortable
  onAction={handleProductAction}
  filterBy="category"
/>
```