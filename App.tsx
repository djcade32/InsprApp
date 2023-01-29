import React from 'react';
import {SafeAreaView} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </SafeAreaView>
  );
};

export default App;
