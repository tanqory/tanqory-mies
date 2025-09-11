# Virtualized Table

High-performance table for rendering large datasets efficiently.

## Overview

Virtualized tables handle massive datasets by only rendering visible rows, providing smooth scrolling and interaction with thousands of records without performance degradation.

**When to use:**
- Very large datasets (1000+ rows)
- Performance-critical applications
- Real-time data feeds
- Memory-constrained environments

**When not to use:**
- Small to medium datasets
- Simple table requirements
- When full table features aren't needed

## Usage Guidelines

- **Row height consistency**: Maintain uniform row heights for smooth scrolling
- **Data optimization**: Optimize data structure for virtual rendering
- **Loading states**: Handle data loading during scrolling
- **Selection management**: Optimize selection state for large datasets

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | `Array<Object>` | `[]` | Large dataset array |
| `rowHeight` | `number` | `40` | Fixed row height in pixels |
| `height` | `number` | `400` | Table viewport height |
| `overscan` | `number` | `5` | Extra rows to render for smoothing |

## Accessibility

- **Keyboard navigation**: Efficient navigation through large datasets
- **Screen readers**: Row information announced with position context
- **Focus management**: Maintains focus during virtual scrolling
- **ARIA attributes**: Proper labeling for virtual content

## Examples

### Large Dataset
```jsx
<VirtualizedTable 
  data={largeDataset}
  columns={tableColumns}
  rowHeight={50}
  height={600}
  overscan={10}
/>
```

### Real-time Data
```jsx
<VirtualizedTable 
  data={realTimeData}
  columns={streamColumns}
  rowHeight={40}
  height={400}
  onScroll={handleScroll}
  sortable
/>
```