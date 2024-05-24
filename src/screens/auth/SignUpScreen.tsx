import { Lock, Sms, User } from 'iconsax-react-native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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

const initVaLue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initVaLue);

  const handleChangeValue = (key: string, value: string) => {
    const data: any = {...values};

    data[`${key}`] = value;

    setValues(data);
  };

  return (
    <ContainerConponent isImageBackground isScroll  back>
      <SectionComponent>
        <TextComponent size={24} title text="Sign up" />
        <SpaceComponent height={21} />
        <InputComponent
          value={values.username}
          placeholder="Full name"
          onChange={val => handleChangeValue('username', val)}
          allowClear
          affix={<User size={22} color={appColors.gray}></User>}
        />
        <InputComponent
          value={values.email}
          placeholder="abc@email.com"
          onChange={val => handleChangeValue('email', val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray}></Sms>}
        />
        <InputComponent
          value={values.password}
          placeholder="Your password"
          onChange={val => handleChangeValue('password',val)}
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray}></Lock>}
        />
         <InputComponent
          value={values.confirmPassword}
          placeholder="Confirm password"
          onChange={val => handleChangeValue('confrimPassword',val)}
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
          <TextComponent text="Already have an account? " />
          <ButtonComponent
            text="Signin"
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
