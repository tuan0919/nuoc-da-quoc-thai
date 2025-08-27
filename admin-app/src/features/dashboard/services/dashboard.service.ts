import { WeeklyRevenueChart, WeeklyStats } from "@/features/dashboard/types";
import { delay } from "@/shared/utils/delay";
import { WEEKLY_REVENUE, WEEKLY_STATS } from "@/features/dashboard/data/dashboard.mock";
import { ApiPageResponse } from "@/shared/types/common.dto";

export class DashboardService {
    static async getWeeklyRevenue() : Promise<ApiPageResponse<WeeklyRevenueChart[]>> {
        await delay(1000);
        return {
            result: WEEKLY_REVENUE,
            page: 1,
            total: 1,
            limit: 1,
            totalPages: 1,
        }
    }
    static async getWeeklyStats() : Promise<ApiPageResponse<WeeklyStats>> {
        await delay(1000);
        return {
            result: WEEKLY_STATS,
            page: 1,
            total: 1,
            limit: 1,
            totalPages: 1,
        }
    }
}