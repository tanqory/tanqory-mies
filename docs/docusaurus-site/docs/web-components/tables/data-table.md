# Data Table

Structured display of tabular data with sorting, filtering, and selection capabilities.

## Overview

Data tables present structured information in rows and columns with interactive features like sorting, filtering, pagination, and bulk actions. They handle large datasets efficiently while maintaining usability.

**When to use:**
- Large datasets requiring organization
- Comparative data analysis
- Administrative interfaces
- Financial or statistical data

**When not to use:**
- Simple lists (use List instead)
- Card-based layouts
- Small amounts of data

## Usage Guidelines

- **Clear column headers**: Use descriptive, scannable headers
- **Consistent data formatting**: Apply uniform formatting within columns
- **Loading states**: Handle data loading gracefully
- **Responsive design**: Adapt to different screen sizes appropriately

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | `Array<Object>` | `[]` | Table row data |
| `columns` | `Array<ColumnDef>` | `[]` | Column definitions |
| `sortable` | `boolean` | `false` | Enables column sorting |
| `selectable` | `boolean` | `false` | Allows row selection |

## Accessibility

- **Keyboard navigation**: Arrow keys navigate cells, Tab exits table
- **Screen readers**: Table structure and data announced clearly
- **Sort indicators**: Sort direction communicated to assistive technology
- **Selection state**: Row selection state properly announced

## Examples

### Basic Data Table
```jsx
<DataTable 
  data={userData}
  columns={[
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' }
  ]}
  sortable
/>
```

### Interactive Table
```jsx
<DataTable 
  data={productData}
  columns={productColumns}
  sortable
  selectable
  onSelectionChange={handleSelection}
  bulkActions={bulkActions}
/>
```