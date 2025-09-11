# Alt Text & Media Captions

Accessible media descriptions ensure everyone can understand your content, regardless of ability or context.

## Alt Text Principles

### Purpose-Driven Descriptions
- **Describe the function** - What role does this image play?
- **Context matters** - Same image may need different alt text in different contexts
- **Skip redundant text** - Don't repeat nearby captions or headings

### Writing Effective Alt Text
- **Start with the essential** - Most important information first
- **Be specific and concise** - 125 characters or less when possible
- **Describe, don't interpret** - What you see, not what you think it means

## Alt Text Patterns

### Functional Images
**Icons and buttons that perform actions**

✅ **Good examples:**
- `alt="Search"` - for search icon button
- `alt="Close dialog"` - for X button
- `alt="Sort by date"` - for sort control

❌ **Avoid these:**
- `alt="Magnifying glass icon"`
- `alt="Red X button"`
- `alt="Arrow pointing up"`

### Informational Images
**Charts, diagrams, and data visualizations**

✅ **Good examples:**
- `alt="Sales increased 23% from January to March 2024"`
- `alt="Network diagram showing database connected to three web servers"`
- `alt="Pie chart: 60% mobile users, 25% desktop, 15% tablet"`

### Decorative Images
**Images that don't add information**

- **Use empty alt** - `alt=""` for truly decorative images
- **Let screen readers skip** - Reduces noise for assistive technology users
- **Be selective** - Most images serve some purpose

## Media Captions

### Video Captions
- **Transcribe all speech** - Include speaker identification when helpful
- **Describe important sounds** - "[Music playing]", "[Door slams]"
- **Indicate tone and emotion** - "[Laughing]", "[Whispering]"
- **Time-synced accuracy** - Captions appear when sounds occur

### Audio Descriptions
- **Describe visual information** - What's happening that audio doesn't convey
- **Natural integration** - Fit descriptions into natural pauses
- **Essential context only** - Don't over-describe decorative elements

## Context Considerations

### Different Contexts, Different Descriptions
**Same image in different settings needs different alt text**

Example: Photo of a person typing on laptop
- **In "About Us"**: `alt="Sarah, lead developer, working on code"`
- **In tutorial**: `alt="Hands positioned on laptop keyboard"`
- **As decoration**: `alt=""` (if purely decorative)

### Complex Images
**Charts, diagrams, and detailed visuals**

- **Short alt + long description** - Brief alt text plus detailed explanation nearby
- **Table format for data** - Convert charts to accessible data tables when possible
- **Progressive disclosure** - Summary first, details available on request

## Technical Guidelines

### Image Types and Alt Text
- **Logos**: Company/product name, not "logo"
- **Screenshots**: Describe what's shown and its purpose
- **Photos**: Focus on relevant details for context
- **Illustrations**: Describe the concept being illustrated

### Implementation
- **Required for all images** - Never leave alt attribute empty unless truly decorative
- **Form images**: Describe the button's action
- **Linked images**: Describe the link destination

## Testing and Validation

### Check Your Alt Text
- **Screen reader test** - Does it make sense when read aloud?
- **Context test** - Would you understand without seeing the image?
- **Length test** - Is it concise but complete?

### Common Problems
- **Generic descriptions** - "Image", "Photo", "Picture"
- **Filename repetition** - "IMG_1234.jpg"
- **Over-description** - Too much detail for simple images
- **Missing context** - Descriptions that don't relate to content purpose

Good alt text and captions make your content accessible to everyone while improving SEO and user experience in all contexts.