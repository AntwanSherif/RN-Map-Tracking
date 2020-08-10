import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function AccountScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Account Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});