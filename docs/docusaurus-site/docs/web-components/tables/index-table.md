# Index Table

Specialized table for resource management with enhanced selection and actions.

## Overview

Index tables provide advanced functionality for managing collections of resources with bulk operations, enhanced selection modes, and contextual actions. They're optimized for administrative workflows.

**When to use:**
- Resource management interfaces
- Admin panels and dashboards
- Content management systems
- Bulk operation workflows

**When not to use:**
- Simple data display
- Read-only information tables
- Small datasets

## Usage Guidelines

- **Bulk operations**: Provide efficient multi-item actions
- **Visual hierarchy**: Emphasize important information clearly
- **Action accessibility**: Make actions discoverable and accessible
- **Performance optimization**: Handle large datasets efficiently

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `resources` | `Array<Resource>` | `[]` | Resource items array |
| `selectedItems` | `Array<string>` | `[]` | Selected resource IDs |
| `bulkActions` | `Array<Action>` | `[]` | Available bulk actions |
| `onSelectionChange` | `function` | - | Selection change handler |

## Accessibility

- **Selection management**: Clear indication of selected items
- **Bulk action access**: Actions accessible via keyboard
- **Screen readers**: Selection counts and states announced
- **Focus management**: Logical focus flow through interactive elements

## Examples

### Resource Management
```jsx
<IndexTable 
  resources={customerData}
  selectedItems={selectedCustomers}
  onSelectionChange={setSelectedCustomers}
  bulkActions={[
    { label: 'Export', action: handleExport },
    { label: 'Delete', action: handleBulkDelete }
  ]}
/>
```

### Enhanced Features
```jsx
<IndexTable 
  resources={orderData}
  selectedItems={selectedOrders}
  onSelectionChange={setSelectedOrders}
  bulkActions={orderActions}
  filters={orderFilters}
  sortable
  pagination
/>
```