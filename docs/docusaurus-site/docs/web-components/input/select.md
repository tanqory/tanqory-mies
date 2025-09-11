# Select

A dropdown input component that allows users to choose from a predefined list of options.

## Overview

Select provides an efficient way for users to choose from multiple options when space is limited. It includes search functionality, keyboard navigation, and proper accessibility support.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | array | - | Array of selectable options |
| `value` | string | - | Selected value |
| `placeholder` | string | - | Placeholder text |
| `searchable` | boolean | false | Enable option search |
| `multiple` | boolean | false | Allow multiple selections |
| `disabled` | boolean | false | Disable the select |
| `error` | string | - | Error message |
| `onChange` | function | - | Selection change handler |

## Examples

### Basic Select
```jsx
<Select
  label="Country"
  placeholder="Choose a country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' }
  ]}
  value={selectedCountry}
  onChange={setSelectedCountry}
/>
```

### Searchable Multi-Select
```jsx
<Select
  label="Skills"
  placeholder="Select your skills"
  options={skillOptions}
  searchable={true}
  multiple={true}
  value={selectedSkills}
  onChange={setSelectedSkills}
/>
```