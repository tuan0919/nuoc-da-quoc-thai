import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthenticateStore = {
  username?: string;
  token?: string;
  refreshToken?: string;
  setUsername: (v?: string) => void;
  setToken: (v?: string) => void;
  setRefreshToken: (v?: string) => void;
  logout: () => void
};

const useAuthenticateStore = create<AuthenticateStore>()(
  persist(
    (set) => ({
      username: undefined,
      token: undefined,
      refreshToken: undefined,
      setUsername: (username) => set({ username }),
      setToken: (token) => set({ token }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      logout: () => set({ username: undefined, token: undefined, refreshToken: undefined })
    }),
    {
      name: 'auth-store'
    }
  )
);

// selectors
export const useUsername = () => useAuthenticateStore((s) => s.username);
export const useToken = () => useAuthenticateStore((s) => s.token);
export const useRefreshToken = () => useAuthenticateStore((s) => s.refreshToken);
export const useSetUsername = () => useAuthenticateStore((s) => s.setUsername);
export const useSetToken = () => useAuthenticateStore((s) => s.setToken);
export const useSetRefreshToken = () => useAuthenticateStore((s) => s.setRefreshToken);
export const useLogout = () => useAuthenticateStore((s) => s.logout);
