import {
  View,
  Text,
  Modal,
  Alert,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import StyledText from '../StyledText/StyledText';
import StyledButton from '../StyledButton/StyledButton';
import colors from '../../theme/colors';

const CreateCategoryModal = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <StyledText style={styles.modalText}>New category</StyledText>
          <TextInput placeholder="New category" style={styles.textInput} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
            }}>
            <StyledButton
              text="Create"
              size="small"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <StyledButton
              text="Cancel"
              size="small"
              onPress={() => setModalVisible(!modalVisible)}
              color={colors.red}
            />
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default CreateCategoryModal;