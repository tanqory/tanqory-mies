# Combo Box

Combined input field with dropdown list for selection or custom entry.

## Overview

Combo boxes merge text input capabilities with dropdown selection, allowing users to choose from predefined options or enter custom values. They provide flexibility while maintaining structured data entry.

**When to use:**
- Large option lists with search capability
- Custom value entry with suggestions
- Autocomplete functionality
- Flexible data input fields

**When not to use:**
- Small, fixed option sets (use Select instead)
- Pure text input (use Text Field instead)
- Binary choices (use Toggle or Checkbox)

## Usage Guidelines

- **Search functionality**: Filter options as user types
- **Clear options**: Provide obvious selection mechanisms
- **Input validation**: Validate custom entries appropriately
- **Keyboard navigation**: Support arrow key navigation through options

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `Array<Option>` | `[]` | Available selection options |
| `value` | `string` | - | Current input value |
| `placeholder` | `string` | - | Placeholder text |
| `allowCustom` | `boolean` | `true` | Permits custom value entry |

## Accessibility

- **ARIA attributes**: Uses combobox role with proper attributes
- **Keyboard navigation**: Arrow keys navigate options, Enter selects
- **Screen readers**: Options and selection state announced clearly
- **Focus indication**: Clear focus state throughout interaction

## Examples

### Basic Combo Box
```jsx
<ComboBox 
  options={countries}
  placeholder="Select or type country..."
  onChange={setValue}
/>
```

### With Custom Values
```jsx
<ComboBox 
  options={skills}
  allowCustom
  placeholder="Add a skill..."
  onChange={handleSkillAdd}
/>
```