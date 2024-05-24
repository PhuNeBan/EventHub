import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';

interface Props {
    children: ReactNode,
    style?: StyleProp<ViewStyle>;
}

const SectionComponent = (props: Props) => {

  const { children, style } = props;

  return (
    <View style={[globalStyles.section,style]}>
      {children}
    </View>
  )
}

export default SectionComponent