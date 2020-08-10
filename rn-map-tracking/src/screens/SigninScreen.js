import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SigninScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Signin Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});