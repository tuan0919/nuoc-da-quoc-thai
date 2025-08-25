interface WeeklyRevenueChart {
  dayOfWeek: string;
  revenue: number;
}

interface WeeklyStats {
  totalRevenue: number;
  growthRate: number;
  totalDaCay: number;
  totalDaBi: number;
}

interface DailySummary {
  iceCube: number;
  iceMini: number;
  revenue: number;
}

interface AdminDashboardData {
  weeklyRevenueChart: WeeklyRevenueChart[];
  weeklyStats: WeeklyStats;
  dailySummary: DailySummary;
}

export type {
  WeeklyRevenueChart,
  WeeklyStats,
  DailySummary,
  AdminDashboardData,
}
