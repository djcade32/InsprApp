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
    marginBottom: spacing.xxsm,
    color: 'white',
  },
  categoryBadgeContainer: {
    backgroundColor: colors.mintGreen,
    borderRadius: 10,
    justifyContent: 'center',
    height: 25,
    paddingHorizontal: 5,
  },
  categoryBadgeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: fonts.size.sm,
  },
  quotePlaceholder: {
    width: 320,
    height: 190,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
