# Date Picker

Interactive calendar interface for selecting dates with input validation.

## Overview

Date pickers provide intuitive date selection through calendar interfaces while supporting direct text entry. They handle date formatting, validation, and localization automatically.

**When to use:**
- Event scheduling or booking
- Date range selection
- Form fields requiring date input
- Timeline or calendar applications

**When not to use:**
- Approximate dates (use Text Field)
- Year-only selection (use Select)
- Time-sensitive short-term dates

## Usage Guidelines

- **Clear date format**: Display expected format prominently
- **Calendar navigation**: Provide month/year navigation controls
- **Input validation**: Validate and format entered dates
- **Localization**: Respect user's date format preferences

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `Date \| string` | - | Selected date value |
| `format` | `string` | `MM/DD/YYYY` | Display format pattern |
| `minDate` | `Date` | - | Earliest selectable date |
| `maxDate` | `Date` | - | Latest selectable date |

## Accessibility

- **Keyboard navigation**: Arrow keys navigate calendar grid
- **Screen readers**: Date options announced with context
- **Focus management**: Logical focus flow through calendar
- **Date formatting**: Consistent format announcement

## Examples

### Basic Date Picker
```jsx
<DatePicker 
  value={selectedDate}
  onChange={setDate}
  placeholder="Select date..."
/>
```

### Date Range
```jsx
<DatePicker 
  minDate={new Date()}
  maxDate={addDays(new Date(), 30)}
  onChange={setDate}
/>
```