import { motion } from "framer-motion";
import { WeeklyChartSection } from "./WeeklyChartSection";
import { WeeklyStatsSection } from "./WeeklyStatsSection";
import { useWeeklyRevenue, useWeeklyStats } from "@/features/dashboard/api/queries";

export const View = () => {
  const { data : weeklyRevenue } = useWeeklyRevenue();
  const { data : weeklyStats } = useWeeklyStats();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto"
    >
      <WeeklyStatsSection stats={weeklyStats?.result} />
      <WeeklyChartSection chartData={weeklyRevenue?.result || []} />
    </motion.div>
  );
};
