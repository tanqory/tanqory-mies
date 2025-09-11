# Thumbnail

Compact preview image with loading states and interactive capabilities.

## Overview

Thumbnails provide small preview images that can expand or link to larger content. They handle loading states, fallbacks, and maintain consistent aspect ratios across different contexts.

**When to use:**
- Image previews in galleries
- Product or content previews
- File or document representations
- Media library browsing

**When not to use:**
- Primary content images
- Decorative backgrounds
- Icon representations

## Usage Guidelines

- **Consistent sizing**: Maintain uniform thumbnail dimensions
- **Loading optimization**: Use appropriate image compression
- **Clear interaction**: Make clickable thumbnails obvious
- **Fallback handling**: Provide placeholder for failed loads

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `src` | `string` | - | Thumbnail image URL |
| `alt` | `string` | - | Alternative text description |
| `size` | `small` \| `medium` \| `large` | `medium` | Thumbnail dimensions |
| `aspectRatio` | `square` \| `video` \| `photo` | `square` | Aspect ratio constraint |

## Accessibility

- **Alt text**: Descriptive alternative text for images
- **Keyboard interaction**: Focusable when interactive
- **Loading states**: Loading status announced to screen readers
- **High contrast**: Sufficient contrast for visibility

## Examples

### Basic Thumbnail
```jsx
<Thumbnail 
  src="/images/preview.jpg"
  alt="Product preview"
  size="medium"
  onClick={openFullImage}
/>
```

### Video Thumbnail
```jsx
<Thumbnail 
  src="/videos/thumbnail.jpg"
  aspectRatio="video"
  overlay={<PlayIcon />}
  onClick={playVideo}
/>
```