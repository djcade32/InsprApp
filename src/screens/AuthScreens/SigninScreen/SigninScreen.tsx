import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../../components/HeaderNavigation/HeaderNavigation';
import StyledButton from '../../../components/StyledButton/StyledButton';
import FormInput from '../../../components/FormInput/FormInput';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import StyledText from '../../../components/StyledText/StyledText';
import {useNavigation} from '@react-navigation/native';
import {SigninScreenProp} from '../../../navigation/types/AuthStackNavigatorParamList';

type SignInData = {
  email: string;
  password: string;
};

const SigninScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<SigninScreenProp>();

  const {control, handleSubmit, reset} = useForm<SignInData>();

  const onSignInPressed = async ({email, password}: SignInData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signIn(email, password);
    } catch (e) {
      Alert.alert('Oopps', (e as Error).message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, backgroundColor: 'white'}}>
        <HeaderNavigation
          title="Sign into your account"
          showBackButton={false}
        />
        <View style={{flex: 1, justifyContent: 'space-around'}}>
          <View style={styles.inputForm}>
            <FormInput
              name="email"
              labelText="Email"
              placeholder="Email"
              control={control}
              rules={{required: 'Email is required'}}
            />
            <FormInput
              name="password"
              labelText="Password"
              placeholder="Password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 3,
                  message: 'Password should be minimum 3 characters long',
                },
              }}
              secureTextEntry
            />
            <StyledText
              style={styles.forgotPasswordButton}
              onPress={() => {
                navigation.navigate('ForgotPasswordScreen');
                reset();
              }}>
              Forgot password?
            </StyledText>
          </View>
          <View>
            <StyledButton
              text={loading ? 'Signing in...' : 'Sign in'}
              onPress={handleSubmit(onSignInPressed)}
            />
            <StyledText
              style={styles.dontHaveAccountButton}
              onPress={() => {
                navigation.navigate('CreateAccountScreen');
                reset();
              }}>
              Don't have an account? Create one
            </StyledText>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SigninScreen;
