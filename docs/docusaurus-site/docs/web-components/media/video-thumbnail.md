# Video Thumbnail

Preview image for video content with play controls and metadata display.

## Overview

Video thumbnails provide preview images for video content with play buttons, duration indicators, and metadata overlays. They help users understand video content before playing.

**When to use:**
- Video library or playlist interfaces
- Embedded video previews
- Media management systems
- Content discovery interfaces

**When not to use:**
- Static image content
- Audio-only content
- Interactive video players

## Usage Guidelines

- **Clear play indication**: Show obvious play button or overlay
- **Duration display**: Include video length when helpful
- **Loading optimization**: Use optimized preview images
- **Accessibility**: Provide comprehensive descriptions

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `src` | `string` | - | Video thumbnail image URL |
| `duration` | `string` | - | Video duration display |
| `title` | `string` | - | Video title text |
| `onPlay` | `function` | - | Play button click handler |

## Accessibility

- **Alt text**: Descriptive text including video topic
- **Play button**: Clear indication of video play functionality
- **Duration**: Time information announced to screen readers
- **Keyboard interaction**: Play functionality accessible via keyboard

## Examples

### Basic Video Thumbnail
```jsx
<VideoThumbnail 
  src="/videos/preview.jpg"
  title="Introduction to Design Systems"
  duration="5:23"
  onPlay={playVideo}
/>
```

### Playlist Item
```jsx
<VideoThumbnail 
  src="/videos/lesson1.jpg"
  title="Getting Started"
  duration="3:45"
  metadata={{ views: "1.2K", uploaded: "2 days ago" }}
  onPlay={playVideo}
/>
```