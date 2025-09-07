import { Order } from '@/shared/types/order';
import { create } from 'zustand';

type OrderMangementStore = {
    selectedDate: Date,
    setSelectedDate: (v: Date) => void,
    selectedOrder?: Order,
    setSelectedOrder: (v: Order) => void,
    isActionModalOpen: boolean,
    setIsActionModalOpen: (v: boolean) => void,
    isConfirmModalOpen: boolean,
    setIsConfirmModalOpen: (v: boolean) => void,
};

const useOrderManagementStore = create<OrderMangementStore>((set) => ({
    selectedDate: new Date(),
    setSelectedDate: (v: Date) => set({ selectedDate: v }),
    selectedOrder: undefined,
    setSelectedOrder: (v: Order) => set({ selectedOrder: v }),
    isActionModalOpen: false,
    setIsActionModalOpen: (v: boolean) => set({ isActionModalOpen: v }),
    isConfirmModalOpen: false,
    setIsConfirmModalOpen: (v: boolean) => set({ isConfirmModalOpen: v }),
}))

export const useSelectedDate = () => useOrderManagementStore((s) => s.selectedDate);
export const useSetSelectedDate = () => useOrderManagementStore((s) => s.setSelectedDate);
export const useSelectedOrder = () => useOrderManagementStore((s) => s.selectedOrder);
export const useSetSelectedOrder = () => useOrderManagementStore((s) => s.setSelectedOrder);
export const useIsActionModalOpen = () => useOrderManagementStore((s) => s.isActionModalOpen);
export const useSetIsActionModalOpen = () => useOrderManagementStore((s) => s.setIsActionModalOpen);
export const useIsConfirmModalOpen = () => useOrderManagementStore((s) => s.isConfirmModalOpen);
export const useSetIsConfirmModalOpen = () => useOrderManagementStore((s) => s.setIsConfirmModalOpen);