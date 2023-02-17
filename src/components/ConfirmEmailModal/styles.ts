import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import spacing from '../../theme/spacing';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: spacing.xsm,
    paddingVertical: spacing.xxsm,
    fontSize: fonts.size.lg,
    minWidth: '90%',
    textAlign: 'center',
    marginBottom: spacing.xsm,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: fonts.size.lg,
  },
  modalSubtitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: fonts.size.md,
  },
});

export default styles;
