import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginScreen from "./src/screens/Login";
import TasksListScreen from "./src/screens/Tasks";
import AddTaskScreen from "./src/screens/AddTask";
import EditTaskScreen from "./src/screens/EditTask";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUserSession = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    checkUserSession();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Tasks" : "Login"}>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <LoginScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="Tasks" options={{ headerShown: false }}>
          {(props) => <TasksListScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="AddTask" options={{ headerShown: false }}>
          {(props) => <AddTaskScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name="EditTask" options={{ headerShown: false }}>
          {(props) => <EditTaskScreen {...props} setUser={setUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
