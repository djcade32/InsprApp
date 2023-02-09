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
  containerStyle = {},
  value,
  onChangeText,
  onBlur,
  secureTextEntry = false,
  labelStyle = {},
}: IStyledTextInputInterface) => {
  return (
    <View>
      <StyledText style={[styles.label, labelStyle]}>{labelText}</StyledText>
      <TextInput
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        style={[styles.textInput, containerStyle, multiline && {height: 200}]}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default StyledTextInput;
