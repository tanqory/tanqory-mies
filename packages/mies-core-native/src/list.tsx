import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, FlatListProps, TouchableOpacityProps } from 'react-native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export interface ListProps<T> extends Omit<FlatListProps<T>, 'renderItem' | 'style'> {
  data: T[];
  renderItem: (info: { item: T; index: number }) => React.ReactElement;
  spacing?: 'none' | 'sm' | 'base' | 'lg';
  bordered?: boolean;
  style?: ViewStyle;
}

export function List<T>({
  data,
  renderItem,
  spacing = 'none',
  bordered = false,
  style,
  ...props
}: ListProps<T>) {
  const listStyle = [
    styles.list,
    bordered && styles.bordered,
    style,
  ];

  const itemSeparator = spacing !== 'none' ? () => <View style={styles.spacings[spacing]} /> : undefined;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={listStyle}
      ItemSeparatorComponent={itemSeparator}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
}

export interface ListItemProps extends Omit<TouchableOpacityProps, 'style'> {
  children: React.ReactNode;
  padding?: 'sm' | 'base' | 'lg';
  bordered?: boolean;
  divider?: boolean;
  style?: ViewStyle;
}

export function ListItem({
  children,
  padding = 'base',
  bordered = false,
  divider = false,
  style,
  ...props
}: ListItemProps) {
  const itemStyle = [
    styles.item,
    styles.paddings[padding],
    bordered && styles.itemBordered,
    divider && styles.divider,
    style,
  ];

  return (
    <TouchableOpacity style={itemStyle} activeOpacity={0.7} {...props}>
      {children}
    </TouchableOpacity>
  );
}

export interface ListSectionProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  title?: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
}

export function ListSection({
  children,
  title,
  titleStyle,
  style,
  ...props
}: ListSectionProps) {
  return (
    <View style={[styles.section, style]} {...props}>
      {title && (
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, titleStyle]}>{title}</Text>
        </View>
      )}
      {children}
    </View>
  );
}

export interface ListItemTextProps extends Omit<ViewProps, 'style'> {
  primary: string;
  secondary?: string;
  primaryStyle?: TextStyle;
  secondaryStyle?: TextStyle;
  style?: ViewStyle;
}

export function ListItemText({
  primary,
  secondary,
  primaryStyle,
  secondaryStyle,
  style,
  ...props
}: ListItemTextProps) {
  return (
    <View style={[styles.itemText, style]} {...props}>
      <Text style={[styles.primaryText, primaryStyle]}>{primary}</Text>
      {secondary && (
        <Text style={[styles.secondaryText, secondaryStyle]}>{secondary}</Text>
      )}
    </View>
  );
}

export interface ListItemActionProps extends Omit<ViewProps, 'style'> {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function ListItemAction({ children, style, ...props }: ListItemActionProps) {
  return (
    <View style={[styles.itemAction, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: tokens.colors.white,
  },
  bordered: {
    borderWidth: tokens.border.width,
    borderColor: tokens.colors.black,
  },
  spacings: {
    sm: {
      height: tokens.spacing[4],
    },
    base: {
      height: tokens.spacing[8],
    },
    lg: {
      height: tokens.spacing[16],
    },
  } as Record<string, ViewStyle>,
  item: {
    backgroundColor: tokens.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
  },
  paddings: {
    sm: {
      paddingHorizontal: tokens.spacing[12],
      paddingVertical: tokens.spacing[8],
    },
    base: {
      paddingHorizontal: tokens.spacing[16],
      paddingVertical: tokens.spacing[12],
    },
    lg: {
      paddingHorizontal: tokens.spacing[24],
      paddingVertical: tokens.spacing[16],
    },
  } as Record<string, ViewStyle>,
  itemBordered: {
    borderWidth: tokens.border.width,
    borderColor: tokens.colors.black,
  },
  divider: {
    borderBottomWidth: tokens.border.width,
    borderBottomColor: tokens.colors.black,
  },
  section: {
    backgroundColor: tokens.colors.white,
  },
  sectionHeader: {
    paddingHorizontal: tokens.spacing[16],
    paddingVertical: tokens.spacing[8],
    backgroundColor: tokens.colors.white,
    borderBottomWidth: tokens.border.width,
    borderBottomColor: tokens.colors.black,
  },
  sectionTitle: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  itemText: {
    flex: 1,
    gap: tokens.spacing[4],
  },
  primaryText: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '400',
  },
  secondaryText: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.7,
  },
  itemAction: {
    marginLeft: tokens.spacing[12],
  },
});