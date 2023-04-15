import {View, Modal, Alert, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import StyledText from '../StyledText/StyledText';
import StyledButton from '../StyledButton/StyledButton';
import colors from '../../theme/colors';
import {Auth} from 'aws-amplify';

interface IConfrimEmailModal {
  modalVisible: boolean;
  setModalVisible: Function;
}

const ConfirmEmailModal = ({
  modalVisible,
  setModalVisible,
}: IConfrimEmailModal) => {
  const [code, setCode] = useState('');

  async function onConfirmPressed() {
    try {
      await Auth.verifyCurrentUserAttributeSubmit('email', code);
    } catch (error) {
      console.log('Error confirming email: ', error);
      Alert.alert('Oops', 'Error confirming your new email address');
    } finally {
      setModalVisible(!modalVisible);
      setCode('');
    }
  }

  function onCancel() {
    setModalVisible(!modalVisible);
    setCode('');
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <Pressable style={styles.centeredView}>
        <View style={styles.modalView}>
          <StyledText style={styles.modalTitle}>Confirm Email</StyledText>
          <StyledText style={styles.modalSubtitle}>
            Check your new email for the confirmation code. If email is not
            confirmed, new email will not be saved.
          </StyledText>
          <TextInput
            placeholder="Confirmation code"
            style={styles.textInput}
            value={code}
            onChangeText={setCode}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
            }}>
            <StyledButton
              text="Confirm"
              size="small"
              onPress={onConfirmPressed}
              disabled={!code}
            />
            <StyledButton
              text="Cancel"
              size="small"
              onPress={onCancel}
              color={colors.red}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ConfirmEmailModal;
