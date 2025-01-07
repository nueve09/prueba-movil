import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigation} from './navigation/StackNavigation';
import {useSelector} from 'react-redux';
import {RootState} from './store/store';
import Login from './screens/Login';

export default function Main() {
  const { userId } = useSelector((state: RootState) => state.user);

  return (
    <View style={{flex: 1}}>
      {userId !== '' ? <HomeNavigation /> : <Login />}
    </View>
  );
}
