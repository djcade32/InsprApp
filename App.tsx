import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen/CategoriesScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import QuoteScreen from './src/screens/QuoteScreen/QuoteScreen';
import QuotesScreen from './src/screens/QuotesScreen/QuotesScreen';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import {MenuProvider} from 'react-native-popup-menu';
import CreateQuoteScreen from './src/screens/CreateQuoteScreen/CreateQuoteScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MenuProvider>
        {/* <HomeScreen /> */}
        {/* <CategoriesScreen /> */}
        {/* <QuotesScreen title={'Motivation'} /> */}
        {/* <QuoteScreen /> */}
        {/* <CreateQuoteScreen /> */}
        <ProfileScreen />
      </MenuProvider>
    </SafeAreaView>
  );
};

export default App;
