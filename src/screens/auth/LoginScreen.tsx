import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ButtonComponent} from '../../components';
import { globalStyles } from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <View style= {[globalStyles.container]}>
      <Text style={{color: 'black'}}>LoginScreen</Text>
      {/* <Button
        title="Login"
        onPress={async () => AsyncStorage.setItem('assetToken', 'cfwfwefewf')}
      /> */}

      <ButtonComponent
        text="Forget Password !!!"
        onPress={() => console.log('Login')}
        type='link'
        icon={
          <View>
            <Text>N</Text>
          </View>
        }
      />
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({});
