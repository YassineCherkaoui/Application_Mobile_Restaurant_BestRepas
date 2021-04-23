import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Components/Home'
import Items from './Components/Items'
import Selected from './Components/ExtraSelected'
import DisplayItems from './Components/DisplayItems'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Items" component={Items} />
        <Stack.Screen name="Extra" component={Selected} />
        <Stack.Screen name="DisplayItems" component={DisplayItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
