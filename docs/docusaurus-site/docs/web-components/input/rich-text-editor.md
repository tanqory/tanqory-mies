# Rich Text Editor

Advanced text input with formatting capabilities and rich content support.

## Overview

Rich text editors provide advanced text editing capabilities including formatting, lists, links, and media insertion. They bridge the gap between simple text input and full document editing.

**When to use:**
- Content creation and editing
- Blog post or article writing
- Comment systems requiring formatting
- Documentation or knowledge bases

**When not to use:**
- Simple text input (use Text Field instead)
- Code editing (use Code Editor instead)
- Highly structured data entry

## Usage Guidelines

- **Essential tools**: Provide only necessary formatting options
- **Intuitive toolbar**: Group related formatting tools logically
- **Keyboard shortcuts**: Support common text editing shortcuts
- **Content validation**: Sanitize and validate rich content appropriately

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | - | Editor content (HTML or markdown) |
| `format` | `html` \| `markdown` | `html` | Content format |
| `toolbar` | `Array<string>` | - | Available formatting tools |
| `placeholder` | `string` | - | Placeholder text |

## Accessibility

- **Keyboard navigation**: Full keyboard support for all editing functions
- **Screen readers**: Content structure and formatting announced
- **Focus management**: Logical focus flow through toolbar and content
- **Alt text**: Required alt text for images and media

## Examples

### Basic Editor
```jsx
<RichTextEditor 
  value={content}
  onChange={setContent}
  placeholder="Start writing..."
  toolbar={['bold', 'italic', 'link', 'list']}
/>
```

### Full Featured
```jsx
<RichTextEditor 
  value={articleContent}
  onChange={setArticleContent}
  format="markdown"
  toolbar={['bold', 'italic', 'heading', 'quote', 'code', 'link', 'image']}
  autoSave
/>
```