import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  quoteContainer: {
    marginVertical: spacing.xsm,
    borderRadius: 10,
    width: 360,
    height: 140,
    justifyContent: 'space-between',
  },
  quoteText: {
    color: 'white',
    fontSize: fonts.size.sm,
    lineHeight: spacing.lg,
    paddingTop: spacing.xxsm,
    paddingHorizontal: spacing.xsm,
    flex: 1,
  },
  quoteAuthor: {
    color: 'white',
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.light,
  },
  quoteFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: spacing.xsm,
    paddingRight: spacing.xxsm,
    marginBottom: spacing.xxsm,
  },
  categoryBadgeContainer: {
    backgroundColor: colors.mintGreen,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    height: 25,
    marginTop: 10,
  },
  categoryBadgeText: {
    color: 'white',
    textAlign: 'center',
    fontSize: fonts.size.sm,
  },
});

export default styles;
