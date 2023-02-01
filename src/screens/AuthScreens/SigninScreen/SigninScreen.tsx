import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import HeaderNavigation from '../../../components/HeaderNavigation/HeaderNavigation';
import StyledButton from '../../../components/StyledButton/StyledButton';
import StyledTextInput from '../../../components/TextInput/StyledTextInput';
import spacing from '../../../theme/spacing';

const SigninScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderNavigation title="Sign into your account" showBackButton={false} />
      <View style={{flex: 1, justifyContent: 'space-around'}}>
        <View style={styles.inputForm}>
          <StyledTextInput
            placeholder="Email"
            labelText="Email"
            containerStyle={{marginBottom: spacing.xxlg}}
          />
          <StyledTextInput placeholder="Password" labelText="Password" />
        </View>
        <StyledButton text="Sign in" />
      </View>
    </View>
  );
};

export default SigninScreen;
