# Card Layouts

Flexible content containers that organize information into digestible, scannable units across different contexts.

## Card Fundamentals

### Card Anatomy
- **Container** - Defined boundary with consistent spacing
- **Header** - Title, metadata, or primary identifier
- **Content area** - Main information or media
- **Actions** - Interactive elements when needed
- **Footer** - Secondary information or additional actions

### When to Use Cards
- **Heterogeneous content** - Different types of information in collections
- **Scannable layouts** - Users need to quickly browse options
- **Actionable items** - Each card represents something users can interact with
- **Responsive grids** - Content that needs to adapt to different screen sizes

## Card Layout Patterns

### Single Column Cards
**Stacked vertical layout for detailed content**

- **Mobile-first approach** - Works well on narrow screens
- **Rich content** - Accommodates images, text, and multiple actions
- **Reading flow** - Natural top-to-bottom scanning
- **Progressive disclosure** - Expand for more details

### Multi-Column Grid
**Responsive grid system for browsing**

- **2-3 columns on tablet** - Balance between content and overview
- **4-6 columns on desktop** - Efficient use of wide screens
- **Consistent card heights** - Maintain visual rhythm
- **Flexible spacing** - Adapt gaps to screen size

### Masonry Layout
**Staggered heights based on content**

- **Variable content lengths** - Cards size to fit their content
- **Visual interest** - Breaks monotony of rigid grids
- **Efficient space usage** - No forced white space
- **Complex implementation** - Consider performance implications

## Card Content Strategies

### Information Hierarchy
**Structure content for quick comprehension**

1. **Primary identifier** - Title, name, or main label
2. **Key details** - Most important supporting information
3. **Visual elements** - Images, icons, or status indicators
4. **Secondary information** - Additional context when needed
5. **Actions** - What users can do next

### Content Consistency
- **Similar information types** - Same fields across card sets
- **Predictable locations** - Users learn where to find information
- **Appropriate detail level** - Enough to make decisions, not overwhelming

## Interactive Card Patterns

### Hover and Focus States
**Provide clear interaction feedback**

- **Subtle elevation** - Lift card slightly on hover
- **Border emphasis** - Highlight active or focused cards
- **Action visibility** - Show additional options on interaction
- **Smooth transitions** - Avoid jarring visual changes

### Card Actions
**Different interaction models for different needs**

- **Whole card clickable** - Navigate to detail view
- **Multiple actions** - Edit, delete, share buttons
- **Quick actions** - Toggle favorites, status changes
- **Context menus** - Secondary actions via right-click or long press

### Selection Patterns
- **Single selection** - Radio button behavior
- **Multiple selection** - Checkbox behavior for batch operations
- **Visual selection state** - Clear indication of selected cards

## Responsive Behavior

### Breakpoint Adaptations
- **Mobile (320-768px)** - Single column, full-width cards
- **Tablet (768-1024px)** - 2-3 column grid, balanced spacing
- **Desktop (1024px+)** - Multi-column grid, efficient browsing

### Content Prioritization
- **Essential information first** - Critical details always visible
- **Progressive enhancement** - Add details as space allows
- **Graceful degradation** - Maintain functionality at all sizes

## Accessibility Guidelines

### Keyboard Navigation
- **Tab order** - Logical progression through cards
- **Action accessibility** - All interactions available via keyboard
- **Skip patterns** - Allow users to jump past card collections

### Screen Reader Support
- **Card labels** - Clear identification of each card's purpose
- **Content structure** - Proper heading hierarchy within cards
- **Action descriptions** - Clear labels for interactive elements

### Visual Accessibility
- **Sufficient contrast** - Text readable against card backgrounds
- **Focus indicators** - Clear visual feedback for keyboard users
- **Motion sensitivity** - Respect reduced motion preferences

## Performance Considerations

### Loading Strategies
- **Progressive loading** - Show cards as content becomes available
- **Skeleton screens** - Placeholder cards during loading
- **Virtualization** - Render only visible cards for large datasets
- **Image optimization** - Responsive images sized for card contexts

### Memory Management
- **Lazy loading** - Load images and content as needed
- **Pagination** - Limit initial card counts for large collections
- **Cleanup patterns** - Remove off-screen cards from memory when appropriate

Well-designed cards create intuitive browsing experiences that scale from simple lists to complex content collections.