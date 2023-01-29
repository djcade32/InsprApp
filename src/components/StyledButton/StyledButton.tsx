import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import StyledText from '../StyledText/StyledText';

interface IStyledButton {
  text: string;
  color?: string;
}

const StyledButton = ({color = '', text}: IStyledButton) => {
  return (
    <Pressable style={styles.container}>
      <StyledText style={[styles.text, !!color && {backgroundColor: color}]}>
        {text}
      </StyledText>
    </Pressable>
  );
};

export default StyledButton;
