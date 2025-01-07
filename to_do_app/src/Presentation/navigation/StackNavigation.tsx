import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Task from '../screens/Task';

const Stack = createStackNavigator();

export const HomeStack = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Task} />
    </Stack.Navigator>
  );
}