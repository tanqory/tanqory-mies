# Formatting Localized Currency

Tanqory Mies provides consistent patterns for displaying currency across different locales and regions.

## Overview

Currency formatting is a critical aspect of international applications, requiring consideration of:
- Number formatting conventions
- Currency symbol placement
- Decimal separators and grouping
- Right-to-left language support

## Implementation Patterns

### JavaScript Intl.NumberFormat

Use the browser's native `Intl.NumberFormat` API for consistent currency formatting:

```javascript
// Basic currency formatting
const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Examples
formatCurrency(1234.56, 'USD', 'en-US'); // $1,234.56
formatCurrency(1234.56, 'EUR', 'de-DE'); // 1.234,56 €
formatCurrency(1234.56, 'JPY', 'ja-JP'); // ¥1,235
formatCurrency(1234.56, 'THB', 'th-TH'); // ฿1,234.56
```

### React Native Implementation

For React Native applications, use similar patterns with locale detection:

```javascript
import { Platform, NativeModules } from 'react-native';

const getDeviceLocale = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

const formatMobileCurrency = (amount, currency) => {
  const locale = getDeviceLocale();
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};
```

## Regional Considerations

### Number Grouping
- **Western**: 1,234,567.89 (comma thousands, period decimal)
- **European**: 1.234.567,89 (period thousands, comma decimal)
- **Indian**: 12,34,567.89 (Indian numbering system)

### Currency Symbol Position
- **Before**: $1,234.56 (USD, CAD)
- **After**: 1,234.56 € (EUR in many locales)
- **Both**: $ 1,234.56 (some locales add spacing)

### Zero Decimal Currencies
Some currencies don't use decimal places:
- Japanese Yen (JPY): ¥1,235
- Korean Won (KRW): ₩1,235

## Best Practices

### Always Use Locale Detection
```javascript
// Good: Respect user's locale
const userLocale = navigator.language || 'en-US';
const formatted = formatCurrency(amount, currency, userLocale);

// Avoid: Hardcoding locale
const formatted = formatCurrency(amount, currency, 'en-US');
```

### Handle Missing Currency Support
```javascript
const formatCurrencyWithFallback = (amount, currency, locale) => {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  } catch (error) {
    // Fallback to decimal formatting with currency code
    return `${currency} ${amount.toFixed(2)}`;
  }
};
```

### Design Considerations
- Ensure sufficient space for varying currency formats
- Test with longest possible currency names
- Consider right-to-left text for Arabic locales
- Use monospace fonts for financial tables

## Component Integration

Tanqory Mies components that display currency should:
1. Accept locale props with sensible defaults
2. Support currency code configuration
3. Handle formatting errors gracefully
4. Maintain consistent spacing and alignment

## Testing

Test currency formatting with:
- Multiple locales (US, EU, Asian markets)
- Various amounts (small, large, zero, negative)
- Different currencies (major and minor)
- Edge cases (very long numbers, unusual currencies)