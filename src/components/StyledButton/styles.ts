import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 10,
    width: 265,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: fonts.size.lg,
    textAlign: 'center',
    paddingVertical: 10,
    backgroundColor: colors.darkGreen,
  },
});

export default styles;
