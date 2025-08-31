import { create } from 'zustand';

type CustomerMangementStore = {
    filterKeyWord: string,
    setFilterKeyword: (v: string) => void,
};



const useCustomerManagementStore = create<CustomerMangementStore>((set) => ({
    filterKeyWord: '',
    setFilterKeyword: (v: string) => set({ filterKeyWord: v }),
}))

export const useFilterKeyword = () => useCustomerManagementStore((s) => s.filterKeyWord);
export const useSetFilterKeyword = () => useCustomerManagementStore((s) => s.setFilterKeyword);