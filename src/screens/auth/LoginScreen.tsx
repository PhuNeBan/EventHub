import { Lock, Sms } from 'iconsax-react-native';
import React, { useState } from 'react';
import { Image, StyleSheet, Switch } from 'react-native';
import {
  ButtonComponent,
  ContainerConponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { appColors } from '../../constants/appColors';
import SocialLogin from './components/SocialLogin';

const LoginScreen = ({navigation} : any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);

  return (
    <ContainerConponent isImageBackground isScroll>
      <SectionComponent
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{width: 162, height: 114, marginBottom: 30}}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} title text="Sign in" />
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
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot password?"
            onPress={() => navigation.navigate('ForgotPasswordSrceen')}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN IN" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent
            text="Sign up"
            type="link"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerConponent>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({});
