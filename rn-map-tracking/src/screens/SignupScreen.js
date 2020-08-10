import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Signup Screen</Text>
        <Button title='Go to Signin' onPress={() => navigation.navigate('Signin')} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});