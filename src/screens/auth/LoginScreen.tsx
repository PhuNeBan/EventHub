import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Login"
        onPress={async () => AsyncStorage.setItem('assetToken', 'cfwfwefewf')}
      />
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({});
