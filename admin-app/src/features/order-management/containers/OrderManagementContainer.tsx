import { DailyStatsSection } from "../components/DailyStatsSection"
import { OrderSection } from "../components/OrderSection"

export const Container = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <DailyStatsSection />
            <OrderSection />
        </div>
    )
}