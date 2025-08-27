import { WeeklyStatsSection } from "../components/WeeklyStatsSection";
import { WeeklyChartSection } from "../components/WeeklyChartSection";
import { Navbar } from "../components/Navbar";
import { useWeeklyStats, useWeeklyRevenue } from "../query/queries";

function LoadingView({ text }: { text: string }) {
    return (
        <div className="flex-1 overflow-y-auto px-3 pt-4 pb-24 sm:px-4">
            <p className="text-gray-500">{text}</p>
        </div>
    );
}
function ErrorView() {
    return (
        <div className="flex-1 overflow-y-auto px-3 pt-4 pb-24 sm:px-4">
            <p className="text-red-500">Lỗi khi tải dữ liệu</p>
        </div>
    );
}

export const DashboardContainer = () => {
    const stats = useWeeklyStats()
    const revenue = useWeeklyRevenue()
    return (
        <div className="min-h-screen flex flex-col bg-[url('https://maxartkiller.com/website/gomobileux2/HTML/assets/img/bgshapes.png')]">
            <Navbar />
            <main
                className="flex-1 overflow-y-auto px-3 pt-4 pb-24 sm:px-4"
            >
                {stats.isLoading && <LoadingView text="Tải dữ liệu thống kê tuần" />}
                {stats.isError && <ErrorView />}
                {stats.isSuccess && stats.data && <WeeklyStatsSection stats={stats.data?.result} />}

                {revenue.isLoading && <LoadingView text="Tải dữ liệu biểu đồ doanh thu" />}
                {revenue.isError && <ErrorView />}
                {revenue.isSuccess && revenue.data && <WeeklyChartSection chartData={revenue.data?.result || []} />}
            </main>
        </div>
    );
};
