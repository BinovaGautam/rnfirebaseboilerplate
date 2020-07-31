import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import {Platform} from 'react-native'
import React from 'react';
import MapScreen from '../LocationStack/MapScreen';

let ios = Platform.OS == ios

const Stack = createStackNavigator()

HomeStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown : false}}>
        {/* <Stack.Screen name="Maps" component={MapScreen}  /> */}
        <Stack.Screen name="Home" component={HomeScreen}  />
      </Stack.Navigator>
    )
}

export default HomeStack;