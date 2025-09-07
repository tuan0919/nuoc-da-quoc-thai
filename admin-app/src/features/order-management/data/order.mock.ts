import { Order } from "@/shared/types/order";

export const MOCK_ORDERS: Order[] = [
  {
    id: 1,
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    payStatus: "CHƯA THANH TOÁN",
    orderType: "ĐÁ BI",
    price: 12000,
    amount: 5,
    shipper: {
      id: 1,
      name: "Nguyễn Văn A",
    },
    customer: {
      id: 1,
      name: "Nguyễn Văn A",
      price1: 12000,
      price2: 25000,
    },
    deliveredTime: "2025-08-10",
    date: "2025-08-10",
  },
  {
    id: 2,
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    payStatus: "CHƯA THANH TOÁN",
    orderType: "ĐÁ BI",
    price: 12000,
    amount: 5,
    shipper: {
      id: 1,
      name: "Nguyễn Văn A",
    },
    customer: {
      id: 1,
      name: "Nguyễn Văn A",
      price1: 12000,
      price2: 25000,
    },
    deliveredTime: "2025-08-10",
    date: "2025-08-10",
  },
  {
    id: 3,
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    payStatus: "CHƯA THANH TOÁN",
    orderType: "ĐÁ BI",
    price: 12000,
    amount: 5,
    shipper: {
      id: 1,
      name: "Nguyễn Văn A",
    },
    customer: {
      id: 1,
      name: "Nguyễn Văn A",
      price1: 12000,
      price2: 25000,
    },
    deliveredTime: "2025-08-10",
    date: "2025-08-10",
  },
];
