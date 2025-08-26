import { create } from 'zustand';
interface LoginUIState {
    username: string,
    password: string,
    token?: string,
    refreshToken?: string,
}

interface LoginActions {
    setUsername: (v: string) => void;
    setPassword: (v: string) => void;
    setToken: (v: string) => void;
    setRefreshToken: (v: string) => void;
    reset: () => void;
}

type LoginStore = LoginUIState & LoginActions;

const initialState: LoginUIState = { username: "", password: "", token: undefined, refreshToken: undefined };

export const useLoginStore = create<LoginStore>((set) => ({
    ...initialState,
    setUsername: (username) => set({ username }),
    setPassword: (password) => set({ password }),
    reset: () => set(initialState),
    setToken: (token) => set({ token }),
    setRefreshToken: (refreshToken) => set({ refreshToken }),
}))