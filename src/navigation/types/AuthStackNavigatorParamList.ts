import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type AuthStackNavigatorParamList = {
  MainAuthScreen: undefined;
  SigninScreen: undefined;
  CreateAccountScreen: undefined;
};

export type MainAuthScreenProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  'MainAuthScreen'
>;
