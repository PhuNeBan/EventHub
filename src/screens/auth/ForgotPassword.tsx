import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerConponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {ArrowRight, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <ContainerConponent back isImageBackground>
      <SectionComponent>
        <TextComponent text="Resset Password" title />
        <TextComponent text="Please enter your email address to request a password reset" />
        <SpaceComponent height={26} />
        <InputComponent
          value={email}
          placeholder="abc@email.com"
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray}></Sms>}
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent text="Send" type="primary" icon={<ArrowRight size={20} color={appColors.white}/> } 
        iconFlex='right'/>
      </SectionComponent>
    </ContainerConponent>
  );
};

export default ForgotPassword;
