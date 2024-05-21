import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AuthNavigator from './src/navigators/AuthNavigator';
import MainNavigation from './src/navigators/MainNavigation';
import {SplashScreen} from './src/screens';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [assetToken, setAssetToken] = useState('');

  const {getItem, setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getItem();

    token && setAssetToken(token);
  };

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          {assetToken ? <MainNavigation /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};
export default App;
