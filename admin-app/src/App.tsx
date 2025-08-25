import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import { DashboardPage, HomePage, NotFoundPage } from "./pages";

// Feature Pages
import { CustomerListPage, CustomerDetailPage } from "./features/customer-management/pages";
import { EmployeeListPage } from "./features/employee-management/pages";
import { OrderListPage } from "./features/order-management/pages";

function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Home */}
          <Route index element={<HomePage />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<DashboardPage />} />

          {/* Customer Management */}
          <Route path="/customers" element={<CustomerListPage />} />
          <Route path="/customers/:id" element={<CustomerDetailPage />} />

          {/* Employee Management */}
          <Route path="/employees" element={<EmployeeListPage />} />

          {/* Order Management */}
          <Route path="/orders" element={<OrderListPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
