// confirmDialog.store.ts
import { create } from "zustand";

interface ConfirmDialogState {
  open: boolean;
  title?: string;
  message?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  openConfirm: (options: {
    title?: string;
    message?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm?: () => void;
    onClose?: () => void;
  }) => void;
  close: () => void;
}

const useConfirmDialogStore = create<ConfirmDialogState>((set) => ({
  open: false,
  title: "Xác nhận",
  confirmLabel: "Xác nhận",
  cancelLabel: "Hủy",
  openConfirm: (options) =>
    set({
      open: true,
      ...options,
    }),
  close: () =>
    set({
      open: false,
    }),
}));

export const useOpenConfirmDialog = () => useConfirmDialogStore((state) => state.openConfirm);
export const useCloseConfirmDialog = () => useConfirmDialogStore((state) => state.close);
