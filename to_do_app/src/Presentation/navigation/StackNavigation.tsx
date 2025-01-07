import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Task from '../screens/Task';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const HomeStack = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Task} />
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