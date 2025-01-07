import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Task from '../screens/Task';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const HomeStack = () =>{
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Task" component={Task} />
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