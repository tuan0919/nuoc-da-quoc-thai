import { useValidateTokenQuery } from '@/features/login/query/queries'
import { Navigate, Outlet } from 'react-router-dom'

export const RequireAuth = () => {
  const validateQuery = useValidateTokenQuery()
  
  if (validateQuery.isLoading) return <div>Loading...</div>
  if (!validateQuery.data) return <Navigate to="/login" replace />

  return <Outlet />
}
