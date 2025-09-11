# Resource List View

Organizing and presenting collections of related items for efficient browsing, filtering, and bulk operations.

## List View Fundamentals

### When to Use List Views
**Ideal for collections that need comparison and bulk operations**

- **Homogeneous content** - Items with similar properties and actions
- **Comparison shopping** - Users need to evaluate multiple options
- **Bulk operations** - Select and act on multiple items simultaneously
- **Dense information** - More data per item than cards can accommodate
- **Tabular relationships** - Content with clear column-based organization

### Information Density
- **Scannable layout** - Users can quickly review many items
- **Consistent formatting** - Similar information in predictable locations
- **Visual hierarchy** - Most important information prominently displayed
- **White space balance** - Avoid overwhelming density while maximizing content

## List Layout Patterns

### Table-Based Lists
**Structured columns for comparative data**

- **Column headers** - Sortable labels indicating data types
- **Alignment consistency** - Numbers right-aligned, text left-aligned
- **Row striping** - Subtle alternating backgrounds for easier scanning
- **Responsive columns** - Hide less important columns on smaller screens

### Card-Based Lists
**Individual containers in vertical stack**

- **Consistent card structure** - Same information layout for all items
- **Visual separation** - Clear boundaries between items
- **Action placement** - Consistent location for item operations
- **Flexible content** - Accommodate varying information lengths

### Mixed Content Lists
**Heterogeneous items with consistent structure**

- **Content type indicators** - Icons or labels showing item types
- **Adaptive layouts** - Different information displayed per type
- **Consistent interactions** - Similar actions work across item types
- **Visual unity** - Common design elements tie different types together

## Filtering and Search

### Filter Patterns
**Help users narrow down large collections**

- **Faceted filtering** - Multiple criteria applied simultaneously
- **Filter visibility** - Current filters clearly displayed
- **Quick filters** - Common criteria easily accessible
- **Advanced search** - Complex queries for power users
- **Clear filters** - Easy way to reset to full collection

### Search Implementation
- **Live search** - Results update as users type
- **Scoped search** - Within specific collections or categories
- **Search suggestions** - Help users refine queries
- **Recent searches** - Quick access to previous queries
- **Empty states** - Helpful guidance when no results found

### Sort and Organization
- **Multiple sort options** - Date, name, relevance, custom fields
- **Sort direction** - Ascending/descending with clear indicators
- **Default ordering** - Most logical sort for typical use cases
- **Custom arrangements** - User-defined ordering when appropriate

## Selection and Bulk Operations

### Selection Patterns
**Enable users to act on multiple items efficiently**

- **Checkbox selection** - Clear visual indication of selected state
- **Select all/none** - Quick selection of entire collections
- **Range selection** - Shift+click to select contiguous items
- **Persistent selection** - Maintain selections across page navigation

### Batch Actions
- **Action bar** - Operations available for selected items
- **Contextual actions** - Different operations based on selection type
- **Progress feedback** - Show completion for bulk operations
- **Undo capabilities** - Recovery from unintended batch operations

### Selection States
- **Visual feedback** - Selected items clearly distinguished
- **Count indicators** - Number of selected items displayed
- **Mixed selections** - Partial selections in hierarchical lists
- **Keyboard support** - Arrow keys and space for selection

## Performance and Loading

### Large Collection Handling
**Manage performance with extensive datasets**

- **Pagination** - Break large collections into manageable pages
- **Infinite scroll** - Continuously load more items as needed
- **Virtualization** - Render only visible items for very large lists
- **Progressive loading** - Show available items while loading more

### Loading States
- **Skeleton screens** - Placeholder content during initial load
- **Progressive enhancement** - Show basic content, add details progressively
- **Error handling** - Graceful failure with retry options
- **Offline behavior** - Cached content when network unavailable

## Mobile and Responsive Design

### Mobile Adaptations
**Optimize for touch interaction and smaller screens**

- **Touch-friendly targets** - Larger buttons and clear spacing
- **Swipe actions** - Delete, archive, or favorite via gestures
- **Simplified layouts** - Essential information only on small screens
- **Pull-to-refresh** - Update content with familiar gesture

### Responsive Strategies
- **Progressive disclosure** - Show more details as screen size increases
- **Flexible layouts** - Adapt column counts and spacing
- **Navigation adaptation** - Drawer menus on mobile, persistent on desktop
- **Touch vs. hover** - Different interaction patterns per platform

## Accessibility Guidelines

### Screen Reader Support
**Structure content for assistive technology**

- **Table semantics** - Proper headers and cell associations
- **List markup** - Semantic list structures where appropriate
- **Selection announcements** - Clear feedback for bulk selection
- **Navigation shortcuts** - Skip to content or action areas

### Keyboard Navigation
**Full functionality without mouse**

- **Tab order** - Logical progression through interactive elements
- **Arrow key navigation** - Move between list items efficiently
- **Space and Enter** - Consistent selection and activation
- **Escape handling** - Cancel selection or close modal states

### Visual Accessibility
- **High contrast** - Content readable in accessibility modes
- **Focus indicators** - Clear visual feedback for keyboard users
- **Scalable interface** - Works with browser zoom and system scaling
- **Color independence** - Don't rely solely on color for information

## Empty and Error States

### Empty Collection States
**Guide users when lists have no content**

- **First-time empty** - Help users add their first items
- **Filtered empty** - No results for current search/filter
- **Temporary empty** - Content exists but isn't currently available
- **Actionable suggestions** - Clear next steps for populating lists

### Error Recovery
- **Partial loading errors** - Show available content with error indication
- **Retry mechanisms** - Easy ways to attempt loading again
- **Offline indicators** - Clear communication about connectivity issues
- **Graceful fallbacks** - Alternative ways to access content

Well-designed list views help users efficiently browse, compare, and act upon collections while maintaining clarity and performance at scale.