import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import StyledText from '../../../components/StyledText/StyledText';
import logo from '../../../../assets/images/inspr-logo.png';
import StyledButton from '../../../components/StyledButton/StyledButton';
import colors from '../../../theme/colors';
import spacing from '../../../theme/spacing';
import {useNavigation} from '@react-navigation/native';
import {MainAuthScreenProp} from '../../../navigation/types/AuthStackNavigatorParamList';
import fonts from '../../../theme/fonts';

const MainAuthScreen = () => {
  const navigation = useNavigation<MainAuthScreenProp>();
  return (
    <View style={styles.screen}>
      <View style={{alignItems: 'center'}}>
        <Image source={logo} style={styles.logo} />
        <StyledText style={styles.title}>Inspr</StyledText>
        <StyledText style={styles.subtitle}>
          The beacon of inspiration you didn’t know you needed
        </StyledText>
      </View>
      <View style={{}}>
        <StyledButton
          text="Sign in"
          containerStyle={{marginBottom: spacing.md}}
          onPress={() => navigation.navigate('SigninScreen')}
        />
        <StyledButton
          text="Create account"
          color={colors.red}
          onPress={() => navigation.navigate('CreateAccountScreen')}
        />
        <StyledText
          style={{
            textAlign: 'center',
            fontSize: fonts.size.sm,
            color: colors.grey,
            marginTop: spacing.md,
          }}>
          Forgot password?
        </StyledText>
      </View>
    </View>
  );
};

export default MainAuthScreen;
