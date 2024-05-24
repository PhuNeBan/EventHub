import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {ButtonComponent, RowComponent, TextComponent} from '.';
import {ArrowLeft, Size} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children?: ReactNode;
  back?: boolean;
}

const ContainerConponent = (props: Props) => {
  const {children, isImageBackground, isScroll, title, back} = props;

  const navigation: any = useNavigation();

  const headerComponent = () => {
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        {(title ||
          back) && (
            <RowComponent
              style={{
                paddingHorizontal: 16,
                paddingVertical: 10,
                minWidth: 48,
                minHeight: 48,
              }}>
              {
                <TouchableOpacity onPress={() => navigation.goBack()} style={{marginRight: 12}}>
                  <ArrowLeft size={24} color={appColors.text} />
                </TouchableOpacity>
              }
              {title ? (
                <TextComponent text={title} font={fontFamilies.medium} size={16}
                flex={1} />
              ) : (
                <></>
              )}
            </RowComponent>
          )}
        {returnContainer}
      </View>
    );
  };

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
      <SafeAreaView style={{flex: 1}}>{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container]}>
      <Text>{headerComponent()}</Text>
    </SafeAreaView>
  );
};

export default ContainerConponent;
