import { create } from 'zustand';

type LoginStore = {
    username?: string,
    password?: string,
    setUsername: (v: string) => void;
    setPassword: (v: string) => void;
    reset: () => void;
};

const useLoginStore = create<LoginStore>((set) => ({
    username: undefined,
    password: undefined,
    setUsername: (v: string) => set({ username: v }),
    setPassword: (v: string) => set({ password: v }),
    reset: () => set({ username: undefined, password: undefined }),
}))

export const useUsername = () => useLoginStore((s) => s.username);
export const usePassword = () => useLoginStore((s) => s.password);
export const useSetUsername = () => useLoginStore((s) => s.setUsername);
export const useSetPassword = () => useLoginStore((s) => s.setPassword);
export const useReset = () => useLoginStore((s) => s.reset);