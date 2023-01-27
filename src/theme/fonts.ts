import {TextStyle} from 'react-native';

const primaryFontFamily = 'Lato';

const size = {
  sm: 18,
  md: 20,
  lg: 24,
  xlg: 32,
  xxlg: 48,
};

const weight: {[key: string]: TextStyle['fontWeight']} = {
  light: '300',
  medium: '500',
  bold: '900',
};

export default {size, weight, primaryFontFamily};
