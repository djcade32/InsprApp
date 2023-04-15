import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    paddingTop: spacing.xlg,
    backgroundColor: 'white',
  },
  inputForm: {
    marginHorizontal: spacing.lg,
  },
  dontHaveAccountButton: {
    color: colors.grey,
    fontSize: fonts.size.md,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  forgotPasswordButton: {
    color: colors.grey,
    fontSize: fonts.size.md,
  },
});

export default styles;
