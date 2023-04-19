import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  bgImage: {
    paddingHorizontal: spacing.sm,
    paddingTop: spacing.xlg,
    flex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: 'white',
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
  categoriesTitle: {
    fontSize: fonts.size.lg,
  },
  viewAllButton: {
    fontSize: fonts.size.sm,
    color: colors.grey,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
  categoriesContainer: {
    marginBottom: spacing.md,
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
  noCategoriesContainer: {
    backgroundColor: colors.mintGreen,
    height: 70,
    justifyContent: 'center',
    borderRadius: 10,
    width: 250,
    alignSelf: 'center',
    marginHorizontal: -spacing.sm,
    marginTop: spacing.xsm,
  },
});

export default styles;
