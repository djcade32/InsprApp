import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  createButton: {
    fontSize: fonts.size.sm,
    color: colors.darkGreen,
  },
  categoryContainer: {
    height: 125,
    width: '45%',
    backgroundColor: colors.mintGreen,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: fonts.size.lg,
  },
});

export default styles;
