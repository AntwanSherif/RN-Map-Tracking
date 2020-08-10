import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
