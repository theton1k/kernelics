import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} />
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
