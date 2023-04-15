import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Control, Controller, Path} from 'react-hook-form';
import StyledTextInput from '../StyledTextInput/StyledTextInput';
import colors from '../../theme/colors';
import StyledText from '../StyledText/StyledText';
import spacing from '../../theme/spacing';
import DropDownPicker from 'react-native-dropdown-picker';
import fonts from '../../theme/fonts';

interface IFormDropdown<ContentType> {
  control: Control<ContentType, object>;
  name: Path<ContentType>;
  rules?: {};
  labelText: string;
  dropdownItems: {label: string; value: string}[];
  setDropdownItems: Dispatch<SetStateAction<{label: string; value: string}[]>>;
  dropdownValue: string | null;
  setDropdownValue: Dispatch<SetStateAction<string | null>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function FormDropdown<ContentType>({
  control,
  name,
  rules = {},
  labelText,
  dropdownItems,
  setDropdownItems,
  dropdownValue,
  setDropdownValue,
  open,
  setOpen,
}: IFormDropdown<ContentType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange}, fieldState: {error}}) => (
        <View style={{zIndex: 1}}>
          <StyledText style={{fontSize: fonts.size.md, marginBottom: 10}}>
            {labelText}
          </StyledText>
          <DropDownPicker
            style={{borderColor: error ? colors.red : colors.black}}
            dropDownContainerStyle={{
              borderColor: error ? colors.red : colors.black,
            }}
            textStyle={{
              fontSize: fonts.size.md,
              color: !open && !dropdownValue ? colors.grey : colors.black,
            }}
            onChangeValue={text => {
              onChange(text);
            }}
            open={open}
            value={dropdownValue}
            items={dropdownItems}
            setOpen={setOpen}
            setValue={setDropdownValue}
            setItems={setDropdownItems}
            props={{
              activeOpacity: 1,
            }}
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

export default FormDropdown;
