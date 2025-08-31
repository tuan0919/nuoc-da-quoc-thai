import { AuthService } from "../services/AuthService";
import { queryOptions } from "@tanstack/react-query";

export const getValidateTokenQueryOptions = (token?: string) => queryOptions({
    queryKey: ["validateToken", token],
    queryFn: () => AuthService.validateToken(token),
    staleTime: 5 * 60 * 1000,
    retry: 0,
    enabled: !!token,
})