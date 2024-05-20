import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {SplashScreen} from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useState(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  });
  return isShowSplash ? <SplashScreen /> : <NavigationContainer>
    <AuthNavigator />
  </NavigationContainer>
};

export default App;
