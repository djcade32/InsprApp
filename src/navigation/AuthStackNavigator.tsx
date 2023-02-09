import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ConfirmEmailScreen from '../screens/AuthScreens/ConfirmEmailScreen/ConfirmEmailScreen';
import CreateAccountScreen from '../screens/AuthScreens/CreateAccountScreen/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/AuthScreens/ForgotPasswordScreen/ForgotPasswordScreen';
import MainAuthScreen from '../screens/AuthScreens/MainAuthScreen/MainAuthScreen';
import NewPasswordScreen from '../screens/AuthScreens/NewPasswordScreen/NewPasswordScreen';
import SigninScreen from '../screens/AuthScreens/SigninScreen/SigninScreen';
import {AuthStackNavigatorParamList} from './types/AuthStackNavigatorParamList';

const Stack = createNativeStackNavigator<AuthStackNavigatorParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainAuthScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainAuthScreen" component={MainAuthScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
      />
      <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
