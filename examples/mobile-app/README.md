# Tanqory Mies - Mobile Demo Application

React Native demo application built with Expo, showcasing the Tanqory Mies design system for mobile applications.

## Features

- **React Native 0.75+** with Expo SDK 50
- **React Navigation** for tab-based navigation
- **Tanqory Mies Design System** integration
- **StyleSheet** based styling with design tokens
- **No shadows, gradients, or border radius** (design constraints)
- **Cross-platform icons** with react-native-svg

## Screens

### 🏠 Home
- Design system overview and hero section
- Button component demos (variants, sizes, states)
- Card component showcase with different configurations
- Feature highlights with e-commerce icons
- Interactive console logging for all button presses

### 📦 Products
- Product list with categories and statistics
- Interactive List components with mock data
- Category filtering demonstration
- Product details with status indicators
- Action buttons with alerts and console logging

### ✏️ New Product
- Comprehensive form with all form components
- State management and real-time validation
- Multi-section layout (Basic Info, Pricing, Additional Details)
- Form submission with detailed console logging
- KeyboardAvoidingView for better UX

## Design System Usage

### Components Used
- **Layout**: `Screen`, `Container`, `Section`, `Stack`, `Divider`, `Spacer`
- **Forms**: `Form`, `FormField`, `Label`, `Input`, `Textarea`, `FormActions`
- **Data**: `List`, `ListItem`, `ListItemText`, `ListItemAction`, `ListSection`
- **UI**: `Button`, `Card`, `CardHeader`, `CardContent`
- **Icons**: `CartIcon`, `BoxIcon`, `TruckIcon`, `CreditCardIcon`, `ChartIcon`, `TagIcon`, `SearchIcon`

### Design Constraints
- **Colors**: Brand (`#E1FF00`), Black (`#000000`), White (`#FFFFFF`)
- **Typography**: Inter font family, `xs`-`2xl` scale
- **Spacing**: `4`, `8`, `12`, `16`, `24`, `32` pixel values from tokens.json
- **No shadows**: `shadowOffset: { height: 0, width: 0 }`, `shadowOpacity: 0`, `elevation: 0`
- **No border radius**: All components use `borderRadius: 0`
- **No gradients**: Solid color backgrounds only

## Getting Started

### Prerequisites
- **Node.js**: 20+
- **Expo CLI**: Latest version
- **iOS Simulator** (macOS) or **Android Emulator**
- **Expo Go** app for testing on physical devices

### Development

```bash
# From the monorepo root
pnpm install

# Navigate to the mobile app
cd examples/mobile-app

# Start the Expo development server
pnpm start

# Run on specific platforms
pnpm ios       # iOS Simulator
pnpm android   # Android Emulator
pnpm web       # Web browser
```

### Building for Production

```bash
# Build for production
expo build:android
expo build:ios

# Or using EAS Build (recommended)
eas build --platform all
```

## Key Technical Features

### 🎨 Design Token Integration
All styling uses tokens from `@tanqory/mies-tokens/tokens.json`:

```tsx
import tokens from '@tanqory/mies-tokens/tokens.json';

const styles = StyleSheet.create({
  text: {
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.fontSize.base,
    color: tokens.colors.black,
  },
  container: {
    padding: tokens.spacing[16],
    backgroundColor: tokens.colors.white,
    borderWidth: tokens.border.width,
    borderColor: tokens.colors.black,
  },
});
```

### 📱 React Navigation Setup
Bottom tab navigation with design system styling:

```tsx
<Tab.Navigator
  screenOptions={{
    tabBarStyle: {
      backgroundColor: tokens.colors.white,
      borderTopWidth: tokens.border.width,
      borderTopColor: tokens.colors.black,
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 0,
      elevation: 0,
    },
    tabBarActiveTintColor: tokens.colors.brand,
    tabBarInactiveTintColor: tokens.colors.black,
  }}
>
```

### 📝 Form State Management
React hooks for form handling:

```tsx
const [formData, setFormData] = useState({
  name: '',
  price: '',
  stock: '',
  // ... other fields
});

const handleSubmit = () => {
  console.log('Form submitted:', formData);
  // Process form data
};
```

### 🖼️ Icon Integration
Cross-platform icons with proper styling:

```tsx
import { CartIcon, BoxIcon } from '@tanqory/mies-icons/native';

<CartIcon size={24} color={tokens.colors.brand} />
<BoxIcon size={20} color={tokens.colors.black} />
```

### 📱 Platform-Specific Code
Keyboard handling and safe areas:

```tsx
<KeyboardAvoidingView 
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={{ flex: 1 }}
>
  <Screen safe scrollable>
    {/* Content */}
  </Screen>
</KeyboardAvoidingView>
```

## File Structure

```
src/
├── screens/
│   ├── HomeScreen.tsx       # Button + Card demos
│   ├── ProductsScreen.tsx   # List components demo
│   └── NewScreen.tsx        # Form components demo
└── types/                   # (Future type definitions)

App.tsx                      # Navigation setup
app.json                     # Expo configuration
metro.config.js             # Metro bundler config
```

## Performance Optimizations

- **StyleSheet.create()**: All styles are optimized and cached
- **Design tokens**: No runtime CSS processing needed
- **Tree-shaking**: Individual component imports
- **React Navigation**: Optimized tab switching
- **Expo optimization**: Platform-specific builds

## Platform Support

### iOS
- **iOS**: 13.0+
- **Simulator**: Xcode 12+
- **Device**: iPhone 6s and newer

### Android  
- **Android**: API Level 21+ (Android 5.0)
- **Emulator**: Android Studio AVD
- **Device**: Most Android phones and tablets

## Environment Requirements

- **React Native**: 0.75.3
- **Expo SDK**: 50.0
- **React**: 18.2.0
- **Node.js**: 20.0+
- **TypeScript**: 5.1.0+

## Console Logging

The app logs detailed information for demonstration purposes:

### Button Interactions
```
🚀 Primary button pressed!
🚀 Secondary button pressed!
```

### Product Selection
```
📦 Product selected: Wireless Headphones
🏷️ Category selected: Electronics
```

### Form Submission
```
🚀 Form submission started
📦 New Product Data:
================
Name: Wireless Headphones
Price: $299.99
Stock: 50
Total Value: $14,999.50
================
```

## Deployment

### Expo Go (Development)
- Install Expo Go on your device
- Scan QR code from `pnpm start`
- Test on real devices instantly

### Production Builds
- **EAS Build**: Managed cloud builds
- **Bare workflow**: Local Xcode/Android Studio builds
- **App Store / Google Play**: Production distribution

## Learn More

- [Tanqory Mies Design System](../../README.md)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native StyleSheet](https://reactnative.dev/docs/stylesheet)