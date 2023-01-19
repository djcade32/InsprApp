import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  textDefault: {
    fontFamily: fonts.primaryFontFamily,
    color: colors.black,
  },
  textCustom: {
    fontFamily: fonts.primaryFontFamily,
  },
});

export default styles;
