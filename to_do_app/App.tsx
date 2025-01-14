import {Provider} from 'react-redux';
import {store , persistor} from './src/store/store';
import Main from './src/main';
import {SafeAreaView, Text, View} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SafeAreaView style={{flex: 1}}>
            <Main />
          </SafeAreaView>
        </PersistGate>
      </Provider>
  );
}
