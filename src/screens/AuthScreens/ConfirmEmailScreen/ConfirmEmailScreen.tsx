import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../../components/HeaderNavigation/HeaderNavigation';
import StyledTextInput from '../../../components/StyledTextInput/StyledTextInput';
import StyledButton from '../../../components/StyledButton/StyledButton';
import spacing from '../../../theme/spacing';
import {Auth} from 'aws-amplify';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  ConfirmEmailScreenProp,
  ConfirmEmailScreenRouteProp,
} from '../../../navigation/types/AuthStackNavigatorParamList';
import colors from '../../../theme/colors';

const ConfirmEmailScreen = () => {
  const route = useRoute<ConfirmEmailScreenRouteProp>();
  const navigation = useNavigation<ConfirmEmailScreenProp>();
  const [codeInput, setCodeInput] = useState('');
  const [emailInput, setEmailInput] = useState(route.params.email);
  const [loading, setLoading] = useState(false);

  async function onConfirmCodePressed() {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.confirmSignUp(emailInput, codeInput);
      navigation.navigate('SigninScreen');
    } catch (e) {
      Alert.alert('Oopps', (e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function onResendPressed() {
    try {
      await Auth.resendSignUp(emailInput);
      Alert.alert('Check your email', 'The code has been sent');
    } catch (e) {
      if ((e as Error).name === 'UserNotConfirmedException') {
        navigation.navigate('ConfirmEmailScreen', {email: emailInput});
      }
      Alert.alert('Check your email', (e as Error).message);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <HeaderNavigation title="Confirm email" showBackButton={false} />
      <View style={styles.content}>
        <StyledTextInput
          labelText="Email"
          placeholder="Email"
          value={emailInput}
          onChangeText={(text: string) => setEmailInput(text)}
        />
        <StyledTextInput
          labelText="Confirm code"
          placeholder="Enter your confirmation code"
          value={codeInput}
          onChangeText={(text: string) => setCodeInput(text)}
          labelStyle={{marginTop: spacing.sm}}
        />
        <StyledButton
          text={loading ? 'Confirming..' : 'Confirm'}
          onPress={onConfirmCodePressed}
          disabled={!emailInput || !codeInput}
          containerStyle={{marginTop: spacing.sm}}
        />
        <StyledButton
          color={colors.red}
          text="Resend code"
          onPress={onResendPressed}
          containerStyle={{marginTop: spacing.sm}}
        />
        <StyledButton
          color={colors.lightGreen}
          text="Sign in"
          onPress={() => navigation.navigate('SigninScreen')}
          containerStyle={{marginTop: spacing.sm}}
        />
      </View>
    </View>
  );
};

export default ConfirmEmailScreen;
