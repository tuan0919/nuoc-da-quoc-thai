import { Customer } from '@/shared/types/customer';
import { create } from 'zustand';

type CustomerEditStore = {
    customer?: Customer,
    setCustomer: (customer: Customer) => void
};

const useCustomerEditStore = create<CustomerEditStore>((set) => ({
    customer: undefined,
    setCustomer: (customer: Customer) => set({ customer })
}))

const useSetCustomer = () => useCustomerEditStore((s) => s.setCustomer);
export { useSetCustomer }