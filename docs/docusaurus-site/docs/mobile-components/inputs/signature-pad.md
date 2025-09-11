# Signature Pad

Touch-based signature capture component for legal documents and digital signing workflows.

## Overview

Signature Pad enables users to draw signatures using touch gestures, with smooth stroke rendering, export capabilities, and validation features for mobile signing scenarios.

## Usage Guidelines

- **Smooth rendering**: Provide responsive stroke drawing with minimal latency
- **Clear boundaries**: Visual signature area with clear start/end indicators
- **Export formats**: Support multiple export formats (PNG, SVG, base64)
- **Validation options**: Include clear and redo functionality for user corrections

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `onOK` | `function` | - | Called when signature is confirmed |
| `onClear` | `function` | - | Called when signature is cleared |
| `penColor` | `string` | `black` | Stroke color for signature |
| `backgroundColor` | `string` | `white` | Background color of pad |

## Accessibility

- **Touch guidance**: Instructions for signature drawing process
- **Alternative input**: Support for stylus and accessibility switches
- **Confirmation feedback**: Clear indication when signature is captured
- **Error handling**: Accessible feedback for signature validation issues

## Examples

### Legal Document Signature
```jsx
import SignatureCapture from 'react-native-signature-capture';
import { View, Text, TouchableOpacity } from 'react-native';

<View style={styles.signatureContainer}>
  <Text style={styles.signatureLabel}>Please sign below:</Text>
  <SignatureCapture
    style={styles.signature}
    ref={(ref) => { signatureRef = ref; }}
    onSaveEvent={handleSignatureSave}
    onDragEvent={handleSignatureDrag}
    saveImageFileInExtStorage={false}
    showNativeButtons={false}
    showTitleLabel={false}
    backgroundColor="#ffffff"
    strokeColor="#000000"
    minStrokeWidth={4}
    maxStrokeWidth={4}
  />
  <View style={styles.signatureButtons}>
    <TouchableOpacity 
      style={styles.clearButton}
      onPress={() => signatureRef.resetImage()}
    >
      <Text style={styles.buttonText}>Clear</Text>
    </TouchableOpacity>
    <TouchableOpacity 
      style={styles.saveButton}
      onPress={() => signatureRef.saveImage()}
    >
      <Text style={styles.buttonText}>Save Signature</Text>
    </TouchableOpacity>
  </View>
</View>
```

### Delivery Confirmation
```jsx
import SignatureCapture from 'react-native-signature-capture';

<View style={styles.deliverySignature}>
  <Text style={styles.title}>Delivery Confirmation</Text>
  <Text style={styles.instruction}>
    Please sign to confirm receipt of your order
  </Text>
  <SignatureCapture
    style={styles.signaturePad}
    ref={signatureRef}
    onSaveEvent={confirmDelivery}
    backgroundColor="#f8f8f8"
    strokeColor="#333333"
    minStrokeWidth={3}
    maxStrokeWidth={6}
  />
</View>
```