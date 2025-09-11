# Stepper

Progress indicator showing user position within multi-step processes like forms or workflows.

## Overview

Stepper visually guides users through sequential steps, providing clear progress indication and navigation between completed, current, and upcoming stages of a process.

## Usage Guidelines

- **Clear progression**: Display current step position and total step count prominently
- **Step navigation**: Allow users to jump to previous steps when appropriate
- **Visual hierarchy**: Distinct styling for completed, active, and upcoming steps
- **Responsive design**: Adapt step indicator size and spacing for smaller screens

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `currentStep` | `number` | `0` | Currently active step index |
| `steps` | `Step[]` | - | Array of step configuration objects |
| `onStepPress` | `function` | - | Step navigation handler |
| `completedSteps` | `number[]` | - | Array of completed step indices |

## Accessibility

- **Progress announcements**: Screen readers communicate current step and total progress
- **Step descriptions**: Each step has clear, descriptive labels
- **Navigation support**: Keyboard and assistive technology can navigate between steps
- **Status communication**: Completed, current, and disabled steps clearly identified

## Examples

### Horizontal Stepper
```jsx
import { View, Text, TouchableOpacity } from 'react-native';

<View style={styles.stepperContainer}>
  <View style={styles.stepperHeader}>
    {steps.map((step, index) => (
      <View key={index} style={styles.stepContainer}>
        <TouchableOpacity
          style={[
            styles.stepCircle,
            index <= currentStep && styles.activeStep,
            index < currentStep && styles.completedStep
          ]}
          onPress={() => onStepPress(index)}
          accessibilityRole="button"
          accessibilityLabel={`Step ${index + 1}: ${step.title}`}
          accessibilityState={{ selected: index === currentStep }}
        >
          <Text style={styles.stepNumber}>{index + 1}</Text>
        </TouchableOpacity>
        <Text style={styles.stepTitle}>{step.title}</Text>
        {index < steps.length - 1 && (
          <View style={[
            styles.stepConnector,
            index < currentStep && styles.completedConnector
          ]} />
        )}
      </View>
    ))}
  </View>
  
  <View style={styles.stepContent}>
    <Text style={styles.stepDescription}>
      {steps[currentStep].description}
    </Text>
    {/* Step content here */}
  </View>
</View>
```

### Vertical Stepper
```jsx
import { ScrollView, View, Text } from 'react-native';

<ScrollView style={styles.verticalStepper}>
  {steps.map((step, index) => (
    <View key={index} style={styles.verticalStepContainer}>
      <View style={styles.stepIndicator}>
        <View style={[
          styles.stepDot,
          index <= currentStep && styles.activeDot,
          index < currentStep && styles.completedDot
        ]} />
        {index < steps.length - 1 && (
          <View style={styles.verticalConnector} />
        )}
      </View>
      <View style={styles.verticalStepContent}>
        <Text style={styles.verticalStepTitle}>{step.title}</Text>
        <Text style={styles.verticalStepDescription}>
          {step.description}
        </Text>
        {index === currentStep && (
          <View style={styles.activeStepContent}>
            {/* Current step content */}
          </View>
        )}
      </View>
    </View>
  ))}
</ScrollView>
```