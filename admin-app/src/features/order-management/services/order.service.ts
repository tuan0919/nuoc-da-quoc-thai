import { ApiPageResponse } from "@/shared/types/common.dto";
import { Order } from "@/shared/types/order";
import { delay } from "@/shared/utils/delay";
import { MOCK_ORDERS } from "../data/order.mock";
import { format, parse } from "date-fns";


export class OrderService {
    static async getAllOrders(): Promise<ApiPageResponse<Order[]>> {
        await delay(800);
        return {
            result: MOCK_ORDERS,
            page: 1,
            total: 1,
            limit: 1,
            totalPages: 1
        }
    }
    static async getAllOrdersByDate(d: Date): Promise<ApiPageResponse<Order[]>> {
        await delay(800);
        const targetDate = format(d, "yyyy-MM-dd");
        const orders = MOCK_ORDERS.filter(order => {
            const orderDate = format(parse(order.date, "yyyy-MM-dd", new Date()), "yyyy-MM-dd");
            return orderDate === targetDate;
        });
        return {
            result: orders,
            page: 1,
            total: orders.length,
            limit: orders.length,
            totalPages: 1
        };
    }
}