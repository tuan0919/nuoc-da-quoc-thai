import { ApiPageResponse } from "@/shared/types/common.dto";
import { Order } from "@/shared/types/order";
import { delay } from "@/shared/utils/delay";
import { MOCK_ORDERS } from "../data/order.mock";

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
}