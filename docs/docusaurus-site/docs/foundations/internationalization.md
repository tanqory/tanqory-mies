# Internationalization

Building for a **global audience** means designing interfaces that work anywhere.  
These guidelines help Tanqory teams design, write, and code products that feel natural in every market.

## Key Terms

- **Internationalization (i18n)**  
  Preparing a product so it can support any locale: flexible layouts, text expansion, and variable word order.

- **Localization (l10n)**  
  Adapting the product for a specific region or culture: translating text, changing visuals, and adjusting features.

- **Translation**  
  Converting text to another language. Only one part of localization.

- **Locale**  
  A language–country pair, such as `fr-FR` (French–France) or `pt-BR` (Portuguese–Brazil).

## Core Practices

### 1. Plan for Text Expansion
Localized text can be 30–50 % longer than English and may wrap differently.

**Do**
- Use fluid, single-column layouts when possible.  
- Provide generous padding and responsive breakpoints.

**Don't**
- Depend on fixed-width elements or narrow columns.  
- Assume English word length.

### 2. Handle Word Order Changes
Different languages have different sentence structures.

**Do**
- Keep UI text in discrete labels, not concatenated strings.  
- Use short, descriptive link text instead of entire phrases.

**Don't**
- Build interface text by piecing together variables that lock word order.

### 3. Respect Cultural Differences
Visuals, names, and colors carry different meanings.

- Prefer universal icons; research any regional symbols or gestures.  
- Avoid idioms, slang, or pop-culture references.  
- Allow flexible name formats (family name first or last).  
- Adapt date, time, number, and currency formats automatically.  
- Provide clear instructions for required form fields when local norms expect them.

### 4. Test and Validate
- Assume worst-case text length, especially on mobile and in tables.  
- Use automated checks and native speakers to review line breaks and readability.  
- Verify color contrast and language direction (LTR/RTL).  
- Include automated snapshots of layouts in multiple locales as part of CI.

## Using Tanqory Mies Components
All **Mies components** are built with i18n in mind:

- Flexible CSS and token-based spacing for text growth  
- Built-in support for RTL and locale-based formatting  
- Hooks for translation and date/number formatting

Always test localized builds to confirm components display correctly.  
If a component needs additional i18n features, open an issue in the  
[Tanqory Mies GitHub repo](https://github.com/tanqory/tanqory-mies).

## Quick Checklist
- [ ] UI resizes gracefully with 50 % more text  
- [ ] No concatenated or variable-order strings  
- [ ] All dates, times, numbers, and currencies use locale-aware formatting  
- [ ] Icons and colors are culturally neutral  
- [ ] Names and addresses accept different ordering

Designing with these principles ensures every Tanqory product feels **local everywhere** while staying easy to maintain and scale.