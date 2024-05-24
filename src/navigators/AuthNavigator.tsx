import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ForgotPassword, LoginScreen, SignUpScreen, Verication} from '../screens';
import OnbroadingSrceen from '../screens/auth/OnbroadingSrceen';


const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnbroadingSrceen" component={OnbroadingSrceen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="VericationSrceen" component={Verication} />
      <Stack.Screen name="ForgotPasswordSrceen" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
