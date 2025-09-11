# Pagination

Navigation controls for browsing through paginated content.

## Overview

Pagination provides navigation controls for large data sets split across multiple pages. It includes page numbers, navigation arrows, and current page indicators.

**When to use:**
- Large data tables or lists
- Search result navigation
- Content collections or archives
- Multi-page forms or wizards

**When not to use:**
- Small data sets (under 25 items)
- Infinite scroll interfaces
- Single-page content

## Usage Guidelines

- **Clear current page**: Highlight the active page prominently
- **Logical navigation**: Provide previous/next and jump options
- **Performance**: Load pages efficiently without blocking
- **Mobile optimization**: Ensure touch-friendly controls

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `currentPage` | `number` | `1` | Active page number |
| `totalPages` | `number` | - | Total number of pages |
| `onPageChange` | `function` | - | Page change handler |
| `showFirstLast` | `boolean` | `true` | Shows first/last page buttons |

## Accessibility

- **Keyboard navigation**: Arrow keys and Enter for page selection
- **Screen readers**: Current page and total pages announced
- **Focus management**: Logical focus flow through controls
- **Page context**: Clear indication of current position

## Examples

### Basic Pagination
```jsx
<Pagination 
  currentPage={3}
  totalPages={10}
  onPageChange={handlePageChange}
/>
```

### Compact Pagination
```jsx
<Pagination 
  currentPage={currentPage}
  totalPages={pageCount}
  onPageChange={setCurrentPage}
  compact
  showFirstLast={false}
/>
```