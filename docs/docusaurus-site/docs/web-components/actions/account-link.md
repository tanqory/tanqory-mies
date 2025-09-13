# Account Link

The Account Link component lets merchants connect or disconnect a third-party service from their Tanqory store.

## Overview

Account Link allows users to connect or disconnect third-party services (payment, social, shipping) to their Tanqory store. Designed to be simpler and clearer than existing solutions, following Tanqory Mies design principles.

## Design Principles

- **No decorative elements**: No shadows, border-radius, or gradients
- **Minimal color palette**: Brand (#E1FF00), black (#000000), white (#FFFFFF)
- **RSC-first**: Server component by default, client-side only when needed
- **Accessibility first**: Keyboard and screen reader friendly

## Properties

| Prop | Type | Description |
|------|------|-------------|
| `service` | `string` | Service name |
| `accountId` | `string` | Optional account identifier |
| `terms` | `ReactNode` | Optional terms link |
| `avatarUrl` | `string` | Optional avatar image |
| `connected` | `boolean` | Current connection state |
| `onToggle` | `(state:boolean)=>void` | Fired when button clicked |
| `details` | `ReactNode` | Optional extra details |
| `className` | `string` | Extra CSS classes |

## Usage Tips

- Always show a clear terms link if needed
- Place near the top of the integration page  
- Button text automatically switches Connect/Disconnect

## Accessibility

- Button is focusable and uses aria-pressed
- Provide aria-label for root group

## Content Guidelines

- **Service title**: Use only the service name (e.g., "Stripe", "PayPal")
- **Button text**: "Connect" for disconnected state, "Disconnect" for connected state
- **Account ID**: Display as subtle secondary text below service name
- **Status indicator**: Show "● Connected" in black for connected services

## Example

<div className="code-preview-container">
  <div className="code-preview-result">
    <div className="p-6 bg-white flex justify-center">
      <div className="border border-gray-300 bg-white rounded-lg shadow-sm p-6 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold text-gray-900">Example App</h2>
            <span className="text-sm text-gray-500">No account connected</span>
            <span className="text-sm text-blue-600">demo@store.com</span>
          </div>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            Connect
          </button>
        </div>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            By clicking <strong>Connect</strong>, you agree to accept Sample App's{' '}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">terms and conditions</a>.
            You'll pay a commission rate of 15% on sales made through Sample App.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

```tsx
import { AccountLink } from "@tanqory/mies-core-web";

<AccountLink
  service="Example App"
  accountId="demo@store.com"
  connected={false}
  terms={<a href="/terms">terms and conditions</a>}
  onToggle={(state)=>console.log('Connected?',state)}
/>
```

### Connected State

<div className="code-preview-container">
  <div className="code-preview-result">
    <div className="p-6 bg-white flex justify-center">
      <div className="border border-gray-300 bg-white rounded-lg shadow-sm p-6 max-w-2xl w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              JA
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-gray-900">Example App</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 font-medium">Account connected</span>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-white text-gray-700 border border-gray-300 font-medium text-sm rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors">
            Disconnect
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

```tsx
<AccountLink
  service="Example App"
  avatarUrl="/avatar.jpg"
  connected={true}
  onToggle={(state)=>console.log('Connected?',state)}
/>
```

### With Details

<div className="code-preview-container">
  <div className="code-preview-result">
    <div className="p-6 bg-white flex justify-center">
      <div className="border border-gray-300 bg-white rounded-lg shadow-sm p-6 max-w-2xl w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              PG
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-semibold text-gray-900">Payment Gateway</h2>
              <span className="text-sm text-gray-500">No account connected</span>
              <span className="text-sm text-blue-600">gateway@business.com</span>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            Connect
          </button>
        </div>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            Process online payments securely. By clicking Connect, you agree to{' '}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">service terms</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

```tsx
<AccountLink
  service="Payment Gateway"
  accountId="gateway@business.com"
  details="Process online payments securely"
  connected={false}
  terms={<a href="/terms">service terms</a>}
  onToggle={(state)=>console.log('Connected?',state)}
/>
```