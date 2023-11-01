import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
