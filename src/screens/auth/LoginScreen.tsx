import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {InputComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';
import { Lock, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[globalStyles.container, {alignItems: 'center', justifyContent: 'center', padding: 20}]}>
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
     </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({});
