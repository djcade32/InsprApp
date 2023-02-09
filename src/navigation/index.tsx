import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from './types/RootNavigatorParamList';
import AuthStackNavigator from './AuthStackNavigator';
import {useAuthContext} from '../contexts/AuthContext';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  const {user, userId} = useAuthContext();

  let stackScreens = null;
  if (!user) {
    stackScreens = (
      <Stack.Screen
        name="AuthScreens"
        component={AuthStackNavigator}
        options={{headerShown: false}}
      />
    );
  } else {
    stackScreens = (
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {stackScreens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
