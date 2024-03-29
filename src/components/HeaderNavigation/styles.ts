import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
    zIndex: 100,
  },
  rightButton: {
    right: 0,
    position: 'absolute',
    paddingRight: spacing.xsm,
  },
});

export default styles;
