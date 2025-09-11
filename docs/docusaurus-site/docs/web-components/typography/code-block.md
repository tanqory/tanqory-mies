# Code Block

Formatted display of code with syntax highlighting and copy functionality.

## Overview

Code blocks present formatted source code with syntax highlighting, line numbers, and copy functionality. They support multiple programming languages and provide clear visual distinction from regular text.

**When to use:**
- Code examples and tutorials
- Configuration file display
- API response examples
- Documentation with code samples

**When not to use:**
- Inline code snippets (use Code instead)
- Plain text that isn't code
- Interactive code editing

## Usage Guidelines

- **Language specification**: Specify language for proper highlighting
- **Copy functionality**: Provide easy code copying mechanisms
- **Readable formatting**: Maintain proper indentation and spacing
- **Responsive design**: Handle overflow and wrapping appropriately

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `code` | `string` | - | Code content to display |
| `language` | `string` | `text` | Programming language for highlighting |
| `showLineNumbers` | `boolean` | `false` | Shows line numbers |
| `copyable` | `boolean` | `true` | Enables copy functionality |

## Accessibility

- **Screen readers**: Code content announced with language context
- **Keyboard navigation**: Copy functionality accessible via keyboard
- **High contrast**: Sufficient contrast for syntax highlighting
- **Focus indication**: Clear focus states for interactive elements

## Examples

### JavaScript Code
```jsx
<CodeBlock 
  language="javascript"
  code={`
function greetUser(name) {
  return \`Hello, \${name}!\`;
}
  `}
  showLineNumbers
  copyable
/>
```

### Configuration File
```jsx
<CodeBlock 
  language="json"
  code={configurationExample}
  copyable
  title="config.json"
/>
```