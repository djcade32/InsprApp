import React from 'react';
import {SafeAreaView} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen/CategoriesScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import QuotesScreen from './src/screens/QuotesScreen/QuotesScreen';

const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <CategoriesScreen /> */}
      <QuotesScreen title={'Motivation'} />
    </SafeAreaView>
  );
};

export default App;
