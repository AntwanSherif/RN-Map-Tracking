// import  dependencies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

export default function AuthenticationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Signin' component={SigninScreen} />
    </Stack.Navigator>
  );
}
