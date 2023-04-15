import React from 'react';
import {View} from 'react-native';
import {Control, Controller, Path} from 'react-hook-form';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import colors from '../../theme/colors';
import StyledText from '../StyledText/StyledText';
import spacing from '../../theme/spacing';

interface IFormInput<ContentType> {
  control: Control<ContentType, object>;
  name: Path<ContentType>;
  rules?: {};
  placeholder?: string;
  labelText: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
  editable?: boolean;
}

function FormInput<ContentType>({
  control,
  name,
  rules = {},
  placeholder = '',
  labelText,
  secureTextEntry = false,
  multiline = false,
  editable = true,
}: IFormInput<ContentType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View style={{marginBottom: spacing.xsm}}>
          <StyledTextInput
            editable={editable}
            multiline={multiline}
            value={value as string}
            onChangeText={onChange}
            onBlur={onBlur}
            labelText={labelText}
            placeholder={placeholder}
            containerStyle={
              !editable
                ? {
                    color: colors.grey,
                  }
                : {
                    borderColor: error ? colors.red : colors.black,
                  }
            }
            secureTextEntry={secureTextEntry}
            labelStyle={error && {color: colors.red}}
          />

          {error && (
            <StyledText style={{color: colors.red, alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </StyledText>
          )}
        </View>
      )}
    />
  );
}

export default FormInput;
