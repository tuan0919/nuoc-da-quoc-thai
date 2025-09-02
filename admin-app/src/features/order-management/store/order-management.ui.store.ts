import { Order } from '@/shared/types/order';
import { create } from 'zustand';

type OrderMangementStore = {
    selectedDate: Date,
    setSelectedDate: (v: Date) => void,
    selectedOrder?: Order,
    setSelectedOrder: (v: Order) => void
};

const useOrderManagementStore = create<OrderMangementStore>((set) => ({
    selectedDate: new Date(),
    setSelectedDate: (v: Date) => set({ selectedDate: v }),
    selectedOrder: undefined,
    setSelectedOrder: (v: Order) => set({ selectedOrder: v })
}))

export const useSelectedDate = () => useOrderManagementStore((s) => s.selectedDate);
export const useSetSelectedDate = () => useOrderManagementStore((s) => s.setSelectedDate);
export const useSelectedOrder = () => useOrderManagementStore((s) => s.selectedOrder);
export const useSetSelectedOrder = () => useOrderManagementStore((s) => s.setSelectedOrder);