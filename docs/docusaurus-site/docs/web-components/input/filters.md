# Filters

Interface for applying multiple filter criteria to data sets.

## Overview

Filter components allow users to narrow down large data sets through multiple criteria selection. They provide clear visual indication of active filters and easy removal mechanisms.

**When to use:**
- Data table filtering
- Search result refinement
- Product catalog browsing
- Content discovery interfaces

**When not to use:**
- Simple search functionality
- Binary on/off controls
- Single criterion selection

## Usage Guidelines

- **Clear filter labels**: Use descriptive names for filter categories
- **Active filter indication**: Highlight applied filters prominently
- **Easy removal**: Provide clear ways to remove individual or all filters
- **Filter persistence**: Maintain filter state during navigation

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `filters` | `Array<FilterGroup>` | `[]` | Available filter categories |
| `activeFilters` | `object` | `{}` | Currently applied filters |
| `onFilterChange` | `function` | - | Filter change handler |
| `showClearAll` | `boolean` | `true` | Shows clear all button |

## Accessibility

- **Keyboard navigation**: All filter controls accessible via keyboard
- **Screen readers**: Filter states and counts announced
- **Focus indication**: Clear focus states for all interactive elements
- **Group labeling**: Proper labeling for filter categories

## Examples

### Product Filters
```jsx
<Filters 
  filters={[
    { label: "Category", options: ["Electronics", "Clothing"] },
    { label: "Price", type: "range", min: 0, max: 1000 }
  ]}
  activeFilters={{ category: ["Electronics"], price: [0, 500] }}
  onFilterChange={handleFilterChange}
/>
```

### Search Filters
```jsx
<Filters 
  filters={searchFilters}
  activeFilters={activeFilters}
  onFilterChange={updateFilters}
  showClearAll
/>
```