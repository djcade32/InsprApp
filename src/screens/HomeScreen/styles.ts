import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: spacing.sm,
  },
  headerContainer: {
    paddingTop: spacing.xsm,
    paddingBottom: spacing.xsm,
  },
  headerTitle: {
    fontSize: fonts.size.xlg,
    fontWeight: fonts.weight.medium,
    textAlign: 'center',
  },
  categoriesContainer: {
    marginBottom: spacing.md,
  },
  categoriesTitle: {
    fontSize: fonts.size.lg,
  },
  viewAllButton: {
    fontSize: fonts.size.sm,
    color: colors.grey,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
  categoryContainer: {
    backgroundColor: colors.mintGreen,
    width: 120,
    height: 70,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  categoriesList: {
    marginHorizontal: -spacing.sm,
    marginTop: spacing.xsm,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: fonts.size.md,
  },
});

export default styles;
