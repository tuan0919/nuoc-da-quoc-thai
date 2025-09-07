import React, { ReactNode } from "react";
import { FiCheckCircle } from "react-icons/fi";

export interface ConfirmDialogProps {
  open: boolean;
  title?: string;
  message?: string;
  onClose: () => void;
  onConfirm: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title = "Xác nhận",
  message,
  onClose,
  onConfirm,
  cancelLabel = "Hủy",
  confirmLabel = "Xác nhận",
  icon,
  children,
}) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]"
      onClick={onClose}
    >
      <div
        className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full shadow-2xl border border-pink-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-6">
          <div
            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            {icon ?? <FiCheckCircle className="text-green-500 text-2xl" />}
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          {message && <p className="text-gray-600">{message}</p>}
        </div>

        {children}

        <div className="flex space-x-3 mt-4">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            {cancelLabel}
          </button>
          <button
            onClick={() => {
              onConfirm();
            }}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
};
