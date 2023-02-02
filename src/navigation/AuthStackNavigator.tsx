import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateAccountScreen from '../screens/AuthScreens/CreateAccountScreen/CreateAccountScreen';
import MainAuthScreen from '../screens/AuthScreens/MainAuthScreen/MainAuthScreen';
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
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
