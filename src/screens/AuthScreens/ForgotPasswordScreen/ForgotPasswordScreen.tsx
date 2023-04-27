import {View, Text, Alert, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import HeaderNavigation from '../../../components/HeaderNavigation/HeaderNavigation';
import {Auth} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import {ForgotPasswordScreenProp} from '../../../navigation/types/AuthStackNavigatorParamList';
import StyledTextInput from '../../../components/StyledTextInput/StyledTextInput';
import spacing from '../../../theme/spacing';
import StyledButton from '../../../components/StyledButton/StyledButton';
import bgImage from '../../../../assets/images/bgs/3-green-circles.png';
import {isIphone14ProMax} from '../../../helpers/helpers';

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
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={[
        styles.bgImage,
        isIphone14ProMax() && [styles.bgImage, {paddingTop: 50}],
      ]}>
      <View style={{flex: 1}}>
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
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;
