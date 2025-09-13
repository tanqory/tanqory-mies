# Formatting Localized Currency

Tanqory supports merchants who sell worldwide, so currency formatting must be **accurate, localized, and easy to read**.  
This guide shows how to format currencies across different countries and languages for both merchants and customers.

## Why it matters
- **Sell globally** with correct local formatting  
- **Unify multi-currency stores** so reports and payouts are clear  
- **Reduce confusion** for merchants and buyers

## Key Terms
- **Store currency** – The main currency of the store. All sales reports and analytics use this by default.  
- **Presentment currency** – The currency shown to buyers in the storefront; can differ from the store currency.  
- **Payout currency** – The currency used when Tanqory pays the merchant.  
- **Billing currency** – Currency for app purchases, subscriptions, or platform fees.

## Display Formats
Use two main styles:

| Format      | Description                                    | Example          |
|-------------|------------------------------------------------|------------------|
| **Short**   | Symbol + value, for familiar currencies         | `$12.50`, `12,50 €` |
| **Explicit**| Symbol + value + ISO code, for clarity in mixed currencies | `$12.50 CAD`, `12,50 € EUR` |

**Tip:** For totals or unfamiliar currencies, use **Explicit**.

## Global Standards
Tanqory uses the **CLDR (Common Locale Data Repository)** for locale-aware formatting:

- Places symbol before or after the amount (`$250`, `250 €`)  
- Handles decimals and grouping (`37.50`, `37,50`)  
- Adapts to currencies without minor units (e.g., Japanese yen)

CLDR ensures accuracy, but designers still choose when to show short or explicit format.

## Guidelines

### Merchants
- **Store currency:** Default to **short** format.  
- **Non-store currency:**  
  - **Explicit** for totals or amounts inside buttons/paragraphs.  
  - **Short** for subtotals or line items when the total shows the explicit format.

**Negative amounts:** Always prefix the minus sign.  
`-¥4,200` ✅   `¥-4,200` ❌

### Customers
- Default to **explicit** format on prices seen at checkout or in notifications.  
- Use **short** format for unit or item prices when the context is obvious.

## Design Tips
- Test scenarios with multiple currencies in one store.  
- Use currencies that share the ` symbol (USD, CAD, AUD, HKD, SGD) to check clarity.  
- Include Japanese Yen (JPY) to test long values and spacing.

## Implementation Example (React + Tanqory i18n)
```tsx
import { useI18n } from '@tanqory/react-i18n';

const [i18n] = useI18n();
i18n.locale = 'de-AT';

const priceShort = i18n.formatCurrency(amount, {
  currency: 'EUR',
  form: 'short',
});

const priceExplicit = i18n.formatCurrency(amount, {
  currency: 'EUR',
  form: 'explicit',
});
```