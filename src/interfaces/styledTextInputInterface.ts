import {StyleProp, TextStyle} from 'react-native';

export interface IStyledTextInputInterface {
  labelText: string;
  placeholder?: string;
  multiline?: boolean;
  containerStyle?: StyleProp<TextStyle>;
}
