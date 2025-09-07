import { queryOptions } from '@tanstack/react-query'
import { OrderService } from '../services/order.service'

export const getAllOrdersQueryOptions = (d: Date) => queryOptions({
  queryKey: ['orders', d.toISOString()],
  queryFn: () => OrderService.getAllOrdersByDate(d),
  staleTime: 5 * 60 * 1000
})