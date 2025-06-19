import React from 'react';
import { AppNavigator } from './src/navigation';
import { ReactQueryProvider } from './src/app/ReactQueryProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => (
  <SafeAreaProvider>
    <ReactQueryProvider>
      <StatusBar barStyle="dark-content" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppNavigator />
      </GestureHandlerRootView>
    </ReactQueryProvider>
  </SafeAreaProvider>
);

export default App;
