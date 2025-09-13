# Colors

Color highlights important areas, communicates status, urgency, and directs attention.

## Navigation

Explore different aspects of our color system:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '32px 0'}}>

<div style={{
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  borderRadius: '12px',
  padding: '24px',
  border: '1px solid #333',
  textAlign: 'center'
}}>
  <div style={{fontSize: '32px', marginBottom: '16px'}}></div>
  <h3 style={{color: '#E1FF00', marginBottom: '12px'}}>
    <a href="/design/colors/palettes" style={{color: '#E1FF00', textDecoration: 'none'}}>
      Palettes and roles
    </a>
  </h3>
  <p style={{color: '#a3a3a3', fontSize: '14px', margin: 0}}>
    Brand colors, neutral scales, and semantic color palettes with visual swatches
  </p>
</div>

<div style={{
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  borderRadius: '12px',
  padding: '24px',
  border: '1px solid #333',
  textAlign: 'center'
}}>
  <div style={{fontSize: '32px', marginBottom: '16px'}}></div>
  <h3 style={{color: '#E1FF00', marginBottom: '12px'}}>
    <a href="/design/colors/using-color" style={{color: '#E1FF00', textDecoration: 'none'}}>
      Using color
    </a>
  </h3>
  <p style={{color: '#a3a3a3', fontSize: '14px', margin: 0}}>
    Guidelines, contrast requirements, best practices, and accessibility standards
  </p>
</div>

<div style={{
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
  borderRadius: '12px',
  padding: '24px',
  border: '1px solid #333',
  textAlign: 'center'
}}>
  <div style={{fontSize: '32px', marginBottom: '16px'}}></div>
  <h3 style={{color: '#E1FF00', marginBottom: '12px'}}>
    <a href="/design/colors/tokens" style={{color: '#E1FF00', textDecoration: 'none'}}>
      Tokens
    </a>
  </h3>
  <p style={{color: '#a3a3a3', fontSize: '14px', margin: 0}}>
    CSS custom properties, JavaScript objects, and implementation code examples
  </p>
</div>

</div>

## Overview

Tanqory Mies uses a systematic approach to color that creates clear, accessible, and beautiful interfaces. Our color system ensures consistency across platforms while supporting both light and dark themes.

## Color has purpose

Every color in Tanqory Mies serves a specific function. Colors communicate meaning, guide user actions, and create visual hierarchy without overwhelming the interface.

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

**Use colors consistently across the interface.** Green indicates success, red shows errors, and blue represents information or primary actions.

<div style={{padding: '16px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}}>
  <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '6px', border: '1px solid #22c55e', marginBottom: '12px'}}>
    <span style={{color: '#15803d', fontSize: '16px'}}>✓</span>
    <span style={{color: '#15803d', fontWeight: 500}}>Profile updated successfully</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#fef2f2', borderRadius: '6px', border: '1px solid #ef4444'}}>
    <span style={{color: '#b91c1c', fontSize: '16px'}}>✗</span>
    <span style={{color: '#b91c1c', fontWeight: 500}}>Please fill in all required fields</span>
  </div>
</div>

</div>

<div>
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

**Don't use colors arbitrarily or inconsistently.** Avoid using red for success or green for errors, as this confuses users and breaks accessibility conventions.

<div style={{padding: '16px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)', opacity: 0.7}}>
  <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#fef2f2', borderRadius: '6px', border: '1px solid #ef4444', marginBottom: '12px'}}>
    <span style={{color: '#b91c1c', fontSize: '16px'}}>✓</span>
    <span style={{color: '#b91c1c', fontWeight: 500}}>Profile updated successfully</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '6px', border: '1px solid #22c55e'}}>
    <span style={{color: '#15803d', fontSize: '16px'}}>✗</span>
    <span style={{color: '#15803d', fontWeight: 500}}>Please fill in all required fields</span>
  </div>
</div>

</div>

</div>

## Color has impact

Tanqory Mies uses a restrained color palette to maximize impact. Against neutral backgrounds, strategic use of color draws attention to the most important elements.

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

**Use color sparingly to highlight primary actions and important information.** Let neutral colors dominate the interface.

<div style={{padding: '24px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)'}}>
  <div style={{marginBottom: '16px'}}>
    <div style={{color: '#171717', fontSize: '18px', fontWeight: 600, marginBottom: '8px'}}>Create new project</div>
    <div style={{color: '#525252', fontSize: '14px', marginBottom: '16px'}}>Start building your next application</div>
  </div>
  <div style={{display: 'flex', gap: '12px'}}>
    <button style={{padding: '8px 16px', backgroundColor: '#0066cc', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500}}>
      Create project
    </button>
    <button style={{padding: '8px 16px', backgroundColor: 'transparent', color: '#525252', border: '1px solid #d4d4d4', borderRadius: '6px'}}>
      Cancel
    </button>
  </div>
</div>

</div>

<div>
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

**Don't overuse bright colors or create visual competition between elements.** This creates a chaotic interface that's hard to navigate.

<div style={{padding: '24px', backgroundColor: 'var(--ifm-background-surface-color)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-300)', opacity: 0.7}}>
  <div style={{marginBottom: '16px'}}>
    <div style={{color: '#ef4444', fontSize: '18px', fontWeight: 600, marginBottom: '8px'}}>Create new project</div>
    <div style={{color: '#f59e0b', fontSize: '14px', marginBottom: '16px'}}>Start building your next application</div>
  </div>
  <div style={{display: 'flex', gap: '12px'}}>
    <button style={{padding: '8px 16px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500}}>
      Create project
    </button>
    <button style={{padding: '8px 16px', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '6px'}}>
      Cancel
    </button>
  </div>
</div>

</div>

</div>

## Color is accessible

All Tanqory Mies colors meet WCAG 2.1 AA accessibility standards. We provide multiple ways to communicate information beyond color alone.

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

**Combine color with icons, text, or patterns to convey information.** Ensure sufficient contrast for readability.

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

</div>

<div>
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

**Don't rely on color alone to communicate important information.** Users with color vision differences may miss critical messages.

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