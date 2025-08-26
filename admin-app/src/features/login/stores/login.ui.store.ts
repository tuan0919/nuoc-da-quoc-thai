import { create } from 'zustand';
interface LoginUIState {
    username: string,
    password: string,
}

interface LoginActions {
    setUsername: (v: string) => void;
    setPassword: (v: string) => void;
    reset: () => void;
}

type LoginStore = LoginUIState & LoginActions;

const initialState: LoginUIState = { username: "", password: "" };

export const useLoginStore = create<LoginStore>((set) => ({
    ...initialState,
    setUsername: (username) => set({ username }),
    setPassword: (password) => set({ password }),
    reset: () => set(initialState),
}))