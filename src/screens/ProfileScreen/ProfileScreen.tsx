import {
  View,
  Pressable,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import StyledText from '../../components/StyledText/StyledText';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';
import StyledTextInput from '../../components/StyledTextInput/StyledTextInput';
import StyledButton from '../../components/StyledButton/StyledButton';
import {Auth} from 'aws-amplify';

const signOutButton = (
  <Pressable>
    <StyledText
      onPress={() => Auth.signOut()}
      style={{fontSize: fonts.size.sm, color: colors.darkGreen}}>
      Sign out
    </StyledText>
  </Pressable>
);

const ProfileScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <HeaderNavigation
          title="Profile"
          showBackButton={false}
          rightButton={signOutButton}
        />
        <View style={styles.inputForm}>
          <StyledTextInput labelText="First name" placeholder="First name" />
          <StyledTextInput labelText="Last name" placeholder="Last name" />
          <StyledTextInput labelText="Email" placeholder="Email" />
          <StyledButton text="Edit" />
          <Button title="Delete account" color={colors.grey} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProfileScreen;
