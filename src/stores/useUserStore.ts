import { create } from 'zustand';

interface UserState {
  user: {
    name: string;
    isLoggedIn: boolean;
  };
  setUser: (user: UserState['user']) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: {
    name: '',
    isLoggedIn: false
  },
  setUser: (user) => set({ user })
}));
