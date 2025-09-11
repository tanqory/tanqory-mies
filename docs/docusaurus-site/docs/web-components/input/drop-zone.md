# Drop Zone

Drag-and-drop area for file uploads with visual feedback and validation.

## Overview

Drop zones provide intuitive file upload through drag-and-drop interaction while supporting traditional file selection. They offer clear visual feedback during drag operations and handle file validation.

**When to use:**
- File upload interfaces
- Image or document uploads
- Bulk file selection
- Content import workflows

**When not to use:**
- Single file uploads with browse button only
- Text content entry
- Data that isn't file-based

## Usage Guidelines

- **Clear instructions**: Indicate supported file types and size limits
- **Visual feedback**: Show active state during drag operations
- **Error handling**: Display validation errors clearly
- **Progress indication**: Show upload progress when applicable

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accept` | `string` | - | Accepted file types |
| `multiple` | `boolean` | `false` | Allow multiple file selection |
| `maxSize` | `number` | - | Maximum file size in bytes |
| `disabled` | `boolean` | `false` | Disables drop functionality |

## Accessibility

- **Keyboard support**: Alternative file selection via keyboard
- **Screen readers**: Clear instructions and feedback announced
- **Focus indication**: Visible focus state for keyboard users
- **Error communication**: Validation errors properly announced

## Examples

### Basic Drop Zone
```jsx
<DropZone 
  accept="image/*"
  onDrop={handleFiles}
>
  Drop images here or click to select
</DropZone>
```

### Multiple Files
```jsx
<DropZone 
  accept=".pdf,.doc,.docx"
  multiple
  maxSize={10485760}
  onDrop={handleDocuments}
>
  Upload documents (max 10MB each)
</DropZone>
```