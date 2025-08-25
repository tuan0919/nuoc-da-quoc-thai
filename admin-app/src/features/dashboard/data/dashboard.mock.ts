import { DailySummary, WeeklyRevenueChart, WeeklyStats } from "@/features/dashboard/types";

export const WEEKLY_REVENUE : WeeklyRevenueChart[] = [
  { dayOfWeek: "T2", revenue: 3_100_000 },
  { dayOfWeek: "T3", revenue: 3_500_000 },
  { dayOfWeek: "T4", revenue: 2_800_000 },
  { dayOfWeek: "T5", revenue: 3_900_000 },
  { dayOfWeek: "T6", revenue: 4_500_000 },
  { dayOfWeek: "T7", revenue: 4_100_000 },
  { dayOfWeek: "CN", revenue: 2_700_000 },
]


export const WEEKLY_STATS : WeeklyStats = {
  totalRevenue: 24_600_000,
  growthRate: 8.2,
  totalDaCay: 1_950,
  totalDaBi: 1_120,
};

export const DAILY_SUMMARY : DailySummary = {
  iceCube: 350,
  iceMini: 210,
  revenue: 3_850_000,
};
