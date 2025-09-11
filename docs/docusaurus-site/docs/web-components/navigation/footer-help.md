# Footer Help

Bottom page section with support links and contact information.

## Overview

Footer help provides users with easy access to assistance resources, documentation, and contact methods at the bottom of pages.

## Usage Guidelines

- Keep links organized by category
- Include essential support resources
- Maintain consistent placement across pages
- Provide multiple contact methods

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `links` | `array` | `[]` | Help and support links |
| `contactInfo` | `object` | - | Contact methods and details |
| `compact` | `boolean` | `false` | Reduced spacing variant |

## Accessibility

- Proper heading hierarchy
- Clear link descriptions
- Keyboard navigation support
- Screen reader friendly structure

## Examples

### Basic Footer Help
```jsx
<FooterHelp 
  links={[
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Support', href: '/contact' },
    { label: 'Documentation', href: '/docs' }
  ]}
  contactInfo={{
    email: 'support@company.com',
    phone: '1-800-555-0123'
  }}
/>
```

### Categorized Links
```jsx
<FooterHelp 
  links={[
    { category: 'Support', items: [
      { label: 'Help Center', href: '/help' },
      { label: 'Tutorials', href: '/tutorials' }
    ]},
    { category: 'Contact', items: [
      { label: 'Email Support', href: 'mailto:support@company.com' },
      { label: 'Live Chat', onClick: openChat }
    ]}
  ]}
/>
```