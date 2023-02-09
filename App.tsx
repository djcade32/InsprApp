import React from 'react';
import {SafeAreaView} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import Navigation from './src/navigation';
import {Amplify} from 'aws-amplify';
import awsconfig from './src/aws-exports';
import AuthContextProvider from './src/contexts/AuthContext';
import Client from './src/Apollo/Client';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MenuProvider>
        <AuthContextProvider>
          <Client>
            <Navigation />
          </Client>
        </AuthContextProvider>
      </MenuProvider>
    </SafeAreaView>
  );
};

export default App;
