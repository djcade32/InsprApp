import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import spacing from '../../../theme/spacing';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 110,
    fontWeight: fonts.weight.medium,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: spacing.md,
    fontSize: fonts.size.md,
    textAlign: 'center',
  },
});

export default styles;
