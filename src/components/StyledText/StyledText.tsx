// This component is to be used in place of the default React Native Text Component.

import {Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import styles from './styles';

const StyledText = (props?: TextProps) => {
  const styleProp = props?.style as TextStyle | [TextStyle];
  let isColorProp = false;

  // This is to catch if an array of style objects were used.
  // It takes the first color property that is found.
  if (Array.isArray(styleProp)) {
    for (const styleObject of styleProp) {
      isColorProp = !!styleObject?.color;
      break;
    }
  } else {
    isColorProp = !!styleProp?.color;
  }

  return (
    <Text
      suppressHighlighting
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
