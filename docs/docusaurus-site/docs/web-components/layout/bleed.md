# Bleed

A layout component that extends content beyond its container boundaries to create full-width or edge-to-edge visual effects.

## Overview

The Bleed component allows content to visually "bleed" outside of its normal container constraints, typically extending to the edges of the viewport or parent container. This creates dramatic visual impact and is commonly used for hero sections, full-width images, or background elements.

Key features:
- Extends content beyond container padding
- Responsive breakpoint control
- Maintains content flow and accessibility
- Supports horizontal and vertical bleeding

## Usage Guidelines

**When to use:**
- For hero sections that need full-width impact
- Background elements that should extend to edges
- Images or media that need to break container bounds
- Creating visual emphasis through layout contrast

**When not to use:**
- For regular content that should respect container margins
- When bleeding would harm readability or accessibility
- In tightly constrained mobile interfaces

**Best practices:**
- Ensure text remains readable when content bleeds
- Consider different screen sizes and orientations
- Use sparingly for maximum visual impact
- Test with various container sizes

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `horizontal` | boolean/string | false | Enable horizontal bleeding (true, 'left', 'right') |
| `vertical` | boolean/string | false | Enable vertical bleeding (true, 'top', 'bottom') |
| `breakpoint` | string | 'all' | Responsive breakpoint (mobile, tablet, desktop, all) |
| `amount` | string | 'full' | Bleed amount (small, medium, large, full) |

## Accessibility

- Maintains proper content order for screen readers
- Preserves focus management and keyboard navigation
- Ensures sufficient color contrast for bleeding content
- Respects user preferences for reduced motion
- Does not interfere with assistive technology navigation

## Examples

### Hero Section
```jsx
<Bleed horizontal={true} vertical="top">
  <HeroImage 
    src="/hero-background.jpg"
    alt="Product showcase"
  />
</Bleed>
```

### Full-width Content
```jsx
<Bleed horizontal={true} breakpoint="desktop">
  <DataVisualization 
    data={chartData}
    fullWidth={true}
  />
</Bleed>
```

### Partial Bleed
```jsx
<Bleed 
  horizontal="left"
  amount="medium"
  breakpoint="tablet"
>
  <CalloutCard theme="accent">
    <Text>This content extends partially beyond the container</Text>
  </CalloutCard>
</Bleed>
```

### Responsive Bleeding
```jsx
<Bleed 
  horizontal={true}
  breakpoint="mobile"
>
  <ImageGallery 
    images={galleryImages}
    layout="masonry"
  />
</Bleed>
```