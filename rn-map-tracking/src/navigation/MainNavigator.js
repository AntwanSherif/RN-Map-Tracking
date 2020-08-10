// import  dependencies
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthenticationNavigator from './AuthenticationNavigator';
import ProtectedScreensNavigator from './ProtectedScreensNavigator';

export default function MainNavigator ({ isSignedIn }) {
	return (
		<NavigationContainer>
      { isSignedIn ? <ProtectedScreensNavigator /> : <AuthenticationNavigator />}
		</NavigationContainer>
	);
}