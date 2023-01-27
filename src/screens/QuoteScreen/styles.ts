import {StyleSheet, Dimensions} from 'react-native';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  categoryAndMoreOptionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quoteContainer: {
    width: windowWidth - spacing.xxlg * 2,
    justifyContent: 'center',
  },
  quoteText: {
    fontSize: fonts.size.lg,
    lineHeight: spacing.xlg,
  },
  author: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.light,
    marginTop: spacing.xxlg,
  },
  footer: {
    width: '100%',
    flex: 1 / 2,
    justifyContent: 'space-between',
  },
  bookmarkAndShareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.sm,
  },
});

export default styles;
