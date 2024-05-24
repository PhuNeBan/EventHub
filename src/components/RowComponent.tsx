import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface Props {
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress?: () => void;
}

const RowComponent = (props: Props) => {
  const {justify, style, children, onPress} = props;

const localStyles = [
    globalStyles.row,
    {
        justifyContent: justify,
      },
    style,
  ];

  return onPress ? (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={localStyles}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyles}>{children}</View>
  );
};

export default RowComponent;
