import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import PostList from './Postlist';
import PostListDetail from './PostListDetail';

export default function Screen() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Post'>
              <Stack.Screen name="PostListPage" options={{title: 'Post List Page'}} component={PostList} />
              <Stack.Screen name="PostListDetail" options={{title: 'Post List Detail Page'}} component={PostListDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}