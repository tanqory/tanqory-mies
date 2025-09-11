# Image Gallery

Interactive collection of images with navigation and zoom capabilities.

## Overview

Image galleries display multiple images in an organized layout with navigation controls, zoom functionality, and responsive behavior. They provide immersive browsing experiences for visual content.

**When to use:**
- Product image showcases
- Photo collections or portfolios
- Image-heavy content displays
- Media libraries or archives

**When not to use:**
- Single image displays (use Image instead)
- Decorative image arrangements
- Icon or small graphic collections

## Usage Guidelines

- **Responsive layout**: Adapt to different screen sizes gracefully
- **Loading optimization**: Use progressive loading and image optimization
- **Navigation clarity**: Provide clear navigation controls
- **Zoom accessibility**: Ensure zoom functionality works for all users

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `images` | `Array<ImageItem>` | `[]` | Gallery image collection |
| `layout` | `grid` \| `carousel` \| `masonry` | `grid` | Gallery layout style |
| `zoomable` | `boolean` | `true` | Enables image zoom functionality |
| `navigation` | `boolean` | `true` | Shows navigation controls |

## Accessibility

- **Keyboard navigation**: Arrow keys navigate between images
- **Screen readers**: Image descriptions and position announced
- **Focus management**: Logical focus flow through gallery controls
- **Alternative text**: Comprehensive alt text for all images

## Examples

### Product Gallery
```jsx
<ImageGallery 
  images={productImages}
  layout="carousel"
  zoomable
  navigation
/>
```

### Photo Grid
```jsx
<ImageGallery 
  images={photoCollection}
  layout="masonry"
  lightbox
  onImageClick={handleImageClick}
/>
```