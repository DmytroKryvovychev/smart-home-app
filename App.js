import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar></StatusBar>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={Dashboard.navigationOptions}
          // options={{
          //   title: 'Dashboard',
          //   headerTintColor: '#2a86ff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //     fontSize: 24,
          //   },
          //   headerStyle: {
          //     shadowOpacity: 0.8,
          //     elevation: 0.8,
          //   },
          //   animationEnabled: true,
          // }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          // options={{
          //   title: 'Settings',
          //   headerTintColor: '#2a86ff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //     fontSize: 20,
          //   },
          //   headerStyle: {
          //     shadowOpacity: 0.8,
          //     elevation: 0.5,
          //   },
          //   animationEnabled: true,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
