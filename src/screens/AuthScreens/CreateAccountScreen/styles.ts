import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  inputForm: {
    marginHorizontal: spacing.lg,
  },
  haveAccountButton: {
    color: colors.grey,
    fontSize: fonts.size.md,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});

export default styles;
