import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import AuthenticationNavigator from './AuthenticationNavigator';
import ProtectedScreensNavigator from './ProtectedScreensNavigator';

export default function MainNavigator() {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {state.token ? <ProtectedScreensNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
}
