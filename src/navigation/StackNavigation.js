import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import App from '../App';
import Details from '../Details';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
        initialRouteName="App"
        headerMode="screen"
        >
        <Stack.Screen
            name="App"
            component={App}
            options={{headerTitle: ''}}
        />
        <Stack.Screen
            name="Details"
            component={Details}
            options={{headerTitle: ''}}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;