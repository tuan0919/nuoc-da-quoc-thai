import { queryOptions } from '@tanstack/react-query'
import { OrderService } from '../services/order.service'

export const getAllOrdersQueryOptions = () => queryOptions({
  queryKey: ['orders'],
  queryFn: OrderService.getAllOrders,
  staleTime: 5 * 60 * 1000
})