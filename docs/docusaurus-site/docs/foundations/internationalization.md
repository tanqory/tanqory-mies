# Internationalization

Tanqory Mies is designed from the ground up to support international audiences, providing comprehensive patterns for multi-language and multi-cultural experiences.

## Overview

Internationalization (i18n) involves designing and developing applications that can be easily adapted for various languages and regions without engineering changes.

## Core Concepts

### Locale Support
A locale defines:
- **Language**: Primary communication language (e.g., English, Thai, Japanese)
- **Region**: Geographic/cultural context (e.g., US, TH, JP)
- **Format conventions**: Numbers, dates, currency, measurements

### Text Direction
Support for different text directions:
- **LTR (Left-to-Right)**: English, Thai, most European languages
- **RTL (Right-to-Left)**: Arabic, Hebrew
- **Mixed content**: Handling multiple directions in one interface

## Implementation Strategies

### React i18n Integration

```javascript
// Using react-i18next
import { useTranslation } from 'react-i18next';

const WelcomeMessage = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.description')}</p>
      <button onClick={() => i18n.changeLanguage('th')}>
        {t('language.thai')}
      </button>
    </div>
  );
};
```

### Translation File Structure
```
locales/
├── en/
│   ├── common.json
│   ├── navigation.json
│   └── validation.json
├── th/
│   ├── common.json
│   ├── navigation.json
│   └── validation.json
└── ja/
    ├── common.json
    ├── navigation.json
    └── validation.json
```

### React Native Internationalization

```javascript
import { I18nManager } from 'react-native';
import { getLocales } from 'react-native-localize';

// Detect device locale
const deviceLocale = getLocales()[0];

// Handle RTL layouts
const isRTL = I18nManager.isRTL;

const styles = StyleSheet.create({
  container: {
    textAlign: isRTL ? 'right' : 'left',
    flexDirection: isRTL ? 'row-reverse' : 'row',
  },
});
```

## Design Considerations

### Text Expansion
Different languages require different amounts of space:
- **German**: Often 30-50% longer than English
- **Thai**: May require more vertical space due to characters above/below baseline
- **Arabic**: Text expansion and right-to-left flow

### Cultural Adaptations
Beyond language, consider cultural differences:
- **Color meanings**: Red means luck in China, danger in Western cultures
- **Icons**: Hand gestures, religious symbols, directional arrows
- **Images**: People, clothing, food, cultural contexts
- **Date formats**: MM/DD/YYYY vs DD/MM/YYYY vs YYYY/MM/DD

### Typography Considerations
- **Font support**: Ensure fonts support target character sets
- **Line height**: Some languages need more vertical space
- **Character spacing**: Different languages have different spacing needs
- **Font weights**: Not all weights available for all languages

## Technical Implementation

### CSS for Internationalization

```css
/* Direction-aware layouts */
.container {
  margin-inline-start: 1rem; /* Left margin in LTR, right in RTL */
  padding-inline-end: 2rem;  /* Right padding in LTR, left in RTL */
}

/* Text direction support */
[dir="rtl"] .text-align-start {
  text-align: right;
}

[dir="ltr"] .text-align-start {
  text-align: left;
}

/* Font family stacks for different languages */
.font-primary {
  font-family: 
    'Inter', /* Latin characters */
    'Noto Sans Thai', /* Thai characters */
    'Noto Sans CJK', /* Chinese, Japanese, Korean */
    sans-serif;
}
```

### Dynamic Content Loading

```javascript
// Lazy load locale-specific content
const loadLocaleContent = async (locale) => {
  try {
    const messages = await import(`../locales/${locale}/messages.json`);
    return messages.default;
  } catch (error) {
    // Fallback to English
    const fallback = await import('../locales/en/messages.json');
    return fallback.default;
  }
};
```

## Content Strategy

### Translation Workflow
1. **Source content creation**: Write clear, translatable source text
2. **Translation**: Professional translation or localization services
3. **Review**: Native speaker review and cultural adaptation
4. **Testing**: Functional testing in target languages
5. **Maintenance**: Ongoing updates and consistency

### Writing for Translation
- **Use complete sentences**: Avoid string concatenation
- **Provide context**: Include comments for translators
- **Avoid cultural references**: Use universal concepts when possible
- **Consider gender**: Some languages have gendered nouns/verbs

### Pseudo-localization Testing
Use pseudo-localization to test without actual translations:
```javascript
// Pseudo-localization example
const pseudoLocalize = (text) => {
  return `[${text.replace(/[a-z]/g, char => 
    'àáâãäåæçèéêëìíîïñòóôõöøùúûüýÿ'[
      'abcdefghijklmnopqrstuvwxyz'.indexOf(char)
    ] || char
  )}]`;
};
```

## Platform-Specific Considerations

### Web Applications
- **URL structure**: Consider locale in URLs (/en/, /th/, /ja/)
- **SEO**: Proper hreflang attributes for search engines
- **Performance**: Lazy load locale-specific resources
- **Browser support**: Ensure feature support across browsers

### Mobile Applications
- **App store**: Localized app descriptions and screenshots
- **Permissions**: Localized permission request messages
- **Offline support**: Cache translated content for offline use
- **Platform conventions**: Follow iOS/Android locale guidelines

## Testing & Quality Assurance

### Functional Testing
- **Text rendering**: Ensure all characters display correctly
- **Layout integrity**: Check for overflow, truncation, alignment issues
- **Interaction**: Test input methods, keyboard support
- **Performance**: Measure impact of locale switching

### Linguistic Testing
- **Accuracy**: Verify translation quality and cultural appropriateness
- **Consistency**: Check terminology across the application
- **Context**: Ensure translations make sense in UI context
- **Completeness**: Verify all strings are translated

## Maintenance & Scaling

### Translation Management
- **Translation memory**: Reuse existing translations
- **Terminology management**: Maintain consistent vocabulary
- **Workflow automation**: Automated translation workflows
- **Quality metrics**: Track translation quality over time

### Continuous Localization
- **String externalization**: All user-facing text in translation files
- **Automated testing**: CI/CD pipeline includes i18n testing
- **Release coordination**: Coordinate translation updates with releases
- **Community contributions**: Enable community translations when appropriate