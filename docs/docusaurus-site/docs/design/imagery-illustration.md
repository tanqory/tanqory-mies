# Imagery & Illustration

Tanqory Mies uses purposeful imagery and illustration to enhance communication, support content, and create engaging user experiences.

## Visual Content Philosophy

### Purpose-Driven Imagery
- **Functional beauty**: Images serve clear communication goals
- **Authentic representation**: Real, diverse, inclusive imagery
- **Brand consistency**: Unified visual language across platforms
- **Performance conscious**: Optimized for fast loading

### Design Principles
- **Clarity over decoration**: Every image has a purpose
- **Cultural sensitivity**: Globally appropriate imagery
- **Accessibility first**: Alternative text and inclusive design
- **Quality standards**: High-resolution, professional imagery

## Photography Guidelines

### Style Characteristics
- **Natural lighting**: Soft, even illumination
- **Authentic moments**: Real people in genuine situations
- **Clean composition**: Uncluttered, focused subjects
- **Consistent color grading**: Unified visual tone

### Subject Matter
```
People & Lifestyle:
├── Diverse representation across age, ethnicity, ability
├── Professional yet approachable expressions
├── Contemporary, timeless clothing choices
└── Authentic interactions and emotions

Technology & Business:
├── Modern devices and interfaces
├── Clean, organized workspaces
├── Collaborative team environments
└── Innovation and progress themes

Abstract & Conceptual:
├── Geometric patterns and textures
├── Natural forms and landscapes
├── Architectural details
└── Symbolic representations
```

### Technical Specifications
```css
/* Image sizing standards */
:root {
  --image-xs: 64px;     /* Avatars, icons */
  --image-sm: 128px;    /* Small thumbnails */
  --image-md: 256px;    /* Medium thumbnails */
  --image-lg: 512px;    /* Large previews */
  --image-xl: 1024px;   /* Hero images */
  --image-2xl: 2048px;  /* Full-screen displays */
}

/* Responsive image containers */
.image-container {
  position: relative;
  overflow: hidden;
  background: var(--neutral-100);
}

.image-16-9 { aspect-ratio: 16 / 9; }
.image-4-3 { aspect-ratio: 4 / 3; }
.image-1-1 { aspect-ratio: 1 / 1; }
.image-3-4 { aspect-ratio: 3 / 4; }
```

## Illustration System

### Illustration Style
- **Geometric simplicity**: Clean, minimal line work
- **Brand color palette**: Consistent use of system colors
- **Scalable vectors**: Crisp at any resolution
- **Purposeful details**: Essential elements only

### Illustration Categories
```
Interface Illustrations:
├── Empty states and error messages
├── Onboarding and tutorial graphics
├── Feature explanations and callouts
└── Loading and progress indicators

Marketing Illustrations:
├── Hero graphics and landing pages
├── Feature highlights and benefits
├── Process flows and diagrams
└── Brand storytelling visuals

Technical Illustrations:
├── Architectural diagrams
├── Data flow visualizations
├── User journey maps
└── System interconnections
```

### SVG Implementation
```xml
<!-- Standard illustration template -->
<svg 
  viewBox="0 0 400 300" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="illustration-title"
>
  <title id="illustration-title">Descriptive title</title>
  
  <!-- Illustration paths with semantic colors -->
  <path 
    d="M..." 
    fill="var(--brand-primary)" 
    stroke="var(--neutral-300)"
    stroke-width="2"
  />
</svg>
```

## Responsive Images

### Image Component
```typescript
interface ImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  className?: string;
}

const ResponsiveImage: React.FC<ImageProps> = ({
  src,
  alt,
  sizes = '100vw',
  priority = false,
  quality = 85,
  placeholder = 'blur',
  className,
  ...props
}) => {
  return (
    <picture className={className}>
      {/* WebP format for modern browsers */}
      <source 
        srcSet={generateSrcSet(src, 'webp')} 
        sizes={sizes}
        type="image/webp" 
      />
      
      {/* JPEG fallback */}
      <img
        src={src}
        srcSet={generateSrcSet(src, 'jpg')}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        {...props}
      />
    </picture>
  );
};
```

### Srcset Generation
```typescript
const generateSrcSet = (src: string, format: string) => {
  const breakpoints = [320, 640, 768, 1024, 1280, 1920];
  
  return breakpoints
    .map(width => `${optimizeImage(src, width, format)} ${width}w`)
    .join(', ');
};

const optimizeImage = (src: string, width: number, format: string) => {
  // Image optimization service implementation
  return `${src}?w=${width}&f=${format}&q=85`;
};
```

## Image Optimization

### Performance Guidelines
```typescript
// Lazy loading implementation
const useLazyImage = (src: string) => {
  const [imageSrc, setImageSrc] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, [src]);
  
  return { imgRef, imageSrc, isLoaded, setIsLoaded };
};
```

### Progressive Loading
```css
/* Blur-up loading effect */
.image-progressive {
  transition: filter 0.3s ease;
  filter: blur(5px);
}

.image-progressive.loaded {
  filter: blur(0);
}

/* Skeleton loading */
.image-skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 25%,
    var(--neutral-100) 50%,
    var(--neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}
```

## Accessibility Standards

### Alternative Text Guidelines
```typescript
// Comprehensive alt text implementation
const getAltText = (image: ImageData) => {
  if (image.isDecorative) {
    return ''; // Empty alt for decorative images
  }
  
  if (image.isComplex) {
    return `${image.shortDescription}. View detailed description below.`;
  }
  
  return image.description;
};

// Complex image with long description
const ComplexImage = ({ src, alt, longDescription }) => {
  const imageId = useId();
  
  return (
    <figure>
      <img 
        src={src} 
        alt={alt}
        aria-describedby={longDescription ? `${imageId}-desc` : undefined}
      />
      
      {longDescription && (
        <div id={`${imageId}-desc`} className="sr-only">
          {longDescription}
        </div>
      )}
      
      <figcaption>{alt}</figcaption>
    </figure>
  );
};
```

### Color and Contrast
```css
/* Ensure sufficient contrast for overlaid text */
.image-overlay {
  position: relative;
}

.image-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.image-overlay-text {
  position: absolute;
  bottom: var(--spacing-4);
  left: var(--spacing-4);
  right: var(--spacing-4);
  color: white;
  z-index: 2;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
```

## Image States and Interactions

### Hover Effects
```css
/* Subtle image hover effects */
.image-interactive {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.image-interactive:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-lg);
}

.image-interactive:focus {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
```

### Loading States
```typescript
// Image loading component with states
const LoadingImage = ({ src, alt, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  return (
    <div className="image-wrapper">
      {loading && (
        <div className="image-skeleton" aria-label="Loading image">
          <div className="skeleton-animation" />
        </div>
      )}
      
      {error && (
        <div className="image-error">
          <ImageOffIcon size="lg" />
          <span>Failed to load image</span>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        style={{ display: loading || error ? 'none' : 'block' }}
        {...props}
      />
    </div>
  );
};
```

## Brand Asset Guidelines

### Logo Usage
```css
/* Logo sizing and spacing */
.logo-xs { height: 24px; }
.logo-sm { height: 32px; }
.logo-md { height: 48px; }
.logo-lg { height: 64px; }
.logo-xl { height: 96px; }

/* Logo clear space */
.logo-container {
  padding: calc(var(--logo-height) * 0.25);
}

/* Dark/light variants */
.logo-light { display: none; }
.logo-dark { display: block; }

[data-theme="dark"] .logo-light { display: block; }
[data-theme="dark"] .logo-dark { display: none; }
```

### Icon Integration
```typescript
// Consistent icon sizing with images
const IconImage = ({ icon, size = 'md', ...props }) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };
  
  return (
    <div className={`icon-image ${sizeClasses[size]}`} {...props}>
      {icon}
    </div>
  );
};
```

## File Format Guidelines

### Format Selection
```typescript
const getOptimalFormat = (imageType: string, quality: number) => {
  const formats = {
    photo: quality > 90 ? 'jpg' : 'webp',
    illustration: 'svg',
    icon: 'svg',
    logo: 'svg',
    screenshot: 'webp',
    diagram: 'svg',
  };
  
  return formats[imageType] || 'jpg';
};
```

### Compression Standards
```javascript
// Image optimization settings
const optimizationSettings = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  webp: {
    quality: 85,
    method: 6,
    lossless: false,
  },
  png: {
    quality: 90,
    compressionLevel: 9,
    palette: true,
  },
  svg: {
    removeViewBox: false,
    removeDimensions: true,
    cleanupIds: true,
  },
};
```

## Content Management

### Asset Organization
```
/assets/images/
├── brand/
│   ├── logos/
│   ├── icons/
│   └── patterns/
├── photography/
│   ├── people/
│   ├── technology/
│   └── abstract/
├── illustrations/
│   ├── interface/
│   ├── marketing/
│   └── technical/
└── generated/
    ├── optimized/
    ├── thumbnails/
    └── variants/
```

### Naming Conventions
```
Format: [category]-[description]-[variant].[extension]

Examples:
- logo-tanqory-primary.svg
- photo-team-collaboration-hero.jpg
- illustration-empty-state-inbox.svg
- icon-arrow-right-outline.svg
- pattern-geometric-background.svg
```

## Mobile Considerations

### Touch-Friendly Images
```css
/* Appropriate sizing for mobile */
@media (max-width: 640px) {
  .image-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-2);
  }
  
  .image-hero {
    height: 60vh;
    object-fit: cover;
  }
  
  .image-thumbnail {
    min-height: 120px;
    min-width: 120px;
  }
}
```

### Gesture Support
```typescript
// Pinch-to-zoom for images
const usePinchZoom = (imageRef: RefObject<HTMLImageElement>) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleGesture = (event: TouchEvent) => {
      if (event.touches.length === 2) {
        event.preventDefault();
        // Implement pinch-to-zoom logic
      }
    };
    
    const element = imageRef.current;
    if (element) {
      element.addEventListener('touchstart', handleGesture);
      element.addEventListener('touchmove', handleGesture);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('touchstart', handleGesture);
        element.removeEventListener('touchmove', handleGesture);
      }
    };
  }, [imageRef]);
  
  return { scale, position };
};
```

## Quality Assurance

### Image Review Checklist
- [ ] Appropriate file format and compression
- [ ] Meaningful alternative text provided
- [ ] Responsive behavior tested
- [ ] Loading performance optimized
- [ ] Brand guidelines compliance
- [ ] Cultural sensitivity reviewed
- [ ] Accessibility standards met

### Testing Guidelines
1. **Performance testing**: Image loading and rendering speed
2. **Accessibility audit**: Screen reader and keyboard navigation
3. **Visual regression**: Appearance across browsers and devices
4. **Content review**: Brand consistency and cultural appropriateness

Strategic imagery and illustration enhance communication, build brand recognition, and create more engaging user experiences across all touchpoints.