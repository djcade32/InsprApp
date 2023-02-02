import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import {RootNavigatorParamList} from './types/RootNavigatorParamList';
import AuthStackNavigator from './AuthStackNavigator';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthScreens" component={AuthStackNavigator} />
        {/* <Stack.Screen name="Home" component={BottomTabNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
