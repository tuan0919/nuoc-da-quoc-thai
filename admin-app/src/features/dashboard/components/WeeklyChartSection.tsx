import { WeeklyRevenueAreaChart } from "./WeeklyRevenueAreaChart";
import { WeeklyRevenueChart } from "../types";

export const WeeklyChartSection = ({
  chartData,
}: {
  chartData: WeeklyRevenueChart[];
}) => {
  return (
    <section
      className="mb-4"
    >
      <h2 className="mb-2 font-semibold text-gray-700 text-sm sm:text-base">
        Biểu đồ doanh thu theo tuần
      </h2>
      <div
        className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl shadow p-3"
      >
        <WeeklyRevenueAreaChart data={chartData} />
      </div>
    </section>
  );
};
