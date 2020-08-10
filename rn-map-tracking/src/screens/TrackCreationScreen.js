import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TrackCreationScreen(props) {
  return (
    <View style={styles.container}>
        <Text>Track Creation Screen</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});