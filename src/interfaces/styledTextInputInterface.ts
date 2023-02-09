import {StyleProp, TextStyle} from 'react-native';

export interface IStyledTextInputInterface {
  labelText: string;
  placeholder?: string;
  multiline?: boolean;
  containerStyle?: StyleProp<TextStyle>;
  value: string;
  onChangeText: any;
  onBlur?: any;
  secureTextEntry?: boolean;
  labelStyle?: StyleProp<TextStyle>;
}
