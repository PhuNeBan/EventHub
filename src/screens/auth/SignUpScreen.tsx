import React, {useState} from 'react';
import {Image, StyleSheet, Switch} from 'react-native';
import {
  ButtonComponent,
  ContainerConponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {Lock, Sms} from 'iconsax-react-native';
import SocialLogin from './components/SocialLogin';
import {fontFamilies} from '../../constants/fontFamilies';

const SignUpScreen = ({navigation} : any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);

  return (
    <ContainerConponent isImageBackground back>
      <SectionComponent>
        <TextComponent size={24} title text="Sign up" />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder="Email"
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray}></Sms>}
        />
        <InputComponent
          value={password}
          placeholder="Password"
          onChange={val => setPassword(val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray}></Lock>}
        />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN UP" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent
            text="Login"
            type="link"
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerConponent>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({});
