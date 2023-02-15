import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  CategoriesScreen: undefined;
  QuoteScreen: {
    index: number;
  };
  QuotesScreen: {
    title: string;
  };
};

export type HomeScreenProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'HomeScreen'
>;
export type CategoriesScreenProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'CategoriesScreen'
>;
export type QuotesScreenItemProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'QuoteScreen'
>;

export type QuotesScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'QuotesScreen'
>;

export type QuoteScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'QuoteScreen'
>;
