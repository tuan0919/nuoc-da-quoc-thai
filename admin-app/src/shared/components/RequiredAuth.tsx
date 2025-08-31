import { getValidateTokenQueryOptions } from '@/features/login/query/queries'
import { useQuery } from '@tanstack/react-query'
import { Navigate, Outlet } from 'react-router-dom'
import { useToken } from '../stores/auth.store'

export const RequireAuth = () => {
  const token = useToken()
  const validateQuery = useQuery(
    getValidateTokenQueryOptions(token)
  )
  
  if (validateQuery.isLoading) return <div>Loading...</div>
  if (!validateQuery.data) return <Navigate to="/login" replace />

  return <Outlet />
}
