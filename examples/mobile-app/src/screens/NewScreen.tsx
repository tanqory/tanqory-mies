import React, { useState } from 'react';
import { Text, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Screen, Container, Section, Stack, Divider, Spacer } from '@tanqory/mies-core-native/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-native/card';
import { Button } from '@tanqory/mies-core-native/button';
import { 
  Form, 
  FormField, 
  Label, 
  Input, 
  Textarea, 
  FormActions 
} from '@tanqory/mies-core-native/form';
import { BoxIcon, TagIcon, CreditCardIcon } from '@tanqory/mies-icons/native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export default function NewScreen() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    stock: '',
    sku: '',
    tags: '',
    supplier: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    console.log('🚀 Form submission started');
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.price || !formData.stock) {
      Alert.alert('Validation Error', 'Please fill in all required fields (Name, Price, Stock)', [{ text: 'OK' }]);
      setIsSubmitting(false);
      return;
    }

    // Create product data object
    const productData = {
      name: formData.name,
      description: formData.description,
      category: formData.category || 'Uncategorized',
      price: parseFloat(formData.price) || 0,
      stock: parseInt(formData.stock) || 0,
      sku: formData.sku || `PRD-${Date.now()}`,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
      supplier: formData.supplier,
      createdAt: new Date().toISOString(),
    };

    // Log the submitted data
    console.log('📦 New Product Data:');
    console.log('================');
    console.log(`Name: ${productData.name}`);
    console.log(`Description: ${productData.description}`);
    console.log(`Category: ${productData.category}`);
    console.log(`Price: $${productData.price.toFixed(2)}`);
    console.log(`Stock: ${productData.stock}`);
    console.log(`SKU: ${productData.sku}`);
    console.log(`Tags: [${productData.tags.join(', ')}]`);
    console.log(`Supplier: ${productData.supplier}`);
    console.log(`Total Value: $${(productData.price * productData.stock).toFixed(2)}`);
    console.log('================');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);

    // Show success message
    Alert.alert(
      'Success!',
      `Product "${productData.name}" has been created successfully!\n\nCheck the console for detailed information.`,
      [
        {
          text: 'Create Another',
          onPress: () => {
            setFormData({
              name: '',
              description: '',
              category: '',
              price: '',
              stock: '',
              sku: '',
              tags: '',
              supplier: '',
            });
          }
        },
        { text: 'OK', style: 'default' }
      ]
    );
  };

  const handleReset = () => {
    Alert.alert(
      'Reset Form',
      'Are you sure you want to clear all fields?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Reset',
          style: 'destructive',
          onPress: () => {
            setFormData({
              name: '',
              description: '',
              category: '',
              price: '',
              stock: '',
              sku: '',
              tags: '',
              supplier: '',
            });
            console.log('🔄 Form reset');
          }
        }
      ]
    );
  };

  return (
    <Screen safe scrollable>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Container padding="base">
          {/* Header Section */}
          <Section spacing="base">
            <Stack direction="column" spacing="sm" align="center">
              <Text style={styles.pageTitle}>
                Create New Product
              </Text>
              <Text style={styles.pageDescription}>
                Add a new product to your inventory with detailed information
              </Text>
            </Stack>
          </Section>

          {/* Form Section */}
          <Section spacing="lg">
            <Card padding="lg">
              <CardHeader>
                <Stack direction="row" spacing="sm" align="center">
                  <BoxIcon size={24} color={tokens.colors.brand} />
                  <Text style={styles.sectionTitle}>Product Information</Text>
                </Stack>
                <Text style={styles.sectionDescription}>
                  Fill out the form below to create a new product
                </Text>
              </CardHeader>

              <CardContent>
                <Form spacing="lg">
                  {/* Basic Information */}
                  <Stack direction="column" spacing="base">
                    <Text style={styles.subsectionTitle}>Basic Information</Text>
                    
                    <FormField>
                      <Label required>Product Name</Label>
                      <Input
                        value={formData.name}
                        onChangeText={(value) => handleInputChange('name', value)}
                        placeholder="Enter product name"
                      />
                    </FormField>

                    <FormField>
                      <Label>SKU</Label>
                      <Input
                        value={formData.sku}
                        onChangeText={(value) => handleInputChange('sku', value)}
                        placeholder="PRD-001"
                      />
                    </FormField>

                    <FormField>
                      <Label>Description</Label>
                      <Textarea
                        value={formData.description}
                        onChangeText={(value) => handleInputChange('description', value)}
                        placeholder="Describe your product..."
                        rows={4}
                      />
                    </FormField>

                    <FormField>
                      <Label>Category</Label>
                      <Input
                        value={formData.category}
                        onChangeText={(value) => handleInputChange('category', value)}
                        placeholder="e.g., Electronics, Furniture, Accessories"
                      />
                    </FormField>
                  </Stack>

                  <Divider />

                  {/* Pricing & Inventory */}
                  <Stack direction="column" spacing="base">
                    <Stack direction="row" spacing="sm" align="center">
                      <CreditCardIcon size={16} color={tokens.colors.brand} />
                      <Text style={styles.subsectionTitle}>Pricing & Inventory</Text>
                    </Stack>

                    <Stack direction="row" spacing="base">
                      <FormField style={{ flex: 1 }}>
                        <Label required>Price ($)</Label>
                        <Input
                          value={formData.price}
                          onChangeText={(value) => handleInputChange('price', value)}
                          placeholder="0.00"
                          keyboardType="decimal-pad"
                        />
                      </FormField>

                      <FormField style={{ flex: 1 }}>
                        <Label required>Stock</Label>
                        <Input
                          value={formData.stock}
                          onChangeText={(value) => handleInputChange('stock', value)}
                          placeholder="0"
                          keyboardType="number-pad"
                        />
                      </FormField>
                    </Stack>
                  </Stack>

                  <Divider />

                  {/* Additional Information */}
                  <Stack direction="column" spacing="base">
                    <Stack direction="row" spacing="sm" align="center">
                      <TagIcon size={16} color={tokens.colors.brand} />
                      <Text style={styles.subsectionTitle}>Additional Details</Text>
                    </Stack>

                    <FormField>
                      <Label>Supplier</Label>
                      <Input
                        value={formData.supplier}
                        onChangeText={(value) => handleInputChange('supplier', value)}
                        placeholder="Supplier name"
                      />
                    </FormField>

                    <FormField>
                      <Label>Tags</Label>
                      <Input
                        value={formData.tags}
                        onChangeText={(value) => handleInputChange('tags', value)}
                        placeholder="tag1, tag2, tag3"
                      />
                    </FormField>
                  </Stack>

                  {/* Form Actions */}
                  <FormActions direction="column" spacing="base">
                    <Button
                      variant="primary"
                      onPress={handleSubmit}
                      disabled={isSubmitting}
                      style={{ width: '100%' }}
                    >
                      {isSubmitting ? 'Creating Product...' : 'Create Product'}
                    </Button>
                    
                    <Button
                      variant="outline"
                      onPress={handleReset}
                      disabled={isSubmitting}
                      style={{ width: '100%' }}
                    >
                      Reset Form
                    </Button>
                  </FormActions>
                </Form>
              </CardContent>
            </Card>
          </Section>

          {/* Help Section */}
          <Section spacing="base">
            <Card padding="base">
              <Stack direction="column" spacing="sm" align="center">
                <Text style={styles.helpTitle}>
                  Form Demo Instructions
                </Text>
                <Text style={styles.helpDescription}>
                  This form demonstrates all form components with state management. 
                  Fill out the form and submit to see the data logged to console. 
                  Required fields are marked with an asterisk (*).
                </Text>
              </Stack>
            </Card>
          </Section>

          <Spacer size="xl" />
        </Container>
      </KeyboardAvoidingView>
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
    textAlign: 'center',
  },
  pageDescription: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.8,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: tokens.typography.fontSize.lg,
    lineHeight: tokens.typography.lineHeight.lg,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.7,
  },
  subsectionTitle: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
  },
  helpTitle: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
    textAlign: 'center',
  },
  helpDescription: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.7,
    textAlign: 'center',
  },
});