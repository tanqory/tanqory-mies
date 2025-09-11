import React from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { Screen, Container, Section, Stack, Divider } from '@tanqory/mies-core-native/layout';
import { Card } from '@tanqory/mies-core-native/card';
import { Button } from '@tanqory/mies-core-native/button';
import { 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAction,
  ListSection 
} from '@tanqory/mies-core-native/list';
import { BoxIcon, TagIcon, TruckIcon, CartIcon, ChartIcon } from '@tanqory/mies-icons/native';
import tokens from '@tanqory/mies-tokens/tokens.json';

// Mock product data
const products = [
  { 
    id: 1, 
    name: 'Wireless Headphones', 
    category: 'Electronics', 
    price: 299.99, 
    stock: 45,
    status: 'In Stock'
  },
  { 
    id: 2, 
    name: 'Ergonomic Office Chair', 
    category: 'Furniture', 
    price: 599.99, 
    stock: 12,
    status: 'Low Stock'
  },
  { 
    id: 3, 
    name: 'Mechanical Keyboard', 
    category: 'Electronics', 
    price: 149.99, 
    stock: 0,
    status: 'Out of Stock'
  },
  { 
    id: 4, 
    name: 'Standing Desk', 
    category: 'Furniture', 
    price: 899.99, 
    stock: 8,
    status: 'In Stock'
  },
  { 
    id: 5, 
    name: 'Wireless Mouse', 
    category: 'Electronics', 
    price: 79.99, 
    stock: 67,
    status: 'In Stock'
  },
  { 
    id: 6, 
    name: 'Monitor Stand', 
    category: 'Accessories', 
    price: 49.99, 
    stock: 23,
    status: 'In Stock'
  },
];

const categories = [
  { name: 'All Products', count: products.length, icon: BoxIcon },
  { name: 'Electronics', count: products.filter(p => p.category === 'Electronics').length, icon: CartIcon },
  { name: 'Furniture', count: products.filter(p => p.category === 'Furniture').length, icon: TruckIcon },
  { name: 'Accessories', count: products.filter(p => p.category === 'Accessories').length, icon: TagIcon },
];

export default function ProductsScreen() {
  const handleProductPress = (product: typeof products[0]) => {
    console.log('📦 Product selected:', product.name);
    Alert.alert(
      product.name,
      `Category: ${product.category}\nPrice: $${product.price.toFixed(2)}\nStock: ${product.stock}\nStatus: ${product.status}`,
      [{ text: 'OK' }]
    );
  };

  const handleCategoryPress = (category: string) => {
    console.log('🏷️ Category selected:', category);
    Alert.alert('Category', `You selected: ${category}`, [{ text: 'OK' }]);
  };

  const handleActionPress = (action: string, productName: string) => {
    console.log(`⚡ ${action} action for:`, productName);
    Alert.alert(action, `${action} action for ${productName}`, [{ text: 'OK' }]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return tokens.colors.brand;
      case 'Low Stock':
        return tokens.colors.black;
      case 'Out of Stock':
        return tokens.colors.black;
      default:
        return tokens.colors.black;
    }
  };

  const getStatusOpacity = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 1;
      case 'Low Stock':
        return 0.7;
      case 'Out of Stock':
        return 0.4;
      default:
        return 1;
    }
  };

  return (
    <Screen safe scrollable>
      <Container padding="base">
        {/* Header Section */}
        <Section spacing="base">
          <Stack direction="column" spacing="sm">
            <Text style={styles.pageTitle}>
              Products
            </Text>
            <Text style={styles.pageDescription}>
              Browse and manage your product inventory
            </Text>
          </Stack>
        </Section>

        {/* Stats Cards */}
        <Section spacing="base">
          <Stack direction="row" spacing="base" wrap>
            <Card padding="base" style={{ flex: 1 }}>
              <Stack direction="row" spacing="sm" align="center" justify="space-between">
                <Stack direction="column" spacing="xs">
                  <Text style={styles.statLabel}>Total</Text>
                  <Text style={styles.statValue}>{products.length}</Text>
                </Stack>
                <ChartIcon size={24} color={tokens.colors.brand} />
              </Stack>
            </Card>
            
            <Card padding="base" style={{ flex: 1 }}>
              <Stack direction="row" spacing="sm" align="center" justify="space-between">
                <Stack direction="column" spacing="xs">
                  <Text style={styles.statLabel}>In Stock</Text>
                  <Text style={styles.statValue}>
                    {products.filter(p => p.status === 'In Stock').length}
                  </Text>
                </Stack>
                <BoxIcon size={24} color={tokens.colors.brand} />
              </Stack>
            </Card>
          </Stack>
        </Section>

        <Divider />

        {/* Categories List */}
        <Section spacing="base">
          <ListSection title="Categories">
            <List
              data={categories}
              spacing="none"
              renderItem={({ item }) => {
                const IconComponent = item.icon;
                return (
                  <ListItem
                    divider
                    onPress={() => handleCategoryPress(item.name)}
                  >
                    <Stack direction="row" spacing="sm" align="center" style={{ flex: 1 }}>
                      <IconComponent size={20} color={tokens.colors.brand} />
                      <ListItemText 
                        primary={item.name}
                        secondary={`${item.count} products`}
                      />
                    </Stack>
                    <Text style={styles.categoryCount}>{item.count}</Text>
                  </ListItem>
                );
              }}
            />
          </ListSection>
        </Section>

        <Divider />

        {/* Products List */}
        <Section spacing="lg">
          <ListSection title="All Products">
            <List
              data={products}
              spacing="none"
              renderItem={({ item, index }) => (
                <ListItem
                  key={item.id}
                  divider
                  onPress={() => handleProductPress(item)}
                >
                  <Stack direction="row" spacing="sm" align="center" style={{ flex: 1 }}>
                    <BoxIcon 
                      size={18} 
                      color={getStatusColor(item.status)}
                      style={{ opacity: getStatusOpacity(item.status) }}
                    />
                    
                    <Stack direction="column" spacing="xs" style={{ flex: 1 }}>
                      <ListItemText 
                        primary={item.name}
                        secondary={item.category}
                      />
                      
                      <Stack direction="row" spacing="base" align="center">
                        <Text style={styles.priceText}>
                          ${item.price.toFixed(2)}
                        </Text>
                        <Text style={[
                          styles.stockText,
                          { opacity: getStatusOpacity(item.status) }
                        ]}>
                          Stock: {item.stock}
                        </Text>
                        <Text style={[
                          styles.statusText,
                          { 
                            color: getStatusColor(item.status),
                            opacity: getStatusOpacity(item.status)
                          }
                        ]}>
                          {item.status}
                        </Text>
                      </Stack>
                    </Stack>
                    
                    <ListItemAction>
                      <Stack direction="row" spacing="xs">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onPress={() => handleActionPress('Edit', item.name)}
                        >
                          Edit
                        </Button>
                      </Stack>
                    </ListItemAction>
                  </Stack>
                </ListItem>
              )}
            />
          </ListSection>
        </Section>

        {/* Action Section */}
        <Section spacing="base">
          <Card padding="base">
            <Stack direction="column" spacing="base" align="center">
              <Text style={styles.actionTitle}>
                List Demo Complete
              </Text>
              <Text style={styles.actionDescription}>
                This demonstrates List components with interactive items, categories, and actions.
              </Text>
              
              <Stack direction="row" spacing="base" style={{ width: '100%' }}>
                <Button 
                  variant="primary"
                  onPress={() => console.log('🔄 Refresh products')}
                  style={{ flex: 1 }}
                >
                  Refresh
                </Button>
                <Button 
                  variant="outline"
                  onPress={() => console.log('📤 Export products')}
                  style={{ flex: 1 }}
                >
                  Export
                </Button>
              </Stack>
            </Stack>
          </Card>
        </Section>
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: tokens.typography.fontSize['2xl'],
    lineHeight: tokens.typography.lineHeight['2xl'],
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '700',
  },
  pageDescription: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.7,
  },
  statLabel: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.7,
  },
  statValue: {
    fontSize: tokens.typography.fontSize.xl,
    lineHeight: tokens.typography.lineHeight.xl,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '700',
  },
  categoryCount: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
    backgroundColor: tokens.colors.brand,
    paddingHorizontal: tokens.spacing[8],
    paddingVertical: tokens.spacing[4],
    minWidth: 28,
    textAlign: 'center',
  },
  priceText: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
  },
  stockText: {
    fontSize: tokens.typography.fontSize.xs,
    lineHeight: tokens.typography.lineHeight.xs,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
  },
  statusText: {
    fontSize: tokens.typography.fontSize.xs,
    lineHeight: tokens.typography.lineHeight.xs,
    fontFamily: tokens.typography.fontFamily,
    fontWeight: '500',
  },
  actionTitle: {
    fontSize: tokens.typography.fontSize.lg,
    lineHeight: tokens.typography.lineHeight.lg,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
    textAlign: 'center',
  },
  actionDescription: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.8,
    textAlign: 'center',
  },
});