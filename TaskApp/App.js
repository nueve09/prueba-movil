import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext } from "./src/context/AuthContext";
import { AuthProvider } from "./src/context/AuthContext";

import LoginScreen from "./src/screens/Login";
import TasksListScreen from "./src/screens/Tasks";
import AddTaskScreen from "./src/screens/AddTask";
import EditTaskScreen from "./src/screens/EditTask";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Tasks" : "Login"}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tasks"
          component={TasksListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditTask"
          component={EditTaskScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
