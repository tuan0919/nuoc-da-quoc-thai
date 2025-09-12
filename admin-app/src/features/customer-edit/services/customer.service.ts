import { Customer } from "@/shared/types/customer";
import { delay } from "@/shared/utils/delay";
import { MOCK_CUSTOMERS } from "../data/customer.mock";

export class CustomerService {
    static async getCustomerById(id: number): Promise<Customer> {
        delay(1000);
        return MOCK_CUSTOMERS.find(customer => customer.customerId === id)!;
    }
}