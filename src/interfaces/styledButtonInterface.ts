import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';

export interface IStyledButton {
  text: string;
  color?: string;
  size?: string;
  onPress: (event: GestureResponderEvent) => void;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
}
