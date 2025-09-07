import { DailyStatsSection } from "../components/DailyStatsSection"
import { OrderSection } from "../components/OrderSection"
import { ActionModal } from "../components/ActionModal"
import { ConfirmDialogProvider } from "@/shared/providers/ConfirmDialogProvider"

export const Container = () => {
    return (

        <div className="max-w-7xl mx-auto">
            <ConfirmDialogProvider />
            <DailyStatsSection />
            <OrderSection />
            <ActionModal />
        </div>
    )
}