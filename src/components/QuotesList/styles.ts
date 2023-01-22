import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  categoriesList: {
    marginHorizontal: -spacing.sm,
    marginTop: spacing.xsm,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: fonts.size.md,
  },
  quoteContainer: {
    backgroundColor: colors.darkGreen,
    width: 320,
    height: 190,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: spacing.xsm,
    justifyContent: 'space-between',
  },
  quoteText: {
    fontSize: fonts.size.sm,
    color: 'white',
    lineHeight: spacing.lg,
  },
  quoteAuthor: {
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.light,
    color: 'white',
  },
  categoryBadgeContainer: {
    backgroundColor: colors.mintGreen,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    height: 25,
  },
  categoryBadgeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: fonts.size.sm,
  },
});

export default styles;
