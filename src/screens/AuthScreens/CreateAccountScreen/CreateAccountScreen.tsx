import {View, Keyboard, Alert, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../../components/HeaderNavigation/HeaderNavigation';
import StyledButton from '../../../components/StyledButton/StyledButton';
import colors from '../../../theme/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FormInput from '../../../components/FormInput/FormInput';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import {CreateAccountScreenProp} from '../../../navigation/types/AuthStackNavigatorParamList';
import StyledText from '../../../components/StyledText/StyledText';
import bgImage from '../../../../assets/images/bgs/3-green-circles.png';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type CreateAccountData = {
  email: string;
  password: string;
  passwordRepeat: string;
  firstName: string;
  lastName: string;
};

const CreateAccountScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const {control, handleSubmit, reset, watch} = useForm<CreateAccountData>();
  const pwd = watch('password');
  const navigation = useNavigation<CreateAccountScreenProp>();

  Keyboard.addListener('keyboardDidShow', () => {
    setIsKeyboardShown(true);
  });

  Keyboard.addListener('keyboardDidHide', () => {
    setIsKeyboardShown(false);
  });

  const onCreateAccountPressed = async ({
    email,
    password,
    firstName,
    lastName,
  }: CreateAccountData) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {name: `${firstName} ${lastName}`, email},
      });
      reset();
      navigation.navigate('ConfirmEmailScreen', {email});
    } catch (e) {
      Alert.alert('Oopps', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <View
        style={{
          flex: 1,
        }}>
        <HeaderNavigation title="Create an account" showBackButton={false} />
        <KeyboardAwareScrollView
          contentContainerStyle={{justifyContent: 'space-around', flex: 1}}
          scrollEnabled={isKeyboardShown}>
          <View style={styles.inputForm}>
            <FormInput
              name="email"
              labelText="Email"
              placeholder="Email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
              }}
            />
            <FormInput
              name="password"
              labelText="Password"
              placeholder="Password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password should be at least 8 characters long',
                },
              }}
              secureTextEntry
            />
            <FormInput
              name="passwordRepeat"
              labelText="Repeat password"
              control={control}
              placeholder="Repeat password"
              secureTextEntry
              rules={{
                validate: (value: string) =>
                  value === pwd || 'Password does not match',
              }}
            />
            <FormInput
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
          </View>
          <View>
            <StyledButton
              text={loading ? 'Creating account...' : 'Create account'}
              onPress={handleSubmit(onCreateAccountPressed)}
              color={colors.red}
            />
            <StyledText
              style={styles.haveAccountButton}
              onPress={() => {
                navigation.navigate('SigninScreen');
                reset();
              }}>
              Already have an account? Sign in
            </StyledText>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ImageBackground>
  );
};

export default CreateAccountScreen;
