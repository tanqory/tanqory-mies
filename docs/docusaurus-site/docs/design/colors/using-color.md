# Using color

Guidelines, contrast requirements, best practices, and accessibility standards.

## Color guidelines

### When to use semantic colors

Use semantic colors to communicate meaning and status consistently across the interface.

<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '24px 0'}}>

**Success (Green)**
- Completed actions
- Positive status indicators
- Form validation success
- Available states

**Warning (Yellow/Orange)**
- Caution messages
- Pending actions
- Temporary states
- Important notices

**Error (Red)**
- Failed actions
- Form validation errors
- Critical alerts
- Unavailable states

**Info (Blue)**
- Informational messages
- Help content
- Default actions
- Neutral states

</div>

### Color contrast requirements

All color combinations must meet WCAG 2.1 AA accessibility standards:

<div style={{display: 'flex', gap: '24px', margin: '24px 0', flexWrap: 'wrap'}}>

<div style={{padding: '16px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)', minWidth: '200px'}}>
  <div style={{fontWeight: 600, marginBottom: '8px'}}>Normal Text</div>
  <div style={{fontSize: '14px', color: '#525252', marginBottom: '4px'}}>Minimum contrast</div>
  <div style={{fontSize: '20px', fontWeight: 700}}>4.5:1</div>
</div>

<div style={{padding: '16px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)', minWidth: '200px'}}>
  <div style={{fontWeight: 600, marginBottom: '8px'}}>Large Text</div>
  <div style={{fontSize: '14px', color: '#525252', marginBottom: '4px'}}>Minimum contrast</div>
  <div style={{fontSize: '20px', fontWeight: 700}}>3:1</div>
</div>

<div style={{padding: '16px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)', minWidth: '200px'}}>
  <div style={{fontWeight: 600, marginBottom: '8px'}}>UI Components</div>
  <div style={{fontSize: '14px', color: '#525252', marginBottom: '4px'}}>Minimum contrast</div>
  <div style={{fontSize: '20px', fontWeight: 700}}>3:1</div>
</div>

</div>

## Best practices

### Do's
- Use color purposefully to support the content
- Maintain consistent color meaning across the interface
- Test color combinations with accessibility tools
- Provide alternative ways to communicate information
- Consider cultural color associations for global audiences

### Don'ts
- Don't use color as the only way to convey information
- Don't use colors that don't have sufficient contrast
- Don't use too many colors in a single interface
- Don't assign arbitrary meanings to colors
- Don't ignore user accessibility preferences

## Color in dark mode

Dark theme colors maintain semantic meaning while optimizing for low-light viewing:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', margin: '24px 0'}}>

<div style={{padding: '16px', backgroundColor: '#1a1a1a', color: 'white', borderRadius: '8px'}}>
  <div style={{fontWeight: 600, marginBottom: '8px'}}>Dark Theme</div>
  <div style={{fontSize: '14px', marginBottom: '12px', opacity: 0.8}}>Optimized for low light</div>
  <div style={{display: 'flex', gap: '8px'}}>
    <div style={{width: '20px', height: '20px', backgroundColor: '#22c55e', borderRadius: '4px'}}></div>
    <div style={{width: '20px', height: '20px', backgroundColor: '#f59e0b', borderRadius: '4px'}}></div>
    <div style={{width: '20px', height: '20px', backgroundColor: '#ef4444', borderRadius: '4px'}}></div>
    <div style={{width: '20px', height: '20px', backgroundColor: '#3b82f6', borderRadius: '4px'}}></div>
  </div>
</div>

<div style={{padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px', border: '1px solid #e5e5e5'}}>
  <div style={{fontWeight: 600, marginBottom: '8px'}}>Light Theme</div>
  <div style={{fontSize: '14px', marginBottom: '12px', color: '#525252'}}>Optimized for daylight</div>
  <div style={{display: 'flex', gap: '8px'}}>
    <div style={{width: '20px', height: '20px', backgroundColor: '#22c55e', borderRadius: '4px'}}></div>
    <div style={{width: '20px', height: '20px', backgroundColor: '#f59e0b', borderRadius: '4px'}}></div>
    <div style={{width: '20px', height: '20px', backgroundColor: '#ef4444', borderRadius: '4px'}}></div>
    <div style={{width: '20px', height: '20px', backgroundColor: '#3b82f6', borderRadius: '4px'}}></div>
  </div>
</div>

</div>

## Visual examples

### Proper color usage

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', margin: '32px 0'}}>

<div>
<div style={{
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: '#1B6820',
  color: 'white',
  padding: '2px 8px',
  borderRadius: '12px',
  fontSize: '13px',
  fontWeight: 600,
  marginBottom: '16px'
}}>
  <span>✓</span>
  <span>Do</span>
</div>

**Shows information with color plus icons and text for accessibility.**

<div style={{padding: '16px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}}>
  <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '6px', marginBottom: '8px'}}>
    <span style={{color: '#15803d', fontSize: '16px'}}>✓</span>
    <div>
      <div style={{color: '#15803d', fontWeight: 500}}>Success</div>
      <div style={{color: '#15803d', fontSize: '14px'}}>Your changes have been saved</div>
    </div>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', backgroundColor: '#fffbeb', borderRadius: '6px'}}>
    <span style={{color: '#b45309', fontSize: '16px'}}>⚠</span>
    <div>
      <div style={{color: '#b45309', fontWeight: 500}}>Warning</div>
      <div style={{color: '#b45309', fontSize: '14px'}}>This action cannot be undone</div>
    </div>
  </div>
</div>

<div style={{
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  backgroundColor: '#9D0C2A',
  color: 'white',
  padding: '2px 8px',
  borderRadius: '12px',
  fontSize: '13px',
  fontWeight: 600,
  marginBottom: '16px'
}}>
  <span>✕</span>
  <span>Don't</span>
</div>

**Relies only on color without additional context or visual cues.**

<div style={{padding: '16px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)', opacity: 0.7}}>
  <div style={{padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '6px', marginBottom: '8px', textAlign: 'center', color: '#15803d'}}>
    Your changes have been saved
  </div>
  <div style={{padding: '12px', backgroundColor: '#fffbeb', borderRadius: '6px', textAlign: 'center', color: '#b45309'}}>
    This action cannot be undone
  </div>
</div>

</div>

</div>

## Testing tools

Use these tools to validate color accessibility:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- [Stark (Figma/Sketch plugin)](https://www.getstark.co/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

Remember: Never rely on color alone to convey information. Always pair color with text, icons, or other visual elements to ensure accessibility for all users.