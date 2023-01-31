import {View, Text, Pressable, GestureResponderEvent} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import StyledText from '../StyledText/StyledText';

interface IStyledButton {
  text: string;
  color?: string;
  size?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const StyledButton = ({color = '', text, size, onPress}: IStyledButton) => {
  let width = 265;
  switch (size) {
    case 'medium':
      width = 150;
      break;

    case 'small':
      width = 100;
      break;

    default:
      break;
  }
  return (
    <Pressable
      style={[styles.container, !!size && {width: width}]}
      onPress={onPress}>
      <StyledText style={[styles.text, !!color && {backgroundColor: color}]}>
        {text}
      </StyledText>
    </Pressable>
  );
};

export default StyledButton;
