import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { DashboardService } from '../services/dashboard.service';

// Query Keys
export const dashboardKeys = {
  all: ['dashboard'] as const,
  stats: () => [...dashboardKeys.all, 'stats'] as const,
  weeklyRevenue: () => [...dashboardKeys.all, 'weekly-revenue'] as const,
  recentOrders: () => [...dashboardKeys.all, 'recent-orders'] as const,
  monthlyStats: (month: string) => [...dashboardKeys.all, 'monthly-stats', month] as const,
};

// Weekly Revenue Query
export const useWeeklyRevenue = () => {
  return useQuery({
    queryKey: dashboardKeys.weeklyRevenue(),
    queryFn: DashboardService.getWeeklyRevenue,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useWeeklyStats = () => {
  return useQuery({
    queryKey: dashboardKeys.stats(),
    queryFn: DashboardService.getWeeklyStats,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};