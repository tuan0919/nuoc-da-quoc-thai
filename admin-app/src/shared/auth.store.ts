import { create } from 'zustand';
interface AuthenticateState {
    username?: string,
    token?: string,
    refreshToken?: string,
}

interface AuthenticateAction {
    setUsername: (v: string) => void;
    setToken: (v: string) => void;
    setRefreshToken: (v: string) => void;
}

type AuthenticateStore = AuthenticateState & AuthenticateAction;

const initialState: AuthenticateState = { username: undefined, token: undefined, refreshToken: undefined };

export const useAuthenticateStore = create<AuthenticateStore>((set) => ({
    ...initialState,
    setUsername: (username) => set({ username }),
    setToken: (token) => set({ token }),
    setRefreshToken: (refreshToken) => set({ refreshToken }),
}))