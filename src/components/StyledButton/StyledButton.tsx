import {Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import StyledText from '../StyledText/StyledText';
import {IStyledButton} from '../../interfaces/styledButtonInterface';

const StyledButton = ({
  color = '',
  text,
  size,
  onPress,
  containerStyle,
}: IStyledButton) => {
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
      style={[styles.container, containerStyle, !!size && {width: width}]}
      onPress={onPress}>
      <StyledText style={[styles.text, !!color && {backgroundColor: color}]}>
        {text}
      </StyledText>
    </Pressable>
  );
};

export default StyledButton;
