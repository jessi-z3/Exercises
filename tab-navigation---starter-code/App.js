import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import LoginScreen from './LoginScreen';
import WelcomeScreen from './WelcomeScreen';

import LittleLemonFooter from './components/LittleLemonFooter';
import LittleLemonHeader from './components/LittleLemonHeader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator 
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              
              if (route.name === 'Welcome') {
                iconName = focused ? 'restaurant-outline':'home-outline'
              }
              else if (route.name === 'Login') {
                iconName = 'finger-print-outline'
              }
              return <Ionicons name={iconName} size={size} color={color}/>;
            },
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: 'green',
            
          })}
          initialRouteName="Login">
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

