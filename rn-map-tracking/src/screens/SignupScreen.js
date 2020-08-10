import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

export default function SignupScreen({ navigation }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const onChange = key => text => setFormData({ ...formData, [key]: text });

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Signup for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          label='Email'
          value={formData.email}
          onChangeText={onChange('email')}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label='Password'
          value={formData.password}
          onChangeText={onChange('password')}
          autoCapitalize='none'
          autoCorrect={false}
        />
      </Spacer>
      <Spacer />
      <Spacer>
        <Button title='Go to Signin' onPress={() => navigation.navigate('Signin')} />
      </Spacer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 150
  }
});
