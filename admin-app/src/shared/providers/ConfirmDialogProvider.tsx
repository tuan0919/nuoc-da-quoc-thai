import { ConfirmDialog } from "../components/ConfirmDialog";
import { useConfirmDialogStore } from "../stores/confirm-dialog.store";

export const ConfirmDialogProvider = () => {
  const open = useConfirmDialogStore((s) => s.open);
  const title = useConfirmDialogStore((s) => s.title);
  const message = useConfirmDialogStore((s) => s.message);
  const confirmLabel = useConfirmDialogStore((s) => s.confirmLabel);
  const cancelLabel = useConfirmDialogStore((s) => s.cancelLabel);
  const onConfirm = useConfirmDialogStore((s) => s.onConfirm);
  const onClose = useConfirmDialogStore((s) => s.onClose);
  const close = useConfirmDialogStore((s) => s.close);

  return (
    <ConfirmDialog
      open={open}
      title={title}
      message={message}
      confirmLabel={confirmLabel}
      cancelLabel={cancelLabel}
      onConfirm={() => {
        onConfirm?.(); // gọi callback custom
        close();       // rồi đóng dialog
      }}
      onClose={() => {
        onClose?.();   // gọi callback custom nếu có
        close();
      }}
    />
  );
};