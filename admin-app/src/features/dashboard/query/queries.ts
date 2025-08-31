import { queryOptions } from '@tanstack/react-query'
import { DashboardService } from '../services/dashboard.service'

export const getWeeklyStatsQueryOptions = queryOptions({
    queryKey: ['stats'],
    queryFn: DashboardService.getWeeklyStats,
  })

export const getWeeklyRevenueQueryOptions = queryOptions({
    queryKey: ['revenue'],
    queryFn: () => DashboardService.getWeeklyRevenue(),
  })