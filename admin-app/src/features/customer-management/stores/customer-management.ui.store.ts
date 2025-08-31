import { Customer } from '@/shared/types/customer';
import { create } from 'zustand';

type CustomerMangementStore = {
    filterKeyWord?: string,
    filteredCustomers?: Customer[],
    setFilteredCustomers: (v: Customer[]) => void,
    setFilterKeyword: (v: string) => void,
    doFilterByKeyword: (list: Customer[]) => void,
};

const normalize = (s?: string) =>
  (s ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, ""); // bỏ dấu tiếng Việt để tìm “ko dấu”

const useCustomerManagementStore = create<CustomerMangementStore>((set, get) => ({
    filterKeyWord: undefined,
    setFilterKeyword: (v: string) => set({ filterKeyWord: v }),
    setFilteredCustomers: (list: Customer[]) => set({
        filteredCustomers: list
    }),
    doFilterByKeyword: (customers) => {
        const kw = normalize(get().filterKeyWord);
        if (!kw) {
            set({ filteredCustomers: customers });
            return;
        }
        const matcher = (c : Customer) => c.customerName.toLowerCase().includes(kw);
        set({ filteredCustomers: customers.filter(matcher) });
    }
}))

export const useFilterKeyword = () => useCustomerManagementStore((s) => s.filterKeyWord);
export const useSetFilterKeyword = () => useCustomerManagementStore((s) => s.setFilterKeyword);
export const useFilteredCustomers = () => useCustomerManagementStore((s) => s.filteredCustomers);
export const useSetFilteredCustomers = () => useCustomerManagementStore((s) => s.setFilteredCustomers);
export const useDoFilterByKeyword = () => useCustomerManagementStore((s) => s.doFilterByKeyword);