# Layout Container

A foundational wrapper component that provides consistent page-level structure, maximum width constraints, and responsive behavior.

## Overview

Layout Container establishes the main content area structure for pages and major sections. It ensures consistent maximum widths, proper spacing, and responsive behavior across different screen sizes while maintaining Tanqory Mies design principles.

## Usage Guidelines

**When to use:**
- As the main page wrapper
- For major content sections
- When you need consistent width constraints
- Creating responsive page layouts

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `maxWidth` | string | 'desktop' | Maximum width (mobile, tablet, desktop, wide, full) |
| `padding` | string | 'medium' | Internal padding |
| `centered` | boolean | true | Center container horizontally |

## Examples

### Page Container
```jsx
<LayoutContainer maxWidth="desktop" padding="large">
  <PageHeader />
  <MainContent />
  <PageFooter />
</LayoutContainer>
```

### Full Width Section
```jsx
<LayoutContainer maxWidth="full" padding="none">
  <HeroSection />
</LayoutContainer>
```