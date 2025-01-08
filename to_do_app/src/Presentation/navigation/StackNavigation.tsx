import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import TaskScreen from '../screens/Task';
import { NavigationContainer } from '@react-navigation/native';
import { Task } from '../../Domain/entities/Task';


export type RootStackParamList = {
  Home: undefined; 
  Task: { task?: Task }; 
};
const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () =>{
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Task" component={TaskScreen} />
    </Stack.Navigator>
  );
}

export const HomeNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  )
}
