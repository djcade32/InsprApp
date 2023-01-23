import React from 'react';
import {SafeAreaView} from 'react-native';
import CategoriesScreen from './src/screens/CategoriesScreen/CategoriesScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const App = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <CategoriesScreen />
    </SafeAreaView>
  );
};

export default App;
