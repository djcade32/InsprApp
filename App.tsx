import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import colors from './src/theme/colors';

const App = () => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
