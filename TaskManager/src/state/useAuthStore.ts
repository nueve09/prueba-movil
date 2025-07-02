import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { resetAllStores } from '../utils/resetStores';

interface AuthState {
  user: { email: string; userId: number } | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      login: async (email, password) => {
        const users = require('../assets/data/usuarios.json');
        const match = users.find(
          (u: any) => u.email === email && u.password === password,
        );
        if (match) {
          set({ user: { email: match.email, userId: match.userId } });
          return true;
        }
        return false;
      },
      logout: async () => {
        await resetAllStores();
      },
      reset: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({ user: state.user }),
    },
  ),
);
