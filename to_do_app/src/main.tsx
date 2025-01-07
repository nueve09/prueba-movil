import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigation} from './Presentation/navigation/StackNavigation';
import {useSelector} from 'react-redux';
import {RootState} from './Presentation/store/store';
import Login from './Presentation/screens/Login';

export default function Main() {
  const {userId} = useSelector((state: RootState) => state.user);

  return (
    <View style={{flex: 1}}>
      {userId !== '' ? <HomeNavigation /> : <Login />}
    </View>
  );
}
