# Choice List

Vertical list of selectable options with checkboxes or radio buttons.

## Overview

Choice lists present multiple options in a structured list format, allowing users to make single or multiple selections. They provide clear visual hierarchy and easy scanning of available choices.

**When to use:**
- Multiple selection from a list of options
- Single selection with clear visual grouping
- Options with additional descriptive text
- Settings or preference selection

**When not to use:**
- Large numbers of options (use Select instead)
- Simple yes/no choices (use Checkbox)
- Space-constrained layouts

## Usage Guidelines

- **Clear labeling**: Use descriptive option labels
- **Logical ordering**: Group related options together
- **Appropriate selection type**: Single (radio) or multiple (checkbox)
- **Visual hierarchy**: Highlight important or recommended options

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `Array<Option>` | `[]` | Array of selectable options |
| `value` | `string \| string[]` | - | Selected value(s) |
| `multiple` | `boolean` | `false` | Allows multiple selections |
| `disabled` | `boolean` | `false` | Disables entire list |

## Accessibility

- **Keyboard navigation**: Arrow keys navigate, Space selects
- **Screen readers**: Options announced with selection state
- **Focus indication**: Clear focus outline on active option
- **Group labeling**: Proper fieldset and legend structure

## Examples

### Single Selection
```jsx
<ChoiceList
  options={[
    { label: "Email notifications", value: "email" },
    { label: "SMS notifications", value: "sms" },
    { label: "Push notifications", value: "push" }
  ]}
  value="email"
  onChange={setValue}
/>
```

### Multiple Selection
```jsx
<ChoiceList
  multiple
  options={[
    { label: "Product updates", value: "products" },
    { label: "Marketing emails", value: "marketing" },
    { label: "Security alerts", value: "security" }
  ]}
  value={["products", "security"]}
  onChange={setValues}
/>
```