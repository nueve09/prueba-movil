import {Text, View} from 'react-native';
import {HomeNavigation} from './navigation/StackNavigation';
import {useSelector} from 'react-redux';
import {RootState} from './store/store';
import Login from './screens/Login';
import { Colors } from './theme/theme';

export default function Main() {
  const { userId } = useSelector((state: RootState) => state.user);

  return (
    <View style={{flex: 1, backgroundColor:Colors.white}}>
      {userId !== null ? <HomeNavigation /> : <Login />}
    </View>
  );
}
