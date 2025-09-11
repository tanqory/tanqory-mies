# Page Shell

A comprehensive layout wrapper that provides the foundational structure for application pages including header, navigation, content area, and footer sections.

## Overview

Page Shell establishes the complete page architecture for applications, providing consistent structure across different screens. It handles responsive behavior, navigation integration, and content area management while maintaining Tanqory Mies design principles.

## Usage Guidelines

**When to use:**
- As the root layout component for application pages
- When building consistent page structures
- For pages that need header/navigation integration
- Creating responsive application layouts

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `header` | React.Node | - | Page header content |
| `navigation` | React.Node | - | Navigation sidebar |
| `footer` | React.Node | - | Page footer content |
| `navigationWidth` | string | 'medium' | Sidebar width |
| `navigationCollapsed` | boolean | false | Collapse navigation |

## Examples

### Application Layout
```jsx
<PageShell
  header={<TopBar />}
  navigation={<Sidebar />}
  footer={<AppFooter />}
>
  <MainContent />
</PageShell>
```