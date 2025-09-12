import { Route, Routes } from 'react-router-dom'
import { HomePage, DashboardPage, LoginPage, NotFoundPage } from './pages'
import { RequireAuth } from './shared/components/RequiredAuth'
import { CustomerManagementPage } from './pages/CustomerManagementPage'
import { OrderManagementPage } from './pages/OrderManagementPage'
import { CustomerEditPage } from './pages/CustomerEditPage'

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="orders" element={<OrderManagementPage />} />
        <Route path="customers" element={<CustomerManagementPage />} />
        <Route path="customers/:id/edit" element={<CustomerEditPage />} />
      </Route>

      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;