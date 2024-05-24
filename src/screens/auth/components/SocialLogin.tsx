import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {appColors} from '../../../constants/appColors';
import {fontFamilies} from '../../../constants/fontFamilies';
import { Google, Facebook } from '../../../assets/svgs';



const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
      />

      <SpaceComponent height={16} />

      <ButtonComponent
        type="primary"
        color={appColors.white}
        text="Login with Google"
        textFont= {fontFamilies.regular}
        textColor={appColors.text}
        icon={<Google/>}
        iconFlex="left"
      />

      <ButtonComponent
        type="primary"
        color={appColors.white}
        text="Login with Facebook"
        textFont= {fontFamilies.regular}
        textColor={appColors.text}
        icon={<Facebook/>}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
