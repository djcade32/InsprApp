import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../../components/HeaderNavigation/HeaderNavigation';
import {NewPasswordScreenProp} from '../../../navigation/types/AuthStackNavigatorParamList';
import {Auth} from 'aws-amplify';
import FormInput from '../../../components/FormInput/FormInput';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import StyledButton from '../../../components/StyledButton/StyledButton';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import {isIphone14ProMax} from '../../../helpers/helpers';
type NewPasswordType = {
  email: string;
  code: string;
  password: string;
};

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm<NewPasswordType>();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NewPasswordScreenProp>();

  const onSubmitPressed = async ({email, code, password}: NewPasswordType) => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.forgotPasswordSubmit(email, code, password);
      navigation.navigate('SigninScreen');
    } catch (e) {
      Alert.alert('Oopps', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: isIphone14ProMax() ? 50 : spacing.xlg,
      }}>
      <HeaderNavigation title="Reset your Password" showBackButton={false} />
      <View style={styles.content}>
        <View>
          <FormInput
            placeholder="Email"
            name="email"
            labelText="Email"
            control={control}
            rules={{required: 'email is required'}}
          />
          <FormInput
            placeholder="Code"
            name="code"
            labelText="Code"
            control={control}
            rules={{required: 'Code is required'}}
          />
          <FormInput
            placeholder="Enter your new password"
            name="password"
            labelText="Password"
            control={control}
            secureTextEntry
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be at least 8 characters long',
              },
            }}
          />
        </View>

        <View>
          <StyledButton
            text={loading ? 'Submiting' : 'Submit'}
            onPress={handleSubmit(onSubmitPressed)}
          />

          <StyledButton
            text="Back to Sign in"
            onPress={() => navigation.navigate('SigninScreen')}
            color={colors.red}
            containerStyle={{marginTop: spacing.md}}
          />
        </View>
      </View>
    </View>
  );
};

export default NewPasswordScreen;
