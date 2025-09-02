export interface Order {
  id: number;
  address: string;
  payStatus: "CHƯA THANH TOÁN" | "ĐÃ THANH TOÁN";
  orderType: "ĐÁ BI" | "ĐÁ CÂY";
  price: number;
  amount: number;
  shipper: Shipper;
  customer: Customer;
  deliveredTime: string;
  date: string;
}

interface Shipper {
  id: number;
  name: string;
}

interface Customer {
  id: number;
  name: string;
  price1: number;
  price2: number;
}