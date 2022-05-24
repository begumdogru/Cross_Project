import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import UserDetail from './UserDetail';
import Project from './Home';

export default function Screen() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Homepage'>
              <Stack.Screen name="Homepage" options={{title: 'Home Page'}} component={Project} />
              <Stack.Screen name="User" options={{title: 'User Detail'}} component={UserDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
