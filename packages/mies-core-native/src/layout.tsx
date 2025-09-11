import React from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, ViewStyle, ScrollViewProps, ViewProps } from 'react-native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export interface ContainerProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'base' | 'lg';
  safe?: boolean;
  style?: ViewStyle;
}

export function Container({
  children,
  padding = 'base',
  safe = false,
  style,
  ...props
}: ContainerProps) {
  const containerStyle = [
    styles.container,
    styles.paddings[padding],
    style,
  ];

  const ContainerComponent = safe ? SafeAreaView : View;

  return (
    <ContainerComponent style={containerStyle} {...props}>
      {children}
    </ContainerComponent>
  );
}

export interface HeaderProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  bordered?: boolean;
  safe?: boolean;
  padding?: 'sm' | 'base' | 'lg';
  style?: ViewStyle;
}

export function Header({
  children,
  bordered = true,
  safe = true,
  padding = 'base',
  style,
  ...props
}: HeaderProps) {
  const headerStyle = [
    styles.header,
    styles.paddings[padding],
    bordered && styles.bordered,
    style,
  ];

  const HeaderComponent = safe ? SafeAreaView : View;

  return (
    <HeaderComponent style={headerStyle} {...props}>
      {children}
    </HeaderComponent>
  );
}

export interface ScreenProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  safe?: boolean;
  scrollable?: boolean;
  padding?: 'none' | 'sm' | 'base' | 'lg';
  style?: ViewStyle;
  scrollViewProps?: Omit<ScrollViewProps, 'children'>;
}

export function Screen({
  children,
  safe = true,
  scrollable = false,
  padding = 'none',
  style,
  scrollViewProps,
  ...props
}: ScreenProps) {
  const screenStyle = [
    styles.screen,
    styles.paddings[padding],
    style,
  ];

  const ScreenComponent = safe ? SafeAreaView : View;

  if (scrollable) {
    return (
      <ScreenComponent style={styles.screen}>
        <ScrollView
          style={screenStyle}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          {...scrollViewProps}
          {...props}
        >
          {children}
        </ScrollView>
      </ScreenComponent>
    );
  }

  return (
    <ScreenComponent style={screenStyle} {...props}>
      {children}
    </ScreenComponent>
  );
}

export interface SectionProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  spacing?: 'none' | 'sm' | 'base' | 'lg' | 'xl';
  style?: ViewStyle;
}

export function Section({
  children,
  spacing = 'base',
  style,
  ...props
}: SectionProps) {
  const sectionStyle = [
    styles.section,
    styles.sectionSpacings[spacing],
    style,
  ];

  return (
    <View style={sectionStyle} {...props}>
      {children}
    </View>
  );
}

export interface StackProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  spacing?: 'sm' | 'base' | 'lg' | 'xl';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: boolean;
  style?: ViewStyle;
}

export function Stack({
  children,
  direction = 'column',
  spacing = 'base',
  align = 'stretch',
  justify = 'flex-start',
  wrap = false,
  style,
  ...props
}: StackProps) {
  const stackStyle = [
    styles.stack,
    {
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap ? 'wrap' : 'nowrap',
    },
    direction === 'row' ? styles.rowSpacings[spacing] : styles.columnSpacings[spacing],
    style,
  ];

  return (
    <View style={stackStyle} {...props}>
      {children}
    </View>
  );
}

export interface DividerProps extends Omit<ViewProps, 'style'> {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'sm' | 'base' | 'lg';
  style?: ViewStyle;
}

export function Divider({
  orientation = 'horizontal',
  spacing = 'base',
  style,
  ...props
}: DividerProps) {
  const dividerStyle = [
    styles.divider,
    orientation === 'horizontal' ? styles.horizontalDivider : styles.verticalDivider,
    styles.dividerSpacings[spacing],
    style,
  ];

  return <View style={dividerStyle} {...props} />;
}

export interface SpacerProps extends Omit<ViewProps, 'style'> {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  style?: ViewStyle;
}

export function Spacer({ size = 'base', style, ...props }: SpacerProps) {
  const spacerStyle = [
    styles.spacers[size],
    style,
  ];

  return <View style={spacerStyle} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.white,
  },
  paddings: {
    none: {},
    sm: {
      padding: tokens.spacing[16],
    },
    base: {
      padding: tokens.spacing[24],
    },
    lg: {
      padding: tokens.spacing[32],
    },
  } as Record<string, ViewStyle>,
  header: {
    backgroundColor: tokens.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 56,
  },
  bordered: {
    borderBottomWidth: tokens.border.width,
    borderBottomColor: tokens.colors.black,
  },
  screen: {
    flex: 1,
    backgroundColor: tokens.colors.white,
  },
  scrollContent: {
    flexGrow: 1,
  },
  section: {
    backgroundColor: tokens.colors.white,
  },
  sectionSpacings: {
    none: {},
    sm: {
      paddingVertical: tokens.spacing[16],
    },
    base: {
      paddingVertical: tokens.spacing[24],
    },
    lg: {
      paddingVertical: tokens.spacing[32],
    },
    xl: {
      paddingVertical: tokens.spacing[48] || tokens.spacing[32] * 1.5,
    },
  } as Record<string, ViewStyle>,
  stack: {
    backgroundColor: tokens.colors.white,
  },
  rowSpacings: {
    sm: {
      gap: tokens.spacing[8],
    },
    base: {
      gap: tokens.spacing[16],
    },
    lg: {
      gap: tokens.spacing[24],
    },
    xl: {
      gap: tokens.spacing[32],
    },
  } as Record<string, ViewStyle>,
  columnSpacings: {
    sm: {
      gap: tokens.spacing[8],
    },
    base: {
      gap: tokens.spacing[16],
    },
    lg: {
      gap: tokens.spacing[24],
    },
    xl: {
      gap: tokens.spacing[32],
    },
  } as Record<string, ViewStyle>,
  divider: {
    backgroundColor: tokens.colors.black,
  },
  horizontalDivider: {
    height: tokens.border.width,
    width: '100%',
  },
  verticalDivider: {
    width: tokens.border.width,
    height: '100%',
  },
  dividerSpacings: {
    sm: {
      margin: tokens.spacing[8],
    },
    base: {
      margin: tokens.spacing[16],
    },
    lg: {
      margin: tokens.spacing[24],
    },
  } as Record<string, ViewStyle>,
  spacers: {
    xs: {
      height: tokens.spacing[4],
    },
    sm: {
      height: tokens.spacing[8],
    },
    base: {
      height: tokens.spacing[16],
    },
    lg: {
      height: tokens.spacing[24],
    },
    xl: {
      height: tokens.spacing[32],
    },
  } as Record<string, ViewStyle>,
});