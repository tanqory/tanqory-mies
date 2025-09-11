import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import NewScreen from './src/screens/NewScreen';

// Import icons
import { CartIcon, BoxIcon, SearchIcon } from '@tanqory/mies-icons/native';
import tokens from '@tanqory/mies-tokens/tokens.json';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor={tokens.colors.white} />
      
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: tokens.colors.white,
            borderBottomWidth: tokens.border.width,
            borderBottomColor: tokens.colors.black,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTitleStyle: {
            fontFamily: tokens.typography.fontFamily,
            fontSize: tokens.typography.fontSize.lg,
            fontWeight: '600',
            color: tokens.colors.black,
          },
          tabBarStyle: {
            backgroundColor: tokens.colors.white,
            borderTopWidth: tokens.border.width,
            borderTopColor: tokens.colors.black,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
            elevation: 0,
            height: 80,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarActiveTintColor: tokens.colors.brand,
          tabBarInactiveTintColor: tokens.colors.black,
          tabBarLabelStyle: {
            fontFamily: tokens.typography.fontFamily,
            fontSize: tokens.typography.fontSize.xs,
            fontWeight: '500',
            marginTop: 4,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SearchIcon size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Products" 
          component={ProductsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <BoxIcon size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="New" 
          component={NewScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <CartIcon size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}