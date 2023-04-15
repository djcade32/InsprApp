import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {Quote} from '../../API';

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  CategoriesScreen: undefined;
  QuoteScreen: {
    index: number;
    title: string;
  };
  QuotesScreen: {
    title: string;
  };
  EditQuoteScreen: {
    quote: Quote | null;
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
  'QuotesScreen'
>;
export type EditQuoteScreenItemProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'EditQuoteScreen'
>;

export type QuotesScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'QuotesScreen'
>;
export type QuoteScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'QuoteScreen'
>;
export type EditQuoteScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'EditQuoteScreen'
>;
