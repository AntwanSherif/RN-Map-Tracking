import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';

export default function App () {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<MainNavigator isSignedIn={true} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
