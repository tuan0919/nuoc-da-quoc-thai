import { ApiPageResponse } from "@/shared/types/common.dto";
import { Customer } from "@/shared/types/customer";
import { MOCK_CUSTOMERS } from "../data/customer.mock";
import { delay } from "@/shared/utils/delay";

export class CustomerService {
    static async getAllCustomers(): Promise<ApiPageResponse<Customer[]>> {
        delay(1000);
        return {
            result: MOCK_CUSTOMERS,
            page: 1,
            total: 1,
            limit: 1,
            totalPages: 1,
        }
    }
}