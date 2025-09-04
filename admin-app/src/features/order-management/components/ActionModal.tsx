import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useIsActionModalOpen, useSelectedOrder, useSetIsActionModalOpen } from "../stores/order-management.ui.store"
import { EditButton } from "./EditButton"
import { DeleteButton } from "./DeleteButton"
import { ShowCustomerButton } from "./ShowCustomerButton"
import { ShowShipperButton } from "./ShowShipperButton"

export const ActionModal = () => {
    const [open, setOpen] = [
        useIsActionModalOpen(),
        useSetIsActionModalOpen(),
    ]
    const selectedOrder = useSelectedOrder();
    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thao tác</DialogTitle>
          </DialogHeader>
          <EditButton title={`Chỉnh sửa đơn hàng (#${selectedOrder?.id})`}/>
          <DeleteButton title={`Xóa đơn hàng (#${selectedOrder?.id})`}/>
          <ShowShipperButton title={`Xem người giao hàng (#${selectedOrder?.shipper.id})`}/>
          <ShowCustomerButton title={`Xem khách hàng (#${selectedOrder?.customer.id})`}/>
        </DialogContent>
      </Dialog>
    )
}