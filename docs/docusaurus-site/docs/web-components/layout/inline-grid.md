# Inline Grid

A compact grid layout component optimized for smaller content arrangements and inline placement within text flow.

## Overview

Inline Grid creates grid layouts that work well within content flows and constrained spaces. It's designed for organizing small collections of items while maintaining text-like inline behavior.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `columns` | number | 'auto' | Number of columns |
| `gap` | string | 'small' | Space between items |
| `alignItems` | string | 'center' | Vertical alignment |

## Examples

### Tag Grid
```jsx
<InlineGrid columns="auto" gap="small">
  <Tag>React</Tag>
  <Tag>TypeScript</Tag>
  <Tag>CSS</Tag>
  <Tag>Design Systems</Tag>
</InlineGrid>
```