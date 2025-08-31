import { queryOptions } from "@tanstack/react-query";
import { CustomerService } from "../services/customer.service";

export const getAllCustomersQueryOtpions = queryOptions({
    queryKey: ['customers'],
    queryFn: () => CustomerService.getAllCustomers(),
    staleTime: 5 * 60 * 1000
})