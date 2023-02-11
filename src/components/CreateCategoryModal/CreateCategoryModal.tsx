import {View, Modal, Alert, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import StyledText from '../StyledText/StyledText';
import StyledButton from '../StyledButton/StyledButton';
import colors from '../../theme/colors';
import {useMutation, useQuery} from '@apollo/client';
import {
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '../../API';
import {getUser, updateUser} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';

interface ICreateCategoryModal {
  modalVisible: boolean;
  setModalVisible: Function;
}

const CreateCategoryModal = ({
  modalVisible,
  setModalVisible,
}: ICreateCategoryModal) => {
  const {userId} = useAuthContext();
  const [newCategory, setNewCategory] = useState('');

  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  const [runUpdateUser, {loading: updateLoading, error: updateError}] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);

  const user = data?.getUser;

  async function onCreate() {
    const input: UpdateUserInput = {
      id: userId,
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      categories: user?.categories
        ? [...user?.categories, newCategory]
        : [newCategory],
      _version: user?._version,
    };
    try {
      await runUpdateUser({
        variables: {
          input,
        },
      });
    } catch (error) {
      Alert.alert('Error creating a category', (error as Error).message);
    }
    setModalVisible(!modalVisible);
    setNewCategory('');
    console.log(newCategory);
  }
  function onCancel() {
    setModalVisible(!modalVisible);
    setNewCategory('');
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
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalView}>
          <StyledText style={styles.modalText}>New category</StyledText>
          <TextInput
            placeholder="New category"
            style={styles.textInput}
            value={newCategory}
            onChangeText={setNewCategory}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'stretch',
            }}>
            <StyledButton
              text="Create"
              size="small"
              onPress={onCreate}
              disabled={updateLoading || !newCategory}
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

export default CreateCategoryModal;
