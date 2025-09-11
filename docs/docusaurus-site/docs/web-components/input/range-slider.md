# Range Slider

Interactive control for selecting numeric values within a defined range.

## Overview

Range sliders allow users to select numeric values by dragging a handle along a track. They provide immediate visual feedback and are ideal for continuous value selection within bounded ranges.

**When to use:**
- Numeric value selection within ranges
- Filter controls for prices or quantities
- Settings with continuous adjustment
- Volume or brightness controls

**When not to use:**
- Precise numeric input (use Number Field instead)
- Discrete value selection (use Select instead)
- Large ranges requiring specific values

## Usage Guidelines

- **Clear range indication**: Show min/max values prominently
- **Value feedback**: Display current value during interaction
- **Appropriate step size**: Use logical increment values
- **Visual scaling**: Make slider length proportional to range

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `min` | `number` | `0` | Minimum slider value |
| `max` | `number` | `100` | Maximum slider value |
| `step` | `number` | `1` | Value increment step |
| `value` | `number` | - | Current slider value |

## Accessibility

- **Keyboard control**: Arrow keys adjust value, Page Up/Down for larger steps
- **Screen readers**: Current value and range announced
- **Focus indication**: Clear focus outline on slider handle
- **Value formatting**: Appropriate number formatting for context

## Examples

### Basic Slider
```jsx
<RangeSlider 
  min={0}
  max={100}
  value={volume}
  onChange={setVolume}
  label="Volume"
/>
```

### Price Range
```jsx
<RangeSlider 
  min={0}
  max={1000}
  step={10}
  value={maxPrice}
  onChange={setMaxPrice}
  formatValue={(value) => `$${value}`}
/>
```