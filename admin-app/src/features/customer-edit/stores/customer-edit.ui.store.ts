import { Customer } from '@/shared/types/customer';
import { create } from 'zustand';

type CustomerEditStore = {
    customer?: Customer,
    setCustomer: (customer: Customer) => void
};

export const useCustomerEditStore = create<CustomerEditStore>((set) => ({
    customer: undefined,
    setCustomer: (customer: Customer) => set({ customer })
}))