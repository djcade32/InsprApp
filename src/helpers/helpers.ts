import {Dimensions} from 'react-native';
const IPHONE_14_PRO_MAX_HEIGHT = 850;

export function isIphone14ProMax() {
  const {height} = Dimensions.get('window');
  console.log('height: ', height);
  return height >= IPHONE_14_PRO_MAX_HEIGHT;
}
