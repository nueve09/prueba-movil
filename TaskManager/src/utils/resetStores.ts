import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthStore } from '../state/useAuthStore';
import { useTaskStore } from '../state/useTaskStore';
import { queryClient } from '../services/queryClient';

export async function resetAllStores() {
  try {
    await AsyncStorage.removeItem('auth-storage');
  } catch (e) {
    console.warn('Error clearing auth storage', e);
  }

  useAuthStore.getState().reset();
  useTaskStore.getState().reset();

  queryClient.invalidateQueries();
}
