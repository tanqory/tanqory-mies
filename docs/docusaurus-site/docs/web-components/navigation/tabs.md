# Tabs

Interface for switching between multiple content panels.

## Overview

Tabs organize related content into separate views that users can switch between. They maintain content relationships while providing focused access to specific sections.

**When to use:**
- Related content sections
- Settings or configuration panels
- Different data views
- Multi-step form organization

**When not to use:**
- Unrelated content (use separate pages)
- Linear workflows (use Step Indicator)
- Large numbers of tabs (consider alternatives)

## Usage Guidelines

- **Clear labels**: Use descriptive tab names
- **Logical ordering**: Arrange tabs by importance or sequence
- **Active indication**: Clearly show the selected tab
- **Keyboard support**: Enable arrow key navigation

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tabs` | `Array<TabItem>` | `[]` | Tab configuration array |
| `activeTab` | `string` | - | Currently active tab ID |
| `onTabChange` | `function` | - | Tab change handler |
| `orientation` | `horizontal` \| `vertical` | `horizontal` | Tab layout direction |

## Accessibility

- **Keyboard navigation**: Arrow keys navigate, Enter activates
- **Screen readers**: Tab names and position announced
- **ARIA attributes**: Uses tablist, tab, and tabpanel roles
- **Focus management**: Maintains focus during tab switches

## Examples

### Basic Tabs
```jsx
<Tabs 
  tabs={[
    { id: 'overview', label: 'Overview', content: <Overview /> },
    { id: 'details', label: 'Details', content: <Details /> },
    { id: 'reviews', label: 'Reviews', content: <Reviews /> }
  ]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
/>
```

### Vertical Tabs
```jsx
<Tabs 
  orientation="vertical"
  tabs={settingsTabs}
  activeTab={currentSection}
  onTabChange={setCurrentSection}
/>
```