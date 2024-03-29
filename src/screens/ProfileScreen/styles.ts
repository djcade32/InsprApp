import {StyleSheet} from 'react-native';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    paddingTop: spacing.xlg,
    backgroundColor: 'white',
  },
  inputForm: {
    flex: 3 / 4,
    marginHorizontal: spacing.sm,
    justifyContent: 'space-around',
  },
});

export default styles;
