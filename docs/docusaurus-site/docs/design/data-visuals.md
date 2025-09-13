# Charts

Tanqory Mies provides a systematic approach to data visualization that ensures clarity, accessibility, and meaningful insights across all platforms.

## Visualization Philosophy

### Data-Driven Design
- **Clarity over complexity**: Simple, understandable visualizations
- **Purposeful insights**: Every chart serves a specific goal
- **Accessible by default**: Inclusive design for all users
- **Performance conscious**: Efficient rendering and interactions

### Design Principles
- **Truth in data**: Accurate, unbiased representations
- **Progressive disclosure**: Layers of detail on demand
- **Consistent language**: Unified visual vocabulary
- **Responsive design**: Adapts to any screen size

## Chart Types

### Primary Chart Library
```typescript
// Core chart types available
type ChartType = 
  | 'line'        // Trends over time
  | 'bar'         // Categorical comparisons
  | 'column'      // Vertical comparisons
  | 'area'        // Volume over time
  | 'pie'         // Part-to-whole relationships
  | 'donut'       // Part-to-whole with center space
  | 'scatter'     // Correlation analysis
  | 'heatmap'     // Pattern recognition
  | 'funnel'      // Process flow
  | 'gauge'       // Single metric display
```

### Chart Selection Guide
```
Comparison:
├── Bar Chart: Compare categories
├── Column Chart: Compare values over time
└── Grouped Bar: Multiple series comparison

Trends:
├── Line Chart: Continuous data over time
├── Area Chart: Volume/magnitude over time
└── Multi-line: Multiple trend comparison

Distribution:
├── Histogram: Data distribution
├── Box Plot: Statistical summary
└── Scatter Plot: Correlation analysis

Composition:
├── Pie Chart: Simple part-to-whole
├── Donut Chart: Part-to-whole with center metric
└── Stacked Bar: Composition over categories
```

## Color System for Data

### Data Color Palette
```css
:root {
  /* Primary data colors */
  --data-primary: #0066cc;
  --data-secondary: #00a86b;
  --data-tertiary: #ff6b35;
  --data-quaternary: #9b59b6;
  --data-quinary: #f39c12;
  
  /* Sequential scale */
  --data-seq-1: #f7f7f7;
  --data-seq-2: #cccccc;
  --data-seq-3: #969696;
  --data-seq-4: #636363;
  --data-seq-5: #252525;
  
  /* Diverging scale */
  --data-div-1: #d73027;
  --data-div-2: #fc8d59;
  --data-div-3: #fee08b;
  --data-div-4: #e0f3f8;
  --data-div-5: #91bfdb;
  --data-div-6: #4575b4;
}
```

### Accessibility-First Color Choices
```typescript
// ColorBrewer-inspired accessible palettes
const accessiblePalettes = {
  categorical: [
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728',
    '#9467bd', '#8c564b', '#e377c2', '#7f7f7f'
  ],
  
  sequential: [
    '#f7fbff', '#deebf7', '#c6dbef', '#9ecae1',
    '#6baed6', '#4292c6', '#2171b5', '#084594'
  ],
  
  diverging: [
    '#b2182b', '#d6604d', '#f4a582', '#fddbc7',
    '#d1e5f0', '#92c5de', '#4393c3', '#2166ac'
  ]
};
```

## Chart Components

### React Chart Component
```typescript
interface ChartProps {
  type: ChartType;
  data: Array<Record<string, any>>;
  width?: number;
  height?: number;
  responsive?: boolean;
  accessibility?: {
    title: string;
    description: string;
    dataTable?: boolean;
  };
  theme?: 'light' | 'dark';
}

const Chart: React.FC<ChartProps> = ({
  type,
  data,
  width = 600,
  height = 400,
  responsive = true,
  accessibility,
  theme = 'light',
  ...props
}) => {
  return (
    <div className="chart-container" role="img" aria-label={accessibility?.title}>
      <svg
        width={responsive ? '100%' : width}
        height={responsive ? '100%' : height}
        viewBox={`0 0 ${width} ${height}`}
      >
        {/* Chart implementation */}
      </svg>
      
      {accessibility?.description && (
        <div className="sr-only">{accessibility.description}</div>
      )}
      
      {accessibility?.dataTable && (
        <details className="chart-data-table">
          <summary>View data table</summary>
          <DataTable data={data} />
        </details>
      )}
    </div>
  );
};
```

### Chart Styling
```css
.chart-container {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--surface-primary);
  border-radius: 8px;
  padding: var(--spacing-4);
}

.chart-title {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-2);
  color: var(--text-primary);
}

.chart-subtitle {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-4);
}

.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  font-size: var(--text-sm);
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}
```

## Responsive Visualization

### Breakpoint Adaptations
```css
/* Mobile-first chart layouts */
.chart-responsive {
  width: 100%;
  max-width: 100%;
}

@media (max-width: 640px) {
  .chart-container {
    padding: var(--spacing-3);
  }
  
  .chart-legend {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .chart-title {
    font-size: var(--text-base);
  }
}

@media (min-width: 1024px) {
  .chart-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-6);
  }
}
```

### Adaptive Chart Features
```typescript
const useResponsiveChart = (containerRef: RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [containerRef]);
  
  // Adaptive features based on size
  const chartConfig = useMemo(() => ({
    showLegend: dimensions.width > 480,
    showAxis: dimensions.width > 320,
    labelRotation: dimensions.width < 640 ? 45 : 0,
    fontSize: dimensions.width < 480 ? 10 : 12,
  }), [dimensions]);
  
  return { dimensions, chartConfig };
};
```

## Accessibility Standards

### Screen Reader Support
```typescript
// Accessible chart implementation
const AccessibleChart = ({ data, title, description }) => {
  const chartId = useId();
  
  return (
    <div className="chart-wrapper">
      <h3 id={`${chartId}-title`}>{title}</h3>
      
      <div
        role="img"
        aria-labelledby={`${chartId}-title`}
        aria-describedby={`${chartId}-desc`}
      >
        <Chart data={data} />
      </div>
      
      <p id={`${chartId}-desc`} className="sr-only">
        {description}
      </p>
      
      <details className="data-table">
        <summary>View detailed data</summary>
        <table>
          <caption>Data for {title}</caption>
          <thead>
            <tr>
              {Object.keys(data[0]).map(key => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
};
```

### Color Accessibility
```typescript
// Ensure sufficient contrast for data colors
const validateDataColors = (colors: string[], background: string) => {
  return colors.map(color => {
    const contrast = getContrastRatio(color, background);
    if (contrast < 3) {
      console.warn(`Low contrast detected: ${color} on ${background}`);
      return adjustColorForContrast(color, background, 3);
    }
    return color;
  });
};

// Pattern alternatives for color-blind users
const addPatterns = (chartElement: SVGElement) => {
  const defs = chartElement.querySelector('defs') || chartElement.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'defs'));
  
  // Add pattern definitions
  const patterns = ['dots', 'lines', 'diagonal', 'cross'];
  patterns.forEach(pattern => {
    const patternElement = createSVGPattern(pattern);
    defs.appendChild(patternElement);
  });
};
```

## Interactive Features

### Chart Interactions
```typescript
// Hover and tooltip functionality
const useChartInteraction = () => {
  const [hoveredData, setHoveredData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseEnter = (event: MouseEvent, dataPoint: any) => {
    setHoveredData(dataPoint);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };
  
  const handleMouseLeave = () => {
    setHoveredData(null);
  };
  
  return {
    hoveredData,
    tooltipPosition,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};

// Tooltip component
const ChartTooltip = ({ data, position, visible }) => {
  if (!visible || !data) return null;
  
  return (
    <div
      className="chart-tooltip"
      style={{
        left: position.x,
        top: position.y,
        position: 'fixed',
        zIndex: var(--z-popover),
      }}
      role="tooltip"
    >
      <div className="tooltip-content">
        <strong>{data.label}</strong>
        <br />
        Value: {data.value}
        {data.change && (
          <div className={`change ${data.change > 0 ? 'positive' : 'negative'}`}>
            {data.change > 0 ? '+' : ''}{data.change}%
          </div>
        )}
      </div>
    </div>
  );
};
```

### Chart Controls
```typescript
// Chart control panel
const ChartControls = ({ onTimeRangeChange, onChartTypeChange }) => {
  return (
    <div className="chart-controls">
      <div className="control-group">
        <label htmlFor="time-range">Time Range:</label>
        <select id="time-range" onChange={onTimeRangeChange}>
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
          <option value="1y">Last year</option>
        </select>
      </div>
      
      <div className="control-group">
        <label htmlFor="chart-type">Chart Type:</label>
        <select id="chart-type" onChange={onChartTypeChange}>
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="area">Area Chart</option>
        </select>
      </div>
    </div>
  );
};
```

## Performance Optimization

### Efficient Rendering
```typescript
// Virtual scrolling for large datasets
const VirtualizedChart = ({ data, itemHeight = 50 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  
  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    data.length
  );
  
  const visibleItems = data.slice(visibleStart, visibleEnd);
  
  return (
    <div
      ref={containerRef}
      className="virtualized-chart"
      style={{ height: '400px', overflow: 'auto' }}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: data.length * itemHeight, position: 'relative' }}>
        {visibleItems.map((item, index) => (
          <ChartItem
            key={visibleStart + index}
            data={item}
            style={{
              position: 'absolute',
              top: (visibleStart + index) * itemHeight,
              height: itemHeight,
            }}
          />
        ))}
      </div>
    </div>
  );
};
```

### Data Optimization
```typescript
// Efficient data processing
const useProcessedData = (rawData: any[], chartType: ChartType) => {
  return useMemo(() => {
    switch (chartType) {
      case 'line':
        return processTimeSeriesData(rawData);
      case 'bar':
        return aggregateCategoricalData(rawData);
      default:
        return rawData;
    }
  }, [rawData, chartType]);
};

// Data sampling for performance
const sampleData = (data: any[], maxPoints: number = 1000) => {
  if (data.length <= maxPoints) return data;
  
  const step = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % step === 0);
};
```

## Mobile Considerations

### Touch Interactions
```typescript
// Touch-friendly chart interactions
const useTouchInteraction = () => {
  const [touchStart, setTouchStart] = useState(null);
  
  const handleTouchStart = (event: TouchEvent) => {
    setTouchStart({
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    });
  };
  
  const handleTouchMove = (event: TouchEvent) => {
    if (!touchStart) return;
    
    const currentTouch = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    
    // Handle pan/zoom gestures
    const deltaX = currentTouch.x - touchStart.x;
    const deltaY = currentTouch.y - touchStart.y;
    
    // Implement chart panning/zooming
  };
  
  return { handleTouchStart, handleTouchMove };
};
```

### Mobile-Optimized Charts
```css
/* Mobile chart optimizations */
@media (max-width: 640px) {
  .chart-container {
    padding: var(--spacing-2);
  }
  
  .chart-tooltip {
    font-size: var(--text-sm);
    max-width: 200px;
  }
  
  .chart-legend {
    font-size: var(--text-xs);
  }
  
  /* Increase touch targets */
  .chart-interactive-element {
    min-width: 44px;
    min-height: 44px;
  }
}
```

## Quality Guidelines

### Chart Design Checklist
- [ ] Clear, descriptive title and labels
- [ ] Appropriate chart type for data story
- [ ] Accessible color palette with sufficient contrast
- [ ] Alternative text and data table provided
- [ ] Responsive design tested across devices
- [ ] Performance optimized for large datasets
- [ ] Keyboard navigation support implemented

### Testing Strategy
1. **Visual testing**: Verify appearance across browsers
2. **Accessibility audit**: Screen reader and keyboard testing
3. **Performance testing**: Large dataset rendering
4. **Mobile testing**: Touch interactions and responsive layout
5. **Color-blind testing**: Pattern alternatives validation

Thoughtful data visualization helps users understand complex information quickly while maintaining accessibility and performance across all platforms.