import { FaTruckFast } from "react-icons/fa6";
import { FiFilter, FiLoader } from "react-icons/fi";
import { Pagination } from "@/shared/components/Pagination";
import { Order } from "@/shared/types/order";
import { CalendarChooser } from "@/shared/components/CalendarChooser";
import { OrderCard } from "./OrderCard";
import { useSelectedDate, useSelectedOrder, useSetIsActionModalOpen, useSetSelectedDate, useSetSelectedOrder } from "../stores/order-management.ui.store";
import { useQuery } from "@tanstack/react-query";
import { getAllOrdersQueryOptions } from "../query/queries";
import { ConfirmDialog } from "@/shared/components/ConfirmDialog";
import { useState } from "react";

export function OrderSection() {
  const [
    selectedDate,
    setSelectedDate,
    selectedOrder,
    setSelectedOrder,
    setIsActionModalOpen
  ] = [
      useSelectedDate(),
      useSetSelectedDate(),
      useSelectedOrder(),
      useSetSelectedOrder(),
      useSetIsActionModalOpen(),
    ]
  const { data, isLoading } = useQuery({
    ...getAllOrdersQueryOptions(selectedDate),
  });
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  return (
    <>
      <section className="px-2 sm:px-4 mb-4">
        <div className="flex flex-wrap items-center justify-between mb-2">
          <h2 className="font-semibold text-gray-700 text-sm sm:text-base mb-3">
            Quản lý đơn giao đá (69)
          </h2>
          <div className="flex items-center gap-2">
            <div className="z-20">
              <CalendarChooser
                date={selectedDate}
                onChange={(setSelectedDate)}
              />
            </div>
            <button
              onClick={undefined}
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-white shadow-sm hover:shadow-md border border-gray-100 transition-shadow"
            >
              <FiFilter className="text-blue-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Orders List Section */}
      <section className="px-2 sm:px-4 mb-4">
        <div className="bg-white/70 p-3 rounded-2xl shadow-inner min-h-[120px] relative">
          {isLoading && (
            <div
              className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl z-10 flex flex-col items-center justify-center"
            >
              <FiLoader className="w-8 h-8 text-blue-500 animate-spin mb-3" />
              <p className="text-gray-600 text-sm">
                Đang cập nhật dữ liệu...
              </p>
            </div>
          )}

          <div>
            {data?.total === 0 ? (
              <div className="text-center py-8">
                <FaTruckFast className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                <p className="text-gray-500">Không có đơn hàng nào.</p>
              </div>
            ) : (
              (data?.result || []).map((order: Order) => (
                <OrderCard
                  key={order.id}
                  order={order}
                  isSelected={selectedOrder?.id === order.id}
                  onSelect={(order) => {
                    setSelectedOrder(order);
                    setIsActionModalOpen(true);
                  }}
                />
              ))
            )}
          </div>

          {/* Pagination */}
          {(data?.totalPages || 0) > 1 && (
            <div className="mt-4">
              <Pagination
                currentPage={0}
                totalPages={5}
                onChange={() => { }}
              />
            </div>
          )}
        </div>
      </section>
      <ConfirmDialog
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={() => setIsConfirmModalOpen(false)}
        open={isConfirmModalOpen}
      />
    </>
  );
}
