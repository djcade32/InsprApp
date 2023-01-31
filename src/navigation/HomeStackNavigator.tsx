import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import QuoteScreen from '../screens/QuoteScreen/QuoteScreen';
import QuotesScreen from '../screens/QuotesScreen/QuotesScreen';
import {HomeStackNavigatorParamList} from './types/HomeStackNavigatorParamList';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen name="QuoteScreen" component={QuoteScreen} />
      <Stack.Screen name="QuotesScreen" component={QuotesScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
