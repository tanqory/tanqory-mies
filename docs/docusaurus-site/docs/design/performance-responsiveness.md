# Speed

Tanqory Mies prioritizes performance as a core design feature, ensuring fast, responsive experiences across all devices and network conditions.

## Performance Philosophy

### Speed as a Feature
- **Performance first**: Speed is a fundamental UX requirement
- **Perceived performance**: Make interfaces feel fast even when loading
- **Progressive enhancement**: Core functionality works everywhere
- **Graceful degradation**: Fallbacks for limited capabilities

### Design Principles
- **Efficient by design**: Minimize resource usage from the start
- **User-centric metrics**: Focus on metrics that impact user experience
- **Continuous optimization**: Regular performance audits and improvements
- **Accessibility performance**: Fast experiences for assistive technologies

## Core Web Vitals

### Key Metrics
```typescript
// Performance monitoring
interface PerformanceMetrics {
  // Core Web Vitals
  LCP: number; // Largest Contentful Paint
  FID: number; // First Input Delay
  CLS: number; // Cumulative Layout Shift
  
  // Additional metrics
  FCP: number; // First Contentful Paint
  TTFB: number; // Time to First Byte
  TTI: number; // Time to Interactive
}

const performanceObserver = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  
  entries.forEach((entry) => {
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        console.log('LCP:', entry.startTime);
        break;
      case 'first-input':
        console.log('FID:', entry.processingStart - entry.startTime);
        break;
      case 'layout-shift':
        if (!entry.hadRecentInput) {
          console.log('CLS:', entry.value);
        }
        break;
    }
  });
});

performanceObserver.observe({
  entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']
});
```

### Performance Targets
```typescript
const performanceTargets = {
  // Core Web Vitals thresholds
  LCP: 2500, // ms - Good: < 2.5s
  FID: 100,  // ms - Good: < 100ms
  CLS: 0.1,  // score - Good: < 0.1
  
  // Additional targets
  FCP: 1800, // ms - Good: < 1.8s
  TTFB: 600, // ms - Good: < 600ms
  TTI: 3800, // ms - Good: < 3.8s
  
  // Bundle size targets
  jsBundle: 250000,  // bytes - < 250KB
  cssBundle: 50000,  // bytes - < 50KB
  imageTotal: 500000 // bytes - < 500KB total
};
```

## Loading Performance

### Critical Resource Optimization
```html
<!-- Critical CSS inlining -->
<style>
  /* Above-the-fold critical styles */
  .header { display: flex; }
  .hero { min-height: 60vh; }
</style>

<!-- Resource prioritization -->
<link rel="preload" href="/fonts/inter-regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preconnect" href="https://api.example.com">
<link rel="dns-prefetch" href="https://cdn.example.com">

<!-- Async non-critical resources -->
<link rel="stylesheet" href="/css/non-critical.css" media="print" onload="this.media='all'">
```

### Code Splitting Strategy
```typescript
// Route-based code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Component-based splitting
const HeavyComponent = lazy(() => 
  import('./components/HeavyComponent').then(module => ({
    default: module.HeavyComponent
  }))
);

// Feature-based splitting
const ChartLibrary = lazy(() => 
  import('./features/charts').then(module => ({
    default: module.Chart
  }))
);

// Conditional loading
const ConditionalComponent = ({ needsFeature, children }) => {
  if (!needsFeature) return children;
  
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <HeavyComponent>{children}</HeavyComponent>
    </Suspense>
  );
};
```

### Progressive Loading
```typescript
// Progressive image loading
const ProgressiveImage = ({ src, placeholder, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`progressive-image ${isLoaded ? 'loaded' : 'loading'}`}
      {...props}
    />
  );
};

// Progressive content loading
const useProgressiveContent = (content: string[], delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState(1);
  
  useEffect(() => {
    if (visibleItems < content.length) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [visibleItems, content.length, delay]);
  
  return content.slice(0, visibleItems);
};
```

## Runtime Performance

### Efficient State Management
```typescript
// Optimized state updates
const useOptimizedState = <T>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const [pendingUpdates, setPendingUpdates] = useState<Partial<T>[]>([]);
  
  // Batch state updates
  const batchUpdate = useCallback((update: Partial<T>) => {
    setPendingUpdates(prev => [...prev, update]);
  }, []);
  
  useEffect(() => {
    if (pendingUpdates.length > 0) {
      const batchedUpdate = pendingUpdates.reduce(
        (acc, update) => ({ ...acc, ...update }),
        {} as Partial<T>
      );
      
      setState(prev => ({ ...prev, ...batchedUpdate }));
      setPendingUpdates([]);
    }
  }, [pendingUpdates]);
  
  return [state, batchUpdate] as const;
};

// Virtualized lists for large datasets
const VirtualizedList = ({ items, itemHeight, containerHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );
  
  const visibleItems = items.slice(visibleStart, visibleEnd);
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleStart * itemHeight;
  
  return (
    <div
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => (
            <div
              key={visibleStart + index}
              style={{ height: itemHeight }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
```

### Memory Management
```typescript
// Cleanup and memory optimization
const useCleanupEffect = (effect: () => () => void, deps: any[]) => {
  useEffect(() => {
    const cleanup = effect();
    return cleanup;
  }, deps);
};

// Efficient event listeners
const useThrottledEvent = (
  eventName: string,
  handler: (event: Event) => void,
  delay: number = 100
) => {
  const throttledHandler = useCallback(
    throttle(handler, delay),
    [handler, delay]
  );
  
  useEffect(() => {
    window.addEventListener(eventName, throttledHandler);
    return () => window.removeEventListener(eventName, throttledHandler);
  }, [eventName, throttledHandler]);
};

// Image cleanup
const useImageCleanup = (imageUrl: string) => {
  useEffect(() => {
    return () => {
      // Revoke object URLs to prevent memory leaks
      if (imageUrl.startsWith('blob:')) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);
};
```

## Layout Performance

### Avoiding Layout Thrashing
```css
/* Efficient CSS for performance */
.performant-layout {
  /* Use transform instead of changing layout properties */
  transform: translateX(0);
  transition: transform 0.3s ease;
  
  /* Promote to composite layer */
  will-change: transform;
  
  /* Avoid expensive properties */
  /* Don't use: width, height, top, left for animations */
  /* Use: transform, opacity for animations */
}

.optimized-animation {
  /* GPU acceleration */
  transform: translateZ(0);
  
  /* Efficient transforms */
  transform: translate3d(0, 0, 0) scale(1);
  
  /* Contain paint operations */
  contain: layout style paint;
}

/* Efficient grid layouts */
.efficient-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  
  /* Avoid complex selectors */
  > .grid-item {
    /* Direct child selector for performance */
  }
}
```

### Layout Shift Prevention
```css
/* Reserve space for dynamic content */
.aspect-ratio-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-ratio-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Skeleton loading to prevent shifts */
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Network Performance

### Efficient Data Fetching
```typescript
// Optimized API calls
const useOptimizedFetch = <T>(url: string, options?: RequestInit) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Use fetch with appropriate caching
        const response = await fetch(url, {
          ...options,
          headers: {
            'Cache-Control': 'max-age=300', // 5 minutes
            ...options?.headers,
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const result = await response.json();
        
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err as Error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      cancelled = true;
    };
  }, [url]);
  
  return { data, loading, error };
};

// Request deduplication
const requestCache = new Map<string, Promise<any>>();

const dedupedFetch = async (url: string, options?: RequestInit) => {
  const key = `${url}:${JSON.stringify(options)}`;
  
  if (requestCache.has(key)) {
    return requestCache.get(key);
  }
  
  const promise = fetch(url, options).then(res => res.json());
  requestCache.set(key, promise);
  
  // Clean up cache after request completes
  promise.finally(() => {
    setTimeout(() => requestCache.delete(key), 5000);
  });
  
  return promise;
};
```

### Caching Strategies
```typescript
// Service Worker caching
const cacheStrategies = {
  // Cache first (for static assets)
  cacheFirst: async (request: Request) => {
    const cache = await caches.open('static-v1');
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  },
  
  // Network first (for dynamic content)
  networkFirst: async (request: Request) => {
    try {
      const response = await fetch(request);
      
      if (response.ok) {
        const cache = await caches.open('dynamic-v1');
        cache.put(request, response.clone());
      }
      
      return response;
    } catch (error) {
      const cache = await caches.open('dynamic-v1');
      const cached = await cache.match(request);
      
      if (cached) {
        return cached;
      }
      
      throw error;
    }
  },
  
  // Stale while revalidate
  staleWhileRevalidate: async (request: Request) => {
    const cache = await caches.open('swr-v1');
    const cached = await cache.match(request);
    
    // Start fetch in background
    const fetchPromise = fetch(request).then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    });
    
    // Return cached immediately if available
    return cached || fetchPromise;
  }
};
```

## Mobile Performance

### Device-Specific Optimizations
```typescript
// Device capability detection
const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState({
    memory: 4, // GB
    cores: 4,
    connection: 'wifi',
    reducedMotion: false,
    lowPower: false,
  });
  
  useEffect(() => {
    // Memory detection
    if ('deviceMemory' in navigator) {
      setCapabilities(prev => ({
        ...prev,
        memory: (navigator as any).deviceMemory
      }));
    }
    
    // CPU cores
    if ('hardwareConcurrency' in navigator) {
      setCapabilities(prev => ({
        ...prev,
        cores: navigator.hardwareConcurrency
      }));
    }
    
    // Network connection
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      setCapabilities(prev => ({
        ...prev,
        connection: connection.effectiveType
      }));
    }
    
    // Reduced motion preference
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setCapabilities(prev => ({
      ...prev,
      reducedMotion: reducedMotion.matches
    }));
  }, []);
  
  return capabilities;
};

// Adaptive loading based on device
const AdaptiveComponent = ({ children }) => {
  const { memory, connection } = useDeviceCapabilities();
  
  // Reduce features for low-end devices
  if (memory < 4 || connection === 'slow-2g') {
    return <LightweightVersion>{children}</LightweightVersion>;
  }
  
  return <FullFeatureVersion>{children}</FullFeatureVersion>;
};
```

### Touch Performance
```css
/* Optimize touch interactions */
.touch-optimized {
  /* Prevent 300ms tap delay */
  touch-action: manipulation;
  
  /* Improve scrolling performance */
  -webkit-overflow-scrolling: touch;
  
  /* Optimize for touch events */
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

/* Reduce paint on scroll */
.scroll-optimized {
  transform: translateZ(0);
  position: fixed;
  will-change: transform;
}
```

## Monitoring and Optimization

### Performance Monitoring
```typescript
// Real User Monitoring (RUM)
class PerformanceMonitor {
  private metrics: PerformanceMetrics = {} as PerformanceMetrics;
  
  constructor() {
    this.setupObservers();
  }
  
  private setupObservers() {
    // Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    
    // Custom metrics
    this.observeNavigationTiming();
    this.observeResourceTiming();
  }
  
  private observeLCP() {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.LCP = lastEntry.startTime;
      this.reportMetric('LCP', lastEntry.startTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  }
  
  private observeFID() {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        const fid = entry.processingStart - entry.startTime;
        this.metrics.FID = fid;
        this.reportMetric('FID', fid);
      });
    }).observe({ entryTypes: ['first-input'] });
  }
  
  private observeCLS() {
    let clsValue = 0;
    
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      
      this.metrics.CLS = clsValue;
      this.reportMetric('CLS', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });
  }
  
  private reportMetric(name: string, value: number) {
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', name, {
        event_category: 'Performance',
        value: Math.round(value),
      });
    }
  }
}
```

### Performance Budget
```json
{
  "performanceBudget": {
    "resourceSizes": [
      {
        "resourceType": "script",
        "budget": 250
      },
      {
        "resourceType": "stylesheet",
        "budget": 50
      },
      {
        "resourceType": "image",
        "budget": 500
      }
    ],
    "resourceCounts": [
      {
        "resourceType": "third-party",
        "budget": 10
      }
    ],
    "timings": [
      {
        "metric": "first-contentful-paint",
        "budget": 1800
      },
      {
        "metric": "largest-contentful-paint",
        "budget": 2500
      },
      {
        "metric": "time-to-interactive",
        "budget": 3800
      }
    ]
  }
}
```

## Quality Guidelines

### Performance Checklist
- [ ] Core Web Vitals meet target thresholds
- [ ] Critical resources are prioritized and optimized
- [ ] Images are properly sized and compressed
- [ ] JavaScript bundles are split and lazy-loaded
- [ ] CSS is optimized and non-critical styles are deferred
- [ ] Layout shifts are minimized
- [ ] Memory leaks are prevented
- [ ] Performance monitoring is implemented

### Testing Strategy
1. **Lab testing**: Lighthouse, WebPageTest, Chrome DevTools
2. **Real user monitoring**: Track actual user performance
3. **Device testing**: Test on various devices and network conditions
4. **Accessibility performance**: Ensure fast experiences for assistive technologies
5. **Regression testing**: Monitor performance changes over time

Performance and responsiveness are fundamental to creating exceptional user experiences that work well for everyone, everywhere.