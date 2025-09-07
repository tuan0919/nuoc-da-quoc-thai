import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useIsActionModalOpen, useSelectedOrder, useSetIsActionModalOpen } from "../stores/order-management.ui.store"
import { EditButton } from "./EditButton"
import { DeleteButton } from "./DeleteButton"
import { ShowCustomerButton } from "./ShowCustomerButton"
import { ShowShipperButton } from "./ShowShipperButton"
import { useConfirmDialogStore } from "@/shared/stores/confirm-dialog.store";


export const ActionModal = () => {
  const [open, setOpen] = [
    useIsActionModalOpen(),
    useSetIsActionModalOpen(),
  ]
  const selectedOrder = useSelectedOrder();
  const openConfirm = useConfirmDialogStore((s) => s.openConfirm);
  const doOpenConfirmDialog = () =>
    openConfirm({
      title: "Xóa dữ liệu",
      message: "Bạn có chắc chắn muốn xóa?",
      onConfirm: () => {
        console.log("Đã xóa trong DB!");
      },
      onClose: () => {
        console.log("Người dùng bấm hủy.");
      },
    });
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thao tác</DialogTitle>
          </DialogHeader>
          <EditButton title={`Chỉnh sửa đơn hàng (#${selectedOrder?.id})`} />
          <DeleteButton onClick={() => {
            setOpen(false);
            doOpenConfirmDialog();
          }} title={`Xóa đơn hàng (#${selectedOrder?.id})`} />
          <ShowShipperButton title={`Xem người giao hàng (#${selectedOrder?.shipper.id})`} />
          <ShowCustomerButton title={`Xem khách hàng (#${selectedOrder?.customer.id})`} />
        </DialogContent>
      </Dialog>
    </>
  )
}