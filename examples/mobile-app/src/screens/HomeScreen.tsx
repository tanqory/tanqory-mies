import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Screen, Container, Section, Stack, Divider, Spacer } from '@tanqory/mies-core-native/layout';
import { Card, CardHeader, CardContent } from '@tanqory/mies-core-native/card';
import { Button } from '@tanqory/mies-core-native/button';
import { CartIcon, BoxIcon, ChartIcon } from '@tanqory/mies-icons/native';
import tokens from '@tanqory/mies-tokens/tokens.json';

export default function HomeScreen() {
  const handleButtonPress = (buttonType: string) => {
    console.log(`🚀 ${buttonType} button pressed!`);
  };

  return (
    <Screen safe scrollable>
      <Container padding="base">
        {/* Hero Section */}
        <Section spacing="lg">
          <Stack direction="column" spacing="base" align="center">
            <Text style={styles.heroTitle}>
              Tanqory Mies
            </Text>
            <Text style={styles.heroSubtitle}>
              Cross-platform design system for React Native
            </Text>
            <Text style={styles.heroDescription}>
              Zero gradients, no shadows, no border radius. Built with StyleSheet and design tokens for consistency.
            </Text>
          </Stack>
        </Section>

        <Divider />

        {/* Button Demo Section */}
        <Section spacing="lg">
          <Stack direction="column" spacing="base">
            <Text style={styles.sectionTitle}>
              Button Variants
            </Text>
            <Text style={styles.sectionDescription}>
              Demonstrates the different button variants and sizes
            </Text>
            
            <Stack direction="column" spacing="base">
              <Text style={styles.subsectionTitle}>Variants</Text>
              <Stack direction="row" spacing="base" wrap>
                <Button 
                  variant="primary" 
                  onPress={() => handleButtonPress('Primary')}
                  style={{ flex: 1 }}
                >
                  Primary
                </Button>
                <Button 
                  variant="secondary" 
                  onPress={() => handleButtonPress('Secondary')}
                  style={{ flex: 1 }}
                >
                  Secondary
                </Button>
                <Button 
                  variant="outline" 
                  onPress={() => handleButtonPress('Outline')}
                  style={{ flex: 1 }}
                >
                  Outline
                </Button>
              </Stack>
              
              <Spacer size="base" />
              
              <Text style={styles.subsectionTitle}>Sizes</Text>
              <Stack direction="column" spacing="sm">
                <Button 
                  variant="primary" 
                  size="sm"
                  onPress={() => handleButtonPress('Small')}
                >
                  Small Button
                </Button>
                <Button 
                  variant="primary" 
                  size="base"
                  onPress={() => handleButtonPress('Base')}
                >
                  Base Button
                </Button>
                <Button 
                  variant="primary" 
                  size="lg"
                  onPress={() => handleButtonPress('Large')}
                >
                  Large Button
                </Button>
              </Stack>
              
              <Spacer size="base" />
              
              <Text style={styles.subsectionTitle}>States</Text>
              <Stack direction="row" spacing="base">
                <Button 
                  variant="secondary"
                  onPress={() => handleButtonPress('Enabled')}
                  style={{ flex: 1 }}
                >
                  Enabled
                </Button>
                <Button 
                  variant="secondary"
                  disabled
                  style={{ flex: 1 }}
                >
                  Disabled
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Section>

        <Divider />

        {/* Card Demo Section */}
        <Section spacing="lg">
          <Stack direction="column" spacing="base">
            <Text style={styles.sectionTitle}>
              Card Components
            </Text>
            <Text style={styles.sectionDescription}>
              Flexible container components with different configurations
            </Text>
            
            <Stack direction="column" spacing="base">
              {/* Basic Cards */}
              <Card padding="base" bordered>
                <Text style={styles.cardText}>
                  Basic card with base padding and border
                </Text>
              </Card>
              
              <Card padding="sm" bordered={false}>
                <Text style={[styles.cardText, styles.mutedText]}>
                  Card without border and small padding
                </Text>
              </Card>
              
              {/* Card with Header and Content */}
              <Card padding="lg" bordered>
                <CardHeader>
                  <Stack direction="row" spacing="sm" align="center">
                    <BoxIcon size={20} color={tokens.colors.brand} />
                    <Text style={styles.cardHeaderText}>
                      Product Card
                    </Text>
                  </Stack>
                </CardHeader>
                
                <CardContent>
                  <Text style={styles.cardText}>
                    This card demonstrates the header and content sections with icon integration.
                  </Text>
                  <Spacer size="sm" />
                  <Stack direction="row" spacing="sm">
                    <Button 
                      variant="primary" 
                      size="sm"
                      onPress={() => handleButtonPress('Card Primary')}
                      style={{ flex: 1 }}
                    >
                      Primary
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onPress={() => handleButtonPress('Card Outline')}
                      style={{ flex: 1 }}
                    >
                      Outline
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        </Section>

        <Divider />

        {/* Feature Cards */}
        <Section spacing="lg">
          <Stack direction="column" spacing="base">
            <Text style={styles.sectionTitle}>
              Design System Features
            </Text>
            <Text style={styles.sectionDescription}>
              Key features of the Tanqory Mies design system
            </Text>
            
            <Stack direction="column" spacing="base">
              <Card padding="base" bordered>
                <Stack direction="row" spacing="sm" align="center">
                  <CartIcon size={24} color={tokens.colors.brand} />
                  <Stack direction="column" spacing="xs" style={{ flex: 1 }}>
                    <Text style={styles.featureTitle}>E-commerce Ready</Text>
                    <Text style={styles.featureDescription}>
                      Icons and components designed for e-commerce applications
                    </Text>
                  </Stack>
                </Stack>
              </Card>
              
              <Card padding="base" bordered>
                <Stack direction="row" spacing="sm" align="center">
                  <BoxIcon size={24} color={tokens.colors.brand} />
                  <Stack direction="column" spacing="xs" style={{ flex: 1 }}>
                    <Text style={styles.featureTitle}>No Visual Effects</Text>
                    <Text style={styles.featureDescription}>
                      Zero shadows, gradients, or border radius for clean design
                    </Text>
                  </Stack>
                </Stack>
              </Card>
              
              <Card padding="base" bordered>
                <Stack direction="row" spacing="sm" align="center">
                  <ChartIcon size={24} color={tokens.colors.brand} />
                  <Stack direction="column" spacing="xs" style={{ flex: 1 }}>
                    <Text style={styles.featureTitle}>Cross-Platform</Text>
                    <Text style={styles.featureDescription}>
                      Same design tokens work across Web and React Native
                    </Text>
                  </Stack>
                </Stack>
              </Card>
            </Stack>
          </Stack>
        </Section>

        <Spacer size="xl" />
      </Container>
    </Screen>
  );
}

const styles = StyleSheet.create({
  heroTitle: {
    fontSize: tokens.typography.fontSize['2xl'],
    lineHeight: tokens.typography.lineHeight['2xl'],
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '700',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: tokens.typography.fontSize.lg,
    lineHeight: tokens.typography.lineHeight.lg,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
    textAlign: 'center',
  },
  heroDescription: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.8,
    textAlign: 'center',
    paddingHorizontal: tokens.spacing[16],
  },
  sectionTitle: {
    fontSize: tokens.typography.fontSize.xl,
    lineHeight: tokens.typography.lineHeight.xl,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
  },
  sectionDescription: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.7,
  },
  subsectionTitle: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  cardText: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
  },
  mutedText: {
    opacity: 0.7,
  },
  cardHeaderText: {
    fontSize: tokens.typography.fontSize.lg,
    lineHeight: tokens.typography.lineHeight.lg,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
  },
  featureTitle: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.lineHeight.base,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    fontWeight: '600',
  },
  featureDescription: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.lineHeight.sm,
    fontFamily: tokens.typography.fontFamily,
    color: tokens.colors.black,
    opacity: 0.7,
  },
});