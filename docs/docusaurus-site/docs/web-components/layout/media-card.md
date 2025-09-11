# Media Card

A specialized card component optimized for displaying media content like images, videos, or rich media with accompanying text and actions.

## Overview

Media Card combines visual content with text information in a structured, accessible format. It's designed to showcase media while providing context and actionable elements for user interaction.

## Usage Guidelines

**When to use:**
- Displaying image galleries or portfolios
- Product showcases with images
- Video content libraries
- Article previews with featured images

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `media` | object | - | Media content configuration |
| `title` | string | - | Card title |
| `description` | string | - | Supporting text |
| `actions` | array | [] | Action buttons |
| `aspectRatio` | string | '16/9' | Media aspect ratio |

## Examples

### Product Card
```jsx
<MediaCard
  media={{
    src: '/product-image.jpg',
    alt: 'Product showcase'
  }}
  title="Premium Headphones"
  description="High-quality audio with noise cancellation"
  actions={[
    { label: 'View Details', onClick: handleView },
    { label: 'Add to Cart', variant: 'primary', onClick: handleAddToCart }
  ]}
/>
```