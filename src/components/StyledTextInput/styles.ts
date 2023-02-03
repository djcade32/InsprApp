import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  label: {
    fontSize: fonts.size.md,
    marginBottom: 10,
  },
  textInput: {
    fontSize: fonts.size.md,
    borderColor: colors.black,
    borderWidth: 1,
    paddingHorizontal: spacing.xsm,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default styles;
