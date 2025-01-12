import {Text, View} from 'react-native';
import {HomeNavigation} from './view/navigation/StackNavigation';
import {useSelector} from 'react-redux';
import Login from './view/screens/Login';
import { Colors } from './view/theme/theme';
import { RootState } from './store/store';

export default function Main() {
  const { userId } = useSelector((state: RootState) => state.user);

  return (
    <View style={{flex: 1, backgroundColor:Colors.white}}>
      {userId !== null ? <HomeNavigation /> : <Login />}
    </View>
  );
}
