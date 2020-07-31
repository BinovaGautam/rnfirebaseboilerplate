import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './LoginScreen';
import {Platform} from 'react-native'

let ios = Platform.OS == ios

const Stack = createStackNavigator()

AuthStack = () => {
  
    return(
        <Stack.Navigator screenOptions={{headerShown : false }} >
        <Stack.Screen name="Login" component={LoginScreen}  />
       </Stack.Navigator>
    )
}

export default AuthStack;