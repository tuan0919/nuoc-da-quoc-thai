import { AnimatePresence } from 'framer-motion'
import { Route, Routes } from 'react-router-dom'
import { HomePage, DashboardPage, LoginPage, NotFoundPage } from './pages'
import { RequireAuth } from './shared/components/RequiredAuth'
import { CustomerManagementPage } from './pages/CustomerManagementPage'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<RequireAuth />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="customers" element={<CustomerManagementPage />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App;