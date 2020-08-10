import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function TrackListScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>Track List Screen</Text>
        <Button title='Go to Track Detail' onPress={() => navigation.navigate('TrackDetails')} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});