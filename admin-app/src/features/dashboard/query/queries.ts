import { useQuery } from '@tanstack/react-query'
import { DashboardService } from '../services/dashboard.service'

// Hook query lấy stats
export const useWeeklyStats = () => {
  return useQuery({
    queryKey: ['stats'],
    queryFn: DashboardService.getWeeklyStats,
  })
}

// Hook query lấy revenue phụ thuộc stats
export const useWeeklyRevenue = () => {
  const statsQuery = useWeeklyStats()

  return useQuery({
    queryKey: ['revenue'],
    queryFn: () => DashboardService.getWeeklyRevenue(),
    enabled: !!statsQuery,
  })
}