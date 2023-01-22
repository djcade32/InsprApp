// This component is to be used in place of the default React Native Text Component.

import {Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

const StyledText = (props?: TextProps) => {
  const styleProp = props?.style as TextStyle;
  const isColorProp = !!styleProp?.color;
  return (
    <Text
      numberOfLines={props?.numberOfLines}
      style={[
        props?.style,
        isColorProp ? styles.textCustom : styles.textDefault,
      ]}>
      {props?.children}
    </Text>
  );
};

export default StyledText;
