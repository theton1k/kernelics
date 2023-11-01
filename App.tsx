import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
