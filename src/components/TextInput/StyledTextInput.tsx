import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../theme/colors';
import StyledText from '../StyledText/StyledText';
import {IStyledTextInputInterface} from '../../interfaces/styledTextInputInterface';

const StyledTextInput = ({
  labelText,
  placeholder = '',
  multiline = false,
  containerStyle,
}: IStyledTextInputInterface) => {
  return (
    <View>
      <StyledText style={styles.label}>{labelText}</StyledText>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        style={[styles.textInput, containerStyle, multiline && {height: 200}]}
        multiline={multiline}
      />
    </View>
  );
};

export default StyledTextInput;
