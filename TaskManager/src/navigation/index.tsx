import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '../state/useAuthStore';
import { ErrorBoundary } from '../components/ErrorBoundary';
import Loader from '../components/Loader';

const LoginScreen = React.lazy(() => import('../features/login/LoginScreen'));
const TasksScreen = React.lazy(() => import('../features/tasks/TasksScreen'));
const AddTaskScreen = React.lazy(
  () => import('../features/tasks/AddTaskScreen'),
);
const EditTaskScreen = React.lazy(
  () => import('../features/tasks/EditTaskScreen'),
);

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!user ? (
              <Stack.Screen name="Login" component={LoginScreen} />
            ) : (
              <>
                <Stack.Screen name="Tasks" component={TasksScreen} />
                <Stack.Screen name="AddTask" component={AddTaskScreen} />
                <Stack.Screen name="EditTask" component={EditTaskScreen} />
              </>
            )}
          </Stack.Navigator>
        </Suspense>
      </ErrorBoundary>
    </NavigationContainer>
  );
};
