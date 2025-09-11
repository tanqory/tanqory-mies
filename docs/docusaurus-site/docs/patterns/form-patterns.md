# Form Patterns

Input collection strategies that minimize user effort and errors while maximizing completion rates.

## Form Structure Principles

### Information Architecture
**Organize forms for logical flow and comprehension**

- **Logical grouping** - Related fields together in sections
- **Progressive disclosure** - Complex forms broken into manageable steps
- **Essential first** - Required information before optional details
- **Clear hierarchy** - Section headers and field importance obvious

### Layout Patterns
- **Single column** - Reduces eye scanning, works well on all screen sizes
- **Multi-column** - For wide screens with short, related fields
- **Inline labels** - Space-efficient, works well for familiar fields
- **Top labels** - Best for accessibility and internationalization

## Field Design and Interaction

### Input Types and Controls
**Choose appropriate controls for different data types**

- **Text inputs** - Single line for names, emails, short answers
- **Text areas** - Multi-line for descriptions, comments, long content
- **Dropdowns** - 4+ predetermined options, conserves space
- **Radio buttons** - 2-4 mutually exclusive options, all visible
- **Checkboxes** - Multiple selections, boolean choices
- **Date pickers** - Consistent date entry across platforms

### Input Validation
- **Real-time feedback** - Validate as users type or leave fields
- **Inline messages** - Errors and success near relevant fields
- **Format assistance** - Show examples or auto-format input
- **Progressive validation** - Check requirements as they're met

### Help and Guidance
- **Placeholder text** - Format examples, not instructions
- **Help text** - Additional context below or beside fields
- **Tooltips** - Brief explanations for complex requirements
- **Character counters** - For fields with length limits

## Error Prevention and Handling

### Preventing Errors
**Design forms to avoid common mistakes**

- **Smart defaults** - Pre-fill known or likely values
- **Input constraints** - Prevent invalid characters or formats
- **Format assistance** - Auto-format phone numbers, credit cards
- **Clear requirements** - Password rules, file size limits upfront

### Error Recovery
- **Specific error messages** - "Email address is required" not "Error"
- **Corrective guidance** - How to fix the problem
- **Field highlighting** - Visual indication of problematic fields
- **Preserve valid input** - Don't clear correct fields on error

### Validation Timing
- **Submit validation** - Check all fields when form submitted
- **Field exit validation** - Validate individual fields when user moves on
- **Progressive validation** - Real-time feedback for complex requirements
- **Server validation** - Handle backend errors gracefully

## Multi-Step Forms

### Step Management
**Guide users through complex forms efficiently**

- **Progress indicators** - Show current position and total steps
- **Clear step titles** - Descriptive labels for each stage
- **Navigation controls** - Back/next buttons, step jumping when appropriate
- **Save progress** - Preserve partial completion across sessions

### Information Flow
- **Logical sequence** - Steps follow natural decision-making order
- **Dependency management** - Later steps adapt based on earlier answers
- **Review step** - Final confirmation before submission
- **Edit capability** - Return to previous steps to modify answers

### Step Validation
- **Step-level validation** - Ensure completeness before advancing
- **Cross-step validation** - Check consistency across multiple steps
- **Optional sections** - Clear indication of skippable content
- **Conditional steps** - Show/hide steps based on user responses

## Mobile Form Considerations

### Touch Optimization
**Design for finger interaction and smaller screens**

- **Larger touch targets** - Buttons and inputs sized for fingers
- **Appropriate spacing** - Prevent accidental taps on adjacent elements
- **Thumb-friendly placement** - Important actions within thumb reach
- **Gesture support** - Swipe navigation for multi-step forms

### Input Method Adaptation
- **Keyboard types** - Numeric, email, URL keyboards when appropriate
- **Auto-completion** - Leverage system suggestions when available
- **Voice input** - Support speech-to-text where helpful
- **Camera integration** - Photo capture for document uploads

### Screen Real Estate
- **Vertical layouts** - Stack fields for narrow screens
- **Collapsible sections** - Show one section at a time if needed
- **Sticky elements** - Keep important buttons visible during scroll
- **Minimized chrome** - Reduce non-essential interface elements

## Accessibility in Forms

### Screen Reader Support
**Structure forms for assistive technology**

- **Label associations** - Proper label/input relationships
- **Fieldset grouping** - Related fields grouped semantically
- **Error announcements** - Validation messages announced clearly
- **Required field indication** - Both visual and programmatic marking

### Keyboard Navigation
**Full functionality without mouse**

- **Tab order** - Logical progression through form elements
- **Focus management** - Clear visual indicators for current field
- **Keyboard shortcuts** - Submit form, clear fields, navigate sections
- **Modal focus** - Trap focus in dialogs and overlays

### Visual Accessibility
- **High contrast** - Form elements visible in all viewing modes
- **Scalable text** - Works with browser zoom and system fonts
- **Color independence** - Don't rely solely on color for error indication
- **Motion sensitivity** - Respect reduced motion preferences

## Form Completion and Feedback

### Success States
**Acknowledge successful form submission**

- **Confirmation messages** - Clear indication of successful completion
- **Next steps** - What happens now, what users can do next
- **Reference information** - Confirmation numbers, email notifications
- **Continue workflow** - Logical next actions in user journey

### Progress Preservation
- **Auto-save** - Preserve input without user action
- **Session recovery** - Restore forms after browser crashes
- **Draft management** - Save and return to incomplete forms
- **Data backup** - Prevent loss of extensive user input

### Loading and Processing
- **Submit feedback** - Immediate indication that form was received
- **Processing states** - Progress indicators for server operations
- **Timeout handling** - Graceful management of slow responses
- **Retry mechanisms** - Options when submission fails

Well-designed forms respect users' time and effort while collecting accurate information efficiently across all platforms and abilities.