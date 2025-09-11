# Popover Tooltip

Contextual information overlay that appears near trigger elements to provide additional details or guidance.

## Overview

Popover Tooltip displays supplementary information in a floating container positioned relative to trigger elements, offering help text and contextual details without navigating away.

## Usage Guidelines

- **Contextual content**: Provide relevant information related to the trigger element
- **Positioning logic**: Automatically position popover to stay within screen boundaries
- **Dismiss behavior**: Support tap outside, escape key, and automatic timeout dismissal
- **Concise content**: Keep tooltip text brief and scannable for mobile consumption

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `content` | `ReactNode` | - | Tooltip content to display |
| `placement` | `top` \| `bottom` \| `left` \| `right` | `top` | Preferred popover position |
| `trigger` | `press` \| `longPress` \| `hover` | `press` | Activation method |
| `visible` | `boolean` | `false` | Controlled visibility state |

## Accessibility

- **Content association**: Screen readers associate tooltip content with trigger element
- **Focus management**: Tooltip content accessible to keyboard and screen reader users  
- **Dismissal options**: Multiple ways to close tooltip for different accessibility needs
- **Content timing**: Adequate time to read tooltip content before auto-dismissal

## Examples

### Help Tooltip
```jsx
import { View, Text, TouchableOpacity } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

const HelpTooltip = ({ children, helpText }) => {
  const [showTip, setTip] = useState(false);
  
  return (
    <Tooltip
      isVisible={showTip}
      content={<Text style={styles.tooltipText}>{helpText}</Text>}
      placement="top"
      onClose={() => setTip(false)}
      contentStyle={styles.tooltipContainer}
    >
      <TouchableOpacity 
        onPress={() => setTip(true)}
        accessibilityLabel={`Help: ${helpText}`}
        accessibilityRole="button"
      >
        {children}
        <Icon name="help-outline" size={16} style={styles.helpIcon} />
      </TouchableOpacity>
    </Tooltip>
  );
};
```

### Action Tooltip
```jsx
import Tooltip from 'react-native-walkthrough-tooltip';

const ActionTooltip = ({ visible, onClose, children }) => {
  return (
    <Tooltip
      isVisible={visible}
      content={
        <View style={styles.actionTooltip}>
          <Text style={styles.actionTitle}>Quick Actions</Text>
          <TouchableOpacity style={styles.actionItem}>
            <Icon name="edit" size={16} />
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <Icon name="share" size={16} />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>
      }
      placement="bottom"
      onClose={onClose}
    >
      {children}
    </Tooltip>
  );
};
```