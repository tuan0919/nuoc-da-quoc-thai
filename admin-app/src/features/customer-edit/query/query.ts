import { queryOptions } from "@tanstack/react-query";
import { CustomerService } from "../services/customer.service";

export const getCustomerByIdQueryOptions = (id: number) => queryOptions({
    queryKey: ['customer', id],
    queryFn: () => CustomerService.getCustomerById(id),
})