import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    paddingTop: spacing.xlg,
    backgroundColor: 'white',
  },
  screen: {
    paddingHorizontal: spacing.sm,
    flex: 1,
  },
  inputForm: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  headerContainer: {
    paddingTop: spacing.xsm,
    paddingBottom: spacing.xsm,
  },
  headerTitle: {
    fontSize: fonts.size.lg,
    textAlign: 'center',
  },
});

export default styles;
