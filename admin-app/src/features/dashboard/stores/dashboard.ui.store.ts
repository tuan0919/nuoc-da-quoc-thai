import { create } from 'zustand';
interface DashboardUIState {

}

interface DashboardActions {

}

// Combined Store Type
type DashboardStore = DashboardUIState & DashboardActions;


// Create Dashboard Store
export const useDashboardStore = create<DashboardStore>((set) => ({

}))