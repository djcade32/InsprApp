import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../../components/HeaderNavigation/HeaderNavigation';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import {ForgotPasswordScreenProp} from '../../../navigation/types/AuthStackNavigatorParamList';
import StyledTextInput from '../../../components/StyledTextInput/StyledTextInput';
import spacing from '../../../theme/spacing';
import StyledButton from '../../../components/StyledButton/StyledButton';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<ForgotPasswordScreenProp>();
  const [loading, setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const onSendPressed = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      //   const response = await Auth.forgotPassword(emailInput);
      //   Alert.alert(
      //     'Check your email',
      //     `The code has been sent to ${response.CodeDeliveryDetails.Destination}`,
      //   );
      navigation.navigate('NewPasswordScreen');
    } catch (e) {
      Alert.alert('Oopps', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderNavigation title="Reset your password" />
      <View
        style={{
          paddingHorizontal: spacing.sm,
          flex: 3 / 4,
          justifyContent: 'space-around',
        }}>
        <StyledTextInput
          labelText="Email"
          placeholder="Enter your email"
          value={emailInput}
          onChangeText={setEmailInput}
        />
        <StyledButton
          containerStyle={{marginTop: spacing.md}}
          disabled={!emailInput}
          text={loading ? 'Sending...' : 'Send'}
          onPress={onSendPressed}
        />
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
