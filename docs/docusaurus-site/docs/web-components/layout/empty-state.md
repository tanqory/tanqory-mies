# Empty State

A guidance component that appears when there's no content to display, providing clear direction for user action.

## Overview

Empty State helps users understand why content is missing and what they can do about it. It transforms potentially confusing blank spaces into helpful, actionable guidance that moves users forward in their workflow.

## Usage Guidelines

**When to use:**
- When lists, tables, or grids have no data
- During onboarding or initial setup
- When search results return nothing
- After users complete tasks that clear content

**Best practices:**
- Include clear, helpful messaging
- Provide relevant actions when possible
- Use appropriate illustrations or icons
- Match the tone to user context

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | string | - | Primary heading text |
| `description` | string | - | Supporting description |
| `illustration` | string | - | Image or icon identifier |
| `action` | object | - | Primary action button |
| `secondaryAction` | object | - | Optional secondary action |

## Accessibility

- Uses proper heading hierarchy
- Includes descriptive alt text for illustrations
- Maintains focus management for actions
- Provides clear content structure for screen readers

## Examples

### No Data State
```jsx
<EmptyState
  illustration="empty-folder"
  title="No projects yet"
  description="Create your first project to get started with organizing your work."
  action={{
    label: "Create Project",
    onClick: handleCreateProject,
    variant: "primary"
  }}
  secondaryAction={{
    label: "Import Existing",
    onClick: handleImport,
    variant: "secondary"
  }}
/>
```

### Search Results
```jsx
<EmptyState
  illustration="search"
  title="No results found"
  description={`No items match "${searchQuery}". Try adjusting your search terms.`}
  action={{
    label: "Clear Search",
    onClick: handleClearSearch,
    variant: "secondary"
  }}
/>
```