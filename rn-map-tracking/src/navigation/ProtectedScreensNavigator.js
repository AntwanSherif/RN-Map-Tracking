// import  dependencies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../screens/AccountScreen';
import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailsScreen from '../screens/TrackDetailsScreen';
import TrackCreationScreen from '../screens/TrackCreationScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TrackListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='TrackList' component={TrackListScreen} />
      <Stack.Screen name='TrackDetails' component={TrackDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function ProtectedScreensNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Tracks' component={TrackListStack} />
      <Tab.Screen name='TrackCreation' component={TrackCreationScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
}