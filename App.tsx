import { View, Text, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { transformer } from './metro.config';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useState(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
    {!isShowSplash ? (
      <SplashScreen />
    ) : (
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    )}
    </>
  );
};
export default App;
