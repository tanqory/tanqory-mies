# Audio & Haptics

Tanqory Mies incorporates thoughtful audio and haptic feedback to enhance user experience through multiple sensory channels while maintaining accessibility and user control.

## Feedback Philosophy

### Purposeful Sensory Design
- **Meaningful feedback**: Audio and haptics reinforce important actions
- **User control**: Easy to disable or customize feedback
- **Accessibility first**: Never rely solely on non-visual feedback
- **Cultural sensitivity**: Consider global preferences and norms

### Design Principles
- **Subtle enhancement**: Feedback supports, doesn't distract
- **Context awareness**: Appropriate for environment and device
- **Consistent language**: Unified feedback vocabulary
- **Performance conscious**: Efficient implementation

## Audio Feedback System

### Sound Categories
```typescript
type SoundCategory = 
  | 'system'      // OS-level sounds (focus, select)
  | 'navigation'  // Page changes, menu interactions
  | 'feedback'    // Success, error, warning states
  | 'ambient'     // Background audio, environmental
  | 'notification' // Alerts, messages, updates
```

### Audio Tokens
```typescript
const audioTokens = {
  // System sounds
  focus: {
    file: 'system-focus.mp3',
    duration: 100,
    volume: 0.3,
    category: 'system'
  },
  
  // Navigation sounds
  pageTransition: {
    file: 'nav-transition.mp3',
    duration: 200,
    volume: 0.2,
    category: 'navigation'
  },
  
  // Feedback sounds
  success: {
    file: 'feedback-success.mp3',
    duration: 300,
    volume: 0.4,
    category: 'feedback'
  },
  
  error: {
    file: 'feedback-error.mp3',
    duration: 400,
    volume: 0.5,
    category: 'feedback'
  },
  
  // Notification sounds
  message: {
    file: 'notification-message.mp3',
    duration: 500,
    volume: 0.6,
    category: 'notification'
  }
};
```

### Audio Implementation
```typescript
class AudioManager {
  private audioContext: AudioContext | null = null;
  private audioBuffers: Map<string, AudioBuffer> = new Map();
  private enabled = true;
  private volume = 1.0;
  
  constructor() {
    this.initializeAudio();
    this.loadUserPreferences();
  }
  
  private async initializeAudio() {
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      await this.preloadSounds();
    } catch (error) {
      console.warn('Audio not available:', error);
    }
  }
  
  private async preloadSounds() {
    const promises = Object.entries(audioTokens).map(async ([key, token]) => {
      try {
        const response = await fetch(`/audio/${token.file}`);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext!.decodeAudioData(arrayBuffer);
        this.audioBuffers.set(key, audioBuffer);
      } catch (error) {
        console.warn(`Failed to load audio: ${token.file}`, error);
      }
    });
    
    await Promise.all(promises);
  }
  
  async play(soundKey: string, options: { volume?: number } = {}) {
    if (!this.enabled || !this.audioContext || !this.audioBuffers.has(soundKey)) {
      return;
    }
    
    const buffer = this.audioBuffers.get(soundKey)!;
    const token = audioTokens[soundKey];
    
    const source = this.audioContext.createBufferSource();
    const gainNode = this.audioContext.createGain();
    
    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    const finalVolume = (options.volume ?? token.volume) * this.volume;
    gainNode.gain.setValueAtTime(finalVolume, this.audioContext.currentTime);
    
    source.start();
  }
  
  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    localStorage.setItem('audio-enabled', String(enabled));
  }
  
  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume));
    localStorage.setItem('audio-volume', String(this.volume));
  }
  
  private loadUserPreferences() {
    const enabled = localStorage.getItem('audio-enabled');
    const volume = localStorage.getItem('audio-volume');
    
    this.enabled = enabled !== 'false';
    this.volume = volume ? parseFloat(volume) : 1.0;
  }
}

// Global audio manager instance
export const audioManager = new AudioManager();
```

## Haptic Feedback System

### Haptic Patterns
```typescript
type HapticPattern = 
  | 'light'      // Subtle feedback for minor interactions
  | 'medium'     // Standard feedback for normal interactions
  | 'heavy'      // Strong feedback for important actions
  | 'success'    // Positive action confirmation
  | 'warning'    // Attention-getting feedback
  | 'error'      // Problem indication
  | 'selection'  // Item selection or focus
```

### Haptic Implementation
```typescript
class HapticManager {
  private enabled = true;
  private intensity = 1.0;
  
  constructor() {
    this.loadUserPreferences();
  }
  
  async trigger(pattern: HapticPattern) {
    if (!this.enabled || !navigator.vibrate) {
      return;
    }
    
    const patterns = {
      light: [10],
      medium: [20],
      heavy: [50],
      success: [20, 10, 20],
      warning: [30, 20, 30, 20, 30],
      error: [50, 30, 50],
      selection: [5]
    };
    
    const vibrationPattern = patterns[pattern];
    const adjustedPattern = vibrationPattern.map(duration => 
      Math.round(duration * this.intensity)
    );
    
    try {
      navigator.vibrate(adjustedPattern);
    } catch (error) {
      console.warn('Haptic feedback failed:', error);
    }
  }
  
  setEnabled(enabled: boolean) {
    this.enabled = enabled;
    localStorage.setItem('haptics-enabled', String(enabled));
  }
  
  setIntensity(intensity: number) {
    this.intensity = Math.max(0, Math.min(1, intensity));
    localStorage.setItem('haptics-intensity', String(this.intensity));
  }
  
  private loadUserPreferences() {
    const enabled = localStorage.getItem('haptics-enabled');
    const intensity = localStorage.getItem('haptics-intensity');
    
    this.enabled = enabled !== 'false';
    this.intensity = intensity ? parseFloat(intensity) : 1.0;
  }
}

export const hapticManager = new HapticManager();
```

## Component Integration

### Feedback-Enhanced Components
```typescript
// Button with audio and haptic feedback
const FeedbackButton = ({ 
  children, 
  variant = 'primary',
  onClick,
  audioFeedback = true,
  hapticFeedback = true,
  ...props 
}) => {
  const handleClick = async (event: MouseEvent) => {
    // Provide immediate feedback
    if (audioFeedback) {
      await audioManager.play('focus');
    }
    
    if (hapticFeedback) {
      await hapticManager.trigger('light');
    }
    
    // Execute the actual action
    try {
      await onClick?.(event);
      
      // Success feedback
      if (audioFeedback) {
        await audioManager.play('success');
      }
      if (hapticFeedback) {
        await hapticManager.trigger('success');
      }
    } catch (error) {
      // Error feedback
      if (audioFeedback) {
        await audioManager.play('error');
      }
      if (hapticFeedback) {
        await hapticManager.trigger('error');
      }
    }
  };
  
  return (
    <button
      onClick={handleClick}
      className={`btn btn-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Form Feedback
```typescript
// Input with validation feedback
const FeedbackInput = ({ 
  value, 
  onChange, 
  onValidation,
  audioFeedback = true,
  hapticFeedback = true,
  ...props 
}) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange?.(event);
    
    // Validate input
    try {
      await onValidation?.(newValue);
      
      if (isValid === false) {
        // Transitioning from invalid to valid
        if (audioFeedback) {
          await audioManager.play('success');
        }
        if (hapticFeedback) {
          await hapticManager.trigger('success');
        }
      }
      
      setIsValid(true);
      setError(null);
    } catch (validationError) {
      if (isValid === true) {
        // Transitioning from valid to invalid
        if (audioFeedback) {
          await audioManager.play('error');
        }
        if (hapticFeedback) {
          await hapticManager.trigger('error');
        }
      }
      
      setIsValid(false);
      setError(validationError.message);
    }
  };
  
  return (
    <div className={`input-group ${isValid === false ? 'error' : ''}`}>
      <input
        value={value}
        onChange={handleChange}
        aria-invalid={isValid === false}
        aria-describedby={error ? 'input-error' : undefined}
        {...props}
      />
      {error && (
        <div id=\"input-error\" role=\"alert\" className=\"input-error\">
          {error}
        </div>
      )}
    </div>
  );
};
```

## Accessibility Considerations

### User Preferences
```typescript
// Accessibility preferences component
const FeedbackPreferences = () => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [hapticEnabled, setHapticEnabled] = useState(true);
  const [audioVolume, setAudioVolume] = useState(1.0);
  const [hapticIntensity, setHapticIntensity] = useState(1.0);
  
  useEffect(() => {
    audioManager.setEnabled(audioEnabled);
    hapticManager.setEnabled(hapticEnabled);
  }, [audioEnabled, hapticEnabled]);
  
  useEffect(() => {
    audioManager.setVolume(audioVolume);
    hapticManager.setIntensity(hapticIntensity);
  }, [audioVolume, hapticIntensity]);
  
  return (
    <div className=\"feedback-preferences\">
      <h3>Audio & Haptic Preferences</h3>
      
      <div className=\"preference-group\">
        <label>
          <input
            type=\"checkbox\"
            checked={audioEnabled}
            onChange={(e) => setAudioEnabled(e.target.checked)}
          />
          Enable audio feedback
        </label>
        
        {audioEnabled && (
          <div className=\"preference-control\">
            <label htmlFor=\"audio-volume\">Audio volume:</label>
            <input
              id=\"audio-volume\"
              type=\"range\"
              min=\"0\"
              max=\"1\"
              step=\"0.1\"
              value={audioVolume}
              onChange={(e) => setAudioVolume(parseFloat(e.target.value))}
            />
          </div>
        )}
      </div>
      
      <div className=\"preference-group\">
        <label>
          <input
            type=\"checkbox\"
            checked={hapticEnabled}
            onChange={(e) => setHapticEnabled(e.target.checked)}
          />
          Enable haptic feedback
        </label>
        
        {hapticEnabled && (
          <div className=\"preference-control\">
            <label htmlFor=\"haptic-intensity\">Haptic intensity:</label>
            <input
              id=\"haptic-intensity\"
              type=\"range\"
              min=\"0\"
              max=\"1\"
              step=\"0.1\"
              value={hapticIntensity}
              onChange={(e) => setHapticIntensity(parseFloat(e.target.value))}
            />
          </div>
        )}
      </div>
    </div>
  );
};
```

### Reduced Motion Support
```typescript
// Respect user motion preferences
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return prefersReducedMotion;
};

// Conditional feedback based on user preferences
const useConditionalFeedback = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const playAudio = async (soundKey: string) => {
    if (!prefersReducedMotion) {
      await audioManager.play(soundKey);
    }
  };
  
  const triggerHaptic = async (pattern: HapticPattern) => {
    if (!prefersReducedMotion) {
      await hapticManager.trigger(pattern);
    }
  };
  
  return { playAudio, triggerHaptic };
};
```

## Platform-Specific Implementation

### Web Audio API
```typescript
// Advanced web audio implementation
class WebAudioManager extends AudioManager {
  private compressor: DynamicsCompressorNode | null = null;
  
  protected async initializeAudio() {
    await super.initializeAudio();
    
    if (this.audioContext) {
      // Add audio processing pipeline
      this.compressor = this.audioContext.createDynamicsCompressor();
      this.compressor.connect(this.audioContext.destination);
    }
  }
  
  async playSpatialAudio(soundKey: string, position: { x: number; y: number; z: number }) {
    if (!this.audioContext || !this.audioBuffers.has(soundKey)) return;
    
    const buffer = this.audioBuffers.get(soundKey)!;
    const source = this.audioContext.createBufferSource();
    const panner = this.audioContext.createPanner();
    
    // Configure 3D audio
    panner.panningModel = 'HRTF';
    panner.distanceModel = 'inverse';
    panner.refDistance = 1;
    panner.maxDistance = 10000;
    panner.rolloffFactor = 1;
    
    panner.positionX.setValueAtTime(position.x, this.audioContext.currentTime);
    panner.positionY.setValueAtTime(position.y, this.audioContext.currentTime);
    panner.positionZ.setValueAtTime(position.z, this.audioContext.currentTime);
    
    source.buffer = buffer;
    source.connect(panner);
    panner.connect(this.compressor!);
    
    source.start();
  }
}
```

### React Native Haptics
```typescript
import { Haptics, ImpactFeedbackStyle } from 'expo-haptics';

class NativeHapticManager {
  private enabled = true;
  
  async trigger(pattern: HapticPattern) {
    if (!this.enabled) return;
    
    try {
      switch (pattern) {
        case 'light':
          await Haptics.impactAsync(ImpactFeedbackStyle.Light);
          break;
        case 'medium':
          await Haptics.impactAsync(ImpactFeedbackStyle.Medium);
          break;
        case 'heavy':
          await Haptics.impactAsync(ImpactFeedbackStyle.Heavy);
          break;
        case 'success':
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          break;
        case 'warning':
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
          break;
        case 'error':
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
          break;
        case 'selection':
          await Haptics.selectionAsync();
          break;
      }
    } catch (error) {
      console.warn('Native haptic feedback failed:', error);
    }
  }
}
```

## Performance Optimization

### Audio Optimization
```typescript
// Efficient audio loading and caching
class OptimizedAudioManager {
  private audioPool: Map<string, HTMLAudioElement[]> = new Map();
  private poolSize = 3;
  
  private createAudioPool(soundKey: string, src: string) {
    const pool: HTMLAudioElement[] = [];
    
    for (let i = 0; i < this.poolSize; i++) {
      const audio = new Audio(src);
      audio.preload = 'auto';
      audio.volume = 0; // Start muted to avoid auto-play issues
      pool.push(audio);
    }
    
    this.audioPool.set(soundKey, pool);
  }
  
  async play(soundKey: string, options: { volume?: number } = {}) {
    if (!this.enabled) return;
    
    const pool = this.audioPool.get(soundKey);
    if (!pool) return;
    
    // Find available audio element
    const audio = pool.find(a => a.paused) || pool[0];
    
    audio.currentTime = 0;
    audio.volume = options.volume ?? audioTokens[soundKey].volume;
    
    try {
      await audio.play();
    } catch (error) {
      console.warn('Audio playback failed:', error);
    }
  }
}
```

### Battery Optimization
```typescript
// Battery-aware feedback
class BatteryAwareFeedback {
  private batteryLevel = 1.0;
  private isCharging = true;
  
  constructor() {
    this.monitorBattery();
  }
  
  private async monitorBattery() {
    if ('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        
        this.batteryLevel = battery.level;
        this.isCharging = battery.charging;
        
        battery.addEventListener('levelchange', () => {
          this.batteryLevel = battery.level;
        });
        
        battery.addEventListener('chargingchange', () => {
          this.isCharging = battery.charging;
        });
      } catch (error) {
        console.warn('Battery API not available:', error);
      }
    }
  }
  
  shouldProvideFeedback(): boolean {
    // Reduce feedback when battery is low and not charging
    if (!this.isCharging && this.batteryLevel < 0.2) {
      return false;
    }
    
    return true;
  }
}
```

## Quality Guidelines

### Feedback Design Checklist
- [ ] All feedback has visual alternatives
- [ ] User can disable or customize feedback
- [ ] Audio files are optimized for web delivery
- [ ] Haptic patterns are appropriate for content
- [ ] Battery impact is minimized
- [ ] Cross-platform compatibility tested
- [ ] Accessibility preferences respected

### Testing Strategy
1. **Device testing**: Verify on various devices and platforms
2. **Accessibility audit**: Test with assistive technologies
3. **Performance testing**: Monitor impact on battery and CPU
4. **User testing**: Validate feedback effectiveness
5. **Preference testing**: Ensure controls work as expected

Thoughtful audio and haptic feedback enhances user experience by providing additional sensory confirmation while maintaining full accessibility and user control.