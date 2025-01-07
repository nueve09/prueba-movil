import {Provider} from 'react-redux';
import {store} from './src/Presentation/store/store';
import Main from './src/Presentation/main';
import {SafeAreaView, Text, View} from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Main />
      </SafeAreaView>
    </Provider>
  );
}
