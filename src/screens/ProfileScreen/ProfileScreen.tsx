import {
  View,
  Pressable,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import StyledText from '../../components/StyledText/StyledText';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import StyledButton from '../../components/StyledButton/StyledButton';
import {Auth} from 'aws-amplify';
import {useMutation, useQuery} from '@apollo/client';
import {
  DeleteUserMutation,
  DeleteUserMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
  UpdateUserInput,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {getUser, updateUser} from './queries';
import FormInput from '../../components/FormInput/FormInput';
import {useForm} from 'react-hook-form';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import ConfirmEmailModal from '../../components/ConfirmEmailModal/ConfirmEmailModal';
import bgImage from '../../../assets/images/bgs/2-red-circles.png';

const signOutButton = (
  <Pressable>
    <StyledText
      onPress={() => Auth.signOut()}
      style={{fontSize: fonts.size.sm, color: colors.darkGreen}}>
      Sign out
    </StyledText>
  </Pressable>
);

type UpdateUserData = {
  email: string;
  firstName: string;
  lastName: string;
};

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ProfileScreen = () => {
  const {userId, user: userAuth} = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {control, handleSubmit, reset, setValue} = useForm<UpdateUserData>();
  const {data, error, loading} = useQuery<GetUserQuery, GetUserQueryVariables>(
    getUser,
    {variables: {id: userId}},
  );
  const [runUpdateUser, {loading: updateLoading, error: updateError}] =
    useMutation<UpdateUserMutation, UpdateUserMutationVariables>(updateUser);
  const [runDeleteUser, {loading: deleteLoading, error: deleteError}] =
    useMutation<DeleteUserMutation, DeleteUserMutationVariables>(updateUser);

  const user = data?.getUser;
  async function onSaveUserPressed({
    firstName,
    lastName,
    email,
  }: UpdateUserData) {
    if (updateLoading) {
      return;
    }
    // Enter edit mode if not already in edit mode
    if (!isEditing) {
      setIsEditing(prev => !prev);
      return;
    }
    const input: UpdateUserInput = {
      id: userId,
      firstName,
      lastName,
      email,
      _version: user?._version,
    };
    try {
      await runUpdateUser({
        variables: {
          input,
        },
      });
      if (email !== user?.email) {
        await Auth.updateUserAttributes(userAuth, {
          email: email,
        });
        setModalVisible(true);
      }
    } catch (error) {
      console.log('Error updating user: ', error);
      Alert.alert('Oops', 'Error updating your user information.');
    } finally {
      setIsEditing(prev => !prev);
    }
  }
  async function removeAccount() {
    if (!user) {
      return;
    }
    try {
      await runDeleteUser({
        variables: {input: {id: userId, _version: user._version}},
      });
      userAuth?.deleteUser(err => {
        if (err) {
          console.log(err);
        }
        Auth.signOut();
      });
      Alert.alert('Removed account successful');
    } catch (error) {
      console.log(error);
    }
  }

  function confirmRemoveAccount() {
    Alert.alert(
      'Are you sure?',
      'Removing your user account is permanent. All data will be lossed.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Yes, remove', style: 'destructive', onPress: removeAccount},
      ],
    );
  }

  useEffect(() => {
    if (!user) {
      return;
    }
    setValue('firstName', user?.firstName);
    setValue('lastName', user?.lastName);
    setValue('email', user?.email);
  }, [user]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={'large'} color={colors.grey} />
      </View>
    );
  }
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ApiErrorMessage message={error?.message} />
      </View>
    );
  }

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
          <HeaderNavigation
            title="Profile"
            showBackButton={false}
            rightButton={signOutButton}
          />
          <ConfirmEmailModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <View style={styles.inputForm}>
            <FormInput
              editable={isEditing}
              name="firstName"
              labelText="First name"
              placeholder="First name"
              control={control}
              rules={{
                required: 'First name is required',
                maxLength: {
                  value: 24,
                  message: 'Name should be max 24 characters long',
                },
              }}
            />
            <FormInput
              editable={isEditing}
              name="lastName"
              labelText="Last name"
              placeholder="Last name"
              control={control}
              rules={{
                required: 'Last name is required',
                maxLength: {
                  value: 24,
                  message: 'Name should be max 24 characters long',
                },
              }}
            />
            <FormInput
              editable={isEditing}
              name="email"
              labelText="Email"
              placeholder="Email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />
            <StyledButton
              text={isEditing ? (updateLoading ? 'Saving...' : 'Save') : 'Edit'}
              onPress={handleSubmit(onSaveUserPressed)}
            />
            <Button
              title={deleteLoading ? 'Removing account...' : 'Remove account'}
              color={colors.grey}
              onPress={confirmRemoveAccount}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default ProfileScreen;
