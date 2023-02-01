import React from 'react';
import {SafeAreaView} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

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
