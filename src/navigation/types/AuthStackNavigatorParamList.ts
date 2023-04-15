import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type AuthStackNavigatorParamList = {
  MainAuthScreen: undefined;
  SigninScreen: undefined;
  CreateAccountScreen: undefined;
  ConfirmEmailScreen: {
    email: string;
  };
  ForgotPasswordScreen: undefined;
  NewPasswordScreen: undefined;
};

export type MainAuthScreenProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'MainAuthScreen'
>;
export type CreateAccountScreenProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'CreateAccountScreen'
>;
export type SigninScreenProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'SigninScreen'
>;
export type ConfirmEmailScreenProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'ConfirmEmailScreen'
>;
export type ForgotPasswordScreenProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'ForgotPasswordScreen'
>;
export type NewPasswordScreenProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'NewPasswordScreen'
>;

export type ConfirmEmailScreenRouteProp = RouteProp<
  AuthStackNavigatorParamList,
  'ConfirmEmailScreen'
>;
