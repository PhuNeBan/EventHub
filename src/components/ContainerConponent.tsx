import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children?: ReactNode;
}

const ContainerConponent = (props: Props) => {
  const {children, isImageBackground, isScroll, title} = props;

  const returnContainer = isScroll ? (
    <ScrollView style={{flex: 1}}>{children}</ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );

  return isImageBackground ? (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{flex: 1}}
      imageStyle={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>{returnContainer}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <Text>{returnContainer}</Text>
    </SafeAreaView>
  );
};

export default ContainerConponent;
