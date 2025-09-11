# Interaction Patterns

Tanqory Mies establishes consistent, intuitive interaction patterns that create predictable and delightful user experiences across all platforms.

## Interaction Philosophy

### Predictable Behavior
- **Consistent patterns**: Similar actions behave the same way
- **Clear affordances**: Visual cues indicate interactivity
- **Immediate feedback**: Users understand the result of their actions
- **Graceful degradation**: Fallbacks for limited capabilities

### Design Principles
- **User expectation**: Leverage familiar interaction models
- **Progressive disclosure**: Reveal complexity gradually
- **Error prevention**: Guide users toward success
- **Efficiency**: Minimize steps to complete tasks

## Core Interaction Patterns

### Click/Tap Interactions
```typescript
// Standard click/tap pattern
interface ClickableProps {
  onClick: (event: MouseEvent | TouchEvent) => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const Clickable: React.FC<ClickableProps> = ({
  onClick,
  disabled = false,
  loading = false,
  children,
  ...props
}) => {
  const handleClick = (event: MouseEvent) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick(event);
  };
  
  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`clickable ${disabled ? 'disabled' : ''} ${loading ? 'loading' : ''}`}
      {...props}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};
```

### Hover States
```css
/* Progressive hover enhancement */
.interactive {
  transition: all 0.2s ease;
  cursor: pointer;
}

.interactive:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.interactive:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* Focus-visible for keyboard users */
.interactive:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Focus Management
```typescript
// Focus management utilities
const useFocusManagement = () => {
  const trapFocus = (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };
    
    container.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();
    
    return () => container.removeEventListener('keydown', handleKeyDown);
  };
  
  return { trapFocus };
};
```

## Navigation Patterns

### Menu Interactions
```typescript
// Dropdown menu pattern
const DropdownMenu = ({ trigger, children, placement = 'bottom-start' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        if (!isOpen) {
          setIsOpen(true);
        } else {
          // Focus first menu item
          const firstItem = menuRef.current?.querySelector('[role=\"menuitem\"]') as HTMLElement;
          firstItem?.focus();
        }
        break;
    }
  };
  
  return (
    <div className=\"dropdown\" onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup=\"menu\"
        className=\"dropdown-trigger\"
      >
        {trigger}
      </button>
      
      {isOpen && (
        <div
          ref={menuRef}
          role=\"menu\"
          className=\"dropdown-menu\"
          style={{ position: 'absolute' }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
```

### Tab Navigation
```typescript
// Tab pattern with keyboard support
const TabGroup = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  const handleKeyDown = (event: KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = index > 0 ? index - 1 : tabs.length - 1;
        setActiveTab(prevIndex);
        tabRefs.current[prevIndex]?.focus();
        break;
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = index < tabs.length - 1 ? index + 1 : 0;
        setActiveTab(nextIndex);
        tabRefs.current[nextIndex]?.focus();
        break;
      case 'Home':
        event.preventDefault();
        setActiveTab(0);
        tabRefs.current[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        setActiveTab(tabs.length - 1);
        tabRefs.current[tabs.length - 1]?.focus();
        break;
    }
  };
  
  return (
    <div className=\"tab-group\">
      <div role=\"tablist\" className=\"tab-list\">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={el => tabRefs.current[index] = el}
            role=\"tab\"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            tabIndex={activeTab === index ? 0 : -1}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`tab ${activeTab === index ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {tabs.map((tab, index) => (
        <div
          key={index}
          id={`panel-${index}`}
          role=\"tabpanel\"
          aria-labelledby={`tab-${index}`}
          hidden={activeTab !== index}
          className=\"tab-panel\"
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
```

## Form Interactions

### Input Patterns
```typescript
// Enhanced input component
const Input = ({ label, error, hint, required, ...props }) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const inputId = useId();
  
  return (
    <div className={`input-group ${focused ? 'focused' : ''} ${error ? 'error' : ''}`}>
      <label 
        htmlFor={inputId}
        className={`input-label ${hasValue || focused ? 'active' : ''}`}
      >
        {label}
        {required && <span aria-label=\"required\">*</span>}
      </label>
      
      <input
        id={inputId}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
        aria-invalid={error ? 'true' : 'false'}
        className=\"input-field\"
        {...props}
      />
      
      {hint && (
        <div id={`${inputId}-hint`} className=\"input-hint\">
          {hint}
        </div>
      )}
      
      {error && (
        <div id={`${inputId}-error`} className=\"input-error\" role=\"alert\">
          <ErrorIcon size=\"sm\" />
          {error}
        </div>
      )}
    </div>
  );
};
```

### Selection Patterns
```typescript
// Multi-select with keyboard support
const MultiSelect = ({ options, value, onChange, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedIndex(prev => 
          prev < options.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (focusedIndex >= 0) {
          const option = options[focusedIndex];
          const newValue = value.includes(option.value)
            ? value.filter(v => v !== option.value)
            : [...value, option.value];
          onChange(newValue);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };
  
  return (
    <div className=\"multi-select\" onKeyDown={handleKeyDown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup=\"listbox\"
        className=\"multi-select-trigger\"
      >
        {value.length === 0 ? 'Select options...' : `${value.length} selected`}
      </button>
      
      {isOpen && (
        <ul role=\"listbox\" aria-multiselectable=\"true\" className=\"multi-select-list\">
          {options.map((option, index) => (
            <li
              key={option.value}
              role=\"option\"
              aria-selected={value.includes(option.value)}
              className={`option ${focusedIndex === index ? 'focused' : ''}`}
              onClick={() => {
                const newValue = value.includes(option.value)
                  ? value.filter(v => v !== option.value)
                  : [...value, option.value];
                onChange(newValue);
              }}
            >
              <input
                type=\"checkbox\"
                checked={value.includes(option.value)}
                onChange={() => {}} // Handled by onClick
                tabIndex={-1}
              />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

## Modal and Overlay Patterns

### Modal Interactions
```typescript
// Modal with proper focus management
const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
        previousFocus.current?.focus();
      };
    }
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className=\"modal-overlay\" onClick={onClose}>
      <div
        ref={modalRef}
        className=\"modal\"
        role=\"dialog\"
        aria-modal=\"true\"
        aria-labelledby=\"modal-title\"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header className=\"modal-header\">
          <h2 id=\"modal-title\">{title}</h2>
          <button
            onClick={onClose}
            aria-label=\"Close modal\"
            className=\"modal-close\"
          >
            <XIcon />
          </button>
        </header>
        
        <div className=\"modal-content\">
          {children}
        </div>
      </div>
    </div>
  );
};
```

### Toast Notifications
```typescript
// Toast notification system
const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Date.now().toString();
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);
    
    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }
  };
  
  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };
  
  return { toasts, addToast, removeToast };
};

const ToastContainer = ({ toasts, onRemove }) => {
  return (
    <div className=\"toast-container\" aria-live=\"polite\" aria-label=\"Notifications\">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast toast-${toast.type}`}
          role=\"alert\"
        >
          <div className=\"toast-content\">
            <StatusIcon type={toast.type} />
            <div className=\"toast-message\">
              <strong>{toast.title}</strong>
              {toast.description && <p>{toast.description}</p>}
            </div>
          </div>
          
          <button
            onClick={() => onRemove(toast.id)}
            aria-label=\"Dismiss notification\"
            className=\"toast-close\"
          >
            <XIcon size=\"sm\" />
          </button>
        </div>
      ))}
    </div>
  );
};
```

## Gesture Patterns

### Touch Gestures
```typescript
// Swipe gesture detection
const useSwipeGesture = (
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  threshold: number = 50
) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > threshold;
    const isRightSwipe = distance < -threshold;
    
    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  };
  
  return { onTouchStart, onTouchMove, onTouchEnd };
};
```

### Drag and Drop
```typescript
// Accessible drag and drop
const DragDropList = ({ items, onReorder }) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [dropTarget, setDropTarget] = useState<string | null>(null);
  
  const handleKeyDown = (event: KeyboardEvent, itemId: string, index: number) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      
      if (!draggedItem) {
        setDraggedItem(itemId);
        // Announce drag start
        announceToScreenReader(`Picked up ${items[index].label}. Use arrow keys to move.`);
      } else {
        // Drop item
        const dragIndex = items.findIndex(item => item.id === draggedItem);
        const dropIndex = index;
        
        if (dragIndex !== dropIndex) {
          onReorder(dragIndex, dropIndex);
          announceToScreenReader(`Moved ${items[dragIndex].label} to position ${dropIndex + 1}.`);
        }
        
        setDraggedItem(null);
      }
    }
    
    if (draggedItem && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
      event.preventDefault();
      const direction = event.key === 'ArrowUp' ? -1 : 1;
      const newIndex = Math.max(0, Math.min(items.length - 1, index + direction));
      
      if (newIndex !== index) {
        const targetElement = document.querySelector(`[data-item-id=\"${items[newIndex].id}\"]`);
        (targetElement as HTMLElement)?.focus();
      }
    }
  };
  
  return (
    <ul className=\"drag-drop-list\" role=\"list\">
      {items.map((item, index) => (
        <li
          key={item.id}
          data-item-id={item.id}
          className={`list-item ${draggedItem === item.id ? 'dragging' : ''}`}
          role=\"listitem\"
          tabIndex={0}
          aria-grabbed={draggedItem === item.id}
          onKeyDown={(e) => handleKeyDown(e, item.id, index)}
        >
          <GripIcon className=\"drag-handle\" />
          {item.label}
        </li>
      ))}
    </ul>
  );
};
```

## Accessibility Considerations

### Screen Reader Support
```typescript
// Live region announcements
const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div');
  announcement.textContent = message;
  announcement.setAttribute('aria-live', priority);
  announcement.className = 'sr-only';
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Skip links for keyboard navigation
const SkipLinks = () => {
  return (
    <div className=\"skip-links\">
      <a href=\"#main-content\" className=\"skip-link\">
        Skip to main content
      </a>
      <a href=\"#navigation\" className=\"skip-link\">
        Skip to navigation
      </a>
    </div>
  );
};
```

### Keyboard Navigation
```css
/* Focus management styles */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--color-focus);
  color: white;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
  z-index: var(--z-overlay);
}

.skip-link:focus {
  top: 6px;
}

/* Focus indicators */
.focusable:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .interactive {
    transition: none;
  }
  
  .modal {
    animation: none;
  }
}
```

## Quality Guidelines

### Interaction Testing Checklist
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus indicators are visible and consistent
- [ ] Screen reader announcements are meaningful
- [ ] Touch targets meet minimum size requirements (44px)
- [ ] Gestures have keyboard alternatives
- [ ] Error states provide clear guidance
- [ ] Loading states don't block other interactions

### Performance Considerations
1. **Debounce rapid interactions**: Prevent excessive API calls
2. **Optimize animations**: Use CSS transforms for smooth performance
3. **Lazy load complex interactions**: Load heavy features on demand
4. **Cache interaction state**: Preserve user context across sessions

Consistent interaction patterns create intuitive, accessible experiences that users can learn once and apply everywhere in the system.