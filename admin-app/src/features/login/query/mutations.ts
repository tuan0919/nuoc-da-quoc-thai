import { useLogout, useRefreshToken, useSetRefreshToken, useSetToken, useSetUsername, useToken, useUsername } from "@/shared/stores/auth.store"
import { useReset } from "../stores/login.ui.store"
import { useMutation } from "@tanstack/react-query"
import { AuthService } from "../services/AuthService";

export const useLoginMutation = () => {
  const username = useUsername();
  const setToken = useSetToken()
  const setRefreshToken = useSetRefreshToken()
  const setAuthUsername = useSetUsername()
  const reset = useReset()
  return useMutation({
    mutationKey: ['login', username],
    mutationFn: (values: { username: string; password: string }) =>
      AuthService.login(values.username, values.password),
    onSuccess: ({ token, refreshToken }, variables) => {
      setToken(token)
      setRefreshToken(refreshToken)
      setAuthUsername(variables.username)
      reset()
    },
  })
}

export const useLogoutMutation = () => {
  const token = useToken();
  const refreshToken = useRefreshToken();
  const logout = useLogout();
  return useMutation({
    mutationKey: ['logout', token, refreshToken],
    mutationFn: () => {
      return AuthService.invalidateToken()
    },
    onSuccess: () => {
      logout();
    }
  })
}