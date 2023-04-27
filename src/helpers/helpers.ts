import {Dimensions} from 'react-native';
const IPHONE_14_PRO_MAX_HEIGHT = 920;

export function isIphone14ProMax() {
  const {height} = Dimensions.get('window');

  return height >= IPHONE_14_PRO_MAX_HEIGHT;
}
