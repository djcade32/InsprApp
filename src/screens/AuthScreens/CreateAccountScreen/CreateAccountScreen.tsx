import {
  View,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import StyledTextInput from '../../../components/TextInput/StyledTextInput';
import HeaderNavigation from '../../../components/HeaderNavigation/HeaderNavigation';
import spacing from '../../../theme/spacing';
import StyledButton from '../../../components/StyledButton/StyledButton';
import colors from '../../../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const CreateAccountScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  Keyboard.addListener('keyboardDidShow', () => {
    setIsKeyboardShown(true);
  });

  Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardShown(false);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <HeaderNavigation title="Create an account" />
      <KeyboardAwareScrollView
        contentContainerStyle={{justifyContent: 'space-around', flex: 1}}
        scrollEnabled={isKeyboardShown}>
        <View style={styles.inputForm}>
          <StyledTextInput
            labelText="Email"
            placeholder="Email"
            containerStyle={{marginBottom: spacing.xxlg}}
          />
          <StyledTextInput
            labelText="Password"
            placeholder="Password"
            containerStyle={{marginBottom: spacing.xxlg}}
          />
          <StyledTextInput
            labelText="First name"
            placeholder="First name"
            containerStyle={{marginBottom: spacing.xxlg}}
          />
          <StyledTextInput labelText="Last name" placeholder="Last name" />
        </View>
        <StyledButton text="Create account" color={colors.red} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default CreateAccountScreen;
