# File Uploader

Complete file upload component with progress tracking and validation.

## Overview

File uploaders handle the entire upload process from selection to completion, providing progress feedback, validation, and error handling. They support both drag-and-drop and traditional file selection methods.

**When to use:**
- Document or media upload workflows
- Profile picture or avatar uploads
- Bulk file processing
- Content management systems

**When not to use:**
- Simple file selection without upload
- Real-time file streaming
- Very large file uploads requiring specialized handling

## Usage Guidelines

- **Clear file requirements**: Specify accepted types and size limits
- **Progress feedback**: Show upload progress and status
- **Error handling**: Display clear error messages and recovery options
- **Preview capability**: Show file previews when possible

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accept` | `string` | - | Accepted file MIME types |
| `multiple` | `boolean` | `false` | Allow multiple file uploads |
| `maxSize` | `number` | - | Maximum file size limit |
| `onUpload` | `function` | - | Upload handler function |

## Accessibility

- **Keyboard navigation**: Full keyboard support for all interactions
- **Screen readers**: Upload progress and status announced
- **Error communication**: Clear error descriptions provided
- **Focus management**: Logical focus flow during upload process

## Examples

### Single File Upload
```jsx
<FileUploader 
  accept="image/jpeg,image/png"
  maxSize={5242880}
  onUpload={handleImageUpload}
  onError={handleError}
/>
```

### Multiple File Upload
```jsx
<FileUploader 
  multiple
  accept=".pdf,.doc,.docx,.txt"
  maxSize={10485760}
  onUpload={handleDocumentUpload}
  showPreview
/>
```