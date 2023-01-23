import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: fonts.size.lg,
    textAlign: 'center',
  },
  leftButton: {
    left: 0,
    position: 'absolute',
    paddingLeft: spacing.xsm,
  },
  rightButton: {
    right: 0,
    position: 'absolute',
    paddingRight: spacing.xsm,
  },
});

export default styles;
