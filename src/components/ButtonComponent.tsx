import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextComponent from './TextComponent';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconflex?: 'right' | 'left';
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyle,
    onPress,
    iconflex,
  } = props;
  return (
    <TouchableOpacity>
      {icon && iconflex === 'left' && icon}
      <TextComponent text={text} color={textColor} styles={textStyle} />
      {icon && iconflex === 'right' && icon}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
